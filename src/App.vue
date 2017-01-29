<template>
  <div><icon name="square" size="48"></icon></div>
</template>

<script>
  import {mapState} from 'vuex';
  import Icon from './Icon';

  export default {
    name: 'App',
    components: {Icon},
    computed: mapState(['icons'])
  }
</script>