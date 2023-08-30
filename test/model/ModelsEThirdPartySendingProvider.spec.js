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
    instance = new SendPostApi.ModelsEThirdPartySendingProvider();
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

  describe('ModelsEThirdPartySendingProvider', function() {
    it('should create an instance of ModelsEThirdPartySendingProvider', function() {
      // uncomment below and update the code to test ModelsEThirdPartySendingProvider
      //var instance = new SendPostApi.ModelsEThirdPartySendingProvider();
      //expect(instance).to.be.a(SendPostApi.ModelsEThirdPartySendingProvider);
    });

    it('should have the property domain (base name: "domain")', function() {
      // uncomment below and update the code to test the property domain
      //var instance = new SendPostApi.ModelsEThirdPartySendingProvider();
      //expect(instance).to.be();
    });

    it('should have the property endpoint (base name: "endpoint")', function() {
      // uncomment below and update the code to test the property endpoint
      //var instance = new SendPostApi.ModelsEThirdPartySendingProvider();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new SendPostApi.ModelsEThirdPartySendingProvider();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SendPostApi.ModelsEThirdPartySendingProvider();
      //expect(instance).to.be();
    });

    it('should have the property oauthToken (base name: "oauthToken")', function() {
      // uncomment below and update the code to test the property oauthToken
      //var instance = new SendPostApi.ModelsEThirdPartySendingProvider();
      //expect(instance).to.be();
    });

    it('should have the property port (base name: "port")', function() {
      // uncomment below and update the code to test the property port
      //var instance = new SendPostApi.ModelsEThirdPartySendingProvider();
      //expect(instance).to.be();
    });

    it('should have the property retryTime (base name: "retryTime")', function() {
      // uncomment below and update the code to test the property retryTime
      //var instance = new SendPostApi.ModelsEThirdPartySendingProvider();
      //expect(instance).to.be();
    });

    it('should have the property secret (base name: "secret")', function() {
      // uncomment below and update the code to test the property secret
      //var instance = new SendPostApi.ModelsEThirdPartySendingProvider();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new SendPostApi.ModelsEThirdPartySendingProvider();
      //expect(instance).to.be();
    });

  });

}));
