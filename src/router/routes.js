const routes = [
  {
    path: "/",
    //component: () => import("../layouts/Landing.vue")
    // component: () => import("../components/collections/ClientsList.vue")
    component: () => import("../components/collections/ClientDetail.vue")
  },
  {
    path: "/home",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../features/Index.vue")
      },
      {
        path: "/example-form",
        component: () => import("../components/ExampleForm.vue")
      },
      {
        path: "/tabs",
        component: () => import("../components/Tabs.vue")
      },
      {
        path: "/inception",
        component: () => import("../features/Inception/Inception.vue")
      },
      {
        path: "/render",
        component: () => import("../features/RenderSamps/RenderSamps.vue")
      }
    ]
  }
];

routes.push({
  path: "*",
  component: () => import("../features/Error404.vue")
});
export default routes;
