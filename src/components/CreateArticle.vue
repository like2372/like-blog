<template>
  <div class="hello">
   	<div class="main">
					<div class="leftOrTop">
						<div class="nav-bar">
								<div class="nav-bar-head" >{{title}}</div>
								<div class="nav-bar-body">
									<ul>
										<li id="createArticle"  class="mouseClick"  >{{createArticle}}</li>
										<li id="newBlog" @mousemove="liMouseMove" @click="backToHome" @mouseleave="liMouseLeave" >{{newBlog}}</li>
										<li id="aboutMe" @mousemove="liMouseMove" @click="backToAboutMe" @mouseleave="liMouseLeave" >{{aboutMe}}</li>
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
									<div class="inputTitle">
										<label>{{inputTitle}}</label>
										<input type="text" id="inputTitle" />
									</div>
									<div class="inputShortContent">
										<label>{{inputShortContent}}</label>
										<input type="text" id="inputShortContent" />
									</div>
									<div class="editorDiv">
										<label>{{inputContent}}</label>
										<textarea name="editor" id="editor"></textarea>
									</div>							
									<div class="submitDiv">
											<button @click="submitButton">提交</button>
									</div>
									<!--<img v-bind:src="imgUrl" />-->
								</div>
							</div>						
					</div>
			</div>	
  </div>
</template>

<script>
	
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
      inputTitle:'请输入文章正标题:',
      inputShortContent:'请输入文章副标题:',
      inputContent:'请输入文章正文:',
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
  	backToHome(e){
  			this.$router.push('/');		 			
  	},
  	backToAboutMe(e){
  			this.$router.push('/aboutMe');
  	},
  	submitButton(e){		
  			var acticleJson={};
  			var acticleTitle=document.getElementById('inputTitle').value;
  			var acticleShortContent=document.getElementById('inputShortContent').value;
  			var acticleContent=document.getElementById('editor').value;
  			acticleJson.acticleTitle=acticleTitle;
  			acticleJson.acticleShortContent=acticleShortContent;
  			acticleJson.acticleContent=acticleContent;
  			console.log(acticleJson);
  			this.$store.dispatch('putActile',acticleJson); 		
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.submitDiv{
	margin-top:2%;
}

.editorDiv{
	margin-top:10%;
}	
	
.tab-main div input {
	width:100%;
	height:1.2rem;
}	
	
.tab-main div{
	width:100%;
	float:left;
	margin-top:5%;
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
