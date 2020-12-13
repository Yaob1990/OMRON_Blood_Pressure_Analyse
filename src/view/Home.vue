<template>
  <div class="relative h-96">
    <img class="w-full h-96 object-cover absolute" src="../assets/bg.jpg" />
    <div class="w-full h-96 bg-black absolute opacity-40"></div>
    <div
      class="w-full h-96 absolute flex flex-col column  justify-center items-center"
    >
      <div class="font text-white text-center text-4xl  font-bold">
        欧姆龙血压计数据(CSV)解析工具
      </div>
      <Button class="mt-8" @click="upload">开始解析数据</Button>
    </div>
  </div>
  <History :csvData="csvData" v-if="csvData.length"></History>
  <Guide></Guide>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Button from "@/components/Button.vue";
import Guide from "@/components/Guide.vue";
import { useGetCSV } from "@/use/useGetCSV";
import History from "@/components/History.vue";

export default defineComponent({
  name: "Home",
  components: { History, Guide, Button },
  setup() {
    const uploadFile = ref("");
    const { csvData } = useGetCSV(uploadFile);

    const upload = () => {
      const fileInput: any = document.createElement("input");
      fileInput.type = "file";
      fileInput.click();
      fileInput.onchange = () => {
        // 检查文件是否选择:
        if (!fileInput.value) {
          return;
        }
        // 获取File引用:
        const file = fileInput.files[0];
        // 获取File信息:
        if (file.type !== "text/csv") {
          alert("文件无效，请重新上传");
          return;
        }
        uploadFile.value = file;
      };
    };

    // watch(csvData, () => {
    //   console.log("csvData 数据更新");
    //   console.log(csvData.value);
    // });

    return { upload, csvData };
  }
});
</script>

<style scoped lang="scss"></style>
