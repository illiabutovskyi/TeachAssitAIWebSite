"use strict";(self.webpackChunkteachai=self.webpackChunkteachai||[]).push([[361],{4361:function(e,t,n){n.r(t);var r=n(1413),l=n(4165),s=n(5861),o=n(9439),c=n(2791),a=n(583),i=n(9085),u=n(3872),d=n(7689),x=n(184);t.default=function(){var e=(0,d.s0)(),t=(0,c.useState)(1),n=(0,o.Z)(t,2),f=n[0],h=n[1],g=(0,c.useState)(""),p=(0,o.Z)(g,2),v=p[0],m=p[1],b=(0,c.useState)(""),w=(0,o.Z)(b,2),y=w[0],j=w[1],Z=(0,c.useState)(""),k=(0,o.Z)(Z,2),S=k[0],C=k[1],T=(0,c.useState)(""),O=(0,o.Z)(T,2),P=O[0],E=O[1],I=(0,c.useContext)(a.S),A=I.tempUser,D=I.getUserData,R=I.setIsAuthenticated,V=function(){var t=(0,s.Z)((0,l.Z)().mark((function t(n){var r,s,o;return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=v+y+S+P,console.log("OTP: ",r),!(r.length<4)){t.next=6;break}return(0,i.Am)("OTP is not Valid. Enter Valid OTP"),t.abrupt("return");case 6:if(4!==r.length){t.next=24;break}return t.prev=7,t.next=10,u.Z.post("/verifyOTP",{userId:A.userId,otp:r});case 10:s=t.sent,o=s.data,console.log("data: ",o),localStorage.setItem("teachai_verified_device","".concat(A.userId,"-verifyDevice")),(0,i.Am)("".concat(o.message)),localStorage.setItem("teachai_token",o.token),u.Z.defaults.headers.common.Authorization="Bearer ".concat(o.token),setTimeout((function(){null!==A&&void 0!==A&&A.send&&(D(),R(!0),e("/user/dashboard/chatbots"));var t=localStorage.getItem("plan");t?u.Z.post("/payment/process",{plan:t}).then((function(e){localStorage.removeItem("plan"),D(),R(!0),window.location.href=e.data.url,console.log("Response:",e.data)})).catch((function(e){console.error("Error:",e.message)})):(D(),R(!0),e("/user/dashboard/chatbots"))}),3e3),t.next=24;break;case 20:t.prev=20,t.t0=t.catch(7),console.log("Error: ",t.t0),(0,i.Am)("Error While Verifying the OTP!");case 24:case"end":return t.stop()}}),t,null,[[7,20]])})));return function(e){return t.apply(this,arguments)}}(),W=function(){var e=(0,s.Z)((0,l.Z)().mark((function e(t){var n,s;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&t.preventDefault(),e.prev=1,console.log("sending Data: ",A),e.next=5,u.Z.post("/resendOTPVerificationCode",(0,r.Z)({},A));case 5:n=e.sent,s=n.data,(0,i.Am)("OTP has been Sended!"),console.log("Response: ",s),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Error: ",e.t0),(0,i.Am)("Error While Resending OTP!");case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),_=function(e,t){1===e.length&&t(e)};return(0,c.useEffect)((function(){null!==A&&void 0!==A&&A.send&&1===f&&(W(),h((function(e){return e+1})))}),[]),(0,x.jsx)("div",{class:"relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12",children:(0,x.jsx)("div",{class:"relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl",children:(0,x.jsxs)("div",{class:"mx-auto flex w-full max-w-md flex-col space-y-16",children:[(0,x.jsxs)("div",{class:"flex flex-col items-center justify-center text-center space-y-2",children:[(0,x.jsx)("div",{class:"font-semibold text-3xl",children:(0,x.jsx)("p",{children:"Enter OTP Code"})}),(0,x.jsx)("div",{class:"flex flex-row text-sm font-medium text-gray-400",children:(0,x.jsxs)("p",{children:["We have sent a code to your email ",null===A||void 0===A?void 0:A.email]})})]}),(0,x.jsx)("div",{children:(0,x.jsx)("form",{action:"",method:"post",children:(0,x.jsxs)("div",{class:"flex flex-col space-y-16",children:[(0,x.jsxs)("div",{class:"flex flex-row items-center justify-between mx-auto w-full max-w-xs",children:[(0,x.jsx)("div",{class:"w-16 h-16 ",children:(0,x.jsx)("input",{class:"w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700",type:"text",name:"",id:"",value:v,onChange:function(e){return _(e.target.value,m)}})}),(0,x.jsx)("div",{class:"w-16 h-16 ",children:(0,x.jsx)("input",{class:"w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700",type:"text",name:"",id:"",value:y,onChange:function(e){return _(e.target.value,j)}})}),(0,x.jsx)("div",{class:"w-16 h-16 ",children:(0,x.jsx)("input",{class:"w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700",type:"text",name:"",id:"",value:S,onChange:function(e){return _(e.target.value,C)}})}),(0,x.jsx)("div",{class:"w-16 h-16 ",children:(0,x.jsx)("input",{class:"w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700",type:"text",name:"",id:"",value:P,onChange:function(e){return _(e.target.value,E)}})})]}),(0,x.jsxs)("div",{class:"flex flex-col space-y-5",children:[(0,x.jsx)("div",{children:(0,x.jsx)("button",{onClick:V,class:"flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm",children:"Submit"})}),(0,x.jsxs)("div",{class:"flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500",children:[(0,x.jsx)("p",{children:"Didn't recieve code?"}),(0,x.jsx)("div",{class:"flex flex-row items-center text-blue-600 cursor-pointer",onClick:W,children:"Resend"})]})]})]})})})]})})})}}}]);
//# sourceMappingURL=361.657e73bb.chunk.js.map