<template>
    <div class="personal-box">
        <div class="personal-content">
            <el-card shadow="hover">
                <h1>Hello,I'm RenFeiyan</h1>
                <h3>Live beautifully， dream passionately， love completely ~</h3>
                <h4>您好！我叫任飞燕</h4>
                <h4>一个正在朝着技术前进的程序猿</h4>
            </el-card>
        </div>
    </div>
  

   
</template>

<script>

export default {
    name: 'personalPage',
    data () {
        return {
            
        }
    }
}
</script>

<style lang = "scss" scoped>
.personal-box {
    width: 100%;
    background-image: url('./../assets/bg.jpg');
    background-size: cover;
    position: absolute;
    left: 0;
    right: 0;
    top: 100px;
    bottom: 0;
}
.personal-content {
    width: 600px;
    margin: 50px auto;
    .el-card {
        color: #323436;
        background:rgba(192,192,192,0.4);
        height: 300px;
    }
}


</style>