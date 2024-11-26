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
 * Swagger Codegen version: 2.4.43
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
    describe('ModelsDomain', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsDomain();
      });

      it('should create an instance of ModelsDomain', function() {
        // TODO: update the code to test ModelsDomain
        expect(instance).to.be.a(SendPostApi.ModelsDomain);
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

      it('should have the property dmarc (base name: "dmarc")', function() {
        // TODO: update the code to test the property dmarc
        expect(instance).to.have.property('dmarc');
        // expect(instance.dmarc).to.be(expectedValueLiteral);
      });

      it('should have the property dmarcVerified (base name: "dmarcVerified")', function() {
        // TODO: update the code to test the property dmarcVerified
        expect(instance).to.have.property('dmarcVerified');
        // expect(instance.dmarcVerified).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property returnPath (base name: "returnPath")', function() {
        // TODO: update the code to test the property returnPath
        expect(instance).to.have.property('returnPath');
        // expect(instance.returnPath).to.be(expectedValueLiteral);
      });

      it('should have the property returnPathVerified (base name: "returnPathVerified")', function() {
        // TODO: update the code to test the property returnPathVerified
        expect(instance).to.have.property('returnPathVerified');
        // expect(instance.returnPathVerified).to.be(expectedValueLiteral);
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

      it('should have the property verified (base name: "verified")', function() {
        // TODO: update the code to test the property verified
        expect(instance).to.have.property('verified');
        // expect(instance.verified).to.be(expectedValueLiteral);
      });

    });
  });

}));
