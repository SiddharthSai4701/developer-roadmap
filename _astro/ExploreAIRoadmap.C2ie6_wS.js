import{j as e}from"./jsx-runtime.BPj4-Rfu.js";import{r as a}from"./index.SSXOyoI7.js";import{u as j}from"./use-toast.CK2mpur1.js";import{a as N}from"./http.B-35sOsF.js";import{g as b}from"./date.CKNRH15o.js";import{A as w}from"./AIRoadmapAlert.sMBaFfdE.js";import{c as S}from"./createLucideIcon.BSeNqbob.js";import{L as k}from"./loader-2.BHhQR-Hp.js";import{R as v}from"./refresh-ccw.B50tdb1F.js";import"./toast.BGQI3kl5.js";import"./index.CEvxOxeV.js";import"./jwt.M546E6_Y.js";import"./badge-check.BruBxokK.js";/**
 * @license lucide-react v0.334.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=S("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);function $(){const d=j(),[g,p]=a.useState(!0),[o,n]=a.useState(!1),[r,x]=a.useState([]),[i,f]=a.useState(1),[u,h]=a.useState(1),l=a.useCallback(async t=>{const{response:s,error:c}=await N("https://api.roadmap.sh/v1-list-ai-roadmaps",{currPage:t});if(c||!s){d.error(c?.message||"Something went wrong");return}const m=[...r,...s.data];JSON.stringify(r)===JSON.stringify(s.data)||JSON.stringify(r)===JSON.stringify(m)||(x(m),f(s.currPage),h(s.totalPages))},[i,r]);a.useEffect(()=>{l(i).finally(()=>{p(!1)})},[]);const y=i<u;return e.jsxs("section",{className:"container mx-auto py-3 sm:py-6",children:[e.jsx("div",{className:"mb-6",children:e.jsx(w,{isListing:!0})}),g?e.jsx("ul",{className:"grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3",children:new Array(21).fill(0).map((t,s)=>e.jsx("li",{className:"h-[75px] animate-pulse rounded-md border bg-gray-100"},s))}):e.jsx("div",{children:r?.length===0?e.jsx("div",{className:"text-center text-gray-800",children:"No roadmaps found"}):e.jsxs(e.Fragment,{children:[e.jsx("ul",{className:"grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3",children:r.map(t=>{const s=`/ai?id=${t._id}`;return e.jsxs("a",{href:s,className:"flex flex-col rounded-md border transition-colors hover:bg-gray-100",target:"_blank",children:[e.jsx("h2",{className:"flex-grow px-2.5 py-2.5 text-base font-medium leading-tight",children:t.title}),e.jsxs("div",{className:"flex items-center justify-between gap-2 px-2.5 py-2",children:[e.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-gray-400",children:[e.jsx(L,{size:15,className:"inline-block"}),Intl.NumberFormat("en-US",{notation:"compact"}).format(t.viewCount)," ","views"]}),e.jsx("span",{className:"flex items-center gap-1.5 text-xs text-gray-400",children:b(String(t?.createdAt))})]})]},t._id)})}),y&&e.jsx("div",{className:"my-5 flex items-center justify-center",children:e.jsxs("button",{onClick:()=>{n(!0),l(i+1).finally(()=>{n(!1)})},className:"inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-sm font-medium text-white shadow-xl transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",disabled:o,children:[o?e.jsx(k,{className:"h-4 w-4 animate-spin stroke-[2.5]"}):e.jsx(v,{className:"h-4 w-4 stroke-[2.5]"}),"Load More"]})})]})})]})}export{$ as ExploreAIRoadmap};
