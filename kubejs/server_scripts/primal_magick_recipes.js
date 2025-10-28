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
})