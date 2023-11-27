import { createRouter, createWebHistory } from "vue-router" 
import PortfolioPage from "./components/page-views/PortfolioPage.vue"
import ErrorPage from "./components/page-views/ErrorPage.vue"

const router = createRouter({
	history : createWebHistory("/"),
	routes: [
		// {
		// 	path: "/",
		// 	name : "Home page",
		// 	component : HomePageView
		// },	
		{
			path: "/portfolio",
			name : "Portfolio",
			component : PortfolioPage
		},
		{
			path: "/:catchall(.*)*",
			name : "Page not found",
			component : ErrorPage
		},
	]
})

export default router