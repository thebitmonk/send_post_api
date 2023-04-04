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
    define(['ApiClient', 'model/ModelsSingleCleanedMail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsSingleCleanedMail'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsCleanedList = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsSingleCleanedMail);
  }
}(this, function(ApiClient, ModelsSingleCleanedMail) {
  'use strict';

  /**
   * The ModelsCleanedList model module.
   * @module model/ModelsCleanedList
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsCleanedList</code>.
   * @alias module:model/ModelsCleanedList
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsCleanedList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsCleanedList} obj Optional instance to populate.
   * @return {module:model/ModelsCleanedList} The populated <code>ModelsCleanedList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('detailedResponse'))
        obj.detailedResponse = ApiClient.convertToType(data['detailedResponse'], [ModelsSingleCleanedMail]);
      if (data.hasOwnProperty('invalid'))
        obj.invalid = ApiClient.convertToType(data['invalid'], Object);
      if (data.hasOwnProperty('valid'))
        obj.valid = ApiClient.convertToType(data['valid'], Object);
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ModelsSingleCleanedMail>} detailedResponse
   */
  exports.prototype.detailedResponse = undefined;

  /**
   * @member {Object} invalid
   */
  exports.prototype.invalid = undefined;

  /**
   * @member {Object} valid
   */
  exports.prototype.valid = undefined;


  return exports;

}));
