
const demoJson = {
  input: {
    defaultValue: '123232313213',
    label: '身份证：',
    placeholder: 'id code',
    vtype: 'id',
    reg: '',
    errormsg: '请输入正确身份证信息!',
    onChange: (val) => console.log(val),
    onEnter: (val) => console.log('enter' + val)
  }
}

export default demoJson