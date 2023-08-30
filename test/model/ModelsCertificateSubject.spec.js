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
    instance = new SendPostApi.ModelsCertificateSubject();
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

  describe('ModelsCertificateSubject', function() {
    it('should create an instance of ModelsCertificateSubject', function() {
      // uncomment below and update the code to test ModelsCertificateSubject
      //var instance = new SendPostApi.ModelsCertificateSubject();
      //expect(instance).to.be.a(SendPostApi.ModelsCertificateSubject);
    });

    it('should have the property alternativeNames (base name: "alternativeNames")', function() {
      // uncomment below and update the code to test the property alternativeNames
      //var instance = new SendPostApi.ModelsCertificateSubject();
      //expect(instance).to.be();
    });

    it('should have the property commonName (base name: "commonName")', function() {
      // uncomment below and update the code to test the property commonName
      //var instance = new SendPostApi.ModelsCertificateSubject();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SendPostApi.ModelsCertificateSubject();
      //expect(instance).to.be();
    });

  });

}));
