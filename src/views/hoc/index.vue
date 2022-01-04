<template>
    <div>
        <HocCustomCom :value="value" :rules="rules" />
    </div>
</template>

<script>

import HocFunc from "./components/hoc";
import CustonInput from "./components/index"
const HocCustomCom = HocFunc(CustonInput)

export default {
    components: {
        HocCustomCom
    },
    data() {
        return{
            value: '',
            rules: [
                {
                    test: function(value) {
                        return /\d+/.test(value)
                    },
                    message: '请输入一个数字'
                }
            ]

        }
    }
    
}
</script>