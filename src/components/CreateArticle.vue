<template>
  <div class="hello">
   	<div class="main">
					<div class="leftOrTop">
						<div class="nav-bar">
								<div class="nav-bar-head" >{{title}}</div>
								<div class="nav-bar-body">
									<ul>
										<li id="createArticle"  class="mouseClick"  >{{createArticle}}</li>
										<li id="newBlog" @mousemove="liMouseMove" @click="toApp('/')" @mouseleave="liMouseLeave" >{{newBlog}}</li>
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
											<p>{{newArticle}}</p>
										</div>										
										<div class="item-border"></div>
									</div>
								</div>
								<div class="tab-main">
									
									<i-form ref='articleForm' class="articleForm" :model='articleForm'  :rules='articleRules'>
										<formItem prop='inputTitle' class="inputTitle">
											<label>{{inputTitle}}</label>
											<i-input type="text" v-model='articleForm.inputTitle' id="inputTitle" placeholder='请输入20字以内的标题'/>
										</formItem>
										<formItem prop='inputShortContent' class="inputShortContent" >
											<label>{{inputShortContent}}</label>
											<i-input type="text" v-model='articleForm.inputShortContent' id="inputShortContent" placeholder='请输入40字以内的描述'/>
										</formItem>
										<formItem  prop='inputContent'  class="editorDiv">
											<label>{{inputContent}}</label>
											<textarea name="editor" id="editor" ></textarea>
										</formItem>							
										<formItem class="submitDiv">
												<i-button type="primary" @click="submitButton('articleForm')">提交</i-button>
										</formItem>
									</i-form>
									<!--<img v-bind:src="imgUrl" />-->
								</div>
							</div>						
					</div>
			</div>	
  </div>
</template>

<script>

import 'mditor/dist/js/mditor.min.js'
import 'mditor/dist/css/mditor.min.css'
	
import mditor from 'mditor'
import api from '@/utils/api'
import auth from '@/utils/auth'
	
export default {
  name: 'createArticle',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:'LiKe博客',
      createArticle:'创建博客',
      newBlog:'最新博客',
      aboutMe:'关于我的',
      mouseSign:false,
      newArticle:'创建博客',
      artileTile:'请输入文章标题',
      artileTime:'2017-10-24 17:09:05',
      artileMain:'1234567890',
      author:'',
      imgUrl:'../../static/logo.png',
      titleInput:"",
      shortContentInput:"",
      inputTitle:'请输入文章标题:',
      inputShortContent:'请输入文章描述:',
      inputContent:'请输入文章正文:',
      loginSign:auth.loggedIn(),
      articleForm:{
      	inputTitle:'',
      	inputShortContent:'',
      },
      articleRules:{
      	inputTitle:[{
      		required:true,message:'标题不能为空',trigger: 'blur'
      	},{
      		type:'string',max:20,message:'标题不能超过20个字',trigger:'change'
      	}],
      	inputShortContent:[{
      		required:true,message:'描述不能为空',trigger: 'blur'
      	},{
      		type:'string',max:40,message:'描述不能超过40个字',trigger:'change'
      	}],     	
      }
    }
  },created:function(){ 	
  },mounted:function(){
		var mditor =  Mditor.fromTextarea(document.getElementById('editor'));
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
  	submitButton(name){
  			this.$refs[name].validate((valid)=>{
  				if(valid){
  					var acticleJson={};
		  			var acticleTitle=this.articleForm.inputTitle;
		  			var acticleShortContent=this.articleForm.inputShortContent;
		  			var acticleContent=document.getElementById('editor').value;
		  			acticleJson.acticleTitle=acticleTitle;
		  			acticleJson.acticleShortContent=acticleShortContent;
		  			acticleJson.acticleContent=acticleContent;		  					  					
		  			api.post("/api/articleService/insertArticleData",acticleJson)
		  			.then(function(response){
		  						if(response.data.resultCode=="1"){
		  							this.$Message.success('保存成功');
									this.$router.push('/');
		  						}else{
		  							this.$Message.error("保存失败");
		  						}								
		  			}.bind(this))
		  			.catch(function(error){
		  					this.$Message.error('请求失败,error='+error);	
		  			}.bind(this));
		  			
		  			
  				}else{
  					this.$Message.error('保存失败');
  				}
  			});
  			 		
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

.articleForm{
	font-size: 1rem;
}

.submitDiv{
	margin-top:2%;
}

.editorDiv{
	margin-top:10%;
}	
	
.tab-main div input {
	width:100%;
}	
	
.tab-main div{
	width:100%;
	float:left;
	margin-top:2%;
}	
	
.tab-main{
	height:auto;
	text-align:left;
}

#editor{
	margin-top:10%;
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
</style>
