ServerEvents.recipes(event => {
//cauldron recipes for tier 1 sapling

//ancient sapling aka ashen sapling   
   event.remove({ id: "quark:ancient_sapling" })
    event.custom({
        "type": "enchanted:witch_cauldron",
        "cookingColor": [
            26,
            71,
            35
        ],
        "finalColor": [
            166,
            171,
            36
        ],
        "ingredients": [
            {
                "item": "supplementaries:ash"
            },
            {
                "item": "enchanted:breath_of_the_goddess"
            },
            {
                "item": "naturesaura:gold_leaf"
            },
            {
                "item": "minecraft:lapis_lazuli"
            }
        ],
        "power": 6000,
        "result": {
            "count": 2,
            "item": "quark:ancient_sapling"
        }
    })
    		//menril sapling
    event.remove({ id: "integrateddynamics:menril_sapling" })
    event.custom({
        "type": "enchanted:witch_cauldron",
        "cookingColor": [
            26,
            71,
            35
        ],
        "finalColor": [
            16,
            79,
            172
        ],
        "ingredients": [
            {
                "item": "minecraft:redstone"
            },
            {
                "item": "minecraft:cornflower"
            },
            {
                "item": "regions_unexplored:alpha_leaves"
            },
            {
                "item": "minecraft:quartz"
            }
        ],
        "power": 4000,
        "result": {
            "count": 2,
            "item": "integrateddynamics:menril_sapling"
        }
    })
    event.remove({ id: "regions_unexplored:blackwood_sapling" })
    event.custom({
        "type": "enchanted:witch_cauldron",
        "cookingColor": [
            26,
            71,
            35
        ],
        "finalColor": [
            0,
            0,
            0
        ],
        "ingredients": [
            {
                "item": "minecraft:acacia_sapling"
            },
            {
                "item": "minecraft:black_dye"
            },
            {
                "item": "herbalbrews:dried_black_tea"
            },
            {
                "item": "minecraft:lapis_lazuli"
            }
        ],
        "power": 4000,
        "result": {
            "count": 2,
            "item": "regions_unexplored:blackwood_sapling"
        }
    })
    event.remove({ id: "regions_unexplored:alpha_sapling" })
    event.custom({
        "type": "enchanted:witch_cauldron",
        "cookingColor": [
            26,
            71,
            35
        ],
        "finalColor": [
            97,
            216,
            54
        ],
        "ingredients": [
            {
                "item": "minecraft:oak_sapling"
            },
            {
                "item": "minecraft:dirt"
            },
            {
                "item": "minecraft:cobblestone"
            },
            {
                "item": "minecraft:brown_mushroom"
            },
            {
                "item": "minecraft:quartz"
            }
        ],
        "power": 4000,
        "result": {
            "count": 2,
            "item": "regions_unexplored:alpha_sapling"
        }
    })
    event.remove({ id: "natures_spirit:fir_sapling" })
    event.custom({
        "type": "enchanted:witch_cauldron",
        "cookingColor": [
            26,
            71,
            35
        ],
        "finalColor": [
            41,
            80,
            27
        ],
        "ingredients": [
            {
                "item": "minecraft:spruce_sapling"
            },
            {
                "item": "enchanted:bone_needle"
            },
            {
                "item": "enchanted:hint_of_rebirth"
            },
            {
                "item": "minecraft:lapis_lazuli"
            }
        ],
        "power": 4000,
        "result": {
            "count": 2,
            "item": "natures_spirit:fir_sapling"
        }
    })
    		//mangrove propagule
		event.custom({
        "type": "enchanted:witch_cauldron",
        "cookingColor": [
            26,
            71,
            35
        ],
        "finalColor": [
            121,
            36,
            36
        ],
        "ingredients": [
            {
                "item": "minecraft:cherry_sapling"
            },
            {
                "item": "primalmagick:rock_salt"
            },
            {
                "item": "minecraft:tropical_fish"
            },
            {
                "item": "minecraft:clay"
            }
        ],
        "power": 4000,
        "result": {
            "count": 2,
            "item": "minecraft:mangrove_propagule"
        }
		})
    event.remove({ id: "natures_spirit:willow_sapling" })
    event.custom({
        "type": "enchanted:witch_cauldron",
        "cookingColor": [
            26,
            71,
            35
        ],
        "finalColor": [
            176,
            223,
            204
        ],
        "ingredients": [
            {
                "item": "regions_unexplored:alpha_sapling"
            },
            {
                "item": "minecraft:vine"
            },
            {
                "item": "botania:livingwood_twig"
            },
            {
                "item": "minecraft:amethyst_shard"
            }
        ],
        "power": 5000,
        "result": {
            "count": 2,
            "item": "natures_spirit:willow_sapling"
        }
    })
})