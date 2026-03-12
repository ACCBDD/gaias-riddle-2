ServerEvents.recipes(event => {
//duplicate sapling recipes
event.shapeless(
  Item.of('regions_unexplored:ashen_sapling', 1), 
  [
    'quark:ancient_sapling'	       
  ]
)

event.shapeless(
  Item.of('natures_spirit:cypress_sapling', 1), 
  [
    'regions_unexplored:cypress_sapling'	       
  ]
)

event.shapeless(
  Item.of('regions_unexplored:joshua_sapling', 1), 
  [
    'natures_spirit:joshua_sapling'	       
  ]
)

event.shapeless(
  Item.of('regions_unexplored:larch_sapling', 1),
  [
    'natures_spirit:larch_sapling'	       
  ]
)

event.shapeless(
  Item.of('natures_spirit:redwood_sapling', 1), 
  [
    'regions_unexplored:redwood_sapling'	       
  ]
)

event.shapeless(
  Item.of('regions_unexplored:willow_sapling', 1), 
  [
    'natures_spirit:willow_sapling'	       
  ]
)

event.shapeless(
  Item.of('naturaldecormod:bungalo_palm_sapling', 1),
  [
    'regions_unexplored:palm_sapling'	       
  ]
)

//coloured tree recipes

event.shapeless(
  Item.of('natures_spirit:red_maple_sapling', 1), 
  [
    'regions_unexplored:maple_sapling',
'minecraft:red_dye'	
  ])
  event.shapeless(
  Item.of('regions_unexplored:red_maple_sapling', 1), 
  [
    'regions_unexplored:maple_sapling',
'minecraft:red_dye'	
  ])

event.shapeless(
  Item.of('natures_spirit:orange_maple_sapling', 1), 
  [
    'regions_unexplored:maple_sapling',
	'minecraft:orange_dye'	
  ])
  event.shapeless(
  Item.of('regions_unexplored:orange_maple_sapling', 1), 
  [
    'regions_unexplored:maple_sapling',
	'minecraft:orange_dye'	
  ])
  
  event.shapeless(
  Item.of('natures_spirit:yellow_maple_sapling', 1), 
  [
    'regions_unexplored:maple_sapling',
	'minecraft:yellow_dye'	
  ])
  
   event.shapeless(
  Item.of('natures_spirit:pink_wisteria_sapling', 1), 
  [
    'natures_spirit:white_wisteria_sapling',
	'minecraft:pink_dye'	
  ])
  
     event.shapeless(
  Item.of('natures_spirit:purple_wisteria_sapling', 1),
  [
    'natures_spirit:white_wisteria_sapling',
	'minecraft:purple_dye'	
  ])
  
     event.shapeless(
  Item.of('natures_spirit:blue_wisteria_sapling', 1), 
  [
    'natures_spirit:white_wisteria_sapling',
	'minecraft:blue_dye'	
  ])
  
       event.shapeless(
  Item.of('regions_unexplored:pink_magnolia_sapling', 1), 
  [
    'regions_unexplored:magnolia_sapling',
	'minecraft:pink_dye'	
  ])
  
         event.shapeless(
  Item.of('regions_unexplored:white_magnolia_sapling', 1), 
  [
    'regions_unexplored:magnolia_sapling',
	'minecraft:white_dye'	
  ])
  
         event.shapeless(
  Item.of('regions_unexplored:blue_magnolia_sapling', 1), 
  [
    'regions_unexplored:magnolia_sapling',
	'minecraft:blue_dye'	
  ])
  
 event.shapeless(
  Item.of('quark:blue_blossom_sapling', 1), 
  [
    'quark:red_blossom_sapling',
	'minecraft:snowball'	
  ])
 event.shapeless(
  Item.of('quark:lavender_blossom_sapling', 1), 
  [
    'quark:red_blossom_sapling',
	'minecraft:lilac'	
  ])
 event.shapeless(
  Item.of('quark:yellow_blossom_sapling', 1), 
  [
    'quark:red_blossom_sapling',
	'minecraft:sunflower'	
  ])
 event.shapeless(
  Item.of('quark:orange_blossom_sapling', 1), 
  [
    'quark:red_blossom_sapling',
	'minecraft:torch'	
  ])
})