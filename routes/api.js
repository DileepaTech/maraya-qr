require('../config');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const qs = require("qs");
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const {makeid, vStore} = require('../lib/scan/Function');
const {phone} = require('phone');
let router = express.Router()
let options = {
root:path.join()
}
const _0x772af9=_0x3360;function _0x3360(_0x32f703,_0x22e91e){const _0x29254a=_0x2925();return _0x3360=function(_0x336097,_0x1aefb0){_0x336097=_0x336097-0x188;let _0x40ea07=_0x29254a[_0x336097];return _0x40ea07;},_0x3360(_0x32f703,_0x22e91e);}function _0x2925(){const _0x52b441=['json','2919uSEetI','11oollbd','log','../lib/scan/db','5926170REgnCY','then','query','8JQRnxh','70WKZbor','387312wDYWOk','get','close','3553245hlHxVw','2146998qUntnN','mongodb_url','138076UoUfwv','672608mQEOBZ','60AiJLJu','/session','connect'];_0x2925=function(){return _0x52b441;};return _0x2925();}(function(_0x57e824,_0x17cefd){const _0x24478c=_0x3360,_0x360076=_0x57e824();while(!![]){try{const _0xa63a2f=parseInt(_0x24478c(0x196))/0x1+parseInt(_0x24478c(0x188))/0x2+-parseInt(_0x24478c(0x19a))/0x3+parseInt(_0x24478c(0x19c))/0x4*(-parseInt(_0x24478c(0x195))/0x5)+-parseInt(_0x24478c(0x189))/0x6*(-parseInt(_0x24478c(0x18d))/0x7)+parseInt(_0x24478c(0x194))/0x8*(parseInt(_0x24478c(0x199))/0x9)+parseInt(_0x24478c(0x191))/0xa*(parseInt(_0x24478c(0x18e))/0xb);if(_0xa63a2f===_0x17cefd)break;else _0x360076['push'](_0x360076['shift']());}catch(_0x3a6b11){_0x360076['push'](_0x360076['shift']());}}}(_0x2925,0x7e0b4),router[_0x772af9(0x197)](_0x772af9(0x18a),async(_0x1eb228,_0xf1535,_0x326ebd)=>{const _0x1c0e6c=_0x772af9;mongoose[_0x1c0e6c(0x18b)](''+global[_0x1c0e6c(0x19b)])[_0x1c0e6c(0x192)](()=>console[_0x1c0e6c(0x18f)]('DarkWinzo\x20Qr\x20Connected!'));const {storedb:_0x298048}=require(_0x1c0e6c(0x190));let _0x1bfdc4=_0x1eb228[_0x1c0e6c(0x193)]['id'];await _0x298048['find']({'id':_0x1bfdc4})[_0x1c0e6c(0x192)](async _0x52bbbf=>{const _0x3ac920=_0x1c0e6c;_0x52bbbf[0x0]?await _0xf1535[_0x3ac920(0x18c)]({'status':!![],'creator':'DarkWinzo','result':_0x52bbbf}):(await _0xf1535[_0x3ac920(0x18c)]({'status':![],'creator':'DarkWinzo','result':'no\x20data\x20for\x20your\x20session'}),setTimeout(()=>{const _0x3fde30=_0x3ac920;return mongoose['connection'][_0x3fde30(0x198)](function(){const _0x4bae81=_0x3fde30;console[_0x4bae81(0x18f)]('test');});},0x1194));});}));
module.exports = router
