<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
    <Clock />
</template>

<script>
// @ is an alias to /src
import Clock from '@/components/Clock.vue';

export default {
  components: {
    Clock,
  },
};
</script>
