import Vue from 'vue';

const data = {
  icons: [
    'square',
    'circle',
    'rectangle-vertical',
    'rectangle-horizontal'
  ]
};

// Vue.component('icon', {
//   props: {
//     name: {
//       type: String,
//       required: true
//     },
//     size: {
//       type: String,
//       default: '24'
//     }
//   },
//   template: '#icon-template',
//   mounted() {
//     fetch(`./icons/${this.name}.svg`)
//       .then(response => {
//         if (response.ok) {
//           return response.text();
//         }
//         throw new Error(`Cannot find ${this.name}.svg`);
//       })
//       .then(svgText => {
//         const svgDocument = new DOMParser().parseFromString(svgText, 'image/svg+xml');
//         const svgIcon = svgDocument.querySelector('svg').cloneNode(true);

//         svgIcon.setAttribute('width', this.size);
//         svgIcon.setAttribute('height', this.size);

//         this.$el.appendChild(svgIcon);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }
// });

// Vue.component('icon-container', {
//   props: {
//     name: {
//       type: String,
//       required: true
//     }
//   },
//   template: '#icon-container-template'
// })

new Vue({
  el: '#app',
  data: data
});