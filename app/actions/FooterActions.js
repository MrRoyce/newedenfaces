'use strict';

import alt from '../alt';   // Glue to 'Alt' dispatcher

/*
 Alt actions can be created via a shorthand notation using generateActions method.
 From the documentation on Creating Actions — http://alt.js.org/docs/createActions/
 If all of your actions are just straight through dispatches
 you can shorthand generate them using this function.
 */

class FooterActions {
  constructor () {
    this.generateActions(
      'getTopCharactersSuccess',
      'getTopCharactersFail'
    );
  }

  /*
    The constructor above is Alt dispatcher short hand for:

    getTopCharactersSuccess(payload) {
      this.dispatch(payload);
    }

    getTopCharactersFail(payload) {
      this.dispatch(payload);
    }

   */

  getTopCharacters () {
    $.ajax({ url: '/api/characters/top' })
      .done((data) => {
        this.actions.getTopCharactersSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getTopCharactersFail(jqXhr);
      });
  }
}

/*
 And lastly, we wrap the FooterActions class with alt.createActions
 and then export it, so that we could import
 and use it in the Footer component.
 */

export default alt.createActions(FooterActions);
