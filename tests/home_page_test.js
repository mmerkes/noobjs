'use strict';

casper.test.begin('testing home page', 1, function suit(test) {

  casper.start('http://localhost:3000/api/products', function() {
    test.assertHttpStatus(200);
  });

  casper.run( function() {
    test.done();
  });
});
