<template>
  <div class="hello" > 				
			<div class="main">
					<div class="leftOrTop">
						<div class="nav-bar">
								<div class="nav-bar-head" >LiKe博客</div>
								<div class="nav-bar-body">
									<ul>
										<li id="createArticle" @click="toApp('/createArticle')"  @mousemove="liMouseMove" @mouseleave="liMouseLeave" v-if='loginSign' >{{createArticle}}</li>
										<li id="newBlog"  class="mouseClick" >最新博客</li>
										<li id="aboutMe" @mousemove="liMouseMove" @click="toApp('/AboutMe')" @mouseleave="liMouseLeave" >关于我的</li>
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
											<p>{{newArticle}}</p>
										</div>										
										<div class="item-border"></div>
									</div>
								</div>
								<div class="tab-main">									
									<div v-for="item in topicList" class="artile">
										<div class="artile-body">
												<div class="artile-title" @click="toArtile">{{item.articleTitle}}<span v-show="false">{{item.id}}</span></div>
												<div class="artile-time">{{item.articleTime}}</div>
												<div class="artile-main">{{item.articleShortContent}}</div>
										</div>
									</div>	
									<!--<div v-for="n in pageSize" class="artile">
										<div class="artile-body">
												<div class="artile-title" @click="toArtile">{{artileTile}}<span v-show="false">{{}}</span></div>
												<div class="artile-time">{{artileTime}}</div>
												<div class="artile-main">{{artileMain}}</div>
										</div>
									</div>	-->							
								</div>
								<Page :total='totalNumber' @on-change="pageChange" :page-size="pageSize" style="margin-right:5%;margin-top:5%;height:5%;" ></Page>
							</div>						
					</div>
			</div>	
			<!--<div class="foot"></div>-->
  </div>
</template>

<script>
	
import auth from '@/utils/auth'
	
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:'LiKe博客',
      createArticle:'创建博客',
      newBlog:'最新博客',
      aboutMe:'关于我的',
      pageSize:6,
      mouseSign:false,      
      newArticle:'最新文章',
      artileTile:'深入理解 Linux 的 RCU 机制',
      artileTime:'2017-11-18 17:09:05',
      artileMain:'RCU(Read-Copy Update)，是 Linux 中比较重要的一种同步机制。顾名思义就是“读，拷贝更新”',
      loginSign:auth.loggedIn(),
    }
  },
  created:function(){
  	var data={};
  	data.start=0;
  	data.end=this.pageSize;
		this.$store.dispatch('getActileList',data);
  },
  computed:{
  	topicList(){
  		return this.$store.state.actileList;
  	},
  	totalNumber(){
  		var total=this.$store.state.actileTotalNumber;
  		return parseInt(total);
  	},
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
  	backToHome(e){
  			this.$router.push('/AboutMe');			
  	},
  	toArtile(e){
  			//alert(123);
  			var ele=e.target;
  			var spanEle=ele.firstElementChild;
  			var articleId=spanEle.innerHTML;
  			this.$router.push('/Artile/'+articleId);			
  	},
  	toApp(path){
  			this.$router.push(path);		 			
  	},
  	pageChange(e){
  			var data={};
  			data.start=(e-1)*this.pageSize;
  			data.end=this.pageSize;
  			this.$store.dispatch('getActileList',data);
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


</style>
 

