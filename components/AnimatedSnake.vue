<template>
  <TresGroup ref="boxesRef">
    <TresMesh
      v-for="(z, i) in zs" :key="i" :position="[0, 0.5, z]" >
      <TresBoxGeometry />
      <TresMeshNormalMaterial />
    </TresMesh>
  </TresGroup>
</template>

<script lang="ts" setup>
import gsap from 'gsap-trial'

const boxesRef = shallowRef()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const zs: any[] = []
for (let z = -4.5; z <= 4.5; z++) {
  zs.push(z)
}

watch(boxesRef, () => {
  const positions = Array.from(boxesRef.value.children).map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (child: any) => child.position,
  )

  const rotations = Array.from(boxesRef.value.children).map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (child: any) => child.rotation,
  )
  const animationProp = {
    ease: 'power1.outIn',
    duration: 1,
    stagger: {
      each: 0.25,
      repeat: -1,
      yoyo: true,
    },
  }

  gsap.to(positions, {
    y: 6.5,
    ...animationProp,
  })

  gsap.to(rotations, {
    x: 8,
    ...animationProp,
  })
})
</script>

<style>

</style>
