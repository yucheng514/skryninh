// var express = require('express');

// var app = express();

// app.use(express.static('./htdocs'));
// app.listen(3011, res => {
//   console.log('服务器启动成功，访问地址：http://127.0.0.1:3011/文件名，如http://127.0.0.1:3011/01.mp4');
// });



// import path from "node:path"
// import Converter from 'ppt-png'
// import { fileURLToPath } from 'node:url'
// import { dirname } from 'node:path'
// // 获取 __filename 的 ESM 写法
// const __filename = fileURLToPath(import.meta.url)
// // 获取 __dirname 的 ESM 写法
// const __dirname = dirname(fileURLToPath(import.meta.url))
// // var Converter = require('ppt-png')
// // var path = require('path')
// console.log(path.join(__dirname, '/test/1.ppt'))
// const converter = Converter.create({
//     // files:  ['./test/111.pptx'],
//     // output: './output/'
//     files: [path.join(__dirname, './test/1.ppt')],
//     output: path.join(__dirname, './output/')
// });

// const result = converter.convert();
// console.log(result)


'use strict';

const path = require('path');
const fs = require('fs').promises;

const libre = require('libreoffice-convert');
libre.convertAsync = require('util').promisify(libre.convert);

async function main() {
    const ext = '.jpg'
    const inputPath = path.join(__dirname, '../swiper-web/input/1.ppt');
    const outputPath = path.join(__dirname, `../swiper-web/output/example${ext}`);

    // Read file
    const docxBuf = await fs.readFile(inputPath);
    console.log(11,docxBuf)

    // Convert it to pdf format with undefined filter (see Libreoffice docs about filter)
    let pdfBuf = await libre.convertAsync(docxBuf, ext, undefined);
    console.log(22,pdfBuf);
    // Here in done you have pdf file which you can save or transfer in another stream
    await fs.writeFile(outputPath, pdfBuf);
}

main().catch(function (err) {
    console.log(`Error converting file: ${err}`);
});