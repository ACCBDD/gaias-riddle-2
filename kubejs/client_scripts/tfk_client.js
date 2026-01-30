ItemEvents.tooltip(event => {
    event.addAdvanced('ceramics:empty_clay_bucket', (item, advanced, text) => {
        text.add(Text.of('Disabled - use the vanilla bucket!').red())
    })

    event.addAdvanced('ceramics:unfired_clay_bucket', (item, advanced, text) => {
        text.add(Text.of('Disabled - use the vanilla bucket!').red())
    })
})

JEIEvents.information(event => {
    event.addItem('minecraft:twisting_vines', ['Can be obtained by bonemealing Warped Nylium.'])
})