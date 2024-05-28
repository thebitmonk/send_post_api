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
 * Swagger Codegen version: 2.4.41
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
    describe('ModelsIPDomainWarmupStatus', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsIPDomainWarmupStatus();
      });

      it('should create an instance of ModelsIPDomainWarmupStatus', function() {
        // TODO: update the code to test ModelsIPDomainWarmupStatus
        expect(instance).to.be.a(SendPostApi.ModelsIPDomainWarmupStatus);
      });

      it('should have the property autoWarmupDelay (base name: "autoWarmupDelay")', function() {
        // TODO: update the code to test the property autoWarmupDelay
        expect(instance).to.have.property('autoWarmupDelay');
        // expect(instance.autoWarmupDelay).to.be(expectedValueLiteral);
      });

      it('should have the property autoWarmupLastRunAt (base name: "autoWarmupLastRunAt")', function() {
        // TODO: update the code to test the property autoWarmupLastRunAt
        expect(instance).to.have.property('autoWarmupLastRunAt');
        // expect(instance.autoWarmupLastRunAt).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property currentWarmupStage (base name: "currentWarmupStage")', function() {
        // TODO: update the code to test the property currentWarmupStage
        expect(instance).to.have.property('currentWarmupStage');
        // expect(instance.currentWarmupStage).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property updated (base name: "updated")', function() {
        // TODO: update the code to test the property updated
        expect(instance).to.have.property('updated');
        // expect(instance.updated).to.be(expectedValueLiteral);
      });

      it('should have the property warmupCompleted (base name: "warmupCompleted")', function() {
        // TODO: update the code to test the property warmupCompleted
        expect(instance).to.have.property('warmupCompleted');
        // expect(instance.warmupCompleted).to.be(expectedValueLiteral);
      });

    });
  });

}));
