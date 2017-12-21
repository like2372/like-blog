<template>
  <div id="app">
		 <router-view />
  </div>
</template>

<script>
	//import store from './vuex/store'
export default {
  name: 'app',
  data(){
  	return {
  		appName:'123'
  	}
  },
  created:function(){
  	
  },
  methods:{
  	getUser(msg){
  			alert(this.$store.state.author);
  	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height:100%;
}

body{
	 width:100%;
  height:100%;
  margin:0px;
}

html{
	width:100%;
  height:100%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

.mouseClick{
	background-color:#26252f;
	color:#32d3c3;
	border-right: 0.5vh solid #32d3c3;
	cursor:pointer;
}

.mouseLeave{
	background-color:#2a2935;
	color:#666;
}

.mouseMove{
	background-color:#26252f;
	color:#32d3c3;
	cursor:pointer;
}

.artile-main{
	text-align: left;
    padding: 1rem 0;
    color: #666;
    min-height: 3.7rem;
    max-height: 3.7rem;
    line-height: 1.2rem;
    margin-bottom: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    font-size: .9rem;
    cursor:pointer;
}

.artile-time{
	  color: #aaa;
    font-size: .8rem;
    margin-bottom: .12rem;
    padding: 1rem 0;
    border-bottom: 1px dashed #ddd;
}

.artile-title{
	  font-size: 1.3rem;
    color: #32d3c3;
    cursor:pointer;
}

.artile-body{
	padding:10%;
	padding-top:5%;
	height:80%;
}

.tab-main{
	width:100%;
	/*height:100%;*/
}

.artile{
	width:45%;
	height:29%;
	background: white;
	margin-top:2%;
	margin-bottom:2%;
	float:left;
	margin-right: 5%;
}

p{
	margin:0px;
}

.pTitle{
	width:100%;
	height:95%;
	line-height: 6vh;
}

.item-border{
	width:100%;
	height:5%;
	background-color: #32D3C3;
}

.tab-head-left{
	width:20%;
	height:100%;
	float:left;
}

.tab-head{
	height:5%;
	border-bottom:#32D3C3 thin groove;
}

.tab-main{
	height:80%;
}

.rightMain{
	width:95%;
	margin:0 auto;
	height:100%;
	background-color: #f4f4f4;
}

.nav-bar{
	width:100%;
	height:100%;
	color:#666;
}

.nav-bar>.nav-bar-body>ul{
	width:100%;
	padding:0px;
	padding-top: 0.5rem;
	margin:0px;
}

.nav-bar>.nav-bar-body>ul>li{
	list-style-type: none;
	height:8vh;
	line-height:8vh;
	padding-right:1%;
	width:97%;
}

.nav-bar-head{
	height:10%;
	line-height: 11vh;
	color:#32d3c3;
	background-color: #26252f;
}

.nav-bar-body{
	height:80%;
	background-color: #2a2935;
}

.nav-bar-foot{
	height:10%;
	float:right;
	margin-right:20%;
	/*background-color: #1e1d26;*/
}

.hello{
	width:100%;
	height:100%;
}

.top{
	height:10%;
	background:#9CF
}

.main{
	width:100%;
	height:100%;
	margin: 0 auto;
	background-color: #f4f4f4;
}

.head{
	width:100%;
	height:100%; 
	background:#F90
}

.leftOrTop{
	width:20%; 
	height:100%; 
	background:#2a2935; 
	float: left;
}

.rightOrBottom{
	width:80%; 
	height:100%;
	background:#f4f4f4;; 
	float:right;
	overflow-y: auto;
}

.foot{
	height:10%; 
	background:#9F9;
	clear:both;
}

.close-div{
	margin-left:5%;
	width:100%;
	height:5%;
	cursor:pointer;
}




@media only screen and (min-width: 0px) and (max-width: 640px) {
	
	body{
		font-size: 8px;
	}
	
	.artile{
		width:95%;
		margin-right: 2%;
		margin-left:2%;
	}
	
	.artile-title{
		font-size:1.1rem
	}
	
	.artile-time{
		font-size:0.6rem
	}
	
	..artile-main-title{
		font-size:1rem
	}
	
	.rightOrBottom{
	 	overflow:scroll; 
	 	/*overflow-y: hidden;*/
	} 
	
}

@media only screen and (min-width: 640px) and (max-width: 3200px) {
	
	body{
		font-size: 16px;
	}
	
	.artile{
		width:45%;
	}
	
	 /*.rightOrBottom{
	 	
	 	overflow-y: hidden;
	 } */
	
}

@media only screen and (min-width: 3200px){
	
	body{
		font-size: 32px;
	}
	
}

</style>
