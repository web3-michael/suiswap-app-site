(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89],{7368:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/community/suiswap-points",function(){return n(2273)}])},2273:function(e,t,n){"use strict";n.r(t);var i=n(5893),s=n(7599),r=n(1163),o=n(3851),a=n(5493),u=n(7294),l=n(364),c=n(2991),p=n(9769),d=n(7081),f=n(8520),m=n(8764).lW;let _=()=>{let e=(0,d.Z)(),{client:t}=(0,l.s)(),{wallet:n,connected:o,presentModal:_}=(0,c.O)(),[g,w]=(0,u.useState)(null),h=(0,r.useRouter)(),x=h.query,b=x.content,k=(0,u.useCallback)((i,s)=>{if("connected"!==o)_();else if(null!==t&&null!==n&&"connected"===o&&null!==i&&null!==s){let r=async()=>{var r;let o=null===(r=e.config.suiswap.objects.find(e=>e.type.endsWith("TOKEN::TokenAirdrop")))||void 0===r?void 0:r.address;(0,p.debugLog)("".concat(m.from(s).toString("hex")),"suiswap-point-signature");let a=await n.execute(t,{operation:"airdrop",amount:i,signature:s,airdropId:o},{title:"airdrop"});return a.isSuccess()&&w(i),a};(0,f.UI)("Airdrop",r())}},[_,t,n,o,e]),y={avatarUrl:"/images/misc/user-profile-image-test.png",name:"",point:0,details:[]};if(b){let e=m.from(b,"base64").toString("utf-8"),t=JSON.parse(e);y={...y,...t}}try{y.name=m.from(y.name,"base64").toString("utf-8")}catch(e){y.name=""}let N=(0,i.jsx)(s.fQ,{...y,onClick:k});return(0,i.jsx)(a.J,{representType:{type:"page"},modals:[{minWidth:280,width:450,content:N}],index:0})};t.default=()=>(0,i.jsx)(o.Sx,{children:(0,i.jsx)(_,{})})}},function(e){e.O(0,[855,735,993,599,774,888,179],function(){return e(e.s=7368)}),_N_E=e.O()}]);