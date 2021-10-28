import { defineStore } from 'pinia'

import Playable from '../interfaces/playable'

export const usePlayerStore = defineStore('player', {
  state: () => {
    return {
      nowPlaying: {
        url: '',
        title: '',
        thumbnail: '',
        uploaderName: '',
        duration: 0,
      } as Playable,
    }
  },
})
