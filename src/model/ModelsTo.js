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
    define(['ApiClient', 'model/Model1219130xc00061e9f0False', 'model/ModelsCopyTo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Model1219130xc00061e9f0False'), require('./ModelsCopyTo'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsTo = factory(root.SendPostApi.ApiClient, root.SendPostApi.Model1219130xc00061e9f0False, root.SendPostApi.ModelsCopyTo);
  }
}(this, function(ApiClient, Model1219130xc00061e9f0False, ModelsCopyTo) {
  'use strict';

  /**
   * The ModelsTo model module.
   * @module model/ModelsTo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsTo</code>.
   * @alias module:model/ModelsTo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsTo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsTo} obj Optional instance to populate.
   * @return {module:model/ModelsTo} The populated <code>ModelsTo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('bcc'))
        obj.bcc = ApiClient.convertToType(data['bcc'], [ModelsCopyTo]);
      if (data.hasOwnProperty('cc'))
        obj.cc = ApiClient.convertToType(data['cc'], [ModelsCopyTo]);
      if (data.hasOwnProperty('customFields'))
        obj.customFields = Model1219130xc00061e9f0False.constructFromObject(data['customFields']);
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ModelsCopyTo>} bcc
   */
  exports.prototype.bcc = undefined;

  /**
   * @member {Array.<module:model/ModelsCopyTo>} cc
   */
  exports.prototype.cc = undefined;

  /**
   * @member {module:model/Model1219130xc00061e9f0False} customFields
   */
  exports.prototype.customFields = undefined;

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;


  return exports;

}));
