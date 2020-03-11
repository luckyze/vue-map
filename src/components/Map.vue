<template>
	<div class='map'>
		<div id="chart1" style="width: 98%;height: 600px;"></div>
	</div>
</template>

<script>
	import echarts from 'echarts'
	import jsonp from 'jsonp'
	import 'echarts/map/js/china.js'
	
	let option ={
		title:{
			text:"疫情地图",
			x:'center',
			textStyle:{
				color:'deeppink'
			}
		},
		tooltip:{
			tigger:'item',
			formatter:'地区：{b}<br/>确诊：{c}'
		},
		series:[
			{
				type:'map',
				map:'china',
				// data:[
				// 	{name:'北京',value:200},
				// 	{name:'湖北',value:20000},
				// ],
				label:{
					show:true,
					color:'red',
					fontSize:12
				},
				zoom:1.2,
				itemStyle:{
					borderColor:'blue',
				},
				emphasis:{
					label:{
						color:'#fff',
						fontSize:12
					},
					itemStyle:{
						areaColor:'green',
					}
				}
			}
		],
		visualMap:{
			// min:800,
			// max:50000,
			// text:['High','Low'],
			// realtime:false,
			// calculable:true,
			// inRange:{
			// 	color:['lightblue','yellow','orangered']
			// }
			
			type:'piecewise',
			show:true,
			pieces:[
				{min:10000},
				{min:1000,max:9999},
				{min:100,max:999},
				{min:10,max:99},
				{min:1,max:9},
				{value:0},	
			],
			inRange:{
				color:['#fff','#ffaa85','#660208'],
			},
			itemWidth:10,
			itemHeight:10
		},
	};
	export default {
		name:"map",
		data(){
			return{
				myChart:''
			}
		},
		mounted(){
			this.getData();
			this.myChart = echarts.init(document.getElementById('chart1'));
			
		},
		methods:{
			getData(){
				jsonp('http://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427',(err,data)=>{
					console.log(data);
					var lists = data.data.list.map(item=>{return{name:item.name,value:item.value}});
					console.log(lists);
					option.series[0].data = lists;
					this.myChart.setOption(option);
				})
			}
		},
	}
</script>

<style scoped>

</style>
