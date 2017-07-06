import Vue from 'vue';
import { value, composite } from 'popmotion';

export default Vue.directive('motion-value', function (el, binding) {
    console.log(el, binding);
});