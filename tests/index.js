const assert = require("assert");
const myModule = require("../build");
assert.strictEqual(myModule.add(1, 2), 3);
console.log("ok");
