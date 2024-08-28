<template>
  <nav>
    <ul class="text-sm flex gap-10">
      <li
        v-for="item in navItems"
        :key="item.name"
        :class="{ 'nav-item-active': route.path === item.path }"
        class="transition-opacity delay-100 opacity-70 hover:opacity-100"
        @click="isActive != isActive"
      >
        <NuxtLink :to="item.path">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const route = useRoute()
const isActive = ref(false)

const navItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Service',
    path: '/service',
  },
  {
    name: 'Feature',
    path: '/feature',
  },
]
</script>

<style>
.nav-item-active {
  color: #42b883;
}
</style>
