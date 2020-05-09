/*
 * SendPost API
 * SendPost API to transactional emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SendPostApi);
  }
}(this, function(expect, SendPostApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SendPostApi.ClusterApi();
  });

  describe('(package)', function() {
    describe('ClusterApi', function() {
      describe('clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster', function() {
        it('should call clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster successfully', function(done) {
          // TODO: uncomment, update parameter values for clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster call
          /*
          var body = [new SendPostApi.ModelsSuppression()];
          body[0].created = "0";
          body[0].email = "";
          body[0].id = "0";
          body[0].reason = new SendPostApi.ModelsSuppressionReason();

          instance.clusterRouterAddItemsToSuppressionFilterOfEveryNodeInCluster(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster', function() {
        it('should call clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster successfully', function(done) {
          // TODO: uncomment, update parameter values for clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster call
          /*
          var body = [new SendPostApi.ModelsSuppression()];
          body[0].created = "0";
          body[0].email = "";
          body[0].id = "0";
          body[0].reason = new SendPostApi.ModelsSuppressionReason();

          instance.clusterRouterDeleteItemsFromSuppressionFilterOfEveryNodeInCluster(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
