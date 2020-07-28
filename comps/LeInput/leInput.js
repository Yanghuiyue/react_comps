import React from 'react'
import validJson  from './validaJson'
import './leInput.css'

class LeInput extends React.Component {
  constructor(props) {
    super(props)    
    this.onChange = this.onChange.bind(this)
    this.onEnter = this.onEnter.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.input = React.createRef()
    this.state = {
      showErrorMsg: false
    }
  }
  
  // 验证数据类型
  validDataType(value) {
    let vt =this.props.reg || this.props.vtype, res = false
    if(vt){
      res = validJson[vt]?.test(value)
    }
    this.setState({
      showErrorMsg: !res
    })
    return res
  }

  // 置空input value
  clear() {
    this.input.current.value = ""
    this.setState({
      showErrorMsg: false
    })
  }

  // 获得焦点
  focus() {
    this.input.current.focus()
  }

  // onchange 事件回调
  onChange(e) {
    let value = this.input.current.value, 
        isValid = this.validDataType(value)
    console.log('验证结果'+ isValid)
    if(isValid){
      this.props.onChange(value)
    }
    // this.setState({showErrorMsg: !isValid})
  }

  // 回车事件
  onEnter(e) {
    if(event.keyCode == "13") {
      let val = this.input.current.value
      this.props.onEnter && this.props.onEnter(val)
    }
  }

  //失去焦点事件
  onBlur(e) {
    let val = this.input.current.value
    this.props.onBlur && this.props.onBlur(val)
  }

  // 组件渲染到dom中后
  componentDidMount() {
    console.log(JSON.stringify(this.props), this.input.current.value)
    this.validDataType(this.input.current.value)
  }

  render() {
    let {label, errormsg} = this.props
    return (
      <div className={"leInput " + this.props.className}>
        <label>{label}</label>
        <input 
          {...this.props} 
          ref={this.input}  
          onChange={this.onChange} 
          onKeyPress={this.onEnter} 
          onBlur={this.onBlur}
        />
        {this.state.showErrorMsg && <span className="leInput_error">{errormsg} </span> }
      </div>
    );
  }
}

export default LeInput
