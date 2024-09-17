import{a as d}from"/build/_shared/chunk-MDOSTOOT.js";import{j as l,l as n}from"/build/_shared/chunk-MUGK2LQH.js";import{b as v,d as u,e,f as o}from"/build/_shared/chunk-AKSB5QXU.js";o();o();var t=v(u()),c=({data:r})=>{if(!r)return{title:"Oops..."};let s=r.list.records.filter(a=>a.slug===r.currentSlug)[0].fields;return{title:s.page_title?`${s.page_title}`:"Vacancy"}};function m(){let i=l().list.records.filter(a=>a.slug===l().currentSlug)[0].fields,s=n();return(0,t.useEffect)(()=>{s.load("/airtable/getTable")},[]),e.createElement("div",null,e.createElement("div",{className:"wrapper back-to-page"},e.createElement("a",{href:"/careers"},"back to All Vacancies")),e.createElement("section",{className:"vacancy"},e.createElement("div",{className:"wrapper"},e.createElement("h1",null,i.page_title),e.createElement("div",{className:"descr",dangerouslySetInnerHTML:{__html:i.page_short_descr}}))),e.createElement("section",{className:"how-we-do-it"},e.createElement("div",{className:"wrapper"},e.createElement("div",{className:"inner"},e.createElement("h2",null,"HOW we do it"),e.createElement("p",null,"Most of the new services are developed and run in accordance with ",e.createElement("b",null,"microservices architecture"),"."),e.createElement("p",null,"We invest into our own ",e.createElement("b",null,"Kubernetes platform"),"."),e.createElement("p",null,"We adopt the ",e.createElement("b",null,"gRPC")," framework in our platform or migrate our interfaces to a ",e.createElement("b",null,"micro-frontend pattern"),"."),e.createElement("p",null,"We actively use and support ",e.createElement("b",null,"open source products"),"."),e.createElement("p",null,"You can have a look at some of our code in our ",e.createElement("br",null)," ",e.createElement("a",{href:"https://github.com/Cado-Labs",rel:"noreferrer",target:"_blank"},"GitHub account"),".")))),e.createElement("section",{className:"about-vacancy"},e.createElement("div",{className:"wrapper"},i.responsibilities&&e.createElement("div",{className:"more-info"},e.createElement("div",{className:"title"},"YOUR Responsibilities:"),e.createElement("ul",{dangerouslySetInnerHTML:{__html:i.responsibilities}})),i.requirements&&e.createElement("div",{className:"more-info"},e.createElement("div",{className:"title"},"OUR Requirements:"),e.createElement("ul",{dangerouslySetInnerHTML:{__html:i.requirements}})),i.considered&&e.createElement("div",{className:"more-info"},e.createElement("div",{className:"title"},"CONSIDERED as an advantage:"),e.createElement("ul",{dangerouslySetInnerHTML:{__html:i.considered}})),i.we_offer&&e.createElement("div",{className:"more-info"},e.createElement("div",{className:"title"},"WHAT we offer:"),e.createElement("ul",{dangerouslySetInnerHTML:{__html:i.we_offer}})),e.createElement("div",{className:"more-info"},e.createElement("div",{className:"title"},"Apply by sending CV to ",e.createElement("a",{href:"mailto:hr@cadolabs.io"},"hr@cadolabs.io"))))),e.createElement("section",{className:"cado-do"},e.createElement("div",{className:"wrapper"},e.createElement("h2",null,"CADO DO"),e.createElement("ul",null,e.createElement("li",null,e.createElement("div",{className:"inner"},e.createElement("div",{className:"title"},"Traffic Management Systems"),e.createElement("div",{className:"descr"},"to boost your growth!"))),e.createElement("li",null,e.createElement("div",{className:"inner"},e.createElement("div",{className:"title"},"CRM Platforms"),e.createElement("div",{className:"descr"},"to bring some order to your Data!"))),e.createElement("li",null,e.createElement("div",{className:"inner"},e.createElement("div",{className:"title"},"Payment systems"),e.createElement("div",{className:"descr"},"we know how to make money work for you!"))),e.createElement("li",null,e.createElement("div",{className:"inner"},e.createElement("div",{className:"title"},"BI Systems"),e.createElement("div",{className:"descr"},"our secrets to a good night's sleep"))),e.createElement("li",null,e.createElement("div",{className:"inner"},e.createElement("div",{className:"title"},"Anti-Fraud Solutions"),e.createElement("div",{className:"descr"},"our secrets to the BEST night's sleep"))),e.createElement("li",null,e.createElement("div",{className:"inner"},e.createElement("div",{className:"title"},"Machine Learning Products"),e.createElement("div",{className:"descr"},"for the love of Robots!")))))),s.data?e.createElement(d,{data:s.data}):null)}export{m as default,c as meta};
