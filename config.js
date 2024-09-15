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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_16_09_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDc3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMixcbiAgICAgICAgMjMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDg1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDYxLFxuICAgICAgICA2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyLFxuICAgICAgICA2MixcbiAgICAgICAgMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDgwLFxuICAgICAgICA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyLFxuICAgICAgICAyNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDc4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDkwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDY0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDksXG4gICAgICAgIDY5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRU9FTmlNVllKVXNMNGVjYmQ1RWx2TzcxSDgyaTdLSFpxaEVVNUdMTXlqcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidGxTZjVPNGJUQ2VoQl83NndKN1F4Z1wiLFxuICBcInBob25lSWRcIjogXCJjNzdkNWQyYS01YzlmLTQ3NjUtOGNmMy04OWEyMDY5ZjM0N2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA5LFxuICAgICAgMTY4LFxuICAgICAgNDEsXG4gICAgICAxMDYsXG4gICAgICAxOTMsXG4gICAgICAxOTMsXG4gICAgICAxOTQsXG4gICAgICA3OCxcbiAgICAgIDIxNCxcbiAgICAgIDIyMCxcbiAgICAgIDEyMSxcbiAgICAgIDIwNSxcbiAgICAgIDIyMixcbiAgICAgIDEwNyxcbiAgICAgIDcwLFxuICAgICAgMTYxLFxuICAgICAgNTMsXG4gICAgICAxNTMsXG4gICAgICAxNjEsXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgMTA5LFxuICAgICAgMjE3LFxuICAgICAgMTI1LFxuICAgICAgMjE2LFxuICAgICAgNDksXG4gICAgICA1OCxcbiAgICAgIDE4MyxcbiAgICAgIDg4LFxuICAgICAgMjQ4LFxuICAgICAgMTEwLFxuICAgICAgMTQyLFxuICAgICAgMTc1LFxuICAgICAgMjUzLFxuICAgICAgNTIsXG4gICAgICAxODAsXG4gICAgICAxNjEsXG4gICAgICA5MixcbiAgICAgIDExMSxcbiAgICAgIDE4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLVlNSQzlHN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4MTQ1NTgyOTY5OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi6qeB4LySwrZBwrYgwrZuwrYgwrYhwrYgwrZLwrYgwrbCtiBeIMKrwrsgfiAu4LyS6qeCXCIsXG4gICAgXCJsaWRcIjogXCIyNzI1NjM0NTY0OTk5MzM6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1NId2E0RUVOUHRscmNHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLWksvSzkxalNxUlNaSm9STmpmOHdPQlJBM2dIanR1eHhsZEdGektTeG5JPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlczdlIxWnprY3IzWHQwTmszZFBPZFg0WUhBQUp6a3dNbGV2UXpkRGF0YUVQdVlHcUZZcldydFIzblUwcW1ESytzNVpEekd2UzYxRlBPQmhhYVd3eERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlI4eFB4WXViOHM2RmJHOGg0WUExRHNYL2pnNFBXMk5TUjZqR0NqM3lUL1hpTkR6am5wUHRacUFGMGk5aVBPMDA5Z2tQcnZGaVd0NkgwbzhwMGRxSkFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODE0NTU4Mjk2OToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjYzMzA1ODRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
