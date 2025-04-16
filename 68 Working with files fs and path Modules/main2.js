import fs from "fs/promises";

let a = await fs.readFile("naeem.txt");

let b = await fs.appendFile("naeem.txt", "\n\nkaseem");

console.log(a.toString());
