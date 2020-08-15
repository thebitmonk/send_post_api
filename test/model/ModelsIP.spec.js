/*
 * SendPost API
 * SendPost API to send transactional emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendx.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SendPostApi);
  }
}(this, function(expect, SendPostApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ModelsIP', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsIP();
      });

      it('should create an instance of ModelsIP', function() {
        // TODO: update the code to test ModelsIP
        expect(instance).to.be.a(SendPostApi.ModelsIP);
      });

      it('should have the property aolSettings (base name: "aolSettings")', function() {
        // TODO: update the code to test the property aolSettings
        expect(instance).to.have.property('aolSettings');
        // expect(instance.aolSettings).to.be(expectedValueLiteral);
      });

      it('should have the property autoWarmupEnabled (base name: "autoWarmupEnabled")', function() {
        // TODO: update the code to test the property autoWarmupEnabled
        expect(instance).to.have.property('autoWarmupEnabled');
        // expect(instance.autoWarmupEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property autoWarmupStage (base name: "autoWarmupStage")', function() {
        // TODO: update the code to test the property autoWarmupStage
        expect(instance).to.have.property('autoWarmupStage');
        // expect(instance.autoWarmupStage).to.be(expectedValueLiteral);
      });

      it('should have the property comcastSettings (base name: "comcastSettings")', function() {
        // TODO: update the code to test the property comcastSettings
        expect(instance).to.have.property('comcastSettings');
        // expect(instance.comcastSettings).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property defaultSettings (base name: "defaultSettings")', function() {
        // TODO: update the code to test the property defaultSettings
        expect(instance).to.have.property('defaultSettings');
        // expect(instance.defaultSettings).to.be(expectedValueLiteral);
      });

      it('should have the property gmailSettings (base name: "gmailSettings")', function() {
        // TODO: update the code to test the property gmailSettings
        expect(instance).to.have.property('gmailSettings');
        // expect(instance.gmailSettings).to.be(expectedValueLiteral);
      });

      it('should have the property gmxSettings (base name: "gmxSettings")', function() {
        // TODO: update the code to test the property gmxSettings
        expect(instance).to.have.property('gmxSettings');
        // expect(instance.gmxSettings).to.be(expectedValueLiteral);
      });

      it('should have the property icloudSettings (base name: "icloudSettings")', function() {
        // TODO: update the code to test the property icloudSettings
        expect(instance).to.have.property('icloudSettings');
        // expect(instance.icloudSettings).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property mailruSettings (base name: "mailruSettings")', function() {
        // TODO: update the code to test the property mailruSettings
        expect(instance).to.have.property('mailruSettings');
        // expect(instance.mailruSettings).to.be(expectedValueLiteral);
      });

      it('should have the property microsoftSettings (base name: "microsoftSettings")', function() {
        // TODO: update the code to test the property microsoftSettings
        expect(instance).to.have.property('microsoftSettings');
        // expect(instance.microsoftSettings).to.be(expectedValueLiteral);
      });

      it('should have the property publicIP (base name: "publicIP")', function() {
        // TODO: update the code to test the property publicIP
        expect(instance).to.have.property('publicIP');
        // expect(instance.publicIP).to.be(expectedValueLiteral);
      });

      it('should have the property qqSettings (base name: "qqSettings")', function() {
        // TODO: update the code to test the property qqSettings
        expect(instance).to.have.property('qqSettings');
        // expect(instance.qqSettings).to.be(expectedValueLiteral);
      });

      it('should have the property reverseDNSHostname (base name: "reverseDNSHostname")', function() {
        // TODO: update the code to test the property reverseDNSHostname
        expect(instance).to.have.property('reverseDNSHostname');
        // expect(instance.reverseDNSHostname).to.be(expectedValueLiteral);
      });

      it('should have the property systemDomain (base name: "systemDomain")', function() {
        // TODO: update the code to test the property systemDomain
        expect(instance).to.have.property('systemDomain');
        // expect(instance.systemDomain).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property yahooSettings (base name: "yahooSettings")', function() {
        // TODO: update the code to test the property yahooSettings
        expect(instance).to.have.property('yahooSettings');
        // expect(instance.yahooSettings).to.be(expectedValueLiteral);
      });

      it('should have the property yandexSettings (base name: "yandexSettings")', function() {
        // TODO: update the code to test the property yandexSettings
        expect(instance).to.have.property('yandexSettings');
        // expect(instance.yandexSettings).to.be(expectedValueLiteral);
      });

      it('should have the property zohoSettings (base name: "zohoSettings")', function() {
        // TODO: update the code to test the property zohoSettings
        expect(instance).to.have.property('zohoSettings');
        // expect(instance.zohoSettings).to.be(expectedValueLiteral);
      });

    });
  });

}));
