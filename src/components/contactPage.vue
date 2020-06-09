<template>
    <div class="contact-box">
        <p class="contact-title">联系方式</p>
        <el-card shadow="hover" style="color: #787978;">
            <h2><i class="el-icon-phone-outline"></i>TEL: 1322-4010-832</h2>
            <h3><i class="el-icon-s-custom"></i>WeChat: rqe102464</h3>
            <h3><i class="el-icon-s-promotion"></i>Emaile: 1556792603@qq.com</h3>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'contactPage'
}

</script>

<style lang="scss" scoped>
    .contact-box {
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        top: 100px;
        bottom: 0;
    }
    .contact-title{
        font-size: 40px;
        margin: 60px 0;
        color: #29BBE3;
    }
</style>