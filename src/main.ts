import { createApp } from 'petite-vue'
import Piped from './services/piped'
import './style.css'

const player = (<HTMLAudioElement>document.getElementById('player'))
const piped = Piped('https://pipedapi.kavin.rocks')

createApp({
  searchQuery: '',
  searchResults: [],

  nowPlaying: {
    src: '',
    title: '',
    thumbnail: 'https://doodleipsum.com/700x525/abstract?bg=825DEB&i=533d71e7733d1ad05ecdc25051eed663',
  },

  async search(e: SubmitEvent) {
    e.preventDefault();
    const data = await piped.search(this.searchQuery)
    this.searchResults = data.items
  },

  async playAudio(videoUrl: string) {
    const info = await piped.streams(videoUrl.replace('/watch?v=', ''))

    this.nowPlaying = {
      src: info.audioStreams[0].url,
      title: info.title,
      thumbnail: info.thumbnailUrl,
    }

    try {
      player.src = this.nowPlaying.src
      await player.play()
    } catch (e) {
      console.error(e)
    }
  },
}).mount('#root')
