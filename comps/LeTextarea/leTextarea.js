import React from 'react'
import './leTextarea.css'

class LeTextarea extends React.Component {
  constructor(props) {
    super(props)
    this.onBlur = this.onBlur.bind(this)
    this.onChange = this.onChange.bind(this)
    this.textarea = React.createRef()
    this.classNames = this.props.classNames?.join(" ") || ""
    this.state = {
      showErrorMsg: false
    }
  }

  getValue() {
    return this.textarea.current.value
  }

  onBlur(e) {
    this.props.onBlur(e.target.value)
    this.showErrMsg()
  }

  onChange(e) {
    this.props.onChange(e.target.value)
    this.showErrMsg()
  }

  clear() {
    this.textarea.current.value = ""
    this.showErrMsg()
  }

  showErrMsg() {
    let flag = false
    if(!this.props.required){
      flag = this.textarea.current.value === "" ? true : false
    }
    this.setState({
      showErrorMsg: flag
    })
  }  

  render() {

    let {defaultValue, placeholder} = this.props 
    let items = {defaultValue, placeholder} 
    return (
      <div className={ "leTextarea " + this.classNames }>
        <label>{this.props.label}</label>
        <textarea ref={this.textarea} {...items} onBlur={this.onBlur} onChange={this.onChange}></textarea>
        {this.state.showErrorMsg && <span className="leTextarea-error">{this.props.errormsg}</span>}
      </div>
    )
  }
} 

export default LeTextarea
