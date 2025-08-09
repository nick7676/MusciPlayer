export async function ReadAllFolder() {
  try {
    const result = await window.electronAPI.FolderReader()
    if (result) {
      console.log(result)
    } else {
      console.error('Errore: risultato vuoto')
    }
  } catch (error) {
    console.error('Errore IPC:', error)
  }
}
