import { useState } from 'react'

const InputArea = () => {
  const [url, setUrl] = useState('')
  const [message, setMessage] = useState('')
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    if (!url) return alert('link non valido')

    setIsDownloading(true)
    setMessage('Download in corso...')

    try {
      const result = await window.electronAPI.downloadAudio(url)
      setMessage(result.message || 'Download Completato!')
    } catch (error) {
      setMessage('Errore durante il download.')
      console.error(error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <>
      <div className="mb-6">
        <label
          htmlFor="default-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          <p className="font-mono text-2xl text-gray-800 px-0 text-left">Inserisci il link</p>
        </label>

        <div className="flex">
          <input
            type="text"
            id="default-input"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg w-[300px] p-2.5"
          />
          <button
            type="button"
            onClick={handleDownload}
            disabled={isDownloading}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-r-full text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isDownloading ? 'Sto scaricando...' : 'Scarica!'}
          </button>
        </div>

        {message && <p>{message}</p>}
      </div>
    </>
  )
}

export default InputArea
