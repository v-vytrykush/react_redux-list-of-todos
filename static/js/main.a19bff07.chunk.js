(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{23:function(t,e,n){},25:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var c=n(7),r=n.n(c),a=n(5),s=n(0),o=(n(23),n(3)),u=n(12),i=n(2),l=n.n(i),d=n(14),p=n.n(d),j="https://mate.academy/students-api";function b(){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(j,"/todos"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(j,"/users/").concat(e));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var x,m=function(){var t=Object(o.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(j,"/todos/").concat(e),{method:"DELETE"});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(o.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(j,"/todos"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:"One is the loneliest number",userId:Math.floor(20*Math.random())+1,completed:!1})});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_="SET_TODOS",y="ADD_TODOS",T="ADD_USER",N=function(t){return{type:T,payload:t}},k=function(t){return t.todos},w=function(t){return t.user},L=(n(25),n(1));!function(t){t.all="all",t.completed="completed",t.active="active"}(x||(x={}));var C=function(){var t=Object(a.b)(),e=Object(a.c)(k),n=Object(a.c)(w),c=Object(s.useState)(""),r=Object(u.a)(c,2),i=r[0],d=r[1],j=Object(s.useState)("all"),f=Object(u.a)(j,2),O=f[0],y=f[1],T=e.filter((function(t){return!0===t.completed&&O===x.completed||(!1===t.completed&&O===x.active||O===x.all)})).filter((function(t){return t.title.includes(i)})),C=function(){var e=Object(o.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:n=e.sent,t({type:_,payload:n});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){C()}),[]);var g=function(){var e=Object(o.a)(l.a.mark((function e(n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(n);case 3:c=e.sent,t(N(c)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var t=Object(o.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return t.next=4,C();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),D=function(){var t=Object(o.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:return t.next=4,C();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(L.jsxs)("div",{className:"TodoList",children:[Object(L.jsx)("h2",{children:"Todos:"}),Object(L.jsx)("button",{className:"TodoList__user-button button is-succes","data-cy":"userButton",type:"button",onClick:function(){S()},children:"add Todo"}),Object(L.jsx)("br",{}),Object(L.jsx)("input",{className:"input",type:"text","data-cy":"filterByTitle",value:i,onChange:function(t){d(t.target.value)}}),Object(L.jsx)("div",{className:"select",children:Object(L.jsxs)("select",{value:O,onChange:function(t){y(t.target.value)},children:[Object(L.jsx)("option",{value:"all",children:"all"}),Object(L.jsx)("option",{value:"active",children:"active"}),Object(L.jsx)("option",{value:"completed",children:"completed"})]})}),Object(L.jsx)("div",{className:"TodoList__list-container",children:Object(L.jsx)("ul",{className:"TodoList__list","data-cy":"listOfTodos",children:T.map((function(t){return Object(L.jsxs)("li",{className:p()("TodoList__item",{"TodoList__item--checked":t.completed,"TodoList__item--unchecked":!t.completed}),children:[Object(L.jsxs)("label",{children:[Object(L.jsx)("input",{type:"checkbox",checked:t.completed,readOnly:!0}),Object(L.jsx)("p",{children:t.title})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("button",{className:"TodoList__user-button button mgr-small ".concat((null===n||void 0===n?void 0:n.id)===t.userId&&"TodoList__user-button--selected"),"data-cy":"userButton",type:"button",onClick:function(){g(t.userId)},children:"User #".concat(t.userId)}),Object(L.jsx)("button",{className:"TodoList__user-button button is-danger","data-cy":"userButton",type:"button",onClick:function(){D(t.id)},children:"Delete"})]})]},t.id)}))})})]})},g=(n(27),function(){var t=Object(a.c)(w),e=Object(a.b)();return t?Object(L.jsxs)("div",{className:"CurrentUser",children:[Object(L.jsx)("button",{className:" TodoList__user-button TodoList__user-button--red button ",type:"button",onClick:function(){e(N(null))},children:"clear"}),Object(L.jsx)("h2",{className:"CurrentUser__title",children:Object(L.jsx)("span",{children:"Selected user: ".concat(t.id)})}),Object(L.jsx)("h3",{className:"CurrentUser__name","data-cy":"userName",children:t.name}),Object(L.jsx)("p",{className:"CurrentUser__email",children:t.email}),Object(L.jsx)("p",{className:"CurrentUser__phone",children:t.phone})]}):Object(L.jsx)("p",{children:"Error: User not found"})}),S=function(){return Object(L.jsxs)("div",{className:"App",children:[Object(L.jsx)("div",{className:"App__sidebar",children:Object(L.jsx)(C,{})}),Object(L.jsx)("div",{className:"App__content",children:Object(L.jsx)("div",{className:"App__content-container",children:Object(L.jsx)(g,{})})})]})},D=n(11),E=n(4),U=n(15),A={todos:[],user:null},B=Object(U.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case _:return Object(E.a)(Object(E.a)({},t),{},{todos:Object(D.a)(e.payload)});case y:return Object(E.a)(Object(E.a)({},t),{},{todos:[].concat(Object(D.a)(t.todos),[e.payload])});case T:return Object(E.a)(Object(E.a)({},t),{},{user:e.payload});default:return t}}));r.a.render(Object(L.jsx)(a.a,{store:B,children:Object(L.jsx)(S,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.a19bff07.chunk.js.map