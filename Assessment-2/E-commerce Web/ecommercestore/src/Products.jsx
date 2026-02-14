import React, { Component } from 'react'


export default class Products extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <>
      <div className="col-3 my-3 ">
        <div className="card">
          <p>
            <img src={this.props.image} alt={this.props.name} className="card-img-top" />
        </p>

      <div className="card-body" style={{ height: "200px" }}>
        
        
        <p className='name'>
            <strong>Name:</strong> {this.props.name}
        </p>

        <p className='price'>
            <strong>Price:</strong> {this.props.price}
        </p>

        <p className='old-price'>
            <strong>Old Price:</strong> {this.props.oldPrice}
        </p>

        <p className='offer'>
            <strong>Offer:</strong> {this.props.offer}
        </p>
  
      </div>
      </div>

      </div>
        
    </>
        
    )
  }
}
