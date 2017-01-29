<template>
  <div class="icon"></div>
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      name: {
        type: String,
        required: true
      },
      size: {
        type: String,
        default: '24'
      }
    },
    mounted() {
      fetch(`./icons/${this.name}.svg`)
        .then(response => {
          if (response.ok) {
            return response.text();
          }
          throw new Error(`Cannot find ${this.name}.svg`);
        })
        .then(svgText => {
          const svgDocument = new DOMParser().parseFromString(svgText, 'image/svg+xml');
          const svgIcon = svgDocument.querySelector('svg').cloneNode(true);

          svgIcon.setAttribute('width', this.size);
          svgIcon.setAttribute('height', this.size);

          this.$el.appendChild(svgIcon);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
</script>

<style lang="stylus">
  .icon
    display inline-block
    line-height 0

  .icon > svg
    stroke currentColor
</style>