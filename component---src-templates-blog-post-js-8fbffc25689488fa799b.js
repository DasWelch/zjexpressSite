(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},X8hv:function(e,t,r){function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,r){return(o=n()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&c(o,r.prototype),o}).apply(null,arguments)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r("jm62"),r("yt8O"),r("RW0V"),r("XfO3"),r("HEwt"),r("rE2o"),r("ioFf"),r("rGqo"),r("a1Th"),r("Btvt"),r("I5cv"),r("I5cv"),r("XfO3"),r("HEwt"),r("a1Th"),r("rE2o"),r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var f=r("q1tI"),p=r("7ljp"),s=p.useMDXComponents,y=p.mdx,m=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.components,n=e.children,c=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["scope","components","children"]),l=s(r),u=m(t),p=f.useMemo((function(){if(!n)return null;var e=i({React:f,mdx:y},u),t=Object.keys(e),r=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(a(t),[""+n])).apply(void 0,[{}].concat(a(r)))}),[n,t]);return f.createElement(p,i({components:l},c))}},yZlL:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return u}));var n=r("q1tI"),o=r.n(n),c=r("Wbzz"),a=r("Bl7J"),l=r("vrFN"),i=r("A2+M");t.default=function(e){var t=e.data,r=e.pageContext,n=e.location,u=t.mdx,f=t.site.siteMetadata.title,p=r.previous,s=r.next;return o.a.createElement(a.a,{location:n,title:f},o.a.createElement(l.a,{title:u.frontmatter.title,description:u.frontmatter.description||u.excerpt}),o.a.createElement("article",{id:"pageArticle"},o.a.createElement("header",null,o.a.createElement("h1",null,u.frontmatter.title),o.a.createElement("p",{style:{display:"block"}},u.frontmatter.date)),o.a.createElement(i.MDXRenderer,null,u.body),o.a.createElement("hr",{style:{}})),o.a.createElement("nav",null,o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,p&&o.a.createElement(c.Link,{to:p.fields.slug,rel:"prev"},"← ",p.frontmatter.title)),o.a.createElement("li",null,s&&o.a.createElement(c.Link,{to:s.fields.slug,rel:"next"},s.frontmatter.title," →")))))};var u="2447917637"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-8fbffc25689488fa799b.js.map