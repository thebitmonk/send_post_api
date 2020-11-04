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
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsAlertLabel', 'model/ModelsMember', 'model/ModelsPriority'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsAlertLabel'), require('./ModelsMember'), require('./ModelsPriority'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsAlert = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsAlertLabel, root.SendPostApi.ModelsMember, root.SendPostApi.ModelsPriority);
  }
}(this, function(ApiClient, ModelsAlertLabel, ModelsMember, ModelsPriority) {
  'use strict';

  /**
   * The ModelsAlert model module.
   * @module model/ModelsAlert
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsAlert</code>.
   * @alias module:model/ModelsAlert
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsAlert</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsAlert} obj Optional instance to populate.
   * @return {module:model/ModelsAlert} The populated <code>ModelsAlert</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Condition'))
        obj.condition = ApiClient.convertToType(data['Condition'], 'String');
      if (data.hasOwnProperty('Notification'))
        obj.notification = ApiClient.convertToType(data['Notification'], 'String');
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
      if (data.hasOwnProperty('alert_name'))
        obj.alertName = ApiClient.convertToType(data['alert_name'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('label'))
        obj.label = ModelsAlertLabel.constructFromObject(data['label']);
      if (data.hasOwnProperty('member'))
        obj.member = ModelsMember.constructFromObject(data['member']);
      if (data.hasOwnProperty('priority'))
        obj.priority = ModelsPriority.constructFromObject(data['priority']);
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} condition
   */
  exports.prototype.condition = undefined;

  /**
   * @member {String} notification
   */
  exports.prototype.notification = undefined;

  /**
   * @member {Boolean} active
   */
  exports.prototype.active = undefined;

  /**
   * @member {String} alertName
   */
  exports.prototype.alertName = undefined;

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {module:model/ModelsAlertLabel} label
   */
  exports.prototype.label = undefined;

  /**
   * @member {module:model/ModelsMember} member
   */
  exports.prototype.member = undefined;

  /**
   * @member {module:model/ModelsPriority} priority
   */
  exports.prototype.priority = undefined;

  /**
   * @member {Number} updated
   */
  exports.prototype.updated = undefined;

  return exports;

}));
