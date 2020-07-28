import React from 'react'
import './leSelect.css'

class LeSelect extends React.Component {
  constructor(props){
    super(props)
    this._hideDropdown = this._hideDropdown.bind(this)
    this._showDropdown = this._showDropdown.bind(this)
    this.input = React.createRef()
    this.state = {
      data: this.props.data,
      defaultSelectedOpt: this.props.defaultSelectedOpt,
      hideDropdown: "hide"
    }
  }

  _hideDropdown(e) {
    this.setState({
      hideDropdown: "hide"
    })
    console.log('blur')
  }

  _showDropdown(e) {
    this.setState({
      hideDropdown: ""
    })
    //this.input.current.focus()
    console.log('focus')
  }
  
  _switchSelected(key, value) {
    let delVals = this.state.defaultSelectedOpt
    if(this.props.multiple){
      delVals[key] ? delete delVals[key] : delVals[key] = value
    }else{
      let _temp = []
      delVals[key] ? delete delVals[key] : _temp[key] = value
      delVals = _temp
    }
    this.setState({
      defaultSelectedOpt: delVals
    })
    this._handleChange()
  }

  _removeSelectedItem(key, value) {
    let delVals = this.state.defaultSelectedOpt
    delete delVals[key]
    this.setState({
      defaultSelectedOpt:delVals
    })
    this._handleChange()
  }

  _handleChange() {
    if(this.props.onChange){
      this.props.onChange(this.state.defaultSelectedOpt);
    }
  }

  _renderSelectedOps() {
    let selectedOps = this.state.defaultSelectedOpt, res = []
    for(let key in selectedOps){
      let value = selectedOps[key]
      res.push(
        <span key={key} className="leSt-selector-item">
          <span className="leSt-select-item-content">{value}</span>
          <span className="leSt-select-item-remove" onClick={()=> this._removeSelectedItem(key, value)}>X</span>
        </span>
      )
    }
    return res
  }

  _renderOptions() {
    console.log(this.state.defaultSelectedOpt)
    let data = this.state.data, res = []
    for(let key in data) {
      let value = data[key]
      res.push(<div key={key} className={"leSt-opt-item " + (this.state.defaultSelectedOpt[key] ? "selected": "")} onClick={()=> this._switchSelected(key, value)}>{value}</div>)
    }
    return res
  }

  render() {
    let options = this._renderOptions()
    let selectedOps = this._renderSelectedOps()
    return(
      <div className={"leSelect " + this.props.className + (this.props.multiple ? " leSelect-multiple" : "")} onClick={this._showDropdown} onBlur={this._hideDropdown}>
        <div className='leSt-selector'>
          {selectedOps}
          <input className="leSt-input" ref={this.input} />
        </div>
        <div className={"leSt-opts-dropdown " + this.state.hideDropdown}>
          {options}
        </div>
      </div>
    )
  }
}

export default LeSelect