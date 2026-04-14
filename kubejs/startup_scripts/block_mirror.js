ForgeEvents.onEvent('net.minecraftforge.event.entity.EntityTravelToDimensionEvent', event => {
    if (event.entity.type != 'minecraft:player') return

    if(event.dimension == 'overworldmirror:overworld') {
        console.log('tried to tp to mirror')
        if (event.entity.persistentData.getBoolean('hasSpawnedInPrologue')) {
            event.setCanceled(true)
        }
    }
})