(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+KgW":function(t,e,n){"use strict";e.__esModule=!0,n("sRQO"),e.default={content:"pf-c-content",modifiers:{overpassFont:"pf-m-overpass-font"}}},"+uFj":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m})),n.d(e,"pageQuery",(function(){return b}));var r=n("q1tI"),a=n.n(r),o=n("7ljp"),i=n("A2+M"),c=n("Wbzz"),u=n("M85z"),l=n("ctO/"),s=n("Zttt"),f=(n("xcch"),function(t){var e=t.path,n=Object(c.useStaticQuery)("3753692419").allJupyterNotebook.edges.map((function(t){return t.node})).find((function(t){return t.fileAbsolutePath.endsWith(e)}));return n?a.a.createElement("div",{className:"jupyter-notebook"},a.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}})):null}),d=n("vrFN"),p=(n("nzMh"),{Link:c.Link,JupyterNotebook:f});function m(t){var e=t.data,n=e.site,r=e.mdx,c=(t.pageContext,t.location),f=n.siteMetadata.title;return a.a.createElement(s.c,{location:c,title:f},a.a.createElement(d.a,{title:r.frontmatter.title,description:r.frontmatter.description}),a.a.createElement(u.a,{className:"doc",variant:u.b.light},a.a.createElement(l.a,null,a.a.createElement("h1",null,r.frontmatter.title),a.a.createElement(o.MDXProvider,{components:p},a.a.createElement(i.MDXRenderer,null,r.body)))))}var b="1786863468"},"0jh0":function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},"2klF":function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Ck4i:function(t,e,n){var r=n("Q83E"),a=n("2klF");function o(e,n,i){return a()?t.exports=o=Reflect.construct:t.exports=o=function(t,e,n){var a=[null];a.push.apply(a,e);var o=new(Function.bind.apply(t,a));return n&&r(o,n.prototype),o},o.apply(null,arguments)}t.exports=o},M85z:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return v}));var r,a,o,i,c=n("tB/L"),u=n("mrSG"),l=n("q1tI"),s=n("SvSm"),f=n.n(s),d=n("awUK"),p=n("/iYE");!function(t){t.default="default",t.light="light",t.dark="dark",t.darker="darker"}(o||(o={})),function(t){t.default="default",t.nav="nav"}(i||(i={}));var m=(r={},Object(c.a)(r,i.default,f.a.pageMainSection),Object(c.a)(r,i.nav,f.a.pageMainNav),r),b=(a={},Object(c.a)(a,o.default,""),Object(c.a)(a,o.light,f.a.modifiers.light),Object(c.a)(a,o.dark,f.a.modifiers.dark_200),Object(c.a)(a,o.darker,f.a.modifiers.dark_100),a),v=function(t){var e=t.className,n=void 0===e?"":e,r=t.children,a=t.variant,o=void 0===a?"default":a,i=t.type,c=void 0===i?"default":i,s=t.padding,v=t.isFilled,y=t.isWidthLimited,h=void 0!==y&&y,O=Object(u.__rest)(t,["className","children","variant","type","padding","isFilled","isWidthLimited"]);return l.createElement("section",Object.assign({},O,{className:Object(d.a)(m[c],Object(p.b)(s,f.a),b[o],!1===v&&f.a.modifiers.noFill,!0===v&&f.a.modifiers.fill,h&&f.a.modifiers.limitWidth,n)}),h&&l.createElement("div",{className:Object(d.a)(f.a.pageMainBody)},r),!h&&r)};v.displayName="PageSection"},Q83E:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},R7tm:function(t,e,n){var r=n("qHws"),a=n("gC2u"),o=n("dQcQ"),i=n("m7BV");t.exports=function(t){return r(t)||a(t)||o(t)||i()}},X8hv:function(t,e,n){var r=n("Ck4i"),a=n("R7tm"),o=n("0jh0"),i=n("uDP2");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=n("q1tI"),s=n("7ljp").mdx,f=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,o=i(t,["scope","children"]),c=f(e),d=l.useMemo((function(){if(!n)return null;var t=u({React:l,mdx:s},c),e=Object.keys(t),o=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(a(e),[""+n])).apply(void 0,[{}].concat(a(o)))}),[n,e]);return l.createElement(d,u({},o))}},"ctO/":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("mrSG"),a=n("q1tI"),o=n("+KgW"),i=n.n(o),c=n("awUK"),u=function(t){var e=t.children,n=void 0===e?null:e,o=t.className,u=void 0===o?"":o,l=Object(r.__rest)(t,["children","className"]);return a.createElement("div",Object.assign({},l,{className:Object(c.a)(i.a.content,u)}),n)};u.displayName="TextContent"},dQcQ:function(t,e,n){var r=n("hMe3");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},gC2u:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},hMe3:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},m7BV:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},nzMh:function(t,e,n){},qHws:function(t,e,n){var r=n("hMe3");t.exports=function(t){if(Array.isArray(t))return r(t)}},sRQO:function(t,e,n){},xcch:function(t,e,n){}}]);
//# sourceMappingURL=component---src-templates-doc-js-51cf54329fcb8d62fc06.js.map