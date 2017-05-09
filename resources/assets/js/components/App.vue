<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 3}">
        <Row type="flex" class="fl">
            <i-col :span="spanLeft" class="layout-menu-left">
                <navigation></navigation>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">
                    <i-button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="/">首页</Breadcrumb-item>
                        <Breadcrumb-item href="/application">应用中心</Breadcrumb-item>
                        <Breadcrumb-item href="/application">应用列表</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                        <router-view></router-view>
                    </div>
                </div>
                <div class="layout-copy">
                    <strong class="text-danger">Account</strong>
                    2011-2016 &copy; <a href="//dyy.name">dyy.name</a>
                </div>
            </i-col>
        </Row>
    </div>
</template>

<style>
    ::-webkit-scrollbar{width: 0;}
    .layout{

        background: #f5f7f9;
        position: fixed;
        border-radius: 4px;
        height: 100%;
        width: 100%;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow-y: scroll;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{

        padding: 10px;
    }
    .layout-copy{
        background: #fff;
        text-align: center;
        padding: 10px 0 20px;
        color: #666;
        bottom:0;
        position:absolute;
        width:100%;
    }
    .layout-menu-left{
        background: #464c5b;
        min-height: 100%;
        overflow-y: scroll;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
    .fl {
        height: 100%;
    }
</style>

<script>
    import navigation from './comment/Navigation.vue'
    import top from './comment/Top.vue'

    export default {
        name: 'app',
        data:() => {
            return {
                spanLeft: 3,
                spanRight: 21
            }
        },
        methods:{
            toggleClick () {
                if (this.spanLeft === 3) {
                    this.spanLeft = 1;
                    this.spanRight = 23;
                } else {
                    this.spanLeft = 3;
                    this.spanRight = 21;
                }
            }

        },
        components:{
            navigation,
            top
        }
    }
</script>