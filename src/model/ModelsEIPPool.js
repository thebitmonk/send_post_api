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
import {ModelsEIP} from './ModelsEIP';

/**
 * The ModelsEIPPool model module.
 * @module model/ModelsEIPPool
 * @version 1.0.0
 */
export class ModelsEIPPool {
  /**
   * Constructs a new <code>ModelsEIPPool</code>.
   * @alias module:model/ModelsEIPPool
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ModelsEIPPool</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsEIPPool} obj Optional instance to populate.
   * @return {module:model/ModelsEIPPool} The populated <code>ModelsEIPPool</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ModelsEIPPool();
      if (data.hasOwnProperty('ips'))
        obj.ips = ApiClient.convertToType(data['ips'], [ModelsEIP]);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('routingMapping'))
        obj.routingMapping = ApiClient.convertToType(data['routingMapping'], Object);
      if (data.hasOwnProperty('routingStrategy'))
        obj.routingStrategy = ApiClient.convertToType(data['routingStrategy'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/ModelsEIP>} ips
 */
ModelsEIPPool.prototype.ips = undefined;

/**
 * @member {String} name
 */
ModelsEIPPool.prototype.name = undefined;

/**
 * @member {Object} routingMapping
 */
ModelsEIPPool.prototype.routingMapping = undefined;

/**
 * @member {Number} routingStrategy
 */
ModelsEIPPool.prototype.routingStrategy = undefined;

