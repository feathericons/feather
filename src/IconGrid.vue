<template>
  <div>
    <icon-container v-for="icon in icons" :name="icon"></icon-container>
  </div>
</template>

<script>
  import IconContainer from './IconContainer';

  export default {
    name: 'IconGrid',
    components: {IconContainer},
    props: {
      icons: {
        type: Array,
        required: true
      }
    }
  }
</script>