
function replaceGlobally(original, searchTxt, replaceTxt) {
    var result = original.split(searchTxt).join(replaceTxt);
    return result;
}

function replaceCustomVariables(original, customVariables) {
    if (customVariables == null){
        return original;
    }

    var replacements = {};

    for (var variable in customVariables){
        var searchTxt = "$custom_"+variable;
        var possibleReplacements = customVariables[variable];
        var replaceTxt = possibleReplacements[Math.floor(Math.random() * possibleReplacements.length)];
        replacements[searchTxt] = replaceTxt;
    }

    for (var replacement in replacements){
        original = replaceGlobally(original, replacement, replacements[replacement]);
    }

    return original;
}

const TIME = [
    "Crack of Dawn",
    "Morning",
    "Noon",
    "Afternoon",
    "Evening",
    "Nighttime",
    "Midnight",
    "Middle of the Night"
]

class Modifier {
    constructor(name, description, customVariables) {
        this.name = name;
        this.description = description;
        this.customVariables = customVariables;
    }
    _getName() {
        return this.name;
    }
    _getDescription() {
        return this.description;
    }
    _getCustomVariables() {
        return this.customVariables;
    }
}

class Item {
    constructor(id, name, verbage, description, modifiers, alwaysModifiers, customVariables, modifierData) {
        this.id = id;
        this.name = name[Math.floor(Math.random() * name.length)];
        this.verbage = verbage;
        this.customVariables = customVariables;
        this.description = description[Math.floor(Math.random() * description.length)];
        this.description = replaceCustomVariables(this.description, this.customVariables);
        this.description = replaceGlobally(this.description, "$item_name", this.name);
        this.description = replaceGlobally(this.description, "$item_a", this.verbage["a"]);
        this.description = replaceGlobally(this.description, "$item_is", this.verbage["is"]);
        this.modifier = null;
        // If there are modifiers in the modifiers array
        if (modifiers.length >= 1) {
            // If there are always modifiers, select one for this.modifier
            // Otherwise, flip a coin to decide if there is a modifier
            if (alwaysModifiers || Math.random() < 0.5){
                // Randomly select a modifier from the modifiers array
                var modID = modifiers[Math.floor(Math.random() * modifiers.length)];
                this.modifier = modifierData[modID];
                this.modifier.description = replaceCustomVariables(this.modifier.description, this.modifier.customVariables);
                this.modifier.description = replaceGlobally(this.modifier.description, "$item_name", this.name);
                this.modifier.description = replaceGlobally(this.modifier.description, "$item_a", this.verbage["a"]);
                this.modifier.description = replaceGlobally(this.modifier.description, "$item_is", this.verbage["is"]);
            }
        }
    }
    _getId() {
        return this.id;
    }
    _getName() {
        return this.name;
    }
    _getDescription() {
        return this.description;
    }
    _getModifiers() {
        return this.modifiers;
    }
    _getAlwaysModifiers() {
        return this.alwaysModifiers;
    }
}

