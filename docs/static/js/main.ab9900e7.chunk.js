(this["webpackJsonpmetar-plot-demo"]=this["webpackJsonpmetar-plot-demo"]||[]).push([[0],{55:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(9),l=a.n(n),c=(a(55),a(16)),s=a(38),o=a(102),j=a(111),d=a(105),b=a(107),h=a(108),x=a(109),m=a(110),O=a(45),u=a.n(O),g=a(69),p=a(10),f=Object(o.a)((function(e){return Object(j.a)({root:{flexGrow:1},button:{width:"100%",height:"100%"},title:{flexGrow:1},textarea:{width:"100%"},buttonContainer:{display:"flex",width:"100%",flexGrow:1,flexDirection:"row-reverse"},form:{margin:"64px",padding:"16px"},results:{display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"10px",margin:"64px"},resultTitle:{margin:"8px",flexgrow:1}})}));function v(){var e,t,a=f(),i=Object(r.useState)(""),n=Object(c.a)(i,2),l=n[0],o=n[1];try{e=JSON.stringify(new s.METAR(l),null,1);var j=new Blob([Object(s.rawMetarToSVG)(l,"100%","100%")],{type:"image/svg+xml"});t=URL.createObjectURL(j)}catch(O){e="Invalid METAR",t=""}return Object(p.jsxs)("div",{className:a.root,children:[Object(p.jsx)(d.a,{position:"static",children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(m.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(p.jsx)(u.a,{})}),Object(p.jsx)(h.a,{variant:"h6",className:a.title,children:"METAR Plot Demo"})]})}),Object(p.jsxs)(g.a,{elevation:4,className:a.form,children:[Object(p.jsx)("div",{className:a.title,children:Object(p.jsx)(x.a,{className:a.textarea,color:"primary",id:"filled-basic",label:"Raw METAR",variant:"filled",onChange:function(e){o(e.target.value)}})}),Object(p.jsx)("a",{href:"http://aviationweather.gov/metar/data",children:"NOAA Sample data"})]}),Object(p.jsxs)("div",{className:a.results,children:[Object(p.jsxs)(g.a,{elevation:4,children:[Object(p.jsx)(h.a,{variant:"h6",className:a.resultTitle,children:"Parsed Metar"}),Object(p.jsx)(h.a,{variant:"body1",className:a.resultTitle,children:Object(p.jsx)("pre",{children:e})})]}),Object(p.jsxs)(g.a,{elevation:4,children:[Object(p.jsx)(h.a,{variant:"h6",className:a.resultTitle,children:"Metar Plot"}),Object(p.jsx)("img",{src:t})]})]})]})}var w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,113)).then((function(t){var a=t.getCLS,r=t.getFID,i=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),r(e),i(e),n(e),l(e)}))};l.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root")),w()}},[[68,1,2]]]);
//# sourceMappingURL=main.ab9900e7.chunk.js.map