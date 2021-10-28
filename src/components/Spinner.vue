<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
})
</script>

<template>
  <div class="mdl-spinner mdl-js-spinner" :class="{ 'is-active': active }"></div>
</template>
