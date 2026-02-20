ServerEvents.loaded(event => {
    if (event.server.persistentData.gameRules) return
    event.server.gameRules.set("doTraderSpawning", false)

    event.server.persistentData.gameRules = true
})