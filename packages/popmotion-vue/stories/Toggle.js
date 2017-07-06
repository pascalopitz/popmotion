import Vue from 'vue';

import { tween, value } from 'popmotion';

export default Vue.component('Toggle', {
  template: `<div
    v-on:click="onClick"
    v-bind:style="{
      background: 'red',
      width: '100px',
      height: '100px',
      transform: 'translateX(' + value.current + 'px)'
   }">
    </div>`,
  methods: {
    onClick: function() {
      var f =  (this.value.toUpdate === 100) ? 'off' : 'on';
      this.onStateChange[f](this);
    },
  },
  data: () => {
    return {
      value: value(0),
      onStateChange: {
        on: ({value}) => tween({
          from: value.get(),
          to: 100,
          onUpdate: value
        }).start(),
        off: ({value}) => tween({
          from: value.get(),
          to: 0,
          onUpdate: value
        }).start(),
      }
    };
  }
});