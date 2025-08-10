import { AudioPause, AudioRemove } from '../utils/audioManager'

let audio = null

async function playAudio(song) {
  if (!song) return
  if (audio) {
    audio.pause()
    audio = null
  }

  audio = new Audio(`file://${encodeURIComponent(song)}`)
  audio.play()
}

const ButtonStart = ({ onClick }) => {
  return (
    <button
      type="button"
      className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="white"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
        />
      </svg>
    </button>
  )
}

const ButtonPause = ({ onClick }) => {
  return (
    <button
      type="button"
      className="text-blue-700 border border-white-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="white"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7v10m-6 0V7" />
      </svg>
    </button>
  )
}

const ButtonStop = ({ onClick }) => {
  return (
    <button
      type="button"
      className="text-blue-700 border border-white hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="white"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0"
          d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
        <g transform="scale(1.5) translate(-4 -4)">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"
          />
        </g>
      </svg>
    </button>
  )
}

function PlayerBar({ selectedSong }) {
  return (
    <>
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        <ButtonPause onClick={AudioPause} />

        <ButtonStop onClick={AudioRemove} />
      </div>

      <div>
        <button onClick={() => playAudio(selectedSong)}>Play</button>
      </div>
    </>
  )
}

export default PlayerBar
