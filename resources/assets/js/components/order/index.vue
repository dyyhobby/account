<template>
    <div>
        <Table border :context="self" :columns="columns7" :data="orderList"></Table>
    </div>
</template>

<script>
    import iButton from 'iview/src/components/button';
    import icon from 'iview/src/components/icon';
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
                self: this,
                columns7: [
                    {
                        title: 'ID',
                        key: 'id',
                        render (row, column, index) {
                            return `<Icon type="person"></Icon> <strong>${row.name}</strong>`;
                        }
                    },
                    {
                        title: 'No',
                        key: 'no'
                    },
                    {
                        title: '名称',
                        key: 'name'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render (row, column, index) {
                            return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
                        }
                    }
                ]
            }
        },
        methods: {
            show (index) {

                this.$Modal.info({
                    title: '订单信息',
                    content: `ID：${this.orderList[index].id}<br>编号：${this.orderList[index].no}<br>名称：${this.orderList[index].name}`
                })
            },
            remove (index) {
                this.orderList.splice(index, 1);
            }
        },
        beforeCreate:function(){
            this.$store.dispatch('getOrders');
        },
        components:{
            iButton,
            icon
        },
        computed:{
            orderList(){

                return this.$store.getters.getOrderList

            }
        }
    }
</script>