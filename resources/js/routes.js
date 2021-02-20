import Login from "./components/Login";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Application from "./components/Application";

//Application
import ListApplication from "./components/Applications/ListApplication";
import EditApplication from "./components/Applications/EditApplication";

const router = [
  {
    path: "/",
    component: Application,
  }, 
  {
    path: "/admin",
    component: Login,
  },
  {
    path: "/admin",
    component: Layout,
    meta: {
      forAuth: true
    },
    children: [
      {
        path: "dashboard",
        component: Dashboard,
        default: true
      },
      {
        path: "applications",
        component: ListApplication,
        default: true
      }, 
      {
        path: "edit-application/*",
        component: EditApplication,
        default: true
      }
    ]
  }
];

export default router;