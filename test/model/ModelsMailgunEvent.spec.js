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
    instance = new SendPostApi.ModelsMailgunEvent();
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

  describe('ModelsMailgunEvent', function() {
    it('should create an instance of ModelsMailgunEvent', function() {
      // uncomment below and update the code to test ModelsMailgunEvent
      //var instance = new SendPostApi.ModelsMailgunEvent();
      //expect(instance).to.be.a(SendPostApi.ModelsMailgunEvent);
    });

    it('should have the property clientInfo (base name: "client-info")', function() {
      // uncomment below and update the code to test the property clientInfo
      //var instance = new SendPostApi.ModelsMailgunEvent();
      //expect(instance).to.be();
    });

    it('should have the property deliveryStatus (base name: "delivery-status")', function() {
      // uncomment below and update the code to test the property deliveryStatus
      //var instance = new SendPostApi.ModelsMailgunEvent();
      //expect(instance).to.be();
    });

    it('should have the property event (base name: "event")', function() {
      // uncomment below and update the code to test the property event
      //var instance = new SendPostApi.ModelsMailgunEvent();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SendPostApi.ModelsMailgunEvent();
      //expect(instance).to.be();
    });

    it('should have the property ip (base name: "ip")', function() {
      // uncomment below and update the code to test the property ip
      //var instance = new SendPostApi.ModelsMailgunEvent();
      //expect(instance).to.be();
    });

    it('should have the property recipient (base name: "recipient")', function() {
      // uncomment below and update the code to test the property recipient
      //var instance = new SendPostApi.ModelsMailgunEvent();
      //expect(instance).to.be();
    });

    it('should have the property severity (base name: "severity")', function() {
      // uncomment below and update the code to test the property severity
      //var instance = new SendPostApi.ModelsMailgunEvent();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new SendPostApi.ModelsMailgunEvent();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new SendPostApi.ModelsMailgunEvent();
      //expect(instance).to.be();
    });

    it('should have the property userVariables (base name: "user-variables")', function() {
      // uncomment below and update the code to test the property userVariables
      //var instance = new SendPostApi.ModelsMailgunEvent();
      //expect(instance).to.be();
    });

  });

}));
