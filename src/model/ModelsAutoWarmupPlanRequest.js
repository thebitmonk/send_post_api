/**
 * SendPost API
 * Email API and SMTP relay to not just send and measure email sending, but also alert and optimise. We provide you with tools, expertise and support needed to reliably deliver emails to your customers inboxes on time, every time.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ModelsAutoWarmupDomainSchedule from './ModelsAutoWarmupDomainSchedule';

/**
 * The ModelsAutoWarmupPlanRequest model module.
 * @module model/ModelsAutoWarmupPlanRequest
 * @version 1.0.0
 */
class ModelsAutoWarmupPlanRequest {
    /**
     * Constructs a new <code>ModelsAutoWarmupPlanRequest</code>.
     * @alias module:model/ModelsAutoWarmupPlanRequest
     */
    constructor() { 
        
        ModelsAutoWarmupPlanRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelsAutoWarmupPlanRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsAutoWarmupPlanRequest} obj Optional instance to populate.
     * @return {module:model/ModelsAutoWarmupPlanRequest} The populated <code>ModelsAutoWarmupPlanRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsAutoWarmupPlanRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('schedule')) {
                obj['schedule'] = ApiClient.convertToType(data['schedule'], [ModelsAutoWarmupDomainSchedule]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModelsAutoWarmupPlanRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModelsAutoWarmupPlanRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        if (data['schedule']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['schedule'])) {
                throw new Error("Expected the field `schedule` to be an array in the JSON data but got " + data['schedule']);
            }
            // validate the optional field `schedule` (array)
            for (const item of data['schedule']) {
                ModelsAutoWarmupDomainSchedule.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} name
 */
ModelsAutoWarmupPlanRequest.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/ModelsAutoWarmupDomainSchedule>} schedule
 */
ModelsAutoWarmupPlanRequest.prototype['schedule'] = undefined;






export default ModelsAutoWarmupPlanRequest;

