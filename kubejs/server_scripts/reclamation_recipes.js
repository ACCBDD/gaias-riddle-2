ServerEvents.recipes(event => {
    //dead wood recipes
    event.shapeless('4x kubejs:scrap_wood', [
        'kubejs:dead_log'
    ])
    event.shaped('kubejs:flimsy_planks', [
        'AA',
        'AA'
    ], {
        A: 'kubejs:scrap_wood'
    })
    event.shaped('minecraft:chest', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: 'kubejs:flimsy_planks'
    })

    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": "kubejs:dead_log"
            }
        ],
        "result": [
            {
                "item": "kubejs:scrap_wood",
                "count": 8
            },
            {
                "chance": 0.5,
                "item": "kubejs:scrap_wood",
                "count": 2
            },
            {
                "chance": 0.15,
                "item": "minecraft:charcoal",
                "count": 1
            }
        ],
        "tool": {
            "type": "farmersdelight:tool_action",
            "action": "axe_dig"
        }
    });

    event.remove({ id: 'minecraft:coarse_dirt' });
    event.shapeless('2x minecraft:coarse_dirt', [
        '2x minecraft:dirt',
        '2x minecraft:gravel'
    ])

    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": "minecraft:cut_copper"
            }
        ],
        "result": [
            {
                "item": "minecraft:copper_ingot",
                "count": 6
            },
            {
                "chance": 0.75,
                "item": "minecraft:copper_ingot",
                "count": 2
            },
            {
                "chance": 0.5,
                "item": "minecraft:copper_ingot"
            }
        ],
        "tool": {
            "type": "farmersdelight:tool_action",
            "action": "pickaxe_dig"
        }
    })

    event.shaped('minecraft:bucket', [
        'A A',
        'DAD',
        '   '
    ], {
        A: 'minecraft:copper_ingot',
        D: 'minecraft:clay_ball'
    })

    event.shapeless('1x kubejs:scrap_wood', [
        '2x minecraft:stick'
    ])

    event.shaped('minecraft:oak_fence', [
        'STS',
        'STS',
        '   '
    ], {
        S: 'kubejs:flimsy_planks',
        T: 'minecraft:stick'
    })

    //pasture seeds through ritual
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "minecraft:hay_block"
            },
            {
                "tag": "forge:seeds"
            },
            {
                "item": "enchanted:hint_of_rebirth"
            },
            {
                "item": "enchanted:breath_of_the_goddess"
            }
        ],
        "sapling": {
            "item": "minecraft:birch_sapling"
        },
        "output": {
            "item": "botania:grass_seeds"
        },
        "time": 250
    })

    event.shaped('minecraft:oak_fence', [
        'CBC',
        'BGB',
        'CBC'
    ], {
        B: 'minecraft:clay_ball',
        C: 'minecraft:copper_ingot',
        G: 'minecraft:glass'
    })

    event.remove({ id: 'ceramics:unfired_clay_bucket' })
    event.remove({ id: 'ceramics:empty_clay_bucket_kiln' })
    event.remove({ id: 'ceramics:empty_clay_bucket_smelting' })

    //lapis sulfur
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "primalmagick:essence_shard_sea"
            },
            {
                "item": "natures_spirit:willow_sapling"
            },
            {
                "item": "minecraft:blue_dye"
            },
            {
                "item": "minecraft:blue_dye"
            },
            {
                "item": "minecraft:blue_dye"
            }
        ],
        "instability": 3,
        "mana": {
            "earth": 50,
            "sea": 50,
            "blood": 50
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "tag": "primalmagick:ritual_candles"
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
            "item": "theurgy:alchemical_sulfur_lapis",
            "nbt": {
                "theurgy:sulfur.source.id": "#forge:gems/lapis"
            }
        }
    })

    event.shapeless('2x regions_unexplored:cobalt_nylium', [
        '2x minecraft:blackstone',
        '1x minecraft:blue_dye',
        '1x #forge:seeds'
    ])

    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "botania:alchemy_catalyst"
        },
        "group": "reclamation:berry_cycle",
        "input": {
            "item": "minecraft:tube_coral"
        },
        "mana": 240,
        "output": {
            "item": "minecraft:brain_coral"
        }
    })
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "botania:alchemy_catalyst"
        },
        "group": "reclamation:berry_cycle",
        "input": {
            "item": "minecraft:brain_coral"
        },
        "mana": 240,
        "output": {
            "item": "minecraft:bubble_coral"
        }
    })
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "botania:alchemy_catalyst"
        },
        "group": "reclamation:berry_cycle",
        "input": {
            "item": "minecraft:bubble_coral"
        },
        "mana": 240,
        "output": {
            "item": "minecraft:fire_coral"
        }
    })
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "botania:alchemy_catalyst"
        },
        "group": "reclamation:berry_cycle",
        "input": {
            "item": "minecraft:fire_coral"
        },
        "mana": 240,
        "output": {
            "item": "minecraft:horn_coral"
        }
    })
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "botania:alchemy_catalyst"
        },
        "group": "reclamation:berry_cycle",
        "input": {
            "item": "minecraft:horn_coral"
        },
        "mana": 240,
        "output": {
            "item": "minecraft:tube_coral"
        }
    })
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "botania:alchemy_catalyst"
        },
        "input": {
            "item": "vintagedelight:organic_mash"
        },
        "mana": 240,
        "output": {
            "item": "minecraft:tube_coral"
        }
    })


    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": "minecraft:gunpowder"
        },
        "output": {
            "item": "naturesaura:effect_powder",
            "nbt": {
                "effect": "reclamation_util:reclaim_effect"
            }
        },
        "aura": 4000,
        "time": 200
    })

    event.custom({
        "type": "naturesaura:offering",
        "input": {
            "item": "desert:glazed_sand"
        },
        "start_item": {
            "item": "reclamation_util:filled_biome_bottle"
        },
        "output": {
            "item": "reclamation_util:empty_biome_globe",
            "count": 1
        }
    })

    //biome bottle
    event.shaped('4x reclamation_util:empty_biome_bottle', [
        ' A ',
        'G G',
        ' G '
    ], {
        A: 'enchanted:attuned_stone_charged',
        G: 'minecraft:glass'
    })

    //attuned biome bottle
    event.shaped('reclamation_util:attuned_biome_bottle', [
        ' A ',
        'GBG',
        ' S '
    ], {
        A: 'desert:desert_flower_item',
        B: 'reclamation_util:empty_biome_bottle',
        S: 'primalmagick:hexium_ingot',
        G: 'botania:life_essence'
    })

    event.shaped('8x minecraft:end_stone', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        A: 'enchanted:ender_dew',
        S: 'minecraft:stone'
    })

    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "enchanted:ender_dew"
            },
            {
                "item": "botania:ender_air"
            },
            {
                "item": "minecraft:poppy"
            },
            {
                "item": "end_stone"
            }
        ],
        "sapling": {
            "item": "minecraft:birch_sapling"
        },
        "output": {
            "item": "minecraft:chorus_flower"
        },
        "time": 250
    })

    event.custom({
        "type": "create:haunting",
        "ingredients": [
            {
                "item": "minecraft:chorus_flower"
            }
        ],
        "results": [
            {
                "item": "minecraft:shulker_shell"
            }
        ]
    })

    event.custom({
        "type": "naturesaura:offering",
        "input": {
            "item": "minecraft:egg"
        },
        "start_item": {
            "item": "primalmagick:essence_shard_blood"
        },
        "output": {
            "item": "minecraft:sniffer_egg",
            "count": 1
        }
    })

    function orb_recipe(one, two, out) {
        event.custom({
            "type": "naturesaura:tree_ritual",
            "ingredients": [
                {
                    "item": "primalmagick:essence_crystal_earth"
                },
                {
                    "item": "reclamation_util:empty_biome_globe"
                },
                {
                    "item": one
                },
                {
                    "item": two
                },
                {
                    "item": "reclamation_util:filled_biome_bottle"
                },
                {
                    "item": "reclamation_util:filled_biome_bottle"
                },
                {
                    "item": "reclamation_util:filled_biome_bottle"
                },
                {
                    "item": "reclamation_util:filled_biome_bottle"
                }
            ],
            "sapling": {
                "item": "minecraft:oak_sapling"
            },
            "output": {
                "item": "reclamation_util:" + out + "_biome_globe"
            },
            "time": 200
        })
    }

    orb_recipe("minecraft:grass_block", "regions_unexplored:magnolia_sapling", "plains")
    orb_recipe("minecraft:sand", "reclamation_util:arid_biome_bottle", "desert")
    orb_recipe("minecraft:oak_sapling", "regions_unexplored:redwood_sapling", "forest")
    orb_recipe("minecraft:sea_pickle", "minecraft:nautilus_shell", "ocean")
    orb_recipe("minecraft:horn_coral_block", "reclamation_util:watery_biome_bottle", "warm_ocean")
    orb_recipe("minecraft:podzol", "minecraft:spruce_sapling", "taiga")
    orb_recipe("minecraft:crimson_nylium", "reclamation_util:hellish_biome_bottle", "crimson")
    orb_recipe("minecraft:warped_nylium", "reclamation_util:hellish_biome_bottle", "warped")
    orb_recipe("naturaldecormod:jungle_bonsai", "reclamation_util:lush_biome_bottle", "lush")
    orb_recipe("minecraft:mycelium", "reclamation_util:mycelic_biome_bottle", "mycelic")
    orb_recipe("botania:ice_pendant", "reclamation_util:icy_biome_bottle", "snowy")
    orb_recipe("minecraft:gravel", "minecraft:seagrass", "cold_ocean")
    orb_recipe("minecraft:smooth_stone", "minecraft:emerald", "stony_peaks")
    orb_recipe("minecraft:infested_stone", "minecraft:fern", "windswept_hills")
    orb_recipe("minecraft:birch_sapling", "minecraft:grass", "birch_forest")
    orb_recipe("minecraft:slime_ball", "minecraft:vine", "swamp")
    orb_recipe("minecraft:mangrove_propagule", "minecraft:lily_pad", "mangrove_swamp")
    orb_recipe("minecraft:snow_block", "reclamation_util:icy_biome_bottle", "snowy_plains")
    orb_recipe("minecraft:acacia_sapling", "minecraft:grass", "savanna")
    orb_recipe("minecraft:terracotta", "minecraft:gold_ingot", "badlands")
    orb_recipe("minecraft:salmon", "minecraft:cod", "river")

    event.shaped('reclamation_util:empty_biome_globe', [
        'SSS',
        'GAG',
        'SSS'
    ], {
        A: 'enchanted:attuned_stone',
        G: 'minecraft:glass',
        S: 'desert:living_glass_shard'
    })
})