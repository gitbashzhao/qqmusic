import Vue from 'vue'
const mutations = {
  	getalls(state){
		Vue.axios.get('/api/music', {
	  	headers:{'Content-type':'application/json;charset="utf-8"'}
	   	})
	    .then(d => {
	      state.all = d.data.data
	    })
  	},
  	removelis(state,index){
  		state.all.splice(index,1)
  	},
  	removealls(state){
  		state.all=[]
  	}
  }
export default mutations