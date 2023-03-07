//Objects collect and hold meaningful information to be used for replying to request.
class Action{
    constructor(name = "" /*.name, string */, 
    actionCategory = "" /*.system.actionCategory.value, string */, 
    actionType = "" /*.system.actionType.value, string */, 
    actions = "" /*.system.actions.value, number/string */, 
    description = "" /*.system.description.value, string */,
    requirements = "" /*.system.requirements.value, string */,
    rules = [] /*.system.rules, array */,
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
        this.rules = rules
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
        .replaceAll("</table>", "")
        .replaceAll("<thread>", "")
        .replaceAll("</thread>", "")
        .replaceAll("<tr>", "")
        .replaceAll("</tr>", "")
        .replaceAll("<td>", "")
        .replaceAll("</td>", "")
        .replaceAll("<th>", "")
        .replaceAll("</th>", "")
        .replaceAll("<thead>", "***")
        .replaceAll("</thead>", "***")
        .replaceAll("<tbody>", "")
        .replaceAll("</tbody>", "")
        .replaceAll("<h1>", "***")
        .replaceAll("</h1>", "***")
        .replaceAll("<strong>", "***")
        .replaceAll("</strong>", "***")
        .replaceAll("<h2>", "***")
        .replaceAll("</h2>", "***")
        .replaceAll("<h3>", "***")
        .replaceAll("</h3>", "***")
        .replaceAll("</span>", "")
        
        if (this.description.indexOf("<h2") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<h2"),this.description.indexOf(">", this.description.indexOf("<h2"))+1), "***")
        }
        if (this.description.indexOf("<span") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<span"),this.description.indexOf(">", this.description.indexOf("<span"))+1), "")
        }
        if (this.description.indexOf("<table") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<table"),this.description.indexOf(">", this.description.indexOf("<table"))+1), "")
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
        if (this.getRules().join() != "") message += "***Rules:*** " + this.getRules().join(", ") + "\n"
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
        .replaceAll("</table>", "")
        .replaceAll("<thread>", "")
        .replaceAll("</thread>", "")
        .replaceAll("<tr>", "")
        .replaceAll("</tr>", "")
        .replaceAll("<td>", "")
        .replaceAll("</td>", "")
        .replaceAll("<th>", "")
        .replaceAll("</th>", "")
        .replaceAll("<thead>", "***")
        .replaceAll("</thead>", "***")
        .replaceAll("<tbody>", "")
        .replaceAll("</tbody>", "")
        .replaceAll("<h1>", "***")
        .replaceAll("</h1>", "***")
        .replaceAll("<strong>", "***")
        .replaceAll("</strong>", "***")
        .replaceAll("<h2>", "***")
        .replaceAll("</h2>", "***")
        .replaceAll("<h3>", "***")
        .replaceAll("</h3>", "***")
        .replaceAll("</span>", "")
        
        if (this.description.indexOf("<h2") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<h2"),this.description.indexOf(">", this.description.indexOf("<h2"))+1), "***")
        }
        if (this.description.indexOf("<span") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<span"),this.description.indexOf(">", this.description.indexOf("<span"))+1), "")
        }
        if (this.description.indexOf("<table") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<table"),this.description.indexOf(">", this.description.indexOf("<table"))+1), "")
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
class AncestryFeature{
    constructor(name = "" /*.name, string */, 
    actionType = "" /*.system.actionType.value, string */, 
    actions = "" /*.system.actions.value, number/string */, 
    description = "" /*.system.description.value, string */,
    featType = "" /*.system.featType.value, string */,
    level = "" /*.system.level.value */,
    prerequisites = [] /*.system. */,
    rules = [] /*.system.rules, array */,
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
        .replaceAll("</table>", "")
        .replaceAll("<thread>", "")
        .replaceAll("</thread>", "")
        .replaceAll("<tr>", "")
        .replaceAll("</tr>", "")
        .replaceAll("<td>", "")
        .replaceAll("</td>", "")
        .replaceAll("<th>", "")
        .replaceAll("</th>", "")
        .replaceAll("<thead>", "***")
        .replaceAll("</thead>", "***")
        .replaceAll("<tbody>", "")
        .replaceAll("</tbody>", "")
        .replaceAll("<h1>", "***")
        .replaceAll("</h1>", "***")
        .replaceAll("<strong>", "***")
        .replaceAll("</strong>", "***")
        .replaceAll("<h2>", "***")
        .replaceAll("</h2>", "***")
        .replaceAll("<h3>", "***")
        .replaceAll("</h3>", "***")
        .replaceAll("</span>", "")
        
        if (this.description.indexOf("<h2") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<h2"),this.description.indexOf(">", this.description.indexOf("<h2"))+1), "***")
        }
        if (this.description.indexOf("<span") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<span"),this.description.indexOf(">", this.description.indexOf("<span"))+1), "")
        }
        if (this.description.indexOf("<table") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<table"),this.description.indexOf(">", this.description.indexOf("<table"))+1), "")
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
        if (this.getActionType() != "") message += "***Action Type:*** " + this.getActionType() + "\n"
        if (this.getActions() != "") message += "***Actions:*** " + this.getActions() +"\n"
        if (this.getDescription() != "") message += "***Description:*** " + this.getDescription() + "\n"
        if (this.getFeatType() != "") message += "***Feat Type:*** " + this.getFeatType() + "\n"
        if (this.getLevel() != "") message += "***Level:*** " + this.getLevel() + "\n"
        if (this.getPrerequisites() != "") message += "***Prerequisites:*** " + this.getPrerequisites() + "\n"
        if (this.getRules().join() != "") message += "***Rules:*** " + this.getRules().join(", ") + "\n"
        if (this.getSource() != "") message += "***Source:*** " + this.getSource() + "\n"
        if (this.getCustomTraits() != "") message += "***Custom Traits:*** " + this.getCustomTraits() + "\n"
        if (this.getRarityTraits() != "") message += "***Rarity:*** " + this.getRarityTraits() + "\n"
        if (this.getTraits().join() != "") message += "***Traits:*** " + this.getTraits().join(", ") + "\n"
        
        message = message.slice(0, message.length - 1)

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
        .replaceAll("</table>", "")
        .replaceAll("<thread>", "")
        .replaceAll("</thread>", "")
        .replaceAll("<tr>", "")
        .replaceAll("</tr>", "")
        .replaceAll("<td>", "")
        .replaceAll("</td>", "")
        .replaceAll("<th>", "")
        .replaceAll("</th>", "")
        .replaceAll("<thead>", "***")
        .replaceAll("</thead>", "***")
        .replaceAll("<tbody>", "")
        .replaceAll("</tbody>", "")
        .replaceAll("<h1>", "***")
        .replaceAll("</h1>", "***")
        .replaceAll("<strong>", "***")
        .replaceAll("</strong>", "***")
        .replaceAll("<h2>", "***")
        .replaceAll("</h2>", "***")
        .replaceAll("<h3>", "***")
        .replaceAll("</h3>", "***")
        .replaceAll("</span>", "")
        
        if (this.content.indexOf("<h2") != -1){
            this.content = this.content.replaceAll(this.content.slice(this.content.indexOf("<h2"),this.content.indexOf(">", this.content.indexOf("<h2"))+1), "***")
        }
        if (this.content.indexOf("<span") != -1){
            this.content = this.content.replaceAll(this.content.slice(this.content.indexOf("<span"),this.content.indexOf(">", this.content.indexOf("<span"))+1), "")
        }
        if (this.content.indexOf("<table") != -1){
            this.content = this.content.replaceAll(this.content.slice(this.content.indexOf("<table"),this.content.indexOf(">", this.content.indexOf("<table"))+1), "")
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
    rules = [] /*.system.rules, array */,
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
        .replaceAll("</table>", "")
        .replaceAll("<thread>", "")
        .replaceAll("</thread>", "")
        .replaceAll("<tr>", "")
        .replaceAll("</tr>", "")
        .replaceAll("<td>", "")
        .replaceAll("</td>", "")
        .replaceAll("<th>", "")
        .replaceAll("</th>", "")
        .replaceAll("<thead>", "***")
        .replaceAll("</thead>", "***")
        .replaceAll("<tbody>", "")
        .replaceAll("</tbody>", "")
        .replaceAll("<h1>", "***")
        .replaceAll("</h1>", "***")
        .replaceAll("<strong>", "***")
        .replaceAll("</strong>", "***")
        .replaceAll("<h2>", "***")
        .replaceAll("</h2>", "***")
        .replaceAll("<h3>", "***")
        .replaceAll("</h3>", "***")
        .replaceAll("</span>", "")
        
        if (this.description.indexOf("<h2") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<h2"),this.description.indexOf(">", this.description.indexOf("<h2"))+1), "***")
        }
        if (this.description.indexOf("<span") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<span"),this.description.indexOf(">", this.description.indexOf("<span"))+1), "")
        }
        if (this.description.indexOf("<table") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<table"),this.description.indexOf(">", this.description.indexOf("<table"))+1), "")
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
        if (this.getRules().join() != "") message += "***Rules:*** " + this.getRules().join(", ") + "\n"
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
        .replaceAll("</th>", " ")
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
        .replaceAll("<h3>", "***")
        .replaceAll("</h3>", "***")
        .replaceAll("</span>", "")
        
        if (this.description.indexOf("<h2") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<h2"),this.description.indexOf(">", this.description.indexOf("<h2"))+1), "***")
        }
        if (this.description.indexOf("<span") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<span"),this.description.indexOf(">", this.description.indexOf("<span"))+1), "")
        }
        if (this.description.indexOf("<table") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<table"),this.description.indexOf(">\n", this.description.indexOf("<table"))+1), "")
        }
        if (this.description.indexOf("<td") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<td"),this.description.indexOf(">",this.description.includes("<td"))+1), " ")
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
class ClassFeature{
    constructor(name = "" /*.name, string */, 
    actionType = "" /*.system.actionType.value, string */, 
    actions = "" /*.system.actions.value, number/string */, 
    description = "" /*.system.description.value, string */,
    featType = "" /*.system.featType.value, string */,
    level = "" /*.system.level.value */,
    prerequisites = [] /*.system. */,
    rules = [] /*.system.rules, array */,
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
        .replaceAll("</table>", "")
        .replaceAll("<thread>", "")
        .replaceAll("</thread>", "")
        .replaceAll("<tr>", "")
        .replaceAll("</tr>", "")
        .replaceAll("<td>", "")
        .replaceAll("</td>", "")
        .replaceAll("<th>", "")
        .replaceAll("</th>", "")
        .replaceAll("<thead>", "***")
        .replaceAll("</thead>", "***")
        .replaceAll("<tbody>", "")
        .replaceAll("</tbody>", "")
        .replaceAll("<h1>", "***")
        .replaceAll("</h1>", "***")
        .replaceAll("<strong>", "***")
        .replaceAll("</strong>", "***")
        .replaceAll("<h2>", "***")
        .replaceAll("</h2>", "***")
        .replaceAll("<h3>", "***")
        .replaceAll("</h3>", "***")
        .replaceAll("</span>", "")
        
        if (this.description.indexOf("<h2") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<h2"),this.description.indexOf(">", this.description.indexOf("<h2"))+1), "***")
        }
        if (this.description.indexOf("<span") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<span"),this.description.indexOf(">", this.description.indexOf("<span"))+1), "")
        }
        if (this.description.indexOf("<table") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<table"),this.description.indexOf(">", this.description.indexOf("<table"))+1), "")
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
        if (this.getActionType() != "") message += "***Action Type:*** " + this.getActionType() + "\n"
        if (this.getActions() != "") message += "***Actions:*** " + this.getActions() +"\n"
        if (this.getDescription() != "") message += "***Description:*** " + this.getDescription() + "\n"
        if (this.getFeatType() != "") message += "***Feat Type:*** " + this.getFeatType() + "\n"
        if (this.getLevel() != "") message += "***Level:*** " + this.getLevel() + "\n"
        if (this.getPrerequisites() != "") message += "***Prerequisites:*** " + this.getPrerequisites() + "\n"
        if (this.getRules().join() != "") message += "***Rules:*** " + this.getRules().join(", ") + "\n"
        if (this.getSource() != "") message += "***Source:*** " + this.getSource() + "\n"
        if (this.getCustomTraits() != "") message += "***Custom Traits:*** " + this.getCustomTraits() + "\n"
        if (this.getRarityTraits() != "") message += "***Rarity:*** " + this.getRarityTraits() + "\n"
        if (this.getTraits().join() != "") message += "***Traits:*** " + this.getTraits().join(", ") + "\n"
        
        message = message.slice(0, message.length - 1)

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
    weapons = "" /*.system.weapons */){
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
        .replaceAll("</table>", "")
        .replaceAll("<thread>", "")
        .replaceAll("</thread>", "")
        .replaceAll("<tr>", "")
        .replaceAll("</tr>", "")
        .replaceAll("<td>", "")
        .replaceAll("</td>", "")
        .replaceAll("<th>", "")
        .replaceAll("</th>", "")
        .replaceAll("<thead>", "***")
        .replaceAll("</thead>", "***")
        .replaceAll("<tbody>", "")
        .replaceAll("</tbody>", "")
        .replaceAll("<h1>", "***")
        .replaceAll("</h1>", "***")
        .replaceAll("<strong>", "***")
        .replaceAll("</strong>", "***")
        .replaceAll("<h2>", "***")
        .replaceAll("</h2>", "***")
        .replaceAll("<h3>", "***")
        .replaceAll("</h3>", "***")
        .replaceAll("</span>", "")
        
        if (this.description.indexOf("<h2") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<h2"),this.description.indexOf(">", this.description.indexOf("<h2"))+1), "***")
        }
        if (this.description.indexOf("<span") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<span"),this.description.indexOf(">", this.description.indexOf("<span"))+1), "")
        }
        if (this.description.indexOf("<table") != -1){
            this.description = this.description.replaceAll(this.description.slice(this.description.indexOf("<table"),this.description.indexOf(">", this.description.indexOf("<table"))+1), "")
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
        if (this.getWeapons() != "") message += "***Weapons:*** " + this.getWeapons() + "\n"

        message = message.slice(0, message.length - 1)

        return message
    }
}

module.exports = { Action, Ancestry, AncestryFeature, Archetype, Background, Class, ClassFeature, Deity }