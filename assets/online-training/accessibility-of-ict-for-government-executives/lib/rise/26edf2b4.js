(globalThis.wpRiseJsonp=globalThis.wpRiseJsonp||[]).push([["defaultVendors-node_modules_pnpm_articulate_design-system_1_30_1__articulate_design-system-to-268ab2"],{57267(bd){var On="Expected a function",na=NaN,Na="[object Symbol]",Nn=/^\s+|\s+$/g,Ii=/^[-+]0x[0-9a-f]+$/i,xo=/^0b[01]+$/i,Lt=/^0o[0-7]+$/i,Yr=parseInt,Mt=typeof globalThis=="object"&&globalThis&&globalThis.Object===Object&&globalThis,ca=typeof self=="object"&&self&&self.Object===Object&&self,Bn=Mt||ca||Function("return this")(),Fn=Object.prototype,ke=Fn.toString,Za=Math.max,Hn=Math.min,ko=function(){return Bn.Date.now()};function wo(Mr,we,ia){var Ba,Qa,$r,Wr,Ae,Fa,sa=0,Gn=!1,ht=!1,wa=!0;if(typeof Mr!="function")throw new TypeError(On);we=Un(we)||0,Ja(ia)&&(Gn=!!ia.leading,ht="maxWait"in ia,$r=ht?Za(Un(ia.maxWait)||0,we):$r,wa="trailing"in ia?!!ia.trailing:wa);function Qe(l){var Aa=Ba,et=Qa;return Ba=Qa=void 0,sa=l,Wr=Mr.apply(et,Aa),Wr}function i(l){return sa=l,Ae=setTimeout(rt,we),Gn?Qe(l):Wr}function d(l){var Aa=l-Fa,et=l-sa,Xn=we-Aa;return ht?Hn(Xn,$r-et):Xn}function pt(l){var Aa=l-Fa,et=l-sa;return Fa===void 0||Aa>=we||Aa<0||ht&&et>=$r}function rt(){var l=ko();if(pt(l))return jt(l);Ae=setTimeout(rt,d(l))}function jt(l){return Ae=void 0,wa&&Ba?Qe(l):(Ba=Qa=void 0,Wr)}function Kn(){Ae!==void 0&&clearTimeout(Ae),sa=0,Ba=Fa=Qa=Ae=void 0}function Wn(){return Ae===void 0?Wr:jt(ko())}function So(){var l=ko(),Aa=pt(l);if(Ba=arguments,Qa=this,Fa=l,Aa){if(Ae===void 0)return i(Fa);if(ht)return Ae=setTimeout(rt,we),Qe(Fa)}return Ae===void 0&&(Ae=setTimeout(rt,we)),Wr}return So.cancel=Kn,So.flush=Wn,So}function Ja(Mr){var we=typeof Mr;return!!Mr&&(we=="object"||we=="function")}function Ao(Mr){return!!Mr&&typeof Mr=="object"}function Vn(Mr){return typeof Mr=="symbol"||Ao(Mr)&&ke.call(Mr)==Na}function Un(Mr){if(typeof Mr=="number")return Mr;if(Vn(Mr))return na;if(Ja(Mr)){var we=typeof Mr.valueOf=="function"?Mr.valueOf():Mr;Mr=Ja(we)?we+"":we}if(typeof Mr!="string")return Mr===0?Mr:+Mr;Mr=Mr.replace(Nn,"");var ia=xo.test(Mr);return ia||Lt.test(Mr)?Yr(Mr.slice(2),ia?2:8):Ii.test(Mr)?na:+Mr}bd.exports=wo},89338(bd,On,na){"use strict";na.r(On),na.d(On,{ARC_DROPDOWN_SUBMENU_OMIT_KEYS:()=>Wh,ARC_MENU_DELAY_MS:()=>200,Arc:()=>jk,ArcAbstractFlexLayouts:()=>ia,ArcAbstractGapSizes:()=>Vn,ArcAbstractIconSizes:()=>Ao,ArcAbstractOrientations:()=>Ba,ArcAbstractPopoverActions:()=>Ja,ArcAbstractPopoverModes:()=>wo,ArcAbstractTextLayouts:()=>we,ArcAbstractTextOverflows:()=>Mr,ArcAbstractTextSizes:()=>Un,ArcAvatar:()=>rc,ArcAvatarColors:()=>Ld,ArcAvatarColorsReserved:()=>Tg,ArcAvatarOverflow:()=>cm,ArcAvatarOverflowSizes:()=>Dg,ArcAvatarPile:()=>gv,ArcAvatarPileSizes:()=>jg,ArcAvatarSizes:()=>Pg,ArcAvatarText:()=>ec,ArcAvatarTextGapSizes:()=>Rg,ArcAvatarTextOverflows:()=>Lg,ArcAvatarTextSizes:()=>Mg,ArcBadge:()=>xm,ArcBadgeColors:()=>gm,ArcBadgeContrasts:()=>bm,ArcBadgeCount:()=>Tm,ArcBadgeCountColors:()=>vm,ArcBadgeCountContrasts:()=>zm,ArcBadgeCountShapes:()=>_m,ArcBadgeCountSizes:()=>Cm,ArcBadgeCountVariants:()=>Em,ArcBadgeLayouts:()=>mm,ArcBadgeSizes:()=>fm,ArcBadgeVariants:()=>$m,ArcBanner:()=>Xm,ArcBannerActionPlacements:()=>Hm,ArcBannerAlignments:()=>Vm,ArcBannerDefaults:()=>nt,ArcBannerDensities:()=>Bm,ArcBannerLayouts:()=>Fm,ArcBannerSchemes:()=>Um,ArcBannerVariants:()=>Km,ArcButton:()=>Or,ArcButtonHierarchies:()=>xu,ArcButtonLayouts:()=>hf,ArcButtonPopoverActions:()=>gf,ArcButtonSchemes:()=>fs,ArcButtonShadows:()=>pf,ArcButtonShapes:()=>df,ArcButtonSizes:()=>uf,ArcButtonVariants:()=>yu,ArcCheckbox:()=>Rs,ArcCheckboxBar:()=>sb,ArcCheckboxBarLayouts:()=>nb,ArcCheckboxBarOption:()=>Xu,ArcCheckboxBarSizes:()=>cb,ArcCheckboxBarVariants:()=>ib,ArcCheckboxLayouts:()=>eb,ArcCheckboxSizes:()=>ab,ArcCheckboxVariants:()=>tb,ArcChip:()=>wb,ArcChipDefaults:()=>Ns,ArcChipSizes:()=>yb,ArcChipVariants:()=>$b,ArcColorAllTools:()=>_b,ArcColorGradientTools:()=>Bc,ArcColorPalette:()=>vn,ArcColorPaletteAddFlows:()=>Eb,ArcColorPicker:()=>Pa,ArcColorPickerDefaults:()=>Je,ArcColorPickerModes:()=>Ab,ArcColorPickerPanels:()=>Sb,ArcColorSimpleTools:()=>qu,ArcColorSolidTools:()=>Bs,ArcColorSwatch:()=>gn,ArcColorSwatchKinds:()=>Cb,ArcColorUnsetTogglePlacements:()=>zb,ArcColorValueFormats:()=>Kk,ArcDropdownMenu:()=>dn,ArcIcon:()=>Sr,ArcIconAvatar:()=>cx,ArcIconAvatarColors:()=>ox,ArcIconAvatarSizes:()=>nx,ArcIconAvatarVariants:()=>tx,ArcIconText:()=>ie,ArcIconTextVariants:()=>Bv,ArcInputAction:()=>gp,ArcLabel:()=>yt,ArcLabelContent:()=>xt,ArcLabelLayouts:()=>Ym,ArcLink:()=>dx,ArcLinkVariants:()=>lx,ArcModal:()=>Tx,ArcModalAlert:()=>Rx,ArcModalAlertDefaults:()=>Xa,ArcModalAlertVariants:()=>gx,ArcModalBackdropColors:()=>vx,ArcModalBodyPaddings:()=>fx,ArcModalCloseReasons:()=>bx,ArcModalCommonDefaults:()=>Ne,ArcModalCommonVariants:()=>hx,ArcModalConfirm:()=>xp,ArcModalConfirmDefaults:()=>ut,ArcModalConfirmVariants:()=>px,ArcModalSchemes:()=>ux,ArcModalSizes:()=>mx,ArcNavList:()=>Fx,ArcNavListDensities:()=>Bx,ArcNavListHierarchies:()=>Ox,ArcNavListOrientations:()=>Nx,ArcPopover:()=>ga,ArcPopoverActions:()=>vv,ArcPopoverAnchors:()=>ac,ArcPopoverBoundaries:()=>Qi,ArcPopoverButton:()=>Uo,ArcPopoverDefaults:()=>Me,ArcPopoverDensities:()=>Wd,ArcPopoverModes:()=>Zi,ArcPopoverSchemes:()=>Ji,ArcPopoverVariants:()=>Kd,ArcPopoverVariantsWithOutline:()=>fv,ArcRadio:()=>Y0,ArcRadioBar:()=>ap,ArcRadioBarLayouts:()=>Sy,ArcRadioBarOption:()=>Vl,ArcRadioBarSizes:()=>Cy,ArcRadioBarVariants:()=>Ey,ArcRadioLayouts:()=>ky,ArcRadioSizes:()=>wy,ArcSVGGradientDef:()=>Nd,ArcSearch:()=>Ip,ArcSearchLayouts:()=>tk,ArcSearchSizes:()=>ok,ArcSearchVariants:()=>nk,ArcSelect:()=>mk,ArcSelectLayouts:()=>lk,ArcSelectSizes:()=>dk,ArcSelectVariants:()=>uk,ArcSlider:()=>Tl,ArcSliderLabelPlacements:()=>py,ArcSliderLayouts:()=>dy,ArcSliderSizes:()=>uy,ArcSliderVariants:()=>hy,ArcSwitch:()=>xk,ArcSwitchLabelPositions:()=>mo,ArcSwitchSizes:()=>bk,ArcSwitchStates:()=>xe,ArcSystemAIGradients:()=>Hn,ArcSystemAlignments:()=>Bn,ArcSystemColors:()=>Za,ArcSystemDensities:()=>Lt,ArcSystemGradients:()=>ko,ArcSystemHierarchies:()=>Mt,ArcSystemLayouts:()=>ca,ArcSystemLineHeights:()=>Fn,ArcSystemSchemes:()=>Na,ArcSystemShadows:()=>Nn,ArcSystemShapes:()=>xo,ArcSystemSizes:()=>ke,ArcSystemSurfaces:()=>Ii,ArcSystemVariants:()=>Yr,ArcTextAlignments:()=>Ik,ArcTextBodyElements:()=>Np,ArcTextBodySizes:()=>zk,ArcTextBodyVariants:()=>_k,ArcTextElements:()=>Bp,ArcTextHeadingElements:()=>Op,ArcTextHeadingSizes:()=>Sk,ArcTextHeadingVariants:()=>Ek,ArcTextInput:()=>uo,ArcTextInputLayouts:()=>ny,ArcTextInputSizes:()=>cy,ArcTextInputTypes:()=>sy,ArcTextInputVariants:()=>iy,ArcTextKinds:()=>kk,ArcTextLineHeights:()=>Tk,ArcTextSchemes:()=>wk,ArcTextSubheadingSizes:()=>Ck,ArcTextTitleSizes:()=>Ak,ArcToast:()=>tg,ArcToastDefaults:()=>Zp,ArcToastPlacements:()=>Yp,ArcToastPopoverActions:()=>Ok,ArcToastPopoverModes:()=>qp,ArcToastProgressBarVariants:()=>Nk,ArcToastSchemes:()=>Gp,ArcToastSeverities:()=>Kp,ArcToastSizes:()=>Wp,ArcToastVariants:()=>Xp,ArcTooltip:()=>mc,ArcTooltipDefaults:()=>ua,COLOR_DEFAULTS:()=>Ge,DEFAULT_COLOR_PICKER_LABELS:()=>ue,DEFAULT_ICON_AVATAR_LABELS:()=>ql,DeprecatedButtonVariants:()=>ms,EPS_LOOSE:()=>1e-4,EPS_MID:()=>Hc,EPS_STRICT:()=>1e-10,GRADIENT_DEFAULTS:()=>or,IS_FLOATING:()=>Xd,SLIDER_TOKENS:()=>j0,SLIDER_TOKENS_REGEX:()=>D0,SVGLogoArticulate:()=>Ni,SVGLogoProductAI:()=>Bi,SVGLogoProductPeek:()=>Fi,SVGLogoProductReach:()=>Hi,SVGLogoProductReview:()=>Vi,SVGLogoProductRise:()=>Ui,SVGLogoProductStoryline:()=>Gi,SVGLogoProductStudio:()=>Ki,StorageType:()=>jn,adoptStyles:()=>zr,adoptThemeTokens:()=>Cg,anchorNameRegistry:()=>Lo,appendGradientStop:()=>zh,appendUniqueColorValue:()=>Gb,arcGradientsEqual:()=>qc,arcGradientsSemanticEqual:()=>ct,arcGradientsVisuallyEqual:()=>qb,assignRef:()=>Ae,averageGradientColor:()=>dh,bindDelegatedEvents:()=>mu,buildDefaultGradientStops:()=>kh,buildStopFieldBackground:()=>Th,canonicalizeToHsv:()=>Xc,clamp:()=>Fa,clampIt:()=>ar,colorValueEquals:()=>to,compositeRgbaOver:()=>Uc,computeEvenlyDistributedStopAt:()=>Ah,computeNextStopAt:()=>el,computeStopAtBetween:()=>sn,createEmptyRect:()=>Wk,css:()=>l,cssFeatures:()=>tc,decodeDeprecatedButtonVariant:()=>bf,didElementRectChange:()=>ht,distributeGradientStopPositions:()=>Sh,encodeDeprecatedButtonVariant:()=>$f,expandHex3To6:()=>Ks,expandShortHex:()=>Gs,extractTextFromReactNode:()=>Po,formatAlphaCss:()=>Kc,formatAlphaPercent:()=>Vs,formatAnchorName:()=>es,getArcColorAs:()=>mh,getArcColorData:()=>Ia,getArcColorParts:()=>fh,getArcColorValue:()=>nn,getArcContrastColor:()=>oo,getArcGradientData:()=>no,getArcGradientMeridianColor:()=>Yc,getColorName:()=>eo,getCssColor:()=>Br,getElementByIdScoped:()=>Qe,getGradientName:()=>_h,getGradientStopKeyboardDelta:()=>Mh,getPlainLabel:()=>Mp,getPreferredAnchorForTooltipId:()=>gs,getRenderedContrastBasis:()=>yh,getResolvedHierarchy:()=>Su,getResolvedScheme:()=>Cu,getResolvedShape:()=>ku,getResolvedVariant:()=>Au,getSelectedColorMeta:()=>Qs,getShadowRootOrDocument:()=>wa,getSortedStopEntries:()=>fa,getSvgGradientCoords:()=>Od,handlePopover:()=>Qd,handleToast:()=>Jp,hasBaseSelectSupport:()=>Tp,hasEmptyValueOption:()=>Lp,hasMatchingColorValue:()=>Js,hasNativeAnchorPositioning:()=>rs,hexAfterChannelNudge:()=>gh,hslToRgbaData:()=>ah,hsvDeltaOK:()=>jb,hsvToRgbaData:()=>Ve,iconAvatarDefaults:()=>kn,iconAvatarVariantMap:()=>fi,interpolateGradientStopColor:()=>Ch,isArcColorGradient:()=>te,isArcColorPickerGradientChange:()=>Ib,isArcColorPickerSolidChange:()=>Zu,isArcColorPickerUnsetChange:()=>Tb,isArcColorSwatchGradientDetails:()=>Yu,isDeprecatedButtonVariant:()=>bs,isDifferent:()=>sa,isGroupLegendItem:()=>Pp,isHexLike:()=>hh,isHsvLike:()=>Wc,isObject:()=>Dd,isRgbaLike:()=>ph,isSame:()=>Gn,isSelectGroup:()=>Ai,isSelectedColorMatch:()=>xh,isString:()=>Bt,joinArray:()=>Ro,logError:()=>Mv,logMessage:()=>Lv,logSkippedTopLevelItem:()=>Rp,logWarning:()=>iu,makeHtmlId:()=>Hg,makeRandomColor:()=>cn,mapDeprecated:()=>Qa,mergeRgbaFromHexDraft:()=>uh,noTailAnchors:()=>qd,noop:()=>Zt,normalizeAnchorName:()=>Mo,normalizeByte:()=>be,normalizeColorValue:()=>ao,normalizeHexInput:()=>At,normalizeHue:()=>Fs,normalizeUnit:()=>eh,oklchToRgbaData:()=>nh,parseAlphaInput:()=>sh,parseByte:()=>tn,parseCssColorToRgba:()=>Zr,parseHexStringToRgba:()=>lh,percentsFromValue:()=>rh,pickFromList:()=>$r,pickFromListByKeys:()=>Wr,positionTryNameFor:()=>Zd,relativeLuminance:()=>ch,renderableOption:()=>fo,resolveColorPickerLabels:()=>Fc,resolveFallbackAnchors:()=>Yd,resolveGradientAngleFromPointerDrag:()=>Rh,resolveGradientData:()=>Ih,resolveGradientStopAtFromPointer:()=>Ph,resolveIconAvatarLabels:()=>pp,resolveInsertedGradientStop:()=>Eh,resolvePointerAngleDeg:()=>al,resolveTailMetrics:()=>Jd,rgbaBytesEqual:()=>ih,rgbaDeltaOK:()=>Gc,rgbaEchoDeltaOK:()=>Mb,rgbaToHslData:()=>th,rgbaToHsvData:()=>Vc,rgbaToOklchData:()=>oh,roundGradientStopsForCommit:()=>St,roundIt:()=>va,shareAdoptedStyles:()=>Sg,shouldSortStopAtAdjacent:()=>Xb,shouldSortStopAtNeighborPositions:()=>rl,snapGradientAngle:()=>Lh,snapIt:()=>Qu,snapToStep:()=>F0,sortGradientStops:()=>wh,splitString:()=>cu,stepGradientAngleBySnap:()=>Zb,stepToNextSnap:()=>H0,syncAnchorName:()=>ru,toHEX:()=>Ue,toHSL:()=>Ys,toLinearChannel:()=>wt,toLinearGradientCss:()=>Ka,toOKLCH:()=>Zs,toOpaqueRgbHexNoHash:()=>ro,toPx:()=>jo,toRGB:()=>_a,unbindDelegatedEvents:()=>ef,useIsoLayoutEffect:()=>la,useShiftSnap:()=>V0,useStableId:()=>Nr,useStorage:()=>Gk});const Na=["auto","light","dark","inverse"],Nn=["none","sm","md","lg","xl"],Ii=["primary","secondary","inset","raised","floating"],xo=["circle","round","pill","square","narrow"],Lt=["compact","comfortable"],Yr=["inherit","common","disabled","neutral","outline","solid","plain","critical","ai","alpha","primary","secondary","tertiary","inverse","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse","overlay-light","overlay-dark","brand-black","brand-blue","brand","info","success","warning","error","processing"],Mt=["primary","secondary","tertiary","plain","link-style"],ca=["hug","fill","icon","gutter","inline"],Bn=["inherit","start","left","justify","center","between","around","evenly","stretch","end","right"],Fn=["inherit","tight","standard","loose"],ke=["inherit","xxl","xl","lg","md","sm","xs","xxs","custom","fullscreen"],Za=["blue","orange","mint","red","yellow","green","maroon","purple","neutral","white","black","mono","mono-inverse","overlay-light","overlay-dark","ai","brand"],Hn=["ai","ai-50","ai-100","ai-200","ai-300","ai-400","ai-500","ai-600"],ko=[...Hn],wo=["","auto","manual"],Ja=["toggle","show","hide"],Ao=["inherit","xl","lg","md","sm","xs"],Vn=["inherit","lg","md","sm"],Un=["inherit","md","sm"],Mr=["inherit","wrap","truncate"],we=["gutter","inline"],ia=["hug","fill"],Ba=["horizontal","vertical"],Qa=(r,e)=>e[r]||r,$r=(r,e)=>r.filter(a=>e.includes(a)),Wr=(r,e)=>e.filter(a=>r.includes(a)),Ae=(r,e)=>{r&&(typeof r=="function"?r(e):r.current=e)},Fa=(r,e=0,a=100)=>Math.min(Math.max(r,e),a),sa=(r,e)=>r!==e,Gn=(r,e)=>r===e,ht=({a:r,b:e})=>sa(r?.top,e?.top)||sa(r?.left,e?.left)||sa(r?.width,e?.width)||sa(r?.height,e?.height);function wa(r){if(!(r instanceof Node))return null;const e=r.getRootNode();return e instanceof ShadowRoot||e instanceof Document?e:null}function Qe(r,e){if(typeof document>"u")return null;const a=e==null?document:wa(e)??document,t=a.getElementById(r);return t||(a!==document?document.getElementById(r):null)}var i=na(34158),d=na(82920);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=globalThis,rt=pt.ShadowRoot&&(pt.ShadyCSS===void 0||pt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,jt=Symbol(),Kn=new WeakMap;class Wn{constructor(e,a,t){if(this._$cssResult$=!0,t!==jt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=a}get styleSheet(){let e=this.o;const a=this.t;if(rt&&e===void 0){const t=a!==void 0&&a.length===1;t&&(e=Kn.get(a)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&Kn.set(a,e))}return e}toString(){return this.cssText}}const So=r=>new Wn(typeof r=="string"?r:r+"",void 0,jt),l=(r,...e)=>{const a=r.length===1?r[0]:e.reduce(((t,o,n)=>t+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[n+1]),r[0]);return new Wn(a,r,jt)},Aa=(r,e)=>{if(rt)r.adoptedStyleSheets=e.map((a=>a instanceof CSSStyleSheet?a:a.styleSheet));else for(const a of e){const t=document.createElement("style"),o=pt.litNonce;o!==void 0&&t.setAttribute("nonce",o),t.textContent=a.cssText,r.appendChild(t)}},et=rt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let a="";for(const t of e.cssRules)a+=t.cssText;return So(a)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Xn,defineProperty:cg,getOwnPropertyDescriptor:ig,getOwnPropertyNames:sg,getOwnPropertySymbols:lg,getPrototypeOf:dg}=Object,qn=globalThis,$d=qn.trustedTypes,ug=$d?$d.emptyScript:"",hg=qn.reactiveElementPolyfillSupport,Co=(r,e)=>r,Ti={toAttribute(r,e){switch(e){case Boolean:r=r?ug:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let a=r;switch(e){case Boolean:a=r!==null;break;case Number:a=r===null?null:Number(r);break;case Object:case Array:try{a=JSON.parse(r)}catch{a=null}}return a}},yd=(r,e)=>!Xn(r,e),xd={attribute:!0,type:String,converter:Ti,reflect:!1,useDefault:!1,hasChanged:yd};Symbol.metadata??=Symbol("metadata"),qn.litPropertyMetadata??=new WeakMap;class Dt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,a=xd){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(e,a),!a.noAccessor){const t=Symbol(),o=this.getPropertyDescriptor(e,t,a);o!==void 0&&cg(this.prototype,e,o)}}static getPropertyDescriptor(e,a,t){const{get:o,set:n}=ig(this.prototype,e)??{get(){return this[a]},set(c){this[a]=c}};return{get:o,set(c){const s=o?.call(this);n?.call(this,c),this.requestUpdate(e,s,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??xd}static _$Ei(){if(this.hasOwnProperty(Co("elementProperties")))return;const e=dg(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Co("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Co("properties"))){const a=this.properties,t=[...sg(a),...lg(a)];for(const o of t)this.createProperty(o,a[o])}const e=this[Symbol.metadata];if(e!==null){const a=litPropertyMetadata.get(e);if(a!==void 0)for(const[t,o]of a)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[a,t]of this.elementProperties){const o=this._$Eu(a,t);o!==void 0&&this._$Eh.set(o,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const a=[];if(Array.isArray(e)){const t=new Set(e.flat(1/0).reverse());for(const o of t)a.unshift(et(o))}else e!==void 0&&a.push(et(e));return a}static _$Eu(e,a){const t=a.attribute;return t===!1?void 0:typeof t=="string"?t:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,a=this.constructor.elementProperties;for(const t of a.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Aa(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,a,t){this._$AK(e,t)}_$ET(e,a){const t=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,t);if(o!==void 0&&t.reflect===!0){const n=(t.converter?.toAttribute!==void 0?t.converter:Ti).toAttribute(a,t.type);this._$Em=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,a){const t=this.constructor,o=t._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const n=t.getPropertyOptions(o),c=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Ti;this._$Em=o;const s=c.fromAttribute(a,n.type);this[o]=s??this._$Ej?.get(o)??s,this._$Em=null}}requestUpdate(e,a,t){if(e!==void 0){const o=this.constructor,n=this[e];if(t??=o.getPropertyOptions(e),!((t.hasChanged??yd)(n,a)||t.useDefault&&t.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,t))))return;this.C(e,a,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,a,{useDefault:t,reflect:o,wrapped:n},c){t&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,c??a??this[e]),n!==!0||c!==void 0)||(this._$AL.has(e)||(this.hasUpdated||t||(a=void 0),this._$AL.set(e,a)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[o,n]of t){const{wrapped:c}=n,s=this[o];c!==!0||this._$AL.has(o)||s===void 0||this.C(o,void 0,n,s)}}let e=!1;const a=this._$AL;try{e=this.shouldUpdate(a),e?(this.willUpdate(a),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(a)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(a)}willUpdate(e){}_$AE(e){this._$EO?.forEach((a=>a.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((a=>this._$ET(a,this[a]))),this._$EM()}updated(e){}firstUpdated(e){}}Dt.elementStyles=[],Dt.shadowRootOptions={mode:"open"},Dt[Co("elementProperties")]=new Map,Dt[Co("finalized")]=new Map,hg?.({ReactiveElement:Dt}),(qn.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pi=globalThis,Yn=Pi.trustedTypes,kd=Yn?Yn.createPolicy("lit-html",{createHTML:r=>r}):void 0,wd="$lit$",at=`lit$${Math.random().toFixed(9).slice(2)}$`,Ad="?"+at,pg=`<${Ad}>`,gt=document,Eo=()=>gt.createComment(""),zo=r=>r===null||typeof r!="object"&&typeof r!="function",Ri=Array.isArray,gg=r=>Ri(r)||typeof r?.[Symbol.iterator]=="function",Li=`[ 	
\f\r]`,_o=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Sd=/-->/g,Cd=/>/g,vt=RegExp(`>|${Li}(?:([^\\s"'>=/]+)(${Li}*=${Li}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ed=/'/g,zd=/"/g,_d=/^(?:script|style|textarea|title)$/i,Mi=r=>(e,...a)=>({_$litType$:r,strings:e,values:a}),qk=Mi(1),Yk=Mi(2),Zk=Mi(3),Ot=Symbol.for("lit-noChange"),ge=Symbol.for("lit-nothing"),Id=new WeakMap,ft=gt.createTreeWalker(gt,129);function Td(r,e){if(!Ri(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return kd!==void 0?kd.createHTML(e):e}const vg=(r,e)=>{const a=r.length-1,t=[];let o,n=e===2?"<svg>":e===3?"<math>":"",c=_o;for(let s=0;s<a;s++){const u=r[s];let h,p,v=-1,g=0;for(;g<u.length&&(c.lastIndex=g,p=c.exec(u),p!==null);)g=c.lastIndex,c===_o?p[1]==="!--"?c=Sd:p[1]!==void 0?c=Cd:p[2]!==void 0?(_d.test(p[2])&&(o=RegExp("</"+p[2],"g")),c=vt):p[3]!==void 0&&(c=vt):c===vt?p[0]===">"?(c=o??_o,v=-1):p[1]===void 0?v=-2:(v=c.lastIndex-p[2].length,h=p[1],c=p[3]===void 0?vt:p[3]==='"'?zd:Ed):c===zd||c===Ed?c=vt:c===Sd||c===Cd?c=_o:(c=vt,o=void 0);const f=c===vt&&r[s+1].startsWith("/>")?" ":"";n+=c===_o?u+pg:v>=0?(t.push(h),u.slice(0,v)+wd+u.slice(v)+at+f):u+at+(v===-2?s:f)}return[Td(r,n+(r[a]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),t]};class Io{constructor({strings:e,_$litType$:a},t){let o;this.parts=[];let n=0,c=0;const s=e.length-1,u=this.parts,[h,p]=vg(e,a);if(this.el=Io.createElement(h,t),ft.currentNode=this.el.content,a===2||a===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(o=ft.nextNode())!==null&&u.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const v of o.getAttributeNames())if(v.endsWith(wd)){const g=p[c++],f=o.getAttribute(v).split(at),m=/([.?@])?(.*)/.exec(g);u.push({type:1,index:n,name:m[2],strings:f,ctor:m[1]==="."?mg:m[1]==="?"?bg:m[1]==="@"?$g:Zn}),o.removeAttribute(v)}else v.startsWith(at)&&(u.push({type:6,index:n}),o.removeAttribute(v));if(_d.test(o.tagName)){const v=o.textContent.split(at),g=v.length-1;if(g>0){o.textContent=Yn?Yn.emptyScript:"";for(let f=0;f<g;f++)o.append(v[f],Eo()),ft.nextNode(),u.push({type:2,index:++n});o.append(v[g],Eo())}}}else if(o.nodeType===8)if(o.data===Ad)u.push({type:2,index:n});else{let v=-1;for(;(v=o.data.indexOf(at,v+1))!==-1;)u.push({type:7,index:n}),v+=at.length-1}n++}}static createElement(e,a){const t=gt.createElement("template");return t.innerHTML=e,t}}function Nt(r,e,a=r,t){if(e===Ot)return e;let o=t!==void 0?a._$Co?.[t]:a._$Cl;const n=zo(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),n===void 0?o=void 0:(o=new n(r),o._$AT(r,a,t)),t!==void 0?(a._$Co??=[])[t]=o:a._$Cl=o),o!==void 0&&(e=Nt(r,o._$AS(r,e.values),o,t)),e}class fg{constructor(e,a){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:a},parts:t}=this._$AD,o=(e?.creationScope??gt).importNode(a,!0);ft.currentNode=o;let n=ft.nextNode(),c=0,s=0,u=t[0];for(;u!==void 0;){if(c===u.index){let h;u.type===2?h=new To(n,n.nextSibling,this,e):u.type===1?h=new u.ctor(n,u.name,u.strings,this,e):u.type===6&&(h=new yg(n,this,e)),this._$AV.push(h),u=t[++s]}c!==u?.index&&(n=ft.nextNode(),c++)}return ft.currentNode=gt,o}p(e){let a=0;for(const t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(e,t,a),a+=t.strings.length-2):t._$AI(e[a])),a++}}class To{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,a,t,o){this.type=2,this._$AH=ge,this._$AN=void 0,this._$AA=e,this._$AB=a,this._$AM=t,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&e?.nodeType===11&&(e=a.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,a=this){e=Nt(this,e,a),zo(e)?e===ge||e==null||e===""?(this._$AH!==ge&&this._$AR(),this._$AH=ge):e!==this._$AH&&e!==Ot&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):gg(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ge&&zo(this._$AH)?this._$AA.nextSibling.data=e:this.T(gt.createTextNode(e)),this._$AH=e}$(e){const{values:a,_$litType$:t}=e,o=typeof t=="number"?this._$AC(e):(t.el===void 0&&(t.el=Io.createElement(Td(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===o)this._$AH.p(a);else{const n=new fg(o,this),c=n.u(this.options);n.p(a),this.T(c),this._$AH=n}}_$AC(e){let a=Id.get(e.strings);return a===void 0&&Id.set(e.strings,a=new Io(e)),a}k(e){Ri(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let t,o=0;for(const n of e)o===a.length?a.push(t=new To(this.O(Eo()),this.O(Eo()),this,this.options)):t=a[o],t._$AI(n),o++;o<a.length&&(this._$AR(t&&t._$AB.nextSibling,o),a.length=o)}_$AR(e=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Zn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,a,t,o,n){this.type=1,this._$AH=ge,this._$AN=void 0,this.element=e,this.name=a,this._$AM=o,this.options=n,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=ge}_$AI(e,a=this,t,o){const n=this.strings;let c=!1;if(n===void 0)e=Nt(this,e,a,0),c=!zo(e)||e!==this._$AH&&e!==Ot,c&&(this._$AH=e);else{const s=e;let u,h;for(e=n[0],u=0;u<n.length-1;u++)h=Nt(this,s[t+u],a,u),h===Ot&&(h=this._$AH[u]),c||=!zo(h)||h!==this._$AH[u],h===ge?e=ge:e!==ge&&(e+=(h??"")+n[u+1]),this._$AH[u]=h}c&&!o&&this.j(e)}j(e){e===ge?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class mg extends Zn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ge?void 0:e}}class bg extends Zn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ge)}}class $g extends Zn{constructor(e,a,t,o,n){super(e,a,t,o,n),this.type=5}_$AI(e,a=this){if((e=Nt(this,e,a,0)??ge)===Ot)return;const t=this._$AH,o=e===ge&&t!==ge||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,n=e!==ge&&(t===ge||o);o&&this.element.removeEventListener(this.name,this,t),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class yg{constructor(e,a,t){this.element=e,this.type=6,this._$AN=void 0,this._$AM=a,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(e){Nt(this,e)}}const Jk=null,xg=Pi.litHtmlPolyfillSupport;xg?.(Io,To),(Pi.litHtmlVersions??=[]).push("3.3.1");const kg=(r,e,a)=>{const t=a?.renderBefore??e;let o=t._$litPart$;if(o===void 0){const n=a?.renderBefore??null;t._$litPart$=o=new To(e.insertBefore(Eo(),n),n,void 0,a??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ji=globalThis;class Jn extends Dt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=kg(a,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ot}}Jn._$litElement$=!0,Jn.finalized=!0,ji.litElementHydrateSupport?.({LitElement:Jn});const wg=ji.litElementPolyfillSupport;wg?.({LitElement:Jn});const Qk=null;(ji.litElementVersions??=[]).push("4.2.1");const Ag=`@charset "UTF-8";
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
    --arc-color-bg-secondary-subtle: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
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
    --arc-color-fg-brand-heavy: light-dark(var(--arc-color-light-blue-700), var(--arc-color-dark-blue-900));
    --arc-color-border-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-5));
    --arc-color-border-subtle: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-border-mid: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
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
    --arc-color-border-disabled: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-border-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-border-theme-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-25));
    --arc-color-border-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-border-hover: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-30));
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
    --arc\u2022color\u2022scheme\u2022inverse\u2022nested: light;
  }
  [arc-scheme=dark] {
    --arc\u2022color\u2022scheme: dark;
    --arc\u2022color\u2022scheme\u2022inverse: light;
    --arc\u2022color\u2022scheme\u2022inverse\u2022nested: dark;
  }
  [arc-scheme=inverse] {
    --arc\u2022color\u2022scheme: var(--arc\u2022color\u2022scheme\u2022inverse);
  }
  [arc-scheme=inverse] [arc-scheme=inverse] {
    --arc\u2022color\u2022scheme: var(--arc\u2022color\u2022scheme\u2022inverse\u2022nested);
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
`,Di={};function zr(r,e){if(typeof document<"u"&&e?.styleSheet){const a=Di[r];Di[r]=e.styleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets.filter(t=>t!==a),e.styleSheet]}}function Sg(r){const e=Object.values(Di),a=document.adoptedStyleSheets.filter(t=>e.includes(t));if(r.adoptedStyleSheets){const t=a.filter(o=>!r.adoptedStyleSheets.includes(o));r.adoptedStyleSheets=[...r.adoptedStyleSheets,...t]}}function Cg(r){if(typeof CSSStyleSheet<"u"){const e=new CSSStyleSheet;e.replaceSync(Ag),r.adoptedStyleSheets&&(r.adoptedStyleSheets.includes(e)||(r.adoptedStyleSheets=[...r.adoptedStyleSheets,e]))}}const Eg="Anonymous",Pd=(r={})=>r.isAnonymous||!(r.name||r.email||r.src),Rd=(r={})=>Pd(r)?r.anonymousName||Eg:r.name||r.email,zg=r=>r?.trim().charAt(0)??void 0,_g=(r,e)=>{let a=0;const t=Math.min(r.length,50);for(let o=0;o<t;o+=1)a=(a+r.charCodeAt(o))%(e??33);return a},Ig=(r,e,a)=>e?.length?r?.trim()===""?a||e[0]:e[_g(r,e.length)]||a||e[0]:a,Ld=$r(Za,["blue","orange","mint","red","yellow","green","maroon","purple"]),Tg=$r(Za,["neutral","white","black"]),Qn=$r(ke,["lg","md","sm","xs"]),Pg=[...Qn,"profile-sm","profile-md","profile-lg"],Rg=Vn,Lg=Mr,Mg=Qn,jg=Qn,Dg=Qn,Y=l`--arc•input•mask`,b=l`--arc•size`,L=l`--arc•space`,Vr=l`--arc•avatar`,ve=l`${Vr}•chars`,Oi=l`

  &[data-size=lg] {
    ${Vr}•font•size: var(${b}•16);
    ${Vr}•size: 2.5em; /* target: 40px @ 100% */
    ${ve}•1: var(${b}•16);
    ${ve}•2: var(${b}•14);
    ${ve}•3: var(${b}•12);
  }

  &:is([data-size=md], [data-size=inherit], :not([data-size])) { /* @default size */
    ${Vr}•font•size: var(${b}•14);
    ${Vr}•size: 2.2857142857em; /* target: 32px @ 100% (32 / 14 * 1em) */
    ${ve}•1: var(${b}•14);
    ${ve}•2: var(${b}•12);
    ${ve}•3: var(${b}•10);
  }

  &[data-size=sm] {
    ${Vr}•font•size: var(${b}•12);
    ${Vr}•size: 2em; /* target: 24px @ 100% */
    ${ve}•1: var(${b}•12);
    ${ve}•2: var(${b}•10);
    ${ve}•3: var(${b}•8);
  }

  &[data-size=xs] {
    ${Vr}•font•size: var(${b}•10);
    ${Vr}•size: 2em; /* target: 20px @ 100% */
    ${ve}•1: var(${b}•10);
    ${ve}•2: var(${b}•8);
    ${ve}•3: var(${b}•6);
  }

`,Og=l`

  &[data-size=profile-lg] {
    ${Vr}•font•size: var(${b}•40);
    ${Vr}•size: 4em;
  }

  &[data-size=profile-md] {
    ${Vr}•font•size: var(${b}•32);
    ${Vr}•size: 3em;
  }

  &[data-size=profile-sm] {
    ${Vr}•font•size: var(${b}•28);
    ${Vr}•size: 2.2857142857em; /* target: 64px @ 100% (64 / 28 * 1em) */
  }

`,Md=l`

  [arc-avatar] {
    ${Vr}•font•size: inherit;
    ${Vr}•size: inherit;
    ${ve}•1: inherit;
    ${ve}•2: inherit;
    ${ve}•3: inherit;
  }

`,mt=l`${Vr}•fg`,Fe=l`${Vr}•bg`,Ng=l`
@layer arc-components {

  [arc-avatar] {
    /* Colors --------------------------------------------------------• */
    ${mt}: var(--arc-avatar-color, var(--arc-color-mono-white));

    &:has([data-color=blue]) { /* @default color */
      ${Fe}: var(--arc-color-light-blue-400);
    }
    &:has([data-color=purple]) {
      ${Fe}: var(--arc-color-light-purple-400);
    }
    &:has([data-color=red]) {
      ${Fe}: var(--arc-color-light-red-400);
    }
    &:has([data-color=yellow]) {
      ${Fe}: var(--arc-color-light-yellow-400);
    }
    &:has([data-color=green]) {
      ${Fe}: var(--arc-color-light-green-400);
    }
    &:has([data-color=maroon]) {
      ${Fe}: var(--arc-color-light-maroon-400);
    }
    &:has([data-color=orange]) {
      ${Fe}: var(--arc-color-light-orange-400);
    }
    &:has([data-color=mint]) {
      ${Fe}: var(--arc-color-light-mint-400);
    }

    /* RESERVED COLORS -----------------------------------------------• */
    &:has([data-color=black]) {
      ${mt}: light-dark(var(--arc-color-mono-white), var(--arc-color-mono-black));
      ${Fe}: light-dark(var(--arc-color-mono-black), var(--arc-color-mono-white));
    }

    &:has([data-color=neutral]) { /* @default anonymous */
      ${mt}: var(--arc-color-fg-secondary);
      ${Fe}: var(--arc-color-alpha-subtle);
    }

    &:has([data-color=white]) {
      ${mt}: var(--arc-color-mono-black);
      ${Fe}: var(--arc-color-mono-white);
    }

    /* SIZES ---------------------------------------------------------• */
    ${Oi}
    ${Og}
  }

  /* CORE AVATAR STYLES ----------------------------------------------• */
  [arc-avatar]:not([hidden]) {
    font-size: var(--arc-avatar-font-size, var(${Vr}•font•size));

    flex: none;
    align-self: center;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--arc-avatar-size, var(${Vr}•size));
    aspect-ratio: 1 / 1;
    line-height: normal;

    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: var(--arc-border-radius-circle);

    opacity: var(--arc-alpha-100);
    transition: opacity 200ms ease-out;

    &[data-is-inactive] {
      opacity: var(--arc-alpha-50);
    }

    [data-num-length] {
      --arc-button-font-size: var(${ve}•1);
    }

    [data-num-length='2'] {
      --arc-button-font-size: var(${ve}•2);
    }

    [data-num-length='3'] {
      --arc-button-font-size: var(${ve}•3);
    }


    /* INNER ELEMENTS ------------------------------------------------• */

    [data-element=counter] {
      ${Vr}•pointer•events: all;

      /* Inter-Component Communication • ArcButton --------------------• */
      --arc-button-width: 100%;
      --arc-button-height: auto;
      --arc-button-aspect-ratio: 1 /1;
      --arc-button-padding: 0;
      --arc-button-background: var(--arc-avatar-background, var(${Fe}));
      --arc-button-color: var(--arc-avatar-color, var(${mt}));

      &:disabled {
        --arc-button-cursor: default;
      }
    }

    [data-element=image] {
      object-fit: cover;

      /* Hides problematic image */
      &:is([data-not-loaded], [data-has-error]) {
        ${Vr}•visibility: hidden;
      }

      /* Hides subsequent elements with valid image */
      &:not([data-has-error]) ~ [data-element] {
        ${mt}: transparent;
        ${Fe}: none;
      }
    }

    :is(
      [data-element=counter],
      [data-element=initial],
      [data-element=anonymous]
    ) {
      background: var(${Fe});
      color: var(${mt});
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
      visibility: var(${Vr}•visibility, unset);

      transition-duration: 200ms;
      transition-behavior: allow-discrete;
      transition-timing-function: linear;
      transition-property:
        visibility,
        background-color,
        color;

      pointer-events: var(${Vr}•pointer•events, none);
      user-select: none;
      -webkit-user-select: none;
    }
  }

}
`,Bg=({children:r,initial:e,color:a,...t})=>(0,i.jsx)("span",{...t,"data-element":"initial","data-color":a,children:r||e}),Fg=({isLoaded:r,hasError:e,onLoad:a,onError:t,...o})=>{const n=!r&&""||void 0,c=e&&""||void 0,s=!r||e||void 0;return(0,i.jsx)("img",{...o,hidden:s,"data-element":"image","data-not-loaded":n,"data-has-error":c,onLoad:a,onError:t})},Po=r=>typeof r=="string"?r:typeof r=="number"?r.toString():Array.isArray(r)?r.map(Po).join(""):(0,d.isValidElement)(r)?Po(r.props.children):"",jd={},Hg=(r="id")=>{const e=(jd[r]??0)+1;return jd[r]=e,`${r}-${e}`},Nr=(r,e="id")=>{const a=(0,d.useId)();return r??`${e}-${a}`},Bt=r=>typeof r=="string",Dd=r=>r!==null&&typeof r=="object",Vg=["#9c15ff","#1eb4fb"],Od=({angle:r=60,width:e,height:a})=>{const t=(r-90)*Math.PI/180,o=e/2,n=a/2,c=Math.sqrt(e*e+a*a)/2,s=Math.cos(t)*c,u=Math.sin(t)*c;return{x1:o-s,y1:n-u,x2:o+s,y2:n+u}},Ug=(r,e)=>{const a=Bt(r)?r:r.color,t=Bt(r)?e.toString():r.offset?.toString()??e.toString();return(0,i.jsx)("stop",{offset:t,stopColor:a},`${a}-${e}`)},Nd=({id:r,angle:e=60,width:a,height:t,stops:o=Vg})=>{const{x1:n,y1:c,x2:s,y2:u}=Od({angle:e,width:a,height:t});return(0,i.jsx)("defs",{children:(0,i.jsx)("linearGradient",{gradientUnits:"userSpaceOnUse",id:r,x1:n,x2:s,y1:c,y2:u,children:o.map(Ug)})})},Ni=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2362 2V4.04215H3.7443V2H16.2362ZM13.8453 11.7538C13.8453 9.47528 12.1743 7.75773 9.96905 7.75773C7.79316 7.75773 6.15147 9.47528 6.15147 11.7538C6.15147 14.0323 7.7899 15.753 9.96905 15.753C12.1775 15.753 13.8453 14.0355 13.8453 11.7569V11.7538ZM9.96905 18C6.29153 18 3.5 15.3213 3.5 11.7538C3.5 8.20209 6.27524 5.50758 9.96905 5.49183C13.6922 5.49183 16.5 8.17057 16.5 11.738V17.6754H13.8485V16.3581C13.8485 16.3581 12.3925 18 9.97231 18H9.96905Z",fill:"var(--arc-color-logo-articulate, #000000)"})}),Bi=r=>{const e=Nr(void 0,"arc-ai-gradient");return(0,i.jsxs)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.8524 12.87V8.17199H12.6444V12.87H11.8524ZM11.8524 7.28999V6.29999H12.6444V7.28999H11.8524ZM6.5 11.511C6.5 11.211 6.584 10.953 6.752 10.737C6.926 10.515 7.163 10.344 7.463 10.224C7.763 10.104 8.111 10.044 8.507 10.044C8.717 10.044 8.939 10.062 9.173 10.098C9.407 10.128 9.614 10.176 9.794 10.242V9.89999C9.794 9.53999 9.686 9.25799 9.47 9.05399C9.254 8.84399 8.948 8.73899 8.552 8.73899C8.294 8.73899 8.045 8.78699 7.805 8.88299C7.571 8.97299 7.322 9.10499 7.058 9.27899L6.77 8.72099C7.076 8.51099 7.382 8.35499 7.688 8.25299C7.994 8.14499 8.312 8.09099 8.642 8.09099C9.242 8.09099 9.716 8.25899 10.064 8.59499C10.412 8.92499 10.586 9.38699 10.586 9.98099V11.97C10.586 12.066 10.604 12.138 10.64 12.186C10.682 12.228 10.748 12.252 10.838 12.258V12.87C10.76 12.882 10.691 12.891 10.631 12.897C10.577 12.903 10.532 12.906 10.496 12.906C10.31 12.906 10.169 12.855 10.073 12.753C9.983 12.651 9.932 12.543 9.92 12.429L9.902 12.132C9.698 12.396 9.431 12.6 9.101 12.744C8.771 12.888 8.444 12.96 8.12 12.96C7.808 12.96 7.529 12.897 7.283 12.771C7.037 12.639 6.845 12.465 6.707 12.249C6.569 12.027 6.5 11.781 6.5 11.511ZM9.56 11.844C9.632 11.76 9.689 11.676 9.731 11.592C9.773 11.502 9.794 11.427 9.794 11.367V10.782C9.608 10.71 9.413 10.656 9.209 10.62C9.005 10.578 8.804 10.557 8.606 10.557C8.204 10.557 7.877 10.638 7.625 10.8C7.379 10.956 7.256 11.172 7.256 11.448C7.256 11.598 7.295 11.745 7.373 11.889C7.457 12.027 7.577 12.141 7.733 12.231C7.895 12.321 8.093 12.366 8.327 12.366C8.573 12.366 8.807 12.318 9.029 12.222C9.251 12.12 9.428 11.994 9.56 11.844Z",fill:`url(#${e})`}),Nd({id:e,width:640,height:640,stops:["var(--arc-color-logo-ai-purple, #9c15ff)","var(--arc-color-logo-ai-blue, #1eb4fb)"]})]})},Fi=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM11.3493 8.65067L13.3747 7.51C13.4276 7.48023 13.4874 7.46481 13.5481 7.46529C13.6088 7.46576 13.6683 7.48211 13.7207 7.51271C13.7732 7.54331 13.8167 7.58709 13.847 7.63971C13.8772 7.69233 13.8932 7.75196 13.8933 7.81267V12.14C13.8934 12.2014 13.8772 12.2616 13.8464 12.3147C13.8156 12.3678 13.7713 12.4118 13.7181 12.4423C13.6648 12.4727 13.6044 12.4886 13.5431 12.4882C13.4817 12.4878 13.4215 12.4712 13.3687 12.44L11.3433 11.2453C11.2911 11.2146 11.2479 11.1707 11.2178 11.1181C11.1878 11.0655 11.172 11.0059 11.172 10.9453V8.95333C11.172 8.828 11.24 8.712 11.3493 8.65067ZM7.20267 7.46333H9.93867C10.3227 7.46333 10.634 7.77467 10.634 8.15867V11.592C10.634 11.9767 10.3227 12.288 9.93867 12.288H7.202C7.0177 12.288 6.84094 12.2148 6.71056 12.0846C6.58018 11.9543 6.50684 11.7776 6.50667 11.5933V8.16C6.50667 7.77533 6.818 7.464 7.202 7.464L7.20267 7.46333Z",fill:"var(--arc-color-logo-peek, #497add)"})}),Hi=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.7343 12.569C11.3803 12.569 11.0563 12.506 10.7623 12.38C10.4743 12.248 10.2223 12.071 10.0063 11.849C9.79627 11.621 9.63127 11.36 9.51127 11.066C9.39727 10.772 9.34027 10.46 9.34027 10.13C9.34027 9.68601 9.44227 9.28101 9.64627 8.91501C9.85027 8.54901 10.1323 8.25501 10.4923 8.03301C10.8583 7.81101 11.2753 7.70001 11.7433 7.70001C12.2173 7.70001 12.6283 7.81401 12.9763 8.04201C13.3303 8.26401 13.6033 8.55801 13.7953 8.92401C13.9933 9.28401 14.0923 9.67401 14.0923 10.094C14.0923 10.154 14.0893 10.214 14.0833 10.274C14.0833 10.328 14.0803 10.37 14.0743 10.4H10.1773C10.2013 10.706 10.2853 10.979 10.4293 11.219C10.5793 11.453 10.7713 11.639 11.0053 11.777C11.2393 11.909 11.4913 11.975 11.7613 11.975C12.0493 11.975 12.3193 11.903 12.5713 11.759C12.8293 11.615 13.0063 11.426 13.1023 11.192L13.7863 11.381C13.6843 11.609 13.5313 11.813 13.3273 11.993C13.1293 12.173 12.8923 12.314 12.6163 12.416C12.3463 12.518 12.0523 12.569 11.7343 12.569ZM10.1503 9.85101H13.3543C13.3303 9.54501 13.2433 9.27501 13.0933 9.04101C12.9433 8.80701 12.7513 8.62401 12.5173 8.49201C12.2833 8.36001 12.0253 8.29401 11.7433 8.29401C11.4673 8.29401 11.2123 8.36001 10.9783 8.49201C10.7443 8.62401 10.5523 8.80701 10.4023 9.04101C10.2583 9.27501 10.1743 9.54501 10.1503 9.85101ZM8.984 8.47401C8.588 8.48001 8.237 8.58201 7.931 8.78001C7.631 8.97201 7.418 9.23901 7.292 9.58101V12.479H6.5V7.78101H7.238V8.87001C7.4 8.54601 7.613 8.28501 7.877 8.08701C8.147 7.88301 8.429 7.76901 8.723 7.74501H8.876C8.918 7.74501 8.954 7.74801 8.984 7.75401V8.47401Z",fill:"var(--arc-color-logo-reach, #0081de)"})}),Vi=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.38402 8.46899C8.98802 8.47499 8.63702 8.57699 8.33102 8.77499C8.03102 8.96699 7.81802 9.23399 7.69202 9.57599V12.474H6.90002V7.77599H7.63802V8.86499C7.80002 8.54099 8.01302 8.27999 8.27702 8.08199C8.54702 7.87799 8.82902 7.76399 9.12302 7.73999H9.27602C9.31802 7.73999 9.35402 7.74299 9.38402 7.74899V8.46899ZM11.5195 12.474L9.67455 7.77599H10.5025L11.9785 11.718L13.4545 7.77599H14.2285L12.3835 12.474H11.5195Z",fill:"var(--arc-color-logo-review, #35b062)"})}),Ui=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM9.29467 8.48267C8.90667 8.49467 8.564 8.59467 8.268 8.78267C7.97067 8.97067 7.76067 9.232 7.63733 9.56733V12.406H6.86133V7.804H7.584V8.87067C7.74267 8.55333 7.95133 8.296 8.21067 8.09933C8.46867 7.90267 8.74467 7.79267 9.03867 7.76867H9.18867C9.23 7.76867 9.26533 7.772 9.29467 7.77733V8.48267ZM11.6747 12.494C11.3035 12.4941 10.9347 12.4363 10.5813 12.3227C10.2233 12.208 9.91467 12.042 9.656 11.824L9.99067 11.304C10.2613 11.51 10.532 11.664 10.802 11.7667C11.0727 11.87 11.3573 11.9213 11.6573 11.9213C11.992 11.9213 12.258 11.8547 12.4553 11.7227C12.5492 11.6632 12.6258 11.5803 12.6776 11.482C12.7294 11.3838 12.7546 11.2737 12.7507 11.1627C12.7507 11.0513 12.724 10.956 12.6707 10.876C12.6092 10.7892 12.5278 10.7183 12.4333 10.6693C12.3044 10.6014 12.1682 10.5482 12.0273 10.5107C11.8627 10.464 11.672 10.4133 11.454 10.3607C11.2142 10.3005 10.9763 10.2329 10.7407 10.158C10.566 10.1052 10.3997 10.028 10.2467 9.92867C10.1259 9.85011 10.0285 9.7405 9.96467 9.61133C9.90168 9.46686 9.87162 9.31019 9.87667 9.15267C9.87261 8.94053 9.91923 8.73049 10.0127 8.54C10.104 8.36067 10.2287 8.21133 10.388 8.09067C10.5561 7.96556 10.746 7.87287 10.948 7.81733C11.173 7.7542 11.4057 7.72301 11.6393 7.72467C11.986 7.72467 12.3093 7.78067 12.6093 7.892C12.9093 8.004 13.162 8.15067 13.3673 8.33267L13.0147 8.8C12.824 8.63151 12.6026 8.50136 12.3627 8.41667C12.1249 8.33193 11.8744 8.28864 11.622 8.28867C11.34 8.28867 11.1 8.34867 10.9033 8.46933C10.7067 8.59 10.608 8.78267 10.608 9.04733C10.608 9.15267 10.6273 9.24067 10.6653 9.31133C10.7106 9.38903 10.776 9.45306 10.8547 9.49667C10.9433 9.55 11.056 9.59667 11.1947 9.638C11.3327 9.67867 11.4987 9.72333 11.6927 9.77C11.998 9.84067 12.264 9.91267 12.4907 9.986C12.7167 10.0593 12.9047 10.146 13.0547 10.246C13.2047 10.346 13.316 10.4633 13.3893 10.5993C13.4627 10.734 13.5 10.8987 13.5 11.0927C13.5 11.5213 13.3353 11.8627 13.0067 12.1153C12.6767 12.368 12.2333 12.494 11.6747 12.494Z",fill:"var(--arc-color-logo-rise, #ff6600)"})}),Gi=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.2815 6.29999H12.0735V11.655C12.0735 11.913 12.1095 12.072 12.1815 12.132C12.2535 12.192 12.3405 12.222 12.4425 12.222C12.5685 12.222 12.6885 12.21 12.8025 12.186C12.9165 12.156 13.0125 12.126 13.0905 12.096L13.2165 12.744C13.0845 12.798 12.9285 12.843 12.7485 12.879C12.5685 12.915 12.4095 12.933 12.2715 12.933C11.9655 12.933 11.7225 12.846 11.5425 12.672C11.3685 12.498 11.2815 12.255 11.2815 11.943V6.29999ZM8.48 12.96C8.09 12.96 7.724 12.897 7.382 12.771C7.04 12.639 6.746 12.444 6.5 12.186L6.806 11.628C7.076 11.88 7.346 12.06 7.616 12.168C7.886 12.276 8.162 12.33 8.444 12.33C8.768 12.33 9.032 12.27 9.236 12.15C9.44 12.024 9.542 11.841 9.542 11.601C9.542 11.427 9.488 11.298 9.38 11.214C9.278 11.13 9.131 11.061 8.939 11.007C8.747 10.947 8.519 10.881 8.255 10.809C7.931 10.713 7.658 10.611 7.436 10.503C7.214 10.395 7.046 10.26 6.932 10.098C6.818 9.93599 6.761 9.73199 6.761 9.48599C6.761 9.18599 6.839 8.93399 6.995 8.72999C7.151 8.51999 7.364 8.36099 7.634 8.25299C7.91 8.14499 8.222 8.09099 8.57 8.09099C8.918 8.09099 9.233 8.14499 9.515 8.25299C9.797 8.36099 10.04 8.51999 10.244 8.72999L9.884 9.27899C9.698 9.08699 9.494 8.94599 9.272 8.85599C9.05 8.75999 8.801 8.71199 8.525 8.71199C8.363 8.71199 8.204 8.73299 8.048 8.77499C7.892 8.81099 7.763 8.87999 7.661 8.98199C7.559 9.07799 7.508 9.21599 7.508 9.39599C7.508 9.54599 7.547 9.66599 7.625 9.75599C7.709 9.83999 7.829 9.91199 7.985 9.97199C8.147 10.032 8.342 10.098 8.57 10.17C8.924 10.272 9.23 10.374 9.488 10.476C9.752 10.578 9.956 10.71 10.1 10.872C10.244 11.034 10.316 11.259 10.316 11.547C10.316 11.991 10.148 12.339 9.812 12.591C9.476 12.837 9.032 12.96 8.48 12.96Z",fill:"var(--arc-color-logo-storyline, #c560b3)"})}),Ki=r=>(0,i.jsx)("svg",{...r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 87.3C191.5 87.3 87.3 191.5 87.3 320C87.3 448.5 191.5 552.7 320 552.7C448.5 552.7 552.7 448.5 552.7 320C552.7 191.5 448.5 87.3 320 87.3zM267.5 259C278.1 258.9 288.6 260.7 298.5 264.4C307.4 267.6 315.6 272.3 322.8 278.5L311.5 293.5C305.4 288.1 298.3 283.9 290.6 281.2C283 278.5 275 277.1 266.9 277.1C258.8 276.8 250.9 278.9 243.9 282.9C237.6 286.8 233.9 293.9 234.4 301.4C234.3 304.3 234.9 307.2 236.2 309.9C237.7 312.4 239.7 314.4 242.3 315.8C245.7 317.7 249.4 319.3 253.2 320.3C257.6 321.6 262.9 323 269.1 324.5C278.9 326.8 287.4 329.1 294.6 331.4C301 333.3 307 336.1 312.7 339.7C317.1 342.5 320.8 346.4 323.4 351C325.9 355.9 327.1 361.3 326.9 366.8C327.3 379.6 321.4 391.9 311.1 399.5C298.6 408.2 283.7 412.4 268.5 411.6C256.6 411.6 244.8 409.7 233.5 406.1C222.7 402.8 212.6 397.4 203.9 390.2L214.6 373.6C222.5 379.8 231.2 384.7 240.6 388.4C249.3 391.7 258.6 393.4 268 393.3C277 393.8 285.8 391.6 293.5 387C299.6 383.1 303.2 376.3 303 369.1C303.1 365.9 302.2 362.7 300.5 359.9C298.5 357.1 295.9 354.8 292.9 353.3C288.8 351.1 284.4 349.4 279.9 348.2C274.6 346.7 268.5 345.1 261.6 343.4C252.8 341.1 245.1 339 238.7 336.9C233.1 335.2 227.8 332.7 222.9 329.6C219 327.1 215.9 323.6 213.9 319.4C211.9 314.8 210.9 309.8 211.1 304.7C211 297.9 212.5 291.2 215.5 285.1C218.3 279.4 222.4 274.5 227.5 270.7C232.9 266.7 239 263.7 245.4 262C252.6 260 260.1 259 267.5 259zM432.5 401.5C431 402.3 429 403.1 426.6 404.2C424.2 405.3 421.4 406.3 418.3 407.3C415 408.4 411.6 409.2 408.1 409.8C404.3 410.5 400.5 410.8 396.7 410.8C388.3 411 380 408.4 373.3 403.3C366.4 397.6 362.7 388.9 363.4 380L363.4 281L343.4 281L343.4 261.5L363.4 261.5L363.4 212.4L388.2 212.4L388.2 261.5L421.2 261.5L421.2 281L388.2 281L388.2 372.4C388.2 376.9 390.1 381.3 393.6 384.2C396.8 386.7 400.8 388 404.9 387.9C409.5 388 414 387.1 418.3 385.5C421.2 384.4 424 383.2 426.6 381.7z",fill:"var(--arc-color-logo-studio, #dc424a)"})});var Gg;const Bd="fa-width-auto",Wi="fa-fw",Xi="arc-fw",qi="arc-aw",Kg=new RegExp(`(${Bd}|${Wi}|${Xi}|${qi})`,"gi"),Wg=r=>typeof r=="number"?`calc(${r/10}rem * var(--arc-internal-font-size))`:r,Xg={"arc-svg logo-articulate":(0,i.jsx)(Ni,{}),"arc-svg product-ai":(0,i.jsx)(Bi,{}),"arc-svg product-peek":(0,i.jsx)(Fi,{}),"arc-svg product-reach":(0,i.jsx)(Hi,{}),"arc-svg product-review":(0,i.jsx)(Vi,{}),"arc-svg product-rise":(0,i.jsx)(Ui,{}),"arc-svg product-storyline":(0,i.jsx)(Gi,{}),"arc-svg product-studio":(0,i.jsx)(Ki,{})},aw=r=>r&&r.length>0&&r?.includes("arc-svg")?Xg[r]:Gg("span",{className:r}),Fd=r=>{const e=r.includes(Bd),a=r.includes(Wi),t=r.includes(Xi),o=r.includes(qi);return{hasFaAutoWidth:e,hasFaFixedWidth:a,hasArcFixedWidth:t,hasArcAutoWidth:o}},qg=r=>((0,d.isValidElement)(r)&&r.type===Sr?r.props.icon:r)??void 0,Yg=r=>r.replace(Kg,"").trim(),Zg=r=>{const{hasFaFixedWidth:e,hasArcFixedWidth:a,hasArcAutoWidth:t}=Fd(r);return!e&&!a&&!t?`${r} ${qi}`:r},Jg=r=>r&&`${Yg(r)} ${Xi}`,Hd=(r,e)=>{if(typeof r=="string")return e(r);if((0,d.isValidElement)(r)&&r.type===Sr){const a=r.props.icon;return typeof a=="string"?(0,d.cloneElement)(r,{icon:e(a)}):r}return r},Yi=r=>Hd(r,Zg),Vd=r=>Hd(r,Jg),Qg=r=>{const e=qg(r);if(typeof e!="string")return e;const{hasArcFixedWidth:a,hasFaFixedWidth:t}=Fd(e);return a&&!t?`${e} ${Wi}`:e},rv=l`--arc•icon`,Ha=l`${rv}•fg`,ev=l`
@layer arc-components {

[arc-icon] {
  ${Ha}: currentcolor;

  color: var(--arc-icon-color, var(${Ha}));
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
      fill: var(--arc-icon-color, var(${Ha}));
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
    ${Ha}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status=info] {
    ${Ha}: var(--arc-color-fg-info-mid);
  }

  &[arc-icon-status=success] {
    ${Ha}: var(--arc-color-fg-success-mid);
  }

  &[arc-icon-status=warning] {
    ${Ha}: var(--arc-color-fg-warning-mid);
  }

  &[arc-icon-status=error],
  &[arc-icon-status=critical] {
    ${Ha}: var(--arc-color-fg-critical-mid);
  }

  &[arc-icon-status=processing] {
    ${Ha}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status] {
    --fa-primary-color: var(--arc-icon-color, currentcolor);
    --fa-secondary-color: color-mix(in srgb, currentcolor 20%, transparent);
    --fa-secondary-opacity: 1;
  }
}

}
`,av=r=>(0,i.jsx)(Sr,{...r,icon:"fa-kit fa-articulate arc-aw",color:r?.color||"var(--arc-color-logo-articulate, #000000)","aria-label":r?.["aria-label"]||"Articulate Logo"}),tv=r=>(0,i.jsx)(Sr,{...r,icon:"fa-kit fa-product-badge-ai arc-aw","aria-label":r?.["aria-label"]||"Articulate AI Logo",gradient:r?.gradient||"ai"}),ov=r=>(0,i.jsx)(Sr,{...r,icon:"fa-kit fa-product-badge-peek arc-aw",color:r?.color||"var(--arc-color-logo-peek, #497add)","aria-label":r?.["aria-label"]||"Articulate Peek Logo"}),nv=r=>(0,i.jsx)(Sr,{...r,icon:"fa-kit fa-product-badge-reach arc-aw",color:r?.color||"var(--arc-color-logo-reach, #0081de)","aria-label":r?.["aria-label"]||"Articulate Reach Logo"}),cv=r=>(0,i.jsx)(Sr,{...r,icon:"fa-kit fa-product-badge-review arc-aw",color:r?.color||"var(--arc-color-logo-review, #35b062)","aria-label":r?.["aria-label"]||"Articulate Review Logo"}),iv=r=>(0,i.jsx)(Sr,{...r,icon:"fa-kit fa-product-badge-rise arc-aw",color:r?.color||"var(--arc-color-logo-rise, #ff6602)","aria-label":r?.["aria-label"]||"Articulate Rise Logo"}),sv=r=>(0,i.jsx)(Sr,{...r,icon:"fa-kit fa-product-badge-storyline arc-aw",color:r?.color||"var(--arc-color-logo-storyline, #c560b3)","aria-label":r?.["aria-label"]||"Articulate Storyline Logo"}),lv=r=>(0,i.jsx)(Sr,{...r,icon:"fa-kit fa-product-badge-studio arc-aw",color:r?.color||"var(--arc-color-logo-studio, #dc424a)","aria-label":r?.["aria-label"]||"Articulate Studio Logo"}),Sr=({children:r,icon:e="fa-regular fa-circle-dashed",color:a,size:t,style:o,gradient:n,...c})=>{const s={...o,"--arc-icon-size":Wg(t),"--arc-icon-color":a},u=!!(c["aria-label"]||c["aria-labelledby"]),h=Qg(e),p=typeof h=="string"&&h.length>0?(0,i.jsx)("span",{className:h}):h;return(0,i.jsx)("span",{"aria-hidden":!u||void 0,...c,"arc-icon":"",style:s,"arc-gradient":n,children:r||p})};zr("ArcIcon",ev),Sr.Articulate=av,Sr.AI=tv,Sr.Peek=ov,Sr.Reach=nv,Sr.Review=cv,Sr.Rise=iv,Sr.Storyline=sv,Sr.Studio=lv,Sr.SVGArticulate=Ni,Sr.SVGAI=Bi,Sr.SVGPeek=Fi,Sr.SVGReach=Hi,Sr.SVGReview=Vi,Sr.SVGRise=Ui,Sr.SVGStoryline=Gi,Sr.SVGStudio=Ki;const dv=({children:r,icon:e,color:a,...t})=>(0,i.jsx)("span",{...t,"data-element":"anonymous","data-color":"neutral",children:r||(0,i.jsx)(Sr,{icon:e})}),Ud="blue",Gd="neutral",uv="fa-solid fa-user arc-aw",rc=(0,d.forwardRef)(({children:r,size:e,color:a,isActive:t=!0,isAnonymous:o,alt:n,src:c,name:s,email:u,...h},p)=>{const[v,g]=(0,d.useState)(!1),[f,m]=(0,d.useState)(!1),$=P=>{g(!0),m(!1),h.onLoad?.(P)},k=P=>{g(!1),m(!0),h.onError?.(P)},A=zg(s||u),y=!!A,w=o||(!v||f)&&!y,x=!w&&!!c&&!f||void 0,z=(w&&Gd||void 0)??(a||void 0)??Ig(String(u||s||void 0),Ld,Ud)??Ud,_={src:c,alt:n,isLoaded:v,hasError:f,onLoad:$,onError:k};return(0,d.useEffect)(()=>{w&&g(!1)},[w]),(0,i.jsx)("span",{...h,ref:p,"arc-avatar":"","data-is-inactive":!t||void 0,"data-size":e,"aria-label":(h.title??s??u)||void 0,children:r||(w?(0,i.jsx)(dv,{icon:uv,color:Gd}):(0,i.jsxs)(i.Fragment,{children:[x&&(0,i.jsx)(Fg,{..._}),y&&(0,i.jsx)(Bg,{initial:A,color:z})]}))})});zr("ArcAvatar",Ng);const Te=l`${Vr}•text`,bt=l`${Vr}•subtext`,Ft=l`${Vr}•gap`,hv=l`
@layer arc-components {

  [arc-avatar-text] {
    ${Te}•font•size: var(${b}•14);
    ${bt}•font•size: var(${b}•12);
    ${Ft}: var(${b}•8);

    ${Te}•overflow: unset;
    ${Te}•text•overflow: unset;
    ${Te}•white•space: unset;

    &[data-overflow=truncate] {
      ${Te}•overflow: hidden;
      ${Te}•text•overflow: ellipsis;
      ${Te}•white•space: nowrap;
    }

    &:has([data-size=inherit]) {
      ${Te}•font•size: 1em;
      ${bt}•font•size: 0.875em;
      ${Ft}: 0.5em;
    }

    &:has([data-size=lg]) {
      ${Te}•font•size: var(--arc-font-size-14);
      ${bt}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=md]) { /* @default size */
      ${Te}•font•size: var(--arc-font-size-14);
      ${bt}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=sm]) {
      ${Te}•font•size: var(--arc-font-size-14);
      ${bt}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=xs]) {
      ${Te}•font•size: var(--arc-font-size-12);
      ${bt}•font•size: var(--arc-font-size-12);
      ${Ft}: var(--arc-space-0-75);
    }

    &[data-gap=lg] { ${Ft}: var(${b}•12); }
    &[data-gap=sm] { ${Ft}: var(${b}•4); }
  }

  [arc-avatar-text] {
    font-size: var(--arc-avatar-text-font-size, var(${Te}•font•size));
    display: inline-flex;
    align-items: center;
    gap: var(--arc-avatar-text-gap, var(${Ft}));
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
      font-size: var(--arc-avatar-subtext-font-size, var(${bt}•font•size));

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      color: var(--arc-avatar-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));
    }

    :where([data-element=text], [data-element=subtext]) {
      overflow: var(${Te}•overflow);
      text-overflow: var(${Te}•text•overflow);
      white-space: var(${Te}•white•space);
    }
  }

}
`,ec=({children:r,avatar:e={},subtext:a,size:t,gapSize:o,overflow:n,isStrong:c,...s})=>{const u=Pd(e),h=r||Rd(e),p=o!=="inherit"?o:void 0,v=n!=="inherit"?n:void 0;return(0,i.jsxs)("span",{...s,"arc-avatar-text":"","data-gap":p,"data-overflow":v,"is-strong":c?"":void 0,children:[(0,i.jsx)(rc,{...e,isAnonymous:u,size:t}),(0,i.jsxs)("span",{"data-element":"text",children:[h,a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("small",{"data-element":"subtext",children:a})]})]})]})};zr("ArcAvatarText",hv);const pv=l`
@layer arc-components {

  [arc-avatar-pile] {
    --arc-button-inline-spacing: 0;

    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0;

    ${Oi}
    ${Md}

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
`,gv=({size:r="md",...e})=>(0,i.jsx)("div",{...e,"arc-avatar-pile":"","data-size":r});zr("ArcAvatarPile",pv);const la=typeof window>"u"?d.useEffect:d.useLayoutEffect,Ro=(r,e=1/0,a=" ")=>[...r].flat(e)?.filter(Boolean)?.join(a),Zi=[...wo],Ji=[...Na],vv=[...Ja],Kd=$r(Yr,["common"]),fv=$r(Yr,["ai","brand"]),Wd=Wr(Lt,["compact","comfortable"]),ac=["nw-corner","top-start","top-center","top-end","ne-corner","left-start","right-start","left-center","center","right-center","left-end","right-end","sw-corner","bottom-start","bottom-center","bottom-end","se-corner"],Qi=["ignore","flip"],Me={popover:Zi[0],anchorAt:ac[13],boundary:Qi[0],tryFallbacks:!1,fallbackAnchors:[],variant:Kd[0],scheme:Ji[0],density:Wd[0],isInverse:!1,hasTail:!1,tailSize:8,offset:0},rs=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("position-anchor","--anchor-name")&&CSS.supports("container-type","anchored"),mv=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("container-type","anchored"),tc={canAnchor:rs(),canAnchoredContainers:mv()},Xd=!tc.canAnchor,qd=["center","nw-corner","ne-corner","se-corner","sw-corner"],Yd=r=>{if(!Array.isArray(r)||r.length===0)return[];const e=new Set;return r.filter(a=>!ac.includes(a)||e.has(a)?!1:(e.add(a),!0))},Zd=r=>`--js\u2022try-${r}`,Jd=({canHaveTail:r,tailSize:e})=>{if(!r)return{cssTailVar:"",floatingTailPx:0};const a=Math.abs(Number(e||Me.tailSize)),t=a>0?a:Me.tailSize;return{cssTailVar:t===Me.tailSize?"":`${t}px`,floatingTailPx:t}},Qd=(r,e="toggle",a=document)=>{const t=a.getElementById(r);({toggle:()=>t?.togglePopover(),show:()=>t?.showPopover(),hide:()=>t?.hidePopover()})[e]()},Lo=new WeakMap,es=r=>{const e=String(r??"").trim();if(e==="none")return"none";let a=e.replace(/[^\w-]/g,"-");for(;a.startsWith("-");)a=a.slice(1);for(;a.endsWith("-");)a=a.slice(0,-1);return a?`--${a}`:"--"},Mo=r=>{const e=es(r);return e==="none"?null:e},ru=(r,e)=>{const a=Mo(e);if(!a)return()=>{};let t=Lo.get(r);return t||(t=new Set,Lo.set(r,t)),t.has(a)?()=>{}:(t.add(a),r.style.setProperty("anchor-name",Ro([...t],1/0,", ")),()=>{const o=Lo.get(r);if(o){if(o.delete(a),o.size===0){Lo.delete(r),r.style.removeProperty("anchor-name");return}r.style.setProperty("anchor-name",Ro([...o],1/0,", "))}})},jo=r=>`${Math.round(r*100)/100}px`,bv=[{test:(r,e,a)=>r==="y"&&e.includes("top")&&a.includes("top"),value:-1},{test:(r,e,a)=>r==="y"&&e.includes("top")&&a.includes("bottom"),value:-1},{test:(r,e,a)=>r==="y"&&e.includes("bottom")&&a.includes("top"),value:1},{test:(r,e,a)=>r==="x"&&e.includes("left")&&a.includes("left"),value:-1},{test:(r,e,a)=>r==="x"&&e.includes("left")&&a.includes("right"),value:-1},{test:(r,e,a)=>r==="x"&&e.includes("right")&&a.includes("left"),value:1}],as=(r,e,a)=>bv.find(t=>t.test(r,e,a))?.value||0;let ts;const $v=()=>typeof window<"u"&&typeof CSS<"u"&&typeof CSS.supports=="function"&&!(CSS.supports("position-anchor","--anchor-name")&&CSS.supports("container-type","anchored")),os=()=>(ts||(ts=na.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_6_node_modules_floating-ui_dom_dist_floa-2134bb").then(na.bind(na,22251))),ts);$v()&&os().catch(()=>{});const eu=r=>r==="start"||r==="end"?r:"center",yv=r=>{const e=r.split("-")[0];return e==="top"||e==="right"||e==="bottom"||e==="left"?e:null},au=r=>{const e=yv(r),a=eu(r.split("-")[1]);switch(e){case"top":return{block:"start",inline:a};case"bottom":return{block:"end",inline:a};case"left":return{block:a,inline:"start"};case"right":return{block:a,inline:"end"};default:return{block:"center",inline:"center"}}},tu=(r,e)=>r!=="center"&&e!=="center"&&r!==e,ou=(r,e)=>{const a=au(r),t=au(e),o=tu(a.block,t.block),n=tu(a.inline,t.inline);return o&&n?"flip-block-inline":o?"flip-block":n?"flip-inline":""},ns={...{"top-start":"top-start","top-end":"top-end","right-start":"right-start","right-end":"right-end","bottom-start":"bottom-start","bottom-end":"bottom-end","left-start":"left-start","left-end":"left-end"},...{"top-center":"top","right-center":"right","bottom-center":"bottom","left-center":"left",center:"bottom","nw-corner":"top-start","ne-corner":"top-end","sw-corner":"bottom-start","se-corner":"bottom-end"}},cs=r=>r.split("-")[0],xv=r=>r.split("-")[1],kv=r=>r==="x"?"y":"x",wv=r=>r==="y"?"height":"width",is=r=>["top","bottom"].includes(cs(r))?"y":"x",Av=r=>kv(is(r)),Sv=(r,e,a,t)=>{const o=is(a),n=Av(a),c=wv(n),s=cs(a),u=o==="y",h=r.x+r.width/2-e.width/2,p=r.y+r.height/2-e.height/2,v=r[c]/2-e[c]/2;let g;switch(s){case"top":g={x:h,y:r.y-e.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-e.width,y:p};break;default:g={x:r.x,y:r.y}}switch(xv(a)){case"start":g[n]-=v*(t&&u?-1:1);break;case"end":g[n]+=v*(t&&u?-1:1);break;default:break}return g},Cv=(r,e,a,t)=>{const o=cs(r),n=is(r)==="y",c=o==="left"||o==="top"?-1:1,s=a&&n?-1:1,u=e,h=0;return n?{x:t.x+h*s,y:t.y+u*c}:{x:t.x+u*c,y:t.y+h*s}},nu=r=>({x:r.x,y:r.y,width:r.width,height:r.height}),Ev=({anchorEl:r,popoverEl:e,placement:a,offsetPx:t,tailOffset:o,getTailModifier:n})=>{const c=getComputedStyle(e).direction==="rtl",s=nu(r.getBoundingClientRect()),u=nu(e.getBoundingClientRect());let h=Sv(s,u,a,c);h=Cv(a,t,c,h);const p=h.x+o*n("x",a,a),v=h.y+o*n("y",a,a);e.style.setProperty("left",jo(p)),e.style.setProperty("top",jo(v))},zv=({anchorEl:r,popoverEl:e,anchorAt:a,tryFallbacks:t,fallbackAnchors:o,offsetPx:n,tailSizePx:c,hasTail:s,isOpen:u})=>{const h=o.join("|");la(()=>{if(!(u&&!rs()&&!!r&&!!e))return;const v=r,g=e,f=ns[a];let m=!0,$;const k=s?Math.max(0,c)*Math.SQRT1_2:0;return Ev({anchorEl:v,popoverEl:g,placement:f,offsetPx:n,tailOffset:k,getTailModifier:as}),(async()=>{try{const{autoUpdate:w,computePosition:x,flip:z,offset:_,shift:P,limitShift:C}=await os();if(!m)return;const S=[_(n)];t&&(o.length?S.push(z({fallbackPlacements:o.map(B=>ns[B]),fallbackStrategy:"initialPlacement"})):S.push(z({fallbackStrategy:"bestFit"}))),S.push(P({crossAxis:!t,limiter:C()}));const I=async()=>{try{const B=await x(v,g,{placement:f,strategy:"fixed",middleware:S});if(!m||!v.isConnected||!g.isConnected)return;const N=B.x+k*as("x",B.placement,f),V=B.y+k*as("y",B.placement,f);if(g.style.setProperty("left",jo(N)),g.style.setProperty("top",jo(V)),!s||!t){delete g.dataset.fallbacks,delete g.dataset.resolvedAt;return}if(o.length){const M=[a,...o].find(D=>ns[D]===B.placement);delete g.dataset.fallbacks,M&&M!==a?g.dataset.resolvedAt=M:delete g.dataset.resolvedAt;return}delete g.dataset.resolvedAt;const Z=ou(f,B.placement);Z?g.dataset.fallbacks=Z:delete g.dataset.fallbacks}catch{}};await I(),$=w(v,g,I)}catch{}})(),()=>{m=!1,$?.()}},[a,r,h,s,u,n,e,c,t])},oc=1,Ht=2,_v=[{test:(r,e)=>e.top>=r.bottom+oc,value:"bottom"},{test:(r,e)=>e.bottom<=r.top-oc,value:"top"},{test:(r,e)=>e.left>=r.right+oc,value:"right"},{test:(r,e)=>e.right<=r.left-oc,value:"left"}],Do=r=>{delete r.dataset.fallbacks,delete r.dataset.resolvedAt},nc=r=>({x:r.left+r.width/2,y:r.top+r.height/2}),Iv=(r,e,a,t)=>{const o=nc(e),n=nc(a);if(r==="top"||r==="bottom"){const h=Math.abs(t==="rtl"?a.right-e.right:a.left-e.left),p=Math.abs(t==="rtl"?a.left-e.left:a.right-e.right),v=Math.abs(n.x-o.x);return Math.abs(h-p)<=Ht&&v<=Ht||v+Ht<Math.min(h,p)?"center":h<=p?"start":"end"}const c=Math.abs(a.top-e.top),s=Math.abs(a.bottom-e.bottom),u=Math.abs(n.y-o.y);return Math.abs(c-s)<=Ht&&u<=Ht||u+Ht<Math.min(c,s)?"center":c<=s?"start":"end"},Tv=(r,e,a,t)=>{const o=_v.find(u=>u.test(e,a));let n;if(o)n=o.value;else{const u=nc(e),h=nc(a),p=h.y-u.y,v=h.x-u.x,g=Math.min(e.height,a.height)*.1;Math.abs(p)>g?n=p>=0?"bottom":"top":n=v>=0?"right":"left"}if(eu(r.split("-")[1])==="center")return n;const s=Iv(n,e,a,t);return`${n}-${s}`},Pv=({anchorEl:r,popoverEl:e,anchorAt:a,tryFallbacks:t,fallbackAnchors:o,isOpen:n,hasTail:c})=>{const s=o.join("|");la(()=>{if(!e||!tc.canAnchor)return;if(!c||!t||!n||tc.canAnchoredContainers||!r){Do(e);return}const u=a;if(u==="center"||u.includes("corner")){Do(e);return}const h=r,p=e;let v=!0,g;const f=()=>{const $=h.getBoundingClientRect(),k=p.getBoundingClientRect(),A=getComputedStyle(h).direction==="rtl"?"rtl":"ltr",y=Tv(u,$,k,A);if(o.length){const z=y.split("-")[0],_=[u,...o],P=_.find(C=>C===y)??_.find(C=>C.split("-")[0]===z);delete p.dataset.fallbacks,P&&P!==u?p.dataset.resolvedAt=P:delete p.dataset.resolvedAt;return}delete p.dataset.resolvedAt;const w=ou(u,y);u===y?Do(p):w?p.dataset.fallbacks=w:Do(p)};return(async()=>{try{const{autoUpdate:k}=await os();if(!v)return;g=k(h,p,f),f()}catch{}})(),()=>{v=!1,g?.(),Do(p)}},[a,r,s,c,n,e,t])},cu=(r,e=" ")=>r.split(e).map(a=>a.trim()).filter(Boolean),Rv=l`
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
`,ss=(0,d.forwardRef)(({progress:r,...e},a)=>(0,i.jsxs)("svg",{...e,ref:a,viewBox:"0 0 100 100","arc-spinner":"",style:{"--arc-spinner-progress":r??""},children:[(0,i.jsx)("circle",{"arc-spinner-circle":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"}),(0,i.jsx)("circle",{"arc-spinner-progress":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"})]}));ss.displayName="ArcSpinner",zr("ArcSpinner",Rv);const Lv=(...r)=>console.log(...r),iu=(...r)=>console.warn(...r),Mv=(...r)=>console.error(...r),Vt=l`--arc•icon•text`,Oo=l`${Vt}•font•size`,su=l`${Vt}•icon`,ls=l`${Vt}•text`,lu=l`${Vt}•subtext`,da=l`${Vt}•fg`,Va=l`${Vt}•gap`,tt=l`${su}•size`,du=l`${su}•vertical•align`,No=l`${ls}•overflow`,cc=l`${ls}•text•overflow`,ic=l`${ls}•white•space`,sc=l`${lu}•font•size`,uu=l`${lu}•fg`,jv=l`

  &[data-variant=inherit] { /* @default 'inherit' • uses font/color props from context */
    ${da}: currentcolor;
  }

  &[data-variant=primary] {
    ${da}: var(--arc-color-fg-primary);
  }

  &[data-variant=secondary] {
    ${da}: var(--arc-color-fg-secondary);
  }

  &[data-variant=inverse] {
    ${da}: var(--arc-color-dark-neutral-1000);
  }

  &[data-variant=brand] {
    ${da}: var(--arc-color-fg-brand-stark);
  }

  &[data-variant=info] {
    ${da}: var(--arc-color-fg-info-stark);
  }

  &[data-variant=success] {
    ${da}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=warning] {
    ${da}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=critical] {
    ${da}: var(--arc-color-fg-critical-mid);
  }

`,Dv=l`

  /* Overall Text Sizes */

  &[data-size=inherit] { /* @default 'inherit' • uses font/size from context */
    ${Oo}: 1em;
    ${sc}: 0.75em;
    ${tt}: 1em;
    ${Va}: 0.25em; /* 4px @ 100% */
  }

  &[data-size=md] {
    ${Oo}: var(--arc-font-size-14);
    ${sc}: var(--arc-font-size-12);
    ${Va}: var(${L}•3);
  }

  &[data-size=sm] {
    ${Oo}: var(--arc-font-size-12);
    ${sc}: var(--arc-font-size-12);
    ${Va}: var(${L}•3);
  }

  /* Gap Sizes */

  &[data-gap=lg] { ${Va}: var(${L}•12); } /* 12px @ 100% */
  &[data-gap=md] { ${Va}: var(${L}•8); }  /* 8px @ 100% */
  &[data-gap=sm] { ${Va}: var(${L}•3); }  /* 4px @ 100% */

  /* Icon Sizes */

  &[icon-size=xl] { ${tt}: var(${b}•24); }
  &[icon-size=lg] { ${tt}: var(${b}•20); }
  &[icon-size=md] { ${tt}: var(${b}•16); }
  &[icon-size=sm] { ${tt}: var(${b}•14); }
  &[icon-size=xs] { ${tt}: var(${b}•12); }
`,Ov=l`

  /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  ${uu}: var(--arc-icon-text-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));

  /* ArcIcon */
  --arc-icon-color: var(--arc-icon-text-icon-color, var(${da}));
  --arc-icon-size: var(--arc-icon-text-icon-size, var(${tt}));
  --arc-icon-fa-line-height: normal;
  --arc-icon-align-self: baseline;

  &[data-layout=inline] {
    ${No}: unset;
    ${cc}: unset;
    ${ic}: unset;

    ${du}: calc((var(${tt}) - var(${Oo})) / -2);

    &:has(svg) { ${du}: text-bottom; }
  }

  /* Text Overflows */
  &[data-layout=gutter] {
    ${No}: visible;
    ${cc}: unset;
    ${ic}: normal;

    &[data-overflow=truncate] {
      ${No}: hidden;
      ${cc}: ellipsis;
      ${ic}: nowrap;
    }
  }

`,Nv=l`
@layer arc-components {

  [arc-icon-text] {
    ${jv}
    ${Dv}
    ${Ov}
  }

  [arc-icon-text] {
    position: var(--arc-icon-text-position, relative);
    font-size: var(--arc-icon-text-font-size, var(${Oo}));
    color: var(--arc-icon-text-text-color, var(${da}));
    line-height: var(--arc-icon-text-line-height, inherit);

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
      gap: var(--arc-icon-text-gap, var(${Va}));

      /* Truncation Support */
      overflow: var(--arc-icon-text-overflow, var(${No}));

      &[is-flipped] { flex-direction: row-reverse; }

      [data-element=text] {
        flex: 1;
        min-width: 0%;
      }

      [data-element=subtext] {
        display: var(--arc-icon-text-subtext-display, block);
        line-height: normal;
        font-size: var(--arc-icon-text-subtext-font-size, var(${sc}));
        color: var(--arc-icon-text-subtext-color, var(${uu}));
        padding-block-start: var(--arc-icon-text-subtext-spacing, 0);
      }

      :where([data-element=text], [data-element=subtext]) {
        overflow: var(--arc-icon-text-overflow, var(${No}));
        text-overflow: var(--arc-icon-text-text-overflow, var(${cc}));
        white-space: var(--arc-icon-text-white-space, var(${ic}));
      }
    }

    &[data-layout=inline] {
      display: inline;

      [data-element=icon] + [data-element=text] { margin-inline-start: var(--arc-icon-text-gap, var(${Va})); }
      [data-element=text]:has(+ [data-element=icon]) { margin-inline-end: var(--arc-icon-text-gap, var(${Va})); }
      [data-element=subtext] { display: contents; }
    }
  }

  [arc-icon-text] {
    &[arc-icon-status=brand],
    &[arc-icon-status=announcement] {
      --arc-icon-color: var(--arc-color-fg-brand-mid);
    }

    &[arc-icon-status=info] {
      --arc-icon-color: var(--arc-color-fg-info-mid);
    }

    &[arc-icon-status=success] {
      --arc-icon-color: var(--arc-color-fg-success-mid);
    }

    &[arc-icon-status=warning] {
      --arc-icon-color: var(--arc-color-fg-warning-mid);
    }

    &[arc-icon-status=error],
    &[arc-icon-status=critical] {
      --arc-icon-color: var(--arc-color-fg-critical-mid);
    }

    &[arc-icon-status=processing] {
      --arc-icon-color: var(--arc-color-fg-brand-mid);
    }
  }
}

`,Bv=$r(Yr,["inherit","primary","secondary","inverse","brand","info","success","warning","critical"]),ie=({children:r,layout:e="gutter",size:a="inherit",variant:t="inherit",tag:o="span",icon:n,iconTooltip:c,text:s,subtext:u,gradient:h,overflow:p,iconSize:v,gapSize:g,isFlipped:f=!1,isStrong:m=!1,...$})=>{const k=r||s,A=!!n,y=!!k,w=e==="gutter",x=e==="inline",z=A&&(!f||w),_=A&&y&&f&&x,P=!!v&&v!=="inherit",C=P&&Ao.includes(v)?v:void 0,S=P&&!Ao.includes(v)?v:void 0,I=g!=="inherit"?g:void 0,B=p!=="inherit"?p:void 0,N=Yi(n),V=typeof N=="string"?(0,i.jsx)(Sr,{icon:N,size:S,gradient:h}):N,Z=c?(0,i.jsx)(mc,{text:c,children:V}):V;return(0,i.jsxs)(o,{...$,"arc-icon-text":"","data-variant":t,"data-layout":e,"data-overflow":B,"data-size":a,"data-gap":I,"icon-size":C,"is-flipped":f?"":void 0,"is-strong":m?"":void 0,children:[z&&(0,i.jsx)("span",{"data-element":"icon",children:Z}),y&&(0,i.jsxs)("span",{"data-element":"text",children:[k,!!u&&(w?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("small",{"data-element":"subtext",children:u})]}):(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("span",{"data-element":"subtext",children:u})]}))]}),_&&(0,i.jsx)("span",{"data-element":"icon",children:Z})]})};zr("ArcIconText",Nv);const ua={...Me,popover:Zi[2],anchorAt:ac[2],boundary:Qi[1],tryFallbacks:!0,scheme:Ji[3],offset:4,isStrong:!0,hasTail:!0,isEnabled:!0},lc=new WeakSet,Fv=100,Hv=100;let ds=!0,us=null;const Vv=typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("selector(:focus-visible)"),Uv=r=>r instanceof Element?Vv?r.matches(":focus-visible")===!0:ds:!1,hs=new WeakMap,ps=new WeakMap,Bo=new Set,dc=(r,e)=>{const a=r.get(e);a!=null&&(clearTimeout(a),r.delete(e))},hu=(r,e,a,t)=>{const o=window.setTimeout(()=>{t(),r.delete(e)},a);r.set(e,o)},pu="[aria-describedby]",Gv=r=>typeof r=="object"&&r!==null&&r.hasAttribute?.("popover")===!0,gu=r=>r instanceof HTMLElement&&r.getAttribute("role")==="tooltip"&&Gv(r),Kv=r=>!!r&&(r.tagName==="LABEL"||r.hasAttribute("arc-label")),Wv=r=>r?.match(/\S+/g)??[],gs=(r,e)=>{const a=wa(e??document.documentElement);if(!a)return null;const t=a.querySelector(`[aria-describedby~="${r}"]`);return t?t.closest("label,[arc-label]")??t:null},Xv=r=>{if(!(r instanceof Element))return null;const e=r.closest?.(pu);if(e){const t=e.getAttribute("aria-describedby")??"";if(t)return{anchor:e.closest?.("label,[arc-label]")??e,tooltipId:t}}let a=r;for(;a;){if(Kv(a)){const t=a.querySelector?.(pu),o=t?.getAttribute?.("aria-describedby")??"";if(t&&o)return{anchor:a,tooltipId:o}}a=a.parentElement}return null},qv=r=>{if(!(r instanceof Element))return null;const e=r.closest?.('[role="tooltip"][popover]')??null;return e instanceof HTMLElement?e:null},Yv=r=>r?.id?gs(r.id,r):null,Zv=r=>{const e=qv(r),a=Xv(r);if(!a&&e){const u=Yv(e);return!u||!e.id?null:{anchor:u,tooltip:e}}if(!a)return null;const{anchor:t,tooltipId:o}=a;if(!o)return null;const n=wa(r);if(!n)return null;const c=Wv(o),s=e??c.map(u=>n.getElementById(u)).find(u=>gu(u))??null;return gu(s)?{anchor:t,tooltip:s}:null},Jv=(r,e,a)=>{const t=a instanceof Element?a:null;if(!t)return!1;const o=r===t||r.contains(t),n=e===t||e.contains(t);return o||n},vu=r=>{r.isConnected&&(r.showPopover?.(),Bo.add(r))},fu=r=>{r.isConnected&&(r.hidePopover?.(),Bo.delete(r))},Qv=(r,e)=>{if(dc(ps,r),dc(hs,r),!e){vu(r);return}hu(hs,r,Fv,()=>vu(r))},vs=(r,e)=>{if(dc(hs,r),dc(ps,r),!e){fu(r);return}hu(ps,r,Hv,()=>fu(r))},rf=()=>{Bo.forEach(r=>{vs(r,!1)})},Fo=(r,e,a,t)=>{const o=Zv(e);if(!o)return;const{anchor:n,tooltip:c}=o;if(r){Qv(c,t);return}Jv(n,c,a)||vs(c,t)};let uc=null,hc=null,pc=null,gc=null,vc=null,fc=null,Ut=null,Ho=null;const mu=r=>{if(!r&&typeof document>"u")return;const e=r?wa(r):document;if(!e||lc.has(e))return;fc=t=>{ds=!1,us=t.target},Ut=()=>{us=null},uc=t=>Fo(!0,t.target,void 0,!0),pc=t=>Fo(!1,t.target,t.relatedTarget,!0),hc=t=>{Uv(t.target)&&Fo(!0,t.target,void 0,!1)},gc=t=>{const o=t.relatedTarget??us;Fo(!1,t.target,o,!1)},vc=t=>{t.key==="Tab"&&(ds=!0),t.key==="Escape"&&(Bo.size>0&&t.preventDefault(),Fo(!1,t.target,void 0,!1),Bo.forEach(o=>vs(o,!1)))},Ho=t=>{if(t.newState!=="open")return;const{target:o}=t;if(o instanceof HTMLElement&&o.getAttribute("role")!=="tooltip"&&o.getAttribute("popover")!=="manual"){try{if(!o.matches("[popover]:popover-open"))return}catch{return}rf()}},[["pointerdown",fc],["pointerup",Ut],["pointercancel",Ut],["pointerover",uc],["focusin",hc],["pointerout",pc],["focusout",gc],["keydown",vc]].forEach(([t,o])=>{e.addEventListener(t,o)}),e.addEventListener("toggle",Ho,!0),lc.add(e)},ef=()=>{if(!lc.has(document)||typeof document>"u")return;[["pointerdown",fc],["pointerup",Ut],["pointercancel",Ut],["pointerover",uc],["focusin",hc],["pointerout",pc],["focusout",gc],["keydown",vc]].forEach(([e,a])=>{a&&document.removeEventListener(e,a)}),Ho&&document.removeEventListener("toggle",Ho,!0),uc=null,hc=null,pc=null,gc=null,vc=null,fc=null,Ut=null,Ho=null,lc.delete(document)},ha=l`--arc•tooltip`,bu=l`${ha}•subtext`,$u=l`${ha}•slot`,af=l`
@layer arc-components {
  [arc-tooltip] {
    ${ha}•width: max-content;
    ${ha}•max•width: 20em;
    ${ha}•font•size: var(${b}•12);
    ${ha}•padding: var(${L}•10);
    ${bu}•spacing: var(${L}•6);
    ${$u}•margin•top: var(${L}•8);

    /* Communicates to Popover Engine ------------------------------• */
    --arc-popover-overflow: var(--arc-tooltip-overflow, clip);
    --arc-popover-border-radius: var(--arc-border-radius-md);
    --arc-popover-min-width: var(--arc-tooltip-min-width, auto); /** Ensure tooltip width is driven by content, not anchor width */
    --arc-popover-width: var(--arc-tooltip-width, var(${ha}•width));
    --arc-popover-max-width: var(--arc-tooltip-max-width, var(${ha}•max•width));
    --arc-popover-border: var(--arc-tooltip-border, 0);
    --arc-popover-footer-flex-direction: var(--arc-tooltip-footer-flex-direction, row);
    --arc-popover-font-size: var(--arc-tooltip-font-size, var(${ha}•font•size));
    --arc-popover-padding: var(--arc-tooltip-padding, var(${ha}•padding));
    --arc-popover-tail-x: var(--arc-tooltip-tail-x, 1.125em);
    --arc-popover-tail-y: var(--arc-tooltip-tail-y, 1.125em);
    --arc-popover-line-height: var(--arc-line-height-tight);

    /* Communicates to IconText ----------------------------------• */
    --arc-icon-text-subtext-font-size: var(--arc-tooltip-subtext-font-size, var(${ha}•font•size));
    --arc-icon-text-hyphens: none;
    --arc-icon-text-subtext-spacing: var(--arc-tooltip-subtext-spacing, var(${bu}•spacing));

    [arc-tooltip-content] {
      text-align: var(--arc-tooltip-text-align, unset);
    }

    [arc-tooltip-content] + [arc-tooltip-slot-content] {
      margin-top: var(--arc-tooltip-slot-margin-top, var(${$u}•margin•top));
    }
  }
}
`,mc=(0,d.forwardRef)(({id:r,children:e,slot:a,isEnabled:t=ua.isEnabled,popover:o=ua.popover,variant:n=ua.variant,anchorAt:c=ua.anchorAt,alternateAnchor:s,boundary:u=ua.boundary,tryFallbacks:h=ua.tryFallbacks,hasTail:p=ua.hasTail,offset:v=ua.offset,scheme:g=ua.scheme,isStrong:f=ua.isStrong,text:m,subtext:$,icon:k,isFlipped:A,...y},w)=>{const x=Nr(r,"arc-tooltip"),z=(0,d.useRef)(null);(0,d.useImperativeHandle)(w,()=>z.current);const _=N=>typeof N=="object"&&N!==null&&"tabIndex"in N,P=e,C=!!s;let S=null;(0,d.isValidElement)(P)?S=t?(0,d.cloneElement)(P,{"aria-describedby":x,..._(P.props)&&P.props.tabIndex!=null?{}:{tabIndex:0}}):P:!C&&typeof console<"u"&&iu("\u{1F6A8} ArcTooltip \u2022 expects a single ReactElement child as the trigger.");const I=(0,d.useMemo)(()=>()=>gs(x,z.current),[x]),B=g==="auto"?void 0:g;return(0,d.useEffect)(()=>{if(t)try{mu(z.current)}catch{}},[t]),(0,i.jsxs)(i.Fragment,{children:[S,t&&(0,i.jsxs)(ga,{...y,"arc-tooltip":"",scheme:y?.isInverse?"inverse":B,role:"tooltip",id:x,ref:z,popover:o,anchorAt:c,tryFallbacks:h??u==="flip",variant:n,hasTail:p,offset:v,hidePopoverButton:!0,alternateAnchor:s??I,tag:y?.tag??"span",contentTag:y?.contentTag??"span",children:[m&&(0,i.jsx)(ie,{"arc-tooltip-content":"",text:m,subtext:$,icon:k,isFlipped:A,isStrong:f,size:"inherit",variant:"inherit"}),a&&(0,i.jsx)("span",{"arc-tooltip-slot-content":"",children:a})]})]})});zr("ArcTooltip",af);const tf=({isFloating:r,isOnMedia:e,shadow:a})=>[{condition:!r&&e,value:"light-md"},{condition:r&&!e,value:"lg"},{condition:r&&e,value:"light-lg"},{condition:r||a===!0,value:"lg"}],of=({isFloating:r,isOnMedia:e,shadow:a})=>tf({isFloating:r,isOnMedia:e,shadow:a}).find(t=>t.condition)?.value??a,nf=({layout:r,isFloating:e})=>[{condition:r==="icon",value:"icon"},{condition:e||r==="hug",value:"hug"},{condition:!e&&r==="fill",value:"fill"}],cf=({layout:r,isFloating:e})=>nf({layout:r,isFloating:e}).find(a=>a.condition)?.value??r,sf=({scheme:r,isInverse:e})=>[{condition:e,value:"inverse"},{condition:r==="auto",value:void 0},{condition:!0,value:r}],lf=({scheme:r,isInverse:e})=>{const a=sf({scheme:r,isInverse:e}).find(t=>t.condition)?.value??r;return a==="auto"?void 0:a},df=$r(xo,["round","square","narrow"]),uf=$r(ke,["xxl","xl","lg","md","sm"]),hf=$r(ca,["hug","fill","icon"]),yu=$r(Yr,["common","neutral","ai","critical","alpha"]),fs=[...Na],pf=[...Nn],xu=$r(Mt,["primary","secondary","tertiary","plain","link-style"]),gf=[...Ja],vf={circle:"round"},ku=({shape:r})=>Qa(r,vf),ms=$r(Yr,["primary","secondary","tertiary","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse"]),wu={primary:{variant:"common",hierarchy:"primary"},secondary:{variant:"common",hierarchy:"secondary"},tertiary:{variant:"common",hierarchy:"tertiary"},"critical-primary":{variant:"critical",hierarchy:"primary"},"critical-secondary":{variant:"critical",hierarchy:"secondary"},"ai-primary":{variant:"ai",hierarchy:"primary"},"ai-secondary":{variant:"ai",hierarchy:"secondary"},"primary-inverse":{variant:"common",hierarchy:"primary",scheme:"inverse"},"secondary-inverse":{variant:"common",hierarchy:"secondary",scheme:"inverse"},"tertiary-inverse":{variant:"common",hierarchy:"tertiary",scheme:"inverse"}},ff=(()=>{const r=new Map;return ms.forEach(e=>{const a=wu[e],t=a.scheme==="inverse"?"inverse":"";r.set(`${a.variant}|${a.hierarchy}|${t}`,e)}),r})(),bs=r=>!!(r&&ms.includes(r)),bc=r=>r!==void 0&&bs(r)?wu[r]:void 0,Au=({variant:r})=>bc(r)?.variant??r,Su=({variant:r,hierarchy:e})=>bc(r)?.hierarchy??e,Cu=({variant:r,isInverse:e,scheme:a})=>bc(r)?.scheme??lf({scheme:a,isInverse:e}),mf={variant:yu[0],hierarchy:xu[0],scheme:fs[0]},bf=({variant:r})=>{const e=bc(r);return e?{variant:e.variant,hierarchy:e.hierarchy,scheme:e.scheme??fs[0]}:mf},$f=({variant:r,hierarchy:e,scheme:a})=>ff.get(`${r}|${e}|${a==="inverse"?"inverse":""}`),qe=l`60deg`,Xr={purple:{50:l`light-dark(#fbf2ff, #210125)`,100:l`light-dark(#efccff, #540160)`,200:l`light-dark(#9c15ff, #ad44cb)`,300:l`light-dark(#680278, #ad44cb)`,400:l`light-dark(#5d3668, #c778de)`,500:l`light-dark(#37003f, #e3a7ff)`,600:l`light-dark(#27002c, #f9ebff)`},blue:{50:l`light-dark(#f4fbff, #00223b)`,100:l`light-dark(#d2f1fe, #02497d)`,200:l`light-dark(#1eb4fb, #169cfe)`,300:l`light-dark(#0179d0, #71bdfe)`,400:l`light-dark(#36648c, #84daff)`,500:l`light-dark(#004273, #b7eaff)`,600:l`light-dark(#012a48, #c2edff)`}},Vo=l`var(--arc-color-overlay-subtle)`,yf=l`
:root {
  --arc-button-critical-bg-hover: light-dark(
    color-mix(in srgb, var(--arc-color-light-red-600), transparent 90%),
    color-mix(in srgb, var(--arc-color-dark-red-700), transparent 75%)
  );

  /* * + secondary floating button */
  --arc-button-floating-bg: ${Vo};
  --arc-button-floating-bg-processing: ${Vo};
  --arc-button-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-floating-bg-focus: ${Vo};
  --arc-button-floating-bg-hover: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-100));
  --arc-button-floating-bg-active: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-200));

  /* critical + floating button */
  --arc-button-critical-floating-bg-hover: var(--arc-color-bg-critical-subtle);
  --arc-button-critical-floating-bg-active: var(--arc-color-bg-critical-muted);

  /* ai + secondary floating button */
  --arc-button-ai-floating-bg: ${Vo} linear-gradient(${qe}, transparent, ${Vo});

  /*
  ai variant gradients that can be slightly transitioned: 'bg-color + gradient(transparent -> color)'
  bg-color can be transitioned, gradient not so much. Result: subtle transition of the bg-color through the transparent parts of the gradient.
  */
  --arc-button-gradient-ai-transparent: transparent linear-gradient(${qe}, transparent, transparent);
  --arc-button-gradient-ai-50: ${Xr.purple[50]} linear-gradient(${qe}, transparent, ${Xr.blue[50]});
  --arc-button-gradient-ai-100: ${Xr.purple[100]} linear-gradient(${qe}, transparent, ${Xr.blue[100]});
  --arc-button-gradient-ai-200: ${Xr.purple[200]} linear-gradient(${qe}, transparent, ${Xr.blue[200]});
  --arc-button-gradient-ai-300: ${Xr.purple[300]} linear-gradient(${qe}, transparent, ${Xr.blue[300]});
  --arc-button-gradient-ai-400: ${Xr.purple[400]} linear-gradient(${qe}, transparent, ${Xr.blue[400]});
  --arc-button-gradient-ai-500: ${Xr.purple[500]} linear-gradient(${qe}, transparent, ${Xr.blue[500]});
  --arc-button-gradient-ai-600: ${Xr.purple[600]} linear-gradient(${qe}, transparent, ${Xr.blue[600]});
}
`,xf=l`
:root {
  --arc-link-fg-hover-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 68.2%, transparent);
  --arc-link-fg-disabled-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 30%, transparent);
  --arc-link-focus-disabled-inverse: light-dark(var(--arc-color-light-blue-300), var(--arc-color-light-blue-600));
}
`,kf=l`
:root {
  /* Tail edge colors for 'variant=ai' popovers */
  --arc-popover-ai-purple-50: ${Xr.purple[50]};
  --arc-popover-ai-purple-200: ${Xr.purple[200]};
  --arc-popover-ai-blue-50: ${Xr.blue[50]};
  --arc-popover-ai-blue-200: ${Xr.blue[200]};
}
`,wf=l`
:root {
  --arc-progress-bar-gradient-ai-200: linear-gradient(${qe}, ${Xr.purple[200]} -0.5em, ${Xr.blue[200]});
}
`,Af=l`
:root {
  --arc-banner-gradient-ai-50: linear-gradient(${qe}, ${Xr.purple[50]}, ${Xr.blue[50]});
  --arc-banner-gradient-ai-100: linear-gradient(${qe}, ${Xr.purple[100]}, ${Xr.blue[100]});
  --arc-banner-gradient-ai-300: linear-gradient(${qe}, ${Xr.purple[300]}, ${Xr.blue[300]});
}
`,O=l`--arc•button`,U=l`${O}•fg`,E=l`${O}•bg`,vr=l`${O}•edge`,Dr=l`${O}•border`,Gt=l`${O}•outline`,He=l`${O}•label`,Pe=l`${O}•mask`,Ir=l`${O}•spinner`,ce=l`${O}•icon`,Se=l`${ce}•svg`,Sf=l`
  &[data-size=xxl] {
    ${O}•font•size: var(${b}•16);
    ${O}•height: var(${b}•56);
    ${Ir}•size: var(${b}•32);
    ${ce}•size: var(${b}•20);
    ${ce}•size•large: var(${b}•24);
    ${Se}•size: var(${b}•25);
    ${Se}•size•large: var(${b}•24);
    ${He}•spacing: var(${b}•12);
    ${O}•spacing: var(${b}•16);
    ${O}•spacing•square: var(${b}•16);
    ${Dr}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=xl] {
    ${O}•font•size: var(${b}•14);
    ${O}•height: var(${b}•48);
    ${Ir}•size: var(${b}•16);
    ${ce}•size: var(${b}•16);
    ${ce}•size•large: var(${b}•20);
    ${Se}•size: var(${b}•20);
    ${Se}•size•large: var(${b}•25);
    ${He}•spacing: var(${b}•10);
    ${O}•spacing: var(${b}•14);
    ${O}•spacing•square: var(${b}•14);
    ${Dr}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=lg] { /** @default */
    ${O}•font•size: var(${b}•14);
    ${O}•height: var(${b}•40);
    ${Ir}•size: var(${b}•16);
    ${ce}•size: var(${b}•16);
    ${ce}•size•large: var(${b}•20);
    ${Se}•size: var(${b}•20);
    ${Se}•size•large: var(${b}•25);
    ${He}•spacing: var(${b}•8);
    ${O}•spacing: var(${b}•12);
    ${O}•spacing•square: var(${b}•10);
    ${Dr}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=inherit] { /* scalable • mimics default size */
    ${O}•font•size: 1em;
    ${O}•height: 2.5em;
    ${He}•font•size: 0.875em;
    ${Ir}•size: 1.125em;
    ${ce}•size: 1.125em;
    ${ce}•size•large: 1.25em;
    ${Se}•size: 1.25em;
    ${Se}•size•large: 1.375em;
    ${He}•spacing: max(8px, 0.5em);
    ${O}•spacing: 0.75em;
    ${O}•spacing•square: 0.625em;
    ${Dr}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=md] {
    ${O}•font•size: var(${b}•14);
    ${O}•height: var(${b}•32);
    ${Ir}•size: var(${b}•16);
    ${ce}•size: var(${b}•14);
    ${ce}•size•large: var(${b}•20);
    ${Se}•size: var(${b}•18);
    ${Se}•size•large: var(${b}•25);
    ${He}•spacing: var(${b}•6);
    ${O}•spacing: var(${b}•10);
    ${O}•spacing•square: var(${b}•8);
    ${Dr}•radius•square: var(--arc-border-radius-md);
  }

  &[data-size=sm] {
    ${O}•font•size: var(${b}•12);
    ${O}•height: var(${b}•24);
    ${Ir}•size: var(${b}•14);
    ${ce}•size: var(${b}•12);
    ${ce}•size•large: var(${b}•14);
    ${Se}•size: var(${b}•15);
    ${Se}•size•large: var(${b}•18);
    ${He}•spacing: var(${b}•4);
    ${O}•spacing: var(${b}•8);
    ${O}•spacing•square: var(${b}•6);
    ${Dr}•radius•square: var(--arc-border-radius-md);
  }

  /* Custom button overrides • metrics based on size: 'inherit' */
  &[arc-button=custom] {
    ${O}•font•weight: normal;
    ${Dr}•radius: 0.25em;
    ${O}•height: auto;
  }
`,Cf=l`
  &[data-layout=hug] {
    ${O}•width: auto;
    ${O}•content•width: fit-content;
  }

  &[data-layout=fill] {
    ${O}•display: flex;
    ${O}•width: 100%;
    ${O}•content•width: 0;
  }

  &:not([data-layout=icon]) {
    ${ce}•width: auto;
  }

  &[data-layout=icon] {
    ${O}•aspect•ratio: 1 / 1;
    ${O}•min•width: min-content;
    ${O}•max•width: none;
    ${O}•spacing: var(${b}•0);

    ${ce}•width: 1.25em;

    &[data-shape=narrow] {
      ${O}•aspect•ratio: auto;
      ${O}•spacing: var(${b}•2);
      ${ce}•width: auto;
    }
  }

  &[data-shape=square] {
    ${O}•spacing: var(${O}•spacing•square);
  }

  &:is(
    [data-layout=icon]:not([data-shape]),
    [data-shape=square],
    [data-shape=narrow]
  ) {
    ${Dr}•radius: var(${Dr}•radius•square);
  }

`,Ef=l`
  /** @mitigation • when no variant is set (i.e.: 'custom' buttons) */
  &:not([data-variant]) {
    ${U}: inherit;
    ${E}: transparent;
    ${vr}: transparent;
    ${U}•disabled: var(--arc-color-fg-disabled);
  }

  /** @default */
  &[data-variant=common] {
    ${Dr}•width: var(${b}•1);
    ${Ir}•progress•color: var(--arc-color-border-brand-mid);
    ${Ir}•base•color: var(--arc-color-alpha-mid);

    /** @default */
    &:where([data-hierarchy=primary]) {
      ${U}: var(--arc-color-fg-on-theme-heavy);
      ${E}: var(--arc-color-bg-theme-heavy);
      ${vr}: transparent;

      ${U}•active: var(--arc-color-fg-on-theme-mid);
      ${U}•processing: var(--arc-color-fg-on-theme-stark);
      ${U}•disabled: var(--arc-color-fg-disabled);

      ${E}•hover: var(--arc-color-bg-theme-stark);
      ${E}•active: var(--arc-color-bg-theme-mid);
      ${E}•processing: var(--arc-color-bg-theme-stark);
      ${E}•disabled: var(--arc-color-bg-disabled);

      ${Ir}•progress•color: var(--arc-color-mono-white);
      ${Ir}•base•color: var(--arc-color-alpha-white-30);
    }

    &:where([data-hierarchy=secondary]) {
      ${U}: var(--arc-color-fg-primary);
      ${E}: transparent;
      ${vr}: var(--arc-color-border-theme-heavy);

      ${U}•active: var(--arc-color-fg-secondary);
      ${U}•processing: var(--arc-color-fg-secondary);
      ${U}•disabled: var(--arc-color-fg-disabled);

      ${vr}•active: var(--arc-color-border-theme-mid);
      ${vr}•processing: var(--arc-color-border-theme-subtle);
      ${vr}•disabled: var(--arc-color-border-disabled);

      ${E}•hover: var(--arc-color-bg-neutral-muted);
      ${E}•active: var(--arc-color-bg-neutral-subtle);
      ${E}•processing: transparent;
      ${E}•disabled: transparent;

      &:where([data-layout=icon]) {
        ${vr}: var(--arc-color-border-mid);
        ${vr}•hover: var(--arc-color-border-stark);
        ${vr}•focus: var(--arc-color-border-mid);
      }

      &:where([is-floating]) {
        ${E}: var(--arc-button-floating-bg);
        ${E}•processing: var(--arc-button-floating-bg-processing);
        ${E}•disabled: var(--arc-button-floating-bg-disabled);
        ${E}•focus: var(--arc-button-floating-bg-focus);
        ${E}•hover: var(--arc-button-floating-bg-hover);
        ${E}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${U}: var(--arc-color-fg-primary);
      ${E}: transparent;
      ${vr}: transparent;

      ${U}•active: var(--arc-color-fg-secondary);
      ${U}•processing: var(--arc-color-fg-secondary);
      ${U}•disabled: var(--arc-color-fg-disabled);

      ${E}•hover: var(--arc-color-bg-neutral-muted);
      ${E}•active: var(--arc-color-bg-neutral-muted);
      ${E}•processing: var(--arc-color-bg-neutral-muted);
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${U}: var(--arc-color-fg-primary);
      ${E}: transparent;
      ${vr}: transparent;

      ${U}•hover: var(--arc-color-alpha-heavy);
      ${U}•active: var(--arc-color-alpha-heavy);
      ${U}•processing: var(--arc-color-alpha-heavy);
      ${U}•disabled: var(--arc-color-fg-disabled);

      ${E}•hover: transparent;
      ${E}•active: transparent;
      ${E}•processing: transparent;
    }
  }

`,zf=l`
  &[data-variant=neutral] {
    ${Dr}•width: var(${b}•1);
    ${Ir}•progress•color: var(--arc-color-border-brand-mid);
    ${Ir}•base•color: var(--arc-color-alpha-mid);

    &:where([data-hierarchy=primary]) {
      ${U}: var(--arc-color-fg-primary);
      ${E}: transparent;
      ${vr}: var(--arc-color-border-mid);

      ${U}•active: var(--arc-color-fg-secondary);
      ${U}•processing: var(--arc-color-fg-secondary);
      ${U}•disabled: var(--arc-color-fg-disabled);

      ${E}•hover: var(--arc-color-bg-neutral-muted);
      ${E}•active: var(--arc-color-bg-neutral-subtle);
      ${E}•processing: transparent;
      ${E}•disabled: transparent;

      &:where([is-floating]) {
        ${E}: var(--arc-button-floating-bg);
        ${E}•processing: var(--arc-button-floating-bg-processing);
        ${E}•disabled: var(--arc-button-floating-bg-disabled);
        ${E}•focus: var(--arc-button-floating-bg-focus);
        ${E}•hover: var(--arc-button-floating-bg-hover);
        ${E}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=secondary]) {
      ${U}: var(--arc-color-fg-neutral-stark);
      ${E}: transparent;
      ${vr}: var(--arc-color-border-mid);

      ${U}•hover: var(--arc-color-fg-primary);
      ${U}•active: var(--arc-color-fg-secondary);
      ${U}•processing: var(--arc-color-fg-secondary);
      ${U}•disabled: var(--arc-color-fg-disabled);

      ${vr}•disabled: var(--arc-color-border-disabled);

      ${E}•hover: var(--arc-color-bg-neutral-muted);
      ${E}•active: var(--arc-color-bg-neutral-subtle);
      ${E}•processing: transparent;
      ${E}•disabled: transparent;

      &:where([data-layout=icon]) {
        ${vr}: var(--arc-color-border-mid);
        ${vr}•hover: var(--arc-color-border-stark);
        ${vr}•focus: var(--arc-color-border-mid);
      }

      &:where([is-floating]) {
        ${E}: var(--arc-button-floating-bg);
        ${E}•processing: var(--arc-button-floating-bg-processing);
        ${E}•disabled: var(--arc-button-floating-bg-disabled);
        ${E}•focus: var(--arc-button-floating-bg-focus);
        ${E}•hover: var(--arc-button-floating-bg-hover);
        ${E}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${U}: var(--arc-color-fg-neutral-stark);
      ${E}: transparent;
      ${vr}: transparent;

      ${U}•active: var(--arc-color-fg-secondary);
      ${U}•processing: var(--arc-color-fg-secondary);
      ${U}•disabled: var(--arc-color-fg-disabled);

      ${E}•hover: var(--arc-color-bg-neutral-muted);
      ${E}•active: var(--arc-color-bg-neutral-subtle);
      ${E}•processing: var(--arc-color-bg-neutral-muted);
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${U}: var(--arc-color-fg-neutral-stark);
      ${E}: transparent;
      ${vr}: transparent;

      ${U}•hover: var(--arc-color-fg-primary);
      ${U}•active: var(--arc-color-fg-neutral-mid);
      ${U}•processing: var(--arc-color-fg-secondary);
      ${U}•disabled: var(--arc-color-fg-disabled);

      ${E}•hover: transparent;
      ${E}•active: transparent;
      ${E}•processing: transparent;
    }
  }

`,_f=l`
  &[data-variant=ai] {
    ${U}•disabled: var(--arc-color-fg-disabled);
    ${vr}•disabled: var(--arc-color-border-disabled);
    ${Dr}•width: var(${b}•2);

    ${Pe}•bg: var(--arc-gradient-ai-200);
    ${Pe}•disabled: var(--arc-color-border-disabled);
    ${Pe}•processing: var(--arc-gradient-ai-100);

    &:where([data-hierarchy=primary]) {
      ${U}: var(--arc-color-fg-on-theme-stark);
      ${E}: var(--arc-button-gradient-ai-500) padding-box;
      ${vr}: transparent;

      ${U}•active: var(--arc-color-fg-neutral-mid);
      ${U}•processing: var(--arc-color-fg-on-theme-heavy);
      ${U}•hover: var(--arc-color-fg-on-theme-heavy);

      ${E}•hover: var(--arc-button-gradient-ai-400) padding-box;
      ${E}•active: var(--arc-button-gradient-ai-600) padding-box;
      ${E}•processing: var(--arc-button-gradient-ai-400) padding-box;
      ${E}•disabled: var(--arc-color-bg-disabled) padding-box;

      ${Ir}•progress•color: var(--arc-color-mono-white);
      ${Ir}•base•color: var(--arc-color-alpha-white-30);

      ${Pe}•hover: var(--arc-gradient-ai-200);
      ${Pe}•active: var(--arc-gradient-ai-200);
    }

    &:where([data-hierarchy=secondary]) {
      ${U}: var(--arc-color-fg-primary);
      ${E}: var(--arc-button-gradient-ai-transparent) padding-box; /* allows subtle transition of bg-color through the transparent parts of the gradient */
      ${vr}: transparent;

      ${U}•active: var(--arc-color-fg-neutral-stark);
      ${U}•processing: var(--arc-color-fg-primary);

      ${E}•hover: var(--arc-button-gradient-ai-50) padding-box;
      ${E}•focus: var(--arc-button-gradient-ai-50) padding-box;
      ${E}•active: var(--arc-button-gradient-ai-50) padding-box;
      ${E}•processing: var(--arc-button-gradient-ai-50) padding-box;
      ${E}•disabled: var(--arc-color-bg-disabled) padding-box;

      ${Ir}•progress•color: var(--arc-color-border-brand-mid);

      ${Pe}•hover: var(--arc-gradient-ai-300);
      ${Pe}•active: var(--arc-gradient-ai-100);

      &:where([is-floating]) {
        ${E}: var(--arc-button-ai-floating-bg) padding-box;
      }
    }
  }

`,If=l`
  &[data-variant=alpha] {
    ${Dr}•width: var(${b}•1);
    ${Ir}•base•color: var(--arc-color-alpha-white-30);

    &:where([data-hierarchy=primary]) {
      ${U}: var(--arc-color-mono-black);
      ${E}: var(--arc-color-mono-white);
      ${vr}: transparent;

      ${U}•focus: var(--arc-color-mono-black);
      ${U}•active: var(--arc-color-alpha-black-60);
      ${U}•processing: var(--arc-color-mono-black);
      ${U}•disabled: var(--arc-color-alpha-black-60);

      ${E}•hover: var(--arc-color-alpha-white-70);
      ${E}•active: var(--arc-color-alpha-white-40);
      ${E}•processing: var(--arc-color-alpha-white-40);
      ${E}•disabled: var(--arc-color-alpha-white-15);
    }

    &:where([data-hierarchy=secondary]) {
      ${U}: var(--arc-color-alpha-white-95);
      ${E}: transparent;
      ${vr}: var(--arc-color-alpha-white-80);

      ${U}•active: var(--arc-color-alpha-white-80);
      ${U}•processing: var(--arc-color-alpha-white-95);
      ${U}•disabled: var(--arc-color-alpha-white-50);

      ${E}•hover: var(--arc-color-alpha-white-20);
      ${E}•active: var(--arc-color-alpha-white-40);
      ${E}•processing: var(--arc-color-alpha-white-25);
      ${E}•disabled: transparent;

      ${vr}•hover: var(--arc-color-alpha-white-100);
      ${vr}•focus: var(--arc-color-alpha-white-80);
      ${vr}•active: var(--arc-color-alpha-white-50);
      ${vr}•processing: transparent;
      ${vr}•disabled: var(--arc-color-alpha-white-30);
    }

    &:where([data-hierarchy=tertiary]) {
      ${U}: var(--arc-color-alpha-white-95);
      ${E}: transparent;
      ${vr}: transparent;

      ${U}•active: var(--arc-color-alpha-black-60);
      ${U}•processing: var(--arc-color-alpha-white-95);
      ${U}•disabled: var(--arc-color-alpha-white-50);

      ${E}•hover: var(--arc-color-alpha-white-20);
      ${E}•active: var(--arc-color-alpha-white-40);
      ${E}•processing: var(--arc-color-alpha-white-20);
      ${E}•disabled: transparent;
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${U}: var(--arc-color-alpha-white-95);
      ${E}: transparent;
      ${vr}: transparent;

      ${U}•hover: var(--arc-color-alpha-white-60);
      ${U}•active: var(--arc-color-alpha-white-40);
      ${U}•processing: var(--arc-color-alpha-white-95);
      ${U}•disabled: var(--arc-color-alpha-white-30);
    }
  }
`,Tf=l`
  &[data-variant=critical] {
    ${Dr}•width: var(${b}•1);
    ${Ir}•progress•color: var(--arc-color-border-brand-mid);

    &:where([data-hierarchy=primary]) {
      ${U}: var(--arc-color-fg-on-stark);
      ${E}: var(--arc-color-bg-critical-stark);
      ${vr}: transparent;

      ${U}•active: var(--arc-color-fg-critical-subtle);
      ${U}•processing: var(--arc-color-fg-on-heavy);
      ${U}•disabled: var(--arc-color-fg-disabled);

      ${E}•hover: var(--arc-color-bg-critical-heavy);
      ${E}•active: var(--arc-color-bg-critical-heavy);
      ${E}•processing: var(--arc-color-bg-critical-heavy);
      ${E}•disabled: var(--arc-color-bg-disabled);

      ${Ir}•progress•color: var(--arc-color-mono-white);
      ${Ir}•base•color: var(--arc-color-alpha-white-30);
    }

    &:where([data-hierarchy=secondary]) {
      ${U}: var(--arc-color-fg-critical-stark);
      ${E}: transparent;
      ${vr}: var(--arc-color-border-critical-stark);

      ${U}•active: var(--arc-color-fg-critical-subtle);
      ${U}•processing: var(--arc-color-fg-critical-stark);
      ${U}•disabled: var(--arc-color-fg-disabled);

      ${E}•hover: var(--arc-button-critical-bg-hover);
      ${E}•active: var(--arc-color-bg-critical-muted);
      ${E}•disabled: transparent;

      ${vr}•active: var(--arc-color-border-critical-subtle);
      ${vr}•processing: var(--arc-color-border-critical-stark);
      ${vr}•disabled: var(--arc-color-border-disabled);

      /* "floating" button mitigation */
      &:where([is-floating]) {
        ${E}: var(--arc-button-floating-bg);
        ${E}•processing: var(--arc-button-floating-bg-processing);
        ${E}•disabled: var(--arc-button-floating-bg-disabled);
        ${E}•focus: var(--arc-button-floating-bg-focus);

        ${E}•hover: var(--arc-button-critical-floating-bg-hover);
        ${E}•active: var(--arc-button-critical-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${U}: var(--arc-color-fg-critical-stark);
      ${E}: transparent;
      ${vr}: transparent;

      ${U}•active: var(--arc-color-fg-critical-subtle);
      ${U}•processing: var(--arc-color-fg-critical-stark);
      ${U}•disabled: var(--arc-color-fg-disabled);

      ${E}•hover: var(--arc-button-critical-bg-hover);
      ${E}•active: var(--arc-color-bg-critical-subtle);
      ${E}•processing: var(--arc-color-bg-critical-muted);
      ${E}•disabled: transparent;
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${U}: var(--arc-color-fg-critical-stark);
      ${E}: transparent;
      ${vr}: transparent;

      ${U}•hover: var(--arc-color-fg-critical-mid);
      ${U}•active: var(--arc-color-fg-critical-subtle);
      ${U}•processing: var(--arc-color-fg-critical-stark);
      ${U}•disabled: var(--arc-color-fg-disabled);
    }
  }
`,Pf=l`
  /**
   * @deprecated • restores solid bg for legacy \`variant="secondary"\` / \`variant="secondary-inverse"\` usage,
   * which now map to \`data-variant=common data-hierarchy=secondary\` (transparent by default).
   */
  &[is-deprecated=secondary]:not([is-floating]) {
    ${E}: var(--arc-color-mono-white);
    ${E}•hover: var(--arc-color-bg-neutral-muted);
    ${E}•active: var(--arc-color-bg-neutral-subtle);
    ${E}•processing: var(--arc-color-mono-white);
    ${E}•disabled: var(--arc-color-mono-white);
    ${E}•focus: var(--arc-color-alpha-white-3);
  }

  &[is-deprecated=secondary-inverse]:not([is-floating]) {
    ${E}: transparent;
    ${E}•hover: var(--arc-color-bg-neutral-muted);
    ${E}•active: var(--arc-color-bg-neutral-subtle);
    ${E}•processing: transparent;
    ${E}•disabled: transparent;
    ${E}•focus: var(--arc-color-alpha-white-3);
  }
`,Rf=l`
  /** @overrides all variants when is onMedia (allows 'ai' gradient border) */
  &[is-on-media] {
    ${Ir}•progress•color: var(--arc-color-mono-white);
    ${Ir}•base•color: var(--arc-color-alpha-white-30);

    ${U}: var(--arc-color-mono-black);
    ${E}: var(--arc-color-alpha-white-70);
    ${vr}: var(--arc-color-alpha-black-15);

    ${U}•active: var(--arc-color-alpha-black-50);
    ${U}•processing: var(--arc-color-alpha-black-50);
    ${U}•disabled: var(--arc-color-alpha-black-40);

    ${E}•hover: var(--arc-color-alpha-white-90);
    ${E}•focus: var(--arc-color-alpha-white-70);
    ${E}•active: var(--arc-color-alpha-white-70);
    ${E}•disabled: var(--arc-color-alpha-white-60);
    ${E}•processing: var(--arc-color-alpha-white-60);

    ${vr}•active: var(--arc-color-alpha-black-10);
    ${vr}•disabled: var(--arc-color-alpha-black-10);
  }
`,Lf=l`
  ${O}•color: var(${U});
  ${O}•background: var(${E});
  ${O}•font•weight: var(--arc-font-weight-600);
  ${O}•cursor: var(--arc-button-cursor, pointer);
  ${O}•padding: 0 var(${O}•spacing);
  ${O}•content•opacity: 1;

  /**
   * @note: new spacing between label and icon
   * '--arc-button-gap' is @deprecated • this was the 'gap' at the [arc-button-content] level
   * '--arc-button-inline-spacing' is @preferred over '--arc-button-gap'
   */
  ${He}•padding: var(--arc-button-inline-spacing, var(--arc-button-gap, var(${He}•spacing)));

  /**
   * @note: default is 'inherit' so it can inherit from button's size.
   * The 'size="inherit"' sets the button's font-size to 1em,
   * and sets the label font-size to 0.875em (or 14px at 100%) to
   * match the default button's text size. This allows the label
   * to still remain scalable by the parent container's font-size.
   */
  ${He}•font•size: inherit;

  /**
   * @note: Transforms variant-dependent '${Dr}•width' into '${Dr}•size'
   * which is also used for inset/padding on the AI Button's [arc-button-mask] sizing.
   */
  ${Dr}•size: var(--arc-button-border-width, var(${Dr}•width));

  ${Dr}•color: var(${vr});
  ${Dr}: var(${Dr}•size) solid var(${Dr}•color, transparent);
  ${Dr}•radius: var(--arc-border-radius-pill);

  ${Gt}: var(--arc-border-width-md) solid var(${Gt}•color, transparent);
  ${Gt}•offset: var(--arc-border-width-md);

  /* spinner svg style controls */
  ${Ir}•progress•color: var(--arc-button-progress-color, var(--arc-color-mono-white, currentcolor));
  ${Ir}•circle•color: var(--arc-button-color, var(${Ir}•base•color, var(--arc-color-alpha-mid)));
  ${Ir}•circle•opacity: var(--arc-alpha-100);

  ${O}•transition:
    background 0.2s ease-out,
    color 0.2s ease-out,
    height 0.2s ease-out,
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

  --arc-icon-size: var(${ce}•size);

  ${Se}•width: var(${Se}•size);

  &[has-large-icon] {
    --arc-icon-size: var(${ce}•size•large);

    [arc-button-icon]:has(svg) {
      ${Se}•width: var(${Se}•size•large);
    }
  }

  /* Inter-Component Communication • ArcSpinner --------------------• */

  --arc-spinner-size: var(${Ir}•size);
  --arc-spinner-progress-color: var(${Ir}•progress•color);
  --arc-spinner-circle-color: var(${Ir}•circle•color);
  --arc-spinner-circle-opacity: var(${Ir}•circle•opacity);
  --arc-spinner-position: var(${Ir}•position, absolute);
  --arc-spinner-inset: var(${Ir}•inset, 50% auto auto 50%);
  --arc-spinner-translate: var(${Ir}•translate, -50% -50%);

`,Mf=l`
  &:is(
    [is-processing],
    [is-processing-with-text],
    :has([arc-button-mask]),
    :has(input),
  ) {
    ${O}•position: relative;
  }

  &[is-disabled] {
    ${O}•color: var(${U}•disabled, var(${U}));
    ${O}•background: var(${E}•disabled, var(${E}));
    ${Dr}•color: var(${vr}•disabled, var(${vr}));
    ${O}•opacity: var(--arc-button-disabled-opacity, unset);
    ${O}•cursor: var(--arc-button-disabled-cursor, not-allowed);
    ${Pe}•bg: var(${Pe}•disabled);
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
      ${O}•color: var(${U}•hover, var(${U}));
      ${O}•background: var(${E}•hover, var(${E}));
      ${Dr}•color: var(${vr}•hover, var(${vr}));
      ${Pe}•bg: var(${Pe}•hover);
    }

    &:is(
      :active,
      [is-active],
      [data-simulate=active]
    ) {
      ${O}•color: var(${U}•active, var(${U}));
      ${O}•background: var(${E}•active, var(${E}));
      ${Dr}•color: var(${vr}•active, var(${vr}));
      ${Pe}•bg: var(${Pe}•active);
    }
  }

  &[is-processing] {
    ${O}•content•visibility: hidden;
    ${O}•content•opacity: 0;

    /* spinner svg position controls */
    ${Ir}•position: absolute;
    ${Ir}•inset: 50% auto auto 50%;
    ${Ir}•translate: -50% -50%;
  }

  &[is-processing-with-text] {
    ${O}•content•visibility: visible;

    /* spinner svg position controls */
    ${Ir}•position: relative;
    ${Ir}•inset: 0;
    ${Ir}•translate: 0;
    ${Ir}•size: 1lh;
  }

  &:is(
    [is-processing],
    [is-processing-with-text]
  ) {
    ${O}•opacity: var(--arc-button-processing-opacity, unset);
    ${O}•cursor: var(--arc-button-processing-cursor, default);
    ${Pe}•bg: var(${Pe}•processing);

    ${O}•color: var(${U}•processing, var(${U}));
    ${O}•background: var(${E}•processing, var(${E}));
    ${Dr}•color: var(${vr}•processing, var(${vr}));
  }

  &:is(
    :where(:focus, :focus-within):focus-visible,
    [data-simulate=focus]
  ) {
    ${O}•color: var(${U}•focus, var(${U}));
    ${O}•background: var(${E}•focus, var(${E}));
    ${Dr}•color: var(${vr}•focus, var(${vr}));
    ${Gt}•color: var(--arc-button-outline-color, var(--arc-color-border-focus));

    * {
      outline: none;
    }
  }

`,jf=l`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${yf}

  :where([arc-button]) {
    /* SETUP -------------------------------------------------------• */
    ${Sf}
    ${Cf}
    ${Ef}
    ${Pf}
    ${zf}
    ${_f}
    ${If}
    ${Tf}
    ${Rf}

    /* CORE VARIABLES ----------------------------------------------• */
    ${Lf}
    ${Mf}

    /* CONTEXT OVERRIDES -------------------------------------------• */
    &[is-floating] {
      ${O}•position: fixed;
      ${O}•margin: 0;
      ${O}•z-index: 1000;
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
      ${He}•padding: unset;
      ${O}•padding: unset;
      ${O}•height: unset;
      ${Dr}•radius: var(--arc-border-radius-md);

      [arc-button-content] {
        gap: var(--arc-button-inline-spacing, var(${He}•spacing));
      }
    }

    &:where([data-hierarchy=link-style]) {
      ${O}•font•weight: inherit;
      ${O}•text•decoration: none;
    }

    /* Custom button structural overrides */
    &[arc-button=custom] {
      ${O}•padding: unset;

      [arc-button-content] {
        gap: 0.5em;
      }

      [arc-button-label] {
        display: contents;
      }
    }

    /* CORE STYLES -------------------------------------------------• */
    appearance: none;
    cursor: var(--arc-button-cursor, var(${O}•cursor));
    position: var(--arc-button-position, var(${O}•position, unset));
    transition: var(--arc-button-transition, var(${O}•transition));
    z-index: var(--arc-button-z-index, var(${O}•z-index, unset));
    inset: var(--arc-button-inset, var(--js•inset, unset));

    /* FOOTPRINT */
    font: inherit;
    font-weight: var(--arc-button-font-weight, var(${O}•font•weight));
    font-size: var(--arc-button-font-size, var(${O}•font•size, inherit));
    padding: var(--arc-button-padding, var(${O}•padding));
    margin: var(--arc-button-margin, var(${O}•margin, unset));

    width: var(--arc-button-width, var(${O}•width, auto));
    min-width: var(--arc-button-min-width, var(${O}•min•width, unset));
    max-width: var(--arc-button-max-width, var(${O}•max•width, 100%));

    height: var(--arc-button-height, var(${O}•height, auto));
    min-height: var(--arc-button-min-height, var(${O}•min•height, unset));
    max-height: var(--arc-button-max-height, var(${O}•max•height, unset));

    aspect-ratio: var(--arc-button-aspect-ratio, var(${O}•aspect•ratio, unset));

    /* VARIANT THEME APPLIED ---------------------------------------• */

    color: var(--arc-button-color, var(${O}•color));
    background: var(--arc-button-background, var(${O}•background));
    border: var(--arc-button-border, var(${Dr}));
    border-radius: var(--arc-button-border-radius, var(${Dr}•radius));

    opacity: var(--arc-button-opacity, 1);

    outline: var(--arc-button-outline, var(${Gt}));
    outline-offset: var(--arc-button-outline-offset, var(${Gt}•offset));
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
      gap: var(--arc-button-content-gap, unset);

      opacity: var(--arc-button-content-opacity, var(${O}•content•opacity));
      visibility: var(--arc-button-content-visibility, var(${O}•content•visibility, inherit));
      pointer-events: var(--arc-button-content-pointer-events, none);

      width: var(--arc-button-content-width, var(${O}•content•width, auto));
      max-width: var(--arc-button-content-max-width, 100%);
      overflow: var(--arc-button-content-overflow, visible);

      transition: var(--arc-button-content-transition, inherit);

      line-height: normal;
      user-select: none;
    }

    [arc-button-label] {
      display: var(--arc-button-label-display, unset);
      font-size: var(--arc-button-label-font-size, var(${He}•font•size));
      overflow: var(--arc-button-label-overflow, clip);
      text-overflow: var(--arc-button-label-text-overflow, ellipsis);
      white-space: var(--arc-button-label-white-space, nowrap);
      max-width: var(--arc-button-label-max-width, 100%);
      opacity: var(--arc-button-label-opacity, var(${O}•opacity));
      transition: var(--arc-button-label-transition, inherit);
      padding-inline: var(${He}•padding);
    }

    [arc-button-icon] {
      /** @note: override to ensure auto-width is applied to button icons This protects the
       * intended "gap" (now 'padding-inline' on the label) between icon and label */
      --fa-width: var(${ce}•width);

      flex: none;

      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--arc-button-icon-width, var(${ce}•width));
      min-width: 1em;

      opacity: var(--arc-button-icon-opacity, var(${O}•opacity));
      transition: var(--arc-button-icon-transition, inherit);

      &:has(svg) {
        ${ce}•width: var(--arc-button-svg-width, var(${Se}•width));
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }

    [arc-button-mask] {
      pointer-events: none;
      position: absolute;
      inset: calc(var(${Dr}•size) * -1);
      padding: var(${Dr}•size);
      background: var(${Pe}•bg);
      mask: linear-gradient(black, black) content-box exclude, linear-gradient(black, black);
      border-radius: var(--arc-button-border-radius, var(${Dr}•radius));
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
    display: var(--arc-button-display, var(${O}•display, inline-flex));
    align-items: center;
    justify-content: center;
  }

}
`,Eu=(0,i.jsx)(ss,{}),Df=(0,i.jsx)("span",{"arc-button-mask":""}),Of=!!d.version.startsWith("18"),Nf=r=>r===void 0||r===!1?{isFloating:!1}:r===!0?{isFloating:!0}:{isFloating:!0,inset:r.inset},Bf=({popoverTarget:r,popoverTargetAction:e})=>Of?{popovertarget:r??void 0,popovertargetaction:e??void 0}:{popoverTarget:r??void 0,popoverTargetAction:e??void 0},Or=(0,d.forwardRef)(({children:r,disabled:e,...a},t)=>{const o=(0,d.useRef)(null),{_isCustom:n,iconEnd:c,iconStart:s,icon:u,text:h,isActive:p,isDisabled:v,isProcessing:g,isProcessingWithText:f,hasLargeIcon:m,tag:$,href:k,type:A,title:y,layout:w,shape:x,size:z="lg",variant:_="common",hierarchy:P="primary",scheme:C="auto",shadow:S,onMedia:I,isOnMedia:B,floating:N,isInverse:V=!1,...Z}=a,{isFloating:M,inset:D}=Nf(N),T=B??I,G=$??(k?"a":"button"),cr=G==="button"?A||"button":void 0,gr=w==="icon",R=f||g||v||e,er=Z?.["aria-disabled"]||R||void 0,lr=n?void 0:Au({variant:_}),fr=n?void 0:Su({variant:_,hierarchy:P}),rr=!n&&bs(_)?_:void 0,dr=n?void 0:ku({shape:x}),xr=n?"inherit":z,sr=cf({layout:w,isFloating:M}),wr=of({isFloating:M,isOnMedia:T,shadow:S}),F=Cu({variant:_,isInverse:V,scheme:C}),K=!gr&&(r||h),J=f&&Eu||s||u,j=!gr&&(f&&!(s||u)?void 0:c),ir=(g||f&&gr)&&Eu,yr=lr==="ai"?Df:void 0,{tooltip:br,...H}=Z,W=Bt(br)?br:void 0,mr=a.tooltip??W,nr=!!mr,hr=Bt(mr)?{text:mr}:mr,X=Z["aria-describedby"],pr=Nr(void 0,"arc-tooltip"),Lr=a.id?`${a.id}-tooltip`:pr,_r=nr?Lr:void 0,Er=nr?Ro([X,_r]):X,{anchorName:Ur,style:Fr,popoverTarget:Hr,popoverTargetAction:We,...ee}=H,pe=Hr?Mo(String(Ur||a?.id)):void 0,Xe=nr?Mo(String(_r)):void 0,Be=Dd(Fr)?Fr:void 0,yo=Be&&"anchorName"in Be&&Be.anchorName,Ei=[...(Bt(yo)?cu(yo,", "):[]).map(Mo),...pe?[pe]:[],...Xe?[Xe]:[]],gd=Ro(Ei,1/0,", "),og=Be!=null&&"inset"in Be&&Be.inset!==void 0&&Be.inset!==null&&Be.inset!=="",vd={...Be??{},...gd?{anchorName:gd}:{},...D!==void 0&&!og?{"--js\u2022inset":D}:{}},fd=Bf({popoverTarget:Hr||void 0,popoverTargetAction:We||void 0}),md=(0,d.useCallback)(zi=>{o.current=zi,Ae(t,zi)},[t]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(G,{...ee,...fd,ref:md,"arc-button":n?"custom":"","arc-scheme":F,"arc-shadow":wr||void 0,disabled:!k&&R||void 0,href:k||void 0,title:nr?void 0:y||void 0,type:cr,"data-layout":sr,"data-shape":dr,"data-size":xr,"data-variant":lr,"data-hierarchy":fr,"has-large-icon":m?"":void 0,"is-deprecated":rr,"is-floating":M?"":void 0,"is-on-media":T?"":void 0,"is-active":p?"":void 0,"is-processing":g||f&&gr?"":void 0,"is-processing-with-text":f&&!gr?"":void 0,"is-disabled":R||er?"":void 0,"aria-disabled":er,"aria-describedby":Er||void 0,style:vd,children:[(0,i.jsxs)("span",{"arc-button-content":"",children:[!!J&&(0,i.jsx)("span",{"arc-button-icon":"",children:typeof J=="string"?(0,i.jsx)(Sr,{icon:J}):J}),!!K&&(0,i.jsx)("span",{"arc-button-label":"",children:K}),!!j&&(0,i.jsx)("span",{"arc-button-icon":"",children:typeof j=="string"?(0,i.jsx)(Sr,{icon:j}):j})]}),ir,yr]}),nr&&(0,i.jsx)(mc,{...hr,id:_r,alternateAnchor:hr?.alternateAnchor??(()=>o.current),anchorName:Xe})]})});Or.displayName="ArcButton",zr("ArcButton",jf);const Uo=(0,d.forwardRef)((r,e)=>(0,i.jsx)(Or,{...r,ref:e,"arc-popover-button":""})),zu=({isInverse:r=!1,isOpen:e,...a})=>(0,i.jsx)(Or,{icon:"fa-regular fa-xmark",text:"Dismiss",...a,layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-dismiss":""}),Ff=({isInverse:r=!1,...e})=>(0,i.jsx)(Or,{icon:"fa-regular fa-arrow-left",text:"Go Back",...e,layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-go-back":""}),Hf=({children:r,isSticky:e,showDivider:a,showDismiss:t,dismissProps:o,showGoBack:n,goBackProps:c,headerSlotEnd:s,tag:u="header",...h})=>(0,i.jsx)(u,{...h,"arc-popover-header":"","has-divider":a?"":void 0,"is-sticky":e?"":void 0,children:(0,i.jsxs)("div",{"arc-popover-display":"",children:[(0,i.jsxs)("div",{"arc-popover-header-slot":"start",children:[n&&(0,i.jsx)(Ff,{...c}),r]}),(0,i.jsxs)("div",{"arc-popover-header-slot":"end",children:[s,t&&(0,i.jsx)(zu,{...o})]})]})}),Vf=({children:r,tag:e="article",...a})=>(0,i.jsx)(e,{...a,"arc-popover-body":"",children:(0,i.jsx)("div",{"arc-popover-display":"",children:r})}),Uf=({children:r,isSticky:e,showDivider:a,tag:t="footer",...o})=>(0,i.jsx)(t,{...o,"arc-popover-footer":"","has-divider":a?"":void 0,"is-sticky":e?"":void 0,children:(0,i.jsx)("div",{"arc-popover-display":"",children:r})});Uo.displayName="ArcPopoverButton";const Q=l`--arc-popover`,Ce=l`--arc•popover`,ur=l`--arc•trail•mix`,$s=l`${Ce}•radius`,Gf=l`${Ce}•content`,$c=l`${Ce}•outline`,Cr=l`${Ce}•offset`,Sa=l`${Ce}•header`,Kf=l`${Ce}•body`,ys=l`${Ce}•divider`,yc=l`${Ce}•footer`,pa=l`${Ce}•tail`,Tr=l`${pa}•top`,Pr=l`${pa}•left`,Go=l`${pa}•size`,Ee=l`${pa}•x`,ze=l`${pa}•y`,xs=l`${Ce}•font•size`,xc=l`${Ce}•padding`,Gr=l`${Ce}•margin`,Kt=l`${Sa}•padding`,ra=l`${Kf}•padding`,Ca=l`${yc}•padding`,_u=l`${Ce}•fg`,kc=l`${Ce}•bg`,wc=l`${Gf}•bg`,Ac=l`${pa}•fill•a`,Sc=l`${pa}•fill•b`,Cc=l`${pa}•edge•a`,Ec=l`${pa}•edge•b`,Wf=l`

  ${Ce}•fallback: none;
  ${$c}: var(${Q}-outline-size, var(--arc-border-width-md));
  ${$s}: var(${Q}-border-radius, var(--arc-border-radius-lg));
  ${Cr}: var(${Q}-offset, var(--js•offset, 0px));

  /* space & padding */
  ${xc}: 0.875em;

  /* tail metrics - starts at defaults for anchor-at='bottom-start' */
  ${ur}: 47.5%; /* mix-ratio for tail to match gradient outline for: 'popover[variant=ai]' */
  ${Ee}: var(${Q}-tail-x, 1.75em);
  ${ze}: var(${Q}-tail-y, 1.125em);
  ${Go}: 0px;

  &:where([has-tail]) {
    ${Go}: var(${Q}-tail-size, var(--js•tail, 8px));

    /* offset calculation magic number - 'sqrt(2) / 2' for half of 45° rotated tailSize */
    ${Cr}: calc(var(${Q}-offset, var(--js•offset, 0px)) + var(${Go}) * (sqrt(2) / 2));
  }

  &:has([arc-popover-body]) {
    ${xc}: 0;
    &:has([arc-popover-header]:not([has-divider])) { ${ra}•block•start: 0; }
    &:has([arc-popover-footer]:not([has-divider])) { ${ra}•block•end: 0; }
  }

`,Xf=l`

  /* default variant: common */
  &[variant] {
    ${_u}: var(--arc-color-fg-primary);
    ${kc}: var(${Q}-background, var(--arc-color-bg-mono)) border-box;
    ${wc}: var(${Q}-background, var(--arc-color-bg-mono)) padding-box;
    ${Ac}: var(${Q}-background, var(--arc-color-bg-mono));
    ${Sc}: var(${Q}-background, var(--arc-color-bg-mono));
    ${Cc}: var(${Q}-background, var(--arc-color-bg-mono));
    ${Ec}: var(${Q}-background, var(--arc-color-bg-mono));
    ${Ce}•shadow: var(--arc-shadow-lg);
    ${ys}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &[variant=brand] {
    ${kc}: var(--arc-color-border-brand-mid) border-box;
    ${wc}: var(--arc-color-bg-brand-muted) padding-box;
    ${Ac}: var(--arc-color-bg-brand-muted);
    ${Sc}: var(--arc-color-bg-brand-muted);
    ${Cc}: var(--arc-color-border-brand-mid);
    ${Ec}: var(--arc-color-border-brand-mid);
  }

  &[variant=ai] {
    ${kc}: var(--arc-gradient-ai-200) border-box;
    ${wc}: var(--arc-gradient-ai-50) padding-box;
    ${Ac}: var(${Q}-ai-purple-50);
    ${Sc}: var(${Q}-ai-blue-50);
    ${Cc}: var(${Q}-ai-purple-200);
    ${Ec}: var(${Q}-ai-blue-200);
  }

`,qf=l`

  /* default density: compact */
  &:not([density=comfortable]) {
    ${xs}: 0.75em;
    ${Sa}•gap: 0.75em;
    ${Kt}•block: 0.75em;
    ${Kt}•inline: 0.75em;

    ${ra}•block: 0.75em;
    ${ra}•inline: 0.75em;

    ${yc}•gap: 0.75em;
    ${Ca}•inline: 0.75em;
    ${Ca}•block•start: 0.75em;
    ${Ca}•block•end: 0.75em;
  }

  &[density=comfortable] {
    ${xs}: 0.875em;
    ${Sa}•gap: 1.125em;
    ${Kt}•block: 1em;
    ${Kt}•inline: 1.25em;

    ${ra}•block: 1.25em;
    ${ra}•inline: 1.25em;

    ${yc}•gap: 1.125em;
    ${Ca}•inline: 1.25em;
    ${Ca}•block•start: 1em;
    ${Ca}•block•end: 1.25em;

    &:not(:has([arc-popover-body])) {
      ${xc}: 1.25em;
    }
  }

`,Ko={TOP:l`
    &[anchor-at*='top-'] {
      ${Gr}: 0 0 var(${Cr}) 0;
      ${Tr}: 100%;
    }
    &[anchor-at='top-start'] {
      position-area: block-start span-inline-end;
      ${ur}: 95%;
      ${Pr}: calc(0% + var(${Ee}));
    }
    &[anchor-at='top-center'] {
      position-area: block-start;
      ${ur}: 75%;
      ${Pr}: 50%;
    }
    &[anchor-at='top-end'] {
      position-area: block-start span-inline-start;
      ${ur}: 53.5%;
      ${Pr}: calc(100% - var(${Ee}));
    }
  `,RIGHT:l`
    &[anchor-at*='right-'] {
      ${Gr}: 0 0 0 var(${Cr});
      ${Pr}: 0%;
    }
    &[anchor-at='right-start'] {
      position-area: inline-end span-block-end;
      ${ur}: 53.5%;
      ${Tr}: calc(0% + var(${ze}));
    }
    &[anchor-at='right-center'] {
      position-area: inline-end;
      ${ur}: 75%;
      ${Tr}: 50%;
    }
    &[anchor-at='right-end'] {
      position-area: inline-end span-block-start;
      ${ur}: 95%;
      ${Tr}: calc(100% - var(${ze}));
    }
  `,BOTTOM:l`
    &[anchor-at*='bottom-'] {
      ${Gr}: var(${Cr}) 0 0 0;
      ${Tr}: 0%;
    }
    &[anchor-at='bottom-end'] {
      position-area: block-end span-inline-start;
      ${ur}: 5%;
      ${Pr}: calc(100% - var(${Ee}));
    }
    &[anchor-at='bottom-center'] {
      position-area: block-end;
      ${ur}: 25%;
      ${Pr}: 50%;
    }
    &[anchor-at='bottom-start'] {
      position-area: block-end span-inline-end;
      ${ur}: 47.5%;
      ${Pr}: calc(0% + var(${Ee}));
    }
  `,LEFT:l`
    &[anchor-at*='left-'] {
      ${Gr}: 0 var(${Cr}) 0 0;
      ${Pr}: 100%;
    }
    &[anchor-at='left-end'] {
      position-area: inline-start span-block-start;
      ${ur}: 47.5%;
      ${Tr}: calc(100% - var(${ze}));
    }
    &[anchor-at='left-center'] {
      position-area: inline-start;
      ${ur}: 25%;
      ${Tr}: 50%;
    }
    &[anchor-at='left-start'] {
      position-area: inline-start span-block-end;
      ${ur}: 5%;
      ${Tr}: calc(0% + var(${ze}));
    }
  `,CENTER_AND_CORNERS:l`
    &:is([anchor-at='center'], [anchor-at*='corner']) { ${pa}•display: none; }
    &[anchor-at='center'] { position-area: center center; ${Gr}: 0; }
    &[anchor-at*='corner'] { ${Gr}: var(${Cr}); }
    &[anchor-at='nw-corner'] { position-area: top left; }
    &[anchor-at='ne-corner'] { position-area: top right; }
    &[anchor-at='se-corner'] { position-area: bottom right; }
    &[anchor-at='sw-corner'] { position-area: bottom left; }
  `},Wt={FLIP_BLOCK:l`
    &[anchor-at*='top-'] { ${Gr}: 0 0 var(${Cr}) 0; }
    &[anchor-at='top-start']::before { ${ur}: 47.5%; ${Tr}: 0%; }
    &[anchor-at='top-center']::before { ${ur}: 25%; ${Tr}: 0%; }
    &[anchor-at='top-end']::before { ${ur}: 5%; ${Tr}: 0%; }

    &[anchor-at='right-start']::before { ${ur}: 95%; ${Tr}: calc(100% - var(${ze})); }
    &[anchor-at='right-end']::before { ${ur}: 53.5%; ${Tr}: calc(0% + var(${ze})); }

    &[anchor-at*='bottom-'] { ${Gr}: var(${Cr}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${ur}: 53.5%; ${Tr}: 100%; }
    &[anchor-at='bottom-center']::before { ${ur}: 75%; ${Tr}: 100%; }
    &[anchor-at='bottom-start']::before { ${ur}: 95%; ${Tr}: 100%; }

    &[anchor-at='left-end']::before { ${ur}: 5%; ${Tr}: calc(0% + var(${ze})); }
    &[anchor-at='left-start']::before { ${ur}: 47.5%; ${Tr}: calc(100% - var(${ze})); }
  `,FLIP_INLINE:l`
    &[anchor-at='top-start']::before { ${ur}: 53.5%; ${Pr}: calc(100% - var(${Ee})); }
    &[anchor-at='top-end']::before { ${ur}: 95%; ${Pr}: calc(0% + var(${Ee})); }

    &[anchor-at*='right-'] { ${Gr}: 0 var(${Cr}) 0 0; }
    &[anchor-at='right-start']::before { ${ur}: 5%; ${Pr}: 100%; }
    &[anchor-at='right-center']::before { ${ur}: 25%; ${Pr}: 100%; }
    &[anchor-at='right-end']::before { ${ur}: 47.5%; ${Pr}: 100%; }

    &[anchor-at='bottom-end']::before { ${ur}: 47.5%; ${Pr}: calc(0% + var(${Ee})); }
    &[anchor-at='bottom-start']::before { ${ur}: 5%; ${Pr}: calc(100% - var(${Ee})); }

    &[anchor-at*='left-'] { ${Gr}: 0 0 0 var(${Cr}); }
    &[anchor-at='left-end']::before { ${ur}: 95%; ${Pr}: 0%; }
    &[anchor-at='left-center']::before { ${ur}: 75%; ${Pr}: 0%; }
    &[anchor-at='left-start']::before { ${ur}: 53.5%; ${Pr}: 0%; }
  `,FLIP_BLOCK_INLINE:l`
    &[anchor-at*='top-'] { ${Gr}: 0 0 var(${Cr}) 0; }
    &[anchor-at='top-start']::before { ${ur}: 5%; ${Tr}: 0%; ${Pr}: calc(100% - var(${Ee})); }
    &[anchor-at='top-end']::before { ${ur}: 47.5%; ${Tr}: 0%; ${Pr}: calc(0% + var(${Ee})); }

    &[anchor-at*='right-'] { ${Gr}: 0 var(${Cr}) 0 0; }
    &[anchor-at='right-start']::before { ${ur}: 47.5%; ${Tr}: calc(100% - var(${ze})); ${Pr}: 100%; }
    &[anchor-at='right-end']::before { ${ur}: 5%; ${Tr}: calc(0% + var(${ze})); ${Pr}: 100%; }

    &[anchor-at*='bottom-'] { ${Gr}: var(${Cr}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${ur}: 95%; ${Tr}: 100%; ${Pr}: calc(0% + var(${Ee})); }
    &[anchor-at='bottom-start']::before { ${ur}: 53.5%; ${Tr}: 100%; ${Pr}: calc(100% - var(${Ee})); }

    &[anchor-at*='left-'] { ${Gr}: 0 0 0 var(${Cr}); }
    &[anchor-at='left-end']::before { ${ur}: 53.5%; ${Tr}: calc(0% + var(${ze})); ${Pr}: 0%; }
    &[anchor-at='left-start']::before { ${ur}: 95%; ${Tr}: calc(100% - var(${ze})); ${Pr}: 0%; }
  `},Yf=l`
  @position-try --js•try-top-start { position-area: block-start span-inline-end; margin: 0 0 var(${Cr}) 0; }
  @position-try --js•try-top-center { position-area: block-start; margin: 0 0 var(${Cr}) 0; }
  @position-try --js•try-top-end { position-area: block-start span-inline-start; margin: 0 0 var(${Cr}) 0; }
  @position-try --js•try-right-start { position-area: inline-end span-block-end; margin: 0 0 0 var(${Cr}); }
  @position-try --js•try-right-center { position-area: inline-end; margin: 0 0 0 var(${Cr}); }
  @position-try --js•try-right-end { position-area: inline-end span-block-start; margin: 0 0 0 var(${Cr}); }
  @position-try --js•try-bottom-start { position-area: block-end span-inline-end; margin: var(${Cr}) 0 0 0; }
  @position-try --js•try-bottom-center { position-area: block-end; margin: var(${Cr}) 0 0 0; }
  @position-try --js•try-bottom-end { position-area: block-end span-inline-start; margin: var(${Cr}) 0 0 0; }
  @position-try --js•try-left-start { position-area: inline-start span-block-end; margin: 0 var(${Cr}) 0 0; }
  @position-try --js•try-left-center { position-area: inline-start; margin: 0 var(${Cr}) 0 0; }
  @position-try --js•try-left-end { position-area: inline-start span-block-start; margin: 0 var(${Cr}) 0 0; }
  @position-try --js•try-center { position-area: center center; margin: 0; }
  @position-try --js•try-nw-corner { position-area: top left; margin: var(${Cr}); }
  @position-try --js•try-ne-corner { position-area: top right; margin: var(${Cr}); }
  @position-try --js•try-se-corner { position-area: bottom right; margin: var(${Cr}); }
  @position-try --js•try-sw-corner { position-area: bottom left; margin: var(${Cr}); }
`,ae={"top-start":l`
    ${Gr}: 0 0 var(${Cr}) 0;
    &::before { ${ur}: 95%; ${Tr}: 100%; ${Pr}: calc(0% + var(${Ee})); }
  `,"top-center":l`
    ${Gr}: 0 0 var(${Cr}) 0;
    &::before { ${ur}: 75%; ${Tr}: 100%; ${Pr}: 50%; }
  `,"top-end":l`
    ${Gr}: 0 0 var(${Cr}) 0;
    &::before { ${ur}: 53.5%; ${Tr}: 100%; ${Pr}: calc(100% - var(${Ee})); }
  `,"right-start":l`
    ${Gr}: 0 0 0 var(${Cr});
    &::before { ${ur}: 53.5%; ${Pr}: 0%; ${Tr}: calc(0% + var(${ze})); }
  `,"right-center":l`
    ${Gr}: 0 0 0 var(${Cr});
    &::before { ${ur}: 75%; ${Pr}: 0%; ${Tr}: 50%; }
  `,"right-end":l`
    ${Gr}: 0 0 0 var(${Cr});
    &::before { ${ur}: 95%; ${Pr}: 0%; ${Tr}: calc(100% - var(${ze})); }
  `,"bottom-start":l`
    ${Gr}: var(${Cr}) 0 0 0;
    &::before { ${ur}: 47.5%; ${Tr}: 0%; ${Pr}: calc(0% + var(${Ee})); }
  `,"bottom-center":l`
    ${Gr}: var(${Cr}) 0 0 0;
    &::before { ${ur}: 25%; ${Tr}: 0%; ${Pr}: 50%; }
  `,"bottom-end":l`
    ${Gr}: var(${Cr}) 0 0 0;
    &::before { ${ur}: 5%; ${Tr}: 0%; ${Pr}: calc(100% - var(${Ee})); }
  `,"left-start":l`
    ${Gr}: 0 var(${Cr}) 0 0;
    &::before { ${ur}: 5%; ${Pr}: 100%; ${Tr}: calc(0% + var(${ze})); }
  `,"left-center":l`
    ${Gr}: 0 var(${Cr}) 0 0;
    &::before { ${ur}: 25%; ${Pr}: 100%; ${Tr}: 50%; }
  `,"left-end":l`
    ${Gr}: 0 var(${Cr}) 0 0;
    &::before { ${ur}: 47.5%; ${Pr}: 100%; ${Tr}: calc(100% - var(${ze})); }
  `},Zf=l`
  @supports (container-type: anchored) {
    @container anchored(fallback: --js•try-top-start) { [arc-popover][try-fallbacks][has-tail] { ${ae["top-start"]} } }
    @container anchored(fallback: --js•try-top-center) { [arc-popover][try-fallbacks][has-tail] { ${ae["top-center"]} } }
    @container anchored(fallback: --js•try-top-end) { [arc-popover][try-fallbacks][has-tail] { ${ae["top-end"]} } }
    @container anchored(fallback: --js•try-right-start) { [arc-popover][try-fallbacks][has-tail] { ${ae["right-start"]} } }
    @container anchored(fallback: --js•try-right-center) { [arc-popover][try-fallbacks][has-tail] { ${ae["right-center"]} } }
    @container anchored(fallback: --js•try-right-end) { [arc-popover][try-fallbacks][has-tail] { ${ae["right-end"]} } }
    @container anchored(fallback: --js•try-bottom-start) { [arc-popover][try-fallbacks][has-tail] { ${ae["bottom-start"]} } }
    @container anchored(fallback: --js•try-bottom-center) { [arc-popover][try-fallbacks][has-tail] { ${ae["bottom-center"]} } }
    @container anchored(fallback: --js•try-bottom-end) { [arc-popover][try-fallbacks][has-tail] { ${ae["bottom-end"]} } }
    @container anchored(fallback: --js•try-left-start) { [arc-popover][try-fallbacks][has-tail] { ${ae["left-start"]} } }
    @container anchored(fallback: --js•try-left-center) { [arc-popover][try-fallbacks][has-tail] { ${ae["left-center"]} } }
    @container anchored(fallback: --js•try-left-end) { [arc-popover][try-fallbacks][has-tail] { ${ae["left-end"]} } }
  }
`,Jf=l`
  &[data-resolved-at='top-start'] { ${ae["top-start"]} }
  &[data-resolved-at='top-center'] { ${ae["top-center"]} }
  &[data-resolved-at='top-end'] { ${ae["top-end"]} }
  &[data-resolved-at='right-start'] { ${ae["right-start"]} }
  &[data-resolved-at='right-center'] { ${ae["right-center"]} }
  &[data-resolved-at='right-end'] { ${ae["right-end"]} }
  &[data-resolved-at='bottom-start'] { ${ae["bottom-start"]} }
  &[data-resolved-at='bottom-center'] { ${ae["bottom-center"]} }
  &[data-resolved-at='bottom-end'] { ${ae["bottom-end"]} }
  &[data-resolved-at='left-start'] { ${ae["left-start"]} }
  &[data-resolved-at='left-center'] { ${ae["left-center"]} }
  &[data-resolved-at='left-end'] { ${ae["left-end"]} }
`,Qf=l`
  ${Yf}

  [arc-popover] {
    position: fixed;
    inset: auto;
    padding: 0;
    margin: var(${Gr});

    container-type: anchored;
    position-anchor: var(${Q}-anchor-name, var(--js•anchor));

    ${Ko.TOP}
    ${Ko.RIGHT}
    ${Ko.BOTTOM}
    ${Ko.LEFT}
    ${Ko.CENTER_AND_CORNERS}

    &[try-fallbacks] {
      /* '--js•fallbacks' is set by the component: automatic flip keywords by default,
         or an ordered list of managed '@position-try' idents when 'fallbackAnchors' is used. */
      position-try-fallbacks: var(--js•fallbacks, flip-block, flip-inline, flip-block flip-inline);
    }
  }

  @supports (container-type: anchored) {
    @container anchored(fallback: flip-block) {
      [arc-popover][try-fallbacks][has-tail] {
        ${Wt.FLIP_BLOCK}
      }
    }

    @container anchored(fallback: flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${Wt.FLIP_INLINE}
      }
    }

    @container anchored(fallback: flip-block flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${Wt.FLIP_BLOCK_INLINE}
      }
    }
  }

  /* Managed fallback placements ('fallbackAnchors') — native '@position-try' tail re-pointing. */
  ${Zf}

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
        ${Wt.FLIP_BLOCK}
      }
      &[data-fallbacks='flip-inline'] {
        ${Wt.FLIP_INLINE}
      }
      &[data-fallbacks='flip-block-inline'] {
        ${Wt.FLIP_BLOCK_INLINE}
      }

      /* Managed fallback placements ('fallbackAnchors') — resolved-anchor tail re-pointing. */
      ${Jf}
    }
  }
`,Xt={BACKDROP:l`
    [arc-popover]::backdrop {
      background: var(${Q}-backdrop, transparent);
    }
  `,CONTENT:l`
    [arc-popover-content] {
      flex: var(${Q}-flex, 1);
      position: relative;
      display: var(${Q}-content-display, flex);
      flex-direction: var(${Q}-content-flex-direction, column);
      gap: var(${Q}-content-gap, 0);

      overflow: var(${Q}-overflow, auto);
      overscroll-behavior: var(${Q}-overscroll-behavior, contain);

      color: var(${Q}-color, var(${_u}));
      padding: var(${Q}-padding, var(${xc}));
      margin: var(${Q}-margin, unset);
      background: var(${Q}-content-background, var(${wc}));
      border-radius: calc(var(${$s}) - var(${$c}));
      border: var(${Q}-border, none);

      height: var(${Q}-height, auto);
      min-height: var(${Q}-min-height, auto);
      max-height: var(${Q}-max-height, 65vh);
      resize: var(${Q}-resize, none);
    }
  `,HEADER:l`
    [arc-popover-header] {
      flex: var(${Q}-header-flex, none);
      display: var(${Q}-header-display, flex);
      justify-content: var(${Q}-header-justify-content, space-between);
      align-items: var(${Q}-header-align-items, baseline);
      gap: var(${Q}-header-gap, var(${Sa}•gap));

      padding: var(${Q}-header-padding,
        var(${Kt}•block)
        var(${Kt}•inline)
      );

      color: var(${Q}-header-color, inherit);
      background: var(${Q}-header-background, none);

      &[is-sticky] {
        position: sticky;
        z-index: var(${Q}-header-z-index, 2);
        top: var(${Q}-header-top, 0);
      }

      &:has([arc-popover-go-back]) {
        padding-inline-start: 0.875em;
      }

      &:has([arc-popover-dismiss]) {
        padding-inline-end: 0.875em;
      }

      &:where([has-divider]) {
        border-bottom: var(${Q}-header-border-bottom, var(${ys}));
      }

      :where([arc-button]) {
        margin: var(${Q}-header-button-margin, -0.5em);
      }
    }

    [arc-popover-header-slot='start'] {
      ${Sa}•slot•flex: 1;
      ${Sa}•slot•gap: 1em;
    }

    [arc-popover-header-slot='end'] {
      ${Sa}•slot•flex: none;
      ${Sa}•slot•gap: 1.5em;
    }

    [arc-popover-header-slot] {
      min-width: 0%;
      flex: var(${Sa}•slot•flex);
      display: var(${Q}-header-display, flex);
      justify-content: var(${Q}-header-justify-content, unset);
      align-items: var(${Q}-header-align-items, baseline);
      gap: var(${Q}-header-slot-gap, var(${Sa}•slot•gap));
    }

    /* Header-less Popover: DismissButton typical starting spot */
    [arc-popover]:not([arc-popover-header]) > [arc-popover-dismiss] {
      --arc-button-position: absolute;
      --arc-button-z-index: var(${Q}-dismiss-z-index, 2);
      inset: var(${Q}-dismiss-inset, 0.5em 0.5em auto auto);
      margin: var(${Q}-dismiss-margin, 0);
    }
  `,BODY:l`
    [arc-popover-body] {
      flex: var(${Q}-body-flex, 1);
      display: var(${Q}-body-display, block);
      flex-direction: var(${Q}-body-flex-direction, unset);

      padding: var(${Q}-body-padding,
        var(${ra}•block•start, var(${ra}•block))
        var(${ra}•inline)
        var(${ra}•block•end, var(${ra}•block))
        var(${ra}•inline)
      );
    }
  `,FOOTER:l`
    [arc-popover-footer] {
      flex: var(${Q}-footer-flex, none);
      display: var(${Q}-footer-display, flex);
      flex-direction: var(${Q}-footer-flex-direction, row-reverse);
      justify-content: var(${Q}-footer-justify-content, space-between);
      align-items: var(${Q}-footer-align-items, center);
      gap: var(${Q}-footer-gap, var(${yc}•gap));

      padding: var(${Q}-footer-padding,
        var(${Ca}•block•start)
        var(${Ca}•inline)
        var(${Ca}•block•end)
        var(${Ca}•inline)
      );

      background: var(${Q}-footer-background, none);
      color: var(${Q}-footer-color, inherit);

      &[is-sticky] {
        position: sticky;
        z-index: var(${Q}-footer-z-index, 2);
        bottom: var(${Q}-footer-bottom, 0);
      }

      &:where([has-divider]) {
        border-top: var(${Q}-footer-border-top, var(${ys}));
      }
    }
  `,TAIL:l`
    [arc-popover][has-tail]::before {
      content: '';
      box-sizing: content-box;
      position: absolute;
      display: var(${pa}•display, block);

      inset: auto;
      top: var(${Tr}, auto);
      left: var(${Pr}, auto);

      translate: -50% -50%;
      rotate: 45deg;

      width: var(${Go});
      height: var(${Go});
      border-radius: 0.125em;

      background: color-mix(in srgb,
        var(${Ac}) var(${ur}),
        var(${Sc}) clamp(0%, 100% - var(${ur}), 100%)
      );

      border: var(${$c}) solid color-mix(in srgb,
        var(${Cc}) var(${ur}),
        var(${Ec}) clamp(0%, 100% - var(${ur}), 100%)
      );
    }
  `},rm=l`
  [arc-popover] {
    will-change: opacity;
    overflow: visible; /* For the tail – content overflow is set on '[arc-popover-content]' */

    /* @note – this line-height magic number fixes asymmetrical outline/border issues with certain placements
    on low DPI displays. It's based on the default (--arc-line-height-standard) of 1.4 */
    line-height: var(${Q}-line-height, 1.395);

    /* @note – this font-size is intended NOT to be altered; it is locked in as a reset (browser baseline)
    for various popover calculations. The effective popover font size is set on '[arc-popover-display]'. */
    font-size: initial;

    background: var(${Q}-background, var(${kc}));
    border: var(${$c}) solid transparent;
    border-radius: var(${$s});
    box-shadow: var(${Q}-shadow, var(${Ce}•shadow));
    width: var(${Q}-width, auto);
    height: var(${Q}-height, auto);
    min-width: var(${Q}-min-width, auto);
    min-height: var(${Q}-min-height, auto);
    max-width: var(${Q}-max-width, 100vw);
    max-height: var(${Q}-max-height, 65vh);
  }

  /* @note – font-size control for header|footer|body padding calculations */
  [arc-popover-display] {
    display: contents;
    font-size: var(${Q}-font-size, var(${xs}));
  }

  ${Xt.CONTENT}
  ${Xt.HEADER}
  ${Xt.BODY}
  ${Xt.FOOTER}
  ${Xt.TAIL}
  ${Xt.BACKDROP}
`,Wo={SETUP:Wf,ANCHORS:Qf,VARIANTS:Xf,DENSITIES:qf,ELEMENT:rm},em=l`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${kf}

  [arc-popover] {
    ${Wo.SETUP}
    ${Wo.VARIANTS}
    ${Wo.DENSITIES}
  }

  ${Wo.ANCHORS}
  ${Wo.ELEMENT}

  /* POPOVER anchoring mitigation ----------------------------------• */

  [arc-popover][is-floating] {
    position-area: none;
    position-try-fallbacks: none;
    margin: 0; /* zero out the gap on the Floating UI path to prevent doubled offsets */
  }

  /* POPOVER transition --------------------------------------------• */

  [arc-popover] {
    z-index: var(--arc-popover-z-index, 10000); /* default for floating-ui fallback */
    transition-timing-function: ease-out;
    transition-duration: var(--arc-popover-transition-duration, 240ms);
    transition-behavior: allow-discrete;
    transition-property: display, opacity;

    @supports (overlay: auto) {
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

`,Iu=(0,d.forwardRef)(({children:r,popover:e=Me.popover,anchorAt:a=Me.anchorAt,anchorName:t,anchorProps:o,alternateAnchorId:n,alternateAnchor:c,boundary:s=Me.boundary,tryFallbacks:u=Me.tryFallbacks,fallbackAnchors:h=Me.fallbackAnchors,density:p=Me.density,variant:v=Me.variant,scheme:g=Me.scheme,isInverse:f,hasTail:m,tailSize:$=Me.tailSize,offset:k=Me.offset,hidePopoverButton:A,headerSlot:y,showHeaderDivider:w,isHeaderSticky:x,showDismiss:z,dismissProps:_,showGoBack:P,goBackProps:C,headerSlotEnd:S,footerSlot:I,isFooterSticky:B,showFooterDivider:N,tag:V="div",contentTag:Z="div",onToggle:M,...D},T)=>{const G=(0,d.useRef)(null),cr=(0,d.useRef)(null),gr=(0,d.useRef)(null),R=(0,d.useRef)(M);(0,d.useImperativeHandle)(T,()=>cr.current);const[er,lr]=(0,d.useState)(!1),fr=(0,d.useMemo)(()=>g==="auto"?void 0:f?"inverse":g,[f,g]),rr=(0,d.useCallback)(()=>{if(typeof document>"u")return G.current??null;const W=wa(G.current??cr.current)??document;return n?W.getElementById(n):typeof c=="string"?W.getElementById(c):c instanceof HTMLElement?c:typeof c=="function"?c():c&&typeof c=="object"&&"current"in c?c.current:G.current??null},[c,n]),dr=u||s==="flip",xr=dr?Yd(h):[],sr=xr.length?xr.map(Zd).join(", "):"flip-block, flip-inline, flip-block flip-inline",wr=!!m&&!qd.includes(a),F=Jd({canHaveTail:wr,tailSize:$}),K=(0,d.useMemo)(()=>{const W=t||n||(typeof c=="string"?c:void 0)||o?.id||D.id||void 0;return es(String(W))},[t,o?.id,D.id,c,n]),J=(0,d.useMemo)(()=>({popoverTarget:D.id,"aria-haspopup":!0,"aria-controls":D.id,"aria-expanded":er}),[D.id,er]),j=(0,d.useMemo)(()=>({isOpen:er,"aria-label":"Dismiss",...J,..._}),[_,er,J]),ir=(0,d.useMemo)(()=>({ref:G,...J,...o,tooltip:er?void 0:o?.tooltip,anchorName:K||""}),[o,J,K,er]),yr=(0,d.useMemo)(()=>({"--js\u2022anchor":ir?.anchorName||"","--js\u2022offset":Number(k)===0?"":`${k}px`,"--js\u2022tail":F.cssTailVar,"--js\u2022fallbacks":sr}),[ir?.anchorName,k,F.cssTailVar,sr]);la(()=>{const W=rr();if(gr.current=W,!!W)return ru(W,ir.anchorName)},[rr,ir.anchorName,er]),(0,d.useEffect)(()=>{R.current=M},[M]),(0,d.useEffect)(()=>{const W=cr.current;if(!W)return;const q=mr=>{const{newState:nr}=mr,hr=nr==="open";lr(hr),hr&&(gr.current=rr()),R.current?.(mr)};return W.addEventListener("toggle",q),()=>W.removeEventListener("toggle",q)},[rr]),zv({anchorEl:gr.current,popoverEl:cr.current,anchorAt:a,tryFallbacks:dr,fallbackAnchors:xr,offsetPx:Number(k)||0,tailSizePx:F.floatingTailPx,hasTail:wr,isOpen:er}),Pv({anchorEl:gr.current,popoverEl:cr.current,anchorAt:a,tryFallbacks:dr,fallbackAnchors:xr,hasTail:wr,isOpen:er});const br=!!(y||P||S),H=!!I;return(0,i.jsxs)(i.Fragment,{children:[!((n||c)&&A)&&(0,i.jsx)(Uo,{...ir}),(0,i.jsxs)(V,{...D,ref:cr,"arc-popover":"","arc-scheme":fr,"anchor-at":a,"is-floating":Xd?"":void 0,"try-fallbacks":dr?"":void 0,popover:e,variant:v,density:p,"has-tail":wr?"":void 0,role:D.role??"dialog",style:{...D.style,...yr},children:[(0,i.jsxs)(Z,{"arc-popover-content":"",children:[br&&(0,i.jsx)(Hf,{showDivider:w,showGoBack:P,goBackProps:C,headerSlotEnd:S,showDismiss:z,dismissProps:j,isSticky:x,children:y}),br||H?(0,i.jsx)(Vf,{children:r}):(0,i.jsx)(Z,{"arc-popover-display":"",children:r}),H&&(0,i.jsx)(Uf,{showDivider:N,isSticky:B,children:I})]}),z&&!br&&(0,i.jsx)(zu,{...j})]})]})});Iu.displayName="ArcPopover";const ks=Iu;ks.handlePopover=Qd,ks.Button=Uo;const ga=ks;zr("ArcPopover",em);const am=l`
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
      padding: var(${b}•4) var(${b}•0);
    }

    [data-element=list-item] {
      display: flex;
      align-items: center;
      gap: var(${b}•6);
      padding: var(${b}•4) var(${b}•8);
    }

    ${Oi}
    ${Md}
  }

}
`,tm=r=>(0,i.jsx)("ul",{...r,"data-element":"list"}),om=r=>(0,i.jsx)("li",{...r,"data-element":"list-item"}),nm=({count:r,anchorId:e,overflowId:a,shouldShowOverflow:t,...o})=>(0,i.jsx)(rc,{title:`+${r}`,children:(0,i.jsx)(ga.Button,{...o,id:e,popoverTarget:a,text:`+${r}`,variant:"common",hierarchy:"primary",disabled:!t,"data-element":"counter","data-color":"black","data-num-length":r?.toString().length})}),cm=({children:r,id:e,size:a="sm",overflowCount:t=0,shouldShowOverflow:o=!1,anchorAt:n="bottom-end",tryFallbacks:c=!0,...s})=>{const u=Math.min(t,999),h=Nr(e,"arc-avatar-overflow"),p=(0,d.useMemo)(()=>`${h}-anchor`,[h]),v=(0,d.useMemo)(()=>d.Children.toArray(r),[r]);return(0,i.jsxs)(i.Fragment,{children:[u>0&&(0,i.jsx)(nm,{count:u,anchorId:p,overflowId:h,shouldShowOverflow:o}),o&&u>0&&(0,i.jsx)(ga,{...s,scheme:"inverse","arc-avatar-overflow":"",id:h,anchorAt:n,tryFallbacks:c,alternateAnchorId:p,hidePopoverButton:!0,variant:"common","data-size":a,children:(0,i.jsx)(tm,{children:v.map((g,f)=>(0,i.jsx)(om,{children:g},f))})})]})};zr("ArcAvatarOverflow",am);const Tu=({fg:r,bg:e})=>l`
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
`,Pu=({fg:r,bg:e})=>l`
  &:has(>[data-contrast=high]) {
    ${r}: var(${r}•high);
    ${e}: var(${e}•high);
  }

  &:has(>[data-contrast=low]) {
    ${r}: var(${r}•low);
    ${e}: var(${e}•low);
  }
`,Ar=l`--arc•badge`,ws=l`${Ar}•fg`,As=l`${Ar}•bg`,im=Tu({fg:ws,bg:As}),sm=Pu({fg:ws,bg:As}),lm=l`
  &:has(>[data-size=lg]) {
    ${Ar}•font•size: var(${b}•14);
    ${Ar}•font•size•caps: var(${b}•12);
    ${Ar}•size: var(${b}•24);
    ${Ar}•min•size: var(${b}•30);
    ${Ar}•padding•inline: var(${b}•8);
    ${Ar}•gap: var(${b}•4);
  }

  &:has(>[data-size=md]) {
    ${Ar}•font•size: var(${b}•12);
    ${Ar}•font•size•caps: var(${b}•10);
    ${Ar}•size: var(${b}•20);
    ${Ar}•min•size: var(${b}•24);
    ${Ar}•padding•inline: var(${b}•6);
    ${Ar}•gap: var(${b}•4);
  }

  &:has(>[data-size=sm]) {
    ${Ar}•font•size: var(${b}•10);
    ${Ar}•font•size•caps: var(${b}•8);
    ${Ar}•size: var(${b}•16);
    ${Ar}•min•size: var(${b}•18);
    ${Ar}•padding•inline: var(${b}•6);
    ${Ar}•gap: var(${b}•4);
  }

  /** @default • relative equivalent of 'md' at 100% • (16 x 75% = 12) */
  &:has(>[data-size=inherit]) {
    ${Ar}•font•size: 1em;
    ${Ar}•font•size•text: 0.75em;
    ${Ar}•font•size•caps: 0.625em;
    ${Ar}•size: 1.25em;
    ${Ar}•min•size: 1.5em;
    ${Ar}•padding•inline: 0.5em;
    ${Ar}•gap: 0.25em;
  }
`,dm=l`
  &:has(>[data-layout=fill]) {
    ${Ar}•flex: auto; /* same as 1 (1 1 auto) but with clearer intent */
    ${Ar}•display: flex;
    ${Ar}•min•width: var(${Ar}•min•size);

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-overflow: hidden;
    --arc-icon-text-white-space: nowrap;
    --arc-icon-text-text-overflow: ellipsis;
  }

  &:has(>[data-layout=hug]) {
    ${Ar}•flex: none; /* same as 0 0 auto but with clearer intent */
    ${Ar}•display: inline-flex;
    ${Ar}•min•width: min-content;
  }
`,um=l`
@layer arc-components {

  [arc-badge-wrapper] {
    ${im}
    ${sm}
    ${lm}
    ${dm}

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-height: 1lh;
    --arc-icon-text-align-items: center;
    --arc-icon-text-gap: var(${Ar}•gap);
    --arc-icon-text-svg-width: var(--arc-badge-svg-width, 1em);
  }

  /* CORE ------------------------------------------------------------• */

  [arc-badge-wrapper]:not([hidden]) {
    flex: var(--arc-badge-flex, var(${Ar}•flex, unset));
    align-self: var(--arc-badge-align-self, flex-start);
    display: var(${Ar}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: 1lh;
    max-height: 1lh;
    vertical-align: bottom;

    &:has(>[data-is-flexible]) {
      min-width: var(--arc-badge-min-width, var(${Ar}•min•width));
    }
  }

  [arc-badge] {
    font-size: var(--arc-badge-font-size, var(${Ar}•font•size));
    font-weight: var(--arc-font-weight-600);

    flex: var(${Ar}•flex);
    display: var(${Ar}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: var(${Ar}•size);
    padding-inline: var(${Ar}•padding•inline);

    overflow: hidden;
    white-space: nowrap;
    line-height: normal;

    color: var(--arc-badge-color, var(${ws}));
    background: var(--arc-badge-background, var(${As}));
    border-radius: var(--arc-border-radius-pill);
    mix-blend-mode: var(--arc-badge-mix-blend-mode, unset);

    :is([data-element=icon], [data-element=text]) {
      font-size: var(${Ar}•font•size•text, 1em);
    }

    &[data-is-uppercase] [data-element=text] {
      text-transform: uppercase;
      font-size: var(${Ar}•font•size•caps);
    }
  }

}
`,Ru=["brand","blue","neutral","purple","green","yellow","red","orange","mint","maroon","mono","mono-inverse","ai","overlay-light","overlay-dark"],hm=["brand",...Ru.filter(r=>r!=="brand")],pm=["neutral",...Ru.filter(r=>r!=="neutral")],gm=Wr(Za,hm),vm=Wr(Za,pm),fm=Wr(ke,["inherit","lg","md","sm"]),mm=Wr(ca,["hug","fill"]),bm=["low","high"],$m=Wr(Yr,["brand-blue","brand-black","neutral","info","success","warning","critical","ai","overlay-light","overlay-dark"]),ym={"brand-blue":"brand","brand-black":"mono-inverse",neutral:"neutral",info:"purple",success:"green",warning:"yellow",critical:"red",ai:"ai","overlay-light":"overlay-light","overlay-dark":"overlay-dark"},xm=({children:r,icon:e,text:a,isFlipped:t,isFlexible:o,isUppercase:n,color:c,variant:s,size:u="inherit",layout:h="hug",contrast:p="high",...v})=>{const g=c??ym[s??"brand-blue"],f=r||(0,i.jsx)(ie,{icon:e,text:a,isFlipped:t,layout:"gutter"}),m=h==="fill"&&o;return(0,i.jsx)("span",{...v,"arc-badge-wrapper":"",children:(0,i.jsx)("span",{"arc-badge":"","data-contrast":p,"data-color":g,"data-layout":h,"data-size":u,"data-is-flexible":m?"":void 0,"data-is-uppercase":n?"":void 0,children:f})})};zr("ArcBadge",um);const se=l`--arc•badge•count`,Ss=l`${se}•fg`,Cs=l`${se}•bg`,km=Tu({fg:Ss,bg:Cs}),wm=Pu({fg:Ss,bg:Cs}),Am=l`
  &:has(>[data-size=lg]) {
    ${se}•font•size: var(${b}•14);
    ${se}•size: var(${b}•24);
    ${se}•padding•inline: var(${b}•6);
  }

  &:has(>[data-size=md]) {
    ${se}•font•size: var(${b}•12);
    ${se}•size: var(${b}•20);
    ${se}•padding•inline: var(${b}•6);
  }

  &:has(>[data-size=sm]) {
    ${se}•font•size: var(${b}•10);
    ${se}•size: var(${b}•16);
    ${se}•padding•inline: var(${b}•6);
  }

  &:has(>[data-size=inherit]) { /** @default • scalable based on 'md' size */
    ${se}•font•size: 1em;
    ${se}•font•size•text: 0.75em;
    ${se}•size: 1.25em;
    ${se}•padding•inline: 0.375em;
  }
`,Sm=l`
@layer arc-components {

  [arc-badge-count-wrapper] {
    ${km}
    ${wm}
    ${Am}
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
    font-size: var(--arc-badge-count-font-size, var(${se}•font•size));
    font-weight: var(--arc-font-weight-600);

    flex: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: var(${se}•size);
    min-width: var(${se}•size);
    padding-inline: var(${se}•padding•inline);

    white-space: nowrap;
    line-height: normal;

    color: var(--arc-badge-count-color, var(${Ss}));
    background: var(--arc-badge-count-background, var(${Cs}));
    border-radius: var(--arc-border-radius-pill);
    mix-blend-mode: var(--arc-badge-count-mix-blend-mode, unset);

    [data-element=text] {
      font-size: var(${se}•font•size•text, 1em);
    }
  }

}
`,Cm=Wr(ke,["inherit","lg","md","sm"]),Em=Wr(Yr,["neutral","brand","critical","warning","success","inverse"]),zm=["low","high"],_m=Wr(xo,["square","circle"]),Im={neutral:"neutral",brand:"brand",critical:"red",warning:"yellow",success:"green",inverse:"mono"},Tm=({children:r,text:e,color:a,variant:t,contrast:o,size:n="inherit",shape:c,...s})=>{const u=r||(0,i.jsx)("span",{"data-element":"text",children:e}),h=a??Im[t??"neutral"],p=t==="critical"?"high":o??"low";return(0,i.jsx)("span",{...s,"arc-badge-count-wrapper":"",children:(0,i.jsx)("span",{"arc-badge-count":"","data-color":h,"data-contrast":p,"data-size":n,children:u})})};zr("ArcBadgeCount",Sm);const ea=l`--arc•banner`,je=l`${ea}•bg`,Re=l`${ea}•fg`,Ye=l`${ea}•columns`,Ua=l`${ea}•border`,Es=l`${ea}•border•radius`,Xo=l`${ea}•padding`,$t=l`${ea}•min•height`,zc=l`${ea}•body`,qt=l`${zc}•font•size`,_c=l`${zc}•gap`,Lu=l`${zc}•flex•direction`,Mu=l`${zc}•min•width`,zs=l`${ea}•icon`,Yt=l`${zs}•font•size`,_s=l`${zs}•padding`,ot=l`${zs}•color`,ju=l`${ea}•action`,Is=l`${ju}•justify`,Ts=l`${ju}•gap`,qo=l`${ea}•column•gap`,Ps=l`${ea}•row•gap`,Pm=l`
  &:where([variant=ai]) {
    ${Re}: var(--arc-color-fg-primary);
    /* Note: uses components-specific gradient style from: bannerStyles import */
    ${je}: var(--arc-banner-gradient-ai-50) padding-box, var(--arc-banner-gradient-ai-100) border-box;
    ${Ua}: var(--arc-border-width-sm) solid transparent;
  }

  &:where([variant=announcement]) {
    ${Re}: var(--arc-color-fg-primary);
    ${ot}: var(--arc-color-fg-brand-mid);
    ${je}: var(--arc-color-bg-blue-muted);
    ${Ua}: var(--arc-border-width-sm) solid var(--arc-color-border-blue-subtle);
  }

  &:where([variant=critical]) {
    ${Re}: var(--arc-color-fg-primary);
    ${ot}: var(--arc-color-fg-critical-mid);
    ${je}: var(--arc-color-bg-critical-muted);
    ${Ua}: var(--arc-border-width-sm) solid var(--arc-color-border-critical-subtle);
  }

  &:where([variant=info]) {
    ${Re}: var(--arc-color-fg-primary);
    ${ot}: var(--arc-color-fg-info-mid);
    ${je}: var(--arc-color-bg-info-muted);
    ${Ua}: var(--arc-border-width-sm) solid var(--arc-color-border-info-subtle);
  }

  &:where([variant=neutral]) {
    ${Re}: var(--arc-color-fg-secondary);
    ${ot}: var(--arc-color-fg-secondary);
    ${je}: var(--arc-color-alpha-muted);
    ${Ua}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &:where([variant=success]) {
    ${Re}: var(--arc-color-fg-primary);
    ${ot}: var(--arc-color-fg-success-mid);
    ${je}: var(--arc-color-bg-success-muted);
    ${Ua}: var(--arc-border-width-sm) solid var(--arc-color-border-success-subtle);
  }

  &:where([variant=warning]) {
    ${Re}: var(--arc-color-fg-primary);
    ${ot}: var(--arc-color-fg-warning-mid);
    ${je}: var(--arc-color-bg-warning-muted);
    ${Ua}: var(--arc-border-width-sm) solid var(--arc-color-border-warning-subtle);
  }
`,Rm=l`
  &:where([variant=ai]) {
    ${Re}: var(--arc-color-fg-on-stark);
    /* Note: uses components-specific gradient style from: bannerStyles import */
    ${je}: var(--arc-banner-gradient-ai-300);
  }

  &:where([variant=announcement]) {
    ${Re}: var(--arc-color-fg-on-stark);
    ${je}: var(--arc-color-bg-blue-stark);
  }

  &:where([variant=critical]) {
    ${Re}: var(--arc-color-fg-on-stark);
    ${je}: var(--arc-color-bg-critical-mid);
  }

  &:where([variant=info]) {
    ${Re}: var(--arc-color-fg-on-stark);
    ${je}: var(--arc-color-bg-info-stark);
  }

  &:where([variant=neutral]) {
    ${Re}: var(--arc-color-fg-on-stark);
    ${je}: var(--arc-color-bg-neutral-stark);
  }

  &:where([variant=success]) {
    ${Re}: var(--arc-color-fg-on-stark);
    ${je}: var(--arc-color-bg-success-stark);
  }

  &:where([variant=warning]) {
    ${Re}: var(--arc-color-fg-on-mid);
    ${je}: var(--arc-color-bg-warning-mid);
  }
`,Lm=l`
  ${_c}: 0.375em;
  ${Lu}: column;
  ${Mu}: 7em;
  ${Ts}: 0.75em;
  ${qo}: 0.75em;
  ${Ps}: 0.75em;

  /* INSET SETUP ---------------------------------------------------• */

  &[layout=inset] {
    ${Pm}

    ${Xo}: 0 0.75em 0 1em;
    ${Es}: var(--arc-border-radius-lg);
    ${_c}: 0.125em;
    ${_s}: 0.0625em;
    ${qo}: 0.625em;

    ${$t}: 5em;

    &:where([density=comfortable]) {
      &:not(:has([arc-banner-actions], [arc-banner-dismiss]))) {
        ${$t}: 4.75em;
      }
      &:has([arc-banner-heading]):not(:has([arc-banner-message])),
      &:has([arc-banner-message]):not(:has([arc-banner-heading])),
      &:not(:has([arc-banner-message], [arc-banner-heading])) {
        ${$t}: 3.5em;
        ${Ps}: 0.25em;

        &:has([arc-banner-actions]) {
          ${$t}: 3.75em;
        }
      }
    }

    &[action-placement=bottom] {
      ${Is}: flex-start;

      &[density=compact] {
        ${Xo}: 0 0.25em 0 0.5em;
      }
    }

    &[density=compact]:where([action-placement=inline]) {
      line-height: normal;

      [arc-banner-grid] {
        font-size: var(${qt});
      }
    }
  }

  /* BLEED SETUP ---------------------------------------------------• */

  &[layout=bleed] {
    ${Rm}

    ${$t}: 4em;
    ${Xo}: 0 0.75em 0 1em;
    ${Ua}: none;
    ${Es}: 0;
    ${_c}: 0.125em;
    ${qo}: 1em;
    ${Is}: flex-end;
    ${_s}: 0.125em;

    &[density=compact],
    &[alignment=center] {
      ${Yt}: 1.125em;
      line-height: normal;

      [arc-banner-grid] {
        font-size: var(${qt});
      }
    }
  }

  /* DENSITIES -----------------------------------------------------• */

  &[density=comfortable] {
    ${Yt}: 1em;
    ${qt}: 0.875em;
  }

  &[density=compact] {
    ${$t}: 2em;
    ${Xo}: 0 0.25em 0 0.5em;
    ${qt}: 0.75em;
    ${Ts}: 0.5em;
    ${qo}: 0.5em;

    &[action-placement=inline] {
      ${Yt}: 1em;
    }

    &[action-placement=bottom] {
      ${Yt}: 0.875em;
    }

    [arc-banner-grid] {
      align-self: center;
    }
  }

  /* Inter-component communication • ArcIcon/ArcIconText/ArcLink ---• */

  &[layout=inset] {
    &[density=compact]:where([action-placement=inline]) {
      --arc-icon-text-icon-color: var(--arc-banner-icon-color, var(${ot}));
      --arc-icon-text-gap: 0.375em;
    }

    [arc-banner-icon] {
      --arc-icon-color: var(--arc-banner-icon-color, var(${ot}));
    }
  }

  &[layout=bleed] {
    &:where([density=compact], [alignment=center]) {
      --arc-icon-text-gap: 0.375em;
    }

    &[alignment=center] [arc-banner-grid] {
      --arc-icon-height: 100%;
      --arc-icon-max-height: 100%;
      --arc-icon-text-icon-size: var(${Yt});
    }
  }

  &[density=compact] [arc-banner-body] {
    --arc-icon-height: 100%;
    --arc-icon-max-height: 100%;
    --arc-icon-text-icon-size: 1.125em;
  }

`,Mm=l`
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
`,jm=l`
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
        font-size: var(${qt});
        place-items: center;
        line-height: normal;
      }
    }
  }
`,Dm=l`
  &:where([action-placement=inline]) {
    align-items: flex-start;

    &[density=compact] {
      ${Ye}: 1fr auto auto;

      &:not(:has([arc-banner-actions])):has([arc-banner-dismiss]),
      &:not(:has([arc-banner-dismiss])):has([arc-banner-actions]) {
        ${Ye}: 1fr auto;
      }
    }

    &[density=comfortable] {
      ${Ye}: auto 1fr auto auto;

      &:has([arc-banner-icon]):has([arc-banner-actions]):not(:has([arc-banner-dismiss])),
      &:has([arc-banner-icon]):has([arc-banner-dismiss]):not(:has([arc-banner-actions])) {
        ${Ye}: auto 1fr auto;
      }

      &:not(:has([arc-banner-icon])):has([arc-banner-actions]):has([arc-banner-dismiss]) {
        ${Ye}: 1fr auto auto;
      }

      &:has([arc-banner-icon]):not(:has([arc-banner-actions])):not(:has([arc-banner-dismiss])) {
        ${Ye}: auto 1fr;
      }
      &:not(:has([arc-banner-icon])):has([arc-banner-actions]):not(:has([arc-banner-dismiss])),
      &:not(:has([arc-banner-icon])):has([arc-banner-dismiss]):not(:has([arc-banner-actions])) {
        ${Ye}: 1fr auto;
      }
    }

    &:not(:has([arc-banner-icon], [arc-banner-dismiss], [arc-banner-actions])) {
      ${Ye}: 1fr;
    }
  }

  &:where([action-placement=bottom]) {
    ${Ye}: auto 1fr auto;

    &:not(:has([arc-banner-icon])) {
      ${Ye}: 1fr auto;
    }

    &:not(:has([arc-banner-dismiss])) {
      ${Ye}: auto 1fr;
    }

    &:not(:has([arc-banner-icon])):not(:has([arc-banner-dismiss])) {
      ${Ye}: 1fr;
    }
  }
`,Om=l`
  width: var(--arc-banner-width, 100%);
  max-width: 100%;
  border: var(--arc-banner-border, var(${Ua}));
  background: var(--arc-banner-background, var(${je}));
  border-radius: var(--arc-banner-border-radius, var(${Es}));
  padding: var(--arc-banner-padding, var(${Xo}));
  min-height: var(--arc-banner-min-height, var(${$t}, auto));
  font-size: var(--arc-banner-font-size, initial);
  line-height: var(--arc-line-height-loose);
  overflow: var(--arc-banner-overflow, unset);

  &:not([hidden]) {
    display: flex;
    align-items: center;
  }

  ${Dm}

  [arc-banner-grid] {
    color: var(--arc-banner-color, var(${Re}));
    flex: 1;

    display: grid;
    align-items: baseline;
    grid-template-columns: var(${Ye});
    column-gap: var(${qo});
    row-gap: var(${Ps});
  }

  [arc-banner-body] {
    color: var(--arc-banner-color, var(${Re}));
    flex: 1;
    min-width: var(--arc-banner-body-min-width, var(${Mu}));

    display: flex;
    flex-direction: var(${Lu});
    gap: var(${_c});
  }

  [arc-banner-icon] {
    font-size: var(${Yt});
    padding-inline: var(${_s});
  }

  [arc-banner-heading],
  [arc-banner-message] {
    flex: none;
  }

  [arc-banner-heading],
  [arc-banner-message],
  [arc-banner-actions] {
    font-size: var(${qt});
    margin: 0;
  }

  [arc-banner-actions] {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: var(--arc-banner-action-justify, var(${Is}));
    gap: var(--arc-banner-action-gap, var(${Ts}));
  }

`,Nm=l`
@layer arc-components {
  ${Af}

  [arc-banner] {
    /* CORE VARIABLES -----------------------------------------------• */
    ${Lm}

    /* CORE STYLES --------------------------------------------------• */
    ${Om}

    /* INSET LAYOUT -------------------------------------------------• */
    ${Mm}

    /* BLEED LAYOUT -------------------------------------------------• */
    ${jm}
  }

}
`,Bm=Wr(Lt,["comfortable","compact"]),Fm=["inset","bleed"],Hm=["inline","bottom"],Vm=["left","center"],Um=[...Na],Gm=[...Yr,"announcement"],Km=Wr(Gm,["ai","announcement","critical","info","neutral","success","warning"]),nt={layout:"inset",variant:"neutral",density:"comfortable",actionPlacement:"inline",alignment:"left",showDismiss:!0},Wm=r=>r==="critical"||r==="warning"?"alert":"status",Xm=({children:r,id:e,icon:a,dismissProps:t,heading:o,density:n=nt.density,layout:c=nt.layout,actionPlacement:s=nt.actionPlacement,alignment:u=nt.alignment,actionSlot:h,showDismiss:p=nt.showDismiss,message:v,variant:g=nt.variant,onClose:f,...m})=>{const $=Nr(e,"arc-banner"),k=Yi(a),A=u==="center",y=c==="bleed",w=c==="inset",x=n==="compact",z=s==="inline",_=!!k,C=w&&g==="ai"?"ai-200":void 0,S={variant:g,layout:c,density:n,alignment:u,"action-placement":s},I=()=>(0,i.jsx)(Sr,{icon:k,gradient:C}),B=()=>(0,i.jsx)(i.Fragment,{children:!!h&&(0,i.jsx)("span",{"arc-banner-actions":"",children:h})}),N=()=>(0,i.jsx)("div",{"arc-banner-dismiss":"",children:(0,i.jsx)(Or,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:w||y&&g==="warning"?"common":"alpha",hierarchy:"tertiary",shape:"square","aria-label":"Dismiss",size:x?"sm":"md",...t,onClick:M=>{t?.onClick?.(M),f?.()}})}),V=({showActions:M=!0})=>(0,i.jsx)("div",{"arc-banner-body":"",children:r||(0,i.jsxs)(ie,{icon:(0,i.jsx)(I,{}),children:[!!o&&(0,i.jsx)("strong",{children:o})," ",v," ",M&&h]})}),Z=()=>(0,i.jsxs)(i.Fragment,{children:[_&&(0,i.jsx)("span",{"arc-banner-icon":"",children:(0,i.jsx)(I,{})}),(0,i.jsx)("div",{"arc-banner-body":"",children:r||(0,i.jsxs)(i.Fragment,{children:[o&&(0,i.jsx)("strong",{"arc-banner-heading":"",children:o}),v&&(0,i.jsx)("span",{"arc-banner-message":"",children:v})]})})]});return(0,i.jsx)("div",{role:Wm(g??nt.variant),...m,...S,"arc-banner":"",id:$,children:(0,i.jsxs)("div",{"arc-banner-grid":"",children:[A?(0,i.jsx)(V,{}):(0,i.jsxs)(i.Fragment,{children:[x&&z?(0,i.jsx)(V,{showActions:!1}):(0,i.jsx)(Z,{}),(0,i.jsx)(B,{})]}),p&&(0,i.jsx)(N,{})]})})};zr("ArcBanner",Nm);const Ga=l`--arc•label`,Yo=l`${Ga}•cursor`,Zo=l`${Ga}•opacity`,qm=l`
@layer arc-components {

  [arc-label] {
    /* Inter-Component Communication -------------------------------• */
    /* also applies to nested ArcLabelContent */
    ${Zo}: var(--arc-label-opacity, unset);
    ${Zo}•disabled: var(--arc-label-opacity-disabled, var(--arc-alpha-40));

    /* Internal STYLES ---------------------------------------------• */
    ${Ga}•display: var(--arc-label-display, inline-flex);
    ${Ga}•gap: var(--arc-label-gap, var(${b}•8));
    ${Ga}•align•items: var(--arc-label-align-items, baseline);

    ${Yo}: var(--arc-label-cursor, pointer);
    ${Yo}•disabled: var(--arc-label-cursor-disabled, not-allowed);

    &:has(:disabled) {
      ${Yo}: var(${Yo}•disabled);
      ${Zo}: var(${Zo}•disabled);
    }

    &[data-layout=fill] {
      ${Ga}•display: flex;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-label]:not([hidden]) {
    display: var(${Ga}•display);
    align-items: var(${Ga}•align•items);
    gap: var(${Ga}•gap);
    cursor: var(${Yo});
  }

}
`,Ym=$r(ca,["hug","fill"]),yt=({layout:r,...e})=>(0,i.jsx)("label",{...e,"arc-label":"","data-layout":r});zr("ArcLabel",qm);const Zm=l`
@layer arc-components {

  [arc-label-content] {
    opacity: var(--arc-label-opacity, var(${Zo}, unset));
    transition: var(--arc-label-transition, opacity 100ms ease-out);
    user-select: var(--arc-label-user-select, none);
    -webkit-user-select: var(--arc-label-user-select, none);
  }

}
`,xt=r=>(0,i.jsx)("span",{...r,"arc-label-content":""});zr("LabelContent",Zm);const Jm={checkbox:"checkbox",radio:"radio",switch:"radio"},Jo=({id:r,indeterminate:e,type:a,onChange:t,...o})=>{const n=a==="checkbox"&&!!e,c=(0,d.useRef)(null),s=Nr(r,`arc-${a}`),u=h=>p=>{if(!(p?.target instanceof HTMLInputElement))return;const v={checked:p?.target.checked,indeterminate:p?.target?.indeterminate,name:p?.target?.name,value:o?.value};h?.(v,p)};return(0,d.useEffect)(()=>{c.current?.type==="checkbox"&&(c.current.indeterminate=!!e)},[e]),(0,i.jsx)("input",{...o,id:s,ref:c,type:Jm[a],"arc-input-type":a,"aria-disabled":o?.disabled||void 0,"data-is-disabled":o?.disabled||void 0,"data-is-checked":o?.checked||void 0,"data-is-indeterminate":n||void 0,onChange:u(t)})},Qm=l`
@layer arc-components {

  [arc-input-mask] {
    ${Y}•border•width: var(--arc-border-width-sm);
    ${Y}•border: var(${Y}•border•width) solid var(${Y}•border•color);

    /* Inter-Component Communication ---------------------------------• */

    /* for: ArcIcon */
    --arc-icon-size: var(${Y}•icon•size); /* ArcIcon */

    /* STATES --------------------------------------------------------• */

    &:has(:disabled) {
      ${Y}•cursor: not-allowed;
    }

    &:has(:focus:focus-visible) {
      ${Y}•outline: var(${Y}•border•width) solid var(--arc-color-border-focus);
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
    width: var(${Y}•width);
    height: var(${Y}•height);
    opacity: var(${Y}•opacity, var(--arc-alpha-100));

    color: var(${Y}•color, transparent);
    background: var(${Y}•background);
    border: var(${Y}•border);
    border-radius: var(${Y}•border•radius);
    translate: var(${Y}•translate, unset);

    outline: var(${Y}•outline, none);
    outline-offset: var(${Y}•border•width);

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
      inset: calc(var(${Y}•border•width) * -1);
      cursor: var(${Y}•cursor, pointer);
      margin: 0;
      padding: 0;
      border: 0;
      z-index: var(${Y}•z•index, unset);
    }
  }

}
`,Ic=({type:r,...e})=>(0,i.jsx)("span",{"arc-input-mask-wrapper":"",children:(0,i.jsx)("span",{...e,"arc-input-mask":r})});zr("ArcBooleanInputMask",Qm);const fe=l`--arc•checkbox`,rb=l`
@layer arc-components {

  [arc-checkbox] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${fe}•font•size: 1em;
      ${fe}•icon•size: 0.625em;
      ${fe}•size: 1.125em;
      ${fe}•gap: 0.5em;
    }

    &[data-size=md] {
      ${fe}•font•size: var(${b}•14);
      ${fe}•icon•size: var(${b}•10);
      ${fe}•size: var(${b}•18);
      ${fe}•gap: var(${b}•8);
    }

    &[data-size=sm] {
      ${fe}•font•size: var(${b}•12);
      ${fe}•icon•size: var(${b}•10);
      ${fe}•size: var(${b}•16);
      ${fe}•gap: var(${b}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: ArcBooleanInputMask */
    ${Y}•border•radius: var(${b}•4);
    ${Y}•size: var(${fe}•size);
    ${Y}•icon•size: var(${fe}•icon•size);
    ${Y}•width: var(${fe}•size);
    ${Y}•height: var(${fe}•size);
    ${Y}•translate: 0 var(${b}•1m);•

    /* for: ArcLabel */
    --arc-label-gap: var(${fe}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-checkbox]:not([hidden]) {
    font-size: var(${fe}•font•size);
    display: var(--arc-checkbox-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked, :indeterminate)) {
      ${Y}•color: transparent;
      ${Y}•border•color: var(--arc-color-border-stark);
      ${Y}•background: transparent;

      &:hover {
        ${Y}•border•color: var(--arc-color-border-theme-heavy);
        ${Y}•background: var(--arc-color-bg-theme-subtle);
      }

      &:has(:disabled) {
        ${Y}•border•color: var(--arc-color-border-disabled);
        ${Y}•background: var(--arc-color-bg-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* PRIMARY, +DISABLED */
    &[data-variant=primary] {
      &:has(:checked, :indeterminate) {
        ${Y}•color: var(--arc-color-fg-on-theme-heavy);
        ${Y}•border•color: transparent;
        ${Y}•background: var(--arc-color-bg-theme-heavy);

        &:not(:has(:disabled)):hover {
          ${Y}•color: var(--arc-color-fg-on-theme-stark);
          ${Y}•background: var(--arc-color-bg-theme-stark);
        }

        &:has(:disabled) {
          ${Y}•color: var(--arc-color-fg-on-theme-mid);
          ${Y}•background: var(--arc-color-bg-theme-mid);
        }
      }
    }

    /* SECONDARY, +DISABLED */
    &[data-variant=secondary] {
      &:has(:checked, :indeterminate) {
        ${Y}•color: var(--arc-color-fg-theme-heavy);
        ${Y}•border•color: var(--arc-color-border-theme-heavy);
        ${Y}•background: transparent;

        &:not(:has(:disabled)):hover {
          ${Y}•color: var(--arc-color-fg-theme-stark);
          ${Y}•border•color: var(--arc-color-border-theme-stark);
        }

        &:has(:disabled) {
          ${Y}•color: var(--arc-color-fg-theme-subtle);
          ${Y}•border•color: var(--arc-color-border-theme-mid);
        }
      }
    }
  }

}
`,eb=$r(ca,["hug","fill"]),ab=$r(ke,["inherit","md","sm"]),tb=$r(Yr,["primary","secondary"]),Rs=({children:r,label:e,layout:a,size:t="md",variant:o="primary",useMask:n=!0,...c})=>{const{className:s,title:u,...h}=c,p={className:s,title:u},v=r??e,g=(0,i.jsx)(Jo,{...h,type:"checkbox"}),f=n&&(0,i.jsxs)(Ic,{type:"checkbox",children:[g,(0,i.jsx)(Sr,{icon:h?.indeterminate?"fa-solid fa-minus arc-fw":"fa-solid fa-check arc-fw"})]}),m=!!v&&(0,i.jsxs)(yt,{layout:a,children:[f||g,(0,i.jsx)(xt,{children:v})]});return(0,i.jsx)("span",{...p,"arc-checkbox":"","data-size":t,"data-variant":o,children:m||f||g})};zr("ArcCheckbox",rb);const Zt=()=>{},kt=l`--arc•cb`,_e=l`${kt}•o`,Ls=l`${_e}•icon`,Ms=l`${_e}•text`,Du=l`${kt}•fs`,Ou=l`${kt}•br`,js=l`${kt}•di`,Nu=l`${kt}•pd`,Bu=l`${kt}•gp`,Fu=l`${kt}•bg`,Qo=l`${_e}•fg`,Tc=l`${_e}•bg`,Hu=l`${_e}•bc`,Ds=l`${_e}•bw`,Pc=l`${_e}•br`,Vu=l`${_e}•fw`,Uu=l`${_e}•ol`,Gu=l`${_e}•ow`,Ku=l`${_e}•oo`,Wu=l`${_e}•lh`,Rc={BAR:l`
    ${Du}: var(${b}•14);
    ${Ou}: var(${b}•8);

    &:is([data-layout=hug], :not([data-layout])) { /** @default */
      ${js}: inline-flex;
    }

    &[data-layout=fill] {
      ${js}: flex;
    }
  `,OPTIONS:l`
    ${Qo}: var(--arc-color-fg-secondary);
    ${Tc}: transparent;
    ${Hu}: transparent;
    ${Ds}: var(${b}•1);
    ${Wu}: calc(var(${_e}•sz) - var(${Ds}) * 2);
    ${Gu}: var(${b}•2);
    ${Ku}: 0;
  `,SOLID:l`
    ${Fu}: transparent;
    ${Nu}: 0;
    ${Bu}: var(${b}•2);

    ${Pc}: var(${b}•8);

    /* Solid sizes */
    &:is([data-size=lg], :not([data-size])) {
      ${_e}•sz: var(${b}•40);
      ${Ls}•pd: var(${b}•8);
      ${Ms}•pd: var(${b}•12);
    }

    &[data-size=md] {
      ${_e}•sz: var(${b}•32);
      ${Ls}•pd: var(${b}•6);
      ${Ms}•pd: var(${b}•8);
    }
  `,SOLID_OPTION_STATES:l`
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${Qo}: var(--arc-color-fg-on-hover-default);
        ${Tc}: var(--arc-color-bg-hover-default);
      }
    }

    &:has(:checked) {
      ${Qo}: var(--arc-color-fg-primary);
      ${Tc}: var(--arc-color-bg-secondary);
      ${Vu}: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${Qo}: var(--arc-color-fg-disabled);
    }

    &:has(:focus-within:focus-visible) {
      ${Uu}: var(${Gu}) solid var(--arc-color-border-focus);
    }
  `},ob=l`
@layer arc-components {

  [arc-checkbox-bar] {
    ${Rc.BAR}
    ${Rc.OPTIONS}

    /* Inter-Component Communication -------------------------------• */
    --arc-label-opacity-disabled: 1; /* intrinsic disabled opacity not needed here; letting tokens handle it */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */

    ${Rc.SOLID}

    [arc-checkbox-bar-option] {
      ${Rc.SOLID_OPTION_STATES}
    }
  }

  /* CORE STYLES ---------------------------------------------------- */
  [arc-checkbox-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
    border-radius: var(${Pc});
  }

  [arc-checkbox-bar]:not([hidden]) {
    font-size: var(--arc-checkbox-bar-font-size, var(${Du}));
    display: var(${js});
    gap: var(${Bu});
    background: var(${Fu});
    border-radius: var(${Ou});
    padding: var(${Nu});
    margin: 0;

    [arc-checkbox] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${Pc});
      outline: var(${Uu}, none);
      outline-offset: var(${Ku});
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
      line-height: var(${Wu});
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${_e}•sz);
      min-width: var(${_e}•sz);

      border-radius: var(${Pc});
      border: var(${Ds}) solid var(${Hu});
      background: var(${Tc});
      color: var(${Qo});
      font-weight: var(${Vu}, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${Ms}•pd);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${Ls}•pd);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,nb=$r(ca,["hug","fill"]),cb=$r(ke,["lg","md"]),ib=$r(Yr,["solid"]),Xu=({children:r,label:e,icon:a,...t})=>{const o=r||(0,i.jsx)(ie,{icon:a,text:e});return(0,i.jsx)("li",{"arc-checkbox-bar-option":"","data-is-checked":t?.checked||void 0,children:(0,i.jsx)(Rs,{...t,layout:"fill",useMask:!1,label:o,onChange:t.onChange??Zt})})},sb=({children:r,size:e="lg",layout:a="hug",variant:t="solid",name:o,options:n,values:c,isDisabled:s,onChange:u,...h})=>{const p=Nr(o,"arc-checkbox-bar");return(0,i.jsx)("ul",{...h,"arc-checkbox-bar":"","data-size":e,"data-layout":a,"data-variant":t,"is-disabled":s?"":void 0,role:"group",children:n?n.map(({hidden:v,onChange:g,value:f,...m})=>v||f==null||f===""?null:(0,d.createElement)(Xu,{...m,key:String(f),name:p,value:f,checked:c?.includes(f)??!1,disabled:s||m.disabled,onChange:g??u??Zt})):r})};zr("ArcCheckboxBar",ob);const me=r=>l`max(${r}px, ${r/16}em)`,Ea=l`--arc•chip`,rn=l`${Ea}•fg`,en=l`${Ea}•bg`,an=l`${Ea}•border`,Lc=l`${Ea}•height`,Mc=l`${Ea}•padding`,jc=l`${Ea}•leading•edge`,Dc=l`${Ea}•dismiss•edge`,Os=l`${Ea}•avatar•gap`,Oc=l`${Ea}•icon•gap`,Nc=l`${Ea}•dismiss•gap`,lb=l`:where(:hover, [data-simulate=hover], :has([data-simulate=hover]))`,db=l`:not([is-selected], [is-disabled])`,ub=l`
  ${rn}: var(--arc-chip-color, var(--arc-color-fg-primary));
  ${en}: var(--arc-chip-background, var(--arc-color-bg-primary));
  ${an}: var(--arc-chip-border-color, var(--arc-color-border-mid));
  ${Os}: ${me(6)};
`,hb=l`
  &[data-size=sm] {
    ${Lc}: ${me(24)};
    ${Mc}: ${me(8)};
    ${jc}: ${me(1)};
    ${Dc}: 0;
    ${Oc}: ${me(4)};
    ${Nc}: 0;
  }

  &[data-size=md] {
    ${Lc}: ${me(32)};
    ${Mc}: ${me(12)};
    ${jc}: ${me(3)};
    ${Dc}: ${me(3)};
    ${Oc}: ${me(8)};
    ${Nc}: ${me(2)};
  }

  &[data-size=lg] {
    ${Lc}: ${me(40)};
    ${Mc}: ${me(16)};
    ${jc}: ${me(3)};
    ${Dc}: ${me(7)};
    ${Oc}: ${me(8)};
    ${Nc}: ${me(4)};

    &[has-dismiss] {
      ${Os}: ${me(8)};
    }
  }
`,pb=l`
  /* WRAPPER — visible pill ----------------------------------------• */
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  gap: var(${Nc});
  height: var(${Lc});
  border-radius: var(--arc-border-radius-pill);
  border: var(--arc-border-width-sm) solid var(${an});
  background: var(${en});
  color: var(${rn});
  font-family: var(--arc-font-family-body);
  font-size: var(--arc-chip-font-size, initial);
  transition:
    background-color 200ms ease-out,
    border-color 200ms ease-out,
    color 200ms ease-out;

  &:has([arc-chip-body]:focus-visible) {
    outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
    outline-offset: var(--arc-border-width-md);

    [arc-chip-body]:focus-visible { outline: none; }
  }
`,gb=l`
  /* BODY — content surface + inner slots --------------------------• */
  [arc-chip-body] {
    flex: 1;
    appearance: none;
    display: inline-flex;
    align-items: center;
    height: 100%;
    padding: 0 var(${Mc});
    margin: 0;
    background: transparent;
    border: none;

    /* Asymmetric left padding when an avatar is present — matches the avatar's vertical inset. */
    &:has([arc-avatar-text]) {
      padding-inline-start: var(${jc});
    }

    /* Inter-Component Communication • ArcAvatarText ------------• */
    --arc-avatar-text-gap: var(${Os});

    /* Inter-Component Communication • ArcIconText --------------• */
    --arc-icon-text-gap: var(${Oc});
    --arc-icon-text-line-height: var(--arc-line-height-tight);
  }

  /* When a dismiss sibling is present, pull body flush right and reserve outer space for it. */
  &[has-dismiss] {
    padding-inline-end: var(${Dc});
    [arc-chip-body] { padding-inline-end: 0; }
  }
`,vb=l`
  /* DISMISS — sibling of body -------------------------------------• */
  [data-slot=dismiss]:where(:hover, [data-simulate=hover]) {
    background: var(--arc-color-alpha-subtle);
  }
`,fb=l`
  /* INTERACTIVE — only set on interactive wrappers ----------------• */
  &[is-interactive] {
    cursor: pointer;
    user-select: none;

    [arc-chip-body] {
      color: inherit;
      cursor: inherit;
    }

    &${lb}${db} {
      ${en}: var(--arc-color-bg-hover-default);
      ${an}: var(--arc-color-border-hover);
    }
  }

  /* SELECTED ------------------------------------------------------• */
  &[is-selected] {
    ${en}: var(--arc-color-bg-blue-muted);
    ${an}: var(--arc-color-border-selected);
    ${rn}: var(--arc-color-fg-brand-heavy);
  }

  /* DISABLED ------------------------------------------------------• */
  &[is-disabled] {
    ${en}: transparent;
    ${an}: var(--arc-color-border-disabled);
    ${rn}: var(--arc-color-fg-disabled);
    cursor: not-allowed;
  }
`,mb=l`
  &:where([data-variant=ai]) {
    background: var(--arc-gradient-ai-50);

    &[is-selected] {
      background: var(--arc-gradient-ai-100) padding-box, var(--arc-gradient-ai-200) border-box;
      border-color: transparent;
      ${rn}: var(--arc-color-fg-primary);
    }
  }
`,bb=l`
@layer arc-components {

  [arc-chip]:not([hidden]) {
    /* SETUP --------------------------------------------------------• */
    ${ub}

    /* SIZES --------------------------------------------------------• */
    ${hb}

    /* CORE STYLES --------------------------------------------------• */
    ${pb}

    /* BODY ---------------------------------------------------------• */
    ${gb}

    /* DISMISS ------------------------------------------------------• */
    ${vb}

    /* STATES -------------------------------------------------------• */
    ${fb}

    /* VARIANTS -----------------------------------------------------• */
    ${mb}
  }

}
`,$b=$r(Yr,["common","ai"]),yb=Wr(ke,["sm","md","lg"]),xb={sm:"xs",md:"sm",lg:"md"},kb={sm:"sm",md:"md",lg:"md"},Ns={variant:"common",size:"md"},wb=({children:r,text:e,variant:a=Ns.variant,size:t=Ns.size,isSelected:o,isDisabled:n,isStrong:c,icon:s,isFlipped:u,avatar:h,onClick:p,onDismiss:v,dismissProps:g,...f})=>{const m=p!==void 0||o!==void 0,$=m?"button":"span",k=r||e,A=!!h,y=!!s;return(0,i.jsxs)("span",{...f,"arc-chip":"","data-size":t,"data-variant":a,"is-selected":o?"":void 0,"is-disabled":n?"":void 0,"is-interactive":m?"":void 0,"has-dismiss":v?"":void 0,children:[(0,i.jsx)($,{"arc-chip-body":"",...m&&{type:"button",disabled:n,"aria-pressed":o,"aria-disabled":n||void 0,onClick:n?void 0:p},children:A?(0,i.jsx)(ec,{avatar:{...h,isActive:!n},isStrong:c,size:xb[t],overflow:"truncate",children:k}):(y||k)&&(0,i.jsx)(ie,{icon:s,isFlipped:u,isStrong:c,size:kb[t],overflow:"truncate",children:k})}),v&&(0,i.jsx)(Or,{"aria-label":typeof e=="string"?`Remove ${e}`:"Dismiss",icon:"fa-regular fa-xmark",...g,layout:"icon",hierarchy:"tertiary",shape:"round",size:"sm","data-slot":"dismiss",disabled:n,onClick:w=>{g?.onClick?.(w),v()}})]})};zr("ArcChip",bb);const Ab=["normal","simple","add","edit"],Sb=["solid","gradient"],Cb=["swatch","gradient-stop","gradient"],Eb=["standalone","embedded"],zb=["none","header","tools"],Bc=["gradient-field","gradient-stops","angle-slider","angle-presets"],Bs=["color-field","eye-dropper","hue-slider","alpha-slider","alpha-input","hex-input","palettes"],qu=["eye-dropper","alpha-slider","hex-input","palettes"],_b=[...Bs,...Bc],Yu=r=>r.kind==="gradient",Zu=r=>r.activePanel==="solid",Ib=r=>r.activePanel==="gradient",Tb=r=>r.activePanel==="none",ue={colorPicker:"Color Picker",heading:"Color",panelSolid:"Solid",panelGradient:"Gradient",colorField:"Color Saturation and Value",saturation:"Saturation",value:"Value",colorFieldReadout:(r,e)=>`Saturation ${r}%. Value ${e}%.`,hue:"Hue",hueValue:r=>`Hue ${r}\xB0`,opacity:"Opacity",opacityValue:r=>`Opacity ${r}%`,hex:"Hex",unsetColor:"Unset color",unsetColorPlaceholder:"...",hexInvalid:"Please enter six hex digits \u2192 A1B2C3",hexRgbOnly:"Use six hex digits (RGB only). Opacity is not available.",hexExpandHint:r=>`Please enter six hex digits \u2192 ${r}.`,hexApplyAlphaHint:(r,e)=>`Change to \u2192 #${r} at ${e}% opacity?`,applyExpandedHex:"Apply expanded six-digit hex",applyExpandedHexValue:r=>`Apply expanded hex ${r}`,applyHexWithAlpha:(r,e)=>`Apply #${r} and ${e}% opacity`,eyeDropper:"Dropper",eyeDropperTooltip:"Pick a color",colorPalette:"Color palette",addSwatch:"Add Swatch",addCurrentColor:"Add Current Color",saveColor:"Save Color",save:"Save",cancel:"Cancel",done:"Done",removeColor:"Remove color",removeGradient:"Remove gradient",gradient:"Gradient",gradientStops:"Stops",addGradient:"Add Gradient",stopPosition:r=>`Stop ${r} position`,addColorStop:"Add Color Stop",editColorStop:"Edit Color Stop",insertColorStop:"Insert Color Stop",removeColorStop:"Remove Color Stop",distributeColorStops:"Distribute Color Stops",angle:"Angle",gradientAngle:"Gradient angle",gradientAngleOption:r=>`${r}\xB0`},Fc=r=>r?{...ue,...r}:ue,Pb=1e-10,Hc=1e-6,cw=1e-4,Ju=2,ar=(r,e,a)=>Math.min(a,Math.max(e,r)),va=(r,e)=>{const a=10**e;return Math.round(r*a)/a},Qu=(r,e=Hc)=>Math.abs(r)<e?0:Math.abs(1-r)<e?1:r,Rb=r=>{if(!Number.isFinite(r)||r<=0)return Ju;let e=r,a=0;for(;a<12;){const t=Math.round(e);if(Math.abs(e-t)<Pb)return a;e*=10,a+=1}return Ju},Lb=(r,e,a,t)=>[{test:e<0&&a>=0,value:(r<0?Math.abs(e):a)>0?va(r/(r<0?Math.abs(e):a)*100,t):0},{test:a<0,value:e<0?va(r/Math.abs(e)*100,t):0},{test:e>=0,value:a>0?va(r/a*100,t):0}].find(({test:o})=>o)?.value??0,rh=({value:r,min:e=0,max:a=100,step:t=1,precision:o})=>{const n=Number(e),c=Number(a),s=Math.min(n,c),u=Math.max(n,c),h=Number(t),p=Number(r),v=u-s,g=Number.isFinite(h)&&h>0&&v>0?h/v*100:0,f=o??Rb(g),m=ar(p,s,u),$=v===0?0:(m-s)/v,k=va($*100,f),A=va(100-k,f),y=Lb(m,s,u,f);return{toValue:k,fromValue:A,pctSigned:y}},tn=r=>parseInt(r,16),be=r=>ar(va(r,0),0,255),Fs=r=>va((r%360+360)%360,2),eh=(r,e)=>Qu(va(ar(r,0,1),e)),Ve=r=>{const e=(r.h%360+360)%360,a=ar(r.s,0,1),t=ar(r.v,0,1),o=ar(r.a,0,1),n=t*a,c=n*(1-Math.abs(e/60%2-1)),s=t-n;let u=0,h=0,p=0;return e<60?[u,h,p]=[n,c,0]:e<120?[u,h,p]=[c,n,0]:e<180?[u,h,p]=[0,n,c]:e<240?[u,h,p]=[0,c,n]:e<300?[u,h,p]=[c,0,n]:[u,h,p]=[n,0,c],{r:(u+s)*255,g:(h+s)*255,b:(p+s)*255,a:o}},Vc=(r,e)=>{const a=ar(r.r,0,255)/255,t=ar(r.g,0,255)/255,o=ar(r.b,0,255)/255,n=Math.max(a,t,o),c=Math.min(a,t,o),s=n-c,u=n===0?0:s/n,h=n;let p=e??0;return s>1e-10?(n===a?p=60*((t-o)/s%6):n===t?p=60*((o-a)/s+2):p=60*((a-t)/s+4),p<0&&(p+=360)):p=(p%360+360)%360,{h:p,s:u,v:h,a:ar(r.a,0,1)}},ah=r=>{const e=(r.h%360+360)%360,{s:a}=r,{l:t}=r,o=(1-Math.abs(2*t-1))*a,n=o*(1-Math.abs(e/60%2-1)),c=t-o/2;let s=0,u=0,h=0;return e<60?[s,u,h]=[o,n,0]:e<120?[s,u,h]=[n,o,0]:e<180?[s,u,h]=[0,o,n]:e<240?[s,u,h]=[0,n,o]:e<300?[s,u,h]=[n,0,o]:[s,u,h]=[o,0,n],{r:(s+c)*255,g:(u+c)*255,b:(h+c)*255,a:r.a}},th=r=>{const e=r.r/255,a=r.g/255,t=r.b/255,o=Math.max(e,a,t),n=Math.min(e,a,t),c=o-n;let s=0;c!==0&&(o===e?s=60*((a-t)/c%6):o===a?s=60*((t-e)/c+2):s=60*((e-a)/c+4)),s<0&&(s+=360);const u=(o+n)/2,h=c===0?0:c/(1-Math.abs(2*u-1));return{h:s,s:h,l:u,a:r.a}},oh=r=>{const e=wt(r.r),a=wt(r.g),t=wt(r.b),o=.4122214708*e+.5363325363*a+.0514459929*t,n=.2119034982*e+.6806995451*a+.1073969566*t,c=.0883024619*e+.2817188376*a+.6299787005*t,s=Math.cbrt(o),u=Math.cbrt(n),h=Math.cbrt(c),p=.2104542553*s+.793617785*u-.0040720468*h,v=1.9779984951*s-2.428592205*u+.4505937099*h,g=.0259040371*s+.7827717662*u-.808675766*h,f=Math.sqrt(v*v+g*g);let m=Math.atan2(g,v)*180/Math.PI;return m<0&&(m+=360),{L:ar(p,0,1),C:f,h:m,a:ar(r.a,0,1)}},nh=r=>{const e=ar(r.L,0,1),a=r.h*Math.PI/180,t=r.C*Math.cos(a),o=r.C*Math.sin(a),n=e+.3963377774*t+.2158037573*o,c=e-.1055613458*t-.0638541728*o,s=e-.0894841775*t-1.291485548*o,u=n*n*n,h=c*c*c,p=s*s*s,v=4.0767416621*u-3.3077115913*h+.2309699292*p,g=-1.2684380046*u+2.6097574011*h-.3413193965*p,f=-.0041960863*u-.7034186147*h+1.707614701*p,m=$=>{const k=$<=.0031308?$*12.92:1.055*$**.4166666666666667-.055;return Math.round(ar(k,0,1)*255)};return{r:m(v),g:m(g),b:m(f),a:ar(r.a,0,1)}},wt=r=>{const e=be(r)/255;return e<=.04045?e/12.92:((e+.055)/1.055)**2.4},ch=r=>{const e=wt(r.r),a=wt(r.g),t=wt(r.b);return .2126*e+.7152*a+.0722*t},Uc=(r,e)=>{const a=r.a+e.a*(1-r.a);if(a<=0)return{r:0,g:0,b:0,a:0};const t=r.a/a,o=e.a*(1-r.a)/a;return{r:be(r.r*t+e.r*o),g:be(r.g*t+e.g*o),b:be(r.b*t+e.b*o),a:eh(a,2)}},on=(r,e,a,t)=>{const o=t?t(r):r,n=t?t(e):e;return Math.abs(o-n)<=a},Jt=(r,e,a)=>on(r,e,a,Math.round),Hs=(r,e,a)=>on(r,e,a),Gc=(r,e)=>!e||!r?!1:Jt(r.r,e.r,1)&&Jt(r.g,e.g,1)&&Jt(r.b,e.b,1)&&Hs(r.a,e.a,1/255+Hc),ih=(r,e)=>!r||!e?!1:be(r.r)===be(e.r)&&be(r.g)===be(e.g)&&be(r.b)===be(e.b)&&Math.abs(r.a-e.a)<Hc,Mb=(r,e)=>!e||!r?!1:Jt(r.r,e.r,3)&&Jt(r.g,e.g,3)&&Jt(r.b,e.b,3)&&Hs(r.a,e.a,.02),jb=(r,e)=>on(r.h,e.h,1e-4)&&on(r.s,e.s,1e-4)&&on(r.v,e.v,1e-4)&&Hs(r.a,e.a,1e-4),Vs=r=>String(Math.round(ar(r,0,1)*100)),sh=r=>{const e=r.trim();if(!e)return null;if(e.endsWith("%")){const t=Number(e.slice(0,-1).trim());return Number.isFinite(t)?ar(t/100,0,1):null}if(e.startsWith(".")||e.includes(".")){const t=Number(e);return Number.isFinite(t)?ar(t,0,1):null}const a=Number(e);return Number.isFinite(a)?ar(a/100,0,1):null},Kc=r=>ar(Number(r.toFixed(2)),0,1).toString(),Db=/^[0-9a-f]+$/i,Ob=500,Qt=new Map,Us=r=>({...r}),Nb=(r,e)=>{if(Qt.size>=Ob){const a=Qt.keys().next().value;a&&Qt.delete(a)}Qt.set(r,e?Us(e):null)},Gs=r=>r.split("").map(e=>e+e).join(""),Ks=r=>r.length===3?Gs(r):r,At=r=>r.replace(/#/g,"").trim(),lh=r=>{const e=r.trim().toLowerCase().replace(/^#/,"");if(![3,4,6,8].includes(e.length))return null;const a=e.length<=4?Gs(e):e;if(!Db.test(a))return null;const t=tn(a.slice(0,2)),o=tn(a.slice(2,4)),n=tn(a.slice(4,6)),c=a.length===8?tn(a.slice(6,8))/255:1;return[t,o,n,c].some(s=>Number.isNaN(s))?null:{r:t,g:o,b:n,a:ar(c,0,1)}},za=r=>{const e=Number(r.trim());return Number.isFinite(e)?e:null},Ws=r=>{const e=r.trim();if(e.endsWith("%")){const t=za(e.slice(0,-1));return t==null?null:ar(t/100*255,0,255)}const a=za(e);return a==null?null:ar(a,0,255)},Xs=r=>{const e=r.trim();if(e.endsWith("%")){const t=za(e.slice(0,-1));return t==null?null:ar(t/100,0,1)}const a=za(e);return a==null?null:ar(a,0,1)},qs=(r,e)=>{const t=r.trim().toLowerCase().match(e);if(!t)return null;const o=t[1].trim(),[n,c]=o.split("/").map(h=>h.trim()),s=n.includes(",")?n.split(",").map(h=>h.trim()):n.split(/\s+/).filter(Boolean),u=c&&c.length?c:null;return{channels:s,alphaPart:u}},Bb=r=>{const e=qs(r,/^rgba?\((.*)\)$/);if(!e)return null;let{channels:a,alphaPart:t}=e;if(a.length===4&&t===null&&(t=a[3]??null,a=a.slice(0,3)),a.length!==3)return null;const o=Ws(a[0]),n=Ws(a[1]),c=Ws(a[2]);if(o==null||n==null||c==null)return null;let s=1;if(t){const u=Xs(t);if(u==null)return null;s=u}return{r:o,g:n,b:c,a:s}},Fb=r=>{const e=qs(r,/^hsla?\((.*)\)$/);if(!e)return null;let{channels:a,alphaPart:t}=e;if(a.length===4&&t===null&&(t=a[3]??null,a=a.slice(0,3)),a.length!==3)return null;const o=p=>Number(p.replace("deg","").trim()),n=p=>{if(!p.endsWith("%"))return null;const v=za(p.slice(0,-1));return v==null?null:v/100},c=o(a[0]),s=n(a[1]),u=n(a[2]);if(!Number.isFinite(c)||s==null||u==null)return null;let h=1;if(t){const p=Xs(t);if(p==null)return null;h=p}return ah({h:c,s,l:u,a:h})},Hb=r=>{const e=qs(r,/^oklch\((.*)\)$/);if(!e)return null;const{channels:a,alphaPart:t}=e;if(a.length!==3)return null;const o=p=>{const v=p.trim();if(v.endsWith("%")){const f=za(v.slice(0,-1));return f!=null?ar(f/100,0,1):null}const g=za(v);return g!=null?ar(g,0,1):null},n=p=>{const v=p.trim();if(v.endsWith("%")){const f=za(v.slice(0,-1));return f!=null&&f>=0?f/100*.4:null}const g=za(v);return g!=null&&g>=0?g:null},c=o(a[0]),s=n(a[1]),u=za(a[2].trim());if(c==null||s==null||u==null||!Number.isFinite(u))return null;let h=1;if(t){const p=Xs(t);if(p==null)return null;h=p}return nh({L:c,C:s,h:u,a:h})},Zr=r=>{if(!r||typeof r!="string")return null;const e=r.toLowerCase().trim();if(Qt.has(e)){const t=Qt.get(e);return t?Us(t):null}let a=null;return e.startsWith("#")?a=lh(e):e.startsWith("rgb")?a=Bb(e):e.startsWith("hsl")?a=Fb(e):e.startsWith("oklch")&&(a=Hb(e)),Nb(e,a),a?Us(a):null},Vb=/#[0-9a-f]{3,8}|(?:rgba?|hsla?|oklch)\([^()]*\)/gi,dh=r=>{const e=(r.match(Vb)??[]).map(u=>Zr(u)).filter(u=>u!=null);if(e.length===0)return null;const a=e.reduce((u,h)=>({r:u.r+h.r,g:u.g+h.g,b:u.b+h.b,a:u.a+h.a}),{r:0,g:0,b:0,a:0}),t=e.length,o=Math.round(a.r/t),n=Math.round(a.g/t),c=Math.round(a.b/t),s=a.a/t;return s<1?`rgba(${o}, ${n}, ${c}, ${s})`:`rgb(${o}, ${n}, ${c})`},uh=(r,e,a)=>{const t=Zr(`#${r}`);return t?a?.shouldApplyParsedAlpha===!0&&(r.length===4||r.length===8)?t:{...t,a:e.a}:null},hh=r=>{if(!r||typeof r!="string")return!1;const e=r.trim().toLowerCase();return/^#?[0-9A-F-a-f]{3,4}$/.test(e)||/^#?[0-9A-F-a-f]{6}([0-9A-F-a-f]{2})?$/.test(e)},ph=r=>{if(!r||typeof r!="object")return!1;const e=r;return typeof e.r=="number"&&typeof e.g=="number"&&typeof e.b=="number"&&typeof e.a=="number"},Wc=r=>{if(!r||typeof r!="object")return!1;const e=r;return typeof e.h=="number"&&typeof e.s=="number"&&typeof e.v=="number"&&typeof e.a=="number"},Ue=(r,e=!1)=>{const a=s=>ar(Math.round(s),0,255).toString(16).padStart(2,"0"),t=a(r.r),o=a(r.g),n=a(r.b),c=a(ar(r.a,0,1)*255);return e?`#${t}${o}${n}${c}`:`#${t}${o}${n}`},ro=r=>Ue({...r,a:1},!1).slice(1),gh=(r,e,a,t,o)=>{const n=Zr(`#${r}`)??e,c={...n,[a]:be(n[a]+t*o)};return ro(c)},Ys=r=>{const e=th(r),a=Math.round(e.h),t=Math.round(e.s*100),o=Math.round(e.l*100);return`hsl(${a} ${t}% ${o}% / ${Kc(ar(e.a,0,1))})`},_a=r=>{const e=ar(Math.round(r.r),0,255),a=ar(Math.round(r.g),0,255),t=ar(Math.round(r.b),0,255),o=ar(r.a,0,1);return o<1?`rgb(${e} ${a} ${t} / ${Kc(o)})`:`rgb(${e} ${a} ${t})`},Zs=r=>{const e=oh(r),a=Math.round(e.L*1e3)/10,t=Math.round(e.C/.4*1e3)/10,o=Math.round(e.h),n=ar(e.a,0,1);return n<1?`oklch(${a}% ${t}% ${o} / ${Kc(n)})`:`oklch(${a}% ${t}% ${o})`},Ge={ALPHA_MIN:0,ALPHA_MAX:100,ALPHA_SNAP_STEP:10,HUE_MIN:0,HUE_MAX:360,HUE_SNAP_STEP:15,SATURATION_MIN:0,SATURATION_MAX:100,SATURATION_SNAP_STEP:10,VALUE_MIN:0,VALUE_MAX:100,VALUE_SNAP_STEP:10},vh={auto:r=>r.a<1?_a(r):Ue({...r,a:1},!1),hex:r=>Ue({...r,a:1},!1),hexa:r=>Ue(r,!0),rgb:r=>_a(r),hsl:r=>Ys(r),oklch:r=>Zs(r)},Ub=(r,e)=>(vh[r]??vh.hex)(e),Br=r=>typeof r=="string"?r:r.color,eo=(r,e)=>typeof r!="string"&&r.name?r.name:e??void 0,fh=r=>{const e=Br(r),a=Zr(e),t=!!a&&a.a<1&&a.a>.01,o=!!a&&a.a===0;return{cssColor:e,rgba:a,isTranslucent:t,isTransparent:o,opaqueHex:a?Ue({...a,a:1},!1):null}},Xc=(r,e)=>{if(Wc(r))return r;const a=(ph(r)?r:null)??Zr(r)??Zr(e)??{r:0,g:0,b:0,a:1};return Vc(a)},Ia=(r,e)=>{const a=e?.fallbackHex??"#000000",t=e?.format??"hex",o=Xc(r,a),n={h:(o.h%360+360)%360,s:ar(o.s,0,1),v:ar(o.v,0,1),a:ar(o.a,0,1)},c=Ve(n),s={r:be(c.r),g:be(c.g),b:be(c.b),a:n.a},u=Ub(t,s);let h,p,v,g,f;const m=s.a<1?"rgb":"hex",$=s.a<1?_a(s):Ue({...s,a:1},!1),k=oo(u,{contrastBias:e?.contrastBias,bgColor:e?.contrastBgColor});return{format:t,value:u,alpha:s.a,autoFormat:m,autoValue:$,contrastColor:k,hsv:n,rgba:s,get hex(){return h??=Ue({...s,a:1},!1)},get hexa(){return p??=Ue(s,!0)},get rgb(){return v??=_a(s)},get hsl(){return g??=Ys(s)},get oklch(){return f??=Zs(s)}}},mh=(r,e)=>({...Ia(r.hsv,{format:e}),name:r.name}),nn=(r,e)=>({color:Br(r),name:eo(r,e)}),cn=r=>({color:`#${`00${Math.floor(Math.random()*16777216).toString(16)}`.slice(-6)}`,name:r}),ao=r=>Br(r).trim().toLowerCase(),to=(r,e)=>{if(ao(r)===ao(e))return!0;const a=Zr(Br(r)),t=Zr(Br(e));return!!a&&!!t&&Gc(a,t)},Js=(r,e,a)=>{const t=a?.skipIndex;return r.some((o,n)=>n!==t?to(o,e):!1)},Gb=(r,e)=>Js(r,e)?r:[...r,e],te=r=>typeof r=="object"&&r!==null&&"stops"in r&&Array.isArray(r.stops),bh={r:255,g:255,b:255,a:1},$h={r:42,g:42,b:42,a:1},Kb=r=>{let e=r,a=0;for(;e;){const t=e.getAttribute("arc-scheme");if(t==="light")return a%2===0?bh:$h;if(t==="dark")return a%2===0?$h:bh;t==="inverse"&&(a+=1),e=e.parentElement}return null},Wb=r=>{let e=null;try{e=r?document.documentElement?.querySelector?.(r):document.documentElement}catch{return null}if(e==null)return null;let a=null,t=e,o=0;for(;t&&o<12;){const n=Zr(window.getComputedStyle(t).backgroundColor);if(n&&n.a>0){if(a=a?Uc(a,n):n,n.a===1)break}else{const c=Kb(t);if(c){a=a?Uc(a,c):c;break}}t=t.parentElement,o+=1}return a},yh=r=>{const e=window.getComputedStyle(r),a=Zr(e.backgroundColor);if(a&&a.a>0)return e.backgroundColor;const t=e.backgroundImage;return t&&t!=="none"?dh(t):null},oo=(r,e)=>{const a=Zr(Br(r));if(!a||a.a===0)return e?.useScheme?"auto":"inherit";const{darkColor:t,lightColor:o,contrastBias:n,bgColor:c,bgElement:s}=e??{},u=e?.useScheme?"light":t??"#000000",h=e?.useScheme?"dark":o??"#ffffff",p=ar(n??-4,-7,7);let v=a;if(a.a<1){const $=Zr(c??""),k=$&&$.a>0?$:null,A=k?null:Wb(s);v=Uc(a,k??A??{r:255,g:255,b:255,a:1})}const g=ch(v),f=(g+.05)/.05,m=1.05/(g+.05);return f+p>=m?u:h},Qs=r=>r==null?null:{comparisonKey:ao(r),selectedRgba:Zr(Br(r))},xh=(r,e)=>{if(!e)return!1;if(ao(r)===e.comparisonKey)return!0;if(!e.selectedRgba)return!1;const a=Zr(Br(r));return!!a&&Gc(a,e.selectedRgba)},or={ANGLE:90,ANGLE_MIN:0,ANGLE_MAX:360,ANGLE_SNAP_STEP:15,ANGLE_PRESETS:[0,180,135,225,90,270,45,315],STOPS:[],STOP_MIN:0,STOP_MAX:100},kh=r=>{const e=r!=null&&Br(r)!==""?r:cn();return[{color:Br(e),at:or.STOP_MIN},{color:Br(cn()),at:or.STOP_MAX}]},fa=r=>r.map((e,a)=>({stop:e,index:a})).sort((e,a)=>e.stop.at-a.stop.at||e.index-a.index),wh=r=>fa(r).map(e=>e.stop),St=(r,e=or.STOP_MIN,a=or.STOP_MAX)=>r.map(t=>({...t,at:ar(Math.round(t.at),e,a)})),rl=(r,e,a)=>r!=null&&a<=r+1||e!=null&&a>=e-1,Xb=(r,e,a)=>rl(r[e-1]?.stop.at,r[e+1]?.stop.at,a),qc=(r,e)=>{if((r.angle??or.ANGLE)!==(e.angle??or.ANGLE))return!1;const a=r.stops??[],t=e.stops??[];return a.length!==t.length?!1:a.every((o,n)=>o.at===t[n].at&&o.color===t[n].color)},qb=(r,e)=>qc({stops:St(r.stops??[]),angle:r.angle??or.ANGLE},{stops:St(e.stops??[]),angle:e.angle??or.ANGLE}),ct=(r,e)=>r.name===e.name&&Ka(r)===Ka(e),sn=(r,e)=>ar(Math.round((r+e)/2),or.STOP_MIN,or.STOP_MAX),Ah=(r,e,a=or.STOP_MIN,t=or.STOP_MAX)=>e<=1?a:a+r/(e-1)*(t-a),Sh=r=>{const e=fa(r);if(e.length<=1)return r;const a=[...r];return e.forEach((t,o)=>{a[t.index]={...t.stop,at:ar(Math.round(Ah(o,e.length)),or.STOP_MIN,or.STOP_MAX)}}),a},Ch=(r,e,a)=>{const t=Zr(Br(r.color)),o=Zr(Br(e.color));if(!t||!o)return Br(r.color);const n=e.at-r.at,c=n===0?0:ar((a-r.at)/n,0,1),s={r:t.r+(o.r-t.r)*c,g:t.g+(o.g-t.g)*c,b:t.b+(o.b-t.b)*c,a:t.a+(o.a-t.a)*c};return Ue(s,s.a<1)},Yb=r=>{const e=fa(r).map(o=>o.stop);if(e.length<2)return null;let a=0,t=0;for(let o=0;o<e.length-1;o+=1){const n=e[o+1].at-e[o].at;n>a&&(a=n,t=o)}return[e[t],e[t+1]]},Eh=(r,e,a="#000000")=>{const t=fa(r);if(e.kind==="between"){const o=t[e.sortedIndex-1],n=t[e.sortedIndex];if(!o||!n)return{color:Br(a),at:el(r)};const c=sn(o.stop.at,n.stop.at),s=Ch(o.stop,n.stop,c);return{color:Br(s),at:c}}return{color:Br(a),at:el(r)}},zh=(r,e)=>{if(r.length===0)return[{color:e??Br(cn()),at:sn(or.STOP_MIN,or.STOP_MAX)}];const a=fa(r),t=a[a.length-1],o=a[a.length-2],n=or.STOP_MAX,c=o?.stop.at??or.STOP_MIN,s=sn(c,n),u={color:e??Br(t.stop.color),at:n};return r.map((h,p)=>p===t.index?{...h,at:s}:h).concat(u)},el=r=>{const e=(or.STOP_MIN+or.STOP_MAX)/2;if(r.length===0)return e;if(r.length===1)return ar(r[0].at>=e?or.STOP_MIN:or.STOP_MAX,or.STOP_MIN,or.STOP_MAX);const a=Yb(r);return a?sn(a[0].at,a[1].at):e},Ka=r=>{const{stops:e=[],angle:a=or.ANGLE}=r,t=fa(e);if(t.length===0)return"transparent";if(t.length===1)return Br(t[0].stop.color);const o=t.map(({stop:n})=>`${Br(n.color)} ${n.at}%`);return`linear-gradient(${a}deg, ${o.join(", ")})`},_h=(r,e)=>r?.name??e??void 0,Yc=(r,e="")=>{const a=r.stops??[];if(a.length===0)return Br(e);const t=fa(a);if(t.length===1)return Br(t[0].stop.color);let o=0,n=0,c=0,s=0,u=0;for(let p=0;p<t.length;p+=1){const v=t[p-1]?.stop.at??t[p].stop.at,g=t[p].stop.at,f=t[p+1]?.stop.at??g,m=(g-v)/2+(f-g)/2,$=Zr(Br(t[p].stop.color));$&&(o+=$.r*m,n+=$.g*m,c+=$.b*m,s+=$.a*m,u+=m)}if(u===0)return Br(e);const h={r:Math.round(o/u),g:Math.round(n/u),b:Math.round(c/u),a:s/u};return Ue(h,h.a<1)},no=(r,e)=>{const a={stops:r.stops??[],angle:r.angle??or.ANGLE,...r.name!=null?{name:r.name}:{}},t=Yc(a,e?.fallbackColor),o=oo(t,{contrastBias:e?.contrastBias,bgColor:e?.contrastBgColor});return{...a,value:Ka(a),baseColor:t,contrastColor:o}},Ih=(r,e)=>{const a=r.stops?.length?r.stops:kh(e),t=r.angle??or.ANGLE,o={stops:a,angle:t,...r.name!=null?{name:r.name}:{}},n=e?Br(e):void 0,c=Yc(o,n),s=oo(c);return{...o,value:Ka(o),baseColor:c,contrastColor:s}},Th=r=>{const{stops:e=[],angle:a=or.ANGLE}=r;return e?.length?e.length===1?String(e[0].color):Ka({stops:e,angle:a}):"transparent"},Ph=(r,e,a,t,o,n,c,s,u=!0)=>{if(n<=0)return ar(c,c,s);const h=o*Math.PI/180,p=Math.cos(h),v=Math.sin(h),f=(((r-a)*p+(e-t)*v)/n+1)/2*100,m=u?Math.round(f):f;return ar(m,c,s)},al=(r,e,a,t)=>Math.atan2(e-t,r-a)*180/Math.PI,Rh=(r,e,a,t=or.ANGLE_MIN,o=or.ANGLE_MAX)=>{let n=a-e;for(;n>180;)n-=360;for(;n<-180;)n+=360;const c=((r+n)%360+360)%360;return ar(c,t,o)},Lh=(r,e=or.ANGLE_SNAP_STEP,a=or.ANGLE_MIN,t=or.ANGLE_MAX)=>ar(Math.round(r/e)*e,a,t),Zb=(r,e,a=or.ANGLE_SNAP_STEP,t=or.ANGLE_MIN,o=or.ANGLE_MAX)=>{const n=r%a===0;return e>0?ar(n?r+a:Math.ceil(r/a)*a,t,o):ar(n?r-a:Math.floor(r/a)*a,t,o)},Jb=new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"]),Mh=(r,e,a=1)=>{if(!Jb.has(r))return null;const o=(e-90)*Math.PI/180,n=Math.cos(o),c=Math.sin(o),s={ArrowRight:[1,0],ArrowLeft:[-1,0],ArrowDown:[0,1],ArrowUp:[0,-1]},[u,h]=s[r],p=u*n+h*c;return p>0?a:p<0||r==="ArrowLeft"||r==="ArrowUp"?-a:a},jh=(r,e)=>{const a=r.colors??[];return te(e)?a.some(n=>te(n)&&ct(n,e))?r:{...r,colors:[...a,e]}:a.some(o=>!te(o)&&to(o,e))?r:{...r,colors:[...a,e]}},Dh=(r,e)=>{const a=r.colors??[],t=te(e)?a.filter(o=>!(te(o)&&ct(o,e))):a.filter(o=>te(o)||!to(o,e));return t.length===a.length?r:{...r,colors:t}},Oh=(r,e,a)=>r.map(t=>t.id===e.id?jh(t,a):t),Nh=(r,e,a)=>r.map(t=>t.id===e.id?Dh(t,a):t),Qb=(r,e,a)=>{if(Array.isArray(r)){if(a===void 0)throw new TypeError("ArcColorPalette.addColor: pass (palettes, palette, color) when the first argument is an array.");return Oh(r,e,a)}return jh(r,e)},r$=(r,e,a)=>{if(Array.isArray(r)){if(a===void 0)throw new TypeError("ArcColorPalette.removeColor: pass (palettes, palette, color) when the first argument is an array.");return Nh(r,e,a)}return Dh(r,e)},e$=(r,e,a)=>{const t=r.find(o=>o.id===e);return t?Oh(r,t,a):r},a$=(r,e,a)=>{const t=r.find(o=>o.id===e);return t?Nh(r,t,a):r},iw=null,t$=["divider","section-label"];var o$;const Ct={layout:"gutter",variant:"inherit",overflow:"truncate",gapSize:"md",size:"md"},n$=r=>[{test:()=>!!r.variant,value:r.variant},{test:()=>!!r.icon&&typeof r.subtext<"u",value:"icon-text-detail"},{test:()=>!!r.icon,value:"icon-text"},{test:()=>!!r.avatar&&typeof r.subtext<"u",value:"user-detail"},{test:()=>!!r.avatar,value:"user"},{test:()=>typeof r.subtext<"u",value:"text-detail"},{test:()=>!0,value:"text"}],c$=({icon:r,onClick:e,items:a,renderSubmenu:t,submenuProps:o,...n})=>({icon:Vd(r),itemProps:n}),Bh=(r,e)=>{const{icon:a,itemProps:t}=c$(e);switch(r){case"divider":return(0,i.jsx)("hr",{});case"section-label":return(0,i.jsx)(ie,{...t,...Ct,icon:a,size:"sm",isStrong:!0});case"icon-text":return(0,i.jsx)(ie,{...t,...Ct,icon:a});case"icon-text-detail":return(0,i.jsx)(ie,{...t,...Ct,icon:a,isStrong:!0});case"text":return(0,i.jsx)(ie,{...t,...Ct});case"text-detail":return(0,i.jsx)(ie,{...t,...Ct,subtext:t.subtext??"sub",isStrong:!0});case"user":return(0,i.jsx)(ec,{...t,...Ct,size:"sm"});case"user-detail":return(0,i.jsx)(ec,{...t,...Ct,size:"md",isStrong:!0});default:return r}},sw=r=>Object.fromEntries(o$.map(e=>[e,Bh(e,r)])),i$=200,s$=r=>{const e=r.submenuProps&&typeof r.submenuProps=="object"?r.submenuProps.id:void 0;return typeof e=="string"&&e.length>0?e:void 0},l$=r=>{const e=r.submenuProps&&typeof r.submenuProps=="object"?r.submenuProps:{},{menuProps:a,renderItem:t,...o}=e;return{menuProps:a,popoverPassthrough:o}},d$=r=>({ownMenuId:r.menu,parentTriggerId:r.trigger}),u$=r=>{const e=r.submenuProps;if(!e||typeof e!="object")return;const a=e.renderItem;return typeof a=="function"?a:void 0},tl=r=>typeof r.renderSubmenu=="function"||Array.isArray(r.items)&&r.items.length>0,Zc=(r,e,a)=>{if(!tl(r))return{hasSubmenu:!1};const t=nl(r,e),o=`${a}-subtrigger-${t}`;let c=s$(r)??`${a}-submenu-${t}`;return c===o&&(c=`${c}-menu`),{hasSubmenu:!0,menuId:c,triggerId:o}},h$=(r,e)=>{if(!e||!r)return-1;let t=e.nodeType===Node.ELEMENT_NODE?e:e.parentNode;for(;t;){if(t===r)return-1;if(t instanceof HTMLLIElement&&t.parentElement===r)return Array.prototype.indexOf.call(r.children,t);t=t.parentNode}return-1},p$=(r,e)=>{if(typeof document>"u")return!1;const a=Qe(r,e);try{return!!a?.matches?.(":popover-open")}catch{return!1}},ol=r=>r===!0||typeof r=="number"&&r>=0&&Number.isFinite(r),g$=r=>r===!0?0:r,v$=r=>r===!0?i$:r,f$={divider:"separator","section-label":"presentation","icon-text-detail":"menuitem","icon-text":"menuitem","user-detail":"menuitem",user:"menuitem","text-detail":"menuitem",text:"menuitem"},nl=(r,e)=>r.itemId!=null&&String(r.itemId)!==""?String(r.itemId):`auto-${e}`,Fh=r=>{let e=null;for(let a=r;a;a=a.parentElement)a.hasAttribute("arc-popover")&&(e=a);return e},Hh=(r,e,a,t)=>{if(t||a==="divider"||tl(e))return;if(r.target instanceof Element){const c=r.target.closest("[arc-popover]");if(c&&r.currentTarget.contains(c))return}if(!!!(e.href||e.onClick))return;Fh(r.currentTarget)?.hidePopover?.()},m$=r=>r?.role??f$[co(r)]??"menuitem",co=r=>n$(r)?.find(({test:e})=>e())?.value??"text",Vh=r=>t$.some(e=>e===r),Uh=r=>e=>Bh(r,e),cl=(r,e,a,t)=>{const o=t??Zc(r,e,a);if(o.hasSubmenu)return o.triggerId;const n=nl(r,e);return`${a}-mi-${n}`},b$=(r,e,a)=>co(r)==="divider"||r.isDisabled===!0||r["aria-disabled"]===!0?!1:r.checked!==void 0||Zc(r,e,a).hasSubmenu?!0:!!(r.href||r.onClick),Jc=(r,e)=>{const a=[];for(let t=0;t<r.length;t+=1)b$(r[t],t,e)&&a.push(t);return a},Gh=(r,e,a)=>{if(typeof document>"u")return;const t=r.children[e];if(!(t instanceof HTMLElement))return;const o=Qe(a,r);if(o instanceof HTMLElement&&t.contains(o)){o.focus();return}const n=t.querySelectorAll('a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])');Array.from(n).find(s=>s.getAttribute("aria-disabled")!=="true")?.focus()},Kh=(r,e,a,t)=>{const o=Jc(r,e);if(o.length===0)return-1;if(t==="actual")return a>=0&&o.includes(a)?a:o[0];let n=o.indexOf(a);return n<0?t==="next"?o[0]:t==="previous"?o[o.length-1]:o[0]:t==="next"?(n=(n+1)%o.length,o[n]):(n=(n-1+o.length)%o.length,o[n])};function $$(r,e,a){return{ArrowUp:t=>{const o=Kh(r,e,t,"previous");o>=0&&a(o)},ArrowDown:t=>{const o=Kh(r,e,t,"next");o>=0&&a(o)},Home:()=>{const t=Jc(r,e);t.length>0&&a(t[0])},End:()=>{const t=Jc(r,e);t.length>0&&a(t[t.length-1])}}}function y$(r,e){const{isVisible:a,menuListRef:t,activeItemIndex:o,filteredItems:n,menuDomId:c,isMenuRtlRef:s,submenuBackNavigation:u,listNavByKey:h,hideSubmenu:p,focusTriggerById:v,focusRowAtItemIndex:g,setActiveItemIndex:f,openSubmenuForKeyboard:m}=e;if(!a||!t.current||!(r.target instanceof Node)||!t.current.contains(r.target))return;const $=t.current,k=r.target.closest?.("ul[arc-menu]");if(k&&k!==$)return;let A=h$($,r.target);if(A<0&&o>=0&&(A=o),A<0)return;const y=n[A],w=Zc(y,A,c),x=s.current,z=x?"ArrowLeft":"ArrowRight",_=x?"ArrowRight":"ArrowLeft";if(w.hasSubmenu&&r.key===_&&p$(w.menuId,$)){r.preventDefault(),r.stopPropagation(),g(A),p(w.menuId);return}if(u&&(r.key==="Escape"||r.key===_)){r.preventDefault(),r.stopPropagation(),v(u.parentTriggerId),p(u.ownMenuId);return}if(w.hasSubmenu&&(r.key===z||r.key==="Enter")){r.preventDefault(),r.stopPropagation(),f(A),m(w.menuId);return}const P=h[r.key];P&&(r.preventDefault(),r.stopPropagation(),P(A))}function x$(r,e){if(typeof document>"u")return;Qe(r,e)?.hidePopover?.()}function k$(r,e){if(typeof document>"u")return;Qe(r,e)?.showPopover?.()}function w$(r){r.querySelectorAll("[popover]").forEach(e=>{try{e.matches(":popover-open")&&e.hidePopover?.()}catch{}})}function A$(r,e){typeof document>"u"||requestAnimationFrame(()=>{Qe(r,e)?.querySelector("[arc-menu]")?.focus()})}function S$(r,e){if(typeof document>"u")return;Qe(r,e)?.focus()}function C$({menuListRef:r,passiveMode:e}){const a=(0,d.useRef)(null),t=(0,d.useRef)(null),o=(0,d.useRef)(null),n=(0,d.useCallback)(()=>{t.current!=null&&(clearTimeout(t.current),t.current=null)},[]),c=(0,d.useCallback)(()=>{o.current!=null&&(clearTimeout(o.current),o.current=null)},[]),s=(0,d.useCallback)(()=>{const m=r.current;m&&w$(m)},[r]),u=(0,d.useCallback)(m=>{x$(m,r.current),a.current===m&&(a.current=null)},[r]),h=(0,d.useCallback)(m=>{typeof document>"u"||(a.current&&a.current!==m&&u(a.current),k$(m,r.current),a.current=m)},[u,r]),p=(0,d.useCallback)(m=>{if(!ol(e))return;c(),n();const $=g$(e);if($<=0){h(m);return}t.current=setTimeout(()=>{t.current=null,h(m)},$)},[e,n,c,h]),v=(0,d.useCallback)(m=>{if(!ol(e))return;n(),c();const $=v$(e);if($<=0){u(m);return}o.current=setTimeout(()=>{o.current=null,u(m)},$)},[e,n,c,u]),g=(0,d.useCallback)(m=>{n(),c(),h(m),A$(m,r.current)},[n,c,h,r]),f=(0,d.useCallback)(m=>{S$(m,r.current)},[r]);return{activeSubmenuIdRef:a,cancelPendingSubmenuOpen:n,cancelPendingSubmenuClose:c,closeOpenDescendantPopovers:s,hideSubmenu:u,runShowSubmenu:h,showSubmenuFromPointer:p,requestSubmenuCloseFromPointer:v,openSubmenuForKeyboard:g,focusTriggerById:f}}const E$=l`--arc•menu`,ma=l`${E$}•item`,z$=l`
@layer arc-components {

  [arc-menu] {
    ${ma}•gap: var(${L}•8);
    ${ma}•fg: inherit;
    ${ma}•bg: inherit;

    font-size: var(--arc-menu-font-size, var(${b}•14));
    list-style: none;
    line-height: normal;

    display: var(--arc-menu-display, flex);
    flex-direction: var(--arc-menu-flex-direction, column);
    gap: var(--arc-menu-gap, var(${L}•2));
    padding: var(--arc-menu-padding, var(${L}•4));
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

    &:not([arc-menu-selection-row]):has(> [arc-button=custom]:not([is-disabled])) {
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
      --arc-button-outline-offset: var(--arc-menu-item-outline-offset, var(${b}•2m));

      [arc-button-content] {
        display: contents;
      }
    }
  }

  [arc-menu-item][arc-menu-selection-row] {
    &:is(:hover, :has(:focus-visible)) {
      ${ma}•bg: var(--arc-color-bg-hover-default);
    }

    &[is-selected] {
      ${ma}•bg: var(--arc-color-bg-selected-default);
    }
  }

  [arc-menu-item=divider] {
    margin: 0 var(${L}•4m);

    hr {
      flex: 1;
      border: none;
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      height: 0;
      margin: 0;
    }
  }

`,_$=({items:r,filterText:e,renderItem:a,isVisible:t,keepMenuOpen:o,renderSubmenu:n,passiveMode:c,submenuBackNavigation:s,...u})=>{const h=c??200,p=(0,d.useId)(),v=(0,d.useRef)(null),{activeSubmenuIdRef:g,cancelPendingSubmenuOpen:f,cancelPendingSubmenuClose:m,closeOpenDescendantPopovers:$,hideSubmenu:k,showSubmenuFromPointer:A,requestSubmenuCloseFromPointer:y,openSubmenuForKeyboard:w,focusTriggerById:x}=C$({menuListRef:v,passiveMode:h}),z=(0,d.useRef)(!1),[_,P]=(0,d.useState)(!1),[C,S]=(0,d.useState)(-1);la(()=>{const D=v.current;if(D&&typeof getComputedStyle<"u"){const T=getComputedStyle(D).direction==="rtl";z.current=T,P(T)}},[t,r]);const I=(0,d.useMemo)(()=>e?r.filter(D=>Object.values(D).some(T=>T===e)):r,[r,e]),B=(0,d.useRef)(I);B.current=I;const N=(0,d.useCallback)(D=>{if(D<0){S(-1);return}S(D);const T=v.current;if(!T)return;const G=cl(I[D],D,p);Gh(T,D,G)},[I,p]),V=(0,d.useMemo)(()=>$$(I,p,N),[I,p,N]),Z=D=>y$(D,{isVisible:!!t,menuListRef:v,activeItemIndex:C,filteredItems:I,menuDomId:p,isMenuRtlRef:z,submenuBackNavigation:s,listNavByKey:V,hideSubmenu:k,focusTriggerById:x,focusRowAtItemIndex:N,setActiveItemIndex:S,openSubmenuForKeyboard:w}),M=(0,d.useMemo)(()=>I.map((D,T)=>{const G=nl(D,T),{itemId:cr,role:gr,keepMenuOpen:R,items:er,renderSubmenu:lr,submenuProps:fr,"arc-menu-selection-row":rr,"is-selected":dr,...xr}=D,sr=Zc(D,T,p),{hasSubmenu:wr}=sr,F=wr?sr.menuId:"",K=wr?{menu:sr.menuId,trigger:sr.triggerId}:void 0,J=co(D)||"",j=gr||m$(D)||"menuitem",ir=T===C,yr=cl(D,T,p,sr),br={filterText:e,isCurrent:ir,menuControlId:yr,itemId:G,role:gr,keepMenuOpen:R??o,isRtl:_,...wr?{hasSubmenu:!0,ids:K}:{hasSubmenu:!1}},H=a?.(xr,T,br);return wr?(0,i.jsxs)("li",{"arc-menu-item":J,role:"presentation",onFocusCapture:()=>S(T),onMouseEnter:()=>{A(F)},onMouseLeave:ol(h)?()=>y(F):void 0,onClick:W=>Hh(W,D,J,R??o),children:[H,n?.({ids:K,items:er??[],item:D,filterText:e,passiveMode:h,isRtl:_})]},G):(0,i.jsx)("li",{"arc-menu-item":J,"arc-menu-selection-row":rr,"is-selected":dr,role:j,onFocusCapture:()=>S(T),onClick:W=>Hh(W,D,J,R??o),children:H},G)}),[C,e,I,o,a,p,_,h,n,A,y]);return(0,d.useEffect)(()=>{if(!t){f(),m(),$(),g.current=null,S(-1);return}const D=B.current,T=Jc(D,p);if(T.length>0){const G=T[0],cr=v.current;if(S(G),cr){const gr=cl(D[G],G,p);Gh(cr,G,gr)}}},[t,p,f,m,$,g]),(0,d.useEffect)(()=>()=>{f(),m(),$(),g.current=null},[f,m,$,g]),(0,i.jsx)("ul",{...u,ref:v,"arc-menu":"",role:"menu",onKeyDown:Z,onMouseLeave:()=>S(-1),tabIndex:t?0:-1,children:M})};zr("ArcMenu",z$);const Wh=["items","renderItem","renderSubmenu","keepMenuOpen","onToggle","id","menuProps","passiveMode","submenuBackNavigation","offset","ref","selectionProps"],I$=(r,e)=>{const a=!r.includes(e);return{value:a?[...r,e]:r.filter(t=>t!==e),changedValue:e,selected:a,reason:"item"}},Xh=(r,e)=>{const a=new Set(r),t=e.filter(o=>a.has(o)).length;return t===0?"none":t===e.length?"all":"mixed"},T$=(r,e,a)=>{const t=e.length>0&&Xh(r,e)!=="all";return{value:t?[...e]:[],changedValue:a,selected:t,reason:"selectAll"}},qh=r=>Vh(co(r)),Yh=tl,Zh=r=>!qh(r)&&!Yh(r),P$=r=>r.filter(e=>Zh(e)?e.itemId!=null&&String(e.itemId)!=="":!0),Jh=r=>!!(r["aria-disabled"]??r.isDisabled),il=r=>{const{onClick:e,href:a,target:t,...o}=r;return o},Qh=r=>Yh(r)?r:qh(r)?il(r):null,R$=(r,e)=>r.filter(a=>Zh(a)&&!Jh(a)&&String(a.itemId)!==e).map(a=>String(a.itemId)),L$={none:!1,mixed:"mixed",all:!0},r0=(r,e,a)=>Jh(r)?{}:{"arc-menu-selection-row":"","is-selected":e?"":void 0,...a},M$=(r,e)=>{const a=Qh(r);if(a)return a;const{checked:t,onChange:o,...n}=il(r),c=String(r.itemId),s=e.selectAllItemId!==void 0&&c===e.selectAllItemId,u=s?L$[e.selectAllState]:e.selectedIds.has(c),h=u===!0&&(s||e.selectAllState!=="all");return{role:"presentation",...n,checked:u,keepMenuOpen:!0,...s?{containerProps:{...n.containerProps,"arc-menu-select-all-row":""}}:{},...r0(r,h,{onChange:(p,v)=>e.onToggle(r,v)})}},j$=(r,e)=>{const a=Qh(r);if(a)return a;const t=il(r),o=e.value!==null&&String(r.itemId)===e.value;return{role:"presentation",...t,"aria-checked":o,keepMenuOpen:!0,...r0(r,o,{onClick:n=>{const c=n;e.onActivate(r,c?.nativeEvent??n??new MouseEvent("click"))}})}},D$=(r,e)=>{if(e.mode==="single"){const o={value:typeof e.value=="string"?e.value:null,onActivate:e.onActivate};return r.map(n=>j$(n,o))}const a=Array.isArray(e.value)?e.value:[],t={selectedIds:new Set(a),onToggle:e.onToggle,selectAllItemId:e.selectAllItemId,selectAllState:Xh(a,e.enabledSelectableIds)};return r.map(o=>M$(o,t))},e0="fa-regular fa-angle-down",O$=(r,e,a)=>{const t=e==null?void 0:(r??[]).find(h=>h.itemId===e),o=t?t.text??(t.avatar?Rd(t.avatar):void 0):a?.placeholder,n=t?.endSlot==null?void 0:(0,i.jsx)("span",{"arc-dropdown-selected-end":"",children:t.endSlot}),c=t?.icon??(t?.avatar?(0,i.jsx)(rc,{size:"sm",...t.avatar}):void 0),s=t?.startSlot==null?void 0:(0,i.jsxs)("span",{"arc-dropdown-selected-start":"",children:[t.startSlot,typeof c=="string"?(0,i.jsx)(Sr,{icon:c}):c]});let u=o;return s!==void 0?u=(0,i.jsxs)(i.Fragment,{children:[s,o,n]}):n!==void 0&&(u=(0,i.jsxs)(i.Fragment,{children:[o,n]})),{variant:"neutral",hierarchy:"primary",size:"lg",...a?.showCaret??!0?{iconEnd:e0}:{},...t&&s===void 0?{iconStart:c}:{},text:u}},N$="fa-regular fa-check",B$=r=>{r.key!=="Enter"||r.currentTarget.disabled||(r.preventDefault(),r.currentTarget.click())},a0=r=>{const{selectionMode:e,startSlot:a,endSlot:t,onClick:o,href:n,target:c,containerProps:s,isDisabled:u,"aria-disabled":h,tooltip:p,id:v,popoverTarget:g,popoverTargetAction:f,"aria-haspopup":m,"aria-controls":$,"aria-expanded":k,...A}=r,y=co(A),w=(0,d.useMemo)(()=>Uh(y),[y]),x=h??u,z=y==="divider",_=Vh(y)?void 0:e,P=!!(n||o||g),C=!z,S=C&&a?"":void 0,I=C&&t?"":void 0,B=(0,d.useMemo)(()=>({...s,onClick:o,tooltip:p,href:n,target:c,id:v,popoverTarget:g,popoverTargetAction:f,"aria-haspopup":m,"aria-controls":$,"aria-expanded":k}),[s,o,p,n,c,v,g,f,m,$,k]),N=(0,d.useMemo)(()=>({...s}),[s]);if(_==="multiple"){const{checked:V,onChange:Z,...M}=A;return(0,i.jsxs)("label",{...N,"arc-dropdown-item":"multi-select","has-start-slot":S,"has-end-slot":I,children:[(0,i.jsx)(Rs,{id:v,role:"menuitemcheckbox",checked:V===!0,indeterminate:V==="mixed",disabled:!!x,onClick:o?D=>o(D.nativeEvent):void 0,onChange:Z,onKeyDown:B$}),a,(0,i.jsx)(w,{...M,"is-item-content":"interactive"}),t]})}if(_==="single"){const{"aria-checked":V,...Z}=A,M=V===!0,D=(0,i.jsxs)(i.Fragment,{children:[t,M?(0,i.jsx)(Sr,{"arc-dropdown-single-select-check":"",icon:N$}):(0,i.jsx)("span",{"arc-dropdown-single-select-spacer":""})]});return(0,i.jsxs)(Or,{...B,role:"menuitemradio","aria-checked":M,"aria-disabled":x?"true":void 0,isDisabled:!!x,_isCustom:!0,"arc-dropdown-item":"single-select","has-start-slot":S,"has-end-slot":M||t?"":void 0,children:[C&&a,(0,i.jsx)(w,{...Z,"is-item-content":"interactive"}),C&&D]})}return P?(0,i.jsxs)(Or,{...B,role:g?"menuitem":s?.role,"aria-disabled":x?"true":void 0,isDisabled:!!x,_isCustom:!0,"arc-dropdown-item":y??"","has-start-slot":S,"has-end-slot":I,children:[C&&a,(0,i.jsx)(w,{...A,"is-item-content":"interactive"}),C&&t]}):(0,i.jsxs)("div",{...N,"arc-dropdown-item":y??"","has-start-slot":S,"has-end-slot":I,children:[C&&a,(0,i.jsx)(w,{...A,"is-item-content":"inert"}),C&&t]})},F$=l`--arc•dropdown`,H$=l`${F$}•menu`,Le=l`${H$}•item`,V$=l`
@layer arc-components {

  /* ITEM SETUP ----------------------------------------------------• */

  [arc-dropdown-item] {
    ${Le}•padding: var(${L}•8) var(${L}•12);
    ${Le}•min•height: var(${b}•36);
    ${Le}•gap: var(${L}•8);

    &[arc-dropdown-item=text-detail] {
      ${Le}•min•height: var(${b}•48);
    }

    &[arc-dropdown-item=section-label] {
      ${Le}•min•height: var(${b}•32);
    }

    &[arc-dropdown-item=user] {
      ${Le}•min•height: var(${b}•40);

      &:not([has-start-slot]) {
        ${Le}•padding: var(${L}•8) var(${L}•12) var(${L}•8) var(${L}•10);
      }
    }

    &[arc-dropdown-item=user-detail] {
      ${Le}•min•height: var(${b}•48);

      &:not([has-start-slot]) {
        ${Le}•padding: var(${L}•8) var(${L}•12) var(${L}•8) var(${L}•6);
      }
    }

    &[arc-dropdown-item=divider] {
      ${Le}•min•height: var(${b}•8);
      ${Le}•padding: 0;
    }
  }

  /* DROPDOWN ELEMENTS ---------------------------------------------• */

  [arc-dropdown] {
    --arc-popover-font-size: initial;
    --arc-popover-width: var(--arc-dropdown-width, auto);
    --arc-popover-min-width: var(--arc-dropdown-min-width, 3em);
    --arc-popover-max-width: var(--arc-dropdown-max-width, 50em);
    --arc-popover-padding: var(--arc-dropdown-padding, 0em);
    --arc-popover-body-padding: var(--arc-dropdown-body-padding, 0em);
    --arc-popover-outline-size: 0em;
    --arc-popover-overflow: var(--arc-dropdown-overflow, auto);

    --arc-menu-item-gap: var(${Le}•gap);
    --arc-badge-align-self: center;
    --arc-badge-count-align-self: center;
  }

  [arc-dropdown-submenu] {
    &:where([anchor-at="left-start"], [anchor-at="right-start"]) {
      margin-top: var(--arc-dropdown-submenu-offset, var(${L}•4m));
    }

    &:where([anchor-at="left-end"], [anchor-at="right-end"]) {
      margin-top: var(--arc-dropdown-submenu-offset, var(${L}•4));
    }
  }

  [arc-dropdown-item] {
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(${Le}•gap);
    text-align: start;
    min-height: var(${Le}•min•height);

    &:not([arc-button]) {
      padding: var(${Le}•padding);
      max-width: 100%;
    }

    &[arc-button] {
      --arc-button-padding: var(${Le}•padding);
      --arc-button-min-height: var(${b}•40);
    }

    &[arc-dropdown-item=section-label] {
      color: var(--arc-dropdown-section-label-color, var(--arc-color-fg-secondary));
    }

    [is-item-content] {
      flex: 1;
    }

    [arc-dropdown-submenu-icon] {
      --arc-icon-color: var(--arc-dropdown-submenu-icon-color, var(--arc-color-fg-secondary));
    }

    [arc-dropdown-single-select-check] {
      --arc-icon-color: var(--arc-dropdown-single-select-check-color, var(--arc-color-fg-accent));
    }

    [arc-dropdown-single-select-spacer] {
      width: 1.375em;
    }
  }

  /* A selected row's start/end slots reflected into the trigger's label (see selectionAnchor). Both
     ride in the button's auto-width label area — the start group ahead of the label, the end after it —
     so the icon/avatar sizes itself and there's no reach into the button's icon slot. Each is spaced
     from the label by the lg button's icon/label gap token. */
  [arc-dropdown-selected-start],
  [arc-dropdown-selected-end] {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    --arc-badge-align-self: center;
  }

  [arc-dropdown-selected-start] {
    gap: var(${b}•8);
    margin-inline-end: var(${b}•8);
  }

  [arc-dropdown-selected-end] {
    margin-inline-start: var(${b}•8);
  }

}
`,ln={OFFSET:void 0,ANCHOR_AT_LTR:"left-start",ANCHOR_AT_RTL:"right-start",ICON_LTR:"fa-regular fa-angle-right",ICON_RTL:"fa-regular fa-angle-left"},U$=(r,e)=>({anchorAt:r?ln.ANCHOR_AT_LTR:ln.ANCHOR_AT_RTL,offset:e??ln.OFFSET,role:"none","aria-label":void 0}),t0=(0,d.forwardRef)((r,e)=>(0,i.jsx)(Uo,{...r,ref:e,"arc-dropdown-menu-button":""})),G$=r=>{const e={...r};return Wh.forEach(a=>{Reflect.deleteProperty(e,a)}),e},K$=r=>r?ln.ICON_RTL:ln.ICON_LTR,sl=r=>{try{r.hidePopover?.()}catch{}},W$=(r,e)=>r===void 0?K$(e):typeof r=="function"?r(e):r,X$=(r,e)=>{(0,d.useEffect)(()=>{const a=r.current;if(!e||!a)return;const t=o=>{const n=o.relatedTarget;n!==null&&(n instanceof Node&&a.contains(n)||n instanceof Element&&n.closest("[popovertarget]")?.getAttribute("popovertarget")===a.id||sl(a))};return a.addEventListener("focusout",t),()=>a.removeEventListener("focusout",t)},[r,e])},dn=r=>{const{items:e,renderItem:a,keepMenuOpen:t,menuProps:o,passiveMode:n,submenuBackNavigation:c,renderSubmenu:s,submenuIcon:u,submenuOffset:h,selectionProps:p,anchorProps:v,ref:g,...f}=r,[m,$]=(0,d.useState)(!1),k=p?.mode,A=p?.value,y=p?.selectAllItemId,w=p?.mode==="single"&&!!p.showsSelection,x=p?.mode==="single"?p.value:null,z=p?.mode==="single"?p.placeholder:void 0,_=p?.showCaret,P=(0,d.useRef)(r);P.current=r;const C=(0,d.useRef)(null),S=(0,d.useMemo)(()=>k?P$(e??[]):null,[k,e]),I=(0,d.useMemo)(()=>k==="multiple"&&S?R$(S,y):[],[k,S,y]),B=(0,d.useRef)(I);B.current=I;const N=(0,d.useCallback)((R,er)=>{const lr=P.current.selectionProps;if(lr?.mode!=="multiple")return;const{selectAllItemId:fr}=lr,rr=Array.isArray(lr.value)?lr.value:[],dr=fr!==void 0&&String(R.itemId)===fr?T$(rr,B.current,fr):I$(rr,String(R.itemId));lr.onSelectionChange?.(dr,er.nativeEvent),R.onClick?.(er.nativeEvent instanceof MouseEvent?er.nativeEvent:void 0)},[]),V=(0,d.useCallback)((R,er)=>{const lr=P.current.selectionProps;if(lr?.mode!=="single")return;const fr=C.current;fr&&sl(Fh(fr)??fr);const rr=String(R.itemId);rr!==lr.value&&lr.onSelectionChange?.({value:rr,changedValue:rr,selected:!0,reason:"item"},er),R.onClick?.(er instanceof MouseEvent?er:void 0)},[]);X$(C,!!k&&m);const Z=(0,d.useMemo)(()=>!S||!k?e??[]:D$(S,{mode:k,value:A,selectAllItemId:y,enabledSelectableIds:I,onToggle:N,onActivate:V}),[S,k,e,A,N,V,y,I]),M=(0,d.useMemo)(()=>w?{...O$(e,x,{placeholder:z,showCaret:_}),...v}:k==="multiple"&&(_??!0)?{iconEnd:e0,...v}:v,[w,k,e,x,z,_,v]),D=(0,d.useCallback)(R=>{if(typeof document>"u")return;const er=Qe(R,C.current);er&&sl(er)},[]),T=(0,d.useCallback)(R=>{C.current=R,Ae(g,R)},[g]),G=(0,d.useCallback)(R=>{const er=P.current,lr=G$(er),fr=R.item.submenuProps?.selectionProps!==void 0,rr=u$(R.item)??(fr?void 0:er.renderItem),{ids:dr}=R,xr=er.keepMenuOpen;if(R.item.renderSubmenu)return R.item.renderSubmenu({items:R.items,renderItem:rr,keepMenuOpen:xr,filterText:R.filterText,passiveMode:R.passiveMode,ids:dr,closeSubmenu:()=>{D(dr.menu)},inheritedFromParent:lr});const{menuProps:sr,popoverPassthrough:wr}=l$(R.item);return(0,i.jsx)(dn,{...lr,...U$(R.isRtl,er.submenuOffset),...wr,id:dr.menu,"arc-dropdown-submenu":"",submenuBackNavigation:d$(dr),alternateAnchorId:dr.trigger,hidePopoverButton:!0,passiveMode:R.passiveMode,items:R.items,renderItem:rr,keepMenuOpen:xr,menuProps:sr})},[D]),cr=(0,d.useCallback)((...R)=>{const[er,,lr]=R;if(a)return a(...R);const{ids:fr,isRtl:rr,menuControlId:dr}=lr,{endSlot:xr,...sr}=er,wr=!!fr,F=W$(P.current.submenuIcon,!!rr),K=xr||wr?(0,i.jsxs)(i.Fragment,{children:[xr,wr?(0,i.jsx)(Sr,{"arc-dropdown-submenu-icon":"",icon:F}):null]}):void 0;return(0,i.jsx)(a0,{...sr,selectionMode:wr?void 0:P.current.selectionProps?.mode,id:dr,endSlot:K,...fr?{popoverTarget:fr.menu,popoverTargetAction:"toggle","aria-haspopup":"menu","aria-controls":fr.menu}:{}})},[a]),gr=R=>{$(R.newState==="open"),r?.onToggle?.(R)};return(0,i.jsx)(ga,{...f,anchorProps:M,ref:T,"arc-dropdown":"",variant:"common",onToggle:gr,children:(0,i.jsx)(_$,{...o,"arc-dropdown-menu":"",passiveMode:n,submenuBackNavigation:c,items:Z,renderItem:cr,isVisible:m,keepMenuOpen:t,renderSubmenu:G})})};t0.displayName="ArcDropdownButton",dn.Button=t0,dn.Item=a0,zr("ArcDropdownMenu",V$);const lw=!1,q$="fa-regular fa-ellipsis-h",Y$="fa-regular fa-angle-down fa-sm",o0="data-rollup-item",n0="data-rollup-trigger",Z$="fa-solid fa-triangle-exclamation",J$=28,c0=(r,e,a,t,o,n)=>{let c=t+o,s=0;for(let u=0;u<n;u+=1){const h=c+a+e[u];if(h>r)break;c=h,s+=1}return s},Q$=(r,e,a,t)=>{const{items:o,triggerMore:n,chevron:c,gap:s,padX:u}=e,h=o.length,p=t==null?h:Math.min(t,h);if(p===h&&u+o.reduce((m,$)=>m+$,0)+s*Math.max(0,h-1)<=r)return h;const v=c0(r,o,s,u,n,p);if(a>=0&&a<h&&a>=v){const f=o[a]+c;return c0(r,o,s,u,Math.max(n,f),p)}return v},r1=({enabled:r,itemCount:e,signature:a,selectedIndex:t=-1,maxVisible:o})=>{const n=(0,d.useRef)(null),c=(0,d.useRef)(null),s=(0,d.useRef)(null),u=(0,d.useRef)(t);u.current=t;const[h,p]=(0,d.useState)(0),v=(0,d.useRef)(null);r&&v.current!==a&&(v.current=a,c.current=null);const g=r&&c.current==null,[f,m]=(0,d.useState)(e),$=(0,d.useCallback)(()=>{const w=c.current,x=n.current;if(!w||!x)return;const z=x.parentElement,_=z?z.clientWidth:x.clientWidth,P=Q$(_,w,u.current,o);m(C=>C===P?C:P)},[o]);la(()=>{if(!r){m(e);return}if(c.current!=null)return;const w=n.current;if(!w)return;const x=getComputedStyle(w),z=parseFloat(x.columnGap)||0,_=(parseFloat(x.paddingLeft)||0)+(parseFloat(x.paddingRight)||0),P=Array.from(w.querySelectorAll(`:scope > [${o0}]`)).map(B=>B.getBoundingClientRect().width),C=w.querySelector(`:scope > [${n0}]`),S=C?C.getBoundingClientRect().width:0;let I=J$;if(C){const B=C.querySelectorAll("[arc-button-icon]"),N=B[B.length-1],V=C.querySelector("[arc-button-content]"),Z=V&&parseFloat(getComputedStyle(V).columnGap)||0;N&&(I=N.getBoundingClientRect().width+Z)}c.current={items:P,triggerMore:S,chevron:I,gap:z,padX:_},$(),p(B=>B+1)},[r,e,a,h,$]),la(()=>{if(!r)return;const x=n.current?.parentElement;if(!x||typeof ResizeObserver>"u")return;const z=new ResizeObserver(()=>$());return z.observe(x),s.current=z,()=>{z.disconnect(),s.current=null}},[r,a,$]);const k=(0,d.useCallback)(w=>{n.current=w},[]),A=r?Math.min(f,e):e,y=r&&A<e;return{barRef:k,visibleCount:g?e:A,hasOverflow:g?!0:y,isMeasuring:g}},i0=(r,e)=>e??(r==="aria-selected"?"true":"page"),e1={[o0]:""},a1={[n0]:""},t1=r=>{r?.preventDefault?.(),r?.stopPropagation?.()},s0=(r,e,a,{showIcons:t,showLabels:o,missingIcon:n,isVertical:c})=>{const s=typeof a=="string"?void 0:a,u=c?o?"top-start":"right-center":"top-center",h=s?.anchorAt??u,p=typeof a=="string"?{text:a,anchorAt:h}:{...a,anchorAt:h},v=a==null?void 0:p,g=!r;if(o)return{icon:t?r:void 0,text:e,tooltip:v};if(!t)return{icon:void 0,text:void 0,tooltip:v};const f=e==null?"":String(e);return{icon:r??n,iconStatus:g?"warning":void 0,text:void 0,tooltip:v??{text:`${r?"":"(Missing icon!) "}${f}`,anchorAt:h},ariaLabel:f||void 0}},o1=(r,e)=>r.href??`${r.text}-${e}`,ll=({firstSlot:r,lastSlot:e,isVertical:a})=>r||e?(0,i.jsxs)("span",{"arc-button-bar-item":"slot",children:[r,!r&&!!e&&a&&(0,i.jsx)("span",{"arc-slot-spacer":""}),e]}):null,n1=(r,{selectedAttr:e,selectedValue:a,isVertical:t,isBarDisabled:o,showIcons:n=!0})=>{const c={...r.tag?{tag:r.tag}:{},...r.isSelected?{[e]:i0(e,a),"is-selected":""}:{}},s=n?r.icon:void 0;return{variant:s?"icon-text":"text",text:r.text,icon:s,href:r.href,target:r.target,isDisabled:r.isDisabled||o,onClick:r.onClick,...r.firstSlot||r.lastSlot?{endSlot:(0,i.jsx)(ll,{firstSlot:r.firstSlot,lastSlot:r.lastSlot,isVertical:t})}:{},...Object.keys(c).length?{containerProps:c}:{}}},Qc=l`--arc•button•bar`,un=l`${Qc}•axis`,io=l`${Qc}•gap`,dl=l`${Qc}•width`,ul=l`${Qc}•justify`,c1=l`
  &[arc-button-bar=horizontal] {
    ${un}: row;

    &[is-flipped] {
      ${un}: row-reverse;
    }

    &[data-density=comfortable] {
      --arc-button-height: var(${b}•40);
      --arc-button-padding: 0 var(${L}•12);
      ${io}: var(${L}•6);
    }

    &[data-density=compact] {
      --arc-button-height: var(${b}•32);
      --arc-button-padding: 0 var(${L}•10);
      ${io}: var(${L}•4);
    }
  }
`,i1=l`
  &[arc-button-bar=vertical] {
    --arc-button-flex: 1;
    --arc-button-display: flex;
    --arc-button-bar-align-items: stretch;
    --arc-button-bar-justify-content: stretch;

    &:not([is-minimized]) {
      --arc-button-justify-content: stretch;
    }

    ${un}: column;

    &[is-flipped] {
      ${un}: column-reverse;
    }

    &[data-density=comfortable] {
      --arc-button-height: var(${b}•36);
      --arc-button-padding: 0 var(${L}•12);
      ${io}: var(${L}•2);

      &[is-minimized] {
        ${dl}: var(${b}•48);
      }
    }

    &[data-density=compact] {
      --arc-button-height: var(${b}•28);
      --arc-button-padding: 0 var(${L}•8);
      --arc-button-border-radius: var(--arc-border-radius-md);
      ${io}: var(${L}•2);

      &[is-minimized] {
        ${dl}: var(${b}•36);
      }
    }
  }
`,s1=l`
@layer arc-components {

  [arc-button-bar] {
    ${c1}
    ${i1}

    ${ul}: flex-end;
    &[is-managed] { ${ul}: flex-start; }

    flex: var(--arc-button-bar-flex, 1);
    display: var(--arc-button-bar-display, flex);
    flex-direction: var(${un});
    align-items: var(--arc-button-bar-align-items, center);
    justify-content: var(--arc-button-bar-justify-content, var(${ul}));
    gap: var(${io}, var(${L}•8));
    width: var(${dl}, unset);
    padding: 0;
    margin: 0;
    list-style: none;

    &[data-rollup] {
      contain: inline-size;
      min-width: 0;
    }

    *[data-measuring] {
      contain: none;
      width: max-content;
      max-width: none;

      > * {
        flex: 0 0 auto;
      }
    }

    &:not([data-measuring]) [arc-button-bar-item] {
      max-width: 100%;
    }
  }

  [arc-button-bar-item] {
    display: flex;
    margin: 0;
    padding: 0;
  }

  [arc-button-bar-item="slot"] {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(${io});
    padding: 0;
    margin: 0;
  }
}
`,l1=({orientation:r,isFlipped:e,isDisabled:a,density:t,hierarchy:o,showIcons:n,showLabels:c,missingIcon:s,items:u,canRollUp:h,maxVisible:p,rollUpLabel:v,listRole:g,selectedAttr:f,selectedValue:m,elementProps:$})=>{const k=Nr(void 0,"arc-button-bar-trigger"),A=`${k}-menu`,y=r==="vertical",w=h&&!y,x=t??(y?"comfortable":"compact"),z=u.findIndex(R=>R.isSelected),_={showIcons:n,showLabels:c,missingIcon:s,isVertical:y},P=(0,d.useMemo)(()=>`${u.map(er=>{const lr=typeof er.icon=="string"?er.icon:er.icon?"":"";return`${er.text}${er.href??""}${lr}${er.isDisabled?1:0}`}).join("")}|${x}|${o??""}|${z}|${n?1:0}|${c?1:0}`,[u,x,o,z,n,c]),{barRef:C,visibleCount:S,hasOverflow:I,isMeasuring:B}=r1({enabled:w,itemCount:u.length,signature:P,selectedIndex:z,maxVisible:p}),N=B?u:u.slice(0,S),V=B?[]:u.slice(S),Z=w&&(B||I),M=z>=0?u[z]:void 0,D=!B&&M!=null&&V.includes(M),T=s0(D?M.icon:q$,D?M.text:v,D?M.tooltip:void 0,_),G=D?M.firstSlot:void 0,cr=D?M.lastSlot:void 0,gr=i0(f,m);return(0,i.jsxs)("ul",{...$,ref:C,"arc-button-bar":r,role:g,"data-density":x,"data-measuring":B?"":void 0,"data-rollup":w?"":void 0,"is-flipped":e?"":void 0,"is-managed":"",children:[N.map((R,er)=>{const{isSelected:lr,isDisabled:fr,tag:rr,icon:dr,text:xr,tooltip:sr,firstSlot:wr,lastSlot:F,isHidden:K,onClick:J,...j}=R,ir=s0(dr,xr,sr,_),yr=a||fr;return(0,d.createElement)("li",{...e1,key:o1(R,er),"arc-button-bar-item":lr?"selected":""},(0,i.jsxs)(Or,{...j,tag:rr,layout:y?"fill":"hug",size:"inherit",variant:"neutral",hierarchy:"tertiary",shape:"square",tooltip:ir.tooltip,"aria-label":ir.ariaLabel,"is-selected":lr?"":void 0,isDisabled:yr||void 0,onClick:yr?t1:J,...lr?{[f]:gr}:{},children:[(0,i.jsx)(ie,{icon:y?Vd(ir.icon):ir.icon,"arc-icon-status":ir.iconStatus,text:ir.text,overflow:"truncate",gapSize:"md",iconSize:x==="comfortable"?"md":void 0}),c&&(0,i.jsx)(ll,{firstSlot:wr,lastSlot:F,isVertical:y})]}))}),Z?(0,i.jsxs)("li",{...a1,"arc-button-bar-item":D?"selected":"",children:[(0,i.jsxs)(Or,{id:k,"arc-button-bar-rollup":"trigger","is-selected":D?"":void 0,layout:y?"fill":"hug",shape:"square",size:"inherit",variant:"neutral",hierarchy:"tertiary",isDisabled:a||void 0,tooltip:T.tooltip,"aria-label":T.ariaLabel,iconEnd:Y$,popoverTarget:A,popoverTargetAction:"toggle","aria-haspopup":"menu","aria-controls":A,children:[(0,i.jsx)(ie,{icon:T.icon,text:T.text,"arc-icon-status":T.iconStatus,overflow:"truncate",gapSize:"md"}),c&&(0,i.jsx)(ll,{firstSlot:G,lastSlot:cr,isVertical:y})]}),V.length>0&&(0,i.jsx)(dn,{id:A,alternateAnchorId:k,"arc-button-bar-rollup":"menu",anchorAt:"bottom-end",hidePopoverButton:!0,items:V.map(R=>n1(R,{selectedAttr:f,selectedValue:m,isVertical:y,isBarDisabled:a,showIcons:n}))})]}):null]})},Et=({children:r,...e})=>{const{tag:a,orientation:t="horizontal",isFlipped:o=!1,isDisabled:n=!1,items:c,canRollUp:s=!1,maxVisible:u,rollUpLabel:h="More",density:p,hierarchy:v,showIcons:g=!0,showLabels:f=!0,missingIcon:m=Z$,listRole:$="list",selectedAttr:k="aria-current",selectedValue:A,...y}=e;if(c){const x=c.filter(z=>!z.isHidden);return(0,i.jsx)(l1,{orientation:t,isFlipped:o,isDisabled:n,density:p,hierarchy:v,showIcons:g,showLabels:f,missingIcon:m,items:x,canRollUp:s,maxVisible:u,rollUpLabel:h,listRole:$,selectedAttr:k,selectedValue:A,elementProps:y})}const w=a??"menu";return(0,i.jsx)(w,{...y,"arc-button-bar":t,"is-flipped":o?"":void 0,role:y.role??"group",children:r})};zr("ArcButtonBar",s1);function hn(r){const e=(0,d.useRef)(r);e.current=r;const a=(0,d.useCallback)((...t)=>e.current?.(...t),[]);return r?a:void 0}const d1=({activeColor:r})=>{const[e,a]=(0,d.useState)(r),t=r!=null,o=t?r:e;(0,d.useEffect)(()=>{a(r)},[r]);const n=(0,d.useCallback)(c=>{t||a(c)},[t]);return{isSelectionControlled:t,activeSelectedColor:o,setUncontrolledSelectedColor:a,selectColor:n}},u1=({palette:r,isSelectionControlled:e,onAddColor:a,emitColorChange:t,setLocalColors:o,setUncontrolledSelectedColor:n,initialColorValue:c,shouldOpenPopover:s=!0,notifyAddColorToggle:u,showPopover:h,hidePopover:p})=>{const v=(0,d.useCallback)(()=>c??cn(),[c]),[g,f]=(0,d.useState)(null),[m,$]=(0,d.useState)(v),k=(0,d.useCallback)(()=>{f(null),$(v())},[v]),A=(0,d.useCallback)(S=>{o(I=>te(S)?I.some(V=>te(V)&&ct(V,S))?I:[...I,S]:I.some(N=>!te(N)&&to(N,S))?I:[...I,S])},[o]),y=(0,d.useCallback)((S,I)=>{a?.(r,S,I),te(S)||(t(S),e||n(S))},[t,e,a,r,n]),w=(0,d.useCallback)((S,I)=>{A(S),y(S,I??void 0)},[A,y]),x=(0,d.useCallback)(()=>{if(g!=null)return;const S=v();let I=-1;o(B=>(I=B.length,[...B,S])),f(I),$(S),u?.(!0),s&&h()},[g,v,u,o,s,h]),z=(0,d.useCallback)(S=>{g!=null&&$(S)},[g]),_=(0,d.useCallback)(S=>{S?.preventDefault(),S?.stopPropagation(),g!=null&&o(I=>I.filter((B,N)=>N!==g)),k(),u?.(!1),s&&p()},[g,p,u,k,o,s]),P=(0,d.useCallback)((S,I)=>{const N=(M=>typeof M?.preventDefault=="function")(S)?S:I;if(N?.preventDefault(),N?.stopPropagation(),g==null||m==null){u?.(!1),s&&p();return}const Z=(r.colors??[]).map((M,D)=>D===g?m:M);o(Z),y(m,N??void 0),k(),u?.(!1),s&&p()},[g,m,y,p,u,r.colors,k,o,s]),C=(0,d.useCallback)((S,I)=>{I?.preventDefault(),I?.stopPropagation(),w(S,I??void 0)},[w]);return{draftColorIndex:g,draftColorValue:m,startAddDraft:x,updateDraftColor:z,cancelDraftColor:_,saveDraftColor:P,saveCurrentColor:C}};let l0=!1;const pn=new Set,hl=r=>{l0=r,pn.forEach(e=>{e.setState(r),r||e.onRelease?.()})},d0=r=>{(r.metaKey||r.key==="Meta")&&hl(!0)},u0=r=>{hl(!!r.metaKey)},h0=()=>{hl(!1)},h1=r=>{const[e,a]=(0,d.useState)(l0),t=(0,d.useRef)(r);return t.current=r,(0,d.useEffect)(()=>{const o={setState:a,onRelease:()=>t.current?.()};return pn.add(o),pn.size===1&&(window.addEventListener("keydown",d0),window.addEventListener("keyup",u0),window.addEventListener("blur",h0)),a(e),()=>{pn.delete(o),pn.size===0&&(window.removeEventListener("keydown",d0),window.removeEventListener("keyup",u0),window.removeEventListener("blur",h0))}},[]),e},De=l`--arc-popover`,so=l`--arc•color•picker`,oe=l`${so}•thumb`,zt=l`${so}•tools`,Ta=l`${so}•dropper`,p0=l`--js•hex`,pl=l`
  background-image:
    linear-gradient(
      to right,
      transparent,
      var(${p0}, transparent)
    ),
    conic-gradient(
      var(--arc-color-alpha-subtle) 0 25%,
      var(--arc-color-alpha-muted) 0 50%,
      var(--arc-color-alpha-subtle) 0 75%,
      var(--arc-color-alpha-muted) 0 100%
    );

  background-size: 100% 100%, 1em 1em;
  background-position: 50% 50%, 50% 50%;
`,p1=l`
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
`,gl=l`3.75em`,g0={POPOVER:l`
    /* Inter-Component Communication: ArcPopover */
    ${De}-width: 14em; /* 224px */
    ${De}-min-width: 10.5em; /* 140px */
    ${De}-max-width: 15.75em; /* 252px */
    ${De}-line-height: normal; /* @note – allows elements to resolve to design-spec heights */
    ${De}-outline-size: 0px; /* @note – default outline-size causes divider lines to not extend to the edges of the popover shell. */
    ${De}-padding: 0;
    ${De}-overflow: hidden auto;

    ${De}-header-padding: 0.75em 1em;
    ${De}-header-background: var(--arc-color-bg-mono);
    ${De}-header-align-items: center;

    ${De}-body-padding: 0;

    ${De}-footer-padding: 1em;
    ${De}-footer-background: var(--arc-color-bg-mono);

    /* Inter-Component Communication: inner ArcTooltips • UX enhancement: transition speed-up */
    [arc-popover-content] {
      ${De}-transition-duration: 30ms;
    }

    &:has([arc-color-picker=simple]) {
      ${De}-width: 12.25em; /* 196px */
    }

    /* Inter-Component Communication: ArcButtonBar via ArcPopoverFooter */
    [arc-popover-footer]:has([arc-button-bar]) {
      --arc-button-bar-justify-content: stretch;
      --arc-button-flex: 1;
    }
  `,PICKER:l`
    ${oe}•shadow: 0 0 0 max(4px, 0.25em) var(--arc-color-alpha-white-95), 0 0 max(6px, 0.375em) max(3px, 0.1875em) var(--arc-color-alpha-black-30);
    ${oe}•size: max(10px, 0.625em);
    ${oe}•transition: 200ms ease-out;

    ${so}•padding: 1em;
    &[is-inline] { ${so}•padding: 0; }

    &[arc-color-picker=simple] {
      ${Ta}•align•self: end;
      ${zt}•gap: 1em 0.5em;

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
  `},g1=l`

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
    transition: left var(${oe}•transition), top var(${oe}•transition);
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
    width: var(${oe}•size);
    height: var(${oe}•size);
    border: 0;
    border-radius: var(--arc-border-radius-circle);
    box-shadow: var(${oe}•shadow);
    background: var(--js•rgb);
    z-index: 4;
    transition:
      left var(${oe}•transition),
      top var(${oe}•transition);
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

`,v1=l`

  [arc-color-slider] {
    &:has([arc-slider-surface=hue]) { ${oe}•bg: var(--js•hue); }
    &:has([arc-slider-surface=alpha]) { ${oe}•bg: transparent; }

    /* Inter-Component Communication: ArcSlider --------------------• */
    --arc-slider-input-height: auto;
    --arc-slider-progress-display: none;
    --arc-slider-track-background: transparent;
    --arc-slider-progress-background: transparent;
    --arc-slider-track-height: 0.875em;
    --arc-slider-thumb-size: var(${oe}•size);
    --arc-slider-thumb-size-hover: var(${oe}•size);
    --arc-slider-thumb-shadow: var(${oe}•shadow);
    --arc-slider-thumb-background: var(${oe}•bg);
    --arc-slider-thumb-outline-offset: 0.3125em;

    display: grid;
    gap: 0.375em;

    [arc-slider-surface=hue] { ${p1} }
    [arc-slider-surface=alpha] { ${pl} }
  }

`,f1=l`

  [arc-color-inputs] {
    display: grid;
    gap: 0.5em;
    grid-template-columns: 1fr ${gl};
    align-items: end;

    &:not(:has([arc-color-input=hex])) {
      grid-template-columns: ${gl} 1fr;
    }

    &:has([arc-color-input=hex]):not(:has([arc-color-input=alpha])) {
      grid-template-columns: 1fr;
    }
  }

  [arc-color-input=hex] {
    --arc-icon-color: var(--arc-color-fg-critical-mid);
    --arc-input-action-display: contents;
    --arc-button-min-width: none;
    --arc-button-max-width: 2.25em;
  }

  :is([arc-color-input=stop], [arc-color-input=alpha]) {
    --arc-input-text-align: end;
  }

`,m1=l`
  [arc-gradient-stops] {
    display: grid;
    gap: 0.125em;
  }

  [arc-gradient-stop-list] {
    display: grid;
    gap: 0.125em;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  [arc-gradient-field-wrapper] {
    position: relative;
    &:has([is-rotating]) {
      --angle-output-opacity: 1;
    }
  }

  [arc-gradient-field-angle-output] {
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: var(--angle-output-opacity, 0.4);
    transition: opacity 200ms ease-out;
  }

  [arc-gradient-field] {
    position: relative;
    width: 100%;
    min-height: 2.5em;
    aspect-ratio: 1 / 1;
    border-radius: var(--arc-border-radius-circle);
    touch-action: none;
    user-select: none;
    cursor: grab;

    &[is-rotating] {
      cursor: grabbing;
    }

    /* Unset: empty placeholder field — dashed ring, no grab affordance (no stops to drag/rotate). */
    &[is-unset] {
      cursor: default;

      &::before {
        ${p0}: transparent;
        ${pl}

        border-style: dashed;
      }
    }

    &::before {
      box-sizing: border-box;
      content: '';
      position: absolute;
      inset: 0;
      border-radius: var(--arc-border-radius-circle);
      border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      pointer-events: none;
      z-index: 1;
    }
  }

  /* "Add Gradient" affordance shown in place of the stops list while unset. */
  [arc-gradient-add] {
    margin-block: 1em 0;
  }

  [arc-gradient-stop-thumb] {
    position: absolute;
    left: 0;
    top: 50%;
    margin-block-start: calc(var(${oe}•size) / -2);
    margin-inline-start: calc(var(${oe}•size) / -2);
    width: var(${oe}•size);
    height: var(${oe}•size);
    border-radius: var(--arc-border-radius-circle);
    background: var(${oe}•bg);
    box-shadow: var(${oe}•shadow);
    cursor: pointer;
    z-index: 1;
    touch-action: none;

    &:focus-visible {
      outline: 0.125em solid var(--arc-color-border-focus);
      outline-offset: 0.25em;
    }

    &::after {
      content: '';
      position: absolute;
      inset: -0.375em;
      border-radius: var(--arc-border-radius-circle);
    }
  }

  [arc-gradient-stop-row] {
    position: relative;
    display: grid;
    grid-template-columns: auto ${gl} 1fr auto;
    gap: 0.5em;
    align-items: center;
    padding: 0.25em;
    margin-inline: -0.25em;
    border-radius: var(--arc-border-radius-md);

    &[is-editing-color] {
      background: var(--arc-color-bg-selected-default);
    }
  }

  [arc-gradient-stop-insert] {
    --arc-button-color: var(--arc-color-alpha-stark);
    --arc-button-width: 100%;
    --arc-button-z-index: 1;

    position: absolute;
    inset: -0.375em 0em auto 0em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--arc-border-radius-pill);
    height: 0.625em;
    opacity: var(--arc-alpha-0);
    background: transparent;
    transition: opacity 200ms ease-out, background 200ms ease-out;

    [arc-icon] {
      background: var(--arc-color-bg-mono);
      padding-inline: 0.25em;
    }

    &::before {
      content: '';
      position: absolute;
      inset: 50% 0 auto 0;
      translate: 0 -50%;
      height: 0.0625em;
      background: transparent;
      pointer-events: none;
    }

    &:where(:has(:hover), :focus-within) {
      opacity: var(--arc-alpha-80);

      &::before {
        background: var(--arc-color-bg-neutral-subtle);
      }
    }
  }

  *:not([arc-gradient-angle-slider]) + [arc-gradient-presets] {
    margin-block-start: 0.75em;
  }

  [arc-gradient-presets] [arc-color-palette-set] {
    --arc-swatch-width: 100%;
    --arc-swatch-border-radius: var(--arc-border-radius-md);

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5em;
    min-inline-size: 0;
    max-inline-size: none;
    padding: 0;
    margin: 0;
    border: 0;
  }
`,b1=l`

  &[arc-color-picker=simple]:has([arc-color-palettes]) [arc-color-tools] {
    padding-top: 0;
  }

  :is([arc-color-tools=simple], [arc-color-tools=solid]) {
    display: grid;
    gap: var(${zt}•gap, 0.5em);
    grid-template-columns: var(${zt}•columns, auto 1fr);
  }

  [arc-color-tools=gradient] {
    display: grid;
    gap: 0;
    grid-template-columns: var(${zt}•columns, 1fr);
  }

  [arc-color-tools=simple] {
    &:has([arc-color-input=hex]):not(:has([arc-color-eye-dropper])) {
      ${zt}•columns: 1fr 2em;
    }
  }

  :is([arc-color-field], [arc-color-inputs]) {
    grid-column: 1 / -1;
  }

  [arc-color-eye-dropper] {
    align-self: var(${Ta}•align•self, center);
    justify-self: var(${Ta}•justify•self, center);
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

  /* Body placement of the "No color" toggle (unsetColorPlacement="tools"): a 3rd column to the right
     of the sliders, mirroring the eye dropper on the left. Header placement is unaffected (the
     toggle lives outside [arc-color-tools] there). */
  [arc-color-tools=solid]:has([arc-color-unset]) {
    ${zt}•columns: auto 1fr auto;
  }

  [arc-color-tools=solid] [arc-color-unset] {
    grid-column: 3;
    align-self: center;
    justify-self: center;
  }

  /* Finding a good place for the eye dropper in some cases */
  &:has([arc-color-input=hex]):not(:has([arc-color-input=alpha], [arc-color-sliders])),
  &:has([arc-color-input=alpha]):not(:has([arc-color-input=hex], [arc-color-sliders])) {
    ${Ta}•align•self: end;
    ${Ta}•justify•self: end;

    &:has([arc-color-eye-dropper]) [arc-color-inputs] { display: contents; }

    &:not(:has([arc-color-field])) { ${Ta}•row: 1; }

    &:not(:has([arc-color-input=hex])) {
      ${Ta}•justify•self: start;
      ${zt}•columns: 1fr auto;
      ${Ta}•column: 1;
    }

    [arc-color-eye-dropper] {
      grid-column:  var(${Ta}•column, 2);
      grid-row: var(${Ta}•row, 2);
    }

    [arc-color-sliders] { grid-column: 1 / -1; }
  }

  ${g1}
  ${v1}
  ${f1}
  ${m1}

`,$1=l`
@layer arc-components {

  [arc-color-picker-wrapper] {
    ${g0.POPOVER}
  }

  [arc-color-picker] {
    ${g0.PICKER}

    /* Empty / "no color": the field + sliders stay rendered and interactive (touching them is the
       exit path), but their thumbs are hidden so nothing reads as a committed selection. The
       visible slider thumb is the native range pseudo-element (the [arc-slider-thumb] overlay is
       only a focus-ring anchor, so it stays — keeping keyboard focus visible). */
    &[is-unset] {
      [arc-color-field-thumb],
      [arc-color-field-slice] {
        opacity: 0;
      }

      [arc-color-slider] [arc-slider-input] {
        &::-webkit-slider-thumb { opacity: 0; }
        &::-moz-range-thumb { opacity: 0; }
      }
    }

    [arc-color-picker-section=control] {
      padding: 1em 1em 0 1em;
    }

    &[is-inline] [arc-color-picker-section=control] {
      padding: 0 0 1em 0;
    }

    [arc-color-picker-section]:not([arc-color-picker-section=control]) {
      padding: var(${so}•padding);

      &:has(+[arc-color-picker-section]) { padding-bottom: 1em; }
      +[arc-color-picker-section] { padding-top: 1em; }

      &[has-divider=top] { border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid); }
      &[has-divider=bottom] { border-bottom: var(--arc-border-width-sm) solid var(--arc-color-border-mid); }
    }

    ${b1}

    [arc-color-palettes] {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }

    [arc-color-section-header] {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5em;
      padding: 0;
      height: 2.5em;
    }

    [arc-gradient-angle-slider] {
      position: sticky;
      bottom: 0;
      background: var(--arc-color-bg-mono);
      border-block-start: 0.0625em solid var(--arc-color-border-mid);
      padding-inline: 1em;
      margin-inline: -1em;
      margin-block-start: 0.75em;
      padding-block-end: 0.75em;
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

  :where([arc-color-picker], [arc-color-picker-wrapper]) {
    [arc-color-unset][is-active] {
      --arc-button-background: var(--arc-color-bg-selected-subtle);
      --arc-button-border: var(--arc-border-width-sm) solid var(--arc-color-border-selected);
      --arc-button-color: var(--arc-color-fg-brand-heavy);
    }
  }

}
`,Ie=l`--arc•color•chip`,y1=l`
@layer arc-components {

  [arc-color-chip=swatch] {
    ${Ie}•radius: var(--arc-border-radius-circle);
    ${Ie}•width: var(${b}•24);
    ${Ie}•height: var(${b}•24);
    ${Ie}•border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  [arc-color-chip=gradient-stop] {
    ${Ie}•radius: var(--arc-border-radius-md);
    ${Ie}•width: var(${b}•24);
    ${Ie}•height: var(${b}•24);
    ${Ie}•border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  [arc-color-chip=gradient] {
    ${Ie}•radius: var(--arc-border-radius-circle);
    ${Ie}•width: var(${b}•24);
    ${Ie}•height: var(${b}•24);
    ${Ie}•border: none;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: var(--arc-swatch-border-radius, var(${Ie}•radius));
      border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      opacity: 1;
      pointer-events: none;
      z-index: 1;
    }

    &[is-selected]::before {
      opacity: 0;
    }
  }

  [arc-color-chip] {
    --arc-button-position: relative;
    --arc-button-background: var(--js•gradient, var(--js•color));
    --arc-button-color: var(--js•fg, transparent);
    --arc-button-width: var(--arc-swatch-width, var(${Ie}•width));
    --arc-button-height: var(--arc-swatch-height, var(${Ie}•height));
    --arc-button-border-radius: var(--arc-swatch-border-radius, var(${Ie}•radius));
    --arc-button-border: var(${Ie}•border);
    --arc-button-outline-offset: var(--arc-border-width-sm);
    --arc-icon-size: var(${b}•10);

    &[is-transparent] {
      --arc-button-background: unset;
      ${pl}
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

    &:is(:hover, [is-selected]) {
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
`,v0=(0,d.memo)(({color:r,gradient:e,name:a,kind:t,isDraft:o,isSelected:n,contrastBias:c,contrastBgColor:s,canRemoveColor:u,icon:h,text:p,tooltip:v,labels:g,onClick:f,style:m,popoverTargetAction:$,...k})=>{const A=(0,d.useMemo)(()=>Fc(g),[g]),{cssColor:y,isTranslucent:w,isTransparent:x,opaqueHex:z}=(0,d.useMemo)(()=>fh(r??""),[r]),_=e?_h(e,a):eo(r??"",a),P=p??_??(e?A.gradient:y),C=hh(y)?y.toUpperCase():y,S=v??_??(e?A.gradient:C),I=(0,d.useMemo)(()=>e?Yc(e,y):y,[e,y]),B=(0,d.useRef)(null),[N,V]=(0,d.useState)(null),Z=!e&&!x&&y!==""&&y!=="transparent"&&!Zr(y),M=(0,d.useCallback)(()=>{const q=B.current;V(Z&&q&&typeof window<"u"?yh(q):null)},[Z]);(0,d.useEffect)(()=>{M()},[M]);const D=e?I:N??y,T=(0,d.useMemo)(()=>oo(D,{contrastBias:c,bgColor:s}),[D,c,s]),[G,cr]=(0,d.useState)(!1),[gr,R]=(0,d.useState)(!1),[er,lr]=(0,d.useState)(!1),[fr,rr]=(0,d.useState)(!1),dr=h1(()=>R(!1)),sr=(t==="swatch"||t==="gradient")&&!!u&&(er&&dr||(dr||gr)&&G),wr=sr||fr,F=wr?"fa-regular fa-xmark":h??"fa-solid fa-check",K=t==="gradient"?A.removeGradient:A.removeColor,J=wr?K:S;(0,d.useEffect)(()=>{sr&&rr(!0)},[sr]),(0,d.useEffect)(()=>{!sr&&n&&!o&&rr(!1)},[o,sr,n]);const j=(0,d.useCallback)(q=>{const mr=sr||q.metaKey?"remove":"select",nr={...Ia(y,{format:"auto",fallbackHex:y,contrastBias:c,contrastBgColor:s}),contrastColor:T,name:_};if(t==="gradient"&&e!=null){f?.({kind:t,colorData:nr,gradientData:no(e,{contrastBias:c,contrastBgColor:s}),action:mr,shouldClosePicker:!1},q);return}f?.({kind:t,colorData:nr,action:mr,shouldClosePicker:!1},q)},[sr,f,y,_,t,e,c,s,T]),ir=(0,d.useCallback)(q=>{$||q.preventDefault(),q.stopPropagation(),j(q)},[j,$]),yr=(0,d.useCallback)(q=>{q.metaKey&&(q.preventDefault(),q.stopPropagation(),j(q))},[j]),br=(0,d.useCallback)(q=>{const mr=q.propertyName??"";(mr==="color"||mr.includes("color"))&&(M(),!sr&&rr(!1))},[sr,M]),H=(0,d.useCallback)(q=>{q.key!=="Enter"||!sr||(q.preventDefault(),q.stopPropagation(),q.currentTarget.click())},[sr]),W=(0,d.useMemo)(()=>({...m??{},"--js\u2022hex":x?"transparent":w&&(z??y??I)||"","--js\u2022color":y??I,"--js\u2022gradient":e?Ka(e):"","--js\u2022fg":n&&!o||sr?T:""}),[m,x,w,z,y,I,n,o,sr,T,e]);return(0,i.jsx)(Or,{...k,popoverTargetAction:$,ref:B,_isCustom:!0,"arc-color-chip":t,layout:"icon",tooltip:J,text:P,icon:F,"is-draft":o?"":void 0,"is-selected":!o&&n?"":void 0,"is-translucent":w?"":void 0,"is-transparent":x?"":void 0,style:W,onClick:ir,onContextMenu:yr,onMouseEnter:q=>{cr(!0),R(q.metaKey)},onMouseMove:q=>{R(q.metaKey)},onMouseLeave:()=>{cr(!1),R(!1),rr(!1)},onFocus:()=>lr(!0),onBlur:()=>{lr(!1),rr(!1)},onKeyDown:H,onTransitionEnd:br})});v0.displayName="ArcColorSwatch";const gn=v0;gn.getColorData=Ia,zr("ArcColorSwatch",y1);const x1=l`
@layer arc-components {

  [arc-color-palette] {
    display: flex;
    flex-direction: column;
    gap: var(${L}•8);

    [arc-color-palette-header] {
      display: flex;
      flex-direction: column;
      gap: var(${L}•4);
      font-size: var(${b}•12);

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      small { opacity: 0.612; }
    }

    [arc-color-palette-set] {
      display: flex;
      flex-wrap: wrap;
      gap: var(${L}•4);
      max-width: calc((var(${b}•24) + var(${L}•4)) * 7 + var(${L}•24));
      min-inline-size: 0;
      padding: 0;
      margin: 0;
      border: 0;
    }

    [arc-color-palette-picker] {
      display: grid;
      gap: var(${L}•8);
      padding-top: var(${L}•8);
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
    }

    [arc-color-palette-inputs] {
      display: grid;
      gap: var(${L}•8);
      grid-template-columns: auto auto;
      align-items: end;
    }

    [arc-color-palette-actions] {
      display: flex;
      justify-content: flex-end;
      gap: var(${L}•8);
    }

    [arc-add-color] {
      --arc-icon-size: var(${b}•10);
    }
  }

}
`,vn=({children:r,id:e,heading:a,showHeading:t=!0,setAriaLabel:o,colors:n=[],activeColor:c,activeGradient:s,matchByName:u=!1,format:h=Je.format,canAddColor:p=!1,canAddGradient:v=!1,canRemoveColor:g=!1,contrastBgColor:f,addColorFlow:m="standalone",sharedSwatchProps:$,onSwatchClick:k,onAddColor:A,onRemoveColor:y,onColorChange:w,onAddColorToggle:x,labels:z,..._})=>{const P=(0,d.useMemo)(()=>Fc(z),[z]),C=m==="embedded",S=Nr(void 0,"add-color-anchor"),I=Nr(void 0,"add-color-popover"),B=Nr(void 0,"palette-heading"),N=t&&!!a,V=hn(k),Z=hn(A),M=hn(y),D=hn(w),T=hn(x),[G,cr]=(0,d.useState)(n),[gr,R]=(0,d.useState)(!1),[er,lr]=(0,d.useState)(!1),{isSelectionControlled:fr,activeSelectedColor:rr,setUncontrolledSelectedColor:dr,selectColor:xr}=d1({activeColor:c}),sr=(0,d.useMemo)(()=>Qs(rr),[rr]),wr=(0,d.useMemo)(()=>rr!=null?eo(rr)?.trim().toLowerCase():void 0,[rr]),F=(0,d.useMemo)(()=>G.map(tr=>te(tr)?{normalized:Ka(tr),rgba:null,name:void 0}:{normalized:ao(tr),rgba:Zr(Br(tr)),name:eo(tr)?.trim().toLowerCase()}),[G]),K=(0,d.useMemo)(()=>F.map(tr=>!sr||!(tr.normalized===sr.comparisonKey||!!sr.selectedRgba&&!!tr.rgba&&Gc(tr.rgba,sr.selectedRgba))?!1:u&&wr!=null&&tr.name!=null?tr.name===wr:!0),[F,sr,u,wr]),J=(0,d.useMemo)(()=>K.some(Boolean),[K]),j=(0,d.useMemo)(()=>!!s&&G.some(tr=>te(tr)&&ct(tr,s)),[s,G]),ir=!C&&J?void 0:rr;(0,d.useEffect)(()=>{cr(n)},[n]);const yr=(0,d.useCallback)(tr=>{if(typeof tr=="object"&&tr!==null&&"hsv"in tr){D?.(tr);return}const qr=Br(tr),Rt=eo(tr),Oa=Ia(qr,{format:h,contrastBgColor:f});D?.({...Oa,name:Rt})},[D,h,f]),br=(0,d.useRef)(!1),H=(0,d.useCallback)(tr=>{tr&&(br.current=!0,lr(!0)),R(tr),T?.(e,tr)},[e,T]),W=(0,d.useCallback)(()=>ga?.handlePopover?.(I,"show"),[I]),q=(0,d.useCallback)(()=>ga?.handlePopover?.(I,"hide"),[I]);(0,d.useEffect)(()=>{gr&&br.current&&(br.current=!1,W())},[gr,W]);const mr=(0,d.useMemo)(()=>({id:e,heading:a,showHeading:t,colors:G,activeColor:c,activeGradient:s,format:h,canAddColor:p,canAddGradient:v,canRemoveColor:g,contrastBgColor:f,addColorFlow:m,sharedSwatchProps:$,onSwatchClick:V,onAddColor:Z,onRemoveColor:M,onColorChange:D,onAddColorToggle:T}),[e,a,t,G,c,s,h,p,v,g,f,m,$,V,Z,M,D,T]),{draftColorIndex:nr,draftColorValue:hr,startAddDraft:X,updateDraftColor:pr,cancelDraftColor:Lr,saveDraftColor:_r,saveCurrentColor:Er}=u1({palette:mr,isSelectionControlled:fr,onAddColor:Z,emitColorChange:yr,setLocalColors:cr,setUncontrolledSelectedColor:dr,initialColorValue:ir,shouldOpenPopover:!C,notifyAddColorToggle:H,showPopover:W,hidePopover:q}),Ur=(0,d.useMemo)(()=>G.map((tr,qr)=>nr===qr&&hr!=null?hr:tr),[nr,hr,G]),Fr=(0,d.useMemo)(()=>{if(nr==null||hr==null||sr==null||nr<0||nr>=K.length||te(hr))return K;const tr=[...K];return tr[nr]=xh(hr,sr),tr},[K,nr,hr,sr]),Hr=(0,d.useMemo)(()=>te(hr)?null:Qs(hr),[hr]),We=(0,d.useMemo)(()=>nr==null||Hr==null?!1:Js(G.filter(tr=>!te(tr)),hr,{skipIndex:nr}),[nr,Hr,hr,G]),ee=(0,d.useCallback)((tr,qr)=>{if(!tr?.colorData)return;if(tr.kind==="gradient"){const Oa=tr.gradientData;if(tr.action==="remove"&&g){cr(_i=>_i.filter(Dn=>!(te(Dn)&&ct(Dn,Oa)))),M?.(mr,Oa,qr);return}V?.({...tr,shouldClosePicker:!1},qr);return}const Rt={color:tr.colorData.value,name:tr.colorData.name};if(tr.action==="remove"&&g){cr(Oa=>{const _i=Oa.filter(Dn=>te(Dn)||!to(Dn,Rt));return _i.length===Oa.length?Oa:_i}),M?.(mr,Rt,qr);return}xr(Rt),V?.({...tr,shouldClosePicker:!1},qr),yr(tr.colorData)},[g,yr,M,V,mr,xr]),pe=(0,d.useCallback)(tr=>nr===tr&&hr!=null,[nr,hr]);(0,d.useEffect)(()=>{if(!C||nr==null)return;const tr=(v?s:void 0)??(p?rr:void 0);tr!=null&&pr(tr)},[s,rr,p,v,nr,C,pr]);const Xe=(0,d.useCallback)(tr=>{const qr=tr?.newState==="open";R(qr),T?.(e,qr)},[e,T]),Be=(0,d.useCallback)(tr=>{const qr=(v?s:void 0)??(p?rr??Je.color:Je.color);Er(qr,tr)},[p,v,s,rr,Er]),yo=(0,d.useCallback)(tr=>{tr.key!=="Escape"||!gr||Lr(tr)},[Lr,gr]),Ci=(0,d.useMemo)(()=>nr==null||!te(hr)?!1:G.some((tr,qr)=>qr!==nr&&te(tr)&&ct(tr,hr)),[nr,hr,G]),Ei=p||v,vd=C&&(!((v?s:void 0)??(p?rr:void 0))||!gr&&(v&&s?j:J)),fd=C?P.addCurrentColor:P.addSwatch,md=C&&gr?P.cancel:fd,zi=C||!gr,Xk=p&&v?void 0:[v?"gradient":"solid"];let ng=Be;return C||(ng=gr?Lr:X),(0,i.jsxs)("div",{..._,"arc-color-palette":e,"is-adding-color":gr?"":void 0,children:[N&&(0,i.jsx)("header",{"arc-color-palette-header":"",id:B,children:typeof a=="string"?(0,i.jsx)("strong",{children:a}):(0,i.jsx)(ie,{...a,layout:"inline",isStrong:!0})}),(0,i.jsxs)("fieldset",{"arc-color-palette-set":"",id:S,"aria-labelledby":N?B:void 0,"aria-label":N?void 0:o??P.colorPalette,children:[Ur?.map((tr,qr)=>{if(te(tr)){const Rt=`${Ka(tr)}-${qr}`,Oa=!!s&&ct(s,tr);return(0,d.createElement)(gn,{...$,key:Rt,kind:"gradient",gradient:tr,name:tr.name,isDraft:pe(qr),isSelected:Oa,canRemoveColor:g&&!pe(qr),contrastBgColor:f,labels:z,onClick:ee})}return(0,d.createElement)(gn,{...$,key:`${Br(tr)}-${qr}`,color:tr,kind:"swatch",isDraft:pe(qr),isSelected:Fr[qr],canRemoveColor:g&&!(C&&pe(qr)),contrastBgColor:f,tooltip:C&&pe(qr)?P.saveColor:void 0,labels:z,onClick:C&&pe(qr)?_r:ee})}),Ei&&zi&&(0,i.jsx)(Or,{"arc-add-color":"",popoverTarget:I,icon:"fa-regular fa-plus",layout:"icon",shape:"round",size:"sm",hierarchy:"secondary",tooltip:md,onClick:ng,isDisabled:vd})]}),Ei&&!C&&er&&(0,i.jsx)(Pa,{mode:"add",heading:"",panels:Xk,canTogglePanels:p&&v,color:te(hr)?Je.color:hr??Je.color,gradient:te(hr)?hr:void 0,format:h,labels:z,onChange:tr=>{tr.activePanel==="solid"?pr(tr.color.value):tr.activePanel==="gradient"&&pr(tr.gradient)},onPreviewColor:tr=>pr(tr.value),onPreviewGradient:tr=>pr(tr),popoverProps:{id:I,popover:"manual",anchorAt:"right-center",alternateAnchorId:S,hidePopoverButton:!0,tryFallbacks:!0,hasTail:!0,onToggle:Xe,onKeyDown:yo,footerSlot:(0,i.jsxs)(Et,{"arc-color-picker-button-bar":"",children:[(0,i.jsx)(Or,{"arc-color-picker-button":"cancel",text:P.cancel,hierarchy:"secondary",size:"sm",onClick:Lr}),(0,i.jsx)(Or,{"arc-color-picker-button":"save",text:P.save,size:"sm",onClick:_r,isDisabled:We||Ci})]})}}),r&&(0,i.jsx)("footer",{"arc-color-palette-footer":"",children:r})]})};vn.addColor=Qb,vn.removeColor=r$,zr("ArcColorPalette",x1);const k1=(0,d.memo)(function({palette:e,canAddColor:a,canAddGradient:t,canRemoveColor:o,activePaletteColor:n,activePaletteGradient:c,contrastBgColor:s,labels:u,onSwatchClick:h,onAddColor:p,onRemoveColor:v}){const g=(0,d.useCallback)((f,m)=>{h(f,m,e.id)},[e.id,h]);return(0,i.jsx)(vn,{...e,canAddColor:a??e.canAddColor,canAddGradient:t??e.canAddGradient,canRemoveColor:o,addColorFlow:"embedded",activeColor:n,activeGradient:c,contrastBgColor:s,labels:u,onAddColor:p,onRemoveColor:v,onSwatchClick:g})}),f0=({palettes:r=[],canAddColor:e,canAddGradient:a,canRemoveColor:t,activePaletteColor:o,activePaletteGradient:n,contrastBgColor:c,selectedNameRef:s,hsvRef:u,popoverId:h,labels:p,onAddColor:v,onRemoveColor:g,commitLocalHsv:f,...m})=>{const $=(0,d.useRef)(r);$.current=r;const k=(0,d.useCallback)((A,y,w)=>{const x=$.current.find(_=>_.id===w);if(!x)return;if(y?.preventDefault(),y?.stopPropagation(),A?.action==="remove"&&(t??x.canRemoveColor)){x.onSwatchClick?.(A,y);return}A?.kind!=="gradient"&&A?.colorData&&(s.current=A.colorData.name,f(A.colorData.hsv));try{x.onSwatchClick?.(A,y)}catch{}if((A?.shouldClosePicker??!0)&&h)try{ga.handlePopover(h,"hide")}catch{}},[t,f,h,s]);return r.length?(0,i.jsx)("div",{...m,"arc-color-palettes":"","arc-color-picker-section":"palettes",children:r.map(A=>(0,i.jsx)(k1,{palette:A,canAddColor:e,canAddGradient:a,canRemoveColor:!!(t??A.canRemoveColor),activePaletteColor:o,activePaletteGradient:n,contrastBgColor:c,labels:p,onSwatchClick:k,onAddColor:v,onRemoveColor:g},A.id))}):null},m0=({onCommit:r})=>{const e=(0,d.useRef)(!1),a=(0,d.useCallback)((t,o)=>{const n=()=>{e.current=!1,o(),r()};return{onChange:({value:c})=>{e.current=!0,t(Number(c))},onPointerUp:n,onPointerCancel:n,onBlur:()=>{e.current&&n()}}},[r]);return{isPreviewingRef:e,createInputProps:a}},ri={status:"idle"},b0=(r,e)=>r.kind!==e.kind?!1:r.kind==="stop-at"&&e.kind==="stop-at"?r.stopId===e.stopId:!0,w1=(r,e)=>{switch(e.type){case"PREVIEW_START":return{status:"previewing",source:e.source};case"PREVIEW_END":return r.status==="previewing"?ri:r;case"EDIT_FOCUS":return{status:"editingText",field:e.field,draft:e.draft};case"EDIT_INPUT":return r.status==="editingText"?{...r,draft:e.draft}:r;case"EDIT_BLUR":return r.status==="editingText"?ri:r;case"EXTERNAL_ADOPT":return r.status==="idle"?r:ri;default:return r}},A1=(r,e)=>r.status==="editingText"&&b0(r.field,e),vl=(r,e,a)=>a.status==="editingText"&&b0(a.field,r)?a.draft:e,dw=1,S1=/^[0-9A-Fa-f]{3}$/,C1=/^[0-9A-Fa-f]{4}$/,E1="[0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8}",z1="[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}",$0=r=>{if(S1.test(r))return{kind:"three",expanded:Ks(r)};if(C1.test(r)){const e=Zr(`#${r}`);if(e)return{kind:"four",shorthand:r,expanded:ro(e),alphaPercent:Math.round(e.a*100)}}return null},_1=(r,e,a)=>r?.kind==="three"?a.hexExpandHint(r.expanded.toUpperCase()):r?.kind==="four"?e?a.hexApplyAlphaHint(r.expanded.toUpperCase(),r.alphaPercent):a.hexExpandHint(r.expanded.toUpperCase()):a.hexInvalid,I1=(r,e,a,t=ue)=>{const o=At(r),n=$0(o),c=o.length>0&&(!a&&o.length===8||!e&&o.length!==6&&o.length!==8||Zr(`#${o}`)===null),u=!e&&o.length>0&&o.length!==6&&o.length!==8||!a&&o.length===8?_1(n,a,t):t.hexInvalid,h=!a&&o.length===8?t.hexRgbOnly:u;let p=t.applyExpandedHex;return n?.kind==="four"?p=a?t.applyHexWithAlpha(n.expanded.toUpperCase(),n.alphaPercent):t.applyExpandedHexValue(n.expanded.toUpperCase()):n?.kind==="three"&&(p=t.applyExpandedHexValue(n.expanded.toUpperCase())),{isInvalid:c,errorAid:{tooltip:h,ariaLabel:p,fix:n}}},y0=(r,e,a,t)=>{const o=Zr(`#${r}`);o&&(e(r,{applyHexAlpha:!0,...t}),a(ro(o)))},T1=(r,e,a,t)=>{if(e){y0(r,a,t);return}const o=Zr(`#${r}`);if(o){const n=ro(o);t(n),a(n)}},P1=(r,e,a,t)=>{if(e)y0(r,a,t);else{const o=r.slice(0,6);t(o),a(o)}},R1=(r,e,a,t)=>{r.kind==="three"?(a(r.expanded),e(r.expanded)):t?(e(r.shorthand,{applyHexAlpha:!0}),a(r.expanded)):(a(r.expanded),e(r.expanded))},L1=(r,e=!1)=>{const a=At(r);return!e&&a.length>6?a.slice(0,6):a},M1=(r,e,a,t)=>{if(!a&&(r.length===8||t?.applyHexAlpha===!0))return!1;if(!e&&r.length>0){const o=r.length===6||r.length===8,n=t?.applyHexAlpha===!0&&r.length===4;if(!o&&!n)return!1}return!0},x0=()=>typeof window<"u"&&"EyeDropper"in window&&typeof window.EyeDropper=="function",fl=x0(),k0=fl?window.EyeDropper:void 0,w0=k0?new k0:void 0,j1=({onColorPicked:r,labels:e,...a})=>{const t=e??ue,[o,n]=(0,d.useState)(!1),c=async()=>{if(!(!fl||!w0||o)){n(!0);try{const{sRGBHex:s}=await w0.open();if(typeof r=="function"){const u=Ve(Xc(s,"#000000"));r(Ue({...u,a:1},!1))}else console.warn("EyeDropper: onColorPicked prop was not provided")}catch(s){s instanceof DOMException&&s.name==="AbortError"||console.error("EyeDropper failed:",s)}finally{n(!1)}}};return fl?(0,i.jsx)("div",{"arc-color-eye-dropper":"",children:(0,i.jsx)(Or,{...a,onClick:c,layout:"icon",shape:"square",size:"md",variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-eye-dropper",text:t.eyeDropper,tooltip:t.eyeDropperTooltip})}):null},lo=r=>(0,i.jsx)(i.Fragment,{children:!!r.children&&(0,i.jsx)("span",{...r})}),D1=r=>(0,i.jsx)(i.Fragment,{children:!!r.children&&(0,i.jsx)("span",{...r})}),ml=({children:r,...e})=>(0,i.jsx)(i.Fragment,{children:!!r&&(0,i.jsx)(yt,{...e,children:(0,i.jsx)(xt,{children:r})})}),O1=({children:r,layout:e,size:a,variant:t,tag:o="span",...n})=>(0,i.jsx)(o,{...n,"data-layout":e,"data-size":a,"data-variant":t,children:r}),N1=()=>(0,i.jsx)("span",{"input-element":"spacer"}),B1=r=>(0,i.jsx)(lo,{...r,"input-element":"header"}),F1=r=>(0,i.jsx)(ml,{...r,"input-element":"header-label"}),H1=r=>(0,i.jsx)(lo,{...r,"input-element":"header-slot"}),V1=r=>(0,i.jsx)(lo,{...r,"input-element":"body"}),U1=r=>(0,i.jsx)(ml,{...r,"input-element":"input-prefix"}),G1=r=>(0,i.jsx)(ml,{...r,"input-element":"input-suffix"}),K1=r=>(0,i.jsx)(D1,{...r,"input-element":"input-action"}),W1=r=>(0,i.jsx)(lo,{...r,"input-element":"footer"}),X1=r=>(0,i.jsx)(lo,{...r,"input-element":"footer-caption"}),q1=r=>(0,i.jsx)(lo,{...r,"input-element":"footer-slot"}),Y1=r=>e=>{if(!(e?.target instanceof HTMLInputElement))return;const a={name:e?.target?.name,value:e?.target?.value};r?.(a,e)},Jr=l`--arc•input`,Wa=l`${Jr}•fg`,ei=l`${Wa}•disabled`,ai=l`${Wa}•readonly`,ti=l`${Wa}•invalid`,aa=l`${Jr}•bg`,oi=l`${aa}•hover`,ni=l`${aa}•disabled`,ci=l`${aa}•readonly`,ii=l`${aa}•invalid`,Z1=l`${Jr}•align`,A0=l`${Z1}•items`,S0=l`${Jr}•header`,si=l`${S0}•label•color`,C0=l`${S0}•slot•color`,E0=l`${Jr}•footer`,bl=l`${E0}•caption•color`,z0=l`${E0}•slot•color`,$l=l`${Jr}•border`,yl=l`${$l}•radius`,J1=l`${$l}•width`,ta=l`${$l}•color`,xl=l`${Jr}•outline`,_0=l`${xl}•size`,I0=l`${xl}•offset`,T0=l`${xl}•color`,fn=l`${Jr}•height`,Q1=l`${Jr}•padding`,li=l`${Q1}•inline`,kl=l`${li}•end`,P0=l`${Jr}•slot`,wl=l`${P0}•gap`,Al=l`${P0}•font•size`,di=l`${ta}•hover`,ui=l`${ta}•disabled`,Sl=l`${ta}•readonly`,mn=l`${ta}•invalid`,Cl=l`${Jr}•action•height`,R0=l`${Jr}•gap`,El=l`${Jr}•font•size`,ry=l`
@layer arc-components {

/* --arc[-internal, -modifier, -computed] • NOT FOR CONSUMER USE ---• */

[arc-input] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=xl] {
    ${fn}: var(${b}•48);
    ${kl}: var(${L}•8);
    ${Cl}: var(${b}•48);
  }

  &:is([data-size=lg], [data-size=inherit]) { /* @default • base size at 100% */
    ${fn}: var(${b}•40);
    ${Cl}: var(${b}•40);
  }

  &[data-size=md] {
    ${fn}: var(${b}•32);
    ${yl}: var(${b}•4);
    ${Cl}: var(${b}•32);
  }

  &:has(select) {
    ${li}: 0;
    ${A0}: stretch;
  }

  & {
    /* Defaults -------------------------• */
    ${El}: var(${b}•14);
    ${Al}: var(${b}•12);

    ${fn}: var(${b}•40); /* default size */
    ${R0}: var(${L}•6);
    ${wl}: var(${L}•4);
    ${li}: var(${L}•12);
    ${kl}: var(${L}•3);
    ${yl}: var(${b}•8);
    ${J1}: var(${b}•1);
    ${_0}: var(${b}•2);
    ${I0}: var(${b}•2);

    &[data-size=inherit] {
      ${El}: 0.875em; /* 14px at 100% */
      ${Al}: 0.75em; /* 12px at 100% */
    }
  }

  /* VARIANTS ------------------------------------------------------• */

  & {
    ${Wa}: var(--arc-color-fg-primary);
    ${si}: inherit;
    ${C0}: var(--arc-color-fg-secondary);
    ${bl}: var(--arc-color-fg-secondary);
    ${z0}: var(--arc-color-fg-secondary);

    &[data-variant=outline] { /* @default */
      ${aa}: var(--arc-color-bg-primary);
      ${oi}: var(--arc-color-bg-primary);
      ${ta}: var(--arc-color-border-mid);
      ${di}: var(--arc-color-border-heavy);

      ${ei}: var(--arc-color-fg-disabled);
      ${ni}: var(--arc-color-bg-secondary);
      ${ui}: var(--arc-color-border-mid);

      ${ai}: var(--arc-color-fg-primary);
      ${ci}: var(--arc-color-bg-disabled);
      ${Sl}: var(--arc-color-border-mid);

      ${ti}: var(--arc-color-fg-critical-mid);
      ${ii}: var(--arc-color-bg-primary);
      ${mn}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=solid] {
      ${aa}: var(--arc-color-bg-secondary);
      ${oi}: var(--arc-color-bg-hover-default);
      ${ta}: transparent;
      ${di}: var(--arc-color-border-stark);

      ${ti}: var(--arc-color-fg-critical-mid);
      ${ii}: var(--arc-color-bg-critical-muted);
      ${mn}: transparent;

      ${ei}: var(--arc-color-fg-disabled);
      ${ni}: var(--arc-color-bg-disabled);
      ${ui}: transparent;

      ${ai}: var(--arc-color-fg-primary);
      ${ci}: var(--arc-color-bg-disabled);
      ${mn}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=plain] {
      ${aa}: transparent;
      ${oi}: var(--arc-color-bg-hover-default);
      ${ta}: transparent;
      ${di}: transparent;

      ${ti}: var(--arc-color-fg-critical-mid);
      ${ii}: transparent;
      ${mn}: var(--arc-color-fg-critical-mid);

      ${ei}: var(--arc-color-fg-disabled);
      ${ni}: transparent;
      ${ui}: transparent;

      ${ai}: var(--arc-color-fg-primary);
      ${ci}: var(--arc-color-bg-disabled);
      ${Sl}: transparent;
    }
  }

  /* STATES --------------------------------------------------------• */

  &:where(:not(:has(
    input:where(:disabled, :read-only),
    select:where(:disabled, [data-readonly])
  ))) {
    &:where(
      :hover,
      [data-simulate=hover]
    ) {
      ${ta}: var(--arc-input-border-color-hover, var(${di}));
      ${aa}: var(--arc-input-background-hover, var(${oi}));
    }

    &:has([input-element=body]) {
      &:where(
        :focus-within,
        [data-simulate=focus],
        [data-simulate=active],
        :has(:focus, :focus-visible)
      ) {
        ${T0}: var(--arc-color-border-focus);
      }
    }
  }

  &:where(:has(
    input[type=range]:not(:disabled),
    select:not(:disabled, [data-readonly])
  )) {
    ${Jr}•cursor: pointer;
  }

  &:where(:has(
    input:not([type=range]):read-only,
    select[data-readonly]
  )) {
    ${Jr}•cursor: default;
    ${Wa}: var(${ai});
    ${aa}: var(${ci});
    ${ta}: var(${Sl});
  }

  &:has(input:disabled, select:disabled) {
    ${Jr}•cursor: not-allowed;
    ${Wa}: var(${ei});
    ${aa}: var(${ni});
    ${ta}: var(${ui});
    ${si}: var(--arc-color-fg-primary);
  }

  &[data-simulate=invalid],
  &:has(
    input:user-invalid:not(:focus),
    select:user-invalid:not(:focus)
  ) {
    ${aa}: var(${ii});
    ${si}: var(${Wa});
    ${ta}: var(${mn});
    ${bl}: var(${ti});
  }

  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=fill] { /* @default */
    flex: var(--arc-input-flex, 1);
    ${Jr}•display: flex;
  }

  &[data-layout=hug] {
    flex: var(--arc-input-flex, none);
    ${Jr}•display: inline-flex;
  }

  & {
    ${Jr}•border: var(--arc-border-width-sm) solid var(${ta});
    ${Jr}•outline: var(${_0}) solid var(${T0}, transparent);
  }
}

/* Inter-Component Communications ----------------------------------• */

[arc-input] {
  --arc-icon-text-line-height: normal;
  --arc-label-cursor: var(${Jr}•cursor, inherit); /* ArcLabel • cursor syncing */

  &[arc-text-input][data-size=md] {
    --arc-button-border-radius: var(--arc-border-radius-sm);
    --arc-button-outline-offset: 0;
    --arc-button-height: 80%; /* ArcButton • the input size 'md' needs
                                      a slightly smaller "input-action" button
                                      footprint; there's no direct access to
                                      ArcButton['size'] prop in this context */
  }
}

[arc-input]:not([hidden]) {
  display: var(${Jr}•display, flex);
  flex-direction: column;
  gap: var(${wl});
  color: var(--arc-input-color, var(${Wa}));

  :is([input-element=header], [input-element=footer]) {
    flex: none;
    display: flex;
    justify-content: space-between;
    font-size: var(--arc-input-slot-font-size, var(${Al}));
    gap: var(${wl});
  }

  [input-element=spacer] {
    display: safe flex-end;
  }

  [input-element=header] {
    align-items: safe flex-end;
  }

  [input-element=header-label] {
    flex: 1;
    color: var(--arc-input-header-label-color, var(${si}));
    opacity: var(--arc-input-header-label-opacity, unset);
    font-weight: var(--arc-input-header-label-font-weight, var(--arc-font-weight-600));
  }

  [input-element=header-slot] {
    color: var(--arc-input-header-slot-color, var(${C0}));
    min-width: var(--arc-input-header-slot-min-width, fit-content);
  }

  [input-element=footer] {
    align-items: baseline;
  }

  [input-element=footer-caption] {
    flex: 1;
    color: var(--arc-input-footer-caption-color, var(${bl}));
  }

  [input-element=footer-slot] {
    color: var(--arc-input-footer-slot-color, var(${z0}));
    min-width: var(--arc-input-footer-slot-min-width, fit-content);
  }

  [input-element=body] {
    flex: none;
    position: relative;
    display: flex;
    align-items: var(${A0}, center);
    gap: var(--arc-input-gap, var(${R0}));
    height: var(--arc-input-height, var(${fn}));
    font-size: var(${El});

    color: var(--arc-input-color, var(${Wa}));
    background-color: var(--arc-input-background, var(${aa}));
    border: var(--arc-input-border, var(${Jr}•border));
    border-radius: var(--arc-input-border-radius, var(${yl}));
    outline: var(${Jr}•outline, none);
    outline-offset: var(--arc-input-outline-offset, var(${I0}));

    transition-property: border, background, color, height;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    cursor: var(${Jr}•cursor, unset);

    padding-inline: var(--arc-input-padding-inline, var(${li}));

    &:has([input-element=input-action]) {
      padding-inline-end: var(${kl});
    }

    input {
      cursor: inherit;
      appearance: none;
      align-self: stretch;
      flex: 1;
      font: inherit;
      color: inherit;
      padding: 0;
      margin: 0;
      outline: none;
      line-height: normal;
      width: var(--arc-input-width, 100%);
      min-width: var(--arc-input-min-width, 1em);
      max-width: var(--arc-input-max-width, 100%);
      text-align: var(--arc-input-text-align, unset);

      &:not([type=range]) {
        border: var(--arc-border-width-sm) solid transparent;
        background: transparent;
      }

      /* @note - textfield appearance suppresses native spinners for number inputs */
      &[arc-input-type=number][is-appearance=textfield] {
        appearance: textfield;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          appearance: none;
        }
      }

      &[arc-input-type=search]::-webkit-search-cancel-button {
        appearance: none;
        display: none;
      }
    }

    /* @note - reset font-size for nested input elements */
    [input-element] { font-size: var(--arc-input-element-font-size, 1em); }
  }

  [input-element=input-prefix] {
    flex: none;
    opacity: var(--arc-input-prefix-opacity, unset);
    font-weight: var(--arc-input-prefix-font-weight, unset);
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
  }
}

}
`,ey={onChangeHandler:Y1,Wrapper:O1,Spacer:N1,Header:B1,HeaderLabel:F1,HeaderSlot:H1,InputBody:V1,InputPrefix:U1,InputSuffix:G1,InputAction:K1,Footer:W1,FooterCaption:X1,FooterSlot:q1};zr("ArcInput",ry);const Rr=ey,ay="[input-element=body]",ty=24;function oy({inputRef:r,onChange:e,enabled:a,deltaPerStep:t=ty}){const o=(0,d.useRef)(e);o.current=e,(0,d.useEffect)(()=>{if(!a||t<=0)return;let n=0;const c=()=>r.current,s=()=>{const f=c();if(!(f instanceof Element))return null;const m=f.closest(ay);return m instanceof HTMLElement?m:null},u=(f,m)=>{const $=o.current;if(!$)return;const k={name:f.name,value:m};$(k,{target:f,currentTarget:f})},h=()=>{n=0},p=f=>{const m=c();if(!m||document.activeElement!==m||m.type!=="number"||m.disabled||m.readOnly)return;f.preventDefault(),f.stopPropagation();const $=Number(m.step)||1,k=Number(m.min),A=Number(m.max),y=Number.isFinite(k)?k:void 0,w=Number.isFinite(A)?A:void 0;let x=Number(m.value);if(!Number.isFinite(x))return;n+=f.deltaY;const z=t,_=()=>{const S=Math.max(y??-1/0,x-$);return S===x?!1:(x=S,u(m,String(S)),!0)},P=()=>{const S=Math.min(w??1/0,x+$);return S===x?!1:(x=S,u(m,String(S)),!0)};for(;n>=z;){if(!_()){n=0;break}n-=z}for(;n<=-z;){if(!P()){n=0;break}n+=z}},v=s(),g=c();if(!(!v||!g||g.type!=="number"))return g.addEventListener("blur",h),v.addEventListener("wheel",p,{passive:!1}),()=>{g.removeEventListener("blur",h),v.removeEventListener("wheel",p)}},[a,t,r])}const hi=$r(ca,["fill","hug"]),pi=$r(ke,["inherit","xl","lg","md"]),zl=$r(Yr,["outline","solid","plain"]),ny=hi,cy=pi,iy=$r(zl,["outline","solid"]),sy=["text","number","password","email","url"],uo=(0,d.forwardRef)(({layout:r="hug",size:e="inherit",variant:a="outline",inputProps:t,headerLabel:o,headerSlot:n,inputPrefix:c,inputAction:s,inputSuffix:u,footerCaption:h,footerSlot:p,...v},g)=>{const{id:f,wheelControl:m,appearance:$,onChange:k,...A}=t,y="arc-search"in v,w=y?"search":A?.type||"text",x=A?.disabled||void 0,z=A?.readOnly||void 0,_=A?.required||void 0,P=!!(o||n),C=!!(h||p),S=(0,d.useRef)(null),I=(0,d.useCallback)(V=>{S.current=V,Ae(g,V)},[g]),B=typeof m=="object"?m.deltaPerStep:void 0;oy({enabled:w==="number"&&m!==!1,deltaPerStep:B,inputRef:S,onChange:k});const N=s&&(0,d.isValidElement)(s)?(0,d.cloneElement)(s,{size:"md"}):s;return(0,i.jsxs)(Rr.Wrapper,{...v,"arc-text-input":"","arc-input":w,layout:r,size:e,variant:a,children:[P&&(0,i.jsxs)(Rr.Header,{children:[(0,i.jsx)(Rr.HeaderLabel,{htmlFor:f,children:o}),!!n&&(0,i.jsx)(Rr.Spacer,{}),(0,i.jsx)(Rr.HeaderSlot,{children:n})]}),(0,i.jsxs)(Rr.InputBody,{children:[(0,i.jsx)(Rr.InputPrefix,{htmlFor:f,children:c}),(0,i.jsx)("input",{...A,...y?{type:w}:{},ref:I,id:f,"arc-input-type":w,onChange:Rr.onChangeHandler(k),"aria-disabled":x,"aria-readonly":z,"aria-required":_,"is-appearance":$??void 0}),(0,i.jsx)(Rr.InputSuffix,{htmlFor:f,children:u}),(0,i.jsx)(Rr.InputAction,{children:N})]}),C&&(0,i.jsxs)(Rr.Footer,{children:[(0,i.jsx)(Rr.FooterCaption,{children:h}),!!p&&(0,i.jsx)(Rr.Spacer,{}),(0,i.jsx)(Rr.FooterSlot,{children:p})]})]})}),L0=({commitDraft:r,setIsEditing:e,onRevert:a})=>{const t=(0,d.useCallback)(()=>{e(!0)},[e]),o=(0,d.useCallback)(()=>{e(!1),r()},[e,r]),n=(0,d.useCallback)(c=>{if(c.key==="Enter"){c.preventDefault(),e(!1),r(),c.currentTarget.blur();return}c.key==="Escape"&&(c.preventDefault(),e(!1),a(),c.currentTarget.blur())},[e,r,a]);return{onFocus:t,onBlur:o,onKeyDown:n}},ly=({hsv:r,draftValue:e,label:a,showLabel:t=!0,setIsEditing:o,commitDraft:n,setDraftValue:c,expandHexShorthand:s=!1,hasAlphaTools:u=!0,isUnset:h=!1,labels:p,headerSlot:v})=>{const g=p??ue,f=a??g.hex,m=Nr(void 0,"hex-input"),$=(0,d.useRef)(null),k=ro(Ve(r)),[A,y]=(0,d.useState)(!1),{isInvalid:w,errorAid:x}=(0,d.useMemo)(()=>I1(e,s,u,g),[e,s,u,g]),{onFocus:z,onBlur:_,onKeyDown:P}=L0({commitDraft:n,setIsEditing:o,onRevert:()=>c(k)}),C=(0,d.useCallback)(()=>{y(!0);const M=At(e);if(M.length===8){P1(M,u,n,c),_();return}if(s&&M.length===3){const D=Ks(M);c(D),n(D),o(!1),_();return}s&&M.length===4&&T1(M,u,n,c),_()},[e,s,u,c,n,o,_]),S=(0,d.useCallback)(M=>{if(M.key!=="ArrowUp"&&M.key!=="ArrowDown")return;const D=M.key==="ArrowUp"?1:-1,T=M.altKey?"r":M.metaKey?"g":"b",G=M.shiftKey?16:1,cr=gh(At(e),Ve(r),T,D,G);c(cr),n(cr,{phase:"preview"}),M.preventDefault()},[e,r,c,n]),I=(0,d.useCallback)(M=>{if(S(M),!M.defaultPrevented){if(M.key==="Enter"){M.preventDefault(),o(!1),M.currentTarget.blur();return}M.key==="Escape"&&P(M)}},[S,o,P]),B=({value:M})=>{const D=L1(M??"",u);c(D),D.length===6&&n(D,{phase:"preview"})},N=w&&A,V=N?x.tooltip:void 0,Z=(0,d.useCallback)(()=>{const M=$0(At(e));M&&R1(M,n,c,u),queueMicrotask(()=>{$.current?.focus()})},[e,n,c,u]);return(0,i.jsx)(uo,{ref:$,"arc-color-input":"hex",size:"md",variant:"solid",headerLabel:t?f:void 0,headerSlot:v,inputPrefix:"#",inputAction:N?(0,i.jsx)(Or,{layout:"icon",icon:"fa-solid fa-exclamation-circle",variant:"tertiary",tooltip:x.tooltip,"aria-label":x.ariaLabel,onClick:Z}):void 0,inputProps:{id:m,"aria-label":f,placeholder:h?g.unsetColorPlaceholder:"...",value:e,pattern:u?E1:z1,maxLength:u?9:6,title:V,"aria-invalid":N?!0:void 0,style:{textTransform:"uppercase",letterSpacing:"0.0625ch"},onFocus:z,onBlur:C,onKeyDown:I,onChange:B}})},M0=({isUnset:r,onSelect:e,labels:a})=>{const t=a??ue;return(0,i.jsx)(Or,{"arc-color-unset":"",icon:"fa-regular fa-eraser",layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",text:t.unsetColor,tooltip:t.unsetColor,"aria-label":t.unsetColor,isActive:r,onClick:e})},j0=["value","pct","pctSigned","min","max"],D0=new RegExp(`\\{#(${j0.join("|")})\\}`,"g"),dy=hi,uy=pi,hy=zl,py=["top","inline"],O0=({text:r,value:e,toValue:a,pctSigned:t,min:o,max:n})=>{const c={value:String(e??""),pct:String(a??""),pctSigned:String(t??""),min:String(o??""),max:String(n??"")};return typeof r=="string"?r.replace(D0,(s,u)=>c[u]):typeof r=="function"?r({...c,toValue:a,pctSigned:t}):r},gy=10,_l=r=>r==="ArrowUp"||r==="ArrowDown"||r==="ArrowLeft"||r==="ArrowRight",Il=(r,{shiftKey:e},{step:a=1,stepLarge:t=gy}={})=>{if(!_l(r))return null;const o=e?t:a;return r==="ArrowDown"||r==="ArrowLeft"?-o:o},N0=(r,e,{min:a=-1/0,max:t=1/0}={})=>ar(r+e,a,t),vy=(r,{getValue:e,onStep:a,min:t,max:o,step:n,stepLarge:c})=>{const s=Il(r.key,r,{step:n,stepLarge:c});if(s==null)return!1;r.preventDefault();const u=N0(e(),s,{min:t,max:o});return a(u,r),!0},B0=(...r)=>e=>{r.some(a=>(a(e),e.defaultPrevented))},F0=(r,e,a,t)=>ar(Math.round(r/e)*e,a,t),H0=(r,e,a,t,o)=>{const n=r%a===0;return e>0?ar(n?r+a:Math.ceil(r/a)*a,t,o):ar(n?r-a:Math.floor(r/a)*a,t,o)},V0=({snapStep:r,min:e,max:a,step:t=1,value:o,onChange:n,onKeyDown:c,onPointerDown:s,onPointerMove:u,onPointerUp:h,onPointerCancel:p})=>{const v=(0,d.useRef)(!1),g=(0,d.useRef)(null),f=(0,d.useCallback)(()=>{g.current?.(),g.current=null},[]),m=(0,d.useCallback)(()=>{if(g.current||typeof window>"u")return;const x=z=>{v.current=z.shiftKey};window.addEventListener("keydown",x,!0),window.addEventListener("keyup",x,!0),g.current=()=>{window.removeEventListener("keydown",x,!0),window.removeEventListener("keyup",x,!0)}},[]);(0,d.useEffect)(()=>f,[f]);const $=(0,d.useCallback)(x=>{v.current=x.shiftKey,m(),s?.(x)},[s,m]),k=(0,d.useCallback)(x=>{v.current=!1,f(),h?.(x)},[h,f]),A=(0,d.useCallback)(x=>{v.current=!1,f(),p?.(x)},[p,f]),y=(0,d.useCallback)((x,z)=>{if(!r||!v.current){n?.(x,z);return}const _=F0(Number(x.value),r,e,a);n?.({...x,value:String(_)},z)},[r,e,a,n]),w=(0,d.useCallback)(x=>{if(!r||!x.shiftKey||!_l(x.key)){c?.(x);return}const z=Il(x.key,x,{step:t,stepLarge:r});if(z==null){c?.(x);return}x.preventDefault();const _=H0(o,z>0?1:-1,r,e,a),P={value:String(_)};n?.(P,x)},[r,t,e,a,o,n,c]);return r?{onChange:y,onKeyDown:w,onPointerDown:$,onPointerMove:u,onPointerUp:k,onPointerCancel:A}:{onChange:n,onKeyDown:c,onPointerDown:s,onPointerMove:u,onPointerUp:h,onPointerCancel:p}},Oe=l`--arc•slider`,Ze=l`${Oe}•track`,jr=l`${Oe}•thumb`,ho={BASE:l`
    ${Ze}•bg: var(--arc-slider-track-background, var(--arc-color-border-mid));
    ${Ze}•progress•bg: var(--arc-slider-progress-background, var(--arc-color-bg-theme-heavy));
    ${Ze}•height: var(--arc-slider-track-height, max(4px, 0.25em));

    ${jr}•size: var(--arc-slider-thumb-size, max(16px, 1em));
    ${jr}•size•hover: var(--arc-slider-thumb-size-hover, max(16px, 1em));
    ${jr}•size•anchor: var(--arc-slider-thumb-size-hover, var(--arc-slider-thumb-size, max(16px, 1em)));
    ${jr}•size•rest: var(${jr}•size•anchor);

    ${jr}•bg: var(--arc-slider-thumb-background, var(--arc-color-bg-theme-heavy));
    ${jr}•shadow: var(--arc-slider-thumb-shadow, var(--arc-shadow-md));

    &:has([has-small-thumb]) {
      ${jr}•size: var(--arc-slider-thumb-size, max(8px, 0.5em));
      ${jr}•size•rest: var(--arc-slider-thumb-size, max(8px, 0.5em));
    }

    &:has(
      [arc-slider-surface]:hover,
      [arc-slider-surface]:active,
      [arc-slider-surface]:focus-within
    ):not(:has([arc-slider-input]:disabled)) {
      ${jr}•size: var(${jr}•size•hover);
    }

    &:has([arc-slider-input]:disabled) {
      ${jr}•bg: var(--arc-slider-thumb-background-disabled, var(--arc-color-bg-neutral-mid));
      ${Ze}•progress•bg: var(--arc-slider-progress-background-disabled, var(--arc-color-bg-neutral-mid));
      ${Ze}•bg: var(--arc-slider-track-background-disabled, var(--arc-color-bg-disabled));
      ${jr}•shadow: var(--arc-slider-thumb-shadow-disabled, none);
    }

    ${jr}•shift: calc((var(${Ze}•height) - var(${jr}•size)) / 2);
    ${jr}•shift•anchor: calc((var(${Ze}•height) - var(${jr}•size•anchor)) / 2);

    ${Oe}•radius: var(--arc-border-radius-pill);
    ${Oe}•vx: calc((100% - var(${jr}•size)) * (var(--js•v, 0) / 100));
    ${Oe}•vx•anchor: calc((100% - var(${jr}•size•anchor)) * (var(--js•v, 0) / 100));

    ${jr}•cx•nudge: calc(
      (var(--js•v, 0) / 100 - 0.5) * (var(${jr}•size•anchor) - var(${jr}•size•rest))
    );

    ${Oe}•tx: calc(var(${Oe}•vx•anchor) + var(${jr}•cx•nudge));
    ${Oe}•ty: var(${jr}•shift•anchor);
  `,THUMB:l`
    appearance: none;
    width: var(${jr}•size);
    height: var(${jr}•size);
    border: none;
    background: var(${jr}•bg);
    translate: 0 0;
    box-sizing: border-box;
    border-radius: var(--arc-border-radius-circle);
    box-shadow: var(${jr}•shadow);
    transition-property: translate, width, height, background;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
  `,THUMB_FOCUS:l`
    outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
    outline-offset: var(--arc-slider-thumb-outline-offset, 0.125em);
  `,TRACK:l`
    display: flex;
    align-items: center;
    height: var(${Ze}•height);
    border-radius: var(${Oe}•radius);
    background: var(${Ze}•bg);
  `},fy=l`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-slider] {
    ${ho.BASE}
    font-size: initial;

    --arc-input-header-label-font-weight: var(--arc-slider-label-font-weight, unset);
    --arc-input-prefix-font-weight: var(--arc-slider-label-font-weight, var(--arc-font-weight-600));

    --arc-input-header-label-opacity: var(--arc-slider-label-opacity, unset);
    --arc-input-prefix-opacity: var(--arc-slider-label-opacity, unset);

    ::-webkit-inner-spin-button {
      appearance: none;
    }

    ::-webkit-list-button {
      appearance: none;
    }

    ::-moz-number-spin-box {
      display: none;
    }

    [arc-label-content] {
      display: contents;
    }

    > [input-element=body] {
      --arc-input-gap: var(${b}•16);
      --arc-input-padding-inline: 0;
      --arc-input-height: var(--arc-slider-input-height, unset);
      --arc-label-align-items: center;
    }

    [input-element=input-prefix] {
      --arc-input-element-font-size: max(12px, 0.75em);
    }

    [arc-slider-surface] {
      --arc-input-min-width: 3em;
      --arc-tooltip-text-align: center;
      --arc-tooltip-min-width: 2.5em;
    }

    [arc-slider-output] {
      --arc-input-text-align: center;
      --arc-input-width: var(--arc-slider-number-input-width, max(38px, 4ch));
      --arc-input-action-height: 100%;
      --arc-input-outline-offset: var(${b}•2); /* matches the Button component's outline-offset */
    }
  }

  /* CORE ----------------------------------------------------------• */

  [arc-slider] {
    max-width: var(--js•max•width, var(--arc-slider-max-width, 100%));

    [arc-slider-surface] {
      flex: 1;
      position: relative;
      display: flex;
      align-items: center;
      min-width: 0;
      height: var(${Ze}•height);
      border-radius: var(${Oe}•radius);

      -webkit-user-select: none;
      user-select: none;

      /* track progress (fill to thumb center); logical inset follows dir so RTL mirrors like native range */
      &::before {
        content: '';
        position: absolute;
        display: var(--arc-slider-progress-display, block);
        inset-block: calc(50% - var(${Ze}•height) / 2);
        inset-inline-start: 0;
        inset-inline-end: auto;
        width: calc(var(${jr}•size) / 2 + var(${Oe}•vx));
        height: var(${Ze}•height);
        border-radius: var(${Oe}•radius);
        background: var(${Ze}•progress•bg);
        pointer-events: none;
        transition: background 200ms ease-out;
      }

      &:has(:focus:focus-visible) {
        [arc-slider-thumb] { ${ho.THUMB_FOCUS} }
      }
    }

    [arc-slider-input] {
      ${ho.TRACK}

      &::-moz-range-track { ${ho.TRACK} }
      &::-moz-focus-outer { border: 0; }

      &::-moz-range-thumb { ${ho.THUMB} }
      &::-webkit-slider-thumb { ${ho.THUMB} }
    }

    &:has(
      [arc-slider-surface]:hover,
      [arc-slider-surface]:active,
      [arc-slider-surface]:focus-within
    ):not(:has([arc-slider-input]:disabled)) {
      [arc-slider-input]::-webkit-slider-thumb { translate: var(${jr}•cx•nudge) 0; }
      [arc-slider-input]::-moz-range-thumb { translate: var(${jr}•cx•nudge) 0; }

      &:dir(rtl) {
        [arc-slider-input]::-webkit-slider-thumb { translate: calc(-1 * var(${jr}•cx•nudge)) 0; }
        [arc-slider-input]::-moz-range-thumb { translate: calc(-1 * var(${jr}•cx•nudge)) 0; }
      }
    }

    [arc-slider-thumb] {
      position: absolute;
      width: var(${jr}•size•anchor);
      height: var(${jr}•size•anchor);
      inset-block-start: var(${Oe}•ty);
      inset-inline-start: var(${Oe}•tx);
      border-radius: var(${Oe}•radius);
      pointer-events: none;
    }
  }

  [arc-slider-captions] {
    position: absolute;
    inset: 0.5em 0 auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25em;
    color: var(--arc-color-fg-secondary);
  }

  [arc-slider-caption] {
    font-size: max(10px, 0.625em);
  }

  [arc-slider-output] {
    --arc-input-action-display: contents;
    --arc-button-height:  var(--arc-slider-output-button-height, 100%);

    /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
    --arc-input-suffix-opacity: var(--arc-slider-output-opacity, 61.2%);

    flex: none;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: max(6px, 0.375em);
  }
}

`,U0=(0,d.forwardRef)(({id:r,layout:e="hug",size:a="inherit",variant:t="solid",headerLabel:o,labelPlacement:n="top",displayPrecision:c=0,headerSlot:s,inputIdPrefix:u="arc-slider",inputProps:h,inputAction:p,inputSuffix:v,footerCaption:g,footerSlot:f,valueInputProps:m={},tooltipProps:$={},renderOutput:k,snapStep:A,style:y,...w},x)=>{const z=(0,d.useRef)(null),_=Nr(r,u),{minLabel:P,maxLabel:C,surfaceName:S,smallThumbAtRest:I=!1,onChange:B,value:N,min:V=0,max:Z=100,step:M=1,disabled:D,onKeyDown:T,onPointerDown:G,onPointerMove:cr,onPointerUp:gr,onPointerCancel:R,...er}=h,lr=Number(V),fr=Number(Z),rr=Math.min(lr,fr),dr=Math.max(lr,fr),xr=(0,d.useRef)(!1),sr=(0,d.useRef)(Number(N));xr.current||(sr.current=Number(N));const wr=(0,d.useCallback)((ee,pe)=>{if(xr.current){const Xe=Number(ee.value);Number.isFinite(Xe)&&(sr.current=Xe)}B?.(ee,pe)},[B]),F=(0,d.useCallback)(ee=>{xr.current=!0,sr.current=Number(N),G?.(ee)},[G,N]),K=(0,d.useCallback)(ee=>{xr.current=!1,gr?.(ee)},[gr]),J=(0,d.useCallback)(ee=>{xr.current=!1,R?.(ee)},[R]),j=V0({snapStep:A,min:rr,max:dr,step:Number(M),value:Number(N),onChange:wr,onKeyDown:T,onPointerDown:F,onPointerMove:cr,onPointerUp:K,onPointerCancel:J}),ir=xr.current?sr.current:N,yr=(0,d.useMemo)(()=>({...er,id:_,value:ir,min:rr,max:dr,step:M,disabled:D}),[er,_,ir,rr,dr,M,D]),{showTooltip:br=!1,text:H,...W}=$,{toValue:q,pctSigned:mr=0}=rh({value:Number(ir),min:Number(rr),max:Number(dr),step:Number(M)}),nr=(0,d.useMemo)(()=>({value:ir,toValue:va(q,Number(c)),pctSigned:va(mr,Number(c)),min:rr,max:dr}),[c,dr,rr,mr,q,ir]),hr=(0,d.useMemo)(()=>br?O0({text:H,...nr}):void 0,[br,H,nr]),X=(0,d.useMemo)(()=>Rr.onChangeHandler(j.onChange),[j.onChange]),pr=(0,d.useCallback)((ee,pe)=>{const Xe=String(ee.value??N??rr);B?.({...ee,value:Xe},pe)},[B,N,rr]),Lr=(0,d.useMemo)(()=>{const{deltaPerStep:ee,showValueInput:pe=!1,...Xe}=m;return k&&typeof k=="function"?k(nr):(v||pe||p)&&(0,i.jsxs)(i.Fragment,{children:[v&&(0,i.jsx)(Rr.InputSuffix,{htmlFor:_,children:O0({text:v,...nr})}),pe&&(0,i.jsx)(uo,{"arc-slider-number-input":"",layout:"hug",size:a,variant:t,inputProps:{onKeyDown:j.onKeyDown,onPointerDown:j.onPointerDown,onPointerMove:j.onPointerMove,onPointerUp:j.onPointerUp,onPointerCancel:j.onPointerCancel,...Xe,...yr,id:`${_}-text`,type:"number",appearance:"textfield",wheelControl:ee?{deltaPerStep:ee}:void 0,onChange:pr}}),p&&(0,i.jsx)(Rr.InputAction,{children:p})]})},[m,v,p,k,nr,_,a,t,yr,j.onKeyDown,j.onPointerDown,j.onPointerMove,j.onPointerUp,j.onPointerCancel,pr]),_r=(0,d.useMemo)(()=>!!o,[o]),Er=(0,d.useMemo)(()=>_r&&n==="top",[_r,n]),Ur=(0,d.useMemo)(()=>_r&&n==="inline",[_r,n]),Fr=(0,d.useMemo)(()=>!!(Er||s),[Er,s]),Hr=(0,d.useMemo)(()=>!!(g||f),[g,f]),We=(0,d.useMemo)(()=>({...y,"--js\u2022v":String(q)}),[y,q]);return(0,i.jsxs)(Rr.Wrapper,{...w,"arc-slider":"","arc-input":"range",layout:e,size:a,style:We,children:[Fr&&(0,i.jsxs)(Rr.Header,{children:[Er&&(0,i.jsx)(Rr.HeaderLabel,{htmlFor:_,children:o}),!!s&&(0,i.jsx)(Rr.Spacer,{}),(0,i.jsx)(Rr.HeaderSlot,{children:s})]}),(0,i.jsxs)(Rr.InputBody,{children:[Ur&&(0,i.jsx)(Rr.InputPrefix,{htmlFor:_,children:o}),(0,i.jsxs)("span",{"arc-slider-surface":S??"","has-small-thumb":I?"":void 0,children:[(0,i.jsx)("label",{"arc-slider-thumb":"",ref:z,htmlFor:_,"aria-hidden":!0}),(0,i.jsx)(mc,{...W,isEnabled:br&&!D,text:hr||String(ir),alternateAnchor:z,children:(0,i.jsx)("input",{...er,onKeyDown:j.onKeyDown,onPointerDown:j.onPointerDown,onPointerMove:j.onPointerMove,onPointerUp:j.onPointerUp,onPointerCancel:j.onPointerCancel,ref:x,id:_,"arc-slider-input":"","arc-input-type":"range",type:"range",value:ir,min:rr,max:dr,step:M,disabled:D,"aria-disabled":D,onChange:X})}),(P||C)&&(0,i.jsxs)("span",{"arc-slider-captions":"",children:[P&&(0,i.jsx)("label",{"arc-slider-caption":"min",htmlFor:_,children:P}),!!C&&(0,i.jsx)(Rr.Spacer,{}),C&&(0,i.jsx)("label",{"arc-slider-caption":"max",htmlFor:_,children:C})]})]}),Lr&&(0,i.jsx)("span",{"arc-slider-output":"",children:Lr})]}),Hr&&(0,i.jsxs)(Rr.Footer,{children:[(0,i.jsx)(Rr.FooterCaption,{children:g}),!!f&&(0,i.jsx)(Rr.Spacer,{}),(0,i.jsx)(Rr.FooterSlot,{children:f})]})]})});U0.displayName="ArcSlider";const Tl=U0;zr("ArcSlider",fy);const Pl=({inputProps:r,snapStep:e,...a})=>{const{id:t,...o}=r;return(0,i.jsx)(Tl,{"arc-color-slider":r.surfaceName,...a,snapStep:e,inputIdPrefix:t,inputProps:o})},my=196.6,G0="arc-color-solid-preview",Rl=new WeakMap,Ll=(r,e)=>{const a=r.getContext("2d",{alpha:!1});if(!a)return;const{width:t,height:o}=r;if(!t||!o)return;const n=`${t}:${o}:${e}`;if(Rl.get(r)===n)return;const c=a.createImageData(t,o),s=c.data;let u=0;for(let h=0;h<o;h+=1){const p=1-(o<=1?0:h/(o-1)),v=Ve({h:e,s:0,v:p,a:1}),g=Ve({h:e,s:1,v:p,a:1}),{r:f,g:m,b:$}=v,{r:k,g:A,b:y}=g;for(let w=0;w<t;w+=1){const x=t<=1?0:w/(t-1);s[u++]=be(f+(k-f)*x),s[u++]=be(m+(A-m)*x),s[u++]=be($+(y-$)*x),s[u++]=255}}a.putImageData(c,0,0),Rl.set(r,n)},by=(0,d.memo)(function({value:e,label:a,step:t=.01,stepLarge:o=.1,isDisabled:n=!1,showLabel:c=!1,labels:s,onChange:u}){const h=s??ue,p=a??h.colorField,v=Nr(void 0,"color-field"),g=(0,d.useRef)(null),f=(0,d.useRef)(null),m=(0,d.useRef)(!1),$=(0,d.useRef)(null),k=(0,d.useRef)(null),A=(0,d.useRef)(null),y=(0,d.useRef)(null),w=(0,d.useRef)(null),x=(0,d.useRef)(null),[z,_]=(0,d.useState)(!1),[P,C]=(0,d.useState)(null),[S,I]=(0,d.useState)(null),B=ar(P?.saturation??e.saturation,0,1),N=ar(P?.value??e.value,0,1);la(()=>{A.current==null&&C(null)},[e.hue,e.saturation,e.value]);const V=Math.round(B*100),Z=Math.round(N*100),M=(0,d.useMemo)(()=>{const F=e.hue;return typeof F=="number"&&Number.isFinite(F)?F:my},[e.hue]),D=(0,d.useMemo)(()=>Fs(M),[M]),T=(0,d.useCallback)((F,K,J="commit")=>{u({hue:M,saturation:ar(F,0,1),value:ar(K,0,1)},J)},[M,u]),G=(0,d.useCallback)(()=>{m.current&&(m.current=!1,C(null),T(B,N,"commit"))},[T,B,N]),cr=(0,d.useCallback)((F,K)=>{const J=ar(F,0,1),j=ar(K,0,1);m.current=!0,C({saturation:J,value:j}),T(J,j,"preview")},[T]),gr=(0,d.useCallback)(F=>{const K=f.current;if(!K||!m.current)return;const J=F.relatedTarget;J instanceof Node&&K.contains(J)||G()},[G]),R=(0,d.useCallback)((F,K,J,j="preview")=>{const ir=ar((F-J.left)/J.width,0,1),yr=ar((K-J.top)/J.height,0,1),br=ir,H=1-yr;j==="preview"&&C({saturation:br,value:H}),T(br,H,j)},[T]),er=(0,d.useCallback)(F=>{if(n)return;F.preventDefault(),F.stopPropagation(),m.current=!1;const{clientX:K,clientY:J,pointerId:j,currentTarget:ir}=F,yr=ir.getBoundingClientRect();A.current=j,k.current=yr,y.current={clientX:K,clientY:J},w.current=null,x.current=null,ir.focus(),ir.setPointerCapture(j),_(!0),R(K,J,yr)},[n,R]),lr=(0,d.useCallback)(F=>{if(n)return;const{clientX:K,clientY:J,currentTarget:j,pointerId:ir}=F;if(A.current!==ir)return;const yr=k.current??j.getBoundingClientRect();if(F.shiftKey){const br=y.current;if(br){if(w.current===null){const mr=Math.abs(K-br.clientX),nr=Math.abs(J-br.clientY);w.current=mr>=nr?"s":"v",x.current={clientX:K,clientY:J}}const H=x.current??br,W=w.current==="s"?K:H.clientX,q=w.current==="v"?J:H.clientY;R(W,q,yr);return}}else w.current=null,x.current=null;R(K,J,yr)},[n,R]),fr=(0,d.useCallback)(()=>{const F=A.current!=null;A.current=null,k.current=null,y.current=null,w.current=null,x.current=null,_(!1),C(null),m.current=!1,F&&T(B,N,"commit")},[T,B,N]),rr=(0,d.useCallback)(F=>{if(n)return;const K=F.shiftKey?o:t;let J=B,j=N;switch(F.key){case"ArrowLeft":J=B-K;break;case"ArrowRight":J=B+K;break;case"ArrowUp":j=N+K;break;case"ArrowDown":j=N-K;break;case"Home":J=0,j=1;break;case"End":J=1,j=0;break;default:return}F.preventDefault(),cr(J,j)},[n,t,o,cr,B,N]),dr=(0,d.useCallback)(F=>{if(n||!F.key.startsWith("Arrow"))return;const K=F.shiftKey?o:t,J=F.key==="ArrowLeft"||F.key==="ArrowDown"?-K:K;F.preventDefault(),cr(B+J,N)},[n,t,o,cr,B,N]),xr=(0,d.useCallback)(F=>{if(n||!F.key.startsWith("Arrow"))return;const K=F.shiftKey?o:t,J=F.key==="ArrowLeft"||F.key==="ArrowDown"?-K:K;F.preventDefault(),cr(B,N+J)},[n,t,o,cr,B,N]),sr=(0,d.useMemo)(()=>({"--js\u2022s":String(B),"--js\u2022v":String(1-N)}),[B,N]),wr=(0,d.useRef)(D);return wr.current=D,la(()=>{const F=g.current,K=$.current;if(!F||!K)return;const J=()=>{const H=F.getBoundingClientRect(),W=Math.max(1,Math.round(H.width)),q=Math.max(1,Math.round(H.height)),mr=typeof window>"u"?1:Math.max(window.devicePixelRatio||1,1),nr=Math.max(1,Math.round(W*mr)),hr=Math.max(1,Math.round(q*mr));K.width!==nr&&(K.width=nr),K.height!==hr&&(K.height=hr),Ll(K,wr.current)};J();const j=new ResizeObserver(()=>{J()});j.observe(F);const ir=()=>{Rl.delete(K),J()};K.addEventListener("contextrestored",ir);const yr=F.closest("[arc-color-picker]"),br=H=>{const{detail:W}=H,q=W?.h;typeof q!="number"||!Number.isFinite(q)||Ll(K,Fs(q))};return yr?.addEventListener(G0,br),()=>{j.disconnect(),K.removeEventListener("contextrestored",ir),yr?.removeEventListener(G0,br)}},[]),la(()=>{const F=$.current;F&&Ll(F,D)},[D]),(0,i.jsxs)("div",{ref:f,"arc-color-field":"","is-disabled":n?"":void 0,"is-interacting":z?"":void 0,"sr-focus":S??void 0,onBlurCapture:gr,children:[c&&!!p&&(0,i.jsx)("label",{htmlFor:v,children:p}),(0,i.jsxs)("div",{id:v,ref:g,"arc-color-surface":"field",style:sr,tabIndex:n?-1:0,role:"application","aria-label":p,"aria-describedby":`${v}-readout`,onPointerDown:er,onPointerMove:lr,onPointerUp:fr,onPointerCancel:fr,onKeyDown:rr,children:[(0,i.jsx)("canvas",{ref:$,"arc-color-field-canvas":"","aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-thumb":"","aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-slice":"saturation","has-focus":S==="saturation"?"":void 0,"aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-slice":"value","has-focus":S==="value"?"":void 0,"aria-hidden":"true"})]}),(0,i.jsxs)("div",{"arc-color-field-sr":"","aria-hidden":!1,children:[(0,i.jsx)("div",{"arc-color-field-sr-slider":"saturation",role:"slider",tabIndex:n?-1:0,"aria-label":h.saturation,"aria-orientation":"horizontal","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":V,onKeyDown:dr,onFocus:()=>I("saturation"),onBlur:()=>I(null)}),(0,i.jsx)("div",{"arc-color-field-sr-slider":"value",role:"slider",tabIndex:n?-1:0,"aria-label":h.value,"aria-orientation":"vertical","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Z,onKeyDown:xr,onFocus:()=>I("value"),onBlur:()=>I(null)})]}),(0,i.jsx)("div",{id:`${v}-readout`,"arc-color-field-readout":"","arc-color-field-sr":"",children:h.colorFieldReadout(V,Z)})]})}),K0=({getValue:r,onStep:e,min:a,max:t,step:o,stepLarge:n})=>(0,d.useCallback)(c=>{vy(c,{getValue:r??(()=>Number(c.currentTarget.value)),onStep:e,min:a,max:t,step:o,stepLarge:n})},[r,e,a,t,o,n]),$y=({hsv:r,draftValue:e,label:a,showLabel:t=!1,setIsEditing:o,commitDraft:n,setDraftValue:c,labels:s})=>{const h=a??(s??ue).opacity,p=Nr(void 0,"alpha-input"),{onFocus:v,onBlur:g,onKeyDown:f}=L0({commitDraft:n,setIsEditing:o,onRevert:()=>c(Vs(r.a))}),m=K0({min:0,max:100,getValue:()=>Number(e),onStep:A=>{const y=String(A);c(y),n(y)}}),$=B0(m,f),k=({value:A})=>{const y=String(A??1);c(y),n(y,{phase:"preview"})};return(0,i.jsx)(uo,{"arc-color-input":"alpha",size:"md",variant:"solid",inputSuffix:"%",headerLabel:t?h:void 0,inputProps:{id:p,"aria-label":h,placeholder:"...",value:e,type:"number",appearance:"textfield",min:0,max:100,step:1,onFocus:v,onBlur:g,onKeyDown:$,onChange:k}})},yy=r=>Ue({...r,a:1},!1).replace(/^#/,""),W0={kind:"hex"},X0={kind:"alpha"},q0=(0,d.memo)(function({state:e,tools:a,isSimpleMode:t,expandHexShorthand:o,isUnsetColorInTools:n=!1,labels:c}){const s=c??ue,{interaction:u,isUnset:h,commitColor:p,commitUnset:v,previewColor:g,startPreview:f,endPreview:m,editFocus:$,editInput:k,editBlur:A}=e,y=e.displayHsv,w=e.model.hsv,x=(0,d.useRef)(w),z=(0,d.useMemo)(()=>Ve(y),[y]),_=(0,d.useMemo)(()=>yy(z),[z]),P=(0,d.useMemo)(()=>Vs(y.a),[y.a]),C=vl(W0,h?"":_,u),S=vl(X0,h?"":P,u),I=(0,d.useMemo)(()=>!a||a.length===0?null:{colorField:a.includes("color-field"),hueSlider:a.includes("hue-slider"),alphaSlider:a.includes("alpha-slider"),sliderTools:a.includes("hue-slider")||a.includes("alpha-slider"),hexInput:a.includes("hex-input"),alphaInput:a.includes("alpha-input"),inputTools:a.includes("hex-input")||a.includes("alpha-input"),alphaTools:a.includes("alpha-slider")||a.includes("alpha-input"),eyeDropper:x0()&&a.includes("eye-dropper")},[a]),B=I?.alphaTools??!1,N=(0,d.useCallback)(F=>F?$(W0,h?"":_):A(),[$,A,_,h]),V=(0,d.useCallback)(F=>F?$(X0,h?"":P):A(),[$,A,P,h]),Z=(0,d.useCallback)((F,K)=>{const J=At(F??C);if(!M1(J,o??!1,B,K))return;const j=Ve(w),ir=uh(J,j,{shouldApplyParsedAlpha:K?.applyHexAlpha===!0}),yr=K?.phase??"commit";if(!ir)return;if(ih(ir,j)&&yr==="preview"){g(w);return}const br=Vc(ir,w.h);yr==="preview"?g(br):p(br)},[C,o,B,w,g,p]),M=(0,d.useCallback)((F,K)=>{const J=sh(F??S);if(J==null)return;const j={...w,a:J};(K?.phase??"commit")==="preview"?g(j):p(j)},[S,w,g,p]),D=(0,d.useCallback)(()=>{m(),p(x.current)},[m,p]),{createInputProps:T}=m0({onCommit:D}),G=(0,d.useCallback)((F,K)=>{const J={...w,...F};x.current=J,u.status!=="previewing"&&f(K),g(J)},[w,u.status,f,g]),cr=(0,d.useCallback)((F,K="commit")=>{const J={...w,s:F.saturation,v:F.value};K==="preview"?(x.current=J,u.status!=="previewing"&&f({kind:"color-field"}),g(J)):p(J)},[w,u.status,f,g,p]),gr=(0,d.useMemo)(()=>T(F=>G({h:ar(F,Ge.HUE_MIN,Ge.HUE_MAX)},{kind:"hue-slider"}),()=>{}),[T,G]),R=(0,d.useMemo)(()=>T(F=>G({a:ar(F/100,0,1)},{kind:"alpha-slider"}),()=>{}),[T,G]),er=(0,d.useCallback)(F=>p(Xc(F,"#000000")),[p]),lr=ar(Math.round(y.a*100),Ge.ALPHA_MIN,Ge.ALPHA_MAX),fr=(0,d.useMemo)(()=>({hue:y.h,saturation:y.s,value:y.v}),[y]),rr=(0,d.useMemo)(()=>({text:s.hueValue(Math.round(y.h)),showTooltip:!0}),[y.h,s]),dr=(0,d.useMemo)(()=>({text:s.opacityValue(lr),showTooltip:!0}),[lr,s]);if(!I)return null;const xr=I.hexInput&&(0,i.jsx)(ly,{hsv:y,draftValue:C,isUnset:h,setIsEditing:N,commitDraft:Z,setDraftValue:k,expandHexShorthand:o,hasAlphaTools:B,labels:c}),sr=n&&!t&&(0,i.jsx)(M0,{isUnset:h,onSelect:v,labels:s}),wr=I.eyeDropper&&(0,i.jsx)(j1,{onColorPicked:er,labels:c});return(0,i.jsx)("div",{"arc-color-tools":t?"simple":"solid","arc-color-picker-section":"tools",children:t?(0,i.jsxs)(i.Fragment,{children:[xr,wr,I.alphaSlider&&(0,i.jsx)(Pl,{headerLabel:s.opacity,tooltipProps:dr,snapStep:Ge.ALPHA_SNAP_STEP,inputProps:{id:"alpha-slider",surfaceName:"alpha",min:Ge.ALPHA_MIN,value:lr,max:Ge.ALPHA_MAX,step:1,"aria-label":s.opacity,...R}})]}):(0,i.jsxs)(i.Fragment,{children:[I.colorField&&(0,i.jsx)(by,{value:fr,onChange:cr,labels:c}),wr,I.sliderTools&&(0,i.jsxs)("div",{"arc-color-sliders":"",children:[I.hueSlider&&(0,i.jsx)(Pl,{tooltipProps:rr,snapStep:Ge.HUE_SNAP_STEP,inputProps:{id:"hue-slider",surfaceName:"hue",min:Ge.HUE_MIN,value:y.h,max:Ge.HUE_MAX,step:1,"aria-label":s.hue,...gr}}),I.alphaSlider&&(0,i.jsx)(Pl,{tooltipProps:dr,snapStep:Ge.ALPHA_SNAP_STEP,inputProps:{id:"alpha-slider",surfaceName:"alpha",min:Ge.ALPHA_MIN,value:lr,max:Ge.ALPHA_MAX,step:1,"aria-label":s.opacity,...R}})]}),sr,I.inputTools&&(0,i.jsxs)("div",{"arc-color-inputs":"",children:[xr,I.alphaInput&&(0,i.jsx)($y,{hsv:y,showLabel:!I.hexInput,draftValue:S,setIsEditing:V,commitDraft:M,setDraftValue:k,isUnset:h,labels:c})]})]})})}),$e=l`--arc•radio`,xy=l`
@layer arc-components {

  [arc-radio] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${$e}•font•size: 1em;
      ${$e}•icon•size: 0.625em;
      ${$e}•size: 1.125em;
      ${$e}•gap: 0.5em;
    }

    &[data-size=md] {
      ${$e}•font•size: var(${b}•14);
      ${$e}•icon•size: var(${b}•10);
      ${$e}•size: var(${b}•18);
      ${$e}•gap: var(${b}•8);
    }

    &[data-size=sm] {
      ${$e}•font•size: var(${b}•12);
      ${$e}•icon•size: var(${b}•10);
      ${$e}•size: var(${b}•16);
      ${$e}•gap: var(${b}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${Y}•border•radius: var(--arc-border-radius-circle);
    ${Y}•size: var(${$e}•size);
    ${Y}•icon•size: var(${$e}•icon•size);
    ${Y}•width: var(${$e}•size);
    ${Y}•height: var(${$e}•size);
    ${Y}•translate: 0 var(${b}•1m);

    /* for: ArcLabel */
    --arc-label-gap: var(${$e}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio]:not([hidden]) {
    font-size: var(${$e}•font•size);
    display: var(--arc-radio-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked)) {
      ${Y}•color: transparent;
      ${Y}•background: transparent;
      ${Y}•border•color: var(--arc-color-border-stark);

      &:hover {
        ${Y}•background: var(--arc-color-bg-theme-subtle);
        ${Y}•border•color: var(--arc-color-border-theme-heavy);
      }

      &:has(:disabled) {
        ${Y}•background: var(--arc-color-bg-disabled);
        ${Y}•border•color: var(--arc-color-border-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* CHECKED, ?NOT-DISABLED+HOVER, ?DISABLED */
    &:has(:checked) {
      ${Y}•color: var(--arc-color-fg-on-theme-heavy);
      ${Y}•background: var(--arc-color-bg-theme-heavy);
      ${Y}•border•color: transparent;

      &:not(:has(:disabled)):hover {
        ${Y}•background: var(--arc-color-bg-theme-stark);
      }

      &:has(:disabled) {
        ${Y}•color: var(--arc-color-fg-on-theme-mid);
        ${Y}•background: var(--arc-color-bg-theme-mid);
      }
    }
  }

}
`,ky=$r(ca,["hug","fill"]),wy=$r(ke,["inherit","md","sm"]),Y0=({children:r,label:e,layout:a,size:t="md",useMask:o=!0,...n})=>{const{className:c,title:s,...u}=n,h={className:c,title:s},p=r??e,v=(0,i.jsx)(Jo,{...u,type:"radio"}),g=o&&(0,i.jsxs)(Ic,{type:"radio",children:[v,(0,i.jsx)(Sr,{icon:"fa-solid fa-circle-small arc-fw"})]}),f=!!p&&(0,i.jsxs)(yt,{layout:a,children:[g||v,(0,i.jsx)(xt,{children:p})]});return(0,i.jsx)("span",{...h,"arc-radio":"","data-size":t,children:f||g||v})};zr("ArcRadio",xy);const _t=l`--arc•rb`,le=l`${_t}•o`,bn=l`${le}•icon`,$n=l`${le}•text`,Z0=l`${_t}•fs`,J0=l`${_t}•br`,Ml=l`${_t}•di`,jl=l`${_t}•pd`,Dl=l`${_t}•gp`,Ol=l`${_t}•bg`,it=l`${le}•fg`,st=l`${le}•bg`,gi=l`${le}•bc`,Nl=l`${le}•bw`,Q0=l`${le}•bs`,yn=l`${le}•br`,Bl=l`${le}•fw`,Fl=l`${le}•ol`,Hl=l`${le}•ow`,rp=l`${le}•oo`,ep=l`${le}•lh`,po={BAR:l`
    ${Z0}: var(${b}•14); /* font size */
    ${J0}: var(${b}•8); /* border radius */

    &:is([data-layout=hug], :not([data-layout])) { /** @default */
      ${Ml}: inline-flex;
    }

    &[data-layout=fill] {
      ${Ml}: flex;
    }
  `,OPTIONS:l`
    ${it}: var(--arc-color-fg-secondary);
    ${st}: transparent;
    ${gi}: transparent;
    ${Nl}: var(${b}•1);
    ${ep}: calc(var(${le}•sz) - var(${Nl}) * 2);
    ${Hl}: var(${b}•2);
    ${rp}: 0;
  `,COMMON:l`
    ${Ol}: var(--arc-color-bg-secondary);
    ${jl}: var(${b}•4);
    ${Dl}: var(${b}•2);

    ${yn}: var(${b}•6);

    /* Common sizes */
    &:is([data-size=lg], :not([data-size])) { /* @default */
      ${le}•sz: var(${b}•32);
      ${bn}•pd: var(${b}•8);
      ${$n}•pd: var(${b}•12);
    }

    &[data-size=md] {
      ${le}•sz: var(${b}•24);
      ${bn}•pd: var(${b}•6);
      ${$n}•pd: var(${b}•8);
    }
  `,COMMON_OPTION_STATES:l`
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${it}: var(--arc-color-fg-on-hover-default);
        ${st}: var(--arc-color-bg-hover-default);
      }
    }

    &:has(:checked) {
      ${it}: var(--arc-color-mono-black);
      ${st}: var(--arc-color-mono-white);
      ${Bl}: var(--arc-font-weight-500);

      &:not(:has(:disabled)) {
        ${Q0}: var(--arc-shadow-sm);
      }
    }

    &:has(:disabled) {
      ${it}: var(--arc-color-fg-disabled);

      &:has(:checked) {
        ${st}: var(--arc-color-bg-disabled);
        ${gi}: var(--arc-color-border-disabled);
      }
    }

    &:has(:focus-within:focus-visible) {
      ${Fl}: var(${Hl}) solid var(--arc-color-border-focus);
    }
  `,SOLID:l`
    ${Ol}: transparent;
    ${jl}: 0;
    ${Dl}: var(${b}•4);

    ${yn}: var(${b}•8);

    /* Solid sizes */
    &:is([data-size=lg], :not([data-size])) {
      ${le}•sz: var(${b}•40);
      ${bn}•pd: var(${b}•8);
      ${$n}•pd: var(${b}•12);
    }

    &[data-size=md] {
      ${le}•sz: var(${b}•32);
      ${bn}•pd: var(${b}•6);
      ${$n}•pd: var(${b}•10);
    }
  `,SOLID_OPTION_STATES:l`
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${it}: var(--arc-color-fg-on-hover-default);
        ${st}: var(--arc-color-bg-hover-subtle);
      }
    }

    &:has(:checked) {
      ${it}: var(--arc-color-fg-primary);
      ${st}: var(--arc-color-bg-secondary);
      ${Bl}: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${it}: var(--arc-color-fg-disabled);

      &:has(:checked) {
        ${st}: var(--arc-color-bg-disabled);
        ${gi}: var(--arc-color-border-disabled);
      }
    }

    &:has(:focus-within:focus-visible) {
      ${Fl}: var(${Hl}) solid var(--arc-color-border-focus);
    }
  `},Ay=l`
@layer arc-components {

  [arc-radio-bar] {
    ${po.BAR}
    ${po.OPTIONS}

    /* Inter-Component Communication -------------------------------• */
    --arc-label-opacity-disabled: 1; /* intrinsic disabled opacity not needed here; letting tokens handle it */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */

    /* VARIANTS ----------------------------------------------------• */
    &:is([data-variant=common], :not([data-variant])) { /* @default */
      ${po.COMMON}

      [arc-radio-bar-option] {
        ${po.COMMON_OPTION_STATES}
      }
    }

    &[data-variant=solid] {
      ${po.SOLID}

      [arc-radio-bar-option] {
        ${po.SOLID_OPTION_STATES}
      }
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
    box-shadow: var(${Q0}, none);
    border-radius: var(${yn});
  }

  [arc-radio-bar]:not([hidden]) {
    font-size: var(--arc-radio-bar-font-size, var(${Z0}));
    display: var(${Ml});
    gap: var(${Dl});
    border-radius: var(${J0});
    background: var(${Ol});
    padding: var(${jl});
    margin: 0;

    [arc-radio] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${yn});
      outline: var(${Fl}, none);
      outline-offset: var(${rp});
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
      line-height: var(${ep});
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${le}•sz);
      min-width: var(${le}•sz);

      border-radius: var(${yn});
      border: var(${Nl}) solid var(${gi});
      background: var(${st});
      color: var(${it});
      font-weight: var(${Bl}, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${$n}•pd);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${bn}•pd);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,Sy=$r(ca,["hug","fill"]),Cy=$r(ke,["lg","md"]),Ey=$r(Yr,["common","solid"]),Vl=({children:r,label:e,icon:a,name:t,value:o,...n})=>{const c=r||(0,i.jsx)(ie,{icon:a,text:e});return(0,i.jsx)("li",{"arc-radio-bar-option":"","data-is-checked":n?.checked||void 0,children:(0,i.jsx)(Y0,{...n,name:t,value:o,label:c,layout:"fill",useMask:!1,onChange:n.onChange??Zt})})},ap=({children:r,size:e="lg",layout:a="hug",variant:t="common",name:o,options:n,value:c,isDisabled:s,onChange:u,...h})=>{const p=Nr(o,"arc-radio-bar");return(0,i.jsx)("ul",{...h,"arc-radio-bar":"","data-size":e,"data-layout":a,"data-variant":t,"is-disabled":s?"":void 0,role:"radiogroup",children:n?n.map(({hidden:v,onChange:g,value:f,...m})=>v||f==null||f===""?null:(0,d.createElement)(Vl,{...m,key:String(f),name:p,value:f,checked:c===f,disabled:s||m.disabled,onChange:g??u??Zt})):r})};zr("ArcRadioBar",Ay);const zy=(r,e)=>r==="gradient"?e.panelGradient:e.panelSolid,_y=({canTogglePanels:r,panels:e,activePanel:a,setActivePanel:t,labels:o=ue})=>(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)("div",{"arc-color-picker-section":"control",children:(0,i.jsx)(ap,{layout:"fill",size:"md",children:e.map(n=>(0,i.jsx)(Vl,{name:"color-picker-panel",value:n,label:zy(n,o),checked:n===a,onChange:()=>t(n)},n))})})}),{STOP_MIN:Ul,STOP_MAX:Gl}=or,Iy=(0,d.memo)(function({stop:e,stopIndex:a,sortedIndex:t,value:o,isEditing:n,isEditingColor:c,isAnyColorEditing:s,labels:u,onFocus:h,onInput:p,onCommit:v,onRevert:g,onOpenColorEdit:f,onRegisterAnchor:m,onInsertStopAt:$,onDelete:k}){const A=u??ue,y=t+1,w=Nr(void 0,"gradient-stop-row-anchor"),x=Nr(void 0,"gradient-stop-input"),z=(0,d.useRef)(null),_=(0,d.useRef)(t),P=K0({min:Ul,max:Gl,getValue:()=>Number(o),onStep:V=>{const Z=String(V);p(Z),v(Z,!1)}}),C=(0,d.useCallback)(V=>{if(V.key==="Enter"){V.preventDefault(),v(void 0,!0),V.currentTarget.blur();return}V.key==="Escape"&&(V.preventDefault(),g(),V.currentTarget.blur())},[v,g]),S=B0(P,C),I=(0,d.useCallback)(()=>v(void 0,!0),[v]),B=(0,d.useCallback)(({value:V})=>p(String(V??o)),[p,o]);(0,d.useLayoutEffect)(()=>{if(!n){_.current=t;return}if(_.current===t)return;_.current=t;const V=z.current;if(!V)return;const{selectionStart:Z,selectionEnd:M}=V;V.focus({preventScroll:!0}),Z!=null&&M!=null&&V.setSelectionRange(Z,M)},[n,t]),(0,d.useLayoutEffect)(()=>{m?.(a,w)},[m,w,a]);const N=n?o:String(ar(e.at,Ul,Gl));return(0,i.jsxs)("li",{"arc-gradient-stop-row":"",id:w,"is-editing-color":c?"":void 0,children:[t>0&&(0,i.jsx)("span",{"arc-gradient-stop-insert":"",children:(0,i.jsx)(Or,{_isCustom:!0,icon:"fa-solid fa-plus fa-2xs",onClick:()=>$(t),tooltip:A.insertColorStop,isDisabled:s})}),(0,i.jsx)(gn,{kind:"gradient-stop",color:e.color,onClick:()=>f(a,w)}),(0,i.jsx)(uo,{ref:z,"arc-color-input":"stop",inputProps:{type:"number",appearance:"textfield",id:x,"aria-label":A.stopPosition(y),value:N,min:Ul,max:Gl,step:1,onFocus:h,onBlur:I,onKeyDown:S,onChange:B,wheelControl:{deltaPerStep:24}},size:"md",variant:"solid",inputSuffix:"%"}),(0,i.jsx)("span",{"row-spacer":""}),(0,i.jsx)(Or,{layout:"icon",size:"sm",icon:"fa-regular fa-trash",variant:"tertiary",tooltip:A.removeColorStop,onClick:()=>k(a),isDisabled:s})]})}),tp=({children:r,sectionName:e,content:a,...t})=>(0,i.jsxs)("header",{"arc-color-section-header":e??"",...t,children:[(0,i.jsx)(ie,{...typeof a=="object"?a:{text:a},size:"sm",isStrong:!0}),r]}),{STOP_MIN:Kl,STOP_MAX:Wl}=or,Ty=r=>({kind:"stop-at",stopId:r}),Py=({state:r,isEmpty:e=!1,onAddGradient:a,editFallbackColor:t="#000000",format:o=Je.format,labels:n})=>{const c=n??ue,{interaction:s,commitGradient:u,commitUnset:h,previewGradient:p,editFocus:v,editInput:g,editBlur:f}=r,m=r.displayGradient,$=(0,d.useMemo)(()=>m.stops??[],[m.stops]),k=(0,d.useMemo)(()=>fa($),[$]),[A,y]=(0,d.useState)([]),w=(0,d.useRef)(0),x=(0,d.useCallback)(()=>(w.current+=1,`gradient-stop-${w.current}`),[]),z=Nr(void 0,"gradient-stop-edit-popover"),[_,P]=(0,d.useState)(null),C=(0,d.useRef)(null),[S,I]=(0,d.useState)(),[B,N]=(0,d.useState)(t),[V,Z]=(0,d.useState)(!1),[M,D]=(0,d.useState)(!1),[T,G]=(0,d.useState)(),[cr,gr]=(0,d.useState)(0),R=(0,d.useRef)(!1),er=(0,d.useRef)(null),lr=(0,d.useCallback)(()=>ga.handlePopover?.(z,"show"),[z]),fr=(0,d.useCallback)(()=>ga.handlePopover?.(z,"hide"),[z]);(0,d.useEffect)(()=>{y(X=>X.length===$.length?X:X.length<$.length?[...X,...Array.from({length:$.length-X.length},()=>x())]:X.slice(0,$.length))},[x,$.length]);const rr=(0,d.useCallback)(X=>u({...m,stops:X}),[u,m]),dr=(0,d.useCallback)(X=>{const pr=fa(X);y(Lr=>pr.map(_r=>Lr[_r.index]??x())),rr(pr.map(Lr=>Lr.stop))},[x,rr]),xr=(0,d.useCallback)(X=>s.status==="editingText"&&s.field.kind==="stop-at"&&s.field.stopId===X?s.draft:void 0,[s]),sr=(0,d.useCallback)((X,pr,Lr,_r,Er,Ur)=>{const Fr=$[X];if(!Fr){f();return}const Hr=Lr??xr(pr)??String(Fr.at),We=Number(Hr);if(Number.isNaN(We)){f();return}const ee=ar(We,Kl,Wl),pe=_r||rl(Er,Ur,ee),Xe={...Fr,at:ee},Be=$.map((yo,Ci)=>Ci===X?Xe:yo);ee!==Fr.at?pe?dr(Be):rr(Be):pe&&dr($),f()},[$,xr,f,dr,rr]),wr=(0,d.useCallback)((X,pr)=>{const Lr=$[X],_r=Number(pr);if(!Lr||Number.isNaN(_r))return;const Er=ar(_r,Kl,Wl),Ur=$.map((Fr,Hr)=>Hr===X?{...Fr,at:Er}:Fr);p({...m,stops:Ur})},[$,m,p]),F=(0,d.useCallback)((X={kind:"append"})=>{const pr=$.length,Lr=X.kind==="append"?zh($):[...$,Eh($,X)];er.current=pr,y(_r=>[..._r,x()]),rr(Lr)},[x,$,rr]),K=(0,d.useCallback)(X=>{C.current===X&&(fr(),C.current=null,P(null),Z(!1));const pr=$.filter((Lr,_r)=>_r!==X);if(y(Lr=>Lr.filter((_r,Er)=>Er!==X)),pr.length===0){h();return}rr(pr)},[h,$,fr,rr]),J=(0,d.useCallback)(()=>{$.length<2||dr(Sh($))},[dr,$]),j=(0,d.useCallback)(X=>F({kind:"between",sortedIndex:X}),[F]),ir=(0,d.useCallback)((X,pr,Lr)=>{if(!$[X])return;const Er=$.map((Ur,Fr)=>Fr===X?{...Ur,color:pr}:Ur);Lr==="preview"?p({...m,stops:Er}):rr(Er)},[$,m,p,rr]),yr=(0,d.useCallback)(()=>{fr(),C.current=null,P(null),Z(!1)},[fr]),br=(0,d.useCallback)((X,pr)=>{const Lr=$[X];if(!Lr)return;const _r=C.current!=null;C.current=X,D(!0),P(X),I(pr),N(Lr.color),_r?gr(Er=>Er+1):(R.current=!0,G(pr))},[$]),H=(0,d.useCallback)((X,pr)=>{if(C.current===X){yr();return}br(X,pr)},[yr,br]),W=(0,d.useCallback)((X,pr)=>{er.current!==X||!$[X]||(er.current=null,br(X,pr))},[$,br]);(0,d.useEffect)(()=>{!R.current||_==null||!S||(R.current=!1,lr())},[S,_,lr]);const q=(0,d.useCallback)(X=>{const pr=X?.newState==="open";Z(pr),pr||(C.current=null,P(null))},[]),mr=(0,d.useCallback)(X=>{X.key!=="Escape"||!V||yr()},[yr,V]),nr=(0,d.useCallback)(X=>{N(X);const pr=C.current;pr!=null&&ir(pr,X,"commit")},[ir]),hr=(0,d.useCallback)(X=>{Zu(X)&&nr(X.color.value)},[nr]);return e||$.length===0?(0,i.jsx)("div",{"arc-gradient-stops":"",children:(0,i.jsx)(Or,{"arc-gradient-add":"",icon:"fa-regular fa-plus",text:c.addGradient,variant:"neutral",hierarchy:"tertiary",size:"sm",onClick:a})}):(0,i.jsxs)("div",{"arc-gradient-stops":"",children:[(0,i.jsx)(tp,{content:c.gradientStops,sectionName:"stops",children:(0,i.jsxs)(Et,{children:[(0,i.jsx)(Or,{"arc-gradient-stop-distribute":"",layout:"icon",size:"sm",icon:"fa-regular fa-arrows-left-right-to-line",variant:"tertiary",onClick:J,tooltip:c.distributeColorStops,isDisabled:$.length<2}),(0,i.jsx)(Or,{"arc-gradient-stop-add":"",layout:"icon",size:"sm",icon:"fa-regular fa-plus",variant:"tertiary",onClick:()=>F({kind:"append"}),tooltip:c.addColorStop,isDisabled:_!=null})]})}),(0,i.jsx)("ul",{"arc-gradient-stop-list":"",children:k.map((X,pr)=>{const Lr=A[X.index]??`gradient-stop-row-${X.index}`,_r=Ty(Lr),Er=String(ar(X.stop.at,Kl,Wl)),Ur=k[pr-1]?.stop.at,Fr=k[pr+1]?.stop.at;return(0,i.jsx)(Iy,{stop:X.stop,stopIndex:X.index,sortedIndex:pr,value:vl(_r,Er,s),isEditing:A1(s,_r),isEditingColor:_===X.index,isAnyColorEditing:_!=null,onFocus:()=>v(_r,Er),onInput:Hr=>{g(Hr),wr(X.index,Hr)},onCommit:(Hr,We=!1)=>sr(X.index,Lr,Hr,We,Ur,Fr),onRevert:f,onOpenColorEdit:H,onRegisterAnchor:W,onInsertStopAt:j,onDelete:K,labels:n},Lr)})}),M&&(0,i.jsx)(Pa,{mode:"edit",heading:"",panels:["solid"],color:B,syncKey:cr,format:o,labels:n,onPreviewColor:X=>{const pr=C.current;pr!=null&&ir(pr,X.value,"preview")},onChange:hr,popoverProps:{id:z,popover:"manual",anchorAt:"left-center",alternateAnchorId:S,hidePopoverButton:!0,tryFallbacks:!0,hasTail:!0,offset:12,onToggle:q,onKeyDown:mr,footerSlot:(0,i.jsxs)(Et,{"arc-color-picker-button-bar":"",children:[(0,i.jsx)("span",{"arc-button-bar-spacer":""}),(0,i.jsx)(Or,{"arc-color-picker-button":"save",text:c.done,size:"sm",onClick:yr})]})}},T)]})},op=r=>{const e=(0,d.useRef)(null),a=(0,d.useRef)(null),t=(0,d.useRef)(r);t.current=r;const o=(0,d.useCallback)(()=>{e.current=null;const h=a.current;a.current=null,h&&t.current(h.value)},[]),n=(0,d.useCallback)(h=>{a.current={value:h},e.current==null&&(e.current=requestAnimationFrame(o))},[o]),c=(0,d.useCallback)(()=>{e.current!=null&&(cancelAnimationFrame(e.current),e.current=null),a.current=null},[]),s=(0,d.useCallback)(()=>{e.current!=null&&(cancelAnimationFrame(e.current),o())},[o]),u=(0,d.useCallback)(()=>e.current!=null,[]);return(0,d.useEffect)(()=>c,[c]),{schedule:n,cancel:c,flush:s,hasPending:u}},np=.05,cp=.5,Ry=4,Ly=(0,d.memo)(function({entry:e,sortedIndex:a,angle:t,isDragging:o,stopPositionLabel:n,onAtChange:c,onDragStart:s}){const{stop:u,index:h}=e,p=ar(u.at,or.STOP_MIN,or.STOP_MAX),v=(0,d.useCallback)(f=>{const m=Mh(f.key,t);if(m==null)return;f.preventDefault();const $=ar(p+m,or.STOP_MIN,or.STOP_MAX);c(h,$,!0)},[t,p,c,h]),g=(0,d.useCallback)(f=>{f.preventDefault(),f.stopPropagation(),s(h,f.pointerId)},[s,h]);return(0,i.jsx)("div",{"arc-gradient-stop-thumb":"",role:"slider",tabIndex:0,"aria-valuemin":or.STOP_MIN,"aria-valuemax":or.STOP_MAX,"aria-valuenow":Math.round(p),"aria-label":n(a+1),"is-dragging":o?"":void 0,style:{left:`${p}%`,background:String(u.color),zIndex:a+1},onPointerDown:g,onKeyDown:v})}),ip=(r,e)=>{const a=r.getBoundingClientRect(),t=r.offsetWidth/2;return{centerX:a.left+a.width/2,centerY:a.top+a.height/2,axisHalfLength:t,axisAngleDeg:e-90}},My=({stops:r,angle:e=or.ANGLE,isUnset:a=!1,onUpdateStops:t,onUpdateAngle:o,labels:n})=>{const c=n??ue,s=(0,d.useRef)(null),u=(0,d.useRef)(null),h=(0,d.useRef)(null),p=(0,d.useRef)(null),v=(0,d.useRef)(null),g=(0,d.useRef)(null),f=(0,d.useRef)(null),m=(0,d.useRef)(null),[$,k]=(0,d.useState)(null),[A,y]=(0,d.useState)(null),[w,x]=(0,d.useState)(null),[z,_]=(0,d.useState)(!1),P=A??e,C=(0,d.useMemo)(()=>$??r??[],[$,r]),S=(0,d.useMemo)(()=>fa(C),[C]),I=(0,d.useMemo)(()=>{const H=C.length>0?C:or.STOPS;return $?St(H,or.STOP_MIN,or.STOP_MAX):H},[$,C]),B=(0,d.useMemo)(()=>({background:a?"var(--arc-color-bg-mono)":Th({stops:I,angle:or.ANGLE}),rotate:`${P-90}deg`}),[I,P,a]),N=(0,d.useCallback)(H=>{t?.(H,"preview")},[t]),V=(0,d.useCallback)((H,W=!1)=>{const q=St(H,or.STOP_MIN,or.STOP_MAX);t?.(W?wh(q):q,"commit")},[t]),Z=(0,d.useCallback)(H=>{o?.(H,"preview")},[o]),M=(0,d.useCallback)(H=>{o?.(H,"commit")},[o]),D=(0,d.useCallback)((H,W,q=!1)=>{const mr=r??[],nr=mr[H];if(!nr||Math.abs(nr.at-W)<np)return;const hr=mr.map((X,pr)=>pr===H?{...X,at:W}:X);V(hr,q)},[V,r]),T=(0,d.useCallback)((H,W,q)=>{const mr=h.current,nr=s.current;if(!nr)return null;const hr=mr??ip(nr,P);return Ph(H,W,hr.centerX,hr.centerY,hr.axisAngleDeg,hr.axisHalfLength,or.STOP_MIN,or.STOP_MAX,q)},[P]),G=(0,d.useCallback)(H=>{if(!Number.isFinite(H))return;const W=Math.round(H),q=g.current??e;Math.abs(q-W)<cp||(g.current=W,y(W),(m.current==null||Math.abs(m.current-W)>=cp)&&(m.current=W,Z(W)))},[e,Z]),cr=(0,d.useCallback)((H,W)=>{const q=v.current??r??[],mr=q[H];if(!mr||Math.abs(mr.at-W)<np)return;const nr=q.map((Lr,_r)=>_r===H?{...Lr,at:W}:Lr);v.current=nr,k(nr);const hr=St(nr,or.STOP_MIN,or.STOP_MAX),X=f.current,pr=P;(!X||!qc({stops:X,angle:pr},{stops:hr,angle:pr}))&&(f.current=hr,N(hr))},[N,P,r]),gr=(0,d.useCallback)(H=>{const W=u.current;if(W==null)return;const q=T(H.clientX,H.clientY,!1);q!=null&&cr(W,q)},[cr,T]),{schedule:R,cancel:er,flush:lr}=op(gr),fr=(0,d.useCallback)(H=>{const W=p.current;if(!W||!W.hasExceededThreshold)return;const q=al(H.clientX,H.clientY,W.centerX,W.centerY),mr=Rh(W.startAngle,W.startPointerAngleDeg,q,or.ANGLE_MIN,or.ANGLE_MAX);G(H.shiftKey?Lh(mr):mr)},[G]),{schedule:rr,cancel:dr,flush:xr}=op(fr),sr=(0,d.useCallback)((H,W)=>{const q=s.current;q&&(q.setPointerCapture(W),u.current=H,h.current=ip(q,P),v.current=[...r??[]],f.current=St(v.current,or.STOP_MIN,or.STOP_MAX),k(v.current),x(H))},[P,r]),wr=(0,d.useCallback)((H,W)=>{if(S.length===0)return;const q=T(H,W,!0);if(q==null)return;const mr=S.reduce((nr,hr)=>{const X=Math.abs(hr.stop.at-q);return!nr||X<nr.distance?{stopIndex:hr.index,distance:X}:nr},null);mr&&D(mr.stopIndex,q,!0)},[D,T,S]),F=(0,d.useCallback)(()=>{const H=p.current;if(H?.hasExceededThreshold&&xr(),dr(),p.current=null,!!H){if(H.hasExceededThreshold){const W=g.current;W!=null&&M(W)}else wr(H.startClientX,H.startClientY);g.current=null,m.current=null,y(null),_(!1)}},[dr,M,wr,xr]),K=(0,d.useCallback)(()=>{lr(),er();const H=v.current;H&&V(H,!0),u.current=null,h.current=null,v.current=null,f.current=null,k(null),x(null)},[er,V,lr]),J=(0,d.useCallback)(H=>{if(!o){wr(H.clientX,H.clientY);return}const W=s.current;if(!W)return;const q=W.getBoundingClientRect(),mr=q.left+q.width/2,nr=q.top+q.height/2;W.setPointerCapture(H.pointerId);const hr=Number.isFinite(H.clientX)?H.clientX:0,X=Number.isFinite(H.clientY)?H.clientY:0;p.current={pointerId:H.pointerId,startClientX:hr,startClientY:X,lastClientX:hr,lastClientY:X,startPointerAngleDeg:al(hr,X,mr,nr),startAngle:e,centerX:mr,centerY:nr,hasExceededThreshold:!1}},[e,wr,o]),j=(0,d.useCallback)(H=>{if(u.current!=null){R({clientX:H.clientX,clientY:H.clientY});return}const W=p.current;if(!W)return;Number.isFinite(H.clientX)&&Number.isFinite(H.clientY)?(W.lastClientX=H.clientX,W.lastClientY=H.clientY):(W.lastClientX+=H.movementX??0,W.lastClientY+=H.movementY??0);const{lastClientX:q,lastClientY:mr}=W,nr=Math.hypot(q-W.startClientX,mr-W.startClientY);if(!W.hasExceededThreshold){if(nr<Ry)return;W.hasExceededThreshold=!0,_(!0)}rr({clientX:q,clientY:mr,shiftKey:H.shiftKey})},[R,rr]),ir=(0,d.useCallback)(()=>{if(u.current!=null){K();return}F()},[K,F]),yr=(0,d.useCallback)(()=>{if(u.current!=null){K();return}F()},[K,F]),br=(0,d.useCallback)(()=>{u.current!=null&&K()},[K]);return(0,i.jsxs)("div",{"arc-gradient-field-wrapper":"",role:"group","aria-label":c.gradientStops,children:[(0,i.jsxs)("small",{"arc-gradient-field-angle-output":"","aria-hidden":"true",children:[P,"\xB0"]}),(0,i.jsx)("div",{ref:s,"arc-gradient-field":"","is-unset":a?"":void 0,"is-dragging":w!=null||z?"":void 0,"is-rotating":z?"":void 0,style:B,onPointerDown:J,onPointerMove:j,onPointerUp:ir,onPointerCancel:yr,onLostPointerCapture:br,children:S.map((H,W)=>(0,i.jsx)(Ly,{entry:H,sortedIndex:W,angle:P,isDragging:w===H.index,stopPositionLabel:c.stopPosition,onAtChange:D,onDragStart:sr},`gradient-stop-thumb-${H.index}`))})]})},{ANGLE_MIN:jy,ANGLE_MAX:Dy,ANGLE_SNAP_STEP:Oy}=or,Ny=({inputProps:r,labels:e,...a})=>{const{id:t="angle-slider",min:o=jy,max:n=Dy,step:c=1,value:s,onChange:u,...h}=r,p=e??ue,v=Nr(void 0,`${t}-label`),g=(0,d.useCallback)(f=>{if(f.shiftKey||!_l(f.key))return;const m=Il(f.key,f,{step:Number(c)});if(m==null)return;f.preventDefault();const $=N0(Number(s),m,{min:Number(o),max:Number(n)}),k={value:String($)};u?.(k,f)},[o,n,c,s,u]);return(0,i.jsxs)("div",{"arc-gradient-angle-slider":"",children:[(0,i.jsx)(tp,{sectionName:"angle",content:p.angle,id:v}),(0,i.jsx)(Tl,{"arc-angle-slider":"",...a,layout:"fill",size:"md",snapStep:Oy,inputIdPrefix:t,inputProps:{...h,min:o,max:n,step:c,value:s,onChange:u,onKeyDown:g,"aria-labelledby":v},valueInputProps:{showValueInput:!0},tooltipProps:{showTooltip:!0,text:"{#value}\xB0"}})]})},By="gradient-angle-presets",Fy=(r,e)=>or.ANGLE_PRESETS.map(a=>({stops:r,angle:a,name:e(a)})),Hy=({gradient:r,onSelectAngle:e,labels:a})=>{const t=a??ue,o=r?.angle??or.ANGLE,n=(0,d.useMemo)(()=>Fy(r?.stops??or.STOPS,t.gradientAngleOption),[r?.stops,t.gradientAngleOption]),c=(0,d.useMemo)(()=>n.find(u=>u.angle===o),[n,o]),s=u=>{Yu(u)&&e?.(u.gradientData.angle)};return(0,i.jsx)(vn,{"arc-gradient-presets":"",id:By,colors:n,activeGradient:c,showHeading:!1,setAriaLabel:t.gradientAngle,onSwatchClick:s,labels:a})},{ANGLE_MIN:sp,ANGLE_MAX:lp,ANGLE:Vy}=or,Uy=({state:r,tools:e,isUnset:a=!1,onAddGradient:t,editFallbackColor:o,format:n,labels:c})=>{const{commitGradient:s,previewGradient:u,startPreview:h,endPreview:p}=r,v=r.displayGradient,g=v.angle??Vy,f=(0,d.useRef)(g),[m,$]=(0,d.useState)(null),k=(0,d.useCallback)((C,S="commit")=>{const I={...v,...C};S==="preview"?u(I):s(I)},[v,u,s]),A=(0,d.useCallback)(()=>{p(),k({angle:f.current},"commit")},[p,k]),{createInputProps:y}=m0({onCommit:A}),w=(0,d.useMemo)(()=>y(C=>{const S=ar(C,sp,lp);f.current=S,$(S),h({kind:"angle-slider"}),k({angle:S},"preview")},()=>$(null)),[y,k,h]),x=(0,d.useMemo)(()=>!e||e.length===0?[...Bc]:[...e],[e]),z=(0,d.useMemo)(()=>{const C={gradientField:x.includes("gradient-field"),gradientStops:x.includes("gradient-stops"),angleSlider:x.includes("angle-slider"),anglePresets:x.includes("angle-presets")};return C.gradientField||C.gradientStops||C.angleSlider||C.anglePresets?C:null},[x]);if(!z)return null;const _=a||(v.stops?.length??0)===0,P=_?[]:v.stops??[];return(0,i.jsxs)("div",{"arc-color-tools":"gradient","arc-color-picker-section":"tools",children:[z.gradientField&&(0,i.jsx)(My,{stops:P,angle:g,isUnset:_,onUpdateStops:(C,S)=>k({stops:C},S??"commit"),onUpdateAngle:(C,S)=>k({angle:C},S??"commit"),labels:c}),z.gradientStops&&(0,i.jsx)(Py,{state:r,isEmpty:_,onAddGradient:t,editFallbackColor:o,format:n,labels:c}),z.angleSlider&&(0,i.jsx)(Ny,{labels:c,inputProps:{surfaceName:"angle",min:sp,max:lp,value:m??g,...w}}),z.anglePresets&&(0,i.jsx)(Hy,{gradient:{stops:P,angle:g},onSelectAngle:C=>k({angle:C}),labels:c??ue})]})},dp=({heading:r,showGoBack:e,goBackProps:a,...t})=>(0,i.jsx)(ga,{...t,variant:"common","arc-color-picker-wrapper":"",showGoBack:e,goBackProps:a,headerSlot:!!r&&(0,i.jsx)(ie,{...typeof r=="string"?{text:r}:r,"arc-color-picker-heading":"",overflow:"truncate",isStrong:!0})});dp.displayName="ArcColorPickerWrapper";const Gy=(r,e)=>{switch(e.type){case"SET_COLOR":return{...r,hsv:e.hsv,selectedName:e.name,isUnset:!1};case"SET_UNSET":return r.isUnset?r:{...r,isUnset:!0,selectedName:void 0};case"SET_GRADIENT":return e.exitUnset&&r.isUnset?{...r,gradient:e.gradient,isUnset:!1}:{...r,gradient:e.gradient};case"SET_PANEL":return r.panel===e.panel?r:{...r,panel:e.panel};case"SET_NAME":return r.selectedName===e.name?r:{...r,selectedName:e.name};default:return r}},xn=({color:r,name:e,gradient:a,isUnset:t=!1,format:o="auto",activePanel:n="solid"})=>{const c=Wc(r)?r:nn(r).color,s=e??(Wc(r)||typeof r=="string"?void 0:r.name),u=Ia(c,{format:o}),h=s?{...u,name:s}:u,p=no(a,{fallbackColor:h.value}),v=n==="gradient"?p.value:h.value;return{activePanel:n,value:t?"":v,isUnset:t?!0:void 0,color:h,gradient:p}},Ky={h:0,s:0,v:0,a:1},Wy={stops:[],angle:or.ANGLE},up=r=>r??Wy,vi=r=>r==null?"":nn(r).color,hp=(r,e)=>{const a=Zr(vi(r));return a?Vc(a,e):null},Xy=({color:r,gradient:e,panel:a,format:t,syncKey:o,onChange:n,onSnapshotChange:c,onPreviewColor:s,onPreviewGradient:u})=>{const[h,p]=(0,d.useReducer)(Gy,void 0,()=>({hsv:hp(r)??Ky,isUnset:a==="gradient"?e==null:vi(r)==="",gradient:up(e),panel:a})),[v,g]=(0,d.useReducer)(w1,ri),[f,m]=(0,d.useState)(null),[$,k]=(0,d.useState)(null),A=(0,d.useRef)(v);A.current=v;const y=(0,d.useRef)(h);y.current=h;const w=(0,d.useRef)(o),x=(0,d.useRef)(vi(r)),z=(0,d.useRef)(up(e));la(()=>{const T=vi(r),G=a==="gradient"?e==null:T==="",cr=o!==w.current;w.current=o;const gr=T!==x.current;x.current=T;const R=e!=null&&!qc(e,z.current);if(e!=null&&(z.current=e),!cr&&!gr&&!R)return;const er=cr||A.current.status==="idle";if(cr&&(g({type:"EXTERNAL_ADOPT"}),m(null),k(null)),!!er){if(G&&p({type:"SET_UNSET"}),(cr||gr)&&!G){const lr=hp(r,y.current.hsv.h);lr&&p({type:"SET_COLOR",hsv:lr})}(cr||R)&&e!=null&&p({type:"SET_GRADIENT",gradient:e,exitUnset:R})}},[r,e,o,a]);const _=(0,d.useCallback)((T,G)=>{if(!(!n&&!c))try{const cr={...Ia(T,{format:t}),name:G};c&&c(xn({color:T,name:G,gradient:y.current.gradient,format:t,activePanel:"solid"})),n?.({activePanel:"solid",color:cr})}catch{}},[t,n,c]),P=(0,d.useCallback)((T,G)=>{p({type:"SET_COLOR",hsv:T,name:G}),m(null),y.current={...y.current,hsv:T,selectedName:G,isUnset:!1};try{x.current=Ia(T,{format:t}).value}catch{}_(T,G)},[_,t]),C=(0,d.useCallback)(()=>{if(p({type:"SET_UNSET"}),m(null),y.current={...y.current,isUnset:!0,selectedName:void 0},x.current="",!(!n&&!c))try{c&&c(xn({color:y.current.hsv,gradient:y.current.gradient,isUnset:!0,format:t,activePanel:"solid"})),n?.({activePanel:"none",color:null,gradient:null})}catch{}},[t,n,c]),S=(0,d.useCallback)(T=>{if(m(T),!!s)try{s(Ia(T,{format:t}))}catch{}},[t,s]),I=(0,d.useCallback)(T=>{if(p({type:"SET_GRADIENT",gradient:T,exitUnset:!0}),k(null),y.current={...y.current,gradient:T,isUnset:!1},z.current=T,!(!n&&!c))try{const G=_a(Ve(y.current.hsv)),cr=no(T,{fallbackColor:G});c&&c(xn({color:y.current.hsv,gradient:T,format:t,activePanel:"gradient"})),n?.({activePanel:"gradient",gradient:cr})}catch{}},[t,n,c]),B=(0,d.useCallback)(T=>{if(k(T),!!u)try{const G=_a(Ve(y.current.hsv));u(no(T,{fallbackColor:G}))}catch{}},[u]),N=(0,d.useCallback)(T=>g({type:"PREVIEW_START",source:T}),[]),V=(0,d.useCallback)(()=>{g({type:"PREVIEW_END"}),m(null),k(null)},[]),Z=(0,d.useCallback)((T,G)=>g({type:"EDIT_FOCUS",field:T,draft:G}),[]),M=(0,d.useCallback)(T=>g({type:"EDIT_INPUT",draft:T}),[]),D=(0,d.useCallback)(()=>g({type:"EDIT_BLUR"}),[]);return{model:h,interaction:v,displayHsv:f??h.hsv,displayGradient:$??h.gradient,isUnset:h.isUnset&&f===null&&$===null,commitColor:P,commitUnset:C,commitGradient:I,previewColor:S,previewGradient:B,startPreview:N,endPreview:V,editFocus:Z,editInput:M,editBlur:D}},Je={mode:"normal",color:"#05aff0",format:"auto",heading:ue.heading,palettes:[]},qy={stops:or.STOPS,angle:or.ANGLE},Yy=["solid","gradient"],Zy={icon:"fa-regular fa-paint-brush",text:ue.colorPicker,layout:"icon",shape:"round",size:"md"},Xl=(r,e)=>r.length===0||r.includes(e)?e:r[0],Jy=r=>{const e=Ve(r);return{"--js\u2022hue":`hsl(${r.h} 100% 50%)`,"--js\u2022hex":Ue({...e,a:1},!1),"--js\u2022rgb":_a(e)}},Pa=({children:r,color:e,defaultColor:a,unsetColorPlacement:t="none",gradient:o,format:n=Je.format,mode:c=Je.mode,heading:s=Je.heading,tools:u,omitTools:h,isInline:p=!1,showGoBack:v=!1,goBackProps:g,canTogglePanels:f=!1,panels:m=Yy,activePanel:$="solid",onUpdatePanel:k,palettes:A,popoverProps:y,expandHexShorthand:w,syncKey:x,labels:z,onChange:_,onSnapshotChange:P,onPreviewColor:C,onPreviewGradient:S,onAddColor:I,onRemoveColor:B,...N})=>{const V=(0,d.useMemo)(()=>Fc(z),[z]),Z=c==="simple",M=Nr(y?.id??void 0,"color-picker"),D=(0,d.useRef)(null),[T,G]=(0,d.useState)(()=>Xl(m,$)),cr=e===void 0?a??null:e,R=Xy({color:cr,gradient:o??null,panel:T,format:n,syncKey:x,onChange:_,onSnapshotChange:P,onPreviewColor:C,onPreviewGradient:S}),er=(0,d.useRef)(void 0),lr=(0,d.useRef)(R.model.hsv);lr.current=R.model.hsv;const fr=(0,d.useCallback)(Er=>R.commitColor(Er,er.current),[R]),rr=(0,d.useMemo)(()=>_a(Ve(R.model.hsv)),[R.model.hsv]),dr=(0,d.useMemo)(()=>A?.map(Er=>({...Er,canAddColor:!1,canRemoveColor:!1}))??[],[A]),xr=(0,d.useCallback)(Er=>{G(Ur=>{const Fr=typeof Er=="function"?Er(Ur):Er,Hr=Xl(m,Fr);return Hr!==Ur&&k?.(Hr),Hr})},[m,k]),sr=(0,d.useRef)(null),wr=(0,d.useCallback)(Er=>{if(P)try{P(xn({color:R.model.hsv,gradient:R.model.gradient,isUnset:R.isUnset,format:n,activePanel:Er}))}catch{}},[P,R.model.hsv,R.model.gradient,R.isUnset,n]),F=(0,d.useRef)($);(0,d.useEffect)(()=>{F.current!==$&&(F.current=$,G(Xl(m,$)))},[$,m]),(0,d.useEffect)(()=>{const Ur=!(sr.current===null)&&sr.current!==T;sr.current=T,Ur&&wr(T)},[T,wr]);const K=(0,d.useMemo)(()=>{const Ur=T==="gradient"?Bc:Z?qu:Bs,Fr=!u||u.length===0?[...Ur]:[...u];if(!h?.length)return Fr;const Hr=new Set(h);return Fr.filter(We=>!Hr.has(We))},[u,h,T,Z]),J=K.includes("palettes"),j=t!=="none"&&!Z,ir=j&&t==="tools"&&T==="solid",yr=j&&t==="header",br=(0,d.useMemo)(()=>Jy(R.displayHsv),[R.displayHsv]),W=T==="gradient"?"gradient":Z?"simple":"solid",q=J?A:void 0,mr=(0,d.useCallback)(()=>{const Er=_a(Ve(R.model.hsv)),Ur=(cr!=null?nn(cr).color:"")||Er||Je.color,Fr=Ih({...R.model.gradient,stops:[]},Ur);Fr.stops.length>0&&R.commitGradient(Fr)},[cr,R]),nr=(0,i.jsxs)("div",{...N,ref:D,"arc-color-picker":W,"is-inline":p?"":void 0,"is-unset":R.isUnset?"":void 0,style:br,children:[Z?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f0,{palettes:dr.length?dr:void 0,activePaletteColor:rr,commitLocalHsv:fr,selectedNameRef:er,hsvRef:lr,popoverId:M,labels:V}),(0,i.jsx)(q0,{state:R,tools:K,isSimpleMode:!0,expandHexShorthand:w,labels:V})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_y,{canTogglePanels:f,panels:m,activePanel:T,setActivePanel:xr,labels:V}),T==="gradient"?(0,i.jsx)(Uy,{state:R,tools:K,isUnset:R.isUnset,onAddGradient:mr,editFallbackColor:nn(e??"").color,format:n,labels:V}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(q0,{state:R,tools:K,isUnsetColorInTools:ir,expandHexShorthand:w,labels:V}),(0,i.jsx)(f0,{palettes:q,activePaletteColor:rr,commitLocalHsv:fr,selectedNameRef:er,hsvRef:lr,popoverId:M,onAddColor:I??Zt,onRemoveColor:B,labels:V,"has-divider":"top"})]})]}),r&&(0,i.jsx)("div",{"arc-color-picker-section":"footer",children:r})]});if(p)return nr;const hr=yr?(0,i.jsx)(M0,{isUnset:R.isUnset,onSelect:R.commitUnset,labels:V}):null,X=hr||y?.headerSlotEnd?(0,i.jsxs)(i.Fragment,{children:[y?.headerSlotEnd,hr]}):void 0,pr=y?.anchorProps??Zy,Lr=y?.popover??(Z?"":"manual"),_r=Z?{...y,anchorAt:y?.anchorAt??"bottom-center",showDismiss:!1,hasTail:!0}:{...y,heading:s??void 0,showGoBack:v??void 0,goBackProps:g??void 0,headerSlotEnd:X??void 0,showHeaderDivider:!0,showFooterDivider:!0,isHeaderSticky:!0,isFooterSticky:!0};return(0,i.jsx)(dp,{..._r,popover:Lr,anchorProps:pr,id:M,children:nr})},Qy=({color:r,gradient:e=qy,isUnset:a,format:t=Je.format,activePanel:o="solid"}={})=>{const n=r==null||r==="";return xn({color:n?Je.color:r,gradient:e,isUnset:a??n,format:t,activePanel:o})};Pa.getColorAs=mh,Pa.getColorData=Ia,Pa.getGradientData=no,Pa.getSnapshot=Qy,Pa.getContrastColor=oo,Pa.addColor=e$,Pa.removeColor=a$,zr("ArcColorPicker",$1);const ql={course:"Course",scenario:"Branching Scenario",presentation:"Presentation",microlearning:"Microlearning",video:"Video",guide:"Guide",package:"Package",custom:"Icon"},pp=r=>r?{...ql,...r}:ql,ba=l`--arc•icon•avatar`,$a=l`${ba}•fg`,ya=l`${ba}•bg`,It=l`${ba}•width`,go=l`${ba}•size`,rx=l`
  &[data-color=brand],
  &[data-color=blue] {
    ${$a}: var(--arc-color-fg-blue-mid);
    ${ya}: var(--arc-color-bg-blue-subtle);
  }
  &[data-color=purple] {
    ${$a}: var(--arc-color-fg-purple-mid);
    ${ya}: var(--arc-color-bg-purple-subtle);
  }
  &[data-color=yellow] {
    ${$a}: var(--arc-color-fg-yellow-mid);
    ${ya}: var(--arc-color-bg-yellow-subtle);
  }
  &[data-color=orange] {
    ${$a}: var(--arc-color-fg-orange-mid);
    ${ya}: var(--arc-color-bg-orange-subtle);
  }
  &[data-color=red] {
    ${$a}: var(--arc-color-fg-red-mid);
    ${ya}: var(--arc-color-bg-red-subtle);
  }
  &[data-color=green] {
    ${$a}: var(--arc-color-fg-green-mid);
    ${ya}: var(--arc-color-bg-green-subtle);
  }
  &[data-color=mint] {
    ${$a}: var(--arc-color-fg-mint-mid);
    ${ya}: var(--arc-color-bg-mint-subtle);
  }
  &[data-color=maroon] {
    ${$a}: var(--arc-color-fg-maroon-mid);
    ${ya}: var(--arc-color-bg-maroon-subtle);
  }
  &[data-color=neutral] {
    ${$a}: var(--arc-color-fg-neutral-stark);
    ${ya}: var(--arc-color-bg-neutral-subtle);
  }
  &[data-color=ai] {
    ${$a}: var(--arc-color-fg-purple-stark);
    ${ya}: var(--arc-gradient-ai-100);
  }
`,ex=l`
  &[data-size=inherit] {
    ${It}: 2em;
    ${ba}•border•radius: 0.5em;
  }
  &[data-size=xs] {
    ${It}: var(${b}•20);
    ${go}: var(${b}•10);
    ${ba}•border•radius: var(${b}•6);
  }
  &[data-size=sm] {
    ${It}: var(${b}•24);
    ${go}: var(${b}•12);
    ${ba}•border•radius: var(${b}•6);
  }
  &[data-size=md] {
    ${It}: var(${b}•32);
    ${go}: var(${b}•14);
    ${ba}•border•radius: var(${b}•8);
  }
  &[data-size=lg] {
    ${It}: var(${b}•40);
    ${go}: var(${b}•16);
    ${ba}•border•radius: var(${b}•8);
  }
  &[data-size=xl] {
    ${It}: var(${b}•56);
    ${go}: var(${b}•20);
    ${ba}•border•radius: var(${b}•12);
  }
`,ax=l`
@layer arc-components {

  /* SETUP -----------------------------------------------------------• */

  [arc-icon-avatar] {
    ${rx}
    ${ex}
  }

  /* CORE ------------------------------------------------------------• */

  [arc-icon-avatar] {
    flex: none;
    font-size: initial;
    display: flex;
    align-items: center;
    justify-content: center;

    width: var(${It});
    aspect-ratio: 1 / 1;

    color: var(${$a});
    background: var(${ya});
    border-radius: var(${ba}•border•radius);

    [arc-icon] {
      font-size: var(${go});
      pointer-events: none;
    }
  }

}
`,tx=["course","scenario","presentation","microlearning","video","guide","package","custom"],ox=Wr(Za,["brand","blue","purple","yellow","orange","red","green","mint","maroon","neutral","ai"]),nx=$r(ke,["inherit","xs","sm","md","lg","xl"]),kn={variant:"custom",color:"blue",size:"inherit",icon:"fa-regular fa-circle-dashed"},fi={course:{icon:"fa-solid fa-book-open",color:"blue"},scenario:{icon:"fa-solid fa-sitemap",color:"purple"},presentation:{icon:"fa-solid fa-presentation-screen",color:"yellow"},microlearning:{icon:"fa-solid fa-bolt",color:"orange"},video:{icon:"fa-solid fa-video",color:"red"},guide:{icon:"fa-solid fa-memo",color:"mint"},package:{icon:"fa-solid fa-cube",color:"maroon"},custom:{icon:kn.icon,color:kn.color}},cx=({variant:r=kn.variant,size:e=kn.size,color:a=fi.custom.color,icon:t=fi.custom.icon,hasAutoLabel:o,labels:n,role:c,"aria-label":s,"aria-labelledby":u,...h})=>{const p=s||(o?pp(n)[r]:void 0),v=!!(p||u),g=r==="custom",f=fi[r],m=g?t??f.icon:f.icon,$=g?a:f.color,k=g?"":r,A=c??(v?"img":void 0);return(0,i.jsx)("span",{...h,role:A,"aria-label":p,"aria-labelledby":u,"arc-icon-avatar":k,"data-color":$,"data-size":e,children:(0,i.jsx)(Sr,{icon:m})})};zr("ArcIconAvatar",ax);const gp=({size:r="md",layout:e="icon",variant:a="common",hierarchy:t="tertiary",...o})=>(0,i.jsx)(Or,{...o,"arc-input-action":"",size:r,layout:e,variant:a,hierarchy:t}),mi=l`--arc•link`,Ra=l`${mi}•fg`,wn=l`${Ra}•hover`,An=l`${Ra}•disabled`,Yl=l`${mi}•outline`,vp=l`${Yl}•size`,Zl=l`${Yl}•offset`,ix=l`${mi}•cursor`,Sn=l`${mi}•focus•color`,sx=l`
@layer arc-components {
${xf}

[arc-link] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=inherit] { /* @default */
    ${Ra}: currentcolor;
    ${wn}: color-mix(in srgb, currentcolor, transparent 38.75%);
    ${An}: color-mix(in srgb, currentcolor, transparent 70%);

    ${Sn}: var(--arc-color-border-focus);
  }

  &[data-variant=primary] {
    ${Ra}: var(--arc-color-fg-primary);
    ${wn}: var(--arc-color-fg-secondary);
    ${An}: var(--arc-color-fg-disabled);
    ${Sn}: var(--arc-color-border-focus);
  }

  &[data-variant=secondary] {
    ${Ra}: var(--arc-color-fg-secondary);
    ${wn}: var(--arc-color-fg-primary);
    ${An}: var(--arc-color-fg-disabled);
    ${Sn}: var(--arc-color-border-focus);
  }

  /* @deprecated */
  &[data-variant=inverse] {
    ${Ra}: var(--arc-color-fg-on-mono-inverse);
    ${wn}: var(--arc-link-fg-hover-inverse);
    ${An}: var(--arc-link-fg-disabled-inverse);
    ${Sn}: var(--arc-link-focus-disabled-inverse);
  }

  & {
    ${vp}: 0.125em; /* 2px */
    ${Zl}: 0.0625em; /* 1px */
  }


  /* STATES --------------------------------------------------------• */

  &:not([data-is-disabled]):hover {
    ${Ra}: var(--arc-link-color-hover, var(${wn}));
  }

  &:where(:focus, :focus-within):focus-visible {
    ${Yl}: var(${vp}) solid var(--arc-link-color-focus, var(${Sn}));
    ${Zl}: var(${Zl});

    * {
      outline: none;
    }
  }

  &[data-is-disabled] {
    ${Ra}: var(--arc-link-color-disabled, var(${An}));
    ${ix}: not-allowed;
  }


  & {

    /* Inter-Component Communication -------------------------------• */
    --arc-icon-color: var(--arc-link-color, var(${Ra}));  /** ArcIcon color */

  }

}


/* CORE STYLES ------------------------------------------------------ */

[arc-link] {
  color: var(--arc-link-color, var(${Ra}));
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
`,lx=$r(Yr,["inherit","primary","secondary","inverse"]),dx=({children:r,layout:e="gutter",size:a="inherit",variant:t="inherit",tag:o="a",href:n,icon:c,text:s,overflow:u,iconSize:h,gapSize:p,isFlipped:v,isDisabled:g,...f})=>(0,i.jsx)(o,{...f,href:g?void 0:n,"arc-link":"","data-variant":t,"aria-disabled":g,"data-is-disabled":g?"":void 0,children:r||(0,i.jsx)(ie,{icon:c,text:s,overflow:u,iconSize:h,gapSize:p,size:a,layout:e,isFlipped:v})});zr("ArcLink",sx);const ux=[...Na],hx=$r(Yr,["common"]),px=$r(Yr,["common","critical"]),gx=$r(Yr,["common","brand","info","success","warning","error","processing"]),vx=["auto","dark","light","none"],fx=["auto","all","top-bottom","left-right","left-right-top","left-right-bottom","top-bottom-left","top-bottom-right","none"],mx=$r(ke,["xl","lg","md","sm","custom","fullscreen"]),bx=["cancel","escape","outside","button:dismiss","button:back","button:primary","button:secondary","button:tertiary","confirm:discard","confirm:cancel"],Jl=r=>r?.matches(":modal"),Ql=(r,e)=>e.target===r,$x=(r,e)=>e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom,Cn=({modalRef:r,shouldConfirm:e,setIsConfirming:a,onCloseOverride:t=void 0})=>(o,n)=>c=>{if(c?.preventDefault?.(),c?.stopPropagation?.(),!r?.current){n?.(c);return}if(t){t(o,c,r.current),n?.(c);return}if(e&&o!=="confirm:discard"){a?.(!0);return}r.current?.close(o),a?.(!1),n?.(c)},rd=({modalRef:r,shouldConfirm:e,setIsConfirming:a,onClose:t,onToggle:o})=>{(0,d.useEffect)(()=>{const n=r.current;if(!n)return;const c=u=>{Jl(n)&&Ql(n,u)&&(e?(u.preventDefault(),u.stopPropagation(),a?.(!0)):t?.("outside",u))},s=u=>{Ql(n,u)&&(a?.(!1),t?.(n.returnValue,u),o?.(!1,u))};return n.addEventListener("close",s),n.addEventListener("cancel",c),()=>{n.removeEventListener("close",s),n.removeEventListener("cancel",c)}},[r,e,a,t,o])},ed=({modalRef:r,isOpen:e,isTopLayer:a})=>{(0,d.useEffect)(()=>{const t=r.current;t&&(e&&!t.open&&(a?t.showModal():t.show()),!e&&t.open&&t.close())},[e,a])},ad=({modalRef:r,isOpen:e,autoFocusId:a})=>{(0,d.useEffect)(()=>{const t=r.current;if(!t||!a||!e)return;const o=t.querySelector(`#${a}`);if(!o||!(o instanceof HTMLElement))return;const n=setTimeout(()=>{o.focus()},0);return()=>clearTimeout(n)},[r,a,e])},fp=(r,e)=>(typeof r.composedPath=="function"?r.composedPath():[]).includes(e)||r.target instanceof Node&&e.contains(r.target),mp=({modalRef:r,isOpen:e=!1,closeOnBackdrop:a=!1,attemptCloseModal:t})=>{(0,d.useEffect)(()=>{const o=r.current;if(!o||!e||!a||!Jl(o))return;let n=!1;const c=u=>{n=fp(u,o)},s=u=>{if(n||fp(u,o))return;const h=o.getBoundingClientRect();$x(h,u)&&t("outside")(u)};return document.documentElement?.addEventListener("pointerdown",c,{capture:!0}),document.documentElement?.addEventListener("click",s,{capture:!0}),()=>{document.documentElement?.removeEventListener("pointerdown",c,{capture:!0}),document.documentElement?.removeEventListener("click",s,{capture:!0})}},[r,t,e,a])},bp=({modalRef:r,isOpen:e=!1,closeOnEsc:a=!1,closedBy:t="closerequest",attemptCloseModal:o})=>{(0,d.useEffect)(()=>{const n=r.current;if(!n||!e||!a||!Jl(n))return;const c=s=>{if(s.key==="Escape"&&Ql(n,s)){if(t==="none"){s.stopPropagation(),s.preventDefault();return}o("escape")(s)}};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[r,o,e,a,t])},td=r=>(0,i.jsx)(Or,{"aria-label":"Dismiss",text:"Dismiss",...r,variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-xmark-large",layout:"icon",shape:"square",size:"md"}),yx=r=>(0,i.jsx)(Or,{"arc-modal-go-back":"","aria-label":"Go Back",text:"Go Back",...r,variant:"common",hierarchy:"secondary",icon:"fa-regular fa-arrow-left",layout:"icon",shape:"square",size:"md"}),bi=(0,d.forwardRef)(({inert:r,...e},a)=>(0,i.jsx)("div",{...e,ref:a,"arc-modal-content":"",inert:r}));bi.displayName="ModalContent";const $p=({showDivider:r,...e})=>(0,i.jsx)("header",{...e,"arc-modal-header":"","has-divider":r?"":void 0}),xx=({glyph:r,variant:e="common"})=>(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)(Sr,{icon:r,"arc-modal-glyph":"","arc-icon-status":e})}),od=r=>{const{titleContent:e,TitleElement:a="h2",...t}=r;return(0,i.jsx)(i.Fragment,{children:e&&(0,i.jsx)(a,{...t,"arc-modal-title":"",children:typeof e=="string"?e:(0,i.jsx)(ie,{...e})})})},kx=({message:r,...e})=>(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)("p",{...e,"arc-modal-message":"",children:r})}),nd=({tag:r="section",padding:e,...a})=>(0,i.jsx)(r,{...a,"arc-modal-body":"","data-padding":e==="auto"?void 0:e}),cd=({showDivider:r,...e})=>(0,i.jsx)("footer",{...e,"arc-modal-footer":"","has-divider":r?"":void 0}),wx=r=>e=>{if(e.key==="Escape"){if(r==="none"){e.stopPropagation(),e.preventDefault();return}return"escape"}},kr=l`--arc•modal`,En=l`${kr}•layout`,Ax=l`${kr}•header`,$i=l`${kr}•body`,zn=l`${kr}•footer`,yp=l`${kr}•fg`,yi=l`${kr}•bg`,La=l`${kr}•backdrop`,lt=l`${kr}•scale`,vo=l`${Ax}•padding`,Qr=l`${$i}•padding`,dt=l`${zn}•padding`,Sx=l`
  ${kr}•font•size: var(${b}•14);
  ${kr}•gap: var(${L}•16);

  ${En}•rows: auto 1fr auto;
  ${En}•columns: auto;

  &:not(:has([arc-modal-footer])):has([arc-modal-header]) {
    ${En}•rows: auto 1fr;
  }

  &:not(:has([arc-modal-header])):has([arc-modal-footer]) {
    ${En}•rows: 1fr auto;
  }

  &:not(:has([arc-modal-header])):not(:has([arc-modal-footer])) {
    ${En}•rows: auto;
  }

  ${yp}: var(--arc-color-fg-primary);
  ${yi}: var(--arc-color-bg-primary);
  ${kr}•border: none;
  ${kr}•border•radius: var(--arc-border-radius-lg);
  ${kr}•divider: var(${b}•1) solid var(--arc-color-border-mid);

  ${kr}•max•width: calc(100vw - var(${L}•32));
  ${kr}•min•width: unset;
  ${kr}•width: auto;

  ${kr}•max•height: calc(100vh - var(${L}•32));
  ${kr}•min•height: unset;
  ${kr}•height: max-content;

  ${lt}: 1;
  ${lt}•start: 0.95;

  ${$i}•text•align: unset;
  ${zn}•justify•content: flex-end;

  ${La}•bg: var(--arc-color-overlay-stark);
  ${La}•pointer•events: none;
  ${La}•cursor: default;

  &:where([is-backdrop=light]) {
    ${La}•bg: var(--arc-color-overlay-subtle);
  }

  &:where([is-backdrop=dark]) {
    ${La}•bg: var(--arc-color-overlay-stark);
  }

  &:where([is-backdrop=none]) {
    ${La}•bg: transparent;
  }
`,Cx=l`
  &[data-size=sm] {
    ${kr}•width: 28em;
  }

  &[data-size=md] {
    ${kr}•width: 40em;
  }

  &[data-size=lg] {
    ${kr}•width: 50em;
  }

  &[data-size=xl] {
    ${kr}•width: 64em;
  }

  &[data-size=custom] {
    ${kr}•width: auto;
    ${kr}•height: max-content;
  }

  &[data-size=fullscreen] {
    ${kr}•width: 100vw;
    ${kr}•height: 100vh;
    ${kr}•min•width: 100vw;
    ${kr}•min•height: 100vh;
    ${kr}•max•width: 100vw;
    ${kr}•max•height: 100vh;
    ${kr}•border•radius: var(--arc-border-radius-none);

    ${lt}: 1;
    ${lt}•start: 1.125;
  }
`,Ex=l`
  &[is-confirm] {
    ${zn}•justify•content: flex-end;

    &[is-confirm=critical] [arc-modal-title] {
      --arc-icon-text-icon-color: var(--arc-color-fg-critical-mid);
    }
  }

  &[is-alert] {
    ${$i}•text•align: center;
    ${zn}•justify•content: center;

    ${Qr}•block•start: var(${L}•40);
    ${Qr}•block•end: var(${L}•20);

    ${dt}•block•start: var(${L}•12);
    ${dt}•block•end: var(${L}•40);

    ${kr}•glyph•size: var(${b}•48);

    [arc-modal-spinner] {
      --arc-spinner-circle-opacity: 9.8%; /* 9.8% = neutral-200 on white */
      --arc-spinner-size: var(${kr}•glyph•size);
    }

    [arc-modal-glyph] {
      --arc-icon-display: flex;
      --arc-icon-size: var(${kr}•glyph•size);
      --arc-icon-height: var(--arc-icon-size);
      --arc-icon-max-height: var(--arc-icon-size);
    }

    [arc-modal-body] {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(${L}•12);
    }
  }

  &:not([is-top-layer]) {
    z-index: var(--arc-modal-z-index, 1000);
  }
`,zx=l`
  [arc-modal-content] {
    &:has([arc-modal-header]) {
      ${Qr}•block•start: var(${L}•10);
    }

    &:has([arc-modal-footer]) {
      ${Qr}•block•end: var(${L}•10);
    }

    &:has([arc-modal-header][has-divider]) {
      ${vo}•block•end: var(${L}•20);
      ${Qr}•block•start: var(${L}•20);
    }

    &:has([arc-modal-footer][has-divider]) {
      ${Qr}•block•end: var(${L}•20);
      ${dt}•block•start: var(${L}•12);
      ${dt}•block•end: var(${L}•12);
    }

    &:has([arc-modal-body][data-padding=top-bottom]) {
      ${Qr}•inline•start: 0;
      ${Qr}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right]) {
      ${Qr}•block•start: 0;
      ${Qr}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-top]) {
      ${Qr}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-bottom]) {
      ${Qr}•block•start: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-left]) {
      ${Qr}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-right]) {
      ${Qr}•inline•start: 0;
    }

    &:has([arc-modal-body][data-padding=all]) {
      ${Qr}•block•start: var(${L}•20);
      ${Qr}•inline•end: var(${L}•24);
      ${Qr}•block•end: var(${L}•20);
      ${Qr}•inline•start: var(${L}•24);
    }

    &:has([arc-modal-go-back]) {
      ${vo}•inline•start: var(${L}•20);
    }

    ${vo}:
      var(${L}•20)
      var(${L}•24)
      var(${vo}•block•end, var(${L}•10))
      var(${vo}•inline•start, var(${L}•24));

    ${Qr}:
      var(${Qr}•block•start, var(${L}•20))
      var(${Qr}•inline•end, var(${L}•24))
      var(${Qr}•block•end, var(${L}•20))
      var(${Qr}•inline•start, var(${L}•24));

    ${dt}:
      var(${dt}•block•start, var(${L}•10))
      var(${L}•24)
      var(${dt}•block•end, var(${L}•20))
      var(${L}•24);

    &:has([arc-modal-body][data-padding=none]) {
      ${Qr}: 0;
    }
  }
`,_x=l`
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
`,Ix=l`
  [arc-modal] {
    opacity: 0;
    scale: var(--arc-modal-scale, var(${lt}));

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
      scale: var(--arc-modal-scale-start, var(${lt}•start));
    }

    [arc-modal][open]::after {
      opacity: 0;
    }

    [arc-modal][open]::backdrop {
      opacity: 0;
    }
  }
`,id=l`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-modal] {
    ${Sx}
    ${Cx}
    ${Ex}
    ${zx}
  }

  /* REDUCED MOTION ------------------------------------------------• */

  @media (prefers-reduced-motion: reduce) {
    [arc-modal] {
      ${lt}: 1;
      ${lt}•start: 1;
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
    color: var(--arc-modal-color, var(${yp}));
    background: var(--arc-modal-background, var(${yi}));
    border: var(--arc-modal-border, var(${kr}•border));
    border-radius: var(--arc-modal-border-radius, var(${kr}•border•radius));
    box-shadow: var(--arc-modal-box-shadow, var(--arc-shadow-lg));
    outline: var(--arc-modal-outline, none);

    width: var(--arc-modal-width, var(${kr}•width));
    height: var(--arc-modal-height, var(${kr}•height));
    min-width: var(--arc-modal-min-width, var(${kr}•min•width));
    min-height: var(--arc-modal-min-height, var(${kr}•min•height));
    max-width: var(--arc-modal-max-width, var(${kr}•max•width));
    max-height: var(--arc-modal-max-height, var(${kr}•max•height));

    &::backdrop {
      will-change: opacity;
      contain: layout style paint;

      background: var(--arc-modal-backdrop-background, var(${La}•bg));
      pointer-events: var(${La}•pointer•events, none);
      cursor: var(${La}•cursor, default);
    }

    [arc-modal-content] {
      font-size: var(--arc-modal-font-size, var(${kr}•font•size));
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
      gap: var(--arc-modal-header-gap, var(${kr}•gap));

      padding: var(${vo});
      background: var(--arc-modal-header-background, var(${yi}));
      max-width: 100%;

      &:where([has-divider]) {
        border-bottom: var(--arc-modal-header-divider, var(${kr}•divider));
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
        margin: var(${L}•4m) var(${L}•8m) var(${L}•4m) var(${L}•4m);
      }

      :where([header-slot=go-back]) {
        margin: var(${L}•4m) 0 var(${L}•4m) var(${L}•4m);
      }
    }

    [arc-modal-title] {
      --arc-icon-text-gap: var(${L}•8);

      [data-element=subtext] {
        font-family: var(--arc-font-family-body);
        font-weight: var(--arc-font-weight-body);
        font-size: var(--arc-font-size-body-md);
        color: inherit;
        margin-top: var(${L}•4);
      }
    }

    [arc-modal-body] {
      flex: 1;
      padding: var(${Qr});
      overflow: auto;
      overscroll-behavior: var(--arc-modal-overscroll-behavior, contain);
      min-height: var(--arc-modal-body-min-height, 3em);
      text-align: var(--arc-modal-body-text-align, var(${$i}•text•align));
    }

    [arc-modal-footer] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      flex-direction: var(--arc-modal-footer-flex-direction, unset);
      align-items: var(--arc-modal-footer-align-items, center);
      justify-content: var(--arc-modal-footer-justify-content, var(${zn}•justify•content));
      gap: var(--arc-modal-footer-gap, var(${kr}•gap));

      background: var(--arc-modal-footer-background, var(${yi}));
      padding: var(--arc-modal-footer-padding, var(${dt}));
      max-width: 100%;

      &[has-divider] {
        border-top: var(--arc-modal-footer-divider, var(${kr}•divider));
      }

      [footer-slot=content] {
        flex: var(--arc-modal-footer-content-flex, none);
        display: var(--arc-modal-footer-content-display, flex);
        gap: inherit;
      }
    }

    [arc-modal-dismiss] {
      position: var(--arc-modal-dismiss-position, absolute);
      inset: var(--arc-modal-dismiss-inset, var(${L}•16) var(${L}•16) auto auto);
      width: var(--arc-modal-dismiss-width, auto);
      overflow: visible;
      z-index: 2;
    }

    /* Nested confirm modal */
    &:not([is-top-layer]):has([arc-modal][is-confirm][open])::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--arc-modal-backdrop-background, var(${La}•bg));
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
      --arc-modal-max-width: var(--arc-modal-confirm-max-width, calc(100% - var(${L}•32)));
      --arc-button-bar-flex: none;

      z-index: var(--arc-modal-confirm-z-index, 3);

      inset: var(--arc-modal-confirm-inset, 0);
      translate: var(--arc-modal-confirm-translate, none);
      margin: var(--arc-modal-confirm-margin, auto);
    }
  }

  ${_x}
  ${Ix}
`,ut={variant:"common",backdropColor:"auto",message:"You have unsaved changes. Discard them?",onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},xp=({children:r,headerProps:e,bodyProps:a,footerProps:t,...o})=>{const n=(0,d.useRef)(null),{isOpen:c,autoFocusId:s,isTopLayer:u=ut.isTopLayer,isInverse:h=ut.isInverse,scheme:p=ut.scheme,backdropColor:v=ut.backdropColor,variant:g=ut.variant,message:f=ut.message,onCloseOverride:m=ut.onCloseOverride,onConfirmDiscard:$,onConfirmCancel:k,contentRef:A,...y}=o,{slotStart:w,TitleElement:x,titleContent:z,slotEnd:_,...P}=e||{},{primaryButton:C,secondaryButton:S,...I}=t||{},B=!!(z||w||_),N=p==="auto"?void 0:p,V=!!m,Z=G=>V?m?.("confirm:discard",G,n.current??void 0):$?.("confirm:discard",G),M=G=>V?m?.("confirm:cancel",G,n.current??void 0):k?.("confirm:cancel",G);rd({modalRef:n,onClose:m}),ed({modalRef:n,isOpen:c,isTopLayer:u}),ad({modalRef:n,isOpen:c,autoFocusId:s});const D=G=>{M(G),S?.onClick?.(G)},T=G=>{Z(G),C?.onClick?.(G)};return(0,i.jsx)("dialog",{...y,ref:n,"arc-modal":"","arc-scheme":h?"inverse":N,"is-confirm":g||"","is-inverse":h?"":void 0,"is-top-layer":u?"":void 0,"is-backdrop":v==="auto"?void 0:v,"data-size":"sm",closedby:"none",onKeyDown:wx("none"),children:(0,i.jsxs)(bi,{ref:A,children:[B&&(0,i.jsxs)($p,{...P,children:[w&&(0,i.jsx)("div",{"header-slot":"start",children:w}),(0,i.jsx)("div",{"header-slot":"content",children:(0,i.jsx)(od,{TitleElement:x,titleContent:z})}),_&&(0,i.jsx)("div",{"header-slot":"end",children:_})]}),(0,i.jsx)(nd,{...a,children:r||f&&(0,i.jsx)("p",{style:{margin:0},children:f})}),(0,i.jsx)(cd,{...I,children:(0,i.jsxs)(Et,{children:[(0,i.jsx)(Or,{...S,text:S?.text||"Cancel",variant:"common",hierarchy:"secondary",isInverse:h,onClick:D}),(0,i.jsx)(Or,{...C,text:C?.text||"Discard",variant:g??"common",hierarchy:"primary",isInverse:h,onClick:T})]})})]})})};zr("ArcModalConfirm",id);const Ne={size:"md",variant:"common",backdropColor:"auto",isTopLayer:!0,isInverse:!1,scheme:"auto",showDismiss:!0,closeOnEsc:!0,closeOnBackdrop:!1,hasConfirmFlow:!1,hasUnsavedChanges:!1,onCloseOverride:void 0,bypassConfirmWhen:{didPressEscapeKey:!1,didClickBackdrop:!1,didClickGoBackButton:!1,didClickDismissButton:!1,didClickPrimaryButton:!1,didClickSecondaryButton:!1,didClickTertiaryButton:!1},headerProps:{showDivider:!1},bodyProps:{padding:"auto"},footerProps:{showDivider:!1}},Tx=({children:r,confirmProps:e,headerProps:a,bodyProps:t,dismissProps:o,footerProps:n,...c})=>{const s=(0,d.useRef)(null),[u,h]=(0,d.useState)(!1),{isOpen:p,autoFocusId:v,isTopLayer:g=Ne.isTopLayer,isInverse:f=Ne.isInverse,scheme:m=Ne.scheme,backdropColor:$=Ne.backdropColor,hasConfirmFlow:k=Ne.hasConfirmFlow,hasUnsavedChanges:A=Ne.hasUnsavedChanges,onCloseOverride:y=Ne.onCloseOverride,bypassConfirmWhen:w=Ne.bypassConfirmWhen??{},size:x=Ne.size,closeOnBackdrop:z=Ne.closeOnBackdrop,closeOnEsc:_=Ne.closeOnEsc,showDismiss:P=Ne.showDismiss,onActionError:C,onClose:S,onToggle:I,width:B,height:N,style:V,contentRef:Z,...M}=c,{showGoBack:D,goBackProps:T,slotStart:G,TitleElement:cr,titleContent:gr,slotEnd:R,showDivider:er=Ne.headerProps?.showDivider,...lr}=a??{},{slotStart:fr,primaryButton:rr,secondaryButton:dr,tertiaryButton:xr,showDivider:sr=Ne.footerProps?.showDivider,...wr}=n??{},F=!!(D||gr||G||R),K=!!(rr||dr||xr),J=!!(K||fr),j=!!(k&&A),ir=_?"closerequest":"none",yr=m==="auto"?void 0:m,{didPressEscapeKey:br,didClickBackdrop:H,didClickGoBackButton:W,didClickDismissButton:q,didClickPrimaryButton:mr,didClickSecondaryButton:nr,didClickTertiaryButton:hr}=w,X=Cn({modalRef:s,shouldConfirm:j,setIsConfirming:h,onCloseOverride:y});rd({modalRef:s,shouldConfirm:j,setIsConfirming:h,onClose:S,onToggle:I}),ed({modalRef:s,isOpen:p,isTopLayer:g}),ad({modalRef:s,isOpen:p,autoFocusId:v}),mp({modalRef:s,isOpen:p,closeOnBackdrop:z,attemptCloseModal:H?Cn({modalRef:s,shouldConfirm:j&&!H,setIsConfirming:h}):X}),bp({modalRef:s,isOpen:p,closeOnEsc:_,closedBy:ir,attemptCloseModal:br?Cn({modalRef:s,shouldConfirm:j&&!br,setIsConfirming:h}):X});const pr=()=>h(!1),Lr=(Er,Ur)=>X(Er)(Ur),_r=(Er,Ur,Fr)=>async Hr=>{Hr?.preventDefault?.(),Hr?.stopPropagation?.();const We=()=>Ur?Cn({modalRef:s,shouldConfirm:j&&!Ur,setIsConfirming:h})(Er,Fr?.onCloseCallback)(Hr):X(Er,Fr?.onCloseCallback)(Hr);try{await Fr?.onClick?.(Hr),We()}catch(ee){C?.(ee,{reason:Er,event:Hr})}};return(0,i.jsxs)("dialog",{...M,ref:s,"arc-modal":"","arc-scheme":f?"inverse":yr,"is-inverse":f?"":void 0,"is-top-layer":g?"":void 0,"is-backdrop":$==="auto"?void 0:$,"data-size":x,closedby:ir,style:{"--arc-modal-width":B??"","--arc-modal-height":N??"",...V},children:[!F&&P&&(0,i.jsx)("div",{"arc-modal-dismiss":"",children:(0,i.jsx)(td,{...o,isInverse:f,onClick:_r("button:dismiss",q,o)})}),(0,i.jsxs)(bi,{ref:Z,inert:u?"":void 0,children:[F&&(0,i.jsxs)($p,{...lr,showDivider:er,children:[D&&(0,i.jsx)("div",{"header-slot":"go-back",children:(0,i.jsx)(yx,{...T,isInverse:f,onClick:_r("button:back",W,T)})}),G&&(0,i.jsx)("div",{"header-slot":"start",children:G}),(0,i.jsx)("div",{"header-slot":"content",children:(0,i.jsx)(od,{TitleElement:cr,titleContent:gr})}),R&&(0,i.jsx)("div",{"header-slot":"end",children:R}),P&&(0,i.jsx)("div",{"header-slot":"dismiss",children:(0,i.jsx)(td,{...o,isInverse:f,onClick:_r("button:dismiss",q,o)})})]}),(0,i.jsx)(nd,{...t,children:r}),J&&(0,i.jsxs)(cd,{...wr,showDivider:sr,children:[fr&&(0,i.jsx)("div",{"footer-slot":"content",children:fr}),K&&(0,i.jsxs)(Et,{children:[xr&&(0,i.jsx)(Or,{...xr,text:xr?.text||"Button",isInverse:f,variant:"common",hierarchy:"tertiary",onClick:_r("button:tertiary",hr,xr)}),dr&&(0,i.jsx)(Or,{...dr,text:dr?.text||"Cancel",isInverse:f,variant:"common",hierarchy:"secondary",onClick:_r("button:secondary",nr,dr)}),rr&&(0,i.jsx)(Or,{...rr,text:rr?.text||"Action",isInverse:f,variant:"common",hierarchy:"primary",onClick:_r("button:primary",mr,rr)})]})]})]}),k&&(0,i.jsx)(xp,{isOpen:u,isInverse:f,isTopLayer:g,backdropColor:$,...e,onConfirmDiscard:Lr,onConfirmCancel:pr})]})};zr("ArcModal",id);const Xa={variant:"common",backdropColor:"auto",showDismiss:!0,closeOnBackdrop:!1,closeOnEsc:!0,onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},Px={common:"fa-solid fa-cat-space",brand:"fa-kit fa-articulate",success:"fa-solid fa-badge-check",warning:"fa-solid fa-triangle-exclamation",error:"fa-solid fa-do-not-enter",info:"fa-solid fa-circle-info",processing:(0,i.jsx)(ss,{"arc-modal-spinner":""})},Rx=({children:r,dismissProps:e,bodyProps:a,footerProps:t,...o})=>{const n=(0,d.useRef)(null),{isOpen:c,autoFocusId:s,isTopLayer:u=Xa.isTopLayer,isInverse:h=Xa.isInverse,scheme:p=Xa.scheme,backdropColor:v=Xa.backdropColor,closeOnBackdrop:g=Xa.closeOnBackdrop,closeOnEsc:f=Xa.closeOnEsc,variant:m=Xa.variant,icon:$,TitleElement:k,titleContent:A,message:y,showDismiss:w,onCloseOverride:x=Xa.onCloseOverride,onClose:z,onToggle:_,contentRef:P,...C}=o,{primaryButton:S,...I}=t??{},B=$||Px[m],N=f?"closerequest":"none",V=p==="auto"?void 0:p,Z=Cn({modalRef:n,onCloseOverride:x});return rd({modalRef:n,onClose:z,onToggle:_}),ed({modalRef:n,isOpen:c,isTopLayer:u}),ad({modalRef:n,isOpen:c,autoFocusId:s}),mp({modalRef:n,isOpen:c,closeOnBackdrop:g,attemptCloseModal:Z}),bp({modalRef:n,isOpen:c,closeOnEsc:f,closedBy:N,attemptCloseModal:Z}),(0,i.jsxs)("dialog",{...C,ref:n,"arc-modal":"","arc-scheme":h?"inverse":V,"is-alert":m||"","is-inverse":h?"":void 0,"is-top-layer":u?"":void 0,"is-backdrop":v==="auto"?void 0:v,"data-size":"sm",closedby:N,children:[w&&(0,i.jsx)("div",{"arc-modal-dismiss":"",children:(0,i.jsx)(td,{...e,isInverse:h,onClick:Z("button:dismiss",e?.onClick)})}),(0,i.jsxs)(bi,{ref:P,children:[(0,i.jsx)(nd,{...a,children:r||(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(xx,{glyph:B,variant:m}),(0,i.jsx)(od,{TitleElement:k,titleContent:A}),(0,i.jsx)(kx,{message:y})]})}),(0,i.jsx)(cd,{...I,children:(0,i.jsx)(Et,{orientation:"vertical",children:(0,i.jsx)(Or,{...S,text:S?.text||"Close",variant:"common",hierarchy:"primary",isInverse:h,onClick:Z("button:primary",S?.onClick)})})})]})]})};zr("ArcModalAlert",id);const Lx=l`--arc•nav`,re=l`${Lx}•item`,Mx=l`
@layer arc-components {

  [arc-nav-list] {
    &[data-hierarchy=primary] {
      ${re}•fg: var(--arc-color-fg-primary);
      ${re}•fg•active: var(--arc-color-fg-brand-heavy);
      ${re}•bg•active: var(--arc-color-bg-selected-default);
      ${re}•bg•hover: var(--arc-color-bg-hover-subtle);
      ${re}•fg•disabled: var(--arc-color-fg-disabled);
      ${re}•bg•disabled: var(--arc-color-bg-disabled);
      ${re}•edge•disabled: transparent;
    }

    &[data-hierarchy=secondary] {
      ${re}•fg: var(--arc-color-fg-secondary);
      ${re}•fg•active: var(--arc-color-fg-primary);
      ${re}•bg•active: var(--arc-color-bg-secondary);
      ${re}•bg•hover: var(--arc-color-bg-hover-subtle);
      ${re}•fg•disabled: var(--arc-color-fg-disabled);
      ${re}•bg•disabled: var(--arc-color-bg-disabled);
      ${re}•edge•disabled: var(--arc-color-border-disabled);
    }

    /* Inter-Component Communication • ArcButton/ArcIconText -------• */
    &[data-hierarchy=primary] [arc-button-bar-item]:not(:has([is-selected], [is-disabled])) {
      --arc-icon-text-icon-color: var(--arc-color-fg-secondary);
    }

    &:not([data-hierarchy=primary]) [arc-button-bar-item]:not([data-rollup-trigger]) {
      [arc-icon-text] {
        --arc-icon-text-overflow: visible;
      }
    }

    [arc-button-bar-item] {
      /* Inter-Component Communication • ArcMenu -------------------• */
      --arc-menu-item-background: transparent;

      /* Inter-Component Communication • ArcIcon -------------------• */
      [arc-icon-text] {
        --arc-icon-align-self: center;
      }

      /* Inter-Component Communication • ArcButton -----------------• */
      --arc-button-font-weight: var(--arc-font-weight-500);
      --arc-button-label-display: contents;
      --arc-button-content-gap: var(${L}•8);
      --arc-button-inline-spacing: 0;
      --arc-button-overflow: hidden;

      &:not(:has([is-selected], [is-disabled])) {
        --arc-button-color: var(${re}•fg);

        [arc-button]:hover {
          --arc-button-background: var(${re}•bg•hover);
        }
      }

      [is-selected] {
        --arc-button-font-weight: var(--arc-font-weight-600);
        --arc-button-color: var(${re}•fg•active);
        --arc-button-background: var(${re}•bg•active);

        &[is-disabled] {
          --arc-button-color: var(${re}•fg•disabled);
          --arc-button-background: var(${re}•bg•disabled);
          --arc-button-border: var(${b}•1) solid var(${re}•edge•disabled);
        }
      }
    }

    /* Roll-up synchronization -------------------------------------• */
    [arc-button-bar-rollup=menu] [arc-menu-item] {
      &:not(:has([is-disabled])) {
        --arc-button-color: var(${re}•fg);
      }

      &:not(:has([is-selected], [is-disabled])):hover {
        --arc-button-background: var(${re}•bg•hover);
      }

      &:has([is-selected]) {
        --arc-button-color: var(${re}•fg•active);
        --arc-button-background: var(${re}•bg•active);
      }
    }
  }
}
`,jx=Wr(Ba,["horizontal","vertical"]),Dx=["auto",...Wr(Lt,["compact","comfortable"])],uw=["auto",...Wr(Mt,["primary","secondary"])],Ox=["auto",...Wr(Mt,["primary","secondary"])],Nx=jx,Bx=Dx,Fx=({items:r,canRollUp:e,maxVisible:a,rollUpLabel:t,density:o,hierarchy:n="auto",orientation:c="horizontal",isFlipped:s,isDisabled:u,isMinimized:h=!1,showIcons:p,missingIcon:v,...g})=>{const f=c==="vertical",$=n==="auto"?f?"primary":"secondary":n,k=h?!0:p,A=h?!1:void 0;return(0,i.jsx)("nav",{...g,"arc-nav-list":"","data-hierarchy":$,children:(0,i.jsx)(Et,{items:r,listRole:"list",selectedAttr:"aria-current",showIcons:k,showLabels:A,"is-minimized":h?"":void 0,missingIcon:v,canRollUp:f?!1:e,maxVisible:a,rollUpLabel:t,density:o,orientation:c,isFlipped:s,isDisabled:u})})};zr("ArcNavList",Mx);var kp=na(57267),ye,ne,xa,qa;function Hx(r=!1){if(typeof r!="boolean")throw new Error("defaultValue must be `true` or `false`");const[e,a]=ye(r),t=ne(()=>{a(!0)},[]),o=ne(()=>{a(!1)},[]),n=ne(()=>{a(c=>!c)},[]);return{value:e,setValue:a,setTrue:t,setFalse:o,toggle:n}}var ka=typeof window<"u"?d.useLayoutEffect:d.useEffect;function oa(r,e,a,t){const o=(0,d.useRef)(e);ka(()=>{o.current=e},[e]),(0,d.useEffect)(()=>{const n=a?.current??window;if(!(n&&n.addEventListener))return;const c=s=>{o.current(s)};return n.addEventListener(r,c,t),()=>{n.removeEventListener(r,c,t)}},[r,a,t])}function hw(r){oa("click",e=>{r(e)})}function pw(){const[r,e]=ye(null),a=ne(async t=>{if(!navigator?.clipboard)return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(t),e(t),!0}catch(o){return console.warn("Copy failed",o),e(null),!1}},[]);return[r,a]}function Vx(r){const[e,a]=ye(r??0),t=ne(()=>{a(c=>c+1)},[]),o=ne(()=>{a(c=>c-1)},[]),n=ne(()=>{a(r??0)},[r]);return{count:e,increment:t,decrement:o,reset:n,setCount:a}}function Ux(r,e){const a=xa(r);ka(()=>{a.current=r},[r]),qa(()=>{if(e===null)return;const t=setInterval(()=>{a.current()},e);return()=>{clearInterval(t)}},[e])}function gw({countStart:r,countStop:e=0,intervalMs:a=1e3,isIncrement:t=!1}){const{count:o,increment:n,decrement:c,reset:s}=Vx(r),{value:u,setTrue:h,setFalse:p}=Hx(!1),v=ne(()=>{p(),s()},[p,s]),g=ne(()=>{if(o===e){p();return}t?n():c()},[o,e,c,n,t,p]);return Ux(g,u?a:null),[o,{startCountdown:h,stopCountdown:p,resetCountdown:v}]}function xi(r){const e=(0,d.useRef)(()=>{throw new Error("Cannot call an event handler while rendering.")});return ka(()=>{e.current=r},[r]),(0,d.useCallback)((...a)=>{var t;return(t=e.current)==null?void 0:t.call(e,...a)},[e])}var sd=typeof window>"u";function ld(r,e,a={}){const{initializeWithValue:t=!0}=a,o=(0,d.useCallback)(g=>a.serializer?a.serializer(g):JSON.stringify(g),[a]),n=(0,d.useCallback)(g=>{if(a.deserializer)return a.deserializer(g);if(g==="undefined")return;const f=e instanceof Function?e():e;let m;try{m=JSON.parse(g)}catch($){return console.error("Error parsing JSON:",$),f}return m},[a,e]),c=(0,d.useCallback)(()=>{const g=e instanceof Function?e():e;if(sd)return g;try{const f=window.localStorage.getItem(r);return f?n(f):g}catch(f){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,f),g}},[e,r,n]),[s,u]=(0,d.useState)(()=>t?c():e instanceof Function?e():e),h=xi(g=>{sd&&console.warn(`Tried setting localStorage key \u201C${r}\u201D even though environment is not a client`);try{const f=g instanceof Function?g(c()):g;window.localStorage.setItem(r,o(f)),u(f),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))}catch(f){console.warn(`Error setting localStorage key \u201C${r}\u201D:`,f)}}),p=xi(()=>{sd&&console.warn(`Tried removing localStorage key \u201C${r}\u201D even though environment is not a client`);const g=e instanceof Function?e():e;window.localStorage.removeItem(r),u(g),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))});(0,d.useEffect)(()=>{u(c())},[r]);const v=(0,d.useCallback)(g=>{g.key&&g.key!==r||u(c())},[r,c]);return oa("storage",v),oa("local-storage",v),[s,h,p]}var Gx=null;function wp(r,{defaultValue:e=!1,initializeWithValue:a=!0}={}){const t=s=>Gx?e:window.matchMedia(s).matches,[o,n]=ye(()=>a?t(r):e);function c(){n(t(r))}return ka(()=>{const s=window.matchMedia(r);return c(),s.addListener?s.addListener(c):s.addEventListener("change",c),()=>{s.removeListener?s.removeListener(c):s.removeEventListener("change",c)}},[r]),o}var Kx="(prefers-color-scheme: dark)",Wx="usehooks-ts-dark-mode";function vw(r={}){const{defaultValue:e,localStorageKey:a=Wx,initializeWithValue:t=!0}=r,o=wp(Kx,{initializeWithValue:t,defaultValue:e}),[n,c]=ld(a,e??o??!1,{initializeWithValue:t});return ka(()=>{o!==n&&c(o)},[o]),{isDarkMode:n,toggle:()=>{c(s=>!s)},enable:()=>{c(!0)},disable:()=>{c(!1)},set:s=>{c(s)}}}function Ap(r){const e=(0,d.useRef)(r);e.current=r,(0,d.useEffect)(()=>()=>{e.current()},[])}function ki(r,e=500,a){const t=(0,d.useRef)();Ap(()=>{t.current&&t.current.cancel()});const o=(0,d.useMemo)(()=>{const n=kp(r,e,a),c=(...s)=>n(...s);return c.cancel=()=>{n.cancel()},c.isPending=()=>!!t.current,c.flush=()=>n.flush(),c},[r,e,a]);return(0,d.useEffect)(()=>{t.current=kp(r,e,a)},[r,e,a]),o}function fw(r,e,a){const t=a?.equalityFn??((h,p)=>h===p),o=r instanceof Function?r():r,[n,c]=ye(o),s=xa(o),u=ki(c,e,a);return t(s.current,o)||(u(o),s.current=o),[n,u]}function mw(r,e={}){const{preserveTitleOnUnmount:a=!0}=e,t=xa(null);ka(()=>{t.current=window.document.title},[]),ka(()=>{window.document.title=r},[r]),Ap(()=>{!a&&t.current&&(window.document.title=t.current)})}function bw(r){const[e,a]=ye(!1),t=()=>{a(!0)},o=()=>{a(!1)};return oa("mouseenter",t,r),oa("mouseleave",o,r),e}function $w({threshold:r=0,root:e=null,rootMargin:a="0%",freezeOnceVisible:t=!1,initialIsIntersecting:o=!1,onChange:n}={}){var c;const[s,u]=ye(null),[h,p]=ye(()=>({isIntersecting:o,entry:void 0})),v=xa();v.current=n;const g=((c=h.entry)==null?void 0:c.isIntersecting)&&t;qa(()=>{if(!s||!("IntersectionObserver"in window)||g)return;let $;const k=new IntersectionObserver(A=>{const y=Array.isArray(k.thresholds)?k.thresholds:[k.thresholds];A.forEach(w=>{const x=w.isIntersecting&&y.some(z=>w.intersectionRatio>=z);p({isIntersecting:x,entry:w}),v.current&&v.current(x,w),x&&t&&$&&($(),$=void 0)})},{threshold:r,root:e,rootMargin:a});return k.observe(s),()=>{k.disconnect()}},[s,JSON.stringify(r),e,a,g,t]);const f=xa(null);qa(()=>{var $;!s&&(($=h.entry)!=null&&$.target)&&!t&&!g&&f.current!==h.entry.target&&(f.current=h.entry.target,p({isIntersecting:o,entry:void 0}))},[s,h.entry,t,g,o]);const m=[u,!!h.isIntersecting,h.entry];return m.ref=m[0],m.isIntersecting=m[1],m.entry=m[2],m}function yw(){const[r,e]=ye(!1);return qa(()=>{e(!0)},[]),r}function Xx(){const r=xa(!1);return qa(()=>(r.current=!0,()=>{r.current=!1}),[]),ne(()=>r.current,[])}function xw(r=new Map){const[e,a]=ye(new Map(r)),t={set:ne((o,n)=>{a(c=>{const s=new Map(c);return s.set(o,n),s})},[]),setAll:ne(o=>{a(()=>new Map(o))},[]),remove:ne(o=>{a(n=>{const c=new Map(n);return c.delete(o),c})},[]),reset:ne(()=>{a(()=>new Map)},[])};return[e,t]}function kw(r,e,a="mousedown",t={}){oa(a,o=>{const n=o.target;if(!n||!n.isConnected)return;(Array.isArray(r)?r.filter(s=>!!s.current).every(s=>s.current&&!s.current.contains(n)):r.current&&!r.current.contains(n))&&e(o)},void 0,t)}var Sp=null;function ww(r,e={}){let{initializeWithValue:a=!0}=e;Sp&&(a=!1);const t=ne(u=>{if(e.deserializer)return e.deserializer(u);if(u==="undefined")return;let h;try{h=JSON.parse(u)}catch(p){return console.error("Error parsing JSON:",p),null}return h},[e]),o=ne(()=>{if(Sp)return null;try{const u=window.localStorage.getItem(r);return u?t(u):null}catch(u){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,u),null}},[r,t]),[n,c]=ye(()=>{if(a)return o()});qa(()=>{c(o())},[r]);const s=ne(u=>{u.key&&u.key!==r||c(o())},[r,o]);return oa("storage",s),oa("local-storage",s),n}var Cp=null;function Aw(r){const{ref:e,box:a="content-box"}=r,[{width:t,height:o},n]=ye(Cp),c=Xx(),s=xa({...Cp}),u=xa(void 0);return u.current=r.onResize,qa(()=>{if(!e.current||typeof window>"u"||!("ResizeObserver"in window))return;const h=new ResizeObserver(([p])=>{const v=a==="border-box"?"borderBoxSize":a==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",g=Ep(p,v,"inlineSize"),f=Ep(p,v,"blockSize");if(s.current.width!==g||s.current.height!==f){const $={width:g,height:f};s.current.width=g,s.current.height=f,u.current?u.current($):c()&&n($)}});return h.observe(e.current,{box:a}),()=>{h.disconnect()}},[a,e,c]),{width:t,height:o}}function Ep(r,e,a){return r[e]?Array.isArray(r[e])?r[e][0][a]:r[e][a]:e==="contentBoxSize"?r.contentRect[a==="inlineSize"?"width":"height"]:void 0}var zp=null;function Sw(r={}){let{initializeWithValue:e=!0}=r;zp&&(e=!1);const a=()=>{if(!zp)return window.screen},[t,o]=ye(()=>{if(e)return a()}),n=ki(o,r.debounceDelay);function c(){const s=a(),u=r.debounceDelay?n:o;if(s){const{width:h,height:p,availHeight:v,availWidth:g,colorDepth:f,orientation:m,pixelDepth:$}=s;u({width:h,height:p,availHeight:v,availWidth:g,colorDepth:f,orientation:m,pixelDepth:$})}}return oa("resize",c),ka(()=>{c()},[]),t}var wi=null;function qx(r){const e=document.querySelector(`script[src="${r}"]`),a=e?.getAttribute("data-status");return{node:e,status:a}}function Cw(r,e){const[a,t]=ye(()=>!r||e?.shouldPreventLoad?"idle":typeof window>"u"?"loading":wi.get(r)??"loading");return qa(()=>{if(!r||e?.shouldPreventLoad)return;const o=wi.get(r);if(o==="ready"||o==="error"){t(o);return}const n=qx(r);let c=n.node;if(c)t(n.status??o??"loading");else{c=document.createElement("script"),c.src=r,c.async=!0,e?.id&&(c.id=e.id),c.setAttribute("data-status","loading"),document.body.appendChild(c);const u=h=>{const p=h.type==="load"?"ready":"error";c?.setAttribute("data-status",p)};c.addEventListener("load",u),c.addEventListener("error",u)}const s=u=>{const h=u.type==="load"?"ready":"error";t(h),wi.set(r,h)};return c.addEventListener("load",s),c.addEventListener("error",s),()=>{c&&(c.removeEventListener("load",s),c.removeEventListener("error",s)),c&&e?.removeOnUnmount&&(c.remove(),wi.delete(r))}},[r,e?.shouldPreventLoad,e?.removeOnUnmount,e?.id]),a}var Yx=null;function Ew(r={}){const{autoLock:e=!0,lockTarget:a,widthReflow:t=!0}=r,[o,n]=ye(!1),c=xa(null),s=xa(null),u=()=>{if(c.current){const{overflow:p,paddingRight:v}=c.current.style;if(s.current={overflow:p,paddingRight:v},t){const g=c.current===document.body?window.innerWidth:c.current.offsetWidth,f=parseInt(window.getComputedStyle(c.current).paddingRight,10)||0,m=g-c.current.scrollWidth;c.current.style.paddingRight=`${m+f}px`}c.current.style.overflow="hidden",n(!0)}},h=()=>{c.current&&s.current&&(c.current.style.overflow=s.current.overflow,t&&(c.current.style.paddingRight=s.current.paddingRight)),n(!1)};return ka(()=>{if(!Yx)return a&&(c.current=typeof a=="string"?document.querySelector(a):a),c.current||(c.current=document.body),e&&u(),()=>{h()}},[e,a,t]),{isLocked:o,lock:u,unlock:h}}var dd=typeof window>"u";function Zx(r,e,a={}){const{initializeWithValue:t=!0}=a,o=(0,d.useCallback)(g=>a.serializer?a.serializer(g):JSON.stringify(g),[a]),n=(0,d.useCallback)(g=>{if(a.deserializer)return a.deserializer(g);if(g==="undefined")return;const f=e instanceof Function?e():e;let m;try{m=JSON.parse(g)}catch($){return console.error("Error parsing JSON:",$),f}return m},[a,e]),c=(0,d.useCallback)(()=>{const g=e instanceof Function?e():e;if(dd)return g;try{const f=window.sessionStorage.getItem(r);return f?n(f):g}catch(f){return console.warn(`Error reading sessionStorage key \u201C${r}\u201D:`,f),g}},[e,r,n]),[s,u]=(0,d.useState)(()=>t?c():e instanceof Function?e():e),h=xi(g=>{dd&&console.warn(`Tried setting sessionStorage key \u201C${r}\u201D even though environment is not a client`);try{const f=g instanceof Function?g(c()):g;window.sessionStorage.setItem(r,o(f)),u(f),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))}catch(f){console.warn(`Error setting sessionStorage key \u201C${r}\u201D:`,f)}}),p=xi(()=>{dd&&console.warn(`Tried removing sessionStorage key \u201C${r}\u201D even though environment is not a client`);const g=e instanceof Function?e():e;window.sessionStorage.removeItem(r),u(g),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))});(0,d.useEffect)(()=>{u(c())},[r]);const v=(0,d.useCallback)(g=>{g.key&&g.key!==r||u(c())},[r,c]);return oa("storage",v),oa("session-storage",v),[s,h,p]}function zw(r){const[e,a]=ye(1),t=e+1<=r,o=e-1>0,n=ne(h=>{const p=h instanceof Function?h(e):h;if(p>=1&&p<=r){a(p);return}throw new Error("Step not valid")},[r,e]),c=ne(()=>{t&&a(h=>h+1)},[t]),s=ne(()=>{o&&a(h=>h-1)},[o]),u=ne(()=>{a(1)},[]);return[e,{goToNextStep:c,goToPrevStep:s,canGoToNextStep:t,canGoToPrevStep:o,setStep:n,reset:u}]}var Jx="(prefers-color-scheme: dark)",Qx="usehooks-ts-ternary-dark-mode";function _w({defaultValue:r="system",localStorageKey:e=Qx,initializeWithValue:a=!0}={}){const t=wp(Jx,{initializeWithValue:a}),[o,n]=ld(e,r,{initializeWithValue:a});return{isDarkMode:o==="dark"||o==="system"&&t,ternaryDarkMode:o,setTernaryDarkMode:n,toggleTernaryDarkMode:()=>{const u=["light","system","dark"];n(h=>{const p=(u.indexOf(h)+1)%u.length;return u[p]})}}}function Iw(r,e){const a=xa(r);ka(()=>{a.current=r},[r]),qa(()=>{if(!e&&e!==0)return;const t=setTimeout(()=>{a.current()},e);return()=>{clearTimeout(t)}},[e])}function Tw(r){const[e,a]=ye(!!r),t=ne(()=>{a(o=>!o)},[]);return[e,t,a]}var rk=null;function Pw(r={}){let{initializeWithValue:e=!0}=r;rk&&(e=!1);const[a,t]=ye(()=>e?{width:window.innerWidth,height:window.innerHeight}:{width:void 0,height:void 0}),o=ki(t,r.debounceDelay);function n(){(r.debounceDelay?o:t)({width:window.innerWidth,height:window.innerHeight})}return oa("resize",n),ka(()=>{n()},[]),a}const ek=(r,e)=>{const a=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value")?.set;a?a.call(r,e):r.value=e,r.dispatchEvent(new Event("input",{bubbles:!0}))},ak=({defaultValue:r="",value:e,debounceMs:a,inputElementRef:t,onClear:o,onKeyDown:n,onSearch:c})=>{const s=e!==void 0,u=c!==void 0&&a!==void 0,[h,p]=(0,d.useState)(r),v=s?e??"":h,g=(0,d.useRef)(!1),f=ki(y=>{c?.(y)},a??0),m=(0,d.useCallback)(()=>{f.cancel()},[f]),$=(0,d.useCallback)(y=>{s||p(y)},[s]);(0,d.useEffect)(()=>m,[m]),(0,d.useEffect)(()=>{if(u){if(!g.current){g.current=!0;return}m(),f(v)}},[m,f,v,u]);const k=(0,d.useCallback)(()=>{m();const y=t.current;if(y){ek(y,""),o?.(),y.focus();return}s||p(""),o?.()},[m,t,s,o]),A=(0,d.useCallback)(y=>{n?.(y),!(y.defaultPrevented||y.key!=="Enter"||!c)&&(m(),c(v))},[m,n,c,v]);return{resolvedValue:v,handleValueChange:$,handleClear:k,handleKeyDown:A}},tk=hi,ok=pi,nk=$r(zl,["outline","solid"]),_p="Search",ck="Clear search",ud={layout:"hug",size:"inherit",variant:"outline"},ik=({canClear:r,isDisabled:e,onClear:a})=>{if(r)return(0,i.jsx)(gp,{"aria-label":ck,disabled:e,icon:"fa-regular fa-xmark",onClick:a})},sk=({ariaLabel:r,ariaLabelledBy:e,headerLabel:a})=>r??(!a&&!e?_p:void 0),Ip=(0,d.forwardRef)(({debounceMs:r,inputProps:e,layout:a=ud.layout,onClear:t,onSearch:o,size:n=ud.size,variant:c=ud.variant,headerLabel:s,headerSlot:u,footerCaption:h,footerSlot:p,onChange:v,...g},f)=>{const{id:m,value:$,defaultValue:k="",onChange:A,onKeyDown:y,placeholder:w=_p,disabled:x,readOnly:z,required:_,"aria-label":P,"aria-labelledby":C,...S}=e,I=Nr(m,"arc-search"),B=(0,d.useRef)(null),{resolvedValue:N,handleValueChange:V,handleClear:Z,handleKeyDown:M}=ak({defaultValue:k,value:$,debounceMs:r,inputElementRef:B,onClear:t,onKeyDown:y,onSearch:o}),D=!x&&!z&&N.length>0,T=sk({ariaLabel:P,ariaLabelledBy:C,headerLabel:s}),G=ik({canClear:D,isDisabled:x,onClear:Z}),cr=R=>{B.current=R,Ae(f,R)},gr=(R,er)=>{V(er.target.value),A?.(R,er)};return(0,i.jsx)(uo,{...g,"arc-search":"",layout:a,size:n,variant:c,ref:cr,onChange:v,headerLabel:s,headerSlot:u,inputPrefix:(0,i.jsx)(Sr,{icon:"fa-regular fa-search"}),inputAction:G,footerCaption:h,footerSlot:p,inputProps:{...S,id:I,value:N,disabled:x,placeholder:w,readOnly:z,required:_,onChange:gr,onKeyDown:M,"aria-disabled":x||void 0,"aria-label":T,"aria-labelledby":C,"aria-readonly":z||void 0,"aria-required":_||void 0}})});Ip.displayName="ArcSearch";const lk=hi,dk=pi,uk=$r(Yr,["outline","solid","plain"]),Tp=()=>typeof globalThis?.CSS?.supports=="function"&&globalThis.CSS.supports("appearance","base-select"),Ai=r=>Array.isArray(r.options),fo=r=>{const e=r?.variant;return e!=="divider"&&e!=="section-label"},Pp=r=>r?.variant==="section-label"&&!!(r.text||r.icon),Rp=r=>{},Lp=(r=[])=>r.flatMap(e=>Ai(e)?e.options:[e]).some(e=>fo(e)&&e.value===""),Mp=r=>{const e=o=>typeof o=="string"&&o.trim().length>0,a=o=>{if(typeof o!="object"||o===null)return;const{name:n}=o;return e(n)?n:void 0};return[r?.text,a(r?.avatar),r?.["aria-label"]].find(e)??"Anonymous"},_n=l`--arc•select`,Ke=l`${_n}•picker`,jp=l`${Ke}•fg`,Dp=l`${Ke}•bg`,hd=l`${_n}•option`,In=l`${hd}•fg`,Tn=l`${hd}•bg`,Tt=l`${hd}•icon`,hk=l`
  ${jp}: currentcolor;
  ${Dp}: var(--arc-color-bg-mono);
  ${_n}•placeholder•fg: var(--arc-select-placeholder-color, var(--arc-color-fg-secondary));

  ${Ke}•width: auto;
  ${Ke}•min•width: 3em;
  ${Ke}•border•radius: var(--arc-border-radius-lg);
  ${Ke}•shadow: var(--arc-shadow-lg);

  ${In}: currentcolor;
  ${Tn}: transparent;

  ${Tt}•display: none;
  ${Tt}•color: var(${In});
`,pk=l`
  &[data-layout=fill] {
    ${Ke}•width: 100%; /* fallback */
    ${Ke}•width: anchor-size(inline);
  }
`,gk=l`
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
`,vk=l`
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
`,fk=l`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-select] {
    ${hk}
    ${pk}
  }

  /* CORE ----------------------------------------------------------• */

  [arc-select] {
    select,
    ::picker(select) {
      appearance: base-select;
    }

    ::picker(select) {
      flex: 1;
      display: var(${Ke}•display, none);
      flex-direction: column;
      gap: var(${L}•4);
      border: none;
      color: var(${jp});
      width: var(--arc-select-picker-width, var(${Ke}•width));
      min-width: var(--arc-select-picker-min-width, var(${Ke}•min•width));
      margin: var(--arc-select-picker-margin, var(${L}•4) 0);
      padding: var(--arc-select-picker-padding, var(${L}•4));
      background: var(--arc-select-picker-background, var(${Dp}));
      border-radius: var(--arc-select-picker-border-radius, var(${Ke}•border•radius));
      box-shadow: var(--arc-select-picker-shadow, var(${Ke}•shadow));
    }

    ::picker(select):popover-open {
      ${Ke}•display: flex;
    }

    /* Hide default picker icon */
    ::picker-icon {
      display: none;
    }

    select {
      cursor: inherit;
      flex: 1;
      align-items: center;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      padding: 0;
      margin: 0;
      outline: none;
      padding-inline: var(${b}•12);
      max-width: var(--arc-select-max-width, var(--js•max•width, none));
    }

    [arc-select-button] {
      display: flex;
      align-items: center;
      gap: var(${L}•8);
      width: 100%;
    }

    [arc-select-placeholder] {
      flex: 1;
      color: var(${_n}•placeholder•fg);
    }

    selectedcontent {
      /* Inter-Component Communication -----------------------------• */
      --arc-icon-text-font-weight: normal;
      --arc-icon-text-subtext-display: none;
      --arc-avatar-text-font-weight: normal;
      --arc-avatar-subtext-display: none;
      --arc-avatar-size: var(${b}•24);
      --arc-avatar-initial-font-size: var(${b}•12);

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
      font-size: var(${b}•12);
      font-weight: var(--arc-font-weight-600);
      color: var(--arc-select-legend-color, var(--arc-color-fg-secondary));
      padding: var(--arc-select-legend-padding, var(${L}•8));
      cursor: default;
    }

    /* Separator above each legend after the first optgroup. */
    optgroup ~ optgroup [arc-select-option-group-legend] {
      border-top: var(${b}•1) solid var(--arc-color-border-mid);
      margin-top: var(${L}•4);
    }

    [arc-select-option] {
      flex: none;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: var(${L}•8);
      width: 100%;
      min-width: 0;
      color: var(${In});
      background: var(--arc-select-option-background, var(${Tn}));
      border-radius: var(--arc-select-option-border-radius, var(--arc-border-radius-md));
      padding: var(--arc-select-option-padding, var(${L}•8));

      &::checkmark {
        display: none;
      }

      &:disabled {
        ${In}: var(--arc-color-fg-disabled);
        ${Tn}: transparent;
        ${Tt}•display: none;
        cursor: var(--arc-select-disabled-cursor, not-allowed);
      }

      &:not(:disabled):hover {
        ${Tn}: var(--arc-color-bg-hover-default);
      }

      &:not(:disabled):checked {
        ${Tn}: var(--arc-color-bg-selected-default);
        ${Tt}•display: flex;
        ${Tt}•color: var(--arc-select-option-selected-icon-color, var(${In}));
      }

      [arc-select-icon=selected] {
        display: var(${Tt}•display, none);
        color: var(${Tt}•color, currentcolor);
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
        color: var(${_n}•placeholder•fg);
      }
    }
  }

  ${gk}
  ${vk}

}
`,mk=(0,d.forwardRef)(({layout:r="hug",size:e="inherit",variant:a="outline",tag:t="span",items:o,placeholder:n,renderItem:c,headerLabel:s,headerSlot:u,footerCaption:h,footerSlot:p,id:v,value:g,defaultValue:f,required:m,disabled:$,readOnly:k,maxWidth:A,inputProps:y,...w},x)=>{const{name:z,onBlur:_,onChange:P,onFocus:C,onInput:S,"aria-describedby":I,"aria-label":B,"aria-labelledby":N,...V}=w,Z=Nr(v,"arc-select"),M=a==="plain"&&r==="fill"?"hug":r,D=$||void 0,T=k||void 0,G=m||void 0,cr=Tp(),gr=a!=="plain"&&!!(s||u),R=a!=="plain"&&!!(h||p),er=typeof n=="string"&&n.length>0&&!Lp(o),lr=f??(er?"":void 0),fr=g??lr,rr=er&&fr==="",dr=cr&&er&&fr==="",xr=T&&fr!=null?String(fr):void 0,sr=o.flatMap(j=>Ai(j)?j.options.filter(fo):fo(j)?[j]:(Rp(j),[])),wr=new Map(sr.map((j,ir)=>[j,ir])),F=j=>{const{itemId:ir,...yr}=j,br=Uh(co(j));return(0,i.jsx)(br,{...yr})},K=j=>{const ir=wr.get(j)??0,yr=j["aria-disabled"]===!0||j.disabled===!0,br=typeof j.itemId=="string"&&j.itemId.length>0?j.itemId:ir,H=String(j?.value??j?.itemId??ir);return(0,i.jsx)("option",{value:H,disabled:yr||xr!==void 0&&H!==xr||void 0,"arc-select-option":"",children:cr?(0,i.jsxs)(i.Fragment,{children:[c?c(j,ir):F(j),(0,i.jsx)("span",{"arc-select-icon":"selected","aria-hidden":!0,children:(0,i.jsx)(Sr,{icon:"fa-regular fa-check arc-fw"})})]}):Mp(j)},br)},J=(j,ir)=>{const yr=j.options.filter(fo);if(yr.length===0)return null;const br=j.options.find(Pp);return(0,i.jsxs)("optgroup",{label:j.label,disabled:j.disabled||void 0,children:[cr&&br&&(0,i.jsx)("legend",{"arc-select-option-group-legend":"",children:F(br)}),yr.map(K)]},j.itemId??`${j.label}-${ir}`)};return(0,i.jsxs)(t,{...V,"arc-select":"","arc-input":"select","data-layout":M,"data-size":e,"data-variant":a,children:[gr&&(0,i.jsxs)(Rr.Header,{children:[(0,i.jsx)(Rr.HeaderLabel,{htmlFor:Z,children:s}),!!u&&(0,i.jsx)(Rr.Spacer,{}),(0,i.jsx)(Rr.HeaderSlot,{children:u})]}),(0,i.jsx)(Rr.InputBody,{children:(0,i.jsxs)("select",{...y,name:y?.name??z,onBlur:y?.onBlur??_,onChange:y?.onChange??P,onFocus:y?.onFocus??C,onInput:y?.onInput??S,"aria-describedby":y?.["aria-describedby"]??I,"aria-label":y?.["aria-label"]??B,"aria-labelledby":y?.["aria-labelledby"]??N,value:g,defaultValue:g==null?lr:void 0,required:m,disabled:$,ref:x,id:Z,"aria-disabled":D,"aria-required":G,"data-readonly":T,"data-placeholder":rr||void 0,style:{...A?{"--js\u2022max\u2022width":A}:{},...y?.style},children:[(0,i.jsxs)("button",{"arc-select-button":"",children:[dr&&(0,i.jsx)(ie,{"arc-select-placeholder":"",text:n,overflow:"truncate"}),(0,i.jsx)("selectedcontent",{}),(0,i.jsx)("span",{"aria-hidden":!0,children:(0,i.jsx)(Sr,{icon:"fa-regular fa-angle-down arc-fw"})})]}),er&&(0,i.jsx)("option",{value:"",disabled:!0,hidden:!0,children:n}),o.map((j,ir)=>Ai(j)?J(j,ir):fo(j)?K(j):null)]})}),R&&(0,i.jsxs)(Rr.Footer,{children:[(0,i.jsx)(Rr.FooterCaption,{children:h}),!!p&&(0,i.jsx)(Rr.Spacer,{}),(0,i.jsx)(Rr.FooterSlot,{children:p})]})]})});zr("ArcSelect",fk);const bk=$r(ke,["inherit","md","sm"]),xe={On:"on",Off:"off"},mo={Before:"before",After:"after"},$k=({disabled:r,id:e,name:a,size:t="md",value:o,labelOff:n,labelOn:c,onChange:s,...u})=>{const h=Nr(a,"arc-switch-name"),p=Nr(e?`${e}-off`:void 0,"arc-switch-off"),v=Nr(e?`${e}-on`:void 0,"arc-switch-on"),g=y=>{if(y.code==="Space"){y.preventDefault(),y.stopPropagation();const w=o===xe.On?xe.Off:xe.On;s?.({value:w},y)}},f=y=>{const w={on:Po(c),off:Po(n)};return w?.on&&w?.off?w[y]:!w?.on&&w?.off?`${w?.off}: ${y}`:w?.on&&!w?.off?`${w?.on}: ${y}`:w[y]},m=(0,i.jsxs)(Ic,{type:"switch",onKeyDown:g,children:[(0,i.jsx)(Jo,{type:"switch",name:h,id:p,value:xe.Off,checked:o===xe.Off,disabled:r,"aria-label":f(xe.Off)?.trim(),onChange:s}),(0,i.jsx)(Jo,{type:"switch",name:h,id:v,value:xe.On,checked:o===xe.On,disabled:r,"aria-label":f(xe.On)?.trim(),onChange:s}),(0,i.jsx)("span",{"data-element":"mask"})]}),$=!c&&o===xe.Off?v:p,k=!n&&o===xe.On?p:v,A=!!(c||n)&&(0,i.jsxs)(i.Fragment,{children:[!!n&&(0,i.jsx)(yt,{htmlFor:$,"arc-switch-label":c?xe.Off:"",children:(0,i.jsx)(xt,{children:n})}),m,!!c&&(0,i.jsx)(yt,{htmlFor:k,"arc-switch-label":n?xe.On:"",children:(0,i.jsx)(xt,{children:c})})]});return(0,i.jsx)("span",{...u,"arc-switch":"","data-state":o,"data-size":t,role:"radiogroup",children:A||m})},he=l`--arc•switch`,Kr=l`${he}•knob`,yk=l`
@layer arc-components {

  [arc-switch] {
    ${he}•background: var(--arc-color-alpha-white-100);
    ${Kr}•shadow: var(--arc-shadow-md);

    &:has(:disabled) {
      ${he}•background: var(--arc-color-alpha-white-70);
      ${Kr}•shadow: var(--arc-shadow-none);

      [arc-switch-label] {
        --arc-label-cursor: not-allowed;
        --arc-label-opacity: var(--arc-alpha-60);
      }
    }

    /* Uses Neutral-ish Colors */
    &[data-state=off] {
      ${Y}•background: var(--arc-color-bg-neutral-subtle);
      ${Y}•border•color: var(--arc-color-border-stark);
      ${Kr}•border•color: var(--arc-color-border-on-stark);
      ${Kr}•color: var(--arc-color-fg-on-heavy);

      &:not(:has(:disabled)):hover {
        ${Y}•border•color: var(--arc-color-border-heavy);
        ${Kr}•border•color: var(--arc-color-border-heavy);
      }

      &:has(:disabled) {
        ${Y}•background: var(--arc-color-bg-disabled);
        ${Y}•border•color: var(--arc-color-border-disabled);
        ${Kr}•border•color: var(--arc-color-border-on-stark);
        ${Kr}•color: var(--arc-color-bg-tertiary);
      }
    }

    /* Uses Theme Colors */
    &[data-state=on] {
      ${Y}•background: var(--arc-color-bg-theme-heavy);
      ${Y}•border•color: var(--arc-color-border-theme-heavy);
      ${Kr}•border•color: var(--arc-color-border-theme-heavy);
      ${Kr}•color: var(--arc-color-fg-on-theme-heavy);

      &:not(:has(:disabled)):hover {
        ${Y}•opacity: var(--arc-alpha-60);
      }

      &:has(:disabled) {
        ${Y}•opacity: var(--arc-alpha-30);
      }
    }

    /* SIZES  ------------------------------------------------------• */
    &[data-size=inherit] {
      ${he}•font•size: 1em;
      ${he}•width: 2.5em;
      ${he}•height: 1.5em;
      ${he}•gap: 0.5em;
      ${Kr}•size: 1.5em;
      ${Kr}•x•shift: 0.25em;
    }

    &[data-size=md] { /* @default */
      ${he}•font•size: var(${b}•14);
      ${he}•width: var(${b}•40);
      ${he}•height: var(${b}•24);
      ${he}•gap: var(${b}•8);
      ${Kr}•x•shift: var(${b}•4);
      ${Kr}•size: var(${b}•24);
    }

    &[data-size=sm] {
      ${he}•font•size: var(${b}•12);
      ${he}•width: var(${b}•30);
      ${he}•height: var(${b}•14);
      ${he}•gap: var(${b}•8);
      ${Kr}•x•shift: var(${b}•1);
      ${Kr}•size: var(${b}•16);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${Y}•border•radius: var(--arc-border-radius-pill);
    ${Y}•width: var(${he}•width);
    ${Y}•height: var(${he}•height);
    ${Y}•x•shift: var(${Kr}•x•shift);
    ${Y}•size: var(${Kr}•size);

    /* for: ArcLabel */
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask to
                                                    stay inline with the label text
                                                    regardless of applied line-height */

    /* KNOB PLACEMENT ----------------------------------------------• */
    &[data-state=off] {
      ${Kr}•translate: calc(-100% + var(${Kr}•x•shift)) -50%;
    }

    &[data-state=on] {
      ${Kr}•translate: calc(0% - var(${Kr}•x•shift)) -50%;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-switch]:not([hidden]) {
    font-size: var(--arc-switch-font-size, var(${he}•font•size));
    display: var(--arc-switch-display, inline-flex);
    align-items:  var(--arc-switch-align-items, center);
    gap: var(--arc-switch-gap, var(${he}•gap));
    user-select: none;

    [arc-switch-label] {
      font-size: inherit;
      hyphens: auto;
    }

    [arc-input-type=switch]:where(:not(:checked)) {
      ${Y}•z•index: 1;
    }

    [arc-input-mask-wrapper] {
      height: 1.25em;
    }

    /* the knob */
    [data-element=mask] {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: var(${Kr}•translate);

      display: inline-flex;
      width: var(${Kr}•size);
      height: var(${Kr}•size);

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

      background: var(${Kr}•color);
      box-shadow: var(${Kr}•shadow);
      border: var(${Y}•border•width) solid var(${Kr}•border•color);
      border-radius: var(--arc-border-radius-circle);
      pointer-events: none;
    }
  }

}
`,xk=({disabled:r,id:e,name:a,size:t="md",value:o,label:n,labelPosition:c=mo.After,onChange:s,labelOff:u,labelOn:h,...p})=>{const v=Nr(a,"arc-switch-name"),g=Nr(e,"arc-switch"),f=(k,A)=>{const y=k.checked?xe.On:xe.Off;s?.({...k,value:y},A)};!n&&(h||u)&&(n=h||u,c=h?mo.After:mo.Before);const m=(0,i.jsxs)(Ic,{type:"checkbox",children:[(0,i.jsx)(Jo,{type:"checkbox",name:v,id:g,checked:o===xe.On,disabled:r,role:"switch","aria-checked":o===xe.On,"aria-label":n?void 0:"Toggle switch",tabIndex:0,onChange:f}),(0,i.jsx)("span",{"data-element":"mask","aria-hidden":"true",tabIndex:-1})]}),$=(0,i.jsx)(yt,{htmlFor:g,"arc-switch-label":c,children:(0,i.jsx)(xt,{children:n})});return u&&h?(0,i.jsx)($k,{...p,disabled:r,id:e,name:a,labelOff:u,labelOn:h,size:t,value:o,onChange:s}):(0,i.jsxs)("span",{...p,"arc-switch":"","data-state":o,"data-size":t,"data-label-position":c,role:"presentation","aria-live":"off",children:[n&&c===mo.Before&&$,m,n&&c===mo.After&&$]})};zr("ArcSwitch",yk);const kk=["title","heading","subheading","body"],Op=["h1","h2","h3","h4","h5","h6"],Np=["code","div","li","p","pre","span"],Bp=[...Op,...Np],wk=[...Na],Ak=["title-inherit","title-lg","title-md","title-sm"],Sk=["heading-inherit","heading-lg","heading-md","heading-sm"],Ck=["subheading-inherit","subheading-lg","subheading-md","subheading-sm"],Ek=$r(Yr,["inherit","primary","primary-inverse"]),zk=["body-inherit","body-lg","body-md","body-sm","body-xs"],_k=Wr(Yr,["inherit","primary","secondary","primary-inverse","secondary-inverse","critical","warning","success","info"]),Ik=$r(Bn,["inherit","start","center","justify","end"]),Tk=$r(Fn,["inherit","loose","standard","tight"]),Pk={h1:"title",h2:"heading",h3:"heading",h4:"subheading",h5:"subheading",h6:"subheading",p:"body",span:"body",div:"body",code:"body",pre:"body",li:"body"},Rk=r=>{const{align:e,lineHeight:a,size:t,variant:o,scheme:n="auto",isMonospace:c,tag:s,...u}=r,h=Pk?.[s]??"body",p=t?.includes("inherit")?t?.split("-")?.[0]:t,v=o?.endsWith("-inverse");let g;return n!=="auto"?g=n:v&&(g=void 0),{...u,"arc-text":p||h,"arc-scheme":g,"data-is-monospace":c?"":void 0,"data-align":e?.includes("inherit")?void 0:e,"data-variant":o?.includes("inherit")?void 0:o,"data-line-height":a?.includes("inherit")?void 0:a}},Ya=l`--arc•text`,pd=l`${Ya}•font`,bo=l`${Ya}•align`,Ma=l`${Ya}fg`,Fp=l`${Ya}•flex`,Hp=l`${Ya}•hyphens`,Pn=l`${Ya}•letterspacing`,ja=l`${Ya}•lineheight`,Vp=l`${Ya}•opacity`,Up=l`${Ya}•whitespace`,Pt=l`${pd}•family`,de=l`${pd}•size`,$o=l`${pd}•weight`,Lk=l`
@layer arc-components {

[arc-text] {
  /* SETUP ---------------------------------------------------------• */
  ${bo}: unset;
  ${Ma}: unset;
  ${Fp}: unset;
  ${Hp}: auto;
  ${Pn}: unset;
  ${ja}: unset;
  ${Vp}: unset;
  ${Up}: unset;

  ${Pt}: unset;
  ${de}: unset;
  ${$o}: unset;

  /* LINE HEIGHT ---------------------------------------------------• */

  &[data-line-height=standard] {
    ${ja}: var(--arc-line-height-standard);
  }

  &[data-line-height=loose] {
    ${ja}: var(--arc-line-height-loose);
  }

  &[data-line-height=tight] {
    ${ja}: var(--arc-line-height-tight);
  }

  /* ALIGNMENT -----------------------------------------------------• */

  &[data-align=start] {
    ${bo}: start;
  }

  &[data-align=center] {
    ${bo}: center;
  }

  &[data-align=justify] {
    ${bo}: justify;
  }

  &[data-align=end] {
    ${bo}: end;
  }

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=primary] {
    ${Ma}: var(--arc-color-fg-primary);
  }

  /* @deprecated */
  &[data-variant=primary-inverse] {
    ${Ma}: var(--arc-color-fg-on-mono-inverse);
  }

  &[data-variant=secondary] {
    ${Ma}: var(--arc-color-fg-secondary);
  }

  /* @deprecated - 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  &[data-variant=secondary-inverse] {
    ${Ma}: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 61.2%, transparent);
  }

  &[data-variant=critical] {
    ${Ma}: var(--arc-color-fg-critical-mid);
  }

  &[data-variant=warning] {
    ${Ma}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=success] {
    ${Ma}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=info] {
    ${Ma}: var(--arc-color-fg-info-stark);
  }

}

/* FONT PROPERTIES -------------------------------------------------• */

[arc-text^=title] {
  ${Pt}: var(--arc-font-family-title);
  ${$o}: var(--arc-font-weight-title);
  ${Pn}: var(--arc-letter-spacing-title);
  ${ja}: var(--arc-line-height-title);

  ${de}: 2em; /* @default title • 32÷16*1em • same as 'title-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${de}: var(--arc-font-size-title-lg);
  }

  &:where([arc-text*=-md]) {
    ${de}: var(--arc-font-size-title-md);
  }

  &:where([arc-text*=-sm]) {
    ${de}: var(--arc-font-size-title-sm);
  }
}

[arc-text^=heading] {
  ${Pt}: var(--arc-font-family-heading);
  ${$o}: var(--arc-font-weight-heading);
  ${Pn}: var(--arc-letter-spacing-heading);
  ${ja}: var(--arc-line-height-heading);

  ${de}: 1.25em; /* @default heading • 20÷16*1em • same as 'heading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${de}: var(--arc-font-size-heading-lg);
  }

  &:where([arc-text*=-md]) {
    ${de}: var(--arc-font-size-heading-md);
  }

  &:where([arc-text*=-sm]) {
    ${de}: var(--arc-font-size-heading-sm);
  }
}

[arc-text^=subheading] {
  ${Pt}: var(--arc-font-family-subheading);
  ${$o}: var(--arc-font-weight-subheading);
  ${Pn}: unset;
  ${ja}: var(--arc-line-height-subheading);

  ${de}: 0.875em; /* @default subheading • 14÷16*1em • same as 'subheading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${de}: var(--arc-font-size-subheading-lg);
  }

  &:where([arc-text*=-md]) {
    ${de}: var(--arc-font-size-subheading-md);
  }

  &:where([arc-text*=-sm]) {
    ${de}: var(--arc-font-size-subheading-sm);
  }
}

[arc-text^=body] {
  ${Pt}: var(--arc-font-family-body);
  ${$o}: var(--arc-font-weight-body);
  ${ja}: var(--arc-line-height-body);
  ${de}: 0.875em; /* @default body • 14÷16*1em • same as 'body-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${de}: var(--arc-font-size-body-lg);
  }

  &:where([arc-text*=-md]) {
    ${de}: var(--arc-font-size-body-md);
  }

  &:where([arc-text*=-sm]) {
    ${de}: var(--arc-font-size-body-sm);
  }

  &:where([arc-text*=-xs]) {
    ${de}: var(--arc-font-size-body-xs);
  }
}

[arc-text]:where(pre, code) {
  ${de}: 1em;
}

[arc-text]:where(pre, code, [data-is-monospace]) {
  ${Pt}: var(--arc-font-family-mono);
  ${ja}: var(--arc-line-height-mono);
}


/* CORE STYLES -----------------------------------------------------• */

[arc-text] {
  /* conveniences for element properties */
  flex: var(--arc-text-flex, var(${Fp}));
  hyphens: var(--arc-text-hyphens, var(${Hp})); /* not unset as fallback so text-breaks by default */
  opacity: var(--arc-text-opacity, var(${Vp}));
  text-align: var(--arc-text-align, var(${bo}));
  white-space: var(--arc-text-white-space, var(${Up}));

  color: var(--arc-text-color, var(${Ma}));

  font-size: var(--arc-text-font-size, var(${de}));
  font-family: var(--arc-text-font-family, var(${Pt}));
  font-weight: var(--arc-text-font-weight, var(${$o}));
  line-height: var(--arc-text-line-height, var(${ja}));
  letter-spacing: var(--arc-text-letter-spacing, var(${Pn}));

  font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
}

}
`,Mk=r=>(0,d.forwardRef)((e,a)=>(0,d.createElement)(r,{...Rk({...e,tag:r}),ref:a})),jk=[...Bp].reduce((r,e)=>({...r,[e]:Mk(e)}),{});zr("Arc",Lk);const Dk=$r(Yr,["common","ai","critical"]),Gp=[...Na],Kp=["default","success","warning","error"],Wp=$r(ke,["inherit","md"]),Xp=$r(Yr,["common"]),qp=[...wo],Ok=[...Ja],Yp=["top-left","top-center","top-right","center","bottom-left","bottom-center","bottom-right"],Nk=Dk.filter(r=>r!=="critical"),Zp={size:Wp[1],variant:Xp[0],scheme:Gp[2],popover:qp[2],placement:Yp[4],severity:Kp[0],showDismiss:!0},Jp=(r,e="toggle")=>{const a=document.getElementById(r);({toggle:()=>a?.togglePopover(),show:()=>a?.showPopover(),hide:()=>a?.hidePopover()})[e]()},Qp=l`--arc•progress`,Bk=l`${Qp}•bar`,Fk=l`${Qp}•value`,rg=l`${Bk}•bg`,Rn=l`${Fk}•bg`,Hk=l`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${wf}

  [arc-progress-bar] {
    ${rg}: var(--arc-color-alpha-subtle);
    ${Rn}: var(--arc-color-bg-brand-stark);

    &[data-variant=ai] {
      ${Rn}: var(--arc-progress-bar-gradient-ai-200);
    }

    &[data-variant=critical] {
      ${Rn}: var(--arc-color-bg-critical-mid);
    }
  }

  [arc-progress-bar] {
    appearance: none;
    width: 100%;
    height: var(${b}•8);

    /* firefox needs these at this level, other browsers can use these too */
    background: var(--arc-progress-bar-background, var(${rg}));
    border-radius: var(--arc-border-radius-pill);
    border: none;

    /* turn off the default bar background for other browsers */
    &::-webkit-progress-bar { background: none; }

    /* firefox's progress-value bar */
    &::-moz-progress-bar {
      border-radius: var(--arc-border-radius-pill);
      background: var(--arc-progress-bar-value-background, var(${Rn}));
    }

    /* all the others' progress-value bar */
    &::-webkit-progress-value {
      border-radius: var(--arc-border-radius-pill);
      background: var(--arc-progress-bar-value-background, var(${Rn}));
    }
  }

}
`,Vk=({progress:r=0,variant:e="common",...a})=>(0,i.jsxs)("progress",{...a,"arc-progress-bar":"","data-variant":e,value:r,max:a.max||100,"aria-valuenow":r,"aria-valuemax":a.max||100,children:[r,"% "]});zr("ArcProgressBar",Hk);const Da=l`--arc•toast`,Si=l`${Da}•content`,eg=l`${Da}•color`,ag=l`${Da}•background`,Ln=l`${Da}•icon•color`,Mn=l`${Da}•transition`,Uk=l`
@layer arc-components {

  [arc-toast] {
    ${Si}•gap: var(${L}•2);
    ${Mn}•duration: 300ms;
    ${Ln}: currentcolor;

    /* SIZES -------------------------------------------------------• */
    &[data-size=md] { /* @default */
      ${Da}•font•size: var(${b}•16);
      ${Si}•font•size: var(${b}•14);
    }

    &[data-size=inherit] {
      ${Da}•font•size: 1em;
      ${Si}•font•size: 0.875em;
    }

    /* STATES ------------------------------------------------------• */
    &[data-severity=error] {
      ${Ln}: var(--arc-color-fg-critical-mid);
    }

    &[data-severity=success] {
      ${Ln}: var(--arc-color-fg-success-mid);
    }

    &[data-severity=warning] {
      ${Ln}: var(--arc-color-fg-warning-mid);
    }

    /* VARIANTS ----------------------------------------------------• */
    &[data-variant=common] { /* @default */
      ${ag}: var(--arc-color-bg-mono);
      ${eg}: var(--arc-color-fg-primary);
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
    margin: var(--arc-toast-offset, var(${L}•16)); /* @note: '-offset' here is legacy variable name */
    align-items: center;

    font-size: var(${Da}•font•size); /* @note: see [arc-toast-content] for actual font-size via the [data-size] attribute */

    color: var(--arc-toast-color, var(${eg}));
    background-color: var(--arc-toast-background, var(${ag}));
    border-radius: var(--arc-toast-border-radius, var(--arc-border-radius-lg));
    padding: var(--arc-toast-padding, var(${L}•12) var(${L}•12) var(${L}•12) var(${L}•16));
    box-shadow: var(--arc-shadow-lg);
    border: none;

    max-width: var(--arc-toast-max-width, 40em);
    min-width: var(--arc-toast-min-width, 12em);
    min-height: var(--arc-toast-min-height, var(${Da}•min•height, 3.5em));

    &:has([arc-toast-heading] + [arc-toast-subtext]) {
      ${Da}•min•height: 5em;
    }

    [arc-toast-content-grid] {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: var(${L}•8) var(${L}•16);
    }

    [arc-toast-body] {
      display: flex;
      align-items: baseline;
      gap: var(${L}•8);
      padding: var(${L}•4) 0; /* vertical padding to align with action button text */
      min-width: 14em;

      p {
        margin: 0;
      }
    }

    [arc-toast-icon] {
      --arc-icon-color: var(--arc-toast-icon-color, var(${Ln}));

      height: 1lh;
      padding: 0 var(${L}•2);
    }

    [arc-toast-content] {
      flex: 1;

      font-size: var(--arc-toast-font-size, var(${Si}•font•size));
      line-height: var(--arc-line-height-loose);
      hyphens: auto;

      display: block;

      &:has([arc-toast-heading] + [arc-toast-subtext]) {
        display: flex;
        flex-direction: column;
        gap: var(${L}•2);
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
      display var(${Mn}•duration) allow-discrete,
      overlay var(${Mn}•duration) allow-discrete,
      content-visibility var(${Mn}•duration) allow-discrete,
      opacity var(${Mn}•duration);
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
`,tg=({id:r,children:e,icon:a,heading:t,subtext:o,dismissProps:n,showDismiss:c=!0,onClose:s,actionSlot:u,size:h="md",variant:p="common",scheme:v=Zp.scheme,placement:g="bottom-left",getToastId:f,progressBarProps:m,severity:$,...k})=>{const A=()=>{s?.()},y=v==="auto"?void 0:v,w=!!u||c,x=Nr(r,"arc-toast"),{variant:z,hierarchy:_,...P}=n||{};(0,d.useEffect)(()=>{f?.(x)},[f,x]);const C=Yi(a);return(0,i.jsx)("div",{...k,"arc-toast":"","arc-scheme":y,"data-size":h,"data-variant":p,"data-placement":g,"data-severity":$||void 0,id:x,children:(0,i.jsxs)("div",{"arc-toast-content-grid":"",children:[(0,i.jsxs)("div",{"arc-toast-body":"",children:[a&&(0,i.jsx)(Sr,{icon:C,"arc-toast-icon":""}),(0,i.jsx)("div",{"arc-toast-content":"",children:e||(0,i.jsxs)(i.Fragment,{children:[t&&(0,i.jsx)("header",{"arc-toast-heading":"",children:(0,i.jsx)("strong",{children:t})}),o&&(0,i.jsx)("p",{"arc-toast-subtext":"",children:o})]})})]}),w&&(0,i.jsxs)("div",{"arc-toast-actions":"",children:[u,c&&(0,i.jsx)(Or,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:"common",hierarchy:"tertiary",size:"md",shape:"square","aria-label":"Dismiss",...P,popoverTarget:x,onClick:A})]}),m&&(0,i.jsx)(Vk,{...m,variant:$==="error"?"critical":m.variant,"arc-toast-progress-bar":""})]})})};tg.handleToast=Jp,zr("ArcToast",Uk);var jn;(function(r){r.None="none",r.Persistent="localStorage",r.Temporary="sessionStorage"})(jn||(jn={}));const Gk=(r,e,a)=>{const[t,o]=(0,d.useState)(e),[n,c]=Zx(r,e),[s,u]=ld(r,e);return a===jn.Temporary?[n,c]:a===jn.Persistent?[s,u]:[t,o]},Kk=["auto","hex","hexa","rgb","hsl","oklch"],Wk=()=>typeof DOMRect<"u"?new DOMRect:{x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0,toJSON:()=>({x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0})}}}]);
