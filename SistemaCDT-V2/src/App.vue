<template>
  <div>
    <Navbar />
    <router-view />
    <CusFooter />
  </div>
</template>

<script>
import CusFooter from './components/Cus-Footer.vue';
import Navbar from './components/Nav-Bar.vue';
export default {
  components: {
    CusFooter, Navbar
  },
}
</script>

