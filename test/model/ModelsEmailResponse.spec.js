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
    instance = new SendPostApi.ModelsEmailResponse();
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

  describe('ModelsEmailResponse', function() {
    it('should create an instance of ModelsEmailResponse', function() {
      // uncomment below and update the code to test ModelsEmailResponse
      //var instance = new SendPostApi.ModelsEmailResponse();
      //expect(instance).to.be.a(SendPostApi.ModelsEmailResponse);
    });

    it('should have the property errorCode (base name: "errorCode")', function() {
      // uncomment below and update the code to test the property errorCode
      //var instance = new SendPostApi.ModelsEmailResponse();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new SendPostApi.ModelsEmailResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageId (base name: "messageId")', function() {
      // uncomment below and update the code to test the property messageId
      //var instance = new SendPostApi.ModelsEmailResponse();
      //expect(instance).to.be();
    });

    it('should have the property submittedAt (base name: "submittedAt")', function() {
      // uncomment below and update the code to test the property submittedAt
      //var instance = new SendPostApi.ModelsEmailResponse();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "to")', function() {
      // uncomment below and update the code to test the property to
      //var instance = new SendPostApi.ModelsEmailResponse();
      //expect(instance).to.be();
    });

  });

}));
