<template>
 <div class="icon-container">
    <a :href="`icons/${name}.svg`" download>
      <icon :name="name" size="48"></icon>
    </a>
  </div>
</template>

<script>
  import Icon from './Icon';

  export default {
    name: 'IconContainer',
    components: {Icon},
    props: {
      name: {
        type: String,
        required: true
      }
    }
  }
</script>