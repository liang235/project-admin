import{_ as f}from"./index-m1hp8roE.js";import{d as g,Z as h,r as y,c as _,e as s,f as v,j as r,P as S,X as d,F as k,y as w,t as b,m as u,Q as B,i as C,g as l,n as N,o}from"./index-H_c7H9_6.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";const $={key:0,class:"title-container"},j=g({name:"PageMain"}),D=Object.assign(j,{props:{title:{type:String,default:""},height:{type:String,default:""},bodyStyle:{type:Object,default:()=>{}},collaspe:{type:Boolean,default:!1}},setup(t){const e=t,n=!!h().title,a=y(e.collaspe),m=_(()=>{if(e.height&&!e.collaspe)return e.height;if(!e.height&&e.collaspe)return"";if(e.height&&e.collaspe)return a.value?e.height:""});return(i,c)=>{const p=f;return o(),s("div",{class:N(["page-main",{"is-collaspe":t.collaspe}]),style:u({height:l(m)})},[n||t.title?(o(),s("div",$,[n?d(i.$slots,"title",{key:0},void 0,!0):(o(),s(k,{key:1},[w(b(t.title),1)],64))])):v("",!0),r("div",{class:"main-container",style:u(t.bodyStyle)},[d(i.$slots,"default",{},void 0,!0)],4),S(r("div",{class:"collaspe",onClick:c[0]||(c[0]=x=>a.value=!l(a))},[C(p,{name:l(a)?"ele-arrow-down":"ele-arrow-up"},null,8,["name"])],512),[[B,t.height&&t.collaspe]])],6)}}}),P=V(D,[["__scopeId","data-v-12887459"]]);export{P as _};
