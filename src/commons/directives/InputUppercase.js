export default {
  mounted(el, _, vnode) {
    // uppercase transform
    el.transformUpper = function () {
      const start = el.selectionStart;
      el.value = el.value.toUpperCase();
      el.setSelectionRange(start, start);
      // vnode.componentInstance.$emit('input', el.value.toUpperCase());
    };
    // add event listener
    el.addEventListener('input', function () {
      el.transformUpper();
    });
  },
  unmounted(el) {
    el.removeEventListener('input', el.transformUpper);
  },
};
