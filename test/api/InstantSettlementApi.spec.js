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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.YlThirdPartyInstantsettlementApiClient);
  }
}(this, function(expect, YlThirdPartyInstantsettlementApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new YlThirdPartyInstantsettlementApiClient.InstantSettlementApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InstantSettlementApi', function() {
    describe('apiInstantSettlementGet', function() {
      it('should call apiInstantSettlementGet successfully', function(done) {
        //uncomment below and update the code to test apiInstantSettlementGet
        //instance.apiInstantSettlementGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiInstantSettlementInstantSettlementNumberPost', function() {
      it('should call apiInstantSettlementInstantSettlementNumberPost successfully', function(done) {
        //uncomment below and update the code to test apiInstantSettlementInstantSettlementNumberPost
        //instance.apiInstantSettlementInstantSettlementNumberPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiInstantSettlementInstantSettlementNumberTransactionsGet', function() {
      it('should call apiInstantSettlementInstantSettlementNumberTransactionsGet successfully', function(done) {
        //uncomment below and update the code to test apiInstantSettlementInstantSettlementNumberTransactionsGet
        //instance.apiInstantSettlementInstantSettlementNumberTransactionsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
