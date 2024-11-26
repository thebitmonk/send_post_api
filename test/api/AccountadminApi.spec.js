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
    instance = new SendPostApi.AccountadminApi();
  });

  describe('(package)', function() {
    describe('AccountadminApi', function() {
      describe('accountAdminRouterAssumeAccountGetToken', function() {
        it('should call accountAdminRouterAssumeAccountGetToken successfully', function(done) {
          // TODO: uncomment, update parameter values for accountAdminRouterAssumeAccountGetToken call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var email = "email_example";
          var opts = {};
          opts.uid = "uid_example";

          instance.accountAdminRouterAssumeAccountGetToken(xAccountApiKey, email, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsRAssumeAccount);
            expect(data.customToken).to.be.a('string');
            expect(data.customToken).to.be("");

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
