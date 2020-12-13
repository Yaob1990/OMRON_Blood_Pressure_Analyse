<template>
  <button class="w-36 h-10 btn ">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "newButton"
});
</script>

<style scoped lang="scss">
@layer components {
  .btn {
    @apply py-2 px-4 font-semibold rounded-lg shadow-md outline-none text-white bg-blue-400;
  }
}
</style>
