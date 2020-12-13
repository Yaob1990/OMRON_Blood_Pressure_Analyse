<template>
  <!--  <div>-->
  <!--  <div class="flex md:text-red-300">-->
  <div
    class="flex flex-col gap-5 my-4 max-w-screen-lg items-center mx-auto sm:flex-row"
  >
    <div class="card">
      <img src="../assets/feature1.png" />
      <div class="mt-4">安全</div>
      <div class="mt-4 text-center">数据只保存在您的浏览器中</div>
    </div>
    <div class="card">
      <img src="../assets/feature2.png" />
      <div class="mt-4">易用</div>
      <div class="mt-4 text-center">只需要从本地选取数据，即可分析</div>
    </div>
    <div class="card">
      <img src="../assets/feature3.png" />
      <div class="mt-4 ">数据转换</div>
      <div class="mt-4 text-center">提供多种数据导出方式，方便您统计分析</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Guide"
});
</script>

<style scoped lang="scss">
.card {
  @apply sm:w-1/3 flex flex-col items-center content-center;
  @apply border p-2.5 shadow hover:shadow-lg;
  img {
    @apply w-2/3;
  }
}
</style>
