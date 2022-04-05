<script setup lang="ts">
import { Delta } from "@vueup/vue-quill";
import { onMounted, ref } from "vue";
import { MClipboard } from "./plugins/Clipboard";
import { ImageDrop } from "./plugins/ImageDrop";

const editor = ref<any>(null);

const modules = [
  {
    name: "ImageDrop",
    module: ImageDrop,
    options: {},
  },
  {
    name: "Clipboard",
    module: MClipboard,
    options: {},
  },
];

onMounted(() => {
  editor.value?.getQuill().clipboard.addMatcher("img", function () {
    return new Delta();
  });
});

function handleSubmit() {
  console.log("content", editor.value.getHTML());
  console.log("images", editor.value?.getQuill().images);
}
</script>

<template>
  <main>
    <QuillEditor ref="editor" :modules="modules" toolbar="full" />
    <button v-on:click="handleSubmit">Submit</button>
  </main>
</template>
