<template>
  <div class="p-12">
    <CommonHeaderMenu />
    <div class="h-full">
      <slot />
    </div>
    <CommonFooterComponent />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
body {
  color: whitesmoke;
  font-family: Sairia;
  font-weight: 300;
  background-color: #161616;
}
</style>
