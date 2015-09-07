declare var describe;
declare var it;

var should = require('chai').should();
var tsrefpath = require('../index'); 

describe('one', function(){
    it('should pass', function(done){

        done();
        });


        it('should not pass', function(done){
        throw "Some error";
        done();
    });
});
