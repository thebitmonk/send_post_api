/*
 * SendPost API
 * SendPost API to send transactional emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendx.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
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
    instance = new SendPostApi.SubaccounteventApi();
  });

  describe('(package)', function() {
    describe('SubaccounteventApi', function() {
      describe('eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange', function() {
        it('should call eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange successfully', function(done) {
          // TODO: uncomment, update parameter values for eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var subAccountId = 789;

          instance.eventRouterCountAllEventsFromANodeOfASubAccountForAGivenTimeRange(xSubAccountApiKey, subAccountId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsCountStat);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('eventRouterCountAllEventsFromASubAccountForAGivenTimeRange', function() {
        it('should call eventRouterCountAllEventsFromASubAccountForAGivenTimeRange successfully', function(done) {
          // TODO: uncomment, update parameter values for eventRouterCountAllEventsFromASubAccountForAGivenTimeRange call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";

          instance.eventRouterCountAllEventsFromASubAccountForAGivenTimeRange(xSubAccountApiKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsCountStat);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('eventRouterGet', function() {
        it('should call eventRouterGet successfully', function(done) {
          // TODO: uncomment, update parameter values for eventRouterGet call and complete the assertions
          /*
          var eventId = "eventId_example";

          instance.eventRouterGet(eventId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsQEvent);
            expect(data.eventID).to.be.a('string');
            expect(data.eventID).to.be("");
            expect(data.eventMetadata).to.be.a(SendPostApi.ModelsEventMetadata);
                  expect(data.eventMetadata.clickedURL).to.be.a('string');
              expect(data.eventMetadata.clickedURL).to.be("");
              expect(data.eventMetadata.device).to.be.a(SendPostApi.UaparserDevice);
                    expect(data.eventMetadata.device.family).to.be.a('string');
                expect(data.eventMetadata.device.family).to.be("");
              expect(data.eventMetadata.geo).to.be.a(SendPostApi.ModelsCity);
                    expect(data.eventMetadata.geo.cityID).to.be.a('number');
                expect(data.eventMetadata.geo.cityID).to.be(0);
                expect(data.eventMetadata.geo.continentCode).to.be.a('string');
                expect(data.eventMetadata.geo.continentCode).to.be("");
                expect(data.eventMetadata.geo.countryCode).to.be.a('string');
                expect(data.eventMetadata.geo.countryCode).to.be("");
                expect(data.eventMetadata.geo.postalCode).to.be.a('string');
                expect(data.eventMetadata.geo.postalCode).to.be("");
                expect(data.eventMetadata.geo.timeZone).to.be.a('string');
                expect(data.eventMetadata.geo.timeZone).to.be("");
              expect(data.eventMetadata.os).to.be.a(SendPostApi.UaparserOs);
                    expect(data.eventMetadata.os.family).to.be.a('string');
                expect(data.eventMetadata.os.family).to.be("");
                expect(data.eventMetadata.os.major).to.be.a('string');
                expect(data.eventMetadata.os.major).to.be("");
                expect(data.eventMetadata.os.minor).to.be.a('string');
                expect(data.eventMetadata.os.minor).to.be("");
                expect(data.eventMetadata.os.patch).to.be.a('string');
                expect(data.eventMetadata.os.patch).to.be("");
                expect(data.eventMetadata.os.patchMinor).to.be.a('string');
                expect(data.eventMetadata.os.patchMinor).to.be("");
              expect(data.eventMetadata.smtpCode).to.be.a('number');
              expect(data.eventMetadata.smtpCode).to.be("0");
              expect(data.eventMetadata.smtpDescription).to.be.a('string');
              expect(data.eventMetadata.smtpDescription).to.be("");
              expect(data.eventMetadata.userAgent).to.be.a(SendPostApi.UaparserUserAgent);
                    expect(data.eventMetadata.userAgent.family).to.be.a('string');
                expect(data.eventMetadata.userAgent.family).to.be("");
                expect(data.eventMetadata.userAgent.major).to.be.a('string');
                expect(data.eventMetadata.userAgent.major).to.be("");
                expect(data.eventMetadata.userAgent.minor).to.be.a('string');
                expect(data.eventMetadata.userAgent.minor).to.be("");
                expect(data.eventMetadata.userAgent.patch).to.be.a('string');
                expect(data.eventMetadata.userAgent.patch).to.be("");
            expect(data.groups).to.be.a(Object);
            expect(data.groups).to.be();
            expect(data.ipID).to.be.a('number');
            expect(data.ipID).to.be("0");
            expect(data.messageID).to.be.a('string');
            expect(data.messageID).to.be("");
            expect(data.messageType).to.be.a('string');
            expect(data.messageType).to.be("");
            expect(data.subAccountID).to.be.a('number');
            expect(data.subAccountID).to.be("0");
            expect(data.submittedAt).to.be.a('number');
            expect(data.submittedAt).to.be("0");
            expect(data.type).to.be.a('number');
            expect(data.type).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('eventRouterGetAllEventsFromASubAccountForAGivenTimeRange', function() {
        it('should call eventRouterGetAllEventsFromASubAccountForAGivenTimeRange successfully', function(done) {
          // TODO: uncomment, update parameter values for eventRouterGetAllEventsFromASubAccountForAGivenTimeRange call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var opts = {};
          opts.offset = 789;
          opts.limit = 789;
          opts.search = "search_example";
          opts.from = "from_example";
          opts.to = "to_example";

          instance.eventRouterGetAllEventsFromASubAccountForAGivenTimeRange(xSubAccountApiKey, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SendPostApi.ModelsQEvent);
              expect(data.eventID).to.be.a('string');
              expect(data.eventID).to.be("");
              expect(data.eventMetadata).to.be.a(SendPostApi.ModelsEventMetadata);
                    expect(data.eventMetadata.clickedURL).to.be.a('string');
                expect(data.eventMetadata.clickedURL).to.be("");
                expect(data.eventMetadata.device).to.be.a(SendPostApi.UaparserDevice);
                      expect(data.eventMetadata.device.family).to.be.a('string');
                  expect(data.eventMetadata.device.family).to.be("");
                expect(data.eventMetadata.geo).to.be.a(SendPostApi.ModelsCity);
                      expect(data.eventMetadata.geo.cityID).to.be.a('number');
                  expect(data.eventMetadata.geo.cityID).to.be(0);
                  expect(data.eventMetadata.geo.continentCode).to.be.a('string');
                  expect(data.eventMetadata.geo.continentCode).to.be("");
                  expect(data.eventMetadata.geo.countryCode).to.be.a('string');
                  expect(data.eventMetadata.geo.countryCode).to.be("");
                  expect(data.eventMetadata.geo.postalCode).to.be.a('string');
                  expect(data.eventMetadata.geo.postalCode).to.be("");
                  expect(data.eventMetadata.geo.timeZone).to.be.a('string');
                  expect(data.eventMetadata.geo.timeZone).to.be("");
                expect(data.eventMetadata.os).to.be.a(SendPostApi.UaparserOs);
                      expect(data.eventMetadata.os.family).to.be.a('string');
                  expect(data.eventMetadata.os.family).to.be("");
                  expect(data.eventMetadata.os.major).to.be.a('string');
                  expect(data.eventMetadata.os.major).to.be("");
                  expect(data.eventMetadata.os.minor).to.be.a('string');
                  expect(data.eventMetadata.os.minor).to.be("");
                  expect(data.eventMetadata.os.patch).to.be.a('string');
                  expect(data.eventMetadata.os.patch).to.be("");
                  expect(data.eventMetadata.os.patchMinor).to.be.a('string');
                  expect(data.eventMetadata.os.patchMinor).to.be("");
                expect(data.eventMetadata.smtpCode).to.be.a('number');
                expect(data.eventMetadata.smtpCode).to.be("0");
                expect(data.eventMetadata.smtpDescription).to.be.a('string');
                expect(data.eventMetadata.smtpDescription).to.be("");
                expect(data.eventMetadata.userAgent).to.be.a(SendPostApi.UaparserUserAgent);
                      expect(data.eventMetadata.userAgent.family).to.be.a('string');
                  expect(data.eventMetadata.userAgent.family).to.be("");
                  expect(data.eventMetadata.userAgent.major).to.be.a('string');
                  expect(data.eventMetadata.userAgent.major).to.be("");
                  expect(data.eventMetadata.userAgent.minor).to.be.a('string');
                  expect(data.eventMetadata.userAgent.minor).to.be("");
                  expect(data.eventMetadata.userAgent.patch).to.be.a('string');
                  expect(data.eventMetadata.userAgent.patch).to.be("");
              expect(data.groups).to.be.a(Object);
              expect(data.groups).to.be();
              expect(data.ipID).to.be.a('number');
              expect(data.ipID).to.be("0");
              expect(data.messageID).to.be.a('string');
              expect(data.messageID).to.be("");
              expect(data.messageType).to.be.a('string');
              expect(data.messageType).to.be("");
              expect(data.subAccountID).to.be.a('number');
              expect(data.subAccountID).to.be("0");
              expect(data.submittedAt).to.be.a('number');
              expect(data.submittedAt).to.be("0");
              expect(data.type).to.be.a('number');
              expect(data.type).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange', function() {
        it('should call eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange successfully', function(done) {
          // TODO: uncomment, update parameter values for eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var subAccountId = 789;

          instance.eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange(xSubAccountApiKey, subAccountId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SendPostApi.ModelsQEvent);
              expect(data.eventID).to.be.a('string');
              expect(data.eventID).to.be("");
              expect(data.eventMetadata).to.be.a(SendPostApi.ModelsEventMetadata);
                    expect(data.eventMetadata.clickedURL).to.be.a('string');
                expect(data.eventMetadata.clickedURL).to.be("");
                expect(data.eventMetadata.device).to.be.a(SendPostApi.UaparserDevice);
                      expect(data.eventMetadata.device.family).to.be.a('string');
                  expect(data.eventMetadata.device.family).to.be("");
                expect(data.eventMetadata.geo).to.be.a(SendPostApi.ModelsCity);
                      expect(data.eventMetadata.geo.cityID).to.be.a('number');
                  expect(data.eventMetadata.geo.cityID).to.be(0);
                  expect(data.eventMetadata.geo.continentCode).to.be.a('string');
                  expect(data.eventMetadata.geo.continentCode).to.be("");
                  expect(data.eventMetadata.geo.countryCode).to.be.a('string');
                  expect(data.eventMetadata.geo.countryCode).to.be("");
                  expect(data.eventMetadata.geo.postalCode).to.be.a('string');
                  expect(data.eventMetadata.geo.postalCode).to.be("");
                  expect(data.eventMetadata.geo.timeZone).to.be.a('string');
                  expect(data.eventMetadata.geo.timeZone).to.be("");
                expect(data.eventMetadata.os).to.be.a(SendPostApi.UaparserOs);
                      expect(data.eventMetadata.os.family).to.be.a('string');
                  expect(data.eventMetadata.os.family).to.be("");
                  expect(data.eventMetadata.os.major).to.be.a('string');
                  expect(data.eventMetadata.os.major).to.be("");
                  expect(data.eventMetadata.os.minor).to.be.a('string');
                  expect(data.eventMetadata.os.minor).to.be("");
                  expect(data.eventMetadata.os.patch).to.be.a('string');
                  expect(data.eventMetadata.os.patch).to.be("");
                  expect(data.eventMetadata.os.patchMinor).to.be.a('string');
                  expect(data.eventMetadata.os.patchMinor).to.be("");
                expect(data.eventMetadata.smtpCode).to.be.a('number');
                expect(data.eventMetadata.smtpCode).to.be("0");
                expect(data.eventMetadata.smtpDescription).to.be.a('string');
                expect(data.eventMetadata.smtpDescription).to.be("");
                expect(data.eventMetadata.userAgent).to.be.a(SendPostApi.UaparserUserAgent);
                      expect(data.eventMetadata.userAgent.family).to.be.a('string');
                  expect(data.eventMetadata.userAgent.family).to.be("");
                  expect(data.eventMetadata.userAgent.major).to.be.a('string');
                  expect(data.eventMetadata.userAgent.major).to.be("");
                  expect(data.eventMetadata.userAgent.minor).to.be.a('string');
                  expect(data.eventMetadata.userAgent.minor).to.be("");
                  expect(data.eventMetadata.userAgent.patch).to.be.a('string');
                  expect(data.eventMetadata.userAgent.patch).to.be("");
              expect(data.groups).to.be.a(Object);
              expect(data.groups).to.be();
              expect(data.ipID).to.be.a('number');
              expect(data.ipID).to.be("0");
              expect(data.messageID).to.be.a('string');
              expect(data.messageID).to.be("");
              expect(data.messageType).to.be.a('string');
              expect(data.messageType).to.be("");
              expect(data.subAccountID).to.be.a('number');
              expect(data.subAccountID).to.be("0");
              expect(data.submittedAt).to.be.a('number');
              expect(data.submittedAt).to.be("0");
              expect(data.type).to.be.a('number');
              expect(data.type).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('eventRouterGetEventInNode', function() {
        it('should call eventRouterGetEventInNode successfully', function(done) {
          // TODO: uncomment, update parameter values for eventRouterGetEventInNode call and complete the assertions
          /*
          var subAccountId = 789;
          var eventId = "eventId_example";

          instance.eventRouterGetEventInNode(subAccountId, eventId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsQEvent);
            expect(data.eventID).to.be.a('string');
            expect(data.eventID).to.be("");
            expect(data.eventMetadata).to.be.a(SendPostApi.ModelsEventMetadata);
                  expect(data.eventMetadata.clickedURL).to.be.a('string');
              expect(data.eventMetadata.clickedURL).to.be("");
              expect(data.eventMetadata.device).to.be.a(SendPostApi.UaparserDevice);
                    expect(data.eventMetadata.device.family).to.be.a('string');
                expect(data.eventMetadata.device.family).to.be("");
              expect(data.eventMetadata.geo).to.be.a(SendPostApi.ModelsCity);
                    expect(data.eventMetadata.geo.cityID).to.be.a('number');
                expect(data.eventMetadata.geo.cityID).to.be(0);
                expect(data.eventMetadata.geo.continentCode).to.be.a('string');
                expect(data.eventMetadata.geo.continentCode).to.be("");
                expect(data.eventMetadata.geo.countryCode).to.be.a('string');
                expect(data.eventMetadata.geo.countryCode).to.be("");
                expect(data.eventMetadata.geo.postalCode).to.be.a('string');
                expect(data.eventMetadata.geo.postalCode).to.be("");
                expect(data.eventMetadata.geo.timeZone).to.be.a('string');
                expect(data.eventMetadata.geo.timeZone).to.be("");
              expect(data.eventMetadata.os).to.be.a(SendPostApi.UaparserOs);
                    expect(data.eventMetadata.os.family).to.be.a('string');
                expect(data.eventMetadata.os.family).to.be("");
                expect(data.eventMetadata.os.major).to.be.a('string');
                expect(data.eventMetadata.os.major).to.be("");
                expect(data.eventMetadata.os.minor).to.be.a('string');
                expect(data.eventMetadata.os.minor).to.be("");
                expect(data.eventMetadata.os.patch).to.be.a('string');
                expect(data.eventMetadata.os.patch).to.be("");
                expect(data.eventMetadata.os.patchMinor).to.be.a('string');
                expect(data.eventMetadata.os.patchMinor).to.be("");
              expect(data.eventMetadata.smtpCode).to.be.a('number');
              expect(data.eventMetadata.smtpCode).to.be("0");
              expect(data.eventMetadata.smtpDescription).to.be.a('string');
              expect(data.eventMetadata.smtpDescription).to.be("");
              expect(data.eventMetadata.userAgent).to.be.a(SendPostApi.UaparserUserAgent);
                    expect(data.eventMetadata.userAgent.family).to.be.a('string');
                expect(data.eventMetadata.userAgent.family).to.be("");
                expect(data.eventMetadata.userAgent.major).to.be.a('string');
                expect(data.eventMetadata.userAgent.major).to.be("");
                expect(data.eventMetadata.userAgent.minor).to.be.a('string');
                expect(data.eventMetadata.userAgent.minor).to.be("");
                expect(data.eventMetadata.userAgent.patch).to.be.a('string');
                expect(data.eventMetadata.userAgent.patch).to.be("");
            expect(data.groups).to.be.a(Object);
            expect(data.groups).to.be();
            expect(data.ipID).to.be.a('number');
            expect(data.ipID).to.be("0");
            expect(data.messageID).to.be.a('string');
            expect(data.messageID).to.be("");
            expect(data.messageType).to.be.a('string');
            expect(data.messageType).to.be("");
            expect(data.subAccountID).to.be.a('number');
            expect(data.subAccountID).to.be("0");
            expect(data.submittedAt).to.be.a('number');
            expect(data.submittedAt).to.be("0");
            expect(data.type).to.be.a('number');
            expect(data.type).to.be("0");

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
