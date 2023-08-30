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
    instance = new SendPostApi.AccountSettingApi();
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

  describe('AccountSettingApi', function() {
    describe('accountSettingRouterCheckDedicatedIPExist', function() {
      it('should call accountSettingRouterCheckDedicatedIPExist successfully', function(done) {
        //uncomment below and update the code to test accountSettingRouterCheckDedicatedIPExist
        //instance.accountSettingRouterCheckDedicatedIPExist(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountSettingRouterGetAccount', function() {
      it('should call accountSettingRouterGetAccount successfully', function(done) {
        //uncomment below and update the code to test accountSettingRouterGetAccount
        //instance.accountSettingRouterGetAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountSettingRouterUpdate', function() {
      it('should call accountSettingRouterUpdate successfully', function(done) {
        //uncomment below and update the code to test accountSettingRouterUpdate
        //instance.accountSettingRouterUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
