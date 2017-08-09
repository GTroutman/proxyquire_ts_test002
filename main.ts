import { foo } from './foo';

declare const require: any;
const proxyquire = require('proxyquire');

console.log(foo.baz);
console.log(foo.baz.testexport);

foo = proxyquire('./foo',{
    './baz' : {
        testexport: 'arse',
    },
});

console.log(foo.baz);