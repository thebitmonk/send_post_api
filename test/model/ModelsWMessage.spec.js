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
    instance = new SendPostApi.ModelsWMessage();
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

  describe('ModelsWMessage', function() {
    it('should create an instance of ModelsWMessage', function() {
      // uncomment below and update the code to test ModelsWMessage
      //var instance = new SendPostApi.ModelsWMessage();
      //expect(instance).to.be.a(SendPostApi.ModelsWMessage);
    });

    it('should have the property accountID (base name: "AccountID")', function() {
      // uncomment below and update the code to test the property accountID
      //var instance = new SendPostApi.ModelsWMessage();
      //expect(instance).to.be();
    });

    it('should have the property from (base name: "From")', function() {
      // uncomment below and update the code to test the property from
      //var instance = new SendPostApi.ModelsWMessage();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "Groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instance = new SendPostApi.ModelsWMessage();
      //expect(instance).to.be();
    });

    it('should have the property IPID (base name: "IPID")', function() {
      // uncomment below and update the code to test the property IPID
      //var instance = new SendPostApi.ModelsWMessage();
      //expect(instance).to.be();
    });

    it('should have the property messageType (base name: "MessageType")', function() {
      // uncomment below and update the code to test the property messageType
      //var instance = new SendPostApi.ModelsWMessage();
      //expect(instance).to.be();
    });

    it('should have the property messageUUID (base name: "MessageUUID")', function() {
      // uncomment below and update the code to test the property messageUUID
      //var instance = new SendPostApi.ModelsWMessage();
      //expect(instance).to.be();
    });

    it('should have the property mockMessage (base name: "MockMessage")', function() {
      // uncomment below and update the code to test the property mockMessage
      //var instance = new SendPostApi.ModelsWMessage();
      //expect(instance).to.be();
    });

    it('should have the property mockTimeShift (base name: "MockTimeShift")', function() {
      // uncomment below and update the code to test the property mockTimeShift
      //var instance = new SendPostApi.ModelsWMessage();
      //expect(instance).to.be();
    });

    it('should have the property sMTPCode (base name: "SMTPCode")', function() {
      // uncomment below and update the code to test the property sMTPCode
      //var instance = new SendPostApi.ModelsWMessage();
      //expect(instance).to.be();
    });

    it('should have the property sMTPDescription (base name: "SMTPDescription")', function() {
      // uncomment below and update the code to test the property sMTPDescription
      //var instance = new SendPostApi.ModelsWMessage();
      //expect(instance).to.be();
    });

    it('should have the property subAccountID (base name: "SubAccountID")', function() {
      // uncomment below and update the code to test the property subAccountID
      //var instance = new SendPostApi.ModelsWMessage();
      //expect(instance).to.be();
    });

    it('should have the property submittedAt (base name: "SubmittedAt")', function() {
      // uncomment below and update the code to test the property submittedAt
      //var instance = new SendPostApi.ModelsWMessage();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "To")', function() {
      // uncomment below and update the code to test the property to
      //var instance = new SendPostApi.ModelsWMessage();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "Type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new SendPostApi.ModelsWMessage();
      //expect(instance).to.be();
    });

  });

}));
