import{h as _,r,o as a,d as n,a as t,b as l,w as i,F as h,e as u,t as e,i as v}from"./index-2e212703.js";const p={class:"nav"},m={class:"container"},b={class:"d-flex justify-content-between"},g=t("div",{class:"mt-2 title"},[t("h3",null,"Added To Your Cart")],-1),f={class:"mt-3 icon"},y=t("span",{class:"material-symbols-outlined"}," close ",-1),w={class:"container mt-3"},x={class:"col-sm-5"},C={class:"image"},V=["src"],k=t("div",{class:"p-3"},[t("h5",{class:"card-title"},"Subtotal:")],-1),I={class:"p-5 col-sm-7"},N={class:"para"},S={class:"mt-0"},B={class:"card-title"},T={class:"mt-5"},j={class:"mt-5"},D={class:"prise"},F={class:"card-title"},Y=t("div",{class:"from-text"},[t("span",{class:"material-symbols-outlined"}," star_rate_half "),v("   "),t("span",{class:"text"}," With supporting text below as a natural lead-in to additional content. ")],-1),q=t("div",{class:"mt-5 line-1"},null,-1),A={class:"p-3 con"},E={class:"btn d-flex justify-content-between"},J=t("div",{class:"btn-one"},[t("button",{type:"button",class:"btn"},[t("div",{class:"conti"},"Continue shopping")])],-1),L={class:"btn-two"},O=t("button",{type:"button",class:"btn"},[t("div",{class:"view"},"View card")],-1),z={__name:"CartView",setup(P){const o=_([]);return o.value=JSON.parse(localStorage.getItem("CartData")),(Q,W)=>{const c=r("router-link");return a(),n("div",null,[t("nav",p,[t("div",m,[t("div",b,[g,t("div",f,[l(c,{to:"/"},{default:i(()=>[y]),_:1})])])])]),t("div",w,[(a(!0),n(h,null,u(o.value,(s,d)=>(a(),n("div",{class:"row",key:d},[t("div",x,[t("div",C,[t("img",{src:s.image,onerror:"this.onerror=null; this.src='public/PlaceholderImg.png'",class:"card-img-top",alt:"..."},null,8,V)]),k]),t("div",I,[t("div",N,[t("div",S,[t("h4",B,e(s.name),1)]),t("div",T,[t("h5",null,"Quantity "+e(s.qty),1)]),t("div",j,[t("h5",D,"$ "+e(s.subTotal),1)])])])]))),128)),t("h5",F,"("+e(o.value.length)+" Items In Your Card)",1),Y,q,t("div",A,[t("div",E,[J,t("div",L,[l(c,{to:"addcart"},{default:i(()=>[O]),_:1})])])])])])}}};export{z as default};