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
    define(['ApiClient', 'model/ModelsAlertLabel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsAlertLabel'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsDetailedAlert = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsAlertLabel);
  }
}(this, function(ApiClient, ModelsAlertLabel) {
  'use strict';

  /**
   * The ModelsDetailedAlert model module.
   * @module model/ModelsDetailedAlert
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsDetailedAlert</code>.
   * @alias module:model/ModelsDetailedAlert
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsDetailedAlert</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsDetailedAlert} obj Optional instance to populate.
   * @return {module:model/ModelsDetailedAlert} The populated <code>ModelsDetailedAlert</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
      if (data.hasOwnProperty('entityType'))
        obj.entityType = ApiClient.convertToType(data['entityType'], 'String');
      if (data.hasOwnProperty('entityValue'))
        obj.entityValue = ApiClient.convertToType(data['entityValue'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('label'))
        obj.label = ModelsAlertLabel.constructFromObject(data['label']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('parameter'))
        obj.parameter = ApiClient.convertToType(data['parameter'], 'Number');
      if (data.hasOwnProperty('provider'))
        obj.provider = ApiClient.convertToType(data['provider'], 'String');
      if (data.hasOwnProperty('threshold'))
        obj.threshold = ApiClient.convertToType(data['threshold'], 'String');
    }
    return obj;
  }

  /**
   * @member {Boolean} active
   */
  exports.prototype.active = undefined;

  /**
   * @member {String} entityType
   */
  exports.prototype.entityType = undefined;

  /**
   * @member {String} entityValue
   */
  exports.prototype.entityValue = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {module:model/ModelsAlertLabel} label
   */
  exports.prototype.label = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Number} parameter
   */
  exports.prototype.parameter = undefined;

  /**
   * @member {String} provider
   */
  exports.prototype.provider = undefined;

  /**
   * @member {String} threshold
   */
  exports.prototype.threshold = undefined;


  return exports;

}));
