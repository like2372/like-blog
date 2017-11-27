import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    author: '李科',
    dataUrl:'',
    actileList:[],   
  },
  mutations:{
  		newAuthor(state,msg){
  			state.author=msg
  		}, 		
  },
  actions:{
  		getActileList(context){
  				axios.get("/api/articleService/getArticleData")
  				.then(function(response){
  					
  					var data=response.data;					
  					
  					context.state.actileList=data.data;
  					
  					
  					
  				})
  				.catch(function(error){
  					alert('请求失败,error='+error);
  				});
  		}
  }
})

export default store