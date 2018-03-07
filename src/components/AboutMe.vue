<template>
  <div class="hello">
   	<div class="main">
					<div class="leftOrTop">
						<div class="nav-bar">
								<div class="nav-bar-head" >LiKe博客</div>
								<div class="nav-bar-body">
									<ul>
										<li id="createArticle" @click="toApp('/createArticle')" v-if='loginSign'   @mousemove="liMouseMove" @mouseleave="liMouseLeave" >创建博客</li>
										<li id="newBlog" @mousemove="liMouseMove" @click="toApp('/')" @mouseleave="liMouseLeave" >最新博客</li>
										<li id="viewLogs" @mousemove="liMouseMove" v-if='loginSign' @click="toApp('/viewLogs')" @mouseleave="liMouseLeave"  >查看日志</li>
										<li id="aboutMe"  class="mouseClick"  >关于我的</li>
									</ul>
									
								</div>
								<div class="nav-bar-foot">
									<i-button type="primary" @click="toApp('/login')" v-if='!loginSign'>登录</i-button>
									<i-button type="primary"  @click="logout" v-if='loginSign'>注销</i-button>
								</div>
						</div>
					</div>
					<div class="rightOrBottom">
							<div class="rightMain">
								<div class="tab-head">
									<div class="tab-head-left">
										<div class="pTitle" >
											<p>关于我的</p>
										</div>										
										<div class="item-border"></div>
									</div>
								</div>
								<div class="tab-main">
									<div class="aboutP">作者：{{author}}</div>
									<!--<div class="aboutP">专属论坛:<a target="_blank" href="http://123.56.21.128:8080/springForum/category/listCategory.do">http://123.56.21.128:8080/springForum/category/listCategory.do</a></div>-->
									<div class="aboutP">专属留言板:<a target="_blank" href="http://www.tianlingchen.xin:8888/">http://www.tianlingchen.xin:8888</a></div>
									<!--<img v-bind:src="imgUrl" />-->
								</div>
							</div>						
					</div>
			</div>	
  </div>
</template>
<script>
	
import auth from '@/utils/auth'	

export default {
  name: 'AboutMe',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:'LiKe博客',
      createArticle:'创建博客',
      newBlog:'最新博客',
      aboutMe:'关于我的',
      mouseSign:false,
      newArticle:'关于我的',
      artileTile:'请输入文章标题',
      artileTime:'2017-10-24 17:09:05',
      artileMain:'1234567890',
      author:'',
      imgUrl:'../../static/logo.png',
      loginSign:auth.loggedIn(),
    }
  },created:function(){ 	
  	this.author=this.$store.state.author;
  },
  methods:{
  	liMouseMove(e){
  			var el=e.target;	
  			el.classList.add("mouseMove");
  			el.classList.remove("mouseLeave");
  	},
  	liMouseLeave(e){
  		  var el=e.target;
  		  el.classList.add("mouseLeave");
  		 	el.classList.remove("mouseMove");
  	},
  	toApp(path){
  			this.$router.push(path);		 			
  	},
  	logout(){
  			auth.logout();
  			this.$router.push('/');	
  	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-main>p{
	width:20%;
	height:auto;
	text-align:left;
}

a{
	color:rgb(50, 211, 195);
}

.aboutP{
	width:100%;
	height:auto;
	padding:1vh;
	margin:0 auto;
	text-align:left;
	margin-top:1%;
}
</style>
