(this["webpackJsonpfamily-recipes"]=this["webpackJsonpfamily-recipes"]||[]).push([[6],{217:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var s=a(19),i=a(20),n=a(22),r=a(21),l=a(0),c=a.n(l),o=a(253),u=a(37),p=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).state="selector"===i.props.variant&&i.props.initialValue?{selected:!0}:{},i}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return"link"===this.props.variant?c.a.createElement(o.a,{size:"small",label:this.props.label,component:u.b,to:this.props.link,clickable:!0,className:this.props.className}):"selector"===this.props.variant?this.state.selected?c.a.createElement(o.a,{size:"small",color:"secondary",label:this.props.label,clickable:!0,className:this.props.className,onClick:function(){return e.toggleChip()}}):c.a.createElement(o.a,{size:"small",variant:"outlined",label:this.props.label,clickable:!0,className:this.props.className,onClick:function(){return e.toggleChip()}}):void 0}},{key:"toggleChip",value:function(){"selector"===this.props.variant&&(this.state.selected?(this.setState({selected:!1}),this.props.onDeselect(this.props.label)):(this.setState({selected:!0}),this.props.onSelect(this.props.label)))}}]),a}(c.a.Component)},272:function(e,t,a){"use strict";a.r(t);var s=a(221),i=a(251),n=a(12),r=a(19),l=a(20),c=a(22),o=a(21),u=a(34),p=a(0),h=a.n(p),m=a(171),g=a(5),d=a(246),f=a(247),v=a(64),b=a(217),y=a(37),w=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).classes=void 0,s.classes=s.props.classes,s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return"recipe"===this.props.variant?h.a.createElement(d.a,{className:"".concat(this.classes.resultCard," ").concat(this.props.className),id:this.props.htmlId},h.a.createElement(f.a,{className:this.classes.resultCardContent},h.a.createElement("div",{className:this.classes.info},h.a.createElement(v.a,{className:this.classes.title,variant:"h5"},this.props.title),h.a.createElement("div",{className:this.classes.tags},this.props.tags.map((function(t,a){return h.a.createElement(b.a,{variant:"link",label:t,key:a,link:"/recipes?tags=".concat(t),className:e.classes.tag})}))),h.a.createElement("div",{className:this.classes.overviewContainer},h.a.createElement(v.a,{className:this.classes.overview},this.props.overview))),h.a.createElement("div",{className:this.classes.imageContainer},h.a.createElement("div",{className:this.classes.imageContainer2},h.a.createElement("img",{className:this.classes.image,src:this.props.resultImg,alt:this.props.title+".png"})))),h.a.createElement(y.b,{className:this.classes.link,to:"/recipe/".concat(this.props.id)})):"message"===this.props.variant?h.a.createElement(d.a,{className:"".concat(this.classes.resultCard," ").concat(this.props.className),id:this.props.htmlId},h.a.createElement(f.a,{className:this.classes.resultCardContent},h.a.createElement("div",{className:this.classes.info},h.a.createElement(v.a,{className:this.classes.title,variant:"h5"},this.props.message),h.a.createElement("div",{className:this.classes.overviewContainer},h.a.createElement(v.a,{className:this.classes.overview},this.props.subMessage))),h.a.createElement("div",{className:this.classes.imageContainer},h.a.createElement("div",{className:this.classes.imageContainer2})))):void 0}}]),a}(h.a.Component),S=Object(g.a)((function(e){return Object(m.a)({resultCardContent:{display:"flex",flexDirection:"row",padding:"inherit","&:last-child":{paddingBottom:0}},info:{flex:"70%",margin:e.spacing(1.5),display:"flex",flexDirection:"column",justifyContent:"center",minWidth:0},image:{position:"absolute",top:0,left:0,bottom:0,right:0,width:"100%",height:"100%",objectFit:"cover",boxShadow:e.shadows[1],borderRadius:"4px"},tags:Object(u.a)({display:"none",width:"100%",overflowX:"auto",flexDirection:"row",flexWrap:"nowrap",flexShrink:0},e.breakpoints.up("sm"),{display:"flex"}),tag:{marginRight:e.spacing(1),marginTop:e.spacing(1),position:"relative",zIndex:999},imageContainer:{flex:"30%",margin:e.spacing(1.5),marginLeft:0,minWidth:0,maxWidth:"17.5vw",display:"flex",flexDirection:"column",justifyContent:"center"},imageContainer2:{position:"relative",width:"100%",paddingTop:"66.66%"},title:{flexShrink:0},overview:{height:"100%",overflow:"hidden","&::after":{content:"no-open-quote",width:"100%",height:"min(1.5rem, 100%)",position:"absolute",left:0,bottom:0,background:"linear-gradient(transparent, ".concat(e.palette.background.paper,")")}},overviewContainer:Object(u.a)({flexGrow:1,height:0,display:"none",marginTop:e.spacing(1),position:"relative"},e.breakpoints.up("sm"),{display:"block"}),resultCard:{width:"100%",position:"relative"},link:{color:"inherit",textDecoration:"none","&:visited":{color:"inherit"},position:"absolute",bottom:0,top:0,left:0,right:0}})}))(w),E=a(6),O=["Breakfast","Lunch","Dinner","Snack","Dessert","Side","Recommended","Mexican","American","Italian","French","Indian","Chinese","Japanese","Vegan","Vegetarian","Seafood","Meat","Easy","Medium","Difficult","Fast","Slow","Bread","Eggs"];var j=a(268),x=a(82),k=a(269),N=a(273);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var a,s,i=function(e,t){if(null==e)return{};var a,s,i={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var R,I=h.a.createElement("path",{d:"m 16.257849,12.916964 c -0.631476,-0.028 -1.272887,0.08349 -1.869997,0.347559 -0.982096,0.43433 -1.815762,1.345024 -2.157852,2.356154 -0.307584,0.909187 -0.30716,1.821909 0.0043,2.759151 0.580845,1.748072 2.440572,2.905278 4.298647,2.675992 0.582979,-0.07194 0.918776,-0.166864 1.454206,-0.413659 l 0.392336,-0.181243 0.722837,0.72497 0.724971,0.722838 0.586373,-0.58424 L 21,20.740246 20.27503,20.015274 19.552192,19.290306 19.731301,18.897968 c 0.523718,-1.136217 0.582579,-2.239992 0.179112,-3.345523 -0.202346,-0.554442 -0.435187,-0.933725 -0.850774,-1.377444 -0.726651,-0.77584 -1.749338,-1.211369 -2.801797,-1.258037 z m -0.181243,1.635447 c 0.918312,-0.0047 1.80263,0.50893 2.194101,1.313476 0.715875,1.471259 -0.09547,3.1954 -1.658902,3.524634 -1.718637,0.36192 -3.230859,-1.0788 -2.936129,-2.797531 0.184152,-1.073896 0.932566,-1.82231 2.006461,-2.006462 0.131198,-0.0225 0.263281,-0.03344 0.394469,-0.03412 z M 2.9999999,5.9999998 v 2 H 20.999999 v -2 z M 5.9999998,11 v 2 h 6.6901042 c 0.361323,-0.309136 0.746378,-0.583811 1.16927,-0.770834 0.746388,-0.330086 1.549198,-0.469895 2.338543,-0.434895 0.621857,0.02757 1.232008,0.170476 1.802083,0.408854 V 11 Z m 4,5 v 2 h 1.0104162 c -0.145276,-0.672872 -0.171818,-1.339462 -0.05729,-2 z"}),D=function(e){var t=e.svgRef,a=e.title,s=T(e,["svgRef","title"]);return h.a.createElement("svg",C({viewBox:"0 0 24 24",ref:t},s),a?h.a.createElement("title",null,a):null,I)},z=h.a.forwardRef((function(e,t){return h.a.createElement(D,C({svgRef:t},e))})),A=(a.p,a(228)),F=a(264),M=a(267),q=a(266),L=a(265),P=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return h.a.createElement(F.a,{className:this.props.className,open:this.props.open,onClose:function(){return e.props.onCancel()},scroll:"paper"},h.a.createElement(L.a,{id:"scroll-dialog-title"},this.props.title),h.a.createElement(q.a,null,this.props.children),h.a.createElement(M.a,null,h.a.createElement(A.a,{onClick:function(){return e.props.onCancel()},color:"secondary"},"Cancel"),h.a.createElement(A.a,{onClick:function(){return e.props.onApply()},color:"secondary"},"Apply")))}}]),a}(h.a.Component),B=a(66),V=a(249),U=a.n(V),W=a(248),G=a(252),H=a(77),Q=a.n(H),Y=a(78),_=a.n(Y),J=h.a.createRef(),X=h.a.createRef(),K=h.a.createRef();!function(e){e[e.STAY=0]="STAY",e[e.UPDATE_SETTINGS=1]="UPDATE_SETTINGS"}(R||(R={}));var Z=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).classes=void 0,s.unconfirmedSettings=void 0,s.items=void 0,s.state={selectedTags:new Set,query:"",modalOpen:!1,redirect:R.STAY,showReturnTop:!1},s.classes=s.props.classes,s.items=[],s.unconfirmedSettings={query:"",tags:new Set},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resizeListSpacing.bind(this)),this.updateQueries()}},{key:"componentDidUpdate",value:function(e){this.props.location.pathname===e.location.pathname&&this.props.location.search!==e.location.search&&this.updateQueries()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeListSpacing.bind(this))}},{key:"updateQueries",value:function(e){var t=this,a=new URLSearchParams(this.props.location.search),s=a.get("q"),i=a.getAll("tags"),r=new Set(i.filter((function(e){return function(e){return-1!==O.indexOf(e)}(e)}))),l=Object(n.a)({},this.state);s||(s=""),l=Object(n.a)(Object(n.a)({},l),{},{query:s}),this.unconfirmedSettings.query=s,r.size>0&&(l=Object(n.a)(Object(n.a)({},l),{},{selectedTags:r}),this.unconfirmedSettings.tags=r),_.a.get("".concat("https://saajanm.github.io/MaslankaFamilyRecipesAPI","/recipe_data.json"),(function(a){var s=a.pipe(Q.a.withParser()),i=new Set;s.on("data",(function(e){var a=e.value;t.resultHasTags(a,l.selectedTags)&&t.searchCompare(a,l.query)>.9&&i.add(h.a.createElement(S,{variant:"recipe",title:a.title,id:a.id,key:i.size,overview:a.summary,tags:a.tags,resultImg:a.resultImg}))})),s.on("end",(function(){t.items=Array.from(i),0===t.items.length?t.items.push(h.a.createElement(S,{variant:"message",message:"No Results Found",subMessage:"Please change your filter or search to be more broad..."})):t.items.push(h.a.createElement(S,{variant:"message",message:"No More Results",subMessage:"You have reached the end of the results for this search and filter. Recipes listed: ".concat(t.items.length)})),l=Object(n.a)(Object(n.a)({},l),e),t.setState(l)}))}))}},{key:"resultHasTags",value:function(e,t){var a,s=new Set(e.tags),n=Object(i.a)(t);try{for(n.s();!(a=n.n()).done;){var r=a.value;if(!s.has(r))return!1}}catch(l){n.e(l)}finally{n.f()}return!0}},{key:"searchCompare",value:function(e,t){if(""===t)return 1;var a,s=-1/0,i=e.tags,n=e.title;for(var r in i)s=(a=this.stringSimilarity(i[r],t))>s?a:s;var l=n.split(" ");l.push(n);var c=[];for(var o in l)for(var u=1;u<l[o].length;u++)c.push(l[o].substring(0,u+1));for(var p in c)s=(a=this.stringSimilarity(c[p],t))>s?a:s;return s}},{key:"editDistance",value:function(e,t){e=e.toLowerCase(),t=t.toLowerCase();for(var a=new Array,s=0;s<=e.length;s++){for(var i=s,n=0;n<=t.length;n++)if(0===s)a[n]=n;else if(n>0){var r=a[n-1];e.charAt(s-1)!==t.charAt(n-1)&&(r=Math.min(Math.min(r,i),a[n])+1),a[n-1]=i,i=r}s>0&&(a[t.length]=i)}return a[t.length]}},{key:"stringSimilarity",value:function(e,t){var a=e,s=t;e.length<t.length&&(a=t,s=e);var i=a.length;return 0===i?1:(i-this.editDistance(a,s))/i}},{key:"setModalOpen",value:function(e){this.setState(Object(n.a)(Object(n.a)({},this.state),{},{modalOpen:e}))}},{key:"cancelFilter",value:function(){this.unconfirmedSettings.query=this.state.query,this.unconfirmedSettings.tags=this.state.selectedTags,this.setModalOpen(!1)}},{key:"applyFilter",value:function(){this.setState(Object(n.a)(Object(n.a)({},this.state),{},{modalOpen:!1,redirect:R.UPDATE_SETTINGS}))}},{key:"resizeListSpacing",value:function(){var e;null===(e=X.current)||void 0===e||e.resetAfterIndex(0)}},{key:"render",value:function(){var e=this;if(this.state.redirect===R.UPDATE_SETTINGS){var t=new URLSearchParams;return this.unconfirmedSettings.query&&t.append("q",this.unconfirmedSettings.query),this.unconfirmedSettings.tags.forEach((function(e){t.append("tags",e)})),this.setState(Object(n.a)(Object(n.a)({},this.state),{},{redirect:R.STAY})),h.a.createElement(E.a,{to:"/recipes?".concat(t.toString())})}return h.a.createElement("div",{className:this.classes.root,ref:J},h.a.createElement("div",{className:this.classes.results},h.a.createElement(S,{variant:"recipe",htmlId:"calculatorResult",className:"".concat(this.classes.sampleResult," ").concat(this.classes.result),title:"Sample",id:"sample",overview:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nulla risus, congue non dignissim nec, commodo ac turpis. Morbi fringilla nunc ac lacinia facilisis. Nullam euismod at ligula quis placerat. Vestibulum fermentum ipsum ac ultrices hendrerit. Vivamus ultricies placerat feugiat. Pellentesque vestibulum massa ac urna tempor hendrerit. Sed enim elit.",tags:["Recommended"],resultImg:"https://i.imgur.com/I86rTVl.jpg"}),h.a.createElement(W.a,null,(function(t){var a=t.height,i=t.width;return h.a.createElement(G.a,{className:e.classes.list,ref:X,outerRef:K,height:a,width:i,itemCount:e.items.length,overscanCount:2,innerElementType:Object(p.forwardRef)((function(e,t){var a=e.style,i=Object(s.a)(e,["style"]);return h.a.createElement("div",Object.assign({ref:t,style:Object(n.a)(Object(n.a)({},a),{},{width:"65%"})},i))})),onScroll:function(t){t.scrollOffset>0?e.setState(Object(n.a)(Object(n.a)({},e.state),{},{showReturnTop:!0})):e.setState(Object(n.a)(Object(n.a)({},e.state),{},{showReturnTop:!1}))},estimatedItemSize:.25*window.innerWidth,itemSize:function(t){return e.getResultHeight(t)}},(function(t){var a=t.index,s=t.style;return h.a.createElement("div",{className:e.classes.result,style:s},e.items[a])}))}))),h.a.createElement(j.a,{size:"large",color:"primary","aria-label":"filter",className:"".concat(this.classes.bigIcon," ").concat(this.classes.filterFab),onClick:function(){return e.setModalOpen(!0)}},h.a.createElement(x.a,{component:z,viewBox:"0 0 24 24"})),h.a.createElement(k.a,{in:this.state.showReturnTop},h.a.createElement(j.a,{size:"large",color:"primary","aria-label":"to top",className:"".concat(this.classes.bigIcon," ").concat(this.classes.upFab),onClick:function(){var e;null===(e=K.current)||void 0===e||e.scrollTo({behavior:"smooth",top:0})}},h.a.createElement(U.a,null))),h.a.createElement(P,{className:this.classes.filterDialog,title:"Filter Search",open:this.state.modalOpen,onApply:function(){return e.applyFilter()},onCancel:function(){return e.cancelFilter()}},h.a.createElement("div",{className:this.classes.searchSection},h.a.createElement(v.a,null,"By Keyword:"),h.a.createElement(B.a,{className:this.classes.searchBar,placeholder:"Search Recipes...",type:"fixed",callback:function(t){return e.setQueryFilter(t)},initialValue:this.unconfirmedSettings.query})),h.a.createElement("div",{className:this.classes.tagSection},h.a.createElement(N.a,{title:"No filter applied if no tags are selected"},h.a.createElement(v.a,null,"By Tag:")),O.map((function(t,a){var s=!1;return e.unconfirmedSettings.tags.has(t)&&(s=!0),h.a.createElement(b.a,{variant:"selector",label:t,key:a,className:e.classes.filterTag,onSelect:function(t){return e.selectTag(t)},onDeselect:function(t){return e.deselectTag(t)},initialValue:s})})))))}},{key:"selectTag",value:function(e){this.unconfirmedSettings.tags.add(e)}},{key:"deselectTag",value:function(e){this.unconfirmedSettings.tags.delete(e)}},{key:"setQueryFilter",value:function(e){this.unconfirmedSettings.query=e}},{key:"getResultHeight",value:function(e){var t=document.getElementById("calculatorResult"),a=window.getComputedStyle(t),s=t?a.height:"0px",i=t?a.paddingTop:"0px";return parseFloat(s.substring(0,s.length-2))-parseFloat(i.substring(0,i.length-2))}}]),a}(h.a.Component);t.default=Object(E.g)(Object(g.a)((function(e){var t;return Object(m.a)({bigIcon:(t={position:"absolute",bottom:0},Object(u.a)(t,e.breakpoints.between("xs","sm"),{"& > span > svg":{width:"1em",height:"1em"},width:"56px",height:"56px",margin:e.spacing(4)}),Object(u.a)(t,e.breakpoints.only("md"),{"& > span > svg":{width:"1.1em",height:"1.1em"},width:"62px",height:"62px",margin:e.spacing(5)}),Object(u.a)(t,e.breakpoints.only("lg"),{"& > span > svg":{width:"1.2em",height:"1.2em"},width:"67px",height:"67px",margin:e.spacing(5.5)}),Object(u.a)(t,e.breakpoints.only("xl"),{"& > span > svg":{width:"1.3em",height:"1.3em"},width:"73px",height:"73px",margin:e.spacing(6)}),Object(u.a)(t,e.breakpoints.only("xxl"),{"& > span > svg":{width:"1.45em",height:"1.45em"},width:"81px",height:"81px",margin:e.spacing(6.5)}),Object(u.a)(t,e.breakpoints.only("xxxl"),{"& > span > svg":{width:"1.7em",height:"1.7em"},width:"95px",height:"95px",margin:e.spacing(7)}),Object(u.a)(t,e.breakpoints.only("xxxxl"),{"& > span > svg":{width:"2.5em",height:"2.5em"},width:"140px",height:"140px",margin:e.spacing(7.5)}),t),filterFab:{right:0},upFab:{left:0},tagSection:{"& > *":{marginBottom:e.spacing(1)}},filterTag:{"&:not(:last-child)":{marginRight:e.spacing(.5)}},searchSection:{},searchBar:{"& > div":{marginLeft:0,marginRight:0}},root:{width:"100%",display:"flex",flexDirection:"column",flex:"1 1 auto",overflow:"auto"},results:{width:"100%",height:"100%",alignSelf:"center"},filterDialog:{"& .MuiDialog-paperWidthSm":{maxWidth:"400px"}},sampleResult:{position:"absolute",left:0,top:0,visibility:"hidden",zIndex:-999},result:{padding:e.spacing(1.5,0)},list:{"& > div":{transform:"translateX(26.25%)"}}})}))(Z))}}]);
//# sourceMappingURL=6.e4b7fe70.chunk.js.map