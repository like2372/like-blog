<template>
  <div class="hello">
   	<div class="main">
					<div class="leftOrTop">
						<div class="nav-bar">
								<div class="nav-bar-head" >{{title}}</div>
								<div class="nav-bar-body">
									<ul>
										<li id="createArticle" @mousemove="liMouseMove" @click="backToHome('/createArticle')" @mouseleave="liMouseLeave"  >{{createArticle}}</li>
										<li id="newBlog" @mousemove="liMouseMove" @click="backToHome('/')" @mouseleave="liMouseLeave" >{{newBlog}}</li>
										<li id="aboutMe" @mousemove="liMouseMove" @click="backToHome('/AboutMe')" @mouseleave="liMouseLeave"   >{{aboutMe}}</li>
									</ul>								
								</div>
								<div class="nav-bar-foot"></div>
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
										<div class="artile-main-title">{{artileJson.articleTitle}}</div>
										<div class="artile-main-time">{{artileJson.articleTime}}</div>
										<div class="artile-main-content" >
											<div class="content markdown-body"  v-html="formatActicle(artileJson.articleContent)"></div>
										</div>
								</div>
							</div>						
					</div>
			</div>	
  </div>
</template>

<script>
	
import mditor from 'mditor'
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
      newArticle:'最新博客',
      artileTile:'请输入文章标题',
      artileTime:'2017-10-24 17:09:05',
      artileMain:'1234567890',
      artileTitle:"深入理解 Linux 的 RCU 机制",
      actileList:"",
      articleId:"",
    }
  },created:function(){
  		this.articleId=this.$route.params.articleId;
  },
  computed:{
  	artileJson(){
  		var artileJson="";
  		var actileList=this.$store.state.actileList;
  		for(var i=0;i<actileList.length;i++){
  			var rowJson=actileList[i];
  			if(rowJson.id==this.articleId)artileJson=rowJson;
  		}
  		return artileJson;
  	}
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
  	backToHome(path){
  			this.$router.push(path);		 			
  	},
  	formatActicle(value){
  		  var parser = new mditor.Parser({})
        var html = parser.parse(value)
        return html
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	.artile-main-content>div{
		text-align: left;
		margin-top: 1rem;
		margin-bottom:10rem ;
	}
	
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
}

.artile-main-title{
	width:100%;
	padding-top:2rem;
	padding-bottom: 2rem;
	font-size: 2rem;
	color:rgb(50, 211, 195);
	margin:0 auto;
}

.artile-main-time{
	width:100%;
	padding-top:1rem;
	padding-bottom: 1rem;
	font-size: 1rem;
	margin:0 auto;
}
</style>
