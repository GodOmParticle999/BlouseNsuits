import{j as e,r as i,U as f,N as j}from"./index-2cb4182c.js";const b=({title:t})=>e.jsx("div",{className:"fixed z-40  inset-0 fall grid w-screen h-screen place-items-center ",children:e.jsx("h1",{className:"w-40%  text-2xl md:text-4xl md:py-10 md:px-16 text-center text-gray-200  px-10 py-6  bg-orange-600 font-serif",children:t})}),c=({w:t,rotate:s,abs:l})=>e.jsx("div",{className:`${t} h-[5px] bg-violet-700 ${s} ${l} dark:bg-sky-600 rounded-xl`}),I=()=>e.jsxs("div",{className:" mb-4 flex justify-center  flex-col gap-[6px]",children:[e.jsx(c,{w:"w-7"}),e.jsx(c,{w:"w-6"}),e.jsx(c,{w:"w-7"})]}),w=()=>e.jsxs("div",{className:"w-9 h-9 pb-2  flex -mr-1 items-center justify-center relative",children:[e.jsx(c,{w:"w-9",rotate:"rotate-45",abs:"absolute"}),e.jsx(c,{w:"w-9",rotate:"-rotate-45",abs:"absolute"})]}),L=({user:t,setShowSignIn:s,showSignIn:l,setShowX:o,showX:r,toggleX:n,profile:a})=>{const{welcome:x,bye:m,setWelcome:u,setBye:p}=i.useContext(f),[h,k]=i.useState("light"),y=()=>{k(h==="light"?"dark":"light")};i.useEffect(()=>{h==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[h]);const N=()=>{s(!l),o(!1)};i.useEffect(()=>{const S=setTimeout(()=>{p(!1),u(!1),console.log("I ran one time ")},2e3);return()=>clearTimeout(S)},[m,x]);const C=()=>{n(),o(!1)};return e.jsxs("div",{className:" md:w-auto w-screen flex -ml-3 md:ml-0 justify-between",children:[x&&e.jsx(b,{title:`WELCOME ${t==null?void 0:t.displayName.split(" ")[0]}! 🤓`}),m&&e.jsx(b,{title:"See You Soon ! 🙋‍♀️"}),e.jsxs("div",{className:"flex justify-between pt-[1px]",children:[e.jsx(j,{onClick:C,className:`my-[3px] md:my-[6px] pt-3 border-2 border-dashed\r
           border-orange-500 pulse \r
           cursive  scale-75 sm:scale-90 z-10   cursor-pointer text-lg\r
            bg-gradient-to-br from-violet-400\r
            to bg-violet-700 text-white font-semibold rounded-md  pl-2\r
             pr-[6px] -rotate-3  `,to:"/",children:"Blouse👚suit"}),e.jsx("button",{className:"z-20  transition-all duration-300 ease-in md:pb-1  rounded-full",onClick:y,children:e.jsx("span",{className:"text-[44px]  ",children:h==="light"?"🌞":"🌚"})})]}),e.jsxs("div",{className:"flex ",children:[t?e.jsx("img",{onClick:a,className:`w-12 z-50 cursor-pointer h-12 shadow-2xl md:absolute  md:right-3 \r
             mt-2 hover:scale-110 mr-2 md:mb-auto object-cover rounded-full`,src:t.photoURL,alt:"🤓"}):e.jsx("button",{onClick:N,className:` mb-2 z-10 shadow-xl md:mb-auto mr-2   w-fit mt-[10px]\r
             flex items-center  md:absolute md:right-2    py-[6px] text-lg \r
             font-semibold bg-violet-600 text-white cursor-pointer hover:text-white \r
               hover:bg-violet-400  rounded-full`,children:e.jsx("i",{className:"px-3 py-1 scale-125",children:"👧"})}),e.jsx("div",{className:" z-10 cursor-pointer md:hidden mt-[18px] -mr-3 hover:scale-110",onClick:n,children:r?e.jsx(w,{}):e.jsx(I,{})})]})]})},d=({handleClick:t,title:s,to:l,icon:o})=>e.jsx(e.Fragment,{children:e.jsx(j,{to:l,onClick:t,className:"ml-2 shrink-0 md:mb-auto shadow-md odd:shadow-sky-300 even:shadow-violet-400 mb-2   w-fit flex items-center py-[9px]  font-semibold odd:bg-sky-500 even:bg-violet-600 text-white cursor-pointer hover:text-gray-900  hover:bg-violet-400 rounded-3xl",children:e.jsxs("li",{className:"mx-3 flex items-center justify-center ",children:[o,s]})})}),v=({toggle:t,hidden:s})=>e.jsx("button",{onClick:t,className:`absolute md:${s} pr-2 pl-1 pt-2 pb-1   bg-orange-500 dark:bg-gray-200 bottom-[20%] hover:scale-105 transition-all duration-300 ease-out rounded-full shadow-lg text-black right-[43%]`,children:e.jsx(w,{})}),z=({setShowX:t,showX:s,setShowSignIn:l})=>{const o=a=>{a.target.id==="navItems"&&t(!1)},r=()=>t(!1),n=()=>{t(!1),window.scrollTo({top:0,left:0,behavior:"smooth"}),l(!1)};return e.jsxs("div",{id:"navItems",onClick:o,className:` ${!s&&"hidden"} fixed fall  inset-0  md:flex md:absolute  h-screen md:h-auto w-screen bg-gray-200 md:bg-transparent dark:md:bg-transparent dark:bg-black `,children:[e.jsxs("ul",{className:` pt-[10px] pr-5 w-full h-auto  max-w-md pl-32 pb-3  ${s&&"flex"} rounded-xl md:shadow-none   transition-all duration-500 ease-out    z-48 absolute md:flex-row flex flex-col items-end top-24 right-0  md:top-0 md:right-[60px]  md:justify-end pr-[24px] md:flex `,children:[e.jsx(d,{to:"/",icon:" 🏠",title:"Home",handleClick:n}),e.jsx(d,{to:"/services",icon:"⚙️",handleClick:n,title:"Services"}),e.jsx(d,{to:"/cloths",handleClick:n,title:"👚Gallery"}),e.jsx(d,{to:"/contact",icon:"✉️",title:"ContactUs",handleClick:n})]}),e.jsx(v,{toggle:r,hidden:"hidden"})]})},E=({setShowSignIn:t,showSignIn:s,signIn:l})=>{const{text:o}=i.useContext(f),r=n=>{n.target.id==="signInDiv"&&t(!1)};return e.jsx("div",{onClick:r,id:"signInDiv",className:`${s?"flex":"hidden"} w-screen fall h-screen justify-center  fixed inset-0 `,children:e.jsxs("div",{className:`flex justify-center my-auto  shadow-xl flex-col items-center px-8 py-12   rounded-xl text-center\r
       bg-sky-400 dark:bg-gray-600 `,children:[e.jsxs("h1",{className:" text-2xl text-black dark:text-gray-100  md:text-3xl mb-2   ",children:["Continue With"," ",e.jsxs("span",{className:"uppercase bg-white pl-2 pr-2 pt-1 pb-1 text-black  rounded-lg skew-y-3",children:["Google"," "]})," "]}),e.jsx("button",{onClick:l,disabled:o==="Please wait.....",className:"login-with-google-btn mt-10 ml-10 md:ml-12 md:mr-12 mr-10",children:o}),e.jsx("p",{className:"text-gray-600 pb-5 dark:text-gray-400 mt-10 md:mt-14",children:"Sign In Securely with Google ©️"})]})})},g=({title:t})=>e.jsx("li",{className:"pt-2 pb-2 pl-5 pr-5 mr-2 rounded-full shadow-xl pointer-events-none odd:bg-sky-500 even:bg-violet-600",children:t}),$=({setShowProfile:t,showProfile:s,user:l,logOut:o})=>{const r=a=>{a.target.id==="profileDiv"&&t(!1)},n=()=>{t(!1)};return e.jsxs("div",{id:"profileDiv",onClick:r,className:`${!s&&"hidden -z-10"}  fall fixed inset-0 bg-gray-200 dark:bg-black h-screen`,children:[l&&s&&e.jsxs("ul",{className:"h-auto  transition-all duration-200 ease-in pl-32 pr-5 md:pr-10 pt-10 pb-10 absolute right-0 flex items-end p-5 flex-col  gap-2 font-mono font-semibold top-24 text-white rounded-xl",children:[e.jsx(g,{title:l.displayName}),e.jsx(g,{title:l.email}),e.jsx(g,{title:l.emailVerified?"✅Verified User":"❌Not Verified"}),l&&(l.uid==="QyDKhU4oA4WWSVXYd7tJZOlJq3R2"||l.uid==="9UXPrVmHTqMSyhaFoWlOIGaROLt1")&&e.jsxs("div",{className:"w-full mr-1 flex justify-between flex-wrap",children:[e.jsx(d,{to:"/upload",handleClick:n,title:"Add🖼️"}),e.jsx(d,{to:"/comments",handleClick:n,title:"✉️Manage Testimonies"}),e.jsx(d,{to:"/enquiry",handleClick:n,title:"❔All Enquiries"})]}),e.jsx("button",{onClick:o,className:"py-2 px-3 mr-2 rounded-full flex items-center  shadow-xl hover:scale-105 transition-all duration-300 ease-in bg-red-500 cursor-pointer",children:"⬅️LogOut"})]}),e.jsx(v,{toggle:n})]})},D=()=>{const[t,s]=i.useState(!1),{user:l,setShowProfile:o,setShowSignIn:r,showProfile:n,showSignIn:a,signIn:x,logOut:m}=i.useContext(f),u=()=>{s(!t),o(!1),r(!1)},p=()=>{o(!n),s(!1)};return e.jsxs("div",{className:"flex w-screen sticky top-0 z-50 h-[60px] backdrop-blur-sm  text-violet-900 bg-gradient-to-b from-gray-300 to bg-transparent dark:bg-gradient-to-b  dark:border-b-[1px] dark:border-gray-700 shadow-lg pr-3  items-center justify-between",children:[e.jsx(L,{profile:p,user:l,showSignIn:a,showX:t,setShowSignIn:r,setShowX:s,toggleX:u}),e.jsx(z,{setShowSignIn:r,setShowX:s,showX:t}),e.jsx(E,{setShowSignIn:r,showSignIn:a,signIn:x}),e.jsx($,{setShowProfile:o,showProfile:n,user:l,logOut:m})]})};export{D as default};