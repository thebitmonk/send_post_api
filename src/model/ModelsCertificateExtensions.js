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

/**
 * The ModelsCertificateExtensions model module.
 * @module model/ModelsCertificateExtensions
 * @version 1.0.0
 */
class ModelsCertificateExtensions {
    /**
     * Constructs a new <code>ModelsCertificateExtensions</code>.
     * @alias module:model/ModelsCertificateExtensions
     */
    constructor() { 
        
        ModelsCertificateExtensions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelsCertificateExtensions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsCertificateExtensions} obj Optional instance to populate.
     * @return {module:model/ModelsCertificateExtensions} The populated <code>ModelsCertificateExtensions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsCertificateExtensions();

            if (data.hasOwnProperty('authorityInfoAccess')) {
                obj['authorityInfoAccess'] = ApiClient.convertToType(data['authorityInfoAccess'], 'String');
            }
            if (data.hasOwnProperty('authorityKeyIdentifier')) {
                obj['authorityKeyIdentifier'] = ApiClient.convertToType(data['authorityKeyIdentifier'], 'String');
            }
            if (data.hasOwnProperty('basicConstraints')) {
                obj['basicConstraints'] = ApiClient.convertToType(data['basicConstraints'], 'String');
            }
            if (data.hasOwnProperty('certificatePolicies')) {
                obj['certificatePolicies'] = ApiClient.convertToType(data['certificatePolicies'], 'String');
            }
            if (data.hasOwnProperty('crlDistributionPoints')) {
                obj['crlDistributionPoints'] = ApiClient.convertToType(data['crlDistributionPoints'], 'String');
            }
            if (data.hasOwnProperty('extendedKeyUsage')) {
                obj['extendedKeyUsage'] = ApiClient.convertToType(data['extendedKeyUsage'], 'String');
            }
            if (data.hasOwnProperty('keyUsage')) {
                obj['keyUsage'] = ApiClient.convertToType(data['keyUsage'], 'String');
            }
            if (data.hasOwnProperty('subjectKeyIdentifier')) {
                obj['subjectKeyIdentifier'] = ApiClient.convertToType(data['subjectKeyIdentifier'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModelsCertificateExtensions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModelsCertificateExtensions</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['authorityInfoAccess'] && !(typeof data['authorityInfoAccess'] === 'string' || data['authorityInfoAccess'] instanceof String)) {
            throw new Error("Expected the field `authorityInfoAccess` to be a primitive type in the JSON string but got " + data['authorityInfoAccess']);
        }
        // ensure the json data is a string
        if (data['authorityKeyIdentifier'] && !(typeof data['authorityKeyIdentifier'] === 'string' || data['authorityKeyIdentifier'] instanceof String)) {
            throw new Error("Expected the field `authorityKeyIdentifier` to be a primitive type in the JSON string but got " + data['authorityKeyIdentifier']);
        }
        // ensure the json data is a string
        if (data['basicConstraints'] && !(typeof data['basicConstraints'] === 'string' || data['basicConstraints'] instanceof String)) {
            throw new Error("Expected the field `basicConstraints` to be a primitive type in the JSON string but got " + data['basicConstraints']);
        }
        // ensure the json data is a string
        if (data['certificatePolicies'] && !(typeof data['certificatePolicies'] === 'string' || data['certificatePolicies'] instanceof String)) {
            throw new Error("Expected the field `certificatePolicies` to be a primitive type in the JSON string but got " + data['certificatePolicies']);
        }
        // ensure the json data is a string
        if (data['crlDistributionPoints'] && !(typeof data['crlDistributionPoints'] === 'string' || data['crlDistributionPoints'] instanceof String)) {
            throw new Error("Expected the field `crlDistributionPoints` to be a primitive type in the JSON string but got " + data['crlDistributionPoints']);
        }
        // ensure the json data is a string
        if (data['extendedKeyUsage'] && !(typeof data['extendedKeyUsage'] === 'string' || data['extendedKeyUsage'] instanceof String)) {
            throw new Error("Expected the field `extendedKeyUsage` to be a primitive type in the JSON string but got " + data['extendedKeyUsage']);
        }
        // ensure the json data is a string
        if (data['keyUsage'] && !(typeof data['keyUsage'] === 'string' || data['keyUsage'] instanceof String)) {
            throw new Error("Expected the field `keyUsage` to be a primitive type in the JSON string but got " + data['keyUsage']);
        }
        // ensure the json data is a string
        if (data['subjectKeyIdentifier'] && !(typeof data['subjectKeyIdentifier'] === 'string' || data['subjectKeyIdentifier'] instanceof String)) {
            throw new Error("Expected the field `subjectKeyIdentifier` to be a primitive type in the JSON string but got " + data['subjectKeyIdentifier']);
        }

        return true;
    }


}



/**
 * @member {String} authorityInfoAccess
 */
ModelsCertificateExtensions.prototype['authorityInfoAccess'] = undefined;

/**
 * @member {String} authorityKeyIdentifier
 */
ModelsCertificateExtensions.prototype['authorityKeyIdentifier'] = undefined;

/**
 * @member {String} basicConstraints
 */
ModelsCertificateExtensions.prototype['basicConstraints'] = undefined;

/**
 * @member {String} certificatePolicies
 */
ModelsCertificateExtensions.prototype['certificatePolicies'] = undefined;

/**
 * @member {String} crlDistributionPoints
 */
ModelsCertificateExtensions.prototype['crlDistributionPoints'] = undefined;

/**
 * @member {String} extendedKeyUsage
 */
ModelsCertificateExtensions.prototype['extendedKeyUsage'] = undefined;

/**
 * @member {String} keyUsage
 */
ModelsCertificateExtensions.prototype['keyUsage'] = undefined;

/**
 * @member {String} subjectKeyIdentifier
 */
ModelsCertificateExtensions.prototype['subjectKeyIdentifier'] = undefined;






export default ModelsCertificateExtensions;

