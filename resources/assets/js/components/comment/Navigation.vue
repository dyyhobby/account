<template>
    <Menu active-name="1" theme="dark" width="auto" @on-select="onSelect" >
        <Affix>
            <div class="layout-logo-left"></div>
        </Affix>
        <Menu-item name="dashboard">
            <Icon type="stats-bars" :size="iconSize"></Icon>
            <span class="layout-text">控制面板</span>
        </Menu-item>
        <Menu-item name="user">
            <Icon type="person" :size="iconSize"></Icon>
            <span class="layout-text">用户管理</span>
        </Menu-item>
        <Menu-item name="application">
            <Icon type="android-apps" :size="iconSize"></Icon>
            <span class="layout-text">应用管理</span>
        </Menu-item>
        <Menu-item name="order">
            <Icon type="navicon" :size="iconSize"></Icon>
            <span class="layout-text">订单管理</span>
        </Menu-item>
    </Menu>
</template>

<script>
    export default {
        name: 'navigation',
        computed:{
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods:{
            onSelect:function(name){

                this.$router.push({name:name})

            }
        }
    }
</script>