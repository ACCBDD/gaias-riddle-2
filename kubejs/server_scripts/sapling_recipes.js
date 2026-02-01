ServerEvents.recipes(event => {
    //cauldron recipes for tier 1 sapling
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
        "power": 4000,
        "result": {
            "count": 2,
            "item": "quark:ancient_sapling"
        }
    })
    event.remove({ id: "primalmagick:sunwood_sapling" })
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
    event.remove({ id: "primalmagick:moonwood_sapling" })
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

    //tier 2 trees made with ritual of the forest
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "natures_spirit:fir_leaves"
            },
            {
                "item": "enchanted:wood_ash"
            },
            {
                "item": "botania:pixie_dust"
            }
        ],
        "sapling": {
            "item": "minecraft:spruce_sapling"
        },
        "output": {
            "item": "natures_spirit:cedar_sapling"
        },
        "time": 250
    })
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "minecraft:birch_leaves"
            },
            {
                "item": "enchanted:bone_needle"
            },
            {
                "item": "enchanted:icy_needle"
            },
            {
                "item": "minecraft:diamond"
            }
        ],
        "sapling": {
            "item": "natures_spirit:fir_sapling"
        },
        "output": {
            "item": "natures_spirit:larch_sapling"
        },
        "time": 250
    })
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "minecraft:oak_leaves"
            },
            {
                "item": "minecraft:sugar"
            },
            {
                "item": "minecraft:snowball"
            },
            {
                "item": "minecraft:emerald"
            }
        ],
        "sapling": {
            "item": "minecraft:oak_sapling"
        },
        "output": {
            "item": "regions_unexplored:maple_sapling"
        },
        "time": 250
    })
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "minecraft:jungle_leaves"
            },
            {
                "item": "minecraft:bamboo"
            },
            {
                "item": "minecraft:emerald"
            }
        ],
        "sapling": {
            "item": "minecraft:jungle_sapling"
        },
        "output": {
            "item": "regions_unexplored:bamboo_sapling"
        },
        "time": 250
    })
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "enchanted:alder_leaves"
            },
            {
                "item": "enchanted:rowan_berries"
            },
            {
                "item": "minecraft:cyan_dye"
            },
            {
                "item": "botania:pixie_dust"
            }
        ],
        "sapling": {
            "item": "enchanted:rowan_sapling"
        },
        "output": {
            "item": "regions_unexplored:eucalyptus_sapling"
        },
        "time": 250
    })
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "primalmagick:moonwood_leaves"
            },
            {
                "item": "minecraft:light_gray_dye"
            },
            {
                "item": "minecraft:diamond"
            }
        ],
        "sapling": {
            "item": "minecraft:birch_sapling"
        },
        "output": {
            "item": "regions_unexplored:silver_birch_sapling"
        },
        "time": 250
    })
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "primalmagick:sunwood_leaves"
            },
            {
                "item": "naturesaura:gold_leaf"
            },
            {
                "item": "botania:pixie_dust"
            }
        ],
        "sapling": {
            "item": "minecraft:birch_sapling"
        },
        "output": {
            "item": "natures_spirit:aspen_sapling"
        },
        "time": 250
    })
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "natures_spirit:fir_leaves"
            },
            {
                "item": "natures_spirit:paper_lantern"
            },
            {
                "item": "minecraft:diamond"
            }
        ],
        "sapling": {
            "item": "minecraft:spruce_sapling"
        },
        "output": {
            "item": "natures_spirit:sugi_sapling"
        },
        "time": 250
    })
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "minecraft:dark_oak_leaves"
            },
            {
                "item": "enchanted:mandrake_root"
            },
            {
                "item": "botania:pixie_dust"
            }
        ],
        "sapling": {
            "item": "minecraft:jungle_sapling"
        },
        "output": {
            "item": "natures_spirit:mahogany_sapling",
            "count": 4
        },
        "time": 250
    })
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "natures_spirit:fir_leaves"
            },
            {
                "item": "enchanted:bone_needle"
            },
            {
                "item": "enchanted:icy_needle"
            },
            {
                "item": "botania:terrasteel_ingot"
            }
        ],
        "sapling": {
            "item": "minecraft:spruce_sapling"
        },
        "output": {
            "item": "regions_unexplored:pine_sapling"
        },
        "time": 250
    })
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "regions_unexplored:alpha_leaves"
            },
            {
                "item": "minecraft:cactus"
            },
            {
                "item": "minecraft:green_dye"
            },
            {
                "item": "herbalbrews:green_tea_leaf"
            },
            {
                "item": "minecraft:emerald"
            }
        ],
        "sapling": {
            "item": "enchanted:rowan_sapling"
        },
        "output": {
            "item": "natures_spirit:palo_verde_sapling"
        },
        "time": 250
    })
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "regions_unexplored:alpha_leaves"
            },
            {
                "item": "minecraft:sand"
            },
            {
                "item": "minecraft:apple"
            },
            {
                "item": "minecraft:melon_slice"
            },
            {
                "item": "botania:terrasteel_ingot"
            }
        ],
        "sapling": {
            "item": "minecraft:acacia_sapling"
        },
        "output": {
            "item": "natures_spirit:olive_sapling",
            "count": 4
        },
        "time": 250
    })
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "minecraft:acacia_leaves"
            },
            {
                "item": "minecraft:string"
            },
            {
                "item": "minecraft:white_wool"
            },
            {
                "item": "minecraft:honeycomb"
            },
            {
                "item": "minecraft:emerald"
            }
        ],
        "sapling": {
            "item": "minecraft:jungle_sapling"
        },
        "output": {
            "item": "regions_unexplored:kapok_sapling",
            "count": 5
        },
        "time": 250
    })
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "enchanted:hawthorn_leaves"
            },
            {
                "item": "minecraft:sweet_berries"
            },
            {
                "item": "minecraft:sand"
            },
            {
                "item": "minecraft:feather"
            },
            {
                "item": "minecraft:diamond"
            }
        ],
        "sapling": {
            "item": "minecraft:cherry_sapling"
        },
        "output": {
            "item": "naturaldecormod:juniper_sapling"
        },
        "time": 250
    })

    //tier 3 rituals with primal magick
    event.remove({ id: "regions_unexplored:enchanted_birch_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "regions_unexplored:silver_birch_sapling"
            },
            {
                "item": "primalmagick:essence_dust_moon"
            },
            {
                "item": "quark:ancient_fruit"
            },
            {
                "item": "primalmagick:mana_prism"
            }
        ],
        "instability": 2,
        "mana": {
            "earth": 100,
            "moon": 100,
            "sky": 100,
            "sun": 100
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "regions_unexplored:enchanted_birch_sapling"
        }
    })
    event.remove({ id: "regions_unexplored:cypress_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "naturaldecormod:juniper_sapling"
            },
            {
                "item": "primalmagick:essence_dust_sky"
            },
            {
                "item": "naturaldecormod:juniper_berries"
            },
            {
                "item": "botania:keep_ivy"
            }
        ],
        "instability": 2,
        "mana": {
            "sea": 125,
            "sky": 125,
            "sun": 125
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "regions_unexplored:cypress_sapling"
        }
    })
    event.remove({ id: "regions_unexplored:dead_pine_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "regions_unexplored:pine_sapling"
            },
            {
                "item": "primalmagick:essence_dust_infernal"
            },
            {
                "item": "minecraft:dead_bush"
            },
            {
                "item": "minecraft:bone"
            }
        ],
        "instability": 2,
        "mana": {
            "earth": 125,
            "moon": 125,
            "sun": 125
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "regions_unexplored:dead_pine_sapling"
        }
    })
    event.remove({ id: "regions_unexplored:dead_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "regions_unexplored:alpha_sapling"
            },
            {
                "item": "primalmagick:essence_dust_infernal"
            },
            {
                "item": "minecraft:dead_bush"
            },
            {
                "item": "minecraft:rotten_flesh"
            }
        ],
        "instability": 2,
        "mana": {
            "earth": 125,
            "moon": 125,
            "sun": 125
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "regions_unexplored:dead_sapling"
        }
    })
    event.remove({ id: "regions_unexplored:golden_larch_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "regions_unexplored:larch_sapling"
            },
            {
                "item": "primalmagick:essence_dust_sun"
            },
            {
                "item": "minecraft:gold_ingot"
            },
            {
                "item": "naturesaura:gold_leaf"
            }
        ],
        "instability": 2,
        "mana": {
            "earth": 125,
            "sky": 125,
            "sun": 125
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "regions_unexplored:golden_larch_sapling"
        }
    })
    event.remove({ id: "regions_unexplored:redwood_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "regions_unexplored:pine_sapling"
            },
            {
                "item": "primalmagick:essence_dust_sky"
            },
            {
                "item": "minecraft:redstone"
            },
            {
                "item": "botania:redstone_root"
            }
        ],
        "instability": 2,
        "mana": {
            "earth": 125,
            "sky": 125,
            "sun": 125
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "regions_unexplored:redwood_sapling"
        }
    })
    event.remove({ id: "regions_unexplored:socotra_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "regions_unexplored:eucalyptus_sapling"
            },
            {
                "item": "primalmagick:essence_dust_blood"
            },
            {
                "item": "primalmagick:bloody_flesh"
            },
            {
                "item": "enchanted:blood_poppy"
            }
        ],
        "instability": 2,
        "mana": {
            "earth": 125,
            "sky": 125,
            "sun": 125
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "regions_unexplored:socotra_sapling"
        }
    })
    event.remove({ id: "quark:red_blossom_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "minecraft:mangrove_propagule"
            },
            {
                "item": "primalmagick:essence_dust_blood"
            },
            {
                "item": "minecraft:poppy"
            },
            {
                "item": "botania:livingwood_log"
            }
        ],
        "instability": 2,
        "mana": {
            "earth": 125,
            "sky": 125,
            "sun": 125
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "quark:red_blossom_sapling"
        }
    })
    event.remove({ id: "natures_spirit:white_wisteria_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "natures_spirit:willow_sapling"
            },
            {
                "item": "primalmagick:essence_dust_moon"
            },
            {
                "item": "minecraft:lily_of_the_valley"
            },
            {
                "item": "botania:vine_ball"
            }
        ],
        "instability": 2,
        "mana": {
            "earth": 125,
            "moon": 125,
            "sky": 125
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "natures_spirit:white_wisteria_sapling"
        }
    })
    event.remove({ id: "regions_unexplored:magnolia_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "minecraft:cherry_sapling"
            },
            {
                "item": "primalmagick:essence_dust_earth"
            },
            {
                "item": "minecraft:white_tulip"
            },
            {
                "item": "minecraft:iron_ingot"
            }
        ],
        "instability": 2,
        "mana": {
            "earth": 125,
            "moon": 125,
            "sky": 125
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "regions_unexplored:magnolia_sapling"
        }
    })
    event.remove({ id: "regions_unexplored:mauve_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "minecraft:cherry_sapling"
            },
            {
                "item": "primalmagick:essence_dust_earth"
            },
            {
                "item": "naturesaura:ancient_log"
            },
            {
                "item": "botania:magenta_petal"
            }
        ],
        "instability": 2,
        "mana": {
            "earth": 125,
            "moon": 125,
            "sky": 125
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "regions_unexplored:mauve_sapling"
        }
    })
    event.remove({ id: "natures_spirit:ghaf_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "quark:ancient_sapling"
            },
            {
                "item": "primalmagick:essence_dust_sun"
            },
            {
                "item": "minecraft:sand"
            },
            {
                "item": "minecraft:cactus"
            }
        ],
        "instability": 2,
        "mana": {
            "earth": 125,
            "sky": 125,
            "sun": 125
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "natures_spirit:ghaf_sapling"
        }
    })
    event.remove({ id: "natures_spirit:saxaul_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "naturaldecormod:juniper_sapling"
            },
            {
                "item": "primalmagick:essence_dust_sun"
            },
            {
                "item": "minecraft:feather"
            },
            {
                "item": "minecraft:cactus"
            }
        ],
        "instability": 2,
        "mana": {
            "earth": 125,
            "sky": 125,
            "sun": 125
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "natures_spirit:saxaul_sapling"
        }
    })
    event.remove({ id: "regions_unexplored:palm_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "minecraft:jungle_sapling"
            },
            {
                "item": "primalmagick:essence_dust_sea"
            },
            {
                "item": "farmersdelight:straw"
            },
            {
                "item": "botania:vine_ball"
            }
        ],
        "instability": 2,
        "mana": {
            "sea": 125,
            "sky": 125,
            "sun": 125
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "regions_unexplored:palm_sapling"
        }
    })
    event.remove({ id: "regions_unexplored:flowering_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "minecraft:oak_sapling"
            },
            {
                "item": "primalmagick:essence_dust_earth"
            },
            {
                "item": "minecraft:oxeye_daisy"
            },
            {
                "item": "minecraft:cherry_leaves"
            }
        ],
        "instability": 2,
        "mana": {
            "earth": 125,
            "sky": 125,
            "sun": 125
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "regions_unexplored:flowering_sapling"
        }
    })
    event.remove({ id: "regions_unexplored:apple_oak_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "minecraft:oak_sapling"
            },
            {
                "item": "primalmagick:essence_dust_earth"
            },
            {
                "item": "minecraft:apple"
            },
            {
                "item": "vintagedelight:organic_mash"
            }
        ],
        "instability": 2,
        "mana": {
            "earth": 125,
            "sky": 125,
            "sun": 125
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "regions_unexplored:apple_oak_sapling"
        }
    })
    event.remove({ id: "regions_unexplored:baobab_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "natures_spirit:olive_sapling"
            },
            {
                "item": "primalmagick:essence_dust_sun"
            },
            {
                "item": "quark:ancient_fruit"
            },
            {
                "item": "minecraft:leather"
            }
        ],
        "instability": 2,
        "mana": {
            "earth": 100,
            "moon": 100,
            "sky": 100,
            "sun": 100
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "regions_unexplored:baobab_sapling",
            "count": 4
        }
    })
    event.remove({ id: "naturaldecormod:monkey_puzzle_cone" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "regions_unexplored:kapok_sapling"
            },
            {
                "item": "primalmagick:essence_dust_sun"
            },
            {
                "item": "regions_unexplored:pine_leaves"
            },
            {
                "item": "botania:livingwood_twig"
            }
        ],
        "instability": 2,
        "mana": {
            "earth": 125,
            "sky": 125,
            "sun": 125
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "naturaldecormod:monkey_puzzle_cone"
        }
    })
    event.remove({ id: "regions_unexplored:brimwood_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "natures_spirit:mahogany_sapling"
            },
            {
                "item": "primalmagick:essence_dust_infernal"
            },
            {
                "item": "minecraft:magma_block"
            },
            {
                "item": "minecraft:fire_charge"
            }
        ],
        "instability": 2,
        "mana": {
            "earth": 125,
            "sky": 125,
            "sun": 125
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "regions_unexplored:brimwood_sapling"
        }
    })
    event.remove({ id: "regions_unexplored:cobalt_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "integrateddynamics:menril_sapling"
            },
            {
                "item": "primalmagick:essence_dust_sea"
            },
            {
                "item": "minecraft:lapis_lazuli"
            },
            {
                "item": "botania:blue_petal"
            }
        ],
        "instability": 2,
        "mana": {
            "moon": 125,
            "sea": 125,
            "sky": 125
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "regions_unexplored:cobalt_sapling"
        }
    })
    event.remove({ id: "natures_spirit:coconut_sprout" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "minecraft:jungle_sapling"
            },
            {
                "item": "primalmagick:essence_dust_sun"
            },
            {
                "item": "enchanted:purified_milk"
            },
            {
                "item": "botania:brown_petal"
            }
        ],
        "instability": 2,
        "mana": {
            "sea": 125,
            "sky": 125,
            "sun": 125
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "natures_spirit:coconut_sprout"
        }
    })
    event.remove({ id: "natures_spirit:joshua_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "natures_spirit:olive_sapling"
            },
            {
                "item": "primalmagick:essence_dust_sun"
            },
            {
                "item": "minecraft:sand"
            },
            {
                "item": "minecraft:cactus"
            }
        ],
        "instability": 2,
        "mana": {
            "earth": 125,
            "sky": 125,
            "sun": 125
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:incense_brazier"
            },
            {
                "block": "primalmagick:bloodletter"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "natures_spirit:joshua_sapling"
        }
    })
})