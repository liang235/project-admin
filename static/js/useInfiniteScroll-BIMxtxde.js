import{_ as w}from"./index-18-zeZ0g.js";import{_ as x}from"./index-DksR-fQs.js";import{_ as y}from"./index-Bg4qa1ri.js";import{r as e,as as k,a as f,o as l,d as c,i as t,w as i,e as v,z as $,q as B,s as L,j as N,at as V}from"./index-20rDjvHc.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";const C=a=>(B("data-v-e562b25a"),a=a(),L(),a),D=C(()=>N("p",null,"元素无限滚动",-1)),P={key:0,class:"loading"},R={key:1,class:"loading"},T={__name:"useInfiniteScroll",setup(a){const _=e(null),p=e(1),r=e(10),s=e([]),o=e(!1),u=e(!0),g=async()=>{if(o.value||!u.value)return;o.value=!0,await new Promise(d=>{setTimeout(d,1e3)});const{data:n}=await V(`http://jsonplaceholder.typicode.com/posts?_page=${p.value}&_limit=${r.value}`);n.length<r.value&&(u.value=!1),s.value=[...s.value,...n],p.value++,o.value=!1};return k(_,async()=>{await g()},{distance:15}),(n,d)=>{const h=y,m=f("el-table-column"),b=f("el-table"),I=x,S=w;return l(),c("div",{ref_key:"listRef",ref:_,class:"useInfiniteScroll"},[t(h,{title:"欢迎使用 useInfiniteScroll"},{content:i(()=>[D]),_:1}),t(S,{title:"无限滚动"},{default:i(()=>[t(b,{data:v(s),border:""},{default:i(()=>[t(m,{prop:"id",label:"id"}),t(m,{prop:"title",label:"title"})]),_:1},8,["data"]),v(o)?(l(),c("div",P,[t(I,{name:"ele-loading"}),$("请求更多数据操作中")])):(l(),c("div",R,"暂无更多数据"))]),_:1})],512)}}},G=j(T,[["__scopeId","data-v-e562b25a"]]);export{G as default};