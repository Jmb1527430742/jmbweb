<template>
  <div class="test-wrapper">
    <list-layout>
        <template slot="header">
            <conditions/>
        </template>

        <template slot="content">
            <al-table :column="formData.column" :data="formData.list" :pagination="true">

            </al-table>
        </template>
    </list-layout>
  </div>
</template>

<script>
import { getTestList } from "@/api/test.js"

import ListLayout from "@/components/ListLayout/index.vue"   //引用插槽
import AlTable from "@/components/AlTable/lb-table.vue";
import Conditions from "./components/conditions/index.vue"
export default {
    components:{
        ListLayout,
        AlTable,
        Conditions
    },
    data() {
        return {
            formData: {
                column:[
                    {
                        prop:'nick',
                        label:'昵称'
                    },
                    {
                        prop:'phone',
                        label:'手机号'
                    },
                    {
                        prop:'name',
                        label:'真实姓名'
                    },
                    {
                        prop:'subject',
                        label:'所属学科'
                    },
                    {
                        prop:'job',
                        label:'职位'
                    },
                    {
                        prop:'year',
                        label:'工作年限'
                    },
                    {
                        prop:'updateTime',
                        label:'录入时间'
                    },
                    {
                        prop:'actions',
                        label:'操作',
                        render(_,scope) {
                            return (<el-button>操作</el-button>)
                        }
                    },
                ],
            list: [] 
            }
        }
    },
    created (){
        getTestList().then((res) =>{
            const { code,data } = res;
            if(Number(code) === 20000) {
                const { items, total} = data
                this.formData.list = items
            }
            console.log('test',res);
        });
    },

}
</script>

<style>

</style>