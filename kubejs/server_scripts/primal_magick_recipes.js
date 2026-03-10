ServerEvents.recipes(event => {

    event.remove({id: 'primalmagick:mundane_wand'});
    
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "equipment",
        "ingredients": [
            {
                "tag": "forge:rods/wooden"
            },
            {
                "item": "naturesaura:infused_iron"
            }
        ],
        "result": {
            "item": "primalmagick:mundane_wand"
        }
    })

    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "minecraft:stone"
            }
        ],
        "results": [
            {
                "item": "primalmagick:marble_raw"
            }
        ]
    })

    event.remove({id: 'primalmagick:apprentice_wand_gem_item'});
    event.custom({
        "type": "primalmagick:arcane_crafting_shapeless",
        "ingredients": [
            {
            "tag": "forge:gems/amethyst"
            },
            {
            "tag": "primalmagick:essences/terrestrial_dusts"
            }
        ],
        "mana": {
            "earth": 10,
            "moon": 10,
            "sea": 10,
            "sky": 10,
            "sun": 10
        },
        "research": "WAND_GEM_APPRENTICE",
        "result": {
            "item": "primalmagick:apprentice_wand_gem_item"
        }
    })

    event.remove({id: 'primalmagick:adept_wand_gem_item'});
    event.custom({
        "type": "primalmagick:arcane_crafting_shapeless",
        "ingredients": [
            {
            "tag": "forge:gems/quartz"
            },
            {
            "tag": "primalmagick:essences/terrestrial_shards"
            }
        ],
        "mana": {
            "earth": 30,
            "moon": 30,
            "sea": 30,
            "sky": 30,
            "sun": 30
        },
        "research": "WAND_GEM_ADEPT",
        "result": {
            "item": "primalmagick:adept_wand_gem_item"
        }
    })
    
    event.remove({id: 'primalmagick:mana_prism'})
    event.custom({
        "type": "primalmagick:arcane_crafting_shaped",
        "key": {
            "D": {
            "tag": "primalmagick:essences/terrestrial_dusts"
            },
            "N": {
            "tag": "forge:nuggets/iron"
            },
            "Q": {
            "tag": "forge:nuggets/gold"
            }
        },
        "pattern": [
            " N ",
            "QDQ",
            " N "
        ],
        "research": "BASIC_MANAWEAVING",
        "result": {
            "item": "primalmagick:mana_prism"
        }
    })

    event.remove({id: 'primalmagick:bloodletter'}) //crafted with enchanted ritual

    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "botania:alchemy_catalyst"
        },
        "input": {
            "item": "botania:glimmering_livingwood_log"
        },
        "mana": 10000,
        "output": {
            "item": "primalmagick:heartwood"
        }
    })

    //inner demon
    event.remove({id: 'primalmagick:sanguine_core_inner_demon'})
    event.custom({
        "type": "primalmagick:ritual",
        "ingredients": [
            {
                "item": "primalmagick:sanguine_core_blank"
            },
            {
                "tag": "forge:nether_stars"
            },
            {
                "item": "primalmagick:essence_crystal_blood"
            },
            {
                "item": "primalmagick:essence_crystal_infernal"
            },
            {
                "item": "primalmagick:essence_crystal_void"
            },
            {
                "item": "primalmagick:rune_summon"
            },
            {
                "item": "primalmagick:rune_self"
            },
            {
                "item": "primalmagick:rune_power"
            },
            {
                "item": "reclamation:filled_biome_bottle"
            }
        ],
        "instability": 7,
        "mana": {
            "blood": 100,
            "infernal": 100,
            "void": 100
        },
        "props": [
            {
                "tag": "primalmagick:ritual_candles"
            },
            {
                "block": "primalmagick:ritual_bell"
            },
            {
                "block": "primalmagick:ritual_lectern"
            },
            {
                "block": "primalmagick:bloodletter"
            },
            {
                "block": "primalmagick:soul_anvil"
            }
        ],
        "research": "CLEANSING_RITE",
        "result": {
            "item": "primalmagick:sanguine_core_inner_demon"
        }
    })
})