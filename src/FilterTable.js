import React from 'react'
import SearchBar from './searchBar.js'
import ProductTable from './productTable.js'
import {ThemeContext, Themes, themes} from './context'

class FilterTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileterText: '',
      inStockOnly: false
    }
    this.onTextChange = this.onTextChange.bind(this);
    this.onStockOnlyChange = this.onStockOnlyChange.bind(this);    
  }

  onTextChange(fileterText) {
    this.setState({
      fileterText
    });
  }

  onStockOnlyChange(inStockOnly) {
    this.setState({
      inStockOnly
    });
  }

  render() {
    let light = themes.light
    return(
      <ThemeContext.Provider value={light}>
        <div>        
          <SearchBar 
            text={this.state.fileterText} inStockOnly={this.state.inStockOnly} 
            onTextChange={this.onTextChange}
            onStockOnlyChange={this.onStockOnlyChange}
          />
          <ProductTable items={this.props.items} filterText={this.state.fileterText} inStockOnly={this.state.inStockOnly}/>
          {/* <h1>{this.state.fileterText} -- {this.state.inStockOnly}</h1> */}
        </div>
      </ThemeContext.Provider>
    );
  }

}

export default FilterTable