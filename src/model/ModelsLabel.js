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
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsLabelType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsLabelType'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsLabel = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsLabelType);
  }
}(this, function(ApiClient, ModelsLabelType) {
  'use strict';

  /**
   * The ModelsLabel model module.
   * @module model/ModelsLabel
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsLabel</code>.
   * @alias module:model/ModelsLabel
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsLabel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsLabel} obj Optional instance to populate.
   * @return {module:model/ModelsLabel} The populated <code>ModelsLabel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('color'))
        obj.color = ApiClient.convertToType(data['color'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ModelsLabelType.constructFromObject(data['type']);
    }
    return obj;
  }

  /**
   * @member {String} color
   */
  exports.prototype.color = undefined;

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {module:model/ModelsLabelType} type
   */
  exports.prototype.type = undefined;


  return exports;

}));
