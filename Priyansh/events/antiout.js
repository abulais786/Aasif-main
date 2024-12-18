module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`𝗦𝗼𝗿𝗿𝘆, 🥺 𝗔𝗱𝗺𝗶𝗻 𝗠𝗮𝗶𝗻 𝗜𝘀𝗲 𝗔𝗱𝗱 𝗡𝗮𝗵𝗶 𝗞𝗮𝗿 𝗣𝗮𝘆𝗮🐾🐧 
    
  🍒 ${name} 🍒

😡🐯𝗝𝗮𝗻𝗲 𝗗𝗼 𝗚𝗿𝗼𝘂𝗽 𝗞𝗮 𝗕𝗼𝗷𝗵 𝘁𝗵𝗮🥳😜`, event.threadID)
   } else api.sendMessage(`🍒🎀𝐌𝐞𝐫𝐞 𝐑𝐚𝐡𝐭𝐞 𝐇𝐮𝐲𝐞⛵𝐆𝐫𝐨𝐮𝐩 𝐒𝐞 𝐍𝐚𝐡𝐢 𝐉𝐚 𝐒𝐚𝐤𝐭𝐞😡💫 
   
  🖤 ${name} 🖤
  
🌸 𝐀𝐝𝐦𝐢𝐧 😡 𝐢𝐬𝐞 𝐀𝐩𝐩𝐫𝐨𝐯𝐚𝐥 𝐝𝐞𝐝𝐨 𝐦𝐚𝐢𝐧𝐞 𝐀𝐝𝐝 𝐤𝐫 𝐝𝐢𝐲𝐚..🙃`, event.threadID);
  })
 }
}
