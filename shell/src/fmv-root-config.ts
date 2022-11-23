import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  }
});
const layoutEngine = constructLayoutEngine({ routes, applications });
// registerApplication(
//   "@fmv/header-react",
//   () => System.import("@fmv/react-micro-app") as any,
//   (location) => true
// );
// registerApplication(
//   "@fmv/angular-app",
//   () => System.import("@fmv/angular-micro-app") as any,
//   (location) => true
// );
applications.forEach(registerApplication);
layoutEngine.activate();
start();
