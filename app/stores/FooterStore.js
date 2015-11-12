/* eslint-disable no-undef*/
'use strict';

import alt from '../alt';
import FooterActions from '../actions/FooterActions';

/*
 All instance variables of the store, i.e. values assigned to this, will become part of the state. When Footer component initially calls FooterStore.getState() it receives the current state of the store specified in the constructor (initially just an empty array, and mapping over an empty array returns another empty array, hence nothing is rendered when the Footer component is first loaded).
 */
class FooterStore {
  constructor () {
    // bindActions is a magic Alt method which binds actions to their handlers defined in the store.
    this.bindActions(FooterActions);
    this.characters = [];
  }

  /*
   That is why for actions getTopCharactersSuccess and getTopCharactersFail defined in FooterActions.js we have corresponding store handlers called onGetTopCharactersSuccess and onGetTopCharactersFail in FooterStore.js.
   */

  onGetTopCharactersSuccess (data) {
    this.characters = data.slice(0, 5);
  }

  onGetTopCharactersFail (jqXhr) {
    // Handle multiple response formats, fallback to HTTP status code number.
    // N.B. toastr is included via bower at build time
    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  }
}

export default alt.createStore(FooterStore);
