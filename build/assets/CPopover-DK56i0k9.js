import{a as o,_ as Q,b as t,R as r,c as U,P as e,e as W,q as X}from"./index-BfLOjBmH.js";import{u as Y,t as Z,v as $}from"./DefaultLayout-a_BtCpbl.js";import{g as ee,e as ne}from"./getRTLPlacement-D8xSBZ3A.js";var q=o.forwardRef(function(n,x){var F=n.children,v=n.animation,M=v===void 0?!0:v,j=n.className,L=n.container,A=n.content,g=n.delay,f=g===void 0?0:g,b=n.fallbackPlacements,B=b===void 0?["top","right","bottom","left"]:b,h=n.offset,I=h===void 0?[0,8]:h,y=n.onHide,P=n.onShow,k=n.placement,V=k===void 0?"top":k,d=n.popperConfig,_=n.title,w=n.trigger,i=w===void 0?"click":w,m=n.visible,z=Q(n,["children","animation","className","container","content","delay","fallbackPlacements","offset","onHide","onShow","placement","popperConfig","title","trigger","visible"]),a=o.useRef(null),s=o.useRef(null),D=Y(x,a),C="popover".concat(o.useId()),E=o.useState(!1),l=E[0],R=E[1],T=o.useState(m),c=T[0],N=T[1],S=Z(),G=S.initPopper,J=S.destroyPopper,H=typeof f=="number"?{show:f,hide:f}:f,O={modifiers:[{name:"arrow",options:{element:".popover-arrow"}},{name:"flip",options:{fallbackPlacements:B}},{name:"offset",options:{offset:I}}],placement:ee(V,s.current)},K=t(t({},O),typeof d=="function"?d(O):d);o.useEffect(function(){if(m){u();return}p()},[m]),o.useEffect(function(){if(l&&s.current&&a.current){G(s.current,a.current,K),setTimeout(function(){N(!0)},H.show);return}!l&&s.current&&a.current&&J()},[l]),o.useEffect(function(){!c&&s.current&&a.current&&ne(function(){R(!1)},a.current)},[c]);var u=function(){R(!0),P&&P()},p=function(){setTimeout(function(){N(!1),y&&y()},H.hide)};return r.createElement(r.Fragment,null,r.cloneElement(F,t(t(t(t(t({},c&&{"aria-describedby":C}),{ref:s}),(i==="click"||i.includes("click"))&&{onClick:function(){return c?p():u()}}),(i==="focus"||i.includes("focus"))&&{onFocus:function(){return u()},onBlur:function(){return p()}}),(i==="hover"||i.includes("hover"))&&{onMouseEnter:function(){return u()},onMouseLeave:function(){return p()}})),r.createElement($,{container:L,portal:!0},l&&r.createElement("div",t({className:U("popover","bs-popover-auto",{fade:M,show:c},j),id:C,ref:D,role:"tooltip"},z),r.createElement("div",{className:"popover-arrow"}),r.createElement("div",{className:"popover-header"},_),r.createElement("div",{className:"popover-body"},A))))});q.propTypes={animation:e.bool,children:e.node,className:e.string,container:e.any,content:e.oneOfType([e.string,e.node]),delay:e.oneOfType([e.number,e.shape({show:e.number.isRequired,hide:e.number.isRequired})]),fallbackPlacements:X,offset:e.any,onHide:e.func,onShow:e.func,placement:e.oneOf(["auto","top","right","bottom","left"]),popperConfig:e.oneOfType([e.func,e.object]),title:e.oneOfType([e.string,e.node]),trigger:W,visible:e.bool};q.displayName="CPopover";export{q as C};
