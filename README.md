Learning Javascript and how to use APIs. This Discord Bot uses the PF2e API from https://api.pathfinder2.fr/ to pull rules and information for Discord users.

To use this in your own Discord Server you will need to create a config.json file with the following:
    "token": "your bot's token id",
    "pathfinderId": "your api authentication from the link above"

index.js establishes connection with Discord and assets required to read and reply to messages.

pullApi.js establishes connection to api and pulls data from API for use in the bot. Pulling and storing prevents crashes due to 
overstimulation of multiple calls.

getMessage.js reads messages and replies to messages that meet message content requirements.

getRequests.js creates more manageable objects to create better looking replies in Discord.

