(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6601:function(){},5286:function(e,t,s){Promise.resolve().then(s.bind(s,8836))},8836:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return n}});var l=s(7437),r=s(703),a=s(2265),o=s(7355),i=s(9079);function n(){let[e,t]=(0,a.useState)(""),[s,n]=(0,a.useState)(""),[c,x]=(0,a.useState)(""),[d,m]=(0,a.useState)(!0);i.env.NEXT_PUBLIC_BASE_URL;let p=(0,a.useCallback)(async()=>{try{let t=await fetch("/api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchTerm:e})});if(!t.ok)throw Error("No match found or error occurred");let s=await t.json();n(s.allocation),x(s.sol)}catch(e){console.error(e),n("No match found.")}},[e]);return(0,a.useEffect)(()=>{let t=function(e){try{return new o.nh(e),!0}catch(e){return!1}}(e);m(t),t&&p()},[e,p]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-12 pt-36 2xl:pt-12",children:[(0,l.jsxs)("div",{className:"z-10 max-w-5xl w-full items-center justify-between text-2xl",children:[(0,l.jsxs)("p",{className:"fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit",children:[(0,l.jsx)("b",{className:"text-[#14F195] drop-shadow-[0_3px_3px_rgba(153,69,255,0.7)]",children:"\xa0CA:\xa0"})," 9Ttyez3xiruyj6cqaR495hbBkJU6SUWdV6AmQ9MvbyyS"]}),(0,l.jsxs)("div",{className:"invisible 2xl:visible fixed bottom-0 left-0 flex items-end",children:[" ",(0,l.jsx)(r.default,{src:"/smolelist.gif",alt:"smolelist",className:"",width:200,height:0,unoptimized:!0,priority:!0})]}),(0,l.jsxs)("div",{className:"visible 2xl:invisible fixed bottom-0 left-0 flex items-end",children:[" ",(0,l.jsx)(r.default,{src:"/smolelist.gif",alt:"smolelist",className:"",width:150,height:0,unoptimized:!0,priority:!0})]})]}),(0,l.jsxs)("div",{className:"flex flex-col relative place-items-center",children:[(0,l.jsx)(r.default,{className:"relative",src:"/smoleup.gif",alt:"smoleup",width:388,height:252,unoptimized:!0,priority:!0}),(0,l.jsx)("p",{className:"[word-spacing:-1px] sm:[word-spacing:0px] relative text-4xl sm:text-5xl text-center font-bold pt-10 pb-1 text-[#14F195] drop-shadow-[0_3px_3px_rgba(153,69,255,0.7)]",children:"$smole - smolecoin"}),(0,l.jsx)("p",{className:"relative text-3xl text-center pb-5",children:"a smol mole and the smollest smolecoin in the smolana smolnet"}),(0,l.jsx)("p",{className:"[word-spacing:-1px] sm:[word-spacing:0px] relative text-3xl sm:text-4xl text-center font-bold pt-10 pb-1 text-[#14F195] drop-shadow-[0_3px_3px_rgba(153,69,255,0.7)]",children:"check your address allocation"}),(0,l.jsxs)("div",{className:"flex flex-col items-center pt-5",children:[(0,l.jsx)("input",{type:"text",placeholder:"insert sol address",className:"w-64 sm:w-96 text-2xl text-[#070707] p-2 rounded text-center",value:e,onChange:e=>t(e.target.value)}),s&&(0,l.jsxs)("p",{className:"text-center text-2xl sm:text-4xl pt-5 text-[#9945FF] drop-shadow-[0_3px_3px_rgba(153,69,255,0.7)]",children:["your allocation: ",s," $smole"]}),c&&(0,l.jsxs)("p",{className:"text-center text-2xl sm:text-3xl text-[#9945FF] drop-shadow-[0_3px_3px_rgba(153,69,255,0.7)]",children:["your contribution: ",c," sol"]})]}),(0,l.jsxs)("div",{className:"flex flex-row justify-center items-center pt-10",children:[(0,l.jsx)("a",{href:"https://x.com/smolecoin",target:"_blank",rel:"noopener noreferrer",className:"bg-[#14F195] hover:bg-[#f7be47] text-[#181818] font-bold text-4xl p-2 rounded mx-4",children:(0,l.jsx)(r.default,{src:"/x.svg",alt:"X",width:32,height:32})}),(0,l.jsx)("a",{href:"https://t.me/smolecoin/",target:"_blank",rel:"noopener noreferrer",className:"bg-[#14F195] hover:bg-[#f7be47] text-[#181818] font-bold text-4xl p-2 rounded mx-4",children:(0,l.jsx)(r.default,{src:"/telegram.svg",alt:"Discord",width:32,height:32})}),(0,l.jsx)("a",{href:"https://discord.gg/Dystolabs",target:"_blank",rel:"noopener noreferrer",className:"bg-[#14F195] hover:bg-[#f7be47] text-[#181818] font-bold text-4xl p-2 rounded mx-4",children:(0,l.jsx)(r.default,{src:"/discord.svg",alt:"Discord",width:32,height:32})})]})]}),(0,l.jsx)("div",{className:"mt-12 mb-12 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"})]})})}}},function(e){e.O(0,[814,373,971,69,744],function(){return e(e.s=5286)}),_N_E=e.O()}]);