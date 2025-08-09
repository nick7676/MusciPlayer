import SongList from './SongList'

function SongChoiser() {
  return (
    <>
      <div>
        <p>Scegli la canzone WIP</p>
        <div
          id="dropdownHover"
          className="z-10 h-48 overflow-auto bg-white divide-y divide-gray-100 rounded-lg shadow w-64 blue"
        >
          <SongList></SongList>
        </div>
      </div>
    </>
  )
}
export default SongChoiser
