import mutations from './mutation.js'
const actions ={
  	getall({commit}){
  	commit('getalls')
  	},
  	removeli({commit},index){
  	 commit('removelis',index)
  	},
  	removeall({commit}){
  	 commit('removealls')
  	}
  }
export default actions