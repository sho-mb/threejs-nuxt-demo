<template>
  <TresCanvas window-size >
    <TresPerspectiveCamera :position="[-3, 10, 15]" />
    <OrbitControls />
    <TresMesh>
      <TresConeGeometry :args="[4, 10, 20]" />
      <TresMeshPhongMaterial color="pink" />
    </TresMesh>
    <TresAmbientLight :intensity="1.7" />
    <TresDirectionalLight
      cast-shadow
      :position="[0, 4, 0]"
      :intensity="1.8"
    />
  </TresCanvas>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
