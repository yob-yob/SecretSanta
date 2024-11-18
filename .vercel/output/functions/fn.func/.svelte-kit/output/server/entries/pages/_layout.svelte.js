import { T as slot } from "../../chunks/index.js";
const app = "";
function _layout($$payload, $$props) {
  $$payload.out += `<!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
