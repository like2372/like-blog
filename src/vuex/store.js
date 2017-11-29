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
  		},
  		putActile(context,value){			
  			var acticleJson=JSON.stringify(value);		
			var params = new URLSearchParams();
			params.append('articleJson', acticleJson);		
  			axios.post("/api/articleService/insertArticleData",params,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            })
  			.then(function(response){
				console.log("请求成功");
  				console.log(response);
  			})
  			.catch(function(error){
  					alert('请求失败,error='+error);
  			});
  		}
  }
})

export default store