(this["webpackJsonpivp-web"]=this["webpackJsonpivp-web"]||[]).push([[0],{133:function(e,t,a){},228:function(e,t,a){e.exports=a.p+"static/media/boosey.d459723b.png"},229:function(e,t,a){e.exports=a.p+"static/media/cf_source.51b1a0ac.png"},230:function(e,t,a){e.exports=a.p+"static/media/first_aid_champions.ec4856ed.png"},231:function(e,t,a){e.exports=a.p+"static/media/design_library.a6950d07.png"},232:function(e,t,a){e.exports=a.p+"static/media/ipo.67177cba.png"},233:function(e,t,a){e.exports=a.p+"static/media/lcm.ade167c2.png"},234:function(e,t,a){e.exports=a.p+"static/media/somerset_house.9ca211e8.png"},235:function(e,t,a){e.exports=a.p+"static/media/stories.89622e93.png"},236:function(e,t,a){e.exports=a.p+"static/media/heineken.972623fb.png"},237:function(e,t,a){e.exports=a.p+"static/media/vertex.d1daf975.png"},238:function(e,t,a){e.exports=a.p+"static/media/wpp.4dc43e15.png"},239:function(e,t,a){e.exports=a.p+"static/media/wpp_2.1b9e74b2.png"},256:function(e,t,a){e.exports=a.p+"static/media/heineken.a2616df5.svg"},257:function(e,t,a){e.exports=a.p+"static/media/KPMG.f6e3f8dc.svg"},258:function(e,t,a){e.exports=a.p+"static/media/lloyds.c8238bc7.svg"},259:function(e,t,a){e.exports=a.p+"static/media/Vertex.762d5ba9.svg"},260:function(e,t,a){e.exports=a.p+"static/media/WPP.f36e56dd.svg"},261:function(e,t,a){e.exports=a.p+"static/media/brc.94949402.svg"},262:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(2),s=a(4),o=a(3),c=a(0),r=a.n(c),l=a(17),m=a.n(l),u=a(9),h=r.a.createContext(),d=h.Provider,p=(h.Consumer,h),v=a(6),f=a(8),E=a(18),w=a.n(E),g=(a(106),function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={inViewport:!1,animation_complete:!1,classChanged:!1},i}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){this.state.inViewport===this.props.inViewport||this.state.animation_complete||(this.setState({inViewport:this.props.inViewport}),this.changeClass(),this.setState({animation_complete:!0}))}},{key:"changeClass",value:function(){var e=this,t=this.props.delay;setTimeout((function(){e.setState({classChanged:!0})}),t)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.animation,n=e.id,i=e.height;return r.a.createElement("div",{className:this.state.classChanged?"animated ".concat(a):"",style:{opacity:this.state.classChanged?1:0,height:i||"auto"},id:n},t)}}]),a}(r.a.Component)),b=w()(g),y=a(21),k=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={show:!1},i.sections=[{name:"Home"},{name:"About"},{name:"Services"},{name:"Portfolio"},{name:"Team"},{name:"Contact"}],i}return Object(i.a)(a,[{key:"navScroll",value:function(e,t){var a=this;this.setState({show:!1});var n=document.getElementById(e);y(n,{offset:0,ease:"in-out-expo",duration:2e3}).on("end",(function(){a.props.change(t)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("nav",null,r.a.createElement("div",{className:"opener"},r.a.createElement(v.a,{icon:f.a,className:"closeNav",onClick:function(){return e.setState({show:!0})}})),r.a.createElement("div",{className:"navigation ".concat(this.state.show?"active":"")},r.a.createElement(v.a,{icon:f.l,className:"closeNav",onClick:function(){return e.setState({show:!1})}}),r.a.createElement("div",{className:"links"},r.a.createElement("ul",null,r.a.createElement(b,{delay:300,animation:"fadeIn slow"},r.a.createElement("div",{className:"corner-box"})),this.items()))))}},{key:"items",value:function(){var e=this;return this.sections.map((function(t,a){return r.a.createElement("li",{key:a},r.a.createElement("span",{onClick:function(){return e.navScroll(t.name.toLowerCase(),a)}},t.name))}))}}]),a}(r.a.Component),N=a(78),x=a.n(N),j=a(21),O=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={show:!1},i.sections=[{name:"Home"},{name:"About"},{name:"Services"},{name:"Portfolio"},{name:"Team"},{name:"Contact"}],i}return Object(i.a)(a,[{key:"navScroll",value:function(e,t){var a=this;this.setState({show:!1});var n=document.getElementById(e);j(n,{offset:0,ease:"in-out-expo",duration:2e3}).on("end",(function(){a.props.change(t)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"right-nav"},r.a.createElement(x.a,{items:["home","about","services","portfolio","team","contact"],currentClassName:"active"},this.items()))}},{key:"items",value:function(){var e=this;return this.sections.map((function(t,a){return r.a.createElement("li",{key:a},r.a.createElement("span",{onClick:function(){return e.navScroll(t.name.toLowerCase(),a)}}))}))}}]),a}(r.a.Component),S=a(79),C=a.n(S),I=(a(132),a(133),a(21)),_=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).updateDimensions=function(){i.state.width!==window.innerWidth&&window.location.reload(),i.setState({height:window.innerHeight,width:window.innerWidth}),window.innerWidth<1025?(i.setState({scrolllock:!1}),window.innerWidth<992&&i.setState({mobile:!0})):i.setState({mobile:!1,scrolllock:!0})},i.state={height:0,mobile:!1,scrolllock:0,width:0},i.sections=["home","about","services","portfolio","team","contact"],i.section_id=0,i.scrolling=!1,i.changeSection=i.changeSection.bind(Object(u.a)(i)),i}return Object(i.a)(a,[{key:"setDefaults",value:function(){this.setState({height:window.innerWidth<992?"auto":window.innerHeight,mobile:window.innerWidth<992,scrolllock:!(window.innerWidth<1025),width:window.innerWidth})}},{key:"componentDidMount",value:function(){this.setDefaults(),window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"changeSection",value:function(e){this.section_id=e}},{key:"wheel",value:function(e){var t=this;if(!this.scrolling&&!this.state.mobile){this.scrolling=!0,e.deltaY<0?this.sections[(this.section_id+this.sections.length-1)%this.sections.length]!==this.sections[this.sections.length-1]&&(this.section_id=(this.section_id+this.sections.length-1)%this.sections.length):this.section_id!==this.sections.length-1&&(this.section_id=(this.section_id+1)%this.sections.length);var a=document.getElementById(this.sections[this.section_id]);I(a,{offset:0,ease:"in-out-expo",duration:2e3}).on("end",(function(){t.scrolling=!1}))}}},{key:"render",value:function(){var e=this,t=this.props.children;return r.a.createElement(d,{value:{height:this.state.mobile?"auto":this.state.height}},r.a.createElement(k,{change:this.changeSection}),r.a.createElement("div",{className:"wrapper",onWheel:function(t){return e.wheel(t)},onKeyDown:function(t){return e.wheel(t)}},t),r.a.createElement(C.a,{isActive:this.state.scrolllock}),r.a.createElement(O,{change:this.changeSection}))}}]),a}(r.a.Component),D=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={spin:!0},i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.duration;this.showSpinner(e).then((function(){setTimeout((function(){document.getElementById("spinner").remove()}),500)}))}},{key:"showSpinner",value:function(e){var t=this;return new Promise((function(a,n){setTimeout((function(){t.setState({spin:!1}),document.body.classList.remove("no-overflow"),a()}),e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"spinner-container ".concat(this.state.spin?"show":""),id:"spinner"},r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"ring"}),r.a.createElement("div",{className:"ring"}),r.a.createElement("div",{className:"dot"})))}}]),a}(r.a.Component),W=a(263),T=a(264),P=a(80),M=a.n(P),V=a(21),A=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).navScroll=function(){var e=document.querySelector(".hero");V(e,{offset:0,ease:"in-out-expo",duration:2e3})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{id:"".concat(this.props.id),className:"header",tabIndex:"0"},r.a.createElement(W.a,null,r.a.createElement(T.a,{md:12,className:"content"},r.a.createElement("img",{onClick:this.navScroll,className:"logo",src:M.a,alt:"logo"}))))}}]),a}(r.a.Component),U=a(82),L=a.n(U),B=a(7),z=a(21),H=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).navScroll=function(){var e=document.querySelector(".about");z(e,{offset:0,ease:"in-out-expo",duration:2e3})},i.items=[{name:B.j},{name:B.c},{name:B.e},{name:B.k},{name:B.b},{name:B.l},{name:B.i},{name:B.a},{name:f.d},{name:B.g}],i}return Object(i.a)(a,[{key:"showIcons",value:function(){return this.items.map((function(e,t){return r.a.createElement(v.a,{icon:e.name,className:"move-".concat(Math.floor(10*Math.random())%2===0?"up":"down"," float-image"),style:{left:"".concat(8*t,"%"),top:"".concat(Math.random()*(+(t%2===0?50:20)-+(t%2===0?70:10))+ +(t%2===0?70:10),"%")},alt:"shape",key:t})}))}},{key:"render",value:function(){return r.a.createElement("section",{id:"".concat(this.props.id),className:"hero",tabIndex:"0",style:{height:this.context.height}},r.a.createElement(W.a,null,r.a.createElement(T.a,{md:7,className:"content"},r.a.createElement("div",{className:"content-text"},r.a.createElement(b,{delay:800,animation:"fadeIn slow"},r.a.createElement("h2",null,"WE create")),r.a.createElement(L.a,{options:{strings:["Functional Websites","Awesome Mobile Apps","Beautiful Graphics"],autoStart:!0,loop:!0}}),r.a.createElement("button",{className:"hover-button",onClick:this.navScroll},r.a.createElement("span",null,"Start scrolling")))),r.a.createElement(T.a,{md:5,className:"images-wrapper"},r.a.createElement(b,{delay:800,animation:"fadeIn slow"},this.showIcons()))))}}]),a}(r.a.Component);H.contextType=p;var q=H,F=a(265),R=a(83),K=a.n(R),G=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={inViewport:!1,animation_complete:!1},i}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){this.state.inViewport===this.props.inViewport||this.state.animation_complete||(this.setState({inViewport:this.props.inViewport}),this.setState({animation_complete:!0}),this.setState({value:this.props.state}))}},{key:"render",value:function(){var e=this.props,t=e.icon,a=e.text,n=e.value,i=e.symbol;return r.a.createElement("div",{className:"counter_component"},r.a.createElement("div",{className:"icon"},r.a.createElement(v.a,{icon:t})),r.a.createElement("div",{className:"value"},r.a.createElement(K.a,{start:0,end:!0===this.state.inViewport?n:0,duration:this.props.duration?this.props.duration:1}),r.a.createElement("span",{className:"symbol"},i)),r.a.createElement("div",{className:"text"},a))}}]),a}(r.a.Component),Z=w()(G),J=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={show:!1},i.show=i.show.bind(Object(u.a)(i)),i}return Object(i.a)(a,[{key:"show",value:function(){this.setState({show:!0})}},{key:"render",value:function(){return r.a.createElement("section",{id:"".concat(this.props.id),className:"about",style:{height:this.context.height},tabIndex:"0"},r.a.createElement(W.a,null,r.a.createElement(T.a,{md:8,className:"content"},r.a.createElement("div",{className:"content-text"},r.a.createElement("div",{className:"line-text"},r.a.createElement("h4",null,"About Us")),r.a.createElement("h1",null,"We provide great services and ideas"),r.a.createElement("p",null,"Founded in 2008 by Ivana Pantazi, IvP Web Services ltd is a web development company that provide affordable high quality web design and web development services n UK & Europe. At present, the head quarter is located in London and there is a regional office in Athens, Greece. We work as an incorporated resolution providers for all type of clients from micro to macro customers."),r.a.createElement("p",null,"Our main focus is to satisfy our clients with high quality services. We have a range of web design and development services for business at all stages, from start-up business to long established businesses and organisations. We are expert in all types of projects from large IT projects to web based projects and have a team of experienced designers and developers that also provide consultancy services to our customers."),r.a.createElement("p",null,"The guiding principle behind our services is to provide all the expertise, creative innovation, commitment, resources and support to provide effective solutions to our customers. Moreover, one of our key points is to deliver all the projects with certainty of time and cost."),r.a.createElement("p",null,"Don't hesitate to contact us for a quote!"))),r.a.createElement(T.a,{md:4,className:"skills"},r.a.createElement(F.a,null,r.a.createElement("div",{className:"line-text"},r.a.createElement("h4",null,"Facts")),r.a.createElement(T.a,{md:12},r.a.createElement(b,{delay:100,animation:"fadeIn fast"},r.a.createElement(Z,{icon:f.j,value:25,text:"Happy Clients",symbol:"+",duration:6}))),r.a.createElement(T.a,{md:12},r.a.createElement(b,{delay:100,animation:"fadeIn fast"},r.a.createElement(Z,{icon:f.k,value:60,text:"Projects Delivered",symbol:"+",duration:5}))),r.a.createElement(T.a,{md:12},r.a.createElement(b,{delay:100,animation:"fadeIn fast"},r.a.createElement(Z,{icon:f.i,value:15,text:"Reviews",symbol:"+",duration:6}))),r.a.createElement(T.a,{md:12},r.a.createElement(b,{delay:100,animation:"fadeIn fast"},r.a.createElement(Z,{icon:f.d,value:5e3,text:"Lines of Code",symbol:"+",duration:3})))))))}}]),a}(r.a.Component);J.contextType=p;var Q=J,X=a(86),Y=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={value:0,inViewport:!1,animation_complete:!1,obfuscate:!0,force:!1},i}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){this.state.inViewport===this.props.inViewport||this.state.animation_complete||(this.setState({inViewport:this.props.inViewport}),this.setState({animation_complete:!0}),this.setState({obfuscate:!1}),this.forceUpdate(),this.props.callMethodTime&&this.parentMethod())}},{key:"forceUpdate",value:function(){var e=this,t=this.props,a=t.revealDuration,n=t.revealDelay;setTimeout((function(){e.setState({force:!0})}),a+n)}},{key:"parentMethod",value:function(){var e=this,t=this.props.callMethodTime;setTimeout((function(){e.props.parentMethod()}),t)}},{key:"render",value:function(){return r.a.createElement("span",{className:"baffle_text"},this.text())}},{key:"text",value:function(){var e=this.props,t=e.text,a=e.revealDuration,n=e.revealDelay;return this.state.force?r.a.createElement("span",null,t):r.a.createElement(X.a,{speed:50,characters:"ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*",obfuscate:this.state.obfuscate,update:!0,revealDuration:a,revealDelay:n},t)}}]),a}(r.a.Component),$=w()(Y),ee=a(46),te=(a(227),[[a(228),"Boosey & Hawkes","https://www.boosey.com/"],[a(229),"CF Source","https://www.cfsourcehcp.com/"],[a(230),"First aid champions","https://firstaidchampions.redcross.org.uk/"],[a(231),"BRC Design Library","https://britishredcrosssociety.github.io/design-library/"],[a(232),"Intellectual property office","https://www.ipo.gov.uk/ip-support/"],[a(233),"LCM","https://www.ipo.gov.uk/ip-support/"],[a(234),"Somerset house","https://www.somersethouse.org.uk/"],[a(235),"British Rec Cross stories","https://www.redcross.org.uk/stories"],[a(236),"Heineken Sustainability Report 2012","http://www.annualreports.com/Company/heineken-nv"],[a(237),"Vertex","https://www.vrtx.com/"],[a(238),"WPP Annual Report 2012","http://www.annualreports.co.uk/Company/wpp-group-plc/"],[a(239),"WPP Sustainability Report 2012","https://www.wpp.com/sustainability/sustainability-report-2018"]]),ae=function(e){var t=e.image,a=e.group,n=e.text,i=e.link;e.subHtml;return r.a.createElement(T.a,{sm:4,md:3,lg:3,className:"gallery-item"},r.a.createElement(ee.LightgalleryItem,{group:a,src:t,subHtml:n},r.a.createElement("div",{className:"mask"},r.a.createElement("span",{className:"mask-desc h4"},n),r.a.createElement("a",{className:"mask-link",href:i,target:"_blank",rel:"noopener noreferrer"}," ",r.a.createElement(v.a,{icon:f.g}))),r.a.createElement("img",{src:t,alt:t,style:{width:"100%"}})))},ne=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"gallery"},r.a.createElement(ee.LightgalleryProvider,{lightgallerySettings:{download:!1,zoom:!1,fullscreen:!1,selector:".gallery-item",width:"1024px",height:"585px",keyPress:!0,enableSwipe:!0,enableDrag:!0,swipeThreshold:50,enableTouch:!0},onAfterSlide:function(){console.log("onAfterSlide")}},r.a.createElement(W.a,{className:"gallery-list"},te.map((function(e,t){return r.a.createElement(ae,{key:t,image:e[0],text:e[1],link:e[2],group:"images"})})))))}}]),a}(r.a.Component),ie=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={show:!1},i.show=i.show.bind(Object(u.a)(i)),i}return Object(i.a)(a,[{key:"show",value:function(){this.setState({show:!0})}},{key:"render",value:function(){return r.a.createElement("section",{id:"".concat(this.props.id),className:"portfolio",style:{height:this.context.height},tabIndex:"0"},r.a.createElement(W.a,null,r.a.createElement(T.a,{md:2,className:"side"},r.a.createElement("h2",null,r.a.createElement($,{text:"Portfolio",revealDuration:500,revealDelay:500,parentMethod:this.show,callMethodTime:1100}))),r.a.createElement(T.a,{md:10,className:"recent-works"},r.a.createElement("div",{className:"line-text"},r.a.createElement("h4",null,"See our work")),r.a.createElement(b,{delay:100,animation:"fadeIn slow"},r.a.createElement(ne,null)))))}}]),a}(r.a.Component);ie.contextType=p;var se=ie,oe=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={show:!1},i.show=i.show.bind(Object(u.a)(i)),i}return Object(i.a)(a,[{key:"show",value:function(){this.setState({show:!0})}},{key:"render",value:function(){return r.a.createElement("section",{id:"".concat(this.props.id),className:"services",style:{height:this.context.height},tabIndex:"0"},r.a.createElement(W.a,{className:"top"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"line-text"},r.a.createElement("h4",null,"Services")),r.a.createElement("div",{className:"heading"},r.a.createElement($,{text:"What We Do",revealDuration:500,revealDelay:500,parentMethod:this.show,callMethodTime:1100})),r.a.createElement("div",{className:"services_container"},this.services()))))}},{key:"services",value:function(){if(this.state.show||"auto"===this.context.height)return r.a.createElement(W.a,null,r.a.createElement(T.a,{md:4,className:"service"},r.a.createElement(b,{delay:200,animation:"fadeInLeft fast"},r.a.createElement("div",{className:"icon"},r.a.createElement(v.a,{icon:f.d})),r.a.createElement("h4",null,"Web development"),r.a.createElement("p",null,"We have a wide range of web development services from start-up business to long established businesses"))),r.a.createElement(T.a,{md:4,className:"service border-side"},r.a.createElement(b,{delay:400,animation:"fadeInDown fast"},r.a.createElement("div",{className:"icon"},r.a.createElement(v.a,{icon:f.c})),r.a.createElement("h4",null,"Business needs"),r.a.createElement("p",null,"We have set out service levels which will help you identify the type of development that suits your business needs best"))),r.a.createElement(T.a,{md:4,className:"service"},r.a.createElement(b,{delay:600,animation:"fadeInRight fast"},r.a.createElement("div",{className:"icon"},r.a.createElement(v.a,{icon:f.h})),r.a.createElement("h4",null,"UI/UX Design"),r.a.createElement("p",null,"We offer supreme design quality, transforming design ideas and illustrations into functional reality"))),r.a.createElement(T.a,{md:4,className:"service"},r.a.createElement(b,{delay:800,animation:"fadeInLeft fast"},r.a.createElement("div",{className:"icon"},r.a.createElement(v.a,{icon:f.b,className:"solid"})),r.a.createElement("h4",null,"Project management"),r.a.createElement("p",null,"We provide Project management services to our clients from the start of the project, to Testing and Going Live"))),r.a.createElement(T.a,{md:4,className:"service border-side"},r.a.createElement(b,{delay:1e3,animation:"fadeInUp fast"},r.a.createElement("div",{className:"icon"},r.a.createElement(v.a,{icon:f.e,className:"solid"})),r.a.createElement("h4",null,"Quality and support"),r.a.createElement("p",null,"All our projects are backed by qualified technical expertise of the highest caliber ensuring best quality and support"))),r.a.createElement(T.a,{md:4,className:"service"},r.a.createElement(b,{delay:1200,animation:"fadeInRight fast"},r.a.createElement("div",{className:"icon"},r.a.createElement(v.a,{icon:f.f,className:"solid"})),r.a.createElement("h4",null,"Different solutions"),r.a.createElement("p",null,"We can offer a range of different website packages, including modern single page websites"))))}}]),a}(r.a.Component);oe.contextType=p;var ce=oe,re=a(85),le=a.n(re),me=(a(255),a(47)),ue=a.n(me),he=a(48),de=a.n(he),pe=a(49),ve=a.n(pe),fe=function(e){Object(s.a)(c,e);var t=Object(o.a)(c);function c(e){var i;return Object(n.a)(this,c),(i=t.call(this,e)).state={show:!1},i.items=[{name:a(256)},{name:a(257)},{name:a(258)},{name:a(259)},{name:a(260)},{name:a(261)}],i.show=i.show.bind(Object(u.a)(i)),i}return Object(i.a)(c,[{key:"show",value:function(){this.setState({show:!0})}},{key:"render",value:function(){return r.a.createElement("section",{id:"".concat(this.props.id),className:"team",style:{height:this.context.height},tabIndex:"0"},r.a.createElement(W.a,null,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"line-text"},r.a.createElement("h4",null,"Who we are")),r.a.createElement("div",{className:"heading"},r.a.createElement($,{text:"Meet the team",revealDuration:500,revealDelay:500,parentMethod:this.show,callMethodTime:1100})),r.a.createElement("div",{className:"team-container"},this.team_members()))),r.a.createElement(W.a,{className:"bottom"},this.clients()))}},{key:"clients",value:function(){if(this.state.show||"auto"===this.context.height)return this.items.map((function(e,t){return r.a.createElement(T.a,{md:2,className:"client",key:t},r.a.createElement(b,{delay:100,animation:"fadeIn slow"},r.a.createElement("img",{src:e.name,alt:"client"})))}))}},{key:"team_members",value:function(){return r.a.createElement(b,{delay:200,animation:"fadeIn slow"},r.a.createElement("div",{className:"team-member"},r.a.createElement("h3",null,"Ivana Pantazi"),r.a.createElement("div",{className:"team-member-content"},r.a.createElement("img",{src:ue.a,alt:"Ivana Pantazi"}),r.a.createElement("p",null,"CEO/Front End Web Developer"),r.a.createElement("div",{className:"social social_icons"},r.a.createElement(v.a,{icon:B.d,className:"social_icon",onClick:function(){return window.open("https://www.facebook.com/ivpweb")}}),r.a.createElement(v.a,{icon:B.e,className:"social_icon",onClick:function(){return window.open("https://github.com/ivanapantazi")}}),r.a.createElement(v.a,{icon:B.h,className:"social_icon",onClick:function(){return window.open("https://www.linkedin.com/in/ivanap/")}})))),r.a.createElement("div",{className:"team-member"},r.a.createElement("h3",null,"Angelica Koumanakou"),r.a.createElement("div",{className:"team-member-content"},r.a.createElement("img",{src:de.a,alt:"Angelica Koumanakou"}),r.a.createElement("p",null,"Illustrator/Digital Designer"),r.a.createElement("div",{className:"social social_icons"},r.a.createElement(v.a,{icon:B.d,className:"social_icon",onClick:function(){return window.open("https://www.facebook.com/angelicakoumanakou")}}),r.a.createElement(v.a,{icon:B.f,className:"social_icon",onClick:function(){return window.open("https://www.instagram.com/angelicakoumanakou/")}}),r.a.createElement(v.a,{icon:B.h,className:"social_icon",onClick:function(){return window.open("https://www.linkedin.com/in/angelica-koumanakou/")}})))),r.a.createElement("div",{className:"team-member"},r.a.createElement("h3",null,"Stergios Zissakis"),r.a.createElement("div",{className:"team-member-content"},r.a.createElement("img",{src:ve.a,alt:"Stergios Zissakis"}),r.a.createElement("p",null,"Back End Developer/Programmer"),r.a.createElement("div",{className:"social social_icons"},r.a.createElement(v.a,{icon:B.e,className:"social_icon"})))))}},{key:"team_slider",value:function(){var e={dots:!0,swipe:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!1,loop:!0};if(this.state.show)return r.a.createElement(b,{delay:100,animation:"fadeIn slow"},r.a.createElement(le.a,e,r.a.createElement("div",{className:"team-member"},r.a.createElement("h2",null,"Ivana Pantazi"),r.a.createElement("div",{className:"team-member-content"},r.a.createElement("img",{src:ue.a,alt:"Ivana Pantazi"}),r.a.createElement("h4",null,"CEO/Front End Web Developer"),r.a.createElement("div",{className:"social social_icons"},r.a.createElement(v.a,{icon:B.d,className:"social_icon",onClick:function(){return window.open("https://www.facebook.com/ivpweb")}}),r.a.createElement(v.a,{icon:B.e,className:"social_icon",onClick:function(){return window.open("https://github.com/ivanapantazi")}}),r.a.createElement(v.a,{icon:B.h,className:"social_icon",onClick:function(){return window.open("https://www.linkedin.com/in/ivanap/")}})))),r.a.createElement("div",{className:"team-member"},r.a.createElement("h2",null,"Angelica Koumanakou"),r.a.createElement("div",{className:"team-member-content"},r.a.createElement("img",{src:de.a,alt:"Angelica Koumanakou"}),r.a.createElement("h4",null,"Illustrator/Digital Designer"),r.a.createElement("div",{className:"social social_icons"},r.a.createElement(v.a,{icon:B.d,className:"social_icon",onClick:function(){return window.open("https://www.facebook.com/angelicakoumanakou")}}),r.a.createElement(v.a,{icon:B.f,className:"social_icon",onClick:function(){return window.open("https://www.instagram.com/angelicakoumanakou/")}}),r.a.createElement(v.a,{icon:B.h,className:"social_icon",onClick:function(){return window.open("https://www.linkedin.com/in/angelica-koumanakou/")}})))),r.a.createElement("div",{className:"team-member"},r.a.createElement("h2",null,"Stergios Zissakis"),r.a.createElement("div",{className:"team-member-content"},r.a.createElement("img",{src:ve.a,alt:"Stergios Zissakis"}),r.a.createElement("h4",null,"Back End Developer/Programmer")))))}}]),c}(r.a.Component);fe.contextType=p;var Ee=fe,we=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={name:"",email:"",phone:"",message:"",error:!1,show:!1},i.show=i.show.bind(Object(u.a)(i)),i}return Object(i.a)(a,[{key:"show",value:function(){this.setState({show:!0})}},{key:"check",value:function(e){return!this.state.error||""!==e}},{key:"submit",value:function(){""===this.state.name||""===this.state.email||""===this.state.message?this.setState({error:!0}):this.setState({error:!1})}},{key:"render",value:function(){return r.a.createElement("section",{id:"".concat(this.props.id),className:"contact",style:{height:this.context.height},tabIndex:"0"},r.a.createElement(W.a,null,r.a.createElement(T.a,{md:2,className:"side"},r.a.createElement("h2",null,r.a.createElement($,{text:"Contact",revealDuration:500,revealDelay:500,parentMethod:this.show,callMethodTime:1100}))),r.a.createElement(T.a,{md:6,sm:12,className:"form"},this.form()),r.a.createElement(T.a,{md:4,className:"design"})))}},{key:"form",value:function(){var e=this;if(this.state.show||"auto"===this.context.height)return r.a.createElement(b,{delay:0,animation:"fadeInUp fast"},r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"line-text"},r.a.createElement("h4",null,"Get In Touch"),r.a.createElement(b,{delay:50,animation:"fadeInUp fast"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"name ".concat(this.check(this.state.name)?"":"error"),placeholder:"Name",onChange:function(t){return e.setState({name:t.target.value})}}))),r.a.createElement(b,{delay:100,animation:"fadeInUp fast"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"email ".concat(this.check(this.state.email)?"":"error"),placeholder:"Email",onChange:function(t){return e.setState({email:t.target.value})}}))),r.a.createElement(b,{delay:150,animation:"fadeInUp fast"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"phone",placeholder:"Phone",onChange:function(t){return e.setState({phone:t.target.value})}}))),r.a.createElement(b,{delay:200,animation:"fadeInUp fast"},r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"message ".concat(this.check(this.state.message)?"":"error"),placeholder:"Message",onChange:function(t){return e.setState({message:t.target.value})}}))),r.a.createElement(b,{delay:250,animation:"fadeInUp fast"},r.a.createElement("div",{className:"submit"},r.a.createElement("button",{className:"hover-button ".concat(this.state.error?"error":""),onClick:function(){return e.submit()}},r.a.createElement("span",null,"Send Message")))))))}}]),a}(r.a.Component);we.contextType=p;var ge=we,be=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,r.a.createElement(A,{id:"header"}),r.a.createElement(q,{id:"home"}),r.a.createElement(Q,{id:"about"}),r.a.createElement(ce,{id:"services"}),r.a.createElement(se,{id:"portfolio"}),r.a.createElement(Ee,{id:"team"}),r.a.createElement(ge,{id:"contact"})),r.a.createElement(D,{duration:1e3}))}}]),a}(r.a.Component);t.default=be;m.a.render(r.a.createElement(be,null),document.getElementById("root"))},47:function(e,t,a){e.exports=a.p+"static/media/ivana.b899189b.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/angelica.cc594e8c.jpg"},49:function(e,t,a){e.exports=a.p+"static/media/stergios.362c28fc.jpg"},80:function(e,t,a){e.exports=a.p+"static/media/logo.6d231c52.svg"},87:function(e,t,a){e.exports=a(262)}},[[87,1,2]]]);
//# sourceMappingURL=main.5e8474de.chunk.js.map