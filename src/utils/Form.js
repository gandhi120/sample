import _ from 'lodash';

export default class Form {
  constructor(formState) {
    this.formState = formState;
  }

  // Compose fields into a form
  getValues() {
    return _.mapValues(this.formState.$, '$');
  }

  onSubmit = async () => {
    //  Validate all fields
    const res = await this.formState.validate();

    // If any errors you would know
    if (res.hasError) {
      return {success: false, error: this.formState.error, data: null};
    }

    // Yay .. all good. Do what you want with it
    const values = this.getValues();
    return {success: true, data: values, error: null};
  };
}
