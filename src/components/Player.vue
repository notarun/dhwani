<script lang="ts">
import { defineComponent } from 'vue'

import { usePlayerStore } from '../stores/player'

export default defineComponent({
  data() {
    return {
      playerStore: usePlayerStore(),
    }
  },
})
</script>

<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--11-col">
      <div class="mdl-typography--title">{{ playerStore.nowPlaying.title }}</div>
      <div>{{ playerStore.nowPlaying.uploaderName }}</div>
    </div>
    <div class="mdl-cell mdl-cell--1-col">
      <span class="material-icons clickable">favorite_border</span>
    </div>
  </div>

  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--1-col">2:36</div>
    <div class="mdl-cell mdl-cell--10-col">
      <input class="mdl-slider mdl-js-slider" type="range" min="0" max="100" value="25" tabindex="0">
    </div>
    <div class="mdl-cell mdl-cell--1-col">3:36</div>
  </div>

  <div class="text-center">
    <span class="material-icons md-36 clickable">skip_previous</span>
    <span class="material-icons md-48 mx-1 clickable">play_circle</span>
    <span class="material-icons md-36 clickable">skip_next</span>
  </div>
</template>

<style scoped>
.material-icons.md-36 {
  font-size: 36px;
}

.material-icons.md-48 {
  font-size: 48px;
}

.mx-1 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.text-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.material-icons.clickable {
  cursor: pointer;
}
</style>
