import React from 'react'
import {ThemeContext, Themes} from './context'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleStockOnlyChange = this.handleStockOnlyChange.bind(this);
  }

  handleChangeText(e) {
    this.props.onTextChange(e.target.value);
    this.context.foreground = e.target.value;
  }

  handleStockOnlyChange(e) {
    this.props.onStockOnlyChange(e.target.checked);
   //console.log(this.props,e.target.checked);
  }

  render() {
    return (
      <div>
        <input 
          placeholder="Search..." 
          value={this.props.text ? this.props.text : null}
          onChange={this.handleChangeText}
        />
        <input 
          id="showInStock" 
          type="checkbox" 
          value={null}
          onChange={this.handleStockOnlyChange}
        />
        <label htmlFor="showInStock" >Only show products in stock</label>
      </div>
    );
  }
}

SearchBar.contextType = ThemeContext;
export default SearchBar