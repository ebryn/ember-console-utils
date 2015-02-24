// jQuery plugins to get... emberView, emberController, emberTemplate, emberModel.
// Based on ember-console-utils,
// see https://github.com/ebryn/ember-console-utils/blob/master/ember-console-utils.js
// These helper plugins are not chainable, they return Ember objects not jQuery objects
;
(function ( $ ) {

  $.fn.emberView = function(){
    var viewEl = this[0];
    if (!viewEl.classList.contains( 'ember-view' )){
      viewEl = $(viewEl).parents( '.ember-view:first' )[0];
    }
    return Ember.View.views[viewEl.id];
  };

  $.fn.emberController = function(){
    return $(this).emberView().get( 'controller' );
  };

  $.fn.emberModel = function(){
    var viewObj = $(this).emberView(),
    viewContext = viewObj.get( 'context' ),
    viewController = viewObj.get( 'controller' );
    return viewContext === viewController ? viewController.get( 'content' ) : viewContext;
  };

  $.fn.emberTemplate = function(){
    var viewObj = $(this).emberView(),
      templateName = viewObj.templateName;
    if (!templateName) {
      templateName = viewObj.nearestWithProperty( 'templateName' ).templateName;
    }
    return templateName;
  };

}( jQuery ));