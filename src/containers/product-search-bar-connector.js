import { connect } from 'react-redux';

import Actions from '../actions';

import ProductsAPI from '../apis/products';

import ProductSearchBar from '../components/product-search-bar';

const mapStateToProps = (state, ownProps) => {
  return {
    searchTerm: state.searchTerm
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (searchTerm) => {
      ProductsAPI.getList(searchTerm).then((response) => {
        if(response.statusCode === 200) {
          let fetchedProducts = JSON.parse(response.text).products;
          dispatch(Actions.addProducts(fetchedProducts));
          dispatch(Actions.addSearchTerm(searchTerm));
        }
      });
    }
  };
};

const ProductSearchBarConnector = connect(mapStateToProps, mapDispatchToProps)(ProductSearchBar);

export default ProductSearchBarConnector;
