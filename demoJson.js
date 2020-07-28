
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
  },
  textarea: {
    defaultValue: 'XX市，XX县，XX镇 ，XX小区，XX号',
    label: '住址：',
    placeholder: '请填写详细地址信息……',
    errormsg: '地址信息不得为空',
    onChange: (val) => console.log(val),
    onBlur: (val) => console.log('blur' + val)
  },
  select: {
    data: {
      "bj": "北京",
      "sh": "上海",
      "hhht": "呼和浩特"
    },
    defaultSelectedOpt: {
      "bj": "北京"
    },
    multiple: true
  }
}

export default demoJson