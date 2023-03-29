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
 * Swagger Codegen version: 2.4.30
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
    root.SendPostApi.ModelsMailReportResult = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsMailReportResult model module.
   * @module model/ModelsMailReportResult
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsMailReportResult</code>.
   * @alias module:model/ModelsMailReportResult
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsMailReportResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsMailReportResult} obj Optional instance to populate.
   * @return {module:model/ModelsMailReportResult} The populated <code>ModelsMailReportResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('body'))
        obj.body = ApiClient.convertToType(data['body'], 'String');
      if (data.hasOwnProperty('header'))
        obj.header = ApiClient.convertToType(data['header'], 'String');
      if (data.hasOwnProperty('seedList'))
        obj.seedList = ApiClient.convertToType(data['seedList'], Object);
      if (data.hasOwnProperty('testId'))
        obj.testId = ApiClient.convertToType(data['testId'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} body
   */
  exports.prototype.body = undefined;

  /**
   * @member {String} header
   */
  exports.prototype.header = undefined;

  /**
   * @member {Object} seedList
   */
  exports.prototype.seedList = undefined;

  /**
   * @member {Number} testId
   */
  exports.prototype.testId = undefined;


  return exports;

}));
