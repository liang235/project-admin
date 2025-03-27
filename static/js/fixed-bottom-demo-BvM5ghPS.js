import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{d as k,r as B,D as L,G as M,e as j,X as O,n as S,g as t,o as E,i as e,w as d,a as u,j as x,y as _}from"./index-H_c7H9_6.js";import{_ as z}from"./index-BqNn1QRp.js";import{_ as D}from"./index-ncGf53PB.js";import"./index-m1hp8roE.js";const G=k({name:"FixedBottom"}),I=Object.assign(G,{setup(H){const o=B(!1),V=()=>{const l=document.documentElement.scrollTop||document.body.scrollTop,f=document.documentElement.clientHeight||document.body.clientHeight,s=document.documentElement.scrollHeight||document.body.scrollHeight;o.value=Math.ceil(l+f)>=s};return L(()=>{V(),window.addEventListener("scroll",V)}),M(()=>{window.removeEventListener("scroll",V)}),(l,f)=>(E(),j("div",{class:S(["fixed-bottom",{shadow:!t(o)}]),"data-fixed-calc-width":""},[O(l.$slots,"default",{},void 0,!0)],2))}}),X=N(I,[["__scopeId","data-v-ca92c2fb"]]),q={class:"components"},A=k({name:"ComponentFixedBottom"}),W=Object.assign(A,{setup(H){const o=B({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""});return(V,l)=>{const f=D,s=u("el-input"),n=u("el-form-item"),r=u("el-option"),b=u("el-select"),y=u("el-date-picker"),p=u("el-col"),g=u("el-time-picker"),U=u("el-switch"),m=u("el-checkbox"),c=u("el-checkbox-group"),i=u("el-radio"),v=u("el-radio-group"),C=u("el-form"),T=u("el-row"),$=z,w=u("el-button"),F=X;return E(),j("div",q,[e(f,{title:"固定底部操作栏",content:"避免因页面过长导致操作按钮需要滚动到页面底部才能操作，例如表单页"},{content:d(()=>l[24]||(l[24]=[x("p",null,"FixedBottom",-1),x("p",{style:{"margin-bottom":"0"}},"避免因页面过长导致操作按钮需要滚动到页面底部才能操作，例如表单页",-1)])),_:1}),e($,null,{default:d(()=>[e(T,null,{default:d(()=>[e(p,{md:24,lg:12},{default:d(()=>[e(C,{model:t(o),"label-width":"120px"},{default:d(()=>[e(n,{label:"活动名称"},{default:d(()=>[e(s,{modelValue:t(o).name,"onUpdate:modelValue":l[0]||(l[0]=a=>t(o).name=a)},null,8,["modelValue"])]),_:1}),e(n,{label:"活动区域"},{default:d(()=>[e(b,{modelValue:t(o).region,"onUpdate:modelValue":l[1]||(l[1]=a=>t(o).region=a),placeholder:"请选择活动区域"},{default:d(()=>[e(r,{label:"区域一",value:"shanghai"}),e(r,{label:"区域二",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"活动时间"},{default:d(()=>[e(p,{span:11},{default:d(()=>[e(y,{modelValue:t(o).date1,"onUpdate:modelValue":l[2]||(l[2]=a=>t(o).date1=a),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(p,{class:"line",span:2},{default:d(()=>l[25]||(l[25]=[_(" - ")])),_:1}),e(p,{span:11},{default:d(()=>[e(g,{modelValue:t(o).date2,"onUpdate:modelValue":l[3]||(l[3]=a=>t(o).date2=a),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{label:"即时配送"},{default:d(()=>[e(U,{modelValue:t(o).delivery,"onUpdate:modelValue":l[4]||(l[4]=a=>t(o).delivery=a)},null,8,["modelValue"])]),_:1}),e(n,{label:"活动性质"},{default:d(()=>[e(c,{modelValue:t(o).type,"onUpdate:modelValue":l[5]||(l[5]=a=>t(o).type=a)},{default:d(()=>[e(m,{label:"美食/餐厅线上活动",name:"type"}),e(m,{label:"地推活动",name:"type"}),e(m,{label:"线下主题活动",name:"type"}),e(m,{label:"单纯品牌曝光",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"特殊资源"},{default:d(()=>[e(v,{modelValue:t(o).resource,"onUpdate:modelValue":l[6]||(l[6]=a=>t(o).resource=a)},{default:d(()=>[e(i,{label:"线上品牌商赞助"}),e(i,{label:"线下场地免费"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"活动形式"},{default:d(()=>[e(s,{modelValue:t(o).desc,"onUpdate:modelValue":l[7]||(l[7]=a=>t(o).desc=a),type:"textarea"},null,8,["modelValue"])]),_:1}),e(n,{label:"活动名称"},{default:d(()=>[e(s,{modelValue:t(o).name,"onUpdate:modelValue":l[8]||(l[8]=a=>t(o).name=a)},null,8,["modelValue"])]),_:1}),e(n,{label:"活动区域"},{default:d(()=>[e(b,{modelValue:t(o).region,"onUpdate:modelValue":l[9]||(l[9]=a=>t(o).region=a),placeholder:"请选择活动区域"},{default:d(()=>[e(r,{label:"区域一",value:"shanghai"}),e(r,{label:"区域二",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"活动时间"},{default:d(()=>[e(p,{span:11},{default:d(()=>[e(y,{modelValue:t(o).date1,"onUpdate:modelValue":l[10]||(l[10]=a=>t(o).date1=a),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(p,{class:"line",span:2},{default:d(()=>l[26]||(l[26]=[_(" - ")])),_:1}),e(p,{span:11},{default:d(()=>[e(g,{modelValue:t(o).date2,"onUpdate:modelValue":l[11]||(l[11]=a=>t(o).date2=a),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{label:"即时配送"},{default:d(()=>[e(U,{modelValue:t(o).delivery,"onUpdate:modelValue":l[12]||(l[12]=a=>t(o).delivery=a)},null,8,["modelValue"])]),_:1}),e(n,{label:"活动性质"},{default:d(()=>[e(c,{modelValue:t(o).type,"onUpdate:modelValue":l[13]||(l[13]=a=>t(o).type=a)},{default:d(()=>[e(m,{label:"美食/餐厅线上活动",name:"type"}),e(m,{label:"地推活动",name:"type"}),e(m,{label:"线下主题活动",name:"type"}),e(m,{label:"单纯品牌曝光",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"特殊资源"},{default:d(()=>[e(v,{modelValue:t(o).resource,"onUpdate:modelValue":l[14]||(l[14]=a=>t(o).resource=a)},{default:d(()=>[e(i,{label:"线上品牌商赞助"}),e(i,{label:"线下场地免费"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"活动形式"},{default:d(()=>[e(s,{modelValue:t(o).desc,"onUpdate:modelValue":l[15]||(l[15]=a=>t(o).desc=a),type:"textarea"},null,8,["modelValue"])]),_:1}),e(n,{label:"活动名称"},{default:d(()=>[e(s,{modelValue:t(o).name,"onUpdate:modelValue":l[16]||(l[16]=a=>t(o).name=a)},null,8,["modelValue"])]),_:1}),e(n,{label:"活动区域"},{default:d(()=>[e(b,{modelValue:t(o).region,"onUpdate:modelValue":l[17]||(l[17]=a=>t(o).region=a),placeholder:"请选择活动区域"},{default:d(()=>[e(r,{label:"区域一",value:"shanghai"}),e(r,{label:"区域二",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"活动时间"},{default:d(()=>[e(p,{span:11},{default:d(()=>[e(y,{modelValue:t(o).date1,"onUpdate:modelValue":l[18]||(l[18]=a=>t(o).date1=a),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(p,{class:"line",span:2},{default:d(()=>l[27]||(l[27]=[_(" - ")])),_:1}),e(p,{span:11},{default:d(()=>[e(g,{modelValue:t(o).date2,"onUpdate:modelValue":l[19]||(l[19]=a=>t(o).date2=a),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{label:"即时配送"},{default:d(()=>[e(U,{modelValue:t(o).delivery,"onUpdate:modelValue":l[20]||(l[20]=a=>t(o).delivery=a)},null,8,["modelValue"])]),_:1}),e(n,{label:"活动性质"},{default:d(()=>[e(c,{modelValue:t(o).type,"onUpdate:modelValue":l[21]||(l[21]=a=>t(o).type=a)},{default:d(()=>[e(m,{label:"美食/餐厅线上活动",name:"type"}),e(m,{label:"地推活动",name:"type"}),e(m,{label:"线下主题活动",name:"type"}),e(m,{label:"单纯品牌曝光",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"特殊资源"},{default:d(()=>[e(v,{modelValue:t(o).resource,"onUpdate:modelValue":l[22]||(l[22]=a=>t(o).resource=a)},{default:d(()=>[e(i,{label:"线上品牌商赞助"}),e(i,{label:"线下场地免费"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"活动形式"},{default:d(()=>[e(s,{modelValue:t(o).desc,"onUpdate:modelValue":l[23]||(l[23]=a=>t(o).desc=a),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1}),e(F,null,{default:d(()=>[e(w,{type:"primary"},{default:d(()=>l[28]||(l[28]=[_("立即创建")])),_:1}),e(w,null,{default:d(()=>l[29]||(l[29]=[_("取消")])),_:1})]),_:1})])}}});export{W as default};
