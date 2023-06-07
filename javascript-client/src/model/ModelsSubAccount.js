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
    define(['ApiClient', 'model/ModelsLabel', 'model/ModelsSMTPAuth', 'model/ModelsSubAccountType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsLabel'), require('./ModelsSMTPAuth'), require('./ModelsSubAccountType'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsSubAccount = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsLabel, root.SendPostApi.ModelsSMTPAuth, root.SendPostApi.ModelsSubAccountType);
  }
}(this, function(ApiClient, ModelsLabel, ModelsSMTPAuth, ModelsSubAccountType) {
  'use strict';

  /**
   * The ModelsSubAccount model module.
   * @module model/ModelsSubAccount
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsSubAccount</code>.
   * @alias module:model/ModelsSubAccount
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsSubAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsSubAccount} obj Optional instance to populate.
   * @return {module:model/ModelsSubAccount} The populated <code>ModelsSubAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('apiKey'))
        obj.apiKey = ApiClient.convertToType(data['apiKey'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('labels'))
        obj.labels = ApiClient.convertToType(data['labels'], [ModelsLabel]);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('smtpAuths'))
        obj.smtpAuths = ApiClient.convertToType(data['smtpAuths'], [ModelsSMTPAuth]);
      if (data.hasOwnProperty('type'))
        obj.type = ModelsSubAccountType.constructFromObject(data['type']);
    }
    return obj;
  }

  /**
   * @member {String} apiKey
   */
  exports.prototype.apiKey = undefined;

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Array.<module:model/ModelsLabel>} labels
   */
  exports.prototype.labels = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Array.<module:model/ModelsSMTPAuth>} smtpAuths
   */
  exports.prototype.smtpAuths = undefined;

  /**
   * @member {module:model/ModelsSubAccountType} type
   */
  exports.prototype.type = undefined;


  return exports;

}));
