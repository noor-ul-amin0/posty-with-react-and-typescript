(this["webpackJsonpreact-with-ts"]=this["webpackJsonpreact-with-ts"]||[]).push([[0],{214:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(37),i=n.n(a),o=n(60),s=n(45),l=n(126),j=n(15),d=n(14),u=n(288),b=n(264),h=n(289),x=n(82),O=n(290),p=n(134),g=n.n(p),m=n(284),f=n(291),v=n(282),y=n(266),w=n(267),k=n(2);function C(e){var t=e.sideItems,n=e.isDrawerOpen,r=e.toggleDrawer,a=Object(j.d)();return Object(k.jsx)("div",{children:Object(k.jsx)(c.a.Fragment,{children:Object(k.jsx)(m.a,{open:n,onClose:r(!1),children:Object(k.jsx)(b.a,{sx:{width:250},role:"presentation",onClick:r(!1),onKeyDown:r(!1),children:Object(k.jsx)(f.a,{children:t.map((function(e){var t=e.id,n=e.title,r=e.icon,c=e.link;return Object(k.jsxs)(v.a,{button:!0,onClick:function(){return a(c||"/")},children:[Object(k.jsx)(y.a,{children:r}),Object(k.jsx)(w.a,{primary:n})]},t)}))})})})})})}var D=n(133),S=n.n(D),I=n(132),F=n.n(I),P=n(285),B=n(280),L=n(293),N=n(271),T=n(131),z=n.n(T),E=[{id:1,title:"Posts",icon:Object(k.jsx)(z.a,{}),link:"/posts"},{id:2,title:"Users",icon:Object(k.jsx)(F.a,{}),link:"/users"},{id:3,title:"Send email",icon:Object(k.jsx)(S.a,{})}];function Q(){var e=c.a.useState(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],a=c.a.useState(null),i=Object(d.a)(a,2),o=i[0],s=i[1],l=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&r(e)}},p=Object(j.d)(),m=function(){s(null),p("/profile")};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(b.a,{sx:{flexGrow:1},children:Object(k.jsx)(u.a,{position:"static",color:"secondary",children:Object(k.jsxs)(h.a,{children:[Object(k.jsx)(O.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:l(!0),children:Object(k.jsx)(g.a,{})}),Object(k.jsx)(x.a,{onClick:function(){return p("/")},variant:"h6",component:"div",sx:{flexGrow:1},children:Object(k.jsx)("span",{style:{cursor:"pointer"},children:"Posty"})}),Object(k.jsx)(P.a,{color:"inherit",onClick:function(){},children:"Login"}),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(O.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit",children:Object(k.jsx)(N.a,{})}),Object(k.jsxs)(B.a,{id:"menu-appbar",anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(o),onClose:m,children:[Object(k.jsx)(L.a,{onClick:m,children:"Logout"}),Object(k.jsx)(L.a,{onClick:m,children:"Profile"})]})]})]})})}),Object(k.jsx)(C,{sideItems:E,isDrawerOpen:n,toggleDrawer:l})]})}var M,R=n(299),U=n(287),W=n(300),q=n(96),G=n(302),J=n(294),K=n(295),V=n(286),Y=n(297),A=n(296),H=n(298),X=n(136),Z=n.n(X),$=n(137),_=n.n($),ee=function(e){var t=e.post;return Object(k.jsxs)(J.a,{sx:{maxWidth:345,height:400,backgroundColor:"orange",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(k.jsx)(K.a,{avatar:Object(k.jsx)(V.a,{alt:t.owner.firstName,src:t.owner.picture}),action:Object(k.jsx)(O.a,{"aria-label":"settings",children:Object(k.jsx)(Z.a,{})}),title:"".concat(t.owner.firstName," ").concat(t.owner.lastName),subheader:new Date(t.publishDate).toUTCString()}),Object(k.jsx)(A.a,{component:"img",height:"194",image:t.image,alt:t.text}),Object(k.jsx)(Y.a,{children:Object(k.jsx)(x.a,{variant:"body2",color:"text.secondary",children:t.text})}),Object(k.jsx)(H.a,{disableSpacing:!0,children:Object(k.jsxs)(O.a,{"aria-label":"add to favorites",children:[Object(k.jsx)(_.a,{}),Object(k.jsx)(x.a,{variant:"body2",color:"text.primary",children:t.likes})]})})]})},te=n(78),ne=n.n(te),re=ne.a.create({headers:{"app-id":"616d0a3c4c077651689d16bd"},baseURL:"https://dummyapi.io/data/v1"}),ce=function(e,t){return Object(s.useQuery)(["posts",e],(function(){return re.get("/post?limit=".concat(t,"&page=").concat(e)).then((function(e){return e.data}))}),{keepPreviousData:!0})},ae=n(281),ie=n(278),oe=n(273),se=n(48),le=n(17),je=n(138),de=Object(le.css)(M||(M=Object(se.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),ue=function(){return Object(k.jsx)(U.a,{container:!0,spacing:0,direction:"column",alignItems:"center",sx:{margin:"0",position:"absolute",top:"50%"},children:Object(k.jsx)("div",{className:"sweet-loading",children:Object(k.jsx)(je.RingLoader,{color:"#85144b",loading:!0,css:de,size:100})})})};function be(e,t){return e?Math.floor(e/t):0}var he=n(6),xe=n(272),Oe=n(276),pe=Object(Oe.a)((function(e){var t,n,r;return{toTop:(r={zIndex:2,position:"fixed",bottom:"3vh",backgroundColor:"#c2185b",color:"white","&:hover, &.Mui-focusVisible":{transition:"0.4s",color:"white",backgroundColor:"#ce93d8"},right:"5%"},Object(he.a)(r,null===(t=e.breakpoints)||void 0===t?void 0:t.up("xs"),{right:"5%",backgroundColor:"rgb(220,220,220,0.7)"}),Object(he.a)(r,null===(n=e.breakpoints)||void 0===n?void 0:n.up("lg"),{right:"6.5%"}),r)}})),ge=function(e){var t=e.showBelow,n=pe(),c=Object(r.useState)(!t),a=Object(d.a)(c,2),i=a[0],o=a[1],s=function(){window.pageYOffset>t?i||o(!0):i&&o(!1)};return Object(r.useEffect)((function(){if(t)return window.addEventListener("scroll",s),function(){return window.removeEventListener("scroll",s)}})),Object(k.jsx)("div",{children:i&&Object(k.jsx)(O.a,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:n.toTop,"aria-label":"to top",component:"span",children:Object(k.jsx)(xe.a,{})})})},me=Object(q.a)();function fe(){var e,t=r.useState(1),n=Object(d.a)(t,2),c=n[0],a=n[1],i=ce(c-1,20),o=i.data,s=i.isLoading,l=i.error;return l?Object(k.jsx)(oe.a,{children:Object(k.jsx)(ae.a,{variant:"filled",severity:"error",children:l.message})}):s?Object(k.jsx)(ue,{}):Object(k.jsx)(oe.a,{children:Object(k.jsxs)(G.a,{theme:me,children:[Object(k.jsx)(R.a,{}),Object(k.jsxs)(W.a,{maxWidth:"lg",sx:{mt:3},children:[Object(k.jsx)("main",{children:Object(k.jsx)(U.a,{container:!0,spacing:2,children:null===o||void 0===o||null===(e=o.data)||void 0===e?void 0:e.map((function(e){return Object(k.jsx)(U.a,{item:!0,xs:6,md:3,children:Object(k.jsx)(ee,{post:e})},e.id)}))})}),Object(k.jsx)(ge,{showBelow:400}),Object(k.jsx)(oe.a,{display:"flex",width:"100%",mt:2,alignItems:"center",justifyContent:"center",children:Object(k.jsx)(ie.a,{page:c,onChange:function(e,t){a(t)},count:be(null===o||void 0===o?void 0:o.total,20),variant:"outlined",color:"secondary"})})]})]})})}var ve=n(292);function ye(){var e=Object(r.useState)({text:"",author:""}),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){ne.a.get("https://api.quotable.io/random?tags=technology,famous-quotes").then((function(e){200===e.status&&c({text:e.data.content,author:e.data.author})})).catch((function(e){}))}),[]),Object(k.jsxs)(ve.a,{sx:{position:"relative",backgroundColor:"grey.800",color:"#fff",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"100vh",backgroundImage:"url(https://source.unsplash.com/random)"},children:[Object(k.jsx)("img",{style:{display:"none"},src:"https://source.unsplash.com/random",alt:"https://source.unsplash.com/random"}),Object(k.jsx)(b.a,{sx:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"}}),Object(k.jsx)(U.a,{container:!0,children:Object(k.jsx)(U.a,{item:!0,md:6,children:Object(k.jsxs)(b.a,{sx:{position:"relative",p:{xs:3,md:6},pr:{md:0}},children:[Object(k.jsx)(x.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0,children:"Posty"}),Object(k.jsxs)(x.a,{variant:"h5",color:"inherit",paragraph:!0,children:[n.text,"!!!"]}),Object(k.jsx)(x.a,{sx:{textDecoration:"underline"},gutterBottom:!0,variant:"h3",color:"orange",children:n.author})]})})})]})}var we=function(e,t){return Object(s.useQuery)(["users",e],(function(){return re.get("/user?limit=".concat(t,"&page=").concat(e)).then((function(e){return e.data}))}),{keepPreviousData:!0})},ke=n(275),Ce=n(301),De=function(e){var t=e.users;return Object(k.jsx)("div",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(k.jsxs)(f.a,{sx:{width:"100%",bgcolor:"background.paper"},children:[Object(k.jsxs)(v.a,{alignItems:"flex-start",sx:{cursor:"pointer"},children:[Object(k.jsx)(Ce.a,{children:Object(k.jsx)(V.a,{alt:e.firstName,src:e.picture})}),Object(k.jsx)(w.a,{primary:"Brunch this weekend?",secondary:Object(k.jsxs)(r.Fragment,{children:[Object(k.jsx)(x.a,{sx:{display:"inline",cursor:"pointer"},component:"span",variant:"body2",color:"text.secondary",children:"".concat(e.firstName," ").concat(e.lastName)})," \u2014 I'll be in your neighborhood doing errands this\u2026"]})})]}),Object(k.jsx)(ke.a,{variant:"inset",component:"li"})]},e.id)}))})},Se=Object(q.a)();function Ie(){var e=r.useState(1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=we(n-1,20),i=a.data,o=a.isFetching,s=a.error;return s?Object(k.jsx)(oe.a,{children:Object(k.jsx)(ae.a,{variant:"filled",severity:"error",children:s.message})}):o?Object(k.jsx)(ue,{}):Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(G.a,{theme:Se,children:[Object(k.jsx)(R.a,{}),Object(k.jsxs)(W.a,{maxWidth:"lg",sx:{mt:3},children:[Object(k.jsx)("main",{children:Object(k.jsx)(De,{users:null===i||void 0===i?void 0:i.data})}),Object(k.jsx)(ge,{showBelow:400}),Object(k.jsx)(oe.a,{display:"flex",width:"100%",mt:2,alignItems:"center",justifyContent:"center",children:Object(k.jsx)(ie.a,{page:n,onChange:function(e,t){c(t)},count:be(null===i||void 0===i?void 0:i.total,20),variant:"outlined",color:"secondary"})})]})]})})}var Fe=function(){return Object(k.jsx)("div",{children:"Profile"})},Pe=function(e){return[{path:"/",element:Object(k.jsx)(ye,{})},{path:"/posts",element:Object(k.jsx)(fe,{})},{path:"/users",element:Object(k.jsx)(Ie,{})},{path:"/profile",element:Object(k.jsx)(Fe,{})}]};var Be=function(){var e=Object(j.f)(Pe());return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Q,{}),e]})},Le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,304)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},Ne=(n(214),new s.QueryClient);i.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsxs)(s.QueryClientProvider,{client:Ne,children:[Object(k.jsx)(o.a,{children:Object(k.jsx)(Be,{})}),",",Object(k.jsx)(l.ReactQueryDevtools,{initialIsOpen:!1})]})}),document.getElementById("root")),Le()}},[[215,1,2]]]);
//# sourceMappingURL=main.f9223cdc.chunk.js.map