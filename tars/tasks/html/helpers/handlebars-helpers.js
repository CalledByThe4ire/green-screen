'use strict';

const Handlebars = tars.packages.handlebars;

/**
 * You can add your own helpers to handlebarsHelpers Object
 * All helpers from that object will be available in templates
 * @type {Object}
 */
const handlebarsHelpers = {
  concat: function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  }
};

module.exports = handlebarsHelpers;
