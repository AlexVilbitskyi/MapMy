(this["webpackJsonpmap-my"]=this["webpackJsonpmap-my"]||[]).push([[0],{113:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=(a(113),a(14)),s=Object(n.createContext)();function l(){return Object(n.useContext)(s)}var d=a(67),u=a(99),p=a(12),j=a(2);var b=function(e){var t=e.component,a=Object(u.a)(e,["component"]),n=l().authTokens;return Object(j.jsx)(p.b,Object(d.a)(Object(d.a)({},a),{},{render:function(e){return n?Object(j.jsx)(t,Object(d.a)({},e)):Object(j.jsx)(p.a,{to:"/login"})}}))},m=a(155),g=a(55),h=a(170),x=a(171),O=a(169),f=a(153),A=a(20),v=a(18),k=a.n(v),w=a(34),B=a(173),C=a(156),I=a(157),y=a(172),N=a(159),P=a(160),S=a(161),T=a(86),R=a.n(T),E=a(87),M=a.n(E),F=a(82),z=a.n(F);var Q=function(){var e=l().setAuthTokens;return Object(j.jsx)(z.a,{clientId:"300952943595-7ktvmo6cj9s7d40258sh2bohj76d6fn7.apps.googleusercontent.com",buttonText:"Sign in with Google",onSuccess:function(t){t.accessToken&&(localStorage.setItem("tokens",JSON.stringify(t.accessToken)),e(t.accessToken))},onFailure:function(){alert("Failed to log in")},cookiePolicy:"single_host_origin",responseType:"code,token"})},U=a.p+"static/media/backgrondSignIn.574940b3.svg",Y=Object(f.a)((function(e){return{root:{height:"100vh",background:"url(".concat(U,") 0px 20px no-repeat"),backgroundSize:"contain"},paper:{display:"flex",flexDirection:"column",alignItems:"center"},logo:{marginTop:e.spacing(10),marginBottom:e.spacing(10)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},customDivider:{backgroundColor:e.palette.primary.main,height:e.spacing(.25)},customDividerGrid:{marginTop:e.spacing(2)},customDividerText:{textAlign:"center",color:e.palette.primary.main,fontWeight:"bold"},google:{display:"flex",justifyContent:"center"}}}));function H(e){var t=e.isLoggedIn,a=e.setIsLoggedIn,r=Object(n.useState)("ExampleEmail"),c=Object(o.a)(r,2),i=c[0],s=c[1],d=Object(n.useState)("ExamplePassword"),u=Object(o.a)(d,2),b=u[0],g=u[1],h=Object(n.useState)(null),x=Object(o.a)(h,2),O=x[0],f=x[1],A=Object(n.useState)(!1),v=Object(o.a)(A,2),T=v[0],E=v[1],F=l().setAuthTokens,z=Y(),U=Object(n.useCallback)((function(){a(!0)}),[a]),H=Object(n.useCallback)((function(e){e.preventDefault(),"ExamplePassword"!==e.target.elements.password.value?f("invalid_password"):"ExampleEmail"!==e.target.elements.email.value?f("invalid_email"):(f(null),W())}),[]),W=Object(n.useCallback)(Object(w.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={email:i,password:b},e.prev=1,e.next=4,Promise.all([F(t),U]);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])}))),[i,b]);return t?Object(j.jsx)(p.a,{to:"/"}):Object(j.jsx)("div",{className:z.root,children:Object(j.jsx)(m.a,{component:"main",maxWidth:"xs",children:Object(j.jsxs)("div",{className:z.paper,children:[Object(j.jsx)("img",{src:"data:image/png;base64,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",className:z.logo,alt:"logo"}),Object(j.jsxs)("form",{className:z.form,onSubmit:H,noValidate:!0,children:[Object(j.jsx)(B.a,{component:"div",className:z.google,children:Object(j.jsx)(Q,{})}),Object(j.jsxs)(C.a,{container:!0,spacing:0,alignContent:"center",alignItems:"center",className:z.customDividerGrid,children:[Object(j.jsx)(C.a,{item:!0,xs:5,children:Object(j.jsx)(I.a,{className:z.customDivider})}),Object(j.jsx)(C.a,{item:!0,xs:!0,className:z.customDividerText,children:"or"}),Object(j.jsx)(C.a,{item:!0,xs:5,children:Object(j.jsx)(I.a,{className:z.customDivider})})]}),Object(j.jsx)(y.a,{error:"invalid_email"===O,helperText:"invalid_email"===O?"Email is incorrect!":"",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",size:"small",value:i,onChange:function(e){s(e.target.value)}}),Object(j.jsx)(y.a,{error:"invalid_password"===O,helperText:"invalid_password"===O?"Password is incorrect!":"",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",id:"password",autoComplete:"current-password",size:"small",value:b,onChange:function(e){g(e.target.value)},type:T?"text":"password",InputProps:{endAdornment:Object(j.jsx)(N.a,{position:"end",children:Object(j.jsx)(P.a,{"aria-label":"Toggle password visibility",onClick:function(){E(!T)},onMouseDown:function(e){e.preventDefault()},children:T?Object(j.jsx)(R.a,{}):Object(j.jsx)(M.a,{})})})}}),Object(j.jsx)(S.a,{type:"submit",fullWidth:!0,variant:"contained",className:z.submit,color:"primary",size:"large",children:"Sign In"})]})]})})})}var W=a(66),L=Object(f.a)((function(e){return{pointName:{position:"absolute",top:"100%",left:"50%",height:"30px",transform:"translate(-50%, -100%)",maxWidth:"100px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis","&:hover":{zIndex:1}},marker:{position:"absolute",top:"100%",left:"50%",width:"26px",height:"30px",transform:"translate(-50%, -50%)","&:hover":{zIndex:1}}}}));var X=function(e){var t=e.text,a=e.selected,n=L();return Object(j.jsxs)(r.a.Fragment,{children:[Object(j.jsx)(g.a,{component:"h1",variant:"caption",align:"left",color:"primary",className:n.pointName,children:t}),Object(j.jsx)("img",{src:a?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAdCAYAAABfeMd1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO6SURBVHgBxVZbaxtHFD6jXe1KcmXJVK7wQ0FxTQquaeoaSulL3H9QCoY+lRLat5Sa/gL1rW/tS4tpUieUQhMMwf0BBRf60AuGEmKREJsosRPHsezI1sV700y+s9q1ZSHZsRXIB4eZncv5zm1mVtAxeCc3nXYMb1ooOi/wqYjSaMto/yehrjacxp+3izPFo3SIoybH3rz4FUnKs+Luq1RRkfqmcPfHq91WaF3GxdjZi3ml6Fv0Y3QkBDwTH2Uz74knW/8udFzRPqCUEm+f/fIzSTRLJ4WQX9+688P3QiC43UiaBBfOSEr8gakcnRxlFY2+USh895TVhYORVkIgolT8w1MSMNLCtaepzfhDJPwthfiUeoAicX5iYkJr1e13EKaQRMPAOeoN5xYXF/VAt9gn4TgFfR2WpKgHiOZ+35PA+CZJPp8PSaKo+V3qAby/v7/fYH2c432SpaUlMTQ0pCWTSU2pRoF6AO/f3d0Nc8LGN5nm5ubE+vp6pFKpRKRn/UM9wHF3blAQLhTAQU4mJycpm82qvr4+8fjJX78QyQqdApLko53avf/Cb0RG7ZMsLCyQlFLUajXaqS9XLHtrhk4By3o8Uyr9/dDnO4AK46Y2NzcbwaS38uD6r7azdZlOABh26d7qjd/RbcAD2UrkX5BcXWtra5Ht7W3+5hqPbu/cuplKDmu6lnj3OALbKc2uPLj2E3fj8fgeImKzscVi0Qs98ZFKpXwvkBcXrQNxl+9fu2RbpdnjCHgdrzdN04lEIm4mk2HlHJmDnMATNTw87JPous5WWIZh2NFo1Fle7U60Z21eAcHPvI73gMCGF06pVPJJVMtVEoIJNVSZsbGxEUe/DxKHgoTruubI6598bsYyF8LFFghWVq9fZgLM12OxWB39KlprcHDQKRQKbuhJK4kIRIe7JqzhxyrBZNgcgyIDRF8wkeVsXVm5/xsT2Bi3sKYeyB7zB17I9nfFB78nODOceBNESbSvQXKQUQgXwPuvpsc+RvsBZALyFuQMJAvpz+VybJjWZnzHN96/x0ZGRvRyuWxYlhX3PC+BcxSHESYrgfVsoY3Q1DAfWs+55BBJanmwwjx0cEjJ8fFxDyFzqtWqhWKoIak1jj0L1lQhPsHAwEBI4PG+doJunhzyiJrnxsABMxuNRrRer+s4C1LTNIcrEGeLK+tQyZ4UYmpqimPMV3cCVvNbkQ7kFWr+yYQPVE/wX8xAmREk1xwdHTWoQ5I7QaPnA+dJcUnOz8/7dxzuukP304vGsZa/FDwDOjmv1LFUvGMAAAAASUVORK5CYII=":"data:image/png;base64,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",className:n.marker,alt:"Marker"})]})},D=a(89),G=a(72),J={setItem:function(){var e=Object(w.a)(k.a.mark((function e(t,a){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve();case 2:localStorage.setItem(t,a);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),getItem:function(){var e=Object(w.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve();case 2:return e.abrupt("return",localStorage.getItem(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},V=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.t2=JSON,e.next=4,J.getItem("points");case 4:if(e.t3=e.sent,e.t1=e.t2.parse.call(e.t2,e.t3),e.t1){e.next=8;break}e.t1=[];case 8:e.t4=e.t1,(0,e.t0)(e.t4);case 10:case"end":return e.stop()}}),e)})))()}),[]);return{fetchedPoints:a,deletePoint:function(e){return Object(w.a)(k.a.mark((function t(){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.filter((function(t){return t.id!==e})),t.next=3,J.setItem("points",JSON.stringify(n));case 3:r(n||[]);case 4:case"end":return t.stop()}}),t)})))},togleLikePoint:function(e){return Object(w.a)(k.a.mark((function t(){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=Object(G.a)(a))[e].star=!n[e].star,t.next=4,J.setItem("points",JSON.stringify(n));case 4:r(n);case 5:case"end":return t.stop()}}),t)})))},addPoint:function(e,t){return Object(w.a)(k.a.mark((function n(){var c,i,o,s,l,d;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=[],a.length>0){i=Object(D.a)(a);try{for(i.s();!(o=i.n()).done;)s=o.value,c.push(s.helpNum)}catch(u){i.e(u)}finally{i.f()}c.sort((function(e,t){return t-e}))}return l={id:Date.now(),lat:e.lat,lng:e.lng,helpNum:c[0]+1||1,name:t||"Point"},d=[].concat(Object(G.a)(a),[l]),n.next=6,J.setItem("points",JSON.stringify(d));case 6:r(d);case 7:case"end":return n.stop()}}),n)})))}}},K=Object(f.a)((function(e){return{mapContainer:{marginTop:e.spacing(2),marginBottom:e.spacing(2),width:"100%",height:"calc(100vh - 148px)"},title:{marginTop:e.spacing(2),marginBottom:e.spacing(2)}}})),Z={center:{lat:49.8442411,lng:24.0263643},zoom:11};var q=function(e){var t=V().fetchedPoints,a=e.setSelectedTab;Object(n.useEffect)((function(){a("Map")}),[a]);var r=K();return Object(j.jsxs)(m.a,{className:r.mapContainer,children:[Object(j.jsx)(g.a,{component:"h1",variant:"subtitle2",align:"left",color:"primary",gutterBottom:!0,className:r.title,children:"Map"}),Object(j.jsx)(W.a,{defaultCenter:Z.center,defaultZoom:Z.zoom,children:t.length>0&&t.map((function(e){return Object(j.jsx)(X,{lat:e.lat,lng:e.lng,text:"Point"===e.name?"".concat(e.name," ").concat(e.helpNum):e.name,selected:e.star},e.id)}))})]})},_=a(174),$=a(162),ee=a(128),te=a(98),ae=a(176),ne="rgba(34, 152, 177, 0.4)",re="linear-gradient(90deg, #2B256C 0%, #2298B1 100%)",ce="rgba(43, 37, 108, 0.16)",ie=Object(te.a)({palette:{primary:{main:"#2B256C"},secondary:{main:ne},common:{lightGreen:ne,strongGreen:"#2298B1",linearGradientForButton:re},warning:{light:"rgba(253, 200, 69, .3)",main:"rgba(253, 200, 69, .5)",dark:"rgba(253, 200, 69, .7)"},background:{default:"#fff"},spacing:8},border:{borderColor:ce,borderWidth:1},overrides:{MuiDivider:{root:{backgroundColor:ce,height:1}},MuiListItem:{divider:{borderBottom:"".concat(1,"px solid ").concat(ce)}},MuiButton:{containedPrimary:{background:re}}}}),oe=Object(ae.a)(ie),se=Object(f.a)((function(e){return{mapContainer:{marginTop:e.spacing(2),marginBottom:e.spacing(2),width:"100%",height:"calc(100vh - 272px)"},title:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4),maxWidth:"80vw"}}})),le={center:{lat:49.8442411,lng:24.0263643},zoom:11};var de=function(e){var t=se(),a=V().addPoint,r=Object(n.useState)(null),c=Object(o.a)(r,2),i=c[0],s=c[1],l=Object(n.useState)(""),d=Object(o.a)(l,2),u=d[0],p=d[1],b=Object(n.useState)(!1),h=Object(o.a)(b,2),x=h[0],O=h[1],f=Object(n.useState)(!1),v=Object(o.a)(f,2),k=v[0],w=v[1],I=e.setSelectedTab;return Object(n.useEffect)((function(){I("none")}),[I]),Object(j.jsxs)(m.a,{children:[Object(j.jsx)(g.a,{component:"h1",variant:"subtitle2",align:"left",color:"primary",gutterBottom:!0,className:t.title,children:"Add Your New Point"}),Object(j.jsx)(B.a,{className:t.mapContainer,children:Object(j.jsx)(W.a,{defaultCenter:le.center,defaultZoom:le.zoom,onClick:function(e){s({lat:e.lat,lng:e.lng})},children:i&&Object(j.jsx)(X,{lat:i.lat,lng:i.lng})})}),Object(j.jsxs)(C.a,{container:!0,spacing:3,children:[Object(j.jsx)(C.a,{item:!0,xs:12,children:Object(j.jsx)(y.a,{id:"outlined-basic",label:"Point name",variant:"outlined",fullWidth:!0,size:"small",value:u,onChange:function(e){p(e.target.value)}})}),Object(j.jsx)(C.a,{item:!0,xs:6,children:Object(j.jsx)(S.a,{variant:"outlined",color:"secondary",fullWidth:!0,className:t.button,size:"large",children:Object(j.jsx)(A.b,{to:"/",style:{width:"100%",height:"100%",textDecoration:"none"},children:Object(j.jsx)(g.a,{variant:"subtitle2",className:t.buttonText,style:{color:oe.palette.common.strongGreen},children:"CANCEL"})})})}),Object(j.jsx)(C.a,{item:!0,xs:6,children:Object(j.jsx)(S.a,{variant:"contained",color:"primary",fullWidth:!0,className:t.button,size:"medium",onClick:function(){return function(){if(!i)return O(!0),null;a(i,u)(),w(!0),s(null),p("")}()},children:"ADD POINT"})})]}),Object(j.jsx)(_.a,{className:t.modal,open:x,onClose:function(){return O(!1)},onClick:function(){return O(!1)},closeAfterTransition:!0,BackdropComponent:$.a,BackdropProps:{timeout:500},children:Object(j.jsx)(ee.a,{in:x,children:Object(j.jsx)("div",{className:t.paper,children:Object(j.jsx)(g.a,{variant:"h6",align:"center",color:"primary",children:"Please put a marker on the map and name Your new Point."})})})}),Object(j.jsx)(_.a,{className:t.modal,open:k,onClose:function(){return w(!1)},onClick:function(){return w(!1)},closeAfterTransition:!0,BackdropComponent:$.a,BackdropProps:{timeout:500},children:Object(j.jsx)(ee.a,{in:k,children:Object(j.jsx)("div",{className:t.paper,children:Object(j.jsx)(g.a,{variant:"h6",align:"center",color:"primary",children:"New point added."})})})})]})},ue=a(158),pe=a(163),je=a(164),be=a(165),me=a(166),ge=a(92),he=a.n(ge),xe=a(90),Oe=a.n(xe),fe=a(91),Ae=a.n(fe),ve=a(178),ke=a(175),we=(a(122),Object(f.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},title:{marginTop:e.spacing(2),marginBottom:e.spacing(1)},list:{color:e.palette.primary.main,width:"100%",position:"relative",overflow:"auto",height:"calc(100vh - 200px)",maxHeight:"calc(100vh - 200px)"},button:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},buttonText:{margin:0,color:"#fff"},noPoints:{marginTop:"calc(50vh - 122px)",marginBottom:"calc(50vh - 122px)"}}})));var Be=function(e){var t=we(),a=V(),r=a.fetchedPoints,c=a.deletePoint,i=a.togleLikePoint,o=e.setSelectedTab;return Object(n.useEffect)((function(){o("Point")}),[o]),Object(j.jsxs)(m.a,{maxWidth:"sm",children:[Object(j.jsx)(g.a,{component:"h1",variant:"subtitle2",align:"left",color:"primary",gutterBottom:!0,className:t.title,children:"My Points"}),Object(j.jsxs)(ue.a,{className:t.list,children:[r.length>0&&Object(j.jsx)(I.a,{}),Object(j.jsx)(ve.a,{children:r.length>0&&r.map((function(e){return Object(j.jsx)(ke.a,{timeout:500,classNames:"item",children:Object(j.jsxs)(pe.a,{divider:!0,dense:!0,children:[Object(j.jsx)(je.a,{style:{color:oe.palette.common.strongGreen},onClick:i(r.indexOf(e)),children:e.star?Object(j.jsx)(Oe.a,{}):Object(j.jsx)(Ae.a,{})}),Object(j.jsx)(be.a,{id:e.id,primary:"Point"===e.name?"Point ".concat(e.helpNum):e.name,secondary:Object(j.jsxs)(g.a,{component:"span",variant:"subtitle2",color:"secondary",children:["lat: ",e.lat,Object(j.jsx)("br",{}),"lng: ",e.lng]})}),Object(j.jsx)(me.a,{children:Object(j.jsx)(P.a,{edge:"end","aria-label":"comments",onClick:c(e.id),children:Object(j.jsx)(he.a,{style:{color:oe.palette.common.lightGreen}})})})]},e.id)},e.id)}))}),0===r.length&&Object(j.jsx)(g.a,{component:"h1",variant:"subtitle1",align:"center",color:"primary",className:t.noPoints,children:"You haven't Points yet \ud83e\udd14"})]}),Object(j.jsx)(S.a,{variant:"contained",color:"primary",fullWidth:!0,className:t.button,size:"large",children:Object(j.jsx)(A.b,{to:"/addpoint",style:{width:"100%",height:"100%",textDecoration:"none"},children:Object(j.jsx)(g.a,{variant:"subtitle2",className:t.buttonText,children:"ADD NEW POINT"})})})]})},Ce=a(167),Ie=a(168),ye=a(177),Ne=a(93),Pe=a.n(Ne),Se=a(94),Te=a.n(Se),Re=a(97),Ee=a.n(Re),Me=a(95),Fe=a.n(Me),ze=a(96),Qe=a.n(ze),Ue=a.p+"static/media/appBarBackground.a84d55a5.png",Ye=a.p+"static/media/Logo.64643aa8.svg",He=a.p+"static/media/NavBackgr.574940b3.svg",We=Object(f.a)((function(e){return{icon:{marginRight:e.spacing(2)},appBar:{background:"url(".concat(Ue,")"),backgroundPosition:e.spacing(3.5),backgroundRepeat:"no-repeat",boxShadow:"none",borderBottom:"2px solid #2B256C",height:e.spacing(9)},menuButton:{background:"white",padding:e.spacing(2.8),":hover":{background:"#fff"}},menuCloseButton:{display:"absolute",top:e.spacing(1.5),left:"100%",zIndex:1201},logo:{margin:"auto"},space:{width:e.spacing(7)},nav:{color:e.palette.primary.main,"& .MuiListItem-root.Mui-selected":{background:"linear-gradient(90deg, rgba(43, 37, 108, 0.24) 0%, rgba(34, 152, 177, 0) 100%)",borderLeft:"2px solid #2B256C"},"& .MuiListItemIcon-root":{minWidth:e.spacing(6),marginLeft:e.spacing(2)},"& .MuiListItemText-primary":{fontSize:"1em"}},navIcon:{width:e.spacing(2.5)},drawer:{"& .MuiBackdrop-root":{background:"linear-gradient(180deg, rgba(43, 37, 108, 0.24) 0.09%, rgba(34, 152, 177, 0.24) 100.09%)",backdropFilter:"blur(1px)"}},drawerHeader:{marginBottom:e.spacing(5),"&::before":{content:'"Menu"',color:e.palette.primary.main,fontSize:"1em",fontWeight:"bold",display:"block",position:"absolute",padding:e.spacing(3.5),left:e.spacing(1),height:"100%",width:"100%",background:"url(".concat(Ye,")"),backgroundPosition:"82% 3%",backgroundRepeat:"no-repeat"}},drawerPaper:{overflowY:"visible",width:"65%",borderBottomRightRadius:"50px","&::before":{content:'" "',display:"block",position:"absolute",top:0,left:"100%",height:e.spacing(8.75),backgroundColor:"white",width:e.spacing(7.5),borderTopRightRadius:"50px",borderBottomRightRadius:"50px",borderRight:"1px solid rgba(0, 0, 0, 0.12)",boxShadow:"6px 0px 11px -5px rgba(0,0,0,0.5)"},"&::after":{content:'" "',height:"100%",width:"100%",background:"url(".concat(He,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"70vh 70vw"}},noDecoration:{textDecoration:"none !important",color:e.palette.primary.main}}}));var Le=function(e){var t=l().setAuthTokens,a=We(),c=Object(n.useState)(!1),i=Object(o.a)(c,2),s=i[0],d=i[1],u=e.selectedTab,p=function(){d(!1)};return Object(j.jsxs)(r.a.Fragment,{children:[Object(j.jsx)(Ce.a,{position:"relative",className:a.appBar,children:Object(j.jsxs)(Ie.a,{children:[Object(j.jsx)(P.a,{color:"primary","aria-label":"open drawer",onClick:function(){d(!0)},edge:"start",className:a.menuButton,children:Object(j.jsx)(Pe.a,{})}),Object(j.jsx)(Ie.a,{className:a.logo,children:Object(j.jsx)("img",{src:Ye,alt:"logo"})}),Object(j.jsx)(Ie.a,{className:a.space})]})}),Object(j.jsxs)(ye.a,{className:a.drawer,anchor:"left",open:s,classes:{paper:a.drawerPaper},children:[Object(j.jsx)("div",{className:a.drawerHeader,children:Object(j.jsx)(P.a,{onClick:p,className:a.menuCloseButton,color:"primary",children:Object(j.jsx)(Te.a,{})})}),Object(j.jsxs)(ue.a,{className:a.nav,children:[Object(j.jsx)(A.b,{to:"/",className:a.noDecoration,onClick:p,children:Object(j.jsxs)(pe.a,{button:!0,selected:"Point"===u,children:[Object(j.jsx)(je.a,{children:Object(j.jsx)(Fe.a,{color:"primary"})}),Object(j.jsx)(be.a,{primary:"My Points"})]})}),Object(j.jsx)(A.b,{to:"/map",className:a.noDecoration,onClick:p,children:Object(j.jsxs)(pe.a,{button:!0,selected:"Map"===u,children:[Object(j.jsx)(je.a,{children:Object(j.jsx)(Qe.a,{color:"primary"})}),Object(j.jsx)(be.a,{primary:"Map"})]})})]}),Object(j.jsx)(I.a,{}),Object(j.jsx)(ue.a,{children:Object(j.jsxs)(pe.a,{button:!0,className:a.nav,onClick:function(){t(!1)},children:[Object(j.jsx)(je.a,{children:Object(j.jsx)(Ee.a,{color:"primary"})}),Object(j.jsx)(be.a,{primary:"Log out"})]})})]})]})};var Xe=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(j.jsxs)(r.a.Fragment,{children:[Object(j.jsx)(Le,{selectedTab:a}),Object(j.jsxs)(p.d,{children:[Object(j.jsx)(p.b,{path:"/map",children:Object(j.jsx)(q,{setSelectedTab:c})}),Object(j.jsx)(p.b,{path:"/addpoint",children:Object(j.jsx)(de,{setSelectedTab:c})}),Object(j.jsx)(p.b,{path:"/",children:Object(j.jsx)(Be,{setSelectedTab:c})})]})]})},De=Object(f.a)((function(e){return{wrapper:{maxWidth:"576px",maxHeight:"800px"}}}));var Ge=function(){var e=JSON.parse(localStorage.getItem("tokens")),t=Object(n.useState)(e),a=Object(o.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(!1),l=Object(o.a)(i,2),d=l[0],u=l[1],f=Object(O.a)("(min-width:576px)"),v=De();return Object(j.jsx)(s.Provider,{value:{authTokens:r,setAuthTokens:function(e){localStorage.setItem("tokens",JSON.stringify(e)),c(e)}},children:Object(j.jsxs)(m.a,{className:f?v.wrapper:null,style:{padding:0},children:[Object(j.jsx)(g.a,{component:"h1",variant:"h4",align:"center",color:"primary",gutterBottom:!0,style:{display:f?null:"none"},children:"This is Mobile Web App. For better experience use smartphone. \ud83d\ude0a"}),Object(j.jsx)(A.a,{children:Object(j.jsxs)(h.a,{theme:oe,children:[Object(j.jsx)(x.a,{}),Object(j.jsxs)(p.d,{children:[Object(j.jsx)(p.b,{path:"/login",render:function(){return r?Object(j.jsx)(p.a,{to:"/"}):Object(j.jsx)(H,{isLoggedIn:d,setIsLoggedIn:u})}}),Object(j.jsx)(b,{path:"/",component:Xe})]})]})})]})})},Je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,180)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(Ge,{})}),document.getElementById("root")),Je()}},[[123,1,2]]]);
//# sourceMappingURL=main.200d9b76.chunk.js.map