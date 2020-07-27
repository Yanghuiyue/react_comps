import React from 'react'
import ProductRow from './productRow.js'
import {ThemeContext } from './context'

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  renderRowItems(items, filterText, inStockOnly) {
    let res = [], temp = [];
    items.forEach((item, index)=> {
      if(item.name.includes(filterText) && (inStockOnly ? item.stocked == true : true)){
        if(!temp.find( value => value === item.category)){
          res.push(<div key={item.category}>{item.category}</div>);
          temp.push(item.category);
        }
        res.push(<ProductRow name={item.name} price={item.price} key={index}/>)
      }
    });

    return res;
  }

  render() {
    const rowItems = this.renderRowItems(this.props.items,this.props.filterText,this.props.inStockOnly);
    let title = this.context.foreground;
    return (
      <div>
          <h2>{title}</h2>
          <span>Name</span><span>Price</span>
          <div>{rowItems}</div>
      </div>
    );
  }
}
ProductTable.contextType = ThemeContext;

export default ProductTable