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
    if (event.entity.type != 'minecraft:player') return

    if (event.dimension == 'overworldmirror:overworld' && !event.entity.persistentData.getBoolean('canAccessMirror')) {
        console.log('tried to tp to mirror')
        if (event.entity.persistentData.getBoolean('hasSpawnedInPrologue')) {
            event.setCanceled(true)
        }
    } else if (event.dimension == 'minecraft:overworld' && event.entity.persistentData.getBoolean('canAccessMirror')) {
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
        event.entity.displayClientMessage(message, true)
    }
})