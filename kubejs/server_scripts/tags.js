ServerEvents.tags('item', event => {
    event.add('forge:vegetables/garlic', 'enchanted:garlic')
    event.add('forge:crops/garlic', 'enchanted:garlic')
    event.add('forge:garlic', 'enchanted:garlic')

    event.add('forge:seeds', 'agricraft:seed')
})

ServerEvents.tags('fluid', event => {
    event.add('theurgy:solvent', 'kubejs:hemoglobic_fluid')
})