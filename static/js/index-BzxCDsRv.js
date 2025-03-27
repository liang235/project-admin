import{_ as fe}from"./index-BqNn1QRp.js";import{_ as xe}from"./index-ncGf53PB.js";import{_ as _e}from"./index-m1hp8roE.js";import{Z as ge,r as k,c as P,H as D,a3 as K,D as Q,b as Se,ag as E,o as V,S as Pe,ah as b,ai as Me,e as G,X as we,m as ye,g as S,aj as Ee,a6 as U,d as ke,i as h,w as z,a as Z,y as M,j as Re}from"./index-H_c7H9_6.js";import{_ as be}from"./_plugin-vue_export-helper-DlAUqK2U.js";const J={__name:"splitpanes",props:{horizontal:{type:Boolean},pushOtherPanes:{type:Boolean,default:!0},dblClickSplitter:{type:Boolean,default:!0},rtl:{type:Boolean,default:!1},firstSplitter:{type:Boolean}},emits:["ready","resize","resized","pane-click","pane-maximize","pane-add","pane-remove","splitter-click"],setup(A,{emit:R}){const d=R,m=A,r=ge(),s=k([]),w=P(()=>s.value.reduce((e,n)=>(e[~~n.id]=n)&&e,{})),f=P(()=>s.value.length),p=k(null),g=k(!1),v=k({mouseDown:!1,dragging:!1,activeSplitter:null,cursorOffset:0}),_=k({splitter:null,timeoutId:null}),C=P(()=>({[`splitpanes splitpanes--${m.horizontal?"horizontal":"vertical"}`]:!0,"splitpanes--dragging":v.value.dragging})),O=()=>{document.addEventListener("mousemove",u,{passive:!1}),document.addEventListener("mouseup",y),"ontouchstart"in window&&(document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",y))},B=()=>{document.removeEventListener("mousemove",u,{passive:!1}),document.removeEventListener("mouseup",y),"ontouchstart"in window&&(document.removeEventListener("touchmove",u,{passive:!1}),document.removeEventListener("touchend",y))},I=(e,n)=>{const i=e.target.closest(".splitpanes__splitter");if(i){const{left:a,top:t}=i.getBoundingClientRect(),{clientX:l,clientY:o}="ontouchstart"in window&&e.touches?e.touches[0]:e;v.value.cursorOffset=m.horizontal?o-t:l-a}O(),v.value.mouseDown=!0,v.value.activeSplitter=n},u=e=>{v.value.mouseDown&&(e.preventDefault(),v.value.dragging=!0,requestAnimationFrame(()=>{ie(ae(e)),d("resize",s.value.map(n=>({min:n.min,max:n.max,size:n.size})))}))},y=()=>{v.value.dragging&&d("resized",s.value.map(e=>({min:e.min,max:e.max,size:e.size}))),v.value.mouseDown=!1,setTimeout(()=>{v.value.dragging=!1,B()},100)},T=(e,n)=>{"ontouchstart"in window&&(e.preventDefault(),m.dblClickSplitter&&(_.value.splitter===n?(clearTimeout(_.value.timeoutId),_.value.timeoutId=null,j(e,n),_.value.splitter=null):(_.value.splitter=n,_.value.timeoutId=setTimeout(()=>_.value.splitter=null,500)))),v.value.dragging||d("splitter-click",s.value[n])},j=(e,n)=>{let i=0;s.value=s.value.map((a,t)=>(a.size=t===n?a.max:a.min,t!==n&&(i+=a.min),a)),s.value[n].size-=i,d("pane-maximize",s.value[n]),d("resized",s.value.map(a=>({min:a.min,max:a.max,size:a.size})))},ee=(e,n)=>{d("pane-click",w.value[n])},ae=e=>{const n=p.value.getBoundingClientRect(),{clientX:i,clientY:a}="ontouchstart"in window&&e.touches?e.touches[0]:e;return{x:i-(m.horizontal?0:v.value.cursorOffset)-n.left,y:a-(m.horizontal?v.value.cursorOffset:0)-n.top}},ne=e=>{e=e[m.horizontal?"y":"x"];const n=p.value[m.horizontal?"clientHeight":"clientWidth"];return m.rtl&&!m.horizontal&&(e=n-e),e*100/n},ie=e=>{const n=v.value.activeSplitter;let i={prevPanesSize:X(n),nextPanesSize:L(n),prevReachedMinPanes:0,nextReachedMinPanes:0};const a=0+(m.pushOtherPanes?0:i.prevPanesSize),t=100-(m.pushOtherPanes?0:i.nextPanesSize),l=Math.max(Math.min(ne(e),t),a);let o=[n,n+1],c=s.value[o[0]]||null,x=s.value[o[1]]||null;const H=c.max<100&&l>=c.max+i.prevPanesSize,he=x.max<100&&l<=100-(x.max+L(n+1));if(H||he){H?(c.size=c.max,x.size=Math.max(100-c.max-i.prevPanesSize-i.nextPanesSize,0)):(c.size=Math.max(100-x.max-i.prevPanesSize-L(n+1),0),x.size=x.max);return}if(m.pushOtherPanes){const W=te(i,l);if(!W)return;({sums:i,panesToResize:o}=W),c=s.value[o[0]]||null,x=s.value[o[1]]||null}c!==null&&(c.size=Math.min(Math.max(l-i.prevPanesSize-i.prevReachedMinPanes,c.min),c.max)),x!==null&&(x.size=Math.min(Math.max(100-l-i.nextPanesSize-i.nextReachedMinPanes,x.min),x.max))},te=(e,n)=>{const i=v.value.activeSplitter,a=[i,i+1];return n<e.prevPanesSize+s.value[a[0]].min&&(a[0]=se(i).index,e.prevReachedMinPanes=0,a[0]<i&&s.value.forEach((t,l)=>{l>a[0]&&l<=i&&(t.size=t.min,e.prevReachedMinPanes+=t.min)}),e.prevPanesSize=X(a[0]),a[0]===void 0)?(e.prevReachedMinPanes=0,s.value[0].size=s.value[0].min,s.value.forEach((t,l)=>{l>0&&l<=i&&(t.size=t.min,e.prevReachedMinPanes+=t.min)}),s.value[a[1]].size=100-e.prevReachedMinPanes-s.value[0].min-e.prevPanesSize-e.nextPanesSize,null):n>100-e.nextPanesSize-s.value[a[1]].min&&(a[1]=le(i).index,e.nextReachedMinPanes=0,a[1]>i+1&&s.value.forEach((t,l)=>{l>i&&l<a[1]&&(t.size=t.min,e.nextReachedMinPanes+=t.min)}),e.nextPanesSize=L(a[1]-1),a[1]===void 0)?(e.nextReachedMinPanes=0,s.value.forEach((t,l)=>{l<f.value-1&&l>=i+1&&(t.size=t.min,e.nextReachedMinPanes+=t.min)}),s.value[a[0]].size=100-e.prevPanesSize-L(a[0]-1),null):{sums:e,panesToResize:a}},X=e=>s.value.reduce((n,i,a)=>n+(a<e?i.size:0),0),L=e=>s.value.reduce((n,i,a)=>n+(a>e+1?i.size:0),0),se=e=>[...s.value].reverse().find(n=>n.index<e&&n.size>n.min)||{},le=e=>s.value.find(n=>n.index>e+1&&n.size>n.min)||{},oe=()=>{var e;Array.from(((e=p.value)==null?void 0:e.children)||[]).forEach(n=>{const i=n.classList.contains("splitpanes__pane"),a=n.classList.contains("splitpanes__splitter");!i&&!a&&(n.remove(),console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."))})},Y=(e,n,i=!1)=>{const a=e-1,t=document.createElement("div");t.classList.add("splitpanes__splitter"),i||(t.onmousedown=l=>I(l,a),typeof window<"u"&&"ontouchstart"in window&&(t.ontouchstart=l=>I(l,a)),t.onclick=l=>T(l,a+1)),m.dblClickSplitter&&(t.ondblclick=l=>j(l,a+1)),n.parentNode.insertBefore(t,n)},ue=e=>{e.onmousedown=void 0,e.onclick=void 0,e.ondblclick=void 0,e.remove()},$=()=>{var e;const n=Array.from(((e=p.value)==null?void 0:e.children)||[]);n.forEach(a=>{a.className.includes("splitpanes__splitter")&&ue(a)});let i=0;n.forEach(a=>{a.className.includes("splitpanes__pane")&&(!i&&m.firstSplitter?Y(i,a,!0):i&&Y(i,a),i++)})},re=({uid:e,...n})=>{const i=w.value[e];Object.entries(n).forEach(([a,t])=>i[a]=t)},me=e=>{var n;let i=-1;Array.from(((n=p.value)==null?void 0:n.children)||[]).some(a=>(a.className.includes("splitpanes__pane")&&i++,a.isSameNode(e.el))),s.value.splice(i,0,{...e,index:i}),s.value.forEach((a,t)=>a.index=t),g.value&&U(()=>{$(),q({addedPane:s.value[i]}),d("pane-add",{index:i,panes:s.value.map(a=>({min:a.min,max:a.max,size:a.size}))})})},de=e=>{const n=s.value.findIndex(a=>a.id===e),i=s.value.splice(n,1)[0];s.value.forEach((a,t)=>a.index=t),U(()=>{$(),q({removedPane:{...i}}),d("pane-remove",{removed:i,panes:s.value.map(a=>({min:a.min,max:a.max,size:a.size}))})})},q=(e={})=>{!e.addedPane&&!e.removedPane?pe():s.value.some(n=>n.givenSize!==null||n.min||n.max<100)?ce(e):ve(),g.value&&d("resized",s.value.map(n=>({min:n.min,max:n.max,size:n.size})))},ve=()=>{const e=100/f.value;let n=0;const i=[],a=[];s.value.forEach(t=>{t.size=Math.max(Math.min(e,t.max),t.min),n-=t.size,t.size>=t.max&&i.push(t.id),t.size<=t.min&&a.push(t.id)}),n>.1&&F(n,i,a)},pe=()=>{let e=100;const n=[],i=[];let a=0;s.value.forEach(l=>{e-=l.size,l.givenSize!==null&&a++,l.size>=l.max&&n.push(l.id),l.size<=l.min&&i.push(l.id)});let t=100;e>.1&&(s.value.forEach(l=>{l.givenSize===null&&(l.size=Math.max(Math.min(e/(f.value-a),l.max),l.min)),t-=l.size}),t>.1&&F(t,n,i))},ce=({addedPane:e,removedPane:n}={})=>{let i=100/f.value,a=0;const t=[],l=[];((e==null?void 0:e.givenSize)??null)!==null&&(i=(100-e.givenSize)/(f.value-1).value),s.value.forEach(o=>{a-=o.size,o.size>=o.max&&t.push(o.id),o.size<=o.min&&l.push(o.id)}),!(Math.abs(a)<.1)&&(s.value.forEach(o=>{(e==null?void 0:e.givenSize)!==null&&(e==null?void 0:e.id)===o.id||(o.size=Math.max(Math.min(i,o.max),o.min)),a-=o.size,o.size>=o.max&&t.push(o.id),o.size<=o.min&&l.push(o.id)}),a>.1&&F(a,t,l))},F=(e,n,i)=>{let a;e>0?a=e/(f.value-n.length):a=e/(f.value-i.length),s.value.forEach((t,l)=>{if(e>0&&!n.includes(t.id)){const o=Math.max(Math.min(t.size+a,t.max),t.min),c=o-t.size;e-=c,t.size=o}else if(!i.includes(t.id)){const o=Math.max(Math.min(t.size+a,t.max),t.min),c=o-t.size;e-=c,t.size=o}}),Math.abs(e)>.1&&U(()=>{g.value&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints.")})};D(()=>m.firstSplitter,()=>$()),D(()=>m.dblClickSplitter,e=>{[...p.value.querySelectorAll(".splitpanes__splitter")].forEach((n,i)=>{n.ondblclick=e?a=>j(a,i):void 0})}),K(()=>g.value=!1),Q(()=>{oe(),$(),q(),d("ready"),g.value=!0});const ze=()=>{var e;return Ee("div",{ref:p,class:C.value},(e=r.default)==null?void 0:e.call(r))};return E("panes",s),E("indexedPanes",w),E("horizontal",P(()=>m.horizontal)),E("requestUpdate",re),E("onPaneAdd",me),E("onPaneRemove",de),E("onPaneClick",ee),(e,n)=>(V(),Se(Pe(ze)))}},N={__name:"pane",props:{size:{type:[Number,String]},minSize:{type:[Number,String],default:0},maxSize:{type:[Number,String],default:100}},setup(A){var R;const d=A,m=b("requestUpdate"),r=b("onPaneAdd"),s=b("horizontal"),w=b("onPaneRemove"),f=b("onPaneClick"),p=(R=Me())==null?void 0:R.uid,g=b("indexedPanes"),v=P(()=>g.value[p]),_=k(null),C=P(()=>{const u=isNaN(d.size)||d.size===void 0?0:parseFloat(d.size);return Math.max(Math.min(u,B.value),O.value)}),O=P(()=>{const u=parseFloat(d.minSize);return isNaN(u)?0:u}),B=P(()=>{const u=parseFloat(d.maxSize);return isNaN(u)?100:u}),I=P(()=>{var u;return`${s.value?"height":"width"}: ${(u=v.value)==null?void 0:u.size}%`});return Q(()=>{r({id:p,el:_.value,min:O.value,max:B.value,givenSize:d.size===void 0?null:C.value,size:C.value})}),D(()=>C.value,u=>m({uid:p,size:u})),D(()=>O.value,u=>m({uid:p,min:u})),D(()=>B.value,u=>m({uid:p,max:u})),K(()=>w(p)),(u,y)=>(V(),G("div",{ref_key:"paneEl",ref:_,class:"splitpanes__pane",onClick:y[0]||(y[0]=T=>S(f)(T,u._.uid)),style:ye(I.value)},[we(u.$slots,"default")],4))}},Ne={class:"mb-2.5"},Ce=ke({name:"PluginSplitpanes"}),Oe=Object.assign(Ce,{setup(A){const R=()=>{window.open("https://github.com/antoniandre/splitpanes","_blank")},d=k(50);return(m,r)=>{const s=Z("el-tag"),w=_e,f=Z("el-button"),p=xe,g=fe;return V(),G("div",null,[h(p,{title:"拆分面板"},{content:z(()=>[Re("p",Ne,[r[2]||(r[2]=M("安装命令：")),h(s,null,{default:z(()=>r[1]||(r[1]=[M("pnpm i splitpanes")])),_:1})])]),default:z(()=>[h(f,{type:"primary",onClick:R},{icon:z(()=>[h(w,{name:"ele-link"})]),default:z(()=>[r[3]||(r[3]=M(" 访问 splitpanes "))]),_:1})]),_:1}),h(g,null,{default:z(()=>[h(S(J),{class:"default-theme",style:{height:"400px"},onResize:r[0]||(r[0]=v=>d.value=v[0].size)},{default:z(()=>[h(S(N),{size:30,"min-size":"10"},{default:z(()=>r[4]||(r[4]=[M("1")])),_:1}),h(S(N),{size:40},{default:z(()=>[h(S(J),{class:"default-theme",horizontal:!0},{default:z(()=>[h(S(N),{size:100},{default:z(()=>r[5]||(r[5]=[M("2")])),_:1}),h(S(N),{size:100},{default:z(()=>r[6]||(r[6]=[M("3")])),_:1}),h(S(N),{size:100},{default:z(()=>r[7]||(r[7]=[M("4")])),_:1})]),_:1})]),_:1}),h(S(N),{size:30,"min-size":"10"},{default:z(()=>r[8]||(r[8]=[M("5")])),_:1})]),_:1})]),_:1})])}}}),$e=be(Oe,[["__scopeId","data-v-4ae8ce20"]]);export{$e as default};
