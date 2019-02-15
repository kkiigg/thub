<template>
	<div id="app">
		<p class="zred"> i am {{pageType}} hahaha</p>
		<img src="./vs.png" alt="">
		pic is here !
		<router-link to="/page1">page1</router-link>
		<router-link to="/page2">page2</router-link>
		<router-link to="/tem1">tem1</router-link>
		
		<router-view></router-view>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				pageType:'homepage'
			}
		}
	}
</script>
<style scoped lang="less">
	p{
		line-height:30px;
	}
	img{
		width:30px;
	}
	div{
		img{
			border:1px solid red;
			padding:10px;
		}
	}
</style>