//grabs API token for use
const { pathfinderId } = require("./config.json")
const url = `https://api.pathfinder2.fr/v1/pf2`;
const maxLength = 2000
const { Action, Ancestry, AncestryFeature, Archetype, Background, Class, ClassFeature, Deity, Equipment, Feat } = require("./getRequest.js")
//const { breakObject } = require("./breakObject.js")

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
              ) + "``` Follow this up with \".\" and the rule you are searching for in this category (such as **!!action.strike**). If you are unsure, or wish to see a list, type any alphabetical character or chararcters to see the names of rules beginning with those letters (such as **!!action.st**). The search is **not** case sensitive. If you find the item you are looking for within the list, search again using more of the required letters to narrow down the list. Partial searches that find only one item will display that item!"
            )
          );
      } catch (error) {
        console.log(`There was an error: ${error}`)
      }
    }
      else if (content != `!!help` && (content.slice(0, content.indexOf(".")).toLowerCase() == "!!action"
      || content.slice(0, content.indexOf(".")).toLowerCase() == "!!ancestry"
      || content.slice(0, content.indexOf(".")).toLowerCase() == "!!ancestryfeature"
      || content.slice(0, content.indexOf(".")).toLowerCase() == "!!archetype"
      || content.slice(0, content.indexOf(".")).toLowerCase() == "!!background"
      || content.slice(0, content.indexOf(".")).toLowerCase() == "!!class"
      || content.slice(0, content.indexOf(".")).toLowerCase() == "!!classfeature"
      || content.slice(0, content.indexOf(".")).toLowerCase() == "!!deity"
      || content.slice(0, content.indexOf(".")).toLowerCase() == "!!equipment"
      || content.slice(0, content.indexOf(".")).toLowerCase() == "!!feat"
      || content.slice(0, content.indexOf(".")).toLowerCase() == "!!spell")) {
        const tag = "/" + content.slice(2, content.indexOf(".")).toLowerCase()
        const nameTag = content.slice(content.indexOf(".") + 1, content.length).toLowerCase()

        if (nameTag != "" && (content.indexOf(".") != -1)) {
          try {
          fetch(url + tag, {
            method: "get",
            headers: {
              Authorization: pathfinderId,
            },
          })
            .then((response) => response.json())
            .then((json) => {
              let ruleFilter = []
              let messageReply = ""
              for (let i = 0; i < json.count; i++) {
                if (json.results[i].name.toLowerCase().startsWith(nameTag)){//currently only searches 'name's and pushes them into apiRule
                apiRule.push(json.results[i]) 
                }
              }
              if (apiRule.length > 1 && apiRule[0].name.toLowerCase() !== nameTag) {
                for (let i = 0; i < apiRule.length; i++) {
                  ruleFilter.push("~" + apiRule[i].name)
                  
                } messageReply = ruleFilter.join("\n")
                }
              else if (apiRule.length == 0){
                messageReply = "Sorry, no results, try another character or characters!"
              }
              else if(content.slice(0, content.indexOf(".")).toLowerCase() == "!!action" && apiRule.length == 1){
                let action = new Action(apiRule[0].name, 
                  apiRule[0].system.actionCategory.value, 
                  apiRule[0].system.actionType.value,
                  apiRule[0].system.actions.value,
                  apiRule[0].system.description.value,
                  apiRule[0].system.requirements.value,
                  apiRule[0].system.rules,
                  apiRule[0].system.source.value,
                  apiRule[0].system.traits.custom,
                  apiRule[0].system.traits.rarity,
                  apiRule[0].system.traits.value,
                  apiRule[0].system.trigger.value)

                  messageReply = action.toString()
              }
              else if (content.slice(0, content.indexOf(".")).toLowerCase() == "!!ancestry" && apiRule.length == 1){
                let ancestry = new Ancestry(apiRule[0].name,
                  apiRule[0].system.description.value,
                  apiRule[0].system.source.value)

                  messageReply = ancestry.toString()
              }
              else if (content.slice(0, content.indexOf(".")).toLowerCase() == "!!ancestryfeature" && apiRule.length == 1){
                let ancestryFeature = new AncestryFeature(apiRule[0].name,
                  apiRule[0].system.actionType.value,
                  apiRule[0].system.actions.value,
                  apiRule[0].system.description.value,
                  apiRule[0].system.featType.value,
                  apiRule[0].system.level.value,
                  apiRule[0].system.prerequisites.value,
                  apiRule[0].system.source.value,
                  apiRule[0].system.traits.custom,
                  apiRule[0].system.traits.rarity,
                  apiRule[0].system.traits.value)

                  messageReply = ancestryFeature.toString()
                }
              else if (content.slice(0, content.indexOf(".")).toLowerCase() == "!!archetype" && apiRule.length == 1){
                let archetype = new Archetype(apiRule[0].content)

                messageReply = archetype.toString()
              }
              else if (content.slice(0, content.indexOf(".")).toLowerCase() == "!!background" && apiRule.length == 1){
                let background = new Background(apiRule[0].name, 
                  apiRule[0].system.description.value,
                  apiRule[0].system.rules,
                  apiRule[0].system.source.value,
                  apiRule[0].system.traits.custom,
                  apiRule[0].system.traits.rarity,
                  apiRule[0].system.traits.value,)

                  messageReply = background.toString()
              }
              else if (content.slice(0, content.indexOf(".")).toLowerCase() == "!!class" && apiRule.length == 1){
                let gameClass = new Class(apiRule[0].name,
                  apiRule[0].system.description.value)

                  messageReply = gameClass.toString()
              }
              else if (content.slice(0, content.indexOf(".")).toLowerCase() == "!!classfeature" && apiRule.length == 1){
                let classFeature = new ClassFeature(apiRule[0].name,
                  apiRule[0].system.actionType.value,
                  apiRule[0].system.actions.value,
                  apiRule[0].system.description.value,
                  apiRule[0].system.featType.value,
                  apiRule[0].system.level.value,
                  apiRule[0].system.prerequisites.value,
                  apiRule[0].system.source.value,
                  apiRule[0].system.traits.custom,
                  apiRule[0].system.traits.rarity,
                  apiRule[0].system.traits.value)

                  messageReply = classFeature.toString()
                }
                else if (content.slice(0, content.indexOf(".")).toLowerCase() == "!!deity" && apiRule.length == 1){
                  let deity = new Deity(apiRule[0].name,
                    apiRule[0].system.alignment.follower,
                    apiRule[0].system.alignment.own,
                    apiRule[0].system.description.value,
                    apiRule[0].system.domains.primary,
                    apiRule[0].system.domains.alternate,
                    apiRule[0].system.source.value,
                    apiRule[0].system.weapons)

                    messageReply = deity.toString()
                }
                else if (content.slice(0, content.indexOf(".")).toLowerCase() == "!!equipment" && apiRule.length == 1){
                  let equipment = new Equipment(apiRule[0].name,
                    apiRule[0].system.description.value,
                    apiRule[0].system.equippedBulk.value,
                    apiRule[0].system.level.value,
                    apiRule[0].system.price.value,
                    apiRule[0].system.quantity,
                    apiRule[0].system.source.value,
                    apiRule[0].system.traits.custom,
                    apiRule[0].system.traits.rarity,
                    apiRule[0].system.traits.value,
                    apiRule[0].system.usage.value,
                    apiRule[0].system.weight.value)
  
                    messageReply = equipment.toString()
                  }
                  else if (content.slice(0, content.indexOf(".")).toLowerCase() == "!!feat" && apiRule.length == 1){
                    let feat = new Feat(apiRule[0].name,
                      apiRule[0].system.actionType.value,
                      apiRule[0].system.actions.value,
                      apiRule[0].system.description.value,
                      apiRule[0].system.featType.value,
                      apiRule[0].system.level.value,
                      apiRule[0].system.prerequisites.value,
                      apiRule[0].system.source.value,
                      apiRule[0].system.traits.custom,
                      apiRule[0].system.traits.rarity,
                      apiRule[0].system.traits.value)
    
                      messageReply = feat.toString()
                    }
              else {
                console.log(apiRule[0])
                //apiRule.flat()
                for (const [key, value] of Object.entries(apiRule[0])){
                  if (value != null && value != "" && key != "_id" && key != "type" && key != "additionalLanguages" && key != "boosts" && key != "flaws" && key != "hp" && key != "languages" && key != "reach" && key != "size" && key != "speed" && key != "vision") {
                    console.log(key + ': ' + value)
                    messageReply += ("***" + key.toUpperCase() + ":*** ")
                  }
                  if (typeof(value) == "object" && value != null){
                    for (const [keyA, valueA] of Object.entries(value)){
                      if (valueA != null && valueA != "" && key != "_id" && key != "type" && key != "additionalLanguages" && key != "boosts" && key != "flaws" && key != "hp" && key != "languages" && key != "reach" && key != "size" && key != "speed" && key != "vision"&& keyA != "_id" && keyA != "type" && keyA != "additionalLanguages" && keyA != "boosts" && keyA != "flaws"&& keyA != "hp" && keyA != "languages" && keyA != "reach" && keyA != "size" && keyA != "speed" && keyA != "vision") {
                        console.log(keyA + ": " + valueA)
                        if (keyA != "value" && typeof(keyA) == "string" ) messageReply += ("   ***" + keyA.toUpperCase() + ":*** ")
                      }
                      if (typeof(valueA) == "object" && valueA != null){
                        for (const [keyB, valueB] of Object.entries(valueA)){
                          if (valueB != null && valueB != "" && key != "_id" && key != "type" && key != "additionalLanguages" && key != "boosts" && key != "flaws" && key != "hp" && key != "languages" && key != "reach" && key != "size" && key != "speed" && key != "vision" && keyA != "_id" && keyA != "type" && keyA != "additionalLanguages" && keyA != "boosts" && keyA != "flaws" && keyA != "hp" && keyA != "languages" && keyA != "reach" && keyA != "size" && keyA != "speed" && keyA != "vision" && keyB != "_id" && keyB != "type" && keyB != "additionalLanguages" && keyB != "boosts" && keyB != "flaws" && keyB != "hp" && keyB != "languages" && keyB != "reach" && keyB != "size" && keyB != "speed" && keyB != "vision") {
                            console.log(keyB + ": " + valueB)
                            if (keyB != "value" && typeof(keyB) == "string") messageReply += ("      ***" + keyB.toUpperCase() + ":***")
                          }
                          if (typeof(valueB) == "object" && valueB !=null){
                            for (const [keyC, valueC] of Object.entries(valueB)){
                              if (valueC != null && valueC != "" && key != "_id" && key != "type" && key != "additionalLanguages" && key != "boosts" && key != "flaws" && key != "hp" && key != "languages" && key != "reach" && key != "size" && key != "speed" && key != "vision" && keyA != "_id" && keyA != "type" && keyA != "additionalLanguages" && keyA != "boosts" && keyA != "flaws" && keyA != "hp" && keyA != "languages" && keyA != "reach" && keyA != "size" && keyA != "speed" && keyA != "vision" && keyB != "_id" && keyB != "type" && keyB != "additionalLanguages" && keyB != "boosts" && keyB != "flaws" && keyB != "hp" && keyB != "languages" && keyB != "reach" && keyB != "size" && keyB != "speed" && keyB != "vision" && keyC != "_id" && keyC != "type"&& keyC != "additionalLanguages" && keyC != "boosts" && keyC != "flaws" && keyC != "hp" && keyC != "languages" && keyC != "reach" && keyC != "size" && keyC != "speed" && keyC != "vision"){
                                console.log(keyC + ": " + valueC)
                                if (keyC != "value" && typeof(keyC) == "string") messageReply += ("         ***" + keyC.toUpperCase() + ":*** ")
                              }
                              if (typeof(valueC) == "object" && valueC != null){
                              for (const [keyD, valueD] of Object.entries(valueC)){
                                if (valueD != null && valueD != "" && key != "_id" && key != "type" && key != "additionalLanguages" && key != "boosts" && key != "flaws" && key != "hp" && key != "languages" && key != "reach" && key != "size" && key != "speed" && key != "vision" && keyA != "_id" && keyA != "type" && keyA != "additionalLanguages" && keyA != "boosts" && keyA != "flaws" && keyA != "hp" && keyA != "languages" && keyA != "reach" && keyA != "size" && keyA != "speed" && keyA != "vision" && keyB != "_id" && keyB != "type" && keyB != "additionalLanguages" && keyB != "boosts" && keyB != "flaws" && keyB != "hp" && keyB != "languages" && keyB != "reach" && keyB != "size" && keyB != "speed" && keyB != "vision" && keyC != "_id" && keyC != "type"&& keyC != "additionalLanguages" && keyC != "boosts" && keyC != "flaws" && keyC != "hp" && keyC != "languages" && keyC != "reach" && keyC != "size" && keyC != "speed" && keyC != "vision" && keyD != "_id" && keyD != "type"&& keyD != "additionalLanguages" && keyD != "boosts" && keyD != "flaws" && keyD != "hp" && keyD != "languages" && keyD != "reach" && keyD != "size" && keyD != "speed" && keyD != "vision"){
                                  console.log(keyD + ": " + valueD)
                                  if (keyD != "value" && typeof(keyD) == "string") messageReply += ("            ***" + keyD.toUpperCase() + ":*** ")
                                  if (valueD != "" && key != "_id" && key != "type" && key != "additionalLanguages" && key != "boosts" && key != "flaws" && key != "hp" && key != "languages" && key != "reach" && key != "size" && key != "speed" && key != "vision" && keyA != "_id" && keyA != "type" && keyA != "additionalLanguages" && keyA != "boosts" && keyA != "flaws" && keyA != "hp" && keyA != "languages" && keyA != "reach" && keyA != "size" && keyA != "speed" && keyA != "vision" && keyB != "_id" && keyB != "type" && keyB != "additionalLanguages" && keyB != "boosts" && keyB != "flaws" && keyB != "hp" && keyB != "languages" && keyB != "reach" && keyB != "size" && keyB != "speed" && keyB != "vision" && keyC != "_id" && keyC != "type"&& keyC != "additionalLanguages" && keyC != "boosts" && keyC != "flaws" && keyC != "hp" && keyC != "languages" && keyC != "reach" && keyC != "size" && keyC != "speed" && keyC != "vision" && keyD != "_id" && keyD != "type"&& keyD != "additionalLanguages" && keyD != "boosts" && keyD != "flaws" && keyD != "hp" && keyD != "languages" && keyD != "reach" && keyD != "size" && keyD != "speed" && keyD != "vision") messageReply += (valueD + "\n")
                                }
                              }
                            }else if (valueC != "" && key != "_id" && key != "type" && key != "additionalLanguages" && key != "boosts" && key != "flaws" && key != "hp" && key != "languages" && key != "reach" && key != "size" && key != "speed" && key != "vision" && keyA != "_id" && keyA != "type" && keyA != "additionalLanguages" && keyA != "boosts" && keyA != "flaws" && keyA != "hp" && keyA != "languages" && keyA != "reach" && keyA != "size" && keyA != "speed" && keyA != "vision" && keyB != "_id" && keyB != "type" && keyB != "additionalLanguages" && keyB != "boosts" && keyB != "flaws" && keyB != "hp" && keyB != "languages" && keyB != "reach" && keyB != "size" && keyB != "speed" && keyB != "vision" && keyC != "_id" && keyC != "type"&& keyC != "additionalLanguages" && keyC != "boosts" && keyC != "flaws" && keyC != "hp" && keyC != "languages" && keyC != "reach" && keyC != "size" && keyC != "speed" && keyC != "vision") messageReply += (valueC + "\n")
                            }
                          }else if (valueB != "" && key != "_id" && key != "_id" && key != "type" && key != "additionalLanguages" && key != "boosts" && key != "flaws" && key != "hp" && key != "languages" && key != "reach" && key != "size" && key != "speed" && key != "vision" && keyA != "_id" && keyA != "type" && keyA != "additionalLanguages" && keyA != "boosts" && keyA != "flaws" && keyA != "hp" && keyA != "languages" && keyA != "reach" && keyA != "size" && keyA != "speed" && keyA != "vision" && keyB != "_id" && keyB != "type" && keyB != "additionalLanguages" && keyB != "boosts" && keyB != "flaws" && keyB != "hp" && keyB != "languages" && keyB != "reach" && keyB != "size" && keyB != "speed" && keyB != "vision") messageReply += (valueB + "\n")
                        }
                      }else if (valueA != "" && key != "_id" && key != "type" && key != "additionalLanguages" && key != "boosts" && key != "flaws" && key != "hp" && key != "languages" && key != "reach" && key != "size" && key != "speed" && key != "vision"&& keyA != "_id" && keyA != "type" && keyA != "additionalLanguages" && keyA != "boosts" && keyA != "flaws"&& keyA != "hp" && keyA != "languages" && keyA != "reach" && keyA != "size" && keyA != "speed" && keyA != "vision") messageReply += (valueA + "\n")
                    }
                  }else if (value != "" && key != "_id" && key != "type" && key != "additionalLanguages" && key != "boosts" && key != "flaws" && key != "hp" && key != "languages" && key != "reach" && key != "size" && key != "speed" && key != "vision") messageReply += (value + "\n")
                }
                messageReply = messageReply.replaceAll("</p>","")
              .replaceAll("<p>", "")
              .replaceAll("<li>", "")
              .replaceAll("</li>", "")
              .replaceAll("<ul>", "")
              .replaceAll("</ul>", "")
              .replaceAll("<em>", "")
              .replaceAll("</em>", "")
              .replaceAll("<hr />", "")
              .replaceAll("<strong>", "***")
              .replaceAll("</strong>", "***")
              .replaceAll("<h2>", "***")
              .replaceAll("<h2 style=\"border-bottom: 1px solid var(--color-underline-header);\">", "***")
              .replaceAll("</h2>", "***")
              .replaceAll("<h3>", "***")
              .replaceAll("</h3>", "***")
              .replaceAll("<span style=\"text-decoration: underline;\">", "")
              .replaceAll("</span>", "")
              }
              
              console.log(apiRule[0])
              //console.log(messageReply)
              let i = messageReply.length
              let n = 0
              let m = 0
              let chop = ""
              while(i > 0){
                if (messageReply.length > maxLength){
                  if(apiRule.length > 1 && messageReply.length - n > maxLength ){
                    chop = messageReply.slice(n, n + maxLength)
                    m = chop.lastIndexOf("~")
                    chop = messageReply.slice(n, n + m)
                    message.reply(chop)
                    i -= m
                    n += m
                  }
                  else if (messageReply.length - n > maxLength){
                    chop = messageReply.slice(n, n + maxLength)
                    if (chop.endsWith(" ") == false || chop.endsWith("\n") == false){
                      m = chop.lastIndexOf("\n")
                      chop = messageReply.slice(n, n + m)
                      n += m
                      i -= m
                    }else {
                      n += maxLength
                      i -= maxLength
                    }
                    message.reply(chop)
                    
                  }else {
                    chop = messageReply.slice(n, messageReply.length)
                    message.reply(chop)
                    i -= (messageReply.length - n)
                  }
                } else if (messageReply.length < maxLength){
                  message.reply(messageReply)
                  i -= messageReply.length
                }
              }
        })
        console.log(apiRule[0])
      } catch (error) {
          console.log(`There was an error: ${error}`)
        }
        } 
      }else if (content.slice(0, 2) == "!!"){
        console.log("negative")
        message.reply("Enter a valid search, such as **!!ancestry.dwarf** or **!!action.a**")}
  }

module.exports = { getMessage };
