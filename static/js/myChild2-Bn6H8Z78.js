import{am as v,a as y,e as C,o as N,j as u,i as l,t as a,g as n,w as m,y as r,F as b}from"./index-H_c7H9_6.js";const g={__name:"myChild2",props:{modelValue:{type:Number,required:!0},sum:{type:Number,required:!0}},emits:["update:modelValue","update:sum"],setup(d,{emit:p}){const i=d,V=p,{modelValue:t,sum:o}=v(i,V);return(k,e)=>{const s=y("el-button");return N(),C(b,null,[u("h1",null,"子组件 - 父组件的传值 - modelValue："+a(n(t)),1),u("h1",null,"子组件 - 父组件的传值 - sum："+a(n(o)),1),l(s,{onClick:e[0]||(e[0]=f=>t.value--)},{default:m(()=>e[2]||(e[2]=[r("子组件按钮 - modelValue")])),_:1}),l(s,{onClick:e[1]||(e[1]=f=>o.value--)},{default:m(()=>e[3]||(e[3]=[r("子组件按钮 - sum")])),_:1})],64)}}};export{g as default};
