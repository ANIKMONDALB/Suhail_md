const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "917718606171" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917718606171";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "917718606171,918900107259";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_21_09_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA1NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDI2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgODcsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MyxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0LFxuICAgICAgICAzMCxcbiAgICAgICAgODksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDYwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQyLFxuICAgICAgICA0NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NixcbiAgICAgICAgNTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM3LFxuICAgICAgICAzNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIwLFxuICAgICAgICAzNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIsXG4gICAgICAgIDczLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUwLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOSxcbiAgICAgICAgNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MixcbiAgICAgICAgNzMsXG4gICAgICAgIDQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDczLFxuICAgICAgICA2MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIll6MXRkVy9EdWNIajhIM0FNMDFVUzhsOTYrMFhaeG9ZL2txUGZFSWFzTGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm1fZUZhNTJSU0oyclRVLWxzWTJ3c2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzFhZDg2ZDktYzI4My00ZTQzLWEwNjQtMmFjM2U3ZTYzN2ZmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDE1MCxcbiAgICAgIDU5LFxuICAgICAgMTk1LFxuICAgICAgMjExLFxuICAgICAgNzYsXG4gICAgICAxODgsXG4gICAgICAyNDcsXG4gICAgICAxNDIsXG4gICAgICAxMTUsXG4gICAgICA4LFxuICAgICAgMTMzLFxuICAgICAgMTQ3LFxuICAgICAgMjExLFxuICAgICAgMTc0LFxuICAgICAgMTA0LFxuICAgICAgMyxcbiAgICAgIDIwOCxcbiAgICAgIDYxLFxuICAgICAgNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICAyMDAsXG4gICAgICA0NyxcbiAgICAgIDIxOCxcbiAgICAgIDYsXG4gICAgICAyMzEsXG4gICAgICA0LFxuICAgICAgMTY4LFxuICAgICAgMjI4LFxuICAgICAgMjI4LFxuICAgICAgMTgzLFxuICAgICAgMTQ3LFxuICAgICAgNCxcbiAgICAgIDEzOCxcbiAgICAgIDEwMCxcbiAgICAgIDEwNSxcbiAgICAgIDE0NyxcbiAgICAgIDIxMCxcbiAgICAgIDg4LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJSQjhQNzRTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTgxNDU1ODI5Njk6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLqp4HgvJLCtkHCtiDCtm7CtiDCtiHCtiDCtkvCtiDCtsK2IF4gwqvCuyB+IC7gvJLqp4JcIixcbiAgICBcImxpZFwiOiBcIjI3MjU2MzQ1NjQ5OTkzMzoxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLU0h3YTRFRUphb2w3Y0dHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIktaSy9LOTFqU3FSU1pKb1JOamY4d09CUkEzZ0hqdHV4eGxkR0Z6S1N4bkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic1RienY0bHlpVGxIYjQ3WkpxbFNZdDVmODBlNms0N2taaTRiR2k1SU84a1Y4RzFVUzVOZFhyeXlKT1IyNU82WUxyNHNYTFJkSjRHMDAxdWpmdXNmQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibDhsM25CNmExY3hKSmp0L2dNSVVjaEtweXd3aVNsT3ZaOFdjSUJ6UU9KV3plUVRYajFuaVE4WEZETS9kcDBFUm1GcGNMVmRNRGx3ZXQ1QldWamtRREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4MTQ1NTgyOTY5OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjMzODA3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtzSFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS3NILmpzb24iOiAie1wia2V5RGF0YVwiOlwiVnByTzRVc1oxVmVXL3hmTmlsVk12THo2Z0ZuUTZieTMrVENOSDE1ckI1MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTcxMjc2NzA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI0NzgyNTMyOTI0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "Anik",
  botname : process.env.BOT_NAME  || "☠️𝗗𝗔𝗥𝗞_X-BOT👾😈⚠️",
  ownername:process.env.OWNER_NAME|| "DARK_X_ANIK",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
