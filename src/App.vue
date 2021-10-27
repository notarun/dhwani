<script setup lang="ts">
import ThumbnailRibbon from './components/ThumbnailRibbon.vue'
import Player from './components/Player.vue'
</script>

<template>
   <div class="app-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
     <ThumbnailRibbon />
     <main class="mdl-layout__content">
       <div class="app-container mdl-grid">
         <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
         <div class="app-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
           <Player />
         </div>
       </div>
     </main>
    </div>
</template>

<style scoped>
main {
  margin-top: -35vh;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.app-container {
  max-width: 1600px;
  width: calc(100% - 16px);
  margin: 0 auto;
}

.app-layout.is-small-screen .app-content {
  padding: 40px 28px;
}

.app-content {
  border-radius: 2px;
  padding: 10px 56px;
  margin-bottom: 80px;
}
</style>
