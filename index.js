// Grabs bot token from config.json file
const { token } = require("./config.json")
//Client and GatewayIntentBits used for establishing connection
//with Discord and reading and replying to messages
const { Client, GatewayIntentBits } = require("discord.js")
//For cleaner code, established getMessage fuction in separate file
const { getMessage } = require("./getMessage.js")
const { pullApi } = require("./pullApi.js")

//establish the client to grab intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
	  GatewayIntentBits.GuildMembers,
  ]
})

//used to determine that bot is logged on to server
client.once(`ready`, c =>{
  pullApi()
  console.log(`Ready! Logged in as ${c.user.tag}`)
  client.user.setActivity(`"type !!help to get started."`)
})

//on messageCreate event, grabs message for use
try {
  client.on('messageCreate', (message) => {
    //ignores messages from self
    if(message.author.tag == client.user.tag) return
  
    //passes message to getMessage function
    getMessage(message)
  })
} catch (error) {
  console.log(`There was an error: ${error}`)
}

//logs in to server.
client.login(token)
