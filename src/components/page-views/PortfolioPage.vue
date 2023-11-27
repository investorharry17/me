<script setup>
	import { Swiper, SwiperSlide } from "swiper/vue"
	import { Autoplay  } from "swiper/modules"
	import "swiper/css"
	import { ref } from "vue"
	import ProfileImage from "../../assets/me.jpg"

	const SWIPER = ref(null)
	const activeIndex = ref(3)

	function onSwiper (swiper) { 
		SWIPER.value = swiper 
		SWIPER.value.slideTo(2)
	}
	function onSlideChange(swiper) { 
		activeIndex.value = swiper.activeIndex 
	}
	const skillsArray = [
		{ 
			name : "HTML",
			svg :	'<svg width="35" height="35" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"/><path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"/><path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"/></svg>'
		},		
		{ 
			name : "CSS",
			svg :	'<svg width="35" height="35" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/> </svg>'
		},	
		{ 
			name : "Javascript",
			svg :'<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" preserveAspectRatio="xMinYMin meet" viewBox="0 0 256 256" id="javascript"><path fill="#F7DF1E" d="M0 0h256v256H0V0z"></path><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"></path></svg>'
		},	
		{ 
			name : "Vue",
			svg :	'<svg width="35" height="35" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2 4L16 28L30 4H24.5L16 18.5L7.5 4H2Z" fill="#41B883"/> <path d="M7.5 4L16 18.5L24.5 4H19.5L16.0653 10.0126L12.5 4H7.5Z" fill="#35495E"/> </svg>'
		},		{ 
			name : "React",
			svg :	'<svg width="35" height="35" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"/> </svg>'
		},
		{
			name  : "Firebase",
			svg : '<svg  width="35" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="firebase"><path fill="#FFA000" d="m14.714 8.669-2.4 2.235-2.228-4.496 1.151-2.585c.291-.516.767-.522 1.058 0l2.419 4.846z"></path><path fill="#F57F17" d="m12.314 10.903-8.979 8.351 6.751-12.846 2.228 4.495z"></path><path fill="#FFCA28" d="M17.346 5.251c.43-.41.873-.271.985.31l2.334 13.58-7.742 4.648c-.272.152-.992.211-.992.211s-.655-.08-.906-.218l-7.689-4.528 14.01-14.003z"></path><path fill="#FFA000" d="m10.086 6.408-6.75 12.846L6.344.477c.113-.582.443-.641.74-.126l3.002 6.057z"></path></svg>'
		},
		{ 
			name : "Node JS",
			svg :	'<svg width="35" height="35" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17.1725 2.29872C16.4627 1.89953 15.5373 1.90132 14.8269 2.29872C11.2689 4.26227 7.71082 6.22641 4.15216 8.18906C3.45969 8.55335 2.99264 9.29698 3.00009 10.0688V21.9328C2.99509 22.7197 3.48622 23.4705 4.19655 23.8298C5.21871 24.3736 6.2118 24.9726 7.25244 25.4802C8.45451 26.0709 9.95843 26.2015 11.1752 25.5855C12.1629 25.075 12.6016 23.9395 12.6003 22.896C12.6083 18.9806 12.6016 15.0651 12.6034 11.1496C12.6269 10.9756 12.4962 10.7896 12.3064 10.7938C11.8517 10.7866 11.3964 10.7896 10.9417 10.7926C10.7699 10.7764 10.6022 10.9191 10.6152 11.0918C10.6091 14.982 10.6164 18.8734 10.6115 22.7642C10.6214 23.3024 10.2578 23.8196 9.73913 24.0014C8.5412 24.4213 5.12198 22.2012 5.12198 22.2012C4.9965 22.1431 4.91682 22.007 4.92912 21.8718C4.92912 17.9576 4.92973 14.0433 4.92912 10.1297C4.91187 9.97191 5.00912 9.8298 5.15402 9.76538C8.70033 7.8134 12.2448 5.85654 15.7911 3.90336C15.9143 3.82115 16.086 3.8214 16.2089 3.90396C19.7552 5.85654 23.3003 7.81161 26.8472 9.76368C26.9926 9.828 27.0857 9.9725 27.0709 10.1297C27.0703 14.0433 27.0721 17.9576 27.0697 21.8713C27.0802 22.0098 27.0086 22.144 26.8793 22.2048C23.3661 24.1462 19.8129 26.025 16.3315 28.0228C16.1796 28.1099 16.0075 28.2086 15.8373 28.1126C14.9218 27.6062 14.0174 27.0801 13.1049 26.5688C13.0057 26.5069 12.8794 26.4803 12.7759 26.5496C12.3668 26.7652 11.982 26.9398 11.5122 27.1258C10.8524 27.387 10.9578 27.4938 11.5529 27.8405C12.62 28.4444 13.6889 29.0459 14.756 29.6504C15.4585 30.0888 16.4024 30.12 17.1275 29.7149C20.6861 27.7538 24.2436 25.7904 27.8029 23.8293C28.5113 23.468 29.0049 22.7202 28.9999 21.9327V10.0688C29.0068 9.31264 28.5576 8.58227 27.886 8.21259C24.3156 6.23947 20.7435 4.27064 17.1725 2.29872Z" fill="#8CC84B"/> <path d="M22.5419 11.2062C21.1452 10.459 19.4836 10.4192 17.9315 10.5169C16.8102 10.6277 15.6309 10.9371 14.814 11.7409C13.9761 12.5489 13.7937 13.8537 14.1917 14.9085C14.4769 15.6539 15.1948 16.1386 15.9372 16.395C16.8935 16.7326 17.8979 16.837 18.9026 16.9414C19.819 17.0366 20.7357 17.1319 21.6165 17.4042C21.9763 17.5234 22.3953 17.7058 22.5055 18.0973C22.6073 18.5609 22.4957 19.0998 22.1193 19.4219C20.9237 20.3682 17.5979 20.2232 16.4166 19.4784C15.939 19.1611 15.7332 18.5994 15.6495 18.0641C15.6402 17.8973 15.5059 17.7443 15.3248 17.757C14.8713 17.7516 14.4178 17.7528 13.9643 17.7564C13.8061 17.7431 13.6416 17.8557 13.6329 18.0172C13.5397 20.4689 15.7914 21.5377 17.9039 21.773C19.1108 21.888 20.3442 21.8814 21.5327 21.6224C22.4261 21.419 23.3219 21.0444 23.9369 20.3563C24.6953 19.52 24.8444 18.2749 24.5043 17.2332C24.2443 16.4559 23.5012 15.9573 22.7416 15.7008C21.7086 15.3466 20.4844 15.1562 19.5488 15.0671C18.1889 14.9376 16.5729 14.9905 16.188 14.0969C16.0345 13.629 16.1651 13.048 16.5951 12.7602C17.7328 11.9885 20.0483 12.091 21.2265 12.6675C21.7675 12.9384 22.081 13.4948 22.2104 14.0565C22.2344 14.2215 22.3454 14.3937 22.5364 14.3865C22.9868 14.3955 23.4372 14.3889 23.8875 14.3895C24.0422 14.4003 24.2116 14.313 24.2418 14.1546C24.2227 12.9806 23.6232 11.7788 22.5419 11.2062Z" fill="#8CC84B"/> </svg>'
		},
		{ 
			name : "Express",
			svg :	'<svg width="40" height ="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="express"><path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7L92.66 62.34 67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21C102.65 49.82 109 41.7 115 33.26c2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33 64.78 1.33 61.74zM7.2 60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63 32.56 7.85 43.7 7.2 60.25z"></path></svg>'
		},
		{ 
			name : "MongoDB",
			svg :	'<svg width="35" height="35" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="-645.732" y1="839.188" x2="-654.59" y2="839.25" gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)" gradientUnits="userSpaceOnUse"><stop offset="0.231" stop-color="#999875"/><stop offset="0.563" stop-color="#9b9977"/><stop offset="0.683" stop-color="#a09f7e"/><stop offset="0.768" stop-color="#a9a889"/><stop offset="0.837" stop-color="#b7b69a"/><stop offset="0.896" stop-color="#c9c7b0"/><stop offset="0.948" stop-color="#deddcb"/><stop offset="0.994" stop-color="#f8f6eb"/><stop offset="1" stop-color="#fbf9ef"/></linearGradient><linearGradient id="b" x1="-644.287" y1="823.405" x2="-657.028" y2="845.476" gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#48a547"/><stop offset="1" stop-color="#3f9143"/></linearGradient><linearGradient id="c" x1="-643.386" y1="839.485" x2="-652.418" y2="833.417" gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#41a247"/><stop offset="0.352" stop-color="#4ba74b"/><stop offset="0.956" stop-color="#67b554"/><stop offset="1" stop-color="#69b655"/></linearGradient></defs><title>file_type_mongo</title><path d="M16.62,30l-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741,3.423-.149a2.712,2.712,0,0,0-1.333,1.523A14.1,14.1,0,0,0,16.62,30Z" style="fill:url(#a)"/><path d="M17.026,26.329a13.223,13.223,0,0,0,5-13.225C20.556,6.619,17.075,4.487,16.7,3.673a9.792,9.792,0,0,1-.825-1.6l.277,18.069S15.578,25.664,17.026,26.329Z" style="fill:url(#b)"/><path d="M15.487,26.569S9.366,22.4,9.72,15.025A15.54,15.54,0,0,1,15.239,3.377,1.725,1.725,0,0,0,15.846,2c.381.82.319,12.243.359,13.579C16.36,20.776,15.916,25.588,15.487,26.569Z" style="fill:url(#c)"/></svg>'
		},
	]
	const tagIndex = ref(0)
	const tags = [ 
			{name : "All", count : 8 },
			{name : "Static", count : 4 },
			{name : "Vue", count : 2 },
			{name : "React", count : 2 }
		]
	const updateActiveTag = (index) => {
		tagIndex.value = index 
	}

	const cards = [
		{
			name : "Send anonymous messages",
			type : "React",
			active : true,
			tagIndex :  3,
			link : "https://harrison-anonymous.netlify.app/",
			desc : "Send anonymous messages to friends and loved ones with our simple site. \n Built with HTML, CSS, Javascript, React and Firebase ",
			tech : [0,1,2,4]
		},	
		{
			name : "Fullstack JIJI clone",
			type : "Vue",
			active : false,
			tagIndex :  2,
			link : "https://harrison-anonymous.netlify.app/",
			desc : "A site where users can connect online for the purpose of buying and selling of goods and services \n Built with HTML, CSS, Javascript and Vue",
			tech : [1,2,3, 6,7,8]
		},	
		{
			name : "My portfolio site",
			type : "Vue",
			active : true,
			tagIndex :  2,
			link : "https://harrison-port.netlify.app/portfolio",
			desc : "A sit that displays all of Harrison's active projects. \n Built with HTML, CSS, Javascript and Vue",
			tech : [0,1,2,3]
		},
		{
			name : "Meals App",
			type : "React",
			active : true,
			tagIndex :  3,
			link : "https://harrison-meals-app.netlify.app/",
			desc : "Search for your favorite meals with this meals app. \n Built with HTML, CSS, Javascript, React and themealsdb api ",
			tech : [0,1,2,4]
		},		
		{
			name : "Blockchain Kogi test site",
			type : "Static",
			active : true,
			tagIndex :  1,
			link : "https://harrison-blockchain-kogi.netlify.app/",
			desc : "A test landing page built for a blockchain NGO startup in Kogi State \n Built with HTML, CSS and Javascript ",
			tech : [0,1,2]
		},
		{
			name : "Memory and visual game ",
			type : "Static",
			active : true,
			tagIndex :  1,
			link : "https://harrison-memory-game.netlify.app/",
			desc : "Check out this cool site that can be used to build your memory and sight strength. \n Built with HTML, CSS and Javascript ",
			tech : [0,1,2]
		},	
		{
			name : "Password Generator ",
			type : "Static",
			active : true,
			tagIndex :  1,
			link : "https://harrison-password-generator.netlify.app/",
			desc : "Generate strong and customized passwords with this service. Copy when satisfied, view prev and next password . \n Built with HTML, CSS and Javascript ",
			tech : [0,1,2]
		},	
		{
			name : "Dictionary App ",
			type : "Static",
			active : true,
			tagIndex :  1,
			link : "https://harrison-dictionary.netlify.app/",
			desc : "Find the meaning of words and listen to the correct way of pronouncing it with this cool site. \n Built with HTML, CSS and Javascript ",
			tech : [0,1,2]
		},
	] 
