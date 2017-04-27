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
        name:'Navigation',
        el:'#navigation',
        beforeCreate:() => { console.log('Navigation 组件开始创建...') },
        created:() => { console.log('Navigation 组件创建完成...') },
        beforeMount:() => { console.log('Navigation 组件开始挂载...') },
        mounted:() => { console.log('Navigation 组件挂载完成...') },
        beforeUpdate:() => { console.log('Navigation 组件开始更新...') },
        updated:() => { console.log('Navigation 组件更新完成...') },
        beforeDestroy:() => { console.log('Navigation 组件开始销毁...') },
        destroyed:() => { console.log('Navigation 组件销毁完成...') }
    }
</script>
