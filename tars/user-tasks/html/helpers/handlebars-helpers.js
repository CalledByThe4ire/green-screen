const Handlebars = tars.packages.handlebars;
const moment = require('moment');
require('moment/locale/es');

moment.locale('ru');

/**
 * You can add your own helpers to handlebarsHelpers Object
 * All helpers from that object will be available in templates
 * @type {Object}
 */
const handlebarsHelpers = {
  concat() {
    let outStr = '';
    for (const arg in arguments) {
      if (typeof arguments[arg] !== 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  },
  chunk(array, size) {
    const results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    return results;
  },
  dateFormat(date, format) {
    return moment(date).format(format);
  },
  calcTime(date, count) {
    return moment(date, 'HH:mm:ss')
      .add(count, 'minutes')
      .format('HH:mm');
  },
  eq(param1, param2) {
    return param1 === param2;
  },
  notEq(param1, param2) {
    return param1 !== param2;
  }
};

module.exports = handlebarsHelpers;
