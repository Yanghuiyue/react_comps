import React from 'react'

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  } 

  render() {   

    return (
      <div className="product_row_wrapper">
        <span>{this.props.name}</span>
        <span>{this.props.price}</span>        
      </div>
    );
  }
}

export default ProductRow