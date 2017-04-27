<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Laravel Vue Single Page Application</div>

                    <div class="panel-body">
                        I'm an example component!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'example',
        beforeCreate:() => { console.log('Example 组件开始创建...') },
        created:() => { console.log('Example 组件创建完成...') },
        beforeMount:() => { console.log('Example 组件开始挂载...') },
        mounted:() => { console.log('Example 组件挂载完成...') },
        beforeUpdate:() => { console.log('Example 组件开始更新...') },
        updated:() => { console.log('Example 组件更新完成...') },
        beforeDestroy:() => { console.log('Example 组件开始销毁...') },
        destroyed:() => { console.log('Example 组件销毁完成...') },
        beforeRouteEnter:(to, from, next) => {

            console.log('路由进入 Example 组件');

            next();

        },
        beforeRouterUpdate:(to, form, next) => {

            console.log('路由改变，Example 组件被复用');

            next();

        },
        beforeRouteLeave:(to, form, next) => {

            console.log('路由离开 Example 组件');

            next();

        }
    }
</script>
