const fs = require("fs");
module.exports.config = {
	name: "India",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "B4D9L V41", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Assalam")==0 || event.body.indexOf("ASSALAM")==0 || event.body.indexOf("Assalam Walaikum")==0 || event.body.indexOf("Assalam o Alaikum")==0 || event.body.indexOf("Assalamalaikum")==0 || event.body.indexOf("assalam alaikum")==0 || event.body.indexOf("assalam")==0 || event.body.indexOf("السلام")==0 || event.body.indexOf("السلام علیکم")==0 ||  event.body.indexOf("As Salam alaikum")==0 || event.body.indexOf("salam")==0 || event.body.indexOf("Assalao alaikum")==0 || event.body.indexOf("salam")==0 ) { 
		var msg = {
				body: "❤️ وَعَلَيْكُم السَّلَام وَرَحْمَةُ اَللهِ وَبَرَكاتُهُ  🤝",
				attachment: fs.createReadStream(__dirname + `/noprefix/salam.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💗", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
