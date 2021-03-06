'use strict';

import alt from '../alt';
import AddCharacterActions from '../actions/AddCharacterActions';

/*
 nameValidationState and genderValidationState
 refers to the validation states
 on form controls provided by Bootstrap. http://getbootstrap.com/css/#forms-control-validation
 */

class AddCharacterStore {
  constructor () {
    this.bindActions(AddCharacterActions);
    this.name = '';
    this.gender = '';
    this.helpBlock = '';
    this.nameValidationState = '';
    this.genderValidationState = '';
  }

  onAddCharacterSuccess (successMessage) {
    this.nameValidationState = 'has-success';
    this.helpBlock = successMessage;
  }

  onAddCharacterFail (errorMessage) {
    this.nameValidationState = 'has-error';
    this.helpBlock = errorMessage;
  }

  onUpdateName (event) {
    this.name = event.target.value;
    this.nameValidationState = '';
    this.helpBlock = '';
  }

  onUpdateGender (event) {
    this.gender = event.target.value;
    this.genderValidationState = '';
  }

  onInvalidName () {
    this.nameValidationState = 'has-error';
    this.helpBlock = 'Please enter a character name.';
  }

  onInvalidGender () {
    this.genderValidationState = 'has-error';
  }
}

export default alt.createStore(AddCharacterStore);
