(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89],{7368:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/community/suiswap-points",function(){return n(2273)}])},2273:function(e,t,n){"use strict";n.r(t);var i=n(5893),s=n(7599),o=n(1163),a=n(3851),r=n(5493),l=n(7294),u=n(656),c=n(364),d=n(2991),p=n(9769),f=n(7081),m=n(8520),g=n(8764).lW;let h=()=>{let e=(0,f.Z)(),{client:t}=(0,c.s)(),{wallet:n,connected:a,presentModal:h}=(0,d.O)(),[w,_]=(0,l.useState)(null),x=(0,o.useRouter)(),k=x.query,b=k.content,y=(0,l.useCallback)((i,s)=>{if("connected"!==a)h();else if(null!==t&&null!==n&&"connected"===a&&null!==i&&null!==s){let o=async()=>{var o;let a=null===(o=e.config.suiswap.objects.find(e=>e.type.endsWith("TOKEN::TokenAirdrop")))||void 0===o?void 0:o.address;(0,p.debugLog)("".concat(g.from(s).toString("hex")),"suiswap-point-signature");let r=await n.execute(t,{operation:"airdrop",amount:i,signature:s,airdropId:a},{title:"airdrop"});return r.isSuccess()&&_(i),r};(0,m.UI)("Airdrop",o())}},[h,t,n,a,e]),E={avatarUrl:"/images/misc/user-profile-image-test.png",name:"",point:0,details:[]};if(b){let e=g.from(b,"base64").toString("utf-8"),t=JSON.parse(e);E={...E,...t}}try{E.name=g.from(E.name,"base64").toString("utf-8")}catch(e){E.name=""}let N=(0,i.jsx)(s.fQ,{...E,onClick:y}),S=(0,i.jsx)(s.sU,{...E,amount:null!=w?w:p.BigIntConstants.ZERO,decimal:9,onClick:()=>{(0,u.mx)(x,"/app")}});return(0,i.jsx)(r.J,{representType:{type:"page"},modals:[{minWidth:280,width:450,content:N},{minWidth:280,width:450,content:S}],index:null===w?0:1})};t.default=()=>(0,i.jsx)(a.Sx,{children:(0,i.jsx)(h,{})})}},function(e){e.O(0,[855,735,993,599,774,888,179],function(){return e(e.s=7368)}),_N_E=e.O()}]);