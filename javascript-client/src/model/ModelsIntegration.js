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
 * Swagger Codegen version: 2.4.32
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsIntegrationType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsIntegrationType'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsIntegration = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsIntegrationType);
  }
}(this, function(ApiClient, ModelsIntegrationType) {
  'use strict';

  /**
   * The ModelsIntegration model module.
   * @module model/ModelsIntegration
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsIntegration</code>.
   * @alias module:model/ModelsIntegration
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsIntegration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsIntegration} obj Optional instance to populate.
   * @return {module:model/ModelsIntegration} The populated <code>ModelsIntegration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('key'))
        obj.key = ApiClient.convertToType(data['key'], 'String');
      if (data.hasOwnProperty('settings'))
        obj.settings = ApiClient.convertToType(data['settings'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ModelsIntegrationType.constructFromObject(data['type']);
    }
    return obj;
  }

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} key
   */
  exports.prototype.key = undefined;

  /**
   * @member {String} settings
   */
  exports.prototype.settings = undefined;

  /**
   * @member {module:model/ModelsIntegrationType} type
   */
  exports.prototype.type = undefined;


  return exports;

}));