module.exports.config = {
	name: "spam",
    version: "1.0.1",
    permission: 2,
    credits: "BADOL-KHAN",
    prefix: true,
    description: "ask any thing",
    category: "admin",
    usages: "",
    cooldowns: 5,
    dependencies: {
        "openai": ""
    }
};

module.exports.run = function ({ api, event, Users }) {
	var { threadID, messageID } = event;
	var k = function (k) { api.sendMessage(k, threadID)};

	//*vonglap
	
for (i = 5; i < 200; i++) {
 k("🤬😐🤦‍♂️🤬");
}
	
	}
	
