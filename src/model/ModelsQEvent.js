/*
 * SendPost API
 * SendPost API to transactional emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsEventMetadata', 'model/ModelsEventType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsEventMetadata'), require('./ModelsEventType'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsQEvent = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsEventMetadata, root.SendPostApi.ModelsEventType);
  }
}(this, function(ApiClient, ModelsEventMetadata, ModelsEventType) {
  'use strict';

  /**
   * The ModelsQEvent model module.
   * @module model/ModelsQEvent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsQEvent</code>.
   * @alias module:model/ModelsQEvent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsQEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsQEvent} obj Optional instance to populate.
   * @return {module:model/ModelsQEvent} The populated <code>ModelsQEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('eventID'))
        obj.eventID = ApiClient.convertToType(data['eventID'], 'String');
      if (data.hasOwnProperty('eventMetadata'))
        obj.eventMetadata = ModelsEventMetadata.constructFromObject(data['eventMetadata']);
      if (data.hasOwnProperty('groups'))
        obj.groups = ApiClient.convertToType(data['groups'], ['String']);
      if (data.hasOwnProperty('messageID'))
        obj.messageID = ApiClient.convertToType(data['messageID'], 'String');
      if (data.hasOwnProperty('subAccountID'))
        obj.subAccountID = ApiClient.convertToType(data['subAccountID'], 'Number');
      if (data.hasOwnProperty('submittedAt'))
        obj.submittedAt = ApiClient.convertToType(data['submittedAt'], 'Number');
      if (data.hasOwnProperty('type'))
        obj.type = ModelsEventType.constructFromObject(data['type']);
    }
    return obj;
  }

  /**
   * @member {String} eventID
   */
  exports.prototype.eventID = undefined;

  /**
   * @member {module:model/ModelsEventMetadata} eventMetadata
   */
  exports.prototype.eventMetadata = undefined;

  /**
   * @member {Array.<String>} groups
   */
  exports.prototype.groups = undefined;

  /**
   * @member {String} messageID
   */
  exports.prototype.messageID = undefined;

  /**
   * @member {Number} subAccountID
   */
  exports.prototype.subAccountID = undefined;

  /**
   * @member {Number} submittedAt
   */
  exports.prototype.submittedAt = undefined;

  /**
   * @member {module:model/ModelsEventType} type
   */
  exports.prototype.type = undefined;

  return exports;

}));
