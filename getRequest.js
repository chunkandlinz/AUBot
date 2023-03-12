//Objects collect and hold meaningful information to be used for replying to request.

/*Notes for later: Prequisites and Rules in ClassFeature, AncestryFeature, Feat, and others
 return arrays of objects, like Prices in Equipment.
Access those in a similar fashion in order to post them to the message. */

class Action{
    constructor(name = "" /*.name, string */, 
    actionCategory = "" /*.system.actionCategory.value, string */, 
    actionType = "" /*.system.actionType.value, string */, 
    actions = "" /*.system.actions.value, number/string */, 
    description = "" /*.system.description.value, string */,
    requirements = "" /*.system.requirements.value, string */,
    source = "" /*.system.source.value, string */,
    customTraits = "" /*.system.traits.custom, string*/,
    rarityTraits = "" /*.system.traits.rarity, string */,
    traits = [] /*.system.traits.value, array */,
    trigger = "" /*.system.trigger.value, string */
    ){
        this.name = name
        this.actionCategory = actionCategory
        this.actionType = actionType
        this.actions = actions
        this.description = description
        this.requirements = requirements
        this.source = source
        this.customTraits = customTraits
        this.rarityTraits = rarityTraits
        this.traits = traits
        this.trigger = trigger
    }
    setName(name){
        this.name = name
    }
    getName(){
        return this.name
    }
    setActionCategory(actionCategory){
        this.actionCategory = actionCategory
    }
    getActionCategory(){
        return this.actionCategory
    }
    setActionType(actionType){
        this.actionType = actionType
    }
    getActionType(){
        return this.actionType
    }
    setActions(actions){
        this.actions = actions
    }
    getActions(){
        return this.actions
    }
    setDescription(description){
        this.description = description
    }
    getDescription(){
        this.description = this.description.replaceAll("<p>","")
        .replaceAll("</p>", "")
        .replaceAll("<li>", "")
        .replaceAll("</li>", "")
        .replaceAll("<ul>", "")
        .replaceAll("</ul>", "")
        .replaceAll("<em>", "")
        .replaceAll("</em>", "")
        .replaceAll("<hr />", "")
        .replaceAll("</table>", " ")
        .replaceAll("<thread>", " ")
        .replaceAll("</thread>", " ")
        .replaceAll("<tr>\n", " ")
        .replaceAll("</tr>", " ")
        .replaceAll("<td>", " ")
        .replaceAll("</td>\n", " ")
        .replaceAll("<th>", " ")
        .replaceAll("</th>\n", " ")
        .replaceAll("<thead>\n", "***")
        .replaceAll("</thead>\n", "***")
        .replaceAll("<tbody>\n", " ")
        .replaceAll("</tbody>\n", " ")
        .replaceAll("<h1>", "***")
        .replaceAll("</h1>", "***")
        .replaceAll("<strong>", "***")
        .replaceAll("</strong>", "***")
        .replaceAll("<h2>", "***")
        .replaceAll("</h2>", "***")
        .replaceAll("<h3>", "")
        .replaceAll("</h3>", "")
        .replaceAll("</span>", "")
        
        while (this.description.indexOf("<h2") != -1){
            let n = this.description.indexOf("<h2")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "***")
        }
        while (this.description.indexOf("<span") != -1){
            let n = this.description.indexOf("<span")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "")
        }
        while (this.description.indexOf("<table") != -1){
            let n = this.description.indexOf("<table")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">\n", n)+1), "")
        }
        while (this.description.indexOf("<td") != -1){
            let n = this.description.indexOf("<td")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), " ")
        }
        while (this.description.indexOf("<h1") != -1){
            let n = this.description.indexOf("<h1")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "***")
        }
        while (this.description.indexOf("<h3") != -1){
            let n = this.description.indexOf("<h3")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), " ")
        }
        return this.description
    }
    setRequirements(requirements){
        this.requirements = requirements
    }
    getRequirements(){
        return this.requirements
    }
    setRules(rules){
        this.rules = rules
    }
    getRules(){
        return this.rules
    }
    setSource(source){
        this.source = source
    }
    getSource(){
        return this.source
    }
    setCustomTraits(customTraits){
        this.customTraits = customTraits
    }
    getCustomTraits(){
        return this.customTraits
    }
    setRarityTraits(rarityTraits){
        this.rarityTraits = rarityTraits
    }
    getRarityTraits(){
        return this.rarityTraits
    }
    setTraits(traits){
        this.traits = traits
    }
    getTraits(){
        return this.traits
    }
    setTrigger(trigger){
        this.trigger = trigger
    }
    getTrigger(){
        return this.trigger
    }
    toString(){
        let message = ""
        if (this.getName() != "") message += "***Name:*** " + this.getName() + "\n"
        if (this.getActionCategory() != "") message += "***Action Category:*** " + this.getActionCategory() + "\n"
        if (this.getActionType() != "") message += "***Action Type:*** " + this.getActionType() + "\n"
        if (this.getActions() != "") message += "***Actions:*** " + this.getActions() +"\n"
        if (this.getDescription() != "") message += "***Description:*** " + this.getDescription() + "\n"
        if (this.getRequirements() != "") message += "***Requirments:*** " + this.getRequirements() + "\n"
        if (this.getSource() != "") message += "***Source:*** " + this.getSource() + "\n"
        if (this.getCustomTraits() != "") message += "***Custom Traits:*** " + this.getCustomTraits() + "\n"
        if (this.getRarityTraits() != "") message += "***Rarity:*** " + this.getRarityTraits() + "\n"
        if (this.getTraits().join() != "") message += "***Traits:*** " + this.getTraits().join(", ") + "\n"
        if (this.getTrigger() != "") message += "***Trigger:*** " + this.getTrigger() + "\n"

        message = message.slice(0, message.length - 1)

        return message
    }
}
class Ancestry{
    constructor(name = "" /*.name, string */, 
    description = "" /*.system.description.value, string */, 
    source = "" /*.system.source.value, string */){
        this.name = name
        this.description = description
        this.source = source
    }
    setName(name){
        this.name = name
    }
    getName(){
        return this.name
    }
    setDescription(description){
        this.description = description
    }
    getDescription(){
        this.description = this.description.replaceAll("<p>","")
        .replaceAll("</p>", "")
        .replaceAll("<li>", "")
        .replaceAll("</li>", "")
        .replaceAll("<ul>", "")
        .replaceAll("</ul>", "")
        .replaceAll("<em>", "")
        .replaceAll("</em>", "")
        .replaceAll("<hr />", "")
        .replaceAll("</table>", " ")
        .replaceAll("<thread>", " ")
        .replaceAll("</thread>", " ")
        .replaceAll("<tr>\n", " ")
        .replaceAll("</tr>", " ")
        .replaceAll("<td>", " ")
        .replaceAll("</td>\n", " ")
        .replaceAll("<th>", " ")
        .replaceAll("</th>\n", " ")
        .replaceAll("<thead>\n", "***")
        .replaceAll("</thead>\n", "***")
        .replaceAll("<tbody>\n", " ")
        .replaceAll("</tbody>\n", " ")
        .replaceAll("<h1>", "***")
        .replaceAll("</h1>", "***")
        .replaceAll("<strong>", "***")
        .replaceAll("</strong>", "***")
        .replaceAll("<h2>", "***")
        .replaceAll("</h2>", "***")
        .replaceAll("<h3>", "")
        .replaceAll("</h3>", "")
        .replaceAll("</span>", "")
        
        while (this.description.indexOf("<h2") != -1){
            let n = this.description.indexOf("<h2")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "***")
        }
        while (this.description.indexOf("<span") != -1){
            let n = this.description.indexOf("<span")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "")
        }
        while (this.description.indexOf("<table") != -1){
            let n = this.description.indexOf("<table")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">\n", n)+1), "")
        }
        while (this.description.indexOf("<td") != -1){
            let n = this.description.indexOf("<td")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), " ")
        }
        while (this.description.indexOf("<h1") != -1){
            let n = this.description.indexOf("<h1")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "***")
        }
        while (this.description.indexOf("<h3") != -1){
            let n = this.description.indexOf("<h3")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), " ")
        }
        return this.description
    }
    setSource(source){
        this.source = source
    }
    getSource(){
        return this.source
    }
    toString(){
        let message = ""
        if (this.getName != "") message += "***Name:*** " + this.getName() + "\n"
        if (this.getDescription != "") message += "***Description:*** " + this.getDescription() + "\n"
        if (this.getSource != "") message += "***Source:*** " + this.getSource()

        return message
    }
}
class Archetype{
    constructor(content = "" /*.content, string */){
        this.content = content
    }
    setContent(content){
        this.content = content
    }
    getContent(){
        this.content = this.content.replaceAll("<p>","")
        .replaceAll("</p>", "")
        .replaceAll("<li>", "")
        .replaceAll("</li>", "")
        .replaceAll("<ul>", "")
        .replaceAll("</ul>", "")
        .replaceAll("<em>", "")
        .replaceAll("</em>", "")
        .replaceAll("<hr />", "")
        .replaceAll("</table>", " ")
        .replaceAll("<thread>", " ")
        .replaceAll("</thread>", " ")
        .replaceAll("<tr>\n", " ")
        .replaceAll("</tr>", " ")
        .replaceAll("<td>", " ")
        .replaceAll("</td>\n", " ")
        .replaceAll("<th>", " ")
        .replaceAll("</th>\n", " ")
        .replaceAll("<thead>\n", "***")
        .replaceAll("</thead>\n", "***")
        .replaceAll("<tbody>\n", " ")
        .replaceAll("</tbody>\n", " ")
        .replaceAll("<h1>", "***")
        .replaceAll("</h1>", "***")
        .replaceAll("<strong>", "***")
        .replaceAll("</strong>", "***")
        .replaceAll("<h2>", "***")
        .replaceAll("</h2>", "***")
        .replaceAll("<h3>", "")
        .replaceAll("</h3>", "")
        .replaceAll("</span>", "")
        
        while (this.content.indexOf("<h2") != -1){
            let n = this.content.indexOf("<h2")
            this.content = this.content.replaceAll(this.content.slice(n,this.content.indexOf(">", n)+1), "***")
        }
        while (this.content.indexOf("<span") != -1){
            let n = this.content.indexOf("<span")
            this.content = this.content.replaceAll(this.content.slice(n,this.content.indexOf(">", n)+1), "")
        }
        while (this.content.indexOf("<table") != -1){
            let n = this.content.indexOf("<table")
            this.content = this.content.replaceAll(this.content.slice(n,this.content.indexOf(">\n", n)+1), "")
        }
        while (this.content.indexOf("<td") != -1){
            let n = this.content.indexOf("<td")
            this.content = this.content.replaceAll(this.content.slice(n,this.content.indexOf(">", n)+1), " ")
        }
        while (this.content.indexOf("<h1") != -1){
            let n = this.content.indexOf("<h1")
            this.content = this.content.replaceAll(this.content.slice(n,this.content.indexOf(">", n)+1), "***")
        }
        while (this.content.indexOf("<h3") != -1){
            let n = this.content.indexOf("<h3")
            this.content = this.content.replaceAll(this.content.slice(n,this.content.indexOf(">", n)+1), " ")
        }
        return this.content
    }
    toString(){
        let message = ""
        message += this.getContent()
        return message
    }
}
class Background{
    constructor(name = "" /*.name, string */,
    description = "" /*.system.description.value, string */,
    rules /*.system.rules, object */,
    source = "" /*.system.source.value, string */,
    customTraits = "" /*.system.traits.custom, string*/,
    rarityTraits = "" /*.system.traits.rarity, string */,
    traits = [] /*.system.traits.value, array */,
    ){
        this.name = name
        this.description = description
        this.rules = rules
        this.source = source
        this.customTraits = customTraits
        this.rarityTraits = rarityTraits
        this.traits = traits
    }
    setName(name){
        this.name = name
    }
    getName(){
        return this.name
    }
    setDescription(description){
        this.description = description
    }
    getDescription(){
        this.description = this.description.replaceAll("<p>","")
        .replaceAll("</p>", "")
        .replaceAll("<li>", "")
        .replaceAll("</li>", "")
        .replaceAll("<ul>", "")
        .replaceAll("</ul>", "")
        .replaceAll("<em>", "")
        .replaceAll("</em>", "")
        .replaceAll("<hr />", "")
        .replaceAll("</table>", " ")
        .replaceAll("<thread>", " ")
        .replaceAll("</thread>", " ")
        .replaceAll("<tr>\n", " ")
        .replaceAll("</tr>", " ")
        .replaceAll("<td>", " ")
        .replaceAll("</td>\n", " ")
        .replaceAll("<th>", " ")
        .replaceAll("</th>\n", " ")
        .replaceAll("<thead>\n", "***")
        .replaceAll("</thead>\n", "***")
        .replaceAll("<tbody>\n", " ")
        .replaceAll("</tbody>\n", " ")
        .replaceAll("<h1>", "***")
        .replaceAll("</h1>", "***")
        .replaceAll("<strong>", "***")
        .replaceAll("</strong>", "***")
        .replaceAll("<h2>", "***")
        .replaceAll("</h2>", "***")
        .replaceAll("<h3>", "")
        .replaceAll("</h3>", "")
        .replaceAll("</span>", "")
        
        while (this.description.indexOf("<h2") != -1){
            let n = this.description.indexOf("<h2")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "***")
        }
        while (this.description.indexOf("<span") != -1){
            let n = this.description.indexOf("<span")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "")
        }
        while (this.description.indexOf("<table") != -1){
            let n = this.description.indexOf("<table")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">\n", n)+1), "")
        }
        while (this.description.indexOf("<td") != -1){
            let n = this.description.indexOf("<td")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), " ")
        }
        while (this.description.indexOf("<h1") != -1){
            let n = this.description.indexOf("<h1")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "***")
        }
        while (this.description.indexOf("<h3") != -1){
            let n = this.description.indexOf("<h3")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), " ")
        }
        return this.description
    }
    setRules(rules){
        this.rules = rules
    }
    getRules(){
        return this.rules
    }
    setSource(source){
        this.source = source
    }
    getSource(){
        return this.source
    }
    setCustomTraits(customTraits){
        this.customTraits = customTraits
    }
    getCustomTraits(){
        return this.customTraits
    }
    setRarityTraits(rarityTraits){
        this.rarityTraits = rarityTraits
    }
    getRarityTraits(){
        return this.rarityTraits
    }
    setTraits(traits){
        this.traits = traits
    }
    getTraits(){
        return this.traits
    }
    toString(){
        let message = ""
        if (this.getName() != "") message += "***Name:*** " + this.getName() + "\n"
        if (this.getDescription() != "") message += "***Description:*** " + this.getDescription() + "\n"
        if (Object.entries(this.getRules()) != "") message += "***Rules:*** " + Object.entries(this.getRules()) + "\n"
        if (this.getSource() != "") message += "***Source:*** " + this.getSource() + "\n"
        if (this.getCustomTraits() != "") message += "***Custom Traits:*** " + this.getCustomTraits() + "\n"
        if (this.getRarityTraits() != "") message += "***Rarity:*** " + this.getRarityTraits() + "\n"
        if (this.getTraits().join() != "") message += "***Traits:*** " + this.getTraits().join(", ") + "\n"

        return message
    }
}
class Class{
    constructor(name = "" /*.name, string */,
    description = "" /*.system.description.value, string */){
        this.name = name
        this.description = description
    }
    setName(name){
        this.name = name
    }
    getName(){
        return this.name
    }
    setDescription(description){
        this.description = description
    }
    getDescription(){
        this.description = this.description.replaceAll("<p>","")
        .replaceAll("</p>", "")
        .replaceAll("<li>", "")
        .replaceAll("</li>", "")
        .replaceAll("<ul>", "")
        .replaceAll("</ul>", "")
        .replaceAll("<em>", "")
        .replaceAll("</em>", "")
        .replaceAll("<hr />", "")
        .replaceAll("</table>", " ")
        .replaceAll("<thread>", " ")
        .replaceAll("</thread>", " ")
        .replaceAll("<tr>\n", " ")
        .replaceAll("</tr>", " ")
        .replaceAll("<td>", " ")
        .replaceAll("</td>\n", " ")
        .replaceAll("<th>", " ")
        .replaceAll("</th>\n", " ")
        .replaceAll("<thead>\n", "***")
        .replaceAll("</thead>\n", "***")
        .replaceAll("<tbody>\n", " ")
        .replaceAll("</tbody>\n", " ")
        .replaceAll("<h1>", "***")
        .replaceAll("</h1>", "***")
        .replaceAll("<strong>", "***")
        .replaceAll("</strong>", "***")
        .replaceAll("<h2>", "***")
        .replaceAll("</h2>", "***")
        .replaceAll("<h3>", "")
        .replaceAll("</h3>", "")
        .replaceAll("</span>", "")
        
        while (this.description.indexOf("<h2") != -1){
            let n = this.description.indexOf("<h2")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "***")
        }
        while (this.description.indexOf("<span") != -1){
            let n = this.description.indexOf("<span")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "")
        }
        while (this.description.indexOf("<table") != -1){
            let n = this.description.indexOf("<table")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">\n", n)+1), "")
        }
        while (this.description.indexOf("<td") != -1){
            let n = this.description.indexOf("<td")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), " ")
        }
        while (this.description.indexOf("<h1") != -1){
            let n = this.description.indexOf("<h1")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "***")
        }
        while (this.description.indexOf("<h3") != -1){
            let n = this.description.indexOf("<h3")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), " ")
        }
        return this.description
    }
    toString(){
        let message = ""
        if (this.getName() != "") message += "***Name:*** " + this.getName() + "\n"
        if (this.getDescription() != "") message += "***Description:*** " + this.getDescription()
        return message
    }
}
class Deity{
    constructor(name = "" /*.name, string */,
    followerAlignment = "" /*.system.alignment.follower, string */,
    ownAlignment = "" /*.system.alignment.own, string */,
    description = "" /*.system.description.value, sting */,
    priDomain = "" /*.system.domains.primary, string */,
    altDomain = "" /*.system.domains.alternate, string */,
    source = "" /*.system.source.value, string */,
    weapons = [] /*.system.weapons, array */){
        this.name = name
        this.followerAlignment = followerAlignment
        this.ownAlignment = ownAlignment
        this.description = description
        this.priDomain = priDomain
        this.altDomain = altDomain
        this.source = source
        this.weapons = weapons
    }
    setName(name){
        this.name = name
    }
    getName(){
        return this.name
    }
    setFollowerAlignment(followerAlignment){
        this.followerAlignment = followerAlignment
    }
    getFollowerAlignment(){
        return this.followerAlignment
    }
    setOwnAlignment(ownAlignment){
        this.ownAlignment = ownAlignment
    }
    getOwnAlignment(){
        return this.ownAlignment
    }
    setDescription(description){
        this.description = description
    }
    getDescription(){
        this.description = this.description.replaceAll("<p>","")
        .replaceAll("</p>", "")
        .replaceAll("<li>", "")
        .replaceAll("</li>", "")
        .replaceAll("<ul>", "")
        .replaceAll("</ul>", "")
        .replaceAll("<em>", "")
        .replaceAll("</em>", "")
        .replaceAll("<hr />", "")
        .replaceAll("</table>", " ")
        .replaceAll("<thread>", " ")
        .replaceAll("</thread>", " ")
        .replaceAll("<tr>\n", " ")
        .replaceAll("</tr>", " ")
        .replaceAll("<td>", " ")
        .replaceAll("</td>\n", " ")
        .replaceAll("<th>", " ")
        .replaceAll("</th>\n", " ")
        .replaceAll("<thead>\n", "***")
        .replaceAll("</thead>\n", "***")
        .replaceAll("<tbody>\n", " ")
        .replaceAll("</tbody>\n", " ")
        .replaceAll("<h1>", "***")
        .replaceAll("</h1>", "***")
        .replaceAll("<strong>", "***")
        .replaceAll("</strong>", "***")
        .replaceAll("<h2>", "***")
        .replaceAll("</h2>", "***")
        .replaceAll("<h3>", "")
        .replaceAll("</h3>", "")
        .replaceAll("</span>", "")
        
        while (this.description.indexOf("<h2") != -1){
            let n = this.description.indexOf("<h2")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "***")
        }
        while (this.description.indexOf("<span") != -1){
            let n = this.description.indexOf("<span")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "")
        }
        while (this.description.indexOf("<table") != -1){
            let n = this.description.indexOf("<table")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">\n", n)+1), "")
        }
        while (this.description.indexOf("<td") != -1){
            let n = this.description.indexOf("<td")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), " ")
        }
        while (this.description.indexOf("<h1") != -1){
            let n = this.description.indexOf("<h1")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "***")
        }
        while (this.description.indexOf("<h3") != -1){
            let n = this.description.indexOf("<h3")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), " ")
        }
        return this.description
    }
    setPriDomain(priDomain){
        this.priDomain = priDomain
    }
    getPriDomain(){
        return this.priDomain
    }
    setAltDomain(altDomain){
        this.altDomain = altDomain
    }
    getAltDomain(){
        return this.altDomain
    }
    setSource(source){
        this.source = source
    }
    getSource(){
        return this.source
    }
    setWeapons(weapons){
        this.weapons = weapons
    }
    getWeapons(){
        return this.weapons
    }
    toString(){
        let message = ""
        if (this.getName() != "") message += "***Name:*** " + this.getName() + "\n"
        if (this.getFollowerAlignment() != "") message += "***Follower Alignment:*** " + this.getFollowerAlignment() + "\n"
        if (this.getOwnAlignment() != "") message += `***${this.getName()}'s Alignment:*** ` + this.getOwnAlignment() + "\n"
        if (this.getDescription() != "") message += "***Description:*** " + this.getDescription() + "\n"
        if (this.getPriDomain() != "") message += "***Primary Domains:*** " + this.getPriDomain() + "\n"
        if (this.getAltDomain() != "") message += "***Alternate Domains:*** " + this.getAltDomain() + "\n"
        if (this.getSource() != "") message += "***Source:*** " + this.getSource() + "\n"
        if (this.getWeapons().join() != "") message += "***Weapons:*** " + this.getWeapons().join(", ") + "\n"

        message = message.slice(0, message.length - 1)

        return message
    }
}
class Equipment{
    constructor(name = "" /*.name, string */,
    description = "" /*.system.description.value, string */,
    equippedBulk = "" /*.system.equippedBulk.value, string */,
    level = "" /*.system.level.value, string */,
    price /*.system.price.value, object */,
    quantity = "" /*.system.quantity, string */,
    source = "" /*.system.source.value */,
    customTraits = "" /*.system.traits.custom, string*/,
    rarityTraits = "" /*.system.traits.rarity, string */,
    traits = [] /*.system.traits.value, array */,
    usage = "" /*.system.usage.value,string */,
    weight = "" /*.system.weight.value, string */
    ){
        this.name = name
        this.description = description
        this.equippedBulk = equippedBulk
        this.level = level
        this.price = price
        this.quantity = quantity
        this.source = source
        this.customTraits = customTraits
        this.rarityTraits = rarityTraits
        this.traits = traits
        this.usage = usage
        this.weight = weight
    }
    setName(name){
        this.name = name
    }
    getName(){
        return this.name
    }
    setDescription(description){
        this.description = description
    }
    getDescription(){
        this.description = this.description.replaceAll("<p>","")
        .replaceAll("</p>", "")
        .replaceAll("<li>", "")
        .replaceAll("</li>", "")
        .replaceAll("<ul>", "")
        .replaceAll("</ul>", "")
        .replaceAll("<em>", "")
        .replaceAll("</em>", "")
        .replaceAll("<hr />", "")
        .replaceAll("</table>", " ")
        .replaceAll("<thread>", " ")
        .replaceAll("</thread>", " ")
        .replaceAll("<tr>\n", " ")
        .replaceAll("</tr>", " ")
        .replaceAll("<td>", " ")
        .replaceAll("</td>\n", " ")
        .replaceAll("<th>", " ")
        .replaceAll("</th>\n", " ")
        .replaceAll("<thead>\n", "***")
        .replaceAll("</thead>\n", "***")
        .replaceAll("<tbody>\n", " ")
        .replaceAll("</tbody>\n", " ")
        .replaceAll("<h1>", "***")
        .replaceAll("</h1>", "***")
        .replaceAll("<strong>", "***")
        .replaceAll("</strong>", "***")
        .replaceAll("<h2>", "***")
        .replaceAll("</h2>", "***")
        .replaceAll("<h3>", "")
        .replaceAll("</h3>", "")
        .replaceAll("</span>", "")
        
        while (this.description.indexOf("<h2") != -1){
            let n = this.description.indexOf("<h2")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "***")
        }
        while (this.description.indexOf("<span") != -1){
            let n = this.description.indexOf("<span")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "")
        }
        while (this.description.indexOf("<table") != -1){
            let n = this.description.indexOf("<table")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">\n", n)+1), "")
        }
        while (this.description.indexOf("<td") != -1){
            let n = this.description.indexOf("<td")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), " ")
        }
        while (this.description.indexOf("<h1") != -1){
            let n = this.description.indexOf("<h1")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "***")
        }
        while (this.description.indexOf("<h3") != -1){
            let n = this.description.indexOf("<h3")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), " ")
        }
        return this.description
    }
    setEquippedBulk(equippedBulk){
        this.equippedBulk = equippedBulk
    }
    getEquippedBulk(){
        return this.equippedBulk
    }
    setLevel(level){
        this.level = level
    }
    getLevel(){
        return this.level
    }
    setPrice(price){
        this.price = price
    }
    getPrice(){
        return this.price
    }
    setQuantity(quantity){
        this.quantity = quantity
    }
    getQuantity(){
        return this.quantity
    }
    setSource(source){
        this.source = source
    }
    getSource(){
        return this.source
    }
    setCustomTraits(customTraits){
        this.customTraits = customTraits
    }
    getCustomTraits(){
        return this.customTraits
    }
    setRarityTraits(rarityTraits){
        this.rarityTraits = rarityTraits
    }
    getRarityTraits(){
        return this.rarityTraits
    }
    setTraits(traits){
        this.traits = traits
    }
    getTraits(){
        return this.traits
    }
    setUsage(usage){
        this.usage = usage
    }
    getUsage(){
        return this.usage
    }
    setWeight(weight){
        this.weight = weight
    }
    getWeight(){
        return this.weight
    }
    toString(){
        let message = ""
        if (this.getName() != "") message += "***Name:*** " + this.getName() + "\n"
        if (this.getDescription() != "") message += "***Description:*** " + this.getDescription() + "\n"
        if (this.getEquippedBulk() != "") message += "***Equipped Bulk:*** " + this.getEquippedBulk() + "\n"
        if (this.getLevel() != "") message += "***Level:*** " + this.getLevel() + "\n"
        if (Object.entries(this.getPrice()) != "") message += "***Price:*** " + Object.entries(this.getPrice()) + "\n"
        if (this.getQuantity() != "") message += "***Quantity:*** " + this.getQuantity() + "\n"
        if (this.getSource() != "") message += "***Source:*** " + this.getSource() + "\n"
        if (this.getCustomTraits() != "") message += "***Custom Traits:*** " + this.getCustomTraits() + "\n"
        if (this.getRarityTraits() != "") message += "***Rarity:*** " + this.getRarityTraits() + "\n"
        if (this.getTraits().join() != "") message += "***Traits:*** " + this.getTraits().join(", ") + "\n"
        if (this.getUsage() != "") message += "***Usage:*** " + this.getUsage() + "\n"
        if (this.getWeight() != "") message += "***Weight:*** " + this.getWeight() + "\n"

        message = message.slice(0, message.length - 1)

        return message
    }
}
class Feat{
    constructor(name = "" /*.name, string */, 
    actionType = "" /*.system.actionType.value, string */, 
    actions = "" /*.system.actions.value, number/string */, 
    description = "" /*.system.description.value, string */,
    featType = "" /*.system.featType.value, string */,
    level = "" /*.system.level.value */,
    prerequisites = [] /*.system.prerequisites.value, array of objects */,
    source = "" /*.system.source.value, string */,
    customTraits = "" /*.system.traits.custom, string*/,
    rarityTraits = "" /*.system.traits.rarity, string */,
    traits = [] /*.system.traits.value, array */){
        this.name = name
        this.actionType = actionType
        this.actions = actions
        this.description = description
        this.featType = featType
        this.level = level
        this.prerequisites = prerequisites
        this.source = source
        this.customTraits = customTraits
        this.rarityTraits = rarityTraits
        this.traits = traits
    }
    setName(name){
        this.name = name
    }
    getName(){
        return this.name
    }
    setActionType(actionType){
        this.actionType = actionType
    }
    getActionType(){
        return this.actionType
    }
    setActions(actions){
        this.actions = actions
    }
    getActions(){
        return this.actions
    }
    setDescription(description){
        this.description = description
    }
    getDescription(){
        this.description = this.description.replaceAll("<p>","")
        .replaceAll("</p>", "")
        .replaceAll("<li>", "")
        .replaceAll("</li>", "")
        .replaceAll("<ul>", "")
        .replaceAll("</ul>", "")
        .replaceAll("<em>", "")
        .replaceAll("</em>", "")
        .replaceAll("<hr />", "")
        .replaceAll("</table>", " ")
        .replaceAll("<thread>", " ")
        .replaceAll("</thread>", " ")
        .replaceAll("<tr>\n", " ")
        .replaceAll("</tr>", " ")
        .replaceAll("<td>", " ")
        .replaceAll("</td>\n", " ")
        .replaceAll("<th>", " ")
        .replaceAll("</th>\n", " ")
        .replaceAll("<thead>\n", "***")
        .replaceAll("</thead>\n", "***")
        .replaceAll("<tbody>\n", " ")
        .replaceAll("</tbody>\n", " ")
        .replaceAll("<h1>", "***")
        .replaceAll("</h1>", "***")
        .replaceAll("<strong>", "***")
        .replaceAll("</strong>", "***")
        .replaceAll("<h2>", "***")
        .replaceAll("</h2>", "***")
        .replaceAll("<h3>", "")
        .replaceAll("</h3>", "")
        .replaceAll("</span>", "")
        
        while (this.description.indexOf("<h2") != -1){
            let n = this.description.indexOf("<h2")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "***")
        }
        while (this.description.indexOf("<span") != -1){
            let n = this.description.indexOf("<span")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "")
        }
        while (this.description.indexOf("<table") != -1){
            let n = this.description.indexOf("<table")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">\n", n)+1), "")
        }
        while (this.description.indexOf("<td") != -1){
            let n = this.description.indexOf("<td")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), " ")
        }
        while (this.description.indexOf("<h1") != -1){
            let n = this.description.indexOf("<h1")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "***")
        }
        while (this.description.indexOf("<h3") != -1){
            let n = this.description.indexOf("<h3")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), " ")
        }
        return this.description
    }
    setFeatType(featType){
        this.featType = featType
    }
    getFeatType(){
        return this.featType
    }
    setLevel(level){
        this.level = level
    }
    getLevel(){
        return this.level
    }
    setPrerequisites(prerequisites){
        this.prerequisites = prerequisites
    }
    getPrerequisites(){
        return this.prerequisites
    }
    setSource(source){
        this.source = source
    }
    getSource(){
        return this.source
    }
    setCustomTraits(customTraits){
        this.customTraits = customTraits
    }
    getCustomTraits(){
        return this.customTraits
    }
    setRarityTraits(rarityTraits){
        this.rarityTraits = rarityTraits
    }
    getRarityTraits(){
        return this.rarityTraits
    }
    setTraits(traits){
        this.traits = traits
    }
    getTraits(){
        return this.traits
    }
    toString(){
        let message = ""
        if (this.getName() != "") message += "***Name:*** " + this.getName() + "\n"
        if (this.getActionType() != "") message += "***Action Type:*** " + this.getActionType() + "\n"
        if (this.getActions() != "") message += "***Actions:*** " + this.getActions() +"\n"
        if (this.getDescription() != "") message += "***Description:*** " + this.getDescription() + "\n"
        if (this.getFeatType() != "") message += "***Feat Type:*** " + this.getFeatType() + "\n"
        if (this.getLevel() != "") message += "***Level:*** " + this.getLevel() + "\n"
        if (this.getPrerequisites().join() != ""){
            message += "***Prerequisites:*** " 
            this.getPrerequisites().forEach(value => {
                for(const [key, entry] of Object.entries(value)){
                    message += entry + ", "
                }
            })
            message += "\n"
        }
        if (this.getSource() != "") message += "***Source:*** " + this.getSource() + "\n"
        if (this.getCustomTraits() != "") message += "***Custom Traits:*** " + this.getCustomTraits() + "\n"
        if (this.getRarityTraits() != "") message += "***Rarity:*** " + this.getRarityTraits() + "\n"
        if (this.getTraits().join() != "") message += "***Traits:*** " + this.getTraits().join(", ") + "\n"
        
        message = message.slice(0, message.length - 1)

        return message
    }
}
class Spell{
    constructor(name = "" /*.name, string */,
    material = false /*.system.components.material, boolean */,
    somatic = false /*.system.components.somatic, boolean */,
    verbal = false /*.system.components.verbal, boolean */,
    description = "" /*.system.description.value, string */,
    duration = "" /*.system.duration.value, string */,
    level = "" /*.system.level.value, string */,
    materialComponent /*.system.materials, array of objects */,
    range = "" /*system.range.value, string */,
    save /*.system.save, object */,
    school = "" /*.system.school.value, string */,
    source = "" /*.system.source.value, string */,
    sustained = false /*.system.sustained.value, boolean */,
    target = "" /*.system.target.value, string */,
    castingTime = "" /*.system.time.value, string */,
    traditions = [] /*.system.traditions.value, array */,
    rarityTraits = "" /*.system.traits.rarity, string */,
    traits = [] /*.system.traits.value, array */){
        this.name = name
        this.material = material
        this.somatic = somatic
        this.verbal = verbal
        this.description = description
        this.duration =duration
        this.level =level
        this.materialComponent = materialComponent
        this.range = range
        this.save = save
        this.school = school
        this.source = source
        this.sustained = sustained
        this.target = target
        this.castingTime = castingTime
        this. traditions = traditions
        this.rarityTraits =rarityTraits
        this.traits = traits
    }
    setName(name){
        this.name = name
    }
    getName(){
        return this.name
    }
    setMaterial(material){
        this.material = material
    }
    getMaterial(){
        return this.material
    }
    setSomatic(somatic){
        this.somatic = somatic
    }
    getSomatic(){
        return this.somatic
    }
    setVerbal(verbal){
        this.verbal = verbal
    }
    getVerbal(){
        return this.verbal
    }
    setDescription(description){
        this.description = description
    }
    getDescription(){
        this.description = this.description.replaceAll("<p>","")
        .replaceAll("</p>", "")
        .replaceAll("<li>", "")
        .replaceAll("</li>", "")
        .replaceAll("<ul>", "")
        .replaceAll("</ul>", "")
        .replaceAll("<em>", "")
        .replaceAll("</em>", "")
        .replaceAll("<hr />", "")
        .replaceAll("</table>", " ")
        .replaceAll("<thread>", " ")
        .replaceAll("</thread>", " ")
        .replaceAll("<tr>\n", " ")
        .replaceAll("</tr>", " ")
        .replaceAll("<td>", " ")
        .replaceAll("</td>\n", " ")
        .replaceAll("<th>", " ")
        .replaceAll("</th>\n", " ")
        .replaceAll("<thead>\n", "***")
        .replaceAll("</thead>\n", "***")
        .replaceAll("<tbody>\n", " ")
        .replaceAll("</tbody>\n", " ")
        .replaceAll("<h1>", "***")
        .replaceAll("</h1>", "***")
        .replaceAll("<strong>", "***")
        .replaceAll("</strong>", "***")
        .replaceAll("<h2>", "***")
        .replaceAll("</h2>", "***")
        .replaceAll("<h3>", "")
        .replaceAll("</h3>", "")
        .replaceAll("</span>", "")
        .replaceAll("<ol>", "")
        .replaceAll("</ol>", "")
        
        while (this.description.indexOf("<h2") != -1){
            let n = this.description.indexOf("<h2")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "***")
        }
        while (this.description.indexOf("<span") != -1){
            let n = this.description.indexOf("<span")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "")
        }
        while (this.description.indexOf("<table") != -1){
            let n = this.description.indexOf("<table")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">\n", n)+1), "")
        }
        while (this.description.indexOf("<td") != -1){
            let n = this.description.indexOf("<td")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), " ")
        }
        while (this.description.indexOf("<h1") != -1){
            let n = this.description.indexOf("<h1")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "***")
        }
        while (this.description.indexOf("<h3") != -1){
            let n = this.description.indexOf("<h3")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), " ")
        }
        while (this.description.indexOf("<ol") != -1){
            let n = this.description.indexOf("<ol")
            this.description = this.description.replaceAll(this.description.slice(n,this.description.indexOf(">", n)+1), "")
        }
        return this.description
    }
    setDuration(duration){
        this.duration = duration
    }
    getDuration(){
        return this.duration
    }
    setLevel(level){
        this.level = level
    }
    getLevel(){
        return this.level
    }
    setMaterialComponent(materialComponent){
        this.materialComponent = materialComponent
    }
    getMaterialComponent(){
        return this.materialComponent
    }
    setRange(range){
        this.range = range
    }
    getRange(){
        return this.range
    }
    setSave(save){
        this.save = save
    }
    getSave(){
        return this.save
    }
    setSchool(school){
        this.school = school
    }
    getSchool(){
        return this.school
    }
    setSource(source){
        this.source = source
    }
    getSource(){
        return this.source
    }
    setSustained(sustained){
        this.sustained = sustained
    }
    getSustained(){
        return this.sustained
    }
    setTarget(target){
        this.target = target
    }
    getTarget(){
        return this.target
    }
    setCastingTime(castingTime){
        this.castingTime = castingTime
    }
    getCastingTime(){
        return this.castingTime
    }
    setTraditions(traditions){
        this.traditions = traditions
    }
    getTraditions(){
        return this.traditions
    }
    setRarityTraits(rarityTraits){
        this.rarityTraits = rarityTraits
    }
    getRarityTraits(){
        return this.rarityTraits
    }
    setTraits(traits){
        this.traits = traits
    }
    getTraits(){
        return this.traits
    } 
    toString(){
        let message = ""
        if (this.getName() != "") message += "***Name:*** " + this.getName() + "\n"
        if (this.getLevel() != "") message += "***Level:*** " + this.getLevel() + "\n"
        message += "***Components:*** "
        if (this.getVerbal() == true) message += "Verbal "
        if (this.getSomatic() == true) message += "Somatic "
        if (this.getMaterial() == true) { 
            message += "Material "
            if (this.getMaterialComponent().value != "") {
                message +="(" + this.getMaterialComponent().value + ")"
            }
        }
        message += "\n"
        if (this.getRange() != "") message += "***Range:*** " + this.getRange() + "\n"
        if (this.getCastingTime() != "") message += "***Time:*** " + this.getCastingTime() + "\n"
        if (this.getDuration() != "") message += "***Duration:*** " + this.getDuration() + "\n"        
        if (this.getSchool() != "") message += "***School:*** " + this.getSchool() + "\n"
        if (this.getTraditions().join() != "") message += "***Traditions:*** " + this.getTraditions().join(", ") + "\n"
        if (this.getDescription() != "") message += "***Description:*** " + this.getDescription() + "\n"
        if (Object.entries(this.getSave()) != "") {
            message += "***Save:*** "
             for(const [key, value] of Object.entries(this.getSave())){
                if (value == "") {
                    message += key + ": " + "none" + "\t" + "\t"
                }
                else {
                    message += key + ": " + value + "\t" + "\t"
                }
              } 
            message += "\n"
            }    
        if (this.getSource() != "") message += "***Source:*** " + this.getSource() + "\n"
        if (this.getRarityTraits() != "") message += "***Rarity:*** " + this.getRarityTraits() + "\n"
        if (this.getTraits().join() != "") message += "***Traits:*** " + this.getTraits().join(", ") + "\n"

        message = message.slice(0, message.length - 1)

        return message
    }
}

module.exports = { Action, Ancestry, Archetype, Background, Class, Deity, Equipment, Feat, Spell }