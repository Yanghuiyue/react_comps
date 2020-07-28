import React from 'react'
import './leButton.css'

class LeButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  getClassNames() {
    let  {type, block, dangerous, shape, size} = this.props, baseClass = "leButton", classNames = [baseClass];

    type ? classNames.push(`${baseClass}-${type}`) : "";
    block ? classNames.push(`${baseClass}-block`) : "";
    dangerous ? classNames.push(`${baseClass}-dangerous`) : "";
    shape ? classNames.push(`${baseClass}-${shape}`) : "";
    size ? classNames.push(`${baseClass}-${size}`) : "";

    // classNames.push(`${baseClass}-${type}`).push(`${baseClass}-block`).push(``)

    return classNames.join(" ");
  }

  handleClick(e) {
    console.log(JSON.stringify(this.props));
    this.props.handleButtonClick(this.props.children);
  }

  render() {
    return (
      <button className={this.getClassNames()} onClick={this.handleClick} disabled={this.props.disabled}>
        <span className="le_btn_img"></span>
        <span className="le_btn_txt">{this.props.children}</span>
      </button>
    );
  };
}

export default LeButton