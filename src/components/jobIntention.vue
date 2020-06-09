<template>
    <div class="intention-box">
        <p class="intent-title">求职意向</p>
        <div class="intention-content">
            <ul>
                <li>
                    <p><i class="el-icon-s-platform icon-font"></i></p>
                    <p class="content-title">网页制作</p>
                    <p>响应式网页制作，可将PSD图转化成符合W3C标准的网页</p>
                </li>
                <li>
                    <p><i class="el-icon-s-finance icon-font"></i></p>
                    <p class="content-title">前端功能</p>
                    <p>能够使用js写出前端常见的动画效果，也可用ElementUI等第三方库实现页面常见布局</p>
                </li>
                <li>
                    <p><i class="el-icon-s-flag icon-font"></i></p>
                    <p class="content-title">前后端交互</p>
                    <p>能使用Ajax、Axios等和后端完成交互</p>
                </li>
                <li>
                    <p><i class="el-icon-s-marketing icon-font"></i></p>
                    <p class="content-title">其他知识</p>
                    <p>了解计算机网络、数据结构、数据库、C语言等语言</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'conponentThree',
    data () {
        return {

        }
    }
}
</script>

<style lang='scss' scoped>
    .intention-box {
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        top: 100px;
        bottom: 0;
    }
    .intent-title {
        font-size: 40px;
        margin: 60px 0;
        color: #29BBE3;
    }
    .icon-font {
        font-size: 100px;
        color: #5c5f5c;
    } 
    .intention-content {
        ul {
            width: 80%;
            padding: 0;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            li {
                width: 25%;
                list-style: none;
                P {
                    color: #787978;
                    font-size: 14px;
                }
                .content-title {
                    font-size: 16px;
                    font-weight: bold;
                    color: #1597BB;
                }
            }
        }
    }
</style>