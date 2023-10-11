<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

const msg: Ref<string> = ref('Hello world!')
</script>

<template>
  {{ msg }}
</template>