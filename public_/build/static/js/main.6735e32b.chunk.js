(this.webpackJsonpexptrackerpwa=this.webpackJsonpexptrackerpwa||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c,a=n(3),r=n(6),o=n.n(r),s=n(17),i=n.n(s),u=(n(24),n(25),function(){return Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h1",{children:"Expense Tracker"})})}),l=n(10),d=n(18),j=n(11),b=function(e,t){switch(t.type){case c.DELETE_TRANSACTION:return Object(j.a)(Object(j.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case c.ADD_INCOME:case c.ADD_EXPENSE:return Object(j.a)(Object(j.a)({},e),{},{transactions:[t.payload].concat(Object(d.a)(e.transactions))});default:return e}};!function(e){e.DELETE_TRANSACTION="DELETE_TRANSACTION",e.ADD_INCOME="ADD_INCOME",e.ADD_EXPENSE="ADD_EXPENSE"}(c||(c={}));var x={transactions:[]},m=Object(r.createContext)(x),O=function(e){var t=e.children,n=Object(r.useReducer)(b,x),o=Object(l.a)(n,2),s=o[0],i=o[1];return Object(a.jsx)(m.Provider,{value:{transactions:s.transactions,deleteTransaction:function(e){i({type:c.DELETE_TRANSACTION,payload:e})},addIncome:function(e){i({type:c.ADD_INCOME,payload:e})},addExpense:function(e){i({type:c.ADD_EXPENSE,payload:e})}},children:t})},p=function(){var e=Object(r.useContext)(m).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(a.jsxs)("div",{className:"balance",children:[Object(a.jsx)("h3",{children:"Your Balance"}),Object(a.jsxs)("h1",{children:["$",e]})]})},h=function(){var e=Object(r.useContext)(m).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return Object(a.jsxs)("div",{className:"inc-exp-container",children:[Object(a.jsxs)("div",{className:"inc-container",children:[Object(a.jsx)("h4",{children:"Income"}),Object(a.jsxs)("p",{className:"money plus",children:["$",t]})]}),Object(a.jsxs)("div",{className:"exp-container",children:[Object(a.jsx)("h4",{children:"Expense"}),Object(a.jsxs)("p",{className:"money minus",children:["$",n]})]})]})},f=function(e){var t=e.transaction,n=Object(r.useContext)(m).deleteTransaction;return Object(a.jsx)("div",{children:Object(a.jsxs)("li",{className:t.amount>0?"item-plus":"item-minus",children:[t.text,Object(a.jsxs)("small",{children:[t.amount>0?"Income added on ":"Expense added on ",t.timeStamp]}),Object(a.jsxs)("span",{children:["$",t.amount]}),Object(a.jsx)("button",{onClick:function(){return n(t.id)},children:"X"})]})})},v=function(){var e=Object(r.useContext)(m).transactions;return Object(a.jsxs)("div",{className:"history",children:[Object(a.jsx)("h3",{children:"History"}),Object(a.jsx)("div",{className:"history-underline"}),Object(a.jsx)("ul",{className:"history-list",children:e.map((function(e){return Object(a.jsx)(f,{transaction:e},e.id)}))})]})},E=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(0),s=Object(l.a)(o,2),i=s[0],u=s[1],d=new Date,j=Object(r.useContext)(m),b=j.addIncome,x=j.addExpense,O={id:Math.floor(1e4*Math.random()),text:n,amount:+i,timeStamp:d.toLocaleString()},p={id:Math.floor(1e4*Math.random()),text:n,amount:-i,timeStamp:d.toLocaleString()};return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),document.getElementById("text").value="",document.getElementById("amount").value="0"},children:[Object(a.jsx)("label",{className:"text",htmlFor:"text",children:"Text"}),Object(a.jsx)("input",{id:"text",type:"text",value:n,onChange:function(e){return c(e.target.value)}}),Object(a.jsx)("label",{className:"amount",htmlFor:"amount",children:"Amount (Income/Expense)"}),Object(a.jsx)("input",{id:"amount",type:"number",value:i,onChange:function(e){return u(+e.target.value)}}),Object(a.jsx)("button",{className:"income-btn",onClick:function(){return 0===O.amount?alert("Cannot add income of $0"):b(O)},children:"Income"}),Object(a.jsx)("button",{className:"expense-btn",onClick:function(){return 0===p.amount?alert("Cannot add expense of $0"):x(p)},children:"Expense"})]})})},N=n(15);N.a.initializeApp({apiKey:"AIzaSyDbG_9zrtL-fiXvK_0dGG_DM5PxEIsvOGE",authDomain:"expense-tracker-9fc22.firebaseapp.com",databaseURL:"https://expense-tracker-9fc22.firebaseio.com",projectId:"expense-tracker-9fc22",storageBucket:"expense-tracker-9fc22.appspot.com",messagingSenderId:"612567682473",appId:"1:612567682473:web:8d153ce5a0cec2578508b8"});var g=N.a.messaging();var D=function(){return Notification.requestPermission().then((function(e){g.getToken().then((function(e){console.log("token: ".concat(e)),e||console.log("No registration token available. Request permission to generate one.")})).catch((function(e){console.log("An error occurred while retrieving token. ",e)}))})),Object(a.jsxs)(O,{children:[Object(a.jsx)(u,{}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(p,{}),Object(a.jsx)(h,{}),Object(a.jsx)(v,{}),Object(a.jsx)(E,{})]})]})};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root")),"serviceWorker"in navigator?navigator.serviceWorker.register("/sw.js").then((function(e){console.log("Service Worker Registration Successful")}),(function(e){console.log("Service worker registration failed",e)})):console.log("Service Worker not found")}},[[30,1,2]]]);
//# sourceMappingURL=main.6735e32b.chunk.js.map