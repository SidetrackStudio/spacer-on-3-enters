!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=19)}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){!function(){t.exports=this.wp.data}()},function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){!function(){t.exports=this.lodash}()},function(t,e){!function(){t.exports=this.wp.components}()},function(t,e){!function(){t.exports=this.wp.compose}()},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e){!function(){t.exports=this.wp.keycodes}()},function(t,e){!function(){t.exports=this.wp.plugins}()},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},function(t,e,n){var o=n(15),r=n(6);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?r(t):e}},function(t,e,n){var o=n(16);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},function(t,e){!function(){t.exports=this.wp.blocks}()},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},,,function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(9),c=n(10),i=n.n(c),u=n(11),s=n.n(u),l=n(6),a=n.n(l),f=n(12),p=n.n(f),d=n(7),b=n.n(d),y=n(13),m=n.n(y),h=n(0),O=n(3),g=n(8),j=n(5),k=n(14),v=n(1),x=n(4);function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var _=function(t){m()(r,t);var e,n=(e=r,function(){var t,n=b()(e);if(w()){var o=b()(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return p()(this,t)});function r(){var t;return i()(this,r),(t=n.apply(this,arguments)).nameInput=Object(h.createRef)(),t.focus=t.focus.bind(a()(t)),t}return s()(r,[{key:"componentDidMount",value:function(){this.focus()}},{key:"onKeyDown",value:function(t){var e=t.keyCode;e===g.DOWN?alert("You pressed the down arrow!"):e===g.ENTER?alert("You pressed the enter key!"):alert("You pressed another key.")}},{key:"focus",value:function(){this.nameInput.current}},{key:"componentDidUpdate",value:function(){this.focus()}},{key:"render",value:function(){var t=this.props,e=t.getBlocks,n=t.getBlockIndex,r=t.createSpacer,c=t.onToggle,i=t.isPrompted,u=n-2,s=function(){c(1)};if(u<0)return null;var l=e[u],a=e[u+1],f=e[u+2];return"core/paragraph"!==l.name||"core/paragraph"!==a.name||"core/paragraph"!==f.name?null:Object(O.isEmpty)(l.attributes.content)&&Object(O.isEmpty)(a.attributes.content)&&Object(O.isEmpty)(f.attributes.content)?i?(r(l.clientId,a.clientId,f.clientId),null):Object(h.createElement)(h.Fragment,null,Object(h.createElement)(x.Modal,{title:Object(o.__)("Enable Shortcut","sidetrack-studio"),onRequestClose:function(){return s()},shouldCloseOnClickOutside:!1,closeLabel:Object(o.__)("Close","sidetrack-studio"),icon:null,className:"sidetrack-studio-modal-component components-modal--sidetrack-studio-transform-empty"},Object(h.createElement)("p",null,Object(o.__)("Do you want to automatically transform three(3) consecutive empty paragraphs into Spacer Block?","sidetrack-studio")),Object(h.createElement)(x.Button,{isPrimary:!0,isLarge:!0,onClick:function(){c(0),r(l.clientId,a.clientId,f.clientId)},ref:this.nameInput},Object(o.__)("Yes Enable","sidetrack-studio"))," ",Object(h.createElement)(x.Button,{isDefault:!0,isLarge:!0,onClick:function(){return s()}},Object(o.__)("No, Thanks","sidetrack-studio")),Object(h.createElement)("p",null,Object(h.createElement)("small",null,Object(o.__)("This prompt will only be shown once and will remember your preference. Thanks!","sidetrack-studio"))))):null}}]),r}(h.Component),E=Object(j.compose)(Object(v.withSelect)((function(){var t=Object(v.select)("core/block-editor"),e=t.getSelectedBlockClientId,n=t.getBlockRootClientId,o=t.getBlocks,r=t.getBlockIndex,c=t.getBlocksByClientId,i=e(),u=n(i),s=o(),l=r(i);return Object(O.isEmpty)(u)||(s=c(u)[0].innerBlocks,l=r(i,u)),{getBlocks:s,getBlockIndex:l,isDisabled:Object(v.select)("core/edit-post").isFeatureActive("disableEditorsKitTransformEmptyWriting"),isPrompted:Object(v.select)("core/edit-post").isFeatureActive("editorsKitTransformEmptyWriting")}})),Object(v.withDispatch)((function(){return{createSpacer:function(t,e,n){var o=Object(v.dispatch)("core/block-editor"),r=o.selectBlock,c=o.replaceBlock,i=o.removeBlocks,u=Object(k.createBlock)("core/spacer",{});i([t,e]),c(n,u),r(u.clientId)},onToggle:function(t){Object(v.dispatch)("core/edit-post").toggleFeature("editorsKitTransformEmptyWriting"),t&&Object(v.dispatch)("core/edit-post").toggleFeature("disableEditorsKitTransformEmptyWriting")}}})),Object(j.ifCondition)((function(t){return!t.isDisabled})),x.withSpokenMessages)(_);Object(r.registerPlugin)("three-enters-to-spacer",{icon:!1,render:E})}]);