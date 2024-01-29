export default defineNuxtPlugin(async (nuxtApp) => {
  const router = useRouter();
  router.addRoute({
    name: "test",
    path: "/test",
    // https://github.com/nuxt/nuxt/issues/25428
    component: () => import("~/components/test.vue").then(r => r.default || r),
  });
});
