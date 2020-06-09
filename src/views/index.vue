<template>
    <div>
        <div class="header">
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="header-left">
                        <router-link to="/list" style="color:white">前往list页面</router-link>
                    </div>
                </el-col>
                <el-col :span="16">
                    <div class="header-right">
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" 
                                background-color="#323436" text-color="#fff" active-text-color="#ffd04b">
                            <el-menu-item index="1">
                                <router-link to="/index/personalPage">个人主页</router-link>
                            </el-menu-item>
                            <el-menu-item index="2">
                                <router-link to="/index/skillPage">技能掌握</router-link>
                            </el-menu-item>
                            <el-menu-item index="3">
                                <router-link to="/index/jobIntention">求职意向</router-link>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <router-link to="/index/contactPage">联系方式</router-link>
                            </el-menu-item>
                        </el-menu>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!-- 中间内容区 -->
        <div class="content">
            <!-- <transition> -->
                <router-view></router-view>
            <!-- </transition> -->
        </div>
          
    </div>
   
</template>

<script>
export default {
    name: 'index',
    data () {
        return {
            activeIndex: '1'
        }
    },
    methods: {
     
    },
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.componentOne = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }
}    
</script>

<style lang="scss" scoped>
    .router-link-active  {    
        text-decoration: none;
    }
    a {
        text-decoration: none;
    }
    .header {
        height: 100px;  
        line-height: 100px;
        text-align: center;
        background-color: #323436;
    }
    .header-left {
        line-height: 100px;
    }
    .el-menu-demo{
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }
    .el-menu-demo .el-menu-item {
        height: 100px;
        line-height: 100px;
        flex-grow: 1;
    }
    .content {
        background-color:#F2F6F9;
        /* color: #FFC000; */
        text-align: center;
        
    }
   
/* .v-leave{
  opacity:1;
}
.v-leave-to{
  opacity:0;
}
.v-leave-active{
  transition:2s;
}
  .left-enter{
    transform:translateX(100%);
  }
.left-enter-active{
  transition:1s;
}
.left-leave-to{
  transform:translateX(-100%);
}
.left-leave-active{
  transition:1s;
}
 
.right-enter{
  transform:translateX(-100%);
}
.right-enter-active{
  transition:1s;
}
.right-leave-to{
  transform:translateX(100%);
}
.right-leave-active{
  transition:1s;
} */
    
</style>