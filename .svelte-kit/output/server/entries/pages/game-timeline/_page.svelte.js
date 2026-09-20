import { c as create_ssr_component, d as compute_rest_props, f as spread, h as escape_object, i as escape_attribute_value, j as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
function isObject(value) {
  const type = typeof value;
  return value != null && (type == "object" || type == "function");
}
function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === "") {
    return isXs ? "col" : `col-${colWidth}`;
  } else if (colSize === "auto") {
    return isXs ? "col-auto" : `col-${colWidth}-auto`;
  }
  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
}
function toClassName(value) {
  let result = "";
  if (typeof value === "string" || typeof value === "number") {
    result += value;
  } else if (typeof value === "object") {
    if (Array.isArray(value)) {
      result = value.map(toClassName).filter(Boolean).join(" ");
    } else {
      for (let key in value) {
        if (value[key]) {
          result && (result += " ");
          result += key;
        }
      }
    }
  }
  return result;
}
function classnames(...args) {
  return args.map(toClassName).filter(Boolean).join(" ");
}
const Col = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "xs", "sm", "md", "lg", "xl", "xxl"]);
  let { class: className = "" } = $$props;
  let { xs = void 0 } = $$props;
  let { sm = void 0 } = $$props;
  let { md = void 0 } = $$props;
  let { lg = void 0 } = $$props;
  let { xl = void 0 } = $$props;
  let { xxl = void 0 } = $$props;
  const colClasses = [];
  const lookup = { xs, sm, md, lg, xl, xxl };
  Object.keys(lookup).forEach((colWidth) => {
    const columnProp = lookup[colWidth];
    if (!columnProp && columnProp !== "") {
      return;
    }
    const isXs = colWidth === "xs";
    if (isObject(columnProp)) {
      const colSizeInterfix = isXs ? "-" : `-${colWidth}-`;
      const colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      if (columnProp.size || columnProp.size === "") {
        colClasses.push(colClass);
      }
      if (columnProp.push) {
        colClasses.push(`push${colSizeInterfix}${columnProp.push}`);
      }
      if (columnProp.pull) {
        colClasses.push(`pull${colSizeInterfix}${columnProp.pull}`);
      }
      if (columnProp.offset) {
        colClasses.push(`offset${colSizeInterfix}${columnProp.offset}`);
      }
      if (columnProp.order) {
        colClasses.push(`order${colSizeInterfix}${columnProp.order}`);
      }
    } else {
      colClasses.push(getColumnSizeClass(isXs, colWidth, columnProp));
    }
  });
  if (!colClasses.length) {
    colClasses.push("col");
  }
  if (className) {
    colClasses.push(className);
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.xs === void 0 && $$bindings.xs && xs !== void 0)
    $$bindings.xs(xs);
  if ($$props.sm === void 0 && $$bindings.sm && sm !== void 0)
    $$bindings.sm(sm);
  if ($$props.md === void 0 && $$bindings.md && md !== void 0)
    $$bindings.md(md);
  if ($$props.lg === void 0 && $$bindings.lg && lg !== void 0)
    $$bindings.lg(lg);
  if ($$props.xl === void 0 && $$bindings.xl && xl !== void 0)
    $$bindings.xl(xl);
  if ($$props.xxl === void 0 && $$bindings.xxl && xxl !== void 0)
    $$bindings.xxl(xxl);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(colClasses.join(" "))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "sm", "md", "lg", "xl", "xxl", "fluid"]);
  let { class: className = "" } = $$props;
  let { sm = void 0 } = $$props;
  let { md = void 0 } = $$props;
  let { lg = void 0 } = $$props;
  let { xl = void 0 } = $$props;
  let { xxl = void 0 } = $$props;
  let { fluid = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.sm === void 0 && $$bindings.sm && sm !== void 0)
    $$bindings.sm(sm);
  if ($$props.md === void 0 && $$bindings.md && md !== void 0)
    $$bindings.md(md);
  if ($$props.lg === void 0 && $$bindings.lg && lg !== void 0)
    $$bindings.lg(lg);
  if ($$props.xl === void 0 && $$bindings.xl && xl !== void 0)
    $$bindings.xl(xl);
  if ($$props.xxl === void 0 && $$bindings.xxl && xxl !== void 0)
    $$bindings.xxl(xxl);
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  classes = classnames(className, {
    "container-sm": sm,
    "container-md": md,
    "container-lg": lg,
    "container-xl": xl,
    "container-xxl": xxl,
    "container-fluid": fluid,
    container: !sm && !md && !lg && !xl && !xxl && !fluid
  });
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Modal_svelte_svelte_type_style_lang = "";
const Offcanvas_svelte_svelte_type_style_lang = "";
function getCols(cols) {
  const colsValue = parseInt(cols);
  if (!isNaN(colsValue)) {
    if (colsValue > 0) {
      return [`row-cols-${colsValue}`];
    }
  } else if (typeof cols === "object") {
    return ["xs", "sm", "md", "lg", "xl"].map((colWidth) => {
      const isXs = colWidth === "xs";
      const colSizeInterfix = isXs ? "-" : `-${colWidth}-`;
      const value = cols[colWidth];
      if (typeof value === "number" && value > 0) {
        return `row-cols${colSizeInterfix}${value}`;
      }
      return null;
    }).filter((value) => !!value);
  }
  return [];
}
const Row = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "noGutters", "form", "cols", "inner"]);
  let { class: className = "" } = $$props;
  let { noGutters = false } = $$props;
  let { form = false } = $$props;
  let { cols = 0 } = $$props;
  let { inner = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.noGutters === void 0 && $$bindings.noGutters && noGutters !== void 0)
    $$bindings.noGutters(noGutters);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.cols === void 0 && $$bindings.cols && cols !== void 0)
    $$bindings.cols(cols);
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  classes = classnames(className, noGutters ? "gx-0" : null, form ? "form-row" : "row", ...getCols(cols));
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `.container-fluid{margin-top:1em}.main{background:#191a2c}h1.svelte-1dggu9y.svelte-1dggu9y,h2.svelte-1dggu9y.svelte-1dggu9y,h3.svelte-1dggu9y.svelte-1dggu9y{color:#ebe2d4;margin-top:0;font-family:'Courier Prime', monospace}p.svelte-1dggu9y.svelte-1dggu9y{font-family:'Georgia', serif;color:#ebe2d4}.example-header.svelte-1dggu9y.svelte-1dggu9y{background:#ebe2d4;color:#191a2c;font-weight:300;padding:1em 1em;text-align:center}.example-header.svelte-1dggu9y h1.svelte-1dggu9y{color:#191a2c;font-weight:300;margin-bottom:20px}.example-header.svelte-1dggu9y p.svelte-1dggu9y{color:#191a2c;font-size:12px;text-transform:uppercase;letter-spacing:3px;font-weight:700}.timeline.svelte-1dggu9y.svelte-1dggu9y{line-height:1.4em;list-style:none;margin:0;padding:0;width:100%}.timeline.svelte-1dggu9y h2.svelte-1dggu9y,.timeline.svelte-1dggu9y h3.svelte-1dggu9y{line-height:inherit}.timeline-item.svelte-1dggu9y.svelte-1dggu9y{padding-left:40px;position:relative}.timeline-item.svelte-1dggu9y.svelte-1dggu9y:last-child{padding-bottom:0}.timeline-info.svelte-1dggu9y.svelte-1dggu9y{font-size:11px;font-family:'Georgia', serif;color:#ebe2d4;font-weight:700;margin:0 0 0.5em 0;text-transform:uppercase;white-space:nowrap}.timeline-marker.svelte-1dggu9y.svelte-1dggu9y{position:absolute;top:0;bottom:0;left:0;width:15px}.timeline-marker.svelte-1dggu9y.svelte-1dggu9y:before{background:#FF6B6B;border:3px solid transparent;border-radius:100%;content:"";display:block;height:15px;position:absolute;top:4px;left:0;width:15px;transition:background 0.3s ease-in-out, border 0.3s ease-in-out}.timeline-marker.svelte-1dggu9y.svelte-1dggu9y:after{content:"";width:3px;background:#dfccaf;display:block;position:absolute;top:24px;bottom:0;left:6px}.timeline-item.svelte-1dggu9y:last-child .timeline-marker.svelte-1dggu9y:after{content:none}.timeline-item.svelte-1dggu9y:not(.period):hover .timeline-marker.svelte-1dggu9y:before{background:transparent;border:3px solid #FF6B6B}.timeline-content.svelte-1dggu9y.svelte-1dggu9y{padding-bottom:40px}.timeline-content.svelte-1dggu9y p.svelte-1dggu9y:last-child{margin-bottom:0}.period.svelte-1dggu9y.svelte-1dggu9y{padding:0}.period.svelte-1dggu9y .timeline-info.svelte-1dggu9y{display:none}.period.svelte-1dggu9y .timeline-marker.svelte-1dggu9y:before{background:transparent;content:"";width:15px;height:auto;border:none;border-radius:0;top:0;bottom:30px;position:absolute;border-top:3px solid #dfccaf;border-bottom:3px solid #dfccaf}.period.svelte-1dggu9y .timeline-marker.svelte-1dggu9y:after{content:"";height:32px;top:auto}.period.svelte-1dggu9y .timeline-content.svelte-1dggu9y{padding:40px 0 70px}.period.svelte-1dggu9y .timeline-title.svelte-1dggu9y{margin:0}@media(min-width: 768px){.timeline-centered.svelte-1dggu9y .timeline-item.svelte-1dggu9y{display:table-row;padding:0}.timeline-centered.svelte-1dggu9y .timeline-info.svelte-1dggu9y,.timeline-centered.svelte-1dggu9y .timeline-marker.svelte-1dggu9y,.timeline-centered.svelte-1dggu9y .timeline-content.svelte-1dggu9y,.timeline-split .period.svelte-1dggu9y .timeline-info.svelte-1dggu9y{display:table-cell;vertical-align:top}.timeline-centered.svelte-1dggu9y .timeline-marker.svelte-1dggu9y{position:relative}.timeline-centered.svelte-1dggu9y .timeline-content.svelte-1dggu9y{padding-left:30px}.timeline-centered.svelte-1dggu9y .timeline-info.svelte-1dggu9y{padding-right:30px}.timeline-split .period.svelte-1dggu9y .timeline-title.svelte-1dggu9y,.timeline-centered.svelte-1dggu9y .period .timeline-title.svelte-1dggu9y{position:relative;left:-45px}}@media(min-width: 992px){.timeline-centered.svelte-1dggu9y.svelte-1dggu9y,.timeline-centered.svelte-1dggu9y .timeline-item.svelte-1dggu9y,.timeline-centered.svelte-1dggu9y .timeline-info.svelte-1dggu9y,.timeline-centered.svelte-1dggu9y .timeline-marker.svelte-1dggu9y,.timeline-centered.svelte-1dggu9y .timeline-content.svelte-1dggu9y{display:block;margin:0;padding:0}.timeline-centered.svelte-1dggu9y .timeline-item.svelte-1dggu9y{padding-bottom:40px;overflow:hidden}.timeline-centered.svelte-1dggu9y .timeline-marker.svelte-1dggu9y{position:absolute;left:50%;margin-left:-7.5px}.timeline-centered.svelte-1dggu9y .timeline-info.svelte-1dggu9y,.timeline-centered.svelte-1dggu9y .timeline-content.svelte-1dggu9y{width:50%}.timeline-centered.svelte-1dggu9y>.timeline-item:nth-child(odd) .timeline-info.svelte-1dggu9y{float:left;text-align:right;padding-right:30px}.timeline-centered.svelte-1dggu9y>.timeline-item:nth-child(odd) .timeline-content.svelte-1dggu9y{float:right;text-align:left;padding-left:30px}.timeline-centered.svelte-1dggu9y>.timeline-item:nth-child(even) .timeline-info.svelte-1dggu9y{float:right;text-align:left;padding-left:30px}.timeline-centered.svelte-1dggu9y>.timeline-item:nth-child(even) .timeline-content.svelte-1dggu9y{float:left;text-align:right;padding-right:30px}.timeline-centered.svelte-1dggu9y>.timeline-item.period .timeline-content.svelte-1dggu9y{float:none;padding:0;width:100%;text-align:center}.timeline-centered.svelte-1dggu9y .timeline-item.period.svelte-1dggu9y{padding:50px 0 90px}.timeline-centered.svelte-1dggu9y .period .timeline-marker.svelte-1dggu9y:after{height:30px;bottom:0;top:auto}.timeline-centered.svelte-1dggu9y .period .timeline-title.svelte-1dggu9y{left:auto}}.marker-outline .timeline-item.svelte-1dggu9y:hover .timeline-marker.svelte-1dggu9y:before{background:#FF6B6B}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-otgcce_START --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"><!-- HEAD_svelte-otgcce_END -->`, ""} <header class="example-header svelte-1dggu9y" data-svelte-h="svelte-x8vmwy"><h1 class="text-center svelte-1dggu9y">A very brief chronology of World War II</h1> <p class="svelte-1dggu9y">by Aleksandra Bennett, Martha Attridge Bufton, and Ian Bufton</p></header> ${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "example-centered" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render(
            $$result,
            {
              xs: { size: 10, offset: 1 },
              sm: { size: 8, offset: 2 }
            },
            {},
            {
              default: () => {
                return `<ul class="timeline timeline-centered svelte-1dggu9y" data-svelte-h="svelte-1cheq5z"><li class="timeline-item period svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h2 class="timeline-title svelte-1dggu9y">1939</h2></div></li> <li class="timeline-item svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"><span>September 1</span></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h3 class="timeline-title svelte-1dggu9y">War Begins</h3> <p class="svelte-1dggu9y">Germany invades Poland.</p></div></li> <li class="timeline-item svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"><span>September 3</span></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h3 class="timeline-title svelte-1dggu9y">First Allies</h3> <p class="svelte-1dggu9y">England and France declare war on Germany.</p></div></li> <li class="timeline-item svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"><span>September 10</span></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h3 class="timeline-title svelte-1dggu9y">Canada Joins</h3> <p class="svelte-1dggu9y">Canada declares war on Germany.</p></div></li> <li class="timeline-item svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"><span>Within this year</span></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h3 class="timeline-title svelte-1dggu9y">Closed Communications</h3> <p class="svelte-1dggu9y">Ham radio operators go off the air in Britain, Canada and other countries.</p></div></li> <li class="timeline-item period svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h2 class="timeline-title svelte-1dggu9y">1940</h2></div></li> <li class="timeline-item svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"><span>May-June</span></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h3 class="timeline-title svelte-1dggu9y">Battle of Dunkirk</h3> <p class="svelte-1dggu9y">The Battle of Dunkirk takes place between May and June 1940. During this military campaign, the British government and civilians evacuated British and other Allied forces to Britain from France.</p></div></li> <li class="timeline-item svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"><span>May-June</span></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h3 class="timeline-title svelte-1dggu9y">Battle of France</h3> <p class="svelte-1dggu9y">The Battle of France occurs between May 10 and June 22. By this time Germany has overrun Denmark, Norway, Belgium, and the Netherlands. Italy declares war and invades France June 10.</p></div></li> <li class="timeline-item svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"><span>July-October</span></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h3 class="timeline-title svelte-1dggu9y">Battle of Britain</h3> <p class="svelte-1dggu9y">The Battle of Britain begins in July and ends in October. This was a major air battle between the British Royal Air Force and the German air force or Luftwaffe.</p></div></li> <li class="timeline-item svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"><span>Autumn</span></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h3 class="timeline-title svelte-1dggu9y">The Blitz</h3> <p class="svelte-1dggu9y">The Blitz begins in the fall and lasts approximately eight months. The German air force bombs major industrial centres and ports, including Manchester and Liverpool.</p></div></li> <li class="timeline-item period svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h2 class="timeline-title svelte-1dggu9y">1941</h2></div></li> <li class="timeline-item svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"><span>June</span></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h3 class="timeline-title svelte-1dggu9y">Invasion of Russia</h3> <p class="svelte-1dggu9y">Germany invades Russia in June; a major shift in military strategy as Germany is now conducting war on two fronts.</p></div></li> <li class="timeline-item svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"><span>December</span></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h3 class="timeline-title svelte-1dggu9y">Attack on Pearl Harbour</h3> <p class="svelte-1dggu9y">The United States declares war on Japan on December 8 after the Japanese bombing of Pearl Harbour (Hawaii); Britain declares war on Japan on the same day. Germany and Italy declare war on the United States on  December 11.</p></div></li> <li class="timeline-item period svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h2 class="timeline-title svelte-1dggu9y">1942</h2></div></li> <li class="timeline-item svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"><span>Within this year</span></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h3 class="timeline-title svelte-1dggu9y">World War</h3> <p class="svelte-1dggu9y">The war is now being fought in the Pacific, Europe, and Africa.</p></div></li> <li class="timeline-item svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"><span>Within this year</span></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h3 class="timeline-title svelte-1dggu9y">Allies Progress</h3> <p class="svelte-1dggu9y">The Allies make significant gains in North Africa and Russian forces make gains in Stalingrad.</p></div></li> <li class="timeline-item period svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h2 class="timeline-title svelte-1dggu9y">1943</h2></div></li> <li class="timeline-item svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"><span>July-October</span></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h3 class="timeline-title svelte-1dggu9y">Italian Warfare</h3> <p class="svelte-1dggu9y">The Allied invasion of Sicily begins in July; Italy ends the war with Anglo-American forces on September 8. The Allies begin the mainland invasion of Italy on September 9. Italy declares war against Germany on October 11.</p></div></li> <li class="timeline-item svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"><span>November</span></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h3 class="timeline-title svelte-1dggu9y">Revision of Strategy</h3> <p class="svelte-1dggu9y">Josef Stalin (Soviet Union), Franklin D. Roosevelt (U.S.) and Winston Churchill (Britain) meet in November (Teheran Conference) to set a joint military strategy.</p></div></li> <li class="timeline-item period svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h2 class="timeline-title svelte-1dggu9y">1944</h2></div></li> <li class="timeline-item svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"><span>June</span></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h3 class="timeline-title svelte-1dggu9y">D-Day</h3> <p class="svelte-1dggu9y">The Allied forces land in Normandy (France) on June 6, 1944.</p></div></li> <li class="timeline-item period svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h2 class="timeline-title svelte-1dggu9y">1945</h2></div></li> <li class="timeline-item svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"><span>May 8</span></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h3 class="timeline-title svelte-1dggu9y">Germany Surrenders</h3> <p class="svelte-1dggu9y">Germany surrenders on May 8.</p></div></li> <li class="timeline-item svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"><span>August</span></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h3 class="timeline-title svelte-1dggu9y">Bombing of Japan</h3> <p class="svelte-1dggu9y">The United States drops atomic bombs on two Japanese cities: on Hiroshima August 6, and on Nagasaki August 9.</p></div></li> <li class="timeline-item svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"><span>August</span></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h3 class="timeline-title svelte-1dggu9y">Japan Surrenders</h3> <p class="svelte-1dggu9y">Japan surrenders on August 15; formal documents signed 2 September.</p></div></li> <li class="timeline-item svelte-1dggu9y"><div class="timeline-info svelte-1dggu9y"><span>Within this year</span></div> <div class="timeline-marker svelte-1dggu9y"></div> <div class="timeline-content svelte-1dggu9y"><h3 class="timeline-title svelte-1dggu9y">Communication Resumes</h3> <p class="svelte-1dggu9y">Ham radio operators go back on the air by the end of the year.</p></div></li></ul>`;
              }
            }
          )}`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
