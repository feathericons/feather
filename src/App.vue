<template>
  <div>
    <icon-container v-for="icon in icons" :name="icon"></icon-container>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import IconContainer from './IconContainer';

  export default {
    name: 'App',
    components: {IconContainer},
    computed: mapState(['icons'])
  }
</script>

<style lang="stylus">
  body
    margin 0
</style>