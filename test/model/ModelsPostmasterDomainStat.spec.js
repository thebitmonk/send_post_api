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
 * Swagger Codegen version: 2.4.37
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
    describe('ModelsPostmasterDomainStat', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsPostmasterDomainStat();
      });

      it('should create an instance of ModelsPostmasterDomainStat', function() {
        // TODO: update the code to test ModelsPostmasterDomainStat
        expect(instance).to.be.a(SendPostApi.ModelsPostmasterDomainStat);
      });

      it('should have the property _date (base name: "date")', function() {
        // TODO: update the code to test the property _date
        expect(instance).to.have.property('_date');
        // expect(instance._date).to.be(expectedValueLiteral);
      });

      it('should have the property dkimSuccess (base name: "dkimSuccess")', function() {
        // TODO: update the code to test the property dkimSuccess
        expect(instance).to.have.property('dkimSuccess');
        // expect(instance.dkimSuccess).to.be(expectedValueLiteral);
      });

      it('should have the property dmarcSuccess (base name: "dmarcSuccess")', function() {
        // TODO: update the code to test the property dmarcSuccess
        expect(instance).to.have.property('dmarcSuccess');
        // expect(instance.dmarcSuccess).to.be(expectedValueLiteral);
      });

      it('should have the property domainReputation (base name: "domainReputation")', function() {
        // TODO: update the code to test the property domainReputation
        expect(instance).to.have.property('domainReputation');
        // expect(instance.domainReputation).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property spam (base name: "spam")', function() {
        // TODO: update the code to test the property spam
        expect(instance).to.have.property('spam');
        // expect(instance.spam).to.be(expectedValueLiteral);
      });

      it('should have the property spfSuccess (base name: "spfSuccess")', function() {
        // TODO: update the code to test the property spfSuccess
        expect(instance).to.have.property('spfSuccess');
        // expect(instance.spfSuccess).to.be(expectedValueLiteral);
      });

    });
  });

}));
