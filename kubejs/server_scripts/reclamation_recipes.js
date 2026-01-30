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

    event.remove({ id: 'minecraft:coarse_dirt'});
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

    event.remove({id: 'ceramics:unfired_clay_bucket'})
    event.remove({id: 'ceramics:empty_clay_bucket_kiln'})
    event.remove({id: 'ceramics:empty_clay_bucket_smelting'})
})