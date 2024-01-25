export default defineNuxtPlugin(async (nuxtApp) => {
  const router = useRouter();
  router.addRoute({
    name: "test",
    path: "/test",
    component: () => import("~/components/test.vue"),
  });
});
