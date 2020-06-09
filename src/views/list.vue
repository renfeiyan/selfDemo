<template>
    <div class="list-content">
        <!-- for循环 调用自动渲染页面-->
        <div class="panel-list" v-for="item in ListData" :key="item.id">
            <el-row>
                <el-button plain @click="item.isHidden = true">展开</el-button>
            </el-row>
            <el-collapse-transition>
                <el-row class="openBlocks" v-if="item.isHidden">
                    <el-col :span="2"><div></div></el-col>
                    <el-col :span="20">
                        <div>{{item.name}}</div>
                    </el-col>
                    <el-col :span="2">
                        <div>
                            <el-row><el-button :plain="true" @click="insertItem">插入</el-button></el-row>
                            <el-row><el-button plain @click="item.isHidden = !item.isHidden">折叠</el-button></el-row>
                            <el-row><el-button :plain="true" @click="deleteItem(item.id)">删除</el-button></el-row>
                        </div>
                    </el-col>
                </el-row>
            </el-collapse-transition>
        </div>
        <div class="bottomBtn">
            <el-row>
                <el-button :plain="true" @click="addNewList">新增</el-button>
                <el-button plain @click="randomList">随机排序</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>

export default {
    name: 'list',
    data () {
        return {
            ListData: [],
            nextTodoId: 7
        }
    },
    created() {
          this.getData();
          // 在页面加载时读取sessionStorage里的状态信息
          if (sessionStorage.getItem('store')) {
              this.$store.replaceState(
                  Object.assign(
                      {},
                      this.$store.state,
                      JSON.parse(sessionStorage.getItem('store'))
                  )
              )
          }
          // 在页面刷新时将vuex里的信息保存到sessionStorage里
          // beforeUnload事件在页面刷新时先触发
          window.addEventListener('beforeunload', () => {
              sessionStorage.setItem('store', JSON.stringify(this.$store.state))
          })
    },
    watch: {
        '$route': 'getData'  // 路由有变化时，调用接口数据
    },
    mounted() {
        this.getListData()
    },  
    methods: {
        getListData() {  // 将store中的数据 拿到本页面数组中
            this.ListData = this.$store.state.lists[0];
        },
        getData() {
             this.$store.dispatch('getList');   //触发axios里的getList函数，调动接口
        },
        addNewList() {  //点击底部新增按钮 
            this.ListData.push({
                id:this.nextTodoId++,
                name:'测试元素'+this.nextTodoId,
                isHidden:true
            })
            this.$message({
                message: '新增列表项成功',
                type: 'success'
            });
        },
        deleteItem(id){  // 删除id所对应的列表项
            var newList = this.ListData.splice(0); 
            for(var i=0; i<newList.length; i++){
                if(newList[i].id == id){
                    newList.splice(i,1);
                    i--
                }
            }
            this.ListData = newList;
            this.$message({
                message: '删除列表项成功',
                type: 'success'
            });
        },
        randomList() {  //随机数组排列
            this.$message({
                message: '数组随机排列失败',
                type: 'error'
            });
        },
        insertItem() {
            this.$message({
                message: '插入数组失败',
                type: 'error'
            });
        }
    }
}    
</script>

<style scoped>
    .list-content{
        width: 100%;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
    }
    .panel-list {
        margin-bottom: 10px;
        width: 100%;
    }
    .openBlocks {
        height: 150px;
        border: 1px solid black;
        margin-top: 10px;
        text-align: center;
        display: flex;
        align-items: center;

    }   
    .function-btn {
        display: flex;
        border:1px solid red
    }
    .bottomBtn{
        width: 100%;
        height: 60px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        position: fixed;
        bottom: 0px;
    }
</style>