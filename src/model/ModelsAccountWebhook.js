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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsAccountWebhook = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsAccountWebhook model module.
   * @module model/ModelsAccountWebhook
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsAccountWebhook</code>.
   * @alias module:model/ModelsAccountWebhook
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsAccountWebhook</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsAccountWebhook} obj Optional instance to populate.
   * @return {module:model/ModelsAccountWebhook} The populated <code>ModelsAccountWebhook</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('clicked'))
        obj.clicked = ApiClient.convertToType(data['clicked'], 'Boolean');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('delivered'))
        obj.delivered = ApiClient.convertToType(data['delivered'], 'Boolean');
      if (data.hasOwnProperty('dropped'))
        obj.dropped = ApiClient.convertToType(data['dropped'], 'Boolean');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('hardBounced'))
        obj.hardBounced = ApiClient.convertToType(data['hardBounced'], 'Boolean');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('opened'))
        obj.opened = ApiClient.convertToType(data['opened'], 'Boolean');
      if (data.hasOwnProperty('processed'))
        obj.processed = ApiClient.convertToType(data['processed'], 'Boolean');
      if (data.hasOwnProperty('sent'))
        obj.sent = ApiClient.convertToType(data['sent'], 'Boolean');
      if (data.hasOwnProperty('softBounced'))
        obj.softBounced = ApiClient.convertToType(data['softBounced'], 'Boolean');
      if (data.hasOwnProperty('spam'))
        obj.spam = ApiClient.convertToType(data['spam'], 'Boolean');
      if (data.hasOwnProperty('unsubscribed'))
        obj.unsubscribed = ApiClient.convertToType(data['unsubscribed'], 'Boolean');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }

  /**
   * @member {Boolean} clicked
   */
  exports.prototype.clicked = undefined;

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {Boolean} delivered
   */
  exports.prototype.delivered = undefined;

  /**
   * @member {Boolean} dropped
   */
  exports.prototype.dropped = undefined;

  /**
   * @member {Boolean} enabled
   */
  exports.prototype.enabled = undefined;

  /**
   * @member {Boolean} hardBounced
   */
  exports.prototype.hardBounced = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Boolean} opened
   */
  exports.prototype.opened = undefined;

  /**
   * @member {Boolean} processed
   */
  exports.prototype.processed = undefined;

  /**
   * @member {Boolean} sent
   */
  exports.prototype.sent = undefined;

  /**
   * @member {Boolean} softBounced
   */
  exports.prototype.softBounced = undefined;

  /**
   * @member {Boolean} spam
   */
  exports.prototype.spam = undefined;

  /**
   * @member {Boolean} unsubscribed
   */
  exports.prototype.unsubscribed = undefined;

  /**
   * @member {String} url
   */
  exports.prototype.url = undefined;


  return exports;

}));
