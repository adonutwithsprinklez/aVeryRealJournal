
const FANTASYEVENTS = {
    "characterActions":[
        "Walking",
        "Fighting",
        "Resting"
    ],
    "events":[
        {
            "id":0,
            "characterAction":["Walking"],
            "eventText":"You are walking through $location_a $location_name when you see $character_a $character_name carrying $item_a $item_name.",
            "locations":["forest","forest_spooky"],
            "characters":["elf", "dwarf", "human"],
            "items":["sword","axe","bow", "bag_of_gold", "daggers", "gemstone"]
        },
        {
            "id":1,
            "characterAction":["Walking"],
            "eventText":"You are walking through a $location_name when you see $character_a $character_name.",
            "locations":["forest","forest_spooky"],
            "characters":["elf", "dwarf", "human", "wolf", "fox"]
        },
        {
            "id":2,
            "characterAction":["Resting"],
            "eventText":"You are resting in your camp when you see $character_a $character_name carrying $item_a $item_name come towards you.",
            "characters":["elf", "dwarf", "human"],
            "items":["sword","axe","bow", "bag_of_gold", "daggers", "gemstone"]
        },
        {
            "id":3,
            "characterAction":["Walking"],
            "eventText":"As you traverse $location_a $location_name you come across $item_a $item_name.",
            "locations":["forest","forest_spooky","stream"],
            "items":["sword","axe","bow", "daggers", "bag_of_gold", "leather_armor", "chainmail_armor", "gemstone"]
        },
        {
            "id":4,
            "characterAction":["Walking"],
            "eventText":"You trek along $location_a $location_name. It takes you a while, but you eventually make it past.",
            "locations":["forest","forest_spooky","stream"]
        },
        {
            "id":5,
            "characterAction":["Walking"],
            "eventText":"As you continue your journey, you notice $item_a $item_name on the ground.",
            "items":["sword","axe","bow", "daggers", "bag_of_gold", "leather_armor", "chainmail_armor", "gemstone"]
        },
        {
            "id":6,
            "characterAction":["Walking"],
            "eventText":"As you walk, $character_a $character_name approaches you.",
            "characters":["elf", "dwarf", "human", "wolf", "fox", "bear"]
        },
        {
            "id":7,
            "characterAction":["Walking"],
            "eventText":"As you walk, $character_a $character_name passes you.",
            "characters":["elf", "dwarf", "human", "fox"]
        },
        {
            "id":8,
            "characterAction":["Walking"],
            "eventText":"You remember hearing that the $location_name $location_is a dangerous place. As you walk, you see $character_a $character_name clearly injured and lying on the ground. The $character_name $character_is tightly gripping $item_a $item_name.",
            "locations":["forest","forest_spooky"],
            "characters":["elf", "dwarf", "human"],
            "items":["sword","axe","bow", "daggers", "bag_of_gold", "gemstone"]
        },
        {
            "id":9,
            "characterAction":["Fighting"],
            "eventText":"You remember hearing that the $location_name $location_is a dangerous place. As you walk, you can see $character_a $character_name attempting hide behind some trees. The $character_name $character_is tightly gripping $item_a $item_name.",
            "locations":["forest","forest_spooky"],
            "characters":["elf", "dwarf", "human"],
            "items":["sword","axe","bow", "daggers"]
        },
        {
            "id":10,
            "characterAction":["Resting"],
            "eventText":"As you relax at your $location_name, a rustling in the leaves beside you alerts you to $character_a $character_name. The $character_name $character_is holding $item_a $item_name in $character_their hand.",
            "locations":["yourcampsite"],
            "characters":["elf", "dwarf", "human"],
            "items":["sword","axe","bow", "bag_of_gold", "daggers", "gemstone"]
        },
        {
            "id":11,
            "characterAction":["Resting"],
            "eventText":"As you fall asleep at your $location_name, you dream of $character_a $character_name.",
            "locations":["yourcampsite"],
            "characters":["elf", "dwarf", "human", "wolf", "fox", "bear"]
        },
        {
            "id":12,
            "characterAction":["Resting"],
            "eventText":"You slowly fall asleep at your $location_name. You rest peacefully, thinking about what lies ahead.",
            "locations":["yourcampsite"]
        },
        {
            "id":13,
            "characterAction":["Walking", "Resting"],
            "eventText":"You pause to take a break, when out of the corner of your eye you see $character_a $character_name carrying $item_a $item_name come towards you.",
            "characters":["elf", "dwarf", "human"],
            "items":["sword","axe","bow", "bag_of_gold", "daggers", "gemstone"]
        },
        {
            "id":14,
            "characterAction":["Fighting"],
            "eventText":"Within the $location_name, you see $character_a $character_name angrily walking towards you. The $character_name's eyes are filled with rage.",
            "locations":["forest","forest_spooky"],
            "characters":["elf", "dwarf", "human", "wolf"]
        },
        {
            "id":15,
            "characterAction":["Fighting"],
            "eventText":"You pause as you spot $item_a lone $item_name on the ground. As you reach for it, you hear multiple somethings suddenly come out of the $location_name. It was a trap!",
            "locations":["forest","forest_spooky"],
            "items":["sword","axe","bow", "daggers", "bag_of_gold", "gemstone"]
        },
        {
            "id":16,
            "characterAction":["Fighting"],
            "eventText":"In the distance you spot $character_a $character_name eyeing you intently. The $character_name is holding $item_a $item_name and looks ready to attack.",
            "characters":["elf", "dwarf", "human"],
            "items":["sword","axe","bow", "daggers"]
        },
        {
            "id":17,
            "characterAction":["Fighting"],
            "eventText":"There's the sound of sticks snapping behind you. As you turn around in the $location_name, you see $character_a $character_name ready to attack.",
            "locations":["forest","forest_spooky"],
            "characters":["wolf", "bear"]
        },
        {
            "id":18,
            "characterAction":["Fighting"],
            "eventText":"You feel the tip of $item_a $item_name press against your back. You don't know who is behind you, but you can tell they are ready to kill you.",
            "items":["sword","axe", "daggers"]
        },
        {
            "id":19,
            "characterAction":["Fighting"],
            "eventText":"Out of the corner of your eye you catch $character_a $character_name sprinting madly at you. You ready yourself as $character_they quickly approaches.",
            "characters":["elf", "dwarf", "human"]
        },
        {
            "id":20,
            "characterAction":["Fighting"],
            "eventText":"The sound of a snarling beast alerts you to the $character_name ready to attack.",
            "characters":["wolf", "bear"]
        },
        {
            "id":21,
            "characterAction":["Fighting"],
            "eventText":"It is hard to get through $location_a $location_name without coming across something ready to attack you. As you move forward through the $location_name, you realize you're being stalked. One can only guess what is stalking you, but you know deep within that it is not friendly.",
            "locations":["forest","forest_spooky","stream"],
        }
    ],
    "locations":{
        "forest":{
            "name":["Forest"],
            "verbage":{ "a":"a", "is":"is" },
            "description":[
                "A forest with $custom_trees and a lot of undergrowth. The $custom_trees are beautiful and the air is fresh."
            ],
            "customVariables":{
                "trees":["tall trees", "short trees"]
            },
            "alwaysModifiers":true,
            "modifiers":[ "open_forest_location", "dense_forest_location", "flowery_forest_location", "fruity_forest_location", "colorful_forest_location", "windy_forest_location" ]
        },
        "forest_spooky":{
            "name":["Deadly Forest", "Spooky Forest", "Haunted Forest", "Dark Forest", "Dead Forest", "Scary Forest", "Mysterious Forest"],
            "verbage":{ "a":"a", "is":"is" },
            "description":[
                "This $location_name is filled with tall trees and a lot of undergrowth. The trees are dead and the air is still.",
                "The $location_name is worrisome. You feel like you are being watched."
            ],
            "alwaysModifiers":true,
            "modifiers":[ "dense_forest_location", "frigid_spooky_woods", "hot_spooky_woods", "humid_spooky_woods" ]
        },
        "yourcampsite":{
            "name":["Campsite"],
            "verbage":{ "a":"a", "is":"is" },
            "description":[
                "A small campsite with a fire pit and a few logs to sit on.",
                "A tent sits in the middle of your $location_name. A fire pit is nearby with a rock to sit on.",
                "A small fire burns in the middle of your $location_name. A tent you set up is nearby."
            ],
            "alwaysModifiers":false,
            "modifiers":[ "warm_camp_location", "cold_camp_location", "badWeather_camp_location", "goodWeather_camp_Location" ]
        },
        "stream":{
            "name":["Stream", "River", "Creek", "Brook"],
            "verbage":{ "a":"a", "is":"is" },
            "description":[
                "A small stream with clear water."
            ],
            "alwaysModifiers":false,
            "modifiers":[ "warm_camp_location", "cold_camp_location", "badWeather_camp_location", "goodWeather_camp_Location", "humid_spooky_woods", "flowery_forest_location" ]
        }
    },
    "characters":{
        "elf":{
            "name":["Elf"],
            "verbage":{ "a":"an", "they":"they", "them":"them", "is":"is", "their":"their" },
            "description":[
                "A tall, slender humanoid with pointy ears."
            ],
            "alwaysModifiers":false,
            "modifiers":["mean_character","nice_character","stout_character","skinny_character","muscular_character","fat_character","tall_character","short_character","fair_character","dark_character"]
        },
        "dwarf":{
            "name":["Dwarf"],
            "verbage":{ "a":"a", "they":"they", "them":"them", "is":"is", "their":"their" },
            "description":[
                "A short, stout humanoid."
            ],
            "alwaysModifiers":false,
            "modifiers":["mean_character","nice_character","stout_character","skinny_character","muscular_character","fat_character","tall_character","short_character","fair_character","dark_character"]
        },
        "human":{
            "name":["Human", "Man", "Woman"],
            "verbage":{ "a":"a", "they":"they", "them":"them", "is":"is", "their":"their" },
            "description":[
                "A normal looking human."
            ],
            "alwaysModifiers":false,
            "modifiers":["mean_character","nice_character","stout_character","skinny_character","muscular_character","fat_character","tall_character","short_character","fair_character","dark_character"]
        },
        "wolf":{
            "name":["Wolf", "Gray Wolf", "Black Wolf", "White Wolf"],
            "verbage":{ "a":"a", "they":"it", "them":"it", "is":"is", "their":"its" },
            "description":[
                "A large wolf."
            ],
            "alwaysModifiers":true,
            "modifiers":[ "large_character", "small_character", "scarred_character", "injured_character", "healthy_character", "feral_character" ]
        },
        "fox":{
            "name":["Fox", "Gray Fox", "Red Fox", "White Fox", "Orange Fox"],
            "verbage":{ "a":"a", "they":"it", "them":"it", "is":"is", "their":"its" },
            "description":[
                "A small fox."
            ],
            "alwaysModifiers":true,
            "modifiers":["large_character","small_character","scarred_character","injured_character","healthy_character"]
        },
        "bear":{
            "name":["Bear", "Grizzly Bear", "Black Bear", "Polar Bear"],
            "verbage":{ "a":"a", "they":"it", "them":"it", "is":"is", "their":"its" },
            "description":[
                "A large bear."
            ],
            "alwaysModifiers":true,
            "modifiers":["large_character","small_character","scarred_character","injured_character","healthy_character", "furry_bear_character", "fluffy_bear_character", "massive_character"]
        },
        "dragon":{
            "name":["Dragon", "Red Dragon", "Blue Dragon", "Green Dragon", "Black Dragon", "White Dragon"],
            "verbage":{ "a":"a", "they":"it", "them":"it", "is":"is", "their":"its" },
            "description":[
                "A massive dragon with shining scales."
            ],
            "alwaysModifiers":true,
            "modifiers":["large_character","small_character","scarred_character","injured_character","healthy_character", "massive_character"]
        }
    },
    "items":{
        "sword":{
            "name":["Sword", "Longsword", "Shortsword", "Broadsword"],
            "verbage":{ "a":"a", "is":"is" },
            "description":[
                "A long, sharp blade."
            ],
            "alwaysModifiers":true,
            "modifiers":["sharp_item","dull_item","large_item","small_item", "sturdy_item", "broken_item", "shiny_item", "old_item", "new_item"]
        },
        "axe":{
            "name":["Axe"],
            "verbage":{ "a":"an", "is":"is" },
            "description":[ "A large heavy looking $item_name." ],
            "alwaysModifiers":true,
            "modifiers":["large_item","small_item","sharp_item","dull_item","heavy_item","light_item","engraved_item"]
        },
        "daggers":{
            "name":["Daggers"],
            "verbage":{ "a":"some", "is":"are" },
            "description":[ "A set of small, sharp $item_name.", "A pair of small, sharp $item_name." ],
            "alwaysModifiers":true,
            "modifiers":["sharp_item","small_item", "sturdy_item", "broken_item", "shiny_item", "old_item", "new_item"]
        },
        "bow":{
            "name":["Bow"],
            "verbage":{ "a":"a", "is":"is" },
            "description":["A tall, well crafted bow."],
            "alwaysModifiers":false,
            "modifiers":["light_item", "broken_item", "new_item", "old_item", "sturdy_item"]
        },
        "bag_of_gold":{
            "name":["Bag of Gold", "Gold Bag", "Gold Pouch"],
            "verbage":{ "a":"a", "is":"is" },
            "description":["A small bag filled with gold coins.", "A small pouch filled with gold coins."],
            "alwaysModifiers":false,
            "modifiers":["large_item","small_item","heavy_item","light_item"]
        },
        "leather_armor":{
            "name":["Leather Armor", "Leather Tunic", "Leather Vest", "Leather Cap"],
            "verbage":{ "a":"a", "is":"is" },
            "description":["A set of leather armor."],
            "alwaysModifiers":false,
            "modifiers":["large_item","small_item","heavy_item","light_item"]
        },
        "chainmail_armor":{
            "name":["Chainmail Armor", "Chainmail Tunic", "Chainmail Vest"],
            "verbage":{ "a":"a", "is":"is" },
            "description":["A set of chainmail armor."],
            "alwaysModifiers":false,
            "modifiers":["large_item","small_item","heavy_item","light_item", "sturdy_item", "shiny_item", "old_item", "new_item", "rusty_item"]
        },
        "gemstone":{
            "name":["Gemstone", "Ruby", "Sapphire", "Emerald", "Diamond", "Topaz", "Amethyst", "Opal", "Garnet", "Aquamarine", "Pearl", "Jade", "Lapis Lazuli", "Citrine", "Peridot", "Turquoise", "Moonstone", "Sunstone", "Bloodstone", "Malachite", "Agate", "Onyx", "Coral", "Quartz", "Jasper", "Hematite", "Carnelian", "Tiger's Eye", "Aventurine", "Amazonite", "Labradorite", "Fluorite", "Obsidian", "Rhodochrosite", "Rhodonite", "Sodalite", "Unakite", "Howlite", "Larimar", "Charoite", "Kyanite", "Chrysocolla", "Chrysoprase", "Lepidolite", "Moldavite", "Nuummite", "Pietersite", "Prehnite", "Seraphinite", "Septarian", "Shungite", "Stichtite", "Tanzanite", "Zoisite", "Apatite", "Cavansite", "Kunzite", "Hiddenite", "Danburite", "Phenacite", "Petalite", "Scolecite", "Apophyllite", "Heulandite", "Stilbite", "Selenite", "Celestite", "Angelite", "Aragonite", "Calcite", "Dolomite", "Magnesite", "Pyrite", "Galena", "Sphalerite", "Chalcopyrite", "Bornite", "Covellite", "Azurite", "Malachite", "Turquoise", "Chrysocolla", "Larimar"],
            "verbage":{ "a":"a", "is":"is" },
            "description":["A small gemstone."],
            "alwaysModifiers":false,
            "modifiers":["large_item","small_item","heavy_item","light_item", "shiny_item"]
        }
    },
    "modifiers":{
        "open_forest_location": { "name":"Open", "description":"The $location_name is very open, making it easy to see through the trees." },
        "dense_forest_location": { "name":"Dense", "description":"The $location_name is very dense, making it hard to see through the trees." },
        "flowery_forest_location": { "name":"Flowery", "description":"The $location_name is filled with flowers." },
        "fruity_forest_location": { "name":"Fruity", "description":"The $location_name is filled with fruit trees." },
        "colorful_forest_location": { "name":"Colorful", "description":"The $location_name is filled with colorful flowers and trees." },
        "windy_forest_location": { "name":"Windy", "description":"The $location_name is extremely windy." },
        "warm_camp_location": { "name":"Warm", "description":"The $location_name is warm and inviting." },
        "cold_camp_location": { "name":"Cold", "description":"The $location_name is cold and uninviting." },
        "badWeather_camp_location": { "name":"Bad Weather", "description":"The $location_name is cold and wet. The wind is strong and it continues to drizzle as dark clouds float overhead." },
        "goodWeather_camp_Location": { "name":"Good Weather", "description":"The $location_name is warm and dry. The sun is shining in a cloudless sky and there is a light breeze." },
        "frigid_spooky_woods": { "name":"Frigid", "description":"Despite the $location_name having still air, you still feel a chill as you progress." },
        "hot_spooky_woods": { "name":"Hot", "description":"The $location_name's stale air causes the heat to build, making you feel hot." },
        "humid_spooky_woods": { "name":"Humid", "description":"The $location_name is humid and water seems to stick to your skin. It is a gross and uncomfortable feeling." },

        "large_character": { "name":"Large", "description":"The $character_name $character_is very large." },
        "small_character": { "name":"Small", "description":"The $character_name $character_is very small." },
        "scarred_character": { "name":"Scarred", "description":"The $character_name has patches of fur missing where massive scars sit." },
        "injured_character": { "name":"Injured", "description":"The $character_name has a limp and looks injured." },
        "healthy_character": { "name":"Healthy", "description":"The $character_name looks healthy and strong." },
        "feral_character": { "name":"Feral", "description":"The $character_name snarls and growls at you wildly." },
        "tall_character": { "name":"Tall", "description":"The $character_name $character_is very tall." },
        "short_character": { "name":"Short", "description":"The $character_name $character_is very short." },
        "fair_character": { "name":"Fair", "description":"The $character_name $character_is very fair skinned." },
        "dark_character": { "name":"Dark", "description":"The $character_name $character_is very dark skinned." },
        "mean_character": { "name":"Mean", "description":"The $character_name does not have a welcoming look to them." },
        "nice_character": { "name":"Nice", "description":"The $character_name has an inviting look to them." },
        "stout_character": { "name":"Stout", "description":"The $character_name $character_is very stout." },
        "skinny_character": { "name":"Skinny", "description":"The $character_name $character_is very skinny, almost sickly looking." },
        "muscular_character": { "name":"Muscular", "description":"The $character_name $character_is very muscular." },
        "fat_character": { "name":"Fat", "description":"The $character_name $character_is very fat and round." },
        "furry_bear_character": { "name":"Furry", "description":"The $character_name $character_is very furry." },
        "fluffy_bear_character": { "name":"Fluffy", "description":"The $character_name $character_is very fluffy." },
        "massive_character": { "name":"Massive", "description":"The $character_name $character_is absolutely massive, appearing more like a mountaint than $character_a $character_name." },

        "large_item": { "name":"Large", "description":"The $item_name $item_is very large." },
        "small_item": { "name":"Small", "description":"The $item_name $item_is very small." },
        "sharp_item": { "name":"Sharp", "description":"The $item_name $item_is very sharp." },
        "dull_item": { "name":"Dull", "description":"The $item_name $item_is very dull." },
        "heavy_item": { "name":"Heavy", "description":"The $item_name appears to be very heavy." },
        "light_item": { "name":"Light", "description":"The $item_name looks very light and easily wielded."},
        "engraved_item": { "name":"Engraved", "description":"The $item_name has intricate engravings on it."},
        "sturdy_item": { "name":"Sturdy", "description":"The $item_name looks like it could take a beating." },
        "broken_item": { "name":"Broken", "description":"The $item_name looks broken." },
        "shiny_item": { "name":"Shiny", "description":"The $item_name gleams in the light as you examine it." },
        "old_item": { "name":"Old", "description":"The $item_name looks old and worn." },
        "new_item": { "name":"New", "description":"The $item_name looks brand new." },
        "rusty_item": { "name":"Rusty", "description":"The $item_name looks rusty and old." }
    }
}

const EVENTDATA = {
    "Fantasy":FANTASYEVENTS
}