class Character {
    constructor(id, name, verbage, description, modifiers, alwaysModifiers, customVariables, modifierData) {
        this.id = id;
        this.name = name[Math.floor(Math.random() * name.length)];
        this.verbage = verbage;
        this.customVariables = customVariables;
        this.description = description[Math.floor(Math.random() * description.length)];
        this.description = replaceCustomVariables(this.description, this.customVariables);
        this.description = replaceGlobally(this.description, "$character_name", this.name);
        this.description = replaceGlobally(this.description, "$character_a", this.verbage["a"]);
        this.description = replaceGlobally(this.description, "$character_they", this.verbage["they"]);
        this.description = replaceGlobally(this.description, "$character_them", this.verbage["them"]);
        this.description = replaceGlobally(this.description, "$character_their", this.verbage["their"]);
        this.description = replaceGlobally(this.description, "$character_is", this.verbage["is"]);
        this.modifier = null;
        // If there are modifiers in the modifiers array
        if (modifiers.length >= 1) {
            // If there are always modifiers, select one for this.modifier
            // Otherwise, flip a coin to decide if there is a modifier
            if (alwaysModifiers || Math.random() < 0.5){
                // Randomly select a modifier from the modifiers array
                var modID = modifiers[Math.floor(Math.random() * modifiers.length)];
                this.modifier = modifierData[modID];
                console.log(this.modifier);
                this.modifier.description = replaceCustomVariables(this.modifier.description, this.modifier.customVariables);
                this.modifier.description = replaceGlobally(this.modifier.description, "$character_name", this.name);
                this.modifier.description = replaceGlobally(this.modifier.description, "$character_a", this.verbage["a"]);
                this.modifier.description = replaceGlobally(this.modifier.description, "$character_they", this.verbage["they"]);
                this.modifier.description = replaceGlobally(this.modifier.description, "$character_them", this.verbage["them"]);
                this.modifier.description = replaceGlobally(this.modifier.description, "$character_their", this.verbage["their"]);
                this.modifier.description = replaceGlobally(this.modifier.description, "$character_is", this.verbage["is"]);
            }
        }
    }
    _getId() {
        return this.id;
    }
    _getName() {
        return this.name;
    }
    _getDescription() {
        return this.description;
    }
    _getModifiers() {
        return this.modifiers;
    }
    _getAlwaysModifiers() {
        return this.alwaysModifiers;
    }
}

class Location {
    constructor(id, name, verbage, description, modifiers, alwaysModifiers, customVariables, modifierData) {
        this.id = id;
        this.name = name[Math.floor(Math.random() * name.length)];
        this.verbage = verbage;
        this.customVariables = customVariables;
        this.description = description[Math.floor(Math.random() * description.length)];
        this.description = replaceCustomVariables(this.description, this.customVariables);
        this.description = replaceGlobally(this.description, "$location_name", this.name);
        this.description = replaceGlobally(this.description, "$location_a", this.verbage["a"]);
        this.description = replaceGlobally(this.description, "$location_is", this.verbage["is"]);
        this.modifier = null;
        if (modifiers.length >= 1) {
            // If there are always modifiers, select one for this.modifier
            // Otherwise, flip a coin to decide if there is a modifier
            if (alwaysModifiers || Math.random() < 0.5){
                // Randomly select a modifier from the modifiers array
                var modID = modifiers[Math.floor(Math.random() * modifiers.length)];
                this.modifier = modifierData[modID];
                this.modifier.description = replaceCustomVariables(this.modifier.description, this.modifier.customVariables);
                this.modifier.description = replaceGlobally(this.modifier.description, "$location_name", this.name);
                this.modifier.description = replaceGlobally(this.modifier.description, "$location_a", this.verbage["a"]);
                this.modifier.description = replaceGlobally(this.modifier.description, "$location_is", this.verbage["is"]);
            }
        }
    }
    _getId() {
        return this.id;
    }
    _getName() {
        return this.name;
    }
    _getDescription() {
        return this.description;
    }
    _getModifiers() {
        return this.modifiers;
    }
    _getAlwaysModifiers() {
        return this.alwaysModifiers;
    }
}

