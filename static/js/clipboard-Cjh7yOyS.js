import{N as o,ab as a,J as r,O as s}from"./index-20rDjvHc.js";const{copied:i,isSupported:t,copy:p}=o(),l=a("clipboard-read"),n=a("clipboard-write"),d=async e=>{t.value?l.value==="prompt"&&n.value==="granted"?p(e):s({showClose:!0,message:"当前无法获取读写权限",type:"warning"}):s({showClose:!0,message:"您的浏览器不支持剪贴板 API",type:"warning"})};r(i,e=>{e&&s({showClose:!0,message:"复制成功",type:"success"})});export{d as h};