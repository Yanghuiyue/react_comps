import React from 'react'
import ReactDom from 'react-dom'
import LeButton from './comps/LeButton/leButton'
import LeInput from './comps/LeInput/leInput';
import demoJson from './demoJson'
import './static/css/index.css'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.clearInput = this.clearInput.bind(this)
    this.focusInput = this.focusInput.bind(this)
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
      </>
    )
  }
}

let mountedNode = document.getElementById("root");
ReactDom.render(
  <Demo></Demo>,
  mountedNode
);




