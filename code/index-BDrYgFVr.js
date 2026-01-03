(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();var $t="";function xt(o){$t=o}function Te(o=""){if(!$t){const t=[...document.getElementsByTagName("script")],e=t.find(r=>r.hasAttribute("data-shoelace"));if(e)xt(e.getAttribute("data-shoelace"));else{const r=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let s="";r&&(s=r.getAttribute("src")),xt(s.split("/").slice(0,-1).join("/"))}}return $t.replace(/\/$/,"")+(o?`/${o.replace(/^\//,"")}`:"")}var ce=Object.defineProperty,Me=Object.defineProperties,Ne=Object.getOwnPropertyDescriptor,Be=Object.getOwnPropertyDescriptors,Ft=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,Wt=(o,t,e)=>t in o?ce(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,Q=(o,t)=>{for(var e in t||(t={}))Ie.call(t,e)&&Wt(o,e,t[e]);if(Ft)for(var e of Ft(t))ze.call(t,e)&&Wt(o,e,t[e]);return o},de=(o,t)=>Me(o,Be(t)),h=(o,t,e,r)=>{for(var s=r>1?void 0:r?Ne(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&ce(t,e,s),s},he=(o,t,e)=>{if(!t.has(o))throw TypeError("Cannot "+e)},He=(o,t,e)=>(he(o,t,"read from private field"),t.get(o)),Ve=(o,t,e)=>{if(t.has(o))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(o):t.set(o,e)},De=(o,t,e,r)=>(he(o,t,"write to private field"),t.set(o,e),e);xt("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/");const st=10,je=100,ue=6,Fe="https://api.datamuse.com/words",We=4,qt=100;let At,x,R,J,it,Et,w,nt,P,T,N="",St=[],ct=[],m=[],_=[];function qe(){const o=localStorage.getItem("hangmanWordHistory");o?m=JSON.parse(o):m=[]}function Ge(o){const t=o.toUpperCase();m=m.filter(e=>e!==t),m.unshift(t),m.length>qt&&(m=m.slice(0,qt)),localStorage.setItem("hangmanWordHistory",JSON.stringify(m))}async function Je(){try{const o=await fetch("https://baobao101.github.io/bh_ms202512/bible_words.json");if(!o.ok)throw new Error(`Failed to load bible_words.json: ${o.status}`);_=(await o.json()).map(e=>e.toUpperCase()),console.log(`Loaded ${_.length} words.`)}catch(o){console.error("Error loading git json. Using local json.",o);try{const t=await fetch("bible_words.json");if(!t.ok)throw new Error(`Failed to load bible_words.json: ${t.status}`);_=(await t.json()).map(r=>r.toUpperCase()),console.log(`Loaded ${_.length} words.`)}catch(t){console.error("Error loading local json. Using fallback words.",t),_=["MOSES","JUDAS","GOLIATH","EDEN","NOAH","JERUSALEM","ABRAHAM","ISAAC","SAMSON","DAVID","MARY","PETER","PAUL","ADAM","EVE","ANGEL","TEMPLE","CROSS","MANGER","SHEPERD","EXODUS","GENESIS","HEAVEN","JONAH","JOB","REVELATION"]}}Lt()}function Ke(){if(_.length===0){console.error("Word list is empty. Cannot select a new word.");return}let o,t=0;const e=_.length*2;do{const r=Math.floor(Math.random()*_.length);if(o=_[r],t++,!m.includes(o.toUpperCase()))break;if(t>=e){console.warn("Ran out of unique words in the history pool. Clearing history."),m=[];break}}while(!0);N=o,ct=Array(N.length).fill("_"),be()}function Ze(){const o=localStorage.getItem("hangmanScore");o!==null?P=parseInt(o,10):P=je,fe()}function pe(o){P=o,fe(),localStorage.setItem("hangmanScore",P)}function fe(){At&&(At.textContent=`Score: ${P}`)}async function Ye(o){const t=`${Fe}?ml=${o.toLowerCase()}&max=${We}`;try{const e=await fetch(t);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const r=await e.json();return r.length===0?"Sorry, word is too biblical. This is the hint!":`Related concepts: ${r.map(i=>i.word).join(", ")}`}catch(e){return console.error("Could not fetch hint:",e),"Hint server unavailable. Try guessing!"}}async function Xe(){if(!N)return;if(P<st){R&&(R.textContent=`Not enough points (${st} required) for a hint... Go PRO with 900 bonus points and 7,000 more words!`);return}x.disabled=!0,x.textContent="Loading Hint...";const o=P-st;pe(o);const t=await Ye(N);R&&(R.textContent=`Hint: ${t}`),x.textContent="Hint Used"}function be(){Et&&(Et.textContent=ct.join(" "))}function Qe(){if(!it)return;it.innerHTML="";const o="AEIOUY-BCDFGHJKLMNPQRSTVWXZ";for(const t of o){const e=document.createElement("button");e.textContent=t,e.id=`btn-${t}`,e.className="letter-button",e.addEventListener("click",()=>to(t,e)),it.appendChild(e)}}function ge(){const o=ue-T;nt&&(nt.src=`images/hangman-${o}.png`,nt.alt=`Hangman image showing ${o} wrong guesses.`)}function to(o,t){if(St.includes(o)||T<=0)return;t.disabled=!0,St.push(o);const e=N.toUpperCase();let r=!1;for(let s=0;s<e.length;s++)e[s]===o&&(ct[s]=o,r=!0);r?(t.classList.add("correct"),be(),ct.includes("_")||Gt(!0)):(t.classList.add("incorrect"),T--,J&&(J.textContent=`Guesses: ${T}`),ge(),T<=0&&Gt(!1))}function Gt(o){document.querySelectorAll(".letter-button").forEach(t=>t.disabled=!0),Ge(N),o?(pe(P+5),w&&(w.textContent="👼 You Won! +5 points! Starting a new round...",w.classList.remove("error"))):w&&(w.textContent=`👿 Game Over! The word was: ${N}`,w.classList.add("error")),setTimeout(Lt,5e3)}function Lt(){if(_.length===0){console.warn("Word list not yet loaded. Aborting game start.");return}w&&(w.textContent="",w.classList.remove("error")),St=[],T=ue,R&&(R.textContent=""),x&&(x.disabled=!1,x.textContent=`Buy Hint (${st} points)`),J&&(J.textContent=`Guesses: ${T}`),ge(),document.querySelectorAll(".letter-button").forEach(o=>{o.disabled=!1,o.classList.remove("correct","incorrect")}),Ke()}document.addEventListener("DOMContentLoaded",()=>{At=document.getElementById("score-display"),x=document.getElementById("hint-button"),R=document.getElementById("hint-display"),J=document.getElementById("guesses-left-display"),it=document.getElementById("letter-buttons"),Et=document.getElementById("word-display"),w=document.getElementById("game-message"),nt=document.getElementById("hangman-image"),Ze(),qe(),Qe(),x&&x.addEventListener("click",Xe),Je()});window.addEventListener("app-ready",()=>{console.log("PWA is ready, starting game logic..."),Lt()});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=globalThis,Ut=at.ShadowRoot&&(at.ShadyCSS===void 0||at.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rt=Symbol(),Jt=new WeakMap;let me=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Rt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ut&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=Jt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Jt.set(e,t))}return t}toString(){return this.cssText}};const eo=o=>new me(typeof o=="string"?o:o+"",void 0,Rt),A=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((r,s,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[i+1],o[0]);return new me(e,o,Rt)},oo=(o,t)=>{if(Ut)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),s=at.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,o.appendChild(r)}},Kt=Ut?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return eo(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ro,defineProperty:so,getOwnPropertyDescriptor:io,getOwnPropertyNames:no,getOwnPropertySymbols:ao,getPrototypeOf:lo}=Object,ft=globalThis,Zt=ft.trustedTypes,co=Zt?Zt.emptyScript:"",ho=ft.reactiveElementPolyfillSupport,G=(o,t)=>o,dt={toAttribute(o,t){switch(t){case Boolean:o=o?co:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Tt=(o,t)=>!ro(o,t),Yt={attribute:!0,type:String,converter:dt,reflect:!1,hasChanged:Tt};Symbol.metadata??=Symbol("metadata"),ft.litPropertyMetadata??=new WeakMap;class z extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Yt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&so(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){const{get:s,set:i}=io(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s?.call(this)},set(n){const l=s?.call(this);i.call(this,n),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Yt}static _$Ei(){if(this.hasOwnProperty(G("elementProperties")))return;const t=lo(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(G("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(G("properties"))){const e=this.properties,r=[...no(e),...ao(e)];for(const s of r)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)e.unshift(Kt(s))}else t!==void 0&&e.push(Kt(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return oo(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:dt).toAttribute(e,r.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,e){const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const i=r.getPropertyOptions(s),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:dt;this._$Em=s,this[s]=n.fromAttribute(e,i.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??Tt)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,i]of r)i.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}}z.elementStyles=[],z.shadowRootOptions={mode:"open"},z[G("elementProperties")]=new Map,z[G("finalized")]=new Map,ho?.({ReactiveElement:z}),(ft.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uo={attribute:!0,type:String,converter:dt,reflect:!1,hasChanged:Tt},po=(o=uo,t,e)=>{const{kind:r,metadata:s}=e;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(e.name,o),r==="accessor"){const{name:n}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,o)},init(l){return l!==void 0&&this.P(n,void 0,o),l}}}if(r==="setter"){const{name:n}=e;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,o)}}throw Error("Unsupported decorator location: "+r)};function u(o){return(t,e)=>typeof e=="object"?po(o,t,e):((r,s,i)=>{const n=s.hasOwnProperty(i);return s.constructor.createProperty(i,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(s,i):void 0})(o,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Mt(o){return u({...o,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fo=(o,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(o,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bo(o,t){return(e,r,s)=>{const i=n=>n.renderRoot?.querySelector(o)??null;return fo(e,r,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=globalThis,ht=Nt.trustedTypes,Xt=ht?ht.createPolicy("lit-html",{createHTML:o=>o}):void 0,ve="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,ye="?"+C,go=`<${ye}>`,B=document,K=()=>B.createComment(""),Z=o=>o===null||typeof o!="object"&&typeof o!="function",Bt=Array.isArray,mo=o=>Bt(o)||typeof o?.[Symbol.iterator]=="function",mt=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qt=/-->/g,te=/>/g,O=RegExp(`>|${mt}(?:([^\\s"'>=/]+)(${mt}*=${mt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ee=/'/g,oe=/"/g,we=/^(?:script|style|textarea|title)$/i,vo=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),v=vo(1),I=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),re=new WeakMap,M=B.createTreeWalker(B,129);function _e(o,t){if(!Bt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xt!==void 0?Xt.createHTML(t):t}const yo=(o,t)=>{const e=o.length-1,r=[];let s,i=t===2?"<svg>":t===3?"<math>":"",n=D;for(let l=0;l<e;l++){const a=o[l];let d,f,c=-1,g=0;for(;g<a.length&&(n.lastIndex=g,f=n.exec(a),f!==null);)g=n.lastIndex,n===D?f[1]==="!--"?n=Qt:f[1]!==void 0?n=te:f[2]!==void 0?(we.test(f[2])&&(s=RegExp("</"+f[2],"g")),n=O):f[3]!==void 0&&(n=O):n===O?f[0]===">"?(n=s??D,c=-1):f[1]===void 0?c=-2:(c=n.lastIndex-f[2].length,d=f[1],n=f[3]===void 0?O:f[3]==='"'?oe:ee):n===oe||n===ee?n=O:n===Qt||n===te?n=D:(n=O,s=void 0);const y=n===O&&o[l+1].startsWith("/>")?" ":"";i+=n===D?a+go:c>=0?(r.push(d),a.slice(0,c)+ve+a.slice(c)+C+y):a+C+(c===-2?l:y)}return[_e(o,i+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Y{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let i=0,n=0;const l=t.length-1,a=this.parts,[d,f]=yo(t,e);if(this.el=Y.createElement(d,r),M.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=M.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(ve)){const g=f[n++],y=s.getAttribute(c).split(C),et=/([.?@])?(.*)/.exec(g);a.push({type:1,index:i,name:et[2],strings:y,ctor:et[1]==="."?_o:et[1]==="?"?$o:et[1]==="@"?xo:bt}),s.removeAttribute(c)}else c.startsWith(C)&&(a.push({type:6,index:i}),s.removeAttribute(c));if(we.test(s.tagName)){const c=s.textContent.split(C),g=c.length-1;if(g>0){s.textContent=ht?ht.emptyScript:"";for(let y=0;y<g;y++)s.append(c[y],K()),M.nextNode(),a.push({type:2,index:++i});s.append(c[g],K())}}}else if(s.nodeType===8)if(s.data===ye)a.push({type:2,index:i});else{let c=-1;for(;(c=s.data.indexOf(C,c+1))!==-1;)a.push({type:7,index:i}),c+=C.length-1}i++}}static createElement(t,e){const r=B.createElement("template");return r.innerHTML=t,r}}function V(o,t,e=o,r){if(t===I)return t;let s=r!==void 0?e._$Co?.[r]:e._$Cl;const i=Z(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(o),s._$AT(o,e,r)),r!==void 0?(e._$Co??=[])[r]=s:e._$Cl=s),s!==void 0&&(t=V(o,s._$AS(o,t.values),s,r)),t}class wo{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=(t?.creationScope??B).importNode(e,!0);M.currentNode=s;let i=M.nextNode(),n=0,l=0,a=r[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new tt(i,i.nextSibling,this,t):a.type===1?d=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(d=new Ao(i,this,t)),this._$AV.push(d),a=r[++l]}n!==a?.index&&(i=M.nextNode(),n++)}return M.currentNode=B,s}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),Z(t)?t===b||t==null||t===""?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==I&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):mo(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==b&&Z(this._$AH)?this._$AA.nextSibling.data=t:this.T(B.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Y.createElement(_e(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(e);else{const i=new wo(s,this),n=i.u(this.options);i.p(e),this.T(n),this._$AH=i}}_$AC(t){let e=re.get(t.strings);return e===void 0&&re.set(t.strings,e=new Y(t)),e}k(t){Bt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const i of t)s===e.length?e.push(r=new tt(this.O(K()),this.O(K()),this,this.options)):r=e[s],r._$AI(i),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class bt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,i){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=b}_$AI(t,e=this,r,s){const i=this.strings;let n=!1;if(i===void 0)t=V(this,t,e,0),n=!Z(t)||t!==this._$AH&&t!==I,n&&(this._$AH=t);else{const l=t;let a,d;for(t=i[0],a=0;a<i.length-1;a++)d=V(this,l[r+a],e,a),d===I&&(d=this._$AH[a]),n||=!Z(d)||d!==this._$AH[a],d===b?t=b:t!==b&&(t+=(d??"")+i[a+1]),this._$AH[a]=d}n&&!s&&this.j(t)}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class _o extends bt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===b?void 0:t}}class $o extends bt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==b)}}class xo extends bt{constructor(t,e,r,s,i){super(t,e,r,s,i),this.type=5}_$AI(t,e=this){if((t=V(this,t,e,0)??b)===I)return;const r=this._$AH,s=t===b&&r!==b||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==b&&(r===b||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ao{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const Eo=Nt.litHtmlPolyfillSupport;Eo?.(Y,tt),(Nt.litHtmlVersions??=[]).push("3.2.1");const So=(o,t,e)=>{const r=e?.renderBefore??t;let s=r._$litPart$;if(s===void 0){const i=e?.renderBefore??null;r._$litPart$=s=new tt(t.insertBefore(K(),i),i,void 0,e??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class k extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=So(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}}k._$litElement$=!0,k.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:k});const Co=globalThis.litElementPolyfillSupport;Co?.({LitElement:k});(globalThis.litElementVersions??=[]).push("4.1.1");const ko="modulepreload",Po=function(o){return"/"+o},se={},$e=function(t,e,r){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),l=n?.nonce||n?.getAttribute("nonce");s=Promise.allSettled(e.map(a=>{if(a=Po(a),a in se)return;se[a]=!0;const d=a.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${f}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":ko,d||(c.as="script"),c.crossOrigin="",c.href=a,l&&c.setAttribute("nonce",l),document.head.appendChild(c),d)return new Promise((g,y)=>{c.addEventListener("load",g),c.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(n){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=n,window.dispatchEvent(l),!l.defaultPrevented)throw n}return s.then(n=>{for(const l of n||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},It=Symbol.for("app-tools::log::1.x");globalThis[It]={setDebug:Lo,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function Lo(o){globalThis[It].debug=!!o}function Oo(o,t){globalThis[It].debug&&(console.groupCollapsed(`[app-tools] ${o}`),t&&console.log(t),console.groupEnd())}function Uo(o){return(t,e)=>{Oo(`${o}: ${t}`,e)}}const S=Uo("router");class Ro extends Event{constructor(t){super("route-changed"),this.context=t}}class To extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(t){super(),this.config=t,this.routes=t.routes.map(e=>({...e,urlPattern:new URLPattern({pathname:e.path,baseURL:window.location.href,search:"*",hash:"*"})})),S("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href),{replace:!0})}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return S(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(t){for(const e of this.routes){const r=e.urlPattern.exec(t);if(r){const{title:s}=e,i=Object.fromEntries(new URLSearchParams(t.search)),n=r?.pathname?.groups??{};return this.context={url:t,title:typeof s=="function"?s({params:n,query:i,url:t}):s,params:n,query:i},e}}return S(`No route matched for ${t.pathname}${t.search}${t.hash}`,t),null}_notifyUrlChanged(){this.dispatchEvent(new Ro(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=t=>{if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey)return;const e=t.composedPath().find(i=>i.tagName==="A");if(!e||!e.href)return;const r=new URL(e.href);if(this.url.href===r.href||r.host!==window.location.host||e.hasAttribute("download")||e.href.includes("mailto:"))return;const s=e.getAttribute("target");s&&s!==""&&s!=="_self"||(t.preventDefault(),this.navigate(r))};_collectPlugins(t){return[...this.config?.plugins??[],...t?.plugins??[]]}async navigate(t,e={}){typeof t=="string"&&(t=new URL(t,this.baseUrl));let r=this._matchRoute(t)||this._matchRoute(this.fallback);S(`Navigating to ${t.pathname}${t.search}${t.hash}`,{context:this.context,route:this.route});let s=this._collectPlugins(r);for(const i of s)try{const n=await i?.shouldNavigate?.(this.context);n&&(await n.condition()||(t=new URL(n.redirect,this.baseUrl),r=this._matchRoute(t)||this._matchRoute(this.fallback),s=this._collectPlugins(r),S("Redirecting",{context:this.context,route:this.route})))}catch(n){throw S(`Plugin "${i.name}" error on shouldNavigate hook`,n),n}if(this.route=r,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${t}`);for(const i of s)try{await i?.beforeNavigation?.(this.context)}catch(n){throw S(`Plugin "${i.name}" error on beforeNavigation hook`,n),n}e?.replace?window.history.replaceState(null,"",`${t.pathname}${t.search}${t.hash}`):e.backNav||window.history.pushState(null,"",`${t.pathname}${t.search}${t.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const i of s)try{await i?.afterNavigation?.(this.context)}catch(n){throw S(`Plugin "${i.name}" error on afterNavigation hook`,n),n}}}function Mo(o){return{name:"lazy",beforeNavigation:()=>{o()}}}globalThis.URLPattern||await $e(()=>import("./index-CBloBB_n.js"),[]);const No="/",Bo=new To({routes:[{path:ut(),title:"Home",render:()=>v`<app-home></app-home>`},{path:ut("about"),title:"About",plugins:[Mo(()=>$e(()=>import("./app-about-BKOFTFzs.js"),[]))],render:()=>v`<app-about></app-about>`}]});function ut(o){var t=No;return o&&(t=t+o),t}var Io=A`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,xe=class{constructor(o,...t){this.slotNames=[],this.handleSlotChange=e=>{const r=e.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=o).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(o=>{if(o.nodeType===o.TEXT_NODE&&o.textContent.trim()!=="")return!0;if(o.nodeType===o.ELEMENT_NODE){const t=o;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(o){return this.host.querySelector(`:scope > [slot="${o}"]`)!==null}test(o){return o==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(o)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},gt=A`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,lt,L=class extends k{constructor(){super(),Ve(this,lt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([o,t])=>{this.constructor.define(o,t)})}emit(o,t){const e=new CustomEvent(o,Q({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(e),e}static define(o,t=this,e={}){const r=customElements.get(o);if(!r){try{customElements.define(o,t,e)}catch{customElements.define(o,class extends t{},e)}return}let s=" (unknown version)",i=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in r&&r.version&&(i=" v"+r.version),!(s&&i&&s===i)&&console.warn(`Attempted to register <${o}>${s}, but <${o}>${i} has already been registered.`)}attributeChangedCallback(o,t,e){He(this,lt)||(this.constructor.elementProperties.forEach((r,s)=>{r.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),De(this,lt,!0)),super.attributeChangedCallback(o,t,e)}willUpdate(o){super.willUpdate(o),this.initialReflectedProperties.forEach((t,e)=>{o.has(e)&&this[e]==null&&(this[e]=t)})}};lt=new WeakMap;L.version="2.18.0";L.dependencies={};h([u()],L.prototype,"dir",2);h([u()],L.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ho=o=>(...t)=>({_$litDirective$:o,values:t});let Vo=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae=Ho(class extends Vo{constructor(o){if(super(o),o.type!==zo.ATTRIBUTE||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const e=o.element.classList;for(const r of this.st)r in t||(e.remove(r),this.st.delete(r));for(const r in t){const s=!!t[r];s===this.st.has(r)||this.nt?.has(r)||(s?(e.add(r),this.st.add(r)):(e.remove(r),this.st.delete(r)))}return I}});var Ee=class extends L{constructor(){super(...arguments),this.hasSlotController=new xe(this,"footer","header","image")}render(){return v`
      <div
        part="base"
        class=${Ae({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Ee.styles=[gt,Io];Ee.define("sl-card");var Do=A`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const Ct=new Set,H=new Map;let U,zt="ltr",Ht="en";const Se=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Se){const o=new MutationObserver(ke);zt=document.documentElement.dir||"ltr",Ht=document.documentElement.lang||navigator.language,o.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Ce(...o){o.map(t=>{const e=t.$code.toLowerCase();H.has(e)?H.set(e,Object.assign(Object.assign({},H.get(e)),t)):H.set(e,t),U||(U=t)}),ke()}function ke(){Se&&(zt=document.documentElement.dir||"ltr",Ht=document.documentElement.lang||navigator.language),[...Ct.keys()].map(o=>{typeof o.requestUpdate=="function"&&o.requestUpdate()})}let jo=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Ct.add(this.host)}hostDisconnected(){Ct.delete(this.host)}dir(){return`${this.host.dir||zt}`.toLowerCase()}lang(){return`${this.host.lang||Ht}`.toLowerCase()}getTranslationData(t){var e,r;const s=new Intl.Locale(t.replace(/_/g,"-")),i=s?.language.toLowerCase(),n=(r=(e=s?.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&r!==void 0?r:"",l=H.get(`${i}-${n}`),a=H.get(i);return{locale:s,language:i,region:n,primary:l,secondary:a}}exists(t,e){var r;const{primary:s,secondary:i}=this.getTranslationData((r=e.lang)!==null&&r!==void 0?r:this.lang());return e=Object.assign({includeFallback:!1},e),!!(s&&s[t]||i&&i[t]||e.includeFallback&&U&&U[t])}term(t,...e){const{primary:r,secondary:s}=this.getTranslationData(this.lang());let i;if(r&&r[t])i=r[t];else if(s&&s[t])i=s[t];else if(U&&U[t])i=U[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...e):i}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,e)}};var Pe={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(o,t)=>`Go to slide ${o} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:o=>o===0?"No options selected":o===1?"1 option selected":`${o} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:o=>`Slide ${o}`,toggleColorFormat:"Toggle color format"};Ce(Pe);var Fo=Pe,Le=class extends jo{};Ce(Fo);var Oe=class extends L{constructor(){super(...arguments),this.localize=new Le(this)}render(){return v`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Oe.styles=[gt,Do];var j=new WeakMap,F=new WeakMap,W=new WeakMap,vt=new WeakSet,ot=new WeakMap,Wo=class{constructor(o,t){this.handleFormData=e=>{const r=this.options.disabled(this.host),s=this.options.name(this.host),i=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!n&&typeof s=="string"&&s.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(l=>{e.formData.append(s,l.toString())}):e.formData.append(s,i.toString()))},this.handleFormSubmit=e=>{var r;const s=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=j.get(this.form))==null||r.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!s&&!i(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ot.set(this.host,[])},this.handleInteraction=e=>{const r=ot.get(this.host);r.includes(e.type)||r.push(e.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const r of e)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const r of e)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=o).addController(this),this.options=Q({form:e=>{const r=e.form;if(r){const i=e.getRootNode().querySelector(`#${r}`);if(i)return i}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var r;return(r=e.disabled)!=null?r:!1},reportValidity:e=>typeof e.reportValidity=="function"?e.reportValidity():!0,checkValidity:e=>typeof e.checkValidity=="function"?e.checkValidity():!0,setValue:(e,r)=>e.value=r,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const o=this.options.form(this.host);o&&this.attachForm(o),ot.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ot.delete(this.host),this.options.assumeInteractionOn.forEach(o=>{this.host.removeEventListener(o,this.handleInteraction)})}hostUpdated(){const o=this.options.form(this.host);o||this.detachForm(),o&&this.form!==o&&(this.detachForm(),this.attachForm(o)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(o){o?(this.form=o,j.has(this.form)?j.get(this.form).add(this.host):j.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),F.has(this.form)||(F.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),W.has(this.form)||(W.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const o=j.get(this.form);o&&(o.delete(this.host),o.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),F.has(this.form)&&(this.form.reportValidity=F.get(this.form),F.delete(this.form)),W.has(this.form)&&(this.form.checkValidity=W.get(this.form),W.delete(this.form)),this.form=void 0))}setUserInteracted(o,t){t?vt.add(o):vt.delete(o),o.requestUpdate()}doAction(o,t){if(this.form){const e=document.createElement("button");e.type=o,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",t&&(e.name=t.name,e.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&e.setAttribute(r,t.getAttribute(r))})),this.form.append(e),e.click(),e.remove()}}getForm(){var o;return(o=this.form)!=null?o:null}reset(o){this.doAction("reset",o)}submit(o){this.doAction("submit",o)}setValidity(o){const t=this.host,e=!!vt.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!o),t.toggleAttribute("data-valid",o),t.toggleAttribute("data-user-invalid",!o&&e),t.toggleAttribute("data-user-valid",o&&e)}updateValidity(){const o=this.host;this.setValidity(o.validity.valid)}emitInvalidEvent(o){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});o||t.preventDefault(),this.host.dispatchEvent(t)||o?.preventDefault()}},Vt=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(de(Q({},Vt),{valid:!1,valueMissing:!0}));Object.freeze(de(Q({},Vt),{valid:!1,customError:!0}));var qo=A`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,Go={name:"default",resolver:o=>Te(`assets/icons/${o}.svg`)},Jo=Go,ie={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Ko={name:"system",resolver:o=>o in ie?`data:image/svg+xml,${encodeURIComponent(ie[o])}`:""},Zo=Ko,Yo=[Jo,Zo],kt=[];function Xo(o){kt.push(o)}function Qo(o){kt=kt.filter(t=>t!==o)}function ne(o){return Yo.find(t=>t.name===o)}var tr=A`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function Dt(o,t){const e=Q({waitUntilFirstUpdate:!1},t);return(r,s)=>{const{update:i}=r,n=Array.isArray(o)?o:[o];r.update=function(l){n.forEach(a=>{const d=a;if(l.has(d)){const f=l.get(d),c=this[d];f!==c&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[s](f,c)}}),i.call(this,l)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const er=(o,t)=>o?._$litType$!==void 0;var q=Symbol(),rt=Symbol(),yt,wt=new Map,E=class extends L{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(o,t){var e;let r;if(t?.spriteSheet)return this.svg=v`<svg part="svg">
        <use part="use" href="${o}"></use>
      </svg>`,this.svg;try{if(r=await fetch(o,{mode:"cors"}),!r.ok)return r.status===410?q:rt}catch{return rt}try{const s=document.createElement("div");s.innerHTML=await r.text();const i=s.firstElementChild;if(((e=i?.tagName)==null?void 0:e.toLowerCase())!=="svg")return q;yt||(yt=new DOMParser);const l=yt.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):q}catch{return q}}connectedCallback(){super.connectedCallback(),Xo(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Qo(this)}getIconSource(){const o=ne(this.library);return this.name&&o?{url:o.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var o;const{url:t,fromLibrary:e}=this.getIconSource(),r=e?ne(this.library):void 0;if(!t){this.svg=null;return}let s=wt.get(t);if(s||(s=this.resolveIcon(t,r),wt.set(t,s)),!this.initialRender)return;const i=await s;if(i===rt&&wt.delete(t),t===this.getIconSource().url){if(er(i)){if(this.svg=i,r){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof r.mutator=="function"&&n&&r.mutator(n)}return}switch(i){case rt:case q:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(o=r?.mutator)==null||o.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};E.styles=[gt,tr];h([Mt()],E.prototype,"svg",2);h([u({reflect:!0})],E.prototype,"name",2);h([u()],E.prototype,"src",2);h([u()],E.prototype,"label",2);h([u({reflect:!0})],E.prototype,"library",2);h([Dt("label")],E.prototype,"handleLabelChange",1);h([Dt(["name","src","library"])],E.prototype,"setIcon",1);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=Symbol.for(""),or=o=>{if(o?.r===Ue)return o?._$litStatic$},ae=(o,...t)=>({_$litStatic$:t.reduce((e,r,s)=>e+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+o[s+1],o[0]),r:Ue}),le=new Map,rr=o=>(t,...e)=>{const r=e.length;let s,i;const n=[],l=[];let a,d=0,f=!1;for(;d<r;){for(a=t[d];d<r&&(i=e[d],(s=or(i))!==void 0);)a+=s+t[++d],f=!0;d!==r&&l.push(i),n.push(a),d++}if(d===r&&n.push(t[r]),f){const c=n.join("$$lit$$");(t=le.get(c))===void 0&&(n.raw=n,le.set(c,t=n)),e=l}return o(t,...e)},_t=rr(v);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=o=>o??b;var p=class extends L{constructor(){super(...arguments),this.formControlController=new Wo(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new xe(this,"[default]","prefix","suffix"),this.localize=new Le(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Vt}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(o){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(o)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(o){this.button.focus(o)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(o){this.isButton()&&(this.button.setCustomValidity(o),this.formControlController.updateValidity())}render(){const o=this.isLink(),t=o?ae`a`:ae`button`;return _t`
      <${t}
        part="base"
        class=${Ae({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${$(o?void 0:this.disabled)}
        type=${$(o?void 0:this.type)}
        title=${this.title}
        name=${$(o?void 0:this.name)}
        value=${$(o?void 0:this.value)}
        href=${$(o&&!this.disabled?this.href:void 0)}
        target=${$(o?this.target:void 0)}
        download=${$(o?this.download:void 0)}
        rel=${$(o?this.rel:void 0)}
        role=${$(o?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?_t` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?_t`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};p.styles=[gt,qo];p.dependencies={"sl-icon":E,"sl-spinner":Oe};h([bo(".button")],p.prototype,"button",2);h([Mt()],p.prototype,"hasFocus",2);h([Mt()],p.prototype,"invalid",2);h([u()],p.prototype,"title",2);h([u({reflect:!0})],p.prototype,"variant",2);h([u({reflect:!0})],p.prototype,"size",2);h([u({type:Boolean,reflect:!0})],p.prototype,"caret",2);h([u({type:Boolean,reflect:!0})],p.prototype,"disabled",2);h([u({type:Boolean,reflect:!0})],p.prototype,"loading",2);h([u({type:Boolean,reflect:!0})],p.prototype,"outline",2);h([u({type:Boolean,reflect:!0})],p.prototype,"pill",2);h([u({type:Boolean,reflect:!0})],p.prototype,"circle",2);h([u()],p.prototype,"type",2);h([u()],p.prototype,"name",2);h([u()],p.prototype,"value",2);h([u()],p.prototype,"href",2);h([u()],p.prototype,"target",2);h([u()],p.prototype,"rel",2);h([u()],p.prototype,"download",2);h([u()],p.prototype,"form",2);h([u({attribute:"formaction"})],p.prototype,"formAction",2);h([u({attribute:"formenctype"})],p.prototype,"formEnctype",2);h([u({attribute:"formmethod"})],p.prototype,"formMethod",2);h([u({attribute:"formnovalidate",type:Boolean})],p.prototype,"formNoValidate",2);h([u({attribute:"formtarget"})],p.prototype,"formTarget",2);h([Dt("disabled",{waitUntilFirstUpdate:!0})],p.prototype,"handleDisabledChange",1);p.define("sl-button");const sr=A`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 34px;
    padding: 12px;
  }
`;var ir=Object.defineProperty,nr=Object.getOwnPropertyDescriptor,Re=(o,t,e,r)=>{for(var s=r>1?void 0:r?nr(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&ir(t,e,s),s};let pt=class extends k{constructor(){super(...arguments),this.message="Welcome!"}async firstUpdated(){console.log("This is your home page")}share(){navigator.share&&navigator.share({title:"PWABuilder pwa-starter",text:"Check out the PWABuilder pwa-starter!",url:"https://github.com/pwa-builder/pwa-starter"})}render(){return v`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>

            <p>
              For more information on the PWABuilder pwa-starter, check out the
              <a href="https://docs.pwabuilder.com/#/starter/quick-start">
                documentation</a>.
            </p>

            <p id="mainInfo">
              Welcome to the
              <a href="https://pwabuilder.com">PWABuilder</a>
              pwa-starter! Be sure to head back to
              <a href="https://pwabuilder.com">PWABuilder</a>
              when you are ready to ship this PWA to the Microsoft Store, Google Play
              and the Apple App Store!
            </p>

            ${"share"in navigator?v`<sl-button slot="footer" variant="default" @click="${this.share}">
                        <sl-icon slot="prefix" name="share"></sl-icon>
                        Share this Starter!
                      </sl-button>`:null}
          </sl-card>

          <sl-card id="infoCard">
            <h2>Technology Used</h2>

            <ul>
              <li>
                <a href="https://www.typescriptlang.org/">TypeScript</a>
              </li>

              <li>
                <a href="https://lit.dev">lit</a>
              </li>

              <li>
                <a href="https://shoelace.style/">Shoelace</a>
              </li>

              <li>
                <a href="https://github.com/thepassle/app-tools/blob/master/router/README.md"
                  >App Tools Router</a>
              </li>
            </ul>
          </sl-card>

          <sl-button href="${ut("about")}" variant="primary">Navigate to About</sl-button>
        </div>
      </main>
    `}};pt.styles=[sr,A`
    #welcomeBar {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    #welcomeCard,
    #infoCard {
      padding: 18px;
      padding-top: 0px;
    }

    sl-card::part(footer) {
      display: flex;
      justify-content: flex-end;
    }

    @media(min-width: 750px) {
      sl-card {
        width: 70vw;
      }
    }


    @media (horizontal-viewport-segments: 2) {
      #welcomeBar {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
      }

      #welcomeCard {
        margin-right: 64px;
      }
    }
  `];Re([u()],pt.prototype,"message",2);pt=Re([Ot("app-home")],pt);var ar=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,jt=(o,t,e,r)=>{for(var s=r>1?void 0:r?lr(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&ar(t,e,s),s};let X=class extends k{constructor(){super(...arguments),this.title="bible_hangman_free",this.enableBack=!1}render(){return v`
      <header>

        <div id="back-button-block">
          ${this.enableBack?v`<sl-button size="small" href="${ut()}">
            Back
          </sl-button>`:null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `}};X.styles=A`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--app-color-primary);
      color: white;
      padding: 12px;
      padding-top: 4px;

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, 30px);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
    }

    header h1 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 12px;
      font-weight: bold;
    }

    nav a {
      margin-left: 10px;
    }

    #back-button-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    @media(prefers-color-scheme: light) {
      header {
        color: black;
      }

      nav a {
        color: initial;
      }
    }
  `;jt([u({type:String})],X.prototype,"title",2);jt([u({type:Boolean})],X.prototype,"enableBack",2);X=jt([Ot("app-header")],X);var cr=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,hr=(o,t,e,r)=>{for(var s=r>1?void 0:r?dr(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&cr(t,e,s),s};let Pt=class extends k{createRenderRoot(){return this}firstUpdated(){window.dispatchEvent(new CustomEvent("app-ready")),Bo.addEventListener("route-changed",()=>{"startViewTransition"in document?document.startViewTransition(()=>this.requestUpdate()):this.requestUpdate()})}render(){return v`
 
   
    

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bible Hangman</title>
  <h3>Bible Hangman</h3>
   <link rel="stylesheet" href="./style.css">
    <link rel="manifest" href="/manifest2.json">
</head>

<body>
    <div class="container">


        <div id="game-info">
            <div id="score-display" class="info-box">Score: 100</div>

            <div id="hangman-drawing" class="info-box">
                <img id="hangman-image" src="/images/hangman-0.png" alt="Hangman Gallow" width="220" height="290">
            </div>

            <div id="guesses-left-display" class="info-box">Guesses: 6</div>
        </div>

        <div id="word-display" class="word-area">
        </div>

        <div id="controls-area">
            <div id="letter-buttons" class="buttons-grid">
            </div>

            <div id="hint-section">
                <button id="hint-button" class="action-button">Hint (-10 📖)</button>
                <p id="hint-display" class="hint-text"></p>
            </div>
        </div>

        <div id="game-message" class="message-area"></div>
        <footer>v. 202512</footer>
    </div>

   

</body>


   `}};Pt.styles=A`
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    margin: 0;
  
}

footer {
    font-size: xx-small;
    text-align: center;
    /* Ensure it doesn't grow and stays fixed height */
    flex-shrink: 0;
}


`;Pt=hr([Ot("app-index")],Pt);export{A as i,k as r,sr as s,Ot as t,v as x};
//# sourceMappingURL=index-BDrYgFVr.js.map
