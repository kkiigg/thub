import Page1 from "../views/page1.vue"
import Page2 from "../views/page2.vue"

const Tem1={template:"<p> i  am tem1</p>"}
const Tem2={template:"<p> i  am tem2</p>"}
export default [
	{
		path:'/page1',
		component:Page1
	},
	{
		path:'/page2',
		component:Page2
	},
	// {
	// 	path:'/tem1',
	// 	component:Tem1
	// },
	// {
	// 	path:'/tem2',
	// 	component:Tem2
	// }
]

