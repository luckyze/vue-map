<template>
	<div class='linedata'>
		<div id="chart2" style="width:90%;height: 500px;"></div>
	</div>
</template>

<script>
	
	import echarts from 'echarts'
	export default {
		name:"linedata",
		data(){
			return{
				
			}
		},
		mounted(){
			this.init();
		},
		methods:{
			init(){
				var myChart = echarts.init(document.getElementById('chart2'));
				
				var option = {
					title:{
						text:"全国疫情趋势"
					},
					tooltip:{
						trigger:'axis'
					},
					legend:{
						data:['新增确诊','新增疑似']
					},
					grid:{
						left:'15%',
						right:'2%',
						bottom:'8%',
						containLable:true
					},
					toolbox: {
						feature:{
							saveAsImage:{}
						}
					},
					xAxis: {
						type:'category',
						data:['3.01','3.02','3.03','3.04','3.05']
					},
					yAxis: {
						type:'value'
					},
					series:[
						{
							name:"新增确诊",
							type:'line',
							smooth:true,
							data:[1000,1586,4578,700,569]
						},
						{
							name:"新增疑似",
							type:'line',
							smooth:true,
							data:[680,750,842,555,234]
						}
					]
					
				};
				myChart.setOption(option);
		
			}
		}
	}
</script>

<style scoped>
	.linedata{
		width: 800px;
	}
	#chart2{
		display: inline-block;
		margin: 0 auto;
	}
</style>