class Event {
    constructor(id, setting, eventText, locations, characters, items, customVariables, modifierData) {
        this.id = id;
        this.setting = setting;
        this.eventText = eventText;
        this.customVariables = customVariables;

        // Generate needed data 
        // Choose a random location id from the locations array
        this.location = null;
        if (locations != null && locations.length >= 1){
            var numLocations = Object.keys(locations).length;
            var locationId = locations[Math.floor(Math.random() * numLocations)];
        
            // Generate a Location object from the location id
            this.location = new Location(locationId,
                EVENTDATA[setting]["locations"][locationId]["name"],
                EVENTDATA[setting]["locations"][locationId]["verbage"],
                EVENTDATA[setting]["locations"][locationId]["description"],
                EVENTDATA[setting]["locations"][locationId]["modifiers"],
                EVENTDATA[setting]["locations"][locationId]["alwaysModifiers"],
                EVENTDATA[setting]["locations"][locationId]["customVariables"],
                modifierData);
        }

        this.character = null;
        if (characters != null && characters.length >= 1){
            // Choose a random character id from the characters array
            var numCharacters = Object.keys(characters).length;
            var characterId = characters[Math.floor(Math.random() * numCharacters)];

            // Generate a Character object from the character id
            this.character = new Character(characterId,
                EVENTDATA[setting]["characters"][characterId]["name"],
                EVENTDATA[setting]["characters"][characterId]["verbage"],
                EVENTDATA[setting]["characters"][characterId]["description"],
                EVENTDATA[setting]["characters"][characterId]["modifiers"],
                EVENTDATA[setting]["characters"][characterId]["alwaysModifiers"],
                EVENTDATA[setting]["characters"][characterId]["customVariables"],
                modifierData);
        }
        
        this.item = null;
        if (items != null && items.length >= 1){
            // Choose a random item id from the items array
            var itemId = items[Math.floor(Math.random() * items.length)];

            // Generate an Item object from the item id
            this.item = new Item(itemId,
                EVENTDATA[setting]["items"][itemId]["name"],
                EVENTDATA[setting]["items"][itemId]["verbage"],
                EVENTDATA[setting]["items"][itemId]["description"],
                EVENTDATA[setting]["items"][itemId]["modifiers"],
                EVENTDATA[setting]["items"][itemId]["alwaysModifiers"],
                EVENTDATA[setting]["items"][itemId]["customVariables"],
                modifierData);
        }
    }

    generateEventText() {
        // Check if the event has a location
        var text = this.eventText;
        text = replaceCustomVariables(text, this.customVariables);

        if (this.location != null){
            text = replaceCustomVariables(text, this.location.customVariables);
            text = replaceGlobally(text, "$location_name", `<b title='${this.location.description}'>${this.location.name}</b>`);
            text = replaceGlobally(text, "$location_a", this.location.verbage["a"]);
            text = replaceGlobally(text, "$location_is", this.location.verbage["is"]);
            text = replaceGlobally(text, "$location_desc", this.location.description);
            if (this.location.modifier != null){
                text += " " + this.location.modifier["description"];
            }
        }
        // Check if the event has a character
        if (this.character != null){
            text = replaceCustomVariables(text, this.character.customVariables);
            text = replaceGlobally(text, "$character_name", `<b title='${this.character.description}'>${this.character.name}</b>`);
            text = replaceGlobally(text, "$character_a", this.character.verbage["a"]);
            text = replaceGlobally(text, "$character_they", this.character.verbage["they"]);
            text = replaceGlobally(text, "$character_them", this.character.verbage["them"]);
            text = replaceGlobally(text, "$character_their", this.character.verbage["their"]);
            text = replaceGlobally(text, "$character_is", this.character.verbage["is"]);
            text = replaceGlobally(text, "$character_desc", this.character.description);
            if (this.character.modifier != null){
                text += " " + this.character.modifier["description"];
            }
        }
        // Check if the event has an item
        if (this.item != null){
            text = replaceCustomVariables(text, this.item.customVariables);
            text = replaceGlobally(text, "$item_name", `<b title='${this.item.description}'>${this.item.name}</b>`);
            text = replaceGlobally(text, "$item_a", this.item.verbage["a"]);
            text = replaceGlobally(text, "$item_is", this.item.verbage["is"]);
            text = replaceGlobally(text, "$item_desc", this.item.description);
            if (this.item.modifier != null){
                text += " " + this.item.modifier["description"];
            }
        }
        return text;
    }
    _getId() {
        return this.id;
    }
    _getLocations() {
        return this.locations;
    }
    _getCharacters() {
        return this.characters;
    }
    _getItems() {
        return this.items;
    }
}


class Entry {
    constructor(id, time, event) {
        this.id = id;
        this.time = time;
        this.event = event;
    }
    _getTime() {
        return this.time;
    }
    _getId() {
        return this.id;
    }
    _getEvent() {
        return this.event;
    }
}

