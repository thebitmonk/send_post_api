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
    root.SendPostApi.ModelsEAccountMember = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsEAccountMember model module.
   * @module model/ModelsEAccountMember
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsEAccountMember</code>.
   * @alias module:model/ModelsEAccountMember
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsEAccountMember</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsEAccountMember} obj Optional instance to populate.
   * @return {module:model/ModelsEAccountMember} The populated <code>ModelsEAccountMember</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('companyName'))
        obj.companyName = ApiClient.convertToType(data['companyName'], 'String');
      if (data.hasOwnProperty('currentEmailServiceProvider'))
        obj.currentEmailServiceProvider = ApiClient.convertToType(data['currentEmailServiceProvider'], 'String');
      if (data.hasOwnProperty('hexColor'))
        obj.hexColor = ApiClient.convertToType(data['hexColor'], 'String');
      if (data.hasOwnProperty('industry'))
        obj.industry = ApiClient.convertToType(data['industry'], 'String');
      if (data.hasOwnProperty('logoURL'))
        obj.logoURL = ApiClient.convertToType(data['logoURL'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('onboardCFinished'))
        obj.onboardCFinished = ApiClient.convertToType(data['onboardCFinished'], 'Boolean');
      if (data.hasOwnProperty('onboardQAnswered'))
        obj.onboardQAnswered = ApiClient.convertToType(data['onboardQAnswered'], 'Boolean');
      if (data.hasOwnProperty('phoneNumber'))
        obj.phoneNumber = ApiClient.convertToType(data['phoneNumber'], 'String');
      if (data.hasOwnProperty('sendingVolumePerMonth'))
        obj.sendingVolumePerMonth = ApiClient.convertToType(data['sendingVolumePerMonth'], 'String');
      if (data.hasOwnProperty('switchingSendpostDescription'))
        obj.switchingSendpostDescription = ApiClient.convertToType(data['switchingSendpostDescription'], 'String');
      if (data.hasOwnProperty('uid'))
        obj.uid = ApiClient.convertToType(data['uid'], 'String');
      if (data.hasOwnProperty('verifyEmail'))
        obj.verifyEmail = ApiClient.convertToType(data['verifyEmail'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {String} companyName
   */
  exports.prototype.companyName = undefined;

  /**
   * @member {String} currentEmailServiceProvider
   */
  exports.prototype.currentEmailServiceProvider = undefined;

  /**
   * @member {String} hexColor
   */
  exports.prototype.hexColor = undefined;

  /**
   * @member {String} industry
   */
  exports.prototype.industry = undefined;

  /**
   * @member {String} logoURL
   */
  exports.prototype.logoURL = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Boolean} onboardCFinished
   */
  exports.prototype.onboardCFinished = undefined;

  /**
   * @member {Boolean} onboardQAnswered
   */
  exports.prototype.onboardQAnswered = undefined;

  /**
   * @member {String} phoneNumber
   */
  exports.prototype.phoneNumber = undefined;

  /**
   * @member {String} sendingVolumePerMonth
   */
  exports.prototype.sendingVolumePerMonth = undefined;

  /**
   * @member {String} switchingSendpostDescription
   */
  exports.prototype.switchingSendpostDescription = undefined;

  /**
   * @member {String} uid
   */
  exports.prototype.uid = undefined;

  /**
   * @member {Boolean} verifyEmail
   */
  exports.prototype.verifyEmail = undefined;


  return exports;

}));
