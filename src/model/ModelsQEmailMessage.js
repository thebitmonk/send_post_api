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
 * Swagger Codegen version: 2.4.14
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
    root.SendPostApi.ModelsQEmailMessage = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsFrom, root.SendPostApi.ModelsReplyTo, root.SendPostApi.ModelsTo);
  }
}(this, function(ApiClient, ModelsFrom, ModelsReplyTo, ModelsTo) {
  'use strict';

  /**
   * The ModelsQEmailMessage model module.
   * @module model/ModelsQEmailMessage
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsQEmailMessage</code>.
   * @alias module:model/ModelsQEmailMessage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsQEmailMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsQEmailMessage} obj Optional instance to populate.
   * @return {module:model/ModelsQEmailMessage} The populated <code>ModelsQEmailMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('customFields'))
        obj.customFields = ApiClient.convertToType(data['customFields'], Object);
      if (data.hasOwnProperty('emailType'))
        obj.emailType = ApiClient.convertToType(data['emailType'], 'String');
      if (data.hasOwnProperty('from'))
        obj.from = ModelsFrom.constructFromObject(data['from']);
      if (data.hasOwnProperty('groups'))
        obj.groups = ApiClient.convertToType(data['groups'], Object);
      if (data.hasOwnProperty('headers'))
        obj.headers = ApiClient.convertToType(data['headers'], Object);
      if (data.hasOwnProperty('htmlBody'))
        obj.htmlBody = ApiClient.convertToType(data['htmlBody'], 'String');
      if (data.hasOwnProperty('ipID'))
        obj.ipID = ApiClient.convertToType(data['ipID'], 'Number');
      if (data.hasOwnProperty('ipPool'))
        obj.ipPool = ApiClient.convertToType(data['ipPool'], 'String');
      if (data.hasOwnProperty('localIP'))
        obj.localIP = ApiClient.convertToType(data['localIP'], 'String');
      if (data.hasOwnProperty('messageID'))
        obj.messageID = ApiClient.convertToType(data['messageID'], 'String');
      if (data.hasOwnProperty('preText'))
        obj.preText = ApiClient.convertToType(data['preText'], 'String');
      if (data.hasOwnProperty('publicIP'))
        obj.publicIP = ApiClient.convertToType(data['publicIP'], 'String');
      if (data.hasOwnProperty('replyTo'))
        obj.replyTo = ModelsReplyTo.constructFromObject(data['replyTo']);
      if (data.hasOwnProperty('subAccountID'))
        obj.subAccountID = ApiClient.convertToType(data['subAccountID'], 'Number');
      if (data.hasOwnProperty('subject'))
        obj.subject = ApiClient.convertToType(data['subject'], 'String');
      if (data.hasOwnProperty('submittedAt'))
        obj.submittedAt = ApiClient.convertToType(data['submittedAt'], 'Number');
      if (data.hasOwnProperty('textBody'))
        obj.textBody = ApiClient.convertToType(data['textBody'], 'String');
      if (data.hasOwnProperty('to'))
        obj.to = ModelsTo.constructFromObject(data['to']);
      if (data.hasOwnProperty('trackClicks'))
        obj.trackClicks = ApiClient.convertToType(data['trackClicks'], 'Boolean');
      if (data.hasOwnProperty('trackOpens'))
        obj.trackOpens = ApiClient.convertToType(data['trackOpens'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Object} customFields
   */
  exports.prototype.customFields = undefined;

  /**
   * @member {String} emailType
   */
  exports.prototype.emailType = undefined;

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
   * @member {Number} ipID
   */
  exports.prototype.ipID = undefined;

  /**
   * @member {String} ipPool
   */
  exports.prototype.ipPool = undefined;

  /**
   * @member {String} localIP
   */
  exports.prototype.localIP = undefined;

  /**
   * @member {String} messageID
   */
  exports.prototype.messageID = undefined;

  /**
   * @member {String} preText
   */
  exports.prototype.preText = undefined;

  /**
   * @member {String} publicIP
   */
  exports.prototype.publicIP = undefined;

  /**
   * @member {module:model/ModelsReplyTo} replyTo
   */
  exports.prototype.replyTo = undefined;

  /**
   * @member {Number} subAccountID
   */
  exports.prototype.subAccountID = undefined;

  /**
   * @member {String} subject
   */
  exports.prototype.subject = undefined;

  /**
   * @member {Number} submittedAt
   */
  exports.prototype.submittedAt = undefined;

  /**
   * @member {String} textBody
   */
  exports.prototype.textBody = undefined;

  /**
   * @member {module:model/ModelsTo} to
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
