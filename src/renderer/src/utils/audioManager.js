let audio = null

export function SongChoised(song) {
  console.log(song)

  return song
}
/*
export function AudioPlay() {
  if (!audio) {
    audio = new Audio('songs/bird.mp3')
  }
  audio.play()
}
*/
export function AudioPause() {
  if (audio) {
    audio.pause()
  }
}

export function AudioResume() {
  if (audio) {
    audio.play()
  }
}

export function AudioRemove() {
  if (audio) {
    audio.pause()
    audio = null
  }
}
