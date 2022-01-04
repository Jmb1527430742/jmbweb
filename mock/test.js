const list = [
{
    nick:'biaob',
    phone:'15274630742',
    name:'阿彪',
    subject:'计算机',
    job:'aaa',
    year:23,
    updateTime:'2020-9-22'
},
{
    nick:'lisi',
    phone:'15274630743',
    name:'李四',
    subject:'计算机',
    job:'aaa',
    year:22,
    updateTime:'2020-9-22'
},
{
    nick:'wangwu',
    phone:'15274630745',
    name:'王五',
    subject:'计算机',
    job:'aaa',
    year:23,
    updateTime:'2020-9-22'
}
]

module.exports = [
  {
    url: '/vue-admin-template/test/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: list.length,
          items: list
        }
      }
    }
  }
]
