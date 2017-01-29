<template>
  <div>
    <icon-grid :icons="icons"></icon-grid>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import IconGrid from './IconGrid';

  export default {
    name: 'App',
    components: {IconGrid},
    computed: mapState(['icons'])
  }
</script>

<style lang="stylus">
  body
    margin 0
</style>