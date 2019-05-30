import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamForm extends Component {
  // formProps -> { input, meta }
  // if <Field> contains custom props, these props are added as they are (example: label prop)
  renderInput = ({ input, meta, label }) => {
    const inputProps = { ...input, autoComplete: 'off' };
    const className = "field " + (meta.error && meta.touched ? "error" : "");
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...inputProps} />
        {this.renderError(meta)}
      </div>
    )
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Title" />
        <Field name="description" component={this.renderInput} label="Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validateForm = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    // user did not provide a title
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  // if returned object is empty after validation then the form is valid
  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate: validateForm
})(StreamForm);
