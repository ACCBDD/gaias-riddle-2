StartupEvents.registry('item', event => {
    event.create('scrap_wood')
        .displayName('Scrap Wood')
        .burnTime('100')
        
    event.create('sulfur_dirt', 'theurgy:alchemical_sulfur')
        .sourceItem('minecraft:dirt')
        .sourceName('Dirt')
        .sulfurTier('abundant')
        .sulfurType('misc')
        .tag('theurgy:alchemical_sulfurs')
})