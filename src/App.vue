<template>
  <div>Hello World</div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'App',
    components: {Icon},
    computed: mapState(['icons'])
  }
</script>