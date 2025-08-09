import { app, shell, BrowserWindow, ipcMain } from 'electron'
import path, { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import fs from 'fs'
import { promises as fsPromises } from 'fs'

const ffmpegPath = require('ffmpeg-static')
const youtubeDl = require('youtube-dl-exec')

let mainWindow
let customDir

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    console.log('test 1')
    console.log('is.dev: ', is.dev)
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  customDir = path.join(app.getPath('userData'), 'MusicPlayerDownloads')

  if (!fs.existsSync(customDir)) {
    fs.mkdirSync(customDir, { recursive: true })
    console.log('Cartella creata in:', customDir)
  }

  global.sharedDownloadPath = customDir

  ipcMain.handle('downloader', async (event, videoUrl) => {
    const outputPath = path.join(global.sharedDownloadPath, '%(title)s.%(ext)s')

    try {
      await youtubeDl(videoUrl, {
        extractAudio: true,
        audioFormat: 'mp3',
        output: outputPath,
        ffmpegLocation: ffmpegPath
      })
      console.log("i'm downloading,i'm butakuummmm")
      return { success: true, message: 'Download completato' }
    } catch (err) {
      return { success: false, message: err.message }
    }
  })

  ipcMain.handle('read-all-folder', async () => {
    return await fsPromises.readdir(global.sharedDownloadPath)
  })

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
