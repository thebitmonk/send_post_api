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
    instance = new SendPostApi.ModelsDomainAge();
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

  describe('ModelsDomainAge', function() {
    it('should create an instance of ModelsDomainAge', function() {
      // uncomment below and update the code to test ModelsDomainAge
      //var instance = new SendPostApi.ModelsDomainAge();
      //expect(instance).to.be.a(SendPostApi.ModelsDomainAge);
    });

    it('should have the property domainAgeFound (base name: "domainAgeFound")', function() {
      // uncomment below and update the code to test the property domainAgeFound
      //var instance = new SendPostApi.ModelsDomainAge();
      //expect(instance).to.be();
    });

    it('should have the property domainAgeInDays (base name: "domainAgeInDays")', function() {
      // uncomment below and update the code to test the property domainAgeInDays
      //var instance = new SendPostApi.ModelsDomainAge();
      //expect(instance).to.be();
    });

    it('should have the property domainAgeInMonths (base name: "domainAgeInMonths")', function() {
      // uncomment below and update the code to test the property domainAgeInMonths
      //var instance = new SendPostApi.ModelsDomainAge();
      //expect(instance).to.be();
    });

    it('should have the property domainAgeInYears (base name: "domainAgeInYears")', function() {
      // uncomment below and update the code to test the property domainAgeInYears
      //var instance = new SendPostApi.ModelsDomainAge();
      //expect(instance).to.be();
    });

    it('should have the property domainCreationDate (base name: "domainCreationDate")', function() {
      // uncomment below and update the code to test the property domainCreationDate
      //var instance = new SendPostApi.ModelsDomainAge();
      //expect(instance).to.be();
    });

    it('should have the property domainRegistered (base name: "domainRegistered")', function() {
      // uncomment below and update the code to test the property domainRegistered
      //var instance = new SendPostApi.ModelsDomainAge();
      //expect(instance).to.be();
    });

    it('should have the property host (base name: "host")', function() {
      // uncomment below and update the code to test the property host
      //var instance = new SendPostApi.ModelsDomainAge();
      //expect(instance).to.be();
    });

  });

}));
