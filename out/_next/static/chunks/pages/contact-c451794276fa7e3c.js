(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8105:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t(9243)}])},7450:function(e,s,t){"use strict";t.d(s,{Z:function(){return m}});var l=t(5893),n=t(7294),a=e=>{let{children:s}=e,t=n.Children.toArray(s),a=t.map((e,s)=>s!==t.length-1?(0,l.jsx)(n.Fragment,{children:e},s):e);return(0,l.jsx)("nav",{"aria-label":"breadcrumb",children:(0,l.jsx)("ul",{className:"flex items-center justify-center sm:justify-start [&>*:last-child]:pointer-events-none",children:a})})};let r=e=>e.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");var i=t(1664),c=t.n(i),o=e=>{let{children:s,href:t,isCurrent:n,...a}=e;return(0,l.jsx)("li",{...a,children:(0,l.jsx)(c(),{className:"link",href:t,passHref:!0,children:r(s)})})},d=t(1163),m=e=>{let{title:s,subtitle:t}=e,i=(0,d.useRouter)(),[c,m]=(0,n.useState)();return(0,n.useEffect)(()=>{let e=i.asPath.split("?")[0],s=e.split("/");s.shift(),s=s.filter(e=>""!==e);let t=s.map((e,t)=>{let l="/"+s.slice(0,t+1).join("/");return{href:l,label:e.charAt(0).toUpperCase()+e.slice(1),isCurrent:t===s.length-1}});m(t)},[i.asPath]),(0,l.jsx)("section",{className:"banner bg-white",children:(0,l.jsx)("div",{className:"pt-20 pb-24 page-banner bg-dark rounded-b-2xl relative z-10",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row items-end","data-aos":"fade",children:[(0,l.jsxs)("div",{className:"sm:col-8 text-center sm:text-left",children:[(0,l.jsx)("h1",{className:"text-4xl md:text-5xl font-secondary font-medium -mt-[6px] text-center sm:text-left mb-8",children:r(s)}),(0,l.jsxs)(a,{children:[(0,l.jsx)("li",{children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",className:"mr-3",style:{transform:"rotateY(180deg)"},children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2"}),(0,l.jsx)("path",{d:"M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5"}),(0,l.jsx)("path",{d:"M16 19h6"}),(0,l.jsx)("path",{d:"M19 16l3 3l-3 3"})]})}),(0,l.jsx)(o,{isCurrent:"/"===i.pathname,href:"/",children:"Home"}),c&&c.map(e=>(0,l.jsxs)(n.Fragment,{children:[(0,l.jsx)("li",{children:(0,l.jsx)("span",{className:"px-4",children:"•"})}),(0,l.jsx)(o,{href:e.href,isCurrent:e.isCurrent,children:e.label})]},e.href))]})]}),(0,l.jsx)("div",{className:"sm:col-4 block mt-6 sm:mt-0 text-center sm:text-right",children:(0,l.jsx)("span",{className:"font-secondary text-2xl leading-none text-white/75",children:t})})]})})})})}},4794:function(e,s,t){"use strict";var l=t(5893),n=t(7294),a=t(5772),r=t(9234),i=t(6199);s.Z=e=>{let{content:s,inline:t}=e;return(0,l.jsx)(a.D,{components:{p:t?n.Fragment:"p"},remarkPlugins:[i.Z],rehypePlugins:[r.Z],children:s})}},9243:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return o},default:function(){return d}});var l=t(5893),n=t(4794),a=t(7294),r=e=>{let{index:s,item:t}=e,r=(0,a.useRef)(null),[i,c]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{r.current.style.maxHeight="".concat(r.current.scrollHeight,"px")},[]),(0,a.useEffect)(()=>{r.current.style.maxHeight=i?"0":"".concat(r.current.scrollHeight,"px")},[i]),(0,l.jsxs)("div",{className:"".concat(0===s?"border-t":""," border-b"),children:[(0,l.jsxs)("h3",{className:"text-lg font-medium py-5 cursor-pointer flex justify-between items-center select-none",onClick:()=>{c(!i)},role:"button",tabIndex:0,children:[(0,l.jsx)("span",{className:"grow",children:t.question}),(0,l.jsx)("span",{className:"shrink-0",children:i?(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 448 512",children:(0,l.jsx)("path",{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z",fill:"currentColor"})}):(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 448 512",children:(0,l.jsx)("path",{d:"M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z",fill:"currentColor"})})})]}),(0,l.jsx)("div",{className:"text-black/75 leading-normal overflow-hidden",ref:r,style:{transition:"max-height 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)"},children:(0,l.jsx)("div",{className:"-mt-[6px] mb-5 content content-dark",children:(0,l.jsx)(n.Z,{content:t.answer})})})]})},i=t(5081),c=t(7450),o=!0,d=e=>{let{contactPage:s}=e,{title:t,subtitle:o,contactForm:d,faq:m}=s.frontMatter,{email:h,mailSubject:u,successMessage:x,errorMessage:b}=d,[j,p]=(0,a.useState)(""),[f,g]=(0,a.useState)(!1),v="https://formsubmit.co/ajax/".concat(h);return(0,l.jsxs)(i.Z,{metaTitle:t,children:[(0,l.jsx)(c.Z,{title:t,subtitle:o}),(0,l.jsx)("section",{className:"py-28 bg-white text-dark rounded-b-2xl",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row justify-center",children:[(0,l.jsxs)("div",{className:"md:col-10 lg:col-5 mb-24 lg:mb-0","data-aos":"fade-up-sm",children:[d&&(0,l.jsx)("div",{className:"mb-10",children:(0,l.jsx)("h2",{className:"text-3xl font-medium mb-3 -mt-[6px]",children:d.title})}),(0,l.jsxs)("form",{className:"pr-0 lg:pr-8",method:"POST",onSubmit:e=>{e.preventDefault(),g(!0),fetch(v,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({_subject:u,name:full_name.value,email:h.value,message:message.value})}).then(e=>e.json()).then(s=>{g(!1),p("success"),e.target.reset()}).catch(e=>{g(!1),p("error")})},children:[(0,l.jsx)("input",{className:"hidden",type:"hidden",name:"_subject",value:u}),(0,l.jsxs)("div",{className:"mb-6",children:[(0,l.jsx)("label",{htmlFor:"full_name",className:"block mb-2 text-black",children:"Name"}),(0,l.jsx)("input",{type:"text",id:"full_name",name:"full_name",placeholder:"Jhon Doe",className:"border border-light/90 rounded-lg bg-white h-12 w-full px-4 py-4 focus:border-dark/50 outline-none focus-visible:outline-none focus-visible:shadow-none transition-all duration-300",required:!0})]}),(0,l.jsxs)("div",{className:"mb-6",children:[(0,l.jsx)("label",{htmlFor:"email",className:"block mb-2 text-black",children:"Contact email"}),(0,l.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"jhon.doe@email.tld",className:"border border-light/90 rounded-lg bg-white h-12 w-full px-4 py-4 focus:border-dark/50 outline-none focus-visible:outline-none focus-visible:shadow-none transition-all duration-300",required:!0})]}),(0,l.jsxs)("div",{className:"mb-6",children:[(0,l.jsx)("label",{htmlFor:"message",className:"block mb-2 text-black",children:"Additional info"}),(0,l.jsx)("textarea",{id:"message",name:"message",rows:"4",className:"border border-light/90 rounded-lg bg-white w-full px-4 py-4 focus:border-dark/50 outline-none focus-visible:outline-none focus-visible:shadow-none transition-all duration-300",placeholder:"Be as detailed as possible..."})]}),"success"===j&&(0,l.jsx)("div",{className:"mb-6 text-green-600",children:(0,l.jsx)(n.Z,{inline:"false",content:x})}),"error"===j&&(0,l.jsx)("div",{className:"mb-6 text-red-600",children:(0,l.jsx)(n.Z,{inline:"false",content:b})}),(0,l.jsx)("button",{className:"button button-dark mt-2",title:"Send your Message",type:"submit","aria-label":"Send Message",children:(0,l.jsx)("span",{children:f?"Sending..":"Send Message"})})]})]}),(0,l.jsx)("div",{className:"md:col-10 lg:col-5","data-aos":"fade-up-sm","data-aos-delay":"100",children:(0,l.jsxs)("div",{className:"pl-0 lg:pl-8",children:[(0,l.jsxs)("div",{className:"mb-10",children:[(0,l.jsx)("h2",{className:"text-3xl font-medium mb-3 -mt-[6px]",children:m.title}),(0,l.jsx)("p",{className:"text-black/75",children:m.subtitle})]}),m.qaLists.map((e,s)=>(0,l.jsx)(r,{index:s,item:e},s))]})})]})})})]})}}},function(e){e.O(0,[675,593,81,774,888,179],function(){return e(e.s=8105)}),_N_E=e.O()}]);