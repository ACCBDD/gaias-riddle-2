ServerEvents.recipes(event => {
    event.remove({id: 'create:crafting/materials/andesite_alloy'})
    event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
    event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'})
    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": "minecraft:andesite"
        },
        "output": {
            "item": "create:andesite_alloy"
        },
        "catalyst": {
            "item": "naturesaura:crushing_catalyst"
        },
        "aura": 4000,
        "time": 200
    }).id("reclamation:create/andesite_alloy")

    // //disable mechanical press plate recipes
    // event.remove({id: 'create:pressing/brass_ingot'})
    // event.remove({id: 'create:pressing/iron_ingot'})
    // event.remove({id: 'create:pressing/copper_ingot'})
    // event.remove({id: 'create:pressing/gold_ingot'})

    // //remove blaze burner recipe
    // event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'})

    //disable metals from washing
    event.remove({id: 'create:crushing/diorite'})
    event.remove({id: 'create:crushing/diorite_recycling'})
    event.remove({id: 'create:splashing/soul_sand'})
    event.remove({id: 'create:splashing/red_sand'})
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "minecraft:red_sand"
            }
        ],
        "results": [
            {
                "chance": 0.05,
                "item": "minecraft:dead_bush"
            }
        ]
    })
    event.remove({id: 'create:splashing/gravel'})
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "minecraft:gravel"
            }
        ],
        "results": [
            {
                "chance": 0.25,
                "item": "minecraft:flint"
            }
        ]
    })

    //rose quartz
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:glowstone"
            },
            {
                "item": "minecraft:redstone"
            },
            {
                "item": "minecraft:redstone"
            },
            {
                "amount": 100,
                "fluid": "theurgy:sal_ammoniac"
            }
        ],
        "results": [
            {
                "item": "create:rose_quartz"
            }
        ]
    })

    //sal ammoniac crystal
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "enchanted:icy_needle"
            },
            {
                "amount": 750,
                "fluid": "theurgy:sal_ammoniac",
                "nbt": {}
            }
        ],
        "results": [
            {
                "item": "theurgy:sal_ammoniac_crystal"
            }
        ]
    })

    const crushing_resource_recipes = [
        "create:crushing/crimsite_recycling",
        "create:crushing/crimsite",
        "create:crushing/ochrum_recycling",
        "create:crushing/ochrum",
        "create:crushing/veridium_recycling",
        "create:crushing/veridium",
        "create:crushing/tuff_recycling",
        "create:crushing/tuff",
        "create:crushing/asurine_recycling",
        "create:crushing/asurine"
    ]
    crushing_resource_recipes.forEach(id => {
        event.remove({id: id})
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "B": {
                "item": "minecraft:iron_bars"
            },
            "P": {
                "item": "create:iron_sheet"
            },
            "F": {
                "item": "botania:fel_pumpkin"
            },
            "R": {
                "item": "botania:rune_fire"
            },
            "C": {
                "item": "botania:rune_wrath"
            },
            "S": {
                "item": "primalmagick:primalite"
            },
            "N": {
                "item": "minecraft:netherrack"
            }
        },
        "pattern": [
            "BBBBB",
            "BPFPB",
            "BRBCB",
            "SSNSS",
            "SNNNS"
        ],
        "result": {
            "count": 1,
            "item": "create:blaze_burner"
        }
    })
})