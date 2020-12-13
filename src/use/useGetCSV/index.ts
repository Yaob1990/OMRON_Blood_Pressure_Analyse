import { ref, Ref, watch } from "vue";
import Papa from "papaparse";

export function useGetCSV(data: Ref<any>) {
  const inputData = ref(data);
  const result = ref([]);

  watch(inputData, async value => {
    try {
      Papa.parse(inputData.value, {
        complete: function(results: any) {
          const data = results.data.slice(1, -1);
          const data2 = data.map((item: any[]) => {
            return {
              date: item[0],
              diastolicPressure: item[2],
              systolicPressure: item[3],
              pulse: item[3]
            };
          });
          console.log(result.value);
          result.value = data2;
        }
      });
    } catch (error) {}
  });

  return { csvData: result };
}
