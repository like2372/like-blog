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
										<li id="viewLogs"  class="mouseClick"  >查看日志</li>
										<li id="aboutMe" @mousemove="liMouseMove" @click="toApp('/AboutMe')" @mouseleave="liMouseLeave" >{{aboutMe}}</li>
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
											<p>查看日志</p>
										</div>										
										<div class="item-border"></div>
									</div>
								</div>
								<div class="tab-main">
										<div class="logTable">
											 <i-table :columns="logColumns" :data="logData"></i-table>
										</div>
									 	<div class="page">
									 		<Page :total='totalNumber' @on-change="pageChange" :page-size="pageSize"></Page>
									 	</div>
								</div>
							</div>						
					</div>
			</div>	
  </div>
</template>
<script>
	
import auth from '@/utils/auth'	

import api from '@/utils/api'

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
      logColumns:[ {
                        title: 'IP',
                        key: 'ip'
                    },
                    {
                        title: 'PATH',
                        key: 'path'
                    },
                    {
                        title: 'TIME',
                        key: 'time'
                    },{
                        title: 'CONTENT',
                        key: 'content'
                    }],
      logData:[],
      startNumber:0,
      endNumber:10,
      pageSize:10,
      totalNumber:100,
    }
  },created:function(){ 	
  	this.author=this.$store.state.author;
  },
  mounted:function(){
  	this.getLogs();
  },
  methods:{
  	getLogs(){
  		api.get("/api/logsService/getLogs?startNumber="+this.startNumber+"&endNumber="+this.endNumber)
  			.then(function(response){
  				if(response.data.resultCode=="1"){
  						
  						this.totalNumber=response.data.totalNumber;
  						
  						let data=response.data.data;
				
  						this.logData=data;
							
  				}else{
  					console.log(response);
  				}
  			}.bind(this));
  	},
  	pageChange(e){
  		this.startNumber=(e-1)*this.pageSize;
  		this.endNumber=this.pageSize*e;
  		this.getLogs();
  	},
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

.logTable{
	margin:10%;
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
