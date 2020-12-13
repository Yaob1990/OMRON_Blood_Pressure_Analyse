<template>
  <div class="h-96 mt-5">
    <ECharts ref="chart" :option="option" class="chart" />
  </div>
</template>

<script lang="ts">
import { defineComponent, h, ref, watch } from "vue";
import * as echarts from "echarts";
import { createComponent } from "echarts-for-vue";
import dayjs from "dayjs";

interface Result {
  date: string;
  diastolicPressure: string;
  systolicPressure: string;
  pulse: string;
}

export default defineComponent({
  name: "History",
  components: {
    ECharts: createComponent({ echarts, h }) // 作为组件使用
  },
  props: ["csvData"],
  setup(props) {
    const option = ref({});
    option.value = {
      title: {
        text: "血压趋势图",
        x: "center"
      },
      xAxis: {
        type: "time",
        axisLabel: {
          formatter: function(value: any) {
            return dayjs(value).format("MM/DD");
          }
        }
      },
      tooltip: {
        trigger: "axis"
      },
      yAxis: {
        type: "value",
        min: function(value: any) {
          return value.min - 20;
        },
        max: function(value: any) {
          return value.max + 20;
        }
      },
      visualMap: {
        top: 10,
        right: 10,
        pieces: [
          {
            gt: 80,
            lte: 130,
            color: "#6d00cc"
          },
          {
            gt: 130,
            color: "#ff0000"
          }
        ],
        outOfRange: {
          color: "#6d00cc"
        }
      },
      series: [
        {
          data: [],
          type: "line"
        }
      ]
    };

    watch(
      () => props.csvData,
      csvData => {
        debugger;
        console.log(csvData);
        const systolicPressure = csvData.map((item: Result) => {
          return [item.date, item.systolicPressure];
          // console.log(item);
        });
        const diastolicPressure = csvData.map((item: Result) => {
          return [item.date, item.diastolicPressure];
        });
        // @ts-ignore
        option.value.series = [
          {
            type: "line",
            data: systolicPressure
          },
          { type: "line", data: diastolicPressure }
        ];
      },
      { immediate: true }
    );

    return { option };
  }
});
</script>

<style scoped lang="scss"></style>