</script>
<template>
	<div>
		<div class="portfolio-container">
			<div
			 class="left">
				<div class="dp-skills">
					<img v-motion
				    :initial="{ opacity: 0, x: 100  }"
				    :enter="{ opacity: 1, x: 0, scale: 1 }"  class="profile-image" :src="ProfileImage">
					<Swiper class ="skills"
						:modules = "[ Autoplay]"
						:slides-per-view="3"
						:space-between="10"
						:centered-slides = "true"
						:autoplay = "{ delay: 6000,disableOnInteraction: false}"
						@swiper="onSwiper"
						@slideChange = "onSlideChange"
						> 
						<template v-for="(skill, index) in skillsArray" :key="index" >
							<SwiperSlide class="skill"> 
								<div :class="[index === activeIndex ? 'active' : '', 'main' ]"> 
									<span>{{ skill.name }}</span>
									<div v-html="skill.svg" >
										
									</div>
								</div>
							</SwiperSlide>
						</template>
					</Swiper>
				</div>
				<div class="details">
					<h3 v-motion
				    :initial="{ opacity: 0, x: 100  }"
				    :enter="{ opacity: 1, x: 0, scale: 1 }" :delay="200" class="name">
						Ameh Harrison
					</h3>
					<h5 v-motion
				    :initial="{ opacity: 0, x: 100  }"
				    :enter="{ opacity: 1, x: 0, scale: 1 }" :delay="400" class="bio">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. ate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</h5>
				</div>
			</div>
			<div class="right">
				<div  v-motion
				    :initial="{ opacity: 0, x: 100  }"
				    :enter="{ opacity: 1, x: 0, scale: 1 }" :delay="600" class="about-me">
					<h2> About me </h2>
					<div class="socials">
						<a href="https://x.com/AmehHarrison17"  target="_blank">
								<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="twitter"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"></path></svg>
						</a>
						<a href="https://www.linkedin.com/in/ameh-harrison-abojoka-0000a121a"  target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="linkedin"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path></svg>
						</a>
						<a href="mailto:amehharrison2020@gmail.com?subject=Hello Harrison&body=Your reason for wanting to contact me"  target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
								<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
								<path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
							</svg>
						</a>
						<a href="https://api.whatsapp.com/send?phone=2348082838164&text=Hello Harrison" target="_blank">
							<svg fill="#000000" width="800px" height="800px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
								<g>
								<path d="M128.00049,24a104.0281,104.0281,0,0,0-91.189,154.041l-8.54687,29.915A15.99944,15.99944,0,0,0,48.044,227.73635l29.916-8.54688A104.00728,104.00728,0,1,0,128.00049,24ZM152.125,192c-.0293.02344-.084,0-.126,0A87.99949,87.99949,0,0,1,64,103.876,36.01385,36.01385,0,0,1,100,68,14.92643,14.92643,0,0,1,112.93066,75.503l11.69092,20.46094a16.01674,16.01674,0,0,1-.17187,16.16992l-7.11084,11.85156a40.03607,40.03607,0,0,0,14.67627,14.67676l11.85107-7.11133a16.01883,16.01883,0,0,1,16.17041-.17285l20.45947,11.69141A14.9238,14.9238,0,0,1,188,156,36.01427,36.01427,0,0,1,152.125,192Z"/>
								<path d="M136.4502,154.6592a7.99584,7.99584,0,0,1-7.397.43652,56.03179,56.03179,0,0,1-28.14892-28.14843,7.99972,7.99972,0,0,1,.43652-7.39746l9.38867-15.64844L99.36328,84.00979A19.99027,19.99027,0,0,0,80,103.89748,72.00036,72.00036,0,0,0,152,176h.10254a19.99027,19.99027,0,0,0,19.88769-19.36328l-19.8916-11.36621Z"/>
								</g>
							</svg>
						</a>
					</div>
					<h4>
						My goal is to give you the strategies you need to not just get noticed but to help you LAND successful opportunities. Visibility is cool but an actionable path that helps you WIN is better. Check out the free resources but if you still need dedicated help, that's what this is for!
					</h4>
				</div>
				<div class="portfolio">
					<h2> Portfolio </h2>
					<ul class="tags">
						<li v-for="(tag, index) in tags" :key="index" @click="updateActiveTag(index)" :class="index === tagIndex ? 'active' : '' "> {{ tag.name }} ({{ tag.count }}) </li>
					</ul>
					<div class="cards"> 
						<template v-for="(card, index) in cards" :key="index">
							<div
							    v-motion
							    :initial="{ opacity: 0, y: 20 }"
							    :visible="{ opacity: 1, y: 0, scale: 1 }"
							    :variants="{ custom: { scale: 2 } }"
							    :leave = "{ opacity: 0, y: 20  }"
							    
							 v-if="tagIndex === card.tagIndex || tagIndex === 0" :class="['card', !card.active ? 'inactive' : '' ]"  >
								<header> <span> {{ card.type  }} </span> </header> 
								<div class="name">					
									<h3 >
										{{ card.name }} 
									</h3>
								</div> 
								<div class="techs">
									<span v-for="tech in card.tech" v-html="skillsArray[tech].svg" :key="tech"> </span>
								</div>
									<hr>
								<div class="foot">
									<h4 class="desc"> {{ card.desc }}  </h4>
									<a v-if="card.active" disabled :href="card.link" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
										<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
										</svg>
									</a>
									<div v-else>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
										<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
										</svg>
									</div>
								</div>
								
							</div>
						</template>
					</div>
				</div>
				<div class="ratings">
					<h2> Feedbacks </h2>
					<div class="feedbacks">
						<div 
						 v-motion
							    :initial="{ opacity: 0, y: 100 }"
							    :visible="{ opacity: 1, y: 0, scale: 1 }"
							    :variants="{ custom: { scale: 2 } }"
						 class="feed">
								<svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
									<title>quote</title>
									<path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>
								</svg>
								<h4>
									Lorem, harry adipisicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</h4>
								<h3>Person Name</h3>
						</div>
						<div
						 v-motion
							    :initial="{ opacity: 0, y: 100 }"
							    :visible="{ opacity: 1, y: 0, scale: 1 }"
							    :variants="{ custom: { scale: 2 } }"
						 class="feed">
								<svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
									<title>quote</title>
									<path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>
								</svg>
								<h4>
									Lorem, harry adipisicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</h4>
								<h3>Person Name</h3>
						</div>
						<div
							 v-motion
							    :initial="{ opacity: 0, y: 100 }"
							    :visible="{ opacity: 1, y: 0, scale: 1 }"
							    :variants="{ custom: { scale: 2 } }"
							 class="feed">
								<svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
									<title>quote</title>
									<path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>
								</svg>
								<h4>
									Lorem, harry adipisicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</h4>
								<h3>Person Name</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

