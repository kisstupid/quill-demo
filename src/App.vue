<script setup lang="ts">
import { ImageDrop } from './plugins/ImageDrop'

const modules = {
  name: 'ImageDrop',
  module: ImageDrop,
  options: {}
}
</script>

<template>
  <main>
    <QuillEditor :modules="modules" toolbar="full" />
  </main>
</template>
