
onEvent('recipes', event => {

  // ARMADURA DE NETHERITA
  event.remove({ output: 'minecraft:netherite_helmet' })
  event.remove({ output: 'minecraft:netherite_chestplate' })
  event.remove({ output: 'minecraft:netherite_leggings' })
  event.remove({ output: 'minecraft:netherite_boots' })

  // MEJORAS PROHIBIDAS DE SOPHISTICATED BACKPACKS
  const prohibidas = [
    'pickup_upgrade',
    'advanced_pickup_upgrade',
    'filter_upgrade',
    'advanced_filter_upgrade',
    'magnet_upgrade',
    'advanced_magnet_upgrade',
    'feeding_upgrade',
    'advanced_feeding_upgrade',
    'deposit_upgrade',
    'advanced_deposit_upgrade',
    'restock_upgrade',
    'advanced_restock_upgrade',
    'refill_upgrade',
    'advanced_refill_upgrade',
    'compacting_upgrade',
    'advanced_compacting_upgrade',
    'void_upgrade',
    'advanced_void_upgrade',
    'stack_upgrade_starter_tier',
    'stack_upgrade_tier_1',
    'stack_upgrade_tier_2',
    'stack_upgrade_tier_3',
    'stack_upgrade_tier_4',
    'auto_smelting_upgrade',
    'smoking_upgrade',
    'auto_smoking_upgrade',
    'blasting_upgrade',
    'auto_blasting_upgrade',
    'pump_upgrade',
    'advanced_pump_upgrade',
    'xp_pump_upgrade',
    'battery_upgrade',
    'tool_swapper_upgrade',
    'advanced_tool_swapper_upgrade',
    'inception_upgrade',
    'everlasting_upgrade',
    'jukebox_upgrade'
  ]

  prohibidas.forEach(id => {
    event.remove({
      output: 'sophisticatedbackpacks:' + id
    })
  })

  // PERMITIDAS:
  // crafting_upgrade
  // smelting_upgrade
  // tank_upgrade

})
