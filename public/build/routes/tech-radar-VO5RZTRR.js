import {
  VacanciesList
} from "/build/_shared/chunk-Y4TCAJIQ.js";
import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-GJXD2B2M.js";

// browser-route-module:/Users/altj/projects/cadolabs.io/app/routes/tech-radar.tsx?browser
init_react();

// app/routes/tech-radar.tsx
init_react();
var meta = () => {
  return {
    title: "Cadolabs - teach radar"
  };
};
function Privacy() {
  const vacanciesList = JSON.parse(useLoaderData()).records;
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("section", {
    className: "tech-radar"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("iframe", {
    src: "https://cadolabs-techradar.s3-eu-west-1.amazonaws.com/index.html",
    height: "1200",
    width: "100%",
    title: "Tech radar"
  }))), vacanciesList ? /* @__PURE__ */ React.createElement(VacanciesList, {
    data: vacanciesList
  }) : "");
}
export {
  Privacy as default,
  meta
};
//# sourceMappingURL=/build/routes/tech-radar-VO5RZTRR.js.map
