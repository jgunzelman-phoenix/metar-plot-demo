(this["webpackJsonpmetar-plot-demo"]=this["webpackJsonpmetar-plot-demo"]||[]).push([[0],{56:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),c=a(10),s=a.n(c),l=(a(56),a(16)),n=a(36),o=a(104),j=a(113),d=a(107),x=a(109),b=a(110),h=a(111),m=a(112),O=a(46),p=a.n(O),g=a(71),u=a(6),v=Object(o.a)((function(e){return Object(j.a)({root:{flexGrow:1},button:{width:"100%",height:"100%"},title:{flexGrow:1},textarea:{width:"100%"},buttonContainer:{display:"flex",width:"100%",flexGrow:1,flexDirection:"row-reverse"},form:{margin:"64px",padding:"16px"},results:{display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"10px",margin:"64px"},resultTitle:{margin:"8px",flexgrow:1},metarbox:{height:"calc(50% - 4px)"},metarText:{height:"100%"}})}));function f(){var e,t,a,i=v(),c=Object(r.useState)(""),s=Object(l.a)(c,2),o=s[0],j=s[1];try{e=JSON.stringify(new n.METAR(o),null,1);var O=new Blob([Object(n.rawMetarToSVG)(o,"350px","350px")],{type:"image/svg+xml"}),f=new Blob([Object(n.rawMetarToSVG)(o,"350px","350px",!0)],{type:"image/svg+xml"});t=URL.createObjectURL(O),a=URL.createObjectURL(f)}catch(w){e="Invalid METAR",t=""}return Object(u.jsxs)("div",{className:i.root,children:[Object(u.jsx)(d.a,{position:"static",children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(m.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(u.jsx)(p.a,{})}),Object(u.jsx)(b.a,{variant:"h6",className:i.title,children:"METAR Plot Demo"})]})}),Object(u.jsxs)(g.a,{elevation:4,className:i.form,children:[Object(u.jsx)("div",{className:i.title,children:Object(u.jsx)(h.a,{className:i.textarea,color:"primary",id:"filled-basic",label:"Raw METAR",variant:"filled",onChange:function(e){j(e.target.value)}})}),Object(u.jsx)("a",{href:"http://aviationweather.gov/metar/data",children:"NOAA Sample data"})]}),Object(u.jsxs)("div",{className:i.results,children:[Object(u.jsx)("div",{children:Object(u.jsxs)(g.a,{elevation:4,className:i.metarText,children:[Object(u.jsx)(b.a,{variant:"h6",className:i.resultTitle,children:"Parsed Metar"}),Object(u.jsx)(b.a,{variant:"body1",className:i.resultTitle,children:Object(u.jsx)("pre",{children:e})})]})}),Object(u.jsxs)("div",{children:[Object(u.jsxs)(g.a,{elevation:4,className:i.metarbox,children:[Object(u.jsx)(b.a,{variant:"h6",className:i.resultTitle,children:"Metar Plot (\ud83c\uddfa\ud83c\uddf8 \ud83c\udde8\ud83c\udde6)"}),Object(u.jsx)("img",{src:t})]}),Object(u.jsxs)(g.a,{elevation:4,className:i.metarbox,children:[Object(u.jsx)(b.a,{variant:"h6",className:i.resultTitle,children:"Metar Plot (\ud83c\uddfa\ud83c\uddf3)"}),Object(u.jsx)("img",{src:a})]})]})]})]})}var w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,115)).then((function(t){var a=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),i(e),c(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),w()}},[[70,1,2]]]);
//# sourceMappingURL=main.6923cef2.chunk.js.map