//grabs API token for use
const { pathfinderId } = require("./config.json");
const url = `https://api.pathfinder2.fr/v1/pf2`;

//pass message to function to determine if established API command
const getMessage = (message) => {
  let apiRule = [];
  const content = message.content

  if (content == `!!help`) {
    try {
        fetch(url, {
          method: "get",
          headers: {
            Authorization: pathfinderId,
          },
        })
          .then((response) => response.json())
          .then((json) => {
            json.forEach((element) => {
              apiRule.push(element.slice(url.length + 1, element.length));
            });
          })
          .then(() =>
            message.reply(
              "Type !! followed by one of the following: ```" + apiRule.join(
                `, `
              ) + "``` Follow this up with \"?\" and the rule you are searching for in this category (such as **!!action?strike**). If you are unsure, or wish to see a list, type any alphabetical character or chararcters to see the names of rules beginning with those letters (such as **!!action?st**). The search is **not** case sensitive. If you find the item you are looking for within the list, search again using more of the required letters to narrow down the list. Partial searches that find only one item will display that item!"
            )
          );
      } catch (error) {
        console.log(`There was an error: ${error}`)
      }
    }
      else if (content != `!!help` && content.slice(0, 2) == `!!`) {
        const tag = "/" + content.slice(2, content.indexOf("?")).toLowerCase()
        const nameTag = content.slice(content.indexOf("?") + 1, content.length).toLowerCase()

        if (nameTag != "" && (content.indexOf("?") != -1)) {
          try {
          fetch(url + tag, {
            method: "get",
            headers: {
              Authorization: pathfinderId,
            },
          })
            .then((response) => response.json())
            .then((json) => {
              for (let i = 0; i < json.count; i++) {
                if (json.results[i].name.toLowerCase().startsWith(nameTag)){
                apiRule.push(json.results[i])
                }
              }
              if (apiRule.length > 1) {
                const ruleFilter = []
                for (let i = 0; i < apiRule.length; i++) {
                  ruleFilter.push(apiRule[i].name)
                  
                }
                message.reply(`${ruleFilter.join("\n")}`)
                }
                else {message.reply(apiRule[0].name)
              }
        })} catch (error) {
          console.log(`There was an error: ${error}`)
        }
        } else message.reply("You need to enter another character for your search (such as !!action**?a**)")
      }
  }

module.exports = { getMessage };
