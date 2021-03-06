/**
 * YouLend Third Party Instant Settlement API
 * Through this API you can can create Instant Settlement transactions with YouLend
 *
 * The version of the OpenAPI document: v1.0
 * Contact: mark.ufland@youlend.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InstantSettlementTransactionModel model module.
 * @module model/InstantSettlementTransactionModel
 * @version v1.0
 */
class InstantSettlementTransactionModel {
    /**
     * Constructs a new <code>InstantSettlementTransactionModel</code>.
     * Model for viewing details of an Instant Settlement transaction
     * @alias module:model/InstantSettlementTransactionModel
     */
    constructor() { 
        
        InstantSettlementTransactionModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstantSettlementTransactionModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstantSettlementTransactionModel} obj Optional instance to populate.
     * @return {module:model/InstantSettlementTransactionModel} The populated <code>InstantSettlementTransactionModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstantSettlementTransactionModel();

            if (data.hasOwnProperty('instantSettlementId')) {
                obj['instantSettlementId'] = ApiClient.convertToType(data['instantSettlementId'], 'String');
            }
            if (data.hasOwnProperty('instantSettlementTransactionNumber')) {
                obj['instantSettlementTransactionNumber'] = ApiClient.convertToType(data['instantSettlementTransactionNumber'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('dateCreated')) {
                obj['dateCreated'] = ApiClient.convertToType(data['dateCreated'], 'Date');
            }
            if (data.hasOwnProperty('dateFunded')) {
                obj['dateFunded'] = ApiClient.convertToType(data['dateFunded'], 'Date');
            }
            if (data.hasOwnProperty('dateRepaid')) {
                obj['dateRepaid'] = ApiClient.convertToType(data['dateRepaid'], 'Date');
            }
            if (data.hasOwnProperty('currentAmount')) {
                obj['currentAmount'] = ApiClient.convertToType(data['currentAmount'], 'Number');
            }
            if (data.hasOwnProperty('fundedAmount')) {
                obj['fundedAmount'] = ApiClient.convertToType(data['fundedAmount'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Gets or sets the Instant Settlement Id
 * @member {String} instantSettlementId
 */
InstantSettlementTransactionModel.prototype['instantSettlementId'] = undefined;

/**
 * Gets or sets the Instant Settlement Number
 * @member {Number} instantSettlementTransactionNumber
 */
InstantSettlementTransactionModel.prototype['instantSettlementTransactionNumber'] = undefined;

/**
 * Gets or sets the status of the loan (i.e. unfunded, funded or repaid)
 * @member {String} status
 */
InstantSettlementTransactionModel.prototype['status'] = undefined;

/**
 * Gets or sets the date the loan was created
 * @member {Date} dateCreated
 */
InstantSettlementTransactionModel.prototype['dateCreated'] = undefined;

/**
 * Gets or sets the date the loan was funded
 * @member {Date} dateFunded
 */
InstantSettlementTransactionModel.prototype['dateFunded'] = undefined;

/**
 * Gets or sets the date the loan was repaid
 * @member {Date} dateRepaid
 */
InstantSettlementTransactionModel.prototype['dateRepaid'] = undefined;

/**
 * Gets or sets the current amount outstanding for the loan
 * @member {Number} currentAmount
 */
InstantSettlementTransactionModel.prototype['currentAmount'] = undefined;

/**
 * Gets or sets the originally funded amount for the loan
 * @member {Number} fundedAmount
 */
InstantSettlementTransactionModel.prototype['fundedAmount'] = undefined;

/**
 * Gets or sets the amount requested for funding for the loan
 * @member {Number} amount
 */
InstantSettlementTransactionModel.prototype['amount'] = undefined;






export default InstantSettlementTransactionModel;

