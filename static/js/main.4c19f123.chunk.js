(this.webpackJsonpsavakhed=this.webpackJsonpsavakhed||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(3),n=a.n(c),i=a(23),r=a.n(i),l=(a(30),a(8)),o=a(9),h=a(11),d=a(10),u=a(13),j=(a(31),a(16)),b=(a(32),function(e){var t=e.isToggled,a=e.onToggle,c=e.label;return Object(s.jsxs)("div",{className:"switch-container",children:[Object(s.jsxs)("label",{className:"switch",children:[Object(s.jsx)("input",{type:"checkbox",checked:t,onChange:a}),Object(s.jsx)("span",{className:"slider"})]}),Object(s.jsx)("span",{className:"tag",children:c})]})}),k=(a(33),function(e){var t=e.onInput,a=e.onSearch,n=e.searchAgainst,i=e.onChange,r=Object(c.useState)(!1),l=Object(j.a)(r,2),o=l[0],h=l[1],d=Object(c.useState)("\u090f\u0915\u091f\u093e \u091c\u0940\u0935 \u0938\u0926\u093e\u0936\u093f\u0935"),u=Object(j.a)(d,2),k=u[0],m=u[1];return Object(s.jsxs)("form",{className:"form",children:[Object(s.jsxs)("section",{className:"search-filter-section",children:[Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"radio",name:"pustakName",value:"pustakName",checked:"pustakName"===n,onChange:i}),"\u092a\u0941\u0938\u094d\u0924\u0915"]}),Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"radio",name:"lekhak",value:"lekhak",checked:"lekhak"===n,onChange:i}),"\u0932\u0947\u0916\u0915"]})]}),Object(s.jsxs)("section",{className:"input-section",children:[Object(s.jsx)("input",{className:"search-bar",type:"text",placeholder:"Search by ".concat("lekhak"===n?"Author":"Book"," name"),onInput:t}),Object(s.jsx)("button",{className:"search-button",type:"submit",onClick:a,children:"Search"})]}),Object(s.jsx)(b,{className:"toggle-button",isToggled:o,onToggle:function(){h(!o),setTimeout((function(){m(o?"\u090f\u0915\u091f\u093e \u091c\u0940\u0935 \u0938\u0926\u093e\u0936\u093f\u0935":"\u0905\u0921\u0932\u093e \u0939\u0930\u0940 \u0911\u091f\u094b\u0938\u091c\u0947\u0937\u094d\u091f\u091a\u0947 \u092a\u093e\u092f \u0927\u0930\u0940")}),200)},label:k})]})}),m=(a(34),function(e){var t=e.tableHeaders,a=e.tableElements,c=e.searched,n=e.setCurrentDetails;return Object(s.jsx)("div",{className:"table-super",children:a.length&&c?Object(s.jsxs)("table",{children:[Object(s.jsx)("thead",{children:Object(s.jsx)("tr",{children:t.map((function(e,t){return Object(s.jsx)("th",{children:e},t)}))})}),Object(s.jsx)("tbody",{children:a.map((function(e,t){return Object(s.jsxs)("tr",{onClick:function(){return n(e)},children:[Object(s.jsx)("td",{children:e.dakhalId}),Object(s.jsx)("td",{children:e.vibhagId}),Object(s.jsx)("td",{children:Object(s.jsx)("a",{href:"#/details/".concat(e.id),children:e.pustakName.join(" ")})}),Object(s.jsx)("td",{children:e.lekhak.join(" ")})]},t)}))})]}):c?Object(s.jsx)("div",{children:"No results found"}):null})}),v=a(19);a(46),a(36);v.a.initializeApp({apiKey:"AIzaSyCzHYtN3HUc7uNhG15YD3hrnyiX_poQUrM",authDomain:"devsavakhed.firebaseapp.com",projectId:"devsavakhed",storageBucket:"devsavakhed.appspot.com",messagingSenderId:"774083254382",appId:"1:774083254382:web:b184cb1b0851be9474ae7f",measurementId:"G-RCY6EWCX6V"});v.a.auth();var O=v.a.firestore(),g=(v.a,["\u094d","\u093e","\u093f","\u0940","\u0941","\u0942","\u0947","\u0948","\u094b","\u094c","\u0902","\u0945","\u0949","\u0903","\u0943"]),p=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).search=function(e,t){s.setState({loading:!0});var a="pustakName"===e?"pustakFullName":"lekhakFullName";O.collection("bookList").where(a,"==",t.join(" ")).get().then((function(e){var t=[];e.forEach((function(e){var a=e.data();t.push(Object(u.a)(Object(u.a)({},a),{},{id:e.id}))})),s.setState({results:t,loading:!1})})).catch((function(e){return console.error(e)})),0==s.state.results.length&&(a="pustakName"===e?"pustakNameMulakshare":"lekhakNameMulakshare",O.collection("bookList").where(a,"==",s.getMulakshara(t)).get().then((function(e){var t=[];e.forEach((function(e){var a=e.data();t.push(Object(u.a)(Object(u.a)({},a),{},{id:e.id}))})),s.setState({results:t,loading:!1})})).catch((function(e){return console.error(e)}))),0==s.state.results.length&&O.collection("bookList").where(e,"array-contains-any",t).get().then((function(e){var t=[];e.forEach((function(e){var a=e.data();t.push(a)})),s.setState({results:t,loading:!1})})).catch((function(e){return console.error(e)}))},s.getMulakshara=function(e){var t=[];return e.forEach((function(e){g.forEach((function(t){e=e.replace(new RegExp(t,"g"),"")})),t.push(e)})),t.join(" ")},s.fetchResults=function(e){if(e.preventDefault(),s.state.input.length){s.setState({results:[],searched:!0});var t=s.state.input.split(" ");t.length>10&&t.splice(9,t.length-10),s.search(s.state.searchAgainst,t)}else s.setState({results:[],searched:!1})},s.state={searched:!1,input:"",searchAgainst:"pustakName",tableHeaders:["Dakhal-ID","Vibhag-ID","Book","Author"],results:[]},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"logo",children:["\u0938\u093e\u0930\u094d\u0935\u091c\u0928\u093f\u0915 \u0935\u093e\u091a\u0928\u093e\u0932\u092f ",Object(s.jsx)("br",{})," \u0930\u093e\u091c\u0917\u0941\u0930\u0942\u0928\u0917\u0930"]}),Object(s.jsx)(k,{onInput:function(t){return e.setState({input:t.target.value.toLowerCase().trim()})},searchAgainst:this.state.searchAgainst,onChange:function(t){return e.setState({searchAgainst:t.target.value})},onSearch:function(t){return e.fetchResults(t)}}),Object(s.jsx)(m,{setCurrentDetails:this.props.setCurrentDetails,tableHeaders:this.state.tableHeaders,tableElements:this.state.results,searched:this.state.searched})]})}}]),a}(c.Component),f=a(12),x=a.n(f),y=a(18);a(39),a(40);var N=function(e){return Object(s.jsxs)("div",{className:"google"===e.whichCard?"cardGoogle":"card",children:[Object(s.jsx)("div",{className:"heading",children:e.bookName}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"description",children:e.children})]})},w=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={gotGoogleData:!1,GresultScore:0,GarticleBody:"",Gname:"",Gdescription:"",gotFirebaseData:!1,jsonData:[],bookDetail:{}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.bookDetail;(void 0===e?{}:e).pustakName||this.getFirebaseData(),this.getGoogleData()}},{key:"getIdFromUrl",value:function(){var e=window.location.href.split("/");return e[e.length-1]}},{key:"getGoogleData",value:function(){var e=this,t=new XMLHttpRequest,a=this.props.bookDetail.pustakNameEnglish;t.addEventListener("load",(function(){var a=JSON.parse(t.responseText).itemListElement,s=void 0===a?[]:a,c=s.length&&s[0]||{},n=c.result,i=void 0===n?{}:n,r=c.resultScore,l=void 0===r?{}:r,o=i.detailedDescription,h=void 0===o?"":o,d=i.name,u=void 0===d?"":d,j=i.description,b=void 0===j?"":j,k=h.articleBody,m=void 0===k?"":k;e.setState({gotGoogleData:!0,GresultScore:l,GarticleBody:m,Gname:u,Gdescription:b})})),t.open("GET","https://kgsearch.googleapis.com/v1/entities:search?query="+a+"&key=AIzaSyAY9Boy7kdeOmi7JYAfI2zR8Ij3iF_zgxM&limit=1&indent=True"),t.send()}},{key:"getFirebaseData",value:function(){var e=Object(y.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("bookList").doc(this.getIdFromUrl()).get();case 2:t=e.sent,a=t.data(),this.setState({bookDetail:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"nameArrayToString",value:function(e){for(var t="",a=0;a<e.length;a++)0!==a&&(t+=" ");return t}},{key:"render",value:function(){var e=this.state.bookDetail,t=this.props.bookDetail,a=t.pustakName?t:e;return Object(s.jsx)("div",{className:"fullDetails",children:Object(s.jsxs)("div",{className:"flex-container",children:[a.pustakName&&Object(s.jsx)(N,{bookName:"Book Details",children:Object(s.jsx)("div",{className:"cardDetails",children:Object(s.jsxs)("div",{className:"book_details",children:[Object(s.jsxs)("div",{className:"rows",children:[Object(s.jsxs)("div",{className:"col1",children:[Object(s.jsx)("span",{className:"label",children:"Pustak Name"}),Object(s.jsx)("div",{className:"book_name",children:a.pustakName.join(" ")})]}),Object(s.jsxs)("div",{className:"col2",children:[Object(s.jsx)("span",{className:"label",children:"Lekhak"}),Object(s.jsx)("div",{className:"book_name",children:a.lekhak.join(" ")})]})]}),Object(s.jsxs)("div",{className:"rows",children:[Object(s.jsxs)("div",{className:"col1",children:[Object(s.jsx)("span",{className:"label",children:"Dakhal Id"}),Object(s.jsxs)("div",{className:"book_name",children:[a.dakhalId," "]})]}),Object(s.jsxs)("div",{className:"col2",children:[Object(s.jsx)("span",{className:"label",children:"Vibhag Id"}),Object(s.jsx)("div",{className:"book_name",children:a.vibhagId})]})]}),Object(s.jsx)("div",{className:"rows",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:"label",children:"Pustak Prakar"}),Object(s.jsx)("div",{className:"book_name",children:a.pustakPrakar})]})}),Object(s.jsx)("br",{})]})})}),this.state.GresultScore>140&&""!==this.state.GarticleBody&&Object(s.jsx)(N,{bookName:this.state.Gname,whichCard:"google",children:Object(s.jsxs)("div",{className:"googleDetails",children:[Object(s.jsxs)("div",{className:"eachgoogleDetails",children:["Result Score :"," ",Object(s.jsx)("div",{className:"googleResult",children:this.state.GresultScore})]}),""!==this.state.GarticleBody&&Object(s.jsxs)("div",{className:"eachgoogleDetails",children:["Article Body :"," ",Object(s.jsx)("div",{className:"googleResult",children:this.state.GarticleBody})]}),""!==this.state.Gdescription&&Object(s.jsxs)("div",{className:"eachgoogleDetails",children:["Description :"," ",Object(s.jsx)("div",{className:"googleResult",children:this.state.Gdescription})]}),Object(s.jsxs)("div",{className:"source",children:["source : Google"," "]})]})})]})})}}]),a}(c.Component),C=a(15),D=(a(41),[{key:"a"},{key:"b"},{key:"c"},{key:"d"},{key:"e"},{key:"f"},{key:"g"},{key:"h"},{key:"i"},{key:"j"},{key:"k"},{key:"l"},{key:"m"},{key:"o"},{key:"p"},{key:"q"},{key:"r"},{key:"s"},{key:"t"},{key:"u"},{key:"v"},{key:"w"},{key:"x"},{key:"y"},{key:"z"}]),S=[{key:"\u0915"},{key:"\u0916"},{key:"\u0917"},{key:"\u0918"},{key:"\u0919"},{key:"\u091a"},{key:"\u091b"},{key:"\u091c"},{key:"\u091d"},{key:"\u091e"},{key:"\u091f"},{key:"\u0920"},{key:"\u0921"},{key:"\u0922"},{key:"\u0923"},{key:"\u0924"},{key:"\u0925"},{key:"\u0926"},{key:"\u0927"},{key:"\u0928"},{key:"\u092a"},{key:"\u092b"},{key:"\u092c"},{key:"\u092d"},{key:"\u092e"},{key:"\u092f"},{key:"\u0930"},{key:"\u0932"},{key:"\u0935"},{key:"\u0936"},{key:"\u0937"},{key:"\u0938"},{key:"\u0939"}],B=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).getLekhakNames=function(e){return Object(y.a)(x.a.mark((function t(){var a,s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.setState({isBtnClicked:e}),e,t.next=4,O.collection("newMappingTrial").doc(e).get();case 4:a=t.sent,s=a.data().names,c.setState({lekhakDict:s}),console.log(s);case 8:case"end":return t.stop()}}),t)})))},c.getLekhakBooks=function(e){return Object(y.a)(x.a.mark((function t(){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e,c.setState({lekhakDict:{},searched:!1,tableHeaders:[],results:[],currentLekhak:a}),t.next=4,O.collection("bookList").where("lekhakNameJoint","==",a).get().then((function(e){e.forEach((function(e){var t=e.data();c.setState({results:c.state.results.concat([Object(u.a)(Object(u.a)({},t),{},{id:e.id})])})}))}));case 4:c.setState({tableHeaders:["Dakhal-ID","Vibhag-ID","Book","Author"],searched:!0});case 5:case"end":return t.stop()}}),t)})))},c.renderAuthors=function(){return Object.keys(c.state.lekhakDict).map((function(e,t){return Object(s.jsxs)("div",{className:"renderAuthors",children:[Object(s.jsx)("div",{className:"authorName",children:e}),Object(s.jsx)("div",{className:"bookNames",children:Object(s.jsxs)("p",{onClick:c.getLekhakBooks(e),children:["View ",Object(s.jsx)("span",{children:c.state.lekhakDict[e]})," Books"]})})]})}))},c.renderAlphabets=function(e){return e.map((function(e){return Object(s.jsx)("button",{value:e.key,className:c.state.isBtnClicked===e.key?"alphabetsClicked":"alphabetsUnclicked",onClick:c.getLekhakNames(e.key),children:e.key})}))},c.state={authorList:[],matching_authors:[],activeTab:"1",lekhakArray:[],lekhakDict:{},searched:!1,tableHeaders:[],results:[],currentLekhak:"",isBtnClicked:null},c.toggle=c.toggle.bind(Object(C.a)(c)),c}return Object(o.a)(a,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;this.state.character;return Object(s.jsxs)("div",{className:"lekhakList",children:[!this.state.searched&&Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"toggleBtn",children:[Object(s.jsx)("button",{className:"1"===this.state.activeTab?"clickedBtn":"unclickedBtn",onClick:function(){e.toggle("1")},children:"Marathi"}),Object(s.jsx)("button",{className:"2"===this.state.activeTab?"clickedBtn":"unclickedBtn",onClick:function(){e.toggle("2")},children:"English"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:1==this.state.activeTab?Object(s.jsx)("div",{className:"ButtonContainer",children:this.renderAlphabets(S)}):null}),Object(s.jsx)("div",{children:2==this.state.activeTab?Object(s.jsx)("div",{className:"ButtonContainer",children:this.renderAlphabets(D)}):null})]})]}),Object(s.jsx)("div",{className:"authorsList",children:this.renderAuthors()})]}),this.state.searched&&Object(s.jsxs)("div",{className:"lekhakBooklist",children:[Object(s.jsxs)("h1",{children:["\u0932\u0947\u0916\u0915 : ",this.state.currentLekhak]}),Object(s.jsx)(m,{setCurrentDetails:this.props.setCurrentDetails,tableHeaders:this.state.tableHeaders,tableElements:this.state.results,searched:this.state.searched})]})]})}}]),a}(c.Component),L=(a(42),a.p+"static/media/search.28b0ad10.svg"),I=(a.p,a.p+"static/media/author2.5ec21070.svg"),E=a.p+"static/media/about.ead10859.svg",A=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={isClicked:1},e.setButton=e.setButton.bind(Object(C.a)(e)),e}return Object(o.a)(a,[{key:"setButton",value:function(e){}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"mobileNav",children:[Object(s.jsx)("div",{className:1===this.state.isClicked?"mobileNav_clicked":"mobileNav_unclicked",children:Object(s.jsx)("a",{href:"#/search",onClick:function(){return e.setState({isClicked:1})},children:Object(s.jsx)("img",{src:L,className:"searchSvg",alt:"Search Books"})})}),Object(s.jsx)("div",{className:2===this.state.isClicked?"mobileNav_clicked":"mobileNav_unclicked",children:Object(s.jsx)("a",{href:"#/lekhaklist",onClick:function(){return e.setState({isClicked:2})},children:Object(s.jsx)("img",{src:I,className:"lekhakSvg",alt:"Lekhak List"})})}),Object(s.jsx)("div",{className:3===this.state.isClicked?"mobileNav_clicked":"mobileNav_unclicked",children:Object(s.jsx)("a",{href:"#",onClick:function(){return e.setState({isClicked:3})},children:Object(s.jsx)("img",{src:E,className:"lekhakSvg",alt:"About US"})})})]})}}]),a}(c.Component),G=a(24);a(43);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var a,s,c=function(e,t){if(null==e)return{};var a,s,c={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var M=c.createElement("g",null,c.createElement("g",null,c.createElement("path",{d:"M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"})));function F(e,t){var a=e.title,s=e.titleId,n=_(e,["title","titleId"]);return c.createElement("svg",T({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 492 492",style:{enableBackground:"new 0 0 492 492"},xmlSpace:"preserve",ref:t,"aria-labelledby":s},n),a?c.createElement("title",{id:s},a):null,M)}var H=c.forwardRef(F);a.p;var P=function(){var e=function(){var e=window.location.href;return e.includes("lekhaklist")?"lekhak-list":e.includes("aboutus")?"about-us":e.includes("details")?"details":e.includes("search")?"search":e.includes("recommendation")?"recommendation":"search"},t=function(){var e=document.getElementsByClassName("tabs")[0].children;e&&Object(G.a)(e).forEach((function(e){e?e.children[0].classList.remove("active"):console.log()}))},a=function(e){t(),document.getElementById(e).classList.add("active")};return Object(c.useEffect)((function(){null!=document.getElementById(e())&&document.getElementById(e()).classList.add("active"),window.addEventListener("hashchange",(function(){null!=document.getElementById(e())&&(t(),document.getElementById(e()).classList.add("active"))}),!1)})),Object(s.jsxs)("nav",{className:"nav-bar",children:[window.location.href.includes("details")?Object(s.jsx)("a",{onClick:function(){return window.history.go(-1)},className:"back-link",children:Object(s.jsx)("div",{className:"back-button",children:Object(s.jsx)(H,{})})}):null,Object(s.jsxs)("div",{className:"tabs",children:[Object(s.jsx)("a",{href:"/savakhed/#/search",onClick:function(){a("search")},children:Object(s.jsx)("div",{className:"link-placeholders",id:"search",children:"Search"})}),Object(s.jsx)("a",{href:"/savakhed/#/lekhaklist",onClick:function(){a("lekhak-list")},children:Object(s.jsx)("div",{className:"link-placeholders",id:"lekhak-list",children:"Lekhak List"})}),Object(s.jsx)("a",{href:"/savakhed/#/recommendation",onClick:function(){a("recommendation")},children:Object(s.jsx)("div",{className:"link-placeholders",id:"recommendation",children:"Recommendations"})}),Object(s.jsx)("a",{href:"/savakhed/#/aboutus",onClick:function(){a("about-us")},children:Object(s.jsx)("div",{className:"link-placeholders",id:"about-us",children:"About Us"})}),Object(s.jsx)("a",{href:"/#/search",onClick:function(){a("about-us")},id:"title-id",children:Object(s.jsx)("div",{className:"title",children:e().replace("-"," ")})})]})]})};a(44);var R=function(){return Object(s.jsx)("div",{className:"aboutUs-container",children:Object(s.jsxs)("div",{className:"aboutUs-content",children:[Object(s.jsxs)("div",{className:"aboutUs-page-authors",children:[Object(s.jsx)("img",{src:"https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",alt:"Avatar"}),Object(s.jsx)("img",{src:"https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",alt:"Avatar"}),Object(s.jsx)("img",{src:"https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",alt:"Avatar"}),Object(s.jsx)("img",{src:"https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",alt:"Avatar"})]}),Object(s.jsx)("div",{className:"aboutUs-wordArt",children:Object(s.jsx)("img",{src:"https://bjgp.org/content/bjgp/67/658/231/F1.large.jpg",alt:"Word Cloud"})})]})})};var U=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],n=(t[1],Object(c.useState)(!1)),i=Object(j.a)(n,2),r=i[0],l=i[1];return Object(c.useEffect)((function(){!function(){var e=(new Date).getUTCDate();O.collection("bookList").orderBy("dakhalId","asc").get().then((function(t){for(var s=t.size/365,c=Math.floor((e-1)*s),n=Math.ceil(e*s),i=c;i<=n;i++){var r=t.docs[i].data();a.push(r)}console.log(a),l(!0)}))}()}),[]),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(m,{tableHeaders:["Dakhal-ID","Vibhag-ID","Book","Author"],tableElements:a,searched:r,setCurrentDetails:function(e){return console.log(e)}})})},z=/\/?details\/[a-z0-9A-Z]{20}/,V=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).setPath=function(){var t=window.location.href.split("#");if(t.length>1){var a=t[1].toLowerCase();if(a.includes("details"))z.test(a)&&e.setState({show:"details"});else a.includes("lekhaklist")?e.setState({show:"lekhaklist"}):t[1].includes("aboutus")?e.setState({show:"aboutus"}):t[1].includes("recommendation")?e.setState({show:"recommendation"}):e.setState({show:"listing"})}},e.state={show:"listing",currentDetails:{}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("hashchange",(function(){e.setPath()}),!1),this.setPath()}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(P,{url:this.state.show}),"details"===this.state.show&&Object(s.jsx)(w,{bookDetail:this.state.currentDetails}),"lekhaklist"===this.state.show&&Object(s.jsx)(B,{setCurrentDetails:function(t){return e.setState({currentDetails:t})}}),"listing"===this.state.show&&Object(s.jsx)(p,{setCurrentDetails:function(t){return e.setState({currentDetails:t})}}),"aboutus"===this.state.show&&Object(s.jsx)(R,{}),"recommendation"===this.state.show&&Object(s.jsx)(U,{}),Object(s.jsx)(A,{})]})}}]),a}(c.Component),J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(V,{})}),document.getElementById("root")),J()}},[[45,1,2]]]);
//# sourceMappingURL=main.4c19f123.chunk.js.map