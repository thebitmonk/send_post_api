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
 * Swagger Codegen version: 2.4.39
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsInvitationStatus', 'model/ModelsMemberRole'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsInvitationStatus'), require('./ModelsMemberRole'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsInvitation = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsInvitationStatus, root.SendPostApi.ModelsMemberRole);
  }
}(this, function(ApiClient, ModelsInvitationStatus, ModelsMemberRole) {
  'use strict';

  /**
   * The ModelsInvitation model module.
   * @module model/ModelsInvitation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsInvitation</code>.
   * @alias module:model/ModelsInvitation
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsInvitation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsInvitation} obj Optional instance to populate.
   * @return {module:model/ModelsInvitation} The populated <code>ModelsInvitation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Id'))
        obj.id = ApiClient.convertToType(data['Id'], 'Number');
      if (data.hasOwnProperty('Role'))
        obj.role = ModelsMemberRole.constructFromObject(data['Role']);
      if (data.hasOwnProperty('Status'))
        obj.status = ModelsInvitationStatus.constructFromObject(data['Status']);
      if (data.hasOwnProperty('ToEmail'))
        obj.toEmail = ApiClient.convertToType(data['ToEmail'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {module:model/ModelsMemberRole} role
   */
  exports.prototype.role = undefined;

  /**
   * @member {module:model/ModelsInvitationStatus} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {String} toEmail
   */
  exports.prototype.toEmail = undefined;

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;


  return exports;

}));
