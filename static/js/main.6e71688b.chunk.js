(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),r=n(9),a=n.n(r),s=n(4),o=(n(28),n(29),n(1)),l=function(e){e.styles;return Object(o.jsx)("div",{style:{display:"flex",alignItems:"center",height:40,backgroundColor:"rgba(0, 0, 0, 0.05)",fontWeight:"bold",padding:"0px 20px",boxSizing:"border-box"},children:"Friends List"})},d=n(3),u="ADD_FRIEND",b="ADD_FAVOURITE",j="DELETE_FRIEND",f=function(){var e=Object(i.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(!1),a=Object(d.a)(r,2),l=a[0],b=a[1],j=Object(s.b)(),f=function(e){if(b(!1),""!=n){var t,i={id:(t=n,"".concat(t,"_").concat((new Date).getTime())),name:n,fav:!1};j(function(e){return{type:u,payload:e}}(i)),c("")}else b(!0)};return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f()},children:[Object(o.jsx)("input",{style:{width:"100%",padding:"12px 20px",display:"inline-block",border:"1px solid #ccc",borderRadius:"4px",boxSizing:"border-box"},type:"text",value:n,placeholder:"Enter your friend's name...",onChange:function(e){return function(e){c(e.target.value)}(e)}}),l&&Object(o.jsx)("span",{style:{color:"red"},children:"Please enter a name !!"})]})},p=n(5),O=n(11),x=n(15),y=n(16),h=function(){var e={padding:"8px 16px",borderBottom:"1px solid #ddd",textAlign:"left"},t={color:"grey",border:"1px solid grey",padding:"5px",margin:"0px 5px",cursor:"pointer"},n={float:"left",padding:"8px 16px",fontWeight:"bold",fontSize:"20px",color:"black"},c=Object(i.useState)(""),r=Object(d.a)(c,2),a=r[0],l=r[1],u=Object(i.useState)(1),f=Object(d.a)(u,2),h=f[0],g=f[1],v=Object(i.useState)(4),m=Object(d.a)(v,2),S=m[0],N=(m[1],Object(i.useState)(4)),C=Object(d.a)(N,2),E=C[0],_=C[1],k=Object(i.useState)(0),D=Object(d.a)(k,2),L=D[0],T=D[1],w=Object(i.useState)("disabled"),F=Object(d.a)(w,2),I=F[0],R=F[1],z=Object(i.useState)(""),A=Object(d.a)(z,2),P=A[0],X=A[1],B=Object(i.useState)(4),M=Object(d.a)(B,2),U=M[0],V=(M[1],Object(i.useState)(!1)),W=Object(d.a)(V,2),J=W[0],q=W[1],G=Object(s.c)((function(e){return e.friendsList})),H=G.reduce((function(e,t){return t.fav?[t].concat(Object(p.a)(e)):[].concat(Object(p.a)(e),[t])}),[]),K=J?H.filter((function(e){return e.name.indexOf(a)>-1})):G.filter((function(e){return e.name.indexOf(a)>-1})),Q=Object(s.b)();Object(i.useEffect)((function(){ce(h)}),[K]);for(var Y=h*S,Z=Y-S,$=K.slice(Z,Y),ee=function(e){var t=Number(e.target.id);g(t),ce(t)},te=[],ne=1;ne<=Math.ceil(K.length/S);ne++)te.push(ne);var ie=te.map((function(e){return 1===e&&1===h||e<E+1&&e>L?Object(o.jsx)("li",{style:n,id:e,onClick:function(e){return ee(e)},children:e},e):void 0})),ce=function(e){var t=Math.ceil(K.length/S);X("disabled"),R("disabled"),t===e&&t>1?R(""):1===e&&t>1?X(""):t>1&&(X(""),R(""))},re=function(){_(E+U),T(L+U);var e=E+1;g(e),ce(e)},ae=function(){_(E-U),T(L-U);var e=E-U;g(e),ce(e)},se=function(){(h-1)%U===0&&(_(E-U),T(L-U));var e=h-1;g(e),ce(e)},oe=function(){h+1>E&&(_(E+U),T(L+U));var e=h+1;g(e),ce(e)},le=function(e){Q(function(e){return{type:b,payload:e}}(e))},de=function(e){Q(function(e){return{type:j,payload:e}}(e))},ue=$.map((function(n,i){return Object(o.jsx)("li",{style:e,children:Object(o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(o.jsxs)("div",{style:{display:"grid"},children:[Object(o.jsx)("span",{style:{fontWeight:"bold"},children:n.name}),Object(o.jsx)("span",{style:{fontSize:"small",marginTop:"10px"},children:"is your friend"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(O.a,{onClick:function(){return le(n.id)},style:t,icon:n.fav?x.b:y.a}),Object(o.jsx)(O.a,{onClick:function(){return de(n.id)},style:t,icon:y.b})]})]})},n.id)}));return Object(o.jsxs)("div",{children:[G.length>0&&Object(o.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(o.jsx)("input",{style:{width:"90%",padding:"12px 20px",display:"inline-block",border:"1px solid #ccc",borderRadius:"4px",boxSizing:"border-box",marginTop:"5px"},type:"text",onChange:function(e){return function(e){l(e.target.value)}(e)},placeholder:"Search..."}),Object(o.jsx)(O.a,{style:{color:"grey",border:"1px solid grey",padding:"5px 8px",margin:"0px 10px",cursor:"pointer",fontSize:"1.5em",marginTop:"8px"},icon:x.a,onClick:function(){q((function(e){return!e}))},title:"Sort by Favourite"})]}),Object(o.jsx)("ul",{style:{padding:"0",border:"1px solid #ddd"},className:"ulStyle",children:ue}),Object(o.jsxs)("ul",{style:{display:"inline-block",listStyleType:"none",justifyContent:"center"},children:[K.length>0&&("disabled"===I?Object(o.jsx)("li",{style:n,className:I,children:" Prev "}):Object(o.jsx)("li",{style:n,className:I,onClick:function(){return se()},children:"Prev "})),function(){if(L>=1)return Object(o.jsx)("li",{style:n,className:"",onClick:function(){return ae()},children:" \u2026 "})}(),ie,function(){if(te.length>E)return Object(o.jsx)("li",{style:n,className:"",onClick:function(){return re()},children:" \u2026 "})}(),K.length>0&&("disabled"===P?Object(o.jsx)("li",{style:n,className:P,children:" Next "}):Object(o.jsx)("li",{style:n,className:P,onClick:function(){return oe()},children:" Next "}))]})]})},g=function(){return Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)(f,{}),Object(o.jsx)(h,{})]})};var v=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsx)(g,{})]})},m=n(18),S=n(6),N={friendsList:[]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(S.a)(Object(S.a)({},e),{},{friendsList:[].concat(Object(p.a)(e.friendsList),[t.payload])});case b:var n=Object(p.a)(e.friendsList);return n.find((function(e){return e.id==t.payload})).fav=!n.find((function(e){return e.id==t.payload})).fav,Object(S.a)(Object(S.a)({},e),{},{friendsList:n});case j:var i=Object(p.a)(e.friendsList),c=i.indexOf(i.find((function(e){return e.id==t.payload})));return i.splice(c,1),Object(S.a)(Object(S.a)({},e),{},{friendsList:i});default:return e}},E=Object(m.a)(C,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(s.a,{store:E,children:Object(o.jsx)(v,{})})}),document.getElementById("root")),_()}},[[34,1,2]]]);
//# sourceMappingURL=main.6e71688b.chunk.js.map