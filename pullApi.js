/*fuction to pull API data once and store for bot use */
//grabs API token for use
const { pathfinderId } = require("./config.json")
const url = `https://api.pathfinder2.fr/v1/pf2`
const actionArray = []
const ancestryArray = []
const archetypeArray = []
const backgroundArray = []
const classArray = []
const deityArray = []
const equipmentArray = []
const featArray = []
const spellArray = []

const pullApi = () => {
    try {
        fetch(url + "/action", {
          method: "get",
          headers: {
            Authorization: pathfinderId,
          },
        })
        .then((response) => response.json())
        .then((json) => {
            json.results.forEach(i => {
                actionArray.push(i)
            })
            console.log("Actions loaded.")
            //console.log(actionArray[0].name)
        })
        fetch(url + "/ancestry", {
            method: "get",
            headers: {
              Authorization: pathfinderId,
            },
        })
        .then((response) => response.json())
        .then((json) => {
            json.results.forEach(i => {
                ancestryArray.push(i)
            })
            console.log("Ancestries loaded.")
          })
        fetch(url + "/archetype", {
            method: "get",
            headers: {
              Authorization: pathfinderId,
            },
          })
        .then((response) => response.json())
        .then((json) => {
            json.results.forEach(i => {
                archetypeArray.push(i)
            })
            console.log("Archetypes loaded.")
          })
          fetch(url + "/background", {
            method: "get",
            headers: {
              Authorization: pathfinderId,
            },
          })
        .then((response) => response.json())
        .then((json) => {
            json.results.forEach(i => {
                backgroundArray.push(i)
            })
            console.log("Backgrounds loaded.")
          })
          fetch(url + "/class", {
            method: "get",
            headers: {
              Authorization: pathfinderId,
            },
          })
        .then((response) => response.json())
        .then((json) => {
            json.results.forEach(i => {
                classArray.push(i)
            })
            console.log("Classes loaded.")
          })
          fetch(url + "/deity", {
            method: "get",
            headers: {
              Authorization: pathfinderId,
            },
          })
        .then((response) => response.json())
        .then((json) => {
            json.results.forEach(i => {
                deityArray.push(i)
            })
            console.log("Deities loaded.")
            //for (i = 0; i < deityArray.length; i++) console.log(deityArray[i].name)
          })
          fetch(url + "/equipment", {
            method: "get",
            headers: {
              Authorization: pathfinderId,
            },
          })
        .then((response) => response.json())
        .then((json) => {
            json.results.forEach(i => {
                equipmentArray.push(i)
            })
            console.log("Equipment loaded.")
          })
          fetch(url + "/ancestryFeature", {
            method: "get",
            headers: {
              Authorization: pathfinderId,
            },
          })
        .then((response) => response.json())
        .then((json) => {
            json.results.forEach(i => {
                featArray.push(i)
            })
            console.log("Feats (Ancestry) Loaded.")
        })
          fetch(url + "/classFeature", {
            method: "get",
            headers: {
              Authorization: pathfinderId,
            },
          })
        .then((response) => response.json())
        .then((json) => {
            json.results.forEach(i => {
                featArray.push(i)
            })
            console.log("Feats (Class) Loaded.")
          })
          fetch(url + "/feat", {
            method: "get",
            headers: {
              Authorization: pathfinderId,
            },
          })
        .then((response) => response.json())
        .then((json) => {
            json.results.forEach(i => {
                featArray.push(i)
            })
            console.log("Feats (General) loaded.")
          })
          fetch(url + "/spell", {
            method: "get",
            headers: {
              Authorization: pathfinderId,
            },
          })
        .then((response) => response.json())
        .then((json) => {
            json.results.forEach(i => {
                spellArray.push(i)
            })
            console.log("Spells loaded.")
          })
    }
    catch (error) {
        console.log("There was an error: ", error)
    }
}

module.exports = { pullApi, actionArray, ancestryArray, archetypeArray, backgroundArray, classArray, deityArray, equipmentArray, featArray, spellArray }