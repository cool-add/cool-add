<template>
  <div ref="chartRef" style="width: 700px; height: 350px"></div>
</template>

<script>
import { defineComponent, onMounted, ref, watch, onUnmounted } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'BarChart',
  props: {
    xAxisData: {
      type: Array,
      required: true
    },
    seriesData: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const chartRef = ref(null)
    let myChart = null

    const initChart = () => {
      myChart = echarts.init(chartRef.value)
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'category',
          data: props.xAxisData
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '访客数',
            type: 'bar',
            data: props.seriesData,
            itemStyle: {
              color: '#267dff'
            }
          }
        ]
      }
      myChart.setOption(option)
    }

    onMounted(() => {
      initChart()
    })

    watch([() => props.xAxisData, () => props.seriesData], () => {
      if (myChart) {
        myChart.setOption({
          xAxis: {
            data: props.xAxisData
          },
          series: [
            {
              name: '访客数',
              data: props.seriesData
            }
          ]
        })
      }
    })

    onUnmounted(() => {
      if (myChart) {
        myChart.dispose()
      }
    })

    return {
      chartRef
    }
  }
})
</script>
