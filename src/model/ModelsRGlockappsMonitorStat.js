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
import {ModelsGlockappsMonitorStat} from './ModelsGlockappsMonitorStat';

/**
 * The ModelsRGlockappsMonitorStat model module.
 * @module model/ModelsRGlockappsMonitorStat
 * @version 1.0.0
 */
export class ModelsRGlockappsMonitorStat {
  /**
   * Constructs a new <code>ModelsRGlockappsMonitorStat</code>.
   * @alias module:model/ModelsRGlockappsMonitorStat
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ModelsRGlockappsMonitorStat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsRGlockappsMonitorStat} obj Optional instance to populate.
   * @return {module:model/ModelsRGlockappsMonitorStat} The populated <code>ModelsRGlockappsMonitorStat</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ModelsRGlockappsMonitorStat();
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'String');
      if (data.hasOwnProperty('stat'))
        obj.stat = ModelsGlockappsMonitorStat.constructFromObject(data['stat']);
    }
    return obj;
  }
}

/**
 * @member {String} _date
 */
ModelsRGlockappsMonitorStat.prototype._date = undefined;

/**
 * @member {module:model/ModelsGlockappsMonitorStat} stat
 */
ModelsRGlockappsMonitorStat.prototype.stat = undefined;

