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
 * Swagger Codegen version: 2.4.17
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
    describe('ModelsAlert', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsAlert();
      });

      it('should create an instance of ModelsAlert', function() {
        // TODO: update the code to test ModelsAlert
        expect(instance).to.be.a(SendPostApi.ModelsAlert);
      });

      it('should have the property condition (base name: "Condition")', function() {
        // TODO: update the code to test the property condition
        expect(instance).to.have.property('condition');
        // expect(instance.condition).to.be(expectedValueLiteral);
      });

      it('should have the property notification (base name: "Notification")', function() {
        // TODO: update the code to test the property notification
        expect(instance).to.have.property('notification');
        // expect(instance.notification).to.be(expectedValueLiteral);
      });

      it('should have the property active (base name: "active")', function() {
        // TODO: update the code to test the property active
        expect(instance).to.have.property('active');
        // expect(instance.active).to.be(expectedValueLiteral);
      });

      it('should have the property alertName (base name: "alert_name")', function() {
        // TODO: update the code to test the property alertName
        expect(instance).to.have.property('alertName');
        // expect(instance.alertName).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property label (base name: "label")', function() {
        // TODO: update the code to test the property label
        expect(instance).to.have.property('label');
        // expect(instance.label).to.be(expectedValueLiteral);
      });

      it('should have the property member (base name: "member")', function() {
        // TODO: update the code to test the property member
        expect(instance).to.have.property('member');
        // expect(instance.member).to.be(expectedValueLiteral);
      });

      it('should have the property priority (base name: "priority")', function() {
        // TODO: update the code to test the property priority
        expect(instance).to.have.property('priority');
        // expect(instance.priority).to.be(expectedValueLiteral);
      });

      it('should have the property updated (base name: "updated")', function() {
        // TODO: update the code to test the property updated
        expect(instance).to.have.property('updated');
        // expect(instance.updated).to.be(expectedValueLiteral);
      });

    });
  });

}));
