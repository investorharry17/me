<script setup>
	import { RouterView } from "vue-router"
  import "./style.css"
</script>
<template>  
	<RouterView /> 
</template>



<style>
@font-face {
  font-family: Font;
  src: url(./fonts/Gilroy-ExtraBold.otf);
}
@font-face {
  font-family: FontL;
  src: url(./fonts/Gilroy-Light.otf);
}


* {
	font-family: Font , sans-serif;
	padding: 0;
	margin: 0;
	list-style-type: none;
	text-decoration: none;
}
#app {
	
} 
</style>
