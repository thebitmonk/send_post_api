/*
 * SendPost API
 * Email API and SMTP relay to not just send and measure email sending, but also alert and optimise. We provide you with tools, expertise and support needed to reliably deliver emails to your customers inboxes on time, every time.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.31
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
    describe('ModelsSystemDomain', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsSystemDomain();
      });

      it('should create an instance of ModelsSystemDomain', function() {
        // TODO: update the code to test ModelsSystemDomain
        expect(instance).to.be.a(SendPostApi.ModelsSystemDomain);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property dkim (base name: "dkim")', function() {
        // TODO: update the code to test the property dkim
        expect(instance).to.have.property('dkim');
        // expect(instance.dkim).to.be(expectedValueLiteral);
      });

      it('should have the property dkimConfig (base name: "dkimConfig")', function() {
        // TODO: update the code to test the property dkimConfig
        expect(instance).to.have.property('dkimConfig');
        // expect(instance.dkimConfig).to.be(expectedValueLiteral);
      });

      it('should have the property dkimVerified (base name: "dkimVerified")', function() {
        // TODO: update the code to test the property dkimVerified
        expect(instance).to.have.property('dkimVerified');
        // expect(instance.dkimVerified).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property mailboxVerified (base name: "mailboxVerified")', function() {
        // TODO: update the code to test the property mailboxVerified
        expect(instance).to.have.property('mailboxVerified');
        // expect(instance.mailboxVerified).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property spf (base name: "spf")', function() {
        // TODO: update the code to test the property spf
        expect(instance).to.have.property('spf');
        // expect(instance.spf).to.be(expectedValueLiteral);
      });

      it('should have the property spfVerified (base name: "spfVerified")', function() {
        // TODO: update the code to test the property spfVerified
        expect(instance).to.have.property('spfVerified');
        // expect(instance.spfVerified).to.be(expectedValueLiteral);
      });

      it('should have the property track (base name: "track")', function() {
        // TODO: update the code to test the property track
        expect(instance).to.have.property('track');
        // expect(instance.track).to.be(expectedValueLiteral);
      });

      it('should have the property trackVerified (base name: "trackVerified")', function() {
        // TODO: update the code to test the property trackVerified
        expect(instance).to.have.property('trackVerified');
        // expect(instance.trackVerified).to.be(expectedValueLiteral);
      });

    });
  });

}));
