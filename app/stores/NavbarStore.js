/* eslint-disable no-undef*/
'use strict';

import alt from '../alt';
import NavbarActions from '../actions/NavbarActions';

class NavbarStore {
  constructor () {
    this.bindActions(NavbarActions);
    this.totalCharacters = 0;
    this.onlineUsers = 0;
    this.searchQuery = '';
    this.ajaxAnimationClass = '';
  }

  onFindCharacterSuccess (payload) {
    payload.history.pushState(null, '/characters/' + payload.characterId);
  }

  onFindCharacterFail (payload) {
    payload.searchForm.classList.add('shake');
    setTimeout(() => {
      payload.searchForm.classList.remove('shake');
    }, 1000);
  }

  onUpdateOnlineUsers (data) {
    this.onlineUsers = data.onlineUsers;
  }

  onUpdateAjaxAnimation (className) {
    this.ajaxAnimationClass = className; //fadein or fadeout
  }

  /*
    Since onChange handler in the NavBar component returns an event object,
    we are using event.target.value to get the text
    field value inside onUpdateSearchQuery function.
   */

  onUpdateSearchQuery (event) {
    this.searchQuery = event.target.value;
  }

  onGetCharacterCountSuccess (data) {
    this.totalCharacters = data.count;
  }

  onGetCharacterCountFail (jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(NavbarStore);
