<template>
  <div>
    <TresCanvas
      window-size
    >
      <TresPerspectiveCamera
        :position="[0, 0, 8]"
        :fov="45"
        :look-at="[0, 0, 0]"
      />
      <TresMesh ref="boxRef">
        <TresBoxGeometry />
        <TresMeshBasicMaterial color="teal" />
      </TresMesh>
      <TresAmbientLight :intensity="1" />
    </TresCanvas>
  </div>
</template>

<script lang="ts" setup>
const boxRef = shallowRef()

const { onBeforeRender } = useLoop()

onBeforeRender(({delta, elapsed }) => {
  if (boxRef.value) {
    boxRef.value.rotation.y += delta
    boxRef.value.rotation.z = elapsed * 0.2
  }
})
</script>

<style>

</style>
