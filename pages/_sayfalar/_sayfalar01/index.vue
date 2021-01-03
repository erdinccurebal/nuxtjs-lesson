<template>
  <h3>{{ $route.params.sayfalar }} / {{ $route.params.sayfalar01 }}</h3>
</template>

<script>
export default {
  // ! Validate basit kontrolleri yapıldı, route içinde route açıldı.
  validate(context) {
    const sayfalar01 = String(context.route.params.sayfalar01).length;
    if (sayfalar01 < 5) return true;
  },
};
</script>
