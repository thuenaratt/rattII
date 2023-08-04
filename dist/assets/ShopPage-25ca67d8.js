import{F as x,c as m,i as f,p as c}from"./Footers-9be3c644.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{r as a,o,c as b,w as e,a as t,b as s,d,e as w,F as _}from"./index-2e212703.js";const y={components:{Footers:x},data(){return{categories:[],items:[],products:[],title:"",imageUrl:"",desc:"",categoryId:"",itemId:"",priceModalShown:!1,selectedProduct:null,price:"",source:""}},async mounted(){this.categories=await m.all(),this.items=await f.all(),this.products=await c.all(),console.log(this.products),console.log(this.categories.data)},methods:{async onClick(i,r){this.products=await c.all(i,r)}}},k={class:"text-gray-500"},H={class:"relative text-gray-300 bg-secondary-500 poster"},j={class:"container relative pt-4 mx-auto"},A={class:"flex flex-wrap items-center px-4 py-2"},B=t("a",{href:"#",class:"inline-flex mr-4 font-serif text-2xl font-bold leading-none text-black uppercase hover:text-gray-300"}," N & R Beauty ",-1),C=t("div",{class:"px-2 ml-auto lg:order-2"},[t("div",{class:"flex flex-row ml-auto"},[t("a",{href:"#",class:"px-2 py-4 text-black hover:text-gray-300","aria-label":"Search"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"1.25em",height:"1.25em",class:"inline-block"},[t("g",null,[t("path",{fill:"none",d:"M0 0h24v24H0z"}),t("path",{d:"M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"})])])]),t("a",{href:"#",class:"px-2 py-4 text-black hover:text-gray-300","aria-label":"View cart"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"1.25em",height:"1.25em",class:"inline-block"},[t("g",null,[t("path",{fill:"none",d:"M0 0h24v24H0z"}),t("path",{d:"M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 0 0-6 0v2z"})])]),t("span",null,"(0)")]),t("a",{href:"#",class:"px-2 py-4 text-black hover:text-gray-300","aria-label":"Account"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"1.25em",height:"1.25em",class:"inline-block"},[t("g",null,[t("path",{fill:"none",d:"M0 0h24v24H0z"}),t("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"})])])])])],-1),P=t("button",{class:"px-3 py-2 text-white rounded hover:bg-primary-500 hover:text-white lg:hidden","data-name":"nav-toggler","data-pg-ia":'{"l":[{"name":"NabMenuToggler","trg":"click","a":{"l":[{"t":"^nav|[data-name=nav-menu]","l":[{"t":"set","p":0,"d":0,"l":{"class.remove":"hidden"}}]},{"t":"#gt# span:nth-of-type(1)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":45,"yPercent":300}}]},{"t":"#gt# span:nth-of-type(2)","l":[{"t":"tween","p":0,"d":0.2,"l":{"autoAlpha":0}}]},{"t":"#gt# span:nth-of-type(3)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":-45,"yPercent":-300}}]}]},"pdef":"true","trev":"true"}]}',"data-pg-ia-apply":"$nav [data-name=nav-toggler]"},[t("span",{class:"block w-6 my-1 border-b-2 border-current"}),t("span",{class:"block w-6 my-1 border-b-2 border-current"}),t("span",{class:"block w-6 my-1 border-b-2 border-current"})],-1),M={class:"flex-1 hidden w-full space-y-2 lg:flex lg:items-center lg:space-x-4 lg:space-y-0 lg:w-auto","data-name":"nav-menu"},z={class:"flex flex-col mx-auto lg:flex-row"},F=t("a",{href:"#",class:"py-2 text-black hover:text-gray-300 lg:p-4"},"Home",-1),L=t("a",{href:"#",class:"py-2 text-black hover:text-gray-300 lg:p-4"},"Shop",-1),$=t("a",{href:"#",class:"py-2 text-black hover:text-gray-300 lg:p-4"},"About",-1),S=t("a",{href:"#",class:"py-2 text-black hover:text-gray-300 lg:p-4"},"Page",-1),T=t("div",{class:"container px-4 mx-auto py-36"},[t("div",{class:"flex flex-wrap items-center -mx-4 space-y-6 lg:space-y-0"},[t("div",{class:"w-full px-4 md:w-10/12 lg:w-6/12 xl:w-5/12"},[t("a",{href:"#",class:"inline-block px-6 py-2 m-1 text-white rounded bg-primary-500 hover:bg-primary-600"},"Shop Now")])])],-1),N=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 140",fill:"currentColor",class:"block mt-12 text-white"},[t("path",{d:"m0 90 120-16c120-16 360-48 600-48s480 32 600 48l120 16v50.023H0Z",opacity:".6"}),t("path",{d:"m0 110 120-16c120-16 360-48 600-48s480 32 600 48l120 16v50.023H0Z"})],-1),V={class:"py-10 bg-gray-100"},R=t("link",{href:"Content/css/popupf7d5.css?v=20230421001",rel:"stylesheet",type:"text/css"},null,-1),G={class:"grid max-w-6xl grid-cols-1 gap-6 p-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"},Z={href:"#"},I={class:"relative flex items-end overflow-hidden rounded-xl"},U=t("img",{src:"https://cimgr.thebeaulife.co/cimg/f_jpg,w_450,c_fit/img/innisfree_Green_Tea_Line_New_Formula_Singapore_(4).jpg",alt:""},null,-1),E=["src"],O=t("div",{class:"absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100"},[t("div",{class:"text-center text-white"},[t("div",{class:"mb-4"},[t("button",{class:"p-2 mr-4 text-white bg-blue-500 rounded-full"},[t("i",{class:"fas fa-eye"})]),t("button",{class:"p-2 text-white bg-green-500 rounded-full"},"Add to Cart")])])],-1),W=t("div",{class:"p-2 mt-1"},[t("h2",{class:"text-slate-700"},"Innisfree Green Tea Hydrating Amino Acid Cleansing Line."),t("div",{class:"flex items-end justify-between mt-3"},[t("p",{class:"text-lg font-bold text-[#826B9F]"},"$850")])],-1),q=t("article",{class:"p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105"},[t("a",{href:"#"},[t("div",{class:"relative flex items-end overflow-hidden rounded-xl"},[t("img",{src:"https://cimgr.thebeaulife.co/cimg/f_jpg,w_450,c_fit/img/innisfree_Green_Tea_Line_New_Formula_Singapore_(4).jpg",alt:"Hotel Photo"}),t("div",{class:"absolute inline-flex items-center p-2 bg-white rounded-lg shadow-md bottom-3 left-3"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 text-yellow-400",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})]),t("span",{class:"ml-1 text-sm text-slate-400"},"4.9")]),t("div",{class:"absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100"},[t("div",{class:"text-center text-white"},[t("div",{class:"mb-4"},[t("button",{class:"p-2 mr-4 text-white bg-blue-500 rounded-full"},[t("i",{class:"fas fa-eye"})]),t("button",{class:"p-2 text-white bg-green-500 rounded-full"},"Add to Cart")])])])]),t("div",{class:"p-2 mt-1"},[t("h2",{class:"text-slate-700"},"innisfree Green Tea Seed Line."),t("div",{class:"flex items-end justify-between mt-3"},[t("p",{class:"text-lg font-bold text-[#826B9F]"},"$850")])])])],-1),D=t("article",{class:"p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105"},[t("a",{href:"#"},[t("div",{class:"relative flex items-end overflow-hidden rounded-xl"},[t("img",{src:"https://www.adorebeauty.com.au/media/catalog/product/1/3/131171094_bija_trouble_skin.png?w=600&h=600&fmt=webp",alt:"Hotel Photo"}),t("div",{class:"absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100"},[t("div",{class:"text-center text-white"},[t("div",{class:"mb-4"},[t("button",{class:"p-2 mr-4 text-white bg-blue-500 rounded-full"},[t("i",{class:"fas fa-eye"})]),t("button",{class:"p-2 text-white bg-green-500 rounded-full"},"Add to Cart")])])])]),t("div",{class:"p-2 mt-1"},[t("h2",{class:"text-slate-700"},"The Hilton Hotel"),t("p",{class:"mt-1 text-sm text-slate-400"},"Lisbon, Portugal"),t("div",{class:"flex items-end justify-between mt-3"},[t("p",{class:"text-lg font-bold text-[#826B9F]"},"$450")])])])],-1),J=t("article",{class:"p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105"},[t("a",{href:"#"},[t("div",{class:"relative flex items-end overflow-hidden rounded-xl"},[t("img",{src:"https://img.shoplineapp.com/media/image_clips/62f3d6796d36e800225a44c4/original.jpeg?1660147320",alt:"Hotel Photo"}),t("div",{class:"flex items-center space-x-1.5 rounded-lg bg-[#826B9F] hover:bg-[#B0A3C0] px-4 py-1.5 text-white duration-100"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})]),t("button",{class:"text-sm"},"Add to cart")]),t("div",{class:"absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100"},[t("div",{class:"text-center text-white"},[t("div",{class:"mb-4"},[t("button",{class:"p-2 mr-4 text-white bg-blue-500 rounded-full"},[t("i",{class:"fas fa-eye"})]),t("button",{class:"p-2 text-white bg-green-500 rounded-full"},"Add to Cart")])])])]),t("div",{class:"p-2 mt-1"},[t("h2",{class:"text-slate-700"},"The Hilton Hotel"),t("p",{class:"mt-1 text-sm text-slate-400"},"Lisbon, Portugal"),t("div",{class:"flex items-end justify-between mt-3"},[t("p",{class:"text-lg font-bold text-[#826B9F]"},"$450")])])])],-1),K=t("article",{class:"p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105"},[t("a",{href:"#"},[t("div",{class:"relative flex items-end overflow-hidden rounded-xl"},[t("img",{src:"",alt:"Hotel Photo"}),t("div",{class:"flex items-center space-x-1.5 rounded-lg bg-[#826B9F] hover:bg-[#B0A3C0] px-4 py-1.5 text-white duration-100"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})]),t("button",{class:"text-sm"},"Add to cart")]),t("div",{class:"absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100"},[t("div",{class:"text-center text-white"},[t("div",{class:"mb-4"},[t("button",{class:"p-2 mr-4 text-white bg-blue-500 rounded-full"},[t("i",{class:"fas fa-eye"})]),t("button",{class:"p-2 text-white bg-green-500 rounded-full"},"Add to Cart")])])])]),t("div",{class:"p-2 mt-1"},[t("h2",{class:"text-slate-700"},"The Hilton Hotel"),t("p",{class:"mt-1 text-sm text-slate-400"},"Lisbon, Portugal"),t("div",{class:"flex items-end justify-between mt-3"},[t("p",{class:"text-lg font-bold text-[#826B9F]"},"$450")])])])],-1),Q=t("article",{class:"p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105"},[t("a",{href:"#"},[t("div",{class:"relative flex items-end overflow-hidden rounded-xl"},[t("img",{src:"https://cf.shopee.co.th/file/f8962733eb524a6b6e7d4e47c0357c13",alt:"Hotel Photo"}),t("div",{class:"absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100"},[t("div",{class:"text-center text-white"},[t("div",{class:"mb-4"},[t("button",{class:"p-2 mr-4 text-white bg-blue-500 rounded-full"},[t("i",{class:"fas fa-eye"})]),t("button",{class:"p-2 text-white bg-green-500 rounded-full"},"Add to Cart")])])])]),t("div",{class:"p-2 mt-1"},[t("h2",{class:"text-slate-700"},"The Hilton Hotel"),t("p",{class:"mt-1 text-sm text-slate-400"},"Lisbon, Portugal"),t("div",{class:"flex items-end justify-between mt-3"},[t("p",{class:"text-lg font-bold text-[#826B9F]"},"$450")])])])],-1),X=t("article",{class:"p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105"},[t("a",{href:"#"},[t("div",{class:"relative flex items-end overflow-hidden rounded-xl"},[t("img",{src:"https://i.ebayimg.com/images/g/nxcAAOSwl2RkRrWg/s-l1200.jpg",alt:"Hotel Photo"}),t("div",{class:"absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100"},[t("div",{class:"text-center text-white"},[t("div",{class:"mb-4"},[t("button",{class:"p-2 mr-4 text-white bg-blue-500 rounded-full"},[t("i",{class:"fas fa-eye"})]),t("button",{class:"p-2 text-white bg-green-500 rounded-full"},"Add to Cart")])])])]),t("div",{class:"p-2 mt-1"},[t("h2",{class:"text-slate-700"},"The Hilton Hotel"),t("p",{class:"mt-1 text-sm text-slate-400"},"Lisbon, Portugal"),t("div",{class:"flex items-end justify-between mt-3"},[t("p",{class:"text-lg font-bold text-[#826B9F]"},"$450")])])])],-1),Y={class:"p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105"},tt={href:"#"},et={class:"relative flex items-end overflow-hidden rounded-xl"},st=t("img",{src:"https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/339742/minimalist-spf-50-sunscreen-with-niacinamide-vitamin-b5-vitamin-f-broad-spectrum-pa-for-all-skin-types-50g-pack-of-2_2_display_1679316919_fd4f2a8b.jpg",alt:"Hotel Photo"},null,-1),lt={class:"absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100"},at={class:"text-center text-white"},ot={class:"mb-4"},it=t("button",{class:"p-2 mr-4 text-white bg-blue-500 rounded-full"},[t("i",{class:"fas fa-eye"})],-1),rt=t("button",{class:"p-2 text-white bg-green-500 rounded-full"},"Add to Cart",-1),nt=t("div",{class:"p-2 mt-1"},[t("h2",{class:"text-slate-700"},"The Hilton Hotel"),t("p",{class:"mt-1 text-sm text-slate-400"},"Lisbon, Portugal"),t("div",{class:"flex items-end justify-between mt-3"},[t("p",{class:"text-lg font-bold text-[#826B9F]"},"$450")])],-1);function ct(i,r,dt,ht,h,pt){const l=a("router-link"),p=a("RouterLink"),u=a("Footers"),g=a("defaultLayout");return o(),b(g,null,{default:e(()=>[t("body",k,[t("main",null,[t("section",H,[t("div",j,[t("nav",A,[B,C,P,t("div",M,[t("div",z,[s(l,{to:"/"},{default:e(()=>[F]),_:1}),s(l,{to:"shop"},{default:e(()=>[L]),_:1}),s(l,{to:"about"},{default:e(()=>[$]),_:1}),s(l,{to:"page"},{default:e(()=>[S]),_:1})])])])]),T,N])])]),t("section",V,[R,t("div",G,[(o(!0),d(_,null,w(h.products,n=>(o(),d("article",{key:n._id,class:"p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105"},[t("a",Z,[t("div",I,[U,t("img",{src:n.imageUrl,alt:"Hotel Photo"},null,8,E),O]),W])]))),128)),q,D,J,K,Q,X,t("article",Y,[t("a",tt,[t("div",et,[st,t("div",lt,[t("div",at,[t("div",ot,[it,s(p,{to:"/cart"},{default:e(()=>[rt]),_:1})])])])]),nt])])])]),s(u)]),_:1})}const mt=v(y,[["render",ct]]);export{mt as default};