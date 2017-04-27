<template>
    <div id="app">
        <div>
            <router-link to="/">Example</router-link>
            <router-link to="/user">User</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    beforeCreate:() => { console.log('App 组件开始创建...') },
    created:() => { console.log('App 组件创建完成...') },
    beforeMount:() => { console.log('App 组件开始挂载...') },
    mounted:() => { console.log('App 组件挂载完成...') },
    beforeUpdate:() => { console.log('App 组件开始更新...') },
    updated:() => { console.log('App 组件更新完成...') },
    beforeDestroy:() => { console.log('App 组件开始销毁...') },
    destroyed:() => { console.log('App 组件销毁完成...') }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>