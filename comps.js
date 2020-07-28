import React from 'react'
import ReactDom from 'react-dom'
import LeButton from './comps/LeButton/leButton'
import LeInput from './comps/LeInput/leInput';
import LeTextarea from './comps/LeTextarea/leTextarea'
import LeSelect from './comps/LeSelect/leSelect'
import demoJson from './demoJson'
import './static/css/index.css'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.textareaRef = React.createRef()
    this.leSelectRef = React.createRef()
    this.clearInput = this.clearInput.bind(this)
    this.focusInput = this.focusInput.bind(this)
    this.clearTextarea = this.clearTextarea.bind(this)
    this.getTextareaVal = this.getTextareaVal.bind(this)
    this.getSelectValues = this.getSelectValues.bind(this)
    this.state = {
      selectValues: ''
    }
  }

  buttonClick(text) {
    alert(text);
  }

  clearInput() {
    console.log(this.inputRef)
    this.inputRef.current.clear()
  }

  focusInput() {
    this.inputRef.current.focus()
  }

  clearTextarea() {
    // target.current.clear()
    this.textareaRef.current.clear()
  }

  getTextareaVal() {
    let val = this.textareaRef.current.getValue()
    console.log('textarea val: ' + val)
  }

  getSelectValues(selectValues) {
    // let selectValues = this.leSelectRef.current.getValues()
    console.log(selectValues)
    this.setState({selectValues})
  }

  render() {
    return (
      <>
      <div className="demo_wrapper">
        <LeButton handleButtonClick={this.buttonClick}>default button</LeButton>
        <LeButton handleButtonClick={this.buttonClick} type="dashed">dashed button</LeButton>
        <LeButton handleButtonClick={this.buttonClick} shape="round" type="primary">primary round button</LeButton>
        <LeButton handleButtonClick={this.buttonClick} disabled type="primary">primary disabled button</LeButton>
      </div>
      <div className="demo_wrapper">    
        <LeInput {...demoJson.input}  ref={this.inputRef}/>
        <LeButton handleButtonClick={this.clearInput} type="primary">clear up</LeButton>
        <LeButton handleButtonClick={this.focusInput} type="primary">focus</LeButton>
      </div>
      <div className="demo_wrapper">
        <LeTextarea {...demoJson.textarea} ref={this.textareaRef}/>
        <LeButton handleButtonClick={this.clearTextarea} type="primary">置空</LeButton>
        <LeButton handleButtonClick={this.getTextareaVal} type="primary">取值</LeButton>
      </div>
      <div className="demo_wrapper">
        <LeSelect ref={this.leSelectRef} className="select-demo" {...demoJson.select} onChange={this.getSelectValues}></LeSelect>
        <LeButton handleButtonClick={this.getSelectValues} type="primary">取值</LeButton>
        <div>{JSON.stringify(this.state.selectValues)}</div>
      </div>
      </>
    )
  }
}

let mountedNode = document.getElementById("root");
ReactDom.render(
  <Demo></Demo>,
  mountedNode
);




