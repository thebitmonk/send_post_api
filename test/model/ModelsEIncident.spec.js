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
    describe('ModelsEIncident', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsEIncident();
      });

      it('should create an instance of ModelsEIncident', function() {
        // TODO: update the code to test ModelsEIncident
        expect(instance).to.be.a(SendPostApi.ModelsEIncident);
      });

      it('should have the property assignedTo (base name: "assignedTo")', function() {
        // TODO: update the code to test the property assignedTo
        expect(instance).to.have.property('assignedTo');
        // expect(instance.assignedTo).to.be(expectedValueLiteral);
      });

      it('should have the property author (base name: "author")', function() {
        // TODO: update the code to test the property author
        expect(instance).to.have.property('author');
        // expect(instance.author).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property modifiedBy (base name: "modifiedBy")', function() {
        // TODO: update the code to test the property modifiedBy
        expect(instance).to.have.property('modifiedBy');
        // expect(instance.modifiedBy).to.be(expectedValueLiteral);
      });

      it('should have the property relatedIP (base name: "relatedIP")', function() {
        // TODO: update the code to test the property relatedIP
        expect(instance).to.have.property('relatedIP');
        // expect(instance.relatedIP).to.be(expectedValueLiteral);
      });

      it('should have the property relatedSubAccount (base name: "relatedSubAccount")', function() {
        // TODO: update the code to test the property relatedSubAccount
        expect(instance).to.have.property('relatedSubAccount');
        // expect(instance.relatedSubAccount).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property summary (base name: "summary")', function() {
        // TODO: update the code to test the property summary
        expect(instance).to.have.property('summary');
        // expect(instance.summary).to.be(expectedValueLiteral);
      });

      it('should have the property tags (base name: "tags")', function() {
        // TODO: update the code to test the property tags
        expect(instance).to.have.property('tags');
        // expect(instance.tags).to.be(expectedValueLiteral);
      });

    });
  });

}));
