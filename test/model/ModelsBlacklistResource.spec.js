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
    describe('ModelsBlacklistResource', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsBlacklistResource();
      });

      it('should create an instance of ModelsBlacklistResource', function() {
        // TODO: update the code to test ModelsBlacklistResource
        expect(instance).to.be.a(SendPostApi.ModelsBlacklistResource);
      });

      it('should have the property addDate (base name: "Add_Date")', function() {
        // TODO: update the code to test the property addDate
        expect(instance).to.have.property('addDate');
        // expect(instance.addDate).to.be(expectedValueLiteral);
      });

      it('should have the property blacklistedCount (base name: "Blacklisted_Count")', function() {
        // TODO: update the code to test the property blacklistedCount
        expect(instance).to.have.property('blacklistedCount');
        // expect(instance.blacklistedCount).to.be(expectedValueLiteral);
      });

      it('should have the property blacklistedOn (base name: "Blacklisted_On")', function() {
        // TODO: update the code to test the property blacklistedOn
        expect(instance).to.have.property('blacklistedOn');
        // expect(instance.blacklistedOn).to.be(expectedValueLiteral);
      });

      it('should have the property contactListID (base name: "Contact_List_ID")', function() {
        // TODO: update the code to test the property contactListID
        expect(instance).to.have.property('contactListID');
        // expect(instance.contactListID).to.be(expectedValueLiteral);
      });

      it('should have the property ID (base name: "ID")', function() {
        // TODO: update the code to test the property ID
        expect(instance).to.have.property('ID');
        // expect(instance.ID).to.be(expectedValueLiteral);
      });

      it('should have the property label (base name: "Label")', function() {
        // TODO: update the code to test the property label
        expect(instance).to.have.property('label');
        // expect(instance.label).to.be(expectedValueLiteral);
      });

      it('should have the property lastCheck (base name: "Last_Check")', function() {
        // TODO: update the code to test the property lastCheck
        expect(instance).to.have.property('lastCheck');
        // expect(instance.lastCheck).to.be(expectedValueLiteral);
      });

      it('should have the property links (base name: "Links")', function() {
        // TODO: update the code to test the property links
        expect(instance).to.have.property('links');
        // expect(instance.links).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "Status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property target (base name: "Target")', function() {
        // TODO: update the code to test the property target
        expect(instance).to.have.property('target');
        // expect(instance.target).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "Type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));