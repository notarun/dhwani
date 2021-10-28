<script lang="ts">
import { defineComponent } from 'vue'

import PlayableList from '../PlayableList.vue'
import Piped from '../../services/piped'
import Spinner from '../Spinner.vue'

export default defineComponent({
  components: {
    Spinner,
    PlayableList,
  },
  data() {
    return {
      query: '',
      piped: Piped('https://pipedapi.kavin.rocks/'),
      fetching: false,
      searchResponse: [],
    }
  },
  methods: {
    async search() {
      try {
        this.fetching = true
        this.searchResponse = (await this.piped.search(this.query)).items
      } catch (e) {
        throw e
      } finally {
        this.fetching = false
      }
    },
  },
})
</script>

<template>
  <form @submit.prevent="search">
    <div class="mdl-textfield mdl-js-textfield is-full-width">
      <input class="mdl-textfield__input" type="text" id="search" v-model="query">
      <label class="mdl-textfield__label" for="search">Search</label>
    </div>
  </form>
  <div v-if="fetching" style="text-align: center">
    <Spinner :active="fetching"/>
  </div>
  <PlayableList v-else :list="searchResponse" />
</template>

<style scoped>
.is-full-width {
  width: 100% !important;
}
</style>
