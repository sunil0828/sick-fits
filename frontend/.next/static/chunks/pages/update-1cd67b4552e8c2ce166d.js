_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"8OKQ":function(e,r,t){"use strict";t.d(r,"a",(function(){return u}));var n=t("rePB"),o=t("ODXe"),i=t("q1tI");function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){Object(n.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(i.useState)(e),t=r[0],a=r[1],u=Object.values(e).join("");function s(e){var r=e.target,i=r.value,u=r.name,s=r.type;("number"===s&&(i=parseInt(i)),"file"===s)&&(i=Object(o.a)(e.target.files,1)[0]);a(c(c({},t),{},Object(n.a)({},u,i)))}function d(){a(e)}function l(){var e=Object.fromEntries(Object.entries(t).map((function(e){var r=Object(o.a)(e,2),t=r[0];r[1];return[t,""]})));a(e)}return Object(i.useEffect)((function(){a(e)}),[u]),{inputs:t,handleChange:s,resetForm:d,clearForm:l}}},"HaE+":function(e,r,t){"use strict";function n(e,r,t,n,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void t(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(e){return function(){var r=this,t=arguments;return new Promise((function(o,i){var a=e.apply(r,t);function c(e){n(a,o,i,c,u,"next",e)}function u(e){n(a,o,i,c,u,"throw",e)}c(void 0)}))}}t.d(r,"a",(function(){return o}))},ODXe:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return t}}(e,r)||function(e,r){if(e){if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(r,"a",(function(){return o}))},VUBQ:function(e,r,t){"use strict";var n=t("nKUr"),o=t("vOnD"),i=(t("q1tI"),o.b.div.withConfig({displayName:"ErrorMessage__ErrorStyles",componentId:"sc-11u5fgj-0"})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"])),a=function(e){var r=e.error;return r&&r.message?r.networkError&&r.networkError.result&&r.networkError.result.errors.length?r.networkError.result.errors.map((function(e,r){return Object(n.jsx)(i,{children:Object(n.jsxs)("p",{"data-test":"graphql-error",children:[Object(n.jsx)("strong",{children:"Shoot!"}),e.message.replace("GraphQL error: ","")]})},r)})):Object(n.jsx)(i,{children:Object(n.jsxs)("p",{"data-test":"graphql-error",children:[Object(n.jsx)("strong",{children:"Shoot!"}),r.message.replace("GraphQL error: ","")]})}):null};a.defaultProps={error:{}},r.a=a},mzXK:function(e,r,t){"use strict";var n=t("vOnD"),o=Object(n.c)(["from{background-position:0 0;}to{background-position:100% 100%;}"]),i=n.b.form.withConfig({displayName:"Form",componentId:"sc-1xszr8q-0"})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:var(--red);}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient( to right,#ff3019 0%,#e2b04a 50%,#ff3019 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:"," 0.5s linear infinite;}}"],o);r.a=i},oQRt:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return v}));var n=t("nKUr"),o=t("o0o1"),i=t.n(o),a=t("HaE+"),c=t("ODXe"),u=t("h4VS"),s=t("VX74"),d=t("lTCR"),l=t.n(d),p=t("8OKQ"),b=t("VUBQ"),f=t("mzXK");function m(){var e=Object(u.a)(["\n  mutation UPDATE_PRODUCT_MUTATION(\n    $id: ID!\n    $name: String\n    $description: String\n    $price: Int\n  ) {\n    updateProduct(\n      id: $id\n      data: { name: $name, description: $description, price: $price }\n    ) {\n      id\n      name\n      description\n      price\n    }\n  }\n"]);return m=function(){return e},e}function h(){var e=Object(u.a)(["\n  query SINGLE_PRODUCT_QUERY($id: ID!) {\n    Product(where: { id: $id }) {\n      id\n      name\n      description\n      price\n    }\n  }\n"]);return h=function(){return e},e}var j=l()(h()),g=l()(m());function O(e){var r=e.id,t=Object(s.useQuery)(j,{variables:{id:r}}),o=t.data,u=t.error,d=t.loading,l=Object(s.useMutation)(g),m=Object(c.a)(l,2),h=m[0],O=m[1],v=(O.data,O.errror),y=O.loading,w=Object(p.a)((null===o||void 0===o?void 0:o.Product)||{name:"",description:"",price:""}),x=w.inputs,P=w.handleChange;w.clearForm,w.resetForm;return console.log(x),d?Object(n.jsx)("p",{children:"loading..."}):Object(n.jsxs)(f.a,{onSubmit:function(){var e=Object(a.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,h({variables:{id:r,name:x.name,description:x.description,price:x.price}}).catch(console.error);case 3:n=e.sent,console.log(n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),children:[Object(n.jsx)(b.a,{error:u||v}),Object(n.jsxs)("fieldset",{disabled:y,"aria-busy":y,children:[Object(n.jsxs)("label",{htmlFor:"name",children:["Name",Object(n.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Name",value:x.name,onChange:P})]}),Object(n.jsxs)("label",{htmlFor:"price",children:["Price",Object(n.jsx)("input",{type:"number",id:"price",name:"price",placeholder:"price",value:x.price,onChange:P})]}),Object(n.jsxs)("label",{htmlFor:"description",children:["Description",Object(n.jsx)("textarea",{id:"description",name:"description",placeholder:"Description",value:x.description,onChange:P})]}),Object(n.jsx)("button",{type:"submit",children:"Update Product"})]})]})}function v(e){var r=e.query;return console.log(r),Object(n.jsx)("div",{children:Object(n.jsx)(O,{id:r.id})})}},rePB:function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.d(r,"a",(function(){return n}))},s4oe:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/update",function(){return t("oQRt")}])}},[["s4oe",0,1,2,3]]]);