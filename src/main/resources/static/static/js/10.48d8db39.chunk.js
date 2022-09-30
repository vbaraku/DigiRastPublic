(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[10],{883:function(e,a,t){"use strict";var r=t(5),n=t(6),i=t(2),l=t(0),o=(t(12),t(157)),s=t(130),c=t(89),d=t(547),u=t(108),j=t(11),b=t(7),h=t(109),O=t(127);function x(e){return Object(h.a)("MuiInputLabel",e)}Object(O.a)("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);var p=t(1),m=["disableAnimation","margin","shrink","variant"],v=Object(b.a)(d.a,{shouldForwardProp:function(e){return Object(b.b)(e)||"classes"===e},name:"MuiInputLabel",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[Object(r.a)({},"& .".concat(u.a.asterisk),a.asterisk),a.root,t.formControl&&a.formControl,"small"===t.size&&a.sizeSmall,t.shrink&&a.shrink,!t.disableAnimation&&a.animated,a[t.variant]]}})((function(e){var a=e.theme,t=e.ownerState;return Object(i.a)({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},t.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},"small"===t.size&&{transform:"translate(0, 17px) scale(1)"},t.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!t.disableAnimation&&{transition:a.transitions.create(["color","transform","max-width"],{duration:a.transitions.duration.shorter,easing:a.transitions.easing.easeOut})},"filled"===t.variant&&Object(i.a)({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===t.size&&{transform:"translate(12px, 13px) scale(1)"},t.shrink&&Object(i.a)({transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},"small"===t.size&&{transform:"translate(12px, 4px) scale(0.75)"})),"outlined"===t.variant&&Object(i.a)({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===t.size&&{transform:"translate(14px, 9px) scale(1)"},t.shrink&&{maxWidth:"calc(133% - 24px)",transform:"translate(14px, -9px) scale(0.75)"}))})),f=l.forwardRef((function(e,a){var t=Object(j.a)({name:"MuiInputLabel",props:e}),r=t.disableAnimation,l=void 0!==r&&r,d=t.shrink,u=Object(n.a)(t,m),b=Object(c.a)(),h=d;"undefined"===typeof h&&b&&(h=b.filled||b.focused||b.adornedStart);var O=Object(s.a)({props:t,muiFormControl:b,states:["size","variant","required"]}),f=Object(i.a)({},t,{disableAnimation:l,formControl:b,shrink:h,size:O.size,variant:O.variant,required:O.required}),g=function(e){var a=e.classes,t=e.formControl,r=e.size,n=e.shrink,l={root:["root",t&&"formControl",!e.disableAnimation&&"animated",n&&"shrink","small"===r&&"sizeSmall",e.variant],asterisk:[e.required&&"asterisk"]},s=Object(o.a)(l,x,a);return Object(i.a)({},a,s)}(f);return Object(p.jsx)(v,Object(i.a)({"data-shrink":h,ownerState:f,ref:a},u,{classes:g}))}));a.a=f},884:function(e,a,t){"use strict";var r=t(5),n=t(6),i=t(2),l=t(0),o=(t(12),t(9)),s=t(157),c=t(130),d=t(89),u=t(7),j=t(8),b=t(109),h=t(127);function O(e){return Object(b.a)("MuiFormHelperText",e)}var x=Object(h.a)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),p=t(11),m=t(1),v=["children","className","component","disabled","error","filled","focused","margin","required","variant"],f=Object(u.a)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,t.size&&a["size".concat(Object(j.a)(t.size))],t.contained&&a.contained,t.filled&&a.filled]}})((function(e){var a,t=e.theme,n=e.ownerState;return Object(i.a)({color:t.palette.text.secondary},t.typography.caption,(a={textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0},Object(r.a)(a,"&.".concat(x.disabled),{color:t.palette.text.disabled}),Object(r.a)(a,"&.".concat(x.error),{color:t.palette.error.main}),a),"small"===n.size&&{marginTop:4},n.contained&&{marginLeft:14,marginRight:14})})),g=l.forwardRef((function(e,a){var t=Object(p.a)({props:e,name:"MuiFormHelperText"}),r=t.children,l=t.className,u=t.component,b=void 0===u?"p":u,h=Object(n.a)(t,v),x=Object(d.a)(),g=Object(c.a)({props:t,muiFormControl:x,states:["variant","size","disabled","error","filled","focused","required"]}),y=Object(i.a)({},t,{component:b,contained:"filled"===g.variant||"outlined"===g.variant,variant:g.variant,size:g.size,disabled:g.disabled,error:g.error,filled:g.filled,focused:g.focused,required:g.required}),z=function(e){var a=e.classes,t=e.contained,r=e.size,n=e.disabled,i=e.error,l=e.filled,o=e.focused,c=e.required,d={root:["root",n&&"disabled",i&&"error",r&&"size".concat(Object(j.a)(r)),t&&"contained",o&&"focused",l&&"filled",c&&"required"]};return Object(s.a)(d,O,a)}(y);return Object(m.jsx)(f,Object(i.a)({as:b,ownerState:y,className:Object(o.a)(z.root,l),ref:a},h,{children:" "===r?Object(m.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):r}))}));a.a=g},899:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return z}));var r=t(42),n=t.n(r),i=t(59),l=t(10),o=t(87),s=t(567),c=t(578),d=t(883),u=t(951),j=t(958),b=t(959),h=t(571),O=t(0),x=t.n(O),p=t(110),m=(t(128),t(68)),v=t.n(m),f=t(61),g=t(23),y=t(1);function z(){var e=x.a.useState(""),a=Object(l.a)(e,2),t=a[0],r=a[1],O=x.a.useState(""),m=Object(l.a)(O,2),z=m[0],S=m[1],T=x.a.useState(""),k=Object(l.a)(T,2),C=k[0],w=k[1],I=x.a.useState(""),E=Object(l.a)(I,2),F=E[0],q=E[1],M=x.a.useState(""),P=Object(l.a)(M,2),L=P[0],R=P[1],W=x.a.useState(""),A=Object(l.a)(W,2),V=A[0],H=A[1],G=x.a.useState(""),N=Object(l.a)(G,2),B=N[0],D=N[1],J=x.a.useState(""),U=Object(l.a)(J,2),_=U[0],K=U[1],Q=x.a.useState("none"),X=Object(l.a)(Q,2),Y=X[0],Z=X[1],$=x.a.useState("none"),ee=Object(l.a)($,2),ae=ee[0],te=ee[1],re=x.a.useState("none"),ne=Object(l.a)(re,2),ie=ne[0],le=ne[1],oe=new f.a,se=(Object(g.e)(),function(){var e=Object(i.a)(n.a.mark((function e(a){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,v.a.put("/api/user/",{vetType:t,size:z,type:C,country:F,job:L,workExp:V,gender:B,age:_}).then((function(){v.a.get("/api/user/is_registered").then((function(e){oe.set("isRegistered",e.data,{path:"/"}),window.location.replace("/home")}))}));case 4:r=e.sent,console.log(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}());return Object(y.jsxs)(p.a,{title:"Registration page",children:[Object(y.jsx)(o.a,{variant:"body2",children:"Please fill in your organizational information:"}),Object(y.jsx)(s.a,{sx:{minWidth:120,marginTop:2},children:Object(y.jsxs)("form",{onSubmit:se,children:[Object(y.jsxs)(c.a,{fullWidth:!0,children:[Object(y.jsx)(d.a,{id:"VET organization type",htmlFor:"VET organization type",children:"VET organization type:"}),Object(y.jsxs)(u.a,{required:!0,labelId:"VET organization type",id:"VET organization type",value:t,label:"VET organization type:",onChange:function(e){"Other"===e.target.value?(te(""),r(e.target.value)):(te("none"),r(e.target.value))},children:[Object(y.jsx)(j.a,{value:"Initial vocational education and training institutions (IVET)",children:"Initial vocational education and training institutions (IVET)"}),Object(y.jsx)(j.a,{value:"Continuing vocational education and training institutions (CVET)",children:"Continuing vocational education and training institutions (CVET)"}),Object(y.jsx)(j.a,{value:"Higher Education Institutions",children:"Higher Education Institutions"}),Object(y.jsx)(j.a,{value:"Research & amp; Development Institutions",children:"Research & amp; Development Institutions"}),Object(y.jsx)(j.a,{value:"Other",children:"Other"})]}),Object(y.jsx)(b.a,{sx:{marginTop:1.5,marginLeft:1,display:ae},onChange:function(e){r(e.target.value)},id:"outlined-basic",helperText:" Please specify other organization type",variant:"standard"})]}),Object(y.jsxs)(c.a,{fullWidth:!0,sx:{marginTop:2},children:[Object(y.jsx)(d.a,{id:"size",htmlFor:"size",children:"Size:"}),Object(y.jsxs)(u.a,{required:!0,labelId:"size",id:"size",value:z,label:"Size:",onChange:function(e){S(e.target.value)},children:[Object(y.jsx)(j.a,{value:"Micro",children:"Micro: employment up to 9 persons"}),Object(y.jsx)(j.a,{value:"Small",children:"Small: 10-50 employers"}),Object(y.jsx)(j.a,{value:"Medium",children:"Medium: 51-250 employers"}),Object(y.jsx)(j.a,{value:"Large",children:"Large: over 251 employers"})]})]}),Object(y.jsxs)(c.a,{fullWidth:!0,sx:{marginTop:2},children:[Object(y.jsx)(d.a,{id:"typeOfOrg",htmlFor:"typeOfOrg",children:"Type of organization:"}),Object(y.jsxs)(u.a,{required:!0,labelId:"typeOfOrg",id:"typeOfOrg",value:C,label:"Type of organization:",onChange:function(e){w(e.target.value)},children:[Object(y.jsx)(j.a,{value:"Public",children:"Public"}),Object(y.jsx)(j.a,{value:"Private",children:"Private"})]})]}),Object(y.jsxs)(c.a,{fullWidth:!0,sx:{marginTop:2},children:[Object(y.jsx)(d.a,{id:"country",htmlFor:"country",children:"Country:"}),Object(y.jsxs)(u.a,{required:!0,labelId:"country",id:"country",value:F,label:"Country:",onChange:function(e){"Other"===e.target.value?(le(""),q(e.target.value)):(le("none"),q(e.target.value))},children:[Object(y.jsx)(j.a,{value:"Austria",children:"Austria"}),Object(y.jsx)(j.a,{value:"Belgium",children:"Belgium"}),Object(y.jsx)(j.a,{value:"Bulgaria",children:"Bulgaria"}),Object(y.jsx)(j.a,{value:"Croatia",children:"Croatia"}),Object(y.jsx)(j.a,{value:"Republic of Cyprus",children:"Republic of Cyprus"}),Object(y.jsx)(j.a,{value:"Czech Republic",children:"Czech Republic"}),Object(y.jsx)(j.a,{value:"Denmark",children:"Denmark"}),Object(y.jsx)(j.a,{value:"Estonia",children:"Estonia"}),Object(y.jsx)(j.a,{value:"Finland",children:"Finland"}),Object(y.jsx)(j.a,{value:"France",children:"France"}),Object(y.jsx)(j.a,{value:"Germany",children:"Germany"}),Object(y.jsx)(j.a,{value:"Greece",children:"Greece"}),Object(y.jsx)(j.a,{value:"Hungary",children:"Hungary"}),Object(y.jsx)(j.a,{value:"Ireland",children:"Ireland"}),Object(y.jsx)(j.a,{value:"Italy",children:"Italy"}),Object(y.jsx)(j.a,{value:"Latvia",children:"Latvia"}),Object(y.jsx)(j.a,{value:"Lithuania",children:"Lithuania"}),Object(y.jsx)(j.a,{value:"Luxembourg",children:"Luxembourg"}),Object(y.jsx)(j.a,{value:"Malta",children:"Malta"}),Object(y.jsx)(j.a,{value:"Netherlands",children:"Netherlands"}),Object(y.jsx)(j.a,{value:"Poland",children:"Poland"}),Object(y.jsx)(j.a,{value:"Portugal",children:"Portugal"}),Object(y.jsx)(j.a,{value:"Romania",children:"Romania"}),Object(y.jsx)(j.a,{value:"Slovakia",children:"Slovakia"}),Object(y.jsx)(j.a,{value:"Slovenia",children:"Slovenia"}),Object(y.jsx)(j.a,{value:"Spain",children:"Spain"}),Object(y.jsx)(j.a,{value:"Sweden",children:"Sweden"}),Object(y.jsx)(j.a,{value:"The United Kingdom",children:"The United Kingdom"}),Object(y.jsx)(j.a,{value:"Other",children:"Other"})]}),Object(y.jsx)(b.a,{sx:{marginTop:1.5,marginLeft:1,display:ie},onChange:function(e){q(e.target.value)},id:"outlined-basic",helperText:" Please specify other country",variant:"standard"})]}),Object(y.jsx)(o.a,{sx:{marginTop:4},variant:"body2",children:"Please fill in your personal information:"}),Object(y.jsxs)(c.a,{fullWidth:!0,sx:{marginTop:2},children:[Object(y.jsx)(d.a,{id:"jobPosition",htmlFor:"jobPosition",children:"Job position:"}),Object(y.jsxs)(u.a,{required:!0,labelId:"jobPosition",id:"jobPosition",value:L,label:"Job position:",onChange:function(e){"Other"===e.target.value?(Z(""),R(e.target.value)):(Z("none"),R(e.target.value))},children:[Object(y.jsx)(j.a,{value:"Top management",children:"Top management"}),Object(y.jsx)(j.a,{value:"Middle management",children:"Middle management"}),Object(y.jsx)(j.a,{value:"Specialist",children:"Specialist"}),Object(y.jsx)(j.a,{value:"Other",children:"Other"})]}),Object(y.jsx)(b.a,{sx:{marginTop:1.5,marginLeft:1,display:Y},onChange:function(e){R(e.target.value)},id:"outlined-basic",helperText:" Please specify other job position",variant:"standard"})]}),Object(y.jsxs)(c.a,{fullWidth:!0,sx:{marginTop:2},children:[Object(y.jsx)(d.a,{id:"workExp",htmlFor:"workExp",children:"Work experience in current organisation:"}),Object(y.jsxs)(u.a,{required:!0,labelId:"workExp",id:"workExp",value:V,label:"Work experience in current organisation:",onChange:function(e){H(e.target.value)},children:[Object(y.jsx)(j.a,{value:"Up to 1 year",children:"Up to 1 year"}),Object(y.jsx)(j.a,{value:"2-5 years",children:"2-5 years"}),Object(y.jsx)(j.a,{value:"6-10 years",children:"6-10 years"}),Object(y.jsx)(j.a,{value:"11-15 years",children:"11-15 years"}),Object(y.jsx)(j.a,{value:"16-25 years",children:"16-25 years"}),Object(y.jsx)(j.a,{value:"Over 26 years",children:"Over 26 years"})]})]}),Object(y.jsxs)(c.a,{fullWidth:!0,sx:{marginTop:2},children:[Object(y.jsx)(d.a,{id:"gender",htmlFor:"gender",children:"Gender"}),Object(y.jsxs)(u.a,{required:!0,labelId:"gender",id:"gender",value:B,label:"Gender:",onChange:function(e){D(e.target.value)},children:[Object(y.jsx)(j.a,{value:"Female",children:"Female"}),Object(y.jsx)(j.a,{value:"Male",children:"Male"}),Object(y.jsx)(j.a,{value:"Prefer not to answer",children:"Prefer not to answer"})]})]}),Object(y.jsxs)(c.a,{fullWidth:!0,sx:{marginTop:2},children:[Object(y.jsx)(d.a,{id:"age",htmlFor:"age",children:"Age"}),Object(y.jsxs)(u.a,{required:!0,labelId:"age",id:"age",value:_,label:"Age:",onChange:function(e){K(e.target.value)},children:[Object(y.jsx)(j.a,{value:"18-24",children:"18-24"}),Object(y.jsx)(j.a,{value:"25-39",children:"25-39"}),Object(y.jsx)(j.a,{value:"40-54",children:"40-54"}),Object(y.jsx)(j.a,{value:"55 or more",children:"55 or more"})]})]}),Object(y.jsx)(h.a,{sx:{marginTop:2,width:"150px"},variant:"contained",type:"submit",color:"primary",children:"Submit"})]})})]})}}}]);
//# sourceMappingURL=10.48d8db39.chunk.js.map