//'use strict';

import alt from '../alt';
import {assign} from 'underscore';

class NavbarActions {
  constructor () {
    this.generateActions(
      'updateOnlineUsers',  //Sets online users count on Socket.IO event update.
      'updateAjaxAnimation', // Sets online users count on Socket.IO event update.
      'updateSearchQuery',   // Update search query value on keypress.
      'getCharacterCountSuccess',  // Returns total number of characters.
      'getCharacterCountFail', // Returns jQuery jqXhr object. http://api.jquery.com/jQuery.ajax/#jqXHR
      'findCharacterSuccess',
      'findCharacterFail'
    );
  }

  findCharacter (payload) {
    $.ajax({
      url: '/api/characters/search',
      data: { name: payload.searchQuery }
    })
      .done((data) => {
        assign(payload, data);
        this.actions.findCharacterSuccess(payload);
      })
      .fail(() => {
        this.actions.findCharacterFail(payload);
      });
  }

  // Fetch total number of characters from the server.
  getCharacterCount () {
    $.ajax({ url: '/api/characters/count' })
      .done((data) => {
        this.actions.getCharacterCountSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getCharacterCountFail(jqXhr);
      });
  }
}

export default alt.createActions(NavbarActions);
