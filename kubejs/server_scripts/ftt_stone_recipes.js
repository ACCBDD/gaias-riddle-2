ServerEvents.recipes(event => {

//stonecutter recipes
event.stonecutting('quark:jasper', 'minecraft:granite')
event.stonecutting('quark:shale', 'minecraft:andesite')

//shapeless crafting

event.shapeless(
  Item.of('natures_spirit:white_chalk', 8), 
  [
    '4x minecraft:calcite', 	       
    '5x enchanted:quicklime'
  ]
)

event.shapeless(
  Item.of('regions_unexplored:chalk', 8), 
  [
    '4x minecraft:calcite', 	       
    '5x enchanted:quicklime'
  ]
)

event.shapeless(
    Item.of('natures_spirit:pink_sand', 2),
    [
        'minecraft:sand',
        'minecraft:pink_dye'
    ]
)

event.shapeless(
    Item.of('natures_spirit:pink_sandstone'),
    [
        '4x natures_spirit:pink_sand'
    ]
)
event.shapeless(
    Item.of('natures_spirit:chert', 2),
    [
        'minecraft:iron_nugget',
        'minecraft:sand',
        'minecraft:flint'
    ]
)
//shaped crafting
event.shaped('4x regions_unexplored:argillite', [
        'AB ',
        'BA ',
        '   '
    ], {
        A: '#forge:stone',
		B: 'minecraft:packed_mud'
    })

event.shaped('4x create:asurine', [
        'AB ',
        'BA ',
        '   '
    ], {
        A: '#forge:stone',
		B: 'minecraft:blue_dye'
    })
	
	event.shaped('4x create:limestone', [
        'AB ',
        'BA ',
        '   '
    ], {
        A: '#forge:stone',
		B: 'enchanted:quicklime'
    })

    	event.shaped('4x quark:limestone', [
        'AB ',
        'BA ',
        '   '
    ], {
        A: '#forge:stone',
		B: 'enchanted:quicklime'
    })
	
	event.shaped('4x create:ochrum', [
        'AB ',
        'BA ',
        '   '
    ], {
        A: '#forge:stone',
		B: 'minecraft:yellow_dye'
    })
		event.shaped('4x create:crimsite', [
        'AB ',
        'BA ',
        '   '
    ], {
        A: '#forge:stone',
		B: 'minecraft:red_dye'
    })
	
		event.shaped('4x create:scoria', [
        'AB ',
        'BA ',
        '   '
    ], {
        A: '#forge:stone',
		B: 'minecraft:brown_dye'
    })

    		event.shaped('4x create:veridium', [
        'AB ',
        'BA ',
        '   '
    ], {
        A: '#forge:stone',
		B: 'minecraft:green_dye'
    })

        		event.shaped('4x minecraft:dripstone_block', [
        'AB ',
        'BA ',
        '   '
    ], {
        A: 'enchanted:quicklime',
		B: 'minecraft:mud'
    })
})