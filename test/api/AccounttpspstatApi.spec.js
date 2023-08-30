/**
 * SendPost API
 * Email API and SMTP relay to not just send and measure email sending, but also alert and optimise. We provide you with tools, expertise and support needed to reliably deliver emails to your customers inboxes on time, every time.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SendPostApi);
  }
}(this, function(expect, SendPostApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SendPostApi.AccountTpspStatApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AccountTpspStatApi', function() {
    describe('thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStats', function() {
      it('should call thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStats successfully', function(done) {
        //uncomment below and update the code to test thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStats
        //instance.thirdPartyProviderStatRouterGetAllAggregateThirdPartyProvidersStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProvider', function() {
      it('should call thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProvider successfully', function(done) {
        //uncomment below and update the code to test thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProvider
        //instance.thirdPartyProviderStatRouterGetAllAggregatedProviderStatsForAThirdPartyProvider(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProvider', function() {
      it('should call thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProvider successfully', function(done) {
        //uncomment below and update the code to test thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProvider
        //instance.thirdPartyProviderStatRouterGetAllAggregatedSubAccountStatsForAnThirdPartyProvider(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('thirdPartyProviderStatRouterGetAllThirdPartyProvidersStats', function() {
      it('should call thirdPartyProviderStatRouterGetAllThirdPartyProvidersStats successfully', function(done) {
        //uncomment below and update the code to test thirdPartyProviderStatRouterGetAllThirdPartyProvidersStats
        //instance.thirdPartyProviderStatRouterGetAllThirdPartyProvidersStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
