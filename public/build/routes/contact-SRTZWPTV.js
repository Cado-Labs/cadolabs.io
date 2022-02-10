import {
  VacanciesList
} from "/build/_shared/chunk-UOG2XU5U.js";
import {
  Form,
  useFetcher,
  useTransition
} from "/build/_shared/chunk-U3MF2FUU.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/altj/projects/cadolabs.io/app/routes/contact.tsx?browser
init_react();

// app/routes/contact.tsx
init_react();
var import_react = __toModule(require_react());
var meta = () => {
  return {
    title: "Cadolabs - contact"
  };
};
function Contact() {
  let transition = useTransition();
  let fetcher = useFetcher();
  let formRef = (0, import_react.useRef)();
  (0, import_react.useEffect)(() => {
    var _a;
    if (transition.state === "loading") {
      (_a = formRef.current) == null ? void 0 : _a.reset();
    }
    fetcher.load("/airtable/getTable");
  }, [transition]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("section", {
    className: "contact"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("h1", null, "We are an IT company with a ", /* @__PURE__ */ React.createElement("span", {
    className: "marked"
  }, "high level of experience"), " in ", /* @__PURE__ */ React.createElement("b", null, "consulting"), ", ", /* @__PURE__ */ React.createElement("b", null, "software enhancement"), " and ", /* @__PURE__ */ React.createElement("b", null, "business growth solutions")), /* @__PURE__ */ React.createElement("div", {
    className: "contact-form"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "contact-form-inner"
  }, /* @__PURE__ */ React.createElement("h2", null, "Let\u2019s talk"), /* @__PURE__ */ React.createElement("p", null, "For any inquiries please contact us at ", /* @__PURE__ */ React.createElement("a", {
    href: "mailto:info@cadolabs.io"
  }, "info@cadolabs.io")), /* @__PURE__ */ React.createElement(Form, {
    ref: formRef,
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input-outer"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    placeholder: "Your name",
    name: "name",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "input-outer"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "email",
    placeholder: "Email",
    name: "email",
    pattern: "^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,10}$",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "input-outer"
  }, /* @__PURE__ */ React.createElement("textarea", {
    name: "message",
    id: "",
    cols: "30",
    rows: "7",
    placeholder: "Message",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "input-outer"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    value: "Send"
  }, "Send")), transition.state === "submitting" && /* @__PURE__ */ React.createElement("div", {
    className: "form-message"
  }, /* @__PURE__ */ React.createElement("p", null, "Your message has been sent"))))))), fetcher.data ? /* @__PURE__ */ React.createElement(VacanciesList, {
    data: fetcher.data
  }) : null);
}
export {
  Contact as default,
  meta
};
//# sourceMappingURL=/build/routes/contact-SRTZWPTV.js.map
