import { Y as await_block, S as pop, Z as ensure_array_like, Q as push } from "../../chunks/index.js";
import { createClient } from "@supabase/supabase-js";
import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class")
    return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function _page($$payload, $$props) {
  push();
  const supabaseUrl = "https://jrjprryfbzsbbexwlpap.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyanBycnlmYnpzYmJleHdscGFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MjAyODUsImV4cCI6MjA0NzQ5NjI4NX0.Inzla5EXKWbDK99SRIc4WS0T0TP97sOIOKUVGKWBXmA";
  const supabase = createClient(supabaseUrl, supabaseKey);
  let name = "";
  function filterById(jsonObject, id) {
    return jsonObject.filter(function(jsonObject2) {
      return jsonObject2["id"] == id;
    })[0];
  }
  $$payload.out += `<div class="bg-gray-100 flex flex-col items-center justify-center h-screen"><div class="bg-white p-8 rounded shadow-md w-96"><h1 class="text-2xl font-semibold mb-6">Secret Santa Form</h1> `;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<form><div class="mb-4"><label for="secretSantaName" class="block text-gray-700 text-sm font-bold mb-2">Secret Santa Name</label> <input type="text" id="secretSantaName" name="secretSantaName"${attr("value", name)} class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"></div> <p class="text-sm text-gray-500">Do not submit multiple entry (or else you'll be buying multiple gifts. 😅)</p> <br> <button type="submit" class="bg-indigo-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo hover:bg-indigo-600">Submit</button></form>`;
  }
  $$payload.out += `<!--]--></div> <br><br> <!---->`;
  await_block(
    supabase.from("santas").select("*"),
    () => {
      $$payload.out += `<p>Gathering all santa...</p>`;
    },
    (santas) => {
      const each_array = ensure_array_like(santas.data);
      $$payload.out += `<div class="relative overflow-x-auto shadow-md sm:rounded-lg"><table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"><thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"><tr><th scope="col" class="px-6 py-3">Santa Name</th><th scope="col" class="px-6 py-3">Match Santa</th></tr></thead><tbody><!--[-->`;
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let santa = each_array[index];
        $$payload.out += `<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${escape_html(santa.codename)}</th><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${escape_html(filterById(santas.data, santa.matched_santa_id).codename)}</th></tr>`;
      }
      $$payload.out += `<!--]--></tbody></table></div> <br> <button type="submit" class="bg-indigo-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo hover:bg-indigo-600">Start Matching</button>`;
    }
  );
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _page as default
};
