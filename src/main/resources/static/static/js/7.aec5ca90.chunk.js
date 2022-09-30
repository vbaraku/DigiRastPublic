(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[7],{610:function(e,t,n){"use strict";var a=n(7),i=Object(a.a)("div")((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.primary.light,minHeight:"100vh"}}));t.a=i},611:function(e,t,n){"use strict";var a=n(4),i=n(63),r=n(567),c=n(110),o=n(1),s=["children"];t.a=function(e){var t=e.children,n=Object(i.a)(e,s);return Object(o.jsx)(c.a,Object(a.a)(Object(a.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(o.jsx)(r.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},612:function(e,t,n){"use strict";var a=n(0);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},613:function(e,t,n){"use strict";var a=n(542),i=n(87),r=n(961),c=n(1);t.a=function(){return Object(c.jsx)(a.a,{direction:"row",justifyContent:"space-between",children:Object(c.jsx)(i.a,{variant:"subtitle2",component:r.a,href:"https://www.seerc.org/",target:"_blank",underline:"hover",children:"seerc.org"})})}},661:function(e,t,n){"use strict";n.p},662:function(e,t,n){"use strict";var a=n(73);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(88)),r=n(1),c=(0,i.default)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=c},663:function(e,t,n){"use strict";var a=n(73);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(88)),r=n(1),c=(0,i.default)((0,r.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.default=c},885:function(e,t,n){"use strict";var a=n(5),i=n(6),r=n(2),c=n(0),o=(n(12),n(9)),s=n(157),l=n(8),d=n(87),j=n(97),b=n(89),u=n(7),m=n(109),h=n(127);function p(e){return Object(m.a)("MuiInputAdornment",e)}var O=Object(h.a)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),x=n(11),v=n(1),f=["children","className","component","disablePointerEvents","disableTypography","position","variant"],g=Object(u.a)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["position".concat(Object(l.a)(n.position))],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return Object(r.a)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:t.palette.action.active},"filled"===n.variant&&Object(a.a)({},"&.".concat(O.positionStart,"&:not(.").concat(O.hiddenLabel,")"),{marginTop:16}),"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})})),w=c.forwardRef((function(e,t){var n=Object(x.a)({props:e,name:"MuiInputAdornment"}),a=n.children,u=n.className,m=n.component,h=void 0===m?"div":m,O=n.disablePointerEvents,w=void 0!==O&&O,y=n.disableTypography,z=void 0!==y&&y,k=n.position,S=n.variant,C=Object(i.a)(n,f),P=Object(b.a)()||{},I=S;S&&P.variant,P&&!I&&(I=P.variant);var E=Object(r.a)({},n,{hiddenLabel:P.hiddenLabel,size:P.size,disablePointerEvents:w,position:k,variant:I}),M=function(e){var t=e.classes,n=e.disablePointerEvents,a=e.hiddenLabel,i=e.position,r=e.size,c=e.variant,o={root:["root",n&&"disablePointerEvents",i&&"position".concat(Object(l.a)(i)),c,a&&"hiddenLabel",r&&"size".concat(Object(l.a)(r))]};return Object(s.a)(o,p,t)}(E);return Object(v.jsx)(j.a.Provider,{value:null,children:Object(v.jsx)(g,Object(r.a)({as:h,ownerState:E,className:Object(o.a)(M.root,u),ref:t},C,{children:"string"!==typeof a||z?Object(v.jsxs)(c.Fragment,{children:["start"===k?Object(v.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):null,a]}):Object(v.jsx)(d.a,{color:"text.secondary",children:a})}))})}));t.a=w},953:function(e,t,n){"use strict";n.r(t);var a=n(41),i=n(29),r=n(540),c=n(558),o=n(542),s=n(87),l=n(307),d=n(610),j=n(611),b=n(4),u=n(42),m=n.n(u),h=n(59),p=n(10),O=n(63),x=n(0),v=n(34),f=n(23),g=n(68),w=n.n(g),y=n(61),z=n(567),k=n(578),S=n(883),C=n(559),P=n(884),I=n(885),E=n(577),M=n(579),A=n(5),B=n(6),H=n(2),L=(n(12),n(157)),R=n(494),V=n(286),_=n(32),F=n(1),W=Object(_.a)(Object(F.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),q=Object(_.a)(Object(F.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),D=Object(_.a)(Object(F.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),G=n(8),N=n(11),T=n(7),J=n(109),U=n(127);function K(e){return Object(J.a)("MuiCheckbox",e)}var Q=Object(U.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),X=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],Y=Object(T.a)(V.a,{shouldForwardProp:function(e){return Object(T.b)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat(Object(G.a)(n.color))]]}})((function(e){var t,n=e.theme,a=e.ownerState;return Object(H.a)({color:n.palette.text.secondary},!a.disableRipple&&{"&:hover":{backgroundColor:Object(R.a)("default"===a.color?n.palette.action.active:n.palette[a.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&(t={},Object(A.a)(t,"&.".concat(Q.checked,", &.").concat(Q.indeterminate),{color:n.palette[a.color].main}),Object(A.a)(t,"&.".concat(Q.disabled),{color:n.palette.action.disabled}),t))})),Z=Object(F.jsx)(q,{}),$=Object(F.jsx)(W,{}),ee=Object(F.jsx)(D,{}),te=x.forwardRef((function(e,t){var n,a,i=Object(N.a)({props:e,name:"MuiCheckbox"}),r=i.checkedIcon,c=void 0===r?Z:r,o=i.color,s=void 0===o?"primary":o,l=i.icon,d=void 0===l?$:l,j=i.indeterminate,b=void 0!==j&&j,u=i.indeterminateIcon,m=void 0===u?ee:u,h=i.inputProps,p=i.size,O=void 0===p?"medium":p,v=Object(B.a)(i,X),f=b?m:d,g=b?m:c,w=Object(H.a)({},i,{color:s,indeterminate:b,size:O}),y=function(e){var t=e.classes,n=e.indeterminate,a=e.color,i={root:["root",n&&"indeterminate","color".concat(Object(G.a)(a))]},r=Object(L.a)(i,K,t);return Object(H.a)({},t,r)}(w);return Object(F.jsx)(Y,Object(H.a)({type:"checkbox",inputProps:Object(H.a)({"data-indeterminate":b},h),icon:x.cloneElement(f,{fontSize:null!=(n=f.props.fontSize)?n:O}),checkedIcon:x.cloneElement(g,{fontSize:null!=(a=g.props.fontSize)?a:O}),ownerState:w,ref:t},v,{classes:y}))})),ne=n(571),ae=n(665),ie=n(664),re=n(129),ce=n(612),oe=n(128),se=n(662),le=n.n(se),de=n(663),je=n.n(de),be=(n(661),["loginProp"]),ue=function(e){e.loginProp;var t=Object(O.a)(e,be),n=Object(f.e)(),a=Object(i.a)(),d=Object(ce.a)(),j=Object(r.a)(a.breakpoints.down("md")),u=(Object(v.c)((function(e){return e.customization})),Object(x.useState)(!0)),g=Object(p.a)(u,2),A=g[0],B=g[1],H=new y.a,L=Object(re.a)(),R=(L.firebaseEmailPasswordSignIn,L.firebaseGoogleSignIn,Object(x.useState)(!1)),V=Object(p.a)(R,2),_=V[0],W=V[1],q=function(){W(!_)},D=function(e){e.preventDefault()};return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(c.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:Object(F.jsx)(c.a,{item:!0,xs:12,children:Object(F.jsxs)(z.a,{sx:{alignItems:"center",display:"flex"},children:[Object(F.jsx)(l.a,{sx:{flexGrow:1},orientation:"horizontal"}),Object(F.jsx)(s.a,{variant:"caption",fontSize:"16px",textAlign:j?"center":"inherit",children:"Enter your credentials to continue"}),Object(F.jsx)(l.a,{sx:{flexGrow:1},orientation:"horizontal"})]})})}),Object(F.jsx)(ie.a,{initialValues:{email:"",password:"",submit:null},validationSchema:ae.a().shape({email:ae.b().email("Must be a valid email").max(255).required("Email is required"),password:ae.b().max(255).required("Password is required")}),onSubmit:function(){var e=Object(h.a)(m.a.mark((function e(t,a){var i,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=a.setErrors,r=a.setStatus,c=a.setSubmitting;try{w.a.post("/login",{email:t.email,password:t.password}).then((function(e){H.set("Authorization",e.data,{maxAge:86400}),w.a.get("/api/user/is_registered").then((function(e){!0===e.data?(H.set("isRegistered",!0,{maxAge:86400}),n("/home",{replace:!0})):n("/registration",{replace:!0})}))}))}catch(o){console.error(o),d.current&&(r({success:!1}),i({submit:o.message}),c(!1))}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,i=e.handleBlur,r=e.handleChange,c=e.handleSubmit,s=e.isSubmitting,l=e.touched,d=e.values;return Object(F.jsxs)("form",Object(b.a)(Object(b.a)({noValidate:!0,onSubmit:c},t),{},{children:[Object(F.jsxs)(k.a,{fullWidth:!0,error:Boolean(l.email&&n.email),sx:Object(b.a)({},a.typography.customInput),children:[Object(F.jsx)(S.a,{htmlFor:"outlined-adornment-email-login",children:"Email Address"}),Object(F.jsx)(C.a,{id:"outlined-adornment-email-login",type:"email",value:d.email,name:"email",onBlur:i,onChange:r,label:"Email Address / Username",inputProps:{}}),l.email&&n.email&&Object(F.jsx)(P.a,{error:!0,id:"standard-weight-helper-text-email-login",children:n.email})]}),Object(F.jsxs)(k.a,{fullWidth:!0,error:Boolean(l.password&&n.password),sx:Object(b.a)({},a.typography.customInput),children:[Object(F.jsx)(S.a,{htmlFor:"outlined-adornment-password-login",children:"Password"}),Object(F.jsx)(C.a,{id:"outlined-adornment-password-login",type:_?"text":"password",value:d.password,name:"password",onBlur:i,onChange:r,endAdornment:Object(F.jsx)(I.a,{position:"end",children:Object(F.jsx)(E.a,{"aria-label":"toggle password visibility",onClick:q,onMouseDown:D,edge:"end",size:"large",children:_?Object(F.jsx)(le.a,{}):Object(F.jsx)(je.a,{})})}),label:"Password",inputProps:{}}),l.password&&n.password&&Object(F.jsx)(P.a,{error:!0,id:"standard-weight-helper-text-password-login",children:n.password})]}),Object(F.jsx)(o.a,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:Object(F.jsx)(M.a,{control:Object(F.jsx)(te,{checked:A,onChange:function(e){return B(e.target.checked)},name:"checked",color:"primary"}),label:"Remember me"})}),n.submit&&Object(F.jsx)(z.a,{sx:{mt:3},children:Object(F.jsx)(P.a,{error:!0,children:n.submit})}),Object(F.jsx)(z.a,{sx:{mt:2},children:Object(F.jsx)(oe.a,{children:Object(F.jsx)(ne.a,{disableElevation:!0,disabled:s,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]}))}})]})},me=n(208),he=n(613);t.default=function(){var e=Object(i.a)(),t=((new y.a).get("Authorization"),Object(r.a)(e.breakpoints.down("md")));return Object(F.jsx)(d.a,{children:Object(F.jsxs)(c.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(F.jsx)(c.a,{item:!0,xs:12,children:Object(F.jsx)(c.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(F.jsx)(c.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(F.jsx)(j.a,{children:Object(F.jsxs)(c.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(F.jsx)(c.a,{item:!0,sx:{mb:3},children:Object(F.jsx)(a.b,{to:"#",children:Object(F.jsx)(me.a,{})})}),Object(F.jsx)(c.a,{item:!0,xs:12,children:Object(F.jsx)(c.a,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(F.jsx)(c.a,{item:!0,children:Object(F.jsxs)(o.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(F.jsx)(s.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Hi, Welcome Back"}),Object(F.jsx)(s.a,{variant:"h2",fontSize:"16px",textAlign:t?"center":"inherit",children:"Project /tool description"})]})})})}),Object(F.jsx)(c.a,{item:!0,xs:12,children:Object(F.jsx)(ue,{})}),Object(F.jsx)(c.a,{item:!0,xs:12,children:Object(F.jsx)(l.a,{})}),Object(F.jsx)(c.a,{item:!0,xs:12,children:Object(F.jsx)(c.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(F.jsx)(s.a,{component:a.b,to:"/register",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})})})}),Object(F.jsx)(c.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(F.jsx)(he.a,{})})]})})}}}]);
//# sourceMappingURL=7.aec5ca90.chunk.js.map