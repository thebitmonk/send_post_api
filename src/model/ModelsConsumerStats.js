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
 * The ModelsConsumerStats model module.
 * @module model/ModelsConsumerStats
 * @version 1.0.0
 */
export class ModelsConsumerStats {
  /**
   * Constructs a new <code>ModelsConsumerStats</code>.
   * @alias module:model/ModelsConsumerStats
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ModelsConsumerStats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsConsumerStats} obj Optional instance to populate.
   * @return {module:model/ModelsConsumerStats} The populated <code>ModelsConsumerStats</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ModelsConsumerStats();
      if (data.hasOwnProperty('connectedTimestamp'))
        obj.connectedTimestamp = ApiClient.convertToType(data['connectedTimestamp'], 'Number');
      if (data.hasOwnProperty('messageCount'))
        obj.messageCount = ApiClient.convertToType(data['messageCount'], 'Number');
      if (data.hasOwnProperty('messagesFinished'))
        obj.messagesFinished = ApiClient.convertToType(data['messagesFinished'], 'Number');
      if (data.hasOwnProperty('messagesRecieved'))
        obj.messagesRecieved = ApiClient.convertToType(data['messagesRecieved'], 'Number');
      if (data.hasOwnProperty('messagesRequeued'))
        obj.messagesRequeued = ApiClient.convertToType(data['messagesRequeued'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} connectedTimestamp
 */
ModelsConsumerStats.prototype.connectedTimestamp = undefined;

/**
 * @member {Number} messageCount
 */
ModelsConsumerStats.prototype.messageCount = undefined;

/**
 * @member {Number} messagesFinished
 */
ModelsConsumerStats.prototype.messagesFinished = undefined;

/**
 * @member {Number} messagesRecieved
 */
ModelsConsumerStats.prototype.messagesRecieved = undefined;

/**
 * @member {Number} messagesRequeued
 */
ModelsConsumerStats.prototype.messagesRequeued = undefined;

