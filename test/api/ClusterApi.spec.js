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
 * Swagger Codegen version: 2.4.19
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
          var body = new SendPostApi.ModelsSuppression();
          body.created = "0";
          body.email = "";
          body.id = "0";
          body.reason = new SendPostApi.ModelsSuppressionReason();
          body.smtpError = "";

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
      describe('clusterRouterDeleteItemFromCacheOfEveryNodeInCluster', function() {
        it('should call clusterRouterDeleteItemFromCacheOfEveryNodeInCluster successfully', function(done) {
          // TODO: uncomment, update parameter values for clusterRouterDeleteItemFromCacheOfEveryNodeInCluster call
          /*
          var xSystemApiKey = "xSystemApiKey_example";
          var opts = {};
          opts.name = "name_example";
          opts.key = "key_example";

          instance.clusterRouterDeleteItemFromCacheOfEveryNodeInCluster(xSystemApiKey, opts, function(error, data, response) {
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
          var body = new SendPostApi.ModelsSuppression();
          body.created = "0";
          body.email = "";
          body.id = "0";
          body.reason = new SendPostApi.ModelsSuppressionReason();
          body.smtpError = "";

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
      describe('clusterRouterGetItemFromCacheOfEveryNodeInCluster', function() {
        it('should call clusterRouterGetItemFromCacheOfEveryNodeInCluster successfully', function(done) {
          // TODO: uncomment, update parameter values for clusterRouterGetItemFromCacheOfEveryNodeInCluster call and complete the assertions
          /*
          var xSystemApiKey = "xSystemApiKey_example";
          var opts = {};
          opts.name = "name_example";
          opts.key = "key_example";

          instance.clusterRouterGetItemFromCacheOfEveryNodeInCluster(xSystemApiKey, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsAllClusterCache);
            {
              let dataCtr = data.result;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SendPostApi.ModelsClusterCache);
                expect(data.data).to.be.a(SendPostApi.Model1487930xc420434660False);
                    expect(data.found).to.be.a('boolean');
                expect(data.found).to.be(false);
                expect(data.key).to.be.a('string');
                expect(data.key).to.be("");
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('clusterRouterGetItemFromCacheOfSpecificNodeInCluster', function() {
        it('should call clusterRouterGetItemFromCacheOfSpecificNodeInCluster successfully', function(done) {
          // TODO: uncomment, update parameter values for clusterRouterGetItemFromCacheOfSpecificNodeInCluster call and complete the assertions
          /*
          var xSystemApiKey = "xSystemApiKey_example";
          var opts = {};
          opts.name = "name_example";
          opts.key = "key_example";

          instance.clusterRouterGetItemFromCacheOfSpecificNodeInCluster(xSystemApiKey, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsClusterCache);
            expect(data.data).to.be.a(SendPostApi.Model1487930xc420434660False);
                expect(data.found).to.be.a('boolean');
            expect(data.found).to.be(false);
            expect(data.key).to.be.a('string');
            expect(data.key).to.be("");
            expect(data.type).to.be.a('string');
            expect(data.type).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0', function() {
        it('should call clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0 successfully', function(done) {
          // TODO: uncomment, update parameter values for clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0 call
          /*
          var xSystemApiKey = "xSystemApiKey_example";
          var opts = {};
          opts.name = "name_example";
          opts.key = "key_example";

          instance.clusterRouterGetItemFromCacheOfSpecificNodeInCluster_0(xSystemApiKey, opts, function(error, data, response) {
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
