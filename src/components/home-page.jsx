import React, { Component } from 'react';

import FilterBarConnector from '../containers/filter-bar-connector';
import ProductList from './product-list';

class HomePage extends Component {
  componentDidMount() {
    this.props.triggerInitialSetup();
  }

  render() {
    return (
      <div className="home-page row">
        <div className="col-md-3">
          <FilterBarConnector />
        </div>
        <div className="col-md-9">
          <ProductList productList={ this.props.products } />
        </div>
      </div>
    );
  }
};

export default HomePage;