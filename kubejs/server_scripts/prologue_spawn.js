const SPAWNED_KEY = 'hasSpawnedInPrologue'
const MESSAGE_KEY = 'hasLore'
const MIRROR_DIM = 'overworldmirror:overworld'
const OVERWORLD_DIM = 'minecraft:overworld'
const MESSAGE = '§6You wake in a blasted version of the world you remember... was it all just a dream?'

PlayerEvents.loggedIn(event => {
    const { player, server } = event
    const playerData = player.persistentData
    
    if (playerData.getBoolean(SPAWNED_KEY) == false) {
        console.log(`Spawning ${player.name.string} in overworld mirror...`)
        server.scheduleInTicks(5, () => {
            const mirrorLevel = server.getLevel(MIRROR_DIM)
            if (mirrorLevel) {
                let spawnPos = mirrorLevel.getSharedSpawnPos()
                let highestBlock = mirrorLevel.getBlockState(mirrorLevel.getHeightmapPos('MOTION_BLOCKING', spawnPos))
                let safeY = mirrorLevel.getHeight('MOTION_BLOCKING', spawnPos.x, spawnPos.z) 
                
                player.teleportTo(MIRROR_DIM, spawnPos.x + 0.5, safeY + 1, spawnPos.z + 0.5, 0, 0)
                playerData.putBoolean(SPAWNED_KEY, true)
                player.give('minecraft:oak_boat')
            }
        })
    }
})

PlayerEvents.respawned(event => {
    const { player } = event
    if (player.persistentData.getBoolean(MESSAGE_KEY) == false) {
        player.sendSystemMessage(MESSAGE)
        player.inventory.clear()
        player.give('ftbquests:book')
        player.persistentData.putBoolean(MESSAGE_KEY, true)
    }
})

BlockEvents.rightClicked(event => {
    const player = event.player
    const block = event.block
    
    if (player.level.dimension === MIRROR_DIM) {
        if (block.id.contains('bed') || block.id.contains('bag')) {
            player.server.scheduleInTicks(50, () => {
                if (!player.level.isDay() || player.isSleeping()) {
                    player.sendSystemMessage('§6You feel reality pulling you back...')
                    
                    player.server.scheduleInTicks(40, () => {
                        const overworldLevel = player.server.getLevel(OVERWORLD_DIM)
                        if (overworldLevel) {
                            var spawnPos = overworldLevel.getSharedSpawnPos()
                            player.teleportTo(OVERWORLD_DIM, spawnPos.x + 0.5, spawnPos.y, spawnPos.z + 0.5, 0, 0)
                            player.setRespawnPosition(null, null, 0, false, false)
                            if (player.persistentData.getBoolean(MESSAGE_KEY) == false) {
                                player.sendSystemMessage(MESSAGE)
                                player.inventory.clear()
                                player.give('ftbquests:book')
                                player.persistentData.putBoolean(MESSAGE_KEY, true)
                            }
                        }
                    })
                }
            })
        }
    }
})

PlayerEvents.tick(event => {
    const {player,server,player:{username}} = event
    const message = Component.of('The portal vanishes before your eyes! Maybe it was just a dream...').bold().red()
    if(!(player.age % 20 == 0)) return
    if (player.persistentData.canaccessnetherportal == 1) return
    if (player.block.id == 'overworldmirror:portal') {
        player.block.set('air')
        player.displayClientMessage(message, true)
        server.runCommandSilent(`playsound minecraft:block.respawn_anchor.deplete block @a ${player.block.x} ${player.block.y} ${player.block.z} 1 1`)
    }else if (player.block.west == 'overworldmirror:portal'){
        player.block.west.set('air')
        player.displayClientMessage(message, true)
        server.runCommandSilent(`playsound minecraft:block.respawn_anchor.deplete block @a ${player.block.x} ${player.block.y} ${player.block.z} 1 1`)
    }else if (player.block.east == 'overworldmirror:portal'){
        player.block.east.set('air')
        player.displayClientMessage(message, true)
        server.runCommandSilent(`playsound minecraft:block.respawn_anchor.deplete block @a ${player.block.x} ${player.block.y} ${player.block.z} 1 1`)
    }else if (player.block.north == 'overworldmirror:portal'){
        player.block.north.set('air')
        player.displayClientMessage(message, true)
        server.runCommandSilent(`playsound minecraft:block.respawn_anchor.deplete block @a ${player.block.x} ${player.block.y} ${player.block.z} 1 1`)
    }else if (player.block.south == 'overworldmirror:portal'){
        player.block.south.set('air')
        player.displayClientMessage(message, true)
        server.runCommandSilent(`playsound minecraft:block.respawn_anchor.deplete block @a ${player.block.x} ${player.block.y} ${player.block.z} 1 1`)
    }
})