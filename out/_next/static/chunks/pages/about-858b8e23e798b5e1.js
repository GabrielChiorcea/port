(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{512:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return s(2557)}])},7450:function(e,t,s){"use strict";s.d(t,{Z:function(){return h}});var l=s(5893),n=s(7294),a=e=>{let{children:t}=e,s=n.Children.toArray(t),a=s.map((e,t)=>t!==s.length-1?(0,l.jsx)(n.Fragment,{children:e},t):e);return(0,l.jsx)("nav",{"aria-label":"breadcrumb",children:(0,l.jsx)("ul",{className:"flex items-center justify-center sm:justify-start [&>*:last-child]:pointer-events-none",children:a})})};let r=e=>e.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");var i=s(1664),c=s.n(i),d=e=>{let{children:t,href:s,isCurrent:n,...a}=e;return(0,l.jsx)("li",{...a,children:(0,l.jsx)(c(),{className:"link",href:s,passHref:!0,children:r(t)})})},o=s(1163),h=e=>{let{title:t,subtitle:s}=e,i=(0,o.useRouter)(),[c,h]=(0,n.useState)();return(0,n.useEffect)(()=>{let e=i.asPath.split("?")[0],t=e.split("/");t.shift(),t=t.filter(e=>""!==e);let s=t.map((e,s)=>{let l="/"+t.slice(0,s+1).join("/");return{href:l,label:e.charAt(0).toUpperCase()+e.slice(1),isCurrent:s===t.length-1}});h(s)},[i.asPath]),(0,l.jsx)("section",{className:"banner bg-white",children:(0,l.jsx)("div",{className:"pt-20 pb-24 page-banner bg-dark rounded-b-2xl relative z-10",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row items-end","data-aos":"fade",children:[(0,l.jsxs)("div",{className:"sm:col-8 text-center sm:text-left",children:[(0,l.jsx)("h1",{className:"text-4xl md:text-5xl font-secondary font-medium -mt-[6px] text-center sm:text-left mb-8",children:r(t)}),(0,l.jsxs)(a,{children:[(0,l.jsx)("li",{children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",className:"mr-3",style:{transform:"rotateY(180deg)"},children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2"}),(0,l.jsx)("path",{d:"M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5"}),(0,l.jsx)("path",{d:"M16 19h6"}),(0,l.jsx)("path",{d:"M19 16l3 3l-3 3"})]})}),(0,l.jsx)(d,{isCurrent:"/"===i.pathname,href:"/",children:"Home"}),c&&c.map(e=>(0,l.jsxs)(n.Fragment,{children:[(0,l.jsx)("li",{children:(0,l.jsx)("span",{className:"px-4",children:"•"})}),(0,l.jsx)(d,{href:e.href,isCurrent:e.isCurrent,children:e.label})]},e.href))]})]}),(0,l.jsx)("div",{className:"sm:col-4 block mt-6 sm:mt-0 text-center sm:text-right",children:(0,l.jsx)("span",{className:"font-secondary text-2xl leading-none text-white/75",children:s})})]})})})})}},4794:function(e,t,s){"use strict";var l=s(5893),n=s(7294),a=s(5772),r=s(9234),i=s(6199);t.Z=e=>{let{content:t,inline:s}=e;return(0,l.jsx)(a.D,{components:{p:s?n.Fragment:"p"},remarkPlugins:[i.Z],rehypePlugins:[r.Z],children:t})}},2557:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return o}});var l=s(5893),n=s(5081),a=s(7450),r=s(4794),i=s(5675),c=s.n(i),d=s(7294);s(8918),s(2261),s(6268);var o=!0;t.default=e=>{let{aboutPage:t}=e,{title:s,subtitle:i,about:o,featuredBy:h,services:m,whatClientsSay:x}=t.frontMatter,[u,j]=(0,d.useState)([]);(0,d.useEffect)(()=>{(()=>{let e=[];for(;e.length<o.images.length;){let t=Math.floor(13*Math.random())+-6;e.includes(t)||e.push(t)}j(e)})()},[o.images]);let f=(0,d.useRef)(null),p=(0,d.useRef)(0),g=()=>{let{children:e}=f.current,t=e.length-1,s=p.current;console.log(t,s);let l=0===s?t:s-1;for(let t=0;t<e.length;t++)e[t].style.zIndex=t===l?99:0;p.current=l},[v,N]=(0,d.useState)(0),w=()=>{N(v+360),g()};return(0,l.jsxs)(n.Z,{metaTitle:s,children:[(0,l.jsx)(a.Z,{title:s,subtitle:i}),(0,l.jsx)("section",{className:"py-28 bg-white text-dark",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row justify-center items-center",children:[(0,l.jsx)("div",{className:"lg:col-4 md:col-6 col-10 mb-16 lg:mb-0","data-aos":"fade-up-sm",children:(0,l.jsx)("div",{ref:f,onClick:()=>w(),className:"relative mx-8 z-10 cursor-pointer hover:scale-105 transition-transform ease-out duration-300",children:o.images.map((e,t)=>(0,l.jsx)("div",{className:"transition-transform ".concat(0!==t?"absolute top-0 left-0":"relative"),style:{zIndex:-t,transform:"rotate(".concat(u[t],"deg)")},children:(0,l.jsx)(c(),{src:e,alt:"Image",width:500,height:607,className:"rounded-lg bg-light/10"})},t))})}),(0,l.jsx)("div",{className:"lg:col-5 md:col-10 text-center lg:text-left","data-aos":"fade-up-sm","data-aos-delay":"100",children:(0,l.jsxs)("div",{className:"pl-0 lg:pl-8 flex flex-col",children:[(0,l.jsxs)("div",{className:"order-2 lg:order-1 mb-0 lg:mb-10 mt-10 lg:mt-0",children:[(0,l.jsx)("p",{className:"text-2xl leading-snug mb-4",children:o.title}),(0,l.jsx)("div",{className:"text-black/75",children:(0,l.jsx)(r.Z,{content:o.description,inline:!0})})]}),(0,l.jsx)("div",{className:"order-1 lg:order-2",children:(0,l.jsx)("button",{className:"button button-sm button-dark",onClick:()=>w(),children:(0,l.jsxs)("span",{children:[(0,l.jsx)("svg",{style:{transform:"rotate(".concat(v,"deg)")},className:"inline align-bottom mr-2 transition-transform ease-out duration-1000",width:"16",height:"16",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M18.3332 10.0003C18.3332 14.6027 14.6022 18.3337 9.99984 18.3337C5.39746 18.3337 2.49984 13.7503 2.49984 13.7503M1.6665 10.0003C1.6665 5.39795 5.37021 1.66699 9.99984 1.66699C15.5554 1.66699 18.3332 6.25033 18.3332 6.25033M18.3332 6.25033V3.33366M18.3332 6.25033H15.4165M2.49984 13.7503H5.4165M2.49984 13.7503V16.667",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),"More Photos"]})})})]})})]})})}),h.enable&&(0,l.jsx)("section",{className:"pb-24 pt-10 bg-white text-dark overflow-hidden",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-12 mb-10",children:(0,l.jsx)("h2",{className:"text-3xl font-secondary font-medium text-center","data-aos":"fade",children:h.title})}),(0,l.jsx)("div",{className:"col-12",children:(0,l.jsx)("div",{className:"flex justify-center items-center flex-wrap",children:h.brands.map((e,t)=>(0,l.jsx)("div",{className:"mx-8 my-4","data-aos":"fade-left","data-aos-delay":50*t,children:(0,l.jsx)(c(),{src:e,alt:"Brand",width:120,height:80,className:"w-auto max-h-20"})},t))})})]})})}),m.enable&&(0,l.jsx)("section",{className:"py-28",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("div",{className:"row mb-16 items-end",children:[(0,l.jsx)("div",{className:"sm:col-8 order-2 sm:order-1",children:(0,l.jsx)("h2",{className:"text-4xl md:text-5xl font-secondary font-medium -mt-[6px] text-center sm:text-left",children:m.title})}),(0,l.jsx)("div",{className:"sm:col-4 order-1 sm:order-2 block mb-4 sm:mb-0 text-center sm:text-right",children:(0,l.jsx)("span",{className:"font-secondary text-2xl leading-none text-white/75",children:m.subtitle})})]}),(0,l.jsx)("div",{className:"row g-0",children:m.serviceLists.map((e,t)=>(0,l.jsxs)(d.Fragment,{children:[(0,l.jsx)("div",{className:"lg:col-4 md:col-6","data-aos":"fade-in",children:(0,l.jsxs)("div",{className:"".concat(e.active?"":"select-none cursor-not-allowed hover:border-white/5"," border border-white/5 hover:border-white/40 p-8 h-full rounded-lg"),children:[(0,l.jsxs)("span",{className:"text-lg font-secondary font-medium text-white/75",children:["/ ",t<9?"0"+(t+1):t+1]}),(0,l.jsx)("h3",{className:"my-6 text-3xl ".concat(e.active?"":"text-white/75"),children:e.title}),(0,l.jsx)("div",{className:"text-white/75 text-lg",children:(0,l.jsx)(r.Z,{content:e.description,inline:!0})})]})}),t!==m.serviceLists.length-1&&m.rotatingIcon&&(0,l.jsx)("div",{className:"lg:col-4 md:col-6 block md:hidden lg:block",children:(0,l.jsx)("div",{className:"p-8 h-full flex items-center content-center py-6",children:(0,l.jsx)("svg",{className:"mx-auto opacity-10 animate-spin h-10 w-10 md:h-16 md:w-16",style:{animationDuration:"6000ms"},xmlns:"http://www.w3.org/2000/svg",width:"62",height:"62",viewBox:"0 0 23 23",fill:"none",children:(0,l.jsx)("path",{d:"M23 12.9234H14.9568L20.6503 18.6169L18.6169 20.6051L12.9234 14.9116V23L10.0766 22.9548V14.9116L4.3831 20.6503L2.39489 18.6169L8.08841 12.9234H0V10.0766H8.08841L2.39489 4.33792L4.3831 2.3497L10.0766 8.08841V0H12.9234V8.08841L18.6621 2.3497L20.6503 4.33792L14.9568 10.0766H23V12.9234Z",fill:"white"})})})})]},t))})]})})]})}}},function(e){e.O(0,[675,593,63,81,774,888,179],function(){return e(e.s=512)}),_N_E=e.O()}]);