<template>
  <div class="hello">
   	<div class="main">
					<div class="leftOrTop">
						<div class="nav-bar">
								<div class="nav-bar-head" >{{title}}</div>
								<div class="nav-bar-body">
									<ul>
										<li id="createArticle" @click="toApp('/createArticle')" v-if='loginSign'  @mousemove="liMouseMove" @mouseleave="liMouseLeave" >{{createArticle}}</li>
										<li id="newBlog" @mousemove="liMouseMove" @click="toApp('/')" @mouseleave="liMouseLeave" >{{newBlog}}</li>
										<li id="aboutMe"  @mousemove="liMouseMove" @click="toApp('/AboutMe')" @mouseleave="liMouseLeave" >{{aboutMe}}</li>
									</ul>
									
								</div>
								<div class="nav-bar-foot">

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
									<div class="login-div">
										<i-form ref='userForm' :model='userForm' :rules='userRule' >
											<formItem prop='userName'>
												<i-input type="text" v-model="userForm.userName" placeholder='请输入账号'>
													<Icon type="ios-person-outline" slot="prepend"></Icon>
												</i-input>
											</formItem>
											<formItem prop='password'>
												<i-input type="password" v-model="userForm.password" placeholder='请输入密码'>
													<Icon type="ios-locked-outline" slot="prepend"></Icon>
												</i-input>
											</formItem>
											<formItem>
												<i-button type='primary' @click="handleSubmit('userForm')">登录</i-button>
												<i-button type='ghost' @click="handleGhost('userForm')" >重置</i-button>
											</formItem>
										</i-form>
									</div>
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
      newArticle:'登录信息',
      artileTile:'请输入文章标题',
      artileTime:'2017-10-24 17:09:05',
      artileMain:'1234567890',
      author:'',
      imgUrl:'../../static/logo.png',
      userForm:{
      	userName:'',
      	password:''
      },
      userRule:{
      	userName:[
      		{required:true,message:'账号不能为空',trigger: 'blur'}
      	],
      	password:[
      		{required:true,message:'密码不能为空',trigger: 'blur'},
      	]   	
      }
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
  	backToHome(e){
  			this.$router.push('/AboutMe');		 			
  	},
  	toCreateArticle(e){
  			this.$router.push('/CreateArticle');		
  	},
  	toApp(path){
  			this.$router.push(path);		 			
  	},
  	handleSubmit(name){
  		this.$refs[name].validate((valid)=>{
  			if(valid){
  				
  				if(this.userForm.userName=='like'&&this.userForm.password=='1'){
  					
  					auth.login({user:'like',token:'123',refreshToken:'321'});
  					
  					this.$Message.success('登录成功');
  					
  					this.$router.push('/');
  					 									
  				}else{ 					
  					this.$Message.error('账号或者密码不正确');					
  				}
  				
  				
  			}else{
  				
  			}
  		}  		
  		)
  	},
  	handleGhost(name){
  		this.$refs[name].resetFields();
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

.login-div{
	width:30%;
	height:50%;
	margin:0 auto;
	margin-top:30%;
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
