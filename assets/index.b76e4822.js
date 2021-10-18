var po=Object.defineProperty,uo=Object.defineProperties;var fo=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var D=(o,t,r)=>t in o?po(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,w=(o,t)=>{for(var r in t||(t={}))O.call(t,r)&&D(o,r,t[r]);if(z)for(var r of z(t))j.call(t,r)&&D(o,r,t[r]);return o},k=(o,t)=>uo(o,fo(t));var E=(o,t)=>{var r={};for(var n in o)O.call(o,n)&&t.indexOf(n)<0&&(r[n]=o[n]);if(o!=null&&z)for(var n of z(o))t.indexOf(n)<0&&j.call(o,n)&&(r[n]=o[n]);return r};import{C as H,W as xo,s as a,j as W,r as p,R as go,a as ho,F as bo}from"./vendor.01df7922.js";const $o=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}};$o();const mo={colors:{purple:"#CAB8FF",pink:"#EB92BE",red:"#ff6a85",yellow:"#FFEF78",darkBlue:"#A8E7E9",lightBlue:"#B1FFFD",green:"#C1FFD7",gray:"#333333",black:"#141414"},zIndex:{base:0,top:10,modal:100}},T=H`font-family: 'Press Start 2P', cursive;`,wo=H`font-family: 'Noto Sans Display', sans-serif;`,Co=xo`
  html {
    box-sizing: border-box;
    font-size: 16px;
    ${wo};
  }

  html, body {
    overflow: hidden;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`,u=o=>{const{x:t,y:r,width:n,height:e}=(o==null?void 0:o.getBoundingClientRect())||{};return[Math.round(t),Math.round(r),n,e]},y=o=>{const{x:t,y:r,width:n}=(o==null?void 0:o.getBoundingClientRect())||{},e=n/2,i=t+e,s=r+e;return[i,s,e]},B=(o,t,r)=>Math.max(t,Math.min(o,r)),m=(o,t)=>Math.sqrt(o*o+t*t),G=(o,t)=>{const[r,n]=u(o),[e,i]=u(t);return{collided:r===e&&n===i}},yo=(o,t,r,n,e,i)=>{const s=o-n,l=t-e;return m(s,l)<=r+i},ko=(o,t)=>({collided:yo(...y(o),...y(t))}),Ro=(o,t)=>{const[r,n,e,i]=u(o),[s,l,f,x]=u(t);return{collided:r+e>=s&&r<=s+f&&n+i>=l&&n<=l+x}},q=(o,t,r,n,e,i)=>{const s=m(o-r,t-n),l=m(e-o,i-t),f=m(e-r,i-n);return parseInt(s+l,10)===parseInt(f,10)},vo=(o,t)=>{var b;const[r,n]=(b=t==null?void 0:t.childNodes)!=null?b:[],[e,i]=u(o),[s,l]=u(r),[f,x]=u(n);return{collided:q(e,i,s,l,f,x)}},L=(o,t,r,n,e)=>{const i=o-r,s=t-n;return m(i,s)<=e},K=(o,t)=>{const[r,n]=u(o),[e,i,s]=y(t);return{collided:L(r,n,e,i,s)}},Po=(o,t)=>K(o,t),zo=(o,t)=>K(t,o),J=(o,t)=>{const[r,n]=u(o),[e,i,s,l]=u(t);return{collided:r>=e&&r<=e+s&&n>=i&&n<=i+l}},Bo=(o,t)=>J(o,t),So=(o,t)=>J(t,o),Q=(o,t,r,n,e,i,s)=>{const l=B(o,n,n+i),f=B(t,e,e+s);return m(o-l,t-f)<=r},Io=(o,t)=>({collided:Q(...y(o),...u(t))}),Ao=(o,t)=>({collided:Q(...y(t),...u(o))}),Eo=(o,t)=>{var P;const[r,n]=(P=t==null?void 0:t.childNodes)!=null?P:[],[e,i]=u(r),[s,l]=u(n),[f,x,b]=y(o),S=L(e,i,f,x,b),I=L(s,l,f,x,b);if(S||I)return{collided:!0};const A=m(s-e,l-i),$=((f-e)*(s-e)+(x-i)*(l-i))/A**2,R=e+$*(s-e),v=i+$*(l-i);return q(R,v,e,i,s,l)?{collided:m(R-f,v-x)<=b}:{collided:!1}},To=a.div`
  width: 0;
  height: 0;
  box-sizing: border-box;
  position: absolute;

  &, &:before, &:after {
    border-radius: 50%;
  }

  &:before {
    border: solid 2px ${({theme:o})=>o.colors.gray};
    content: "";
    position: absolute;
    left: -2px;
    top: -2px;
  }

  &:after {
    border: solid 10px rgba(255, 255, 255, .2);
    box-shadow: rgba(255, 255, 255, .5) 0 0 0 2px;
    content: "";
    position: absolute;
    left: -10px;
    top: -10px;
  }
`,d=W.exports.jsx,C=W.exports.jsxs,M=p.exports.forwardRef((o,t)=>d(To,w({ref:t},o))),U=a.div`
  background-color: ${({theme:o})=>o.colors.yellow};
  width: 110px;
  height: 110px;
  position: absolute;
  cursor: none;
  z-index: ${({theme:o})=>o.zIndex.base+1};
`,Lo=a(U)`
  &, &:before, &:after {
    border-radius: 50%;
  }
`,V={circle:Lo,rect:U},Z=p.exports.forwardRef((n,r)=>{var e=n,{type:o}=e,t=E(e,["type"]);const i=p.exports.useMemo(()=>V[o]||V.circle,[o]);return d(i,k(w({},t),{ref:r}))}),_=a.div`
  background-color: ${({theme:o})=>o.colors.darkBlue};
  width: 110px;
  height: 110px;
  position: absolute;
  cursor: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;

  &:before {
    border: solid 14px ${({theme:o})=>o.colors.red};
    content: "";
    position: absolute;
    left: 30px;
    top: 30px;
    right: 30px;
    bottom: 30px;
  }

  &:after {
    border: solid 14px ${({theme:o})=>o.colors.red};
    content: "";
    position: absolute;
    left: 4px;
    top: 4px;
    right: 4px;
    bottom: 4px;
  }
`,Mo=a(_)`
  &, &:before, &:after {
    border-radius: 50%;
  }
`,oo={circle:Mo,rect:_},to=p.exports.forwardRef((n,r)=>{var e=n,{type:o}=e,t=E(e,["type"]);const i=p.exports.useMemo(()=>oo[o]||oo.circle,[o]);return d(i,k(w({},t),{ref:r}))}),Fo=a.div`
  max-width: 800px;
  background-color: ${({theme:o})=>o.colors.pink};
  width: 100%;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform: rotate(-25deg);
`,eo=a(M)`
  &:first-child { left: 0; }
  &:last-child { right: 0; }
`,Yo=p.exports.forwardRef((o,t)=>C(Fo,k(w({ref:t},o),{children:[d(eo,{}),d(eo,{})]}))),Xo=a.section`
  background-color: ${({theme:{colors:o},$collided:t})=>t?o.yellow:o.purple};
  cursor: none;
  transition: background-color ease-in .2s;
  flex: 1 1 auto;
  overflow: hidden;
  position: relative;
`,No=a.div`
  ${T};
  text-transform: capitalize;
  font-size: 10px;
  color: ${({theme:o})=>o.colors.gray};
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
`,Oo=a(M)`
  z-index: ${({theme:o})=>o.zIndex.base+1};
`,jo=a(Z).attrs({type:"circle"})`
  z-index: ${({theme:o})=>o.zIndex.base+1};
`,Do=a(Z).attrs({type:"rect"})`
  z-index: ${({theme:o})=>o.zIndex.base+1};
`,Ho=a(M)`
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
`,Wo=a(to).attrs({type:"circle"})``,Go=a(to).attrs({type:"rect"})``,qo=a(Yo)``,c={point:"point",circle:"circle",rect:"rect",line:"line"},ro={[c.point]:Oo,[c.circle]:jo,[c.rect]:Do},no={[c.point]:Ho,[c.circle]:Wo,[c.rect]:Go,[c.line]:qo},Ko={[`${c.point}-${c.point}`]:G,[`${c.point}-${c.circle}`]:Po,[`${c.point}-${c.rect}`]:Bo,[`${c.point}-${c.line}`]:vo,[`${c.circle}-${c.point}`]:zo,[`${c.circle}-${c.circle}`]:ko,[`${c.circle}-${c.rect}`]:Io,[`${c.circle}-${c.line}`]:Eo,[`${c.rect}-${c.point}`]:So,[`${c.rect}-${c.circle}`]:Ao,[`${c.rect}-${c.rect}`]:Ro},Jo=({pointer:o,target:t})=>Ko[`${o}-${t}`],Qo=({pointer:o,target:t})=>{const r=p.exports.useRef(null),n=p.exports.useRef(null),e=p.exports.useRef(null),i=p.exports.useMemo(()=>ro[o]||ro.point,[o]),s=p.exports.useMemo(()=>no[t]||no.point,[t]),[l,f]=p.exports.useState({}),[x,b]=p.exports.useState({x:0,y:0}),S=p.exports.useMemo(()=>{var $;return($=Jo({pointer:o,target:t}))!=null?$:G},[o,t]),{collided:I}=S(n.current,e.current),A=p.exports.useCallback($=>{const[R,v]=u($.currentTarget),[F,Y,P,so]=u(r.current),{clientX:X,clientY:N}=$,{offsetWidth:lo,offsetHeight:ao}=n.current;f({left:`${X-R-lo/2}px`,top:`${N-v-ao/2}px`}),b({x:B(X-F,0,P),y:B(N-Y,0,so)})},[]);return C(Xo,{ref:r,onMouseMove:A,$collided:I,children:[d(No,{children:`${x.x} x | ${x.y} y`}),d(i,{ref:n,style:l}),d(s,{ref:e})]})},Uo=({ref:o,onClickAway:t,disabled:r})=>{p.exports.useEffect(()=>{function n(e){r||typeof t!="function"||o.current&&!o.current.contains(e.target)&&t(e)}return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[o,t,r])},Vo=({children:o,onClickAway:t,disabled:r=!1})=>{const n=p.exports.useRef(null);return Uo({ref:n,onClickAway:t,disabled:r}),d("div",{ref:n,children:o})},Zo=a.div`
  background-color: ${({theme:o})=>o.colors.gray};
  border-radius: 2px;
  color: ${({theme:o})=>o.colors.pink};
  ${T};
  text-transform: uppercase;
  min-width: 200px;
  height: 40px;
  line-height: 20px;
  font-size: 9px;
  display: flex;
  position: relative;

  &:focus, &:hover {
    box-shadow: rgba(0, 0, 0, .1) 3px 0 5px;
  }

  &:after {
    content: "";
    border: solid ${({theme:o})=>o.colors.pink};
    box-sizing: unset;
    border-width: 3px 3px 0 0;
    width: 4px;
    height: 4px;
    transform: ${({$opened:o})=>`rotate(${o?"315deg":"135deg"})`};
    transition: transform ease-in .2s;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 15px;
    margin: auto;
    z-index: ${({theme:o})=>o.zIndex.base+1};
  }
`,_o=a.div`
  background-color: ${({theme:o})=>o.colors.gray};
  border-radius: 0 0 2px 2px;
  box-shadow: rgba(0, 0, 0, .1) 3px 0 5px;
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  top: 41px;
  left: 0;
  right: 0;
`,io=a.label`
  width: 100%;
  padding: 10px 15px;
  cursor: pointer;

  ${({selected:o,theme:t})=>o&&`
    background-color: rgba(0, 0, 0, .1);
    pointer-events: none;
    cursor: default;
    color: ${t.colors.purple};
  `}

  &:hover {
    background-color: rgba(0, 0, 0, .5);
  }
`,ot=({options:o,current:t,onSelect:r})=>{const[n,e]=p.exports.useState(!1),i=p.exports.useCallback(()=>e(!n),[n]);return d(Vo,{onClickAway:i,disabled:!n,children:C(Zo,{onClick:i,$opened:n,children:[d(io,{children:`${t.pointer} - ${t.target}`}),n&&d(_o,{children:o.map(({pointer:s,target:l})=>d(io,{children:`${s} - ${l}`,selected:t.pointer===s&&t.target===l,onClick:r({pointer:s,target:l})},`${s}-${l}`))})]})})},tt=a.div`
  display: flex;
  flex-flow: row nowrap;
  margin-left: 40px;
`,et=a.h6`
  text-transform: uppercase;
  line-height: 40px;
  font-size: 10px;
  ${T}
  color: ${({theme:o})=>o.colors.gray};
`,rt=a.div`
  border-radius: 2px;
  box-shadow: inset rgba(0, 0, 0, .04) 0 0 4px 4px;
  width: 40px;
  height: 40px;
  position: relative;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color ease-in-out .2s;

  &:hover {
    background-color: rgba(0, 0, 0, .1);
  }

  &:active {
    background-color: rgba(0, 0, 0, .2);
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
  }

  &:after {
    background-color: ${({theme:o})=>o.colors.gray};
  }

  &:before {
    border-color: ${({theme:o})=>o.colors.gray};
  }

  ${({type:o})=>o===c.point?`
        &:after {
          border-radius: 50%;
          width: 4px;
          height: 4px;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto
        }
        &:before {
          border-width: 2px;
          border-style: solid;
          border-radius: 50%;
          width: 22px;
          height: 22px;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto
        }
      `:o===c.circle?`
        &:after {
          border-radius: 50%;
          width: 22px;
          height: 22px;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto
        }
      `:o===c.rect?`
        &:after {
          width: 22px;
          height: 22px;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto
        }
      `:o===c.line?`
        &:after {
          transform: rotate(-25deg);
          width: 22px;
          height: 2px;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto
        }
      `:""}

  ${({selected:o,theme:t})=>o&&`
    background-color: ${t.colors.gray};
    pointer-events: none;
    cursor: default;
    color: ${t.colors.purple};

    &:after {
      background-color: ${t.colors.pink};
    }
    &:before {
      border-color: ${t.colors.pink};
    }
  `}
`,co=({options:o,label:t,current:r,onSelect:n})=>C(tt,{children:[d(et,{children:t}),o.map(e=>d(rt,{type:e,selected:r[t]===e,onClick:n(k(w({},r),{[t]:e}))},e))]}),nt=a.main`
  background-color: ${({theme:o})=>o.colors.pink};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
`,it=a.nav`
  background-color: ${({theme:o})=>o.colors.pink};
  box-sizing: border-box;
  height: 60px;
  display: flex;
  flex-flow: row nowrap;
  flex: 0 0 auto;
  padding: 10px;
  z-index: ${({theme:o})=>o.zIndex.base+2};
`,ct=a.footer`
  background-color: ${({theme:o})=>o.colors.gray};
  box-sizing: border-box;
  height: 30px;
  display: flex;
  flex-flow: row nowrap;
  flex: 0 0 auto;
  padding: 10px;
  z-index: ${({theme:o})=>o.zIndex.base+2};
`,g={[c.point]:c.point,[c.circle]:c.circle,[c.rect]:c.rect,[c.line]:c.line},h={[c.point]:c.point,[c.circle]:c.circle,[c.rect]:c.rect},st=[{pointer:h.point,target:g.point},{pointer:h.point,target:g.circle},{pointer:h.point,target:g.rect},{pointer:h.point,target:g.line},{pointer:h.circle,target:g.circle},{pointer:h.circle,target:g.rect},{pointer:h.rect,target:g.rect}],lt=()=>{const[o,t]=p.exports.useState({pointer:h.circle,target:g.circle}),r=p.exports.useCallback(({pointer:n,target:e})=>()=>t({pointer:n,target:e}),[t]);return C(nt,{children:[C(it,{children:[d(ot,{options:st,setCurrent:t,current:o,onSelect:r}),d(co,{label:"pointer",options:Object.keys(h),setCurrent:t,current:o,onSelect:r}),d(co,{label:"target",options:Object.keys(g),setCurrent:t,current:o,onSelect:r})]}),d(Qo,w({},o)),d(ct,{})]})};go.render(d(ho.StrictMode,{children:C(bo,{theme:mo,children:[d(Co,{}),d(lt,{})]})}),document.getElementById("root"));
