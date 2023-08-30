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
    instance = new SendPostApi.ModelsAccountIPPool();
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

  describe('ModelsAccountIPPool', function() {
    it('should create an instance of ModelsAccountIPPool', function() {
      // uncomment below and update the code to test ModelsAccountIPPool
      //var instance = new SendPostApi.ModelsAccountIPPool();
      //expect(instance).to.be.a(SendPostApi.ModelsAccountIPPool);
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new SendPostApi.ModelsAccountIPPool();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SendPostApi.ModelsAccountIPPool();
      //expect(instance).to.be();
    });

    it('should have the property ips (base name: "ips")', function() {
      // uncomment below and update the code to test the property ips
      //var instance = new SendPostApi.ModelsAccountIPPool();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SendPostApi.ModelsAccountIPPool();
      //expect(instance).to.be();
    });

    it('should have the property routingMetaData (base name: "routingMetaData")', function() {
      // uncomment below and update the code to test the property routingMetaData
      //var instance = new SendPostApi.ModelsAccountIPPool();
      //expect(instance).to.be();
    });

    it('should have the property routingStrategy (base name: "routingStrategy")', function() {
      // uncomment below and update the code to test the property routingStrategy
      //var instance = new SendPostApi.ModelsAccountIPPool();
      //expect(instance).to.be();
    });

    it('should have the property thirdPartySendingProviders (base name: "thirdPartySendingProviders")', function() {
      // uncomment below and update the code to test the property thirdPartySendingProviders
      //var instance = new SendPostApi.ModelsAccountIPPool();
      //expect(instance).to.be();
    });

    it('should have the property toAccountIPPools (base name: "toAccountIPPools")', function() {
      // uncomment below and update the code to test the property toAccountIPPools
      //var instance = new SendPostApi.ModelsAccountIPPool();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new SendPostApi.ModelsAccountIPPool();
      //expect(instance).to.be();
    });

  });

}));
