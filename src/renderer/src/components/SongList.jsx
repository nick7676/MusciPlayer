import { useEffect, useState } from 'react'

function SongList() {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const result = await window.electronAPI.FolderReader()
        if (Array.isArray(result)) setSongs(result)
      } catch (e) {
        console.error(e)
      }
    }

    fetchSongs()

    const intervalId = setInterval(fetchSongs, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <div>
        {songs.length > 0 ? (
          songs.map((song, index) => (
            <div key={index} style={{ padding: '5px 0', borderBottom: '1px solid #eee' }}>
              {song}
            </div>
          ))
        ) : (
          <div>Nessuna canzone trovata</div>
        )}
      </div>
    </>
  )
}

export default SongList
