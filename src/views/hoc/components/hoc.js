
const HocValidateComFunc = (Conponent) =>({
    name : 'hoc-${Component.name}',
    props: ['rules'],
    data() {
        return {
            value:'',
            errMsg:''
        }
    },
    methods: {
        validate(value) {
            this.value = value
            const validateStatus = this.rules.reduce((pre, cur)=>{
                const check = cur && cur.test && cur.test(this.value)
                this.errMsg = check ? '' : cur.message
                return pre && cur
            },true)
            return validateStatus
        }
    },
    render() {
        return(
            <div>
                <Conponent initValue={this.value} on-blur={this.validate}></Conponent>
                <div>{this.errMsg}</div>
            </div>
        )
    },
})
export default HocValidateComFunc