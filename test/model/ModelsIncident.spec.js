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
 * Swagger Codegen version: 2.4.32
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
    describe('ModelsIncident', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsIncident();
      });

      it('should create an instance of ModelsIncident', function() {
        // TODO: update the code to test ModelsIncident
        expect(instance).to.be.a(SendPostApi.ModelsIncident);
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

      it('should have the property closed (base name: "closed")', function() {
        // TODO: update the code to test the property closed
        expect(instance).to.have.property('closed');
        // expect(instance.closed).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
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

      it('should have the property updated (base name: "updated")', function() {
        // TODO: update the code to test the property updated
        expect(instance).to.have.property('updated');
        // expect(instance.updated).to.be(expectedValueLiteral);
      });

    });
  });

}));
