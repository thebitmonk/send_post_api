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
    root.SendPostApi.ModelsContent = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsContent model module.
   * @module model/ModelsContent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsContent</code>.
   * @alias module:model/ModelsContent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsContent} obj Optional instance to populate.
   * @return {module:model/ModelsContent} The populated <code>ModelsContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('headers'))
        obj.headers = ApiClient.convertToType(data['headers'], Object);
      if (data.hasOwnProperty('htmlBody'))
        obj.htmlBody = ApiClient.convertToType(data['htmlBody'], 'String');
      if (data.hasOwnProperty('preText'))
        obj.preText = ApiClient.convertToType(data['preText'], 'String');
      if (data.hasOwnProperty('subject'))
        obj.subject = ApiClient.convertToType(data['subject'], 'String');
      if (data.hasOwnProperty('textBody'))
        obj.textBody = ApiClient.convertToType(data['textBody'], 'String');
    }
    return obj;
  }

  /**
   * @member {Object} headers
   */
  exports.prototype.headers = undefined;

  /**
   * @member {String} htmlBody
   */
  exports.prototype.htmlBody = undefined;

  /**
   * @member {String} preText
   */
  exports.prototype.preText = undefined;

  /**
   * @member {String} subject
   */
  exports.prototype.subject = undefined;

  /**
   * @member {String} textBody
   */
  exports.prototype.textBody = undefined;


  return exports;

}));
