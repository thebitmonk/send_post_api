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
import ModelsSingleCleanedMail from './ModelsSingleCleanedMail';

/**
 * The ModelsCleanedList model module.
 * @module model/ModelsCleanedList
 * @version 1.0.0
 */
class ModelsCleanedList {
    /**
     * Constructs a new <code>ModelsCleanedList</code>.
     * @alias module:model/ModelsCleanedList
     */
    constructor() { 
        
        ModelsCleanedList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelsCleanedList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsCleanedList} obj Optional instance to populate.
     * @return {module:model/ModelsCleanedList} The populated <code>ModelsCleanedList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsCleanedList();

            if (data.hasOwnProperty('detailedResponse')) {
                obj['detailedResponse'] = ApiClient.convertToType(data['detailedResponse'], [ModelsSingleCleanedMail]);
            }
            if (data.hasOwnProperty('invalid')) {
                obj['invalid'] = ApiClient.convertToType(data['invalid'], Object);
            }
            if (data.hasOwnProperty('valid')) {
                obj['valid'] = ApiClient.convertToType(data['valid'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModelsCleanedList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModelsCleanedList</code>.
     */
    static validateJSON(data) {
        if (data['detailedResponse']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['detailedResponse'])) {
                throw new Error("Expected the field `detailedResponse` to be an array in the JSON data but got " + data['detailedResponse']);
            }
            // validate the optional field `detailedResponse` (array)
            for (const item of data['detailedResponse']) {
                ModelsSingleCleanedMail.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/ModelsSingleCleanedMail>} detailedResponse
 */
ModelsCleanedList.prototype['detailedResponse'] = undefined;

/**
 * @member {Object} invalid
 */
ModelsCleanedList.prototype['invalid'] = undefined;

/**
 * @member {Object} valid
 */
ModelsCleanedList.prototype['valid'] = undefined;






export default ModelsCleanedList;

