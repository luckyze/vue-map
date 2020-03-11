<template>
 <div id="app">
   <div class="nav">
     <router-link to="/mapdata">疫情地图</router-link> | 
     <router-link to="/linedata">疫情动态</router-link>
   </div>
 
   <router-view></router-view>
 </div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
#app{
	width: 800px;
	height: 700px;
	margin: 50px auto;
	border: 1px pink solid;
	background-color:aliceblue;
}
.nav{
	width: 300px;
	height: 100px;
	text-align: center;
	margin: 0 auto;
}
.nav a{
	color: #000;
	font-size: 20px;
	font-weight: bold;
	padding-top: 20px;
	text-decoration: none;
	display: inline-block;
	width: 100px;
	text-align: center;
}
.nav a.router-link-exact-active{
	color: #42B983;
}
</style>
