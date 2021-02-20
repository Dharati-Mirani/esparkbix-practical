import Login from "./components/Login";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Application from "./components/Application";

//Application
import ListApplication from "./components/Applications/ListApplication";
import EditApplication from "./components/Applications/EditApplication";
import ViewApplication from "./components/Applications/ViewApplication";

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
      },
      {
        path: "view-application/*",
        component: ViewApplication,
        default: true
      }
    ]
  }
];

export default router;