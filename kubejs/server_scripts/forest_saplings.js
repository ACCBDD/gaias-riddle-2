ServerEvents.recipes(event => {
	event.remove({id: "primalmagick:sunwood_sapling"})
      event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "primalmagick:essence_dust_sun"
            },
            {
                "item": "minecraft:gold_ingot"
            },
            {
                "item": "naturesaura:gold_leaf"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "sapling": {
            "item": "minecraft:birch_sapling"
        },
        "output": {
            "item": "primalmagick:sunwood_sapling"
        },
        "time": 250
    })
	   event.remove({id: "primalmagick:moonwood_sapling"})
      event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "primalmagick:essence_dust_moon"
            },
            {
                "item": "minecraft:iron_ingot"
            },
            {
                "item": "naturesaura:gold_leaf"
            },
            {
                "item": "minecraft:egg"
            }
        ],
        "sapling": {
            "item": "minecraft:birch_sapling"
        },
        "output": {
            "item": "primalmagick:moonwood_sapling"
        },
        "time": 250
    })
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "quark:ancient_leaves"
            },
            {
                "item": "enchanted:wood_ash"
            },
			{
				"item": "naturesaura:gold_leaf"
			},
            {
                "item": "botania:quartz_mana"
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
	  event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "botania:vine_ball"
            },
            {
                "item": "minecraft:sand"
            },
            {
                "item": "primalmagick:essence_shard_sea"
            },
            {
                "item": "naturesaura:gold_leaf"
            }
        ],
        "sapling": {
            "item": "minecraft:jungle_sapling"
        },
        "output": {
            "item": "regions_unexplored:palm_sapling"
        },
        "time": 250
    })
		  event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "regions_unexplored:redwood_leaves"
            },
            {
                "item": "natures_spirit:joshua_sapling"
            },
            {
                "item": "minecraft:oak_sapling"
            },
            {
                "item": "primalmagick:ambrosia_greater_sun"
            },
			{
                "item": "primalmagick:essence_dust_sun"
            }
        ],
        "sapling": {
            "item": "minecraft:acacia_sapling"
        },
        "output": {
            "item": "natures_spirit:ghaf_sapling"
        },
        "time": 250
    })
})