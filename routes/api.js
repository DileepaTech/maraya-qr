require('../config');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");
const fs = require('fs');
const axios = require('axios');
const qs = require("qs");
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const {makeid, vStore} = require('../lib/scan/Function');
const {phone} = require('phone');
let router = express.Router()
const { Configuration, OpenAIApi } = require("openai");
let options = {
root:path.join()
}
router.get('/session', async (req, res, next) => {
mongoose.connect(`${global.mongodb_url}`)
 .then(() => console.log('DarkWinzo Qr Connected!'))
const {storedb} = require('../lib/scan/db');
let id = req.query.id
await storedb.find({id:id}).then(async(v)=>{
if(v[0]){
      await res.json({
		status: true,
		creator: `DarkWinzo`,
		result: v
                })
        } else {
      await res.json({
		status: false,
		creator: `DarkWinzo`,
		result: "no data for your session"
	        })
setTimeout(()=>{
return mongoose.connection.close(function(){console.log("test")});
}, 4500);
           }
     })
})
module.exports = router
