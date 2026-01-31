ServerEvents.recipes(event => {
    //cauldron recipes for tier 1 sapling
    event.remove({id: "quark:ancient_sapling"})
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
        "power": 4000,
        "result": {
            "count": 2,
            "item": "quark:ancient_sapling"
        }
    })
    event.remove({id: "primalmagick:sunwood_sapling"})
    event.custom({
        "type": "enchanted:witch_cauldron",
        "cookingColor": [
            26,
            71,
            35
        ],
        "finalColor": [
            223,
            181,
            42
        ],
        "ingredients": [
            {
                "item": "primalmagick:essence_dust_sun"
            },
            {
                "item": "regions_unexplored:alpha_sapling"
            },
            {
                "item": "minecraft:gold_ingot"
            },
            {
                "item": "minecraft:lapis_lazuli"
            }
        ],
        "power": 4000,
        "result": {
            "count": 2,
            "item": "primalmagick:sunwood_sapling"
        }
    })
    event.remove({id: "primalmagick:moonwood_sapling"})
    event.custom({
        "type": "enchanted:witch_cauldron",
        "cookingColor": [
            26,
            71,
            35
        ],
        "finalColor": [
            144,
            177,
            255
        ],
        "ingredients": [
            {
                "item": "primalmagick:essence_dust_moon"
            },
            {
                "item": "regions_unexplored:alpha_sapling"
            },
            {
                "item": "minecraft:iron_ingot"
            },
            {
                "item": "minecraft:lapis_lazuli"
            }
        ],
        "power": 4000,
        "result": {
            "count": 2,
            "item": "primalmagick:moonwood_sapling"
        }
    })
    event.remove({id: "integrateddynamics:menril_sapling"})
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
                "item": "minecraft:dark_oak_sapling"
            },
            {
                "item": "minecraft:lapis_lazuli"
            }
        ],
        "power": 4000,
        "result": {
            "count": 2,
            "item": "integrateddynamics:menril_sapling"
        }
    })
    event.remove({id: "regions_unexplored:blackwood_sapling"})
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
    event.remove({id: "regions_unexplored:alpha_sapling"})
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
                "item": "minecraft:gunpowder"
            },
            {
                "item": "minecraft:lapis_lazuli"
            }
        ],
        "power": 4000,
        "result": {
            "count": 2,
            "item": "regions_unexplored:alpha_sapling"
        }
    })
    event.remove({id: "natures_spirit:fir_sapling"})
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
    event.remove({id: "natures_spirit:willow_sapling"})
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
                "item": "enchanted:water_artichoke"
            },
            {
                "item": "minecraft:vine"
            },
            {
                "item": "botania:livingwood_twig"
            },
            {
                "item": "minecraft:lapis_lazuli"
            }
        ],
        "power": 4000,
        "result": {
            "count": 2,
            "item": "natures_spirit:willow_sapling"
        }
    })
})