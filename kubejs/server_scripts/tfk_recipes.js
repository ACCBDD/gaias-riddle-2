ServerEvents.recipes(event => {
  //remove ndm planter
  event.remove({ output: 'naturaldecormod:black_glazed_planter_pot' })
  event.remove({ output: 'naturaldecormod:blue_glazed_planter_pot' })
  event.remove({ output: 'naturaldecormod:brown_glazed_planter_pot' })
  event.remove({ output: 'naturaldecormod:cyan_glazed_planter_pot' })
  event.remove({ output: 'naturaldecormod:gray_glazed_planter_pot' })
  event.remove({ output: 'naturaldecormod:green_glazed_planter_pot' })
  event.remove({ output: 'naturaldecormod:light_blue_glazed_planter_pot' })
  event.remove({ output: 'naturaldecormod:light_gray_glazed_planter_pot' })
  event.remove({ output: 'naturaldecormod:lime_glazed_planter_pot' })
  event.remove({ output: 'naturaldecormod:magenta_glazed_planter_pot' })
  event.remove({ output: 'naturaldecormod:orange_glazed_planter_pot' })
  event.remove({ output: 'naturaldecormod:pink_glazed_planter_pot' })
  event.remove({ output: 'naturaldecormod:purple_glazed_planter_pot' })
  event.remove({ output: 'naturaldecormod:red_glazed_planter_pot' })
  event.remove({ output: 'naturaldecormod:white_glazed_planter_pot' })
  event.remove({ output: 'naturaldecormod:yellow_glazed_planter_pot' })
  event.remove({ output: 'naturaldecormod:planter_pot' })
  event.remove({ output: 'naturaldecormod:onyx_planter_pot' })
  event.remove({ output: 'naturaldecormod:outdoor_iron_planter_pot' })
  event.remove({ output: 'naturaldecormod:oak_planter_pot' })
  event.remove({ output: 'naturaldecormod:spruce_planter_pot' })
  event.remove({ output: 'naturaldecormod:birch_planter_pot' })
  event.remove({ output: 'naturaldecormod:acacia_planter_pot' })
  event.remove({ output: 'naturaldecormod:jungle_planter_pot' })
  event.remove({ output: 'naturaldecormod:dark_oak_planter_pot' })
  event.remove({ output: 'naturaldecormod:bamboo_planter_pot' })
  event.remove({ output: 'naturaldecormod:cherry_planter_pot' })
  event.remove({ output: 'naturaldecormod:crimson_planter_pot' })
  event.remove({ output: 'naturaldecormod:warped_planter_pot' })
  event.remove({ output: 'naturaldecormod:monkey_puzzle_planter_pot' })
  event.remove({ output: 'naturaldecormod:saguaro_planter_pot' })
  event.remove({ output: 'naturaldecormod:barrel_planter_ndm' })
  event.remove({ output: 'naturaldecormod:mangrove_planter_pot' })
  event.remove({ output: 'naturaldecormod:juniper_planter_pot' })
  event.remove({ output: 'naturaldecormod:talavera_tacky_planter_pot' })
  event.remove({ output: 'naturaldecormod:talavera_artisan_planter_pot' })


  //redstone comparitor replacements
  event.remove({ id: "adpother:iron_vacuum_tube" })
  event.shaped(
    Item.of('adpother:iron_vacuum_tube'),
    [
      '  A',
      'BC ',
      'DD '
    ],
    {
      A: 'minecraft:iron_block',
      B: '#minecraft:buttons',
      C: 'minecraft:iron_ingot',
      D: 'minecraft:repeater'
    }
  )

  event.remove({ id: "adpother:gold_vacuum_tube" })
  event.shaped(
    Item.of('adpother:gold_vacuum_tube'),
    [
      '  A',
      'BC ',
      'DD '
    ],
    {
      A: 'minecraft:gold_block',
      B: '#minecraft:buttons',
      C: 'minecraft:iron_ingot',
      D: 'minecraft:repeater'
    }
  )

  event.remove({ id: "adpother:diamond_vacuum_tube" })
  event.shaped(
    Item.of('adpother:diamond_vacuum_tube'),
    [
      '  A',
      'BC ',
      'DD '
    ],
    {
      A: 'minecraft:diamond_block',
      B: '#minecraft:buttons',
      C: 'minecraft:iron_ingot',
      D: 'minecraft:repeater'
    }
  )

  event.remove({ id: "toms_storage:inventory_connector" })
  event.shaped(
    Item.of('toms_storage:ts.inventory_connector'),
    [
      'ACA',
      'BDB',
      'AEA'
    ],
    {
      A: '#minecraft:planks',
      B: '#c:chests',
      C: 'minecraft:repeater',
      D: 'minecraft:gold_ingot',
      E: 'minecraft:ender_pearl'
    }
  )

  event.remove({ id: "toms_storage:storage_terminal" })
  event.shaped(
    Item.of('toms_storage:ts.storage_terminal'),
    [
      'ACA',
      'BDE',
      'ACA'
    ],
    {
      A: '#minecraft:planks',
      B: '#c:chests',
      C: 'minecraft:repeater',
      D: 'minecraft:glowstone',
      E: '#forge:glass'
    }
  )

  event.remove({ id: "storagedrawers:controller" })
  event.shaped(
    Item.of('storagedrawers:controller'),
    [
      'AAA',
      'CDC',
      'ABA'
    ],
    {
      A: 'minecraft:stone',
      B: 'minecraft:gold_ingot',
      C: 'minecraft:repeater',
      D: '#storagedrawers:drawers'
    }
  )
  //ornithopter recipes
  event.remove({ id: "createornithopterglider:wing_mesh" })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "w": {
        "item": "minecraft:white_wool"
      },
      "m": {
        "item": "minecraft:phantom_membrane"
      }
    },
    "pattern": [
      "www",
      "wmw",
      "www"
    ],
    "result": {
      "item": "createornithopterglider:wing_mesh"
    },
    "show_notification": true
  })
  //wormhole eye recipe
  event.remove({ id: "bumbilas_friendly_teleport:friendly_eye" })
  event.custom({
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "s": {
        "item": "minecraft:spider_eye"
      },
      "c": {
        "item": "minecraft:copper_ingot"
      },
      "p": {
        "item": "minecraft:ender_pearl"
      }
    },
    "pattern": [
      " s ",
      "cpc",
      " s "
    ],
    "result": {
      "item": "bumbilas_friendly_teleport:friendly_eye"
    },
    "show_notification": true
  })
  //cheap composter
  event.shaped('minecraft:composter', [
    'A A',
    'A A',
    'AAA'
  ], {
    A: 'kubejs:flimsy_planks'
  })
  console.log('Hello! The recipe event has fired!')
})