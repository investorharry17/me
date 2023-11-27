<script setup>
	// import menuBar from "../../assets/Vector.svg"
	import { ref } from "vue"
	import { RouterLink } from "vue-router"
	const menuDisplayed = ref(false)
	const openMenu = () => {
		console.log("YES")
		menuDisplayed.value = true
	}
	const closeMenu = () => {
		menuDisplayed.value = false
	}
</script>

<template>
	<header>
		<RouterLink to="/" class="logo">
			<span class="white">get</span>
			<span class="other">linked</span>
		</RouterLink>
		<svg class="open-menu" @click="openMenu" width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z" fill="white"/>
</svg>
	<nav :class="menuDisplayed ? 'show': ''">
		<ul>
			<li @click="closeMenu" class="cancel"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
 </li>
			<li> <a href=""> Timeline</a> </li>
			<li> <a href=""> Overview</a> </li>
			<li> <a href=""> FAQs</a> </li>
			<li> <a href=""> Content</a> </li>
			<li> <button>Register</button></li>
		</ul>
	</nav>
	</header>
</template>

<style scoped>
	header {
		display: flex;
		justify-content: space-between;
		height: 60px;
		align-items: center;
		border-bottom: 1px solid gray;
		padding: 0px 20px;
		position: relative;
		background: #150e29e3;
		z-index: 300;
		backdrop-filter: blur(6px) saturate(0.5);
		position: sticky;
		top: -1px;

	}
	header .logo {
		font-weight: 700;
		line-height: 18.45px;
		font-style: 15px;
		user-select: none;
		cursor: pointer;
		font-family: Clash Display ;

	}
	header .logo .white {
		color: #fff
	}
	header .logo .other {
		color: #D434FE
	}
	nav {
		position: absolute;
		width: 100%;
		background: #150e29;
		transition: .3s;
		left: -100%;
		top: 0;
		z-index: 4
	}
	nav.show {
		left: 0
	}
	nav ul {
		padding: 30px 40px;
	}
	nav ul li.cancel {
		position: absolute;
		right: 20px;
		top: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		border-radius: 50%;
	}
	nav ul li {
		padding: 10px 0
	}
	nav ul li svg {
		height: 30px;
		widows: 30px;
	}
	nav ul li button {
		height: 50px;
		width: 160px;
		outline: none;
		border: none;
		border-radius: 4px;
		background: linear-gradient(90deg, rgba(144,58,255,1) 0%, rgba(212,52,254,1) 50%, rgba(254,52,185,1) 100%);
	}
	@media only screen and (min-width: 720px) {
		header {
			height: 70px;
		}
		.open-menu {
			display: none;
		}
		nav {
			position: relative;
			left: 0;
			top: 0;
			padding: 0;
			background: unset;
			width: fit-content;
		}
		nav ul {
			display: flex;
			align-items: center;
			padding: 0;
		}
		nav ul li {
			margin: 0px 10px;
		}
		nav ul li.cancel {
			display: none;
		}
		nav ul li button {
			height: 40px;
			width: 130px;
			margin-left: 40px;
		}

	}
</style>