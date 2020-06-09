import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)


const store = new Vuex.Store({
    state: { //要设置全局访问的state对象
        lists: [],
    },
    getters: { // 实时监听state值的变化
        
    },
    mutations: { //唯一允许更改state
        addData(state,value){   // 往lists中添加数据
            state.lists.push(value);
        }
    },
    actions: { //触发更改
        getList (context) {
            axios.get('http://localhost:8080/list.json').then(res => {  //调用接口
                context.commit('addData',res.data.list);  // 通过接口获取的数据保存到store中，等待组件取用
                console.log(res.data.list);
            })
        }
    }
})
export default store;
