"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[318],{7318:function(a,b,c){c.d(b,{NC:function(){return B},Qe:function(){return w},TJ:function(){return z},WQ:function(){return A},fQ:function(){return C}});var d=c(7568),e=c(828),f=c(4051),g=c.n(f),h=c(5893),i=c(536),j=c.n(i),k=c(5675),l=c.n(k),m=c(7294),n=c(9769),o=c(5192),p=c(3092),q=c(6875),r=c(5821),s=c(8713),t=c(1579),u=c(9465),v=function(a){var b,c,d=a.coinType,e=a.coinUi,f=a.onClick,g="",i=null!==(b=e.name)&& void 0!==b?b:"",j=d.name.split("::");return j.length>1&&(g=j[0],""===i&&(i=j.slice(1).join("::"))),(0,h.jsxs)("div",{className:"modal-token-list-item-frame",onClick:f,children:[(0,h.jsxs)("div",{className:"modal-token-list-item-left-frame",children:[(0,h.jsx)(l(),{alt:"",src:null!==(c=e.logoUrl)&& void 0!==c?c:p.d.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:30,height:30}),(0,h.jsxs)("span",{style:{width:"210px",overflow:"hidden",whiteSpace:"nowrap"},children:[(0,h.jsx)("span",{className:"modal-token-list-item-left-symbol-span",children:e.symbol}),(0,h.jsx)("span",{className:"modal-token-list-item-left-detail-span",children:" "}),(0,h.jsx)("span",{className:"modal-token-list-item-left-detail-span",children:i})]})]}),(0,h.jsx)("div",{className:"modal-token-list-item-right-frame",children:(0,h.jsx)("span",{children:g.length>13?g.slice(0,10)+"...":g})})]})},w=function(a){var b=a.coinTypeAndUis,c=a.onSelectCoinType;return(0,h.jsxs)("div",{className:"modal-wallet-frame",children:[(0,h.jsx)("div",{className:"modal-wallet-title-frame",children:(0,h.jsx)("span",{children:"Select Token"})}),b.length>0?(0,h.jsx)("div",{className:"modal-token-list-panel-frame",children:b.map(function(a){var b=(0,e.Z)(a,2),d=b[0],f=b[1];return(0,h.jsx)(v,{onClick:function(){void 0!==c&&c(d)},coinType:d,coinUi:f},d.name)})}):(0,h.jsx)("span",{style:{fontStyle:"normal",fontWeight:"500",fontSize:"21px",lineHeight:"32px",color:"#9da3ae"},children:"No avaliable token for selecting"})]})},x="#d83939",y="#d88f39",z=function(a){var b,c,f,i,j,k,p,t,u,v,w,z,A,B,C,D=a.accountAddr,E=a.poolInfo,F=a.getCoinUi,G=a.wallet,H=a.client,I=a.dismissModal,J=(0,m.useState)("CUSTOM"),K=J[0],L=J[1],M=(0,s.K)().refreshTransactions,N=(0,m.useState)([]),O=N[0],P=N[1],Q=(0,m.useState)([]),R=Q[0],S=Q[1],T=(0,m.useState)([]),U=T[0],V=T[1],W=(0,m.useState)(""),X=W[0],Y=W[1],Z=(0,m.useState)(""),$=Z[0],_=Z[1],aa=G.getAddLiqudityEstimatedGas()*G.getGasFeePrice();(0,m.useEffect)(function(){var a;null!==D&&(a=(0,d.Z)(g().mark(function a(){var b,c,d,f,h;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,b=[E.type.xTokenType.name,E.type.yTokenType.name,H.getPrimaryCoinType().name],a.t0=e.Z,a.next=5,H.getSortedAccountCoinsArray(D,b);case 5:a.t1=a.sent,d=(c=(0,a.t0)(a.t1,3))[0],f=c[1],h=c[2],P(d),S(f),V(h.filter(function(a){return a.balance>=aa})),a.next=18;break;case 15:a.prev=15,a.t2=a.catch(0),console.log(a.t2,"deposit-model-fetch-coin-info");case 18:case"end":return a.stop()}},a,null,[[0,15]])})),function(){return a.apply(this,arguments)})()},[D,G,H,E,aa]);var ab=U.length>0?U.slice(-1)[0]:null,ac=O.length>0?O[0]:null,ad=R.length>0?R[0]:null,ae=(0,m.useMemo)(function(){if(null===ac)return n.BigIntConstants.ZERO;var a=null!==ab&&(0,n.isSameCoin)(ac,ab)?ac.balance-aa:ac.balance;return a>n.BigIntConstants.ZERO?a:n.BigIntConstants.ZERO},[ac,ab,aa]),af=(0,m.useMemo)(function(){if(null===ad)return n.BigIntConstants.ZERO;var a=null!==ab&&(0,n.isSameCoin)(ad,ab)?ad.balance-aa:ad.balance;return a>n.BigIntConstants.ZERO?a:n.BigIntConstants.ZERO},[ad,ab,aa]),ag=n.BigIntConstants.ZERO,ah=n.BigIntConstants.ZERO;E.isInitialized()&&(E.getDepositXAmount(af)>ae?(ag=ae,ah=(ah=E.getDepositYAmount(ae))<af?ah:af):(ah=af,ag=(ag=E.getDepositXAmount(af))<ae?ag:ae));var ai=F(E.type.xTokenType),aj=F(E.type.yTokenType),ak=null!==(b=ai.demical)&& void 0!==b?b:0,al=null!==(c=aj.demical)&& void 0!==c?c:0,am=ai.symbol,an=aj.symbol,ao=null!==(f=ai.logoUrl)&& void 0!==f?f:"/images/token/unknown-token.svg",ap=null!==(i=aj.logoUrl)&& void 0!==i?i:"/images/token/unknown-token.svg",aq=(0,m.useMemo)(function(){return(0,n.truncateNumeric)(new n.DemicalFormat(ae,ak).toString(!0),10)},[ae,ak]),ar=(0,m.useMemo)(function(){return(0,n.truncateNumeric)(new n.DemicalFormat(af,al).toString(!0),10)},[af,al]),as=(0,m.useMemo)(function(){var a=n.DemicalFormat.fromString(X);return null!==a&&a.canAlignTo(ak)?a.alignTo(ak).value:n.BigIntConstants.ZERO},[X,ak]),at=(0,m.useMemo)(function(){var a=n.DemicalFormat.fromString($);return null!==a&&a.canAlignTo(al)?a.alignTo(al).value:n.BigIntConstants.ZERO},[$,al]),au=(0,m.useCallback)(function(a){if(""===a){Y(""),E.isInitialized()&&_("");return}if(!(ak<=0&&a.indexOf(".")> -1)){var b=n.DemicalFormat.fromString(a);if(null!==b&&b.canAlignTo(ak)&&b.value>=n.BigIntConstants.ZERO){var c=(b=b.alignTo(ak)).value,d=E.getDepositYAmount(c);c<=ae&&(!E.isInitialized()||d<=af)&&(Y(a),E.isInitialized()&&_(new n.DemicalFormat(d,al).toString()))}}},[ae,af,ak,al,Y,_,E]),av=(0,m.useCallback)(function(a){if(""===a){_(""),E.isInitialized()&&Y("");return}if(!(al<=0&&a.indexOf(".")> -1)){var b=n.DemicalFormat.fromString(a);if(null!==b&&b.canAlignTo(al)&&b.value>=n.BigIntConstants.ZERO){var c=(b=b.alignTo(al)).value,d=E.getDepositXAmount(c);c<=af&&(!E.isInitialized()||d<=ae)&&(_(a),E.isInitialized()&&Y(new n.DemicalFormat(d,ak).toString()))}}},[ae,af,ak,al,Y,_,E]),aw=null,ax=null;null===D?(aw=(j=[x,"Invalid account address"])[0],ax=j[1]):null===ab?(aw=(k=[x,"Cannot pay enough gas"])[0],ax=k[1]):null===ac||ae===n.BigIntConstants.ZERO?(aw=(p=[x,"Cannot find avaliable coin ".concat(ai.symbol," to deposit")])[0],ax=p[1]):null===ad||af===n.BigIntConstants.ZERO?(aw=(t=[x,"Cannot find avaliable coin ".concat(aj.symbol," to deposit")])[0],ax=t[1]):as<=n.BigIntConstants.ZERO||as>ae?(aw=(u=[x,"Invalid amount input for ".concat(ai.symbol)])[0],ax=u[1]):at<=n.BigIntConstants.ZERO||at>af?(aw=(v=[x,"Invalid amount input for ".concat(aj.symbol)])[0],ax=v[1]):E.freeze?(aw=(w=[x,"Pool is freeze for adding liqudity"])[0],ax=w[1]):null!==ab&&ab.balance<aa?(aw=(z=[y,"Not enough balance left to pay transaction gas fee"])[0],ax=z[1]):as>ag&&E.isInitialized()?(aw=(A=[y,"Input amount for ".concat(ai.symbol," is enough")])[0],ax=A[1]):at>ah&&E.isInitialized()?(aw=(B=[y,"Input amount for ".concat(aj.symbol," is enough")])[0],ax=B[1]):!E.isInitialized()&&at>n.BigIntConstants.ZERO&&as>n.BigIntConstants.ZERO&&(aw=(C=["#2e98f1","Pool is initialzed"])[0],ax=C[1]);var ay=(0,r.s)(),az=ay.refresh,aA=(0,s.K)().refreshAccountCoins,aB=(0,m.useCallback)(function(){if(null!==ax&&aw===x){(0,q._N)(ax);return}var a,b=(a=(0,d.Z)(g().mark(function a(){var b;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,G.addLiqudity({client:H,pool:E,xAmount:as,yAmount:at});case 2:return(b=a.sent).isSuccess()&&(az(),aA(),M()),a.abrupt("return",b);case 5:case"end":return a.stop()}},a)})),function(){return a.apply(this,arguments)});(0,q.pn)(H,"Deposit Coin",b()),void 0!==I&&I()},[H,E,aA,M,G,ax,aw,az,as,at,I]),aC=(0,m.useCallback)(function(a,b){var c=ag*a/b,d=ah*a/b,e=new n.DemicalFormat(ae<c?ae:c,ak).toString(!0),f=new n.DemicalFormat(af<d?af:d,al).toString(!0);Y(e),_(f)},[ak,al,ag,ah,ae,af]);return(0,h.jsxs)("div",{className:"modal-wallet-frame",children:[(0,h.jsx)("div",{className:"modal-wallet-title-frame",children:(0,h.jsxs)("span",{children:["Deposit",(0,h.jsx)("span",{children:" "}),(0,h.jsx)("span",{style:{fontWeight:"700",fontSize:"24px",lineHeight:"36px"},children:am}),(0,h.jsx)("span",{style:{fontWeight:"700",fontSize:"24px",lineHeight:"36px"},children:"/"}),(0,h.jsx)("span",{style:{fontWeight:"700",fontSize:"24px",lineHeight:"36px"},children:an})]})}),(0,h.jsxs)("div",{className:"modal-deposit-info-frame",children:[(0,h.jsxs)("div",{className:"modal-deposit-panel-frame",children:[(0,h.jsx)(l(),{src:ao,alt:"",width:29,height:29,style:{borderRadius:"15px",overflow:"hidden"}}),(0,h.jsx)("span",{className:"modal-deposit-panel-token-name-label",children:am}),(0,h.jsx)("input",{className:"modal-deposit-panel-token-amount-input",placeholder:"0",style:{color:"CUSTOM"===K?"#000000":"#2e98f1"},disabled:E.isInitialized()&&ag<=n.BigIntConstants.ZERO||"CUSTOM"!==K,value:X,onInput:function(a){au(a.target.value)}}),(0,h.jsx)("div",{className:"modal-deposit-panel-token-amount-label-frame",children:(0,h.jsxs)("span",{className:"modal-deposit-panel-token-amount-label",children:[(0,h.jsx)("span",{children:"max: "}),(0,h.jsx)("span",{children:aq})]})})]}),(0,h.jsxs)("div",{className:"modal-deposit-panel-frame",children:[(0,h.jsx)(l(),{src:ap,alt:"",width:29,height:29,style:{borderRadius:"15px",overflow:"hidden"}}),(0,h.jsx)("span",{className:"modal-deposit-panel-token-name-label",children:an}),(0,h.jsx)("input",{className:"modal-deposit-panel-token-amount-input",placeholder:"0",style:{color:"CUSTOM"===K?"#000000":"#2e98f1"},disabled:E.isInitialized()&&ah<=n.BigIntConstants.ZERO||"CUSTOM"!==K,value:$,onInput:function(a){av(a.target.value)}}),(0,h.jsx)("div",{className:"modal-deposit-panel-token-amount-label-frame",children:(0,h.jsxs)("span",{className:"modal-deposit-panel-token-amount-label",children:[(0,h.jsx)("span",{children:"max: "}),(0,h.jsx)("span",{children:ar})]})})]}),(0,h.jsxs)("div",{className:"modal-deposit-panel-quick-select-frame",children:[(0,h.jsx)(o.cc,{selected:"0.2"===K,onClick:function(){E.isInitialized()&&(L("0.2"),aC(BigInt(2),BigInt(10)))},children:"20%"}),(0,h.jsx)(o.cc,{selected:"0.5"===K,onClick:function(){E.isInitialized()&&(L("0.5"),aC(BigInt(1),BigInt(2)))},children:"50%"}),(0,h.jsx)(o.cc,{selected:"0.75"===K,onClick:function(){E.isInitialized()&&(L("0.75"),aC(BigInt(75),BigInt(100)))},children:"75%"}),(0,h.jsx)(o.cc,{selected:"1.0"===K,onClick:function(){E.isInitialized()&&(L("1.0"),aC(BigInt(1),BigInt(1)))},children:"MAX"}),(0,h.jsx)(o.cc,{selected:!1,onClick:function(){"CUSTOM"!==K&&(L("CUSTOM"),Y(""),_(""))},children:"CUSTOM"})]}),null===ax||null===aw||""===X||""===$?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)(o.OY,{color:aw,message:ax}),(0,h.jsx)(o.Hq,{enabled:aw!==x,onClick:aB,icon:!1})]})]})},A=function(a){var b,c,e=a.positionInfo,f=a.getCoinUi,i=a.dismissModal,j=(0,m.useRef)(null),k=(0,m.useState)(1e3),v=k[0],w=k[1],x=(0,r.s)(),y=x.client,z=x.refreshPool,A=(0,u.O)(),B=A.wallet,C=A.accountAddr,D=A.connected,E=(0,s.K)(),F=E.refreshAccountCoins,G=E.refreshTransactions,H=null!==B&&"connected"===D&&null!==C,I=f(e.poolInfo.type.xTokenType),J=f(e.poolInfo.type.yTokenType),K=I.symbol,L=J.symbol,M=(0,m.useMemo)(function(){return e.partial(new n.DemicalFormat(BigInt(v),3))},[e,v]),N=(0,m.useMemo)(function(){return M.getShareCoinAmounts()},[M]),O=N[0],P=N[1],Q=(0,m.useMemo)(function(){var a;return new n.DemicalFormat(O,null!==(a=I.demical)&& void 0!==a?a:0)},[O,I]),R=(0,m.useMemo)(function(){var a;return new n.DemicalFormat(P,null!==(a=J.demical)&& void 0!==a?a:0)},[P,J]),S=(0,m.useMemo)(function(){return(0,h.jsx)(o.$z,{value:Q,width:20,precision:5})},[Q]),T=(0,m.useMemo)(function(){return(0,h.jsx)(o.$z,{value:R,width:20,precision:5})},[R]),U=function(a){var b=(a.value-a.min)/(a.max-a.min)*100,c="#2e98f1",d="#f9f9f9",e="linear-gradient(to right, ".concat(c," 0%, ").concat(c," ").concat(b,"%, ").concat(d," ").concat(b,"%, ").concat(d," 100%)");a.style.setProperty("--track-background",e)},V=(0,m.useCallback)(function(){if(null===B|| !1===H||null===y){(0,q._N)("Cannot correctly sign the operation, wallet is either not connected or we could not operate the sign operation");return}var a,b=(a=(0,d.Z)(g().mark(function a(){var b;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,B.removeLiqudity({client:y,positionInfo:M});case 3:return(b=a.sent).isSuccess()&&(z(M.poolInfo),F(),G()),a.abrupt("return",b);case 8:throw a.prev=8,a.t0=a.catch(0),a.t0;case 11:case"end":return a.stop()}},a,null,[[0,8]])})),function(){return a.apply(this,arguments)});(0,q.pn)(y,"Harvest Position",b()),void 0!==i&&i()},[M,B,y,H,z,F,G,i]);(0,m.useEffect)(function(){null!==j.current&&U(j.current)},[j]);var W=(0,h.jsx)("div",{className:"modal-harvest-frame-title",children:(0,h.jsxs)("span",{children:[(0,h.jsx)("span",{children:"Harvest "}),(0,h.jsx)("span",{style:{fontWeight:700},children:K}),(0,h.jsx)("span",{children:"/"}),(0,h.jsx)("span",{style:{fontWeight:700},children:L})]})}),X=(0,h.jsx)("div",{className:"modal-harvest-main-frame",children:(0,h.jsxs)("div",{className:"modal-harvest-amount-frame",children:[(0,h.jsxs)("div",{className:"modal-harvest-amount-detail-frame",children:[(0,h.jsxs)("div",{className:"modal-harvest-amount-detail-left-frame",children:[(0,h.jsx)(l(),{alt:"",src:null!==(b=I.logoUrl)&& void 0!==b?b:p.d.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:29,height:29,style:{borderRadius:15,overflow:"hidden"}}),(0,h.jsx)("span",{children:K})]}),(0,h.jsx)("span",{className:"modal-harvest-amount-detail-right-frame",children:S})]}),(0,h.jsxs)("div",{className:"modal-harvest-amount-detail-frame",children:[(0,h.jsxs)("div",{className:"modal-harvest-amount-detail-left-frame",children:[(0,h.jsx)(l(),{alt:"",src:null!==(c=J.logoUrl)&& void 0!==c?c:p.d.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:29,height:29,style:{borderRadius:15,overflow:"hidden"}}),(0,h.jsx)("span",{children:L})]}),(0,h.jsx)("span",{className:"modal-harvest-amount-detail-right-frame",children:T})]}),(0,h.jsxs)("div",{className:"modal-harvest-amount-slider-frame",children:[(0,h.jsx)("input",{type:"range",style:{width:200},min:0,max:1,step:.001,ref:j,value:v/1e3,onInput:function(a){U(a.target);var b=Math.round(1e3*a.target.value);b<0?b=0:b>1e3&&(b=1e3),w(b)}}),(0,h.jsxs)("span",{className:"modal-harvest-amount-slider-ratio",children:[(v/10).toFixed(1),(0,h.jsx)("span",{style:{fontWeight:400},children:"%"})]})]}),(0,h.jsx)(t.Nv,{title:"Harvest",fontSize:18,fontWeight:500,borderRadius:12,size:["fixed",163,37],grow:"always",buttonEnabled:v>0,onClick:V})]})});return(0,h.jsxs)("div",{className:"modal-harvest-frame",children:[W,X]})},B=function(a){var b,c,d=a.fromCoinUi,e=a.toCoinUi,f=a.fromCoinAmount,g=a.toCoinAmount,i=a.swapPrice,j=a.marketPrice,k=a.priceImpact,m=a.onClick,q=(0,h.jsx)("div",{className:"modal-confirm-swap-title-frame",children:(0,h.jsxs)("span",{children:[(0,h.jsx)("span",{children:"Swap"}),(0,h.jsx)("span",{children:" "}),(0,h.jsx)("span",{style:{fontWeight:700},children:d.symbol}),(0,h.jsx)("span",{children:" to "}),(0,h.jsx)("span",{style:{fontWeight:700},children:e.symbol})]})}),r=(0,h.jsxs)("div",{className:"modal-confirm-swap-token-frame",children:[(0,h.jsxs)("div",{className:"modal-confirm-swap-token-frame-left",children:[(0,h.jsx)(l(),{alt:"",src:null!==(b=d.logoUrl)&& void 0!==b?b:p.d.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:"29",height:"29"}),(0,h.jsx)("span",{children:d.symbol})]}),(0,h.jsx)("div",{className:"modal-confirm-swap-token-frame-right",style:{color:"#a73232"},children:(0,h.jsx)("span",{children:"-".concat(f)})})]}),s=(0,h.jsxs)("div",{className:"modal-confirm-swap-token-frame",children:[(0,h.jsxs)("div",{className:"modal-confirm-swap-token-frame-left",children:[(0,h.jsx)(l(),{alt:"",src:null!==(c=e.logoUrl)&& void 0!==c?c:p.d.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:"29",height:"29"}),(0,h.jsx)("span",{children:e.symbol})]}),(0,h.jsx)("div",{className:"modal-confirm-swap-token-frame-right",style:{color:"#2e98f1"},children:(0,h.jsx)("span",{children:"+".concat(g)})})]}),u=(0,h.jsxs)("div",{className:"modal-confirm-swap-token-frame-outer",children:[r,s]}),v=(0,h.jsxs)("div",{className:"modal-confirm-swap-price-frame",children:[(0,h.jsxs)("div",{className:"modal-confirm-swap-price-frame-top",children:[(0,h.jsx)("span",{className:"modal-confirm-swap-price-frame-top-text-bar",children:"Swap Price"}),(0,h.jsxs)("span",{className:"modal-confirm-swap-price-frame-top-text-bar",children:[(0,h.jsx)("span",{children:"Price Impact "}),(0,h.jsx)("a",{style:{marginLeft:".15rem"}}),(0,h.jsx)("span",{style:{color:"rgb(202 55 55)",fontWeight:700},children:"-".concat((0,n.formatNumeric)((100*k).toFixed(3)),"%")})]})]}),(0,h.jsxs)("span",{className:"modal-confirm-swap-price-frame-bottom",children:[(0,h.jsx)(o.$h,{value:i,hintFontSize:13,width:8,precision:4}),(0,h.jsx)("span",{children:" "}),(0,h.jsx)("span",{style:{fontWeight:300},children:"|"}),(0,h.jsx)("span",{children:" "}),(0,h.jsx)("span",{style:{color:"#bebebe"},children:(0,h.jsx)(o.$h,{value:j,hintFontSize:13,width:8,precision:4})})]})]}),w=(0,h.jsx)(t.Nv,{title:"Confirm & Swap",fontSize:24,fontWeight:500,borderRadius:12,size:["pad",16,8],grow:"hover",onClick:m}),x=(0,h.jsxs)("div",{className:"modal-confirm-swap-frame",children:[q,u,v,w]});return x},C=function(a){var b=a.avatarUrl,c=a.name,d=a.point,e=a.details;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(j(),{id:"c0adf301c67fe9c1",children:".suiswap-points-dashboard.jsx-c0adf301c67fe9c1{background:rgba(255,255,255,.5);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:30px 25px 55px;gap:17px;max-width:400px;background:rgba(255,255,255,.5);-webkit-border-radius:40px;-moz-border-radius:40px;border-radius:40px;overflow:hidden}.suiswap-points-dashboard-user-image.jsx-c0adf301c67fe9c1{width:80px;height:80px;overflow:hidden;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-border-radius:1e3px;-moz-border-radius:1e3px;border-radius:1e3px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.suiswap-points-dashboard-user-name.jsx-c0adf301c67fe9c1{font-style:normal;font-weight:600;font-size:24px;line-height:36px;color:#333;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.suiswap-points-dashboard-user-point.jsx-c0adf301c67fe9c1{font-weight:700;line-height:48px;color:#2e98f1;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0;font-size:32px;word-wrap:break-word}.suiswap-points-dashboard-user-right-info.jsx-c0adf301c67fe9c1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:0px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:-webkit-calc(100% - 100px);max-width:-moz-calc(100% - 100px);max-width:calc(100% - 100px)}.suiswap-points-dashboard-user.jsx-c0adf301c67fe9c1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;gap:10px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.suiswap-points-item-list.jsx-c0adf301c67fe9c1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;gap:10px;width:360px;max-height:390px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.suiswap-points-item.jsx-c0adf301c67fe9c1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:6px 14px;gap:52px;border:1px solid#e5e7eb;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-ordinal-group:1;-webkit-order:0;-moz-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0;-webkit-transition:box-shadow.4s ease-out,-webkit-transform.4s ease-out;-moz-transition:box-shadow.4s ease-out,-moz-transform.4s ease-out;-o-transition:box-shadow.4s ease-out,-o-transform.4s ease-out;transition:box-shadow.4s ease-out,-webkit-transform.4s ease-out;transition:box-shadow.4s ease-out,-moz-transform.4s ease-out;transition:box-shadow.4s ease-out,-o-transform.4s ease-out;transition:box-shadow.4s ease-out,transform.4s ease-out}.suiswap-points-item.jsx-c0adf301c67fe9c1:hover{-webkit-box-shadow:0px 2px 8px rgba(0,0,0,.2);-moz-box-shadow:0px 2px 8px rgba(0,0,0,.2);box-shadow:0px 2px 8px rgba(0,0,0,.2);-webkit-transform:translate(3px,-2px);-moz-transform:translate(3px,-2px);-ms-transform:translate(3px,-2px);-o-transform:translate(3px,-2px);transform:translate(3px,-2px)}.suiswap-points-item-left.jsx-c0adf301c67fe9c1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:0px;gap:2px;width:50%;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.suiswap-points-item-title.jsx-c0adf301c67fe9c1{font-weight:600;font-size:16px;color:#333;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}.suiswap-points-item-name.jsx-c0adf301c67fe9c1{font-weight:600;font-size:10px;color:#333;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.suiswap-points-item-right.jsx-c0adf301c67fe9c1{width:25%;font-weight:700;font-size:16px;text-align:right;color:#2e98f1;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}"}),(0,h.jsxs)("div",{className:"jsx-c0adf301c67fe9c1 suiswap-points-dashboard",children:[(0,h.jsxs)("div",{className:"jsx-c0adf301c67fe9c1 suiswap-points-dashboard-user",children:[(0,h.jsx)("div",{className:"jsx-c0adf301c67fe9c1 suiswap-points-dashboard-user-image",children:(0,h.jsx)(l(),{width:"100%",height:"100%",src:b,alt:""})}),(0,h.jsxs)("div",{className:"jsx-c0adf301c67fe9c1 suiswap-points-dashboard-user-right-info",children:[(0,h.jsx)("div",{className:"jsx-c0adf301c67fe9c1 suiswap-points-dashboard-user-name",children:c}),(0,h.jsx)("span",{className:"jsx-c0adf301c67fe9c1 suiswap-points-dashboard-user-point",children:(0,h.jsxs)("span",{className:"jsx-c0adf301c67fe9c1",children:[(0,h.jsx)("span",{style:{fontSize:32},className:"jsx-c0adf301c67fe9c1",children:d}),(0,h.jsx)("span",{style:{fontSize:32},className:"jsx-c0adf301c67fe9c1",children:" "}),(0,h.jsx)("span",{style:{fontSize:16},className:"jsx-c0adf301c67fe9c1",children:"Points"})]})})]})]}),(0,h.jsx)("div",{className:"jsx-c0adf301c67fe9c1 suiswap-points-item-list",children:e.map(function(a){var b=a.title,c=a.name,d=a.point;return(0,h.jsxs)("div",{className:"jsx-c0adf301c67fe9c1 suiswap-points-item",children:[(0,h.jsxs)("div",{className:"jsx-c0adf301c67fe9c1 suiswap-points-item-left",children:[(0,h.jsx)("span",{className:"jsx-c0adf301c67fe9c1 suiswap-points-item-title",children:b}),(0,h.jsx)("span",{className:"jsx-c0adf301c67fe9c1 suiswap-points-item-name",children:c})]}),(0,h.jsx)("div",{className:"jsx-c0adf301c67fe9c1 suiswap-points-item-right",children:"+ "+d.toString()})]},c)})})]})]})}}}])