import { reactive } from 'petite-vue'

export default reactive({
  search: {
    query: '',
    results: [],
  },
  player: {
    now: {
      src: '',
    }
  }
})
