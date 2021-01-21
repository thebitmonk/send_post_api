/*
 * SendPost API
 * SendPost API to send transactional emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendx.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsFrom', 'model/ModelsReplyTo', 'model/ModelsTo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsFrom'), require('./ModelsReplyTo'), require('./ModelsTo'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsEmailMessage = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsFrom, root.SendPostApi.ModelsReplyTo, root.SendPostApi.ModelsTo);
  }
}(this, function(ApiClient, ModelsFrom, ModelsReplyTo, ModelsTo) {
  'use strict';

  /**
   * The ModelsEmailMessage model module.
   * @module model/ModelsEmailMessage
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsEmailMessage</code>.
   * @alias module:model/ModelsEmailMessage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsEmailMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsEmailMessage} obj Optional instance to populate.
   * @return {module:model/ModelsEmailMessage} The populated <code>ModelsEmailMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ampBody'))
        obj.ampBody = ApiClient.convertToType(data['ampBody'], 'String');
      if (data.hasOwnProperty('from'))
        obj.from = ModelsFrom.constructFromObject(data['from']);
      if (data.hasOwnProperty('groups'))
        obj.groups = ApiClient.convertToType(data['groups'], Object);
      if (data.hasOwnProperty('headers'))
        obj.headers = ApiClient.convertToType(data['headers'], Object);
      if (data.hasOwnProperty('htmlBody'))
        obj.htmlBody = ApiClient.convertToType(data['htmlBody'], 'String');
      if (data.hasOwnProperty('ippool'))
        obj.ippool = ApiClient.convertToType(data['ippool'], 'String');
      if (data.hasOwnProperty('preText'))
        obj.preText = ApiClient.convertToType(data['preText'], 'String');
      if (data.hasOwnProperty('replyTo'))
        obj.replyTo = ModelsReplyTo.constructFromObject(data['replyTo']);
      if (data.hasOwnProperty('subject'))
        obj.subject = ApiClient.convertToType(data['subject'], 'String');
      if (data.hasOwnProperty('template'))
        obj.template = ApiClient.convertToType(data['template'], 'String');
      if (data.hasOwnProperty('textBody'))
        obj.textBody = ApiClient.convertToType(data['textBody'], 'String');
      if (data.hasOwnProperty('to'))
        obj.to = ApiClient.convertToType(data['to'], [ModelsTo]);
      if (data.hasOwnProperty('trackClicks'))
        obj.trackClicks = ApiClient.convertToType(data['trackClicks'], 'Boolean');
      if (data.hasOwnProperty('trackOpens'))
        obj.trackOpens = ApiClient.convertToType(data['trackOpens'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {String} ampBody
   */
  exports.prototype.ampBody = undefined;

  /**
   * @member {module:model/ModelsFrom} from
   */
  exports.prototype.from = undefined;

  /**
   * @member {Object} groups
   */
  exports.prototype.groups = undefined;

  /**
   * @member {Object} headers
   */
  exports.prototype.headers = undefined;

  /**
   * @member {String} htmlBody
   */
  exports.prototype.htmlBody = undefined;

  /**
   * @member {String} ippool
   */
  exports.prototype.ippool = undefined;

  /**
   * @member {String} preText
   */
  exports.prototype.preText = undefined;

  /**
   * @member {module:model/ModelsReplyTo} replyTo
   */
  exports.prototype.replyTo = undefined;

  /**
   * @member {String} subject
   */
  exports.prototype.subject = undefined;

  /**
   * @member {String} template
   */
  exports.prototype.template = undefined;

  /**
   * @member {String} textBody
   */
  exports.prototype.textBody = undefined;

  /**
   * @member {Array.<module:model/ModelsTo>} to
   */
  exports.prototype.to = undefined;

  /**
   * @member {Boolean} trackClicks
   */
  exports.prototype.trackClicks = undefined;

  /**
   * @member {Boolean} trackOpens
   */
  exports.prototype.trackOpens = undefined;


  return exports;

}));
