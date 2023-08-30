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
    instance = new SendPostApi.ModelsQEmailMessage();
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

  describe('ModelsQEmailMessage', function() {
    it('should create an instance of ModelsQEmailMessage', function() {
      // uncomment below and update the code to test ModelsQEmailMessage
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be.a(SendPostApi.ModelsQEmailMessage);
    });

    it('should have the property accountID (base name: "accountID")', function() {
      // uncomment below and update the code to test the property accountID
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property ampBody (base name: "ampBody")', function() {
      // uncomment below and update the code to test the property ampBody
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property attachments (base name: "attachments")', function() {
      // uncomment below and update the code to test the property attachments
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property attempt (base name: "attempt")', function() {
      // uncomment below and update the code to test the property attempt
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property emailType (base name: "emailType")', function() {
      // uncomment below and update the code to test the property emailType
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property headerBcc (base name: "headerBcc")', function() {
      // uncomment below and update the code to test the property headerBcc
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property headerCc (base name: "headerCc")', function() {
      // uncomment below and update the code to test the property headerCc
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property headerTo (base name: "headerTo")', function() {
      // uncomment below and update the code to test the property headerTo
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property headers (base name: "headers")', function() {
      // uncomment below and update the code to test the property headers
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property htmlBody (base name: "htmlBody")', function() {
      // uncomment below and update the code to test the property htmlBody
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property ipID (base name: "ipID")', function() {
      // uncomment below and update the code to test the property ipID
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property ipPool (base name: "ipPool")', function() {
      // uncomment below and update the code to test the property ipPool
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property localIP (base name: "localIP")', function() {
      // uncomment below and update the code to test the property localIP
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property messageID (base name: "messageID")', function() {
      // uncomment below and update the code to test the property messageID
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property preText (base name: "preText")', function() {
      // uncomment below and update the code to test the property preText
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property publicIP (base name: "publicIP")', function() {
      // uncomment below and update the code to test the property publicIP
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property replyTo (base name: "replyTo")', function() {
      // uncomment below and update the code to test the property replyTo
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property subAccountID (base name: "subAccountID")', function() {
      // uncomment below and update the code to test the property subAccountID
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property submittedAt (base name: "submittedAt")', function() {
      // uncomment below and update the code to test the property submittedAt
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property textBody (base name: "textBody")', function() {
      // uncomment below and update the code to test the property textBody
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "to")', function() {
      // uncomment below and update the code to test the property to
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property trackClicks (base name: "trackClicks")', function() {
      // uncomment below and update the code to test the property trackClicks
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

    it('should have the property trackOpens (base name: "trackOpens")', function() {
      // uncomment below and update the code to test the property trackOpens
      //var instance = new SendPostApi.ModelsQEmailMessage();
      //expect(instance).to.be();
    });

  });

}));
