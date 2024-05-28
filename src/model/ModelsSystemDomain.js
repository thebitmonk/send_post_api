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
 * Swagger Codegen version: 2.4.41
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsSystemDNSRecord'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsSystemDNSRecord'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsSystemDomain = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsSystemDNSRecord);
  }
}(this, function(ApiClient, ModelsSystemDNSRecord) {
  'use strict';

  /**
   * The ModelsSystemDomain model module.
   * @module model/ModelsSystemDomain
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsSystemDomain</code>.
   * @alias module:model/ModelsSystemDomain
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsSystemDomain</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsSystemDomain} obj Optional instance to populate.
   * @return {module:model/ModelsSystemDomain} The populated <code>ModelsSystemDomain</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('dkim'))
        obj.dkim = ModelsSystemDNSRecord.constructFromObject(data['dkim']);
      if (data.hasOwnProperty('dkimConfig'))
        obj.dkimConfig = ApiClient.convertToType(data['dkimConfig'], 'String');
      if (data.hasOwnProperty('dkimVerified'))
        obj.dkimVerified = ApiClient.convertToType(data['dkimVerified'], 'Boolean');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('mailboxVerified'))
        obj.mailboxVerified = ApiClient.convertToType(data['mailboxVerified'], 'Boolean');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('spf'))
        obj.spf = ModelsSystemDNSRecord.constructFromObject(data['spf']);
      if (data.hasOwnProperty('spfVerified'))
        obj.spfVerified = ApiClient.convertToType(data['spfVerified'], 'Boolean');
      if (data.hasOwnProperty('track'))
        obj.track = ModelsSystemDNSRecord.constructFromObject(data['track']);
      if (data.hasOwnProperty('trackVerified'))
        obj.trackVerified = ApiClient.convertToType(data['trackVerified'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {module:model/ModelsSystemDNSRecord} dkim
   */
  exports.prototype.dkim = undefined;

  /**
   * @member {String} dkimConfig
   */
  exports.prototype.dkimConfig = undefined;

  /**
   * @member {Boolean} dkimVerified
   */
  exports.prototype.dkimVerified = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Boolean} mailboxVerified
   */
  exports.prototype.mailboxVerified = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {module:model/ModelsSystemDNSRecord} spf
   */
  exports.prototype.spf = undefined;

  /**
   * @member {Boolean} spfVerified
   */
  exports.prototype.spfVerified = undefined;

  /**
   * @member {module:model/ModelsSystemDNSRecord} track
   */
  exports.prototype.track = undefined;

  /**
   * @member {Boolean} trackVerified
   */
  exports.prototype.trackVerified = undefined;


  return exports;

}));
