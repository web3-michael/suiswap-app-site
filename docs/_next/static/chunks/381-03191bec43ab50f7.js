(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[381],{1210:function(a,b){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(b,"__esModule",{value:!0}),b.getDomainLocale=c,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},8418:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(4941).Z;c(5753).default,Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var e=c(2648).Z,f=c(7273).Z,g=e(c(7294)),h=c(6273),i=c(2725),j=c(3462),k=c(1018),l=c(7190),m=c(1210),n=c(8684),o=void 0!==g.default.useTransition,p={};function q(a,b,c,d){if(a&&h.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;p[b+"%"+c+(e?"%"+e:"")]=!0}}var r=g.default.forwardRef(function(a,b){var c,e,r=a.href,s=a.as,t=a.children,u=a.prefetch,v=a.passHref,w=a.replace,x=a.soft,y=a.shallow,z=a.scroll,A=a.locale,B=a.onClick,C=a.onMouseEnter,D=a.onTouchStart,E=a.legacyBehavior,F=void 0===E?!0!==Boolean(!1):E,G=f(a,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);c=t,F&&("string"==typeof c||"number"==typeof c)&&(c=g.default.createElement("a",null,c));var H=!1!==u,I=d(o?g.default.useTransition():[],2),J=I[1],K=g.default.useContext(j.RouterContext),L=g.default.useContext(k.AppRouterContext);L&&(K=L);var M=g.default.useMemo(function(){var a=d(h.resolveHref(K,r,!0),2),b=a[0],c=a[1];return{href:b,as:s?h.resolveHref(K,s):c||b}},[K,r,s]),N=M.href,O=M.as,P=g.default.useRef(N),Q=g.default.useRef(O);F&&(e=g.default.Children.only(c));var R=F?e&&"object"==typeof e&&e.ref:b,S=d(l.useIntersection({rootMargin:"200px"}),3),T=S[0],U=S[1],V=S[2],W=g.default.useCallback(function(a){(Q.current!==O||P.current!==N)&&(V(),Q.current=O,P.current=N),T(a),R&&("function"==typeof R?R(a):"object"==typeof R&&(R.current=a))},[O,R,N,V,T]);g.default.useEffect(function(){var a=U&&H&&h.isLocalURL(N),b=void 0!==A?A:K&&K.locale,c=p[N+"%"+O+(b?"%"+b:"")];a&&!c&&q(K,N,O,{locale:b})},[O,N,U,A,H,K]);var X={ref:W,onClick:function(a){F||"function"!=typeof B||B(a),F&&e.props&&"function"==typeof e.props.onClick&&e.props.onClick(a),a.defaultPrevented||function(a,b,c,d,e,f,g,i,j,k){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&h.isLocalURL(c)){a.preventDefault();var l,m,n=function(){"softPush"in b&&"softReplace"in b?b[f?e?"softReplace":"softPush":e?"replace":"push"](c):b[e?"replace":"push"](c,d,{shallow:g,locale:j,scroll:i})};k?k(n):n()}}(a,K,N,O,w,x,y,z,A,L?J:void 0)},onMouseEnter:function(a){F||"function"!=typeof C||C(a),F&&e.props&&"function"==typeof e.props.onMouseEnter&&e.props.onMouseEnter(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})},onTouchStart:function(a){F||"function"!=typeof D||D(a),F&&e.props&&"function"==typeof e.props.onTouchStart&&e.props.onTouchStart(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})}};if(!F||v||"a"===e.type&&!("href"in e.props)){var Y=void 0!==A?A:K&&K.locale,Z=K&&K.isLocaleDomain&&m.getDomainLocale(O,Y,K.locales,K.domainLocales);X.href=Z||n.addBasePath(i.addLocale(O,Y,K&&K.defaultLocale))}return F?g.default.cloneElement(e,X):g.default.createElement("a",Object.assign({},G,X),c)});b.default=r,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},1018:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.GlobalLayoutRouterContext=b.LayoutRouterContext=b.AppRouterContext=void 0;var d=(0,c(2648).Z)(c(7294)),e=d.default.createContext(null);b.AppRouterContext=e;var f=d.default.createContext(null);b.LayoutRouterContext=f;var g=d.default.createContext(null);b.GlobalLayoutRouterContext=g},9008:function(a,b,c){a.exports=c(5443)},1664:function(a,b,c){a.exports=c(8418)},1163:function(a,b,c){a.exports=c(387)},6701:function(a,b,c){"use strict";function d(){return(d=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function e(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}function f(a,b){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,b){return a.__proto__=b,a})(a,b)}function g(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,f(a,b)}function h(a,b){return a.replace(RegExp("(^|\\s)"+b+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}c.d(b,{Z:function(){return x}});var i=c(7294),j=c(3935),k={disabled:!1},l=i.createContext(null),m=function(a){return a.scrollTop},n="unmounted",o="exited",p="entering",q="entered",r="exiting",s=function(a){function b(b,c){d=a.call(this,b,c)||this;var d,e,f=c,g=f&&!f.isMounting?b.enter:b.appear;return d.appearStatus=null,b.in?g?(e=o,d.appearStatus=p):e=q:e=b.unmountOnExit||b.mountOnEnter?n:o,d.state={status:e},d.nextCallback=null,d}g(b,a),b.getDerivedStateFromProps=function(a,b){return a.in&&b.status===n?{status:o}:null};var c=b.prototype;return c.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},c.componentDidUpdate=function(a){var b=null;if(a!==this.props){var c=this.state.status;this.props.in?c!==p&&c!==q&&(b=p):(c===p||c===q)&&(b=r)}this.updateStatus(!1,b)},c.componentWillUnmount=function(){this.cancelNextCallback()},c.getTimeouts=function(){var a,b,c,d=this.props.timeout;return a=b=c=d,null!=d&&"number"!=typeof d&&(a=d.exit,b=d.enter,c=void 0!==d.appear?d.appear:b),{exit:a,enter:b,appear:c}},c.updateStatus=function(a,b){if(void 0===a&&(a=!1),null!==b){if(this.cancelNextCallback(),b===p){if(this.props.unmountOnExit||this.props.mountOnEnter){var c=this.props.nodeRef?this.props.nodeRef.current:j.findDOMNode(this);c&&m(c)}this.performEnter(a)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===o&&this.setState({status:n})},c.performEnter=function(a){var b=this,c=this.props.enter,d=this.context?this.context.isMounting:a,e=this.props.nodeRef?[d]:[j.findDOMNode(this),d],f=e[0],g=e[1],h=this.getTimeouts(),i=d?h.appear:h.enter;if(!a&&!c||k.disabled){this.safeSetState({status:q},function(){b.props.onEntered(f)});return}this.props.onEnter(f,g),this.safeSetState({status:p},function(){b.props.onEntering(f,g),b.onTransitionEnd(i,function(){b.safeSetState({status:q},function(){b.props.onEntered(f,g)})})})},c.performExit=function(){var a=this,b=this.props.exit,c=this.getTimeouts(),d=this.props.nodeRef?void 0:j.findDOMNode(this);if(!b||k.disabled){this.safeSetState({status:o},function(){a.props.onExited(d)});return}this.props.onExit(d),this.safeSetState({status:r},function(){a.props.onExiting(d),a.onTransitionEnd(c.exit,function(){a.safeSetState({status:o},function(){a.props.onExited(d)})})})},c.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},c.safeSetState=function(a,b){b=this.setNextCallback(b),this.setState(a,b)},c.setNextCallback=function(a){var b=this,c=!0;return this.nextCallback=function(d){c&&(c=!1,b.nextCallback=null,a(d))},this.nextCallback.cancel=function(){c=!1},this.nextCallback},c.onTransitionEnd=function(a,b){this.setNextCallback(b);var c=this.props.nodeRef?this.props.nodeRef.current:j.findDOMNode(this),d=null==a&&!this.props.addEndListener;if(!c||d){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var e=this.props.nodeRef?[this.nextCallback]:[c,this.nextCallback],f=e[0],g=e[1];this.props.addEndListener(f,g)}null!=a&&setTimeout(this.nextCallback,a)},c.render=function(){var a=this.state.status;if(a===n)return null;var b=this.props,c=b.children,d=(b.in,b.mountOnEnter,b.unmountOnExit,b.appear,b.enter,b.exit,b.timeout,b.addEndListener,b.onEnter,b.onEntering,b.onEntered,b.onExit,b.onExiting,b.onExited,b.nodeRef,e(b,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(l.Provider,{value:null},"function"==typeof c?c(a,d):i.cloneElement(i.Children.only(c),d))},b}(i.Component);function t(){}s.contextType=l,s.propTypes={},s.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:t,onEntering:t,onEntered:t,onExit:t,onExiting:t,onExited:t},s.UNMOUNTED=n,s.EXITED=o,s.ENTERING=p,s.ENTERED=q,s.EXITING=r;var u=s,v=function(a,b){return a&&b&&b.split(" ").forEach(function(b){var c,d;return c=a,d=b,void(c.classList?c.classList.remove(d):"string"==typeof c.className?c.className=h(c.className,d):c.setAttribute("class",h(c.className&&c.className.baseVal||"",d)))})},w=function(a){function b(){for(var b,c=arguments.length,d=Array(c),e=0;e<c;e++)d[e]=arguments[e];return(b=a.call.apply(a,[this].concat(d))||this).appliedClasses={appear:{},enter:{},exit:{}},b.onEnter=function(a,c){var d=b.resolveArguments(a,c),e=d[0],f=d[1];b.removeClasses(e,"exit"),b.addClass(e,f?"appear":"enter","base"),b.props.onEnter&&b.props.onEnter(a,c)},b.onEntering=function(a,c){var d=b.resolveArguments(a,c),e=d[0],f=d[1];b.addClass(e,f?"appear":"enter","active"),b.props.onEntering&&b.props.onEntering(a,c)},b.onEntered=function(a,c){var d=b.resolveArguments(a,c),e=d[0],f=d[1]?"appear":"enter";b.removeClasses(e,f),b.addClass(e,f,"done"),b.props.onEntered&&b.props.onEntered(a,c)},b.onExit=function(a){var c=b.resolveArguments(a)[0];b.removeClasses(c,"appear"),b.removeClasses(c,"enter"),b.addClass(c,"exit","base"),b.props.onExit&&b.props.onExit(a)},b.onExiting=function(a){var c=b.resolveArguments(a)[0];b.addClass(c,"exit","active"),b.props.onExiting&&b.props.onExiting(a)},b.onExited=function(a){var c=b.resolveArguments(a)[0];b.removeClasses(c,"exit"),b.addClass(c,"exit","done"),b.props.onExited&&b.props.onExited(a)},b.resolveArguments=function(a,c){return b.props.nodeRef?[b.props.nodeRef.current,a]:[a,c]},b.getClassNames=function(a){var c=b.props.classNames,d="string"==typeof c,e=d?(d&&c?c+"-":"")+a:c[a],f=d?e+"-active":c[a+"Active"],g=d?e+"-done":c[a+"Done"];return{baseClassName:e,activeClassName:f,doneClassName:g}},b}g(b,a);var c=b.prototype;return c.addClass=function(a,b,c){var d,e,f=this.getClassNames(b)[c+"ClassName"],g=this.getClassNames("enter").doneClassName;"appear"===b&&"done"===c&&g&&(f+=" "+g),"active"===c&&a&&m(a),f&&(this.appliedClasses[b][c]=f,d=a,e=f,d&&e&&e.split(" ").forEach(function(a){return function(a,b){if(a.classList)a.classList.add(b);else{var c,d;c=a,d=b,(c.classList?!(d&&c.classList.contains(d)):-1===(" "+(c.className.baseVal||c.className)+" ").indexOf(" "+d+" "))&&("string"==typeof a.className?a.className=a.className+" "+b:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+b))}}(d,a)}))},c.removeClasses=function(a,b){var c=this.appliedClasses[b],d=c.base,e=c.active,f=c.done;this.appliedClasses[b]={},d&&v(a,d),e&&v(a,e),f&&v(a,f)},c.render=function(){var a=this.props,b=(a.classNames,e(a,["classNames"]));return i.createElement(u,d({},b,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},b}(i.Component);w.defaultProps={classNames:""},w.propTypes={};var x=w}}])