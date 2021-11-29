(this["webpackJsonpreact-js"]=this["webpackJsonpreact-js"]||[]).push([[0],{20:function(n,e,r){},26:function(n,e,r){"use strict";r.r(e);var t,i,a=r(1),c=r.n(a),l=r(11),s=r.n(l),h=(r(20),r(15)),o=r(3),m=r(4),d=Object(o.b)(t||(t=Object(m.a)(["\n/*\n=============== \nVariables\n===============\n*/\n:root {\n  /* dark shades of primary color*/\n  --clr-primary-1: hsl(205, 86%, 17%);\n  --clr-primary-2: hsl(205, 77%, 27%);\n  --clr-primary-3: hsl(205, 72%, 37%);\n  --clr-primary-4: hsl(205, 63%, 48%);\n  /* primary/main color */\n  --clr-primary-5: hsl(205, 78%, 60%);\n  /* lighter shades of primary color */\n  --clr-primary-6: hsl(205, 89%, 70%);\n  --clr-primary-7: hsl(205, 90%, 76%);\n  --clr-primary-8: hsl(205, 86%, 81%);\n  --clr-primary-9: hsl(205, 90%, 88%);\n  --clr-primary-10: hsl(205, 100%, 96%);\n  /* darkest grey - used for headings */\n  --clr-grey-1: hsl(209, 61%, 16%);\n  --clr-grey-2: hsl(211, 39%, 23%);\n  --clr-grey-3: hsl(209, 34%, 30%);\n  --clr-grey-4: hsl(209, 28%, 39%);\n  /* grey used for paragraphs */\n  --clr-grey-5: hsl(210, 22%, 49%);\n  --clr-grey-6: hsl(209, 23%, 60%);\n  --clr-grey-7: hsl(211, 27%, 70%);\n  --clr-grey-8: hsl(210, 31%, 80%);\n  --clr-grey-9: hsl(212, 33%, 89%);\n  --clr-grey-10: hsl(210, 36%, 96%);\n  --clr-white: #fff;\n  --clr-red-dark: hsl(360, 67%, 44%);\n  --clr-red-light: hsl(360, 71%, 66%);\n  --clr-green-dark: hsl(125, 67%, 44%);\n  --clr-green-light: hsl(125, 71%, 66%);\n  --clr-black: #222;\n  --transition: all 0.3s linear;\n  --spacing: 0.1rem;\n  --radius: 0.25rem;\n  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n  --max-width: 1170px;\n  --fixed-width: 620px;\n}\n\n/*\n=============== \nGlobal Styles\n===============\n*/\n*,\n::after,\n::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  background: ",";\n  color: ",';\n  line-height: 1.5;\n  font-size: 0.875rem;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  text-decoration: none;\n}\n\nh1,\nh2,\nh3,\nh4 {\n  letter-spacing: var(--spacing);\n  text-transform: capitalize;\n  line-height: 1.25;\n  margin-bottom: 0.75rem;\n}\n\nh1 {\n  font-size: 3rem;\n}\n\nh2 {\n  font-size: 2rem;\n}\n\nh3 {\n  font-size: 1.25rem;\n}\n\nh4 {\n  font-size: 0.875rem;\n}\n\np {\n  margin-bottom: 1.25rem;\n  color: var(--clr-grey-5);\n}\n\n@media screen and (min-width: 800px) {\n  h1 {\n    font-size: 4rem;\n  }\n  h2 {\n    font-size: 2.5rem;\n  }\n  h3 {\n    font-size: 1.75rem;\n  }\n  h4 {\n    font-size: 1rem;\n  }\n  body {\n    font-size: 1rem;\n  }\n  h1,\n  h2,\n  h3,\n  h4 {\n    line-height: 1;\n  }\n}\n\n.section {\n  width: 90vw;\n  margin: 0 auto;\n  max-width: var(--max-width);\n}\n\n@media screen and (min-width: 992px) {\n  .section {\n    width: 95vw;\n  }\n}\n\nmain {\n  min-height: calc(100vh - 40px);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Accessibility */\n  input[type="checkbox"]:focus + span, button:focus {\n    outline: 0.15rem solid #183EFA;\n    border-radius: 50%;\n  }\n'])),(function(n){return n.theme.background}),(function(n){return n.theme.color})),g=r(8),b=r(2),p=o.c.nav(i||(i=Object(m.a)(["\n  .nav-center {\n    max-width: var(--max-width);\n    margin: 0 auto;\n    padding: 0.25rem 0;\n\n    .nav-header {\n      display: grid;\n      grid-template-columns: repeat(2, 1fr);\n      align-items: center;\n      font-size: 2rem;\n      margin: 0 0.5rem;\n\n      .nav-btn {\n        line-height: 0;\n        background: transparent;\n        border-color: transparent;\n        color: ",";\n        cursor: pointer;\n        justify-self: end;\n        font-size: 2rem;\n      }\n    }\n  }\n"])),(function(n){return n.theme.color}));function u(){return Object(b.jsx)(p,{children:Object(b.jsx)("div",{className:"nav-center",children:Object(b.jsxs)("div",{className:"nav-header",children:[Object(b.jsx)(g.b,{}),Object(b.jsx)("button",{type:"button",className:"nav-btn",children:Object(b.jsx)(g.a,{})})]})})})}var f,j=r(9),x=o.c.label(f||(f=Object(m.a)(["\n  /* Slider pill */\n  display: flex;\n  line-height: 0;\n  height: 2rem;\n  width: 4rem;\n  font-size: 2rem;\n  border-radius: 30px;\n  margin: 0 0.25rem;\n  transition: var(--transition);\n  background: ",";\n  color: ",';\n\n  /* Hide defualt checkbox */\n  input[type="checkbox"] {\n    height: 0;\n    width: 0;\n  }\n\n  /* Move span when checked */\n  input[type="checkbox"]:checked + span {\n    transform: translateX(100%);\n  }\n\n  span {\n    line-height: 0;\n    transition: var(--transition);\n  }\n'])),(function(n){return"light"===n.theme.name?"hsl(209, 61%, 16%)":"hsl(210, 36%, 96%)"}),(function(n){return"light"===n.theme.name?"hsl(210, 36%, 96%)":"hsl(209, 61%, 16%)"}));function y(n){return Object(b.jsxs)(x,{children:[Object(b.jsx)("input",{type:"checkbox","aria-label":"Toggle theme, currently ".concat(n.theme,"."),onClick:n.toggleTheme}),Object(b.jsx)("span",{children:"light"===n.theme?Object(b.jsx)(j.b,{}):Object(b.jsx)(j.a,{})})]})}var O=window.matchMedia("(prefers-color-scheme: dark)").matches,k={light:{name:"light",color:"hsl(209, 61%, 16%)",background:"hsl(210, 36%, 96%)"},dark:{name:"dark",color:"hsl(210, 36%, 96%)",background:"hsl(209, 61%, 16%)"}};function v(){var n=Object(a.useState)("light"),e=Object(h.a)(n,2),r=e[0],t=e[1];return Object(a.useEffect)((function(){t(O?"dark":"light")}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(o.a,{theme:k[r],children:[Object(b.jsx)(d,{}),Object(b.jsx)(u,{}),Object(b.jsxs)("main",{children:[Object(b.jsx)("h1",{children:"React"}),Object(b.jsx)(y,{theme:r,toggleTheme:function(){t("light"===r?"dark":"light")}})]})]})})}s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.4b9bc460.chunk.js.map