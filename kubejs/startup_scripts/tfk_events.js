ForgeEvents.onEvent('net.minecraftforge.event.level.SaplingGrowTreeEvent', event => {
    const server = event.level.server;
    if (server) {
        const treesGrownTag = "treesGrown";
        let currentCount = server.persistentData.getInt(treesGrownTag);
        server.persistentData.putInt(treesGrownTag, currentCount + 1);
    }
});


ForgeEvents.onEvent('net.minecraftforge.event.entity.EntityTravelToDimensionEvent', event => {
    const message = Component.of('A dimensional barrier blocks your path! You cannot use this portal.').bold().red()
    const message2 = Component.of('Did you forget? You can never leave.').bold().red()
    if (event.entity.type != 'minecraft:player') return

    if (event.dimension == 'overworldmirror:overworld') {
        if (!event.entity.persistentData.getBoolean('canAccessMirror') && event.entity.persistentData.getBoolean('hasSpawnedInPrologue')) {
            event.setCanceled(true) //message handled by tick event - post prologue but pre-ending
        } else if (event.entity.persistentData.getBoolean('canAccessMirror')) {
            event.server.scheduleInTicks(20, () => {
                let data = event.entity.persistentData
                data.putBoolean('mirrorSpawnSet', true)
                data.putInt('mirrorSpawnX', event.entity.x)
                data.putInt('mirrorSpawnY', event.entity.y)
                data.putInt('mirrorSpawnZ', event.entity.z)
            })
        }
    } else if (event.dimension != 'overworldmirror:overworld' && event.entity.persistentData.getBoolean('canAccessMirror')) {
        //trying to leave mirror after access granted
        event.entity.displayClientMessage(message2, true)
        event.setCanceled(true)
    }
    
    if (event.dimension == 'minecraft:the_end') {
        if (!event.entity.persistentData.getBoolean('canAccessEnd')) {
            event.setCanceled(true)
            event.entity.displayClientMessage(message, true)
        } else if (!event.entity.persistentData.getBoolean('endSpawnSet')) {
            let player = event.entity
            player.persistentData.putBoolean('endSpawnSet', true)
        }
    } else if (event.dimension != 'minecraft:the_end' && event.entity.persistentData.getBoolean('canAccessEnd')) {
        event.setCanceled(true)
        event.entity.displayClientMessage(message2, true)
    }
})