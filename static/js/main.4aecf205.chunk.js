(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={button:"FeedbackOptions_button__7p1Fv",button_good:"FeedbackOptions_button_good__zbJd7",button_bad:"FeedbackOptions_button_bad__2ol6B"}},,,,function(e,t,n){e.exports={container:"App_container__1Fv07"}},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),o=n.n(a),s=n(5),i=n.n(s),r=(n(12),n(13),n(3));n(14);function b(e){var t=e.title,n=e.children;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:t}),n]})}var d=n(2),u=n.n(d),j=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(c.jsx)(c.Fragment,{children:t.map((function(e){var t=[u.a.button];return"good"===e&&t.push(u.a.button_good),"bad"===e&&t.push(u.a.button_bad),Object(c.jsx)("button",{className:t.join(" "),type:"button",name:e,onClick:n,children:e},e)}))})};function l(e){var t=e.message;return Object(c.jsx)("p",{children:t})}n(15);function h(e){var t=e.good,n=e.neutral,a=e.bad,o=e.total,s=e.positivePercentage;return Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["Good: ",t]}),Object(c.jsxs)("li",{children:["Neutral: ",n]}),Object(c.jsxs)("li",{children:["Bad: ",a]}),Object(c.jsxs)("li",{children:["Total: ",o]}),Object(c.jsxs)("li",{children:["Positive feedback: ",s,"%"]})]})}var O=n(6),p=n.n(O);function x(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),n=t[0],o=t[1],s=Object(a.useState)(0),i=Object(r.a)(s,2),d=i[0],u=i[1],O=Object(a.useState)(0),x=Object(r.a)(O,2),v=x[0],f=x[1],g=n+d+v;return Object(c.jsxs)("div",{className:p.a.container,children:[Object(c.jsx)(b,{title:"Please leave feedback",children:Object(c.jsx)(j,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e.target.name){case"good":o(n+1);break;case"neutral":u(d+1);break;case"bad":f(v+1);break;default:return}}})}),Object(c.jsx)(b,{title:"Statistics",children:0===g?Object(c.jsx)(l,{message:"No feedback given"}):Object(c.jsx)(h,{good:n,neutral:d,bad:v,total:g,positivePercentage:g>0&&n?Math.round(100*n/g):0})})]})}i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.4aecf205.chunk.js.map