(function(t){function n(n){for(var s,i,c=n[0],r=n[1],u=n[2],d=0,f=[];d<c.length;d++)i=c[d],o[i]&&f.push(o[i][0]),o[i]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);l&&l(n);while(f.length)f.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],s=!0,c=1;c<e.length;c++){var r=e[c];0!==o[r]&&(s=!1)}s&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var s={},o={app:0},a=[];function i(n){if(s[n])return s[n].exports;var e=s[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=s,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var s in t)i.d(e,s,function(n){return t[n]}.bind(null,s));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var l=r;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0a2e":function(t,n,e){"use strict";var s=e("a68c"),o=e.n(s);o.a},1:function(t,n){},"37bf":function(t,n,e){"use strict";var s=e("50fb"),o=e.n(s);o.a},"3ca9":function(t,n,e){},4299:function(t,n,e){"use strict";var s=e("3ca9"),o=e.n(s);o.a},"49cd":function(t,n,e){"use strict";var s=e("e5ba"),o=e.n(s);o.a},"50a4":function(t,n,e){"use strict";var s=e("de90"),o=e.n(s);o.a},"50fb":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("097d");var s=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Navigation"),e("router-view"),e("Toast")],1)},a=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navigation"},[e("div",{staticClass:"navigation-bar"},[e("img",{staticClass:"logo",attrs:{src:t.logo}}),e("div",{staticClass:"navigation-bar-right"},[e("MenuNotifications"),e("button",{staticClass:"btn light expand",on:{click:t.toggleMenu}},[e("font-awesome-icon",{staticClass:"expand-icon",attrs:{icon:["fas","ellipsis-v"]}})],1)],1)]),e("div",{staticClass:"navigation-content",class:{show:t.show}},t._l(t.navigation.items,function(n,s){return e("div",{key:s,staticClass:"navigation-content-item",class:{active:t.isActive(n)},on:{click:function(e){t.goTo(n.to)}}},[t._v("\n      "+t._s(n.text)+"\n    ")])}),0)])},c=[],r=(e("7f7f"),e("be94")),u=e("2f62"),l=e("d333"),d=e.n(l),f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"menu-notifications"},[e("button",{staticClass:"menu-notifications-indicator btn primary",class:{show:t.show},on:{click:t.openNotificationsSheet}},[e("span",[t._v(t._s(t.notifications.length))])]),e("Sheet",{attrs:{show:t.showNotificationsSheet,title:"Notifications"},on:{close:t.closeNotificationsSheet}},[e("div",{staticClass:"section"},[e("div",{staticClass:"notifications-list list"},[t.notifications.length?t._l(t.notifications,function(n,s){return e("div",{key:s,staticClass:"notifications-list-contact list-item",on:{click:function(n){t.goTo(t.to)}}},[t._v("\n            "+t._s(n.message)+"\n          ")])}):e("div",{staticClass:"notifications-list-contact list-item disabled"},[t._v("\n          No notifications\n        ")])],2)])])],1)},m=[],v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"sheet",class:{show:t.show}},[e("div",{staticClass:"sheet-top-bar"},[e("span",[t._v(t._s(t.title))]),e("button",{staticClass:"btn",on:{click:t.close}},[e("font-awesome-icon",{staticClass:"expand-icon",attrs:{icon:["fas","times"]}})],1)]),e("div",{staticClass:"sheet-content"},[t._t("default")],2)])},g=[],h={name:"sheet",props:{show:{type:Boolean,required:!0},title:{type:String,required:!0}},methods:{close:function(){this.$emit("close")}}},p=h,_=(e("698d"),e("2877")),C=Object(_["a"])(p,v,g,!1,null,"4ea60dc7",null);C.options.__file="Sheet.vue";var S=C.exports,E={name:"menu-notifications",data:function(){return{showNotificationsSheet:!1}},computed:Object(r["a"])({},Object(u["b"])({notifications:function(t){return t.notifications}}),{show:function(){return!!this.notifications.length}}),methods:{openNotificationsSheet:function(){this.showNotificationsSheet=!0},closeNotificationsSheet:function(){this.showNotificationsSheet=!1},goTo:function(t){}},components:{Sheet:S}},b=E,T=(e("50a4"),Object(_["a"])(b,f,m,!1,null,"cbf6a310",null));T.options.__file="MenuNotifications.vue";var A=T.exports,O={name:"navigation",data:function(){return{show:!1,logo:d.a}},computed:Object(r["a"])({},Object(u["b"])({navigation:function(t){return t.navigation}})),methods:{toggleMenu:function(){this.show=!this.show},goTo:function(t){this.show=!1,this.$router.push(t)},isActive:function(t){return this.$route.name===t.to.name}},components:{MenuNotifications:A}},N=O,w=(e("37bf"),Object(_["a"])(N,i,c,!1,null,"0a4bde82",null));w.options.__file="Navigation.vue";var R=w.exports,y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"toast",class:{show:t.show}},t._l(t.toasts,function(n,s){return e("div",{key:s,staticClass:"toast-item"},[e("div",{staticClass:"toast-item-message"},[t._v("\n      "+t._s(n.message)+"\n    ")]),e("button",{staticClass:"btn sm toast-item-close",on:{click:t.clear}},[e("font-awesome-icon",{staticClass:"close-icon",attrs:{icon:["fas","times"]}})],1)])}),0)},I=[],k={name:"toast",data:function(){return{show:!1}},computed:Object(r["a"])({},Object(u["b"])({toasts:function(t){return t.toasts}})),methods:{clear:function(){var t=this;this.show=!1,setTimeout(function(){t.$store.commit("CLEAR_TOAST")},250)}},watch:{toasts:{immediate:!0,handler:function(t){t.length?this.show=!0:this.show=!1}}}},x=k,q=(e("0a2e"),Object(_["a"])(x,y,I,!1,null,"12a2ae79",null));q.options.__file="Toast.vue";var j=q.exports,M={name:"app",mounted:function(){var t=this;setInterval(function(){t.$store.dispatch("PING_ONLINE_USERS")},1e4)},components:{Toast:j,Navigation:R}},$=M,D=(e("5c0b"),Object(_["a"])($,o,a,!1,null,null,null));D.options.__file="App.vue";var L=D.exports,U=e("8c4f"),P=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"auth"},[e("div",{staticClass:"auth-container section"},[e("img",{staticClass:"logo",attrs:{src:t.logo}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"input",attrs:{placeholder:"Username",type:"text"},domProps:{value:t.user.username},on:{input:function(n){n.target.composing||t.$set(t.user,"username",n.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"input",attrs:{placeholder:"Password",type:"password"},domProps:{value:t.user.password},on:{keydown:function(n){return"button"in n||!t._k(n.keyCode,"enter",13,n.key,"Enter")?t.login(n):null},input:function(n){n.target.composing||t.$set(t.user,"password",n.target.value)}}}),e("button",{staticClass:"btn lg primary",on:{click:t.login}},[t._v("Login")]),e("button",{staticClass:"btn light",on:{click:t.register}},[t._v("Register")])])])},G=[],V={name:"auth",data:function(){return{user:{username:"",password:""},logo:d.a}},methods:{login:function(){var t=this;this.$store.dispatch("LOGIN",this.user).then(function(n){console.log(n),t.$router.push({name:"conversations"})}).catch(function(t){console.log(t)})},register:function(){}}},B=V,Q=(e("49cd"),Object(_["a"])(B,P,G,!1,null,"674a7fd2",null));Q.options.__file="Auth.vue";var F=Q.exports,H=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"conversations"},[t._m(0),e("div",{staticClass:"section"},[e("div",{staticClass:"conversations-list list"},[t.conversations.length?t._l(t.conversations,function(n,s){return e("div",{key:s,staticClass:"conversations-list-conversation list-item"},[e("div",{staticClass:"contact-info"},[e("span",{staticClass:"contact-info-name"},[t._v(t._s(t.getConversationContactName(n)))]),e("StatusIndicator",{attrs:{contact:t.getConversationContact(n)}})],1),e("button",{staticClass:"btn sm primary",on:{click:function(e){t.selectConversation(n)}}},[e("font-awesome-icon",{staticClass:"expand-icon",attrs:{icon:["far","comment"]}})],1)])}):e("div",{staticClass:"incoming-requests-list-contact list-item disabled"},[t._v("\n        No current conversations\n      ")])],2)])])},J=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"section-title"},[e("span",[t._v("Conversations")])])}],K=(e("7514"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"status-indicator",class:{online:t.contact.online}})}),z=[],W={name:"status-indicator",props:{contact:{type:Object,required:!0}}},X=W,Y=(e("ccd3"),Object(_["a"])(X,K,z,!1,null,"1be39952",null));Y.options.__file="StatusIndicator.vue";var Z=Y.exports,tt={name:"conversations",computed:Object(r["a"])({},Object(u["b"])({user:function(t){return t.user},conversations:function(t){return t.conversations}})),mounted:function(){this.$store.dispatch("PING_ONLINE_USERS")},methods:{selectConversation:function(t){var n=this;this.$store.dispatch("START_CONVERSATION",t.to).then(function(t){n.$router.push({name:"messaging",params:{conversation:n.$store.state.currentConversation}})}).catch(function(t){console.log(t)})},getConversationContact:function(t){return this.user.contacts.find(function(n){return n._id===t.to})},getConversationContactName:function(t){var n=this.user.contacts.find(function(n){return n._id===t.to});return n?n.username:""}},components:{StatusIndicator:Z}},nt=tt,et=(e("a73d"),Object(_["a"])(nt,H,J,!1,null,"6a2e0b90",null));et.options.__file="Conversations.vue";var st=et.exports,ot=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"messaging"},[e("div",{staticClass:"section-title"},[e("span",[t._v("Messaging")]),e("div",{staticClass:"contact-info"},[e("span",{staticClass:"contact-info-name"},[t._v(t._s(t.conversationContact?t.conversationContact.username:""))]),e("StatusIndicator",{attrs:{contact:t.conversationContact}})],1)]),e("Messages",{attrs:{conversation:t.conversation}}),e("MessageActions",{attrs:{conversation:t.conversation}})],1)},at=[],it=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"messages"},[t.conversation?t._l(t.conversation.messages,function(n,s){return e("div",{key:s,staticClass:"message",class:[t.incoming(n)?"incoming":"outgoing"]},[e("div",{staticClass:"message-content"},[t._v(t._s(n.message))]),e("div",{staticClass:"message-indicator",class:""+n.status})])}):t._e()],2)},ct=[],rt={name:"messages",props:{conversation:{type:Object,required:!0}},computed:Object(r["a"])({},Object(u["b"])({user:function(t){return t.user}})),methods:{incoming:function(t){return t.from!==this.user._id}}},ut=rt,lt=(e("4299"),Object(_["a"])(ut,it,ct,!1,null,"f05e88b8",null));lt.options.__file="Messages.vue";var dt=lt.exports,ft=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"message-actions"},[e("div",{staticClass:"message-actions-container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.message.message,expression:"message.message"}],staticClass:"message-actions-input input",domProps:{value:t.message.message},on:{keydown:function(n){return"button"in n||!t._k(n.keyCode,"enter",13,n.key,"Enter")?t.sendMessage(n):null},input:function(n){n.target.composing||t.$set(t.message,"message",n.target.value)}}}),e("button",{staticClass:"btn",class:{disabled:t.sendingMessage},on:{click:t.sendMessage}},[t.sendingMessage?e("font-awesome-icon",{staticClass:"expand-icon",attrs:{icon:["fas","spinner"],spin:""}}):e("span",[t._v("Send")])],1)])])},mt=[],vt=(e("f751"),function(){var t="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",n=0,e=[],s=(new Date).getTime(),o=s===n;n=s;for(var a=new Array(8),i=7;i>=0;i--)a[i]=t.charAt(s%64),s=Math.floor(s/64);if(0!==s)throw new Error("We should have converted the entire timestamp.");var c=a.join("");if(o){for(i=11;i>=0&&63===e[i];i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)c+=t.charAt(e[i]);if(20!=c.length)throw new Error("Length should be 20.");return c}),gt={generateId:vt},ht={name:"message-actions",props:{conversation:{type:Object,required:!0}},data:function(){return{message:{to:null,message:"",status:"sent"}}},computed:Object(r["a"])({},Object(u["b"])({user:function(t){return t.user},sendingMessage:function(t){return t.sendingMessage}})),methods:{sendMessage:function(){var t=Object.assign({},this.message);t._id=gt.generateId(),this.conversation.messages.push(t),this.$store.dispatch("SEND_MESSAGE",t),this.message.message=""}},watch:{conversation:{immediate:!0,handler:function(t){t&&(this.message.to=t.to)}},user:{immediate:!0,handler:function(t){t&&(this.message.from=t._id)}}}},pt=ht,_t=(e("eacc"),Object(_["a"])(pt,ft,mt,!1,null,"4a7e61f6",null));_t.options.__file="MessageActions.vue";var Ct=_t.exports,St={name:"messaging",props:{conversation:{type:Object,required:!0}},computed:Object(r["a"])({},Object(u["b"])({user:function(t){return t.user}}),{conversationContact:function(){var t=this;return this.conversation?this.user.contacts.find(function(n){return n._id===t.conversation.to}):null}}),mounted:function(){this.$store.dispatch("PING_ONLINE_USERS"),this.conversation||this.$router.push({name:"contacts"})},methods:{goTo:function(t){this.$router.push({name:t})}},components:{Messages:dt,MessageActions:Ct,StatusIndicator:Z}},Et=St,bt=(e("b340"),Object(_["a"])(Et,ot,at,!1,null,"75e67088",null));bt.options.__file="Messaging.vue";var Tt=bt.exports,At=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"contacts"},[t._m(0),e("div",{staticClass:"section"},[e("div",{staticClass:"contacts-search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.contactSearch,expression:"contactSearch"}],staticClass:"contacts-search-input input",attrs:{placeholder:"Contact username"},domProps:{value:t.contactSearch},on:{input:function(n){n.target.composing||(t.contactSearch=n.target.value)}}}),e("button",{staticClass:"btn primary",on:{click:t.showAddContactSheet}},[e("font-awesome-icon",{staticClass:"expand-icon",attrs:{icon:["fas","plus"]}})],1)]),e("div",{staticClass:"contacts-list list"},[t.filteredContacts.length?t._l(t.filteredContacts,function(n,s){return e("div",{key:s,staticClass:"contacts-list-contact list-item",on:{click:function(e){t.startConversation(n)}}},[e("span",[t._v(t._s(n.username))]),e("StatusIndicator",{attrs:{contact:n}})],1)}):e("div",{staticClass:"contacts-list-contact list-item disabled"},[t._v("\n        No contacts found\n      ")])],2)]),t._m(1),e("div",{staticClass:"section"},[e("div",{staticClass:"incoming-requests-list list"},[t.user&&t.user.incomingContactRequests&&t.user.incomingContactRequests.length?t._l(t.user.incomingContactRequests,function(n,s){return e("div",{key:s,staticClass:"incoming-requests-list-contact list-item"},[e("span",[t._v(t._s(n.username))]),e("button",{staticClass:"btn sm primary",class:{disabled:t.acceptRequestLoading},on:{click:function(e){t.acceptRequest(n)}}},[t.acceptRequestLoading?e("font-awesome-icon",{staticClass:"expand-icon",attrs:{icon:["fas","spinner"],spin:""}}):e("font-awesome-icon",{staticClass:"expand-icon",attrs:{icon:["fas","check"]}})],1)])}):e("div",{staticClass:"incoming-requests-list-contact list-item disabled"},[t._v("\n        No incoming requests\n      ")])],2)]),t._m(2),e("div",{staticClass:"section"},[e("div",{staticClass:"sent-requests-list list"},[t.user&&t.user.outgoingContactRequests&&t.user.outgoingContactRequests.length?t._l(t.user.outgoingContactRequests,function(n,s){return e("div",{key:s,staticClass:"sent-requests-list-contact list-item"},[t._v("\n          "+t._s(n.username)+"\n        ")])}):e("div",{staticClass:"sent-requests-list-contact list-item disabled"},[t._v("\n        No sent requests\n      ")])],2)]),e("Sheet",{attrs:{show:t.showAddContact,title:"Add Contact"},on:{close:t.closeAddContactSheet}},[e("div",{staticClass:"contacts-add"},[e("div",{staticClass:"contacts-add-search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.contactAddSearch,expression:"contactAddSearch"}],staticClass:"contacts-add-search-input input",attrs:{placeholder:"Contact username"},domProps:{value:t.contactAddSearch},on:{input:function(n){n.target.composing||(t.contactAddSearch=n.target.value)}}}),e("button",{staticClass:"btn primary",class:{disabled:t.addContactSearchLoading},on:{click:t.searchContactsAdd}},[t.addContactSearchLoading?e("font-awesome-icon",{staticClass:"expand-icon",attrs:{icon:["fas","spinner"],spin:""}}):e("font-awesome-icon",{staticClass:"expand-icon",attrs:{icon:["fas","search"]}})],1)]),e("div",{staticClass:"contacts-add-results"},[e("div",{staticClass:"contacts-add-results-list list"},[t.addContactsResults.length?t._l(t.addContactsResults,function(n,s){return e("div",{key:s,staticClass:"contacts-add-results-list-contact list-item"},[e("span",[t._v(t._s(n.username))]),e("button",{staticClass:"btn sm primary",class:{disabled:t.addContactLoading||t.existingRequest(n)},on:{click:function(e){t.newContactAdd(n)}}},[t.addContactLoading?e("font-awesome-icon",{staticClass:"expand-icon",attrs:{icon:["fas","spinner"],spin:""}}):e("font-awesome-icon",{staticClass:"expand-icon",attrs:{icon:["fas","plus"]}})],1)])}):e("div",{staticClass:"contacts-add-results-list-contact list-item disabled"},[t._v("\n            No contacts found\n          ")])],2)])])])],1)},Ot=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"section-title"},[e("span",[t._v("Contacts")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"section-title"},[e("span",[t._v("Incoming Requests")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"section-title"},[e("span",[t._v("Sent Requests")])])}],Nt=(e("6762"),e("2fdb"),{name:"contacts",data:function(){return{contactSearch:"",contactAddSearch:"",addContactLoading:!1,addContactSearchLoading:!1,acceptRequestLoading:!1,addContactsResults:[],showAddContact:!1}},mounted:function(){this.$store.dispatch("PING_ONLINE_USERS")},computed:Object(r["a"])({},Object(u["b"])({user:function(t){return t.user}}),{filteredContacts:function(){var t=this,n=[];return this.user&&this.user.contacts.length&&this.contactSearch.length?n=this.user.contacts.filter(function(n){return n.username.includes(t.contactSearch)}):this.user&&this.user.contacts.length&&(n=this.user.contacts),n}}),methods:{startConversation:function(t){var n=this;this.$store.dispatch("START_CONVERSATION",t._id).then(function(t){n.$router.push({name:"messaging",params:{conversation:n.$store.state.currentConversation}})}).catch(function(t){console.log(t)})},showAddContactSheet:function(){this.showAddContact=!0},closeAddContactSheet:function(){this.showAddContact=!1,this.contactAddSearch="",this.addContactsResults=[]},searchContactsAdd:function(){var t=this;this.contactAddSearch.length&&(this.addContactSearchLoading=!0,this.$store.dispatch("SEARCH_USERS",{term:this.contactAddSearch}).then(function(n){t.addContactSearchLoading=!1,t.addContactsResults=n}))},newContactAdd:function(t){var n=this;this.addContactLoading=!0,this.$store.dispatch("SEND_CONTACT_REQUEST",{contactId:t._id}).then(function(t){n.addContactLoading=!1})},existingRequest:function(t){return this.user.outgoingContactRequests.find(function(n){return n._id===t._id})},acceptRequest:function(t){var n=this;this.acceptRequestLoading=!0,this.$store.dispatch("ACCEPT_CONTACT_REQUEST",{requestContactId:t._id}).then(function(t){n.acceptRequestLoading=!1})}},components:{Sheet:S,StatusIndicator:Z}}),wt=Nt,Rt=(e("e941"),Object(_["a"])(wt,At,Ot,!1,null,"0528b074",null));Rt.options.__file="Contacts.vue";var yt=Rt.exports;s["a"].use(U["a"]);var It=new U["a"]({mode:"history",base:"/",routes:[{path:"/",name:"auth",component:F},{path:"/conversations",name:"conversations",component:st},{path:"/messaging",name:"messaging",component:Tt,props:!0},{path:"/contacts",name:"contacts",component:yt},{path:"/settings",name:"settings",component:yt}]}),kt={user:null,token:null,currentConversation:null,sendingMessage:!1,conversations:[],toasts:[],notifications:[],navigation:{items:[{text:"Conversations",to:{name:"conversations"}},{text:"Contacts",to:{name:"contacts"}},{text:"Messaging",to:{name:"messaging"}},{text:"Settings",to:{name:"settings"}}]}},xt=(e("20d6"),{SET_USER:function(t,n){t.user=n},SET_TOKEN:function(t,n){t.token=n},SET_SENDING_MESSAGE:function(t,n){t.sendingMessage=n},SELECT_CONVERSATION:function(t,n){t.currentConversation=n},START_CONVERSATION:function(t,n){t.conversations.push(n),t.currentConversation=n},ADD_TOAST:function(t,n){t.toasts=[n]},CLEAR_TOAST:function(t,n){t.toasts=[]},ADD_NOTIFICATION:function(t,n){t.notifications.push(n)},CLEAR_NOTIFICATION:function(t,n){var e=t.notifications.findIndex(function(t){return t._id===n});e>-1&&t.notifications.splice(e,1)}}),qt=(e("ac4d"),e("8a81"),e("ac6a"),e("bc3a")),jt=e.n(qt),Mt=e("8055"),$t=e.n(Mt),Dt=$t()("https://open-api-dev.herokuapp.com");Dt.on("connect",function(){console.log("CONNECT")}),Dt.on("connection_server",function(){console.log("connection_server")}),Dt.on("user_id_server",function(){console.log("user_id_server")}),Dt.on("ping_online_users_response",function(t){console.log("ping_online_users_response"),Pt.dispatch("SET_CONTACT_STATUS",t)}),Dt.on("message_incoming",function(t){console.log("message_incoming: ",t),Dt.emit("message_received",t),Pt.dispatch("RECEIVE_MESSAGE",t)}),Dt.on("message_confirmation_sent",function(t){console.log("message_confirmation_sent"),Pt.commit("SET_SENDING_MESSAGE",!1),Pt.dispatch("SET_MESSAGE_STATUS",{message:t,status:"confirmed"})}),Dt.on("message_confirmation_received",function(t){console.log("message_confirmation_received"),Pt.dispatch("SET_MESSAGE_STATUS",{message:t,status:"received"})});var Lt={BASE:"https://open-api-dev.herokuapp.com/api/v1/",USER:{BASE:"user",LOGIN:"user/login",CONTACT_REQUEST:"user/request",CONTACT_REQUEST_ACCEPT:"user/request/accept"}},Ut={LOGIN:function(t,n){var e=t.commit;t.state;return new Promise(function(t,s){jt.a.post("".concat(Lt.BASE).concat(Lt.USER.LOGIN),n).then(function(n){n.data?(e("SET_USER",n.data.user),e("SET_TOKEN",n.data.token),jt.a.defaults.headers.common["Authorization"]=n.data.token,n.data.user.incomingContactRequests&&n.data.user.incomingContactRequests.length&&e("ADD_NOTIFICATION",{_id:gt.generateId(),message:"New Contact Request",to:{name:"contacts"}}),Dt.emit("user_id",n.data.user._id),t(n.data.user)):(console.log(n.data),e("ADD_TOAST",{message:"Login failed."}),s(n.data))}).catch(function(t){console.log(t),e("ADD_TOAST",{message:"Login failed."}),s(t)})})},LOGOUT:function(t,n){var e=t.commit;t.state;return new Promise(function(t,n){e("SET_USER",null),t()})},PING_ONLINE_USERS:function(t){t.commit;var n=t.state;if(n.user&&n.user.contacts){var e=[],s=!0,o=!1,a=void 0;try{for(var i,c=n.user.contacts[Symbol.iterator]();!(s=(i=c.next()).done);s=!0){var r=i.value;e.push(r._id)}}catch(u){o=!0,a=u}finally{try{s||null==c.return||c.return()}finally{if(o)throw a}}e.length&&Dt.emit("ping_online_users",e)}},SET_CONTACT_STATUS:function(t,n){t.commit;var e=t.state;console.log(e.user.contacts);var s=!0,o=!1,a=void 0;try{for(var i,c=function(){var t=i.value,n=e.user.contacts.find(function(n){return n._id===t.contact});n&&(n.online=t.online)},r=n[Symbol.iterator]();!(s=(i=r.next()).done);s=!0)c()}catch(u){o=!0,a=u}finally{try{s||null==r.return||r.return()}finally{if(o)throw a}}console.log(e.user.contacts)},START_CONVERSATION:function(t,n){var e=t.commit,s=t.state;return new Promise(function(t,o){var a=s.conversations.find(function(t){return t.to===n});if(a)e("SELECT_CONVERSATION",a);else{var i={to:n,messages:[],startedAt:Date.now()};e("START_CONVERSATION",i)}t()})},SEND_MESSAGE:function(t,n){var e=t.commit;t.state;e("SET_SENDING_MESSAGE",!0),Dt.emit("message_send",n)},RECEIVE_MESSAGE:function(t,n){var e=t.commit,s=t.state,o=s.conversations.find(function(t){return t.to===n.from});if(o)o.messages.push(n);else{var a={_id:gt.generateId(),to:n.from,messages:[n],startedAt:Date.now()};e("START_CONVERSATION",a)}var i=s.currentConversation&&o&&s.currentConversation._id===o._id;i||e("ADD_NOTIFICATION",{_id:gt.generateId(),message:"New Message",to:{name:"conversations"}})},SET_MESSAGE_STATUS:function(t,n){t.commit;var e=t.state,s=e.conversations.find(function(t){return t.to===n.message.to});if(s){var o=s.messages.find(function(t){return t._id===n.message._id});o&&(o.status=n.status)}},SEARCH_USERS:function(t,n){var e=t.commit;t.state;return new Promise(function(t,s){var o=encodeURIComponent(n.term);jt.a.get("".concat(Lt.BASE).concat(Lt.USER.BASE,"?field=username&operator=%3D%3D&value=").concat(o)).then(function(n){n.data?t(n.data):(console.log(error),e("ADD_TOAST",{message:"Search failed."}),s(n.data))}).catch(function(t){console.log(t),e("ADD_TOAST",{message:"Search failed."}),s(t)})})},SEND_CONTACT_REQUEST:function(t,n){var e=t.commit;t.state;return new Promise(function(t,s){jt.a.post("".concat(Lt.BASE).concat(Lt.USER.CONTACT_REQUEST),n).then(function(n){n.data?(e("SET_USER",n.data),e("ADD_TOAST",{message:"Contact request sent."}),t(n.data)):(console.log(error),e("ADD_TOAST",{message:"Contact request failed."}),s(n.data))}).catch(function(t){console.log(t),e("ADD_TOAST",{message:"Contact request failed."}),s(t)})})},ACCEPT_CONTACT_REQUEST:function(t,n){var e=t.commit;t.state;return new Promise(function(t,s){jt.a.post("".concat(Lt.BASE).concat(Lt.USER.CONTACT_REQUEST_ACCEPT),n).then(function(n){n.data?(e("SET_USER",n.data),e("ADD_TOAST",{message:"Accepted contact request."}),t(n.data)):(console.log(error),e("ADD_TOAST",{message:"Contact request accept failed."}),s(n.data))}).catch(function(t){console.log(t),e("ADD_TOAST",{message:"Contact request accept failed."}),s(t)})})}};s["a"].use(u["a"]);var Pt=new u["a"].Store({state:kt,mutations:xt,actions:Ut}),Gt=e("9483");Object(Gt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Vt=e("ecee"),Bt=e("c074"),Qt=e("f2d1"),Ft=e("b702"),Ht=e("ad3d"),Jt=e("8682");s["a"].config.productionTip=!1,Vt["c"].add(Bt["a"]),Vt["c"].add(Qt["a"]),Vt["c"].add(Ft["a"]),s["a"].component("font-awesome-icon",Ht["a"]),s["a"].use(Jt["a"],{name:"Timeago",locale:"en"}),new s["a"]({router:It,store:Pt,render:function(t){return t(L)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var s=e("5e27"),o=e.n(s);o.a},"5e27":function(t,n,e){},"698d":function(t,n,e){"use strict";var s=e("a508"),o=e.n(s);o.a},a508:function(t,n,e){},a68c:function(t,n,e){},a73d:function(t,n,e){"use strict";var s=e("e726"),o=e.n(s);o.a},a91d:function(t,n,e){},b340:function(t,n,e){"use strict";var s=e("c823"),o=e.n(s);o.a},b52a:function(t,n,e){},c823:function(t,n,e){},ccd3:function(t,n,e){"use strict";var s=e("b52a"),o=e.n(s);o.a},d333:function(t,n,e){t.exports=e.p+"img/open-logo.880bb04e.svg"},da46:function(t,n,e){},de90:function(t,n,e){},e5ba:function(t,n,e){},e726:function(t,n,e){},e941:function(t,n,e){"use strict";var s=e("da46"),o=e.n(s);o.a},eacc:function(t,n,e){"use strict";var s=e("a91d"),o=e.n(s);o.a}});
//# sourceMappingURL=app.68d439a1.js.map