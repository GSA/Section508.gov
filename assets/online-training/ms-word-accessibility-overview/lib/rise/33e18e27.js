(globalThis.wpRiseJsonp=globalThis.wpRiseJsonp||[]).push([["defaultVendors-node_modules_pnpm_articulate_design-system_1_24_1__articulate_design-system-to-c4d491"],{98998(ts){var Ro="Expected a function",he=NaN,sa="[object Symbol]",Po=/^\s+|\s+$/g,ec=/^[-+]0x[0-9a-f]+$/i,Et=/^0b[01]+$/i,_r=/^0o[0-7]+$/i,Lo=parseInt,Oe=typeof globalThis=="object"&&globalThis&&globalThis.Object===Object&&globalThis,Mo=typeof self=="object"&&self&&self.Object===Object&&self,Bo=Oe||Mo||Function("return this")(),oe=Object.prototype,Ra=oe.toString,Oo=Math.max,ac=Math.min,Pa=function(){return Bo.Date.now()};function rt(ur,Gr,De){var la,ar,Jr,Se,be,$e,Ma=0,No=!1,ze=!1,Ee=!0;if(typeof ur!="function")throw new TypeError(Ro);Gr=_t(Gr)||0,La(De)&&(No=!!De.leading,ze="maxWait"in De,Jr=ze?Oo(_t(De.maxWait)||0,Gr):Jr,Ee="trailing"in De?!!De.trailing:Ee);function i(Lr){var Ne=la,Ba=ar;return la=ar=void 0,Ma=Lr,Se=ur.apply(Ba,Ne),Se}function u(Lr){return Ma=Lr,be=setTimeout(wa,Gr),No?i(Lr):Se}function et(Lr){var Ne=Lr-$e,Ba=Lr-Ma,Ho=Gr-Ne;return ze?ac(Ho,Jr-Ba):Ho}function at(Lr){var Ne=Lr-$e,Ba=Lr-Ma;return $e===void 0||Ne>=Gr||Ne<0||ze&&Ba>=Jr}function wa(){var Lr=Pa();if(at(Lr))return It(Lr);be=setTimeout(wa,et(Lr))}function It(Lr){return be=void 0,Ee&&la?i(Lr):(la=ar=void 0,Se)}function Fo(){be!==void 0&&clearTimeout(be),Ma=0,la=$e=ar=be=void 0}function oc(){return be===void 0?Se:It(Pa())}function s(){var Lr=Pa(),Ne=at(Lr);if(la=arguments,ar=this,$e=Lr,Ne){if(be===void 0)return u($e);if(ze)return be=setTimeout(wa,Gr),i($e)}return be===void 0&&(be=setTimeout(wa,Gr)),Se}return s.cancel=Fo,s.flush=oc,s}function La(ur){var Gr=typeof ur;return!!ur&&(Gr=="object"||Gr=="function")}function Do(ur){return!!ur&&typeof ur=="object"}function tc(ur){return typeof ur=="symbol"||Do(ur)&&Ra.call(ur)==sa}function _t(ur){if(typeof ur=="number")return ur;if(tc(ur))return he;if(La(ur)){var Gr=typeof ur.valueOf=="function"?ur.valueOf():ur;ur=La(Gr)?Gr+"":Gr}if(typeof ur!="string")return ur===0?ur:+ur;ur=ur.replace(Po,"");var De=Et.test(ur);return De||_r.test(ur)?Lo(ur.slice(2),De?2:8):ec.test(ur)?he:+ur}ts.exports=rt},20680(ts,Ro,he){"use strict";he.r(Ro),he.d(Ro,{ARC_DROPDOWN_SUBMENU_OMIT_KEYS:()=>Id,ARC_MENU_DELAY_MS:()=>Li,Arc:()=>qm,ArcAbstractFlexLayouts:()=>Gr,ArcAbstractGapSizes:()=>Do,ArcAbstractIconSizes:()=>La,ArcAbstractOrientations:()=>De,ArcAbstractPopoverActions:()=>rt,ArcAbstractPopoverModes:()=>Pa,ArcAbstractTextLayouts:()=>ur,ArcAbstractTextOverflows:()=>_t,ArcAbstractTextSizes:()=>tc,ArcAvatar:()=>Cc,ArcAvatarColors:()=>ks,ArcAvatarColorsReserved:()=>Vu,ArcAvatarOverflow:()=>ig,ArcAvatarOverflowSizes:()=>Yu,ArcAvatarPile:()=>Ch,ArcAvatarPileSizes:()=>qu,ArcAvatarSizes:()=>Uu,ArcAvatarText:()=>Ac,ArcAvatarTextGapSizes:()=>Ku,ArcAvatarTextOverflows:()=>Wu,ArcAvatarTextSizes:()=>Gu,ArcBadge:()=>kg,ArcBadgeColors:()=>pg,ArcBadgeContrasts:()=>$g,ArcBadgeCount:()=>Rg,ArcBadgeCountColors:()=>fg,ArcBadgeCountContrasts:()=>Ig,ArcBadgeCountShapes:()=>Tg,ArcBadgeCountSizes:()=>Eg,ArcBadgeCountVariants:()=>_g,ArcBadgeLayouts:()=>bg,ArcBadgeSizes:()=>mg,ArcBadgeVariants:()=>yg,ArcBanner:()=>Zg,ArcBannerActionPlacements:()=>Ug,ArcBannerAlignments:()=>Kg,ArcBannerDefaults:()=>Sa,ArcBannerDensities:()=>Hg,ArcBannerLayouts:()=>Vg,ArcBannerSchemes:()=>Wg,ArcBannerVariants:()=>qg,ArcButton:()=>Ar,ArcButtonHierarchies:()=>il,ArcButtonLayouts:()=>f0,ArcButtonPopoverActions:()=>b0,ArcButtonSchemes:()=>Hc,ArcButtonShadows:()=>m0,ArcButtonShapes:()=>v0,ArcButtonSizes:()=>p0,ArcButtonVariants:()=>cl,ArcCheckbox:()=>wl,ArcCheckboxBar:()=>dv,ArcCheckboxBarLayouts:()=>iv,ArcCheckboxBarOption:()=>lv,ArcCheckboxBarSizes:()=>sv,ArcCheckboxLayouts:()=>tv,ArcCheckboxSizes:()=>ov,ArcCheckboxVariants:()=>nv,ArcColorAllTools:()=>Cl,ArcColorPalette:()=>In,ArcColorPaletteAddFlows:()=>gv,ArcColorPicker:()=>Ya,ArcColorPickerDefaults:()=>_a,ArcColorPickerModes:()=>uv,ArcColorSimpleTools:()=>Al,ArcColorSwatch:()=>$i,ArcColorSwatchKinds:()=>hv,ArcColorValueFormats:()=>ob,ArcDropdownMenu:()=>Kn,ArcIcon:()=>ir,ArcIconText:()=>re,ArcIconTextVariants:()=>Kh,ArcInputAction:()=>Rd,ArcLabel:()=>za,ArcLabelContent:()=>Ka,ArcLabelLayouts:()=>Jg,ArcLink:()=>kf,ArcLinkVariants:()=>xf,ArcModal:()=>Vf,ArcModalAlert:()=>Kf,ArcModalAlertDefaults:()=>ba,ArcModalAlertVariants:()=>Sf,ArcModalBackdropColors:()=>zf,ArcModalBodyPaddings:()=>Ef,ArcModalCloseReasons:()=>If,ArcModalCommonDefaults:()=>le,ArcModalCommonVariants:()=>Cf,ArcModalConfirm:()=>Nd,ArcModalConfirmDefaults:()=>ja,ArcModalConfirmVariants:()=>Af,ArcModalSchemes:()=>wf,ArcModalSizes:()=>_f,ArcPopover:()=>ga,ArcPopoverActions:()=>Ah,ArcPopoverAnchors:()=>Ec,ArcPopoverBoundaries:()=>_c,ArcPopoverButton:()=>qt,ArcPopoverDefaults:()=>ve,ArcPopoverDensities:()=>Ls,ArcPopoverModes:()=>Sc,ArcPopoverSchemes:()=>zc,ArcPopoverVariants:()=>Ps,ArcPopoverVariantsWithOutline:()=>Sh,ArcRadio:()=>Fd,ArcRadioBar:()=>Qf,ArcRadioBarLayouts:()=>Zf,ArcRadioBarOption:()=>Jf,ArcRadioBarSizes:()=>Xf,ArcRadioLayouts:()=>Gf,ArcRadioSizes:()=>qf,ArcSVGGradientDef:()=>zs,ArcSearch:()=>Zd,ArcSearchLayouts:()=>pm,ArcSearchSizes:()=>fm,ArcSearchVariants:()=>mm,ArcSelect:()=>_m,ArcSelectLayouts:()=>xm,ArcSelectSizes:()=>km,ArcSelectVariants:()=>wm,ArcSwitch:()=>Rm,ArcSwitchLabelPositions:()=>At,ArcSwitchSizes:()=>Im,ArcSwitchStates:()=>Wr,ArcSystemAIGradients:()=>Oo,ArcSystemAlignments:()=>Mo,ArcSystemColors:()=>Ra,ArcSystemGradients:()=>ac,ArcSystemHierarchies:()=>Lo,ArcSystemLayouts:()=>Oe,ArcSystemLineHeights:()=>Bo,ArcSystemSchemes:()=>sa,ArcSystemShadows:()=>Po,ArcSystemShapes:()=>Et,ArcSystemSizes:()=>oe,ArcSystemSurfaces:()=>ec,ArcSystemVariants:()=>_r,ArcTextAlignments:()=>Hm,ArcTextBodyElements:()=>nu,ArcTextBodySizes:()=>Nm,ArcTextBodyVariants:()=>Fm,ArcTextElements:()=>cu,ArcTextHeadingElements:()=>ou,ArcTextHeadingSizes:()=>Bm,ArcTextHeadingVariants:()=>Dm,ArcTextInput:()=>Hn,ArcTextInputLayouts:()=>Ep,ArcTextInputSizes:()=>_p,ArcTextInputTypes:()=>Tp,ArcTextInputVariants:()=>Ip,ArcTextKinds:()=>Pm,ArcTextLineHeights:()=>Vm,ArcTextSchemes:()=>Lm,ArcTextSubheadingSizes:()=>Om,ArcTextTitleSizes:()=>Mm,ArcToast:()=>wu,ArcToastDefaults:()=>mu,ArcToastPlacements:()=>fu,ArcToastPopoverActions:()=>Zm,ArcToastPopoverModes:()=>pu,ArcToastProgressBarVariants:()=>Xm,ArcToastSchemes:()=>uu,ArcToastSeverities:()=>hu,ArcToastSizes:()=>gu,ArcToastVariants:()=>vu,ArcTooltip:()=>sn,ArcTooltipDefaults:()=>He,DeprecatedButtonVariants:()=>Vc,SVGLogoArticulate:()=>pc,SVGLogoProductAI:()=>fc,SVGLogoProductPeek:()=>mc,SVGLogoProductReach:()=>bc,SVGLogoProductReview:()=>$c,SVGLogoProductRise:()=>yc,SVGLogoProductStoryline:()=>xc,SVGLogoProductStudio:()=>kc,StorageType:()=>Eo,adoptStyles:()=>lr,adoptThemeTokens:()=>Du,anchorNameRegistry:()=>Dt,assignRef:()=>Se,bindDelegatedEvents:()=>tl,canonicalizeToHsv:()=>zn,clamp:()=>be,clampIt:()=>J,colorValueEquals:()=>En,compositeRgbaOver:()=>Pl,createEmptyRect:()=>nb,css:()=>s,cssFeatures:()=>Tc,decodeDeprecatedButtonVariant:()=>w0,didElementRectChange:()=>No,encodeDeprecatedButtonVariant:()=>C0,extractTextFromReactNode:()=>Bt,formatAlphaCss:()=>An,formatAlphaPercent:()=>$t,formatAnchorName:()=>jc,getArcColorAs:()=>Hl,getArcColorData:()=>qa,getArcColorParts:()=>Fl,getArcColorValue:()=>Vl,getArcContrastColor:()=>mi,getColorName:()=>Sn,getCssColor:()=>Ce,getElementByIdScoped:()=>Ee,getPlainLabel:()=>eu,getPreferredAnchorForTooltipId:()=>Nc,getResolvedHierarchy:()=>ul,getResolvedScheme:()=>hl,getResolvedShape:()=>sl,getResolvedVariant:()=>dl,getSelectedColorMeta:()=>bi,getShadowRootOrDocument:()=>ze,getSvgGradientCoords:()=>Ss,handlePopover:()=>Os,handleToast:()=>bu,hasBaseSelectSupport:()=>Xd,hasEmptyValueOption:()=>ru,hasMatchingColorValue:()=>fi,hasNativeAnchorPositioning:()=>Ic,hslToRgbaData:()=>_l,hsvDeltaOK:()=>di,hsvToRgbaData:()=>We,isDifferent:()=>$e,isGroupLegendItem:()=>Jd,isHexLike:()=>Ml,isHsvLike:()=>Ol,isObject:()=>As,isRgbaLike:()=>Bl,isSame:()=>Ma,isSelectGroup:()=>Qn,isSelectedColorMatch:()=>Kl,isString:()=>ct,joinArray:()=>Ot,logError:()=>Nh,logMessage:()=>Dh,logSkippedTopLevelItem:()=>Qd,logWarning:()=>Gs,makeHtmlId:()=>rh,makeRandomColor:()=>Ul,mapDeprecated:()=>la,noTailAnchors:()=>Ms,normalizeAnchorName:()=>Nt,normalizeByte:()=>Zr,normalizeColorValue:()=>yt,normalizeHue:()=>zl,normalizeUnit:()=>El,oklchToRgbaData:()=>jl,parseAlphaInput:()=>Dl,parseByte:()=>to,parseCssColorToRgba:()=>Tr,parseHexStringToRgba:()=>Ll,pickFromList:()=>ar,pickFromListByKeys:()=>Jr,relativeLuminance:()=>Rl,renderableOption:()=>Ct,resolveTailMetrics:()=>Bs,rgbaBytesEqual:()=>si,rgbaDeltaOK:()=>Cn,rgbaEchoDeltaOK:()=>li,rgbaToHslData:()=>Il,rgbaToHsvData:()=>oo,rgbaToOklchData:()=>Tl,roundIt:()=>wn,shareAdoptedStyles:()=>Ou,snapIt:()=>Sl,splitString:()=>Ws,syncAnchorName:()=>Ds,toHEX:()=>Re,toHSL:()=>vi,toLinearChannel:()=>Wa,toOKLCH:()=>pi,toRGB:()=>Ga,unbindDelegatedEvents:()=>c0,useIsoLayoutEffect:()=>Go,useStableId:()=>Ir,useStorage:()=>tb});const sa=["auto","light","dark","inverse"],Po=["none","sm","md","lg","xl"],ec=["primary","secondary","inset","raised","floating"],Et=["circle","round","pill","square","narrow"],_r=["inherit","common","disabled","neutral","outline","solid","plain","critical","ai","alpha","primary","secondary","tertiary","inverse","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse","overlay-light","overlay-dark","brand-black","brand-blue","brand","info","success","warning","error","processing"],Lo=["primary","secondary","tertiary","plain","link-style"],Oe=["hug","fill","icon","gutter","inline"],Mo=["inherit","start","left","justify","center","between","around","evenly","stretch","end","right"],Bo=["inherit","tight","standard","loose"],oe=["inherit","xxl","xl","lg","md","sm","xs","xxs","custom","fullscreen"],Ra=["blue","orange","mint","red","yellow","green","maroon","purple","neutral","white","black","mono","mono-inverse","overlay-light","overlay-dark","ai","brand"],Oo=["ai","ai-50","ai-100","ai-200","ai-300","ai-400","ai-500","ai-600"],ac=[...Oo],Pa=["","auto","manual"],rt=["toggle","show","hide"],La=["inherit","xl","lg","md","sm","xs"],Do=["inherit","lg","md","sm"],tc=["inherit","md","sm"],_t=["inherit","wrap","truncate"],ur=["gutter","inline"],Gr=["hug","fill"],De=["horizontal","vertical"],la=(r,e)=>e[r]||r,ar=(r,e)=>r.filter(a=>e.includes(a)),Jr=(r,e)=>e.filter(a=>r.includes(a)),Se=(r,e)=>{r&&(typeof r=="function"?r(e):r.current=e)},be=(r,e=0,a=100)=>Math.min(Math.max(r,e),a),$e=(r,e)=>r!==e,Ma=(r,e)=>r===e,No=({a:r,b:e})=>$e(r?.top,e?.top)||$e(r?.left,e?.left)||$e(r?.width,e?.width)||$e(r?.height,e?.height);function ze(r){if(!(r instanceof Node))return null;const e=r.getRootNode();return e instanceof ShadowRoot||e instanceof Document?e:null}function Ee(r,e){if(typeof document>"u")return null;const a=e==null?document:ze(e)??document,t=a.getElementById(r);return t||(a!==document?document.getElementById(r):null)}var i=he(1463),u=he(9608);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=globalThis,at=et.ShadowRoot&&(et.ShadyCSS===void 0||et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wa=Symbol(),It=new WeakMap;class Fo{constructor(e,a,t){if(this._$cssResult$=!0,t!==wa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=a}get styleSheet(){let e=this.o;const a=this.t;if(at&&e===void 0){const t=a!==void 0&&a.length===1;t&&(e=It.get(a)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&It.set(a,e))}return e}toString(){return this.cssText}}const oc=r=>new Fo(typeof r=="string"?r:r+"",void 0,wa),s=(r,...e)=>{const a=r.length===1?r[0]:e.reduce(((t,o,n)=>t+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[n+1]),r[0]);return new Fo(a,r,wa)},Lr=(r,e)=>{if(at)r.adoptedStyleSheets=e.map((a=>a instanceof CSSStyleSheet?a:a.styleSheet));else for(const a of e){const t=document.createElement("style"),o=et.litNonce;o!==void 0&&t.setAttribute("nonce",o),t.textContent=a.cssText,r.appendChild(t)}},Ne=at?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let a="";for(const t of e.cssRules)a+=t.cssText;return oc(a)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ba,defineProperty:Ho,getOwnPropertyDescriptor:zu,getOwnPropertyNames:Eu,getOwnPropertySymbols:_u,getPrototypeOf:Iu}=Object,Vo=globalThis,os=Vo.trustedTypes,Tu=os?os.emptyScript:"",ju=Vo.reactiveElementPolyfillSupport,Tt=(r,e)=>r,nc={toAttribute(r,e){switch(e){case Boolean:r=r?Tu:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let a=r;switch(e){case Boolean:a=r!==null;break;case Number:a=r===null?null:Number(r);break;case Object:case Array:try{a=JSON.parse(r)}catch{a=null}}return a}},ns=(r,e)=>!Ba(r,e),cs={attribute:!0,type:String,converter:nc,reflect:!1,useDefault:!1,hasChanged:ns};Symbol.metadata??=Symbol("metadata"),Vo.litPropertyMetadata??=new WeakMap;class tt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,a=cs){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(e,a),!a.noAccessor){const t=Symbol(),o=this.getPropertyDescriptor(e,t,a);o!==void 0&&Ho(this.prototype,e,o)}}static getPropertyDescriptor(e,a,t){const{get:o,set:n}=zu(this.prototype,e)??{get(){return this[a]},set(c){this[a]=c}};return{get:o,set(c){const l=o?.call(this);n?.call(this,c),this.requestUpdate(e,l,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??cs}static _$Ei(){if(this.hasOwnProperty(Tt("elementProperties")))return;const e=Iu(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Tt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Tt("properties"))){const a=this.properties,t=[...Eu(a),..._u(a)];for(const o of t)this.createProperty(o,a[o])}const e=this[Symbol.metadata];if(e!==null){const a=litPropertyMetadata.get(e);if(a!==void 0)for(const[t,o]of a)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[a,t]of this.elementProperties){const o=this._$Eu(a,t);o!==void 0&&this._$Eh.set(o,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const a=[];if(Array.isArray(e)){const t=new Set(e.flat(1/0).reverse());for(const o of t)a.unshift(Ne(o))}else e!==void 0&&a.push(Ne(e));return a}static _$Eu(e,a){const t=a.attribute;return t===!1?void 0:typeof t=="string"?t:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,a=this.constructor.elementProperties;for(const t of a.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Lr(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,a,t){this._$AK(e,t)}_$ET(e,a){const t=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,t);if(o!==void 0&&t.reflect===!0){const n=(t.converter?.toAttribute!==void 0?t.converter:nc).toAttribute(a,t.type);this._$Em=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,a){const t=this.constructor,o=t._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const n=t.getPropertyOptions(o),c=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:nc;this._$Em=o;const l=c.fromAttribute(a,n.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(e,a,t){if(e!==void 0){const o=this.constructor,n=this[e];if(t??=o.getPropertyOptions(e),!((t.hasChanged??ns)(n,a)||t.useDefault&&t.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,t))))return;this.C(e,a,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,a,{useDefault:t,reflect:o,wrapped:n},c){t&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,c??a??this[e]),n!==!0||c!==void 0)||(this._$AL.has(e)||(this.hasUpdated||t||(a=void 0),this._$AL.set(e,a)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[o,n]of t){const{wrapped:c}=n,l=this[o];c!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let e=!1;const a=this._$AL;try{e=this.shouldUpdate(a),e?(this.willUpdate(a),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(a)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(a)}willUpdate(e){}_$AE(e){this._$EO?.forEach((a=>a.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((a=>this._$ET(a,this[a]))),this._$EM()}updated(e){}firstUpdated(e){}}tt.elementStyles=[],tt.shadowRootOptions={mode:"open"},tt[Tt("elementProperties")]=new Map,tt[Tt("finalized")]=new Map,ju?.({ReactiveElement:tt}),(Vo.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cc=globalThis,Uo=cc.trustedTypes,is=Uo?Uo.createPolicy("lit-html",{createHTML:r=>r}):void 0,ic="$lit$",da=`lit$${Math.random().toFixed(9).slice(2)}$`,sc="?"+da,Ru=`<${sc}>`,Oa=document,jt=()=>Oa.createComment(""),Rt=r=>r===null||typeof r!="object"&&typeof r!="function",lc=Array.isArray,ss=r=>lc(r)||typeof r?.[Symbol.iterator]=="function",dc=`[ 	
\f\r]`,Pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ls=/-->/g,ds=/>/g,Da=RegExp(`>|${dc}(?:([^\\s"'>=/]+)(${dc}*=${dc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),us=/'/g,hs=/"/g,gs=/^(?:script|style|textarea|title)$/i,uc=r=>(e,...a)=>({_$litType$:r,strings:e,values:a}),ub=uc(1),hb=uc(2),gb=uc(3),ot=Symbol.for("lit-noChange"),Fr=Symbol.for("lit-nothing"),vs=new WeakMap,Na=Oa.createTreeWalker(Oa,129);function ps(r,e){if(!lc(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return is!==void 0?is.createHTML(e):e}const fs=(r,e)=>{const a=r.length-1,t=[];let o,n=e===2?"<svg>":e===3?"<math>":"",c=Pt;for(let l=0;l<a;l++){const d=r[l];let h,g,f=-1,v=0;for(;v<d.length&&(c.lastIndex=v,g=c.exec(d),g!==null);)v=c.lastIndex,c===Pt?g[1]==="!--"?c=ls:g[1]!==void 0?c=ds:g[2]!==void 0?(gs.test(g[2])&&(o=RegExp("</"+g[2],"g")),c=Da):g[3]!==void 0&&(c=Da):c===Da?g[0]===">"?(c=o??Pt,f=-1):g[1]===void 0?f=-2:(f=c.lastIndex-g[2].length,h=g[1],c=g[3]===void 0?Da:g[3]==='"'?hs:us):c===hs||c===us?c=Da:c===ls||c===ds?c=Pt:(c=Da,o=void 0);const b=c===Da&&r[l+1].startsWith("/>")?" ":"";n+=c===Pt?d+Ru:f>=0?(t.push(h),d.slice(0,f)+ic+d.slice(f)+da+b):d+da+(f===-2?l:b)}return[ps(r,n+(r[a]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),t]};class Lt{constructor({strings:e,_$litType$:a},t){let o;this.parts=[];let n=0,c=0;const l=e.length-1,d=this.parts,[h,g]=fs(e,a);if(this.el=Lt.createElement(h,t),Na.currentNode=this.el.content,a===2||a===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(o=Na.nextNode())!==null&&d.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const f of o.getAttributeNames())if(f.endsWith(ic)){const v=g[c++],b=o.getAttribute(f).split(da),m=/([.?@])?(.*)/.exec(v);d.push({type:1,index:n,name:m[2],strings:b,ctor:m[1]==="."?bs:m[1]==="?"?$s:m[1]==="@"?ys:Mt}),o.removeAttribute(f)}else f.startsWith(da)&&(d.push({type:6,index:n}),o.removeAttribute(f));if(gs.test(o.tagName)){const f=o.textContent.split(da),v=f.length-1;if(v>0){o.textContent=Uo?Uo.emptyScript:"";for(let b=0;b<v;b++)o.append(f[b],jt()),Na.nextNode(),d.push({type:2,index:++n});o.append(f[v],jt())}}}else if(o.nodeType===8)if(o.data===sc)d.push({type:2,index:n});else{let f=-1;for(;(f=o.data.indexOf(da,f+1))!==-1;)d.push({type:7,index:n}),f+=da.length-1}n++}}static createElement(e,a){const t=Oa.createElement("template");return t.innerHTML=e,t}}function Fa(r,e,a=r,t){if(e===ot)return e;let o=t!==void 0?a._$Co?.[t]:a._$Cl;const n=Rt(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),n===void 0?o=void 0:(o=new n(r),o._$AT(r,a,t)),t!==void 0?(a._$Co??=[])[t]=o:a._$Cl=o),o!==void 0&&(e=Fa(r,o._$AS(r,e.values),o,t)),e}class ms{constructor(e,a){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:a},parts:t}=this._$AD,o=(e?.creationScope??Oa).importNode(a,!0);Na.currentNode=o;let n=Na.nextNode(),c=0,l=0,d=t[0];for(;d!==void 0;){if(c===d.index){let h;d.type===2?h=new nt(n,n.nextSibling,this,e):d.type===1?h=new d.ctor(n,d.name,d.strings,this,e):d.type===6&&(h=new xs(n,this,e)),this._$AV.push(h),d=t[++l]}c!==d?.index&&(n=Na.nextNode(),c++)}return Na.currentNode=Oa,o}p(e){let a=0;for(const t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(e,t,a),a+=t.strings.length-2):t._$AI(e[a])),a++}}class nt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,a,t,o){this.type=2,this._$AH=Fr,this._$AN=void 0,this._$AA=e,this._$AB=a,this._$AM=t,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&e?.nodeType===11&&(e=a.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,a=this){e=Fa(this,e,a),Rt(e)?e===Fr||e==null||e===""?(this._$AH!==Fr&&this._$AR(),this._$AH=Fr):e!==this._$AH&&e!==ot&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ss(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Fr&&Rt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Oa.createTextNode(e)),this._$AH=e}$(e){const{values:a,_$litType$:t}=e,o=typeof t=="number"?this._$AC(e):(t.el===void 0&&(t.el=Lt.createElement(ps(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===o)this._$AH.p(a);else{const n=new ms(o,this),c=n.u(this.options);n.p(a),this.T(c),this._$AH=n}}_$AC(e){let a=vs.get(e.strings);return a===void 0&&vs.set(e.strings,a=new Lt(e)),a}k(e){lc(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let t,o=0;for(const n of e)o===a.length?a.push(t=new nt(this.O(jt()),this.O(jt()),this,this.options)):t=a[o],t._$AI(n),o++;o<a.length&&(this._$AR(t&&t._$AB.nextSibling,o),a.length=o)}_$AR(e=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Mt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,a,t,o,n){this.type=1,this._$AH=Fr,this._$AN=void 0,this.element=e,this.name=a,this._$AM=o,this.options=n,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=Fr}_$AI(e,a=this,t,o){const n=this.strings;let c=!1;if(n===void 0)e=Fa(this,e,a,0),c=!Rt(e)||e!==this._$AH&&e!==ot,c&&(this._$AH=e);else{const l=e;let d,h;for(e=n[0],d=0;d<n.length-1;d++)h=Fa(this,l[t+d],a,d),h===ot&&(h=this._$AH[d]),c||=!Rt(h)||h!==this._$AH[d],h===Fr?e=Fr:e!==Fr&&(e+=(h??"")+n[d+1]),this._$AH[d]=h}c&&!o&&this.j(e)}j(e){e===Fr?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class bs extends Mt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Fr?void 0:e}}class $s extends Mt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Fr)}}class ys extends Mt{constructor(e,a,t,o,n){super(e,a,t,o,n),this.type=5}_$AI(e,a=this){if((e=Fa(this,e,a,0)??Fr)===ot)return;const t=this._$AH,o=e===Fr&&t!==Fr||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,n=e!==Fr&&(t===Fr||o);o&&this.element.removeEventListener(this.name,this,t),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class xs{constructor(e,a,t){this.element=e,this.type=6,this._$AN=void 0,this._$AM=a,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(e){Fa(this,e)}}const vb={M:ic,P:da,A:sc,C:1,L:fs,R:ms,D:ss,V:Fa,I:nt,H:Mt,N:$s,U:ys,B:bs,F:xs},Pu=cc.litHtmlPolyfillSupport;Pu?.(Lt,nt),(cc.litHtmlVersions??=[]).push("3.3.1");const Lu=(r,e,a)=>{const t=a?.renderBefore??e;let o=t._$litPart$;if(o===void 0){const n=a?.renderBefore??null;t._$litPart$=o=new nt(e.insertBefore(jt(),n),n,void 0,a??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hc=globalThis;class Ko extends tt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Lu(a,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ot}}Ko._$litElement$=!0,Ko.finalized=!0,hc.litElementHydrateSupport?.({LitElement:Ko});const Mu=hc.litElementPolyfillSupport;Mu?.({LitElement:Ko});const pb={_$AK:(r,e,a)=>{r._$AK(e,a)},_$AL:r=>r._$AL};(hc.litElementVersions??=[]).push("4.2.1");const Bu=`@charset "UTF-8";
@layer arc-theme, arc-components, arc-utils;
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-color-mono-black: #000000;
    --arc-color-mono-white: #ffffff;
    --arc-color-light-neutral-0: #ffffff;
    --arc-color-light-neutral-50: #f7f7f7;
    --arc-color-light-neutral-100: #ededed;
    --arc-color-light-neutral-200: #e6e6e6;
    --arc-color-light-neutral-300: #c6c6c6;
    --arc-color-light-neutral-400: #b0b0b0;
    --arc-color-light-neutral-500: #9b9b9b;
    --arc-color-light-neutral-600: #737373;
    --arc-color-light-neutral-700: #636363;
    --arc-color-light-neutral-800: #4b4b4b;
    --arc-color-light-neutral-900: #212121;
    --arc-color-light-neutral-1000: #000000;
    --arc-color-light-blue-50: #f0fbff;
    --arc-color-light-blue-100: #ddf4fd;
    --arc-color-light-blue-200: #99e4ff;
    --arc-color-light-blue-300: #53d1ff;
    --arc-color-light-blue-400: #00aff0;
    --arc-color-light-blue-500: #0098eb;
    --arc-color-light-blue-600: #0075cf;
    --arc-color-light-blue-700: #0065b2;
    --arc-color-light-blue-800: #005394;
    --arc-color-light-blue-900: #00335b;
    --arc-color-light-purple-50: #f1f0ff;
    --arc-color-light-purple-100: #e9e7fe;
    --arc-color-light-purple-200: #b2a8ff;
    --arc-color-light-purple-300: #9789fa;
    --arc-color-light-purple-400: #8676ff;
    --arc-color-light-purple-500: #7565f1;
    --arc-color-light-purple-600: #4e3bd5;
    --arc-color-light-purple-700: #3120b4;
    --arc-color-light-purple-800: #16068e;
    --arc-color-light-purple-900: #0c0064;
    --arc-color-light-mint-50: #f0fff9;
    --arc-color-light-mint-100: #d9fdef;
    --arc-color-light-mint-200: #9df1d1;
    --arc-color-light-mint-300: #6de3b6;
    --arc-color-light-mint-400: #44bf90;
    --arc-color-light-mint-500: #0f9f68;
    --arc-color-light-mint-600: #008451;
    --arc-color-light-mint-700: #006e44;
    --arc-color-light-mint-800: #005937;
    --arc-color-light-mint-900: #00442a;
    --arc-color-light-orange-50: #fff6f0;
    --arc-color-light-orange-100: #fdeadd;
    --arc-color-light-orange-200: #fac39e;
    --arc-color-light-orange-300: #fd9e5e;
    --arc-color-light-orange-400: #ff6602;
    --arc-color-light-orange-500: #e95d00;
    --arc-color-light-orange-600: #c24e00;
    --arc-color-light-orange-700: #a84300;
    --arc-color-light-orange-800: #933b00;
    --arc-color-light-orange-900: #662900;
    --arc-color-light-maroon-50: #ffeff3;
    --arc-color-light-maroon-100: #fedde5;
    --arc-color-light-maroon-200: #ffa8be;
    --arc-color-light-maroon-300: #fe8fab;
    --arc-color-light-maroon-400: #f27195;
    --arc-color-light-maroon-500: #e05580;
    --arc-color-light-maroon-600: #c73868;
    --arc-color-light-maroon-700: #aa1a53;
    --arc-color-light-maroon-800: #841a42;
    --arc-color-light-maroon-900: #5d132d;
    --arc-color-light-green-50: #f6fff0;
    --arc-color-light-green-100: #e7fdd9;
    --arc-color-light-green-200: #bfeea0;
    --arc-color-light-green-300: #8dd65c;
    --arc-color-light-green-400: #74bb44;
    --arc-color-light-green-500: #57a225;
    --arc-color-light-green-600: #358201;
    --arc-color-light-green-700: #2c6d00;
    --arc-color-light-green-800: #235800;
    --arc-color-light-green-900: #1b4300;
    --arc-color-light-yellow-50: #fffaf0;
    --arc-color-light-yellow-100: #fdf2dd;
    --arc-color-light-yellow-200: #ffdb94;
    --arc-color-light-yellow-300: #ffc960;
    --arc-color-light-yellow-400: #ffb629;
    --arc-color-light-yellow-500: #eb9b00;
    --arc-color-light-yellow-600: #9e6900;
    --arc-color-light-yellow-700: #805400;
    --arc-color-light-yellow-800: #604000;
    --arc-color-light-yellow-900: #3e2900;
    --arc-color-light-red-50: #fff0f0;
    --arc-color-light-red-100: #fde2e2;
    --arc-color-light-red-200: #ff9999;
    --arc-color-light-red-300: #ff6161;
    --arc-color-light-red-400: #ff0000;
    --arc-color-light-red-500: #eb0000;
    --arc-color-light-red-600: #b80000;
    --arc-color-light-red-700: #990000;
    --arc-color-light-red-800: #7a0000;
    --arc-color-light-red-900: #520000;
    --arc-color-dark-neutral-0: #000000;
    --arc-color-dark-neutral-50: #1c1c1c;
    --arc-color-dark-neutral-100: #2a2a2a;
    --arc-color-dark-neutral-200: #3d3d3d;
    --arc-color-dark-neutral-300: #515151;
    --arc-color-dark-neutral-400: #666666;
    --arc-color-dark-neutral-500: #7b7b7b;
    --arc-color-dark-neutral-600: #939393;
    --arc-color-dark-neutral-700: #aeaeae;
    --arc-color-dark-neutral-800: #d0d0d0;
    --arc-color-dark-neutral-900: #ededed;
    --arc-color-dark-neutral-1000: #ffffff;
    --arc-color-dark-blue-50: #002542;
    --arc-color-dark-blue-100: #093a63;
    --arc-color-dark-blue-200: #0f4d7a;
    --arc-color-dark-blue-300: #146192;
    --arc-color-dark-blue-400: #1974aa;
    --arc-color-dark-blue-500: #1e88c7;
    --arc-color-dark-blue-600: #0ca1f7;
    --arc-color-dark-blue-700: #3ab1f5;
    --arc-color-dark-blue-800: #70cbfa;
    --arc-color-dark-blue-900: #b9e6fd;
    --arc-color-dark-purple-50: #161041;
    --arc-color-dark-purple-100: #221c5a;
    --arc-color-dark-purple-200: #2d2773;
    --arc-color-dark-purple-300: #39328c;
    --arc-color-dark-purple-400: #463da6;
    --arc-color-dark-purple-500: #5449c0;
    --arc-color-dark-purple-600: #6556da;
    --arc-color-dark-purple-700: #7a6ef0;
    --arc-color-dark-purple-800: #a193f9;
    --arc-color-dark-purple-900: #d3c9ff;
    --arc-color-dark-mint-50: #04291b;
    --arc-color-dark-mint-100: #0b3425;
    --arc-color-dark-mint-200: #134434;
    --arc-color-dark-mint-300: #1b5444;
    --arc-color-dark-mint-400: #246554;
    --arc-color-dark-mint-500: #2f7766;
    --arc-color-dark-mint-600: #14b290;
    --arc-color-dark-mint-700: #52a895;
    --arc-color-dark-mint-800: #84d0bd;
    --arc-color-dark-mint-900: #d6fff2;
    --arc-color-dark-orange-50: #251104;
    --arc-color-dark-orange-100: #3a1a08;
    --arc-color-dark-orange-200: #50240d;
    --arc-color-dark-orange-300: #672f14;
    --arc-color-dark-orange-400: #7f3c1d;
    --arc-color-dark-orange-500: #984b27;
    --arc-color-dark-orange-600: #d55913;
    --arc-color-dark-orange-700: #d1764d;
    --arc-color-dark-orange-800: #eba883;
    --arc-color-dark-orange-900: #ffdcc9;
    --arc-color-dark-maroon-50: #2a0914;
    --arc-color-dark-maroon-100: #40101f;
    --arc-color-dark-maroon-200: #56162b;
    --arc-color-dark-maroon-300: #6c1e39;
    --arc-color-dark-maroon-400: #822647;
    --arc-color-dark-maroon-500: #993057;
    --arc-color-dark-maroon-600: #b13d69;
    --arc-color-dark-maroon-700: #d05886;
    --arc-color-dark-maroon-800: #e891b5;
    --arc-color-dark-maroon-900: #ffd6e7;
    --arc-color-dark-green-50: #132904;
    --arc-color-dark-green-100: #1b340a;
    --arc-color-dark-green-200: #264411;
    --arc-color-dark-green-300: #31551a;
    --arc-color-dark-green-400: #3e6625;
    --arc-color-dark-green-500: #4c7831;
    --arc-color-dark-green-600: #55a722;
    --arc-color-dark-green-700: #72a65b;
    --arc-color-dark-green-800: #a0d092;
    --arc-color-dark-green-900: #e2fcd9;
    --arc-color-dark-yellow-50: #2e2005;
    --arc-color-dark-yellow-100: #3a2907;
    --arc-color-dark-yellow-200: #51390d;
    --arc-color-dark-yellow-300: #684a14;
    --arc-color-dark-yellow-400: #7f5c1c;
    --arc-color-dark-yellow-500: #976f25;
    --arc-color-dark-yellow-600: #d99d0f;
    --arc-color-dark-yellow-700: #d1a049;
    --arc-color-dark-yellow-800: #eccc86;
    --arc-color-dark-yellow-900: #fff7d9;
    --arc-color-dark-red-50: #250404;
    --arc-color-dark-red-100: #3a0809;
    --arc-color-dark-red-200: #500d0e;
    --arc-color-dark-red-300: #671416;
    --arc-color-dark-red-400: #7e1d1f;
    --arc-color-dark-red-500: #97292b;
    --arc-color-dark-red-600: #d4423f;
    --arc-color-dark-red-700: #d86466;
    --arc-color-dark-red-800: #e88987;
    --arc-color-dark-red-900: #ffd6d6;
    --arc-color-alpha-black-0: rgb(0 0 0 / 0%);
    --arc-color-alpha-black-3: rgb(0 0 0 / 3%);
    --arc-color-alpha-black-5: rgb(0 0 0 / 5%);
    --arc-color-alpha-black-7: rgb(0 0 0 / 7%);
    --arc-color-alpha-black-10: rgb(0 0 0 / 10%);
    --arc-color-alpha-black-15: rgb(0 0 0 / 15%);
    --arc-color-alpha-black-20: rgb(0 0 0 / 20%);
    --arc-color-alpha-black-25: rgb(0 0 0 / 25%);
    --arc-color-alpha-black-30: rgb(0 0 0 / 30%);
    --arc-color-alpha-black-40: rgb(0 0 0 / 40%);
    --arc-color-alpha-black-50: rgb(0 0 0 / 50%);
    --arc-color-alpha-black-60: rgb(0 0 0 / 60%);
    --arc-color-alpha-black-70: rgb(0 0 0 / 70%);
    --arc-color-alpha-black-80: rgb(0 0 0 / 80%);
    --arc-color-alpha-black-90: rgb(0 0 0 / 90%);
    --arc-color-alpha-black-95: rgb(0 0 0 / 95%);
    --arc-color-alpha-black-100: rgb(0 0 0 / 100%);
    --arc-color-alpha-white-0: rgb(255 255 255 / 0%);
    --arc-color-alpha-white-3: rgb(255 255 255 / 3%);
    --arc-color-alpha-white-5: rgb(255 255 255 / 5%);
    --arc-color-alpha-white-7: rgb(255 255 255 / 7%);
    --arc-color-alpha-white-10: rgb(255 255 255 / 10%);
    --arc-color-alpha-white-15: rgb(255 255 255 / 15%);
    --arc-color-alpha-white-20: rgb(255 255 255 / 20%);
    --arc-color-alpha-white-25: rgb(255 255 255 / 25%);
    --arc-color-alpha-white-30: rgb(255 255 255 / 30%);
    --arc-color-alpha-white-40: rgb(255 255 255 / 40%);
    --arc-color-alpha-white-50: rgb(255 255 255 / 50%);
    --arc-color-alpha-white-60: rgb(255 255 255 / 60%);
    --arc-color-alpha-white-70: rgb(255 255 255 / 70%);
    --arc-color-alpha-white-80: rgb(255 255 255 / 80%);
    --arc-color-alpha-white-90: rgb(255 255 255 / 90%);
    --arc-color-alpha-white-95: rgb(255 255 255 / 95%);
    --arc-color-alpha-white-100: rgb(255 255 255 / 100%);
    --arc-gradient-ai-50: linear-gradient(60deg, light-dark(#fbf2ff, #210125), light-dark(#f4fbff, #00223b));
    --arc-gradient-ai-100: linear-gradient(60deg, light-dark(#efccff, #540160), light-dark(#d2f1fe, #02497d));
    --arc-gradient-ai-200: linear-gradient(60deg, light-dark(#9c15ff, #ad44cb), light-dark(#1eb4fb, #169cfe));
    --arc-gradient-ai-300: linear-gradient(60deg, light-dark(#680278, #ad44cb), light-dark(#0179d0, #71bdfe));
    --arc-gradient-ai-400: linear-gradient(60deg, light-dark(#5d3668, #c778de), light-dark(#36648c, #84daff));
    --arc-gradient-ai-500: linear-gradient(60deg, light-dark(#37003f, #e3a7ff), light-dark(#004273, #b7eaff));
    --arc-gradient-ai-600: linear-gradient(60deg, light-dark(#27002c, #f9ebff), light-dark(#012a48, #c2edff));
    --arc-color-overlay-subtle: light-dark(var(--arc-color-alpha-white-70), var(--arc-color-alpha-black-70));
    --arc-color-overlay-stark: light-dark(var(--arc-color-alpha-black-50), var(--arc-color-alpha-black-50));
    --arc-color-shadow-sm: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-black-60));
    --arc-color-shadow-md: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-50));
    --arc-color-shadow-lg: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-40));
    --arc-color-shadow-xl: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-40));
    --arc-color-bg-primary: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-100));
    --arc-color-bg-secondary: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-bg-tertiary: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-300));
    --arc-color-bg-mono-inverse: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-mono: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-bg-disabled: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-subtle: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-bg-hover-default: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-stark: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-bg-selected-subtle: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-selected-default: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-200));
    --arc-color-bg-selected-stark: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-400));
    --arc-color-bg-theme-muted: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-5));
    --arc-color-bg-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-bg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-bg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-bg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-success-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-success-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-success-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-warning-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-warning-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-warning-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-critical-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-critical-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-critical-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-bg-info-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-info-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-info-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-brand-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-brand-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-brand-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-neutral-muted: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-neutral-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-25));
    --arc-color-bg-neutral-mid: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-bg-neutral-stark: light-dark(var(--arc-color-light-neutral-600), var(--arc-color-dark-neutral-600));
    --arc-color-bg-neutral-heavy: light-dark(var(--arc-color-light-neutral-800), var(--arc-color-dark-neutral-800));
    --arc-color-bg-orange-muted: light-dark(var(--arc-color-light-orange-50), var(--arc-color-dark-orange-50));
    --arc-color-bg-orange-subtle: light-dark(var(--arc-color-light-orange-100), var(--arc-color-dark-orange-100));
    --arc-color-bg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-bg-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-bg-orange-heavy: light-dark(var(--arc-color-light-orange-800), var(--arc-color-dark-orange-800));
    --arc-color-bg-mint-muted: light-dark(var(--arc-color-light-mint-50), var(--arc-color-dark-mint-50));
    --arc-color-bg-mint-subtle: light-dark(var(--arc-color-light-mint-100), var(--arc-color-dark-mint-100));
    --arc-color-bg-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-bg-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-bg-mint-heavy: light-dark(var(--arc-color-light-mint-800), var(--arc-color-dark-mint-800));
    --arc-color-bg-maroon-muted: light-dark(var(--arc-color-light-maroon-50), var(--arc-color-dark-maroon-50));
    --arc-color-bg-maroon-subtle: light-dark(var(--arc-color-light-maroon-100), var(--arc-color-dark-maroon-100));
    --arc-color-bg-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-bg-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-700));
    --arc-color-bg-maroon-heavy: light-dark(var(--arc-color-light-maroon-800), var(--arc-color-dark-maroon-800));
    --arc-color-bg-blue-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-blue-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-blue-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-purple-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-purple-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-purple-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-green-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-green-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-green-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-yellow-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-yellow-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-yellow-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-red-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-red-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-red-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-fg-primary: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-secondary: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-700));
    --arc-color-fg-on-hover-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-disabled: light-dark(var(--arc-color-alpha-black-40), var(--arc-color-alpha-white-40));
    --arc-color-fg-on-selected-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-mid: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-800));
    --arc-color-fg-on-theme-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-theme-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-mid: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono-inverse: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-success-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-warning-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-warning-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-critical-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-info-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-brand-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-orange-subtle: light-dark(var(--arc-color-light-orange-300), var(--arc-color-dark-orange-400));
    --arc-color-fg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-600));
    --arc-color-fg-orange-stark: light-dark(var(--arc-color-light-orange-700), var(--arc-color-dark-orange-800));
    --arc-color-fg-mint-subtle: light-dark(var(--arc-color-light-mint-300), var(--arc-color-dark-mint-400));
    --arc-color-fg-mint-mid: light-dark(var(--arc-color-light-mint-500), var(--arc-color-dark-mint-600));
    --arc-color-fg-mint-stark: light-dark(var(--arc-color-light-mint-700), var(--arc-color-dark-mint-800));
    --arc-color-fg-maroon-subtle: light-dark(var(--arc-color-light-maroon-300), var(--arc-color-dark-maroon-400));
    --arc-color-fg-maroon-mid: light-dark(var(--arc-color-light-maroon-500), var(--arc-color-dark-maroon-600));
    --arc-color-fg-maroon-stark: light-dark(var(--arc-color-light-maroon-700), var(--arc-color-dark-maroon-800));
    --arc-color-fg-neutral-subtle: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-fg-neutral-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-fg-neutral-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-800));
    --arc-color-fg-blue-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-purple-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-green-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-yellow-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-yellow-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-red-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-theme-muted: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-10));
    --arc-color-fg-theme-subtle: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-white-25));
    --arc-color-fg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-fg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-fg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-5));
    --arc-color-border-subtle: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-border-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-20));
    --arc-color-border-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-30));
    --arc-color-border-on-stark: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-border-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-selected: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-focus: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-success-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-warning-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-critical-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-info-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-brand-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-border-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-orange-subtle: light-dark(var(--arc-color-light-orange-200), var(--arc-color-dark-orange-200));
    --arc-color-border-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-border-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-border-mint-subtle: light-dark(var(--arc-color-light-mint-200), var(--arc-color-dark-mint-200));
    --arc-color-border-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-border-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-border-maroon-subtle: light-dark(var(--arc-color-light-maroon-200), var(--arc-color-dark-maroon-200));
    --arc-color-border-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-border-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-600));
    --arc-color-border-blue-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-border-purple-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-green-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-yellow-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-red-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-disabled: light-dark(var(--arc-color-alpha-black-20), var(--arc-color-alpha-white-20));
    --arc-color-border-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-border-theme-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-25));
    --arc-color-border-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-alpha-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-alpha-subtle: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-alpha-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-alpha-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-60));
    --arc-color-alpha-heavy: light-dark(var(--arc-color-alpha-black-60), var(--arc-color-alpha-white-70));
  }
}
/*
  A NOTE ON USING ARC TOKENS (CSS VARIABLES) --------------------------\u2022

  Tokens with \`--arc-internal-\` prefixes are internal only
    - NOT FOR CONSUMER USE
    - These are System/Internal things and are not intended to be
      access or modified by consumers of the design system.
    - Please reach out to #design-system in Slack for guidance or help,
      or to request something new.


  OVERRIDES, BE CAUTIOUS \u2022 These are available for acute adjustments,
                           but not needed in most cases.
  ---------------------------------------------------------------------\u2022
  --arc-font-size-base          \u2022 Override if your app's \`rem\` size
                                  isn't effectively 16px. For instance,
                                  set to 1 if your \`rem\` is 10px.

  --arc-font-variation-settings \u2022 Research \`font-variation-settings\`
                                  before using this token.

  --arc-font-size-mono          \u2022 Controls size of monospace fonts.
  --arc-line-height-title       \u2022 Various text adjustment overrides...
  --arc-line-height-heading
  --arc-line-height-subheading
  --arc-line-height-body
  --arc-line-height-mono
  --arc-letter-spacing-title
  --arc-letter-spacing-heading
  ---------------------------------------------------------------------\u2022
*/
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-font-size: var(--arc-font-size-base, 0.625);
    --arc-internal-font-body: Inter, system-ui, sans-serif;
    --arc-internal-font-expressive: "GT Walsheim", system-ui, sans-serif;
    --arc-internal-font-mono: "Roboto Mono", monospace;
    --arc-internal-font-size-mono: 0.875em;
    --arc-internal-letter-spacing: -0.015em;
    --arc-internal-font-vs: "opsz" 24;
    --arc-font-family-expressive: var(--arc-internal-font-expressive);
    --arc-font-family-title: var(--arc-internal-font-expressive);
    --arc-font-family-heading: var(--arc-internal-font-expressive);
    --arc-font-family-subheading: var(--arc-internal-font-body);
    --arc-font-family-body: var(--arc-internal-font-body);
    --arc-font-family-mono: var(--arc-internal-font-mono);
    --arc-line-height-tight: 1.2;
    --arc-line-height-standard: 1.4;
    --arc-line-height-loose: 1.6;
    --arc-line-height-title: var(--arc-line-height-tight);
    --arc-line-height-heading: var(--arc-line-height-tight);
    --arc-line-height-subheading: var(--arc-line-height-tight);
    --arc-line-height-body: var(--arc-line-height-standard);
    --arc-line-height-mono: var(--arc-line-height-standard);
    --arc-letter-spacing-heading: var(--arc-internal-letter-spacing);
    --arc-letter-spacing-title: var(--arc-internal-letter-spacing);
    --arc-font-weight-400: 400;
    --arc-font-weight-500: 500;
    --arc-font-weight-600: 600;
    --arc-font-weight-title: var(--arc-font-weight-600);
    --arc-font-weight-heading: var(--arc-font-weight-600);
    --arc-font-weight-subheading: var(--arc-font-weight-600);
    --arc-font-weight-bold: var(--arc-font-weight-600);
    --arc-font-weight-body: var(--arc-font-weight-400);
    --arc-font-weight-normal: var(--arc-font-weight-400);
    --arc-font-size-08: calc(0.8rem * var(--arc-internal-font-size));
    --arc-font-size-10: calc(1rem * var(--arc-internal-font-size));
    --arc-font-size-12: calc(1.2rem * var(--arc-internal-font-size));
    --arc-font-size-14: calc(1.4rem * var(--arc-internal-font-size));
    --arc-font-size-16: calc(1.6rem * var(--arc-internal-font-size));
    --arc-font-size-18: calc(1.8rem * var(--arc-internal-font-size));
    --arc-font-size-20: calc(2rem * var(--arc-internal-font-size));
    --arc-font-size-24: calc(2.4rem * var(--arc-internal-font-size));
    --arc-font-size-28: calc(2.8rem * var(--arc-internal-font-size));
    --arc-font-size-32: calc(3.2rem * var(--arc-internal-font-size));
    --arc-font-size-40: calc(4rem * var(--arc-internal-font-size));
    --arc-font-size-title-lg: var(--arc-font-size-40);
    --arc-font-size-title-md: var(--arc-font-size-32);
    --arc-font-size-title-sm: var(--arc-font-size-28);
    --arc-font-size-heading-lg: var(--arc-font-size-24);
    --arc-font-size-heading-md: var(--arc-font-size-20);
    --arc-font-size-heading-sm: var(--arc-font-size-18);
    --arc-font-size-subheading-lg: var(--arc-font-size-16);
    --arc-font-size-subheading-md: var(--arc-font-size-14);
    --arc-font-size-subheading-sm: var(--arc-font-size-12);
    --arc-font-size-body-lg: var(--arc-font-size-16);
    --arc-font-size-body-md: var(--arc-font-size-14);
    --arc-font-size-body-sm: var(--arc-font-size-12);
    --arc-font-size-body-xs: var(--arc-font-size-10);
    --arc-font-size-mono-lg: var(--arc-font-size-14);
    --arc-font-size-mono-md: var(--arc-font-size-12);
    --arc-font-size-mono-sm: var(--arc-font-size-10);
  }
  [data-arc-theme~=font-family] {
    font-family: var(--arc-font-family-body);
    font-size: var(--arc-font-size-16);
    font-weight: var(--arc-font-weight-body);
    line-height: var(--arc-line-height-body, var(--arc-line-height-standard));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1, h2, h3) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  [data-arc-theme~=font-family] :where(h4, h5, h6) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1) {
    font-size: var(--arc-font-size-24);
  }
  [data-arc-theme~=font-family] :where(h2) {
    font-size: var(--arc-font-size-20);
  }
  [data-arc-theme~=font-family] :where(h3) {
    font-size: var(--arc-font-size-18);
  }
  [data-arc-theme~=font-family] :where(h4) {
    font-size: var(--arc-font-size-16);
  }
  [data-arc-theme~=font-family] :where(h5) {
    font-size: var(--arc-font-size-14);
  }
  [data-arc-theme~=font-family] :where(h6) {
    font-size: var(--arc-font-size-12);
  }
  [data-arc-theme~=font-family] :where(b, strong) {
    font-weight: var(--arc-font-weight-600);
  }
  [data-arc-theme~=font-family] :where(i, em) {
    font-style: italic;
  }
  [data-arc-theme~=font-family] :where(u) {
    text-decoration: underline;
  }
  [data-arc-theme~=font-family] :where(pre, code) {
    font-family: var(--arc-font-family-mono);
    font-size: var(--arc-font-size-mono, var(--arc-internal-font-size-mono));
  }
}
@layer arc-utils {
  .arc-font-title-lg {
    font-size: var(--arc-font-size-40);
  }
  .arc-font-title-md {
    font-size: var(--arc-font-size-32);
  }
  .arc-font-title-sm {
    font-size: var(--arc-font-size-28);
  }
  :is(.arc-font-title, .arc-font-title-lg, .arc-font-title-md, .arc-font-title-sm) {
    font-family: var(--arc-font-family-title);
    font-weight: var(--arc-font-weight-title);
    letter-spacing: var(--arc-letter-spacing-title);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-title));
  }
  .arc-font-heading-lg {
    font-size: var(--arc-font-size-24);
  }
  .arc-font-heading-md {
    font-size: var(--arc-font-size-20);
  }
  .arc-font-heading-sm {
    font-size: var(--arc-font-size-18);
  }
  :is(.arc-font-heading, .arc-font-heading-lg, .arc-font-heading-md, .arc-font-heading-sm) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  .arc-font-subheading-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-subheading-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-subheading-sm {
    font-size: var(--arc-font-size-12);
  }
  :is(.arc-font-subheading, .arc-font-subheading-lg, .arc-font-subheading-md, .arc-font-subheading-sm) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-body-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-body-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-body-sm {
    font-size: var(--arc-font-size-12);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body-xs) {
    font-size: var(--arc-font-size-10);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body, .arc-font-body-lg, .arc-font-body-md, .arc-font-body-sm) {
    font-family: var(--arc-font-family-body);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-body));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-mono-lg {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-mono-md {
    font-size: var(--arc-font-size-12);
  }
  .arc-font-mono-sm {
    font-size: var(--arc-font-size-10);
  }
  :is(.arc-font-mono, .arc-font-mono-lg, .arc-font-mono-md, .arc-font-mono-sm) {
    font-family: var(--arc-font-family-mono);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-mono));
  }
  .arc-line-height-loose {
    --arc-internal-line-height: var(--arc-line-height-loose);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-standard {
    --arc-internal-line-height: var(--arc-line-height-standard);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-tight {
    --arc-internal-line-height: var(--arc-line-height-tight);
    line-height: var(--arc-internal-line-height);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-space: 0.8rem * var(--arc-internal-font-size);
    --arc-internal-size: 0.8rem * var(--arc-internal-font-size);
    --arc-space-0: 0;
    --arc-space-0-25: calc(0.25 * var(--arc-internal-space));
    --arc-space-0-5: calc(0.5 * var(--arc-internal-space));
    --arc-space-0-75: calc(0.75 * var(--arc-internal-space));
    --arc-space-1: calc(var(--arc-internal-space));
    --arc-space-1-25: calc(1.25 * var(--arc-internal-space));
    --arc-space-1-5: calc(1.5 * var(--arc-internal-space));
    --arc-space-2: calc(2 * var(--arc-internal-space));
    --arc-space-2-5: calc(2.5 * var(--arc-internal-space));
    --arc-space-3: calc(3 * var(--arc-internal-space));
    --arc-space-4: calc(4 * var(--arc-internal-space));
    --arc-space-5: calc(5 * var(--arc-internal-space));
    --arc-space-6: calc(6 * var(--arc-internal-space));
    --arc-space-7: calc(7 * var(--arc-internal-space));
    --arc-space-8: calc(8 * var(--arc-internal-space));
    --arc-space-9: calc(9 * var(--arc-internal-space));
    --arc-space-10: calc(10 * var(--arc-internal-space));
    --arc-space-11: calc(11 * var(--arc-internal-space));
    --arc-space-12: calc(12 * var(--arc-internal-space));
    --arc-size-0: 0;
    --arc-size-0-25: calc(0.25 * var(--arc-internal-size));
    --arc-size-0-5: calc(0.5 * var(--arc-internal-size));
    --arc-size-0-75: calc(0.75 * var(--arc-internal-size));
    --arc-size-1: calc(var(--arc-internal-size));
    --arc-size-1-25: calc(1.25 * var(--arc-internal-size));
    --arc-size-1-5: calc(1.5 * var(--arc-internal-size));
    --arc-size-1-75: calc(1.75 * var(--arc-internal-size));
    --arc-size-2: calc(2 * var(--arc-internal-size));
    --arc-size-2-25: calc(2.25 * var(--arc-internal-size));
    --arc-size-2-5: calc(2.5 * var(--arc-internal-size));
    --arc-size-2-75: calc(2.75 * var(--arc-internal-size));
    --arc-size-3: calc(3 * var(--arc-internal-size));
    --arc-size-3-25: calc(3.25 * var(--arc-internal-size));
    --arc-size-3-5: calc(3.5 * var(--arc-internal-size));
    --arc-size-3-75: calc(3.75 * var(--arc-internal-size));
    --arc-size-4: calc(4 * var(--arc-internal-size));
    --arc-size-4-25: calc(4.25 * var(--arc-internal-size));
    --arc-size-4-5: calc(4.5 * var(--arc-internal-size));
    --arc-size-4-75: calc(4.75 * var(--arc-internal-size));
    --arc-size-5: calc(5 * var(--arc-internal-size));
    --arc-size-6: calc(6 * var(--arc-internal-size));
    --arc-size-7: calc(7 * var(--arc-internal-size));
    --arc-size-8: calc(8 * var(--arc-internal-size));
    --arc-size-9: calc(9 * var(--arc-internal-size));
    --arc-size-10: calc(10 * var(--arc-internal-size));
    --arc-size-11: calc(11 * var(--arc-internal-size));
    --arc-size-12: calc(12 * var(--arc-internal-size));
    --arc-size-13: calc(13 * var(--arc-internal-size));
    --arc-size-14: calc(14 * var(--arc-internal-size));
    --arc-size-15: calc(15 * var(--arc-internal-size));
    --arc-size-16: calc(16 * var(--arc-internal-size));
    --arc-size-17: calc(17 * var(--arc-internal-size));
    --arc-size-18: calc(18 * var(--arc-internal-size));
    --arc-size-19: calc(19 * var(--arc-internal-size));
    --arc-size-20: calc(20 * var(--arc-internal-size));
    --arc\u2022space\u202216m: min(-16px, -1rem);
    --arc\u2022space\u202214m: min(-14px, -0.875rem);
    --arc\u2022space\u202212m: min(-12px, -0.75rem);
    --arc\u2022space\u202210m: min(-10px, -0.625rem);
    --arc\u2022space\u20228m: min(-8px, -0.5rem);
    --arc\u2022space\u20226m: min(-6px, -0.375rem);
    --arc\u2022space\u20225m: min(-5px, -0.3125rem);
    --arc\u2022space\u20224m: min(-4px, -0.25rem);
    --arc\u2022space\u20223m: min(-3px, -0.1875rem);
    --arc\u2022space\u20222m: min(-2px, -0.125rem);
    --arc\u2022space\u20221m: min(-1px, -0.0625rem);
    --arc\u2022space\u20220: 0px;
    --arc\u2022space\u20221: max(1px, 0.0625rem);
    --arc\u2022space\u20222: max(2px, 0.125rem);
    --arc\u2022space\u20223: max(3px, 0.1875rem);
    --arc\u2022space\u20224: max(4px, 0.25rem);
    --arc\u2022space\u20225: max(5px, 0.3125rem);
    --arc\u2022space\u20226: max(6px, 0.375rem);
    --arc\u2022space\u20228: max(8px, 0.5rem);
    --arc\u2022space\u202210: max(10px, 0.625rem);
    --arc\u2022space\u202212: max(12px, 0.75rem);
    --arc\u2022space\u202214: max(14px, 0.875rem);
    --arc\u2022space\u202216: max(16px, 1rem);
    --arc\u2022space\u202218: max(18px, 1.125rem);
    --arc\u2022space\u202220: max(20px, 1.25rem);
    --arc\u2022space\u202224: max(24px, 1.5rem);
    --arc\u2022space\u202232: max(32px, 2rem);
    --arc\u2022space\u202240: max(40px, 2.5rem);
    --arc\u2022space\u202248: max(48px, 3rem);
    --arc\u2022space\u202256: max(56px, 3.5rem);
    --arc\u2022space\u202264: max(64px, 4rem);
    --arc\u2022space\u202272: max(72px, 4.5rem);
    --arc\u2022space\u202280: max(80px, 5rem);
    --arc\u2022space\u202288: max(88px, 5.5rem);
    --arc\u2022space\u202296: max(96px, 6rem);
    --arc\u2022size\u202216m: min(-16px, -1rem);
    --arc\u2022size\u202212m: min(-12px, -0.75rem);
    --arc\u2022size\u202210m: min(-10px, -0.625rem);
    --arc\u2022size\u20228m: min(-8px, -0.5rem);
    --arc\u2022size\u20226m: min(-6px, -0.375rem);
    --arc\u2022size\u20224m: min(-4px, -0.25rem);
    --arc\u2022size\u20223m: min(-3px, -0.1875rem);
    --arc\u2022size\u20222m: min(-2px, -0.125rem);
    --arc\u2022size\u20221m: min(-1px, -0.0625rem);
    --arc\u2022size\u20220: 0px;
    --arc\u2022size\u20221: max(1px, 0.0625rem);
    --arc\u2022size\u20222: max(2px, 0.125rem);
    --arc\u2022size\u20223: max(3px, 0.1875rem);
    --arc\u2022size\u20224: max(4px, 0.25rem);
    --arc\u2022size\u20225: max(5px, 0.3125rem);
    --arc\u2022size\u20226: max(6px, 0.375rem);
    --arc\u2022size\u20228: max(8px, 0.5rem);
    --arc\u2022size\u202210: max(10px, 0.625rem);
    --arc\u2022size\u202212: max(12px, 0.75rem);
    --arc\u2022size\u202214: max(14px, 0.875rem);
    --arc\u2022size\u202215: max(15px, 0.9375rem);
    --arc\u2022size\u202216: max(16px, 1rem);
    --arc\u2022size\u202218: max(18px, 1.125rem);
    --arc\u2022size\u202220: max(20px, 1.25rem);
    --arc\u2022size\u202222: max(22px, 1.375rem);
    --arc\u2022size\u202224: max(24px, 1.5rem);
    --arc\u2022size\u202225: max(25px, 1.5625rem);
    --arc\u2022size\u202226: max(26px, 1.625rem);
    --arc\u2022size\u202228: max(28px, 1.75rem);
    --arc\u2022size\u202230: max(30px, 1.875rem);
    --arc\u2022size\u202232: max(32px, 2rem);
    --arc\u2022size\u202234: max(34px, 2.125rem);
    --arc\u2022size\u202236: max(36px, 2.25rem);
    --arc\u2022size\u202238: max(38px, 2.375rem);
    --arc\u2022size\u202240: max(40px, 2.5rem);
    --arc\u2022size\u202242: max(42px, 2.625rem);
    --arc\u2022size\u202244: max(44px, 2.75rem);
    --arc\u2022size\u202246: max(46px, 2.875rem);
    --arc\u2022size\u202248: max(48px, 3rem);
    --arc\u2022size\u202250: max(50px, 3.125rem);
    --arc\u2022size\u202252: max(52px, 3.25rem);
    --arc\u2022size\u202254: max(54px, 3.375rem);
    --arc\u2022size\u202256: max(56px, 3.5rem);
    --arc\u2022size\u202258: max(58px, 3.625rem);
    --arc\u2022size\u202260: max(60px, 3.75rem);
    --arc\u2022size\u202264: max(64px, 4rem);
    --arc\u2022size\u202268: max(68px, 4.25rem);
    --arc\u2022size\u202272: max(72px, 4.5rem);
    --arc\u2022size\u202276: max(76px, 4.75rem);
    --arc\u2022size\u202280: max(80px, 5rem);
    --arc\u2022size\u202288: max(88px, 5.5rem);
    --arc\u2022size\u202296: max(96px, 6rem);
    --arc\u2022size\u2022104: max(104px, 6.5rem);
    --arc\u2022size\u2022112: max(112px, 7rem);
    --arc\u2022size\u2022120: max(120px, 7.5rem);
    --arc\u2022size\u2022128: max(128px, 8rem);
    --arc\u2022size\u2022136: max(136px, 8.5rem);
    --arc\u2022size\u2022144: max(144px, 9rem);
    --arc\u2022size\u2022152: max(152px, 9.5rem);
    --arc\u2022size\u2022160: max(160px, 10rem);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-alpha-0: 0%;
    --arc-alpha-3: 3%;
    --arc-alpha-5: 5%;
    --arc-alpha-10: 10%;
    --arc-alpha-20: 20%;
    --arc-alpha-25: 25%;
    --arc-alpha-30: 30%;
    --arc-alpha-40: 40%;
    --arc-alpha-50: 50%;
    --arc-alpha-60: 60%;
    --arc-alpha-70: 70%;
    --arc-alpha-80: 80%;
    --arc-alpha-90: 90%;
    --arc-alpha-95: 95%;
    --arc-alpha-100: 100%;
    --arc-border-radius-none: 0px;
    --arc-border-radius-sm: max(2px, 0.125em);
    --arc-border-radius-md: max(4px, 0.25em);
    --arc-border-radius-lg: max(8px, 0.5em);
    --arc-border-radius-xl: max(16px, 1em);
    --arc-border-radius-circle: 50%;
    --arc-border-radius-pill: 100vh;
    --arc-border-width-none: 0px;
    --arc-border-width-sm: max(1px, 0.0625em);
    --arc-border-width-md: max(2px, 0.125em);
    --arc-border-width-lg: max(3px, 0.1875em);
    --arc-border-width-xl: max(4px, 0.25em);
    /* dynamic shadow tokens */
    --arc-shadow-none: none;
    --arc-shadow-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-shadow-sm);
    --arc-shadow-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-shadow-md);
    --arc-shadow-lg: 0 max(4px, 0.25em) max(24px, 1.5em) 0 var(--arc-color-shadow-lg);
    --arc-shadow-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-shadow-xl);
    /* static light shadow tokens (primitive alpha colors) */
    --arc-shadow-light-none: none;
    --arc-shadow-light-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-alpha-black-25);
    --arc-shadow-light-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-alpha-black-15);
    --arc-shadow-light-lg: 0 max(4px, 0.25em) max(24px, 1.5em) 0 var(--arc-color-alpha-black-15);
    --arc-shadow-light-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-alpha-black-15);
    /* static dark shadow tokens (primitive alpha colors) */
    --arc-shadow-dark-none: none;
    --arc-shadow-dark-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-alpha-black-60);
    --arc-shadow-dark-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-alpha-black-50);
    --arc-shadow-dark-lg: 0 max(4px, 0.25em) max(24px, 1.5em) 0 var(--arc-color-alpha-black-40);
    --arc-shadow-dark-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-alpha-black-40);
    /* surface shadow tokens */
    --arc-surface-raised-shadow: var(--arc-shadow-md);
    --arc-surface-floating-shadow: var(--arc-shadow-lg);
  }
}
@layer arc-utils {
  /* Gradients -----------------------------------------------------\u2022 */
  [arc-gradient] {
    background-clip: text;
    color: transparent;
    /** @note: line-height mitigation strategy for gradient icons
     * stops icon geometry clipping issues
     */
  }
  [arc-gradient][arc-icon] {
    --arc-icon-height: 1.5lh;
    --arc-icon-max-height: none;
    --arc-icon-margin-block: -0.5lh;
  }
  :is([arc-gradient], [arc-gradient=ai], [arc-gradient=ai-200]) {
    background-image: var(--arc-gradient-ai-200);
  }
  [arc-gradient=ai-50] {
    background-image: var(--arc-gradient-ai-50);
  }
  [arc-gradient=ai-100] {
    background-image: var(--arc-gradient-ai-100);
  }
  [arc-gradient=ai-300] {
    background-image: var(--arc-gradient-ai-300);
  }
  [arc-gradient=ai-400] {
    background-image: var(--arc-gradient-ai-400);
  }
  [arc-gradient=ai-500] {
    background-image: var(--arc-gradient-ai-500);
  }
  [arc-gradient=ai-600] {
    background-image: var(--arc-gradient-ai-600);
  }
  /* Shadows -------------------------------------------------------\u2022 */
  [arc-shadow=sm] {
    box-shadow: var(--arc-shadow-sm);
  }
  [arc-shadow=md] {
    box-shadow: var(--arc-shadow-md);
  }
  [arc-shadow=lg] {
    box-shadow: var(--arc-shadow-lg);
  }
  [arc-shadow=xl] {
    box-shadow: var(--arc-shadow-xl);
  }
  /* Light Shadows -------------------------------------------------\u2022 */
  [arc-shadow=light-sm] {
    box-shadow: var(--arc-shadow-light-sm);
  }
  [arc-shadow=light-md] {
    box-shadow: var(--arc-shadow-light-md);
  }
  [arc-shadow=light-lg] {
    box-shadow: var(--arc-shadow-light-lg);
  }
  [arc-shadow=light-xl] {
    box-shadow: var(--arc-shadow-light-xl);
  }
  /* Dark Shadows --------------------------------------------------\u2022 */
  [arc-shadow=dark-sm] {
    box-shadow: var(--arc-shadow-dark-sm);
  }
  [arc-shadow=dark-md] {
    box-shadow: var(--arc-shadow-dark-md);
  }
  [arc-shadow=dark-lg] {
    box-shadow: var(--arc-shadow-dark-lg);
  }
  [arc-shadow=dark-xl] {
    box-shadow: var(--arc-shadow-dark-xl);
  }
  /* Surfaces ------------------------------------------------------\u2022 */
  [arc-surface=primary] {
    color: var(--arc-surface-primary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-primary-background, var(--arc-color-bg-primary));
  }
  [arc-surface=secondary] {
    color: var(--arc-surface-secondary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-secondary-background, var(--arc-color-bg-secondary));
  }
  [arc-surface=inset] {
    color: var(--arc-surface-inset-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-inset-background, var(--arc-color-bg-tertiary));
  }
  [arc-surface=raised] {
    color: var(--arc-surface-raised-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-raised-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-raised-box-shadow, var(--arc-surface-raised-shadow));
    z-index: var(--arc-surface-raised-z-index, 1);
  }
  [arc-surface=floating] {
    color: var(--arc-surface-floating-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-floating-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-floating-box-shadow, var(--arc-surface-floating-shadow));
    z-index: var(--arc-surface-floating-z-index, 2);
  }
  /* Scheme (proximity via inheritance) ----------------------------\u2022 */
  :root:not([arc-scheme]) {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
  }
  [arc-scheme=light] {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
  }
  [arc-scheme=dark] {
    --arc\u2022color\u2022scheme: dark;
    --arc\u2022color\u2022scheme\u2022inverse: light;
  }
  [arc-scheme=inverse] {
    --arc\u2022color\u2022scheme: var(--arc\u2022color\u2022scheme\u2022inverse);
  }
  :root:not([arc-scheme]),
  [arc-scheme] {
    color-scheme: var(--arc\u2022color\u2022scheme, light);
  }
}
:root,
::backdrop {
  /* @deprecated background variables - please update all instances */
  --arc-color-alpha-white-03: var(--arc-color-alpha-white-3);
  --arc-color-alpha-white-05: var(--arc-color-alpha-white-5);
  --arc-color-alpha-black-03: var(--arc-color-alpha-black-3);
  --arc-color-alpha-black-05: var(--arc-color-alpha-black-5);
  --arc-color-neutral-000: var(--arc-color-light-neutral-0);
  --arc-color-neutral-050: var(--arc-color-light-neutral-50);
  --arc-color-neutral-100: var(--arc-color-light-neutral-100);
  --arc-color-neutral-200: var(--arc-color-light-neutral-200);
  --arc-color-neutral-300: var(--arc-color-light-neutral-300);
  --arc-color-neutral-400: var(--arc-color-light-neutral-400);
  --arc-color-neutral-500: var(--arc-color-light-neutral-500);
  --arc-color-neutral-600: var(--arc-color-light-neutral-600);
  --arc-color-neutral-700: var(--arc-color-light-neutral-700);
  --arc-color-neutral-800: var(--arc-color-light-neutral-800);
  --arc-color-neutral-900: var(--arc-color-light-neutral-900);
  --arc-color-blue-050: var(--arc-color-light-blue-50);
  --arc-color-blue-100: var(--arc-color-light-blue-100);
  --arc-color-blue-200: var(--arc-color-light-blue-200);
  --arc-color-blue-300: var(--arc-color-light-blue-300);
  --arc-color-blue-400: var(--arc-color-light-blue-400);
  --arc-color-blue-500: var(--arc-color-light-blue-500);
  --arc-color-blue-600: var(--arc-color-light-blue-600);
  --arc-color-blue-700: var(--arc-color-light-blue-700);
  --arc-color-blue-800: var(--arc-color-light-blue-800);
  --arc-color-blue-900: var(--arc-color-light-blue-900);
  --arc-color-purple-050: var(--arc-color-light-purple-50);
  --arc-color-purple-100: var(--arc-color-light-purple-100);
  --arc-color-purple-200: var(--arc-color-light-purple-200);
  --arc-color-purple-300: var(--arc-color-light-purple-300);
  --arc-color-purple-400: var(--arc-color-light-purple-400);
  --arc-color-purple-500: var(--arc-color-light-purple-500);
  --arc-color-purple-600: var(--arc-color-light-purple-600);
  --arc-color-purple-700: var(--arc-color-light-purple-700);
  --arc-color-purple-800: var(--arc-color-light-purple-800);
  --arc-color-purple-900: var(--arc-color-light-purple-900);
  --arc-color-maroon-050: var(--arc-color-light-maroon-50);
  --arc-color-maroon-100: var(--arc-color-light-maroon-100);
  --arc-color-maroon-200: var(--arc-color-light-maroon-200);
  --arc-color-maroon-300: var(--arc-color-light-maroon-300);
  --arc-color-maroon-400: var(--arc-color-light-maroon-400);
  --arc-color-maroon-500: var(--arc-color-light-maroon-500);
  --arc-color-maroon-600: var(--arc-color-light-maroon-600);
  --arc-color-maroon-700: var(--arc-color-light-maroon-700);
  --arc-color-maroon-800: var(--arc-color-light-maroon-800);
  --arc-color-maroon-900: var(--arc-color-light-maroon-900);
  --arc-color-red-050: var(--arc-color-light-red-50);
  --arc-color-red-100: var(--arc-color-light-red-100);
  --arc-color-red-200: var(--arc-color-light-red-200);
  --arc-color-red-300: var(--arc-color-light-red-300);
  --arc-color-red-400: var(--arc-color-light-red-400);
  --arc-color-red-500: var(--arc-color-light-red-500);
  --arc-color-red-600: var(--arc-color-light-red-600);
  --arc-color-red-700: var(--arc-color-light-red-700);
  --arc-color-red-800: var(--arc-color-light-red-800);
  --arc-color-red-900: var(--arc-color-light-red-900);
  --arc-color-orange-050: var(--arc-color-light-orange-50);
  --arc-color-orange-100: var(--arc-color-light-orange-100);
  --arc-color-orange-200: var(--arc-color-light-orange-200);
  --arc-color-orange-300: var(--arc-color-light-orange-300);
  --arc-color-orange-400: var(--arc-color-light-orange-400);
  --arc-color-orange-500: var(--arc-color-light-orange-500);
  --arc-color-orange-600: var(--arc-color-light-orange-600);
  --arc-color-orange-700: var(--arc-color-light-orange-700);
  --arc-color-orange-800: var(--arc-color-light-orange-800);
  --arc-color-orange-900: var(--arc-color-light-orange-900);
  --arc-color-yellow-050: var(--arc-color-light-yellow-50);
  --arc-color-yellow-100: var(--arc-color-light-yellow-100);
  --arc-color-yellow-200: var(--arc-color-light-yellow-200);
  --arc-color-yellow-300: var(--arc-color-light-yellow-300);
  --arc-color-yellow-400: var(--arc-color-light-yellow-400);
  --arc-color-yellow-500: var(--arc-color-light-yellow-500);
  --arc-color-yellow-600: var(--arc-color-light-yellow-600);
  --arc-color-yellow-700: var(--arc-color-light-yellow-700);
  --arc-color-yellow-800: var(--arc-color-light-yellow-800);
  --arc-color-yellow-900: var(--arc-color-light-yellow-900);
  --arc-color-green-050: var(--arc-color-light-green-50);
  --arc-color-green-100: var(--arc-color-light-green-100);
  --arc-color-green-200: var(--arc-color-light-green-200);
  --arc-color-green-300: var(--arc-color-light-green-300);
  --arc-color-green-400: var(--arc-color-light-green-400);
  --arc-color-green-500: var(--arc-color-light-green-500);
  --arc-color-green-600: var(--arc-color-light-green-600);
  --arc-color-green-700: var(--arc-color-light-green-700);
  --arc-color-green-800: var(--arc-color-light-green-800);
  --arc-color-green-900: var(--arc-color-light-green-900);
  --arc-color-mint-050: var(--arc-color-light-mint-50);
  --arc-color-mint-100: var(--arc-color-light-mint-100);
  --arc-color-mint-200: var(--arc-color-light-mint-200);
  --arc-color-mint-300: var(--arc-color-light-mint-300);
  --arc-color-mint-400: var(--arc-color-light-mint-400);
  --arc-color-mint-500: var(--arc-color-light-mint-500);
  --arc-color-mint-600: var(--arc-color-light-mint-600);
  --arc-color-mint-700: var(--arc-color-light-mint-700);
  --arc-color-mint-800: var(--arc-color-light-mint-800);
  --arc-color-mint-900: var(--arc-color-light-mint-900);
  --arc-gradient-ai-050: var(--arc-gradient-ai-50);
  --arc-color-ai-purple-050: #fbf2ff;
  --arc-color-ai-purple-100: #efccff;
  --arc-color-ai-purple-200: #9c15ff;
  --arc-color-ai-purple-300: #680278;
  --arc-color-ai-purple-400: #5d3668;
  --arc-color-ai-purple-500: #37003f;
  --arc-color-ai-purple-600: #27002c;
  --arc-color-ai-blue-050: #f4fbff;
  --arc-color-ai-blue-100: #d2f1fe;
  --arc-color-ai-blue-200: #1eb4fb;
  --arc-color-ai-blue-300: #0179d0;
  --arc-color-ai-blue-400: #36648c;
  --arc-color-ai-blue-500: #004273;
  --arc-color-ai-blue-600: #012a48;
  /* @deprecated background variables - please update all instances */
  --arc-color-background-primary: var(--arc-color-bg-primary);
  --arc-color-background-primary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-primary-selected-subtle: var(--arc-color-bg-selected-subtle);
  --arc-color-background-primary-selected: var(--arc-color-bg-selected-default);
  --arc-color-background-primary-selected-stark: var(--arc-color-bg-selected-stark);
  --arc-color-background-secondary: var(--arc-color-bg-secondary);
  --arc-color-background-secondary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-tertiary: var(--arc-color-bg-tertiary);
  --arc-color-background-inverse: var(--arc-color-light-neutral-1000);
  --arc-color-overlay-dark: var(--arc-color-overlay-stark);
  --arc-color-overlay-light: var(--arc-color-overlay-subtle);
  /* @deprecated foreground variables - please update all instances */
  --arc-color-text-primary: var(--arc-color-fg-primary);
  --arc-color-icon-primary: var(--arc-color-fg-primary);
  --arc-color-text-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-primary-hover: var(--arc-color-fg-on-hover-default);
  --arc-color-text-primary-hover: var(--arc-color-fg-on-hover-default);
  --arc-color-text-secondary-hover: var(--arc-color-fg-on-hover-stark);
  --arc-color-icon-secondary-hover: var(--arc-color-fg-on-hover-stark);
  --arc-color-text-disabled: var(--arc-color-fg-disabled);
  --arc-color-icon-disabled: var(--arc-color-fg-disabled);
  --arc-color-text-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-icon-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-text-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-icon-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-text-info: var(--arc-color-fg-info-stark);
  --arc-color-icon-info: var(--arc-color-fg-info-stark);
  --arc-color-text-brand: var(--arc-color-fg-brand-stark);
  --arc-color-icon-brand: var(--arc-color-fg-brand-mid);
  --arc-color-text-success: var(--arc-color-fg-success-stark);
  --arc-color-icon-success: var(--arc-color-fg-success-stark);
  --arc-color-text-warning: var(--arc-color-fg-warning-stark);
  --arc-color-icon-warning: var(--arc-color-fg-warning-stark);
  --arc-color-text-critical: var(--arc-color-fg-critical-mid);
  --arc-color-icon-critical: var(--arc-color-fg-critical-mid);
  /* @deprecated border variable - please update all instances */
  --arc-color-border-orange: var(--arc-color-border-orange-mid);
  --arc-color-border-mint: var(--arc-color-border-mint-mid);
  --arc-color-border-maroon: var(--arc-color-border-maroon-mid);
  --arc-color-border-standard: var(--arc-color-border-mid);
  --arc-color-border-full: var(--arc-color-border-heavy);
  --arc-color-border-focus-inverse: var(--arc-color-light-blue-300);
  --arc-border-width-standard: var(--arc-border-width-sm);
  /* @deprecated color variables - please update all instances */
  --arc-color-info-light: var(--arc-color-bg-info-muted);
  --arc-color-info-medium: var(--arc-color-bg-info-subtle);
  --arc-color-info-root: var(--arc-color-bg-info-mid);
  --arc-color-info-dark: var(--arc-color-bg-info-stark);
  --arc-color-info-heavy: var(--arc-color-bg-info-heavy);
  --arc-color-border-info: var(--arc-color-border-info-mid);
  --arc-color-brand-light: var(--arc-color-bg-brand-muted);
  --arc-color-brand-medium: var(--arc-color-bg-brand-subtle);
  --arc-color-brand-root: var(--arc-color-bg-brand-mid);
  --arc-color-brand-dark: var(--arc-color-bg-brand-stark);
  --arc-color-brand-heavy: var(--arc-color-bg-brand-heavy);
  --arc-color-border-brand: var(--arc-color-border-brand-mid);
  --arc-color-success-light: var(--arc-color-bg-success-muted);
  --arc-color-success-medium: var(--arc-color-bg-success-subtle);
  --arc-color-success-root: var(--arc-color-bg-success-mid);
  --arc-color-success-dark: var(--arc-color-bg-success-stark);
  --arc-color-success-heavy: var(--arc-color-bg-success-heavy);
  --arc-color-border-success: var(--arc-color-border-success-mid);
  --arc-color-warning-light: var(--arc-color-bg-warning-muted);
  --arc-color-warning-medium: var(--arc-color-bg-warning-subtle);
  --arc-color-warning-root: var(--arc-color-bg-warning-mid);
  --arc-color-warning-dark: var(--arc-color-bg-warning-stark);
  --arc-color-warning-heavy: var(--arc-color-bg-warning-heavy);
  --arc-color-border-warning: var(--arc-color-border-warning-mid);
  --arc-color-critical-light: var(--arc-color-bg-critical-muted);
  --arc-color-critical-medium: var(--arc-color-bg-critical-subtle);
  --arc-color-critical-root: var(--arc-color-bg-critical-mid);
  --arc-color-critical-dark: var(--arc-color-bg-critical-stark);
  --arc-color-critical-heavy: var(--arc-color-bg-critical-heavy);
  --arc-color-border-critical: var(--arc-color-border-critical-mid);
  /** @deprecated - old alpha leading zeros */
  --arc-alpha-03: var(--arc-alpha-3);
  --arc-alpha-05: var(--arc-alpha-5);
}

/*# sourceMappingURL=theme.css.map */
`,gc={};function lr(r,e){if(typeof document<"u"&&e?.styleSheet){const a=gc[r];gc[r]=e.styleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets.filter(t=>t!==a),e.styleSheet]}}function Ou(r){const e=Object.values(gc),a=document.adoptedStyleSheets.filter(t=>e.includes(t));if(r.adoptedStyleSheets){const t=a.filter(o=>!r.adoptedStyleSheets.includes(o));r.adoptedStyleSheets=[...r.adoptedStyleSheets,...t]}}function Du(r){if(typeof CSSStyleSheet<"u"){const e=new CSSStyleSheet;e.replaceSync(Bu),r.adoptedStyleSheets&&(r.adoptedStyleSheets.includes(e)||(r.adoptedStyleSheets=[...r.adoptedStyleSheets,e]))}}const Nu=r=>r?.trim().charAt(0)??void 0,Fu=(r,e)=>{let a=0;const t=Math.min(r.length,50);for(let o=0;o<t;o+=1)a=(a+r.charCodeAt(o))%(e??33);return a},Hu=(r,e,a)=>e?.length?r?.trim()===""?a||e[0]:e[Fu(r,e.length)]||a||e[0]:a,ks=ar(Ra,["blue","orange","mint","red","yellow","green","maroon","purple"]),Vu=ar(Ra,["neutral","white","black"]),Wo=ar(oe,["lg","md","sm","xs"]),Uu=[...Wo,"profile-sm","profile-md","profile-lg"],Ku=Do,Wu=_t,Gu=Wo,qu=Wo,Yu=Wo,B=s`--arc•input•mask`,p=s`--arc•size`,E=s`--arc•space`,fr=s`--arc•avatar`,Hr=s`${fr}•chars`,vc=s`

  &[data-size=lg] {
    ${fr}•font•size: var(${p}•16);
    ${fr}•size: 2.5em; /* target: 40px @ 100% */
    ${Hr}•1: var(${p}•16);
    ${Hr}•2: var(${p}•14);
    ${Hr}•3: var(${p}•12);
  }

  &:is([data-size=md], [data-size=inherit], :not([data-size])) { /* @default size */
    ${fr}•font•size: var(${p}•14);
    ${fr}•size: 2.2857142857em; /* target: 32px @ 100% (32 / 14 * 1em) */
    ${Hr}•1: var(${p}•14);
    ${Hr}•2: var(${p}•12);
    ${Hr}•3: var(${p}•10);
  }

  &[data-size=sm] {
    ${fr}•font•size: var(${p}•12);
    ${fr}•size: 2em; /* target: 24px @ 100% */
    ${Hr}•1: var(${p}•12);
    ${Hr}•2: var(${p}•10);
    ${Hr}•3: var(${p}•8);
  }

  &[data-size=xs] {
    ${fr}•font•size: var(${p}•10);
    ${fr}•size: 2em; /* target: 20px @ 100% */
    ${Hr}•1: var(${p}•10);
    ${Hr}•2: var(${p}•8);
    ${Hr}•3: var(${p}•6);
  }

`,Zu=s`

  &[data-size=profile-lg] {
    ${fr}•font•size: var(${p}•40);
    ${fr}•size: 4em;
  }

  &[data-size=profile-md] {
    ${fr}•font•size: var(${p}•32);
    ${fr}•size: 3em;
  }

  &[data-size=profile-sm] {
    ${fr}•font•size: var(${p}•28);
    ${fr}•size: 2.2857142857em; /* target: 64px @ 100% (64 / 28 * 1em) */
  }

`,ws=s`

  [arc-avatar] {
    ${fr}•font•size: inherit;
    ${fr}•size: inherit;
    ${Hr}•1: inherit;
    ${Hr}•2: inherit;
    ${Hr}•3: inherit;
  }

`,Ha=s`${fr}•fg`,ge=s`${fr}•bg`,Xu=s`
@layer arc-components {

  [arc-avatar] {
    /* Colors --------------------------------------------------------• */
    ${Ha}: var(--arc-avatar-color, var(--arc-color-mono-white));

    &:has([data-color=blue]) { /* @default color */
      ${ge}: var(--arc-color-light-blue-400);
    }
    &:has([data-color=purple]) {
      ${ge}: var(--arc-color-light-purple-400);
    }
    &:has([data-color=red]) {
      ${ge}: var(--arc-color-light-red-400);
    }
    &:has([data-color=yellow]) {
      ${ge}: var(--arc-color-light-yellow-400);
    }
    &:has([data-color=green]) {
      ${ge}: var(--arc-color-light-green-400);
    }
    &:has([data-color=maroon]) {
      ${ge}: var(--arc-color-light-maroon-400);
    }
    &:has([data-color=orange]) {
      ${ge}: var(--arc-color-light-orange-400);
    }
    &:has([data-color=mint]) {
      ${ge}: var(--arc-color-light-mint-400);
    }

    /* RESERVED COLORS -----------------------------------------------• */
    &:has([data-color=black]) {
      ${Ha}: light-dark(var(--arc-color-mono-white), var(--arc-color-mono-black));
      ${ge}: light-dark(var(--arc-color-mono-black), var(--arc-color-mono-white));
    }

    &:has([data-color=neutral]) { /* @default anonymous */
      ${Ha}: var(--arc-color-fg-secondary);
      ${ge}: var(--arc-color-alpha-subtle);
    }

    &:has([data-color=white]) {
      ${Ha}: var(--arc-color-mono-black);
      ${ge}: var(--arc-color-mono-white);
    }

    /* SIZES ---------------------------------------------------------• */
    ${vc}
    ${Zu}
  }

  /* CORE AVATAR STYLES ----------------------------------------------• */
  [arc-avatar]:not([hidden]) {
    font-size: var(--arc-avatar-font-size, var(${fr}•font•size));

    flex: none;
    align-self: center;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--arc-avatar-size, var(${fr}•size));
    aspect-ratio: 1 / 1;
    line-height: normal;

    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: var(--arc-border-radius-circle);

    &[data-is-inactive] {
      opacity: var(--arc-alpha-50);
    }

    [data-num-length] {
      --arc-button-font-size: var(${Hr}•1);
    }

    [data-num-length='2'] {
      --arc-button-font-size: var(${Hr}•2);
    }

    [data-num-length='3'] {
      --arc-button-font-size: var(${Hr}•3);
    }


    /* INNER ELEMENTS ------------------------------------------------• */

    [data-element=counter] {
      ${fr}•pointer•events: all;

      /* Inter-Component Communication • ArcButton --------------------• */
      --arc-button-width: 100%;
      --arc-button-height: auto;
      --arc-button-aspect-ratio: 1 /1;
      --arc-button-padding: 0;
      --arc-button-background: var(--arc-avatar-background, var(${ge}));
      --arc-button-color: var(--arc-avatar-color, var(${Ha}));

      &:disabled {
        --arc-button-cursor: default;
      }
    }

    [data-element=image] {
      object-fit: cover;

      /* Hides problematic image */
      &:is([data-not-loaded], [data-has-error]) {
        ${fr}•visibility: hidden;
      }

      /* Hides subsequent elements with valid image */
      &:not([data-has-error]) ~ [data-element] {
        ${Ha}: transparent;
        ${ge}: none;
      }
    }

    :is(
      [data-element=counter],
      [data-element=initial],
      [data-element=anonymous]
    ) {
      background: var(${ge});
      color: var(${Ha});
    }

    :is([data-element=initial]) {
      font-size: var(--arc-avatar-initial-font-size, inherit);
      text-transform: var(--arc-avatar-text-transform, capitalize);
    }

    [data-element] {
      flex: none;
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;

      border-radius: inherit;
      font-weight: var(--arc-font-weight-600);
      visibility: var(${fr}•visibility, unset);

      transition-duration: 200ms;
      transition-behavior: allow-discrete;
      transition-timing-function: linear;
      transition-property:
        visibility,
        background-color,
        color;

      pointer-events: var(${fr}•pointer•events, none);
      user-select: none;
      -webkit-user-select: none;
    }
  }

}
`,Ju=({children:r,initial:e,color:a,...t})=>(0,i.jsx)("span",{...t,"data-element":"initial","data-color":a,children:r||e}),Qu=({isLoaded:r,hasError:e,onLoad:a,onError:t,...o})=>{const n=!r&&""||void 0,c=e&&""||void 0,l=!r||e||void 0;return(0,i.jsx)("img",{...o,hidden:l,"data-element":"image","data-not-loaded":n,"data-has-error":c,onLoad:a,onError:t})},Bt=r=>typeof r=="string"?r:typeof r=="number"?r.toString():Array.isArray(r)?r.map(Bt).join(""):(0,u.isValidElement)(r)?Bt(r.props.children):"",Cs={},rh=(r="id")=>{const e=(Cs[r]??0)+1;return Cs[r]=e,`${r}-${e}`},Ir=(r,e="id")=>{const a=(0,u.useId)();return r??`${e}-${a}`},ct=r=>typeof r=="string",As=r=>r!==null&&typeof r=="object",eh=["#9c15ff","#1eb4fb"],Ss=({angle:r=60,width:e,height:a})=>{const t=(r-90)*Math.PI/180,o=e/2,n=a/2,c=Math.sqrt(e*e+a*a)/2,l=Math.cos(t)*c,d=Math.sin(t)*c;return{x1:o-l,y1:n-d,x2:o+l,y2:n+d}},ah=(r,e)=>{const a=ct(r)?r:r.color,t=ct(r)?e.toString():r.offset?.toString()??e.toString();return(0,i.jsx)("stop",{offset:t,stopColor:a},`${a}-${e}`)},zs=({id:r,angle:e=60,width:a,height:t,stops:o=eh})=>{const{x1:n,y1:c,x2:l,y2:d}=Ss({angle:e,width:a,height:t});return(0,i.jsx)("defs",{children:(0,i.jsx)("linearGradient",{gradientUnits:"userSpaceOnUse",id:r,x1:n,x2:l,y1:c,y2:d,children:o.map(ah)})})},pc=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2362 2V4.04215H3.7443V2H16.2362ZM13.8453 11.7538C13.8453 9.47528 12.1743 7.75773 9.96905 7.75773C7.79316 7.75773 6.15147 9.47528 6.15147 11.7538C6.15147 14.0323 7.7899 15.753 9.96905 15.753C12.1775 15.753 13.8453 14.0355 13.8453 11.7569V11.7538ZM9.96905 18C6.29153 18 3.5 15.3213 3.5 11.7538C3.5 8.20209 6.27524 5.50758 9.96905 5.49183C13.6922 5.49183 16.5 8.17057 16.5 11.738V17.6754H13.8485V16.3581C13.8485 16.3581 12.3925 18 9.97231 18H9.96905Z",fill:"var(--arc-color-logo-articulate, #000000)"})}),fc=r=>{const e=Ir(void 0,"arc-ai-gradient");return(0,i.jsxs)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.8524 12.87V8.17199H12.6444V12.87H11.8524ZM11.8524 7.28999V6.29999H12.6444V7.28999H11.8524ZM6.5 11.511C6.5 11.211 6.584 10.953 6.752 10.737C6.926 10.515 7.163 10.344 7.463 10.224C7.763 10.104 8.111 10.044 8.507 10.044C8.717 10.044 8.939 10.062 9.173 10.098C9.407 10.128 9.614 10.176 9.794 10.242V9.89999C9.794 9.53999 9.686 9.25799 9.47 9.05399C9.254 8.84399 8.948 8.73899 8.552 8.73899C8.294 8.73899 8.045 8.78699 7.805 8.88299C7.571 8.97299 7.322 9.10499 7.058 9.27899L6.77 8.72099C7.076 8.51099 7.382 8.35499 7.688 8.25299C7.994 8.14499 8.312 8.09099 8.642 8.09099C9.242 8.09099 9.716 8.25899 10.064 8.59499C10.412 8.92499 10.586 9.38699 10.586 9.98099V11.97C10.586 12.066 10.604 12.138 10.64 12.186C10.682 12.228 10.748 12.252 10.838 12.258V12.87C10.76 12.882 10.691 12.891 10.631 12.897C10.577 12.903 10.532 12.906 10.496 12.906C10.31 12.906 10.169 12.855 10.073 12.753C9.983 12.651 9.932 12.543 9.92 12.429L9.902 12.132C9.698 12.396 9.431 12.6 9.101 12.744C8.771 12.888 8.444 12.96 8.12 12.96C7.808 12.96 7.529 12.897 7.283 12.771C7.037 12.639 6.845 12.465 6.707 12.249C6.569 12.027 6.5 11.781 6.5 11.511ZM9.56 11.844C9.632 11.76 9.689 11.676 9.731 11.592C9.773 11.502 9.794 11.427 9.794 11.367V10.782C9.608 10.71 9.413 10.656 9.209 10.62C9.005 10.578 8.804 10.557 8.606 10.557C8.204 10.557 7.877 10.638 7.625 10.8C7.379 10.956 7.256 11.172 7.256 11.448C7.256 11.598 7.295 11.745 7.373 11.889C7.457 12.027 7.577 12.141 7.733 12.231C7.895 12.321 8.093 12.366 8.327 12.366C8.573 12.366 8.807 12.318 9.029 12.222C9.251 12.12 9.428 11.994 9.56 11.844Z",fill:`url(#${e})`}),zs({id:e,width:640,height:640,stops:["var(--arc-color-logo-ai-purple, #9c15ff)","var(--arc-color-logo-ai-blue, #1eb4fb)"]})]})},mc=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM11.3493 8.65067L13.3747 7.51C13.4276 7.48023 13.4874 7.46481 13.5481 7.46529C13.6088 7.46576 13.6683 7.48211 13.7207 7.51271C13.7732 7.54331 13.8167 7.58709 13.847 7.63971C13.8772 7.69233 13.8932 7.75196 13.8933 7.81267V12.14C13.8934 12.2014 13.8772 12.2616 13.8464 12.3147C13.8156 12.3678 13.7713 12.4118 13.7181 12.4423C13.6648 12.4727 13.6044 12.4886 13.5431 12.4882C13.4817 12.4878 13.4215 12.4712 13.3687 12.44L11.3433 11.2453C11.2911 11.2146 11.2479 11.1707 11.2178 11.1181C11.1878 11.0655 11.172 11.0059 11.172 10.9453V8.95333C11.172 8.828 11.24 8.712 11.3493 8.65067ZM7.20267 7.46333H9.93867C10.3227 7.46333 10.634 7.77467 10.634 8.15867V11.592C10.634 11.9767 10.3227 12.288 9.93867 12.288H7.202C7.0177 12.288 6.84094 12.2148 6.71056 12.0846C6.58018 11.9543 6.50684 11.7776 6.50667 11.5933V8.16C6.50667 7.77533 6.818 7.464 7.202 7.464L7.20267 7.46333Z",fill:"var(--arc-color-logo-peek, #497add)"})}),bc=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.7343 12.569C11.3803 12.569 11.0563 12.506 10.7623 12.38C10.4743 12.248 10.2223 12.071 10.0063 11.849C9.79627 11.621 9.63127 11.36 9.51127 11.066C9.39727 10.772 9.34027 10.46 9.34027 10.13C9.34027 9.68601 9.44227 9.28101 9.64627 8.91501C9.85027 8.54901 10.1323 8.25501 10.4923 8.03301C10.8583 7.81101 11.2753 7.70001 11.7433 7.70001C12.2173 7.70001 12.6283 7.81401 12.9763 8.04201C13.3303 8.26401 13.6033 8.55801 13.7953 8.92401C13.9933 9.28401 14.0923 9.67401 14.0923 10.094C14.0923 10.154 14.0893 10.214 14.0833 10.274C14.0833 10.328 14.0803 10.37 14.0743 10.4H10.1773C10.2013 10.706 10.2853 10.979 10.4293 11.219C10.5793 11.453 10.7713 11.639 11.0053 11.777C11.2393 11.909 11.4913 11.975 11.7613 11.975C12.0493 11.975 12.3193 11.903 12.5713 11.759C12.8293 11.615 13.0063 11.426 13.1023 11.192L13.7863 11.381C13.6843 11.609 13.5313 11.813 13.3273 11.993C13.1293 12.173 12.8923 12.314 12.6163 12.416C12.3463 12.518 12.0523 12.569 11.7343 12.569ZM10.1503 9.85101H13.3543C13.3303 9.54501 13.2433 9.27501 13.0933 9.04101C12.9433 8.80701 12.7513 8.62401 12.5173 8.49201C12.2833 8.36001 12.0253 8.29401 11.7433 8.29401C11.4673 8.29401 11.2123 8.36001 10.9783 8.49201C10.7443 8.62401 10.5523 8.80701 10.4023 9.04101C10.2583 9.27501 10.1743 9.54501 10.1503 9.85101ZM8.984 8.47401C8.588 8.48001 8.237 8.58201 7.931 8.78001C7.631 8.97201 7.418 9.23901 7.292 9.58101V12.479H6.5V7.78101H7.238V8.87001C7.4 8.54601 7.613 8.28501 7.877 8.08701C8.147 7.88301 8.429 7.76901 8.723 7.74501H8.876C8.918 7.74501 8.954 7.74801 8.984 7.75401V8.47401Z",fill:"var(--arc-color-logo-reach, #0081de)"})}),$c=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.38402 8.46899C8.98802 8.47499 8.63702 8.57699 8.33102 8.77499C8.03102 8.96699 7.81802 9.23399 7.69202 9.57599V12.474H6.90002V7.77599H7.63802V8.86499C7.80002 8.54099 8.01302 8.27999 8.27702 8.08199C8.54702 7.87799 8.82902 7.76399 9.12302 7.73999H9.27602C9.31802 7.73999 9.35402 7.74299 9.38402 7.74899V8.46899ZM11.5195 12.474L9.67455 7.77599H10.5025L11.9785 11.718L13.4545 7.77599H14.2285L12.3835 12.474H11.5195Z",fill:"var(--arc-color-logo-review, #35b062)"})}),yc=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM9.29467 8.48267C8.90667 8.49467 8.564 8.59467 8.268 8.78267C7.97067 8.97067 7.76067 9.232 7.63733 9.56733V12.406H6.86133V7.804H7.584V8.87067C7.74267 8.55333 7.95133 8.296 8.21067 8.09933C8.46867 7.90267 8.74467 7.79267 9.03867 7.76867H9.18867C9.23 7.76867 9.26533 7.772 9.29467 7.77733V8.48267ZM11.6747 12.494C11.3035 12.4941 10.9347 12.4363 10.5813 12.3227C10.2233 12.208 9.91467 12.042 9.656 11.824L9.99067 11.304C10.2613 11.51 10.532 11.664 10.802 11.7667C11.0727 11.87 11.3573 11.9213 11.6573 11.9213C11.992 11.9213 12.258 11.8547 12.4553 11.7227C12.5492 11.6632 12.6258 11.5803 12.6776 11.482C12.7294 11.3838 12.7546 11.2737 12.7507 11.1627C12.7507 11.0513 12.724 10.956 12.6707 10.876C12.6092 10.7892 12.5278 10.7183 12.4333 10.6693C12.3044 10.6014 12.1682 10.5482 12.0273 10.5107C11.8627 10.464 11.672 10.4133 11.454 10.3607C11.2142 10.3005 10.9763 10.2329 10.7407 10.158C10.566 10.1052 10.3997 10.028 10.2467 9.92867C10.1259 9.85011 10.0285 9.7405 9.96467 9.61133C9.90168 9.46686 9.87162 9.31019 9.87667 9.15267C9.87261 8.94053 9.91923 8.73049 10.0127 8.54C10.104 8.36067 10.2287 8.21133 10.388 8.09067C10.5561 7.96556 10.746 7.87287 10.948 7.81733C11.173 7.7542 11.4057 7.72301 11.6393 7.72467C11.986 7.72467 12.3093 7.78067 12.6093 7.892C12.9093 8.004 13.162 8.15067 13.3673 8.33267L13.0147 8.8C12.824 8.63151 12.6026 8.50136 12.3627 8.41667C12.1249 8.33193 11.8744 8.28864 11.622 8.28867C11.34 8.28867 11.1 8.34867 10.9033 8.46933C10.7067 8.59 10.608 8.78267 10.608 9.04733C10.608 9.15267 10.6273 9.24067 10.6653 9.31133C10.7106 9.38903 10.776 9.45306 10.8547 9.49667C10.9433 9.55 11.056 9.59667 11.1947 9.638C11.3327 9.67867 11.4987 9.72333 11.6927 9.77C11.998 9.84067 12.264 9.91267 12.4907 9.986C12.7167 10.0593 12.9047 10.146 13.0547 10.246C13.2047 10.346 13.316 10.4633 13.3893 10.5993C13.4627 10.734 13.5 10.8987 13.5 11.0927C13.5 11.5213 13.3353 11.8627 13.0067 12.1153C12.6767 12.368 12.2333 12.494 11.6747 12.494Z",fill:"var(--arc-color-logo-rise, #ff6600)"})}),xc=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.2815 6.29999H12.0735V11.655C12.0735 11.913 12.1095 12.072 12.1815 12.132C12.2535 12.192 12.3405 12.222 12.4425 12.222C12.5685 12.222 12.6885 12.21 12.8025 12.186C12.9165 12.156 13.0125 12.126 13.0905 12.096L13.2165 12.744C13.0845 12.798 12.9285 12.843 12.7485 12.879C12.5685 12.915 12.4095 12.933 12.2715 12.933C11.9655 12.933 11.7225 12.846 11.5425 12.672C11.3685 12.498 11.2815 12.255 11.2815 11.943V6.29999ZM8.48 12.96C8.09 12.96 7.724 12.897 7.382 12.771C7.04 12.639 6.746 12.444 6.5 12.186L6.806 11.628C7.076 11.88 7.346 12.06 7.616 12.168C7.886 12.276 8.162 12.33 8.444 12.33C8.768 12.33 9.032 12.27 9.236 12.15C9.44 12.024 9.542 11.841 9.542 11.601C9.542 11.427 9.488 11.298 9.38 11.214C9.278 11.13 9.131 11.061 8.939 11.007C8.747 10.947 8.519 10.881 8.255 10.809C7.931 10.713 7.658 10.611 7.436 10.503C7.214 10.395 7.046 10.26 6.932 10.098C6.818 9.93599 6.761 9.73199 6.761 9.48599C6.761 9.18599 6.839 8.93399 6.995 8.72999C7.151 8.51999 7.364 8.36099 7.634 8.25299C7.91 8.14499 8.222 8.09099 8.57 8.09099C8.918 8.09099 9.233 8.14499 9.515 8.25299C9.797 8.36099 10.04 8.51999 10.244 8.72999L9.884 9.27899C9.698 9.08699 9.494 8.94599 9.272 8.85599C9.05 8.75999 8.801 8.71199 8.525 8.71199C8.363 8.71199 8.204 8.73299 8.048 8.77499C7.892 8.81099 7.763 8.87999 7.661 8.98199C7.559 9.07799 7.508 9.21599 7.508 9.39599C7.508 9.54599 7.547 9.66599 7.625 9.75599C7.709 9.83999 7.829 9.91199 7.985 9.97199C8.147 10.032 8.342 10.098 8.57 10.17C8.924 10.272 9.23 10.374 9.488 10.476C9.752 10.578 9.956 10.71 10.1 10.872C10.244 11.034 10.316 11.259 10.316 11.547C10.316 11.991 10.148 12.339 9.812 12.591C9.476 12.837 9.032 12.96 8.48 12.96Z",fill:"var(--arc-color-logo-storyline, #c560b3)"})}),kc=r=>(0,i.jsx)("svg",{...r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 87.3C191.5 87.3 87.3 191.5 87.3 320C87.3 448.5 191.5 552.7 320 552.7C448.5 552.7 552.7 448.5 552.7 320C552.7 191.5 448.5 87.3 320 87.3zM267.5 259C278.1 258.9 288.6 260.7 298.5 264.4C307.4 267.6 315.6 272.3 322.8 278.5L311.5 293.5C305.4 288.1 298.3 283.9 290.6 281.2C283 278.5 275 277.1 266.9 277.1C258.8 276.8 250.9 278.9 243.9 282.9C237.6 286.8 233.9 293.9 234.4 301.4C234.3 304.3 234.9 307.2 236.2 309.9C237.7 312.4 239.7 314.4 242.3 315.8C245.7 317.7 249.4 319.3 253.2 320.3C257.6 321.6 262.9 323 269.1 324.5C278.9 326.8 287.4 329.1 294.6 331.4C301 333.3 307 336.1 312.7 339.7C317.1 342.5 320.8 346.4 323.4 351C325.9 355.9 327.1 361.3 326.9 366.8C327.3 379.6 321.4 391.9 311.1 399.5C298.6 408.2 283.7 412.4 268.5 411.6C256.6 411.6 244.8 409.7 233.5 406.1C222.7 402.8 212.6 397.4 203.9 390.2L214.6 373.6C222.5 379.8 231.2 384.7 240.6 388.4C249.3 391.7 258.6 393.4 268 393.3C277 393.8 285.8 391.6 293.5 387C299.6 383.1 303.2 376.3 303 369.1C303.1 365.9 302.2 362.7 300.5 359.9C298.5 357.1 295.9 354.8 292.9 353.3C288.8 351.1 284.4 349.4 279.9 348.2C274.6 346.7 268.5 345.1 261.6 343.4C252.8 341.1 245.1 339 238.7 336.9C233.1 335.2 227.8 332.7 222.9 329.6C219 327.1 215.9 323.6 213.9 319.4C211.9 314.8 210.9 309.8 211.1 304.7C211 297.9 212.5 291.2 215.5 285.1C218.3 279.4 222.4 274.5 227.5 270.7C232.9 266.7 239 263.7 245.4 262C252.6 260 260.1 259 267.5 259zM432.5 401.5C431 402.3 429 403.1 426.6 404.2C424.2 405.3 421.4 406.3 418.3 407.3C415 408.4 411.6 409.2 408.1 409.8C404.3 410.5 400.5 410.8 396.7 410.8C388.3 411 380 408.4 373.3 403.3C366.4 397.6 362.7 388.9 363.4 380L363.4 281L343.4 281L343.4 261.5L363.4 261.5L363.4 212.4L388.2 212.4L388.2 261.5L421.2 261.5L421.2 281L388.2 281L388.2 372.4C388.2 376.9 390.1 381.3 393.6 384.2C396.8 386.7 400.8 388 404.9 387.9C409.5 388 414 387.1 418.3 385.5C421.2 384.4 424 383.2 426.6 381.7z",fill:"var(--arc-color-logo-studio, #dc424a)"})});var th;const oh="fa-width-auto",Es="fa-fw",nh="arc-fw",_s="arc-aw",ch=r=>typeof r=="number"?`calc(${r/10}rem * var(--arc-internal-font-size))`:r,ih={"arc-svg logo-articulate":(0,i.jsx)(pc,{}),"arc-svg product-ai":(0,i.jsx)(fc,{}),"arc-svg product-peek":(0,i.jsx)(mc,{}),"arc-svg product-reach":(0,i.jsx)(bc,{}),"arc-svg product-review":(0,i.jsx)($c,{}),"arc-svg product-rise":(0,i.jsx)(yc,{}),"arc-svg product-storyline":(0,i.jsx)(xc,{}),"arc-svg product-studio":(0,i.jsx)(kc,{})},bb=r=>r&&r.length>0&&r?.includes("arc-svg")?ih[r]:th("span",{className:r}),Is=r=>{const e=r.includes(oh),a=r.includes(Es),t=r.includes(nh),o=r.includes(_s);return{hasFaAutoWidth:e,hasFaFixedWidth:a,hasArcFixedWidth:t,hasArcAutoWidth:o}},Ts=r=>((0,u.isValidElement)(r)&&r.type===ir?r.props.icon:r)??void 0,wc=r=>{const e=Ts(r);if(typeof e!="string")return e;const{hasFaFixedWidth:a,hasArcFixedWidth:t,hasArcAutoWidth:o}=Is(e);return!a&&!t&&!o?`${e} ${_s}`:e},sh=r=>{const e=Ts(r);if(typeof e!="string")return e;let a=e;const{hasArcFixedWidth:t,hasFaFixedWidth:o}=Is(a);return t&&!o&&(a=`${a} ${Es}`),a},lh=s`--arc•icon`,ua=s`${lh}•fg`,dh=s`
@layer arc-components {

[arc-icon] {
  ${ua}: currentcolor;

  color: var(--arc-icon-color, var(${ua}));
  opacity: var(--arc-icon-opacity, 1);

  &:not([hidden]) {
    /* hand-off to actual interior FontAwesome icon node */
    --fa-display: var(--arc-icon-display, inline-flex);
    --fa-line-height: var(--arc-icon-fa-line-height, 1);

    flex: none;
    align-self: var(--arc-icon-align-self, unset);
    display: var(--fa-display);
    align-items: center;
    justify-content: center;
    height: var(--arc-icon-height, auto);
    max-height: var(--arc-icon-max-height, none);
    margin-block: var(--arc-icon-margin-block, unset);
  }

  &:has(svg) {
    align-self: var(--arc-icon-svg-align-self, center);

    svg {
      font-size: var(--arc-icon-size, 1em);
      width: 1em;
      height: 1em;
      fill: var(--arc-icon-color, var(${ua}));
    }
  }

  [class|=fa] {
    font-size: var(--arc-icon-size, 1em);
    align-items: center;
    justify-content: center;

    /* fix for FontAwesome line-height oddities in certain cases */
    line-height: normal !important;

    &[class*='fa-stack-'] {
      font-size: var(--arc-icon-stack-size, inherit);
    }
  }

  /* Explicit opt-in via Arc’s helper class */
  .arc-aw {
    --fa-width: var(--arc-icon-fa-width, auto);
  }
}

/* utility icon colorization */
[arc-icon] {
  &[arc-icon-status=brand],
  &[arc-icon-status=announcement] {
    ${ua}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status=info] {
    ${ua}: var(--arc-color-fg-info-mid);
  }

  &[arc-icon-status=success] {
    ${ua}: var(--arc-color-fg-success-mid);
  }

  &[arc-icon-status=warning] {
    ${ua}: var(--arc-color-fg-warning-mid);
  }

  &[arc-icon-status=error],
  &[arc-icon-status=critical] {
    ${ua}: var(--arc-color-fg-critical-mid);
  }

  &[arc-icon-status=processing] {
    ${ua}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status] {
    --fa-primary-color: var(--arc-icon-color, currentcolor);
    --fa-secondary-color: color-mix(in srgb, currentcolor 20%, transparent);
    --fa-secondary-opacity: 1;
  }
}

}
`,uh=r=>(0,i.jsx)(ir,{...r,icon:"fa-kit fa-articulate arc-aw",color:r?.color||"var(--arc-color-logo-articulate, #000000)","aria-label":r?.["aria-label"]||"Articulate Logo"}),hh=r=>(0,i.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-ai arc-aw","aria-label":r?.["aria-label"]||"Articulate AI Logo",gradient:r?.gradient||"ai"}),gh=r=>(0,i.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-peek arc-aw",color:r?.color||"var(--arc-color-logo-peek, #497add)","aria-label":r?.["aria-label"]||"Articulate Peek Logo"}),vh=r=>(0,i.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-reach arc-aw",color:r?.color||"var(--arc-color-logo-reach, #0081de)","aria-label":r?.["aria-label"]||"Articulate Reach Logo"}),ph=r=>(0,i.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-review arc-aw",color:r?.color||"var(--arc-color-logo-review, #35b062)","aria-label":r?.["aria-label"]||"Articulate Review Logo"}),fh=r=>(0,i.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-rise arc-aw",color:r?.color||"var(--arc-color-logo-rise, #ff6602)","aria-label":r?.["aria-label"]||"Articulate Rise Logo"}),mh=r=>(0,i.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-storyline arc-aw",color:r?.color||"var(--arc-color-logo-storyline, #c560b3)","aria-label":r?.["aria-label"]||"Articulate Storyline Logo"}),bh=r=>(0,i.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-studio arc-aw",color:r?.color||"var(--arc-color-logo-studio, #dc424a)","aria-label":r?.["aria-label"]||"Articulate Studio Logo"}),ir=({children:r,icon:e="fa-regular fa-circle-dashed",color:a,size:t,style:o,gradient:n,...c})=>{const l={...o,"--arc-icon-size":ch(t),"--arc-icon-color":a},d=!!(c["aria-label"]||c["aria-labelledby"]),h=sh(e),g=typeof h=="string"&&h.length>0?(0,i.jsx)("span",{className:h}):h;return(0,i.jsx)("span",{"aria-hidden":!d||void 0,...c,"arc-icon":"",style:l,"arc-gradient":n,children:r||g})};lr("ArcIcon",dh),ir.Articulate=uh,ir.AI=hh,ir.Peek=gh,ir.Reach=vh,ir.Review=ph,ir.Rise=fh,ir.Storyline=mh,ir.Studio=bh,ir.SVGArticulate=pc,ir.SVGAI=fc,ir.SVGPeek=mc,ir.SVGReach=bc,ir.SVGReview=$c,ir.SVGRise=yc,ir.SVGStoryline=xc,ir.SVGStudio=kc;const $h=({children:r,icon:e,color:a,...t})=>(0,i.jsx)("span",{...t,"data-element":"anonymous","data-color":"neutral",children:r||(0,i.jsx)(ir,{icon:e})}),js="blue",Rs="neutral",yh="fa-solid fa-user arc-aw",Cc=(0,u.forwardRef)(({children:r,size:e,color:a,isActive:t=!0,isAnonymous:o,alt:n,src:c,name:l,email:d,...h},g)=>{const[f,v]=(0,u.useState)(!1),[b,m]=(0,u.useState)(!1),$=L=>{v(!0),m(!1),h.onLoad?.(L)},w=L=>{v(!1),m(!0),h.onError?.(L)},_=Nu(l||d),y=!!_,C=o||(!f||b)&&!y,S=!C&&!!c&&!b||void 0,I=(C&&Rs||void 0)??(a||void 0)??Hu(String(d||l||void 0),ks,js)??js,j={src:c,alt:n,isLoaded:f,hasError:b,onLoad:$,onError:w};return(0,u.useEffect)(()=>{C&&v(!1)},[C]),(0,i.jsx)("span",{...h,ref:g,"arc-avatar":"","data-is-inactive":!t||void 0,"data-size":e,"aria-label":(h.title??l??d)||void 0,children:r||(C?(0,i.jsx)($h,{icon:yh,color:Rs}):(0,i.jsxs)(i.Fragment,{children:[S&&(0,i.jsx)(Qu,{...j}),y&&(0,i.jsx)(Ju,{initial:_,color:I})]}))})});lr("ArcAvatar",Xu);const Qr=s`${fr}•text`,Va=s`${fr}•subtext`,it=s`${fr}•gap`,xh=s`
@layer arc-components {

  [arc-avatar-text] {
    ${Qr}•font•size: var(${p}•14);
    ${Va}•font•size: var(${p}•12);
    ${it}: var(${p}•8);

    ${Qr}•overflow: unset;
    ${Qr}•text•overflow: unset;
    ${Qr}•white•space: unset;

    &[data-overflow=truncate] {
      ${Qr}•overflow: hidden;
      ${Qr}•text•overflow: ellipsis;
      ${Qr}•white•space: nowrap;
    }

    &:has([data-size=inherit]) {
      ${Qr}•font•size: 1em;
      ${Va}•font•size: 0.875em;
      ${it}: 0.5em;
    }

    &:has([data-size=lg]) {
      ${Qr}•font•size: var(--arc-font-size-14);
      ${Va}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=md]) { /* @default size */
      ${Qr}•font•size: var(--arc-font-size-14);
      ${Va}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=sm]) {
      ${Qr}•font•size: var(--arc-font-size-14);
      ${Va}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=xs]) {
      ${Qr}•font•size: var(--arc-font-size-12);
      ${Va}•font•size: var(--arc-font-size-12);
      ${it}: var(--arc-space-0-75);
    }

    &[data-gap=lg] { ${it}: var(${p}•12); }
    &[data-gap=sm] { ${it}: var(${p}•4); }
  }

  [arc-avatar-text] {
    font-size: var(--arc-avatar-text-font-size, var(${Qr}•font•size));
    display: inline-flex;
    align-items: center;
    gap: var(${it});
    line-height: normal;
    min-width: 0%; /* @note: allows truncation/ellipsis for [data-element=text] */

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-avatar-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-avatar-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    [data-element=text] {
      flex: 1;
      text-align: start;
    }

    [data-element=subtext] {
      display: var(--arc-avatar-subtext-display, block);
      font-size: var(--arc-avatar-subtext-font-size, var(${Va}•font•size));

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      color: var(--arc-avatar-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));
    }

    :where([data-element=text], [data-element=subtext]) {
      overflow: var(${Qr}•overflow);
      text-overflow: var(${Qr}•text•overflow);
      white-space: var(${Qr}•white•space);
    }
  }

}
`,kh="Anonymous",Ac=({children:r,avatar:e={},subtext:a,size:t,gapSize:o,overflow:n,isStrong:c,...l})=>{const d=e.anonymousName||kh,h=e.name||e.email||e.src,g=e.name||e.email,f=e.isAnonymous||!h,v=r||f?d:g,b=o!=="inherit"?o:void 0,m=n!=="inherit"?n:void 0;return(0,i.jsxs)("span",{...l,"arc-avatar-text":"","data-gap":b,"data-overflow":m,"is-strong":c?"":void 0,children:[(0,i.jsx)(Cc,{...e,isAnonymous:f,size:t}),(0,i.jsxs)("span",{"data-element":"text",children:[v,a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("small",{"data-element":"subtext",children:a})]})]})]})};lr("ArcAvatarText",xh);const wh=s`
@layer arc-components {

  [arc-avatar-pile] {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0;

    ${vc}
    ${ws}

    /* Cutout (mask) a portion of subsequent avatars ---------------• */
    [arc-avatar]+[arc-avatar] {
      margin-left: -0.125em;

      /* magic! */
      mask: radial-gradient(
        50% 50% at -43% 50%,
        transparent 110%,
        black 110%
      ) padding-box;
    }

  }

}
`,Ch=({size:r="md",...e})=>(0,i.jsx)("div",{...e,"arc-avatar-pile":"","data-size":r});lr("ArcAvatarPile",wh);const Sc=[...Pa],zc=[...sa],Ah=[...rt],Ps=ar(_r,["common"]),Sh=ar(_r,["ai","brand"]),Ec=["nw-corner","top-start","top-center","top-end","ne-corner","left-start","right-start","left-center","center","right-center","left-end","right-end","sw-corner","bottom-start","bottom-center","bottom-end","se-corner"],_c=["ignore","flip"],Ls=["compact","comfortable"],Ot=(r,e=1/0,a=" ")=>[...r].flat(e)?.filter(Boolean)?.join(a),ve={popover:Sc[0],anchorAt:Ec[13],boundary:_c[0],tryFallbacks:!1,variant:Ps[0],scheme:zc[0],density:Ls[0],isInverse:!1,hasTail:!1,tailSize:8,offset:0},Ic=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("position-anchor","--anchor-name")&&CSS.supports("container-type","anchored"),zh=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("container-type","anchored"),Tc={canAnchor:Ic(),canAnchoredContainers:zh()},Ms=["center","nw-corner","ne-corner","se-corner","sw-corner"],Bs=({canHaveTail:r,tailSize:e})=>{if(!r)return{cssTailVar:"",floatingTailPx:0};const a=Math.abs(Number(e||ve.tailSize)),t=a>0?a:ve.tailSize;return{cssTailVar:t===ve.tailSize?"":`${t}px`,floatingTailPx:t}},Go=typeof window>"u"?u.useEffect:u.useLayoutEffect,Os=(r,e="toggle",a=document)=>{const t=a.getElementById(r);({toggle:()=>t?.togglePopover(),show:()=>t?.showPopover(),hide:()=>t?.hidePopover()})[e]()},Dt=new WeakMap,jc=r=>{const e=String(r??"").trim();if(e==="none")return"none";let a=e.replace(/[^\w-]/g,"-");for(;a.startsWith("-");)a=a.slice(1);for(;a.endsWith("-");)a=a.slice(0,-1);return a?`--${a}`:"--"},Nt=r=>{const e=jc(r);return e==="none"?null:e},Ds=(r,e)=>{const a=Nt(e);if(!a)return()=>{};let t=Dt.get(r);return t||(t=new Set,Dt.set(r,t)),t.has(a)?()=>{}:(t.add(a),r.style.setProperty("anchor-name",Ot([...t],1/0,", ")),()=>{const o=Dt.get(r);if(o){if(o.delete(a),o.size===0){Dt.delete(r),r.style.removeProperty("anchor-name");return}r.style.setProperty("anchor-name",Ot([...o],1/0,", "))}})},Ns=r=>r==="start"||r==="end"?r:"center",Eh=r=>{const e=r.split("-")[0];return e==="top"||e==="right"||e==="bottom"||e==="left"?e:null},Fs=r=>{const e=Eh(r),a=Ns(r.split("-")[1]);switch(e){case"top":return{block:"start",inline:a};case"bottom":return{block:"end",inline:a};case"left":return{block:a,inline:"start"};case"right":return{block:a,inline:"end"};default:return{block:"center",inline:"center"}}},Hs=(r,e)=>r!=="center"&&e!=="center"&&r!==e,Vs=(r,e)=>{const a=Fs(r),t=Fs(e),o=Hs(a.block,t.block),n=Hs(a.inline,t.inline);return o&&n?"flip-block-inline":o?"flip-block":n?"flip-inline":""},_h={...{"top-start":"top-start","top-end":"top-end","right-start":"right-start","right-end":"right-end","bottom-start":"bottom-start","bottom-end":"bottom-end","left-start":"left-start","left-end":"left-end"},...{"top-center":"top","right-center":"right","bottom-center":"bottom","left-center":"left",center:"bottom","nw-corner":"top-start","ne-corner":"top-end","sw-corner":"bottom-start","se-corner":"bottom-end"}},Us=r=>{r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("position"),r.style.removeProperty("margin"),delete r.dataset.fallbacks,delete r.dataset.floating},Ih=r=>{r.dataset.floating="true"},Th=[{test:(r,e,a)=>r==="y"&&e.includes("top")&&a.includes("top"),value:-1},{test:(r,e,a)=>r==="y"&&e.includes("top")&&a.includes("bottom"),value:-1},{test:(r,e,a)=>r==="y"&&e.includes("bottom")&&a.includes("top"),value:1},{test:(r,e,a)=>r==="x"&&e.includes("left")&&a.includes("left"),value:-1},{test:(r,e,a)=>r==="x"&&e.includes("left")&&a.includes("right"),value:-1},{test:(r,e,a)=>r==="x"&&e.includes("right")&&a.includes("left"),value:1}],Ks=(r,e,a)=>Th.find(t=>t.test(r,e,a))?.value||0,jh=({anchorEl:r,popoverEl:e,anchorAt:a,tryFallbacks:t,offsetPx:o,tailSizePx:n,hasTail:c,isOpen:l})=>{Go(()=>{if(!(l&&!Ic()&&!!r&&!!e)){e&&Us(e);return}e&&Ih(e);const h=r,g=e,f=_h[a];let v=!0,b;return(async()=>{try{const{autoUpdate:w,computePosition:_,flip:y,offset:C}=await he.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_5_node_modules_floating-ui_dom_dist_floa-04d176").then(he.bind(he,40153));if(!v)return;const S=c?Math.max(0,n)*(Math.sqrt(2)/2):0,I=[C(o)];t&&I.push(y({fallbackStrategy:"bestFit"}));const j=async()=>{try{const L=await _(h,g,{placement:f,strategy:"fixed",middleware:I}),D=L.x+S*Ks("x",L.placement,f),z=L.y+S*Ks("y",L.placement,f);if(g.style.left=`${D}px`,g.style.top=`${z}px`,!c||!t){delete g.dataset.fallbacks;return}const k=Vs(f,L.placement);k?g.dataset.fallbacks=k:delete g.dataset.fallbacks}catch{}};b=w(h,g,j),await j()}catch{}})(),()=>{v=!1,b?.(),Us(g)}},[a,r,c,l,o,e,n,t])},qo=1,st=2,Rh=[{test:(r,e)=>e.top>=r.bottom+qo,value:"bottom"},{test:(r,e)=>e.bottom<=r.top-qo,value:"top"},{test:(r,e)=>e.left>=r.right+qo,value:"right"},{test:(r,e)=>e.right<=r.left-qo,value:"left"}],Ft=r=>{delete r.dataset.fallbacks};let Rc;const Ph=()=>(Rc||(Rc=he.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_5_node_modules_floating-ui_dom_dist_floa-04d176").then(he.bind(he,40153))),Rc),Yo=r=>({x:r.left+r.width/2,y:r.top+r.height/2}),Lh=(r,e,a,t)=>{const o=Yo(e),n=Yo(a);if(r==="top"||r==="bottom"){const h=Math.abs(t==="rtl"?a.right-e.right:a.left-e.left),g=Math.abs(t==="rtl"?a.left-e.left:a.right-e.right),f=Math.abs(n.x-o.x);return Math.abs(h-g)<=st&&f<=st||f+st<Math.min(h,g)?"center":h<=g?"start":"end"}const c=Math.abs(a.top-e.top),l=Math.abs(a.bottom-e.bottom),d=Math.abs(n.y-o.y);return Math.abs(c-l)<=st&&d<=st||d+st<Math.min(c,l)?"center":c<=l?"start":"end"},Mh=(r,e,a,t)=>{const o=Rh.find(d=>d.test(e,a));let n;if(o)n=o.value;else{const d=Yo(e),h=Yo(a),g=h.y-d.y,f=h.x-d.x,v=Math.min(e.height,a.height)*.1;Math.abs(g)>v?n=g>=0?"bottom":"top":n=f>=0?"right":"left"}if(Ns(r.split("-")[1])==="center")return n;const l=Lh(n,e,a,t);return`${n}-${l}`},Bh=({anchorEl:r,popoverEl:e,anchorAt:a,tryFallbacks:t,isOpen:o,hasTail:n})=>{Go(()=>{if(!e||!Tc.canAnchor)return;if(!n||!t||!o||Tc.canAnchoredContainers||!r){Ft(e);return}const c=a;if(c==="center"||c.includes("corner")){Ft(e);return}const l=r,d=e;let h=!0,g;const f=()=>{const b=l.getBoundingClientRect(),m=d.getBoundingClientRect(),$=getComputedStyle(l).direction==="rtl"?"rtl":"ltr",w=Mh(c,b,m,$),_=Vs(c,w);c===w?Ft(d):_?d.dataset.fallbacks=_:Ft(d)};return(async()=>{try{const{autoUpdate:m}=await Ph();if(!h)return;g=m(l,d,f),f()}catch{}})(),()=>{h=!1,g?.(),Ft(d)}},[a,r,n,o,e,t])},Ws=(r,e=" ")=>r.split(e).map(a=>a.trim()).filter(Boolean),Oh=s`
@layer arc-components {

  [arc-spinner] {
    flex: none;
    display: flex;

    position: var(--arc-spinner-position, relative);
    inset: var(--arc-spinner-inset, 0);
    translate: var(--arc-spinner-translate, 0);
    width: var(--arc-spinner-size, 3em);

    border-radius: var(--arc-border-radius-circle);
    aspect-ratio: 1 / 1;
    pointer-events: none;

    [arc-spinner-circle] {
      fill: none;
      stroke: var(--arc-spinner-circle-color, currentcolor);
      opacity: var(--arc-spinner-circle-opacity, var(--arc-alpha-30));
    }

    [arc-spinner-progress] {
      fill: none;
      stroke: var(--arc-spinner-progress-color, var(--arc-color-fg-brand-mid));
      stroke-dasharray: var(--arc-spinner-progress, 0.3334) 1;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      opacity: var(--arc-spinner-progress-opacity, var(--arc-alpha-100));
      animation: var(--arc-spinner-animation-duration, 743ms) arc-spinner-rotate linear infinite;
      transform-origin: 50% 50%;
    }
  }

  @keyframes arc-spinner-rotate {
    to {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
}
`,Pc=(0,u.forwardRef)(({progress:r,...e},a)=>(0,i.jsxs)("svg",{...e,ref:a,viewBox:"0 0 100 100","arc-spinner":"",style:{"--arc-spinner-progress":r??""},children:[(0,i.jsx)("circle",{"arc-spinner-circle":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"}),(0,i.jsx)("circle",{"arc-spinner-progress":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"})]}));Pc.displayName="ArcSpinner",lr("ArcSpinner",Oh);const Dh=(...r)=>console.log(...r),Gs=(...r)=>console.warn(...r),Nh=(...r)=>console.error(...r),lt=s`--arc•icon•text`,Ht=s`${lt}•font•size`,qs=s`${lt}•icon`,Lc=s`${lt}•text`,Ys=s`${lt}•subtext`,Fe=s`${lt}•fg`,ha=s`${lt}•gap`,Ca=s`${qs}•size`,Zs=s`${qs}•vertical•align`,Vt=s`${Lc}•overflow`,Zo=s`${Lc}•text•overflow`,Xo=s`${Lc}•white•space`,Jo=s`${Ys}•font•size`,Xs=s`${Ys}•fg`,Fh=s`

  &[data-variant=inherit] { /* @default 'inherit' • uses font/color props from context */
    ${Fe}: currentcolor;
  }

  &[data-variant=primary] {
    ${Fe}: var(--arc-color-fg-primary);
  }

  &[data-variant=secondary] {
    ${Fe}: var(--arc-color-fg-secondary);
  }

  &[data-variant=inverse] {
    ${Fe}: var(--arc-color-dark-neutral-1000);
  }

  &[data-variant=brand] {
    ${Fe}: var(--arc-color-fg-brand-stark);
  }

  &[data-variant=info] {
    ${Fe}: var(--arc-color-fg-info-stark);
  }

  &[data-variant=success] {
    ${Fe}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=warning] {
    ${Fe}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=critical] {
    ${Fe}: var(--arc-color-fg-critical-mid);
  }

`,Hh=s`

  /* Overall Text Sizes */

  &[data-size=inherit] { /* @default 'inherit' • uses font/size from context */
    ${Ht}: 1em;
    ${Jo}: 0.75em;
    ${Ca}: 1em;
    ${ha}: 0.25em; /* 4px @ 100% */
  }

  &[data-size=md] {
    ${Ht}: var(--arc-font-size-14);
    ${Jo}: var(--arc-font-size-12);
    ${ha}: var(${E}•3);
  }

  &[data-size=sm] {
    ${Ht}: var(--arc-font-size-12);
    ${Jo}: var(--arc-font-size-12);
    ${ha}: var(${E}•3);
  }

  /* Gap Sizes */

  &[data-gap=lg] { ${ha}: var(${E}•12); } /* 12px @ 100% */
  &[data-gap=md] { ${ha}: var(${E}•8); }  /* 8px @ 100% */
  &[data-gap=sm] { ${ha}: var(${E}•3); }  /* 4px @ 100% */

  /* Icon Sizes */

  &[icon-size=xl] { ${Ca}: var(${p}•24); }
  &[icon-size=lg] { ${Ca}: var(${p}•20); }
  &[icon-size=md] { ${Ca}: var(${p}•16); }
  &[icon-size=sm] { ${Ca}: var(${p}•14); }
  &[icon-size=xs] { ${Ca}: var(${p}•12); }
`,Vh=s`

  /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  ${Xs}: var(--arc-icon-text-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));

  /* ArcIcon */
  --arc-icon-color: var(--arc-icon-text-icon-color, var(${Fe}));
  --arc-icon-size: var(--arc-icon-text-icon-size, var(${Ca}));
  --arc-icon-fa-line-height: normal;
  --arc-icon-align-self: baseline;

  &[data-layout=inline] {
    ${Vt}: unset;
    ${Zo}: unset;
    ${Xo}: unset;

    ${Zs}: calc((var(${Ca}) - var(${Ht})) / -2);

    &:has(svg) { ${Zs}: text-bottom; }
  }

  /* Text Overflows */
  &[data-layout=gutter] {
    ${Vt}: visible;
    ${Zo}: unset;
    ${Xo}: normal;

    &[data-overflow=truncate] {
      ${Vt}: hidden;
      ${Zo}: ellipsis;
      ${Xo}: nowrap;
    }
  }

`,Uh=s`
@layer arc-components {

  [arc-icon-text] {
    ${Fh}
    ${Hh}
    ${Vh}
  }

  [arc-icon-text] {
    position: var(--arc-icon-text-position, relative);
    font-size: var(--arc-icon-text-font-size, var(${Ht}));
    color: var(--arc-icon-text-text-color, var(${Fe}));
    line-height: var(--arc-icon-text-line-height, 1lh);

    [data-element=icon] {
      display: contents;
    }

    [data-element] {
      /* @note: SVG alignment mitigation strategy; presents in multiple components
       * Badges, CheckboxBars, RadioBars, supporting IconText cases like Links, etc. when using SVG icons.
       */
      :where(svg) {
        flex: none;
        align-self: var(--arc-icon-text-svg-align-self, normal);
        display: var(--arc-icon-text-svg-display, inline-block) !important;
        width: var(--arc-icon-text-svg-width, 1.25em) !important;
        height: var(--arc-icon-text-svg-height, auto) !important;
        max-height: var(--arc-icon-text-svg-max-height, 1lh);
        fill: var(--arc-icon-text-svg-fill, currentColor);
        vertical-align: var(--arc-icon-text-svg-vertical-align, text-bottom) !important;
        overflow: var(--arc-icon-text-svg-overflow, visible) !important;
      }
    }

    [data-element=text],
    [data-element=subtext] {
      position: relative;
      hyphens: var(--arc-icon-text-hyphens, auto);
    }

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-icon-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-icon-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    /* @default • gutter layout */
    &[data-layout=gutter] {
      display: inline-flex;
      align-items: var(--arc-icon-text-align-items, first baseline);
      gap: var(--arc-icon-text-gap, var(${ha}));

      /* Truncation Support */
      overflow: var(--arc-icon-text-overflow, var(${Vt}));

      &[is-flipped] { flex-direction: row-reverse; }

      [data-element=text] {
        flex: 1;
        min-width: 0%;
      }

      [data-element=subtext] {
        display: var(--arc-icon-text-subtext-display, block);
        line-height: normal;
        font-size: var(--arc-icon-text-subtext-font-size, var(${Jo}));
        color: var(--arc-icon-text-subtext-color, var(${Xs}));
        padding-block-start: var(--arc-icon-text-subtext-spacing, 0);
      }

      :where([data-element=text], [data-element=subtext]) {
        overflow: var(--arc-icon-text-overflow, var(${Vt}));
        text-overflow: var(--arc-icon-text-text-overflow, var(${Zo}));
        white-space: var(--arc-icon-text-white-space, var(${Xo}));
      }
    }

    &[data-layout=inline] {
      display: inline;

      [data-element=icon] + [data-element=text] { margin-inline-start: var(--arc-icon-text-gap, var(${ha})); }
      [data-element=text]:has(+ [data-element=icon]) { margin-inline-end: var(--arc-icon-text-gap, var(${ha})); }
      [data-element=subtext] { display: contents; }
    }
  }
}

`,Kh=ar(_r,["inherit","primary","secondary","inverse","brand","info","success","warning","critical"]),re=({children:r,layout:e="gutter",size:a="inherit",variant:t="inherit",tag:o="span",icon:n,iconTooltip:c,text:l,subtext:d,gradient:h,overflow:g,iconSize:f,gapSize:v,isFlipped:b=!1,isStrong:m=!1,...$})=>{const w=r||l,_=!!n,y=!!w,C=e==="gutter",S=e==="inline",I=_&&(!b||C),j=_&&y&&b&&S,L=!!f&&f!=="inherit",D=L&&La.includes(f)?f:void 0,z=L&&!La.includes(f)?f:void 0,k=v!=="inherit"?v:void 0,V=g!=="inherit"?g:void 0,U=wc(n),Y=typeof U=="string"?(0,i.jsx)(ir,{icon:U,size:z,gradient:h}):U,W=c?(0,i.jsx)(sn,{text:c,children:Y}):Y;return(0,i.jsxs)(o,{...$,"arc-icon-text":"","data-variant":t,"data-layout":e,"data-overflow":V,"data-size":a,"data-gap":k,"icon-size":D,"is-flipped":b?"":void 0,"is-strong":m?"":void 0,children:[I&&(0,i.jsx)("span",{"data-element":"icon",children:W}),y&&(0,i.jsxs)("span",{"data-element":"text",children:[w,!!d&&(C?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("small",{"data-element":"subtext",children:d})]}):(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("span",{"data-element":"subtext",children:d})]}))]}),j&&(0,i.jsx)("span",{"data-element":"icon",children:W})]})};lr("ArcIconText",Uh);const He={...ve,popover:Sc[2],anchorAt:Ec[2],boundary:_c[1],tryFallbacks:!0,scheme:zc[3],offset:4,isStrong:!0,hasTail:!0,isEnabled:!0},Qo=new WeakSet,Wh=100,Gh=100;let Mc=!0,Bc=null;const qh=typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("selector(:focus-visible)"),Yh=r=>r instanceof Element?qh?r.matches(":focus-visible")===!0:Mc:!1,Oc=new WeakMap,Dc=new WeakMap,Ut=new Set,rn=(r,e)=>{const a=r.get(e);a!=null&&(clearTimeout(a),r.delete(e))},Js=(r,e,a,t)=>{const o=window.setTimeout(()=>{t(),r.delete(e)},a);r.set(e,o)},Qs="[aria-describedby]",Zh=r=>typeof r=="object"&&r!==null&&r.hasAttribute?.("popover")===!0,rl=r=>r instanceof HTMLElement&&r.getAttribute("role")==="tooltip"&&Zh(r),Xh=r=>!!r&&(r.tagName==="LABEL"||r.hasAttribute("arc-label")),Jh=r=>r?.match(/\S+/g)??[],Nc=(r,e)=>{const a=ze(e??document.documentElement);if(!a)return null;const t=a.querySelector(`[aria-describedby~="${r}"]`);return t?t.closest("label,[arc-label]")??t:null},Qh=r=>{if(!(r instanceof Element))return null;const e=r.closest?.(Qs);if(e){const t=e.getAttribute("aria-describedby")??"";if(t)return{anchor:e.closest?.("label,[arc-label]")??e,tooltipId:t}}let a=r;for(;a;){if(Xh(a)){const t=a.querySelector?.(Qs),o=t?.getAttribute?.("aria-describedby")??"";if(t&&o)return{anchor:a,tooltipId:o}}a=a.parentElement}return null},r0=r=>{if(!(r instanceof Element))return null;const e=r.closest?.('[role="tooltip"][popover]')??null;return e instanceof HTMLElement?e:null},e0=r=>r?.id?Nc(r.id,r):null,a0=r=>{const e=r0(r),a=Qh(r);if(!a&&e){const d=e0(e);return!d||!e.id?null:{anchor:d,tooltip:e}}if(!a)return null;const{anchor:t,tooltipId:o}=a;if(!o)return null;const n=ze(r);if(!n)return null;const c=Jh(o),l=e??c.map(d=>n.getElementById(d)).find(d=>rl(d))??null;return rl(l)?{anchor:t,tooltip:l}:null},t0=(r,e,a)=>{const t=a instanceof Element?a:null;if(!t)return!1;const o=r===t||r.contains(t),n=e===t||e.contains(t);return o||n},el=r=>{r.isConnected&&(r.showPopover?.(),Ut.add(r))},al=r=>{r.isConnected&&(r.hidePopover?.(),Ut.delete(r))},o0=(r,e)=>{if(rn(Dc,r),rn(Oc,r),!e){el(r);return}Js(Oc,r,Wh,()=>el(r))},Fc=(r,e)=>{if(rn(Oc,r),rn(Dc,r),!e){al(r);return}Js(Dc,r,Gh,()=>al(r))},n0=()=>{Ut.forEach(r=>{Fc(r,!1)})},Kt=(r,e,a,t)=>{const o=a0(e);if(!o)return;const{anchor:n,tooltip:c}=o;if(r){o0(c,t);return}t0(n,c,a)||Fc(c,t)};let en=null,an=null,tn=null,on=null,nn=null,cn=null,dt=null,Wt=null;const tl=r=>{if(!r&&typeof document>"u")return;const e=r?ze(r):document;if(!e||Qo.has(e))return;cn=t=>{Mc=!1,Bc=t.target},dt=()=>{Bc=null},en=t=>Kt(!0,t.target,void 0,!0),tn=t=>Kt(!1,t.target,t.relatedTarget,!0),an=t=>{Yh(t.target)&&Kt(!0,t.target,void 0,!1)},on=t=>{const o=t.relatedTarget??Bc;Kt(!1,t.target,o,!1)},nn=t=>{t.key==="Tab"&&(Mc=!0),t.key==="Escape"&&(Ut.size>0&&t.preventDefault(),Kt(!1,t.target,void 0,!1),Ut.forEach(o=>Fc(o,!1)))},Wt=t=>{if(t.newState!=="open")return;const{target:o}=t;if(o instanceof HTMLElement&&o.getAttribute("role")!=="tooltip"&&o.getAttribute("popover")!=="manual"){try{if(!o.matches("[popover]:popover-open"))return}catch{return}n0()}},[["pointerdown",cn],["pointerup",dt],["pointercancel",dt],["pointerover",en],["focusin",an],["pointerout",tn],["focusout",on],["keydown",nn]].forEach(([t,o])=>{e.addEventListener(t,o)}),e.addEventListener("toggle",Wt,!0),Qo.add(e)},c0=()=>{if(!Qo.has(document)||typeof document>"u")return;[["pointerdown",cn],["pointerup",dt],["pointercancel",dt],["pointerover",en],["focusin",an],["pointerout",tn],["focusout",on],["keydown",nn]].forEach(([e,a])=>{a&&document.removeEventListener(e,a)}),Wt&&document.removeEventListener("toggle",Wt,!0),en=null,an=null,tn=null,on=null,nn=null,cn=null,dt=null,Wt=null,Qo.delete(document)},Ve=s`--arc•tooltip`,ol=s`${Ve}•subtext`,nl=s`${Ve}•slot`,i0=s`
@layer arc-components {
  [arc-tooltip] {
    ${Ve}•width: max-content;
    ${Ve}•max•width: 20em;
    ${Ve}•font•size: var(${p}•12);
    ${Ve}•padding: var(${E}•10);
    ${ol}•spacing: var(${E}•6);
    ${nl}•margin•top: var(${E}•8);

    /* Communicates to Popover Engine ------------------------------• */
    --arc-popover-overflow: var(--arc-tooltip-overflow, clip);
    --arc-popover-border-radius: var(--arc-border-radius-md);
    --arc-popover-min-width: auto; /** Ensure tooltip width is driven by content, not anchor width */
    --arc-popover-width: var(--arc-tooltip-width, var(${Ve}•width));
    --arc-popover-max-width: var(--arc-tooltip-max-width, var(${Ve}•max•width));
    --arc-popover-border: var(--arc-tooltip-border, 0);
    --arc-popover-footer-flex-direction: var(--arc-tooltip-footer-flex-direction, row);
    --arc-popover-font-size: var(--arc-tooltip-font-size, var(${Ve}•font•size));
    --arc-popover-padding: var(--arc-tooltip-padding, var(${Ve}•padding));
    --arc-popover-tail-x: var(--arc-tooltip-tail-x, 1.125em);
    --arc-popover-tail-y: var(--arc-tooltip-tail-y, 1.125em);
    --arc-popover-line-height: var(--arc-line-height-tight);

    /* Communicates to IconText ----------------------------------• */
    --arc-icon-text-subtext-font-size: var(--arc-tooltip-subtext-font-size, var(${Ve}•font•size));
    --arc-icon-text-hyphens: none;
    --arc-icon-text-subtext-spacing: var(--arc-tooltip-subtext-spacing, var(${ol}•spacing));

    [arc-tooltip-content] + [arc-tooltip-slot-content] {
      margin-top: var(--arc-tooltip-slot-margin-top, var(${nl}•margin•top));
    }
  }
}
`,sn=(0,u.forwardRef)(({id:r,children:e,slot:a,isEnabled:t=He.isEnabled,popover:o=He.popover,variant:n=He.variant,anchorAt:c=He.anchorAt,alternateAnchor:l,boundary:d=He.boundary,tryFallbacks:h=He.tryFallbacks,hasTail:g=He.hasTail,offset:f=He.offset,scheme:v=He.scheme,isStrong:b=He.isStrong,text:m,subtext:$,icon:w,isFlipped:_,...y},C)=>{const S=Ir(r,"arc-tooltip"),I=(0,u.useRef)(null);(0,u.useImperativeHandle)(C,()=>I.current);const j=U=>typeof U=="object"&&U!==null&&"tabIndex"in U,L=e,D=!!l;let z=null;(0,u.isValidElement)(L)?z=t?(0,u.cloneElement)(L,{"aria-describedby":S,...j(L.props)&&L.props.tabIndex!=null?{}:{tabIndex:0}}):L:!D&&typeof console<"u"&&Gs("\u{1F6A8} ArcTooltip \u2022 expects a single ReactElement child as the trigger.");const k=(0,u.useMemo)(()=>()=>Nc(S,I.current),[S]),V=v==="auto"?void 0:v;return(0,u.useEffect)(()=>{if(t)try{tl(I.current)}catch{}},[t]),(0,i.jsxs)(i.Fragment,{children:[z,t&&(0,i.jsxs)(ga,{...y,"arc-tooltip":"",scheme:y?.isInverse?"inverse":V,role:"tooltip",id:S,ref:I,popover:o,anchorAt:c,tryFallbacks:h??d==="flip",variant:n,hasTail:g,offset:f,hidePopoverButton:!0,alternateAnchor:l??k,tag:y?.tag??"span",contentTag:y?.contentTag??"span",children:[m&&(0,i.jsx)(re,{"arc-tooltip-content":"",text:m,subtext:$,icon:w,isFlipped:_,isStrong:b,size:"inherit",variant:"inherit"}),a&&(0,i.jsx)("span",{"arc-tooltip-slot-content":"",children:a})]})]})});lr("ArcTooltip",i0);const s0=({isFloating:r,isOnMedia:e,shadow:a})=>[{condition:!r&&e,value:"light-md"},{condition:r&&!e,value:"lg"},{condition:r&&e,value:"light-lg"},{condition:r||a===!0,value:"lg"}],l0=({isFloating:r,isOnMedia:e,shadow:a})=>s0({isFloating:r,isOnMedia:e,shadow:a}).find(t=>t.condition)?.value??a,d0=({layout:r,isFloating:e})=>[{condition:r==="icon",value:"icon"},{condition:e||r==="hug",value:"hug"},{condition:!e&&r==="fill",value:"fill"}],u0=({layout:r,isFloating:e})=>d0({layout:r,isFloating:e}).find(a=>a.condition)?.value??r,h0=({scheme:r,isInverse:e})=>[{condition:e,value:"inverse"},{condition:r==="auto",value:void 0},{condition:!0,value:r}],g0=({scheme:r,isInverse:e})=>{const a=h0({scheme:r,isInverse:e}).find(t=>t.condition)?.value??r;return a==="auto"?void 0:a},v0=ar(Et,["round","square","narrow"]),p0=ar(oe,["xxl","xl","lg","md","sm"]),f0=ar(Oe,["hug","fill","icon"]),cl=ar(_r,["common","neutral","ai","critical","alpha"]),Hc=[...sa],m0=[...Po],il=ar(Lo,["primary","secondary","tertiary","plain","link-style"]),b0=[...rt],$0={circle:"round"},sl=({shape:r})=>la(r,$0),Vc=ar(_r,["primary","secondary","tertiary","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse"]),ll={primary:{variant:"common",hierarchy:"primary"},secondary:{variant:"common",hierarchy:"secondary"},tertiary:{variant:"common",hierarchy:"tertiary"},"critical-primary":{variant:"critical",hierarchy:"primary"},"critical-secondary":{variant:"critical",hierarchy:"secondary"},"ai-primary":{variant:"ai",hierarchy:"primary"},"ai-secondary":{variant:"ai",hierarchy:"secondary"},"primary-inverse":{variant:"common",hierarchy:"primary",scheme:"inverse"},"secondary-inverse":{variant:"common",hierarchy:"secondary",scheme:"inverse"},"tertiary-inverse":{variant:"common",hierarchy:"tertiary",scheme:"inverse"}},y0=(()=>{const r=new Map;return Vc.forEach(e=>{const a=ll[e],t=a.scheme==="inverse"?"inverse":"";r.set(`${a.variant}|${a.hierarchy}|${t}`,e)}),r})(),x0=r=>!!(r&&Vc.includes(r)),ln=r=>r!==void 0&&x0(r)?ll[r]:void 0,dl=({variant:r})=>ln(r)?.variant??r,ul=({variant:r,hierarchy:e})=>ln(r)?.hierarchy??e,hl=({variant:r,isInverse:e,scheme:a})=>ln(r)?.scheme??g0({scheme:a,isInverse:e}),k0={variant:cl[0],hierarchy:il[0],scheme:Hc[0]},w0=({variant:r})=>{const e=ln(r);return e?{variant:e.variant,hierarchy:e.hierarchy,scheme:e.scheme??Hc[0]}:k0},C0=({variant:r,hierarchy:e,scheme:a})=>y0.get(`${r}|${e}|${a==="inverse"?"inverse":""}`),ye=s`60deg`,kr={purple:{50:s`light-dark(#fbf2ff, #210125)`,100:s`light-dark(#efccff, #540160)`,200:s`light-dark(#9c15ff, #ad44cb)`,300:s`light-dark(#680278, #ad44cb)`,400:s`light-dark(#5d3668, #c778de)`,500:s`light-dark(#37003f, #e3a7ff)`,600:s`light-dark(#27002c, #f9ebff)`},blue:{50:s`light-dark(#f4fbff, #00223b)`,100:s`light-dark(#d2f1fe, #02497d)`,200:s`light-dark(#1eb4fb, #169cfe)`,300:s`light-dark(#0179d0, #71bdfe)`,400:s`light-dark(#36648c, #84daff)`,500:s`light-dark(#004273, #b7eaff)`,600:s`light-dark(#012a48, #c2edff)`}},Gt=s`var(--arc-color-overlay-subtle)`,A0=s`
:root {
  --arc-button-critical-bg-hover: light-dark(
    color-mix(in srgb, var(--arc-color-light-red-600), transparent 90%),
    color-mix(in srgb, var(--arc-color-dark-red-700), transparent 75%)
  );

  /* * + secondary floating button */
  --arc-button-floating-bg: ${Gt};
  --arc-button-floating-bg-processing: ${Gt};
  --arc-button-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-floating-bg-focus: ${Gt};
  --arc-button-floating-bg-hover: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-100));
  --arc-button-floating-bg-active: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-200));

  /* critical + floating button */
  --arc-button-critical-floating-bg-hover: var(--arc-color-bg-critical-subtle);
  --arc-button-critical-floating-bg-active: var(--arc-color-bg-critical-muted);

  /* ai + secondary floating button */
  --arc-button-ai-floating-bg: ${Gt} linear-gradient(${ye}, transparent, ${Gt});

  /*
  ai variant gradients that can be slightly transitioned: 'bg-color + gradient(transparent -> color)'
  bg-color can be transitioned, gradient not so much. Result: subtle transition of the bg-color through the transparent parts of the gradient.
  */
  --arc-button-gradient-ai-transparent: transparent linear-gradient(${ye}, transparent, transparent);
  --arc-button-gradient-ai-50: ${kr.purple[50]} linear-gradient(${ye}, transparent, ${kr.blue[50]});
  --arc-button-gradient-ai-100: ${kr.purple[100]} linear-gradient(${ye}, transparent, ${kr.blue[100]});
  --arc-button-gradient-ai-200: ${kr.purple[200]} linear-gradient(${ye}, transparent, ${kr.blue[200]});
  --arc-button-gradient-ai-300: ${kr.purple[300]} linear-gradient(${ye}, transparent, ${kr.blue[300]});
  --arc-button-gradient-ai-400: ${kr.purple[400]} linear-gradient(${ye}, transparent, ${kr.blue[400]});
  --arc-button-gradient-ai-500: ${kr.purple[500]} linear-gradient(${ye}, transparent, ${kr.blue[500]});
  --arc-button-gradient-ai-600: ${kr.purple[600]} linear-gradient(${ye}, transparent, ${kr.blue[600]});
}
`,S0=s`
:root {
  --arc-link-fg-hover-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 68.2%, transparent);
  --arc-link-fg-disabled-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 30%, transparent);
  --arc-link-focus-disabled-inverse: light-dark(var(--arc-color-light-blue-300), var(--arc-color-light-blue-600));
}
`,z0=s`
:root {
  /* Tail edge colors for 'variant=ai' popovers */
  --arc-popover-ai-purple-50: ${kr.purple[50]};
  --arc-popover-ai-purple-200: ${kr.purple[200]};
  --arc-popover-ai-blue-50: ${kr.blue[50]};
  --arc-popover-ai-blue-200: ${kr.blue[200]};
}
`,E0=s`
:root {
  --arc-progress-bar-gradient-ai-200: linear-gradient(${ye}, ${kr.purple[200]} -0.5em, ${kr.blue[200]});
}
`,_0=s`
:root {
  --arc-banner-gradient-ai-50: linear-gradient(${ye}, ${kr.purple[50]}, ${kr.blue[50]});
  --arc-banner-gradient-ai-100: linear-gradient(${ye}, ${kr.purple[100]}, ${kr.blue[100]});
  --arc-banner-gradient-ai-300: linear-gradient(${ye}, ${kr.purple[300]}, ${kr.blue[300]});
}
`,A=s`--arc•button`,T=s`${A}•fg`,x=s`${A}•bg`,K=s`${A}•edge`,mr=s`${A}•border`,ut=s`${A}•outline`,Ue=s`${A}•label`,ee=s`${A}•mask`,sr=s`${A}•spinner`,Mr=s`${A}•icon`,qr=s`${Mr}•svg`,I0=s`
  &[data-size=xxl] {
    ${A}•font•size: var(${p}•16);
    ${A}•height: var(${p}•56);
    ${sr}•size: var(${p}•32);
    ${Mr}•size: var(${p}•20);
    ${Mr}•size•large: var(${p}•24);
    ${qr}•size: var(${p}•25);
    ${qr}•size•large: var(${p}•24);
    ${Ue}•spacing: var(${p}•12);
    ${A}•spacing: var(${p}•16);
    ${A}•spacing•square: var(${p}•16);
    ${mr}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=xl] {
    ${A}•font•size: var(${p}•14);
    ${A}•height: var(${p}•48);
    ${sr}•size: var(${p}•16);
    ${Mr}•size: var(${p}•16);
    ${Mr}•size•large: var(${p}•20);
    ${qr}•size: var(${p}•20);
    ${qr}•size•large: var(${p}•25);
    ${Ue}•spacing: var(${p}•10);
    ${A}•spacing: var(${p}•14);
    ${A}•spacing•square: var(${p}•14);
    ${mr}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=lg] { /** @default */
    ${A}•font•size: var(${p}•14);
    ${A}•height: var(${p}•40);
    ${sr}•size: var(${p}•16);
    ${Mr}•size: var(${p}•16);
    ${Mr}•size•large: var(${p}•20);
    ${qr}•size: var(${p}•20);
    ${qr}•size•large: var(${p}•25);
    ${Ue}•spacing: var(${p}•8);
    ${A}•spacing: var(${p}•12);
    ${A}•spacing•square: var(${p}•10);
    ${mr}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=inherit] {
    ${A}•font•size: 1em;
    ${A}•height: 2.5em;
    ${sr}•size: 1.125em;
    ${Mr}•size: 1.125em;
    ${Mr}•size•large: 1.25em;
    ${qr}•size: 1.25em;
    ${qr}•size•large: 1.375em;
    ${Ue}•spacing: 0.5em;
    ${A}•spacing: 0.75em;
    ${A}•spacing•square: 0.625em;
    ${mr}•radius•square: var(--arc-border-radius-md);
  }

  &[data-size=md] {
    ${A}•font•size: var(${p}•14);
    ${A}•height: var(${p}•32);
    ${sr}•size: var(${p}•16);
    ${Mr}•size: var(${p}•14);
    ${Mr}•size•large: var(${p}•20);
    ${qr}•size: var(${p}•18);
    ${qr}•size•large: var(${p}•25);
    ${Ue}•spacing: var(${p}•6);
    ${A}•spacing: var(${p}•10);
    ${A}•spacing•square: var(${p}•8);
    ${mr}•radius•square: var(--arc-border-radius-md);
  }

  &[data-size=sm] {
    ${A}•font•size: var(${p}•12);
    ${A}•height: var(${p}•24);
    ${sr}•size: var(${p}•14);
    ${Mr}•size: var(${p}•12);
    ${Mr}•size•large: var(${p}•14);
    ${qr}•size: var(${p}•15);
    ${qr}•size•large: var(${p}•18);
    ${Ue}•spacing: var(${p}•4);
    ${A}•spacing: var(${p}•8);
    ${A}•spacing•square: var(${p}•6);
    ${mr}•radius•square: var(--arc-border-radius-md);
  }

  /* Custom button overrides • metrics based on size: 'inherit' */
  &[arc-button=custom] {
    ${A}•font•weight: normal;
    ${mr}•radius: 0.25em;
    ${A}•height: auto;
  }
`,T0=s`
  &[data-layout=hug] {
    ${A}•width: auto;
    ${A}•content•width: fit-content;
  }

  &[data-layout=fill] {
    ${A}•display: flex;
    ${A}•width: 100%;
    ${A}•content•width: 0;
  }

  &:not([data-layout=icon]) {
    ${Mr}•width: auto;
  }

  &[data-layout=icon] {
    ${A}•aspect•ratio: 1 / 1;
    ${A}•min•width: min-content;
    ${A}•max•width: none;
    ${A}•spacing: var(${p}•0);

    ${Mr}•width: 1.25em;

    &[data-shape=narrow] {
      ${A}•aspect•ratio: auto;
      ${A}•spacing: var(${p}•2);
      ${Mr}•width: auto;
    }
  }

  &[data-shape=square] {
    ${A}•spacing: var(${A}•spacing•square);
  }

  &:is(
    [data-layout=icon]:not([data-shape]),
    [data-shape=square],
    [data-shape=narrow]
  ) {
    ${mr}•radius: var(${mr}•radius•square);
  }

`,j0=s`
  /** @mitigation • when no variant is set (i.e.: 'custom' buttons) */
  &:not([data-variant]) {
    ${T}: inherit;
    ${x}: transparent;
    ${K}: transparent;
    ${T}•disabled: var(--arc-color-fg-disabled);
  }

  /** @default */
  &[data-variant=common] {
    ${mr}•width: var(${p}•1);
    ${sr}•progress•color: var(--arc-color-border-brand-mid);
    ${sr}•base•color: var(--arc-color-alpha-mid);

    /** @default */
    &:where([data-hierarchy=primary]) {
      ${T}: var(--arc-color-fg-on-theme-heavy);
      ${x}: var(--arc-color-bg-theme-heavy);
      ${K}: transparent;

      ${T}•active: var(--arc-color-fg-on-theme-mid);
      ${T}•processing: var(--arc-color-fg-on-theme-stark);
      ${T}•disabled: var(--arc-color-fg-disabled);

      ${x}•hover: var(--arc-color-bg-theme-stark);
      ${x}•active: var(--arc-color-bg-theme-mid);
      ${x}•processing: var(--arc-color-bg-theme-stark);
      ${x}•disabled: var(--arc-color-bg-disabled);

      ${sr}•progress•color: var(--arc-color-mono-white);
      ${sr}•base•color: var(--arc-color-alpha-white-30);
    }

    &:where([data-hierarchy=secondary]) {
      ${T}: var(--arc-color-fg-primary);
      ${x}: transparent;
      ${K}: var(--arc-color-border-theme-heavy);

      ${T}•active: var(--arc-color-fg-secondary);
      ${T}•processing: var(--arc-color-fg-secondary);
      ${T}•disabled: var(--arc-color-fg-disabled);

      ${K}•active: var(--arc-color-border-theme-mid);
      ${K}•processing: var(--arc-color-border-theme-subtle);
      ${K}•disabled: var(--arc-color-border-disabled);

      ${x}•hover: var(--arc-color-bg-neutral-muted);
      ${x}•active: var(--arc-color-bg-neutral-subtle);
      ${x}•processing: transparent;
      ${x}•disabled: transparent;

      &:where([data-layout=icon]) {
        ${K}: var(--arc-color-border-mid);
        ${K}•hover: var(--arc-color-border-stark);
        ${K}•focus: var(--arc-color-border-mid);
      }

      &:where([is-floating]) {
        ${x}: var(--arc-button-floating-bg);
        ${x}•processing: var(--arc-button-floating-bg-processing);
        ${x}•disabled: var(--arc-button-floating-bg-disabled);
        ${x}•focus: var(--arc-button-floating-bg-focus);
        ${x}•hover: var(--arc-button-floating-bg-hover);
        ${x}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${T}: var(--arc-color-fg-primary);
      ${x}: transparent;
      ${K}: transparent;

      ${T}•active: var(--arc-color-fg-secondary);
      ${T}•processing: var(--arc-color-fg-secondary);
      ${T}•disabled: var(--arc-color-fg-disabled);

      ${x}•hover: var(--arc-color-bg-neutral-muted);
      ${x}•active: var(--arc-color-bg-neutral-muted);
      ${x}•processing: var(--arc-color-bg-neutral-muted);
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${T}: var(--arc-color-fg-primary);
      ${x}: transparent;
      ${K}: transparent;

      ${T}•hover: var(--arc-color-alpha-heavy);
      ${T}•active: var(--arc-color-alpha-heavy);
      ${T}•processing: var(--arc-color-alpha-heavy);
      ${T}•disabled: var(--arc-color-fg-disabled);

      ${x}•hover: transparent;
      ${x}•active: transparent;
      ${x}•processing: transparent;
    }
  }

`,R0=s`
  &[data-variant=neutral] {
    ${mr}•width: var(${p}•1);
    ${sr}•progress•color: var(--arc-color-border-brand-mid);
    ${sr}•base•color: var(--arc-color-alpha-mid);

    &:where([data-hierarchy=primary]) {
      ${T}: var(--arc-color-fg-primary);
      ${x}: transparent;
      ${K}: var(--arc-color-border-mid);

      ${T}•active: var(--arc-color-fg-secondary);
      ${T}•processing: var(--arc-color-fg-secondary);
      ${T}•disabled: var(--arc-color-fg-disabled);

      ${x}•hover: var(--arc-color-bg-neutral-muted);
      ${x}•active: var(--arc-color-bg-neutral-subtle);
      ${x}•processing: transparent;
      ${x}•disabled: transparent;

      &:where([is-floating]) {
        ${x}: var(--arc-button-floating-bg);
        ${x}•processing: var(--arc-button-floating-bg-processing);
        ${x}•disabled: var(--arc-button-floating-bg-disabled);
        ${x}•focus: var(--arc-button-floating-bg-focus);
        ${x}•hover: var(--arc-button-floating-bg-hover);
        ${x}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=secondary]) {
      ${T}: var(--arc-color-fg-neutral-stark);
      ${x}: transparent;
      ${K}: var(--arc-color-border-mid);

      ${T}•hover: var(--arc-color-fg-primary);
      ${T}•active: var(--arc-color-fg-secondary);
      ${T}•processing: var(--arc-color-fg-secondary);
      ${T}•disabled: var(--arc-color-fg-disabled);

      ${K}•disabled: var(--arc-color-border-disabled);

      ${x}•hover: var(--arc-color-bg-neutral-muted);
      ${x}•active: var(--arc-color-bg-neutral-subtle);
      ${x}•processing: transparent;
      ${x}•disabled: transparent;

      &:where([data-layout=icon]) {
        ${K}: var(--arc-color-border-mid);
        ${K}•hover: var(--arc-color-border-stark);
        ${K}•focus: var(--arc-color-border-mid);
      }

      &:where([is-floating]) {
        ${x}: var(--arc-button-floating-bg);
        ${x}•processing: var(--arc-button-floating-bg-processing);
        ${x}•disabled: var(--arc-button-floating-bg-disabled);
        ${x}•focus: var(--arc-button-floating-bg-focus);
        ${x}•hover: var(--arc-button-floating-bg-hover);
        ${x}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${T}: var(--arc-color-fg-neutral-stark);
      ${x}: transparent;
      ${K}: transparent;

      ${T}•active: var(--arc-color-fg-secondary);
      ${T}•processing: var(--arc-color-fg-secondary);
      ${T}•disabled: var(--arc-color-fg-disabled);

      ${x}•hover: var(--arc-color-bg-neutral-muted);
      ${x}•active: var(--arc-color-bg-neutral-subtle);
      ${x}•processing: var(--arc-color-bg-neutral-muted);
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${T}: var(--arc-color-fg-neutral-stark);
      ${x}: transparent;
      ${K}: transparent;

      ${T}•hover: var(--arc-color-fg-primary);
      ${T}•active: var(--arc-color-fg-neutral-mid);
      ${T}•processing: var(--arc-color-fg-secondary);
      ${T}•disabled: var(--arc-color-fg-disabled);

      ${x}•hover: transparent;
      ${x}•active: transparent;
      ${x}•processing: transparent;
    }
  }

`,P0=s`
  &[data-variant=ai] {
    ${T}•disabled: var(--arc-color-fg-disabled);
    ${K}•disabled: var(--arc-color-border-disabled);
    ${mr}•width: var(${p}•2);

    ${ee}•bg: var(--arc-gradient-ai-200);
    ${ee}•disabled: var(--arc-color-border-disabled);
    ${ee}•processing: var(--arc-gradient-ai-100);

    &:where([data-hierarchy=primary]) {
      ${T}: var(--arc-color-fg-on-theme-stark);
      ${x}: var(--arc-button-gradient-ai-500) padding-box;
      ${K}: transparent;

      ${T}•active: var(--arc-color-fg-neutral-mid);
      ${T}•processing: var(--arc-color-fg-on-theme-heavy);
      ${T}•hover: var(--arc-color-fg-on-theme-heavy);

      ${x}•hover: var(--arc-button-gradient-ai-400) padding-box;
      ${x}•active: var(--arc-button-gradient-ai-600) padding-box;
      ${x}•processing: var(--arc-button-gradient-ai-400) padding-box;
      ${x}•disabled: var(--arc-color-bg-disabled) padding-box;

      ${sr}•progress•color: var(--arc-color-mono-white);
      ${sr}•base•color: var(--arc-color-alpha-white-30);

      ${ee}•hover: var(--arc-gradient-ai-200);
      ${ee}•active: var(--arc-gradient-ai-200);
    }

    &:where([data-hierarchy=secondary]) {
      ${T}: var(--arc-color-fg-primary);
      ${x}: var(--arc-button-gradient-ai-transparent) padding-box; /* allows subtle transition of bg-color through the transparent parts of the gradient */
      ${K}: transparent;

      ${T}•active: var(--arc-color-fg-neutral-stark);
      ${T}•processing: var(--arc-color-fg-primary);

      ${x}•hover: var(--arc-button-gradient-ai-50) padding-box;
      ${x}•focus: var(--arc-button-gradient-ai-50) padding-box;
      ${x}•active: var(--arc-button-gradient-ai-50) padding-box;
      ${x}•processing: var(--arc-button-gradient-ai-50) padding-box;
      ${x}•disabled: var(--arc-color-bg-disabled) padding-box;

      ${sr}•progress•color: var(--arc-color-border-brand-mid);

      ${ee}•hover: var(--arc-gradient-ai-300);
      ${ee}•active: var(--arc-gradient-ai-100);

      &:where([is-floating]) {
        ${x}: var(--arc-button-ai-floating-bg) padding-box;
      }
    }
  }

`,L0=s`
  &[data-variant=alpha] {
    ${mr}•width: var(${p}•1);
    ${sr}•base•color: var(--arc-color-alpha-white-30);

    &:where([data-hierarchy=primary]) {
      ${T}: var(--arc-color-mono-black);
      ${x}: var(--arc-color-mono-white);
      ${K}: transparent;

      ${T}•focus: var(--arc-color-mono-black);
      ${T}•active: var(--arc-color-alpha-black-60);
      ${T}•processing: var(--arc-color-mono-black);
      ${T}•disabled: var(--arc-color-alpha-black-60);

      ${x}•hover: var(--arc-color-alpha-white-70);
      ${x}•active: var(--arc-color-alpha-white-40);
      ${x}•processing: var(--arc-color-alpha-white-40);
      ${x}•disabled: var(--arc-color-alpha-white-15);
    }

    &:where([data-hierarchy=secondary]) {
      ${T}: var(--arc-color-alpha-white-95);
      ${x}: transparent;
      ${K}: var(--arc-color-alpha-white-80);

      ${T}•active: var(--arc-color-alpha-white-80);
      ${T}•processing: var(--arc-color-alpha-white-95);
      ${T}•disabled: var(--arc-color-alpha-white-50);

      ${x}•hover: var(--arc-color-alpha-white-20);
      ${x}•active: var(--arc-color-alpha-white-40);
      ${x}•processing: var(--arc-color-alpha-white-25);
      ${x}•disabled: transparent;

      ${K}•hover: var(--arc-color-alpha-white-100);
      ${K}•focus: var(--arc-color-alpha-white-80);
      ${K}•active: var(--arc-color-alpha-white-50);
      ${K}•processing: transparent;
      ${K}•disabled: var(--arc-color-alpha-white-30);
    }

    &:where([data-hierarchy=tertiary]) {
      ${T}: var(--arc-color-alpha-white-95);
      ${x}: transparent;
      ${K}: transparent;

      ${T}•active: var(--arc-color-alpha-black-60);
      ${T}•processing: var(--arc-color-alpha-white-95);
      ${T}•disabled: var(--arc-color-alpha-white-50);

      ${x}•hover: var(--arc-color-alpha-white-20);
      ${x}•active: var(--arc-color-alpha-white-40);
      ${x}•processing: var(--arc-color-alpha-white-20);
      ${x}•disabled: transparent;
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${T}: var(--arc-color-alpha-white-95);
      ${x}: transparent;
      ${K}: transparent;

      ${T}•hover: var(--arc-color-alpha-white-60);
      ${T}•active: var(--arc-color-alpha-white-40);
      ${T}•processing: var(--arc-color-alpha-white-95);
      ${T}•disabled: var(--arc-color-alpha-white-30);
    }
  }
`,M0=s`
  &[data-variant=critical] {
    ${mr}•width: var(${p}•1);
    ${sr}•progress•color: var(--arc-color-border-brand-mid);

    &:where([data-hierarchy=primary]) {
      ${T}: var(--arc-color-fg-on-stark);
      ${x}: var(--arc-color-bg-critical-stark);
      ${K}: transparent;

      ${T}•active: var(--arc-color-fg-critical-subtle);
      ${T}•processing: var(--arc-color-fg-on-heavy);
      ${T}•disabled: var(--arc-color-fg-disabled);

      ${x}•hover: var(--arc-color-bg-critical-heavy);
      ${x}•active: var(--arc-color-bg-critical-heavy);
      ${x}•processing: var(--arc-color-bg-critical-heavy);
      ${x}•disabled: var(--arc-color-bg-disabled);

      ${sr}•progress•color: var(--arc-color-mono-white);
      ${sr}•base•color: var(--arc-color-alpha-white-30);
    }

    &:where([data-hierarchy=secondary]) {
      ${T}: var(--arc-color-fg-critical-stark);
      ${x}: transparent;
      ${K}: var(--arc-color-border-critical-stark);

      ${T}•active: var(--arc-color-fg-critical-subtle);
      ${T}•processing: var(--arc-color-fg-critical-stark);
      ${T}•disabled: var(--arc-color-fg-disabled);

      ${x}•hover: var(--arc-button-critical-bg-hover);
      ${x}•active: var(--arc-color-bg-critical-muted);
      ${x}•disabled: transparent;

      ${K}•active: var(--arc-color-border-critical-subtle);
      ${K}•processing: var(--arc-color-border-critical-stark);
      ${K}•disabled: var(--arc-color-border-disabled);

      /* "floating" button mitigation */
      &:where([is-floating]) {
        ${x}: var(--arc-button-floating-bg);
        ${x}•processing: var(--arc-button-floating-bg-processing);
        ${x}•disabled: var(--arc-button-floating-bg-disabled);
        ${x}•focus: var(--arc-button-floating-bg-focus);

        ${x}•hover: var(--arc-button-critical-floating-bg-hover);
        ${x}•active: var(--arc-button-critical-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${T}: var(--arc-color-fg-critical-stark);
      ${x}: transparent;
      ${K}: transparent;

      ${T}•active: var(--arc-color-fg-critical-subtle);
      ${T}•processing: var(--arc-color-fg-critical-stark);
      ${T}•disabled: var(--arc-color-fg-disabled);

      ${x}•hover: var(--arc-button-critical-bg-hover);
      ${x}•active: var(--arc-color-bg-critical-subtle);
      ${x}•processing: var(--arc-color-bg-critical-muted);
      ${x}•disabled: transparent;
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${T}: var(--arc-color-fg-critical-stark);
      ${x}: transparent;
      ${K}: transparent;

      ${T}•hover: var(--arc-color-fg-critical-mid);
      ${T}•active: var(--arc-color-fg-critical-subtle);
      ${T}•processing: var(--arc-color-fg-critical-stark);
      ${T}•disabled: var(--arc-color-fg-disabled);
    }
  }
`,B0=s`
  /** @overrides all variants when is onMedia (allows 'ai' gradient border) */
  &[is-on-media] {
    ${sr}•progress•color: var(--arc-color-mono-white);
    ${sr}•base•color: var(--arc-color-alpha-white-30);

    ${T}: var(--arc-color-mono-black);
    ${x}: var(--arc-color-alpha-white-70);
    ${K}: var(--arc-color-alpha-black-15);

    ${T}•active: var(--arc-color-alpha-black-50);
    ${T}•processing: var(--arc-color-alpha-black-50);
    ${T}•disabled: var(--arc-color-alpha-black-40);

    ${x}•hover: var(--arc-color-alpha-white-90);
    ${x}•focus: var(--arc-color-alpha-white-70);
    ${x}•active: var(--arc-color-alpha-white-70);
    ${x}•disabled: var(--arc-color-alpha-white-60);
    ${x}•processing: var(--arc-color-alpha-white-60);

    ${K}•active: var(--arc-color-alpha-black-10);
    ${K}•disabled: var(--arc-color-alpha-black-10);
  }
`,O0=s`
  ${A}•color: var(${T});
  ${A}•background: var(${x});
  ${A}•font•weight: var(--arc-font-weight-600);
  ${A}•cursor: var(--arc-button-cursor, pointer);
  ${A}•padding: 0 var(${A}•spacing);
  ${A}•content•opacity: 1;

  /**
   * @note: new spacing between label and icon
   * '--arc-button-gap' is @deprecated • this was the 'gap' at the [arc-button-content] level
   * '--arc-button-inline-spacing' is @preferred over '--arc-button-gap' */
  ${Ue}•padding: var(--arc-button-inline-spacing, var(--arc-button-gap, var(${Ue}•spacing)));

  ${mr}•color: var(${K});
  ${mr}: var(${mr}•width) solid var(${mr}•color, transparent);
  ${mr}•radius: var(--arc-border-radius-pill);

  ${ut}: var(--arc-border-width-md) solid var(${ut}•color, transparent);
  ${ut}•offset: var(--arc-border-width-md);

  /* spinner svg style controls */
  ${sr}•progress•color: var(--arc-button-progress-color, var(--arc-color-mono-white, currentcolor));
  ${sr}•circle•color: var(--arc-button-color, var(${sr}•base•color, var(--arc-color-alpha-mid)));
  ${sr}•circle•opacity: var(--arc-alpha-100);

  ${A}•transition:
    background 0.2s ease-out,
    color 0.2s ease-out,
    border-color 0.2s ease-out,
    outline-color 0.2s ease-out,
    opacity 0.2s ease-out,
    box-shadow 0.2s ease-out;

  &[data-hierarchy=link-style] {
    [arc-button-label] {
      text-decoration: var(--arc-link-text-decoration, underline);
      text-decoration-color: currentcolor;
    }

    [arc-button-icon] {
      text-decoration: none;
    }
  }

  /* Inter-Component Communication • ArcIcon -----------------------• */

  --arc-icon-size: var(${Mr}•size);

  ${qr}•width: var(${qr}•size);

  &[has-large-icon] {
    --arc-icon-size: var(${Mr}•size•large);

    [arc-button-icon]:has(svg) {
      ${qr}•width: var(${qr}•size•large);
    }
  }

  /* Inter-Component Communication • ArcSpinner --------------------• */

  --arc-spinner-size: var(${sr}•size);
  --arc-spinner-progress-color: var(${sr}•progress•color);
  --arc-spinner-circle-color: var(${sr}•circle•color);
  --arc-spinner-circle-opacity: var(${sr}•circle•opacity);
  --arc-spinner-position: var(${sr}•position, absolute);
  --arc-spinner-inset: var(${sr}•inset, 50% auto auto 50%);
  --arc-spinner-translate: var(${sr}•translate, -50% -50%);

`,D0=s`
  &:is(
    [is-processing],
    [is-processing-with-text],
    :has([arc-button-mask]),
    :has(input),
  ) {
    ${A}•position: relative;
  }

  &[is-disabled] {
    ${A}•color: var(${T}•disabled, var(${T}));
    ${A}•background: var(${x}•disabled, var(${x}));
    ${mr}•color: var(${K}•disabled, var(${K}));
    ${A}•opacity: var(--arc-button-disabled-opacity, unset);
    ${A}•cursor: var(--arc-button-disabled-cursor, not-allowed);
    ${ee}•bg: var(${ee}•disabled);
  }

  &:not(
    [is-disabled],
    [is-processing],
    [is-processing-with-text]
  ) {
    &:where(
      :hover,
      [data-simulate=hover]
    ) {
      ${A}•color: var(${T}•hover, var(${T}));
      ${A}•background: var(${x}•hover, var(${x}));
      ${mr}•color: var(${K}•hover, var(${K}));
      ${ee}•bg: var(${ee}•hover);
    }

    &:is(
      :active,
      [is-active],
      [data-simulate=active]
    ) {
      ${A}•color: var(${T}•active, var(${T}));
      ${A}•background: var(${x}•active, var(${x}));
      ${mr}•color: var(${K}•active, var(${K}));
      ${ee}•bg: var(${ee}•active);
    }
  }

  &[is-processing] {
    ${A}•content•visibility: hidden;
    ${A}•content•opacity: 0;

    /* spinner svg position controls */
    ${sr}•position: absolute;
    ${sr}•inset: 50% auto auto 50%;
    ${sr}•translate: -50% -50%;
  }

  &[is-processing-with-text] {
    ${A}•content•visibility: visible;

    /* spinner svg position controls */
    ${sr}•position: relative;
    ${sr}•inset: 0;
    ${sr}•translate: 0;
    ${sr}•size: 1lh;
  }

  &:is(
    [is-processing],
    [is-processing-with-text]
  ) {
    ${A}•opacity: var(--arc-button-processing-opacity, unset);
    ${A}•cursor: var(--arc-button-processing-cursor, default);
    ${ee}•bg: var(${ee}•processing);

    ${A}•color: var(${T}•processing, var(${T}));
    ${A}•background: var(${x}•processing, var(${x}));
    ${mr}•color: var(${K}•processing, var(${K}));
  }

  &:is(
    :where(:focus, :focus-within):focus-visible,
    [data-simulate=focus]
  ) {
    ${A}•color: var(${T}•focus, var(${T}));
    ${A}•background: var(${x}•focus, var(${x}));
    ${mr}•color: var(${K}•focus, var(${K}));
    ${ut}•color: var(--arc-button-outline-color, var(--arc-color-border-focus));

    * {
      outline: none;
    }
  }

`,N0=s`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${A0}

  :where([arc-button]) {
    /* SETUP -------------------------------------------------------• */
    ${I0}
    ${T0}
    ${j0}
    ${R0}
    ${P0}
    ${L0}
    ${M0}
    ${B0}

    /* CORE VARIABLES ----------------------------------------------• */
    ${O0}
    ${D0}

    /* CONTEXT OVERRIDES -------------------------------------------• */
    &[is-floating] {
      ${A}•position: fixed;
      ${A}•margin: 0;
      ${A}•z-index: 1000;
    }

    /* "floating" button mitigation */
    &:where([arc-shadow], [is-floating]) {
      backdrop-filter: var(--arc-button-backdrop-filter, blur(0.375em));
    }

    /* Plain & Link-style button structural overrides */
    &:is(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${Ue}•padding: unset;
      ${A}•padding: unset;
      ${A}•height: unset;
      ${mr}•radius: var(--arc-border-radius-md);

      [arc-button-content] {
        gap: var(--arc-button-inline-spacing, var(${Ue}•spacing));
      }
    }

    &:where([data-hierarchy=link-style]) {
      ${A}•font•weight: inherit;
      ${A}•text•decoration: none;
    }

    /* Custom button structural overrides */
    &[arc-button=custom] {
      ${A}•padding: unset;

      [arc-button-content] {
        gap: 0.5em;
      }

      [arc-button-label] {
        display: contents;
      }
    }

    /* CORE STYLES -------------------------------------------------• */
    appearance: none;
    cursor: var(--arc-button-cursor, var(${A}•cursor));
    position: var(--arc-button-position, var(${A}•position, unset));
    transition: var(--arc-button-transition, var(${A}•transition));
    z-index: var(--arc-button-z-index, var(${A}•z-index, unset));
    inset: var(--arc-button-inset, var(--js•inset, unset));

    /* FOOTPRINT */
    font: inherit;
    font-weight: var(--arc-button-font-weight, var(${A}•font•weight));
    font-size: var(--arc-button-font-size, var(${A}•font•size, inherit));
    padding: var(--arc-button-padding, var(${A}•padding));
    margin: var(--arc-button-margin, var(${A}•margin, unset));

    width: var(--arc-button-width, var(${A}•width, auto));
    min-width: var(--arc-button-min-width, var(${A}•min•width, unset));
    max-width: var(--arc-button-max-width, var(${A}•max•width, 100%));

    height: var(--arc-button-height, var(${A}•height, auto));
    min-height: var(--arc-button-min-height, var(${A}•min•height, unset));
    max-height: var(--arc-button-max-height, var(${A}•max•height, unset));

    aspect-ratio: var(--arc-button-aspect-ratio, var(${A}•aspect•ratio, unset));

    /* VARIANT THEME APPLIED ---------------------------------------• */

    color: var(--arc-button-color, var(${A}•color));
    background: var(--arc-button-background, var(${A}•background));
    border: var(--arc-button-border, var(${mr}));
    border-radius: var(--arc-button-border-radius, var(${mr}•radius));

    opacity: var(--arc-button-opacity, 1);

    outline: var(--arc-button-outline, var(${ut}));
    outline-offset: var(--arc-button-outline-offset, var(${ut}•offset));
    overflow: var(--arc-button-overflow, unset);

    /* shadow concession for buttons not already using 'arc-shadow' util */
    &:not([arc-shadow]) {
      box-shadow: var(--arc-button-box-shadow, unset);
    }

    &[href] {
      text-decoration: var(--arc-button-text-decoration, none);
    }

    /* INNER-ELEMENTS ----------------------------------------------• */
    [arc-button-content] {
      flex: 1;

      display: flex;
      align-items: var(--arc-button-align-items, center);
      justify-content: var(--arc-button-justify-content, center);

      opacity: var(--arc-button-content-opacity, var(${A}•content•opacity));
      visibility: var(--arc-button-content-visibility, var(${A}•content•visibility, inherit));
      pointer-events: var(--arc-button-content-pointer-events, none);

      width: var(--arc-button-content-width, var(${A}•content•width, auto));
      max-width: var(--arc-button-content-max-width, 100%);
      overflow: var(--arc-button-content-overflow, visible);

      transition: var(--arc-button-content-transition, inherit);

      line-height: normal;
      user-select: none;
    }

    [arc-button-label] {
      overflow: var(--arc-button-label-overflow, clip);
      text-overflow: var(--arc-button-label-text-overflow, ellipsis);
      white-space: var(--arc-button-label-white-space, nowrap);
      max-width: var(--arc-button-label-max-width, 100%);
      opacity: var(--arc-button-label-opacity, var(${A}•opacity));
      transition: var(--arc-button-label-transition, inherit);
      padding-inline: var(${Ue}•padding);
    }

    [arc-button-icon] {
      /** @note: override to ensure auto-width is applied to button icons This protects the
       * intended "gap" (now 'padding-inline' on the label) between icon and label */
      --fa-width: var(${Mr}•width);

      flex: none;

      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--arc-button-icon-width, var(${Mr}•width));
      min-width: 1em;

      opacity: var(--arc-button-icon-opacity, var(${A}•opacity));
      transition: var(--arc-button-icon-transition, inherit);

      &:has(svg) {
        ${Mr}•width: var(--arc-button-svg-width, var(${qr}•width));
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }

    [arc-button-mask] {
      pointer-events: none;
      position: absolute;
      inset: var(${p}•2m);
      padding: var(${p}•2);
      background: var(${ee}•bg);
      mask: linear-gradient(black, black) content-box exclude, linear-gradient(black, black);
      border-radius: var(--arc-button-border-radius, var(${mr}•radius));
      transition: var(--arc-button-transition, inherit);
    }

    input {
      position: absolute;
      opacity: 0;
      scale: 0.1;
    }
  }

  [arc-button]:not([hidden]) {
    flex: var(--arc-button-flex, unset);
    display: var(--arc-button-display, var(${A}•display, inline-flex));
    align-items: center;
    justify-content: center;
  }

}
`,gl=(0,i.jsx)(Pc,{}),F0=(0,i.jsx)("span",{"arc-button-mask":""}),H0=!!u.version.startsWith("18"),V0=r=>r===void 0||r===!1?{isFloating:!1}:r===!0?{isFloating:!0}:{isFloating:!0,inset:r.inset},U0=({popoverTarget:r,popoverTargetAction:e})=>H0?{popovertarget:r??void 0,popovertargetaction:e??void 0}:{popoverTarget:r??void 0,popoverTargetAction:e??void 0},Ar=(0,u.forwardRef)(({children:r,disabled:e,...a},t)=>{const o=(0,u.useRef)(null),{_isCustom:n,iconEnd:c,iconStart:l,icon:d,text:h,isActive:g,isDisabled:f,isProcessing:v,isProcessingWithText:b,hasLargeIcon:m,tag:$,href:w,type:_,title:y,layout:C,shape:S,size:I="lg",variant:j="common",hierarchy:L="primary",scheme:D="auto",shadow:z,onMedia:k,floating:V,isInverse:U=!1,...Y}=a,{isFloating:W,inset:or}=V0(V),N=$??(w?"a":"button"),tr=N==="button"?_||"button":void 0,R=C==="icon",F=b||v||f||e,H=Y?.["aria-disabled"]||F||void 0,M=n?void 0:dl({variant:j}),rr=n?void 0:ul({variant:j,hierarchy:L}),er=n?void 0:sl({shape:S}),Z=n?"inherit":I,hr=u0({layout:C,isFloating:W}),P=l0({isFloating:W,isOnMedia:k,shadow:z}),X=hl({variant:j,isInverse:U,scheme:D}),vr=!R&&(r||h),pr=b&&gl||l||d,Cr=!R&&(b&&!(l||d)?void 0:c),Xr=(v||b&&R)&&gl,Be=M==="ai"?F0:void 0,{tooltip:G,...Rr}=Y,gr=ct(G)?G:void 0,de=a.tooltip??gr,Ye=!!de,ia=ct(de)?{text:de}:de,_o=Y["aria-describedby"],Io=Ir(void 0,"arc-tooltip"),To=a.id?`${a.id}-tooltip`:Io,Ze=Ye?To:void 0,nr=Ye?Ot([_o,Ze]):_o,{anchorName:Pr,style:ue,popoverTarget:me,popoverTargetAction:xa,...Qa}=Rr,ka=me?Nt(String(Pr||a?.id)):void 0,jo=Ye?Nt(String(Ze)):void 0,Xe=As(ue)?ue:void 0,Cu=Xe&&"anchorName"in Xe&&Xe.anchorName,cb=[...(ct(Cu)?Ws(Cu,", "):[]).map(Nt),...ka?[ka]:[],...jo?[jo]:[]],Au=Ot(cb,1/0,", "),ib=Xe!=null&&"inset"in Xe&&Xe.inset!==void 0&&Xe.inset!==null&&Xe.inset!=="",sb={...Xe??{},...Au?{anchorName:Au}:{},...or!==void 0&&!ib?{"--js\u2022inset":or}:{}},lb=U0({popoverTarget:me||void 0,popoverTargetAction:xa||void 0}),db=(0,u.useCallback)(Su=>{o.current=Su,Se(t,Su)},[t]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(N,{...Qa,...lb,ref:db,"arc-button":n?"custom":"","arc-scheme":X,"arc-shadow":P||void 0,disabled:!w&&F||void 0,href:w||void 0,title:Ye?void 0:y||void 0,type:tr,"data-layout":hr,"data-shape":er,"data-size":Z,"data-variant":M,"data-hierarchy":rr,"has-large-icon":m?"":void 0,"is-floating":W?"":void 0,"is-on-media":k?"":void 0,"is-active":g?"":void 0,"is-processing":v||b&&R?"":void 0,"is-processing-with-text":b&&!R?"":void 0,"is-disabled":F||H?"":void 0,"aria-disabled":H,"aria-describedby":nr||void 0,style:sb,children:[(0,i.jsxs)("span",{"arc-button-content":"",children:[!!pr&&(0,i.jsx)("span",{"arc-button-icon":"",children:typeof pr=="string"?(0,i.jsx)(ir,{icon:pr}):pr}),!!vr&&(0,i.jsx)("span",{"arc-button-label":"",children:vr}),!!Cr&&(0,i.jsx)("span",{"arc-button-icon":"",children:typeof Cr=="string"?(0,i.jsx)(ir,{icon:Cr}):Cr})]}),Xr,Be]}),Ye&&(0,i.jsx)(sn,{...ia,id:Ze,alternateAnchor:ia?.alternateAnchor??(()=>o.current),anchorName:jo})]})});Ar.displayName="ArcButton",lr("ArcButton",N0);const qt=(0,u.forwardRef)((r,e)=>(0,i.jsx)(Ar,{...r,ref:e,"arc-popover-button":""})),vl=({isInverse:r=!1,isOpen:e,...a})=>(0,i.jsx)(Ar,{icon:"fa-regular fa-xmark",text:"Dismiss",...a,layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-dismiss":""}),K0=({isInverse:r=!1,...e})=>(0,i.jsx)(Ar,{icon:"fa-regular fa-arrow-left",text:"Go Back",...e,layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-go-back":""}),W0=({children:r,isSticky:e,showDivider:a,showDismiss:t,dismissProps:o,showGoBack:n,goBackProps:c,headerSlotEnd:l,tag:d="header",...h})=>(0,i.jsx)(d,{...h,"arc-popover-header":"","has-divider":a?"":void 0,"is-sticky":e?"":void 0,children:(0,i.jsxs)("div",{"arc-popover-display":"",children:[(0,i.jsxs)("div",{"arc-popover-header-slot":"start",children:[n&&(0,i.jsx)(K0,{...c}),r]}),(0,i.jsxs)("div",{"arc-popover-header-slot":"end",children:[l,t&&(0,i.jsx)(vl,{...o})]})]})}),G0=({children:r,tag:e="article",...a})=>(0,i.jsx)(e,{...a,"arc-popover-body":"",children:(0,i.jsx)("div",{"arc-popover-display":"",children:r})}),q0=({children:r,isSticky:e,showDivider:a,tag:t="footer",...o})=>(0,i.jsx)(t,{...o,"arc-popover-footer":"","has-divider":a?"":void 0,"is-sticky":e?"":void 0,children:(0,i.jsx)("div",{"arc-popover-display":"",children:r})});qt.displayName="ArcPopoverButton";const O=s`--arc-popover`,Yr=s`--arc•popover`,cr=s`--arc•trail•mix`,Uc=s`${Yr}•radius`,Y0=s`${Yr}•content`,dn=s`${Yr}•outline`,ne=s`${Yr}•offset`,Je=s`${Yr}•header`,Z0=s`${Yr}•body`,Kc=s`${Yr}•divider`,un=s`${Yr}•footer`,Ke=s`${Yr}•tail`,br=s`${Ke}•top`,$r=s`${Ke}•left`,Yt=s`${Ke}•size`,xe=s`${Ke}•x`,ke=s`${Ke}•y`,Wc=s`${Yr}•font•size`,hn=s`${Yr}•padding`,ce=s`${Yr}•margin`,ht=s`${Je}•padding`,_e=s`${Z0}•padding`,Qe=s`${un}•padding`,pl=s`${Yr}•fg`,gn=s`${Yr}•bg`,vn=s`${Y0}•bg`,pn=s`${Ke}•fill•a`,fn=s`${Ke}•fill•b`,mn=s`${Ke}•edge•a`,bn=s`${Ke}•edge•b`,X0=s`

  ${Yr}•fallback: none;
  ${dn}: var(${O}-outline-size, var(--arc-border-width-md));
  ${Uc}: var(${O}-border-radius, var(--arc-border-radius-lg));
  ${ne}: var(${O}-offset, var(--js•offset, 0px));

  /* space & padding */
  ${hn}: 0.875em;

  /* tail metrics - starts at defaults for anchor-at='bottom-start' */
  ${cr}: 47.5%; /* mix-ratio for tail to match gradient outline for: 'popover[variant=ai]' */
  ${xe}: var(${O}-tail-x, 1.75em);
  ${ke}: var(${O}-tail-y, 1.125em);
  ${Yt}: 0px;

  &:where([has-tail]) {
    ${Yt}: var(${O}-tail-size, var(--js•tail, 8px));

    /* offset calculation magic number - 'sqrt(2) / 2' for half of 45° rotated tailSize */
    ${ne}: calc(var(${O}-offset, var(--js•offset, 0px)) + var(${Yt}) * (sqrt(2) / 2));
  }

  &:has([arc-popover-body]) {
    ${hn}: 0;
    &:has([arc-popover-header]:not([has-divider])) { ${_e}•block•start: 0; }
    &:has([arc-popover-footer]:not([has-divider])) { ${_e}•block•end: 0; }
  }

`,J0=s`

  /* default variant: common */
  &[variant] {
    ${pl}: var(--arc-color-fg-primary);
    ${gn}: var(${O}-background, var(--arc-color-bg-mono)) border-box;
    ${vn}: var(${O}-background, var(--arc-color-bg-mono)) padding-box;
    ${pn}: var(${O}-background, var(--arc-color-bg-mono));
    ${fn}: var(${O}-background, var(--arc-color-bg-mono));
    ${mn}: var(${O}-background, var(--arc-color-bg-mono));
    ${bn}: var(${O}-background, var(--arc-color-bg-mono));
    ${Yr}•shadow: var(--arc-shadow-lg);
    ${Kc}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &[variant=brand] {
    ${gn}: var(--arc-color-border-brand-mid) border-box;
    ${vn}: var(--arc-color-bg-brand-muted) padding-box;
    ${pn}: var(--arc-color-bg-brand-muted);
    ${fn}: var(--arc-color-bg-brand-muted);
    ${mn}: var(--arc-color-border-brand-mid);
    ${bn}: var(--arc-color-border-brand-mid);
  }

  &[variant=ai] {
    ${gn}: var(--arc-gradient-ai-200) border-box;
    ${vn}: var(--arc-gradient-ai-50) padding-box;
    ${pn}: var(${O}-ai-purple-50);
    ${fn}: var(${O}-ai-blue-50);
    ${mn}: var(${O}-ai-purple-200);
    ${bn}: var(${O}-ai-blue-200);
  }

`,Q0=s`

  /* default density: compact */
  &:not([density=comfortable]) {
    ${Wc}: 0.75em;
    ${Je}•gap: 0.75em;
    ${ht}•block: 0.75em;
    ${ht}•inline: 0.75em;

    ${_e}•block: 0.75em;
    ${_e}•inline: 0.75em;

    ${un}•gap: 0.75em;
    ${Qe}•inline: 0.75em;
    ${Qe}•block•start: 0.75em;
    ${Qe}•block•end: 0.75em;
  }

  &[density=comfortable] {
    ${Wc}: 0.875em;
    ${Je}•gap: 1.125em;
    ${ht}•block: 1em;
    ${ht}•inline: 1.25em;

    ${_e}•block: 1.25em;
    ${_e}•inline: 1.25em;

    ${un}•gap: 1.125em;
    ${Qe}•inline: 1.25em;
    ${Qe}•block•start: 1em;
    ${Qe}•block•end: 1.25em;

    &:not(:has([arc-popover-body])) {
      ${hn}: 1.25em;
    }
  }

`,Zt={TOP:s`
    &[anchor-at*='top-'] {
      ${ce}: 0 0 var(${ne}) 0;
      ${br}: 100%;
    }
    &[anchor-at='top-start'] {
      position-area: block-start span-inline-end;
      ${cr}: 95%;
      ${$r}: calc(0% + var(${xe}));
    }
    &[anchor-at='top-center'] {
      position-area: block-start;
      ${cr}: 75%;
      ${$r}: 50%;
    }
    &[anchor-at='top-end'] {
      position-area: block-start span-inline-start;
      ${cr}: 53.5%;
      ${$r}: calc(100% - var(${xe}));
    }
  `,RIGHT:s`
    &[anchor-at*='right-'] {
      ${ce}: 0 0 0 var(${ne});
      ${$r}: 0%;
    }
    &[anchor-at='right-start'] {
      position-area: inline-end span-block-end;
      ${cr}: 53.5%;
      ${br}: calc(0% + var(${ke}));
    }
    &[anchor-at='right-center'] {
      position-area: inline-end;
      ${cr}: 75%;
      ${br}: 50%;
    }
    &[anchor-at='right-end'] {
      position-area: inline-end span-block-start;
      ${cr}: 95%;
      ${br}: calc(100% - var(${ke}));
    }
  `,BOTTOM:s`
    &[anchor-at*='bottom-'] {
      ${ce}: var(${ne}) 0 0 0;
      ${br}: 0%;
    }
    &[anchor-at='bottom-end'] {
      position-area: block-end span-inline-start;
      ${cr}: 5%;
      ${$r}: calc(100% - var(${xe}));
    }
    &[anchor-at='bottom-center'] {
      position-area: block-end;
      ${cr}: 25%;
      ${$r}: 50%;
    }
    &[anchor-at='bottom-start'] {
      position-area: block-end span-inline-end;
      ${cr}: 47.5%;
      ${$r}: calc(0% + var(${xe}));
    }
  `,LEFT:s`
    &[anchor-at*='left-'] {
      ${ce}: 0 var(${ne}) 0 0;
      ${$r}: 100%;
    }
    &[anchor-at='left-end'] {
      position-area: inline-start span-block-start;
      ${cr}: 47.5%;
      ${br}: calc(100% - var(${ke}));
    }
    &[anchor-at='left-center'] {
      position-area: inline-start;
      ${cr}: 25%;
      ${br}: 50%;
    }
    &[anchor-at='left-start'] {
      position-area: inline-start span-block-end;
      ${cr}: 5%;
      ${br}: calc(0% + var(${ke}));
    }
  `,CENTER_AND_CORNERS:s`
    &:is([anchor-at='center'], [anchor-at*='corner']) { ${Ke}•display: none; }
    &[anchor-at='center'] { position-area: center center; ${ce}: 0; }
    &[anchor-at*='corner'] { ${ce}: var(${ne}); }
    &[anchor-at='nw-corner'] { position-area: top left; }
    &[anchor-at='ne-corner'] { position-area: top right; }
    &[anchor-at='se-corner'] { position-area: bottom right; }
    &[anchor-at='sw-corner'] { position-area: bottom left; }
  `},gt={FLIP_BLOCK:s`
    &[anchor-at*='top-'] { ${ce}: 0 0 var(${ne}) 0; }
    &[anchor-at='top-start']::before { ${cr}: 47.5%; ${br}: 0%; }
    &[anchor-at='top-center']::before { ${cr}: 25%; ${br}: 0%; }
    &[anchor-at='top-end']::before { ${cr}: 5%; ${br}: 0%; }

    &[anchor-at='right-start']::before { ${cr}: 95%; ${br}: calc(100% - var(${ke})); }
    &[anchor-at='right-end']::before { ${cr}: 53.5%; ${br}: calc(0% + var(${ke})); }

    &[anchor-at*='bottom-'] { ${ce}: var(${ne}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${cr}: 53.5%; ${br}: 100%; }
    &[anchor-at='bottom-center']::before { ${cr}: 75%; ${br}: 100%; }
    &[anchor-at='bottom-start']::before { ${cr}: 95%; ${br}: 100%; }

    &[anchor-at='left-end']::before { ${cr}: 5%; ${br}: calc(0% + var(${ke})); }
    &[anchor-at='left-start']::before { ${cr}: 47.5%; ${br}: calc(100% - var(${ke})); }
  `,FLIP_INLINE:s`
    &[anchor-at='top-start']::before { ${cr}: 53.5%; ${$r}: calc(100% - var(${xe})); }
    &[anchor-at='top-end']::before { ${cr}: 95%; ${$r}: calc(0% + var(${xe})); }

    &[anchor-at*='right-'] { ${ce}: 0 var(${ne}) 0 0; }
    &[anchor-at='right-start']::before { ${cr}: 5%; ${$r}: 100%; }
    &[anchor-at='right-center']::before { ${cr}: 25%; ${$r}: 100%; }
    &[anchor-at='right-end']::before { ${cr}: 47.5%; ${$r}: 100%; }

    &[anchor-at='bottom-end']::before { ${cr}: 47.5%; ${$r}: calc(0% + var(${xe})); }
    &[anchor-at='bottom-start']::before { ${cr}: 5%; ${$r}: calc(100% - var(${xe})); }

    &[anchor-at*='left-'] { ${ce}: 0 0 0 var(${ne}); }
    &[anchor-at='left-end']::before { ${cr}: 95%; ${$r}: 0%; }
    &[anchor-at='left-center']::before { ${cr}: 75%; ${$r}: 0%; }
    &[anchor-at='left-start']::before { ${cr}: 53.5%; ${$r}: 0%; }
  `,FLIP_BLOCK_INLINE:s`
    &[anchor-at*='top-'] { ${ce}: 0 0 var(${ne}) 0; }
    &[anchor-at='top-start']::before { ${cr}: 5%; ${br}: 0%; ${$r}: calc(100% - var(${xe})); }
    &[anchor-at='top-end']::before { ${cr}: 47.5%; ${br}: 0%; ${$r}: calc(0% + var(${xe})); }

    &[anchor-at*='right-'] { ${ce}: 0 var(${ne}) 0 0; }
    &[anchor-at='right-start']::before { ${cr}: 47.5%; ${br}: calc(100% - var(${ke})); ${$r}: 100%; }
    &[anchor-at='right-end']::before { ${cr}: 5%; ${br}: calc(0% + var(${ke})); ${$r}: 100%; }

    &[anchor-at*='bottom-'] { ${ce}: var(${ne}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${cr}: 95%; ${br}: 100%; ${$r}: calc(0% + var(${xe})); }
    &[anchor-at='bottom-start']::before { ${cr}: 53.5%; ${br}: 100%; ${$r}: calc(100% - var(${xe})); }

    &[anchor-at*='left-'] { ${ce}: 0 0 0 var(${ne}); }
    &[anchor-at='left-end']::before { ${cr}: 53.5%; ${br}: calc(0% + var(${ke})); ${$r}: 0%; }
    &[anchor-at='left-start']::before { ${cr}: 95%; ${br}: calc(100% - var(${ke})); ${$r}: 0%; }
  `},rg=s`
  [arc-popover] {
    position: fixed;
    inset: auto;
    padding: 0;
    margin: var(${ce});

    container-type: anchored;
    position-anchor: var(${O}-anchor-name, var(--js•anchor));

    ${Zt.TOP}
    ${Zt.RIGHT}
    ${Zt.BOTTOM}
    ${Zt.LEFT}
    ${Zt.CENTER_AND_CORNERS}

    &[try-fallbacks] {
      position-try-fallbacks: flip-block, flip-inline, flip-block flip-inline;
    }
  }

  @supports (container-type: anchored) {
    @container anchored(fallback: flip-block) {
      [arc-popover][try-fallbacks][has-tail] {
        ${gt.FLIP_BLOCK}
      }
    }

    @container anchored(fallback: flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${gt.FLIP_INLINE}
      }
    }

    @container anchored(fallback: flip-block flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${gt.FLIP_BLOCK_INLINE}
      }
    }
  }

  /* @note – tail fallback mitigation */
  @supports not (container-type: anchored) {
    /* @note – inline center anchor placement mitigation for Firefox */
    [arc-popover] {
      &[anchor-at='right-center'] {
        position-area: inline-end center;
      }
      &[anchor-at='left-center'] {
        position-area: inline-start center;
      }
    }

    [arc-popover][try-fallbacks][has-tail] {
        &[data-fallbacks='flip-block'] {
          ${gt.FLIP_BLOCK}
        }
        &[data-fallbacks='flip-inline'] {
          ${gt.FLIP_INLINE}
        }
        &[data-fallbacks='flip-block-inline'] {
          ${gt.FLIP_BLOCK_INLINE}
        }
      }
    }
`,vt={BACKDROP:s`
    [arc-popover]::backdrop {
      background: var(${O}-backdrop, transparent);
    }
  `,CONTENT:s`
    [arc-popover-content] {
      flex: var(${O}-flex, 1);
      position: relative;
      display: var(${O}-content-display, flex);
      flex-direction: var(${O}-content-flex-direction, column);
      gap: var(${O}-content-gap, 0);

      overflow: var(${O}-overflow, auto);
      overscroll-behavior: var(${O}-overscroll-behavior, contain);

      color: var(${O}-color, var(${pl}));
      padding: var(${O}-padding, var(${hn}));
      margin: var(${O}-margin, unset);
      background: var(${O}-content-background, var(${vn}));
      border-radius: calc(var(${Uc}) - var(${dn}));
      border: var(${O}-border, none);

      height: var(${O}-height, auto);
      min-height: var(${O}-min-height, auto);
      max-height: var(${O}-max-height, 65vh);
      resize: var(${O}-resize, none);
    }
  `,HEADER:s`
    [arc-popover-header] {
      flex: var(${O}-header-flex, none);
      display: var(${O}-header-display, flex);
      justify-content: var(${O}-header-justify-content, space-between);
      align-items: var(${O}-header-align-items, baseline);
      gap: var(${O}-header-gap, var(${Je}•gap));

      padding: var(${O}-header-padding,
        var(${ht}•block)
        var(${ht}•inline)
      );

      color: var(${O}-header-color, inherit);
      background: var(${O}-header-background, none);

      &[is-sticky] {
        position: sticky;
        z-index: var(${O}-header-z-index, 2);
        top: var(${O}-header-top, 0);
      }

      &:has([arc-popover-go-back]) {
        padding-inline-start: 0.875em;
      }

      &:has([arc-popover-dismiss]) {
        padding-inline-end: 0.875em;
      }

      &:where([has-divider]) {
        border-bottom: var(${O}-header-border-bottom, var(${Kc}));
      }

      :where([arc-button]) {
        margin: var(${O}-header-button-margin, -0.5em);
      }
    }

    [arc-popover-header-slot='start'] {
      ${Je}•slot•flex: 1;
      ${Je}•slot•gap: 1em;
    }

    [arc-popover-header-slot='end'] {
      ${Je}•slot•flex: none;
      ${Je}•slot•gap: 1.5em;
    }

    [arc-popover-header-slot] {
      min-width: 0%;
      flex: var(${Je}•slot•flex);
      display: var(${O}-header-display, flex);
      justify-content: var(${O}-header-justify-content, unset);
      align-items: var(${O}-header-align-items, baseline);
      gap: var(${O}-header-slot-gap, var(${Je}•slot•gap));
    }

    /* Header-less Popover: DismissButton typical starting spot */
    [arc-popover]:not([arc-popover-header]) > [arc-popover-dismiss] {
      --arc-button-position: absolute;
      inset: var(${O}-dismiss-inset, 0.5em 0.5em auto auto);
      margin: var(${O}-dismiss-margin, 0);
    }
  `,BODY:s`
    [arc-popover-body] {
      flex: var(${O}-body-flex, 1);
      display: var(${O}-body-display, block);
      flex-direction: var(${O}-body-flex-direction, unset);

      padding: var(${O}-body-padding,
        var(${_e}•block•start, var(${_e}•block))
        var(${_e}•inline)
        var(${_e}•block•end, var(${_e}•block))
        var(${_e}•inline)
      );
    }
  `,FOOTER:s`
    [arc-popover-footer] {
      flex: var(${O}-footer-flex, none);
      display: var(${O}-footer-display, flex);
      flex-direction: var(${O}-footer-flex-direction, row-reverse);
      justify-content: var(${O}-footer-justify-content, space-between);
      align-items: var(${O}-footer-align-items, center);
      gap: var(${O}-footer-gap, var(${un}•gap));

      padding: var(${O}-footer-padding,
        var(${Qe}•block•start)
        var(${Qe}•inline)
        var(${Qe}•block•end)
        var(${Qe}•inline)
      );

      background: var(${O}-footer-background, none);
      color: var(${O}-footer-color, inherit);

      &[is-sticky] {
        position: sticky;
        z-index: var(${O}-footer-z-index, 2);
        bottom: var(${O}-footer-bottom, 0);
      }

      &:where([has-divider]) {
        border-top: var(${O}-footer-border-top, var(${Kc}));
      }
    }
  `,TAIL:s`
    [arc-popover][has-tail]::before {
      content: '';
      box-sizing: content-box;
      position: absolute;
      display: var(${Ke}•display, block);

      inset: auto;
      top: var(${br}, auto);
      left: var(${$r}, auto);

      translate: -50% -50%;
      rotate: 45deg;

      width: var(${Yt});
      height: var(${Yt});
      border-radius: 0.125em;

      background: color-mix(in srgb,
        var(${pn}) var(${cr}),
        var(${fn}) clamp(0%, 100% - var(${cr}), 100%)
      );

      border: var(${dn}) solid color-mix(in srgb,
        var(${mn}) var(${cr}),
        var(${bn}) clamp(0%, 100% - var(${cr}), 100%)
      );
    }
  `},eg=s`
  [arc-popover] {
    will-change: opacity;
    overflow: visible; /* For the tail – content overflow is set on '[arc-popover-content]' */

    /* @note – this line-height magic number fixes asymmetrical outline/border issues with certain placements
    on low DPI displays. It's based on the default (--arc-line-height-standard) of 1.4 */
    line-height: var(${O}-line-height, 1.395);

    /* @note – this font-size is intended NOT to be altered; it is locked in as a reset (browser baseline)
    for various popover calculations. The effective popover font size is set on '[arc-popover-display]'. */
    font-size: initial;

    background: var(${O}-background, var(${gn}));
    border: var(${dn}) solid transparent;
    border-radius: var(${Uc});
    box-shadow: var(${O}-shadow, var(${Yr}•shadow));
    width: var(${O}-width, auto);
    height: var(${O}-height, auto);
    min-width: var(${O}-min-width, auto);
    min-height: var(${O}-min-height, auto);
    max-width: var(${O}-max-width, 100vw);
    max-height: var(${O}-max-height, 65vh);
  }

  /* @note – font-size control for header|footer|body padding calculations */
  [arc-popover-display] {
    display: contents;
    font-size: var(${O}-font-size, var(${Wc}));
  }

  ${vt.CONTENT}
  ${vt.HEADER}
  ${vt.BODY}
  ${vt.FOOTER}
  ${vt.TAIL}
  ${vt.BACKDROP}
`,Xt={SETUP:X0,ANCHORS:rg,VARIANTS:J0,DENSITIES:Q0,ELEMENT:eg},ag=s`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${z0}

  [arc-popover] {
    ${Xt.SETUP}
    ${Xt.VARIANTS}
    ${Xt.DENSITIES}
  }

  ${Xt.ANCHORS}
  ${Xt.ELEMENT}

  /* POPOVER anchoring mitigation ----------------------------------• */

  [arc-popover][data-floating] {
    position-area: unset;
  }

  /* POPOVER transition --------------------------------------------• */

  [arc-popover] {
    transition-timing-function: ease-out;
    transition-duration: var(--arc-popover-transition-duration, 240ms);
    transition-property: display allow-discrete, opacity;

    @supports (overlay: auto) {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }

    opacity: 0;
    &:popover-open { opacity: 1; }

    &::backdrop { transition: inherit; opacity: 0; }
    &:popover-open::backdrop { opacity: 1; }
  }

  @starting-style {
    [arc-popover]:popover-open { opacity: 0; }
    [arc-popover]:popover-open::backdrop { opacity: 0; }
  }
}

`,fl=(0,u.forwardRef)(({children:r,popover:e=ve.popover,anchorAt:a=ve.anchorAt,anchorName:t,anchorProps:o,alternateAnchorId:n,alternateAnchor:c,boundary:l=ve.boundary,tryFallbacks:d=ve.tryFallbacks,density:h=ve.density,variant:g=ve.variant,scheme:f=ve.scheme,isInverse:v,hasTail:b,tailSize:m=ve.tailSize,offset:$=ve.offset,hidePopoverButton:w,headerSlot:_,showHeaderDivider:y,isHeaderSticky:C,showDismiss:S,dismissProps:I,showGoBack:j,goBackProps:L,headerSlotEnd:D,footerSlot:z,isFooterSticky:k,showFooterDivider:V,tag:U="div",contentTag:Y="div",onToggle:W,...or},N)=>{const tr=(0,u.useRef)(null),R=(0,u.useRef)(null),F=(0,u.useRef)(null),H=(0,u.useRef)(W);(0,u.useImperativeHandle)(N,()=>R.current);const[M,rr]=(0,u.useState)(!1),er=(0,u.useMemo)(()=>f==="auto"?void 0:v?"inverse":f,[v,f]),Z=(0,u.useCallback)(()=>{if(typeof document>"u")return tr.current??null;const gr=ze(tr.current)??document;return n?gr.getElementById(n):typeof c=="string"?gr.getElementById(c):c instanceof HTMLElement?c:typeof c=="function"?c():c&&typeof c=="object"&&"current"in c?c.current:tr.current??null},[c,n]),hr=d||l==="flip",P=!!b&&!Ms.includes(a),X=Bs({canHaveTail:P,tailSize:m}),vr=(0,u.useMemo)(()=>{const gr=t||n||(typeof c=="string"?c:void 0)||o?.id||or.id||void 0;return jc(String(gr))},[t,o?.id,or.id,c,n]),pr=(0,u.useMemo)(()=>({popoverTarget:or.id,"aria-haspopup":!0,"aria-controls":or.id,"aria-expanded":M}),[or.id,M]),Cr=(0,u.useMemo)(()=>({isOpen:M,"aria-label":"Dismiss",...pr,...I}),[I,M,pr]),Xr=(0,u.useMemo)(()=>({ref:tr,...pr,...o,tooltip:M?void 0:o?.tooltip,anchorName:vr||""}),[o,pr,vr,M]),Be=(0,u.useMemo)(()=>({"--js\u2022anchor":Xr?.anchorName||"","--js\u2022offset":Number($)===0?"":`${$}px`,"--js\u2022tail":X.cssTailVar}),[Xr?.anchorName,$,X.cssTailVar]);Go(()=>{const gr=Z();if(F.current=gr,!!gr)return Ds(gr,Xr.anchorName)},[Z,Xr.anchorName,M]),(0,u.useEffect)(()=>{H.current=W},[W]),(0,u.useEffect)(()=>{const gr=R.current;if(!gr)return;const Nr=de=>{const{newState:Ye}=de,ia=Ye==="open";rr(ia),ia&&(F.current=Z()),H.current?.(de)};return gr.addEventListener("toggle",Nr),()=>gr.removeEventListener("toggle",Nr)},[Z]),jh({anchorEl:F.current,popoverEl:R.current,anchorAt:a,tryFallbacks:hr,offsetPx:Number($)||0,tailSizePx:X.floatingTailPx,hasTail:P,isOpen:M}),Bh({anchorEl:F.current,popoverEl:R.current,anchorAt:a,tryFallbacks:hr,hasTail:P,isOpen:M});const G=!!(_||j||D),Rr=!!z;return(0,i.jsxs)(i.Fragment,{children:[!((n||c)&&w)&&(0,i.jsx)(qt,{...Xr}),(0,i.jsxs)(U,{...or,ref:R,"arc-popover":"","arc-scheme":er,"anchor-at":a,"try-fallbacks":hr?"":void 0,popover:e,variant:g,density:h,"has-tail":P?"":void 0,role:or.role??"dialog",style:{...or.style,...Be},children:[(0,i.jsxs)(Y,{"arc-popover-content":"",children:[G&&(0,i.jsx)(W0,{showDivider:y,showGoBack:j,goBackProps:L,headerSlotEnd:D,showDismiss:S,dismissProps:Cr,isSticky:C,children:_}),G||Rr?(0,i.jsx)(G0,{children:r}):(0,i.jsx)(Y,{"arc-popover-display":"",children:r}),Rr&&(0,i.jsx)(q0,{showDivider:V,isSticky:k,children:z})]}),S&&!G&&(0,i.jsx)(vl,{...Cr})]})]})});fl.displayName="ArcPopover";const Gc=fl;Gc.handlePopover=Os,Gc.Button=qt;const ga=Gc;lr("ArcPopover",ag);const tg=s`
@layer arc-components {

  [arc-avatar-overflow] {
    /* Inter-Component Communication • ArcPopover ------------------• */
    --arc-popover-font-size: var(--arc-font-size-body-md);
    --arc-popover-translate: -100% 0.5em;
    --arc-popover-width: max-content;
    --arc-popover-max-width: 18em;
    --arc-popover-padding: 0;

    /* For Neutral/Anonymous avatars -------------------------------• */
    [data-element=list] {
      margin: 0;
      padding: var(${p}•4) var(${p}•0);
    }

    [data-element=list-item] {
      display: flex;
      align-items: center;
      gap: var(${p}•6);
      padding: var(${p}•4) var(${p}•8);
    }

    ${vc}
    ${ws}
  }

}
`,og=r=>(0,i.jsx)("ul",{...r,"data-element":"list"}),ng=r=>(0,i.jsx)("li",{...r,"data-element":"list-item"}),cg=({count:r,anchorId:e,overflowId:a,shouldShowOverflow:t,...o})=>(0,i.jsx)(Cc,{title:`+${r}`,children:(0,i.jsx)(ga.Button,{...o,id:e,popoverTarget:a,text:`+${r}`,variant:"common",hierarchy:"primary",disabled:!t,"data-element":"counter","data-color":"black","data-num-length":r?.toString().length})}),ig=({children:r,id:e,size:a="sm",overflowCount:t=0,shouldShowOverflow:o=!1,anchorAt:n="bottom-end",tryFallbacks:c=!0,...l})=>{const d=Math.min(t,999),h=Ir(e,"arc-avatar-overflow"),g=(0,u.useMemo)(()=>`${h}-anchor`,[h]),f=(0,u.useMemo)(()=>u.Children.toArray(r),[r]);return(0,i.jsxs)(i.Fragment,{children:[d>0&&(0,i.jsx)(cg,{count:d,anchorId:g,overflowId:h,shouldShowOverflow:o}),o&&d>0&&(0,i.jsx)(ga,{...l,scheme:"inverse","arc-avatar-overflow":"",id:h,anchorAt:n,tryFallbacks:c,alternateAnchorId:g,hidePopoverButton:!0,variant:"common","data-size":a,children:(0,i.jsx)(og,{children:f.map((v,b)=>(0,i.jsx)(ng,{children:v},b))})})]})};lr("ArcAvatarOverflow",tg);const ml=({fg:r,bg:e})=>s`
  &:has(>[data-color=mono-inverse]) {
    ${r}•high: var(--arc-color-fg-on-mono-inverse);
    ${e}•high: var(--arc-color-bg-mono-inverse);
    ${r}•low: var(--arc-color-fg-on-subtle);
    ${e}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=brand]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-brand-stark);
    ${r}•low: var(--arc-color-fg-brand-stark);
    ${e}•low: var(--arc-color-bg-brand-subtle);
  }

  &:has(>[data-color=mono]) {
    ${r}•high: var(--arc-color-fg-on-mono);
    ${e}•high: var(--arc-color-bg-mono);
    ${r}•low: var(--arc-color-fg-on-mono);
    ${e}•low: var(--arc-color-bg-mono);
  }

  &:has(>[data-color=blue]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-blue-stark);
    ${r}•low: var(--arc-color-fg-blue-stark);
    ${e}•low: var(--arc-color-bg-blue-subtle);
  }

  &:has(>[data-color=neutral]) {
    ${r}•high: var(--arc-color-fg-on-heavy);
    ${e}•high: var(--arc-color-bg-neutral-heavy);
    ${r}•low: var(--arc-color-fg-neutral-stark);
    ${e}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=purple]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-purple-stark);
    ${r}•low: var(--arc-color-fg-purple-stark);
    ${e}•low: var(--arc-color-bg-purple-subtle);
  }

  &:has(>[data-color=green]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-green-stark);
    ${r}•low: var(--arc-color-fg-green-stark);
    ${e}•low: var(--arc-color-bg-green-subtle);
  }

  &:has(>[data-color=yellow]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-yellow-stark);
    ${r}•low: var(--arc-color-fg-yellow-stark);
    ${e}•low: var(--arc-color-bg-yellow-subtle);
  }

  &:has(>[data-color=red]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-red-stark);
    ${r}•low: var(--arc-color-fg-red-stark);
    ${e}•low: var(--arc-color-bg-red-subtle);
  }

  &:has(>[data-color=maroon]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-maroon-stark);
    ${r}•low: var(--arc-color-fg-maroon-stark);
    ${e}•low: var(--arc-color-bg-maroon-subtle);
  }

  &:has(>[data-color=mint]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-mint-stark);
    ${r}•low: var(--arc-color-fg-mint-stark);
    ${e}•low: var(--arc-color-bg-mint-subtle);
  }

  &:has(>[data-color=orange]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-orange-stark);
    ${r}•low: var(--arc-color-fg-orange-stark);
    ${e}•low: var(--arc-color-bg-orange-subtle);
  }

  &:has(>[data-color=ai]) {
    ${r}•high: var(--arc-color-fg-on-heavy);
    ${e}•high: var(--arc-gradient-ai-300);
    ${r}•low: var(--arc-color-fg-on-subtle);
    ${e}•low: var(--arc-gradient-ai-100);
  }

  &:has(>[data-color=overlay-light]) {
    ${r}•high: var(--arc-color-mono-black);
    ${e}•high: var(--arc-color-alpha-white-80);
    ${r}•low: var(--arc-color-alpha-heavy);
    ${e}•low: var(--arc-color-alpha-white-20);
  }

  &:has(>[data-color=overlay-dark]) {
    ${r}•high: var(--arc-color-mono-white);
    ${e}•high: var(--arc-color-alpha-black-70);
    ${r}•low: var(--arc-color-mono-white);
    ${e}•low: var(--arc-color-alpha-black-40);
  }
`,bl=({fg:r,bg:e})=>s`
  &:has(>[data-contrast=high]) {
    ${r}: var(${r}•high);
    ${e}: var(${e}•high);
  }

  &:has(>[data-contrast=low]) {
    ${r}: var(${r}•low);
    ${e}: var(${e}•low);
  }
`,q=s`--arc•badge`,qc=s`${q}•fg`,Yc=s`${q}•bg`,sg=ml({fg:qc,bg:Yc}),lg=bl({fg:qc,bg:Yc}),dg=s`
  &:has(>[data-size=lg]) {
    ${q}•font•size: var(${p}•14);
    ${q}•font•size•caps: var(${p}•12);
    ${q}•size: var(${p}•24);
    ${q}•min•size: var(${p}•30);
    ${q}•padding•inline: var(${p}•8);
    ${q}•border•radius: var(${p}•4);
    ${q}•gap: var(${p}•4);
  }

  &:has(>[data-size=md]) {
    ${q}•font•size: var(${p}•12);
    ${q}•font•size•caps: var(${p}•10);
    ${q}•size: var(${p}•20);
    ${q}•min•size: var(${p}•24);
    ${q}•padding•inline: var(${p}•6);
    ${q}•border•radius: var(${p}•4);
    ${q}•gap: var(${p}•4);
  }

  &:has(>[data-size=sm]) {
    ${q}•font•size: var(${p}•10);
    ${q}•font•size•caps: var(${p}•8);
    ${q}•size: var(${p}•16);
    ${q}•min•size: var(${p}•18);
    ${q}•padding•inline: var(${p}•4);
    ${q}•border•radius: var(${p}•4);
    ${q}•gap: var(${p}•4);
  }

  /** @default • relative equivalent of 'md' at 100% • (16 x 75% = 12) */
  &:has(>[data-size=inherit]) {
    ${q}•font•size: 1em;
    ${q}•font•size•text: 0.75em;
    ${q}•font•size•caps: 0.625em;
    ${q}•size: 1.25em;
    ${q}•min•size: 1.5em;
    ${q}•padding•inline: 0.375em;
    ${q}•border•radius: 0.25em;
    ${q}•gap: 0.25em;
  }
`,ug=s`
  &:has(>[data-layout=fill]) {
    ${q}•flex: auto; /* same as 1 (1 1 auto) but with clearer intent */
    ${q}•display: flex;
    ${q}•min•width: var(${q}•min•size);

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-overflow: hidden;
    --arc-icon-text-white-space: nowrap;
    --arc-icon-text-text-overflow: ellipsis;
  }

  &:has(>[data-layout=hug]) {
    ${q}•flex: none; /* same as 0 0 auto but with clearer intent */
    ${q}•display: inline-flex;
    ${q}•min•width: min-content;
  }
`,hg=s`
@layer arc-components {

  [arc-badge-wrapper] {
    ${sg}
    ${lg}
    ${dg}
    ${ug}

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-height: 1lh;
    --arc-icon-text-align-items: center;
    --arc-icon-text-gap: var(${q}•gap);
    --arc-icon-text-svg-width: var(--arc-badge-svg-width, 1em);
  }

  /* CORE ------------------------------------------------------------• */

  [arc-badge-wrapper]:not([hidden]) {
    flex: var(--arc-badge-flex, var(${q}•flex, unset));
    align-self: var(--arc-badge-align-self, flex-start);
    display: var(${q}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: 1lh;
    max-height: 1lh;
    vertical-align: bottom;

    &:has(>[data-is-flexible]) {
      min-width: var(--arc-badge-min-width, var(${q}•min•width));
    }
  }

  [arc-badge] {
    font-size: var(--arc-badge-font-size, var(${q}•font•size));
    font-weight: var(--arc-font-weight-600);

    flex: var(${q}•flex);
    display: var(${q}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: var(${q}•size);
    padding-inline: var(${q}•padding•inline);

    overflow: hidden;
    white-space: nowrap;
    line-height: 1;

    color: var(--arc-badge-color, var(${qc}));
    background: var(--arc-badge-background, var(${Yc}));
    border-radius: var(${q}•border•radius);
    mix-blend-mode: var(--arc-badge-mix-blend-mode, unset);

    :is([data-element=icon], [data-element=text]) {
      font-size: var(${q}•font•size•text, 1em);
    }

    &[data-is-uppercase] [data-element=text] {
      text-transform: uppercase;
      font-size: var(${q}•font•size•caps);
    }
  }

}
`,$l=["brand","blue","neutral","purple","green","yellow","red","orange","mint","maroon","mono","mono-inverse","ai","overlay-light","overlay-dark"],gg=["brand",...$l.filter(r=>r!=="brand")],vg=["neutral",...$l.filter(r=>r!=="neutral")],pg=Jr(Ra,gg),fg=Jr(Ra,vg),mg=Jr(oe,["inherit","lg","md","sm"]),bg=Jr(Oe,["hug","fill"]),$g=["high","low"],yg=Jr(_r,["brand-blue","brand-black","neutral","info","success","warning","critical","ai","overlay-light","overlay-dark"]),xg={"brand-blue":"brand","brand-black":"mono-inverse",neutral:"neutral",info:"purple",success:"green",warning:"yellow",critical:"red",ai:"ai","overlay-light":"overlay-light","overlay-dark":"overlay-dark"},kg=({children:r,icon:e,text:a,isFlipped:t,isFlexible:o,isUppercase:n,color:c,variant:l,size:d="inherit",layout:h="hug",contrast:g="high",...f})=>{const v=c??xg[l??"brand-blue"],b=r||(0,i.jsx)(re,{icon:e,text:a,isFlipped:t,layout:"gutter"}),m=h==="fill"&&o;return(0,i.jsx)("span",{...f,"arc-badge-wrapper":"",children:(0,i.jsx)("span",{"arc-badge":"","data-contrast":g,"data-color":v,"data-layout":h,"data-size":d,"data-is-flexible":m?"":void 0,"data-is-uppercase":n?"":void 0,children:b})})};lr("ArcBadge",hg);const Sr=s`--arc•badge•count`,Zc=s`${Sr}•fg`,Xc=s`${Sr}•bg`,wg=ml({fg:Zc,bg:Xc}),Cg=bl({fg:Zc,bg:Xc}),Ag=s`
  &:has(>[data-size=lg]) {
    ${Sr}•font•size: var(${p}•14);
    ${Sr}•size: var(${p}•24);
    ${Sr}•padding•inline: var(${p}•4);
  }

  &:has(>[data-size=md]) {
    ${Sr}•font•size: var(${p}•12);
    ${Sr}•size: var(${p}•20);
    ${Sr}•padding•inline: var(${p}•4);
  }

  &:has(>[data-size=sm]) {
    ${Sr}•font•size: var(${p}•10);
    ${Sr}•size: var(${p}•16);
    ${Sr}•padding•inline: var(${p}•4);
  }

  &:has(>[data-size=inherit]) { /** @default • scalable based on 'md' size */
    ${Sr}•font•size: 1em;
    ${Sr}•font•size•text: 0.75em;
    ${Sr}•size: 1.25em;
    ${Sr}•padding•inline: 0.25em;
  }
`,Sg=s`
  &:has(>[data-shape=square]) {
    ${Sr}•border•radius: var(${p}•4);
  }

  &:has(>[data-shape=circle]) {
    ${Sr}•border•radius: var(--arc-border-radius-pill);
  }
`,zg=s`
@layer arc-components {

[arc-badge-count-wrapper] {
  ${wg}
  ${Cg}
  ${Ag}
  ${Sg}
}

/* CORE ------------------------------------------------------------• */

[arc-badge-count-wrapper]:not([hidden]) {
  flex: none;
  align-self: var(--arc-badge-count-align-self, flex-start);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1lh;
  max-height: 1lh;
  vertical-align: bottom;
}

[arc-badge-count] {
  font-size: var(--arc-badge-count-font-size, var(${Sr}•font•size));
  font-weight: var(--arc-font-weight-600);

  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(${Sr}•size);
  min-width: var(${Sr}•size);
  padding-inline: var(${Sr}•padding•inline);

  white-space: nowrap;
  line-height: normal;

  color: var(--arc-badge-count-color, var(${Zc}));
  background: var(--arc-badge-count-background, var(${Xc}));
  border-radius: var(${Sr}•border•radius);
  mix-blend-mode: var(--arc-badge-count-mix-blend-mode, unset);

  [data-element=text] {
    font-size: var(${Sr}•font•size•text, 1em);
  }
}

`,Eg=Jr(oe,["inherit","lg","md","sm"]),_g=Jr(_r,["neutral","brand","critical","warning","success","inverse"]),Ig=["low","high"],Tg=Jr(Et,["square","circle"]),jg={neutral:"neutral",brand:"brand",critical:"red",warning:"yellow",success:"green",inverse:"mono"},Rg=({children:r,text:e,color:a,variant:t,contrast:o,size:n="inherit",shape:c="square",...l})=>{const d=r||(0,i.jsx)("span",{"data-element":"text",children:e}),h=a??jg[t??"neutral"],g=t==="critical"?"high":o??"low";return(0,i.jsx)("span",{...l,"arc-badge-count-wrapper":"",children:(0,i.jsx)("span",{"arc-badge-count":"","data-color":h,"data-contrast":g,"data-shape":c,"data-size":n,children:d})})};lr("ArcBadgeCount",zg);const Ie=s`--arc•banner`,ie=s`${Ie}•bg`,ae=s`${Ie}•fg`,we=s`${Ie}•columns`,va=s`${Ie}•border`,Jc=s`${Ie}•border•radius`,Jt=s`${Ie}•padding`,Ua=s`${Ie}•min•height`,$n=s`${Ie}•body`,pt=s`${$n}•font•size`,yn=s`${$n}•gap`,yl=s`${$n}•flex•direction`,xl=s`${$n}•min•width`,Qc=s`${Ie}•icon`,ft=s`${Qc}•font•size`,ri=s`${Qc}•padding`,Aa=s`${Qc}•color`,kl=s`${Ie}•action`,ei=s`${kl}•justify`,ai=s`${kl}•gap`,Qt=s`${Ie}•column•gap`,ti=s`${Ie}•row•gap`,Pg=s`
  &:where([variant=ai]) {
    ${ae}: var(--arc-color-fg-primary);
    /* Note: uses components-specific gradient style from: bannerStyles import */
    ${ie}: var(--arc-banner-gradient-ai-50) padding-box, var(--arc-banner-gradient-ai-100) border-box;
    ${va}: var(--arc-border-width-sm) solid transparent;
  }

  &:where([variant=announcement]) {
    ${ae}: var(--arc-color-fg-primary);
    ${Aa}: var(--arc-color-fg-brand-mid);
    ${ie}: var(--arc-color-bg-blue-muted);
    ${va}: var(--arc-border-width-sm) solid var(--arc-color-border-blue-subtle);
  }

  &:where([variant=critical]) {
    ${ae}: var(--arc-color-fg-primary);
    ${Aa}: var(--arc-color-fg-critical-mid);
    ${ie}: var(--arc-color-bg-critical-muted);
    ${va}: var(--arc-border-width-sm) solid var(--arc-color-border-critical-subtle);
  }

  &:where([variant=info]) {
    ${ae}: var(--arc-color-fg-primary);
    ${Aa}: var(--arc-color-fg-info-mid);
    ${ie}: var(--arc-color-bg-info-muted);
    ${va}: var(--arc-border-width-sm) solid var(--arc-color-border-info-subtle);
  }

  &:where([variant=neutral]) {
    ${ae}: var(--arc-color-fg-secondary);
    ${Aa}: var(--arc-color-fg-secondary);
    ${ie}: var(--arc-color-alpha-muted);
    ${va}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &:where([variant=success]) {
    ${ae}: var(--arc-color-fg-primary);
    ${Aa}: var(--arc-color-fg-success-mid);
    ${ie}: var(--arc-color-bg-success-muted);
    ${va}: var(--arc-border-width-sm) solid var(--arc-color-border-success-subtle);
  }

  &:where([variant=warning]) {
    ${ae}: var(--arc-color-fg-primary);
    ${Aa}: var(--arc-color-fg-warning-mid);
    ${ie}: var(--arc-color-bg-warning-muted);
    ${va}: var(--arc-border-width-sm) solid var(--arc-color-border-warning-subtle);
  }
`,Lg=s`
  &:where([variant=ai]) {
    ${ae}: var(--arc-color-fg-on-stark);
    /* Note: uses components-specific gradient style from: bannerStyles import */
    ${ie}: var(--arc-banner-gradient-ai-300);
  }

  &:where([variant=announcement]) {
    ${ae}: var(--arc-color-fg-on-stark);
    ${ie}: var(--arc-color-bg-blue-stark);
  }

  &:where([variant=critical]) {
    ${ae}: var(--arc-color-fg-on-stark);
    ${ie}: var(--arc-color-bg-critical-mid);
  }

  &:where([variant=info]) {
    ${ae}: var(--arc-color-fg-on-stark);
    ${ie}: var(--arc-color-bg-info-stark);
  }

  &:where([variant=neutral]) {
    ${ae}: var(--arc-color-fg-on-stark);
    ${ie}: var(--arc-color-bg-neutral-stark);
  }

  &:where([variant=success]) {
    ${ae}: var(--arc-color-fg-on-stark);
    ${ie}: var(--arc-color-bg-success-stark);
  }

  &:where([variant=warning]) {
    ${ae}: var(--arc-color-fg-on-mid);
    ${ie}: var(--arc-color-bg-warning-mid);
  }
`,Mg=s`
  ${yn}: 0.375em;
  ${yl}: column;
  ${xl}: 7em;
  ${ai}: 0.75em;
  ${Qt}: 0.75em;
  ${ti}: 0.75em;

  /* INSET SETUP ---------------------------------------------------• */

  &[layout=inset] {
    ${Pg}

    ${Jt}: 0 0.75em 0 1em;
    ${Jc}: var(--arc-border-radius-lg);
    ${yn}: 0.125em;
    ${ri}: 0.0625em;
    ${Qt}: 0.625em;

    ${Ua}: 5em;

    &:where([density=comfortable]) {
      &:not(:has([arc-banner-actions], [arc-banner-dismiss]))) {
        ${Ua}: 4.75em;
      }
      &:has([arc-banner-heading]):not(:has([arc-banner-message])),
      &:has([arc-banner-message]):not(:has([arc-banner-heading])),
      &:not(:has([arc-banner-message], [arc-banner-heading])) {
        ${Ua}: 3.5em;
        ${ti}: 0.25em;

        &:has([arc-banner-actions]) {
          ${Ua}: 3.75em;
        }
      }
    }

    &[action-placement=bottom] {
      ${ei}: flex-start;

      &[density=compact] {
        ${Jt}: 0 0.25em 0 0.5em;
      }
    }

    &[density=compact]:where([action-placement=inline]) {
      line-height: normal;

      [arc-banner-grid] {
        font-size: var(${pt});
      }
    }
  }

  /* BLEED SETUP ---------------------------------------------------• */

  &[layout=bleed] {
    ${Lg}

    ${Ua}: 4em;
    ${Jt}: 0 0.75em 0 1em;
    ${va}: none;
    ${Jc}: 0;
    ${yn}: 0.125em;
    ${Qt}: 1em;
    ${ei}: flex-end;
    ${ri}: 0.125em;

    &[density=compact],
    &[alignment=center] {
      ${ft}: 1.125em;
      line-height: normal;

      [arc-banner-grid] {
        font-size: var(${pt});
      }
    }
  }

  /* DENSITIES -----------------------------------------------------• */

  &[density=comfortable] {
    ${ft}: 1em;
    ${pt}: 0.875em;
  }

  &[density=compact] {
    ${Ua}: 2em;
    ${Jt}: 0 0.25em 0 0.5em;
    ${pt}: 0.75em;
    ${ai}: 0.5em;
    ${Qt}: 0.5em;

    &[action-placement=inline] {
      ${ft}: 1em;
    }

    &[action-placement=bottom] {
      ${ft}: 0.875em;
    }

    [arc-banner-grid] {
      align-self: center;
    }
  }

  /* Inter-component communication • ArcIcon/ArcIconText/ArcLink ---• */

  &[layout=inset] {
    &[density=compact]:where([action-placement=inline]) {
      --arc-icon-text-icon-color: var(--arc-banner-icon-color, var(${Aa}));
      --arc-icon-text-gap: 0.375em;
    }

    [arc-banner-icon] {
      --arc-icon-color: var(--arc-banner-icon-color, var(${Aa}));
    }
  }

  &[layout=bleed] {
    &:where([density=compact], [alignment=center]) {
      --arc-icon-text-gap: 0.375em;
    }

    &[alignment=center] [arc-banner-grid] {
      --arc-icon-height: 100%;
      --arc-icon-max-height: 100%;
      --arc-icon-text-icon-size: var(${ft});
    }
  }

  &[density=compact] [arc-banner-body] {
    --arc-icon-height: 100%;
    --arc-icon-max-height: 100%;
    --arc-icon-text-icon-size: 1.125em;
  }

`,Bg=s`
  &[layout=inset] {
    [arc-banner-grid] {
      margin-block: 0.75em;
    }

    &[density=compact] {
      &[action-placement=bottom] {
        [arc-banner-grid] {
          margin-block: 0.25em 0.625em;
        }
      }

      &:not([action-placement=bottom]) {
        [arc-banner-grid] {
          margin-block: 0.25em;
          line-height: normal;
        }

        [arc-banner-icon],
        [arc-banner-body] {
          align-self: center;
        }
      }
    }

    &[action-placement=bottom] {
      [arc-banner-actions] { grid-row: 2; }
      &:has([arc-banner-icon]) [arc-banner-actions] { grid-column: 2 / -1; }
      &:not(:has([arc-banner-icon])) [arc-banner-actions] { grid-column: 1 / -1; }
    }
  }
`,Og=s`
  &[layout=bleed] {
    &[density=compact] {
      [arc-banner-grid] {
        margin-block: 0.25em;
      }
    }

    [arc-banner-grid] {
      margin-block: 0.5em;
      align-self: center;
      align-items: center;
    }

    &[alignment=center] {
      [arc-banner-grid] {
        font-size: var(${pt});
        place-items: center;
        line-height: normal;
      }
    }
  }
`,Dg=s`
  &:where([action-placement=inline]) {
    align-items: flex-start;

    &[density=compact] {
      ${we}: 1fr auto auto;

      &:not(:has([arc-banner-actions])):has([arc-banner-dismiss]),
      &:not(:has([arc-banner-dismiss])):has([arc-banner-actions]) {
        ${we}: 1fr auto;
      }
    }

    &[density=comfortable] {
      ${we}: auto 1fr auto auto;

      &:has([arc-banner-icon]):has([arc-banner-actions]):not(:has([arc-banner-dismiss])),
      &:has([arc-banner-icon]):has([arc-banner-dismiss]):not(:has([arc-banner-actions])) {
        ${we}: auto 1fr auto;
      }

      &:not(:has([arc-banner-icon])):has([arc-banner-actions]):has([arc-banner-dismiss]) {
        ${we}: 1fr auto auto;
      }

      &:has([arc-banner-icon]):not(:has([arc-banner-actions])):not(:has([arc-banner-dismiss])) {
        ${we}: auto 1fr;
      }
      &:not(:has([arc-banner-icon])):has([arc-banner-actions]):not(:has([arc-banner-dismiss])),
      &:not(:has([arc-banner-icon])):has([arc-banner-dismiss]):not(:has([arc-banner-actions])) {
        ${we}: 1fr auto;
      }
    }

    &:not(:has([arc-banner-icon], [arc-banner-dismiss], [arc-banner-actions])) {
      ${we}: 1fr;
    }
  }

  &:where([action-placement=bottom]) {
    ${we}: auto 1fr auto;

    &:not(:has([arc-banner-icon])) {
      ${we}: 1fr auto;
    }

    &:not(:has([arc-banner-dismiss])) {
      ${we}: auto 1fr;
    }

    &:not(:has([arc-banner-icon])):not(:has([arc-banner-dismiss])) {
      ${we}: 1fr;
    }
  }
`,Ng=s`
  width: var(--arc-banner-width, 100%);
  max-width: 100%;
  border: var(--arc-banner-border, var(${va}));
  background: var(--arc-banner-background, var(${ie}));
  border-radius: var(--arc-banner-border-radius, var(${Jc}));
  padding: var(--arc-banner-padding, var(${Jt}));
  min-height: var(--arc-banner-min-height, var(${Ua}, auto));
  font-size: var(--arc-banner-font-size, initial);
  line-height: var(--arc-line-height-loose);
  overflow: var(--arc-banner-overflow, unset);

  &:not([hidden]) {
    display: flex;
    align-items: center;
  }

  ${Dg}

  [arc-banner-grid] {
    color: var(--arc-banner-color, var(${ae}));
    flex: 1;

    display: grid;
    align-items: baseline;
    grid-template-columns: var(${we});
    column-gap: var(${Qt});
    row-gap: var(${ti});
  }

  [arc-banner-body] {
    color: var(--arc-banner-color, var(${ae}));
    flex: 1;
    min-width: var(--arc-banner-body-min-width, var(${xl}));

    display: flex;
    flex-direction: var(${yl});
    gap: var(${yn});
  }

  [arc-banner-icon] {
    font-size: var(${ft});
    padding-inline: var(${ri});
  }

  [arc-banner-heading],
  [arc-banner-message] {
    flex: none;
  }

  [arc-banner-heading],
  [arc-banner-message],
  [arc-banner-actions] {
    font-size: var(${pt});
    margin: 0;
  }

  [arc-banner-actions] {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: var(--arc-banner-action-justify, var(${ei}));
    gap: var(--arc-banner-action-gap, var(${ai}));
  }

`,Fg=s`
@layer arc-components {
  ${_0}

  [arc-banner] {
    /* CORE VARIABLES -----------------------------------------------• */
    ${Mg}

    /* CORE STYLES --------------------------------------------------• */
    ${Ng}

    /* INSET LAYOUT -------------------------------------------------• */
    ${Bg}

    /* BLEED LAYOUT -------------------------------------------------• */
    ${Og}
  }

}
`,Hg=["comfortable","compact"],Vg=["inset","bleed"],Ug=["inline","bottom"],Kg=["left","center"],Wg=[...sa],Gg=[..._r,"announcement"],qg=Jr(Gg,["ai","announcement","critical","info","neutral","success","warning"]),Sa={layout:"inset",variant:"neutral",density:"comfortable",actionPlacement:"inline",alignment:"left",showDismiss:!0},Yg=r=>r==="critical"||r==="warning"?"alert":"status",Zg=({children:r,id:e,icon:a,dismissProps:t,heading:o,density:n=Sa.density,layout:c=Sa.layout,actionPlacement:l=Sa.actionPlacement,alignment:d=Sa.alignment,actionSlot:h,showDismiss:g=Sa.showDismiss,message:f,variant:v=Sa.variant,onClose:b,...m})=>{const $=Ir(e,"arc-banner"),w=wc(a),_=d==="center",y=c==="bleed",C=c==="inset",S=n==="compact",I=l==="inline",j=!!w,D=C&&v==="ai"?"ai-200":void 0,z={variant:v,layout:c,density:n,alignment:d,"action-placement":l},k=()=>(0,i.jsx)(ir,{icon:w,gradient:D}),V=()=>(0,i.jsx)(i.Fragment,{children:!!h&&(0,i.jsx)("span",{"arc-banner-actions":"",children:h})}),U=()=>(0,i.jsx)("div",{"arc-banner-dismiss":"",children:(0,i.jsx)(Ar,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:C||y&&v==="warning"?"common":"alpha",hierarchy:"tertiary",shape:"square","aria-label":"Dismiss",size:S?"sm":"md",...t,onClick:or=>{t?.onClick?.(or),b?.()}})}),Y=({showActions:or=!0})=>(0,i.jsx)("div",{"arc-banner-body":"",children:r||(0,i.jsxs)(re,{icon:(0,i.jsx)(k,{}),children:[!!o&&(0,i.jsx)("strong",{children:o})," ",f," ",or&&h]})}),W=()=>(0,i.jsxs)(i.Fragment,{children:[j&&(0,i.jsx)("span",{"arc-banner-icon":"",children:(0,i.jsx)(k,{})}),(0,i.jsx)("div",{"arc-banner-body":"",children:r||(0,i.jsxs)(i.Fragment,{children:[o&&(0,i.jsx)("strong",{"arc-banner-heading":"",children:o}),f&&(0,i.jsx)("span",{"arc-banner-message":"",children:f})]})})]});return(0,i.jsx)("div",{role:Yg(v??Sa.variant),...m,...z,"arc-banner":"",id:$,children:(0,i.jsxs)("div",{"arc-banner-grid":"",children:[_?(0,i.jsx)(Y,{}):(0,i.jsxs)(i.Fragment,{children:[S&&I?(0,i.jsx)(Y,{showActions:!1}):(0,i.jsx)(W,{}),(0,i.jsx)(V,{})]}),g&&(0,i.jsx)(U,{})]})})};lr("ArcBanner",Fg);const pa=s`--arc•label`,ro=s`${pa}•cursor`,eo=s`${pa}•opacity`,Xg=s`
@layer arc-components {

  [arc-label] {
    /* Inter-Component Communication -------------------------------• */
    /* also applies to nested ArcLabelContent */
    ${eo}: var(--arc-label-opacity, unset);
    ${eo}•disabled: var(--arc-label-opacity-disabled, var(--arc-alpha-40));

    /* Internal STYLES ---------------------------------------------• */
    ${pa}•display: var(--arc-label-display, inline-flex);
    ${pa}•gap: var(--arc-label-gap, var(${p}•8));
    ${pa}•align•items: var(--arc-label-align-items, baseline);

    ${ro}: var(--arc-label-cursor, pointer);
    ${ro}•disabled: var(--arc-label-cursor-disabled, not-allowed);

    &:has(:disabled) {
      ${ro}: var(${ro}•disabled);
      ${eo}: var(${eo}•disabled);
    }

    &[data-layout=fill] {
      ${pa}•display: flex;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-label]:not([hidden]) {
    display: var(${pa}•display);
    align-items: var(${pa}•align•items);
    gap: var(${pa}•gap);
    cursor: var(${ro});
  }

}
`,Jg=ar(Oe,["hug","fill"]),za=({layout:r,...e})=>(0,i.jsx)("label",{...e,"arc-label":"","data-layout":r});lr("ArcLabel",Xg);const Qg=s`
@layer arc-components {

  [arc-label-content] {
    opacity: var(--arc-label-opacity, var(${eo}, unset));
    transition: var(--arc-label-transition, opacity 100ms ease-out);
    user-select: var(--arc-label-user-select, none);
    -webkit-user-select: var(--arc-label-user-select, none);
  }

}
`,Ka=r=>(0,i.jsx)("span",{...r,"arc-label-content":""});lr("LabelContent",Qg);const rv={checkbox:"checkbox",radio:"radio",switch:"radio"},ao=({id:r,indeterminate:e,type:a,onChange:t,...o})=>{const n=a==="checkbox"&&!!e,c=(0,u.useRef)(null),l=Ir(r,`arc-${a}`),d=h=>g=>{if(!(g?.target instanceof HTMLInputElement))return;const f={checked:g?.target.checked,indeterminate:g?.target?.indeterminate,name:g?.target?.name,value:o?.value};h?.(f,g)};return(0,u.useEffect)(()=>{c.current?.type==="checkbox"&&(c.current.indeterminate=!!e)},[e]),(0,i.jsx)("input",{...o,id:l,ref:c,type:rv[a],"arc-input-type":a,"aria-disabled":o?.disabled||void 0,"data-is-disabled":o?.disabled||void 0,"data-is-checked":o?.checked||void 0,"data-is-indeterminate":n||void 0,onChange:d(t)})},ev=s`
@layer arc-components {

  [arc-input-mask] {
    ${B}•border•width: var(--arc-border-width-sm);
    ${B}•border: var(${B}•border•width) solid var(${B}•border•color);

    /* Inter-Component Communication ---------------------------------• */

    /* for: ArcIcon */
    --arc-icon-size: var(${B}•icon•size); /* ArcIcon */

    /* STATES --------------------------------------------------------• */

    &:has(:disabled) {
      ${B}•cursor: not-allowed;
    }

    &:has(:focus:focus-visible) {
      ${B}•outline: var(${B}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES -----------------------------------------------------• */

  [arc-input-mask-wrapper] {
    align-self: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 1lh;
  }

  [arc-input-mask] {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(${B}•width);
    height: var(${B}•height);
    opacity: var(${B}•opacity, var(--arc-alpha-100));

    color: var(${B}•color, transparent);
    background: var(${B}•background);
    border: var(${B}•border);
    border-radius: var(${B}•border•radius);
    translate: var(${B}•translate, unset);

    outline: var(${B}•outline, none);
    outline-offset: var(${B}•border•width);

    transition-duration: 100ms;
    transition-behavior: allow-discrete;
    transition-timing-function: ease-in-out;
    transition-property:
      opacity,
      background,
      color,
      border-color,
      outline;

    [arc-input-type] {
      flex: none;
      outline: none;
      appearance: none;
      position: absolute;
      inset: calc(var(${B}•border•width) * -1);
      cursor: var(${B}•cursor, pointer);
      margin: 0;
      padding: 0;
      border: 0;
      z-index: var(${B}•z•index, unset);
    }
  }

}
`,xn=({type:r,...e})=>(0,i.jsx)("span",{"arc-input-mask-wrapper":"",children:(0,i.jsx)("span",{...e,"arc-input-mask":r})});lr("ArcBooleanInputMask",ev);const Vr=s`--arc•checkbox`,av=s`
@layer arc-components {

  [arc-checkbox] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${Vr}•font•size: 1em;
      ${Vr}•icon•size: 0.625em;
      ${Vr}•size: 1.125em;
      ${Vr}•gap: 0.5em;
    }

    &[data-size=md] {
      ${Vr}•font•size: var(${p}•14);
      ${Vr}•icon•size: var(${p}•10);
      ${Vr}•size: var(${p}•18);
      ${Vr}•gap: var(${p}•8);
    }

    &[data-size=sm] {
      ${Vr}•font•size: var(${p}•12);
      ${Vr}•icon•size: var(${p}•10);
      ${Vr}•size: var(${p}•16);
      ${Vr}•gap: var(${p}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: ArcBooleanInputMask */
    ${B}•border•radius: var(${p}•4);
    ${B}•size: var(${Vr}•size);
    ${B}•icon•size: var(${Vr}•icon•size);
    ${B}•width: var(${Vr}•size);
    ${B}•height: var(${Vr}•size);
    ${B}•translate: 0 var(${p}•1m);•

    /* for: ArcLabel */
    --arc-label-gap: var(${Vr}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-checkbox]:not([hidden]) {
    font-size: var(${Vr}•font•size);
    display: var(--arc-checkbox-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked, :indeterminate)) {
      ${B}•color: transparent;
      ${B}•border•color: var(--arc-color-border-stark);
      ${B}•background: transparent;

      &:hover {
        ${B}•border•color: var(--arc-color-border-theme-heavy);
        ${B}•background: var(--arc-color-bg-theme-subtle);
      }

      &:has(:disabled) {
        ${B}•border•color: var(--arc-color-border-disabled);
        ${B}•background: var(--arc-color-bg-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* PRIMARY, +DISABLED */
    &[data-variant=primary] {
      &:has(:checked, :indeterminate) {
        ${B}•color: var(--arc-color-fg-on-theme-heavy);
        ${B}•border•color: transparent;
        ${B}•background: var(--arc-color-bg-theme-heavy);

        &:not(:has(:disabled)):hover {
          ${B}•color: var(--arc-color-fg-on-theme-stark);
          ${B}•background: var(--arc-color-bg-theme-stark);
        }

        &:has(:disabled) {
          ${B}•color: var(--arc-color-fg-on-theme-mid);
          ${B}•background: var(--arc-color-bg-theme-mid);
        }
      }
    }

    /* SECONDARY, +DISABLED */
    &[data-variant=secondary] {
      &:has(:checked, :indeterminate) {
        ${B}•color: var(--arc-color-fg-theme-heavy);
        ${B}•border•color: var(--arc-color-border-theme-heavy);
        ${B}•background: transparent;

        &:not(:has(:disabled)):hover {
          ${B}•color: var(--arc-color-fg-theme-stark);
          ${B}•border•color: var(--arc-color-border-theme-stark);
        }

        &:has(:disabled) {
          ${B}•color: var(--arc-color-fg-theme-subtle);
          ${B}•border•color: var(--arc-color-border-theme-mid);
        }
      }
    }
  }

}
`,tv=ar(Oe,["hug","fill"]),ov=ar(oe,["inherit","md","sm"]),nv=ar(_r,["primary","secondary"]),wl=({children:r,label:e,layout:a,size:t="md",variant:o="primary",useMask:n=!0,...c})=>{const{className:l,title:d,...h}=c,g={className:l,title:d},f=r??e,v=(0,i.jsx)(ao,{...h,type:"checkbox"}),b=n&&(0,i.jsxs)(xn,{type:"checkbox",children:[v,(0,i.jsx)(ir,{icon:h?.indeterminate?"fa-solid fa-minus arc-fw":"fa-solid fa-check arc-fw"})]}),m=!!f&&(0,i.jsxs)(za,{layout:a,children:[b||v,(0,i.jsx)(Ka,{children:f})]});return(0,i.jsx)("span",{...g,"arc-checkbox":"","data-size":t,"data-variant":o,children:m||b||v})};lr("ArcCheckbox",av);const Te=s`--arc•cb`,zr=s`${Te}•o`,je=s`${zr}•border`,oi=s`${zr}•icon`,ni=s`${zr}•text`,cv=s`
@layer arc-components {

  [arc-checkbox-bar] {
    ${Te}•font•size: var(${p}•14);
    ${Te}•border•radius: var(${p}•6);
    ${Te}•background: var(--arc-color-alpha-black-0);
    ${Te}•padding: 0px;
    ${Te}•gap: var(${p}•2);

    ${zr}•color: var(--arc-color-fg-secondary);
    ${zr}•background: var(--arc-color-alpha-white-0);

    ${je}•color: var(--arc-color-alpha-black-0);
    ${je}•width: var(${p}•1);
    ${je}•radius: var(${p}•6); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------- */
    &[data-size=lg] { /* @default */
      ${zr}•size: var(${p}•40);
      ${zr}•line•height: var(${p}•38); /* • -2px to account for border-width (top/bottom) */
      ${oi}•padding: var(${p}•8);
      ${ni}•padding: var(${p}•12);
    }

    &[data-size=md] {
      ${zr}•size: var(${p}•32);
      ${zr}•line•height: var(${p}•30); /* • -2px to account for border-width (top/bottom) */
      ${oi}•padding: var(${p}•6);
      ${ni}•padding: var(${p}•8);
    }

    /* Inter-Component Communication -------------------------------• */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */

    /* LAYOUTS ------------------------------------------------------ */
    &[data-layout=hug] { /* @default */
      ${Te}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${Te}•display: flex;
    }
  }

  /* STATES --------------------------------------------------------- */
  [arc-checkbox-bar-option] {
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${zr}•color: var(--arc-color-fg-on-hover-default);
        ${zr}•background: var(--arc-color-bg-hover-default);
        ${je}•color: var(--arc-color-alpha-black-0);
      }
    }

    &:has(:checked) {
      ${zr}•color: var(--arc-color-fg-primary);
      ${zr}•background: var(--arc-color-bg-secondary);
      ${je}•color: var(--arc-color-alpha-black-0);
      ${zr}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${zr}•color: var(--arc-color-fg-disabled);
    }

    &:has(:focus-within:focus-visible) {
      ${zr}•outline: var(${je}•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------- */
  [arc-checkbox-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-checkbox-bar]:not([hidden]) {
    font-size: var(--arc-checkbox-bar-font-size, var(${Te}•font•size));
    display: var(${Te}•display);
    gap: var(${Te}•gap);
    background: var(${Te}•background);
    border-radius: var(${je}•radius);
    padding: 0;
    margin: 0;

    [arc-checkbox] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${je}•radius);
      outline: var(${zr}•outline, none);
      outline-offset: var(${je}•width);
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=checkbox] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${zr}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${zr}•size);
      min-width: var(${zr}•size);

      border-radius: var(${je}•radius);
      border: var(${je}•width) solid var(${je}•color);
      background: var(${zr}•background);
      color: var(${zr}•color);
      font-weight: var(${zr}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${ni}•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${oi}•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,iv=ar(Oe,["hug","fill"]),sv=ar(oe,["lg","md"]),lv=({children:r,label:e,icon:a,...t})=>{const o=r||(0,i.jsx)(re,{icon:a,text:e});return(0,i.jsx)("li",{"arc-checkbox-bar-option":"","data-is-checked":t?.checked||void 0,children:(0,i.jsx)(wl,{...t,label:o,layout:"fill",useMask:!1})})},dv=({children:r,size:e="lg",layout:a="hug",...t})=>(0,i.jsx)("ul",{...t,"arc-checkbox-bar":"","data-size":e,"data-layout":a,role:"group",children:r});lr("ArcCheckboxBar",cv);const uv=["normal","simple","add"],hv=["swatch","color-stop","thumbnail"],gv=["standalone","embedded"],Cl=["color-field","eye-dropper","hue-slider","alpha-slider","alpha-input","hex-input","palettes"],Al=["eye-dropper","alpha-slider","hex-input","palettes"],vv=1e-10,ci=1e-6,kn=1e-4,J=(r,e,a)=>Math.min(a,Math.max(e,r)),wn=(r,e)=>{const a=10**e;return Math.round(r*a)/a},Sl=(r,e=ci)=>Math.abs(r)<e?0:Math.abs(1-r)<e?1:r,to=r=>parseInt(r,16),Zr=r=>J(wn(r,0),0,255),zl=r=>wn((r%360+360)%360,2),El=(r,e)=>Sl(wn(J(r,0,1),e)),We=r=>{const e=(r.h%360+360)%360,a=J(r.s,0,1),t=J(r.v,0,1),o=J(r.a,0,1),n=t*a,c=n*(1-Math.abs(e/60%2-1)),l=t-n;let d=0,h=0,g=0;return e<60?[d,h,g]=[n,c,0]:e<120?[d,h,g]=[c,n,0]:e<180?[d,h,g]=[0,n,c]:e<240?[d,h,g]=[0,c,n]:e<300?[d,h,g]=[c,0,n]:[d,h,g]=[n,0,c],{r:(d+l)*255,g:(h+l)*255,b:(g+l)*255,a:o}},oo=(r,e)=>{const a=J(r.r,0,255)/255,t=J(r.g,0,255)/255,o=J(r.b,0,255)/255,n=Math.max(a,t,o),c=Math.min(a,t,o),l=n-c,d=n===0?0:l/n,h=n;let g=e??0;return l>vv?(n===a?g=60*((t-o)/l%6):n===t?g=60*((o-a)/l+2):g=60*((a-t)/l+4),g<0&&(g+=360)):g=(g%360+360)%360,{h:g,s:d,v:h,a:J(r.a,0,1)}},_l=r=>{const e=(r.h%360+360)%360,{s:a}=r,{l:t}=r,o=(1-Math.abs(2*t-1))*a,n=o*(1-Math.abs(e/60%2-1)),c=t-o/2;let l=0,d=0,h=0;return e<60?[l,d,h]=[o,n,0]:e<120?[l,d,h]=[n,o,0]:e<180?[l,d,h]=[0,o,n]:e<240?[l,d,h]=[0,n,o]:e<300?[l,d,h]=[n,0,o]:[l,d,h]=[o,0,n],{r:(l+c)*255,g:(d+c)*255,b:(h+c)*255,a:r.a}},Il=r=>{const e=r.r/255,a=r.g/255,t=r.b/255,o=Math.max(e,a,t),n=Math.min(e,a,t),c=o-n;let l=0;c!==0&&(o===e?l=60*((a-t)/c%6):o===a?l=60*((t-e)/c+2):l=60*((e-a)/c+4)),l<0&&(l+=360);const d=(o+n)/2,h=c===0?0:c/(1-Math.abs(2*d-1));return{h:l,s:h,l:d,a:r.a}},Tl=r=>{const e=Wa(r.r),a=Wa(r.g),t=Wa(r.b),o=.4122214708*e+.5363325363*a+.0514459929*t,n=.2119034982*e+.6806995451*a+.1073969566*t,c=.0883024619*e+.2817188376*a+.6299787005*t,l=Math.cbrt(o),d=Math.cbrt(n),h=Math.cbrt(c),g=.2104542553*l+.793617785*d-.0040720468*h,f=1.9779984951*l-2.428592205*d+.4505937099*h,v=.0259040371*l+.7827717662*d-.808675766*h,b=Math.sqrt(f*f+v*v);let m=Math.atan2(v,f)*180/Math.PI;return m<0&&(m+=360),{L:J(g,0,1),C:b,h:m,a:J(r.a,0,1)}},jl=r=>{const e=J(r.L,0,1),a=r.h*Math.PI/180,t=r.C*Math.cos(a),o=r.C*Math.sin(a),n=e+.3963377774*t+.2158037573*o,c=e-.1055613458*t-.0638541728*o,l=e-.0894841775*t-1.291485548*o,d=n*n*n,h=c*c*c,g=l*l*l,f=4.0767416621*d-3.3077115913*h+.2309699292*g,v=-1.2684380046*d+2.6097574011*h-.3413193965*g,b=-.0041960863*d-.7034186147*h+1.707614701*g,m=$=>{const w=$<=.0031308?$*12.92:1.055*$**.4166666666666667-.055;return Math.round(J(w,0,1)*255)};return{r:m(f),g:m(v),b:m(b),a:J(r.a,0,1)}},Wa=r=>{const e=Zr(r)/255;return e<=.04045?e/12.92:((e+.055)/1.055)**2.4},Rl=r=>{const e=Wa(r.r),a=Wa(r.g),t=Wa(r.b);return .2126*e+.7152*a+.0722*t},Pl=(r,e)=>{const a=r.a+e.a*(1-r.a);if(a<=0)return{r:0,g:0,b:0,a:0};const t=r.a/a,o=e.a*(1-r.a)/a;return{r:Zr(r.r*t+e.r*o),g:Zr(r.g*t+e.g*o),b:Zr(r.b*t+e.b*o),a:El(a,2)}},no=(r,e,a,t)=>{const o=t?t(r):r,n=t?t(e):e;return Math.abs(o-n)<=a},mt=(r,e,a)=>no(r,e,a,Math.round),ii=(r,e,a)=>no(r,e,a),Cn=(r,e)=>!e||!r?!1:mt(r.r,e.r,1)&&mt(r.g,e.g,1)&&mt(r.b,e.b,1)&&ii(r.a,e.a,1/255+ci),si=(r,e)=>!r||!e?!1:Zr(r.r)===Zr(e.r)&&Zr(r.g)===Zr(e.g)&&Zr(r.b)===Zr(e.b)&&Math.abs(r.a-e.a)<ci,li=(r,e)=>!e||!r?!1:mt(r.r,e.r,3)&&mt(r.g,e.g,3)&&mt(r.b,e.b,3)&&ii(r.a,e.a,.02),di=(r,e)=>no(r.h,e.h,kn)&&no(r.s,e.s,kn)&&no(r.v,e.v,kn)&&ii(r.a,e.a,kn),pv=/^[0-9a-f]+$/i,fv=500,bt=new Map,ui=r=>({...r}),mv=(r,e)=>{if(bt.size>=fv){const a=bt.keys().next().value;a&&bt.delete(a)}bt.set(r,e?ui(e):null)},bv=r=>r.split("").map(e=>e+e).join(""),Ll=r=>{const e=r.trim().toLowerCase().replace(/^#/,"");if(![3,4,6,8].includes(e.length))return null;const a=e.length<=4?bv(e):e;if(!pv.test(a))return null;const t=to(a.slice(0,2)),o=to(a.slice(2,4)),n=to(a.slice(4,6)),c=a.length===8?to(a.slice(6,8))/255:1;return[t,o,n,c].some(l=>Number.isNaN(l))?null:{r:t,g:o,b:n,a:J(c,0,1)}},ra=r=>{const e=Number(r.trim());return Number.isFinite(e)?e:null},hi=r=>{const e=r.trim();if(e.endsWith("%")){const t=ra(e.slice(0,-1));return t==null?null:J(t/100*255,0,255)}const a=ra(e);return a==null?null:J(a,0,255)},co=r=>{const e=r.trim();if(e.endsWith("%")){const t=ra(e.slice(0,-1));return t==null?null:J(t/100,0,1)}const a=ra(e);return a==null?null:J(a,0,1)},gi=(r,e)=>{const t=r.trim().toLowerCase().match(e);if(!t)return null;const o=t[1].trim(),[n,c]=o.split("/").map(h=>h.trim()),l=n.includes(",")?n.split(",").map(h=>h.trim()):n.split(/\s+/).filter(Boolean),d=c&&c.length?c:null;return{body:o,channels:l,alphaPart:d}},$v=r=>{const e=gi(r,/^rgba?\((.*)\)$/);if(!e)return null;const{body:a,channels:t,alphaPart:o}=e;if(t.length!==3)return null;const n=hi(t[0]),c=hi(t[1]),l=hi(t[2]);if(n==null||c==null||l==null)return null;let d=1;if(o){const h=co(o);if(h==null)return null;d=h}else{const h=a.includes(",")?a.split(",").map(g=>g.trim()):null;if(h&&h.length===4){const g=co(h[3]);if(g==null)return null;d=g}}return{r:n,g:c,b:l,a:d}},yv=r=>{const e=gi(r,/^hsla?\((.*)\)$/);if(!e)return null;const{body:a,channels:t,alphaPart:o}=e;if(t.length!==3)return null;const n=f=>Number(f.replace("deg","").trim()),c=f=>{if(!f.endsWith("%"))return null;const v=ra(f.slice(0,-1));return v==null?null:v/100},l=n(t[0]),d=c(t[1]),h=c(t[2]);if(!Number.isFinite(l)||d==null||h==null)return null;let g=1;if(o){const f=co(o);if(f==null)return null;g=f}else{const f=a.includes(",")?a.split(",").map(v=>v.trim()):null;if(f&&f.length===4){const v=co(f[3]);if(v==null)return null;g=v}}return _l({h:l,s:d,l:h,a:g})},xv=r=>{const e=gi(r,/^oklch\((.*)\)$/);if(!e)return null;const{channels:a,alphaPart:t}=e;if(a.length!==3)return null;const o=g=>{const f=g.trim();if(f.endsWith("%")){const b=ra(f.slice(0,-1));return b!=null?J(b/100,0,1):null}const v=ra(f);return v!=null?J(v,0,1):null},n=g=>{const f=g.trim();if(f.endsWith("%")){const b=ra(f.slice(0,-1));return b!=null&&b>=0?b/100*.4:null}const v=ra(f);return v!=null&&v>=0?v:null},c=o(a[0]),l=n(a[1]),d=ra(a[2].trim());if(c==null||l==null||d==null||!Number.isFinite(d))return null;let h=1;if(t){const g=co(t);if(g==null)return null;h=g}return jl({L:c,C:l,h:d,a:h})},Tr=r=>{if(!r||typeof r!="string")return null;const e=r.toLowerCase().trim();if(bt.has(e)){const t=bt.get(e);return t?ui(t):null}let a=null;return e.startsWith("#")?a=Ll(e):e.startsWith("rgb")?a=$v(e):e.startsWith("hsl")?a=yv(e):e.startsWith("oklch")&&(a=xv(e)),mv(e,a),a?ui(a):null},Ml=r=>{if(!r||typeof r!="string")return!1;const e=r.trim().toLowerCase();return/^#?[0-9A-F-a-f]{3,4}$/.test(e)||/^#?[0-9A-F-a-f]{6}([0-9A-F-a-f]{2})?$/.test(e)},Bl=r=>{if(!r||typeof r!="object")return!1;const e=r;return typeof e.r=="number"&&typeof e.g=="number"&&typeof e.b=="number"&&typeof e.a=="number"},Ol=r=>{if(!r||typeof r!="object")return!1;const e=r;return typeof e.h=="number"&&typeof e.s=="number"&&typeof e.v=="number"&&typeof e.a=="number"},$t=r=>String(Math.round(J(r,0,1)*100)),Dl=r=>{const e=r.trim();if(!e)return null;if(e.endsWith("%")){const t=Number(e.slice(0,-1).trim());return Number.isFinite(t)?J(t/100,0,1):null}if(e.startsWith(".")||e.includes(".")){const t=Number(e);return Number.isFinite(t)?J(t,0,1):null}const a=Number(e);return Number.isFinite(a)?J(a/100,0,1):null},An=r=>J(Number(r.toFixed(2)),0,1).toString(),Re=(r,e=!1)=>{const a=l=>J(Math.round(l),0,255).toString(16).padStart(2,"0"),t=a(r.r),o=a(r.g),n=a(r.b),c=a(J(r.a,0,1)*255);return e?`#${t}${o}${n}${c}`:`#${t}${o}${n}`},vi=r=>{const e=Il(r),a=Math.round(e.h),t=Math.round(e.s*100),o=Math.round(e.l*100);return`hsl(${a} ${t}% ${o}% / ${An(J(e.a,0,1))})`},Ga=r=>{const e=J(Math.round(r.r),0,255),a=J(Math.round(r.g),0,255),t=J(Math.round(r.b),0,255),o=J(r.a,0,1);return o<1?`rgb(${e} ${a} ${t} / ${An(o)})`:`rgb(${e} ${a} ${t})`},pi=r=>{const e=Tl(r),a=Math.round(e.L*1e3)/10,t=Math.round(e.C/.4*1e3)/10,o=Math.round(e.h),n=J(e.a,0,1);return n<1?`oklch(${a}% ${t}% ${o} / ${An(n)})`:`oklch(${a}% ${t}% ${o})`},Nl={auto:r=>r.a<1?Ga(r):Re({...r,a:1},!1),hex:r=>Re({...r,a:1},!1),hexa:r=>Re(r,!0),rgb:r=>Ga(r),hsl:r=>vi(r),oklch:r=>pi(r)},kv=(r,e)=>(Nl[r]??Nl.hex)(e),Ce=r=>typeof r=="string"?r:r.color,Sn=(r,e)=>typeof r!="string"&&r.name?r.name:e??void 0,Fl=r=>{const e=Ce(r),a=Tr(e),t=!!a&&a.a<1&&a.a>.01,o=!!a&&a.a===0;return{cssColor:e,rgba:a,isTranslucent:t,isTransparent:o,opaqueHex:a?Re({...a,a:1},!1):null}},zn=(r,e)=>{if(Ol(r))return r;const a=(Bl(r)?r:null)??Tr(r)??Tr(e)??{r:0,g:0,b:0,a:1};return oo(a)},qa=(r,e)=>{const a=e?.fallbackHex??"#000000",t=e?.format??"hex",o=zn(r,a),n={h:(o.h%360+360)%360,s:J(o.s,0,1),v:J(o.v,0,1),a:J(o.a,0,1)},c=We(n),l={r:Zr(c.r),g:Zr(c.g),b:Zr(c.b),a:n.a},d=kv(t,l);let h,g,f,v,b;const m=l.a<1?"rgb":"hex",$=l.a<1?Ga(l):Re({...l,a:1},!1);return{format:t,value:d,alpha:l.a,autoFormat:m,autoValue:$,hsv:n,rgba:l,get hex(){return h??=Re({...l,a:1},!1)},get hexa(){return g??=Re(l,!0)},get rgb(){return f??=Ga(l)},get hsl(){return v??=vi(l)},get oklch(){return b??=pi(l)}}},Hl=(r,e)=>({...qa(r.hsv,{format:e}),name:r.name}),Vl=(r,e)=>({color:Ce(r),name:Sn(r,e)}),Ul=r=>({color:`#${`00${Math.floor(Math.random()*16777216).toString(16)}`.slice(-6)}`,name:r}),yt=r=>Ce(r).trim().toLowerCase(),En=(r,e)=>{if(yt(r)===yt(e))return!0;const a=Tr(Ce(r)),t=Tr(Ce(e));return!!a&&!!t&&Cn(a,t)},fi=(r,e,a)=>{const t=a?.skipIndex;return r.some((o,n)=>n!==t?En(o,e):!1)},wv=r=>{let e=null;try{e=r?document.documentElement?.querySelector?.(r):document.documentElement}catch{return null}if(e==null)return null;const a=window.getComputedStyle(e);return Tr(a?.backgroundColor)},mi=(r,e)=>{const a=Tr(Ce(r));if(!a)return e?.useScheme?"auto":"inherit";const{darkColor:t,lightColor:o,contrastBias:n,bgColor:c,bgElement:l}=e??{},d=e?.useScheme?"light":t??"#000000",h=e?.useScheme?"dark":o??"#ffffff",g=J(n??-4,-7,7);let f=a;if(a.a<1){const $=Tr(c??""),w=$?null:wv(l);f=Pl(a,$??w??{r:255,g:255,b:255,a:1})}const v=Rl(f),b=(v+.05)/.05,m=1.05/(v+.05);return b+g>=m?d:h},bi=r=>r==null?null:{comparisonKey:yt(r),selectedRgba:Tr(Ce(r))},Kl=(r,e)=>{if(!e)return!1;if(yt(r)===e.comparisonKey)return!0;if(!e.selectedRgba)return!1;const a=Tr(Ce(r));return!!a&&Cn(a,e.selectedRgba)},Cv=s`--arc•button•bar`,io=s`${Cv}•axis`,Av=s`
@layer arc-components {

  [arc-button-bar=horizontal] {
    ${io}: row;

    &[is-flipped] {
      ${io}: row-reverse;
    }
  }

  [arc-button-bar=vertical] {
    ${io}: column;

    &[is-flipped] {
      ${io}: column-reverse;
    }
  }

  [arc-button-bar] {
    flex: var(--arc-button-bar-flex, 1);
    display: var(--arc-button-bar-display, flex);
    flex-direction: var(--arc-button-bar-flex-direction, var(${io}));
    align-items: var(--arc-button-bar-align-items, center);
    justify-content: var(--arc-button-bar-justify-content, flex-end);
    gap: var(--arc-button-bar-gap, var(${E}•8));
    padding: var(--arc-button-bar-padding, 0);
    margin: 0;
  }

}
`,_n=({children:r,...e})=>{const{Element:a="menu",orientation:t="horizontal",isFlipped:o=!1,...n}=e;return(0,i.jsx)(a,{...n,"arc-button-bar":t,"is-flipped":o?"":void 0,role:n.role??"group",children:r})};lr("ArcButtonBar",Av);const Sv=({activeColor:r})=>{const[e,a]=(0,u.useState)(r),t=r!=null,o=t?r:e;(0,u.useEffect)(()=>{r!=null&&a(r)},[r]);const n=(0,u.useCallback)(c=>{t||a(c)},[t]);return{isSelectionControlled:t,activeSelectedColor:o,setUncontrolledSelectedColor:a,selectColor:n}},Wl=(r,e)=>fi(r,e)?r:[...r,e],Gl=(r,e)=>{const a=Wl(r.colors??[],e);return a===r.colors?r:{...r,colors:a}},ql=(r,e)=>{const a=r.colors??[],t=a.filter(o=>!En(o,e));return t.length===a.length?r:{...r,colors:t}},Yl=(r,e,a)=>r.map(t=>t.id===e.id?Gl(t,a):t),Zl=(r,e,a)=>r.map(t=>t.id===e.id?ql(t,a):t),zv=(r,e,a)=>{if(Array.isArray(r)){if(a===void 0)throw new TypeError("ArcColorPalette.addColor: pass (palettes, palette, color) when the first argument is an array.");return Yl(r,e,a)}return Gl(r,e)},Ev=(r,e,a)=>{if(Array.isArray(r)){if(a===void 0)throw new TypeError("ArcColorPalette.removeColor: pass (palettes, palette, color) when the first argument is an array.");return Zl(r,e,a)}return ql(r,e)},_v=(r,e,a)=>{const t=r.find(o=>o.id===e);return t?Yl(r,t,a):r},Iv=(r,e,a)=>{const t=r.find(o=>o.id===e);return t?Zl(r,t,a):r},Tv=({palette:r,isSelectionControlled:e,onAddColor:a,emitColorChange:t,setLocalColors:o,setUncontrolledSelectedColor:n,initialColorValue:c,shouldOpenPopover:l=!0,notifyAddColorToggle:d,showPopover:h,hidePopover:g})=>{const f=(0,u.useCallback)(()=>c??Ul(),[c]),[v,b]=(0,u.useState)(null),[m,$]=(0,u.useState)(f),w=(0,u.useCallback)(()=>{b(null),$(f())},[f]),_=(0,u.useCallback)(z=>{o(k=>Wl(k,z))},[o]),y=(0,u.useCallback)((z,k)=>{a?.(r,z,k),t(z),e||n(z)},[t,e,a,r,n]),C=(0,u.useCallback)((z,k)=>{_(z),y(z,k??void 0)},[_,y]),S=(0,u.useCallback)(()=>{if(v!=null)return;const z=f();let k=-1;o(V=>(k=V.length,[...V,z])),b(k),$(z),d?.(!0),l&&h()},[v,f,d,o,l,h]),I=(0,u.useCallback)(z=>{v!=null&&$(z)},[v]),j=(0,u.useCallback)(z=>{z?.preventDefault(),z?.stopPropagation(),v!=null&&o(k=>k.filter((V,U)=>U!==v)),w(),d?.(!1),l&&g()},[v,g,d,w,o,l]),L=(0,u.useCallback)((z,k)=>{const U=(or=>typeof or?.preventDefault=="function")(z)?z:k;if(U?.preventDefault(),U?.stopPropagation(),v==null||m==null){d?.(!1),l&&g();return}const W=(r.colors??[]).map((or,N)=>N===v?m:or);o(W),y(m,U??void 0),w(),d?.(!1),l&&g()},[v,m,y,g,d,r.colors,w,o,l]),D=(0,u.useCallback)((z,k)=>{k?.preventDefault(),k?.stopPropagation(),C(z,k??void 0)},[C]);return{draftColorIndex:v,draftColorValue:m,startAddDraft:S,updateDraftColor:I,cancelDraftColor:j,saveDraftColor:L,saveCurrentColor:D}},Ae=s`--arc-popover`,xt=s`--arc•color•picker`,Br=s`${xt}•thumb`,so=s`${xt}•tools`,ea=s`${xt}•dropper`,Xl=s`
  background-image:
    linear-gradient(
      to right,
      transparent,
      var(--js•hex, transparent)
    ),
    conic-gradient(
      var(--arc-color-alpha-subtle) 0 25%,
      var(--arc-color-alpha-muted) 0 50%,
      var(--arc-color-alpha-subtle) 0 75%,
      var(--arc-color-alpha-muted) 0 100%
    );

  background-size: 100% 100%, 1em 1em;
  background-position: 50% 50%, 50% 50%;
`,Jl={POPOVER:s`
    /* Inter-Component Communication: ArcPopover */
    ${Ae}-width: 14em; /* 224px */
    ${Ae}-min-width: 10.5em; /* 140px */
    ${Ae}-max-width: 15.75em; /* 252px */
    ${Ae}-line-height: normal; /* @note – allows elements to resolve to design-spec heights */
    ${Ae}-outline-size: 0px; /* @note – default outline-size causes divider lines to not extend to the edges of the popover shell. */
    ${Ae}-padding: 0;

    ${Ae}-header-padding: 0.75em 1em;
    ${Ae}-header-background: var(--arc-color-bg-mono);
    ${Ae}-header-align-items: center;

    ${Ae}-body-padding: 0;

    ${Ae}-footer-padding: 1em;
    ${Ae}-footer-background: var(--arc-color-bg-mono);


    /* Inter-Component Communication: ArcButtonBar via ArcPopoverFooter */
    [arc-popover-footer]:has([arc-button-bar]) {
      --arc-button-bar-justify-content: stretch;
      --arc-button-flex: 1;
    }

    &:has([arc-color-picker=simple]) {
      ${Ae}-width: 12.25em; /* 196px */
    }
  `,PICKER:s`
    ${Br}•shadow: 0 0 0 0.25em var(--arc-color-alpha-white-95), 0 0 0.375em 0.1875em var(--arc-color-alpha-black-30);
    ${Br}•size: 0.625em;
    ${Br}•transition: 200ms ease-out;

    ${xt}•padding: 1em;
    &[is-inline] { ${xt}•padding: 0; }

    &[arc-color-picker=simple] {
      ${ea}•align•self: end;
      ${so}•gap: 1em 0.5em;

      [arc-color-slider] {
        grid-column: 1 / -1;
      }
    }

    [arc-color-input=hex] {
      --arc-input-prefix-opacity: var(--arc-alpha-40);
      --arc-input-suffix-opacity: var(--arc-alpha-100);
    }

    /* This font-size is intended for various scaling calculations. */
    font-size: initial;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;

    -webkit-user-select: none;
    user-select: none;

    /* Inter-Component Communication: ArcInput & ArcLabel • font-size reset for input labels */
    --arc-input-padding-inline: max(6px, 0.375em);
  `},jv=s`

  [arc-color-field] {
    display: grid;
    gap: 0.5em;
  }

  [arc-color-surface=field] {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;

    -webkit-user-select: none;
    user-select: none;
    touch-action: none;
    cursor: pointer;

    border-radius: var(--arc-border-radius-md);
    background: var(--arc-color-bg-mono);

    &:focus:focus-visible {
      outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
      outline-offset: 0.25em;
    }

    &::after {
      box-sizing: border-box;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      pointer-events: none;
      z-index: 2;
    }
  }

  [arc-color-field-canvas] {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    border-radius: inherit;
    pointer-events: none;
  }

  [arc-color-field-slice] {
    position: absolute;
    pointer-events: none;
    z-index: 3;
    border-radius: var(--arc-border-radius-pill);
    transition: left var(${Br}•transition), top var(${Br}•transition);
  }

  [arc-color-field][sr-focus] [has-focus] {
    outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
    outline-offset: 0.25em;
  }

  /* Saturation axis at current Value */
  [arc-color-field-slice=saturation] {
    inset: calc(var(--js•v) * 100%) 0 auto 0;
    height: var(--arc-border-width-md);
  }

  /* Value axis at current Saturation */
  [arc-color-field-slice=value] {
    inset: 0 auto 0 calc(var(--js•s) * 100%);
    width: var(--arc-border-width-md);
  }

  [arc-color-field-thumb] {
    position: absolute;
    left: calc(var(--js•s) * 100%);
    top: calc(var(--js•v) * 100%);
    transform: translate(-50%, -50%);
    width: var(${Br}•size);
    height: var(${Br}•size);
    border: 0;
    border-radius: var(--arc-border-radius-circle);
    box-shadow: var(${Br}•shadow);
    background: var(--js•rgb);
    z-index: 4;
    transition:
      background var(${Br}•transition),
      left var(${Br}•transition),
      top var(${Br}•transition);
  }

  @media (prefers-reduced-motion: reduce) {
    [arc-color-field-thumb],
    [arc-color-field-slice] {
      transition: none;
    }
  }

  [arc-color-field][is-interacting] {
    [arc-color-field-thumb],
    [arc-color-field-slice] {
      transition: none;
    }
  }

  /* Visually hidden but usable (so SR users can access them) */
  [arc-color-field-sr] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  [arc-color-field-sr-slider] {
    display: block;
  }

`,Rv=s`

  [arc-color-slider] {
    display: grid;
    gap: 0.375em;

    [arc-label] {
      font-size: 0.75em;
    }

    [arc-color-surface] {
      position: relative;
      display: flex;
      border-radius: var(--arc-border-radius-pill);
      height: 0.875em;
      align-items: center;

      &[arc-color-surface=hue] {
        ${Br}•bg: var(--js•hue);

        background-image:
          linear-gradient(
            to right,
            #f00 0%,
            #ff0 16.66%,
            #0f0 33.33%,
            #0ff 50%,
            #00f 66.66%,
            #f0f 83.33%,
            #f00 100%
          );
      }

      &[arc-color-surface=alpha] {
        ${Br}•bg: var(--js•rgb);
        ${Xl}
      }

      &:has(input[type=range]:focus:focus-visible) {
        ::-webkit-slider-thumb {
          outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
          outline-offset: 0.4em;
        }

        ::-moz-range-thumb {
          outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
          outline-offset: 0.4em;
        }
      }
    }

    input[type=range] {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      background: transparent;
      appearance: none;
      outline: none;
      cursor: pointer;
      font: inherit;

      /* Track */
      &::-webkit-slider-runnable-track { display: flex; align-items: center; }
      &::-moz-range-track { display: flex; align-items: center; }

      /* Thumb */
      &::-webkit-slider-thumb {
        appearance: none;
        width: var(${Br}•size);
        height: var(${Br}•size);
        border: 0;
        border-radius: var(--arc-border-radius-circle);
        box-shadow: var(${Br}•shadow);
        background: var(${Br}•bg);
      }

      &::-moz-range-thumb {
        appearance: none;
        width: var(${Br}•size);
        height: var(${Br}•size);
        border: 0;
        border-radius: var(--arc-border-radius-circle);
        box-shadow: var(${Br}•shadow);
        background: var(${Br}•bg);
      }
    }
  }

`,Ql=s`3.75em`,Pv=s`

  [arc-color-inputs] {
    display: grid;
    gap: 0.5em;
    grid-template-columns: 1fr ${Ql};
    align-items: end;

    &:not(:has([arc-color-input=hex])) {
      grid-template-columns: ${Ql} 1fr;
    }

    [arc-color-input=alpha] {
      --arc-input-text-align: end;
    }

    [arc-color-input=hex] {
      --arc-icon-color: var(--arc-color-fg-critical-mid);
      --arc-input-action-display: contents;
      --arc-button-min-width: none;
      --arc-button-max-width: 2.25em;
    }

    ::-webkit-inner-spin-button {
      appearance: none;
    }

    input[type=number] {
      appearance: textfield;
    }
  }

`,Lv=s`

  &[arc-color-picker=simple]:has([arc-color-palettes]) [arc-color-tools] {
    padding-top: 0;
  }

  [arc-color-tools] {
    display: grid;
    gap: var(${so}•gap, 0.5em);
    grid-template-columns: var(${so}•columns, auto 1fr);
  }

  [arc-color-tools=simple] {
    &:has([arc-color-input=hex]):not(:has([arc-color-eye-dropper])) {
      ${so}•columns: 1fr 2em;
    }
  }

  :is([arc-color-field], [arc-color-inputs]) {
    grid-column: 1 / -1;
  }

  [arc-color-eye-dropper] {
    align-self: var(${ea}•align•self, center);
    justify-self: var(${ea}•justify•self, center);
  }

  [arc-color-sliders] {
    grid-column: 1 / -1;

    display: grid;
    gap: 0.25em;
    grid-template-columns: auto;
    align-self: center;
  }

  [arc-color-eye-dropper] + [arc-color-sliders] {
    grid-column: 2;
  }

  /* Finding a good place for the eye dropper in some cases */
  &:has([arc-color-input=hex]):not(:has([arc-color-input=alpha], [arc-color-sliders])),
  &:has([arc-color-input=alpha]):not(:has([arc-color-input=hex], [arc-color-sliders])) {
    ${ea}•align•self: end;
    ${ea}•justify•self: end;

    &:has([arc-color-eye-dropper]) [arc-color-inputs] { display: contents; }

    &:not(:has([arc-color-field])) { ${ea}•row: 1; }

    &:not(:has([arc-color-input=hex])) {
      ${ea}•justify•self: start;
      ${so}•columns: 1fr auto;
      ${ea}•column: 1;
    }

    [arc-color-eye-dropper] {
      grid-column:  var(${ea}•column, 2);
      grid-row: var(${ea}•row, 2);
    }

    [arc-color-sliders] { grid-column: 1 / -1; }
  }

  ${jv}
  ${Rv}
  ${Pv}

`,Mv=s`
@layer arc-components {

  [arc-color-picker-wrapper] {
    ${Jl.POPOVER}
  }

  [arc-color-picker] {
    ${Jl.PICKER}

     [arc-color-picker-section] {
      padding: var(${xt}•padding);

      &:has(+[arc-color-picker-section]) { padding-bottom: 1em; }
      +[arc-color-picker-section] { padding-top: 1em; }

      &[has-divider=top] { border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid); }
      &[has-divider=bottom] { border-bottom: var(--arc-border-width-sm) solid var(--arc-color-border-mid); }
    }

    ${Lv}

    [arc-color-palettes] {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }

    [arc-color-picker-section=footer] {
      position: sticky;
      bottom: 0;
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      background: var(--arc-color-bg-mono);
      z-index: 2;
    }

    [arc-color-picker-button-bar] * {
      flex: 1;
    }
  }

}
`,se=s`--arc•color•chip`,Bv=s`
@layer arc-components {

  [arc-color-chip=add-color] {
    ${se}•radius: var(--arc-border-radius-circle);
    ${se}•width: var(${p}•24);
    ${se}•height: var(${p}•24);
  }

  [arc-color-chip=swatch] {
    ${se}•radius: var(--arc-border-radius-circle);
    ${se}•width: var(${p}•24);
    ${se}•height: var(${p}•24);
  }

  [arc-color-chip=color-stop] {
    ${se}•radius: var(--arc-border-radius-md);
    ${se}•width: var(${p}•24);
    ${se}•height: var(${p}•24);
  }

  [arc-color-chip=thumbnail] {
    ${se}•radius: var(--arc-border-radius-md);
    ${se}•width: var(${p}•28);
    ${se}•height: var(${p}•42);
  }

  [arc-color-chip] {
    --arc-button-position: relative;
    --arc-button-background: var(--js•color);
    --arc-button-color: var(--js•fg, transparent);
    --arc-button-width: var(${se}•width);
    --arc-button-height: var(${se}•height);
    --arc-button-border-radius: var(${se}•radius);
    --arc-button-border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
    --arc-button-outline-offset: var(--arc-border-width-sm);
    --arc-icon-size: var(${p}•10);

    &[is-transparent] {
      --arc-button-background: unset;
      ${Xl}
    }

    &[is-translucent] {
      --arc-button-background:
        var(--js•color)
        linear-gradient(
          to right,
          var(--js•hex),
          var(--js•hex) 50%,
          transparent 50%,
          transparent
        ) border-box;

      &::after {
        content: '';
        position: absolute;
        inset: 0 auto 0 50%;
        translate: -100% 0;
        width: var(--arc-border-width-sm);
        background: var(--arc-color-border-mid);
        pointer-events: none;
        z-index: 1;
      }
    }

    &[is-selected] {
      --arc-button-border: var(--arc-border-width-sm) solid var(--arc-color-border-heavy);
      --arc-button-box-shadow: 0 0 0 var(--arc-border-width-md) var(--arc-color-fg-on-mono-inverse) inset;
    }

    &[is-draft] {
      --arc-button-outline: var(--arc-border-width-md) dotted color-mix(in srgb, transparent 35%, var(--arc-color-border-focus) 65%);
    }

    &[is-control] {
      --arc-button-background: var(--arc-color-alpha-muted);
      --arc-button-color: inherit;
    }
  }

}
`,rd=(0,u.memo)(({color:r,name:e,kind:a,isDraft:t,isSelected:o,contrastBias:n,contrastBgColor:c,canRemoveColor:l,icon:d,text:h,tooltip:g,onClick:f,style:v,...b})=>{const{cssColor:m,isTranslucent:$,isTransparent:w,opaqueHex:_}=(0,u.useMemo)(()=>Fl(r??""),[r]),y=Sn(r??"",e),C=h??y??m,S=(0,u.useMemo)(()=>mi(m,{contrastBias:n,bgColor:c}),[m,n,c]),[I,j]=(0,u.useState)(!1),[L,D]=(0,u.useState)(!1),[z,k]=(0,u.useState)(!1),[V,U]=(0,u.useState)(!1),[Y,W]=(0,u.useState)(!1);(0,u.useEffect)(()=>{const P=pr=>{(pr.metaKey||pr.key==="Meta")&&(j(!0),k(!0))},X=pr=>{const Cr=pr.metaKey;j(Cr),k(Cr)},vr=()=>{j(!1),k(!1)};return window.addEventListener("keydown",P),window.addEventListener("keyup",X),window.addEventListener("blur",vr),()=>{window.removeEventListener("keydown",P),window.removeEventListener("keyup",X),window.removeEventListener("blur",vr)}},[]);const N=a==="swatch"&&!!l&&(V&&I||(I||z)&&L),tr=N||Y,R=tr?"fa-regular fa-xmark":d??"fa-solid fa-check",F=tr?"Remove color":g??y??(Ml(m)?m.toUpperCase():m);(0,u.useEffect)(()=>{N&&W(!0)},[N]),(0,u.useEffect)(()=>{!N&&o&&!t&&W(!1)},[t,N,o]);const H=(0,u.useCallback)(P=>{const X=N||P.metaKey?"remove":"select",vr={...qa(m,{format:"auto",fallbackHex:m}),name:y};f?.({colorData:vr,action:X,source:a,shouldClosePicker:!1},P)},[N,f,m,y,a]),M=(0,u.useCallback)(P=>{P.preventDefault(),P.stopPropagation(),H(P)},[H]),rr=(0,u.useCallback)(P=>{P.metaKey&&(P.preventDefault(),P.stopPropagation(),H(P))},[H]),er=(0,u.useCallback)(P=>{const X=P.propertyName??"";!(X==="color"||X.includes("color"))||N||W(!1)},[N]),Z=(0,u.useCallback)(P=>{P.key!=="Enter"||!N||(P.preventDefault(),P.stopPropagation(),P.currentTarget.click())},[N]),hr=(0,u.useMemo)(()=>({...v??{},"--js\u2022hex":w?"transparent":$&&(_??m)||"","--js\u2022color":m,"--js\u2022fg":o&&!t||N?S:""}),[v,w,$,_,m,o,t,N,S]);return(0,i.jsx)(Ar,{...b,_isCustom:!0,"arc-color-chip":a,layout:"icon",tooltip:F,text:C,icon:R,"is-draft":t?"":void 0,"is-selected":!t&&o?"":void 0,"is-translucent":$?"":void 0,"is-transparent":w?"":void 0,style:hr,onClick:M,onContextMenu:rr,onMouseEnter:P=>{D(!0),k(P.metaKey)},onMouseMove:P=>{k(P.metaKey)},onMouseLeave:()=>{D(!1),k(!1),W(!1)},onFocus:()=>U(!0),onBlur:()=>{U(!1),W(!1)},onKeyDown:Z,onTransitionEnd:er})});rd.displayName="ArcColorSwatch";const $i=rd;$i.getColorData=qa,lr("ArcColorSwatch",Bv);const Ov=s`
@layer arc-components {

  [arc-color-palette] {
    display: flex;
    flex-direction: column;
    gap: var(${E}•8);

    [arc-color-palette-header] {
      display: flex;
      flex-direction: column;
      gap: var(${E}•4);
      font-size: var(${p}•12);

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      small { opacity: 0.612; }
    }

    [arc-color-palette-set] {
      display: flex;
      flex-wrap: wrap;
      gap: var(${E}•4);
      max-width: calc((var(${p}•24) + var(${E}•4)) * 7 + var(${E}•24));
    }

    [arc-color-palette-picker] {
      display: grid;
      gap: var(${E}•8);
      padding-top: var(${E}•8);
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
    }

    [arc-color-palette-inputs] {
      display: grid;
      gap: var(${E}•8);
      grid-template-columns: auto auto;
      align-items: end;
    }

    [arc-color-palette-actions] {
      display: flex;
      justify-content: flex-end;
      gap: var(${E}•8);
    }

    [arc-add-color] {
      --arc-icon-size: var(${p}•10);
    }
  }

}
`,In=({children:r,id:e,heading:a,showHeading:t=!0,colors:o=[],activeColor:n,format:c=_a.format,canAddColor:l=!1,canRemoveColor:d=!1,contrastBgColor:h,addColorFlow:g="standalone",sharedSwatchProps:f,onSwatchClick:v,onAddColor:b,onRemoveColor:m,onColorChange:$,onAddColorToggle:w,..._})=>{const y=g==="embedded",C=Ir(void 0,"add-color-anchor"),S=Ir(void 0,"add-color-popover"),[I,j]=(0,u.useState)(o),[L,D]=(0,u.useState)(!1),{isSelectionControlled:z,activeSelectedColor:k,setUncontrolledSelectedColor:V,selectColor:U}=Sv({activeColor:n}),Y=(0,u.useMemo)(()=>bi(k),[k]),W=(0,u.useMemo)(()=>I.map(nr=>({normalized:yt(nr),rgba:Tr(Ce(nr))})),[I]),or=(0,u.useMemo)(()=>W.map(nr=>Y?nr.normalized===Y.comparisonKey?!0:!!Y.selectedRgba&&!!nr.rgba&&Cn(nr.rgba,Y.selectedRgba):!1),[W,Y]),N=(0,u.useMemo)(()=>or.some(Boolean),[or]),tr=!y&&N?void 0:k;(0,u.useEffect)(()=>{j(o)},[o]);const R=(0,u.useCallback)(nr=>{if(typeof nr=="object"&&nr!==null&&"hsv"in nr){$?.(nr);return}const Pr=Ce(nr),ue=Sn(nr),me=qa(Pr,{format:c});$?.({...me,name:ue})},[$,c]),F=(0,u.useCallback)(nr=>{D(nr),w?.(e,nr)},[e,w]),H=(0,u.useCallback)(()=>ga?.handlePopover?.(S,"show"),[S]),M=(0,u.useCallback)(()=>ga?.handlePopover?.(S,"hide"),[S]),rr=(0,u.useMemo)(()=>({id:e,heading:a,showHeading:t,colors:I,activeColor:n,format:c,canAddColor:l,canRemoveColor:d,contrastBgColor:h,addColorFlow:g,sharedSwatchProps:f,onSwatchClick:v,onAddColor:b,onRemoveColor:m,onColorChange:$,onAddColorToggle:w}),[e,a,t,I,n,c,l,d,h,g,f,v,b,m,$,w]),{draftColorIndex:er,draftColorValue:Z,startAddDraft:hr,updateDraftColor:P,cancelDraftColor:X,saveDraftColor:vr,saveCurrentColor:pr}=Tv({palette:rr,isSelectionControlled:z,onAddColor:b,emitColorChange:R,setLocalColors:j,setUncontrolledSelectedColor:V,initialColorValue:tr,shouldOpenPopover:!y,notifyAddColorToggle:F,showPopover:H,hidePopover:M}),Cr=(0,u.useMemo)(()=>I.map((nr,Pr)=>er===Pr&&Z!=null?Z:nr),[er,Z,I]),Xr=(0,u.useMemo)(()=>{if(er==null||Z==null||Y==null||er<0||er>=or.length)return or;const nr=[...or];return nr[er]=Kl(Z,Y),nr},[or,er,Z,Y]),Be=(0,u.useMemo)(()=>bi(Z),[Z]),G=(0,u.useMemo)(()=>er==null||Be==null?!1:fi(I,Z,{skipIndex:er}),[er,Be,Z,I]),Rr=(0,u.useCallback)((nr,Pr)=>{if(!nr?.colorData)return;const ue={color:nr.colorData.value,name:nr.colorData.name};if(nr.action==="remove"&&d){j(me=>{const xa=me.filter(Qa=>!En(Qa,ue));return xa.length===me.length?me:xa}),m?.(rr,ue,Pr);return}U(ue),v?.({...nr,source:"swatch",shouldClosePicker:!1},Pr),R(nr.colorData)},[d,R,m,v,rr,U]),gr=(0,u.useCallback)(nr=>er===nr&&Z!=null,[er,Z]);(0,u.useEffect)(()=>{!y||er==null||k==null||P(k)},[k,er,y,P]);const Nr=(0,u.useCallback)(nr=>{const Pr=nr?.newState==="open";D(Pr),w?.(e,Pr)},[e,w]),de=(0,u.useCallback)(nr=>{const Pr=k??_a.color;pr(Pr,nr)},[k,pr]),Ye=(0,u.useCallback)(nr=>{nr.key!=="Escape"||!L||X(nr)},[X,L]),ia=!k||y&&!L&&N,Io=y&&L?"Cancel":y?"Add Current Color":"Add Color",To=y||!L;let Ze=de;return y||(Ze=L?X:hr),(0,i.jsxs)("div",{..._,"arc-color-palette":e,"is-adding-color":L?"":void 0,children:[t&&a&&(0,i.jsx)("header",{"arc-color-palette-header":"",children:typeof a=="string"?(0,i.jsx)("strong",{children:a}):(0,i.jsx)(re,{...a,layout:"inline",isStrong:!0})}),(0,i.jsxs)("div",{"arc-color-palette-set":"",id:C,children:[Cr?.map((nr,Pr)=>(0,u.createElement)($i,{...f,key:`${Ce(nr)}-${Pr}`,color:nr,kind:"swatch",isDraft:gr(Pr),isSelected:Xr[Pr],canRemoveColor:d&&!(y&&gr(Pr)),contrastBgColor:h,tooltip:y&&gr(Pr)?"Save Color":void 0,onClick:y&&gr(Pr)?vr:Rr})),l&&To&&(0,i.jsx)(Ar,{"arc-add-color":"",popoverTarget:S,icon:"fa-regular fa-plus",layout:"icon",shape:"round",size:"sm",hierarchy:"secondary",tooltip:Io,onClick:Ze,isDisabled:ia})]}),l&&!y&&(0,i.jsx)(Ya,{mode:"add",heading:"",color:Z??_a.color,format:c,onChange:nr=>P(nr.value),popoverProps:{id:S,popover:"manual",anchorAt:"right-center",alternateAnchorId:C,hidePopoverButton:!0,tryFallbacks:!0,hasTail:!0,onToggle:Nr,onKeyDown:Ye,footerSlot:(0,i.jsxs)(_n,{"arc-color-picker-button-bar":"",children:[(0,i.jsx)(Ar,{"arc-color-picker-button":"cancel",text:"Cancel",hierarchy:"secondary",size:"sm",onClick:X}),(0,i.jsx)(Ar,{"arc-color-picker-button":"save",text:"Save",size:"sm",onClick:vr,isDisabled:G})]})}}),r&&(0,i.jsx)("footer",{"arc-color-palette-footer":"",children:r})]})};In.addColor=zv,In.removeColor=Ev,lr("ArcColorPalette",Ov);const Dv=(0,u.memo)(function({palette:e,canAddColor:a,canRemoveColor:t,activePaletteColor:o,contrastBgColor:n,onSwatchClick:c,onAddColor:l,onRemoveColor:d}){const h=(0,u.useCallback)((g,f)=>{c(g,f,e.id)},[e.id,c]);return(0,i.jsx)(In,{...e,canAddColor:a??e.canAddColor,canRemoveColor:t,addColorFlow:"embedded",activeColor:o,contrastBgColor:n,onAddColor:l,onRemoveColor:d,onSwatchClick:h})}),ed=({palettes:r=[],canAddColor:e,canRemoveColor:a,activePaletteColor:t,contrastBgColor:o,selectedNameRef:n,hsvRef:c,popoverId:l,onAddColor:d,onRemoveColor:h,commitLocalHsv:g,...f})=>{const v=(0,u.useRef)(r);v.current=r;const b=(0,u.useCallback)(($,w,_)=>{const y=v.current.find(S=>S.id===_);if(!y)return;if(w?.preventDefault(),w?.stopPropagation(),$?.action==="remove"&&(a??y.canRemoveColor)){y.onSwatchClick?.($,w);return}$?.colorData&&(n.current=$.colorData.name,g($.colorData.hsv));try{y.onSwatchClick?.($,w)}catch{}if(($?.shouldClosePicker??!0)&&l)try{ga.handlePopover(l,"hide")}catch{}},[a,g,l,n]),m=(0,u.useCallback)(($,w,_)=>{d?.($,w,_)},[d]);return r.length?(0,i.jsx)("div",{...f,"arc-color-palettes":"","arc-color-picker-section":"palettes",children:r.map($=>(0,i.jsx)(Dv,{palette:$,canAddColor:e,canRemoveColor:!!(a??$.canRemoveColor),activePaletteColor:t,contrastBgColor:o,onSwatchClick:b,onAddColor:m,onRemoveColor:h},$.id))}):null},ad=1,td="Please enter six hex digits \u2192 A1B2C3",Nv="Use six hex digits (RGB only). Opacity is not editable in this picker.",Fv=/^[0-9A-Fa-f]{3}$/,Hv=/^[0-9A-Fa-f]{4}$/,Vv="[0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8}",Uv="[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}",Kv=0,Wv=255,Ea=r=>r.replace(/#/g,"").trim(),od=r=>r.length===3?`${r[0]}${r[0]}${r[1]}${r[1]}${r[2]}${r[2]}`:r,lo=r=>Re({...r,a:1},!1).replace(/^#/,""),Gv=r=>Math.min(Wv,Math.max(Kv,Math.round(r))),nd=r=>{if(Fv.test(r))return{kind:"three",expanded:od(r)};if(Hv.test(r)){const e=Tr(`#${r}`);if(e)return{kind:"four",shorthand:r,expanded:lo(e),alphaPercent:Math.round(e.a*100)}}return null},qv=r=>r?.kind==="three"?`Please enter six hex digits \u2192 ${r.expanded.toUpperCase()}.`:r?.kind==="four"?`Change to \u2192 #${r.expanded.toUpperCase()} at ${r.alphaPercent}% opacity?`:td,Yv=(r,e,a)=>{const t=Ea(r),o=nd(t),n=t.length>0&&(!a&&t.length===8||!e&&t.length!==6&&t.length!==8||Tr(`#${t}`)===null),l=!e&&t.length>0&&t.length!==6&&t.length!==8||!a&&t.length===8?qv(o):td,d=!a&&t.length===8?Nv:l;let h="Apply expanded six-digit hex";return o?.kind==="four"?h=`Apply #${o.expanded.toUpperCase()} and ${o.alphaPercent}% opacity`:o?.kind==="three"&&(h=`Apply expanded hex ${o.expanded.toUpperCase()}`),{isInvalid:n,errorAid:{tooltip:d,ariaLabel:h,fix:o}}},yi=(r,e,a)=>{const t=Tr(`#${r}`);t&&(e(r,{applyHexAlpha:!0}),a(lo(t)))},Zv=(r,e,a,t)=>{if(e){yi(r,a,t);return}const o=Tr(`#${r}`);if(o){const n=lo(o);t(n),a(n)}},Xv=(r,e,a,t)=>{if(e)yi(r,a,t);else{const o=r.slice(0,6);t(o),a(o)}},Jv=(r,e,a,t)=>{r.kind==="three"?(a(r.expanded),e(r.expanded)):t?(e(r.shorthand,{applyHexAlpha:!0}),a(r.expanded)):(a(r.expanded),e(r.expanded))},Qv=(r,e=!1)=>{const a=Ea(r);return!e&&a.length>6?a.slice(0,6):a},rp=(r,e,a,t,o)=>{const n=Tr(`#${r}`)??e,c={...n,[a]:Gv(n[a]+t*o)};return lo(c)},ep=(r,e,a,t)=>{if(!a&&(r.length===8||t?.applyHexAlpha===!0))return!1;if(!e&&r.length>0){const o=r.length===6||r.length===8,n=t?.applyHexAlpha===!0&&r.length===4;if(!o&&!n)return!1}return!0},ap=(r,e,a)=>{const t=Tr(`#${r}`);return t?a?.applyHexAlpha===!0&&(r.length===4||r.length===8)?t:{...t,a:e.a}:null},kt=r=>(0,i.jsx)(i.Fragment,{children:!!r.children&&(0,i.jsx)("span",{...r})}),tp=r=>(0,i.jsx)(i.Fragment,{children:!!r.children&&(0,i.jsx)("span",{...r})}),xi=({children:r,...e})=>(0,i.jsx)(i.Fragment,{children:!!r&&(0,i.jsx)(za,{...e,children:(0,i.jsx)(Ka,{children:r})})}),op=({children:r,layout:e,size:a,variant:t,tag:o="span",...n})=>(0,i.jsx)(o,{...n,"data-layout":e,"data-size":a,"data-variant":t,children:r}),np=()=>(0,i.jsx)("span",{"input-element":"spacer"}),cp=r=>(0,i.jsx)(kt,{...r,"input-element":"header"}),ip=r=>(0,i.jsx)(xi,{...r,"input-element":"header-label"}),sp=r=>(0,i.jsx)(kt,{...r,"input-element":"header-slot"}),lp=r=>(0,i.jsx)(kt,{...r,"input-element":"body"}),dp=r=>(0,i.jsx)(xi,{...r,"input-element":"input-prefix"}),up=r=>(0,i.jsx)(xi,{...r,"input-element":"input-suffix"}),hp=r=>(0,i.jsx)(tp,{...r,"input-element":"input-action"}),gp=r=>(0,i.jsx)(kt,{...r,"input-element":"footer"}),vp=r=>(0,i.jsx)(kt,{...r,"input-element":"footer-caption"}),pp=r=>(0,i.jsx)(kt,{...r,"input-element":"footer-slot"}),fp=r=>e=>{if(!(e?.target instanceof HTMLInputElement))return;const a={name:e?.target?.name,value:e?.target?.value};r?.(a,e)},yr=s`--arc•input`,fa=s`${yr}•fg`,Tn=s`${fa}•disabled`,jn=s`${fa}•readonly`,Rn=s`${fa}•invalid`,Pe=s`${yr}•bg`,Pn=s`${Pe}•hover`,Ln=s`${Pe}•disabled`,Mn=s`${Pe}•readonly`,Bn=s`${Pe}•invalid`,mp=s`${yr}•align`,cd=s`${mp}•items`,bp=s`${yr}•flex`,$p=s`${bp}•direction`,id=s`${yr}•header`,On=s`${id}•label•color`,sd=s`${id}•slot•color`,ld=s`${yr}•footer`,ki=s`${ld}•caption•color`,dd=s`${ld}•slot•color`,wi=s`${yr}•border`,Ci=s`${wi}•radius`,yp=s`${wi}•width`,Le=s`${wi}•color`,Ai=s`${yr}•outline`,ud=s`${Ai}•size`,hd=s`${Ai}•offset`,gd=s`${Ai}•color`,uo=s`${yr}•height`,xp=s`${yr}•padding`,Dn=s`${xp}•inline`,Si=s`${Dn}•end`,vd=s`${yr}•slot`,zi=s`${vd}•gap`,Ei=s`${vd}•font•size`,Nn=s`${Le}•hover`,Fn=s`${Le}•disabled`,_i=s`${Le}•readonly`,ho=s`${Le}•invalid`,kp=s`${yr}•action•max•height`,pd=s`${yr}•gap`,Ii=s`${yr}•font•size`,wp=s`
@layer arc-components {

/* --arc[-internal, -modifier, -computed] • NOT FOR CONSUMER USE ---• */

[arc-input] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=xl] {
    ${uo}: var(${p}•48);
    ${Si}: var(${E}•8);
  }

  &:is([data-size=lg], [data-size=inherit]) { /* @default • base size at 100% */
    ${uo}: var(${p}•40);
  }

  &[data-size=md] {
    ${uo}: var(${p}•32);
    ${Ci}: var(${p}•4);
    ${kp}: 80%;
  }

  &:has(select) {
    ${Dn}: 0;
    ${cd}: stretch;
  }

  & {
    /* Defaults -------------------------• */
    ${Ii}: var(${p}•14);
    ${Ei}: var(${p}•12);

    ${uo}: var(${p}•40); /* default size */
    ${pd}: var(${E}•6);
    ${zi}: var(${E}•4);
    ${Dn}: var(${E}•12);
    ${Si}: var(${E}•3);
    ${Ci}: var(${p}•8);
    ${yp}: var(${p}•1);
    ${ud}: var(${p}•2);
    ${hd}: var(${p}•1m);

    &[data-size=inherit] {
      ${Ii}: 0.875em; /* 14px at 100% */
      ${Ei}: 0.75em; /* 12px at 100% */
    }
  }

  /* VARIANTS ------------------------------------------------------• */

  & {
    ${fa}: var(--arc-color-fg-primary);
    ${On}: inherit;
    ${sd}: var(--arc-color-fg-secondary);
    ${ki}: var(--arc-color-fg-secondary);
    ${dd}: var(--arc-color-fg-secondary);

    &[data-variant=outline] { /* @default */
      ${Pe}: var(--arc-color-bg-primary);
      ${Pn}: var(--arc-color-bg-primary);
      ${Le}: var(--arc-color-border-mid);
      ${Nn}: var(--arc-color-border-heavy);

      ${Tn}: var(--arc-color-fg-disabled);
      ${Ln}: var(--arc-color-bg-secondary);
      ${Fn}: var(--arc-color-border-mid);

      ${jn}: var(--arc-color-fg-primary);
      ${Mn}: var(--arc-color-bg-disabled);
      ${_i}: var(--arc-color-border-mid);

      ${Rn}: var(--arc-color-fg-critical-mid);
      ${Bn}: var(--arc-color-bg-primary);
      ${ho}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=solid] {
      ${Pe}: var(--arc-color-bg-secondary);
      ${Pn}: var(--arc-color-bg-hover-default);
      ${Le}: transparent;
      ${Nn}: var(--arc-color-border-stark);

      ${Rn}: var(--arc-color-fg-critical-mid);
      ${Bn}: var(--arc-color-bg-critical-muted);
      ${ho}: transparent;

      ${Tn}: var(--arc-color-fg-disabled);
      ${Ln}: var(--arc-color-bg-disabled);
      ${Fn}: transparent;

      ${jn}: var(--arc-color-fg-primary);
      ${Mn}: var(--arc-color-bg-disabled);
      ${ho}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=plain] {
      ${Pe}: transparent;
      ${Pn}: var(--arc-color-bg-hover-default);
      ${Le}: transparent;
      ${Nn}: transparent;

      ${Rn}: var(--arc-color-fg-critical-mid);
      ${Bn}: transparent;
      ${ho}: var(--arc-color-fg-critical-mid);

      ${Tn}: var(--arc-color-fg-disabled);
      ${Ln}: transparent;
      ${Fn}: transparent;

      ${jn}: var(--arc-color-fg-primary);
      ${Mn}: var(--arc-color-bg-disabled);
      ${_i}: transparent;
    }
  }

  /* STATES --------------------------------------------------------• */

  &:not(:has(
    input:read-only,
    input:disabled,
    select[data-readonly],
    select:disabled
  )) {

    &:has(select) {
      ${yr}•cursor: pointer;
    }

    &:is(
      :hover,
      [data-simulate=hover]
    ) {
      ${Le}: var(--arc-input-border-color-hover, var(${Nn}));
      ${Pe}: var(--arc-input-background-hover, var(${Pn}));
    }

    &:has([input-element=body]) {
      &:is(
        :focus-within,
        [data-simulate=focus],
        [data-simulate=active],
        :has(:focus, :focus-visible, :active)
      ) {
        ${gd}: var(--arc-color-border-focus);
      }
    }
  }

  &:has(input:read-only, select[data-readonly]) {
    ${yr}•cursor: default;
    ${fa}: var(${jn});
    ${Pe}: var(${Mn});
    ${Le}: var(${_i});
  }

  &:has(input:disabled, select:disabled) {
    ${yr}•cursor: not-allowed;
    ${fa}: var(${Tn});
    ${Pe}: var(${Ln});
    ${Le}: var(${Fn});
    ${On}: var(--arc-color-fg-primary);
  }

  &[data-simulate=invalid],
  &:has(
    input:user-invalid:not(:focus),
    select:user-invalid:not(:focus)
  ) {
    ${Pe}: var(${Bn});
    ${On}: var(${fa});
    ${Le}: var(${ho});
    ${ki}: var(${Rn});
  }

  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=fill] { /* @default */
    ${yr}•display: flex;
  }

  &[data-layout=hug] {
    ${yr}•display: inline-flex;
  }

  & {
    ${yr}•border: var(--arc-border-width-sm) solid var(${Le});
    ${yr}•outline: var(${ud}) solid var(${gd}, transparent);
  }
}

/* Inter-Component Communications ----------------------------------• */

[arc-input] {
  --arc-icon-text-line-height: normal;
  --arc-label-cursor: var(${yr}•cursor, inherit); /* ArcLabel • cursor syncing */

  &[data-size=md] {
    --arc-button-border-radius: var(--arc-border-radius-sm);
    --arc-button-outline-offset: 0;
    --arc-button-font-size: 0.8em; /* ArcButton • the input size 'md' needs
                                      a slightly smaller "input-action" button
                                      footprint; there's no direct access to
                                      ArcButton['size'] prop in this context */
  }
}

[arc-input]:not([hidden]) {
  display: var(${yr}•display, flex);
  flex-direction: var(${$p}, column);
  gap: var(${zi});
  color: var(--arc-input-color, var(${fa}));

  :is([input-element=header], [input-element=footer]) {
    display: flex;
    justify-content: space-between;
    font-size: var(--arc-input-slot-font-size, var(${Ei}));
    gap: var(${zi});
  }

  [input-element=spacer] {
    display: safe flex-end;
  }

  [input-element=header] {
    align-items: safe flex-end;
  }

  [input-element=header-label] {
    flex: 1;
    color: var(--arc-input-header-label-color, var(${On}));
    font-weight: var(--arc-input-header-label-font-weight, var(--arc-font-weight-600));
  }

  [input-element=header-slot] {
    color: var(--arc-input-header-slot-color, var(${sd}));
    min-width: var(--arc-input-header-slot-min-width, fit-content);
  }

  [input-element=footer] {
    align-items: baseline;
  }

  [input-element=footer-caption] {
    flex: 1;
    color: var(--arc-input-footer-caption-color, var(${ki}));
  }

  [input-element=footer-slot] {
    color: var(--arc-input-footer-slot-color, var(${dd}));
    min-width: var(--arc-input-footer-slot-min-width, fit-content);
  }

  [input-element=body] {
    flex: none;
    display: flex;
    align-items: var(${cd}, center);
    gap: var(--arc-input-gap, var(${pd}));
    height: var(${uo});
    font-size: var(${Ii});

    color: var(--arc-input-color, var(${fa}));
    background-color: var(--arc-input-background, var(${Pe}));
    border: var(--arc-input-border, var(${yr}•border));
    border-radius: var(--arc-input-border-radius, var(${Ci}));
    outline: var(${yr}•outline, none);
    outline-offset: var(${hd});

    transition-property: border, background, color, height;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    cursor: var(${yr}•cursor, unset);

    padding-inline: var(--arc-input-padding-inline, var(${Dn}));

    &:has([input-element=input-action]) {
      padding-inline-end: var(${Si});
    }

    input {
      cursor: inherit;
      appearance: none;
      align-self: stretch;
      flex: 1;
      font: inherit;
      color: inherit;
      border: var(--arc-border-width-sm) solid transparent;
      background: transparent;
      padding: 0;
      margin: 0;
      outline: none;
      line-height: normal;
      width: var(--arc-input-width, 100%);
      min-width: var(--arc-input-min-width, 1em);
      max-width: var(--arc-input-max-width, 100%);
      text-align: var(--arc-input-text-align, unset);

      &[arc-input-type=search]::-webkit-search-cancel-button {
        appearance: none;
        display: none;
      }
    }
  }

  [input-element=input-prefix] {
    flex: none;
    opacity: var(--arc-input-prefix-opacity, unset);
  }

  [input-element=input-suffix] {
    flex: none;
    opacity: var(--arc-input-suffix-opacity, var(--arc-alpha-40));
  }

  [input-element=input] {
    flex: 1;
    display: flex;
  }

  [input-element=input-action] {
    flex: none;
    cursor: inherit;
    align-self: stretch;
    display: var(--arc-input-action-display, flex);
    align-items: center;
    justify-content: center;

    button {
      max-height: var(${yr}•action•max•height, unset);
    }
  }
}

}
`,Cp={onChangeHandler:fp,Wrapper:op,Spacer:np,Header:cp,HeaderLabel:ip,HeaderSlot:sp,InputBody:lp,InputPrefix:dp,InputSuffix:up,InputAction:hp,Footer:gp,FooterCaption:vp,FooterSlot:pp};lr("ArcInput",wp);const Er=Cp,Ap="[input-element=body]",Sp=100;function zp({inputRef:r,onChange:e,enabled:a,deltaPerStep:t=Sp}){const o=(0,u.useRef)(e);o.current=e,(0,u.useEffect)(()=>{if(!a||t<=0)return;let n=0;const c=()=>r.current,l=()=>{const m=c()?.closest(Ap);return m instanceof HTMLElement?m:null},d=(b,m)=>{const $=o.current;if(!$)return;const w={name:b.name,value:m};$(w,{target:b,currentTarget:b})},h=()=>{n=0},g=b=>{const m=c();if(!m||document.activeElement!==m||m.type!=="number"||m.disabled||m.readOnly)return;b.preventDefault(),b.stopPropagation();const $=Number(m.step)||1,w=Number(m.min),_=Number(m.max),y=Number.isFinite(w)?w:void 0,C=Number.isFinite(_)?_:void 0;let S=Number(m.value);if(!Number.isFinite(S))return;n+=b.deltaY;const I=t,j=()=>{const z=Math.max(y??-1/0,S-$);return z===S?!1:(S=z,d(m,String(z)),!0)},L=()=>{const z=Math.min(C??1/0,S+$);return z===S?!1:(S=z,d(m,String(z)),!0)};for(;n>=I;){if(!j()){n=0;break}n-=I}for(;n<=-I;){if(!L()){n=0;break}n+=I}},f=l(),v=c();if(!(!f||!v||v.type!=="number"))return v.addEventListener("blur",h),f.addEventListener("wheel",g,{passive:!1}),()=>{v.removeEventListener("blur",h),f.removeEventListener("wheel",g)}},[a,t,r])}const Ti=ar(Oe,["fill","hug"]),ji=ar(oe,["inherit","xl","lg","md"]),fd=ar(_r,["outline","solid","plain"]),Ep=Ti,_p=ji,Ip=ar(fd,["outline","solid"]),Tp=["text","number","password","email","url"],Hn=(0,u.forwardRef)(({layout:r="hug",size:e="inherit",variant:a="outline",inputProps:t,headerLabel:o,headerSlot:n,inputPrefix:c,inputAction:l,inputSuffix:d,footerCaption:h,footerSlot:g,numberInputWheel:f,...v},b)=>{const{id:m,onChange:$,...w}=t,_="arc-search"in v,y=_?"search":w?.type||"text",C=w?.disabled||void 0,S=w?.readOnly||void 0,I=w?.required||void 0,j=!!(o||n),L=!!(h||g),D=(0,u.useRef)(null),z=(0,u.useCallback)(k=>{D.current=k,Se(b,k)},[b]);return zp({inputRef:D,onChange:$,enabled:y==="number"&&f!==!1,...typeof f=="object"&&typeof f.deltaPerStep=="number"&&{deltaPerStep:f.deltaPerStep}}),(0,i.jsxs)(Er.Wrapper,{...v,"arc-text-input":"","arc-input":y,layout:r,size:e,variant:a,children:[j&&(0,i.jsxs)(Er.Header,{children:[(0,i.jsx)(Er.HeaderLabel,{htmlFor:m,children:o}),!!n&&(0,i.jsx)(Er.Spacer,{}),(0,i.jsx)(Er.HeaderSlot,{children:n})]}),(0,i.jsxs)(Er.InputBody,{children:[(0,i.jsx)(Er.InputPrefix,{htmlFor:m,children:c}),(0,i.jsx)("input",{...w,..._?{type:y}:{},ref:z,id:m,"arc-input-type":y,onChange:Er.onChangeHandler($),"aria-disabled":C,"aria-readonly":S,"aria-required":I}),(0,i.jsx)(Er.InputSuffix,{htmlFor:m,children:d}),(0,i.jsx)(Er.InputAction,{children:l})]}),L&&(0,i.jsxs)(Er.Footer,{children:[(0,i.jsx)(Er.FooterCaption,{children:h}),!!g&&(0,i.jsx)(Er.Spacer,{}),(0,i.jsx)(Er.FooterSlot,{children:g})]})]})}),md=({commitDraft:r,setIsEditing:e,onRevert:a})=>{const t=(0,u.useCallback)(()=>{e(!0)},[e]),o=(0,u.useCallback)(()=>{e(!1),r()},[e,r]),n=(0,u.useCallback)(c=>{if(c.key==="Enter"){c.preventDefault(),e(!1),r(),c.currentTarget.blur();return}c.key==="Escape"&&(c.preventDefault(),e(!1),a(),c.currentTarget.blur())},[e,r,a]);return{onFocus:t,onBlur:o,onKeyDown:n}},bd=({hsv:r,draftValue:e,label:a="Hex",showLabel:t=!0,setIsEditing:o,commitDraft:n,setDraftValue:c,expandHexShorthand:l=!1,hasAlphaTools:d=!0})=>{const h=Ir(void 0,"hex-input"),g=(0,u.useRef)(null),f=lo(We(r)),[v,b]=(0,u.useState)(!1),{isInvalid:m,errorAid:$}=(0,u.useMemo)(()=>Yv(e,l,d),[e,l,d]),{onFocus:w,onBlur:_,onKeyDown:y}=md({commitDraft:n,setIsEditing:o,onRevert:()=>c(f)}),C=(0,u.useCallback)(()=>{b(!0);const k=Ea(e);if(k.length===8){Xv(k,d,n,c),_();return}if(l&&k.length===3){const V=od(k);c(V),n(V),o(!1),_();return}l&&k.length===4&&Zv(k,d,n,c),_()},[e,l,d,c,n,o,_]),S=(0,u.useCallback)(k=>{if(k.key!=="ArrowUp"&&k.key!=="ArrowDown")return;const V=k.key==="ArrowUp"?ad:-ad,U=k.altKey?"r":k.metaKey?"g":"b",Y=k.shiftKey?16:1,W=rp(Ea(e),We(r),U,V,Y);c(W),n(W),k.preventDefault()},[e,r,c,n]),I=(0,u.useCallback)(k=>{if(S(k),!k.defaultPrevented){if(k.key==="Enter"){k.preventDefault(),o(!1),k.currentTarget.blur();return}k.key==="Escape"&&y(k)}},[S,o,y]),j=({value:k})=>{const V=Qv(k??"",d);V.length===8?yi(V,n,c):(c(V),n(V))},L=m&&v,D=L?$.tooltip:void 0,z=(0,u.useCallback)(()=>{const k=nd(Ea(e));k&&Jv(k,n,c,d),queueMicrotask(()=>{g.current?.focus()})},[e,n,c,d]);return(0,i.jsx)(Hn,{ref:g,"arc-color-input":"hex",size:"md",variant:"solid",headerLabel:t?a:void 0,inputPrefix:"#",inputAction:L?(0,i.jsx)(Ar,{layout:"icon",icon:"fa-solid fa-exclamation-circle",variant:"tertiary",tooltip:$.tooltip,"aria-label":$.ariaLabel,onClick:z}):void 0,inputProps:{id:h,placeholder:"...",value:e,pattern:d?Vv:Uv,maxLength:d?9:6,title:D,"aria-invalid":L?!0:void 0,style:{textTransform:"uppercase",letterSpacing:"0.0625ch"},onFocus:w,onBlur:C,onKeyDown:I,onChange:j}})},Ri=typeof window<"u"&&"EyeDropper"in window&&typeof window.EyeDropper=="function",$d=Ri?window.EyeDropper:void 0,yd=$d?new $d:void 0,xd=({onColorPicked:r,...e})=>{const[a,t]=(0,u.useState)(!1),o=async()=>{if(!(!Ri||!yd||a)){t(!0);try{const{sRGBHex:n}=await yd.open();if(typeof r=="function"){const c=We(zn(n,"#000000"));r(Re({...c,a:1},!1))}else console.warn("EyeDropper: onColorPicked prop was not provided")}catch(n){n instanceof DOMException&&n.name==="AbortError"||console.error("EyeDropper failed:",n)}finally{t(!1)}}};return Ri?(0,i.jsx)("div",{"arc-color-eye-dropper":"",children:(0,i.jsx)(Ar,{...e,onClick:o,layout:"icon",shape:"square",size:"md",variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-eye-dropper",text:"Dropper",tooltip:"Pick a color"})}):null},Pi=({id:r,kind:e,label:a,value:t,max:o,min:n=0,step:c=1,isDisabled:l=!1,showLabel:d=!1,showTooltip:h=!1,tooltipText:g,onChange:f})=>{const v=Ir(void 0,r),b=o>1&&Number.isInteger(c)&&c>=1?Math.round(t):t,m=J(b,n,o),$=m.toFixed(c.toString().split(".")[1]?.length??0),w=(0,u.useRef)(null),_=o-n,C=`${(_<=0?0:(m-n)/_)*100}%`,S=j=>{const L=j.currentTarget.valueAsNumber,D=Number.isFinite(L)?L:n;f(J(D,n,o))},I=(0,i.jsx)("input",{id:v,type:"range",min:n,max:o,step:c,value:$,disabled:l??void 0,onChange:S,"aria-label":a});return(0,i.jsxs)("div",{"arc-color-slider":e,"data-disabled":l??void 0,children:[d&&!!a&&(0,i.jsx)(za,{htmlFor:v,children:(0,i.jsx)("strong",{children:a})}),(0,i.jsx)("div",{"arc-color-surface":e,children:h?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{ref:w,"aria-hidden":!0,style:{position:"absolute",left:C,top:"50%",transform:"translate(-50%, -50%)",width:1,height:1,pointerEvents:"none"}}),(0,i.jsx)(sn,{alternateAnchor:w,text:g??$,scheme:"light",isStrong:!1,hasTail:!1,offset:11,children:I})]}):I})]})},jp=196.6,Rp=(r,e)=>{const a=r.getContext("2d",{alpha:!1});if(!a)return;const{width:t,height:o}=r;if(!t||!o)return;const n=a.createImageData(t,o),c=n.data;let l=0;for(let d=0;d<o;d+=1){const h=1-(o<=1?0:d/(o-1));for(let g=0;g<t;g+=1){const f=t<=1?0:g/(t-1),v=We({h:e,s:f,v:h,a:1});c[l++]=Zr(v.r),c[l++]=Zr(v.g),c[l++]=Zr(v.b),c[l++]=255}}a.putImageData(n,0,0)},Pp=({value:r,label:e="Color Saturation and Value",step:a=.01,stepLarge:t=.1,isDisabled:o=!1,showLabel:n=!1,onChange:c})=>{const l=Ir(void 0,"color-field"),d=(0,u.useRef)(null),h=(0,u.useRef)(null),g=(0,u.useRef)(null),f=(0,u.useRef)(null),v=(0,u.useRef)(null),b=(0,u.useRef)(null),m=(0,u.useRef)(null),[$,w]=(0,u.useState)(!1),[_,y]=(0,u.useState)(null),C=J(r.saturation,0,1),S=J(r.value,0,1),I=Math.round(C*100),j=Math.round(S*100),L=(0,u.useMemo)(()=>{const R=r.hue;return typeof R=="number"&&Number.isFinite(R)?R:jp},[r.hue]),D=(0,u.useMemo)(()=>zl(L),[L]),z=(0,u.useCallback)((R,F)=>{c({hue:L,saturation:J(R,0,1),value:J(F,0,1)})},[L,c]),k=(0,u.useCallback)((R,F,H)=>{const M=J((R-H.left)/H.width,0,1),rr=J((F-H.top)/H.height,0,1);z(M,1-rr)},[z]),V=(0,u.useCallback)(R=>{if(o)return;const{clientX:F,clientY:H,pointerId:M,currentTarget:rr}=R,er=rr.getBoundingClientRect();f.current=M,g.current=er,v.current={clientX:F,clientY:H},b.current=null,m.current=null,rr.focus(),rr.setPointerCapture(M),w(!0),k(F,H,er)},[o,k]),U=(0,u.useCallback)(R=>{if(o)return;const{clientX:F,clientY:H,currentTarget:M,pointerId:rr}=R;if(f.current!==rr)return;const er=g.current??M.getBoundingClientRect();if(R.shiftKey){const Z=v.current;if(Z){if(b.current===null){const vr=Math.abs(F-Z.clientX),pr=Math.abs(H-Z.clientY);b.current=vr>=pr?"s":"v",m.current={clientX:F,clientY:H}}const hr=m.current??Z,P=b.current==="s"?F:hr.clientX,X=b.current==="v"?H:hr.clientY;k(P,X,er);return}}else b.current=null,m.current=null;k(F,H,er)},[o,k]),Y=(0,u.useCallback)(()=>{f.current=null,g.current=null,v.current=null,b.current=null,m.current=null,w(!1)},[]),W=(0,u.useCallback)(R=>{if(o)return;const F=R.shiftKey?t:a;let H=C,M=S;switch(R.key){case"ArrowLeft":H=C-F;break;case"ArrowRight":H=C+F;break;case"ArrowUp":M=S+F;break;case"ArrowDown":M=S-F;break;case"Home":H=0,M=1;break;case"End":H=1,M=0;break;default:return}R.preventDefault(),z(H,M)},[o,a,t,z,C,S]),or=(0,u.useCallback)(R=>{if(o||!R.key.startsWith("Arrow"))return;const F=R.shiftKey?t:a,H=R.key==="ArrowLeft"||R.key==="ArrowDown"?-F:F;R.preventDefault(),z(C+H,S)},[o,a,t,z,C,S]),N=(0,u.useCallback)(R=>{if(o||!R.key.startsWith("Arrow"))return;const F=R.shiftKey?t:a,H=R.key==="ArrowLeft"||R.key==="ArrowDown"?-F:F;R.preventDefault(),z(C,S+H)},[o,a,t,z,C,S]),tr=(0,u.useMemo)(()=>({"--js\u2022s":String(C),"--js\u2022v":String(1-S)}),[C,S]);return(0,u.useLayoutEffect)(()=>{const R=d.current,F=h.current;if(!R||!F)return;const H=()=>{const er=R.getBoundingClientRect(),Z=Math.max(1,Math.round(er.width)),hr=Math.max(1,Math.round(er.height)),P=typeof window>"u"?1:Math.max(window.devicePixelRatio||1,1),X=Math.max(1,Math.round(Z*P)),vr=Math.max(1,Math.round(hr*P));F.width!==X&&(F.width=X),F.height!==vr&&(F.height=vr),Rp(F,D)};H();const M=new ResizeObserver(()=>{H()});M.observe(R);const rr=()=>{H()};return F.addEventListener("contextrestored",rr),()=>{M.disconnect(),F.removeEventListener("contextrestored",rr)}},[D]),(0,i.jsxs)("div",{"arc-color-field":"","is-disabled":o?"":void 0,"is-interacting":$?"":void 0,"sr-focus":_??void 0,children:[n&&!!e&&(0,i.jsx)("label",{htmlFor:l,children:e}),(0,i.jsxs)("div",{id:l,ref:d,"arc-color-surface":"field",style:tr,tabIndex:o?-1:0,role:"application","aria-label":e,"aria-describedby":`${l}-readout`,onPointerDown:V,onPointerMove:U,onPointerUp:Y,onPointerCancel:Y,onKeyDown:W,children:[(0,i.jsx)("canvas",{ref:h,"arc-color-field-canvas":"","aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-thumb":"","aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-slice":"saturation","has-focus":_==="saturation"?"":void 0,"aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-slice":"value","has-focus":_==="value"?"":void 0,"aria-hidden":"true"})]}),(0,i.jsxs)("div",{"arc-color-field-sr":"","aria-hidden":!1,children:[(0,i.jsx)("div",{"arc-color-field-sr-slider":"saturation",role:"slider",tabIndex:o?-1:0,"aria-label":"Saturation","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":I,onKeyDown:or,onFocus:()=>y("saturation"),onBlur:()=>y(null)}),(0,i.jsx)("div",{"arc-color-field-sr-slider":"value",role:"slider",tabIndex:o?-1:0,"aria-label":"Value","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":j,onKeyDown:N,onFocus:()=>y("value"),onBlur:()=>y(null)})]}),(0,i.jsxs)("div",{id:`${l}-readout`,"arc-color-field-readout":"","arc-color-field-sr":"",children:["Saturation ",I,"%. Value ",j,"%."]})]})},Lp=({hsv:r,draftValue:e,label:a="Opacity",showLabel:t=!1,setIsEditing:o,commitDraft:n,setDraftValue:c})=>{const l=Ir(void 0,"alpha-input"),{onFocus:d,onBlur:h,onKeyDown:g}=md({commitDraft:n,setIsEditing:o,onRevert:()=>c($t(r.a))}),f=({value:v})=>{const b=String(v??1);c(b),n(b)};return(0,i.jsx)(Hn,{"arc-color-input":"alpha",size:"md",variant:"solid",inputSuffix:"%",headerLabel:t?a:void 0,numberInputWheel:{deltaPerStep:24},inputProps:{id:l,"aria-label":a,placeholder:"...",value:e,type:"number",min:0,max:100,step:1,onFocus:d,onBlur:h,onKeyDown:g,onChange:f}})},kd=r=>Re({...r,a:1},!1).replace(/^#/,""),Mp=()=>typeof window<"u"&&"EyeDropper"in window,wd=({color:r,hsv:e,isSimpleMode:a,selectedNameRef:t,hsvRef:o,commitLocalHsv:n,tools:c,expandHexShorthand:l,...d})=>{const h=(0,u.useRef)(!1),[g,f]=(0,u.useState)(()=>{const M=Tr(Ce(r));return M?kd(M):"000000"}),[v,b]=(0,u.useState)($t(e.a)),[m,$]=(0,u.useState)(!1),w=(0,u.useCallback)(M=>{t.current=void 0;const er={...o.current,...M};n(er)},[n,o,t]),_=(0,u.useCallback)(M=>w({s:M.saturation,v:M.value}),[w]),y=M=>{const rr=zn(M,"#000000");n(rr)},C=(0,u.useMemo)(()=>!c||c.includes("color-field"),[c]),S=(0,u.useMemo)(()=>!c||c.includes("hue-slider"),[c]),I=(0,u.useMemo)(()=>!c||c.includes("alpha-slider"),[c]),j=(0,u.useMemo)(()=>!c||c.includes("hex-input"),[c]),L=(0,u.useMemo)(()=>!c||c.includes("alpha-input"),[c]),D=(0,u.useMemo)(()=>!c||c.includes("eye-dropper")&&Mp(),[c]),z=(0,u.useMemo)(()=>I||L,[I,L]),k=(M,rr)=>{t.current=void 0;const er=Ea(M??g);if(!ep(er,l??!1,z,rr))return;const Z=We(o.current),hr=ap(er,Z,rr);if(!hr||si(hr,Z))return;const P=oo(hr,o.current.h);n(P)},V=M=>{t.current=void 0;const rr=Dl(M??v);rr!=null&&(w({a:rr}),b($t(rr)))},U=(0,u.useCallback)(M=>{f(Ea(M))},[]),Y=(0,u.useCallback)(M=>{b(M)},[]),W=(0,u.useCallback)(M=>{h.current=M},[]),or=(0,u.useCallback)(M=>{$(M),M&&b($t(o.current.a))},[o]);(0,u.useEffect)(()=>{if(h.current)return;const M=We(e),rr=kd(M);f(er=>{if(er===rr)return er;if(!l){const Z=Ea(er);if(Z.length===3||Z.length===4||Z.length===8){const hr=Tr(`#${Z}`);if(hr){const P={...hr,a:M.a};if(si(P,M))return er}}}return rr})},[e,l]);const N=(0,u.useMemo)(()=>m?v:$t(e.a),[m,v,e.a]),tr=(0,u.useMemo)(()=>({hue:e.h,saturation:e.s,value:e.v}),[e]),R=(0,u.useMemo)(()=>J(Math.round(e.a*100),0,100),[e.a]),F=(0,u.useMemo)(()=>`${R.toString()}%`,[R]),H=(0,u.useMemo)(()=>`${Math.round(e.h).toString()}\xB0`,[e.h]);return(0,i.jsx)("div",{...d,"arc-color-tools":a?"simple":"","arc-color-picker-section":"tools",children:a?(0,i.jsxs)(i.Fragment,{children:[j&&(0,i.jsx)(bd,{hsv:e,draftValue:g,setIsEditing:W,commitDraft:k,setDraftValue:U,expandHexShorthand:l,hasAlphaTools:z}),D&&(0,i.jsx)(xd,{onColorPicked:y}),I&&(0,i.jsx)(Pi,{kind:"alpha",value:R,min:0,max:100,step:1,id:"alpha-slider",label:"Opacity",showLabel:!0,showTooltip:!0,tooltipText:F,onChange:M=>w({a:M/100})})]}):(0,i.jsxs)(i.Fragment,{children:[C&&(0,i.jsx)(Pp,{value:tr,onChange:_}),D&&(0,i.jsx)(xd,{onColorPicked:y}),(S||I)&&(0,i.jsxs)("div",{"arc-color-sliders":"",children:[S&&(0,i.jsx)(Pi,{kind:"hue",value:e.h,min:0,max:360,step:1,id:"hue-slider",label:"Hue",showLabel:!1,showTooltip:!0,tooltipText:`Hue: ${H}`,onChange:M=>w({h:M})}),I&&(0,i.jsx)(Pi,{kind:"alpha",value:R,min:0,max:100,step:1,id:"alpha-slider",label:"Opacity",showLabel:!1,showTooltip:!0,tooltipText:`Opacity: ${F}`,onChange:M=>w({a:M/100})})]}),(j||L)&&(0,i.jsxs)("div",{"arc-color-inputs":"",children:[j&&(0,i.jsx)(bd,{hsv:e,draftValue:g,setIsEditing:W,commitDraft:k,setDraftValue:U,expandHexShorthand:l,hasAlphaTools:z}),L&&(0,i.jsx)(Lp,{hsv:e,showLabel:!j,draftValue:N,setIsEditing:or,commitDraft:V,setDraftValue:Y})]})]})})},Cd=({heading:r,showGoBack:e,goBackProps:a,...t})=>(0,i.jsx)(ga,{...t,variant:"common","arc-color-picker-wrapper":"",showGoBack:e,goBackProps:a,headerSlot:!!r&&(0,i.jsx)(re,{...typeof r=="string"?{text:r}:r,"arc-color-picker-heading":"",overflow:"truncate",isStrong:!0})});Cd.displayName="ArcColorPickerWrapper";const _a={mode:"normal",color:"#05aff0",format:"auto",heading:"Color",palettes:[]},Bp={icon:"fa-regular fa-paint-brush",text:"Color Picker",layout:"icon",shape:"round",size:"md"},Op=(r,e)=>r===void 0?!0:e?r.includes("hex-input")||r.includes("eye-dropper")||r.includes("alpha-slider"):r.includes("color-field")||r.includes("eye-dropper")||r.includes("hue-slider")||r.includes("alpha-slider")||r.includes("hex-input")||r.includes("alpha-input"),Ya=({children:r,mode:e=_a.mode,color:a=_a.color,format:t=_a.format,heading:o=_a.heading,tools:n,omitTools:c,isInline:l=!1,showGoBack:d=!1,goBackProps:h,palettes:g,popoverProps:f,onChange:v,onAddColor:b,onRemoveColor:m,expandHexShorthand:$,...w})=>{const _=(0,u.useMemo)(()=>Vl(a).color,[a]),y=Ir(f?.id??void 0,"color-picker"),C=(0,u.useMemo)(()=>e==="simple",[e]),[S,I]=(0,u.useState)(()=>{const P=Tr(_);return P?oo(P):{h:0,s:0,v:0,a:1}}),j=(0,u.useRef)(S),L=(0,u.useRef)(_),D=(0,u.useRef)(null),z=(0,u.useRef)(void 0);(0,u.useEffect)(()=>{j.current=S},[S]);const k=(0,u.useCallback)(P=>{if(v)try{const X=qa(P,{format:t});L.current=X.value,D.current=X.rgba,v({...X,name:z.current})}catch{}},[v,t]),V=(0,u.useCallback)(P=>{di(P,j.current)||(j.current=P,I(P),k(P))},[k]),U=(0,u.useMemo)(()=>{const P=C?"":"manual";return f?.popover??P},[f?.popover,C]),Y=(0,u.useMemo)(()=>{const P=We(S);return{"--js\u2022hue":`hsl(${S.h} 100% 50%)`,"--js\u2022hex":Re({...P,a:1},!1),"--js\u2022rgb":Ga(P)}},[S]),W=(0,u.useMemo)(()=>Ga(We(S)),[S]),or=(0,u.useMemo)(()=>g?.map(P=>({...P,canAddColor:!1,canRemoveColor:!1}))??[],[g]),N=(0,u.useRef)(null),tr=(0,u.useCallback)(()=>{const P=N.current;if(!P)return;const X=C?'button[arc-color-chip="swatch"]:not(:disabled)':'[arc-color-surface="field"]';P.querySelector(X)?.focus()},[C]),R=f?.onToggle,F=(0,u.useCallback)(P=>{P?.newState==="open"&&setTimeout(tr,0),R?.(P)},[tr,R]);(0,u.useEffect)(()=>{if(_!==L.current){L.current=_;try{const P=Tr(_)??{r:0,g:0,b:0,a:1},X=D.current;if(X&&li(P,X))return;const vr=We(j.current);if(li(P,vr))return;z.current=void 0;const pr=oo(P,j.current.h);if(di(pr,j.current))return;j.current=pr,I(pr)}catch{}}},[_]);const H=(0,u.useMemo)(()=>{const P=n===void 0?[...C?Al:Cl]:[...n];if(!c?.length)return P;const X=new Set(c);return P.filter(vr=>!X.has(vr))},[n,C,c]),M=(0,u.useMemo)(()=>Op(H,C),[H,C]),rr=(0,u.useMemo)(()=>H.includes("palettes"),[H]),er=(0,i.jsxs)("div",{...w,ref:N,"arc-color-picker":C?"simple":"","is-inline":l?"":void 0,style:Y,children:[C?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ed,{palettes:rr?or:void 0,activePaletteColor:W,commitLocalHsv:V,selectedNameRef:z,hsvRef:j,popoverId:y,onAddColor:b??(()=>{}),onRemoveColor:m}),M&&(0,i.jsx)(wd,{color:_,hsv:S,hsvRef:j,selectedNameRef:z,commitLocalHsv:V,isSimpleMode:C,tools:H,expandHexShorthand:$})]}):(0,i.jsxs)(i.Fragment,{children:[M&&(0,i.jsx)(wd,{color:_,hsv:S,selectedNameRef:z,hsvRef:j,commitLocalHsv:V,tools:H,expandHexShorthand:$}),(0,i.jsx)(ed,{palettes:rr?g:void 0,activePaletteColor:W,commitLocalHsv:V,selectedNameRef:z,hsvRef:j,popoverId:y,onAddColor:b??(()=>{}),onRemoveColor:m,"has-divider":M?"top":void 0})]}),r&&(0,i.jsx)("div",{"arc-color-picker-section":"footer",children:r})]});if(l)return er;const Z=f?.anchorProps??Bp,hr=C?{...f,anchorAt:f?.anchorAt??"bottom-center",showDismiss:!1,hasTail:!0}:{...f,heading:o??void 0,showGoBack:d??void 0,goBackProps:h??void 0,showHeaderDivider:!0,showFooterDivider:!0,isHeaderSticky:!0,isFooterSticky:!0};return(0,i.jsx)(Cd,{...hr,popover:U,anchorProps:Z,id:y,onToggle:F,children:er})};Ya.getColorAs=Hl,Ya.getColorData=qa,Ya.getContrastColor=mi,Ya.addColor=_v,Ya.removeColor=Iv,lr("ArcColorPicker",Mv);var Dp;const Za={layout:"gutter",variant:"inherit",overflow:"truncate",gapSize:"md",size:"md"},Np=r=>[{test:()=>!!r.variant,value:r.variant},{test:()=>!!r.icon&&typeof r.subtext<"u",value:"icon-text-detail"},{test:()=>!!r.icon,value:"icon-text"},{test:()=>!!r.avatar&&typeof r.subtext<"u",value:"user-detail"},{test:()=>!!r.avatar,value:"user"},{test:()=>typeof r.subtext<"u",value:"text-detail"},{test:()=>!0,value:"text"}],Fp=({icon:r,onClick:e,items:a,renderSubmenu:t,submenuProps:o,...n})=>({icon:r&&typeof r=="string"?`${r.replace(" fa-fw","")} arc-fw`:r,itemProps:n}),Ad=(r,e)=>{const{icon:a,itemProps:t}=Fp(e);switch(r){case"divider":return(0,i.jsx)("hr",{});case"section-label":return(0,i.jsx)(re,{...t,...Za,icon:a,size:"sm",isStrong:!0});case"icon-text":return(0,i.jsx)(re,{...t,...Za,icon:a});case"icon-text-detail":return(0,i.jsx)(re,{...t,...Za,icon:a,isStrong:!0});case"text":return(0,i.jsx)(re,{...t,...Za});case"text-detail":return(0,i.jsx)(re,{...t,...Za,subtext:t.subtext??"sub",isStrong:!0});case"user":return(0,i.jsx)(Ac,{...t,...Za,size:"sm"});case"user-detail":return(0,i.jsx)(Ac,{...t,...Za,size:"md",isStrong:!0});default:return r}},kb=r=>Object.fromEntries(Dp.map(e=>[e,Ad(e,r)])),Li=200,Hp=r=>{const e=r.submenuProps&&typeof r.submenuProps=="object"?r.submenuProps.id:void 0;return typeof e=="string"&&e.length>0?e:void 0},Vp=r=>{const e=r.submenuProps&&typeof r.submenuProps=="object"?r.submenuProps:{},{menuProps:a,renderItem:t,...o}=e;return{menuProps:a,popoverPassthrough:o}},Up=r=>({ownMenuId:r.menu,parentTriggerId:r.trigger}),Kp=r=>{const e=r.submenuProps;if(!e||typeof e!="object")return;const a=e.renderItem;return typeof a=="function"?a:void 0},Vn=(r,e,a)=>{if(!(typeof r.renderSubmenu=="function"||Array.isArray(r.items)&&r.items.length>0))return{hasSubmenu:!1};const o=Bi(r,e),n=`${a}-subtrigger-${o}`;let l=Hp(r)??`${a}-submenu-${o}`;return l===n&&(l=`${l}-menu`),{hasSubmenu:!0,menuId:l,triggerId:n}},Wp=(r,e)=>{if(!e||!r)return-1;let t=e.nodeType===Node.ELEMENT_NODE?e:e.parentNode;for(;t;){if(t===r)return-1;if(t instanceof HTMLLIElement&&t.parentElement===r)return Array.prototype.indexOf.call(r.children,t);t=t.parentNode}return-1},Gp=(r,e)=>{if(typeof document>"u")return!1;const a=Ee(r,e);try{return!!a?.matches?.(":popover-open")}catch{return!1}},Mi=r=>r===!0||typeof r=="number"&&r>=0&&Number.isFinite(r),qp=r=>r===!0?0:r,Yp=r=>r===!0?Li:r,Zp={divider:"separator","section-label":"presentation","icon-text-detail":"menuitem","icon-text":"menuitem","user-detail":"menuitem",user:"menuitem","text-detail":"menuitem",text:"menuitem"},Bi=(r,e)=>r.itemId!=null&&String(r.itemId)!==""?String(r.itemId):`auto-${e}`,Xp=r=>{let e=null;for(let a=r;a;a=a.parentElement)a.hasAttribute("arc-popover")&&(e=a);return e},Sd=(r,e,a,t)=>{if(t||a==="divider"||!!!(e.href||e.onClick))return;Xp(r.currentTarget)?.hidePopover?.()},Jp=r=>r?.role??Zp[go(r)]??"menuitem",go=r=>Np(r)?.find(({test:e})=>e())?.value??"text",zd=r=>e=>Ad(r,e),Oi=(r,e,a,t)=>{const o=t??Vn(r,e,a);if(o.hasSubmenu)return o.triggerId;const n=Bi(r,e);return`${a}-mi-${n}`},Qp=(r,e,a)=>go(r)==="divider"||r.isDisabled===!0||r["aria-disabled"]===!0?!1:Vn(r,e,a).hasSubmenu?!0:!!(r.href||r.onClick),Un=(r,e)=>{const a=[];for(let t=0;t<r.length;t+=1)Qp(r[t],t,e)&&a.push(t);return a},Ed=(r,e,a)=>{if(typeof document>"u")return;const t=r.children[e];if(!(t instanceof HTMLElement))return;const o=Ee(a,r);if(o instanceof HTMLElement&&t.contains(o)){o.focus();return}const n=t.querySelectorAll('a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])');Array.from(n).find(l=>l.getAttribute("aria-disabled")!=="true")?.focus()},_d=(r,e,a,t)=>{const o=Un(r,e);if(o.length===0)return-1;if(t==="actual")return a>=0&&o.includes(a)?a:o[0];let n=o.indexOf(a);return n<0?t==="next"?o[0]:t==="previous"?o[o.length-1]:o[0]:t==="next"?(n=(n+1)%o.length,o[n]):(n=(n-1+o.length)%o.length,o[n])};function rf(r,e,a){return{ArrowUp:t=>{const o=_d(r,e,t,"previous");o>=0&&a(o)},ArrowDown:t=>{const o=_d(r,e,t,"next");o>=0&&a(o)},Home:()=>{const t=Un(r,e);t.length>0&&a(t[0])},End:()=>{const t=Un(r,e);t.length>0&&a(t[t.length-1])}}}function ef(r,e){const{isVisible:a,menuListRef:t,activeItemIndex:o,filteredItems:n,menuDomId:c,isMenuRtlRef:l,submenuBackNavigation:d,listNavByKey:h,hideSubmenu:g,focusTriggerById:f,focusRowAtItemIndex:v,setActiveItemIndex:b,openSubmenuForKeyboard:m}=e;if(!a||!t.current||!(r.target instanceof Node)||!t.current.contains(r.target))return;const $=t.current,w=r.target.closest?.("ul[arc-menu]");if(w&&w!==$)return;let _=Wp($,r.target);if(_<0&&o>=0&&(_=o),_<0)return;const y=n[_],C=Vn(y,_,c),S=l.current,I=S?"ArrowLeft":"ArrowRight",j=S?"ArrowRight":"ArrowLeft";if(d&&r.key==="Escape"){r.preventDefault(),r.stopPropagation(),g(d.ownMenuId),f(d.parentTriggerId);return}if(C.hasSubmenu&&Gp(C.menuId,$)&&r.key===j){r.preventDefault(),r.stopPropagation(),g(C.menuId),v(_);return}if(d&&r.key===j){r.preventDefault(),r.stopPropagation(),g(d.ownMenuId),f(d.parentTriggerId);return}if(C.hasSubmenu&&(r.key===I||r.key==="Enter")){r.preventDefault(),r.stopPropagation(),b(_),m(C.menuId);return}const L=h[r.key];L&&(r.preventDefault(),r.stopPropagation(),L(_))}function af(r,e){if(typeof document>"u")return;Ee(r,e)?.hidePopover?.()}function tf(r,e){if(typeof document>"u")return;Ee(r,e)?.showPopover?.()}function of(r){r.querySelectorAll("[popover]").forEach(e=>{try{e.matches(":popover-open")&&e.hidePopover?.()}catch{}})}function nf(r,e){typeof document>"u"||requestAnimationFrame(()=>{Ee(r,e)?.querySelector("[arc-menu]")?.focus()})}function cf(r,e){if(typeof document>"u")return;Ee(r,e)?.focus()}function sf({menuListRef:r,passiveMode:e}){const a=(0,u.useRef)(null),t=(0,u.useRef)(null),o=(0,u.useRef)(null),n=(0,u.useCallback)(()=>{t.current!=null&&(clearTimeout(t.current),t.current=null)},[]),c=(0,u.useCallback)(()=>{o.current!=null&&(clearTimeout(o.current),o.current=null)},[]),l=(0,u.useCallback)(()=>{const m=r.current;m&&of(m)},[r]),d=(0,u.useCallback)(m=>{af(m,r.current),a.current===m&&(a.current=null)},[r]),h=(0,u.useCallback)(m=>{typeof document>"u"||(a.current&&a.current!==m&&d(a.current),tf(m,r.current),a.current=m)},[d,r]),g=(0,u.useCallback)(m=>{if(!Mi(e))return;c(),n();const $=qp(e);if($<=0){h(m);return}t.current=setTimeout(()=>{t.current=null,h(m)},$)},[e,n,c,h]),f=(0,u.useCallback)(m=>{if(!Mi(e))return;n(),c();const $=Yp(e);if($<=0){d(m);return}o.current=setTimeout(()=>{o.current=null,d(m)},$)},[e,n,c,d]),v=(0,u.useCallback)(m=>{n(),c(),h(m),nf(m,r.current)},[n,c,h,r]),b=(0,u.useCallback)(m=>{cf(m,r.current)},[r]);return{activeSubmenuIdRef:a,cancelPendingSubmenuOpen:n,cancelPendingSubmenuClose:c,closeOpenDescendantPopovers:l,hideSubmenu:d,runShowSubmenu:h,showSubmenuFromPointer:g,requestSubmenuCloseFromPointer:f,openSubmenuForKeyboard:v,focusTriggerById:b}}const lf=s`--arc•menu`,ma=s`${lf}•item`,df=s`
@layer arc-components {

  [arc-menu] {
    ${ma}•gap: var(${E}•8);
    ${ma}•fg: inherit;
    ${ma}•bg: inherit;

    font-size: var(--arc-menu-font-size, var(${p}•14));
    list-style: none;
    line-height: normal;

    display: var(--arc-menu-display, flex);
    flex-direction: var(--arc-menu-flex-direction, column);
    gap: var(--arc-menu-gap, var(${E}•2));
    padding: var(--arc-menu-padding, var(${E}•4));
    margin: var(--arc-menu-margin, 0);

    outline: var(--arc-menu-outline, none);
  }

  /* Submenus sit under the same <li> as the row button, so the parent row stays :hover while
     pointing at submenu items. Reset the item bg token on submenu lists so inherited hover from
     the parent <li> does not paint every submenu row; each submenu row only picks up hover from its own <li>. */
  [arc-menu-item] > [arc-popover] [arc-menu] {
    ${ma}•bg: transparent;
  }

  [arc-menu-item] {
    position: relative;
    display: var(--arc-menu-item-display, flex);
    flex-direction: var(--arc-menu-item-flex-direction, row);
    justify-content: var(--arc-menu-item-justify-content, space-between);
    align-items: var(--arc-menu-item-align-items, center);
    gap: var(--arc-menu-item-gap, var(${ma}•gap));

    background: var(--arc-menu-item-background, var(${ma}•bg));
    color: var(--arc-menu-item-color, var(${ma}•fg));
    padding: var(--arc-menu-item-padding, 0);
    border-radius: var(--arc-menu-item-border-radius, var(--arc-border-radius-md));
    cursor: var(--arc-menu-item-cursor, default);
    outline: var(--arc-menu-item-outline, none);

    transition: var(--arc-menu-item-transition, 120ms ease-out);

    &:has(> [arc-button=custom]:not([is-disabled])) {
      &:is(:hover, :has(> [arc-button=custom]:not([is-disabled]):focus-visible)) {
        ${ma}•bg: var(--arc-color-bg-hover-default);
      }
    }

    /* Inter-Component Communication • ArcButton -------------------• */

    > [arc-button=custom] {
      --arc-button-flex: 1;
      --arc-button-font-size: 1em;
      --arc-button-border: none;
      --arc-button-transition: none;
      --arc-button-position: var(--arc-menu-item-position, relative);
      --arc-button-gap: var(--arc-menu-item-gap, var(${ma}•gap));
      --arc-button-opacity: var(--arc-menu-item-opacity, unset);
      --arc-button-overflow: var(--arc-menu-item-overflow, clip);
      --arc-button-outline-offset: var(--arc-menu-item-outline-offset, var(${p}•2m));

      [arc-button-content] {
        display: contents;
      }
    }
  }

  [arc-menu-item=divider] {
    margin: 0 var(${E}•4m);

    hr {
      flex: 1;
      border: none;
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      height: 0;
      margin: 0;
    }
  }

`,uf=({items:r,filterText:e,renderItem:a,isVisible:t,keepMenuOpen:o,renderSubmenu:n,passiveMode:c,submenuBackNavigation:l,...d})=>{const h=c??Li,g=(0,u.useId)(),f=(0,u.useRef)(null),{activeSubmenuIdRef:v,cancelPendingSubmenuOpen:b,cancelPendingSubmenuClose:m,closeOpenDescendantPopovers:$,hideSubmenu:w,showSubmenuFromPointer:_,requestSubmenuCloseFromPointer:y,openSubmenuForKeyboard:C,focusTriggerById:S}=sf({menuListRef:f,passiveMode:h}),I=(0,u.useRef)(!1),[j,L]=(0,u.useState)(!1),[D,z]=(0,u.useState)(-1);(0,u.useLayoutEffect)(()=>{const N=f.current;if(N&&typeof getComputedStyle<"u"){const tr=getComputedStyle(N).direction==="rtl";I.current=tr,L(tr)}},[t,r]);const k=(0,u.useMemo)(()=>e?r.filter(N=>Object.values(N).some(tr=>tr===e)):r,[r,e]),V=(0,u.useRef)(k);V.current=k;const U=(0,u.useCallback)(N=>{if(N<0){z(-1);return}z(N);const tr=f.current;if(!tr)return;const R=Oi(k[N],N,g);Ed(tr,N,R)},[k,g]),Y=(0,u.useMemo)(()=>rf(k,g,U),[k,g,U]),W=N=>ef(N,{isVisible:!!t,menuListRef:f,activeItemIndex:D,filteredItems:k,menuDomId:g,isMenuRtlRef:I,submenuBackNavigation:l,listNavByKey:Y,hideSubmenu:w,focusTriggerById:S,focusRowAtItemIndex:U,setActiveItemIndex:z,openSubmenuForKeyboard:C}),or=(0,u.useMemo)(()=>k.map((N,tr)=>{const R=Bi(N,tr),{itemId:F,role:H,keepMenuOpen:M,items:rr,renderSubmenu:er,submenuProps:Z,...hr}=N,P=Vn(N,tr,g),{hasSubmenu:X}=P,vr=X?P.menuId:"",pr=X?{menu:P.menuId,trigger:P.triggerId}:void 0,Cr=go(N)||"",Xr=H||Jp(N)||"menuitem",Be=tr===D,G=Oi(N,tr,g,P),Rr={filterText:e,isCurrent:Be,menuControlId:G,itemId:R,role:H,keepMenuOpen:M??o,isRtl:j,...X?{hasSubmenu:!0,ids:pr}:{hasSubmenu:!1}},gr=a?.(hr,tr,Rr);return X?(0,i.jsxs)("li",{"arc-menu-item":Cr,role:"presentation",onFocusCapture:()=>z(tr),onMouseEnter:()=>{_(vr)},onMouseLeave:Mi(h)?()=>y(vr):void 0,onClick:Nr=>Sd(Nr,N,Cr,M??o),children:[gr,n?.({ids:pr,items:rr??[],item:N,filterText:e,passiveMode:h,isRtl:j})]},R):(0,i.jsx)("li",{"arc-menu-item":Cr,role:Xr,onFocusCapture:()=>z(tr),onClick:Nr=>Sd(Nr,N,Cr,M??o),children:gr},R)}),[D,e,k,o,a,g,j,h,n,_,y]);return(0,u.useEffect)(()=>{if(!t){b(),m(),$(),v.current=null,z(-1);return}const N=V.current,tr=Un(N,g);if(tr.length>0){const R=tr[0],F=f.current;if(z(R),F){const H=Oi(N[R],R,g);Ed(F,R,H)}}},[t,g,b,m,$,v]),(0,u.useEffect)(()=>()=>{b(),m(),$(),v.current=null},[b,m,$,v]),(0,i.jsx)("ul",{...d,ref:f,"arc-menu":"",role:"menu",onKeyDown:W,onMouseLeave:()=>z(-1),tabIndex:t?0:-1,children:or})};lr("ArcMenu",df);const Id=["items","renderItem","renderSubmenu","keepMenuOpen","onToggle","id","menuProps","passiveMode","submenuBackNavigation","offset","ref"],Td=r=>{const{startSlot:e,endSlot:a,onClick:t,href:o,target:n,containerProps:c,isDisabled:l,"aria-disabled":d,tooltip:h,id:g,popoverTarget:f,popoverTargetAction:v,"aria-haspopup":b,"aria-controls":m,"aria-expanded":$,...w}=r,_=go(w),y=(0,u.useMemo)(()=>zd(_),[_]),C=d??l,S=_==="divider",I=!!(o||t||f),j=!S,L=j&&e?"":void 0,D=j&&a?"":void 0,z=(0,u.useMemo)(()=>({...c,onClick:t,tooltip:h,href:o,target:n,id:g,popoverTarget:f,popoverTargetAction:v,"aria-haspopup":b,"aria-controls":m,"aria-expanded":$}),[c,t,h,o,n,g,f,v,b,m,$]),k=(0,u.useMemo)(()=>({...c}),[c]);return I?(0,i.jsxs)(Ar,{...z,role:f?"menuitem":z.role,"aria-disabled":C?"true":void 0,isDisabled:!!C,_isCustom:!0,"arc-dropdown-item":_??"","has-start-slot":L,"has-end-slot":D,children:[j&&e,(0,i.jsx)(y,{...w,"is-item-content":"interactive"}),j&&a]}):(0,i.jsxs)("div",{...k,"arc-dropdown-item":_??"","has-start-slot":L,"has-end-slot":D,children:[j&&e,(0,i.jsx)(y,{...w,"is-item-content":"inert"}),j&&a]})},hf=s`--arc•dropdown`,gf=s`${hf}•menu`,te=s`${gf}•item`,vf=s`
@layer arc-components {

  /* ITEM SETUP ----------------------------------------------------• */

  [arc-dropdown-item] {
    ${te}•padding: var(${E}•8) var(${E}•12);
    ${te}•min•height: var(${p}•36);
    ${te}•gap: var(${E}•8);

    &[arc-dropdown-item=text-detail] {
      ${te}•min•height: var(${p}•48);
    }

    &[arc-dropdown-item=section-label] {
      ${te}•min•height: var(${p}•32);
    }

    &[arc-dropdown-item=user] {
      ${te}•min•height: var(${p}•40);

      &:not([has-start-slot]) {
        ${te}•padding: var(${E}•8) var(${E}•12) var(${E}•8) var(${E}•10);
      }
    }

    &[arc-dropdown-item=user-detail] {
      ${te}•min•height: var(${p}•48);

      &:not([has-start-slot]) {
        ${te}•padding: var(${E}•8) var(${E}•12) var(${E}•8) var(${E}•6);
      }
    }

    &[arc-dropdown-item=divider] {
      ${te}•min•height: var(${p}•8);
      ${te}•padding: 0;
    }
  }

  /* DROPDOWN ELEMENTS ---------------------------------------------• */

  [arc-dropdown] {
    --arc-popover-font-size: initial;
    --arc-popover-width: var(--arc-dropdown-width, auto);
    --arc-popover-min-width: var(--arc-dropdown-min-width, 3em);
    --arc-popover-max-width: var(--arc-dropdown-max-width, 50em);
    --arc-popover-padding: var(--arc-dropdown-padding, 0em);
    --arc-popover-outline-size: 0em;
    --arc-popover-overflow: var(--arc-dropdown-overflow, clip);

    --arc-menu-item-gap: var(${te}•gap);
    --arc-badge-align-self: center;
    --arc-badge-count-align-self: center;
  }

  [arc-dropdown-submenu] {
    &:where([anchor-at="left-start"], [anchor-at="right-start"]) {
      top: var(--arc-dropdown-submenu-offset, var(${E}•4m));
    }

    &:where([anchor-at="left-end"], [anchor-at="right-end"]) {
      bottom: var(--arc-dropdown-submenu-offset, var(${E}•4m));
    }
  }

  [arc-dropdown-item] {
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(${te}•gap);
    text-align: start;
    min-height: var(${te}•min•height);

    &:not([arc-button]) {
      padding: var(${te}•padding);
      max-width: 100%;
    }

    &[arc-button] {
      --arc-button-padding: var(${te}•padding);
      --arc-button-min-height: var(${p}•40);
    }

    [is-item-content] {
      flex: 1;
    }

    [arc-dropdown-submenu-icon] {
      --arc-icon-color: var(--arc-dropdown-submenu-icon-color, var(--arc-color-fg-secondary));
    }
  }

}
`,vo={OFFSET:void 0,ANCHOR_AT_LTR:"left-start",ANCHOR_AT_RTL:"right-start",ICON_LTR:"fa-regular fa-angle-right",ICON_RTL:"fa-regular fa-angle-left"},pf=(r,e)=>({anchorAt:r?vo.ANCHOR_AT_LTR:vo.ANCHOR_AT_RTL,offset:e??vo.OFFSET}),jd=(0,u.forwardRef)((r,e)=>(0,i.jsx)(qt,{...r,ref:e,"arc-dropdown-menu-button":""})),ff=r=>{const e={...r};return Id.forEach(a=>{Reflect.deleteProperty(e,a)}),e},mf=r=>r?vo.ICON_RTL:vo.ICON_LTR,bf=(r,e)=>r===void 0?mf(e):typeof r=="function"?r(e):r,Kn=r=>{const{items:e,renderItem:a,keepMenuOpen:t,menuProps:o,passiveMode:n,submenuBackNavigation:c,renderSubmenu:l,submenuIcon:d,submenuOffset:h,ref:g,...f}=r,[v,b]=(0,u.useState)(!1),m=(0,u.useRef)(r);m.current=r;const $=(0,u.useRef)(null),w=(0,u.useCallback)(I=>{if(typeof document>"u")return;Ee(I,$.current)?.hidePopover?.()},[]),_=(0,u.useCallback)(I=>{$.current=I,Se(g,I)},[g]),y=(0,u.useCallback)(I=>{const j=m.current,L=ff(j),D=Kp(I.item)??j.renderItem,{ids:z}=I,k=j.keepMenuOpen;if(I.item.renderSubmenu)return I.item.renderSubmenu({items:I.items,renderItem:D,keepMenuOpen:k,filterText:I.filterText,passiveMode:I.passiveMode,ids:z,closeSubmenu:()=>{w(z.menu)},inheritedFromParent:L});const{menuProps:V,popoverPassthrough:U}=Vp(I.item);return(0,i.jsx)(Kn,{...L,...pf(I.isRtl,j.submenuOffset),...U,id:z.menu,"arc-dropdown-submenu":"",submenuBackNavigation:Up(z),alternateAnchorId:z.trigger,hidePopoverButton:!0,passiveMode:I.passiveMode,items:I.items,renderItem:D,keepMenuOpen:k,menuProps:V})},[w]),C=(0,u.useCallback)((...I)=>{const[j,,L]=I;if(a)return a(...I);const{ids:D,isRtl:z,menuControlId:k}=L,{endSlot:V,...U}=j,Y=!!D,W=bf(m.current.submenuIcon,!!z),or=V||Y?(0,i.jsxs)(i.Fragment,{children:[V,Y?(0,i.jsx)(ir,{"arc-dropdown-submenu-icon":"",icon:W}):null]}):void 0;return(0,i.jsx)(Td,{...U,id:k,endSlot:or,...D?{popoverTarget:D.menu,popoverTargetAction:"toggle","aria-haspopup":"menu","aria-controls":D.menu}:{}})},[a]),S=I=>{b(I.newState==="open"),r?.onToggle?.(I)};return(0,i.jsx)(ga,{...f,ref:_,"arc-dropdown":"",variant:"common",onToggle:S,children:(0,i.jsx)(uf,{...o,"arc-dropdown-menu":"",passiveMode:n,submenuBackNavigation:c,items:e??[],renderItem:C,isVisible:v,keepMenuOpen:t,renderSubmenu:y})})};jd.displayName="ArcDropdownButton",Kn.Button=jd,Kn.Item=Td,lr("ArcDropdownMenu",vf);const Rd=r=>(0,i.jsx)(Ar,{...r,layout:"icon",size:"md",variant:"common",hierarchy:"tertiary"}),Wn=s`--arc•link`,aa=s`${Wn}•fg`,po=s`${aa}•hover`,fo=s`${aa}•disabled`,Di=s`${Wn}•outline`,Pd=s`${Di}•size`,Ni=s`${Di}•offset`,$f=s`${Wn}•cursor`,mo=s`${Wn}•focus•color`,yf=s`
@layer arc-components {
${S0}

[arc-link] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=inherit] { /* @default */
    ${aa}: currentcolor;
    ${po}: color-mix(in srgb, currentcolor, transparent 38.75%);
    ${fo}: color-mix(in srgb, currentcolor, transparent 70%);

    ${mo}: var(--arc-color-border-focus);
  }

  &[data-variant=primary] {
    ${aa}: var(--arc-color-fg-primary);
    ${po}: var(--arc-color-fg-secondary);
    ${fo}: var(--arc-color-fg-disabled);
    ${mo}: var(--arc-color-border-focus);
  }

  &[data-variant=secondary] {
    ${aa}: var(--arc-color-fg-secondary);
    ${po}: var(--arc-color-fg-primary);
    ${fo}: var(--arc-color-fg-disabled);
    ${mo}: var(--arc-color-border-focus);
  }

  /* @deprecated */
  &[data-variant=inverse] {
    ${aa}: var(--arc-color-fg-on-mono-inverse);
    ${po}: var(--arc-link-fg-hover-inverse);
    ${fo}: var(--arc-link-fg-disabled-inverse);
    ${mo}: var(--arc-link-focus-disabled-inverse);
  }

  & {
    ${Pd}: 0.125em; /* 2px */
    ${Ni}: 0.0625em; /* 1px */
  }


  /* STATES --------------------------------------------------------• */

  &:not([data-is-disabled]):hover {
    ${aa}: var(--arc-link-color-hover, var(${po}));
  }

  &:where(:focus, :focus-within):focus-visible {
    ${Di}: var(${Pd}) solid var(--arc-link-color-focus, var(${mo}));
    ${Ni}: var(${Ni});

    * {
      outline: none;
    }
  }

  &[data-is-disabled] {
    ${aa}: var(--arc-link-color-disabled, var(${fo}));
    ${$f}: not-allowed;
  }


  & {

    /* Inter-Component Communication -------------------------------• */
    --arc-icon-color: var(--arc-link-color, var(${aa}));  /** ArcIcon color */

  }

}


/* CORE STYLES ------------------------------------------------------ */

[arc-link] {
  color: var(--arc-link-color, var(${aa}));
  border-radius: var(--arc-border-radius-sm); /* for focus outline */
  text-decoration: var(--arc-link-text-decoration, underline);

  [data-element=icon] {
    text-decoration: none;
  }

  [data-element=text] {
    text-decoration: var(--arc-link-text-decoration, underline);
    text-decoration-color: currentcolor;
  }
}

}
`,xf=ar(_r,["inherit","primary","secondary","inverse"]),kf=({children:r,layout:e="gutter",size:a="inherit",variant:t="inherit",tag:o="a",href:n,icon:c,text:l,overflow:d,iconSize:h,gapSize:g,isFlipped:f,isDisabled:v,...b})=>(0,i.jsx)(o,{...b,href:v?void 0:n,"arc-link":"","data-variant":t,"aria-disabled":v,"data-is-disabled":v?"":void 0,children:r||(0,i.jsx)(re,{icon:c,text:l,overflow:d,iconSize:h,gapSize:g,size:a,layout:e,isFlipped:f})});lr("ArcLink",yf);const wf=[...sa],Cf=ar(_r,["common"]),Af=ar(_r,["common","critical"]),Sf=ar(_r,["common","brand","info","success","warning","error","processing"]),zf=["auto","dark","light","none"],Ef=["auto","all","top-bottom","left-right","left-right-top","left-right-bottom","top-bottom-left","top-bottom-right","none"],_f=ar(oe,["xl","lg","md","sm","custom","fullscreen"]),If=["cancel","escape","outside","button:dismiss","button:back","button:primary","button:secondary","button:tertiary","confirm:discard","confirm:cancel"],Fi=r=>r?.matches(":modal"),Hi=(r,e)=>e.target===r,Tf=(r,e)=>e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom,bo=({modalRef:r,shouldConfirm:e,setIsConfirming:a,onCloseOverride:t=void 0})=>(o,n)=>c=>{if(c?.preventDefault?.(),c?.stopPropagation?.(),!r?.current){n?.(c);return}if(t){t(o,c,r.current),n?.(c);return}if(e&&o!=="confirm:discard"){a?.(!0);return}r.current?.close(o),a?.(!1),n?.(c)},Vi=({modalRef:r,shouldConfirm:e,setIsConfirming:a,onClose:t,onToggle:o})=>{(0,u.useEffect)(()=>{const n=r.current;if(!n)return;const c=d=>{Fi(n)&&Hi(n,d)&&(e?(d.preventDefault(),d.stopPropagation(),a?.(!0)):t?.("outside",d))},l=d=>{Hi(n,d)&&(a?.(!1),t?.(n.returnValue,d),o?.(!1,d))};return n.addEventListener("close",l),n.addEventListener("cancel",c),()=>{n.removeEventListener("close",l),n.removeEventListener("cancel",c)}},[r,e,a,t,o])},Ui=({modalRef:r,isOpen:e,isTopLayer:a})=>{(0,u.useEffect)(()=>{const t=r.current;t&&(e&&!t.open&&(a?t.showModal():t.show()),!e&&t.open&&t.close())},[e,a])},Ki=({modalRef:r,isOpen:e,autoFocusId:a})=>{(0,u.useEffect)(()=>{const t=r.current;if(!t||!a||!e)return;const o=t.querySelector(`#${a}`);if(!o||!(o instanceof HTMLElement))return;const n=setTimeout(()=>{o.focus()},0);return()=>clearTimeout(n)},[r,a,e])},Ld=(r,e)=>(typeof r.composedPath=="function"?r.composedPath():[]).includes(e)||r.target instanceof Node&&e.contains(r.target),Md=({modalRef:r,isOpen:e=!1,closeOnBackdrop:a=!1,attemptCloseModal:t})=>{(0,u.useEffect)(()=>{const o=r.current;if(!o||!e||!a||!Fi(o))return;let n=!1;const c=d=>{n=Ld(d,o)},l=d=>{if(n||Ld(d,o))return;const h=o.getBoundingClientRect();Tf(h,d)&&t("outside")(d)};return document.documentElement?.addEventListener("pointerdown",c,{capture:!0}),document.documentElement?.addEventListener("click",l,{capture:!0}),()=>{document.documentElement?.removeEventListener("pointerdown",c,{capture:!0}),document.documentElement?.removeEventListener("click",l,{capture:!0})}},[r,t,e,a])},Bd=({modalRef:r,isOpen:e=!1,closeOnEsc:a=!1,closedBy:t="closerequest",attemptCloseModal:o})=>{(0,u.useEffect)(()=>{const n=r.current;if(!n||!e||!a||!Fi(n))return;const c=l=>{if(l.key==="Escape"&&Hi(n,l)){if(t==="none"){l.stopPropagation(),l.preventDefault();return}o("escape")(l)}};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[r,o,e,a,t])},Wi=r=>(0,i.jsx)(Ar,{"aria-label":"Dismiss",text:"Dismiss",...r,variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-xmark-large",layout:"icon",shape:"square",size:"md"}),jf=r=>(0,i.jsx)(Ar,{"arc-modal-go-back":"","aria-label":"Go Back",text:"Go Back",...r,variant:"common",hierarchy:"secondary",icon:"fa-regular fa-arrow-left",layout:"icon",shape:"square",size:"md"}),Gn=(0,u.forwardRef)(({inert:r,...e},a)=>(0,i.jsx)("div",{...e,ref:a,"arc-modal-content":"",inert:r}));Gn.displayName="ModalContent";const Od=({showDivider:r,...e})=>(0,i.jsx)("header",{...e,"arc-modal-header":"","has-divider":r?"":void 0}),Rf=({glyph:r,variant:e="common"})=>(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)(ir,{icon:r,"arc-modal-glyph":"","arc-icon-status":e})}),Gi=r=>{const{titleContent:e,TitleElement:a="h2",...t}=r;return(0,i.jsx)(i.Fragment,{children:e&&(0,i.jsx)(a,{...t,"arc-modal-title":"",children:typeof e=="string"?e:(0,i.jsx)(re,{...e})})})},Pf=({message:r,...e})=>(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)("p",{...e,"arc-modal-message":"",children:r})}),qi=({tag:r="section",padding:e,...a})=>(0,i.jsx)(r,{...a,"arc-modal-body":"","data-padding":e==="auto"?void 0:e}),Yi=({showDivider:r,...e})=>(0,i.jsx)("footer",{...e,"arc-modal-footer":"","has-divider":r?"":void 0}),Lf=r=>e=>{if(e.key==="Escape"){if(r==="none"){e.stopPropagation(),e.preventDefault();return}return"escape"}},Q=s`--arc•modal`,$o=s`${Q}•layout`,Mf=s`${Q}•header`,qn=s`${Q}•body`,yo=s`${Q}•footer`,Dd=s`${Q}•fg`,Yn=s`${Q}•bg`,ta=s`${Q}•backdrop`,Ia=s`${Q}•scale`,wt=s`${Mf}•padding`,wr=s`${qn}•padding`,Ta=s`${yo}•padding`,Bf=s`
  ${Q}•font•size: var(${p}•14);
  ${Q}•gap: var(${E}•16);

  ${$o}•rows: auto 1fr auto;
  ${$o}•columns: auto;

  &:not(:has([arc-modal-footer])):has([arc-modal-header]) {
    ${$o}•rows: auto 1fr;
  }

  &:not(:has([arc-modal-header])):has([arc-modal-footer]) {
    ${$o}•rows: 1fr auto;
  }

  &:not(:has([arc-modal-header])):not(:has([arc-modal-footer])) {
    ${$o}•rows: auto;
  }

  ${Dd}: var(--arc-color-fg-primary);
  ${Yn}: var(--arc-color-bg-primary);
  ${Q}•border: none;
  ${Q}•border•radius: var(--arc-border-radius-lg);
  ${Q}•divider: var(${p}•1) solid var(--arc-color-border-mid);

  ${Q}•max•width: calc(100vw - var(${E}•32));
  ${Q}•min•width: unset;
  ${Q}•width: auto;

  ${Q}•max•height: calc(100vh - var(${E}•32));
  ${Q}•min•height: unset;
  ${Q}•height: max-content;

  ${Ia}: 1;
  ${Ia}•start: 0.95;

  ${qn}•text•align: unset;
  ${yo}•justify•content: flex-end;

  ${ta}•bg: var(--arc-color-overlay-stark);
  ${ta}•pointer•events: none;
  ${ta}•cursor: default;

  &:where([is-backdrop=light]) {
    ${ta}•bg: var(--arc-color-overlay-subtle);
  }

  &:where([is-backdrop=dark]) {
    ${ta}•bg: var(--arc-color-overlay-stark);
  }

  &:where([is-backdrop=none]) {
    ${ta}•bg: transparent;
  }
`,Of=s`
  &[data-size=sm] {
    ${Q}•width: 28em;
  }

  &[data-size=md] {
    ${Q}•width: 40em;
  }

  &[data-size=lg] {
    ${Q}•width: 50em;
  }

  &[data-size=xl] {
    ${Q}•width: 64em;
  }

  &[data-size=custom] {
    ${Q}•width: auto;
    ${Q}•height: max-content;
  }

  &[data-size=fullscreen] {
    ${Q}•width: 100vw;
    ${Q}•height: 100vh;
    ${Q}•min•width: 100vw;
    ${Q}•min•height: 100vh;
    ${Q}•max•width: 100vw;
    ${Q}•max•height: 100vh;
    ${Q}•border•radius: var(--arc-border-radius-none);

    ${Ia}: 1;
    ${Ia}•start: 1.125;
  }
`,Df=s`
  &[is-confirm] {
    ${yo}•justify•content: flex-end;

    &[is-confirm=critical] [arc-modal-title] {
      --arc-icon-text-icon-color: var(--arc-color-fg-critical-mid);
    }
  }

  &[is-alert] {
    ${qn}•text•align: center;
    ${yo}•justify•content: center;

    ${wr}•block•start: var(${E}•40);
    ${wr}•block•end: var(${E}•20);

    ${Ta}•block•start: var(${E}•12);
    ${Ta}•block•end: var(${E}•40);

    ${Q}•glyph•size: var(${p}•48);

    [arc-modal-spinner] {
      --arc-spinner-circle-opacity: 9.8%; /* 9.8% = neutral-200 on white */
      --arc-spinner-size: var(${Q}•glyph•size);
    }

    [arc-modal-glyph] {
      --arc-icon-display: flex;
      --arc-icon-size: var(${Q}•glyph•size);
      --arc-icon-height: var(--arc-icon-size);
      --arc-icon-max-height: var(--arc-icon-size);
    }

    [arc-modal-body] {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(${E}•12);
    }
  }

  &:not([is-top-layer]) {
    z-index: var(--arc-modal-z-index, 1000);
  }
`,Nf=s`
  [arc-modal-content] {
    &:has([arc-modal-header]) {
      ${wr}•block•start: var(${E}•10);
    }

    &:has([arc-modal-footer]) {
      ${wr}•block•end: var(${E}•10);
    }

    &:has([arc-modal-header][has-divider]) {
      ${wt}•block•end: var(${E}•20);
      ${wr}•block•start: var(${E}•20);
    }

    &:has([arc-modal-footer][has-divider]) {
      ${wr}•block•end: var(${E}•20);
      ${Ta}•block•start: var(${E}•12);
      ${Ta}•block•end: var(${E}•12);
    }

    &:has([arc-modal-body][data-padding=top-bottom]) {
      ${wr}•inline•start: 0;
      ${wr}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right]) {
      ${wr}•block•start: 0;
      ${wr}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-top]) {
      ${wr}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-bottom]) {
      ${wr}•block•start: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-left]) {
      ${wr}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-right]) {
      ${wr}•inline•start: 0;
    }

    &:has([arc-modal-body][data-padding=all]) {
      ${wr}•block•start: var(${E}•20);
      ${wr}•inline•end: var(${E}•24);
      ${wr}•block•end: var(${E}•20);
      ${wr}•inline•start: var(${E}•24);
    }

    &:has([arc-modal-go-back]) {
      ${wt}•inline•start: var(${E}•20);
    }

    ${wt}:
      var(${E}•20)
      var(${E}•24)
      var(${wt}•block•end, var(${E}•10))
      var(${wt}•inline•start, var(${E}•24));

    ${wr}:
      var(${wr}•block•start, var(${E}•20))
      var(${wr}•inline•end, var(${E}•24))
      var(${wr}•block•end, var(${E}•20))
      var(${wr}•inline•start, var(${E}•24));

    ${Ta}:
      var(${Ta}•block•start, var(${E}•10))
      var(${E}•24)
      var(${Ta}•block•end, var(${E}•20))
      var(${E}•24);

    &:has([arc-modal-body][data-padding=none]) {
      ${wr}: 0;
    }
  }
`,Ff=s`
  [arc-modal] {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-modal-transition-duration, 240ms);
    transition-property: display, opacity, scale;
    transition-timing-function: ease-out;

    &::after {
      transition: inherit;
    }

    &::backdrop {
      transition: inherit;
    }
  }

  @supports (overlay: auto) {
    [arc-modal] {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity, scale;
    }
  }
`,Hf=s`
  [arc-modal] {
    opacity: 0;
    scale: var(--arc-modal-scale, var(${Ia}));

    &::after {
      opacity: 0;
    }

    &::backdrop {
      opacity: 0;
    }

    &[open] {
      display: flex;
      flex-direction: column;
      opacity: 1;
    }

    &[open]::after {
      opacity: 1;
    }

    &[open]::backdrop {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-modal][open] {
      opacity: 0;
      scale: var(--arc-modal-scale-start, var(${Ia}•start));
    }

    [arc-modal][open]::after {
      opacity: 0;
    }

    [arc-modal][open]::backdrop {
      opacity: 0;
    }
  }
`,Zi=s`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-modal] {
    ${Bf}
    ${Of}
    ${Df}
    ${Nf}
  }

  /* REDUCED MOTION ------------------------------------------------• */

  @media (prefers-reduced-motion: reduce) {
    [arc-modal] {
      ${Ia}: 1;
      ${Ia}•start: 1;
    }
  }

  /* CORE ----------------------------------------------------------• */

  [arc-modal] {
    will-change: opacity, scale;
    contain: layout style paint;

    inset: var(--arc-modal-inset, 0);
    translate: var(--arc-modal-translate, none);
    margin: var(--arc-modal-margin, auto);

    padding: 0;
    color: var(--arc-modal-color, var(${Dd}));
    background: var(--arc-modal-background, var(${Yn}));
    border: var(--arc-modal-border, var(${Q}•border));
    border-radius: var(--arc-modal-border-radius, var(${Q}•border•radius));
    box-shadow: var(--arc-modal-box-shadow, var(--arc-shadow-lg));
    outline: var(--arc-modal-outline, none);

    width: var(--arc-modal-width, var(${Q}•width));
    height: var(--arc-modal-height, var(${Q}•height));
    min-width: var(--arc-modal-min-width, var(${Q}•min•width));
    min-height: var(--arc-modal-min-height, var(${Q}•min•height));
    max-width: var(--arc-modal-max-width, var(${Q}•max•width));
    max-height: var(--arc-modal-max-height, var(${Q}•max•height));

    &::backdrop {
      will-change: opacity;
      contain: layout style paint;

      background: var(--arc-modal-backdrop-background, var(${ta}•bg));
      pointer-events: var(${ta}•pointer•events, none);
      cursor: var(${ta}•cursor, default);
    }

    [arc-modal-content] {
      font-size: var(--arc-modal-font-size, var(${Q}•font•size));
      flex: 1 1 min-content;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      z-index: 1;

      /* Force remove margin from controlled title and message elements */
      :is([arc-modal-title], [arc-modal-message]) { margin: 0 !important; }
    }

    [arc-modal-header] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      align-items: var(--arc-modal-header-align-items, unset);
      justify-content: space-between;
      gap: var(--arc-modal-header-gap, var(${Q}•gap));

      padding: var(${wt});
      background: var(--arc-modal-header-background, var(${Yn}));
      max-width: 100%;

      &:where([has-divider]) {
        border-bottom: var(--arc-modal-header-divider, var(${Q}•divider));
      }

      :where([header-slot]) {
        display: flex;
        align-items: inherit;
        gap: inherit;
      }

      :where([header-slot=content]) {
        flex: 1;
        align-self: flex-start;
      }

      :where([header-slot=dismiss]) {
        margin: var(${E}•4m) var(${E}•8m) var(${E}•4m) var(${E}•4m);
      }

      :where([header-slot=go-back]) {
        margin: var(${E}•4m) 0 var(${E}•4m) var(${E}•4m);
      }
    }

    [arc-modal-title] {
      --arc-icon-text-gap: var(${E}•8);

      [data-element=subtext] {
        font-family: var(--arc-font-family-body);
        font-weight: var(--arc-font-weight-body);
        font-size: var(--arc-font-size-body-md);
        color: inherit;
        margin-top: var(${E}•4);
      }
    }

    [arc-modal-body] {
      flex: 1;
      padding: var(${wr});
      overflow: auto;
      overscroll-behavior: var(--arc-modal-overscroll-behavior, contain);
      min-height: var(--arc-modal-body-min-height, 3em);
      text-align: var(--arc-modal-body-text-align, var(${qn}•text•align));
    }

    [arc-modal-footer] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      flex-direction: var(--arc-modal-footer-flex-direction, unset);
      align-items: var(--arc-modal-footer-align-items, center);
      justify-content: var(--arc-modal-footer-justify-content, var(${yo}•justify•content));
      gap: var(--arc-modal-footer-gap, var(${Q}•gap));

      background: var(--arc-modal-footer-background, var(${Yn}));
      padding: var(--arc-modal-footer-padding, var(${Ta}));
      max-width: 100%;

      &[has-divider] {
        border-top: var(--arc-modal-footer-divider, var(${Q}•divider));
      }

      [footer-slot=content] {
        flex: var(--arc-modal-footer-content-flex, none);
        display: var(--arc-modal-footer-content-display, flex);
        gap: inherit;
      }
    }

    [arc-modal-dismiss] {
      position: var(--arc-modal-dismiss-position, absolute);
      inset: var(--arc-modal-dismiss-inset, var(${E}•16) var(${E}•16) auto auto);
      width: var(--arc-modal-dismiss-width, auto);
      overflow: visible;
      z-index: 2;
    }

    /* Nested confirm modal */
    &:not([is-top-layer]):has([arc-modal][is-confirm][open])::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--arc-modal-backdrop-background, var(${ta}•bg));
      z-index: var(--arc-modal-confirm-z-index, 2);
    }

    /* Nested modals */
    [arc-modal] {
      --arc-modal-min-width: var(--arc-modal-nested-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-min-height, none);
    }

    [arc-modal][is-alert] {
      --arc-modal-min-width: var(--arc-modal-nested-alert-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-alert-min-height, none);
    }

    [arc-modal][is-confirm] {
      --arc-modal-width: var(--arc-modal-confirm-width, 25em);
      --arc-modal-height: var(--arc-modal-confirm-height, max-content);
      --arc-modal-min-width: var(--arc-modal-confirm-min-width, none);
      --arc-modal-min-height: var(--arc-modal-confirm-min-height, none);
      --arc-modal-max-width: var(--arc-modal-confirm-max-width, calc(100% - var(${E}•32)));
      --arc-button-bar-flex: none;

      z-index: var(--arc-modal-confirm-z-index, 3);

      inset: var(--arc-modal-confirm-inset, 0);
      translate: var(--arc-modal-confirm-translate, none);
      margin: var(--arc-modal-confirm-margin, auto);
    }
  }

  ${Ff}
  ${Hf}
`,ja={variant:"common",backdropColor:"auto",message:"You have unsaved changes. Discard them?",onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},Nd=({children:r,headerProps:e,bodyProps:a,footerProps:t,...o})=>{const n=(0,u.useRef)(null),{isOpen:c,autoFocusId:l,isTopLayer:d=ja.isTopLayer,isInverse:h=ja.isInverse,scheme:g=ja.scheme,backdropColor:f=ja.backdropColor,variant:v=ja.variant,message:b=ja.message,onCloseOverride:m=ja.onCloseOverride,onConfirmDiscard:$,onConfirmCancel:w,contentRef:_,...y}=o,{slotStart:C,TitleElement:S,titleContent:I,slotEnd:j,...L}=e||{},{primaryButton:D,secondaryButton:z,...k}=t||{},V=!!(I||C||j),U=g==="auto"?void 0:g,Y=!!m,W=R=>Y?m?.("confirm:discard",R,n.current??void 0):$?.("confirm:discard",R),or=R=>Y?m?.("confirm:cancel",R,n.current??void 0):w?.("confirm:cancel",R);Vi({modalRef:n,onClose:m}),Ui({modalRef:n,isOpen:c,isTopLayer:d}),Ki({modalRef:n,isOpen:c,autoFocusId:l});const N=R=>{or(R),z?.onClick?.(R)},tr=R=>{W(R),D?.onClick?.(R)};return(0,i.jsx)("dialog",{...y,ref:n,"arc-modal":"","arc-scheme":h?"inverse":U,"is-confirm":v||"","is-inverse":h?"":void 0,"is-top-layer":d?"":void 0,"is-backdrop":f==="auto"?void 0:f,"data-size":"sm",closedby:"none",onKeyDown:Lf("none"),children:(0,i.jsxs)(Gn,{ref:_,children:[V&&(0,i.jsxs)(Od,{...L,children:[C&&(0,i.jsx)("div",{"header-slot":"start",children:C}),(0,i.jsx)("div",{"header-slot":"content",children:(0,i.jsx)(Gi,{TitleElement:S,titleContent:I})}),j&&(0,i.jsx)("div",{"header-slot":"end",children:j})]}),(0,i.jsx)(qi,{...a,children:r||b&&(0,i.jsx)("p",{style:{margin:0},children:b})}),(0,i.jsx)(Yi,{...k,children:(0,i.jsxs)(_n,{children:[(0,i.jsx)(Ar,{...z,text:z?.text||"Cancel",variant:"common",hierarchy:"secondary",isInverse:h,onClick:N}),(0,i.jsx)(Ar,{...D,text:D?.text||"Discard",variant:v??"common",hierarchy:"primary",isInverse:h,onClick:tr})]})})]})})};lr("ArcModalConfirm",Zi);const le={size:"md",variant:"common",backdropColor:"auto",isTopLayer:!0,isInverse:!1,scheme:"auto",showDismiss:!0,closeOnEsc:!0,closeOnBackdrop:!1,hasConfirmFlow:!1,hasUnsavedChanges:!1,onCloseOverride:void 0,bypassConfirmWhen:{didPressEscapeKey:!1,didClickBackdrop:!1,didClickGoBackButton:!1,didClickDismissButton:!1,didClickPrimaryButton:!1,didClickSecondaryButton:!1,didClickTertiaryButton:!1},headerProps:{showDivider:!1},bodyProps:{padding:"auto"},footerProps:{showDivider:!1}},Vf=({children:r,confirmProps:e,headerProps:a,bodyProps:t,dismissProps:o,footerProps:n,...c})=>{const l=(0,u.useRef)(null),[d,h]=(0,u.useState)(!1),{isOpen:g,autoFocusId:f,isTopLayer:v=le.isTopLayer,isInverse:b=le.isInverse,scheme:m=le.scheme,backdropColor:$=le.backdropColor,hasConfirmFlow:w=le.hasConfirmFlow,hasUnsavedChanges:_=le.hasUnsavedChanges,onCloseOverride:y=le.onCloseOverride,bypassConfirmWhen:C=le.bypassConfirmWhen??{},size:S=le.size,closeOnBackdrop:I=le.closeOnBackdrop,closeOnEsc:j=le.closeOnEsc,showDismiss:L=le.showDismiss,onActionError:D,onClose:z,onToggle:k,width:V,height:U,style:Y,contentRef:W,...or}=c,{showGoBack:N,goBackProps:tr,slotStart:R,TitleElement:F,titleContent:H,slotEnd:M,showDivider:rr=le.headerProps?.showDivider,...er}=a??{},{slotStart:Z,primaryButton:hr,secondaryButton:P,tertiaryButton:X,showDivider:vr=le.footerProps?.showDivider,...pr}=n??{},Cr=!!(N||H||R||M),Xr=!!(hr||P||X),Be=!!(Xr||Z),G=!!(w&&_),Rr=j?"closerequest":"none",gr=m==="auto"?void 0:m,{didPressEscapeKey:Nr,didClickBackdrop:de,didClickGoBackButton:Ye,didClickDismissButton:ia,didClickPrimaryButton:_o,didClickSecondaryButton:Io,didClickTertiaryButton:To}=C,Ze=bo({modalRef:l,shouldConfirm:G,setIsConfirming:h,onCloseOverride:y});Vi({modalRef:l,shouldConfirm:G,setIsConfirming:h,onClose:z,onToggle:k}),Ui({modalRef:l,isOpen:g,isTopLayer:v}),Ki({modalRef:l,isOpen:g,autoFocusId:f}),Md({modalRef:l,isOpen:g,closeOnBackdrop:I,attemptCloseModal:de?bo({modalRef:l,shouldConfirm:G&&!de,setIsConfirming:h}):Ze}),Bd({modalRef:l,isOpen:g,closeOnEsc:j,closedBy:Rr,attemptCloseModal:Nr?bo({modalRef:l,shouldConfirm:G&&!Nr,setIsConfirming:h}):Ze});const nr=()=>h(!1),Pr=(me,xa)=>Ze(me)(xa),ue=(me,xa,Qa)=>async ka=>{ka?.preventDefault?.(),ka?.stopPropagation?.();const jo=()=>xa?bo({modalRef:l,shouldConfirm:G&&!xa,setIsConfirming:h})(me,Qa?.onCloseCallback)(ka):Ze(me,Qa?.onCloseCallback)(ka);try{await Qa?.onClick?.(ka),jo()}catch(Xe){D?.(Xe,{reason:me,event:ka})}};return(0,i.jsxs)("dialog",{...or,ref:l,"arc-modal":"","arc-scheme":b?"inverse":gr,"is-inverse":b?"":void 0,"is-top-layer":v?"":void 0,"is-backdrop":$==="auto"?void 0:$,"data-size":S,closedby:Rr,style:{"--arc-modal-width":V??"","--arc-modal-height":U??"",...Y},children:[!Cr&&L&&(0,i.jsx)("div",{"arc-modal-dismiss":"",children:(0,i.jsx)(Wi,{...o,isInverse:b,onClick:ue("button:dismiss",ia,o)})}),(0,i.jsxs)(Gn,{ref:W,inert:d?"":void 0,children:[Cr&&(0,i.jsxs)(Od,{...er,showDivider:rr,children:[N&&(0,i.jsx)("div",{"header-slot":"go-back",children:(0,i.jsx)(jf,{...tr,isInverse:b,onClick:ue("button:back",Ye,tr)})}),R&&(0,i.jsx)("div",{"header-slot":"start",children:R}),(0,i.jsx)("div",{"header-slot":"content",children:(0,i.jsx)(Gi,{TitleElement:F,titleContent:H})}),M&&(0,i.jsx)("div",{"header-slot":"end",children:M}),L&&(0,i.jsx)("div",{"header-slot":"dismiss",children:(0,i.jsx)(Wi,{...o,isInverse:b,onClick:ue("button:dismiss",ia,o)})})]}),(0,i.jsx)(qi,{...t,children:r}),Be&&(0,i.jsxs)(Yi,{...pr,showDivider:vr,children:[Z&&(0,i.jsx)("div",{"footer-slot":"content",children:Z}),Xr&&(0,i.jsxs)(_n,{children:[X&&(0,i.jsx)(Ar,{...X,text:X?.text||"Button",isInverse:b,variant:"common",hierarchy:"tertiary",onClick:ue("button:tertiary",To,X)}),P&&(0,i.jsx)(Ar,{...P,text:P?.text||"Cancel",isInverse:b,variant:"common",hierarchy:"secondary",onClick:ue("button:secondary",Io,P)}),hr&&(0,i.jsx)(Ar,{...hr,text:hr?.text||"Action",isInverse:b,variant:"common",hierarchy:"primary",onClick:ue("button:primary",_o,hr)})]})]})]}),w&&(0,i.jsx)(Nd,{isOpen:d,isInverse:b,isTopLayer:v,backdropColor:$,...e,onConfirmDiscard:Pr,onConfirmCancel:nr})]})};lr("ArcModal",Zi);const ba={variant:"common",backdropColor:"auto",showDismiss:!0,closeOnBackdrop:!1,closeOnEsc:!0,onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},Uf={common:"fa-solid fa-cat-space",brand:"fa-kit fa-articulate",success:"fa-solid fa-badge-check",warning:"fa-solid fa-triangle-exclamation",error:"fa-solid fa-do-not-enter",info:"fa-solid fa-circle-info",processing:(0,i.jsx)(Pc,{"arc-modal-spinner":""})},Kf=({children:r,dismissProps:e,bodyProps:a,footerProps:t,...o})=>{const n=(0,u.useRef)(null),{isOpen:c,autoFocusId:l,isTopLayer:d=ba.isTopLayer,isInverse:h=ba.isInverse,scheme:g=ba.scheme,backdropColor:f=ba.backdropColor,closeOnBackdrop:v=ba.closeOnBackdrop,closeOnEsc:b=ba.closeOnEsc,variant:m=ba.variant,icon:$,TitleElement:w,titleContent:_,message:y,showDismiss:C,onCloseOverride:S=ba.onCloseOverride,onClose:I,onToggle:j,contentRef:L,...D}=o,{primaryButton:z,...k}=t??{},V=$||Uf[m],U=b?"closerequest":"none",Y=g==="auto"?void 0:g,W=bo({modalRef:n,onCloseOverride:S});return Vi({modalRef:n,onClose:I,onToggle:j}),Ui({modalRef:n,isOpen:c,isTopLayer:d}),Ki({modalRef:n,isOpen:c,autoFocusId:l}),Md({modalRef:n,isOpen:c,closeOnBackdrop:v,attemptCloseModal:W}),Bd({modalRef:n,isOpen:c,closeOnEsc:b,closedBy:U,attemptCloseModal:W}),(0,i.jsxs)("dialog",{...D,ref:n,"arc-modal":"","arc-scheme":h?"inverse":Y,"is-alert":m||"","is-inverse":h?"":void 0,"is-top-layer":d?"":void 0,"is-backdrop":f==="auto"?void 0:f,"data-size":"sm",closedby:U,children:[C&&(0,i.jsx)("div",{"arc-modal-dismiss":"",children:(0,i.jsx)(Wi,{...e,isInverse:h,onClick:W("button:dismiss",e?.onClick)})}),(0,i.jsxs)(Gn,{ref:L,children:[(0,i.jsx)(qi,{...a,children:r||(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Rf,{glyph:V,variant:m}),(0,i.jsx)(Gi,{TitleElement:w,titleContent:_}),(0,i.jsx)(Pf,{message:y})]})}),(0,i.jsx)(Yi,{...k,children:(0,i.jsx)(_n,{orientation:"vertical",children:(0,i.jsx)(Ar,{...z,text:z?.text||"Close",variant:"common",hierarchy:"primary",isInverse:h,onClick:W("button:primary",z?.onClick)})})})]})]})};lr("ArcModalAlert",Zi);const Ur=s`--arc•radio`,Wf=s`
@layer arc-components {

  [arc-radio] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${Ur}•font•size: 1em;
      ${Ur}•icon•size: 0.625em;
      ${Ur}•size: 1.125em;
      ${Ur}•gap: 0.5em;
    }

    &[data-size=md] {
      ${Ur}•font•size: var(${p}•14);
      ${Ur}•icon•size: var(${p}•10);
      ${Ur}•size: var(${p}•18);
      ${Ur}•gap: var(${p}•8);
    }

    &[data-size=sm] {
      ${Ur}•font•size: var(${p}•12);
      ${Ur}•icon•size: var(${p}•10);
      ${Ur}•size: var(${p}•16);
      ${Ur}•gap: var(${p}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${B}•border•radius: var(--arc-border-radius-circle);
    ${B}•size: var(${Ur}•size);
    ${B}•icon•size: var(${Ur}•icon•size);
    ${B}•width: var(${Ur}•size);
    ${B}•height: var(${Ur}•size);
    ${B}•translate: 0 var(${p}•1m);

    /* for: ArcLabel */
    --arc-label-gap: var(${Ur}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio]:not([hidden]) {
    font-size: var(${Ur}•font•size);
    display: var(--arc-radio-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked)) {
      ${B}•color: transparent;
      ${B}•background: transparent;
      ${B}•border•color: var(--arc-color-border-stark);

      &:hover {
        ${B}•background: var(--arc-color-bg-theme-subtle);
        ${B}•border•color: var(--arc-color-border-theme-heavy);
      }

      &:has(:disabled) {
        ${B}•background: var(--arc-color-bg-disabled);
        ${B}•border•color: var(--arc-color-border-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* CHECKED, ?NOT-DISABLED+HOVER, ?DISABLED */
    &:has(:checked) {
      ${B}•color: var(--arc-color-fg-on-theme-heavy);
      ${B}•background: var(--arc-color-bg-theme-heavy);
      ${B}•border•color: transparent;

      &:not(:has(:disabled)):hover {
        ${B}•background: var(--arc-color-bg-theme-stark);
      }

      &:has(:disabled) {
        ${B}•color: var(--arc-color-fg-on-theme-mid);
        ${B}•background: var(--arc-color-bg-theme-mid);
      }
    }
  }

}
`,Gf=ar(Oe,["hug","fill"]),qf=ar(oe,["inherit","md","sm"]),Fd=({children:r,label:e,layout:a,size:t="md",useMask:o=!0,...n})=>{const{className:c,title:l,...d}=n,h={className:c,title:l},g=r??e,f=(0,i.jsx)(ao,{...d,type:"radio"}),v=o&&(0,i.jsxs)(xn,{type:"radio",children:[f,(0,i.jsx)(ir,{icon:"fa-solid fa-circle-small arc-fw"})]}),b=!!g&&(0,i.jsxs)(za,{layout:a,children:[v||f,(0,i.jsx)(Ka,{children:g})]});return(0,i.jsx)("span",{...h,"arc-radio":"","data-size":t,children:b||v||f})};lr("ArcRadio",Wf);const pe=s`--arc•rb`,dr=s`${pe}•o`,Yf=s`
@layer arc-components {

  [arc-radio-bar] {
    ${pe}•font•size: var(${p}•14);
    ${pe}•border•radius: var(${p}•8);
    ${pe}•background: var(--arc-color-bg-secondary);
    ${pe}•padding: var(${p}•4);
    ${pe}•gap: var(${p}•2);

    ${dr}•color: var(--arc-color-fg-secondary);
    ${dr}•background: var(--arc-color-alpha-black-0);
    ${dr}•border•color: var(--arc-color-alpha-black-0);
    ${dr}•border•width: var(${p}•1);
    ${dr}•border•radius: var(${p}•4); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------• */
    &[data-size=lg] { /* @default */
      ${dr}•size: var(${p}•32);
      ${dr}•line•height: var(${p}•30); /* • -2px to account for border-width (top/bottom) */
      ${dr}•icon•padding: var(${p}•8);
      ${dr}•text•padding: var(${p}•12);
    }

    &[data-size=md] {
      ${dr}•size: var(${p}•24);
      ${dr}•line•height: var(${p}•22); /* • -2px to account for border-width (top/bottom) */
      ${dr}•icon•padding: var(${p}•6);
      ${dr}•text•padding: var(${p}•8);
    }

    /* LAYOUTS -----------------------------------------------------• */
    &[data-layout=hug] { /** @default */
      ${pe}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${pe}•display: flex;
    }
  }

  [arc-radio-bar-option] {
    /* Inter-Component Communication -------------------------------• */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */


    /* STATES ------------------------------------------------------• */
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${dr}•color: var(--arc-color-fg-on-hover-default);
        ${dr}•background: var(--arc-color-bg-hover-default);
        ${dr}•border•color: var(--arc-color-border-stark);
      }
    }

    &:has(:checked) {
      ${dr}•color: var(--arc-color-mono-black);
      ${dr}•background: var(--arc-color-mono-white);
      ${dr}•border•color: var(--arc-color-border-stark);
      ${dr}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${dr}•color: var(--arc-color-fg-disabled);
    }


    &:has(:focus-within:focus-visible) {
      ${dr}•outline: var(${dr}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-radio-bar]:not([hidden]) {
    font-size: var(--arc-radio-bar-font-size, var(${pe}•font•size));
    display: var(${pe}•display);
    gap: var(${pe}•gap);
    border-radius: var(${pe}•border•radius);
    background: var(${pe}•background);
    padding: var(${pe}•padding);
    margin: 0;

    [arc-radio] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${dr}•border•radius);
      outline: var(${dr}•outline, none);
      outline-offset: var(${dr}•border•width);
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=radio] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${dr}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${dr}•size);
      min-width: var(${dr}•size);

      border-radius: var(${dr}•border•radius);
      border: var(${dr}•border•width) solid var(${dr}•border•color);
      background: var(${dr}•background);
      color: var(${dr}•color);
      font-weight: var(${dr}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${dr}•text•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${dr}•icon•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,Zf=ar(Oe,["hug","fill"]),Xf=ar(oe,["lg","md"]),Jf=({children:r,label:e,icon:a,...t})=>{const o=r||(0,i.jsx)(re,{icon:a,text:e});return(0,i.jsx)("li",{"arc-radio-bar-option":"","data-is-checked":t?.checked||void 0,children:(0,i.jsx)(Fd,{...t,label:o,layout:"fill",useMask:!1})})},Qf=({children:r,size:e="lg",layout:a="hug",...t})=>(0,i.jsx)("ul",{...t,"arc-radio-bar":"","data-size":e,"data-layout":a,role:"radiogroup",children:r});lr("ArcRadioBar",Yf);var Hd=he(98998),Kr,jr,Ge,$a;function rm(r=!1){if(typeof r!="boolean")throw new Error("defaultValue must be `true` or `false`");const[e,a]=Kr(r),t=jr(()=>{a(!0)},[]),o=jr(()=>{a(!1)},[]),n=jr(()=>{a(c=>!c)},[]);return{value:e,setValue:a,setTrue:t,setFalse:o,toggle:n}}var qe=typeof window<"u"?u.useLayoutEffect:u.useEffect;function Me(r,e,a,t){const o=(0,u.useRef)(e);qe(()=>{o.current=e},[e]),(0,u.useEffect)(()=>{const n=a?.current??window;if(!(n&&n.addEventListener))return;const c=l=>{o.current(l)};return n.addEventListener(r,c,t),()=>{n.removeEventListener(r,c,t)}},[r,a,t])}function wb(r){Me("click",e=>{r(e)})}function Cb(){const[r,e]=Kr(null),a=jr(async t=>{if(!navigator?.clipboard)return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(t),e(t),!0}catch(o){return console.warn("Copy failed",o),e(null),!1}},[]);return[r,a]}function em(r){const[e,a]=Kr(r??0),t=jr(()=>{a(c=>c+1)},[]),o=jr(()=>{a(c=>c-1)},[]),n=jr(()=>{a(r??0)},[r]);return{count:e,increment:t,decrement:o,reset:n,setCount:a}}function am(r,e){const a=Ge(r);qe(()=>{a.current=r},[r]),$a(()=>{if(e===null)return;const t=setInterval(()=>{a.current()},e);return()=>{clearInterval(t)}},[e])}function Ab({countStart:r,countStop:e=0,intervalMs:a=1e3,isIncrement:t=!1}){const{count:o,increment:n,decrement:c,reset:l}=em(r),{value:d,setTrue:h,setFalse:g}=rm(!1),f=jr(()=>{g(),l()},[g,l]),v=jr(()=>{if(o===e){g();return}t?n():c()},[o,e,c,n,t,g]);return am(v,d?a:null),[o,{startCountdown:h,stopCountdown:g,resetCountdown:f}]}function Zn(r){const e=(0,u.useRef)(()=>{throw new Error("Cannot call an event handler while rendering.")});return qe(()=>{e.current=r},[r]),(0,u.useCallback)((...a)=>{var t;return(t=e.current)==null?void 0:t.call(e,...a)},[e])}var Xi=typeof window>"u";function Ji(r,e,a={}){const{initializeWithValue:t=!0}=a,o=(0,u.useCallback)(v=>a.serializer?a.serializer(v):JSON.stringify(v),[a]),n=(0,u.useCallback)(v=>{if(a.deserializer)return a.deserializer(v);if(v==="undefined")return;const b=e instanceof Function?e():e;let m;try{m=JSON.parse(v)}catch($){return console.error("Error parsing JSON:",$),b}return m},[a,e]),c=(0,u.useCallback)(()=>{const v=e instanceof Function?e():e;if(Xi)return v;try{const b=window.localStorage.getItem(r);return b?n(b):v}catch(b){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,b),v}},[e,r,n]),[l,d]=(0,u.useState)(()=>t?c():e instanceof Function?e():e),h=Zn(v=>{Xi&&console.warn(`Tried setting localStorage key \u201C${r}\u201D even though environment is not a client`);try{const b=v instanceof Function?v(c()):v;window.localStorage.setItem(r,o(b)),d(b),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))}catch(b){console.warn(`Error setting localStorage key \u201C${r}\u201D:`,b)}}),g=Zn(()=>{Xi&&console.warn(`Tried removing localStorage key \u201C${r}\u201D even though environment is not a client`);const v=e instanceof Function?e():e;window.localStorage.removeItem(r),d(v),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))});(0,u.useEffect)(()=>{d(c())},[r]);const f=(0,u.useCallback)(v=>{v.key&&v.key!==r||d(c())},[r,c]);return Me("storage",f),Me("local-storage",f),[l,h,g]}var tm=typeof window>"u";function Vd(r,{defaultValue:e=!1,initializeWithValue:a=!0}={}){const t=l=>tm?e:window.matchMedia(l).matches,[o,n]=Kr(()=>a?t(r):e);function c(){n(t(r))}return qe(()=>{const l=window.matchMedia(r);return c(),l.addListener?l.addListener(c):l.addEventListener("change",c),()=>{l.removeListener?l.removeListener(c):l.removeEventListener("change",c)}},[r]),o}var om="(prefers-color-scheme: dark)",nm="usehooks-ts-dark-mode";function Sb(r={}){const{defaultValue:e,localStorageKey:a=nm,initializeWithValue:t=!0}=r,o=Vd(om,{initializeWithValue:t,defaultValue:e}),[n,c]=Ji(a,e??o??!1,{initializeWithValue:t});return qe(()=>{o!==n&&c(o)},[o]),{isDarkMode:n,toggle:()=>{c(l=>!l)},enable:()=>{c(!0)},disable:()=>{c(!1)},set:l=>{c(l)}}}function Ud(r){const e=(0,u.useRef)(r);e.current=r,(0,u.useEffect)(()=>()=>{e.current()},[])}function Xn(r,e=500,a){const t=(0,u.useRef)();Ud(()=>{t.current&&t.current.cancel()});const o=(0,u.useMemo)(()=>{const n=Hd(r,e,a),c=(...l)=>n(...l);return c.cancel=()=>{n.cancel()},c.isPending=()=>!!t.current,c.flush=()=>n.flush(),c},[r,e,a]);return(0,u.useEffect)(()=>{t.current=Hd(r,e,a)},[r,e,a]),o}function zb(r,e,a){const t=a?.equalityFn??((h,g)=>h===g),o=r instanceof Function?r():r,[n,c]=Kr(o),l=Ge(o),d=Xn(c,e,a);return t(l.current,o)||(d(o),l.current=o),[n,d]}function Eb(r,e={}){const{preserveTitleOnUnmount:a=!0}=e,t=Ge(null);qe(()=>{t.current=window.document.title},[]),qe(()=>{window.document.title=r},[r]),Ud(()=>{!a&&t.current&&(window.document.title=t.current)})}function _b(r){const[e,a]=Kr(!1),t=()=>{a(!0)},o=()=>{a(!1)};return Me("mouseenter",t,r),Me("mouseleave",o,r),e}function Ib({threshold:r=0,root:e=null,rootMargin:a="0%",freezeOnceVisible:t=!1,initialIsIntersecting:o=!1,onChange:n}={}){var c;const[l,d]=Kr(null),[h,g]=Kr(()=>({isIntersecting:o,entry:void 0})),f=Ge();f.current=n;const v=((c=h.entry)==null?void 0:c.isIntersecting)&&t;$a(()=>{if(!l||!("IntersectionObserver"in window)||v)return;let $;const w=new IntersectionObserver(_=>{const y=Array.isArray(w.thresholds)?w.thresholds:[w.thresholds];_.forEach(C=>{const S=C.isIntersecting&&y.some(I=>C.intersectionRatio>=I);g({isIntersecting:S,entry:C}),f.current&&f.current(S,C),S&&t&&$&&($(),$=void 0)})},{threshold:r,root:e,rootMargin:a});return w.observe(l),()=>{w.disconnect()}},[l,JSON.stringify(r),e,a,v,t]);const b=Ge(null);$a(()=>{var $;!l&&(($=h.entry)!=null&&$.target)&&!t&&!v&&b.current!==h.entry.target&&(b.current=h.entry.target,g({isIntersecting:o,entry:void 0}))},[l,h.entry,t,v,o]);const m=[d,!!h.isIntersecting,h.entry];return m.ref=m[0],m.isIntersecting=m[1],m.entry=m[2],m}function Tb(){const[r,e]=Kr(!1);return $a(()=>{e(!0)},[]),r}function cm(){const r=Ge(!1);return $a(()=>(r.current=!0,()=>{r.current=!1}),[]),jr(()=>r.current,[])}function jb(r=new Map){const[e,a]=Kr(new Map(r)),t={set:jr((o,n)=>{a(c=>{const l=new Map(c);return l.set(o,n),l})},[]),setAll:jr(o=>{a(()=>new Map(o))},[]),remove:jr(o=>{a(n=>{const c=new Map(n);return c.delete(o),c})},[]),reset:jr(()=>{a(()=>new Map)},[])};return[e,t]}function Rb(r,e,a="mousedown",t={}){Me(a,o=>{const n=o.target;if(!n||!n.isConnected)return;(Array.isArray(r)?r.filter(l=>!!l.current).every(l=>l.current&&!l.current.contains(n)):r.current&&!r.current.contains(n))&&e(o)},void 0,t)}var Kd=typeof window>"u";function Pb(r,e={}){let{initializeWithValue:a=!0}=e;Kd&&(a=!1);const t=jr(d=>{if(e.deserializer)return e.deserializer(d);if(d==="undefined")return;let h;try{h=JSON.parse(d)}catch(g){return console.error("Error parsing JSON:",g),null}return h},[e]),o=jr(()=>{if(Kd)return null;try{const d=window.localStorage.getItem(r);return d?t(d):null}catch(d){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,d),null}},[r,t]),[n,c]=Kr(()=>{if(a)return o()});$a(()=>{c(o())},[r]);const l=jr(d=>{d.key&&d.key!==r||c(o())},[r,o]);return Me("storage",l),Me("local-storage",l),n}var Wd={width:void 0,height:void 0};function Lb(r){const{ref:e,box:a="content-box"}=r,[{width:t,height:o},n]=Kr(Wd),c=cm(),l=Ge({...Wd}),d=Ge(void 0);return d.current=r.onResize,$a(()=>{if(!e.current||typeof window>"u"||!("ResizeObserver"in window))return;const h=new ResizeObserver(([g])=>{const f=a==="border-box"?"borderBoxSize":a==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",v=Gd(g,f,"inlineSize"),b=Gd(g,f,"blockSize");if(l.current.width!==v||l.current.height!==b){const $={width:v,height:b};l.current.width=v,l.current.height=b,d.current?d.current($):c()&&n($)}});return h.observe(e.current,{box:a}),()=>{h.disconnect()}},[a,e,c]),{width:t,height:o}}function Gd(r,e,a){return r[e]?Array.isArray(r[e])?r[e][0][a]:r[e][a]:e==="contentBoxSize"?r.contentRect[a==="inlineSize"?"width":"height"]:void 0}var qd=typeof window>"u";function Mb(r={}){let{initializeWithValue:e=!0}=r;qd&&(e=!1);const a=()=>{if(!qd)return window.screen},[t,o]=Kr(()=>{if(e)return a()}),n=Xn(o,r.debounceDelay);function c(){const l=a(),d=r.debounceDelay?n:o;if(l){const{width:h,height:g,availHeight:f,availWidth:v,colorDepth:b,orientation:m,pixelDepth:$}=l;d({width:h,height:g,availHeight:f,availWidth:v,colorDepth:b,orientation:m,pixelDepth:$})}}return Me("resize",c),qe(()=>{c()},[]),t}var Jn=new Map;function im(r){const e=document.querySelector(`script[src="${r}"]`),a=e?.getAttribute("data-status");return{node:e,status:a}}function Bb(r,e){const[a,t]=Kr(()=>!r||e?.shouldPreventLoad?"idle":typeof window>"u"?"loading":Jn.get(r)??"loading");return $a(()=>{if(!r||e?.shouldPreventLoad)return;const o=Jn.get(r);if(o==="ready"||o==="error"){t(o);return}const n=im(r);let c=n.node;if(c)t(n.status??o??"loading");else{c=document.createElement("script"),c.src=r,c.async=!0,e?.id&&(c.id=e.id),c.setAttribute("data-status","loading"),document.body.appendChild(c);const d=h=>{const g=h.type==="load"?"ready":"error";c?.setAttribute("data-status",g)};c.addEventListener("load",d),c.addEventListener("error",d)}const l=d=>{const h=d.type==="load"?"ready":"error";t(h),Jn.set(r,h)};return c.addEventListener("load",l),c.addEventListener("error",l),()=>{c&&(c.removeEventListener("load",l),c.removeEventListener("error",l)),c&&e?.removeOnUnmount&&(c.remove(),Jn.delete(r))}},[r,e?.shouldPreventLoad,e?.removeOnUnmount,e?.id]),a}var sm=typeof window>"u";function Ob(r={}){const{autoLock:e=!0,lockTarget:a,widthReflow:t=!0}=r,[o,n]=Kr(!1),c=Ge(null),l=Ge(null),d=()=>{if(c.current){const{overflow:g,paddingRight:f}=c.current.style;if(l.current={overflow:g,paddingRight:f},t){const v=c.current===document.body?window.innerWidth:c.current.offsetWidth,b=parseInt(window.getComputedStyle(c.current).paddingRight,10)||0,m=v-c.current.scrollWidth;c.current.style.paddingRight=`${m+b}px`}c.current.style.overflow="hidden",n(!0)}},h=()=>{c.current&&l.current&&(c.current.style.overflow=l.current.overflow,t&&(c.current.style.paddingRight=l.current.paddingRight)),n(!1)};return qe(()=>{if(!sm)return a&&(c.current=typeof a=="string"?document.querySelector(a):a),c.current||(c.current=document.body),e&&d(),()=>{h()}},[e,a,t]),{isLocked:o,lock:d,unlock:h}}var Qi=typeof window>"u";function lm(r,e,a={}){const{initializeWithValue:t=!0}=a,o=(0,u.useCallback)(v=>a.serializer?a.serializer(v):JSON.stringify(v),[a]),n=(0,u.useCallback)(v=>{if(a.deserializer)return a.deserializer(v);if(v==="undefined")return;const b=e instanceof Function?e():e;let m;try{m=JSON.parse(v)}catch($){return console.error("Error parsing JSON:",$),b}return m},[a,e]),c=(0,u.useCallback)(()=>{const v=e instanceof Function?e():e;if(Qi)return v;try{const b=window.sessionStorage.getItem(r);return b?n(b):v}catch(b){return console.warn(`Error reading sessionStorage key \u201C${r}\u201D:`,b),v}},[e,r,n]),[l,d]=(0,u.useState)(()=>t?c():e instanceof Function?e():e),h=Zn(v=>{Qi&&console.warn(`Tried setting sessionStorage key \u201C${r}\u201D even though environment is not a client`);try{const b=v instanceof Function?v(c()):v;window.sessionStorage.setItem(r,o(b)),d(b),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))}catch(b){console.warn(`Error setting sessionStorage key \u201C${r}\u201D:`,b)}}),g=Zn(()=>{Qi&&console.warn(`Tried removing sessionStorage key \u201C${r}\u201D even though environment is not a client`);const v=e instanceof Function?e():e;window.sessionStorage.removeItem(r),d(v),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))});(0,u.useEffect)(()=>{d(c())},[r]);const f=(0,u.useCallback)(v=>{v.key&&v.key!==r||d(c())},[r,c]);return Me("storage",f),Me("session-storage",f),[l,h,g]}function Db(r){const[e,a]=Kr(1),t=e+1<=r,o=e-1>0,n=jr(h=>{const g=h instanceof Function?h(e):h;if(g>=1&&g<=r){a(g);return}throw new Error("Step not valid")},[r,e]),c=jr(()=>{t&&a(h=>h+1)},[t]),l=jr(()=>{o&&a(h=>h-1)},[o]),d=jr(()=>{a(1)},[]);return[e,{goToNextStep:c,goToPrevStep:l,canGoToNextStep:t,canGoToPrevStep:o,setStep:n,reset:d}]}var dm="(prefers-color-scheme: dark)",um="usehooks-ts-ternary-dark-mode";function Nb({defaultValue:r="system",localStorageKey:e=um,initializeWithValue:a=!0}={}){const t=Vd(dm,{initializeWithValue:a}),[o,n]=Ji(e,r,{initializeWithValue:a});return{isDarkMode:o==="dark"||o==="system"&&t,ternaryDarkMode:o,setTernaryDarkMode:n,toggleTernaryDarkMode:()=>{const d=["light","system","dark"];n(h=>{const g=(d.indexOf(h)+1)%d.length;return d[g]})}}}function Fb(r,e){const a=Ge(r);qe(()=>{a.current=r},[r]),$a(()=>{if(!e&&e!==0)return;const t=setTimeout(()=>{a.current()},e);return()=>{clearTimeout(t)}},[e])}function Hb(r){const[e,a]=Kr(!!r),t=jr(()=>{a(o=>!o)},[]);return[e,t,a]}var hm=typeof window>"u";function Vb(r={}){let{initializeWithValue:e=!0}=r;hm&&(e=!1);const[a,t]=Kr(()=>e?{width:window.innerWidth,height:window.innerHeight}:{width:void 0,height:void 0}),o=Xn(t,r.debounceDelay);function n(){(r.debounceDelay?o:t)({width:window.innerWidth,height:window.innerHeight})}return Me("resize",n),qe(()=>{n()},[]),a}const gm=(r,e)=>{const a=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value")?.set;a?a.call(r,e):r.value=e,r.dispatchEvent(new Event("input",{bubbles:!0}))},vm=({defaultValue:r="",value:e,debounceMs:a,inputElementRef:t,onClear:o,onKeyDown:n,onSearch:c})=>{const l=e!==void 0,d=c!==void 0&&a!==void 0,[h,g]=(0,u.useState)(r),f=l?e??"":h,v=(0,u.useRef)(!1),b=Xn(y=>{c?.(y)},a??0),m=(0,u.useCallback)(()=>{b.cancel()},[b]),$=(0,u.useCallback)(y=>{l||g(y)},[l]);(0,u.useEffect)(()=>m,[m]),(0,u.useEffect)(()=>{if(d){if(!v.current){v.current=!0;return}m(),b(f)}},[m,b,f,d]);const w=(0,u.useCallback)(()=>{m();const y=t.current;if(y){gm(y,""),o?.(),y.focus();return}l||g(""),o?.()},[m,t,l,o]),_=(0,u.useCallback)(y=>{n?.(y),!(y.defaultPrevented||y.key!=="Enter"||!c)&&(m(),c(f))},[m,n,c,f]);return{resolvedValue:f,handleValueChange:$,handleClear:w,handleKeyDown:_}},pm=Ti,fm=ji,mm=ar(fd,["outline","solid"]),Yd="Search",bm="Clear search",rs={layout:"hug",size:"inherit",variant:"outline"},$m=({canClear:r,isDisabled:e,onClear:a})=>{if(r)return(0,i.jsx)(Rd,{"aria-label":bm,disabled:e,icon:"fa-regular fa-xmark",onClick:a})},ym=({ariaLabel:r,ariaLabelledBy:e,headerLabel:a})=>r??(!a&&!e?Yd:void 0),Zd=(0,u.forwardRef)(({debounceMs:r,inputProps:e,layout:a=rs.layout,onClear:t,onSearch:o,size:n=rs.size,variant:c=rs.variant,headerLabel:l,headerSlot:d,footerCaption:h,footerSlot:g,onChange:f,...v},b)=>{const{id:m,value:$,defaultValue:w="",onChange:_,onKeyDown:y,placeholder:C=Yd,disabled:S,readOnly:I,required:j,"aria-label":L,"aria-labelledby":D,...z}=e,k=Ir(m,"arc-search"),V=(0,u.useRef)(null),{resolvedValue:U,handleValueChange:Y,handleClear:W,handleKeyDown:or}=vm({defaultValue:w,value:$,debounceMs:r,inputElementRef:V,onClear:t,onKeyDown:y,onSearch:o}),N=!S&&!I&&U.length>0,tr=ym({ariaLabel:L,ariaLabelledBy:D,headerLabel:l}),R=$m({canClear:N,isDisabled:S,onClear:W}),F=M=>{V.current=M,Se(b,M)},H=(M,rr)=>{Y(rr.target.value),_?.(M,rr)};return(0,i.jsx)(Hn,{...v,"arc-search":"",layout:a,size:n,variant:c,ref:F,onChange:f,headerLabel:l,headerSlot:d,inputPrefix:(0,i.jsx)(ir,{icon:"fa-regular fa-search"}),inputAction:R,footerCaption:h,footerSlot:g,inputProps:{...z,id:k,value:U,disabled:S,placeholder:C,readOnly:I,required:j,onChange:H,onKeyDown:or,"aria-disabled":S||void 0,"aria-label":tr,"aria-labelledby":D,"aria-readonly":I||void 0,"aria-required":j||void 0}})});Zd.displayName="ArcSearch";const xm=Ti,km=ji,wm=ar(_r,["outline","solid","plain"]),Xd=()=>typeof globalThis?.CSS?.supports=="function"&&globalThis.CSS.supports("appearance","base-select"),Qn=r=>Array.isArray(r.options),Ct=r=>{const e=r?.variant;return e!=="divider"&&e!=="section-label"},Jd=r=>r?.variant==="section-label"&&!!(r.text||r.icon),Qd=r=>{},ru=(r=[])=>r.flatMap(e=>Qn(e)?e.options:[e]).some(e=>Ct(e)&&e.value===""),eu=r=>{const e=o=>typeof o=="string"&&o.trim().length>0,a=o=>{if(typeof o!="object"||o===null)return;const{name:n}=o;return e(n)?n:void 0};return[r?.text,a(r?.avatar),r?.["aria-label"]].find(e)??"Anonymous"},xo=s`--arc•select`,fe=s`${xo}•picker`,au=s`${fe}•fg`,tu=s`${fe}•bg`,es=s`${xo}•option`,ko=s`${es}•fg`,wo=s`${es}•bg`,Xa=s`${es}•icon`,Cm=s`
  ${au}: currentcolor;
  ${tu}: var(--arc-color-bg-mono);
  ${xo}•placeholder•fg: var(--arc-select-placeholder-color, var(--arc-color-fg-secondary));

  ${fe}•width: auto;
  ${fe}•min•width: 3em;
  ${fe}•border•radius: var(--arc-border-radius-lg);
  ${fe}•shadow: var(--arc-shadow-lg);

  ${ko}: currentcolor;
  ${wo}: transparent;

  ${Xa}•display: none;
  ${Xa}•color: var(${ko});
`,Am=s`
  &[data-layout=fill] {
    ${fe}•width: 100%; /* fallback */
    ${fe}•width: anchor-size(inline);
  }
`,Sm=s`
  [arc-select] ::picker(select) {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-select-transition-duration, 240ms);
    transition-property: display, opacity;
    transition-timing-function: ease-out;
  }

  @supports (overlay: auto) {
    [arc-select] ::picker(select) {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }
  }
`,zm=s`
  [arc-select] {
    ::picker(select) {
      opacity: 0;
    }

    ::picker(select):popover-open {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-select] ::picker(select):popover-open {
      opacity: 0;
    }
  }
`,Em=s`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-select] {
    ${Cm}
    ${Am}
  }

  /* CORE ----------------------------------------------------------• */

  [arc-select] {
    select,
    ::picker(select) {
      appearance: base-select;
    }

    ::picker(select) {
      flex: 1;
      display: var(${fe}•display, none);
      flex-direction: column;
      gap: var(${E}•4);
      border: none;
      color: var(${au});
      width: var(--arc-select-picker-width, var(${fe}•width));
      min-width: var(--arc-select-picker-min-width, var(${fe}•min•width));
      margin: var(--arc-select-picker-margin, var(${E}•4) 0);
      padding: var(--arc-select-picker-padding, var(${E}•4));
      background: var(--arc-select-picker-background, var(${tu}));
      border-radius: var(--arc-select-picker-border-radius, var(${fe}•border•radius));
      box-shadow: var(--arc-select-picker-shadow, var(${fe}•shadow));
    }

    ::picker(select):popover-open {
      ${fe}•display: flex;
    }

    /* Hide default picker icon */
    ::picker-icon {
      display: none;
    }

    select {
      flex: 1;
      align-items: center;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      padding: 0;
      margin: 0;
      padding-inline: var(${p}•12);
      max-width: var(--arc-select-max-width, var(--js•max•width, none));
    }

    [arc-select-button] {
      display: flex;
      align-items: center;
      gap: var(${E}•8);
      width: 100%;
    }

    [arc-select-placeholder] {
      flex: 1;
      color: var(${xo}•placeholder•fg);
    }

    selectedcontent {
      /* Inter-Component Communication -----------------------------• */
      --arc-icon-text-font-weight: normal;
      --arc-icon-text-subtext-display: none;
      --arc-avatar-text-font-weight: normal;
      --arc-avatar-subtext-display: none;
      --arc-avatar-size: var(${p}•24);
      --arc-avatar-initial-font-size: var(${p}•12);

      flex: 1;
      display: flex;
      align-items: center;
      width: 100%;
      min-width: 0;

      [arc-select-icon=selected] {
        display: none;
      }
    }

    /* Hide the cloned <selectedcontent> when the placeholder span drives the trigger. */
    select[data-placeholder] selectedcontent {
      display: none;
    }

    [arc-select-option-group-legend] {
      font-size: var(${p}•12);
      font-weight: var(--arc-font-weight-600);
      color: var(--arc-select-legend-color, var(--arc-color-fg-secondary));
      padding: var(--arc-select-legend-padding, var(${E}•8));
      cursor: default;
    }

    /* Separator above each legend after the first optgroup. */
    optgroup ~ optgroup [arc-select-option-group-legend] {
      border-top: var(${p}•1) solid var(--arc-color-border-mid);
      margin-top: var(${E}•4);
    }

    [arc-select-option] {
      flex: none;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: var(${E}•8);
      width: 100%;
      min-width: 0;
      color: var(${ko});
      background: var(--arc-select-option-background, var(${wo}));
      border-radius: var(--arc-select-option-border-radius, var(--arc-border-radius-md));
      padding: var(--arc-select-option-padding, var(${E}•8));

      &::checkmark {
        display: none;
      }

      &:disabled {
        ${ko}: var(--arc-color-fg-disabled);
        ${wo}: transparent;
        ${Xa}•display: none;
        cursor: var(--arc-select-disabled-cursor, not-allowed);
      }

      &:not(:disabled):hover {
        ${wo}: var(--arc-color-bg-hover-default);
      }

      &:not(:disabled):checked {
        ${wo}: var(--arc-color-bg-selected-default);
        ${Xa}•display: flex;
        ${Xa}•color: var(--arc-select-option-selected-icon-color, var(${ko}));
      }

      [arc-select-icon=selected] {
        display: var(${Xa}•display, none);
        color: var(${Xa}•color, currentcolor);
      }
    }

    @supports not (appearance: base-select) {
      select {
        appearance: none;
        background: transparent;
        outline: none;

        /* caret */
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 11'><polyline points='1 1 10 10 19 1' fill='none' stroke='%23000000' stroke-width='2.5' stroke-linecap='round' /></svg>");
        background-repeat: no-repeat;
        background-size: 0.75em;
        background-origin: padding-box;
        background-position: calc(100% - 1em) center;
        padding-inline-end: 3em;
      }

      select[data-placeholder] {
        color: var(${xo}•placeholder•fg);
      }
    }
  }

  ${Sm}
  ${zm}

}
`,_m=(0,u.forwardRef)(({layout:r="hug",size:e="inherit",variant:a="outline",tag:t="span",items:o,placeholder:n,renderItem:c,headerLabel:l,headerSlot:d,footerCaption:h,footerSlot:g,id:f,value:v,defaultValue:b,required:m,disabled:$,readOnly:w,maxWidth:_,inputProps:y,...C},S)=>{const{name:I,onBlur:j,onChange:L,onFocus:D,onInput:z,"aria-describedby":k,"aria-label":V,"aria-labelledby":U,...Y}=C,W=Ir(f,"arc-select"),or=a==="plain"&&r==="fill"?"hug":r,N=$||void 0,tr=w||void 0,R=m||void 0,F=Xd(),H=a!=="plain"&&!!(l||d),M=a!=="plain"&&!!(h||g),rr=typeof n=="string"&&n.length>0&&!ru(o),er=b??(rr?"":void 0),Z=v??er,hr=rr&&Z==="",P=F&&rr&&Z==="",X=tr&&Z!=null?String(Z):void 0,vr=o.flatMap(G=>Qn(G)?G.options.filter(Ct):Ct(G)?[G]:(Qd(G),[])),pr=new Map(vr.map((G,Rr)=>[G,Rr])),Cr=G=>{const{itemId:Rr,...gr}=G,Nr=zd(go(G));return(0,i.jsx)(Nr,{...gr})},Xr=G=>{const Rr=pr.get(G)??0,gr=G["aria-disabled"]===!0||G.disabled===!0,Nr=typeof G.itemId=="string"&&G.itemId.length>0?G.itemId:Rr,de=String(G?.value??G?.itemId??Rr);return(0,i.jsx)("option",{value:de,disabled:gr||X!==void 0&&de!==X||void 0,"arc-select-option":"",children:F?(0,i.jsxs)(i.Fragment,{children:[c?c(G,Rr):Cr(G),(0,i.jsx)("span",{"arc-select-icon":"selected","aria-hidden":!0,children:(0,i.jsx)(ir,{icon:"fa-regular fa-check arc-fw"})})]}):eu(G)},Nr)},Be=(G,Rr)=>{const gr=G.options.filter(Ct);if(gr.length===0)return null;const Nr=G.options.find(Jd);return(0,i.jsxs)("optgroup",{label:G.label,disabled:G.disabled||void 0,children:[F&&Nr&&(0,i.jsx)("legend",{"arc-select-option-group-legend":"",children:Cr(Nr)}),gr.map(Xr)]},G.itemId??`${G.label}-${Rr}`)};return(0,i.jsxs)(t,{...Y,"arc-select":"","arc-input":"select","data-layout":or,"data-size":e,"data-variant":a,children:[H&&(0,i.jsxs)(Er.Header,{children:[(0,i.jsx)(Er.HeaderLabel,{htmlFor:W,children:l}),!!d&&(0,i.jsx)(Er.Spacer,{}),(0,i.jsx)(Er.HeaderSlot,{children:d})]}),(0,i.jsx)(Er.InputBody,{children:(0,i.jsxs)("select",{...y,name:y?.name??I,onBlur:y?.onBlur??j,onChange:y?.onChange??L,onFocus:y?.onFocus??D,onInput:y?.onInput??z,"aria-describedby":y?.["aria-describedby"]??k,"aria-label":y?.["aria-label"]??V,"aria-labelledby":y?.["aria-labelledby"]??U,value:v,defaultValue:v==null?er:void 0,required:m,disabled:$,ref:S,id:W,"aria-disabled":N,"aria-required":R,"data-readonly":tr,"data-placeholder":hr||void 0,style:{..._?{"--js\u2022max\u2022width":_}:{},...y?.style},children:[(0,i.jsxs)("button",{"arc-select-button":"",children:[P&&(0,i.jsx)(re,{"arc-select-placeholder":"",text:n,overflow:"truncate"}),(0,i.jsx)("selectedcontent",{}),(0,i.jsx)("span",{"aria-hidden":!0,children:(0,i.jsx)(ir,{icon:"fa-regular fa-angle-down arc-fw"})})]}),rr&&(0,i.jsx)("option",{value:"",disabled:!0,hidden:!0,children:n}),o.map((G,Rr)=>Qn(G)?Be(G,Rr):Ct(G)?Xr(G):null)]})}),M&&(0,i.jsxs)(Er.Footer,{children:[(0,i.jsx)(Er.FooterCaption,{children:h}),!!g&&(0,i.jsx)(Er.Spacer,{}),(0,i.jsx)(Er.FooterSlot,{children:g})]})]})});lr("ArcSelect",Em);const Im=ar(oe,["inherit","md","sm"]),Wr={On:"on",Off:"off"},At={Before:"before",After:"after"},Tm=({disabled:r,id:e,name:a,size:t="md",value:o,labelOff:n,labelOn:c,onChange:l,...d})=>{const h=Ir(a,"arc-switch-name"),g=Ir(e?`${e}-off`:void 0,"arc-switch-off"),f=Ir(e?`${e}-on`:void 0,"arc-switch-on"),v=y=>{if(y.code==="Space"){y.preventDefault(),y.stopPropagation();const C=o===Wr.On?Wr.Off:Wr.On;l?.({value:C},y)}},b=y=>{const C={on:Bt(c),off:Bt(n)};return C?.on&&C?.off?C[y]:!C?.on&&C?.off?`${C?.off}: ${y}`:C?.on&&!C?.off?`${C?.on}: ${y}`:C[y]},m=(0,i.jsxs)(xn,{type:"switch",onKeyDown:v,children:[(0,i.jsx)(ao,{type:"switch",name:h,id:g,value:Wr.Off,checked:o===Wr.Off,disabled:r,"aria-label":b(Wr.Off)?.trim(),onChange:l}),(0,i.jsx)(ao,{type:"switch",name:h,id:f,value:Wr.On,checked:o===Wr.On,disabled:r,"aria-label":b(Wr.On)?.trim(),onChange:l}),(0,i.jsx)("span",{"data-element":"mask"})]}),$=!c&&o===Wr.Off?f:g,w=!n&&o===Wr.On?g:f,_=!!(c||n)&&(0,i.jsxs)(i.Fragment,{children:[!!n&&(0,i.jsx)(za,{htmlFor:$,"arc-switch-label":c?Wr.Off:"",children:(0,i.jsx)(Ka,{children:n})}),m,!!c&&(0,i.jsx)(za,{htmlFor:w,"arc-switch-label":n?Wr.On:"",children:(0,i.jsx)(Ka,{children:c})})]});return(0,i.jsx)("span",{...d,"arc-switch":"","data-state":o,"data-size":t,role:"radiogroup",children:_||m})},Dr=s`--arc•switch`,xr=s`${Dr}•knob`,jm=s`
@layer arc-components {

  [arc-switch] {
    ${Dr}•background: var(--arc-color-alpha-white-100);
    ${xr}•shadow: var(--arc-shadow-md);

    &:has(:disabled) {
      ${Dr}•background: var(--arc-color-alpha-white-70);
      ${xr}•shadow: var(--arc-shadow-none);

      [arc-switch-label] {
        --arc-label-cursor: not-allowed;
        --arc-label-opacity: var(--arc-alpha-60);
      }
    }

    /* Uses Neutral-ish Colors */
    &[data-state=off] {
      ${B}•background: var(--arc-color-bg-neutral-subtle);
      ${B}•border•color: var(--arc-color-border-stark);
      ${xr}•border•color: var(--arc-color-border-on-stark);
      ${xr}•color: var(--arc-color-fg-on-heavy);

      &:not(:has(:disabled)):hover {
        ${B}•border•color: var(--arc-color-border-heavy);
        ${xr}•border•color: var(--arc-color-border-heavy);
      }

      &:has(:disabled) {
        ${B}•background: var(--arc-color-bg-disabled);
        ${B}•border•color: var(--arc-color-border-disabled);
        ${xr}•border•color: var(--arc-color-border-on-stark);
        ${xr}•color: var(--arc-color-bg-tertiary);
      }
    }

    /* Uses Theme Colors */
    &[data-state=on] {
      ${B}•background: var(--arc-color-bg-theme-heavy);
      ${B}•border•color: var(--arc-color-border-theme-heavy);
      ${xr}•border•color: var(--arc-color-border-theme-heavy);
      ${xr}•color: var(--arc-color-fg-on-theme-heavy);

      &:not(:has(:disabled)):hover {
        ${B}•opacity: var(--arc-alpha-60);
      }

      &:has(:disabled) {
        ${B}•opacity: var(--arc-alpha-30);
      }
    }

    /* SIZES  ------------------------------------------------------• */
    &[data-size=inherit] {
      ${Dr}•font•size: 1em;
      ${Dr}•width: 2.5em;
      ${Dr}•height: 1.5em;
      ${Dr}•gap: 0.5em;
      ${xr}•size: 1.5em;
      ${xr}•x•shift: 0.25em;
    }

    &[data-size=md] { /* @default */
      ${Dr}•font•size: var(${p}•14);
      ${Dr}•width: var(${p}•40);
      ${Dr}•height: var(${p}•24);
      ${Dr}•gap: var(${p}•8);
      ${xr}•x•shift: var(${p}•4);
      ${xr}•size: var(${p}•24);
    }

    &[data-size=sm] {
      ${Dr}•font•size: var(${p}•12);
      ${Dr}•width: var(${p}•30);
      ${Dr}•height: var(${p}•14);
      ${Dr}•gap: var(${p}•8);
      ${xr}•x•shift: var(${p}•1);
      ${xr}•size: var(${p}•16);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${B}•border•radius: var(--arc-border-radius-pill);
    ${B}•width: var(${Dr}•width);
    ${B}•height: var(${Dr}•height);
    ${B}•x•shift: var(${xr}•x•shift);
    ${B}•size: var(${xr}•size);

    /* for: ArcLabel */
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask to
                                                    stay inline with the label text
                                                    regardless of applied line-height */

    /* KNOB PLACEMENT ----------------------------------------------• */
    &[data-state=off] {
      ${xr}•translate: calc(-100% + var(${xr}•x•shift)) -50%;
    }

    &[data-state=on] {
      ${xr}•translate: calc(0% - var(${xr}•x•shift)) -50%;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-switch]:not([hidden]) {
    font-size: var(--arc-switch-font-size, var(${Dr}•font•size));
    display: var(--arc-switch-display, inline-flex);
    align-items:  var(--arc-switch-align-items, center);
    gap: var(--arc-switch-gap, var(${Dr}•gap));
    user-select: none;

    [arc-switch-label] {
      font-size: inherit;
      hyphens: auto;
    }

    [arc-input-type=switch]:where(:not(:checked)) {
      ${B}•z•index: 1;
    }

    [arc-input-mask-wrapper] {
      height: 1.25em;
    }

    /* the knob */
    [data-element=mask] {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: var(${xr}•translate);

      display: inline-flex;
      width: var(${xr}•size);
      height: var(${xr}•size);

      transition-duration: 100ms;
      transition-behavior: allow-discrete;
      transition-timing-function: ease-in-out;
      transition-property:
        opacity,
        background,
        color,
        border-color,
        outline,
        translate;

      background: var(${xr}•color);
      box-shadow: var(${xr}•shadow);
      border: var(${B}•border•width) solid var(${xr}•border•color);
      border-radius: var(--arc-border-radius-circle);
      pointer-events: none;
    }
  }

}
`,Rm=({disabled:r,id:e,name:a,size:t="md",value:o,label:n,labelPosition:c=At.After,onChange:l,labelOff:d,labelOn:h,...g})=>{const f=Ir(a,"arc-switch-name"),v=Ir(e,"arc-switch"),b=(w,_)=>{const y=w.checked?Wr.On:Wr.Off;l?.({...w,value:y},_)};!n&&(h||d)&&(n=h||d,c=h?At.After:At.Before);const m=(0,i.jsxs)(xn,{type:"checkbox",children:[(0,i.jsx)(ao,{type:"checkbox",name:f,id:v,checked:o===Wr.On,disabled:r,role:"switch","aria-checked":o===Wr.On,"aria-label":n?void 0:"Toggle switch",tabIndex:0,onChange:b}),(0,i.jsx)("span",{"data-element":"mask","aria-hidden":"true",tabIndex:-1})]}),$=(0,i.jsx)(za,{htmlFor:v,"arc-switch-label":c,children:(0,i.jsx)(Ka,{children:n})});return d&&h?(0,i.jsx)(Tm,{...g,disabled:r,id:e,name:a,labelOff:d,labelOn:h,size:t,value:o,onChange:l}):(0,i.jsxs)("span",{...g,"arc-switch":"","data-state":o,"data-size":t,"data-label-position":c,role:"presentation","aria-live":"off",children:[n&&c===At.Before&&$,m,n&&c===At.After&&$]})};lr("ArcSwitch",jm);const Pm=["title","heading","subheading","body"],ou=["h1","h2","h3","h4","h5","h6"],nu=["code","div","li","p","pre","span"],cu=[...ou,...nu],Lm=[...sa],Mm=["title-inherit","title-lg","title-md","title-sm"],Bm=["heading-inherit","heading-lg","heading-md","heading-sm"],Om=["subheading-inherit","subheading-lg","subheading-md","subheading-sm"],Dm=ar(_r,["inherit","primary","primary-inverse"]),Nm=["body-inherit","body-lg","body-md","body-sm","body-xs"],Fm=Jr(_r,["inherit","primary","secondary","primary-inverse","secondary-inverse","critical","warning","success","info"]),Hm=ar(Mo,["inherit","start","center","justify","end"]),Vm=ar(Bo,["inherit","loose","standard","tight"]),Um={h1:"title",h2:"heading",h3:"heading",h4:"subheading",h5:"subheading",h6:"subheading",p:"body",span:"body",div:"body",code:"body",pre:"body",li:"body"},Km=r=>{const{align:e,lineHeight:a,size:t,variant:o,scheme:n="auto",isMonospace:c,tag:l,...d}=r,h=Um?.[l]??"body",g=t?.includes("inherit")?t?.split("-")?.[0]:t,f=o?.endsWith("-inverse");let v;return n!=="auto"?v=n:f&&(v=void 0),{...d,"arc-text":g||h,"arc-scheme":v,"data-is-monospace":c?"":void 0,"data-align":e?.includes("inherit")?void 0:e,"data-variant":o?.includes("inherit")?void 0:o,"data-line-height":a?.includes("inherit")?void 0:a}},ya=s`--arc•text`,as=s`${ya}•font`,St=s`${ya}•align`,oa=s`${ya}fg`,iu=s`${ya}•flex`,su=s`${ya}•hyphens`,Co=s`${ya}•letterspacing`,na=s`${ya}•lineheight`,lu=s`${ya}•opacity`,du=s`${ya}•whitespace`,Ja=s`${as}•family`,Or=s`${as}•size`,zt=s`${as}•weight`,Wm=s`
@layer arc-components {

[arc-text] {
  /* SETUP ---------------------------------------------------------• */
  ${St}: unset;
  ${oa}: unset;
  ${iu}: unset;
  ${su}: auto;
  ${Co}: unset;
  ${na}: unset;
  ${lu}: unset;
  ${du}: unset;

  ${Ja}: unset;
  ${Or}: unset;
  ${zt}: unset;

  /* LINE HEIGHT ---------------------------------------------------• */

  &[data-line-height=standard] {
    ${na}: var(--arc-line-height-standard);
  }

  &[data-line-height=loose] {
    ${na}: var(--arc-line-height-loose);
  }

  &[data-line-height=tight] {
    ${na}: var(--arc-line-height-tight);
  }

  /* ALIGNMENT -----------------------------------------------------• */

  &[data-align=start] {
    ${St}: start;
  }

  &[data-align=center] {
    ${St}: center;
  }

  &[data-align=justify] {
    ${St}: justify;
  }

  &[data-align=end] {
    ${St}: end;
  }

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=primary] {
    ${oa}: var(--arc-color-fg-primary);
  }

  /* @deprecated */
  &[data-variant=primary-inverse] {
    ${oa}: var(--arc-color-fg-on-mono-inverse);
  }

  &[data-variant=secondary] {
    ${oa}: var(--arc-color-fg-secondary);
  }

  /* @deprecated - 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  &[data-variant=secondary-inverse] {
    ${oa}: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 61.2%, transparent);
  }

  &[data-variant=critical] {
    ${oa}: var(--arc-color-fg-critical-mid);
  }

  &[data-variant=warning] {
    ${oa}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=success] {
    ${oa}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=info] {
    ${oa}: var(--arc-color-fg-info-stark);
  }

}

/* FONT PROPERTIES -------------------------------------------------• */

[arc-text^=title] {
  ${Ja}: var(--arc-font-family-title);
  ${zt}: var(--arc-font-weight-title);
  ${Co}: var(--arc-letter-spacing-title);
  ${na}: var(--arc-line-height-title);

  ${Or}: 2em; /* @default title • 32÷16*1em • same as 'title-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${Or}: var(--arc-font-size-title-lg);
  }

  &:where([arc-text*=-md]) {
    ${Or}: var(--arc-font-size-title-md);
  }

  &:where([arc-text*=-sm]) {
    ${Or}: var(--arc-font-size-title-sm);
  }
}

[arc-text^=heading] {
  ${Ja}: var(--arc-font-family-heading);
  ${zt}: var(--arc-font-weight-heading);
  ${Co}: var(--arc-letter-spacing-heading);
  ${na}: var(--arc-line-height-heading);

  ${Or}: 1.25em; /* @default heading • 20÷16*1em • same as 'heading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${Or}: var(--arc-font-size-heading-lg);
  }

  &:where([arc-text*=-md]) {
    ${Or}: var(--arc-font-size-heading-md);
  }

  &:where([arc-text*=-sm]) {
    ${Or}: var(--arc-font-size-heading-sm);
  }
}

[arc-text^=subheading] {
  ${Ja}: var(--arc-font-family-subheading);
  ${zt}: var(--arc-font-weight-subheading);
  ${Co}: unset;
  ${na}: var(--arc-line-height-subheading);

  ${Or}: 0.875em; /* @default subheading • 14÷16*1em • same as 'subheading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${Or}: var(--arc-font-size-subheading-lg);
  }

  &:where([arc-text*=-md]) {
    ${Or}: var(--arc-font-size-subheading-md);
  }

  &:where([arc-text*=-sm]) {
    ${Or}: var(--arc-font-size-subheading-sm);
  }
}

[arc-text^=body] {
  ${Ja}: var(--arc-font-family-body);
  ${zt}: var(--arc-font-weight-body);
  ${na}: var(--arc-line-height-body);
  ${Or}: 0.875em; /* @default body • 14÷16*1em • same as 'body-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${Or}: var(--arc-font-size-body-lg);
  }

  &:where([arc-text*=-md]) {
    ${Or}: var(--arc-font-size-body-md);
  }

  &:where([arc-text*=-sm]) {
    ${Or}: var(--arc-font-size-body-sm);
  }

  &:where([arc-text*=-xs]) {
    ${Or}: var(--arc-font-size-body-xs);
  }
}

[arc-text]:where(pre, code) {
  ${Or}: 1em;
}

[arc-text]:where(pre, code, [data-is-monospace]) {
  ${Ja}: var(--arc-font-family-mono);
  ${na}: var(--arc-line-height-mono);
}


/* CORE STYLES -----------------------------------------------------• */

[arc-text] {
  /* conveniences for element properties */
  flex: var(--arc-text-flex, var(${iu}));
  hyphens: var(--arc-text-hyphens, var(${su})); /* not unset as fallback so text-breaks by default */
  opacity: var(--arc-text-opacity, var(${lu}));
  text-align: var(--arc-text-align, var(${St}));
  white-space: var(--arc-text-white-space, var(${du}));

  color: var(--arc-text-color, var(${oa}));

  font-size: var(--arc-text-font-size, var(${Or}));
  font-family: var(--arc-text-font-family, var(${Ja}));
  font-weight: var(--arc-text-font-weight, var(${zt}));
  line-height: var(--arc-text-line-height, var(${na}));
  letter-spacing: var(--arc-text-letter-spacing, var(${Co}));

  font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
}

}
`,Gm=r=>(0,u.forwardRef)((e,a)=>(0,u.createElement)(r,{...Km({...e,tag:r}),ref:a})),qm=[...cu].reduce((r,e)=>({...r,[e]:Gm(e)}),{});lr("Arc",Wm);const Ym=ar(_r,["common","ai","critical"]),uu=[...sa],hu=["default","success","warning","error"],gu=ar(oe,["inherit","md"]),vu=ar(_r,["common"]),pu=[...Pa],Zm=[...rt],fu=["top-left","top-center","top-right","center","bottom-left","bottom-center","bottom-right"],Xm=Ym.filter(r=>r!=="critical"),mu={size:gu[1],variant:vu[0],scheme:uu[2],popover:pu[2],placement:fu[4],severity:hu[0],showDismiss:!0},bu=(r,e="toggle")=>{const a=document.getElementById(r);({toggle:()=>a?.togglePopover(),show:()=>a?.showPopover(),hide:()=>a?.hidePopover()})[e]()},$u=s`--arc•progress`,Jm=s`${$u}•bar`,Qm=s`${$u}•value`,yu=s`${Jm}•bg`,Ao=s`${Qm}•bg`,rb=s`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${E0}

  [arc-progress-bar] {
    ${yu}: var(--arc-color-alpha-subtle);
    ${Ao}: var(--arc-color-bg-brand-stark);

    &[data-variant=ai] {
      ${Ao}: var(--arc-progress-bar-gradient-ai-200);
    }

    &[data-variant=critical] {
      ${Ao}: var(--arc-color-bg-critical-mid);
    }
  }

  [arc-progress-bar] {
    appearance: none;
    width: 100%;
    height: var(${p}•8);

    /* firefox needs these at this level, other browsers can use these too */
    background: var(--arc-progress-bar-background, var(${yu}));
    border-radius: var(--arc-border-radius-pill);
    border: none;

    /* turn off the default bar background for other browsers */
    &::-webkit-progress-bar { background: none; }

    /* firefox's progress-value bar */
    &::-moz-progress-bar {
      border-radius: var(--arc-border-radius-pill);
      background: var(--arc-progress-bar-value-background, var(${Ao}));
    }

    /* all the others' progress-value bar */
    &::-webkit-progress-value {
      border-radius: var(--arc-border-radius-pill);
      background: var(--arc-progress-bar-value-background, var(${Ao}));
    }
  }

}
`,eb=({progress:r=0,variant:e="common",...a})=>(0,i.jsxs)("progress",{...a,"arc-progress-bar":"","data-variant":e,value:r,max:a.max||100,"aria-valuenow":r,"aria-valuemax":a.max||100,children:[r,"% "]});lr("ArcProgressBar",rb);const ca=s`--arc•toast`,rc=s`${ca}•content`,xu=s`${ca}•color`,ku=s`${ca}•background`,So=s`${ca}•icon•color`,zo=s`${ca}•transition`,ab=s`
@layer arc-components {

  [arc-toast] {
    ${rc}•gap: var(${E}•2);
    ${zo}•duration: 300ms;
    ${So}: currentcolor;

    /* SIZES -------------------------------------------------------• */
    &[data-size=md] { /* @default */
      ${ca}•font•size: var(${p}•16);
      ${rc}•font•size: var(${p}•14);
    }

    &[data-size=inherit] {
      ${ca}•font•size: 1em;
      ${rc}•font•size: 0.875em;
    }

    /* STATES ------------------------------------------------------• */
    &[data-severity=error] {
      ${So}: var(--arc-color-fg-critical-mid);
    }

    &[data-severity=success] {
      ${So}: var(--arc-color-fg-success-mid);
    }

    &[data-severity=warning] {
      ${So}: var(--arc-color-fg-warning-mid);
    }

    /* VARIANTS ----------------------------------------------------• */
    &[data-variant=common] { /* @default */
      ${ku}: var(--arc-color-bg-mono);
      ${xu}: var(--arc-color-fg-primary);
    }

    /* PLACEMENTS --------------------------------------------------• */
    &[data-placement*=top-] { inset-block-start: var(--arc-toast-inset-block-start, 0); }
    &[data-placement*=bottom-] { inset-block-end: var(--arc-toast-inset-block-end, 0); }
    &[data-placement*=-left] { inset-inline-start: var(--arc-toast-inset-inline-start, 0); }
    &[data-placement*=-right] { inset-inline-end: var(--arc-toast-inset-inline-end, 0); }
    &[data-placement*=-center] { inset-inline-start: var(--arc-toast-inset-inline-start, 50%); translate: -50% 0; }
    &[data-placement=center] { inset: var(--arc-toast-inset, 0); margin: var(--arc-toast-offset, auto); }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-toast] {
    inset: var(--arc-toast-inset, auto);
    margin: var(--arc-toast-offset, var(${E}•16)); /* @note: '-offset' here is legacy variable name */
    align-items: center;

    font-size: var(${ca}•font•size); /* @note: see [arc-toast-content] for actual font-size via the [data-size] attribute */

    color: var(--arc-toast-color, var(${xu}));
    background-color: var(--arc-toast-background, var(${ku}));
    border-radius: var(--arc-toast-border-radius, var(--arc-border-radius-lg));
    padding: var(--arc-toast-padding, var(${E}•12) var(${E}•12) var(${E}•12) var(${E}•16));
    box-shadow: var(--arc-shadow-lg);
    border: none;

    max-width: var(--arc-toast-max-width, 40em);
    min-width: var(--arc-toast-min-width, 12em);
    min-height: var(--arc-toast-min-height, var(${ca}•min•height, 3.5em));

    &:has([arc-toast-heading] + [arc-toast-subtext]) {
      ${ca}•min•height: 5em;
    }

    [arc-toast-content-grid] {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: var(${E}•8) var(${E}•16);
    }

    [arc-toast-body] {
      display: flex;
      align-items: baseline;
      gap: var(${E}•8);
      padding: var(${E}•4) 0; /* vertical padding to align with action button text */
      min-width: 14em;

      p {
        margin: 0;
      }
    }

    [arc-toast-icon] {
      --arc-icon-color: var(--arc-toast-icon-color, var(${So}));

      height: 1lh;
      padding: 0 var(${E}•2);
    }

    [arc-toast-content] {
      flex: 1;

      font-size: var(--arc-toast-font-size, var(${rc}•font•size));
      line-height: var(--arc-line-height-loose);
      hyphens: auto;

      display: block;

      &:has([arc-toast-heading] + [arc-toast-subtext]) {
        display: flex;
        flex-direction: column;
        gap: var(${E}•2);
      }
    }

    [arc-toast-actions] {
      align-self: baseline;

      display: flex;
      align-items: center;
      gap: 0.5em;
    }

    [arc-toast-progress-bar] {
      grid-column: 1 / -1;
    }
  }

  /* POPOVER + state -----------------------------------------------• */

  [arc-toast] {
    opacity: 0;
    content-visibility: hidden;
    transition:
      display var(${zo}•duration) allow-discrete,
      overlay var(${zo}•duration) allow-discrete,
      content-visibility var(${zo}•duration) allow-discrete,
      opacity var(${zo}•duration);
  }

  [arc-toast]:popover-open {
    display: flex;
    opacity: 1;
    content-visibility: visible;
  }

  @starting-style {
    [arc-toast]:popover-open {
      opacity: 0;
      content-visibility: hidden;
    }
  }
}
`,wu=({id:r,children:e,icon:a,heading:t,subtext:o,dismissProps:n,showDismiss:c=!0,onClose:l,actionSlot:d,size:h="md",variant:g="common",scheme:f=mu.scheme,placement:v="bottom-left",getToastId:b,progressBarProps:m,severity:$,...w})=>{const _=()=>{l?.()},y=f==="auto"?void 0:f,C=!!d||c,S=Ir(r,"arc-toast"),{variant:I,hierarchy:j,...L}=n||{};(0,u.useEffect)(()=>{b?.(S)},[b,S]);const D=wc(a);return(0,i.jsx)("div",{...w,"arc-toast":"","arc-scheme":y,"data-size":h,"data-variant":g,"data-placement":v,"data-severity":$||void 0,id:S,children:(0,i.jsxs)("div",{"arc-toast-content-grid":"",children:[(0,i.jsxs)("div",{"arc-toast-body":"",children:[a&&(0,i.jsx)(ir,{icon:D,"arc-toast-icon":""}),(0,i.jsx)("div",{"arc-toast-content":"",children:e||(0,i.jsxs)(i.Fragment,{children:[t&&(0,i.jsx)("header",{"arc-toast-heading":"",children:(0,i.jsx)("strong",{children:t})}),o&&(0,i.jsx)("p",{"arc-toast-subtext":"",children:o})]})})]}),C&&(0,i.jsxs)("div",{"arc-toast-actions":"",children:[d,c&&(0,i.jsx)(Ar,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:"common",hierarchy:"tertiary",size:"md",shape:"square","aria-label":"Dismiss",...L,popoverTarget:S,onClick:_})]}),m&&(0,i.jsx)(eb,{...m,variant:$==="error"?"critical":m.variant,"arc-toast-progress-bar":""})]})})};wu.handleToast=bu,lr("ArcToast",ab);var Eo;(function(r){r.None="none",r.Persistent="localStorage",r.Temporary="sessionStorage"})(Eo||(Eo={}));const tb=(r,e,a)=>{const[t,o]=(0,u.useState)(e),[n,c]=lm(r,e),[l,d]=Ji(r,e);return a===Eo.Temporary?[n,c]:a===Eo.Persistent?[l,d]:[t,o]},ob=["auto","hex","hexa","rgb","hsl","oklch"],nb=()=>typeof DOMRect<"u"?new DOMRect:{x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0,toJSON:()=>({x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0})}}}]);
