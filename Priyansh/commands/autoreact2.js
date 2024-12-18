module.exports.config = {
	name: "eve",
  version: "7.3.1",
	hasPermssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("Good Morning")==0 || event.body.indexOf("good morning")==0 || event.body.indexOf("Good morning all")==0 || event.body.indexOf("Good Morning Everyone")==0 || event.body.indexOf("gm")==0 || event.body.indexOf("GM")==0 || event.body.indexOf("GOOD MORNING")==0 || event.body.indexOf("Morning")==0 || event.body.indexOf("MORNING")==0 || event.body.indexOf("GM ALL")==0 ) { 
		var msg = {
				body: `«࿙❰༗ོ⍣𓆩${name}𓆪ོ༗❱࿚»\n\n━━━━❖❖💠❖❖━━━━\n𑁍𝆊𝐕𝐞𝐫𝐲 𝆊𝐆𝐨𝐨𝐝 𝆊𝐌𝐨𝐫𝐧𝐢𝐧𝐠 𝆊𝐃𝐞𝐚𝐫𑁍\n━━━━❖❖💠❖❖━━━━`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌄", event.messageID, (err) => {}, true)
    };
	if (event.body.indexOf("Love You")==0 || event.body.indexOf("LOVE YOU")==0 || event.body.indexOf("Bot I love you")==0 || event.body.indexOf("BOT I LOVE YOU")==0 || event.body.indexOf("i love you")==0 || event.body.indexOf("I love you bot")==0 || event.body.indexOf("luv")==0 || event.body.indexOf("Bot love you")==0 || event.body.indexOf("I love you bot")==0 || event.body.indexOf("Lub u bot")==0 || event.body.indexOf("Luv bot")==0 || event.body.indexOf("Bot Luv you")==0 || event.body.indexOf("Love")==0 || event.body.indexOf("LOVE")==0 || event.body.indexOf("I Love You Bot")==0 || event.body.indexOf("I Love You")==0 || event.body.indexOf("lov You")==0 || event.body.indexOf("Bot lov u")==0 || event.body.indexOf("i love bot")==0 ) { 
		var msg = {
				body: `𒁍 𓆩๛⃝ ‎‎‎‎‎‎‎‎${name}‣᭄𓆪 𑁍 ̽•››̈̈️𒊯\n═══════════════\n𝗜 𝗟𝗼𝘃𝗲 𝗬𝗼𝘂 𝗦𝗼 𝗠𝘂𝗰𝗵 𝗠𝘆 𝗛𝗲𝗮𝗿𝘁𝗯𝗲𝗮𝘁 💓💋`
      }
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
