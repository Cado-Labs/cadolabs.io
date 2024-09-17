import {
  VacanciesList
} from "/build/_shared/chunk-UOG2XU5U.js";
import {
  useFetcher
} from "/build/_shared/chunk-U3MF2FUU.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/altj/projects/cadolabs.io/app/routes/tech-radar.tsx?browser
init_react();

// app/routes/tech-radar.tsx
init_react();
var import_react = __toModule(require_react());
var meta = () => {
  return {
    title: "Cadolabs - teach radar"
  };
};
function Privacy() {
  let fetcher = useFetcher();
  (0, import_react.useEffect)(() => {
    fetcher.load("/airtable/getTable");
  }, []);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("section", {
    className: "tech-radar"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("iframe", {
    src: "https://cadolabs-techradar.s3-eu-west-1.amazonaws.com/index.html",
    height: "1200",
    width: "100%",
    title: "Tech radar"
  }))), fetcher.data ? /* @__PURE__ */ React.createElement(VacanciesList, {
    data: fetcher.data
  }) : null);
}
export {
  Privacy as default,
  meta
};
//# sourceMappingURL=/build/routes/tech-radar-CFR2FXCX.js.map
