import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  onDownloadProgress: (callback) =>
    ipcRenderer.on('download-progress', (event, value) => callback(value)),

  downloadAudio: (url) => ipcRenderer.invoke('downloader', url),

  FolderReader: () => ipcRenderer.invoke('read-all-folder')
})