class Menu {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    _getName() {
        return this.name;
    }
    _getId() {
        return this.id;
    }
}


class Application {
    constructor() {
        // Initialize any properties or variables here
        this.name = "User";
        this.eventlog = [];
        this.modifiers = {};
        this.menus = [
            new Menu("main", "Main Menu"),
            new Menu("firstTime", "First Time Startup"),
            new Menu("journal", "Generate Event"),
            new Menu("settings", "Settings"),
            new Menu("log", "Journal"),
            new Menu("changelog", "Change Log")
        ];
        this.currentMenu = null;
    }

    // Switch to a different menu
    switchMenu(menu) {
        var oldMenu = this.currentMenu;
        this.currentMenu = this.menus[menu];

        // Clear the event text field if we are switching to the event menu
        if (menu == 2){
            var eventText = document.getElementById("generatedEventText");
            eventText.innerHTML = "";
            eventText.display = "none";
        }

        // Regenerate the event log if we are switching to the log menu
        if (menu == 4){
            this.regenerateEventLog();
        }

        // Set the correct div to be visible and hide the old one
        if (oldMenu != null){
            const oldDiv = document.getElementById("menu_"+oldMenu._getId());
            oldDiv.style.display = "none";
        }
        const div = document.getElementById("menu_"+this.currentMenu._getId());
        div.style.display = "block";
            

        // Set the header to the correct menu name
        const header = document.getElementById("menuName");
        header.innerHTML = this.currentMenu._getName();
    }

    // Game startup
    start() {
        this.switchMenu(2);
        
        // Set the app div to be visible
        const div = document.getElementById("app");
        div.style.display = "block";

        // Set the time selector to the TIME array
        const timeSelector = document.getElementById("input_time_select");
        for (var time in TIME){
            var option = document.createElement("option");
            option.text = TIME[time];
            timeSelector.add(option);
        }

        // Set the setting selector to the kets of the EVENTDATA object
        const settingSelector = document.getElementById("input_setting_select");
        for (var setting in EVENTDATA){
            var option = document.createElement("option");
            option.text = setting;
            settingSelector.add(option);
        }

        this.onSettingChange();
    }

    generateEvent() {
        this.selectEvent();
    }

    onSettingChange() {
        // Clear the Character Action select
        const characterActionSelect = document.getElementById("input_action_select");
        characterActionSelect.innerHTML = "";

        // Set the Character Action select to the actions of the selected setting
        var setting = document.getElementById("input_setting_select").value;
        for (var action in EVENTDATA[setting]["characterActions"]){
            var option = document.createElement("option");
            option.text = EVENTDATA[setting]["characterActions"][action];
            characterActionSelect.add(option);
        }

        this.loadModifiers();
    }

    loadModifiers() {
        this.modifiers = {};

        var settingSelect = document.getElementById("input_setting_select");
        var setting = settingSelect.value;

        // get the json data
        var data = EVENTDATA[setting]["modifiers"];
        // Loop through the data and add it to the modifiers dictionary
        for (var modifier in data){
            this.modifiers[modifier] = new Modifier(data[modifier]["name"], data[modifier]["description"]);
        }
    }

    regenerateEventLog() {
        const eventLogOrderedList = document.getElementById("log_list");
        eventLogOrderedList.innerHTML = "";

        for (var entry in this.eventlog){
            var event = this.eventlog[entry]._getEvent();
            var text = `<b>${this.eventlog[entry]._getTime()}</b> - ${event.generateEventText()}`

            var eventListItem = document.createElement("li");
            eventListItem.innerHTML = text;
            eventLogOrderedList.appendChild(eventListItem);

            // display the event (Only displays if on the generated event page) 
            var eventText = document.getElementById("generatedEventText");
            eventText.innerHTML = text;
            
            // dipslay the event div
            eventText.style.display = "block";
        }
    }

    clearLog() {
        this.eventlog = [];
        this.regenerateEventLog();
    }

