import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutMe from '@/components/AboutMe'
import Artile from '@/components/Artile'
import CreateArticle from '@/components/createArticle'

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path:'/aboutMe',
    	name:'AboutMe',
    	component:AboutMe
    },
    {
    	path:'/Artile/:articleId',
    	name:'Artile',
    	component:Artile 
    },
    {
    	path:'/createArticle',
    	name:'CreateArticle',
    	component:CreateArticle
    }
  ]
})

router.beforeEach((to,form,next)=>{
		console.log(to);
		console.log(form);
		console.log(next);
		//alert(to.name);
		//next('/AboutMe');
		//next('/');
		//alert(1);
		next();
});


export default router