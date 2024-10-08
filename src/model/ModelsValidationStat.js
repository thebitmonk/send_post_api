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
    root.SendPostApi.ModelsValidationStat = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsValidationStat model module.
   * @module model/ModelsValidationStat
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsValidationStat</code>.
   * @alias module:model/ModelsValidationStat
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsValidationStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsValidationStat} obj Optional instance to populate.
   * @return {module:model/ModelsValidationStat} The populated <code>ModelsValidationStat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('catchAll'))
        obj.catchAll = ApiClient.convertToType(data['catchAll'], 'Number');
      if (data.hasOwnProperty('hardBounced'))
        obj.hardBounced = ApiClient.convertToType(data['hardBounced'], 'Number');
      if (data.hasOwnProperty('initiated'))
        obj.initiated = ApiClient.convertToType(data['initiated'], 'Number');
      if (data.hasOwnProperty('invalid'))
        obj.invalid = ApiClient.convertToType(data['invalid'], 'Number');
      if (data.hasOwnProperty('processed'))
        obj.processed = ApiClient.convertToType(data['processed'], 'Number');
      if (data.hasOwnProperty('softBounced'))
        obj.softBounced = ApiClient.convertToType(data['softBounced'], 'Number');
      if (data.hasOwnProperty('unknown'))
        obj.unknown = ApiClient.convertToType(data['unknown'], 'Number');
      if (data.hasOwnProperty('valid'))
        obj.valid = ApiClient.convertToType(data['valid'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} catchAll
   */
  exports.prototype.catchAll = undefined;

  /**
   * @member {Number} hardBounced
   */
  exports.prototype.hardBounced = undefined;

  /**
   * @member {Number} initiated
   */
  exports.prototype.initiated = undefined;

  /**
   * @member {Number} invalid
   */
  exports.prototype.invalid = undefined;

  /**
   * @member {Number} processed
   */
  exports.prototype.processed = undefined;

  /**
   * @member {Number} softBounced
   */
  exports.prototype.softBounced = undefined;

  /**
   * @member {Number} unknown
   */
  exports.prototype.unknown = undefined;

  /**
   * @member {Number} valid
   */
  exports.prototype.valid = undefined;


  return exports;

}));
