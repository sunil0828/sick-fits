_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"8OKQ":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("rePB"),a=n("ODXe"),o=n("q1tI");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(o.useState)(e),n=t[0],i=t[1],c=Object.values(e).join("");function u(e){var t=e.target,o=t.value,c=t.name,u=t.type;("number"===u&&(o=parseInt(o)),"file"===u)&&(o=Object(a.a)(e.target.files,1)[0]);i(s(s({},n),{},Object(r.a)({},c,o)))}function l(){i(e)}function d(){var e=Object.fromEntries(Object.entries(n).map((function(e){var t=Object(a.a)(e,2),n=t[0];t[1];return[n,""]})));i(e)}return Object(o.useEffect)((function(){i(e)}),[c]),{inputs:n,handleChange:u,resetForm:l,clearForm:d}}},DB6d:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n("nKUr"),a=n("vOnD"),o=n("vtBk"),i=n("SDjk"),s=n("o0o1"),c=n.n(s),u=n("HaE+"),l=n("ODXe"),d=n("h4VS"),p=n("lTCR"),m=n.n(p),b=n("VX74"),h=n("mzXK"),f=n("8OKQ"),j=n("VUBQ");function O(){var e=Object(d.a)(["\n  mutation SIGNUP_MUTATION(\n    $email: String!\n    $name: String!\n    $password: String!\n  ) {\n    createUser(data: { email: $email, name: $name, password: $password }) {\n      id\n      email\n      name\n    }\n  }\n"]);return O=function(){return e},e}var g=m()(O());function v(){var e=Object(f.a)({email:"",name:"",password:""}),t=e.inputs,n=e.handleChange,a=e.resetForm,o=Object(b.useMutation)(g,{variables:t}),i=Object(l.a)(o,2),s=i[0],d=i[1],p=d.data,m=d.loading,O=d.error;function v(){return(v=Object(u.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log(t),e.next=4,s().catch(console.error);case 4:r=e.sent,console.log(r),console.log({data:p,loading:m,error:O}),a();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.jsxs)(h.a,{method:"POST",onSubmit:function(e){return v.apply(this,arguments)},children:[Object(r.jsx)("h2",{children:"Sign Up For an Account"}),Object(r.jsx)(j.a,{error:O}),Object(r.jsxs)("fieldset",{children:[(null===p||void 0===p?void 0:p.createUser)&&Object(r.jsxs)("p",{children:["Signed up with ",p.createUser.email," - Please Go Head and Sign in!"]}),Object(r.jsxs)("label",{htmlFor:"email",children:["Your Name",Object(r.jsx)("input",{type:"text",name:"name",placeholder:"Your Name",autoComplete:"name",value:t.name,onChange:n})]}),Object(r.jsxs)("label",{htmlFor:"email",children:["Email",Object(r.jsx)("input",{type:"email",name:"email",placeholder:"Your Email Address",autoComplete:"email",value:t.email,onChange:n})]}),Object(r.jsxs)("label",{htmlFor:"password",children:["Password",Object(r.jsx)("input",{type:"password",name:"password",placeholder:"Password",autoComplete:"password",value:t.password,onChange:n})]}),Object(r.jsx)("button",{type:"submit",children:"Sign In!"})]})]})}var w=a.b.div.withConfig({displayName:"signin__GridStyles",componentId:"sc-1iz4eat-0"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:2rem;"]);function y(){return Object(r.jsxs)(w,{children:[Object(r.jsx)(i.a,{}),Object(r.jsx)(v,{}),Object(r.jsx)(o.a,{})]})}},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function s(e){r(i,a,o,s,c,"next",e)}function c(e){r(i,a,o,s,c,"throw",e)}s(void 0)}))}}n.d(t,"a",(function(){return a}))},ODXe:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},SDjk:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n("o0o1"),a=n.n(r),o=n("nKUr"),i=n("HaE+"),s=n("ODXe"),c=n("h4VS"),u=n("lTCR"),l=n.n(u),d=n("VX74"),p=n("mzXK"),m=n("8OKQ"),b=n("VliS"),h=n("VUBQ");function f(){var e=Object(c.a)(["\n  mutation SIGNIN_MUTATION($email: String!, $password: String!) {\n    authenticateUserWithPassword(email: $email, password: $password) {\n      ... on UserAuthenticationWithPasswordSuccess {\n        item {\n          id\n          email\n          name\n        }\n      }\n      ... on UserAuthenticationWithPasswordFailure {\n        code\n        message\n      }\n    }\n  }\n"]);return f=function(){return e},e}var j=l()(f());function O(){var e=Object(m.a)({email:"",password:""}),t=e.inputs,n=e.handleChange,r=e.resetForm,c=Object(d.useMutation)(j,{variables:t,refetchQueries:[{query:b.a}]}),u=Object(s.a)(c,2),l=u[0],f=u[1],O=f.data;f.loading;function g(){return(g=Object(i.a)(a.a.mark((function e(n){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log(t),e.next=4,l();case 4:o=e.sent,console.log(o),r();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v="UserAuthenticationWithPasswordFailure"===(null===O||void 0===O?void 0:O.authenticateUserWithPassword.__typename)?null===O||void 0===O?void 0:O.authenticateUserWithPassword:void 0;return Object(o.jsxs)(p.a,{method:"POST",onSubmit:function(e){return g.apply(this,arguments)},children:[Object(o.jsx)("h2",{children:"Sign Into Your Account"}),Object(o.jsx)(h.a,{error:v}),Object(o.jsxs)("fieldset",{children:[Object(o.jsxs)("label",{htmlFor:"email",children:["Email",Object(o.jsx)("input",{type:"email",name:"email",placeholder:"Your Email Address",autoComplete:"email",value:t.email,onChange:n})]}),Object(o.jsxs)("label",{htmlFor:"password",children:["Password",Object(o.jsx)("input",{type:"password",name:"password",placeholder:"Password",autoComplete:"password",value:t.password,onChange:n})]}),Object(o.jsx)("button",{type:"submit",children:"Sign In!"})]})]})}},VUBQ:function(e,t,n){"use strict";var r=n("nKUr"),a=n("vOnD"),o=(n("q1tI"),a.b.div.withConfig({displayName:"ErrorMessage__ErrorStyles",componentId:"sc-11u5fgj-0"})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"])),i=function(e){var t=e.error;return t&&t.message?t.networkError&&t.networkError.result&&t.networkError.result.errors.length?t.networkError.result.errors.map((function(e,t){return Object(r.jsx)(o,{children:Object(r.jsxs)("p",{"data-test":"graphql-error",children:[Object(r.jsx)("strong",{children:"Shoot!"}),e.message.replace("GraphQL error: ","")]})},t)})):Object(r.jsx)(o,{children:Object(r.jsxs)("p",{"data-test":"graphql-error",children:[Object(r.jsx)("strong",{children:"Shoot!"}),t.message.replace("GraphQL error: ","")]})}):null};i.defaultProps={error:{}},t.a=i},VliS:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n("h4VS"),a=n("VX74");function o(){var e=Object(r.a)(["\n  query {\n    authenticatedItem {\n      ... on User {\n        id\n        email\n        name\n        cart {\n          id\n          quantity\n          product {\n            id\n            price\n            name\n            description\n            photo {\n              image {\n                publicUrlTransformed\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return o=function(){return e},e}var i=Object(a.gql)(o());function s(){var e=Object(a.useQuery)(i).data;return null===e||void 0===e?void 0:e.authenticatedItem}},hMb1:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return n("DB6d")}])},mzXK:function(e,t,n){"use strict";var r=n("vOnD"),a=Object(r.c)(["from{background-position:0 0;}to{background-position:100% 100%;}"]),o=r.b.form.withConfig({displayName:"Form",componentId:"sc-1xszr8q-0"})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:var(--red);}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient( to right,#ff3019 0%,#e2b04a 50%,#ff3019 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:"," 0.5s linear infinite;}}"],a);t.a=o},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vtBk:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n("o0o1"),a=n.n(r),o=n("nKUr"),i=n("HaE+"),s=n("ODXe"),c=n("h4VS"),u=n("lTCR"),l=n.n(u),d=n("VX74"),p=n("mzXK"),m=n("8OKQ"),b=n("VUBQ");function h(){var e=Object(c.a)(["\n  mutation REQUEST_RESET_MUTATION($email: String!) {\n    sendUserPasswordResetLink(email: $email) {\n      code\n      message\n    }\n  }\n"]);return h=function(){return e},e}var f=l()(h());function j(){var e=Object(m.a)({email:""}),t=e.inputs,n=e.handleChange,r=e.resetForm,c=Object(d.useMutation)(f,{variables:t}),u=Object(s.a)(c,2),l=u[0],h=u[1],j=h.data,O=h.loading,g=h.error;function v(){return(v=Object(i.a)(a.a.mark((function e(n){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log(t),e.next=4,l().catch(console.error);case 4:o=e.sent,console.log(o),console.log({data:j,loading:O,error:g}),r();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsxs)(p.a,{method:"POST",onSubmit:function(e){return v.apply(this,arguments)},children:[Object(o.jsx)("h2",{children:"Request a Password Reset"}),Object(o.jsx)(b.a,{error:g}),Object(o.jsxs)("fieldset",{children:[null===(null===j||void 0===j?void 0:j.sendUserPasswordResetLink)&&Object(o.jsx)("p",{children:"Success! Check your email for a link!"}),Object(o.jsxs)("label",{htmlFor:"email",children:["Email",Object(o.jsx)("input",{type:"email",name:"email",placeholder:"Your Email Address",autoComplete:"email",value:t.email,onChange:n})]}),Object(o.jsx)("button",{type:"submit",children:"Request Reset!"})]})]})}}},[["hMb1",0,1,2,3]]]);