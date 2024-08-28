<template>
  <div>
    <div class="absolute left-12 bottom-12">
      <div class="text-sm">
        <div>
          Try out a new library with powerful framework
        </div>
        <div class="title-01 text-5xl mt-4 font-[100] transition-transform">
          Nuxt.js & Three.js
        </div>
      </div>
    </div>
    <div class="absolute right-12 bottom-12 text-right">
      <article class="text-sm opacity-60">article</article>
      <small>Never coming soon</small>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap-trial'

import { SplitText } from 'gsap-trial/SplitText'
import { CustomEase } from 'gsap-trial/CustomEase'

gsap.registerPlugin(SplitText)
gsap.registerPlugin(CustomEase)
onMounted(() => {
  const text = document.querySelector('.title-01')
  const spritText = new SplitText(text, {
    type: 'chars',
  })
  gsap.utils.shuffle(spritText.chars)
  for (let i = 0; i < spritText.chars.length; i++) {
    gsap.to(spritText.chars[i], {
      duration: 5.0,
      delay: -1 * gsap.utils.random(1, 5, 1),
      ease: CustomEase.create('transform', 'M0,0 C0.44,0.05 0.17,1 1,1'),
      repeat: -1,
      yoyo: true,
      fontWeight: 800,
    })
  }
})
</script>

<style>

</style>
