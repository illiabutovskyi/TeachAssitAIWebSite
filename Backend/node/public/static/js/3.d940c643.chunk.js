"use strict";(self.webpackChunkteachai=self.webpackChunkteachai||[]).push([[3],{5003:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var s=n(4165),r=n(5861),a=n(9439),c=n(1243),i=n(2791),o=n(7689),l=n(1087),d=n(224),u=n(6355),h=n(7425),x=n(3853),p=n(9126),v=n(3872),m=n(583),j=n(6588),f=n(9085),k=n(184),y=function(){var e=(0,i.useContext)(m.S).user,t=(0,i.useState)(!1),n=(0,a.Z)(t,2),y=n[0],g=n[1],Z=(0,i.useState)(0),S=(0,a.Z)(Z,2),N=S[0],b=S[1],w=(0,i.useState)({}),C=(0,a.Z)(w,2),_=C[0],L=C[1],T=(0,i.useState)({}),I=(0,a.Z)(T,2),D=I[0],B=I[1],U=(0,i.useState)([]),A=(0,a.Z)(U,2),E=(A[0],A[1]),z=(0,i.useState)(!1),F=(0,a.Z)(z,2),H=F[0],P=F[1],W=(0,i.useState)(!0),G=(0,a.Z)(W,2),M=G[0],O=G[1],Q=(0,o.UO)().slug,R=(0,i.useState)(!1),$=(0,a.Z)(R,2),q=$[0],J=$[1],K=(0,o.s0)();(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t,n,r,a,i,o,l,d,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),t={},e.prev=2,e.next=5,c.Z.get("/auth/private",{headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("teachai_toke"))}});case 5:n=e.sent,r=n.data,t=r.user,L(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),L({});case 14:return e.prev=14,e.next=17,v.Z.post("/story/".concat(Q),{activeUser:t});case 17:i=e.sent,o=i.data,B(o.data),g(o.likeStatus),b(o.data.likeCount),E(o.data.likes),O(!1),l=o.data._id,null!==(a=t)&&void 0!==a&&a.readList&&(null!==(d=t)&&void 0!==d&&null!==(u=d.readList)&&void 0!==u&&u.includes(l)?J(!0):J(!1)),e.next=33;break;case 28:e.prev=28,e.t1=e.catch(14),B({}),console.log("Error: ",e.t1),K("/not-found");case 33:case"end":return e.stop()}}),e,null,[[2,11],[14,28]])})));return function(){return e.apply(this,arguments)}}();e()}),[Q,O]);var V=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return setTimeout((function(){g(!y)}),1500),e.prev=1,e.next=4,c.Z.post("/story/".concat(Q,"/like"),{activeUser:_},{headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("authToken"))}});case 4:t=e.sent,n=t.data,b(n.data.likeCount),E(n.data.likes),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),B({}),localStorage.removeItem("authToken"),K("/");case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Do you want to delete this post")){e.next=12;break}return e.prev=1,e.next=4,v.Z.delete("/story/".concat(Q,"/delete"));case 4:(0,f.Am)("Deleted Post Successfully"),setTimeout((function(){K("/blogs")}),2e3),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),alert("error"),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t,n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.post("/user/".concat(Q,"/addStoryToReadList"),{activeUser:_},{headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("authToken"))}});case 3:n=e.sent,r=n.data,J(r.status),document.getElementById("readListLength").textContent=null===(t=r.user)||void 0===t?void 0:t.readListLength,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,k.jsx)(k.Fragment,{children:M?(0,k.jsx)(d.Z,{}):(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)("div",{className:"Inclusive-detailStory-page",children:[(0,k.jsxs)("div",{className:"top_detail_wrapper",children:[(0,k.jsx)("h5",{children:D.title}),(0,k.jsxs)("div",{className:"story-general-info",children:[(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{className:"story-createdAt",children:function(e){var t=new Date(e);return t.toLocaleString("eng",{month:"long"}).substring(0,3)+" "+t.getDate()}(D.createdAt)}),(0,k.jsx)("b",{children:"-"}),(0,k.jsxs)("li",{className:"story-readtime",children:[D.readtime," min read"]})]}),e&&"admin"===(null===e||void 0===e?void 0:e.role)?(0,k.jsxs)("div",{className:"top_story_transactions",children:[(0,k.jsx)(l.rU,{className:"editStoryLink",to:"/admin/dashboard/story/".concat(D.slug,"/edit"),children:(0,k.jsx)(x.vPQ,{})}),(0,k.jsx)("span",{className:"deleteStoryLink",onClick:X,children:(0,k.jsx)(h.GnT,{})})]}):null]})]}),(0,k.jsxs)("div",{className:"story-content",children:[(0,k.jsx)("div",{className:"story-banner-img",children:(0,k.jsx)("img",{src:"".concat(j.backend_resourse,"/storyImages/").concat(D.image),alt:D.title})}),(0,k.jsx)("div",{className:" prose lg:prose-xl",style:{maxWidth:"100%"},children:(0,k.jsx)("div",{style:{width:"100%"},dangerouslySetInnerHTML:{__html:D.content}})})]}),(null===_||void 0===_?void 0:_.username)&&(0,k.jsxs)("div",{className:"fixed-story-options",children:[(0,k.jsxs)("ul",{children:[(0,k.jsxs)("li",{children:[(0,k.jsx)("i",{onClick:V,children:y?(0,k.jsx)(u.$0H,{color:"#0063a5"}):(0,k.jsx)(u.BgW,{})}),(0,k.jsxs)("b",{className:"likecount",style:y?{color:"#0063a5"}:{color:"rgb(99, 99, 99)"},children:["  ",N]})]}),(0,k.jsxs)("li",{children:[(0,k.jsx)("i",{onClick:function(e){P(!H)},children:(0,k.jsx)(u.ZvA,{})}),(0,k.jsx)("b",{className:"commentCount",children:D.commentCount})]})]}),(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{children:(0,k.jsx)("i",{onClick:Y,children:q?(0,k.jsx)(p.vw0,{color:"#0205b1"}):(0,k.jsx)(p.DrN,{})})}),(0,k.jsxs)("li",{className:"BsThreeDots_opt",children:[(0,k.jsx)("i",{children:(0,k.jsx)(p.evw,{})}),e&&D.author._id===e._id?(0,k.jsxs)("div",{className:"delete_or_edit_story  ",children:[(0,k.jsx)(l.rU,{className:"editStoryLink",to:"/admin/dashboard/story/".concat(D.slug,"/edit"),children:(0,k.jsx)("p",{children:"Edit Story"})}),(0,k.jsx)("div",{className:"deleteStoryLink",onClick:X,children:(0,k.jsx)("p",{children:"Delete Story"})})]}):null]})]})]})]})})})}},224:function(e,t,n){n.d(t,{Z:function(){return r}});n(2791);var s=n(184),r=function(){return(0,s.jsx)("div",{className:"mask",children:(0,s.jsx)("div",{className:"loader"})})}}}]);
//# sourceMappingURL=3.d940c643.chunk.js.map