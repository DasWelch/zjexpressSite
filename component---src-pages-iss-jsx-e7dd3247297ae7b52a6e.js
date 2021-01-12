(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3gOk":function(e,t,n){"use strict";n.r(t);var o=n("dI71"),l=n("q1tI"),i=n.n(l),a=n("Bl7J"),r=n("vrFN"),s=n("wx14"),u=n("zLVn");function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=n("4R65"),m=n("2mql"),h=n.n(m),d=Object(l.createContext)({}),E=d.Consumer,v=d.Provider,b=function(e){var t=function(t,n){return i.a.createElement(E,null,(function(o){return i.a.createElement(e,Object(s.a)({},t,{leaflet:o,ref:n}))}))},n=e.displayName||e.name||"Component";t.displayName="Leaflet("+n+")";var o=Object(l.forwardRef)(t);return h()(o,e),o},g=(n("RUBk"),/^on(.+)$/i),y=function(e){function t(t){var n;return p(c(n=e.call(this,t)||this),"_leafletEvents",void 0),p(c(n),"leafletElement",void 0),n._leafletEvents=n.extractLeafletEvents(t),n}Object(o.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.bindLeafletEvents(this._leafletEvents)},n.componentDidUpdate=function(e){this._leafletEvents=this.bindLeafletEvents(this.extractLeafletEvents(this.props),this._leafletEvents)},n.componentWillUnmount=function(){var e=this,t=this.leafletElement;t&&Object.keys(this._leafletEvents).forEach((function(n){t.off(n,e._leafletEvents[n])}))},n.extractLeafletEvents=function(e){return Object.keys(e).reduce((function(t,n){g.test(n)&&(null!=e[n]&&(t[n.replace(g,(function(e,t){return t.toLowerCase()}))]=e[n]));return t}),{})},n.bindLeafletEvents=function(e,t){void 0===e&&(e={}),void 0===t&&(t={});var n=this.leafletElement;if(null==n||null==n.on)return{};var o=Object(s.a)({},t);return Object.keys(t).forEach((function(l){null!=e[l]&&t[l]===e[l]||(delete o[l],n.off(l,t[l]))})),Object.keys(e).forEach((function(l){null!=t[l]&&e[l]===t[l]||(o[l]=e[l],n.on(l,e[l]))})),o},n.fireLeafletEvent=function(e,t){var n=this.leafletElement;n&&n.fire(e,t)},t}(l.Component),O=function(e){return void 0===e&&(e=""),e.split(" ").filter(Boolean)},w=function(e,t,n){null!=e&&n!==t&&(null!=t&&t.length>0&&function(e,t){O(t).forEach((function(t){f.DomUtil.removeClass(e,t)}))}(e,t),null!=n&&n.length>0&&function(e,t){O(t).forEach((function(t){f.DomUtil.addClass(e,t)}))}(e,n))};function Z(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return Object.keys(e).reduce((function(t,o){return-1===n.indexOf(o)&&(t[o]=e[o]),t}),{})}var C=["children","className","id","style","useFlyTo","whenReady"],x=function(e){return Array.isArray(e)?[e[0],e[1]]:[e.lat,e.lon?e.lon:e.lng]},L=function(e){function t(t){var n;return p(c(n=e.call(this,t)||this),"className",void 0),p(c(n),"contextValue",void 0),p(c(n),"container",void 0),p(c(n),"viewport",{center:void 0,zoom:void 0}),p(c(n),"_ready",!1),p(c(n),"_updating",!1),p(c(n),"onViewportChange",(function(){var e=n.leafletElement.getCenter();n.viewport={center:e?[e.lat,e.lng]:void 0,zoom:n.leafletElement.getZoom()},n.props.onViewportChange&&!n._updating&&n.props.onViewportChange(n.viewport)})),p(c(n),"onViewportChanged",(function(){n.props.onViewportChanged&&!n._updating&&n.props.onViewportChanged(n.viewport)})),p(c(n),"bindContainer",(function(e){n.container=e})),n.className=t.className,n}Object(o.a)(t,e);var n=t.prototype;return n.createLeafletElement=function(e){var t=e.viewport,n=Object(u.a)(e,["viewport"]);return t&&(t.center&&(n.center=t.center),"number"==typeof t.zoom&&(n.zoom=t.zoom)),new f.Map(this.container,n)},n.updateLeafletElement=function(e,t){this._updating=!0;var n=t.bounds,o=t.boundsOptions,l=t.boxZoom,i=t.center,a=t.className,r=t.doubleClickZoom,s=t.dragging,u=t.keyboard,c=t.maxBounds,p=t.scrollWheelZoom,f=t.tap,m=t.touchZoom,h=t.useFlyTo,d=t.viewport,E=t.zoom;if(w(this.container,e.className,a),d&&d!==e.viewport){var v=d.center?d.center:i,b=null==d.zoom?E:d.zoom;!0===h?this.leafletElement.flyTo(v,b,this.getZoomPanOptions(t)):this.leafletElement.setView(v,b,this.getZoomPanOptions(t))}else i&&this.shouldUpdateCenter(i,e.center)?!0===h?this.leafletElement.flyTo(i,E,this.getZoomPanOptions(t)):this.leafletElement.setView(i,E,this.getZoomPanOptions(t)):"number"==typeof E&&E!==e.zoom&&(null==e.zoom?this.leafletElement.setView(i,E,this.getZoomPanOptions(t)):this.leafletElement.setZoom(E,this.getZoomPanOptions(t)));c&&this.shouldUpdateBounds(c,e.maxBounds)&&this.leafletElement.setMaxBounds(c),n&&(this.shouldUpdateBounds(n,e.bounds)||o!==e.boundsOptions)&&(!0===h?this.leafletElement.flyToBounds(n,this.getFitBoundsOptions(t)):this.leafletElement.fitBounds(n,this.getFitBoundsOptions(t))),l!==e.boxZoom&&(!0===l?this.leafletElement.boxZoom.enable():this.leafletElement.boxZoom.disable()),r!==e.doubleClickZoom&&(!0===r||"string"==typeof r?(this.leafletElement.options.doubleClickZoom=r,this.leafletElement.doubleClickZoom.enable()):this.leafletElement.doubleClickZoom.disable()),s!==e.dragging&&(!0===s?this.leafletElement.dragging.enable():this.leafletElement.dragging.disable()),u!==e.keyboard&&(!0===u?this.leafletElement.keyboard.enable():this.leafletElement.keyboard.disable()),p!==e.scrollWheelZoom&&(!0===p||"string"==typeof p?(this.leafletElement.options.scrollWheelZoom=p,this.leafletElement.scrollWheelZoom.enable()):this.leafletElement.scrollWheelZoom.disable()),f!==e.tap&&(!0===f?this.leafletElement.tap.enable():this.leafletElement.tap.disable()),m!==e.touchZoom&&(!0===m||"string"==typeof m?(this.leafletElement.options.touchZoom=m,this.leafletElement.touchZoom.enable()):this.leafletElement.touchZoom.disable()),this._updating=!1},n.getZoomPanOptions=function(e){return{animate:e.animate,duration:e.duration,easeLinearity:e.easeLinearity,noMoveStart:e.noMoveStart}},n.getFitBoundsOptions=function(e){var t=this.getZoomPanOptions(e);return Object(s.a)({},t,e.boundsOptions)},n.componentDidMount=function(){var t=Z.apply(void 0,[this.props].concat(C));this.leafletElement=this.createLeafletElement(t),this.leafletElement.on("move",this.onViewportChange),this.leafletElement.on("moveend",this.onViewportChanged),null!=t.bounds&&this.leafletElement.fitBounds(t.bounds,this.getFitBoundsOptions(t)),this.contextValue={layerContainer:this.leafletElement,map:this.leafletElement},e.prototype.componentDidMount.call(this),this.forceUpdate()},n.componentDidUpdate=function(t){!1===this._ready&&(this._ready=!0,this.props.whenReady&&this.leafletElement.whenReady(this.props.whenReady)),e.prototype.componentDidUpdate.call(this,t),this.updateLeafletElement(t,this.props)},n.componentWillUnmount=function(){e.prototype.componentWillUnmount.call(this),this.leafletElement.off("move",this.onViewportChange),this.leafletElement.off("moveend",this.onViewportChanged),!0===this.props.preferCanvas?(this.leafletElement._initEvents(!0),this.leafletElement._stop()):this.leafletElement.remove()},n.shouldUpdateCenter=function(e,t){return!t||(e=x(e),t=x(t),e[0]!==t[0]||e[1]!==t[1])},n.shouldUpdateBounds=function(e,t){return!t||!Object(f.latLngBounds)(e).equals(Object(f.latLngBounds)(t))},n.render=function(){return i.a.createElement("div",{className:this.className,id:this.props.id,ref:this.bindContainer,style:this.props.style},this.contextValue?i.a.createElement(v,{value:this.contextValue},this.props.children):null)},t}(y);function j(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var V=function(e){function t(t){var n;return p(c(n=e.call(this,t)||this),"contextValue",void 0),p(c(n),"leafletElement",void 0),n.leafletElement=n.createLeafletElement(t),n}Object(o.a)(t,e);var n,a,r,s=t.prototype;return s.createLeafletElement=function(e){throw new Error("createLeafletElement() must be implemented")},s.updateLeafletElement=function(e,t){},s.componentDidMount=function(){e.prototype.componentDidMount.call(this),this.layerContainer.addLayer(this.leafletElement)},s.componentDidUpdate=function(t){if(e.prototype.componentDidUpdate.call(this,t),this.props.attribution!==t.attribution){var n=this.props.leaflet.map;null!=n&&null!=n.attributionControl&&(n.attributionControl.removeAttribution(t.attribution),n.attributionControl.addAttribution(this.props.attribution))}this.updateLeafletElement(t,this.props)},s.componentWillUnmount=function(){e.prototype.componentWillUnmount.call(this),this.layerContainer.removeLayer(this.leafletElement)},s.render=function(){var e=this.props.children;return null==e?null:null==this.contextValue?i.a.createElement(l.Fragment,null,e):i.a.createElement(v,{value:this.contextValue},e)},n=t,(a=[{key:"layerContainer",get:function(){return this.props.leaflet.layerContainer||this.props.leaflet.map}}])&&j(n.prototype,a),r&&j(n,r),t}(function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.getOptions=function(e){return null!=e.pane?e:null!=e.leaflet&&null!=e.leaflet.pane?Object(s.a)({},e,{pane:e.leaflet.pane}):e},t}(y)),z=b(function(e){function t(){return e.apply(this,arguments)||this}Object(o.a)(t,e);var n=t.prototype;return n.createLeafletElement=function(e){return new f.TileLayer(e.url,this.getOptions(e))},n.updateLeafletElement=function(t,n){e.prototype.updateLeafletElement.call(this,t,n),n.url!==t.url&&this.leafletElement.setUrl(n.url)},t}(function(e){function t(){return e.apply(this,arguments)||this}Object(o.a)(t,e);var n=t.prototype;return n.createLeafletElement=function(e){return new f.GridLayer(this.getOptions(e))},n.updateLeafletElement=function(e,t){var n=t.opacity,o=t.zIndex;n!==e.opacity&&this.leafletElement.setOpacity(n),o!==e.zIndex&&this.leafletElement.setZIndex(o)},n.getOptions=function(t){var n=Object(s.a)({},e.prototype.getOptions.call(this,t)),o=t.leaflet.map;return null!=o&&(null==n.maxZoom&&null!=o.options.maxZoom&&(n.maxZoom=o.options.maxZoom),null==n.minZoom&&null!=o.options.minZoom&&(n.minZoom=o.options.minZoom)),n},n.render=function(){return null},t}(V))),k=b(function(e){function t(){return e.apply(this,arguments)||this}Object(o.a)(t,e);var n=t.prototype;return n.createLeafletElement=function(e){var t=new f.Marker(e.position,this.getOptions(e));return this.contextValue=Object(s.a)({},e.leaflet,{popupContainer:t}),t},n.updateLeafletElement=function(e,t){t.position!==e.position&&this.leafletElement.setLatLng(t.position),t.icon!==e.icon&&this.leafletElement.setIcon(t.icon),t.zIndexOffset!==e.zIndexOffset&&this.leafletElement.setZIndexOffset(t.zIndexOffset),t.opacity!==e.opacity&&this.leafletElement.setOpacity(t.opacity),t.draggable!==e.draggable&&(!0===t.draggable?this.leafletElement.dragging.enable():this.leafletElement.dragging.disable())},n.render=function(){var e=this.props.children;return null==e||null==this.contextValue?null:i.a.createElement(v,{value:this.contextValue},e)},t}(V)),U=function(e){function t(){var t;return(t=e.call(this)||this).state={position:[51.505,-.09],zoom:7},t}Object(o.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.interval=setInterval((function(){fetch("https://api.wheretheiss.at/v1/satellites/25544").then((function(e){return e.json()})).then((function(t){var n,o=[t.latitude,t.longitude],l=null!==(n=e.map.leafletElement._zoom)&&void 0!==n?n:7;e.setState({position:o,zoom:l})}))}),1e3)},n.render=function(){var e=this;return i.a.createElement(a.a,null,i.a.createElement(r.a,{title:"ISS"}),i.a.createElement(L,{style:{height:"500px"},center:this.state.position,zoom:this.state.zoom,ref:function(t){e.map=t}},i.a.createElement(z,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),i.a.createElement(k,{position:this.state.position})))},t}(i.a.Component);t.default=U}}]);
//# sourceMappingURL=component---src-pages-iss-jsx-e7dd3247297ae7b52a6e.js.map