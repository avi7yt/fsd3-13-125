import { write } from "fs";
import { writeFile } from "fs/promises";

// await writeFile('stud.txt','Name: Vimal Sinha')
console.log('File writing....');
await writeFile('order.txt', 'shoes, slipper')


