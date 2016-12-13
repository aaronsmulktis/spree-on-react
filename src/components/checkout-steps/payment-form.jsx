import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import Layout from "../layout";
import BaseCheckoutLayout from "./base-checkout-layout";

class PaymentForm extends Component {

  componentDidMount() {
    this.props.setCurrentCheckoutStep();
  };

  handlePaymentFormSubmit (formData) {
    this.props.handlePaymentFormSubmit(formData, this.props.order);
  };

  render() {
    let { order } = this.props;
    let paymentMethods = order.payment_methods || [];
    let paymentMethodMarkup = paymentMethods.map((paymentMethod, idx) => {
      return (
        <div key={ idx }>
          <label>
            <Field name={ `order[payments_attributes][0][payment_method_id]` }
                  component="input"
                  type="radio"
                  value={ `${paymentMethod.id}` } />
            { paymentMethod.name }
          </label>
        </div>
      )
    });
    return (
      <Layout>
        <BaseCheckoutLayout currentStep="delivery" displayLoader={ this.props.displayLoader }>
          <form onSubmit={ this.props.handleSubmit(this.handlePaymentFormSubmit.bind(this)) }>
            { paymentMethodMarkup }
            <button type="submit">Submit</button>
          </form>
        </BaseCheckoutLayout>
      </Layout>
    );
  };
};

PaymentForm = reduxForm({
  form: 'paymentForm'
})(PaymentForm);

export default PaymentForm;