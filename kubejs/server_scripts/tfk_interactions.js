BlockEvents.rightClicked(event => {
    const { block, item, player } = event;
    const tillMessage = Component.of("This dirt is too coarse to till! Maybe there's another way...").red();
    const fertilizeMessage = Component.of("This fertilizer is too weak to use on a sapling!").red();
    const panning = Component.of("Sifting for copper...").white();
    const chicken = Component.of("The pearl converts into an egg!").gold();

    if (!item) return;

    if (block.id === "minecraft:coarse_dirt" && item.hasTag("minecraft:hoes")) {
        player.displayClientMessage(tillMessage, true);
        event.cancel();
    }

    if (block.hasTag("minecraft:saplings") && item.id === "minecraft:bone_meal") {
        player.displayClientMessage(fertilizeMessage, true);
        event.cancel();
    }

    if (block.id === "minecraft:gravel" && item.id === "minecraft:bowl") {
        player.displayClientMessage(panning, true);
        if (Math.random() < 0.1) {
            player.give("create:copper_nugget")
        }
    }

    if (block.id === "minecraft:copper_block" && item.id === "minecraft:ender_pearl") {
        if (player.getLevel().getBlock(block.pos.above()).id === "minecraft:lightning_rod") {
            player.displayClientMessage(chicken, true);
            let lightningBolt = player.getLevel().getBlock(block.pos.above()).createEntity('lightning_bolt');
            lightningBolt.setPosition(block.pos.x + 0.5, block.pos.y + 1.0, block.pos.z + 0.5);
            lightningBolt.spawn()
            item.count--;
            player.give(Item.of('minecraft:chicken_spawn_egg', "{EntityTag:{CustomName:'\"Conversion Chicken\"',KubeJSPersistentData:{canConvert:1b}},display:{Name:'{\"text\":\"Chicken of Conversion\",\"color\":\"gold\",\"italic\":false}'},Enchantments:[{}]}"));
            event.cancel();
        }
    }
})

BlockEvents.placed(event => {
    const { player, level, block } = event;
    const saplingMessage = Component.of("This soil is too dry for saplings!").red();

    if (block.hasTag("minecraft:saplings") && level.getBlock(block.pos.below()).id === "kubejs:dried_earth") {
        player.displayClientMessage(saplingMessage, true);
        event.cancel();
    }
})

ItemEvents.entityInteracted('naturesaura:token_euphoria', event => {
    if (event.target.type === 'ribbits:ribbit') {
        event.item.count--;
        event.player.give('2x minecraft:quartz');
        event.player.level.playSound(null, event.target.x, event.target.y, event.target.z, 'minecraft:entity.experience_orb.pickup', 'players', 0.5, 1.0);
        event.player.level.spawnParticles('minecraft:happy_villager', true, event.target.x, event.target.y + 0.5, event.target.z, 0.25, 0.25, 0.25, 10, 0);
        event.cancel();
    }
})

ServerEvents.tick(event => {
    if (event.server.tickCount % 400 != 0) return;

    const level = event.server.getOverworld();
    const range = 3;

    const chickens = level.getEntities().filter(e =>
        e.getType() === "minecraft:chicken" &&
        e.persistentData.getBoolean("canConvert")
    );

    //only works with {KubeJSPersistentData: {canConvert: 1b}} eggs:
    //give @p minecraft:chicken_spawn_egg{display:{Name:'{"text":"Magic Chicken Egg","color":"gold","italic":false}'},EntityTag:{KubeJSPersistentData: {canConvert: 1b}, CustomName:"\"Conversion Chicken\""}} 1

    if (chickens.length === 0) return;
    
    for (let chicken of chickens) {
        var pos = chicken.blockPosition();
        for (let dx = -range; dx <= range; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                for (let dz = -range; dz <= range; dz++) {
                    var x = pos.x + dx;
                    var y = pos.y + dy;
                    var z = pos.z + dz;

                    if (dx*dx + dy*dy + dz*dz > range*range) continue; //sphere

                    var block = level.getBlock(x, y, z);
                    if (block.id === 'minecraft:coarse_dirt' && Math.random() < 0.25) {
                        block.set('minecraft:dirt');
                        level.spawnParticles('minecraft:happy_villager', true, x + 0.5, y + 1.0, z + 0.5, 0.25, 0.25, 0.25, 5, 0);
                        level.playSound(null, x, y, z, 'minecraft:block.grass.place', 'blocks', 0.2, 1.0);
                    }

                    if (block.id === 'supplementaries:stick' && Math.random() < 0.25) {
                        block.set('minecraft:dead_bush');
                        level.spawnParticles('minecraft:happy_villager', true, x + 0.5, y + 1.0, z + 0.5, 0.25, 0.25, 0.25, 5, 0);
                        level.playSound(null, x, y, z, 'minecraft:block.wood.place', 'blocks', 0.2, 1.0);
                    }
                }
            }
        }
    }
});