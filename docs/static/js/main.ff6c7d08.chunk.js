(this.webpackJsonpheroes=this.webpackJsonpheroes||[]).push([[0],{15:function(e,r,a){"use strict";a.r(r),a.d(r,"heroes",(function(){return t}));var t=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}]},35:function(e,r,a){},49:function(e,r,a){"use strict";a.r(r);var t=a(1),c=a(21),s=a.n(c),n=a(10),i=a(5),o=a(2),l=Object(t.createContext)(),h="[auth] login",u="[auth] logout",j=a(0),d=function(e){var r=e.history,a=Object(t.useContext)(l).dispatch;return Object(j.jsxs)("div",{className:"container mt-5",children:[Object(j.jsx)("h2",{children:"Login"}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";a({type:h,payload:{name:"Eulalio Nava"}}),r.replace(e)},children:"Login"})]})},b=function(){var e=Object(t.useContext)(l),r=e.user,a=e.dispatch,c=r.name,s=Object(o.g)();return Object(j.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(j.jsx)(i.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(j.jsx)("div",{className:"navbar-collapse",children:Object(j.jsxs)("div",{className:"navbar-nav",children:[Object(j.jsx)(i.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(j.jsx)(i.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(j.jsx)(i.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(j.jsx)("span",{className:"nav-item nav-link text-info",children:c}),Object(j.jsx)("button",{className:"nav-item nav-link btn",onClick:function(){a({type:u}),s.replace("/login")},children:"Logout"})]})})]})},m=a(4),p=a(15).heroes,v=function(e){var r=e.id,a=e.superhero,t=(e.publisher,e.alter_ego),c=e.first_appearance,s=e.characters;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:"./assets/heroes/".concat(r,".jpg"),className:"card-img",alt:a}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:a}),Object(j.jsx)("p",{className:"card-text",children:t}),t!==s&&Object(j.jsx)("p",{className:"card-text",children:s}),Object(j.jsx)("p",{className:"card-text",children:Object(j.jsx)("small",{className:"text-muted",children:c})}),Object(j.jsx)(i.b,{to:"./hero/".concat(r),children:"Mas.."})]})]})},O=(a(35),function(e){var r=e.publisher,a=Object(t.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error("Publisher ".concat(e," no es valido"));return p.filter((function(r){return r.publisher===e}))}(r)}),[r]);return Object(j.jsx)("div",{className:"row animate__animated animate__fadeIn",children:a.map((function(e){return Object(j.jsx)("div",{className:"col-md-3",children:Object(j.jsx)(v,Object(m.a)({},e),e.id)})}))})}),x=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Marvel"}),Object(j.jsx)("hr",{}),Object(j.jsx)(O,{publisher:"Marvel Comics"})]})},f=a(15).heroes,g=function(e){var r=e.history,a=Object(o.i)().heroeId,c=Object(t.useMemo)((function(){return e=a,f.find((function(r){return r.id===e}));var e}),[a]);if(!c)return Object(j.jsx)(o.a,{to:"/"});var s=c.superhero,n=c.publisher,i=c.alter_ego,l=c.first_appearance,h=c.characters;return Object(j.jsxs)("div",{className:"row mt-5",children:[Object(j.jsx)("div",{className:"col-4",children:Object(j.jsx)("img",{src:"../assets/heroes/".concat(a,".jpg"),alt:s,className:"img-thumbnail animate__animated animate__fadeInLeft"})}),Object(j.jsxs)("div",{className:"col-8",children:[Object(j.jsx)("h3",{children:s}),Object(j.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(j.jsxs)("li",{className:"list-group-item",children:["Alter ego:",Object(j.jsx)("b",{children:i})]}),Object(j.jsxs)("li",{className:"list-group-item",children:["Publisher:",Object(j.jsx)("b",{children:n})]}),Object(j.jsxs)("li",{className:"list-group-item",children:["Firt apprearence:",Object(j.jsx)("b",{children:l})]})]}),Object(j.jsx)("h5",{children:"Characters"}),Object(j.jsx)("p",{children:h}),Object(j.jsx)("button",{className:"btn btn-outline-info",onClick:function(){r.length<=2?r.push("/"):r.goBack()},children:"Return"})]})]})},C=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"DCMarvel"}),Object(j.jsx)("hr",{}),Object(j.jsx)(O,{publisher:"DC Comics"})]})},_=a(23),N=a.n(_),y=a(12),M=a(15).heroes,k=function(e){var r=e.history,a=Object(o.h)(),c=N.a.parse(a.search).q,s=void 0===c?"":c,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(t.useState)(e),a=Object(n.a)(r,2),c=a[0],s=a[1];return[c,function(e){var r=e.target;s(Object(m.a)(Object(m.a)({},c),{},Object(y.a)({},r.name,r.value)))},function(){s(e)}]}({searchText:s}),l=Object(n.a)(i,2),h=l[0],u=l[1],d=h.searchText,b=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),M.filter((function(r){return r.superhero.toLocaleLowerCase().includes(e)})))}(s)}),[s]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Search Page"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.push("?q=".concat(d))},className:"d-flex",children:[Object(j.jsx)("input",{type:"text",placeholder:"Find your hero",className:"form-control",name:"searchText",autoComplete:"off",value:d,onChange:u}),Object(j.jsx)("button",{type:"submit",className:"btn m-1 btn-block btn-outline-primary",children:"Search"})]}),Object(j.jsx)("h4",{children:"Results"}),Object(j.jsx)("hr",{}),b.map((function(e){return Object(j.jsx)("div",{className:"col-4",children:Object(j.jsx)(v,Object(m.a)({},e),e.id)})}))]})]})},D=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:"container mt-2",children:Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{exact:!0,path:"/marvel",component:x}),Object(j.jsx)(o.b,{exact:!0,path:"/hero/:heroeId",component:g}),Object(j.jsx)(o.b,{exact:!0,path:"/dc",component:C}),Object(j.jsx)(o.b,{exact:!0,path:"/search",component:k}),Object(j.jsx)(o.a,{to:"/marvel"})]})})]})},S=a(24),w=function(e){var r=e.isAuthenticated,a=e.component,t=Object(S.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",t.location.pathname),Object(j.jsx)(o.b,Object(m.a)(Object(m.a)({},t),{},{component:function(e){return r?Object(j.jsx)(a,Object(m.a)({},e)):Object(j.jsx)(o.a,{to:"/login"})}}))},A=function(){var e=Object(t.useContext)(l).user;return Object(j.jsx)("div",{children:Object(j.jsx)(i.a,{children:Object(j.jsx)("div",{children:Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{exact:!0,path:"/login",component:d}),Object(j.jsx)(w,{path:"/",component:D,isAuthenticated:e.logged})]})})})})},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;switch(r.type){case h:return Object(m.a)(Object(m.a)({},r.payload),{},{logged:!0});case u:return{logged:!1};default:return e}},J=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},T=function(){var e=Object(t.useReducer)(B,{},J),r=Object(n.a)(e,2),a=r[0],c=r[1];return Object(t.useEffect)((function(){localStorage.setItem("user",JSON.stringify(a))}),[a]),Object(j.jsx)(l.Provider,{value:{user:a,dispatch:c},children:Object(j.jsx)(A,{})})};s.a.render(Object(j.jsx)(T,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.ff6c7d08.chunk.js.map