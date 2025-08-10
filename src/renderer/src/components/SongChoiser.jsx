import SongList from './SongList'

function SongChoiser({ onSelectSong }) {
  return <SongList onSelect={onSelectSong} />
}

export default SongChoiser
