<template>
	<div class='linedata'>
		<div id="chart2" style="width:90%;height: 500px;"></div>
	</div>
</template>

<script>
	
	import echarts from 'echarts'
	import jsonp from 'jsonp'
	let option = {
		title:{
			text:"全国疫情趋势"
		},
		tooltip:{
			trigger:'axis'
		},
		legend:{
			data:['现存确诊','现存疑似']
		},
		grid:{
			left:'20%',
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
			// data:["03.01","03.02"]
		},
		yAxis: {
			type:'value',
			
		},
		series:[
			{
				name:"现存确诊",
				type:'line',
				smooth:true,
				// data1:[1000,1586,4578,700,569]
			},
			{
				name:"现存疑似",
				type:'line',
				smooth:true,
				// data2:[680,750,842,555,234]
			}
		]
		
	};
	
	export default {
		name:"linedata",
		data(){
			return{
				myChart:''
			}
		},
		mounted(){
			this.getData();
			this.myChart = echarts.init(document.getElementById('chart2'));
		},
		methods:{
			getData(){
				jsonp('http://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427',(err,data)=>{
					console.log(data.data.historylist);
					var linedatas = data.data.historylist.map(item=>{return{data:item.date,econNum:item.cn_econNum,susNum:item.cn_susNum}});
					
					// var datelists = data.data.historylist.map(item=>{return{data:item.date}});
					// var econNums = data.data.historylist.map(item=>{return{data:item.cn_econNum}});
					// var heconNums = data.data.historylist.map(item=>{return{data:item.cn_heconNum}});
					
					console.log(linedatas.slice(0,30));
					
					// var dlists = datelists.slice(0,10);
					// var econs = econNums.slice(0,10);
					// var hecons = heconNums.slice(0,10);
					
			
					// option.xAxis.data = dlists;
					// option.series[0].data = econs;
					// option.series[1].data = hecons;
					
					
					// console.log(option.xAxis.data);
				// ,econNum:item.cn_econNum,heconNum:item.cn_heconNum
				var dlists = [];
				var econs = [];
				var suss = [];
					for(var i = 0; i<linedatas.length;i++){
						
						dlists.push(linedatas[i].data);
						econs.push(linedatas[i].econNum);
						suss.push(linedatas[i].susNum);
						
					// console.log(dlists);
					}
					option.xAxis.data = dlists;
				option.series[0].data = econs;
				option.series[1].data = suss;
				this.myChart.setOption(option);
				})
			}
		},
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
