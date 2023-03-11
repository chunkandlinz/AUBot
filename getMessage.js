//max character length of message reply for most Discord users.
const maxLength = 2000
const { Action, Ancestry, Archetype, Background, Class, Deity, Equipment, Feat, Spell } = require("./getRequest.js")
const { actionArray, ancestryArray, archetypeArray, backgroundArray, classArray, deityArray, equipmentArray, featArray, spellArray } = require("./pullApi.js")

//pass message to function to determine if established API command
const getMessage = (message) => {
  let apiRule = [];
  let searchTag = ""
  const content = message.content
  let reply = ""

  try{
    if (content.slice(0, 2) == "!!" && content.indexOf(".") != -1){
    searchTag = content.slice(content.indexOf(".")+1, content.length)
  }

  if (content == `!!help`) {
    reply = "Type !! followed by one of the following: ```action, ancestry, archetype, background, class, deity, equipment, feat, spell``` Follow this up with \".\" and the rule you are searching for in this category (such as **!!action.strike**). If you are unsure, or wish to see a list, type any alphabetical character or chararcters to see the names of rules beginning with those letters (such as **!!action.st**). You can also look for rules with specific traits (such as **!!action.reaction**). The search is **not** case sensitive. If you find the item you are looking for within the list, search again using more of the required letters to narrow down the list. Partial searches that find only one item will display that item!"
  }
  else if (content != "!!help" && (content.slice(0, content.indexOf(".")).toLowerCase() == "!!action")){
      for(i = 0; i < actionArray.length; i++){
        if (actionArray[i].name.toLowerCase().startsWith(searchTag) == true && apiRule.includes(actionArray[i]) == false){
          if (actionArray[i].name.toLowerCase() == searchTag){
            apiRule.push(actionArray[i])
          break
          }else apiRule.push(actionArray[i])
        }
        else if (actionArray[i].system.actionCategory.value.toLowerCase() == searchTag && apiRule.includes(actionArray[i]) == false){
          apiRule.push(actionArray[i])
        }
        else if (actionArray[i].system.actionType.value.toLowerCase() == searchTag && apiRule.includes(actionArray[i]) == false){
            apiRule.push(actionArray[i])
        }
      }
      if (apiRule.length > 1) {
        for(i=0; i<apiRule.length; i++){
        reply += "~" + apiRule[i].name +"\n"
      }
    }else if (apiRule.length == 0) {
      reply = "Enter a valid search, such as **!!action.strike** or **!!action.a**. You can search traits, like reaction, action, free, passive, or interaction"
    }
    else if (apiRule.length == 1) {
      let action = new Action(apiRule[0].name, 
        apiRule[0].system.actionCategory.value, 
        apiRule[0].system.actionType.value,
        apiRule[0].system.actions.value,
        apiRule[0].system.description.value,
        apiRule[0].system.requirements.value,
        apiRule[0].system.source.value,
        apiRule[0].system.traits.custom,
        apiRule[0].system.traits.rarity,
        apiRule[0].system.traits.value,
        apiRule[0].system.trigger.value)

        reply = action.toString()
    }
     }
     else if (content != "!!help" && (content.slice(0, content.indexOf(".")).toLowerCase() == "!!ancestry")){
      for(i = 0; i < ancestryArray.length; i++){
        if (ancestryArray[i].name.toLowerCase().startsWith(searchTag) && apiRule.includes(ancestryArray[i]) == false){
          if (ancestryArray[i].name.toLowerCase() == searchTag){
            apiRule.push(ancestryArray[i])
            break
          }
          else apiRule.push(ancestryArray[i])
        }
      }
      if (apiRule.length > 1) {
        for(i=0; i<apiRule.length; i++){
        reply += "~" + apiRule[i].name +"\n"
      }
    }else if (apiRule.length == 0) {
      reply = "Enter a valid search, such as **!!ancestry.dwarf** or **!!ancestry.h**"
    }
    else if (apiRule.length == 1) {
      let ancestry = new Ancestry(apiRule[0].name,
        apiRule[0].system.description.value,
        apiRule[0].system.source.value)

        reply = ancestry.toString()
    }
     }
     else if (content != "!!help" && (content.slice(0, content.indexOf(".")).toLowerCase() == "!!archetype")){
      for(i = 0; i < archetypeArray.length; i++){
        if (archetypeArray[i].name.toLowerCase().startsWith(searchTag) && apiRule.includes(archetypeArray[i]) == false){
          if (archetypeArray[i].name.toLowerCase() == searchTag){
            apiRule.push(archetypeArray[i])
            break
          }
          else apiRule.push(archetypeArray[i])
        }
      }
      if (apiRule.length > 1) {
        for(i=0; i<apiRule.length; i++){
        reply += "~" + apiRule[i].name +"\n"
      }
    }else if (apiRule.length == 0) {
      reply = "Enter a valid search, such as **!!archetype.oracle** or **!!archetype.b**"
    }
    else if (apiRule.length == 1) {
      let archetype = new Archetype(apiRule[0].content)

                reply = archetype.toString()
    }
     }
     else if (content != "!!help" && (content.slice(0, content.indexOf(".")).toLowerCase() == "!!background")){
      for(i = 0; i < backgroundArray.length; i++){
        if (backgroundArray[i].name.toLowerCase().startsWith(searchTag) && apiRule.includes(backgroundArray[i]) == false){
          if (backgroundArray[i].name.toLowerCase() == searchTag){
            apiRule.push(backgroundArray[i])
            break
          }
          else apiRule.push(backgroundArray[i])
        }
      }
      if (apiRule.length > 1) {
        for(i=0; i<apiRule.length; i++){
        reply += "~" + apiRule[i].name +"\n"
      }
    }else if (apiRule.length == 0) {
      reply = "Enter a valid search, such as **!!background.sailor** or **!!background.s**"
    }
    else if (apiRule.length == 1) {
      let background = new Background(apiRule[0].name, 
        apiRule[0].system.description.value,
        apiRule[0].system.rules,
        apiRule[0].system.source.value,
        apiRule[0].system.traits.custom,
        apiRule[0].system.traits.rarity,
        apiRule[0].system.traits.value,)

        reply = background.toString()
    }
     }
     else if (content != "!!help" && (content.slice(0, content.indexOf(".")).toLowerCase() == "!!class")){
      for(i = 0; i < classArray.length; i++){
        if (classArray[i].name.toLowerCase().startsWith(searchTag) && apiRule.includes(classArray[i]) == false){
          if (classArray[i].name.toLowerCase() == searchTag){
            apiRule.push(classArray[i])
            break
          }
          else apiRule.push(classArray[i])
        }
      }
      if (apiRule.length > 1) {
        for(i=0; i<apiRule.length; i++){
        reply += "~" + apiRule[i].name +"\n"
      }
    }else if (apiRule.length == 0) {
      reply = "Enter a valid search, such as **!!class.fighter** or **!!class.i**"
    }
    else if (apiRule.length == 1) {
      let gameClass = new Class(apiRule[0].name,
        apiRule[0].system.description.value)

        reply = gameClass.toString()
    }
     }
     else if (content != "!!help" && (content.slice(0, content.indexOf(".")).toLowerCase() == "!!deity")){
      for(i = 0; i < deityArray.length; i++){
        if (deityArray[i].name.toLowerCase().startsWith(searchTag) && apiRule.includes(deityArray[i]) == false){
          if (deityArray[i].name.toLowerCase() == searchTag){
            apiRule.push(deityArray[i])
            break
          }
          else apiRule.push(deityArray[i])
        }
        else if (deityArray[i].system.weapons.includes(searchTag) && apiRule.includes(deityArray[i]) == false) {
          apiRule.push(deityArray[i])
        }
        else {
          switch (searchTag) {
            case "lawful good":
              if (deityArray[i].system.alignment.own == "LG") apiRule.push(deityArray[i])
              break;
            case "neutral good":
              if (deityArray[i].system.alignment.own == "NG") apiRule.push(deityArray[i])
              break;
            case "chaotic good":
              if (deityArray[i].system.alignment.own == "CG") apiRule.push(deityArray[i])
              break;
              case "lawful neutral":
              if (deityArray[i].system.alignment.own == "LN") apiRule.push(deityArray[i])
              break;
            case "neutral":
              if (deityArray[i].system.alignment.own == "N") apiRule.push(deityArray[i])
              break;
            case "chaotic neutral":
              if (deityArray[i].system.alignment.own == "CN") apiRule.push(deityArray[i])
              break;
              case "lawful evil":
              if (deityArray[i].system.alignment.own == "LE") apiRule.push(deityArray[i])
              break;
            case "neutral evil":
              if (deityArray[i].system.alignment.own == "NE") apiRule.push(deityArray[i])
              break;
            case "chaotic evil":
              if (deityArray[i].system.alignment.own == "CE") apiRule.push(deityArray[i])
              break;
            default:
              break;
          }
        }
      }
      if (apiRule.length > 1) {
        for(i=0; i<apiRule.length; i++){
        reply += "~" + apiRule[i].name +"\n"
      }
    }else if (apiRule.length == 0) {
      reply = "Enter a valid search, such as **!!deity.abador** or **!!deity.a**. You can also search for deity perfered weapons, such as **dagger, crossbow,** or **kurki** or by their alignment using **lawful good, neutral good, chaotic good, lawful neutral, neutral, chaotic neutral, lawful evil, neutral evil,** or **chaotic evil**."
    }
    else if (apiRule.length == 1) {
      let deity = new Deity(apiRule[0].name,
        apiRule[0].system.alignment.follower,
        apiRule[0].system.alignment.own,
        apiRule[0].system.description.value,
        apiRule[0].system.domains.primary,
        apiRule[0].system.domains.alternate,
        apiRule[0].system.source.value,
        apiRule[0].system.weapons)

        reply = deity.toString()
    }
     }
     else if (content != "!!help" && (content.slice(0, content.indexOf(".")).toLowerCase() == "!!equipment")){
      for(i = 0; i < equipmentArray.length; i++){
        if (equipmentArray[i].name.toLowerCase().startsWith(searchTag) && apiRule.includes(equipmentArray[i]) == false){
          if (equipmentArray[i].name.toLowerCase() == searchTag){
            apiRule.push(equipmentArray[i])
            break
          }
          else apiRule.push(equipmentArray[i])
        }
      }
      if (apiRule.length > 1) {
        for(i=0; i<apiRule.length; i++){
        reply += "~" + apiRule[i].name +"\n"
      }
    }else if (apiRule.length == 0) {
      reply = "Enter a valid search, such as **!!equipment.dagger** or **!!equipment.st**."
    }
    else if (apiRule.length == 1) {
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

        reply = equipment.toString()
    }
     }
     else if (content != "!!help" && (content.slice(0, content.indexOf(".")).toLowerCase() == "!!feat")){
      for(i = 0; i < featArray.length; i++){
        if (featArray[i].name.toLowerCase().startsWith(searchTag) && apiRule.includes(featArray[i]) == false){
          if (featArray[i].name.toLowerCase() == searchTag){
            apiRule.push(featArray[i])
            break
          }
          else apiRule.push(featArray[i])
        }
        else if (featArray[i].system.featType.value.toLowerCase() == searchTag && apiRule.includes(featArray[i]) == false) {
            apiRule.push(featArray[i])
        }
        
        else {
          for (let n = 0; n < featArray[i].system.traits.value.length; n++) {
            if (featArray[i].system.traits.value[n] == searchTag && apiRule.includes(featArray[i]) == false) {
              apiRule.push(featArray[i])
            }
          }
        }
      }
      if (apiRule.length > 1) {
        for(i = 0; i<apiRule.length; i++){
        reply += "~" + apiRule[i].name +"\n"
      }
    }else if (apiRule.length == 0) {
      reply = "Enter a valid search, such as **!!feat.oracular clarity** or **!!feat.a**. You can also search for feat type (**classfeature, archetype, ancestryfeature, skill**) or by trait (like **skill, oracle, fighter**)"
    }
    else if (apiRule.length == 1) {
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

        reply = feat.toString()
    }
     }
     else if (content != "!!help" && (content.slice(0, content.indexOf(".")).toLowerCase() == "!!spell")){
      for(i = 0; i < spellArray.length; i++){
        if (spellArray[i].name.toLowerCase().startsWith(searchTag) && apiRule.includes(spellArray[i]) == false){
          if (spellArray[i].name.toLowerCase() == searchTag){
            apiRule.push(spellArray[i])
            break
          }
          else apiRule.push(spellArray[i])
        }
        else if (spellArray[i].system.school.value.toLowerCase() == searchTag && apiRule.includes(spellArray[i]) == false) {
          apiRule.push(spellArray[i])
        }
        else {
          for (let n = 0; n < spellArray.length; n++){
            if(spellArray[i].system.traditions.value[n] == searchTag && apiRule.includes(spellArray[i]) == false){
              apiRule.push(spellArray[i])
            }
          }
        }
      }
      if (apiRule.length > 1) {
        for(i=0; i<apiRule.length; i++){
        reply += "~" + apiRule[i].system.level.value + " - " + apiRule[i].name + "\n"
      }
    }else if (apiRule.length == 0) {
      reply = "Enter a valid search, such as **!!spell.chill touch** or **!!spell.r**. You can also search by school (**abjuration, conjuration, divination, enchantment, evocation, illusion, necromancy, transmutation**) or by tradition (**arcane, divine, occult, primal**). Lists of spells will begin with their level followed by their name."
    }
    else if (apiRule.length == 1) {
      let spell = new Spell(apiRule[0].name,
        apiRule[0].system.components.material,
        apiRule[0].system.components.somatic,
        apiRule[0].system.components.verbal,
        apiRule[0].system.description.value,
        apiRule[0].system.duration.value,
        apiRule[0].system.level.value,
        apiRule[0].system.materials,
        apiRule[0].system.range.value,
        apiRule[0].system.save,
        apiRule[0].system.school.value,
        apiRule[0].system.source.value,
        apiRule[0].system.sustained.value,
        apiRule[0].system.target.value,
        apiRule[0].system.time.value,
        apiRule[0].system.traditions.value,
        apiRule[0].system.traits.rarity,
        apiRule[0].system.traits.value)

        reply = spell.toString()
    }
     }
     //console.log(apiRule[0])  //used and changed as necessary to view into Objects. Commented out after testing
     let count = reply.length
              let n = 0
              let m = 0
              let chop = ""
              while(count > 0){
                if (reply.length > maxLength){
                  if(apiRule.length > 1 && reply.length - n > maxLength ){
                    chop = reply.slice(n, n + maxLength)
                    m = chop.lastIndexOf("~")
                    chop = reply.slice(n, n + m)
                    message.reply(chop)
                    count -= m
                    n += m
                  }
                  else if (reply.length - n > maxLength){
                    chop = reply.slice(n, n + maxLength)
                    if (chop.endsWith(" ") == false || chop.endsWith("\n") == false){
                      m = chop.lastIndexOf("\n")
                      chop = reply.slice(n, n + m)
                      n += m
                      count -= m
                    }else {
                      n += maxLength
                      count -= maxLength
                    }
                    message.reply(chop)
                    
                  }else {
                    chop = reply.slice(n, reply.length)
                    message.reply(chop)
                    count -= (reply.length - n)
                  }
                } else if (reply.length < maxLength){
                  message.reply(reply)
                  count -= reply.length
                }
    }
  }
    catch (error){
      console.log("There was an error: " + error)
    }
  }

module.exports = { getMessage };
