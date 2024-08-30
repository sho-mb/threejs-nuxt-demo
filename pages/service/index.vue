<template>
  <TresCanvas window-size v-bind="gl">
    <TresPerspectiveCamera :position="[-3, 10, 15]" />
    <OrbitControls />
    <AnimatedSnake />
    <TresGridHelper :args="[10, 10, 0x444444, 'teal']" />
  </TresCanvas>
</template>

<script lang="ts" setup>
import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from 'three'

const gl = {
  clearColor: '#16325B',
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
}
</script>

<style>

</style>
