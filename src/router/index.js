import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutMe from '@/components/AboutMe'
import Artile from '@/components/Artile'
import CreateArticle from '@/components/createArticle'
import UpdateArticle from '@/components/updateArticle'
import Login from '@/components/Login'
import iView from 'iview'
import auth from '@/utils/auth'
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
    	component:CreateArticle,
    	meta:{
    		requiresAuth:true
    	}
    },
     {
    	path:'/updateArticle/:articleId',
    	name:'UpdateArticle',
    	component:UpdateArticle,
    	meta:{
    		requiresAuth:true
    	}
    },
    {
    	path:'/login',
    	name:Login,
    	component:Login
    }
  ]
})

router.beforeEach((to,form,next)=>{	
		iView.LoadingBar.start();
		if(to.matched.some(record=>record.meta.requiresAuth)){
			if(!auth.loggedIn()){
				next({
					path:'/login',
					query:{
						redirect:to.fullPath
					}
				});
			}else{
				next();
			}
		}else{
			next();
		}	
});


router.afterEach((to,form,next)=>{
		iView.LoadingBar.finish();
});

export default router