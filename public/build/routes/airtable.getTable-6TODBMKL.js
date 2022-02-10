import {
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/altj/projects/cadolabs.io/app/routes/airtable.getTable.tsx?browser
init_react();

// app/routes/airtable.getTable.tsx
init_react();
var loader = async ({ request }) => {
  const baseUrl = new URL(request.url);
  return await fetch(`${baseUrl.origin}/api/airtable/getTable`, {
    method: "GET"
  });
};
export {
  loader
};
//# sourceMappingURL=/build/routes/airtable.getTable-6TODBMKL.js.map
