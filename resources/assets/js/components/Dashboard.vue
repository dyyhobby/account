<template>
    <div>
        仪表板控制台
    </div>
</template>

<script>
    export default {
        name: 'dashboard',
        beforeCreate:() => {

            console.log('Dashboard Before Create');

        },
        created:() => {

            console.log('Dashboard Created');

        },

        beforeDestroy:() => { console.log('Dashboard Before Destroy'); },

        destroyed:() => { console.log('Dashboard Destroyed'); }
    }
</script>