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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsMember = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsMember model module.
   * @module model/ModelsMember
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsMember</code>.
   * @alias module:model/ModelsMember
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsMember</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsMember} obj Optional instance to populate.
   * @return {module:model/ModelsMember} The populated <code>ModelsMember</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('companyName'))
        obj.companyName = ApiClient.convertToType(data['companyName'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('isForbidden'))
        obj.isForbidden = ApiClient.convertToType(data['isForbidden'], 'Boolean');
      if (data.hasOwnProperty('isVerified'))
        obj.isVerified = ApiClient.convertToType(data['isVerified'], 'Boolean');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('onboardQAnswered'))
        obj.onboardQAnswered = ApiClient.convertToType(data['onboardQAnswered'], 'Boolean');
      if (data.hasOwnProperty('phoneNumber'))
        obj.phoneNumber = ApiClient.convertToType(data['phoneNumber'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} companyName
   */
  exports.prototype.companyName = undefined;

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Boolean} isForbidden
   */
  exports.prototype.isForbidden = undefined;

  /**
   * @member {Boolean} isVerified
   */
  exports.prototype.isVerified = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Boolean} onboardQAnswered
   */
  exports.prototype.onboardQAnswered = undefined;

  /**
   * @member {String} phoneNumber
   */
  exports.prototype.phoneNumber = undefined;

  /**
   * @member {String} url
   */
  exports.prototype.url = undefined;


  return exports;

}));
