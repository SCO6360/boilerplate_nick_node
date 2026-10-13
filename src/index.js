import { greet } from "./greet.js";

const name = process.env.APP_NAME ?? process.argv[2];

console.log(greet(name));
