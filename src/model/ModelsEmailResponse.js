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
 * Swagger Codegen version: 2.4.27
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsEmailErrorCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsEmailErrorCode'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsEmailResponse = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsEmailErrorCode);
  }
}(this, function(ApiClient, ModelsEmailErrorCode) {
  'use strict';

  /**
   * The ModelsEmailResponse model module.
   * @module model/ModelsEmailResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsEmailResponse</code>.
   * @alias module:model/ModelsEmailResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsEmailResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsEmailResponse} obj Optional instance to populate.
   * @return {module:model/ModelsEmailResponse} The populated <code>ModelsEmailResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('errorCode'))
        obj.errorCode = ModelsEmailErrorCode.constructFromObject(data['errorCode']);
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('messageId'))
        obj.messageId = ApiClient.convertToType(data['messageId'], 'String');
      if (data.hasOwnProperty('submittedAt'))
        obj.submittedAt = ApiClient.convertToType(data['submittedAt'], 'Number');
      if (data.hasOwnProperty('to'))
        obj.to = ApiClient.convertToType(data['to'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/ModelsEmailErrorCode} errorCode
   */
  exports.prototype.errorCode = undefined;

  /**
   * @member {String} message
   */
  exports.prototype.message = undefined;

  /**
   * @member {String} messageId
   */
  exports.prototype.messageId = undefined;

  /**
   * @member {Number} submittedAt
   */
  exports.prototype.submittedAt = undefined;

  /**
   * @member {String} to
   */
  exports.prototype.to = undefined;


  return exports;

}));
