import { createApp } from 'petite-vue'
import Vlitejs from 'vlitejs'
import Piped from './services/piped'
import './style.css'
import defaultThumbnail from '../vinyl.svg'

const piped = Piped('https://pipedapi.kavin.rocks')

createApp({
  vlite: new Vlitejs('#player'),

  searchQuery: '',
  searchResults: [],

  nowPlaying: {
    src: '',
    title: '',
    thumbnail: defaultThumbnail,
  },

  async search(e: SubmitEvent) {
    e.preventDefault()
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
  },
}).mount('#root')
