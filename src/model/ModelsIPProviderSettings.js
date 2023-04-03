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
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The ModelsIPProviderSettings model module.
 * @module model/ModelsIPProviderSettings
 * @version 1.0.0
 */
export class ModelsIPProviderSettings {
  /**
   * Constructs a new <code>ModelsIPProviderSettings</code>.
   * @alias module:model/ModelsIPProviderSettings
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ModelsIPProviderSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsIPProviderSettings} obj Optional instance to populate.
   * @return {module:model/ModelsIPProviderSettings} The populated <code>ModelsIPProviderSettings</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ModelsIPProviderSettings();
      if (data.hasOwnProperty('maxConcurrentConnections'))
        obj.maxConcurrentConnections = ApiClient.convertToType(data['maxConcurrentConnections'], 'Number');
      if (data.hasOwnProperty('maxSendPerDay'))
        obj.maxSendPerDay = ApiClient.convertToType(data['maxSendPerDay'], 'Number');
      if (data.hasOwnProperty('maxSendPerHour'))
        obj.maxSendPerHour = ApiClient.convertToType(data['maxSendPerHour'], 'Number');
      if (data.hasOwnProperty('maxSendPerMinute'))
        obj.maxSendPerMinute = ApiClient.convertToType(data['maxSendPerMinute'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} maxConcurrentConnections
 */
ModelsIPProviderSettings.prototype.maxConcurrentConnections = undefined;

/**
 * @member {Number} maxSendPerDay
 */
ModelsIPProviderSettings.prototype.maxSendPerDay = undefined;

/**
 * @member {Number} maxSendPerHour
 */
ModelsIPProviderSettings.prototype.maxSendPerHour = undefined;

/**
 * @member {Number} maxSendPerMinute
 */
ModelsIPProviderSettings.prototype.maxSendPerMinute = undefined;

