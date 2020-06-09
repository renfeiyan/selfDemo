<template>
    <div class="skillPage">
        <p class="skill-title">个人技能</p>
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <span class="icon_ico img_bg imgbg_1"></span>
                        <span class="icon_text img_bg imgbg_5"></span>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple-light">
                        <span class="icon_ico img_bg imgbg_2"></span>
                        <span class="icon_text img_bg imgbg_6"></span>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <span class="icon_ico img_bg imgbg_3"></span>
                        <span class="icon_text img_bg imgbg_7"></span>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <span class="icon_ico img_bg imgbg_4"></span>
                        <span class="icon_text img_bg imgbg_8"></span>
                    </div>
                </el-col>
              </el-row>
        <div class="bottom_text">
            <span>一个正在努力的大三学生~</span>
            <span>也许我技术还不够强，但有一颗热爱技术的心~</span>
            <span>目前主要以Vue为技术栈~</span>
            <span>希望看到这个页面的老师能够给我一个学习的机会~</span>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'skillPage',
    data () {
        return {
            
        }
    }
}
</script>

<style lang = "scss" scoped>
/* 精灵图位置 */
@mixin bg-position($y) {
  background-position: center $y;
}
    .skillPage{
        width: 100%;
        margin: 0 auto;
        position: absolute;
        left: 0;
        right: 0;
        top: 100px;
        bottom: 0;
        overflow: hidden;
    }
    .row-bg {
        margin-bottom: 30px;
    }
    .img_bg {
        width: 170px;
        background-image: url('./../assets/bg_in.png');
        background-repeat: no-repeat;
        display: block;
    }
    .icon_ico{
        height: 170px;
    }
    .icon_text {
        height: 38px;
        margin-top: 20px;
    }
    .skill-title {
        font-size: 40px;
        margin: 60px 0;
        color: #29BBE3;
    }
    .imgbg_1 { @include bg-position(-41px)}
    .imgbg_2 { @include bg-position(-250px)}
    .imgbg_3 { @include bg-position(-458px)}
    .imgbg_4 { @include bg-position(-667px)}
    .imgbg_5 { @include bg-position(-211px)}
    .imgbg_6 { @include bg-position(-420px)}
    .imgbg_7 { @include bg-position(-628px)}
    .imgbg_8 { @include bg-position(-837px)}
    .bottom_text span {
        color: #667990;
        display: block;
    }
</style>