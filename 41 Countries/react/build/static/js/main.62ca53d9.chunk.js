(this["webpackJsonpcountries-api-gui"]=this["webpackJsonpcountries-api-gui"]||[]).push([[0],{26:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var a=s(1),l=s.n(a),n=s(19),r=s.n(n),i=(s(26),s(11)),c=s(12),o=s(6),d=s(14),h=s(13),u=s(8),b=s(2),j=s(0);function f(){return Object(j.jsxs)("button",{className:"bg-transparent flex items-center transform",onClick:function(e){var t=e.currentTarget.firstElementChild;"dark"===localStorage.theme?(localStorage.theme="light",t.classList.toggle("before:-translate-x-7",!0),t.classList.toggle("before:bg-darkElements",!1),t.classList.toggle("before:bg-white",!0)):(localStorage.theme="dark",t.classList.toggle("before:-translate-x-7",!1),t.classList.toggle("before:bg-darkElements",!0),t.classList.toggle("before:bg-white",!1)),m()},children:[Object(j.jsx)(x,{}),"Dark mode"]})}function x(){return Object(j.jsx)("span",{id:"theme-switch",className:" inline-block rounded-full w-14 h-7 mr-3 bg-green-400 relative before:block before:transform before:transition-all before:absolute before:rounded-full  before:w-6 before:h-6 before:top-0.5 before:right-0.5 before:bg-grey-300 "})}function m(){"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}m();var g=function(){return Object(j.jsx)("header",{className:"bg-lightElements dark:bg-darkElements h-16 w-full shadow-lg px-20 flex justify-center items-center",children:Object(j.jsxs)("div",{className:"w-full max-w-7xl flex justify-between items-center",children:[Object(j.jsx)("h1",{className:"text-xl font-bold",children:"Where in the world?"}),Object(j.jsx)(f,{})]})})},p=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).stateHandler=e.handler,a.filterHandler=a.filterHandler.bind(Object(o.a)(a)),a}return Object(c.a)(s,[{key:"filterHandler",value:function(e){this.stateHandler(e)}},{key:"render",value:function(){return Object(j.jsx)("div",{className:" m-auto",children:Object(j.jsxs)("form",{className:"flex items-center justify-between mb-14 max-w-7xl m-auto",onSubmit:function(e){return e.preventDefault()},children:[Object(j.jsx)(O,{handler:this.filterHandler}),Object(j.jsx)(v,{handler:this.filterHandler})]})})}}]),s}(a.Component);function O(e){function t(t){var s=t.target.value;e.handler({search:s.trim()}),"Enter"===t.key&&t.preventDefault()}return Object(j.jsx)("div",{className:"bg-lightElements dark:bg-darkElements h-12 text-lightText dark:text-darkText rounded-md shadow-lg",children:Object(j.jsxs)("label",{className:"w-[29rem] flex h-full ",children:[Object(j.jsx)("div",{className:"h-full w-20 flex items-center justify-center","aria-hidden":"true",children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",width:"20",height:"20",children:Object(j.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(j.jsx)("path",{d:"M-1-1h16v16H-1z"}),Object(j.jsx)("g",{stroke:"#ccc","stroke-linecap":"round",children:Object(j.jsx)("path",{d:"M13.5 13.5l-4-4M10.5 5.5A5 5 0 1 1 .499 5.499 5 5 0 0 1 10.5 5.5z"})})]})})}),Object(j.jsx)("input",{type:"search",className:"bg-lightElements dark:bg-darkElements h-full ml-auto w-96 rounded-md pl-2 dark:placeholder-gray-300 placeholder-gray-500",placeholder:"Search for a country...",onChange:t,onKeyDown:t})]})})}var v=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).submitFilter=e.handler,a.state={isExpanded:!1},a.openDropdown=a.openDropdown.bind(Object(o.a)(a)),a.handleOutsideClick=a.handleOutsideClick.bind(Object(o.a)(a)),a.handleFilter=a.handleFilter.bind(Object(o.a)(a)),a}return Object(c.a)(s,[{key:"openDropdown",value:function(e){var t=e.currentTarget,s=e.currentTarget.nextSibling;this.state.isExpanded?(this.setState({isExpanded:!1}),t.setAttribute("aria-expanded",!1),s.classList.toggle("hidden",!0)):(this.setState({isExpanded:!0}),t.setAttribute("aria-expanded",!0),s.classList.toggle("hidden",!1))}},{key:"handleOutsideClick",value:function(e){var t=e.currentTarget.parentElement.previousSibling,s=e.currentTarget.parentElement;this.setState({isExpanded:!1}),t.setAttribute("aria-expanded",!1),s.classList.toggle("hidden",!0)}},{key:"handleFilter",value:function(e,t){var s=e.currentTarget.parentElement.parentElement.previousSibling,a=e.currentTarget.parentElement.parentElement;this.setState({isExpanded:!1}),s.setAttribute("aria-expanded",!1),a.classList.toggle("hidden",!0),s.firstChild.nodeValue=t||"Filter by region",this.submitFilter({region:t.toLowerCase()})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"bg-lightElements dark:bg-darkElements h-12 w-48 text-lightText dark:text-darkText rounded-md shadow-lg relative",children:[Object(j.jsxs)("button",{className:"bg-lightElements dark:bg-darkElements h-full ml-auto w-full rounded-md flex items-center justify-between px-6 relative z-20","aria-expanded":"false",onClick:this.openDropdown,children:["Filter by region",Object(j.jsx)("svg",{"aria-hidden":"true",className:"scale-75",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"12",children:Object(j.jsx)("path",{fill:"none",stroke:"#ccc","stroke-width":"2",d:"M1 1l8 8 8-8"})})]}),Object(j.jsxs)("ul",{className:"absolute top-14 bg-lightElements dark:bg-darkElements w-full text-lightText dark:text-darkText rounded-md shadow-lg py-2 z-20 hidden",children:[Object(j.jsx)("li",{className:"fixed top-0 left-0 w-screen h-screen z-[-1]",onClick:this.handleOutsideClick}),Object(j.jsx)("li",{className:"filter-button",children:Object(j.jsx)("button",{onClick:function(t){return e.handleFilter(t,"")},children:"All"})}),Object(j.jsx)("li",{className:"filter-button",children:Object(j.jsx)("button",{onClick:function(t){return e.handleFilter(t,"Africa")},children:"Africa"})}),Object(j.jsx)("li",{className:"filter-button",children:Object(j.jsx)("button",{onClick:function(t){return e.handleFilter(t,"Americas")},children:"America"})}),Object(j.jsx)("li",{className:"filter-button",children:Object(j.jsx)("button",{onClick:function(t){return e.handleFilter(t,"Asia")},children:"Asia"})}),Object(j.jsx)("li",{className:"filter-button",children:Object(j.jsx)("button",{onClick:function(t){return e.handleFilter(t,"Europe")},children:"Europe"})}),Object(j.jsx)("li",{className:"filter-button",children:Object(j.jsx)("button",{onClick:function(t){return e.handleFilter(t,"Oceania")},children:"Oceania"})})]})]})}}]),s}(a.Component);var w=p;var k=function(e){var t=e.isNum?function(e){for(var t=(e=(e+"").split("")).length-1;t>0;t--)t%3===0&&e.splice(-t,0,",");return e.join("")}(e.value):e.value;return Object(j.jsxs)("p",{className:e.classN,children:[Object(j.jsxs)("span",{className:"font-semibold",children:[e.text,": "]}),Object(j.jsx)("span",{children:t})]})};function N(e){var t=e.country;return Object(j.jsxs)("div",{className:"max-w-sm w-full h-full bg-white overflow-hidden rounded-md relative shadow-lg min-w-[250px] bg-lightElements dark:bg-darkElements flex flex-col ",children:[Object(j.jsxs)("div",{className:"overflow-hidden flex-1 relative",children:[Object(j.jsx)("img",{src:t.flags.svg,className:"absolute object-cover h-full w-full blur"}),Object(j.jsx)(u.b,{to:e.createLink(t),tabIndex:"-1",className:"w-full h-full inline-block flex items-center justify-center group relative z-10",children:Object(j.jsx)("img",{src:t.flags.svg,className:"transition-transform ease-in-out duration-300 group-hover:scale-110 object-contain max-h-full max-w-full",alt:"Flag of "+t.name.official,width:"420",height:"280"})})]}),Object(j.jsxs)("div",{className:"px-6 pt-6 flex-1",children:[Object(j.jsx)("h2",{className:"mb-4 font-bold text-base",children:Object(j.jsx)(u.b,{to:e.createLink(t),children:t.name.common})}),Object(j.jsx)(k,{text:"Population",value:t.population,classN:"card-p text-sm",isNum:!0}),Object(j.jsx)(k,{text:"Region",value:t.region,classN:"card-p text-sm"}),Object(j.jsx)(k,{text:"Capital",value:t.capital,classN:"card-p text-sm"})]})]})}var y=function(e){return Object(j.jsx)("div",{className:"",children:Object(j.jsx)("ul",{className:"max-w-7xl m-auto w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-7 justify-items-center",children:e.countries.map((function(t,s){return Object(j.jsx)("li",{children:Object(j.jsx)(N,{country:t,createLink:e.createLink})},s)}))})})};var C=function(e){var t=Object(b.f)(),s=t.cca3,a=(t.back,t.forward,e.findByCca3(s)),l=a.name.nativeName?a.name.nativeName[Object.keys(a.name.nativeName)[0]].common:a.name.common,n=a.languages?Object.keys(a.languages).map((function(e){return a.languages[e]})).join(", "):"None",r=a.currencies?Object.keys(a.currencies).map((function(e){return a.currencies[e].name})).join(", "):"None";return Object(j.jsxs)("div",{className:"",children:[Object(j.jsxs)("div",{className:"info-links mb-14 flex items-center justify-between",children:[Object(j.jsxs)(u.b,{to:"/",className:"shadow-lg bg-lightElements dark:bg-darkElements flex items-center justify-between px-4 py-1 rounded-md shadow-lg",children:[Object(j.jsx)("svg",{className:"mr-2 dark:fill-[#fff]",mlns:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/1999/xlink",width:"30",height:"20",viewBox:"0 0 486.975 486.975",children:Object(j.jsx)("g",{children:Object(j.jsx)("path",{d:"M473.475,230.025h-427.4l116-116c5.3-5.3,5.3-13.8,0-19.1c-5.3-5.3-13.8-5.3-19.1,0l-139,139c-5.3,5.3-5.3,13.8,0,19.1   l139,139c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-116-116h427.5c7.5,0,13.5-6,13.5-13.5   S480.975,230.025,473.475,230.025z"})})}),"Back"]}),Object(j.jsxs)(u.b,{to:" ",className:"shadow-lg bg-lightElements dark:bg-darkElements flex items-center justify-between px-4 py-1 rounded-md shadow-lg",children:["Forward",Object(j.jsx)("svg",{className:"ml-2 rotate-180 dark:fill-[#fff]",mlns:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/1999/xlink",width:"30",height:"20",viewBox:"0 0 486.975 486.975",children:Object(j.jsx)("g",{children:Object(j.jsx)("path",{d:"M473.475,230.025h-427.4l116-116c5.3-5.3,5.3-13.8,0-19.1c-5.3-5.3-13.8-5.3-19.1,0l-139,139c-5.3,5.3-5.3,13.8,0,19.1   l139,139c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-116-116h427.5c7.5,0,13.5-6,13.5-13.5   S480.975,230.025,473.475,230.025z"})})})]})]}),Object(j.jsxs)("div",{className:"info-content flex items-center",children:[Object(j.jsx)("div",{className:"flex-1 pr-16",children:Object(j.jsx)("img",{className:"w-full",src:a.flags.svg})}),Object(j.jsxs)("div",{className:"flex-1 pl-16",children:[Object(j.jsx)("h1",{className:"text-2xl font-bold mb-7",children:a.name.official}),Object(j.jsxs)("ul",{className:"flex flex-wrap mb-10",children:[Object(j.jsx)("li",{className:"info-p",children:Object(j.jsx)(k,{text:"Native Name",value:l,classN:"text-base"})}),Object(j.jsx)("li",{className:"info-p",children:Object(j.jsx)(k,{text:"Population",value:a.population,isNum:!0,classN:"text-base"})}),Object(j.jsx)("li",{className:"info-p",children:Object(j.jsx)(k,{text:"Region",value:a.region||"None",classN:"text-base"})}),Object(j.jsx)("li",{className:"info-p",children:Object(j.jsx)(k,{text:"Sub Region",value:a.subregion||"None",classN:"text-base"})}),Object(j.jsx)("li",{className:"info-p",children:Object(j.jsx)(k,{text:"Top Level Domain",value:a.tld.length?a.tld.join(" "):"None",classN:"text-base"})}),Object(j.jsx)("li",{className:"info-p",children:Object(j.jsx)(k,{text:"Currencies",value:r.length?r:"None",classN:"text-base"})}),Object(j.jsx)("li",{className:"info-p",children:Object(j.jsx)(k,{text:"Languages",value:n.length?n:"None",classN:"text-base"})}),Object(j.jsx)("li",{className:"info-p",children:Object(j.jsx)(k,{text:"Capital",value:a.capital||"None",classN:"text-base"})})]}),Object(j.jsx)(k,{text:"Border countries",classN:"text-base flex",value:Object(j.jsx)("ul",{className:"flex flex-wrap max-w-[350px] gap-3 ml-3",children:a.borders?a.borders:"None"})})]})]})]})},E=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={isLoaded:!1,error:null,allCountries:[],countries:[]},a.filters={region:"",perpage:8,search:""},a.setFilters=a.setFilters.bind(Object(o.a)(a)),a.applyFilters=a.applyFilters.bind(Object(o.a)(a)),a.findByCca3=a.findByCca3.bind(Object(o.a)(a)),a.createInfoLink=a.createInfoLink.bind(Object(o.a)(a)),a}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.com/v3.1/all").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,allCountries:t,currentCountry:t[132]}),e.applyFilters(!0)}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"setFilters",value:function(e){var t=Object.assign({},this.filters,e);this.filters=t,this.filters.region.trim()||this.filters.search.trim()?this.applyFilters():this.applyFilters(!0)}},{key:"applyFilters",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(t){for(var s=[],a=0;a<this.filters.perpage;a++){var l=this.state.allCountries[Math.floor(Math.random()*this.state.allCountries.length)];s.includes(l)||s.push(l)}this.setState({countries:s})}else{var n=this.state.allCountries.slice();this.filters.region.trim()&&(n=n.filter((function(t){return t.region.toLowerCase()===e.filters.region.toLowerCase()})));var r=n;this.filters.search.trim()&&(r=r.filter((function(t){return new RegExp(e.filters.search.toLowerCase()).test(t.name.common.toLowerCase())}))),this.setState({countries:r.slice(0,this.filters.perpage)})}}},{key:"findByCca3",value:function(e){return this.state.allCountries.find((function(t){return t.cca3===e}))}},{key:"createInfoLink",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return"/info/".concat(e.cca3,"/").concat(t,"/").concat(s)}},{key:"render",value:function(){return this.state.isLoaded?Object(j.jsx)(u.a,{children:Object(j.jsxs)("div",{className:"text-lightText dark:text-darkText",children:[Object(j.jsx)(g,{}),Object(j.jsx)("main",{className:"py-14 px-20",children:Object(j.jsxs)(b.c,{children:[Object(j.jsxs)(b.a,{exact:!0,path:"/",children:[Object(j.jsx)(w,{handler:this.setFilters,filters:this.filters}),Object(j.jsx)(y,{countries:this.state.countries,createLink:this.createInfoLink})]}),Object(j.jsx)(b.a,{path:"/info/:cca3/:back/:forward",children:Object(j.jsx)(C,{findByCca3:this.findByCca3})}),Object(j.jsx)(b.a,{path:"/info/:cca3",children:Object(j.jsx)(C,{findByCca3:this.findByCca3})})]})})]})}):this.state.isLoaded?void 0:Object(j.jsxs)("main",{className:"text-lightText dark:text-darkText",children:[Object(j.jsx)(g,{}),Object(j.jsx)("p",{className:"flex items-center justify-center h-screen",children:"Loading..."})]})}}]),s}(a.Component),L=E,F=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,37)).then((function(t){var s=t.getCLS,a=t.getFID,l=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),l(e),n(e),r(e)}))};r.a.render(Object(j.jsx)(l.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root"));try{var S=document.querySelector("#theme-switch");"dark"!==localStorage.theme?(localStorage.theme="light",S.classList.toggle("before:-translate-x-7",!0),S.classList.toggle("before:bg-darkElements",!1),S.classList.toggle("before:bg-white",!0)):(localStorage.theme="dark",S.classList.toggle("before:-translate-x-7",!1),S.classList.toggle("before:bg-darkElements",!0),S.classList.toggle("before:bg-white",!1))}catch(T){}F()}},[[36,1,2]]]);
//# sourceMappingURL=main.62ca53d9.chunk.js.map