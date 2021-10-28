<script lang="ts">
import { defineComponent, PropType } from 'vue'

import Playable from '../interfaces/playable'
import { usePlayerStore } from '../stores/player'
import Piped from '../services/piped'

export default defineComponent({
  props: {
    list: {
      type: Object as PropType<Array<Playable>>,
      required: true,
    },
  },
  data() {
    return {
      piped: Piped('https://pipedapi.kavin.rocks/'),
      playerStore: usePlayerStore(),
    }
  },
  methods: {
    async play(url: string) {
      const videoId = url.replace('/watch?v=', '')
      const toPlay = await this.piped.streams(videoId)
      this.playerStore.$patch({ nowPlaying: toPlay })
    },
  },
})
</script>

<template>
  <ul class="mdl-list mt-0">
    <template v-for="item in list" :key="item.url">
      <li v-if="item.title" class="mdl-list__item mdl-list__item--two-line" >
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-avatar">music_note</i>
          <span>{{ item.title }}</span>
          <span class="mdl-list__item-sub-title">{{ item.uploaderName }}</span>
        </span>
        <span class="mdl-list__item-secondary-content">
          <a class="mdl-list__item-secondary-action" @click.prevent="play(item.url)">
            <i class="material-icons">play_circle_outline</i>
          </a>
        </span>
      </li>
    </template>
  </ul>
</template>

<style scoped>
.mt-0 {
  margin-top: 0;
}

</style>
