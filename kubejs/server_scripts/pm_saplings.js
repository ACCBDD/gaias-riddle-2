ServerEvents.recipes(event => {
    //tier 3 rituals with primal magick
	//enchanted birch
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
	//cypress sapling
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
	//dead pine sapling
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
	//dead sapling
    event.remove({ id: "regions_unexplored:dead_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "regions_unexplored:alpha_sapling"
            },
            {
                "item": "primalmagick:essence_shard_infernal"
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
            "earth": 100,
            "blood": 100,
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
                "block": "primalmagick:ritual_lectern"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "regions_unexplored:dead_sapling"
        }
    })
	//golden larch sapling
    event.remove({ id: "regions_unexplored:golden_larch_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "natures_spirit:larch_sapling"
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
	//redwood sapling
    event.remove({ id: "regions_unexplored:redwood_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "regions_unexplored:pine_sapling"
            },
            {
                "item": "primalmagick:essence_shard_sky"
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
	//socotra sapling
    event.remove({ id: "regions_unexplored:socotra_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "regions_unexplored:dead_sapling"
            },
            {
                "item": "primalmagick:essence_shard_blood"
            },
			{
				"item": "regions_unexplored:magnolia_sapling"
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
            "infernal": 125,
            "blood": 125
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
                "block": "primalmagick:ritual_bell"
            },
			{
				"block": "primalmagick:ritual_bell"
			}
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "regions_unexplored:socotra_sapling"
        }
    })
	//red blossom sapling
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
	//white wisteria sapling
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
	//magnolia sapling
    event.remove({ id: "regions_unexplored:magnolia_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "minecraft:cherry_sapling"
            },
            {
                "item": "primalmagick:essence_shard_earth"
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
            "earth": 100,
            "moon": 100,
            "sky": 100
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
                "block": "primalmagick:ritual_lectern"
            },
        ],
        "research": "MASTER_RITUAL",
        "result": {
            "item": "regions_unexplored:magnolia_sapling"
        }
    })
	//mauve sapling
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
//saxaul sapling
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
//flowering sapling
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
	//apple oak sapling
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
	//baobab sapling
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
	//monkey puzzle
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
	//brimwood sapling
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
	//cobalt sapling
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
	//coconut sprout
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
	//joshua sapling
    event.remove({ id: "natures_spirit:joshua_sapling" })
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "natures_spirit:olive_sapling"
            },
            {
                "item": "primalmagick:essence_shard_sun"
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