<template>
  <div>
    <TresCanvas window-size v-bind="gl" >
      <OrbitControls />
      <TresPerspectiveCamera />
      <AnimatedDonnut color="orange" />
    </TresCanvas>
  </div>
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