    generateEventQuery() {
        var eventQuery = {
            "setting":document.getElementById("input_setting_select").value,
            "time":document.getElementById("input_time_select").value,
            "characterAction":document.getElementById("input_action_select").value,
            "generateLocation":document.getElementById("input_location_randomize").checked,
            "generateCharacter":document.getElementById("input_people_randomize").checked,
            "generateItem":document.getElementById("input_items_randomize").checked
        }

        if (document.getElementById("input_time_randomize").checked){
            eventQuery["time"] = TIME[Math.floor(Math.random() * TIME.length)];

            // Set the time selector to the new time
            const timeSelector = document.getElementById("input_time_select");
            for (var time in TIME){
                if (TIME[time] == eventQuery["time"]){
                    timeSelector.selectedIndex = time;
                }
            }
        }

        if (document.getElementById("input_action_randomize").checked){
            var numActions = Object.keys(EVENTDATA[eventQuery["setting"]]["characterActions"]).length;
            var actionId = Math.floor(Math.random() * numActions);
            eventQuery["characterAction"] = EVENTDATA[eventQuery["setting"]]["characterActions"][actionId];

            // Set the action selector to the new action
            const actionSelector = document.getElementById("input_action_select");
            for (var action in EVENTDATA[eventQuery["setting"]]["characterActions"]){
                if (EVENTDATA[eventQuery["setting"]]["characterActions"][action] == eventQuery["characterAction"]){
                    actionSelector.selectedIndex = action;
                }
            }
        }

        console.log(eventQuery);
        return eventQuery;
    }

    selectEvent() {
        var eventQuery = this.generateEventQuery();
        
        // Get all events that have already been used
        var usedEvents = [];
        for (var entry in this.eventlog){
            usedEvents.push(this.eventlog[entry]._getEvent()._getId());
        }

        // Get all events that match the query
        var matchingEvents = [];
        var eventsDisqualifiedDueToUsed = [];
        for (var event in EVENTDATA[eventQuery["setting"]]["events"]){
            var currentEvent = EVENTDATA[eventQuery["setting"]]["events"][event];
            var eventMatches = true;
            if (eventQuery["characterAction"] in currentEvent["characterAction"]){
                eventMatches = false;
            }
            if (!eventQuery["generateLocation"] && currentEvent["locations"] != null && currentEvent["locations"].length >= 1){
                eventMatches = false;
            }
            if (!eventQuery["generateCharacter"] && currentEvent["characters"] != null && currentEvent["characters"].length >= 1){
                eventMatches = false;
            }
            if (!eventQuery["generateItem"] && currentEvent["items"] != null && currentEvent["items"].length >= 1){
                eventMatches = false;
            }

            if (eventMatches){
                if (usedEvents.includes(currentEvent["id"])){
                    eventsDisqualifiedDueToUsed.push(currentEvent);
                }
                else {
                    matchingEvents.push(currentEvent);
                }
            }
        }

        // Check if there are no events that match the query, even if they have been used
        if (matchingEvents.length < 1 && eventsDisqualifiedDueToUsed.length < 1){
            alert("No events match the query!");
            return;
        }

        // Check if there are events that have not yet been used
        if (matchingEvents.length >= 1){
            var event = matchingEvents[Math.floor(Math.random() * matchingEvents.length)];
            
        }
        else {
            // If there are no events that have not yet been used, pick one that has been used
            var event = eventsDisqualifiedDueToUsed[Math.floor(Math.random() * eventsDisqualifiedDueToUsed.length)];
        }
        
        var mods = JSON.parse(JSON.stringify(this.modifiers));
        var newEvent = new Event(event["id"], eventQuery["setting"], event["eventText"], event["locations"], event["characters"], event["items"], event["customVariables"], mods);
        console.log(newEvent);

        // Log the event
        var newEntry = new Entry(this.eventlog.length, eventQuery["time"], newEvent);
        this.eventlog.push(newEntry);
        this.regenerateEventLog();
    }
}

// Create an instance of the Application class
const app = new Application();

// Call the greet function
app.start();
