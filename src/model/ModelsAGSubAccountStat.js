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
    root.SendPostApi.ModelsAGSubAccountStat = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsAGSubAccountStat model module.
   * @module model/ModelsAGSubAccountStat
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsAGSubAccountStat</code>.
   * @alias module:model/ModelsAGSubAccountStat
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsAGSubAccountStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsAGSubAccountStat} obj Optional instance to populate.
   * @return {module:model/ModelsAGSubAccountStat} The populated <code>ModelsAGSubAccountStat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('clicked'))
        obj.clicked = ApiClient.convertToType(data['clicked'], 'Number');
      if (data.hasOwnProperty('delivered'))
        obj.delivered = ApiClient.convertToType(data['delivered'], 'Number');
      if (data.hasOwnProperty('dropped'))
        obj.dropped = ApiClient.convertToType(data['dropped'], 'Number');
      if (data.hasOwnProperty('hardBounced'))
        obj.hardBounced = ApiClient.convertToType(data['hardBounced'], 'Number');
      if (data.hasOwnProperty('opened'))
        obj.opened = ApiClient.convertToType(data['opened'], 'Number');
      if (data.hasOwnProperty('processed'))
        obj.processed = ApiClient.convertToType(data['processed'], 'Number');
      if (data.hasOwnProperty('sent'))
        obj.sent = ApiClient.convertToType(data['sent'], 'Number');
      if (data.hasOwnProperty('softBounced'))
        obj.softBounced = ApiClient.convertToType(data['softBounced'], 'Number');
      if (data.hasOwnProperty('spam'))
        obj.spam = ApiClient.convertToType(data['spam'], 'Number');
      if (data.hasOwnProperty('subAccountId'))
        obj.subAccountId = ApiClient.convertToType(data['subAccountId'], 'Number');
      if (data.hasOwnProperty('subAccountName'))
        obj.subAccountName = ApiClient.convertToType(data['subAccountName'], 'String');
      if (data.hasOwnProperty('unsubscribed'))
        obj.unsubscribed = ApiClient.convertToType(data['unsubscribed'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} clicked
   */
  exports.prototype.clicked = undefined;

  /**
   * @member {Number} delivered
   */
  exports.prototype.delivered = undefined;

  /**
   * @member {Number} dropped
   */
  exports.prototype.dropped = undefined;

  /**
   * @member {Number} hardBounced
   */
  exports.prototype.hardBounced = undefined;

  /**
   * @member {Number} opened
   */
  exports.prototype.opened = undefined;

  /**
   * @member {Number} processed
   */
  exports.prototype.processed = undefined;

  /**
   * @member {Number} sent
   */
  exports.prototype.sent = undefined;

  /**
   * @member {Number} softBounced
   */
  exports.prototype.softBounced = undefined;

  /**
   * @member {Number} spam
   */
  exports.prototype.spam = undefined;

  /**
   * @member {Number} subAccountId
   */
  exports.prototype.subAccountId = undefined;

  /**
   * @member {String} subAccountName
   */
  exports.prototype.subAccountName = undefined;

  /**
   * @member {Number} unsubscribed
   */
  exports.prototype.unsubscribed = undefined;


  return exports;

}));
