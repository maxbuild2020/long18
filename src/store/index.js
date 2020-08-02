import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        games:[],
        filterBox:[]
    },
    mutations:{
        getData(state, res){
            state.games = res.data.data
            state.filterBox = res.data.data

        }
    },
    actions:{
        getAPI({commit}) {
            axios.get("/api/api.json").then( (res) =>{
                
                commit('getData',res)     
            })
            .catch(err => {
                console.log(err);
              })
        }
    },
    getters:{
        games: state =>{
            return state.games
        },
        filterBox: state =>{
            return state.filterBox
        }
    }
})