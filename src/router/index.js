import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutMe from '@/components/AboutMe'
import Artile from '@/components/Artile'
import CreateArticle from '@/components/createArticle'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(Router);
Vue.use(iView);

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
		iView.LoadingBar.start();
		next();
});


router.afterEach((to,form,next)=>{
		iView.LoadingBar.finish();
});

export default router