/*jshint node:true*/
'use strict';

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'shared-i18n-engine',
    environment: environment,
    i18n: {
      defaultLocale: 'en'
    }
  };
  return ENV;
};
