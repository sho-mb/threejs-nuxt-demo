<template>
  <div>
    <TresCanvas window-size v-bind="gl" >
      <OrbitControls />
      <TresPerspectiveCamera />
      <AnimatedCube />
      <ContactShadows />
      <TresDirectionalLight :position="[0, 2, 4]" :intensity="1.2" cast-shadow />
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
