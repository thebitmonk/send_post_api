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
 * Swagger Codegen version: 2.4.43
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
    instance = new SendPostApi.AccountlabelApi();
  });

  describe('(package)', function() {
    describe('AccountlabelApi', function() {
      describe('labelRouterCount', function() {
        it('should call labelRouterCount successfully', function(done) {
          // TODO: uncomment, update parameter values for labelRouterCount call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var type = "type_example";

          instance.labelRouterCount(xAccountApiKey, type, function(error, data, response) {
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
      describe('labelRouterCreate', function() {
        it('should call labelRouterCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for labelRouterCreate call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var body = new SendPostApi.ModelsLabel();
          body.color = "";
          body.created = "0";
          body.id = "0";
          body.name = "";
          body.type = "0";

          instance.labelRouterCreate(xAccountApiKey, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsLabel);
            expect(data.color).to.be.a('string');
            expect(data.color).to.be("");
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.type).to.be.a('number');
            expect(data.type).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('labelRouterDelete', function() {
        it('should call labelRouterDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for labelRouterDelete call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var labelId = 789;

          instance.labelRouterDelete(xAccountApiKey, labelId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsDeleteResponse);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('labelRouterGet', function() {
        it('should call labelRouterGet successfully', function(done) {
          // TODO: uncomment, update parameter values for labelRouterGet call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var labelId = 789;

          instance.labelRouterGet(xAccountApiKey, labelId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsLabel);
            expect(data.color).to.be.a('string');
            expect(data.color).to.be("");
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.type).to.be.a('number');
            expect(data.type).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('labelRouterGetAll', function() {
        it('should call labelRouterGetAll successfully', function(done) {
          // TODO: uncomment, update parameter values for labelRouterGetAll call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var type = "type_example";
          var opts = {};
          opts.offset = 789;
          opts.limit = 789;
          opts.search = "search_example";

          instance.labelRouterGetAll(xAccountApiKey, type, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsLabel);
              expect(data.color).to.be.a('string');
              expect(data.color).to.be("");
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
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
      describe('labelRouterUpdate', function() {
        it('should call labelRouterUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for labelRouterUpdate call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var labelId = 789;
          var body = new SendPostApi.ModelsLabel();
          body.color = "";
          body.created = "0";
          body.id = "0";
          body.name = "";
          body.type = "0";

          instance.labelRouterUpdate(xAccountApiKey, labelId, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsLabel);
            expect(data.color).to.be.a('string');
            expect(data.color).to.be("");
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
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
