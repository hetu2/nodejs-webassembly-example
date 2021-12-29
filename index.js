// Assume add.wasm file exists that contains a single function adding 2 provided arguments
const fs = require("fs");
const fibJs = require("./fibonacci");
const wasmBuffer = fs.readFileSync("./build/optimized.wasm");

const N = 1000000000;

WebAssembly.instantiate(wasmBuffer).then((wasmModule) => {
  // Exported function live under instance.exports
  // const add = wasmModule.instance.exports.add;
  // const sum = add(5, 6);
  // console.log(sum); // Outputs: 11

  console.log("\n");
  console.log("\n");

  const fibAssembly = wasmModule.instance.exports.fib;

  console.time();
  const fibResult = fibAssembly(N);
  console.timeEnd();
  console.log(fibResult);

  console.log("WebAssembly time");

  console.log("\n");
  console.log("\n");
  console.log("\n");


  console.time();
  const fibJsResult = fibJs(N);
  console.timeEnd();
  console.log(fibJsResult);
  console.log("NodeJs time");
  console.log("\n");
  console.log("\n");
  console.log("\n");

});
