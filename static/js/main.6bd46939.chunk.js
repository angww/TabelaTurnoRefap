(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(35)},26:function(e,t,n){},30:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),l=n(39),i=n(37),s=n(40),u=n(38),F=(n(26),n(5)),m=n(6),h=n(8),d=n(7),p=n(9),f=n(10),g=(n(17),864e5);var v=[];v.Teste4=" A B C D\n  8 8 8 F\n  8 8 F 8\n  8 F 8 8\n  F 8 8 8\n  8 8 8 8",v.Refap=" G1 G2 G3 G4 G5\n  23 7 F 15 F\n  23 7 F 15 F\n  23 F 7 15 F\n  23 15 7 F F\n  F 15 7 F 23\n  F 15 7 F 23\n  7 15 F F 23\n  7 F 15 23 F\n  7 F 15 23 F\n  F F 15 23 7\n  15 F F 23 7\n  15 23 F F 7\n  15 23 F F 7\n  15 23 F 7 F\n  F F 23 7 15\n  F F 23 7 15\n  F 7 23 F 15\n  F 7 23 15 F\n  23 7 F 15 F\n  23 7 F 15 F\n  23 F 7 15 F\n  F 15 7 F 23\n  F 15 7 F 23\n  7 15 F F 23\n  7 F 15 F 23\n  7 F 15 23 F\n  7 F 15 23 F\n  F F 15 23 7\n  15 23 F F 7\n  15 23 F F 7\n  15 23 F 7 F\n  F 23 F 7 15\n  F F 23 7 15\n  F F 23 7 15\n  F 7 23 F 15",v.Refap0=" G1 G2 G3 G4 G5\n    F 8 0 16 F\n    0 8 F 16 F\n    0 F 8 16 F\n    0 16 8 F F\n    0 16 8 F F\n    F 16 8 F 0\n    8 16 F F 0\n    8 F 16 F 0\n    8 F 16 0 F\n    F F 16 0 8\n    16 F F 0 8\n    16 F F 0 8\n    16 0 F F 8\n    16 0 F 8 F\n    F 0 F 8 16\n    F F 0 8 16\n    F 8 0 F 16\n    F 8 0 16 F\n    F 8 0 16 F\n    0 8 F 16 F\n    0 F 8 16 F\n    0 16 8 F F\n    F 16 8 F 0\n    8 16 F F 0\n    8 F 16 F 0\n    8 F 16 F 0\n    8 F 16 0 F\n    F F 16 0 8\n    16 F F 0 8\n    16 0 F F 8\n    16 0 F 8 F\n    F 0 F 8 16\n    F 0 F 8 16\n    F F 0 8 16\n    F 8 0 F 16",v.Reduc="I II III IV V\n    15 7 F F 23\n    15 F 7 F 23\n    15 23 7 F F\n    F 23 7 15 F\n    7 F 23 15 F\n    7 F 23 15 F\n    7 F 23 15 F\n    7 F F 23 15\n    F 7 F 23 15\n    23 7 F F 15\n    23 7 15 F F\n    F 23 15 F 7\n    F 23 15 F 7\n    F 23 15 F 7\n    F F 23 15 7\n    7 F 23 15 F\n    7 F F 15 23\n    7 15 F F 23\n    23 15 F 7 F\n    23 15 F 7 F\n    23 15 F 7 F\n    F 23 15 7 F\n    F 23 15 F 7\n    F F 15 23 7\n    15 F F 23 7\n    15 F 7 F 23\n    15 F 7 F 23\n    15 F 7 F 23\n    23 15 7 F F\n    23 15 F 7 F\n    F 15 23 7 F\n    F F 23 7 15\n    F 7 F 23 15\n    F 7 F 23 15\n    F 7 F 23 15";var y={tableName:"Refap",tableLink:"refap23",firstDay:"2018-08-01",firstDayJS:"",groups:"",daysLines:"",populateTableDate:function(e){e||(e="Refap23"),this.tableData=v[e];var t=this.tableData.replace(/^\s+/g,"").split("\n").map(function(e,t){return e.replace(/^\s+/g,"").split(" ")});this.groups=t[0],t.splice(0,1),this.daysLines=t;var n=this.firstDay.split("-");return this.firstDayJS=new Date(n[0],n[1]-1,n[2]),console.log(this.firstDayJS)},getDayScales:function(e){var t={day:"",groups:"",schedule:""},n=this.daysLines.length,a=function(e,t){var n=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),a=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate());return Math.floor((a-n)/g)}(this.firstDayJS,e)/n,r=(a-Math.floor(a)).toFixed(6)*n,c=Math.round(r);return t.day=e,t.groups=this.groups,t.schedule=this.daysLines[c],t},getMonthScales:function(e){for(var t=[],n=e.getMonth(),a=e.getFullYear(),r=new Date(a,n+1,0).getDate(),c=1;c<=r;c++){var o=new Date(a,n,c,8,0,0),l=this.getDayScales(o);t.push(l)}return t}},w=n(11),b=n.n(w),E=!1;E||b.a.initialize("UA-92630735-3");var k=function(e,t,n){return!E&&b.a.event({category:e,action:t,label:n})};Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t};var C=["Dom","Seg","Ter","Qua","Qui","Sex","S\xe1b"],M=function(e){return["F",0,6].includes(e)?"tdF":""},D=function(e){return function(e,t){return e.getDate()==t.getDate()&&e.getMonth()==t.getMonth()&&e.getFullYear()==t.getFullYear()}(e,new Date)?"tdToday":""},O=function(e){return console.log("Click:"+e),k("Click",e,"label1"),!0},T=function(e){return e.map(function(e,t){return r.a.createElement("tr",{key:t,className:[(n=e.day,{0:"trSunday",1:"trMonday",2:"trTuesday",3:"trWednesday",4:"trThursday",5:"trFriday",6:"trSaturday"}[n.getDay()]),"trTable"].join(" ")},r.a.createElement("td",{key:t,className:["tdDate",D(e.day)].join(" ")}," ",e.day.toLocaleDateString("pt",{day:"2-digit",month:"short"}).replace(" de ","/")),function(e){var t=e.getDay(),n=C[t].toUpperCase();return r.a.createElement("td",{className:[M(t),"tdWeekCol"].join(" ")},n)}(e.day),function(e){return e.schedule.map(function(e,t){return r.a.createElement("td",{key:t,className:M(e)},e)})}(e));var n})},j=function(e){return r.a.createElement("tr",{className:"trHead"},(t=e[0].day,r.a.createElement("th",{className:"tdDate",onClick:function(){return O("Ano"+t.getFullYear())}},t.getFullYear())),r.a.createElement("th",null,"\xa0"),e[0].groups.map(function(e,t){return r.a.createElement("th",{key:t,onClick:function(){return O("Grupo "+e)}},e)}));var t},x=function(e){return[j(e),T(e)]};function S(){var e=window.pageYOffset,t=window.innerHeight,n=document.body.offsetHeight;return Math.max(n-(e+t),0)}document.addEventListener("scroll",function(){S()});var N=function(e){function t(e){var n;Object(F.a)(this,t);var a=(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).props,r=(a.month,a.tableName);y.populateTableDate(r);var c=new Date,o=y.getMonthScales(c),l=new Date(c.getFullYear(),c.getMonth()-1,1),i=y.getMonthScales(l);return n.state={tableInput:r,dayOne:c,actualDay:c,monthsTRs:[x(i),x(o)]},n.tick.bind(Object(f.a)(Object(f.a)(n)))(),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"tick",value:function(){var e=this.state.actualDay,t=new Date(e.getFullYear(),e.getMonth()+1,1),n=y.getMonthScales(t),a=this.state.monthsTRs;a.push(x(n)),this.setState({actualDay:t,monthsTRs:a});var r=e.getFullYear()+"-"+(e.getMonth()+1);console.log(r),k("Navigation",r,"label1")}},{key:"componentDidMount",value:function(){var e=this.tick.bind(this);document.addEventListener("scroll",function(){var t=S();t>0&&t<=1400&&(console.log("dentro do reac"),e())});setTimeout(function(){window.scrollTo(0,document.getElementsByClassName("tdToday")[0].offsetTop-135)},50)}},{key:"render",value:function(){return r.a.createElement("table",{className:"tbMain"},(e=this.state.monthsTRs,r.a.createElement("tbody",null,e)));var e}}]),t}(r.a.Component),B=n(36),R=function(e){function t(e){var n;Object(F.a)(this,t),n=Object(h.a)(this,Object(d.a)(t).call(this,e));var a=window.localStorage.getItem("AppTheme");return a=null==a?"":a,n.state={AppTheme:a},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleClickTheme",value:function(){""==this.state.AppTheme?this.setState({AppTheme:"themeBlack"},function(){document.body.classList.add("themeBlack"),window.localStorage.setItem("AppTheme","themeBlack")}):this.setState({AppTheme:""},function(){document.body.classList.remove("themeBlack"),window.localStorage.setItem("AppTheme","")})}},{key:"render",value:function(){var e=""==this.state.AppTheme?"escuro":"claro";return r.a.createElement("div",{className:this.props.className,onClick:this.handleClickTheme.bind(this)},"Tema ",e)}}]),t}(r.a.Component);n(30);var V=function(e){function t(){var e;Object(F.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).handleSelectTable=function(t){e.props.history.push(t.target.value)};var n=null==window.localStorage.getItem("numVisitCounter")?0:window.localStorage.getItem("numVisitCounter");return e.state={showMenu:!1,numVisitCounter:n},e.showMenu=e.showMenu.bind(Object(f.a)(Object(f.a)(e))),e.closeMenu=e.closeMenu.bind(Object(f.a)(Object(f.a)(e))),e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"showMenu",value:function(e){var t=this;e.preventDefault(),this.setState({numVisitCounter:1*this.state.numVisitCounter+1}),window.localStorage.setItem("numVisitCounter",this.state.numVisitCounter),this.setState({showMenu:!0},function(){document.addEventListener("click",t.closeMenu)})}},{key:"closeMenu",value:function(e){var t=this;if("undefined"!==typeof this.dropdownMenu){if(null==this.dropdownMenu)return!0;var n=e.target;this.dropdownMenu.contains(n)||this.setState({showMenu:!1},function(){document.removeEventListener("click",t.closeMenu)})}}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{float:"right",userSelect:"none"},onClick:this.showMenu},r.a.createElement("svg",{id:"Layer",style:{stroke:"var(--color-font-main)",fill:"var(--color-font-main)"},"enable-background":"new 0 0 64 64",transform:"translate(4,-5)",height:"28",viewBox:"0 0 64 64",width:"28",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m32 8c-13.233 0-24 10.767-24 24s10.767 24 24 24 24-10.767 24-24-10.767-24-24-24zm0 44c-11.028 0-20-8.972-20-20s8.972-20 20-20 20 8.972 20 20-8.972 20-20 20z"}),r.a.createElement("path",{d:"m32 29c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"}),r.a.createElement("path",{d:"m23 29c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"}),r.a.createElement("path",{d:"m41 29c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"}))),this.state.showMenu?r.a.createElement("div",{className:"cardMenu",ref:function(t){e.dropdownMenu=t}},r.a.createElement(R,{className:"linkCard"}),r.a.createElement(B.a,{className:"linkCard",to:"/Refap"},"Refap 23-7-15"),r.a.createElement(B.a,{className:"linkCard",to:"/Refap0"},"Refap 0-8-16"),"",r.a.createElement("span",null,"xxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}),"-",this.state.numVisitCounter),r.a.createElement("div",null,"Icons made by ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/bqlqn",title:"bqlqn"},"bqlqn")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",r.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"},"CC 3.0 BY")),r.a.createElement("div",null,"Icons made by ",r.a.createElement("a",{href:"https://www.freepik.com/",title:"Freepik"},"Freepik")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",r.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"},"CC 3.0 BY"))):null)}}]),t}(a.Component),I=Object(s.a)(V),L=(n(33),function(e){function t(e){var n;Object(F.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={tableName:n.props.tableName};var a=document.createElement("style");a.type="text/css";var r=window.pageYOffset,c=!1;return window.onscroll=function(){var e=window.pageYOffset;r>e?!0===c&&(document.getElementsByClassName("topBar")[0].style.top="0",a.innerHTML=".trHead th { top: 49px; }",document.getElementsByTagName("head")[0].appendChild(a),c=!1):!1===c&&(document.getElementsByClassName("topBar")[0].style.top="-50px",a.innerHTML=".trHead th { top: -1px; }",document.getElementsByTagName("head")[0].appendChild(a),c=!0),r=e},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.tableName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"topBar",style:{verticalAlign:"center"}},r.a.createElement("svg",{id:"Layer2",style:{float:"left",stroke:"var(--color-font-main)",fill:"var(--color-font-main)"},"enable-background":"new 0 0 64 64",transform:"translate(-4,-4)",height:"28",viewBox:"0 0 612 612",width:"28",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("circle",{cx:"386",cy:"210",r:"20"}),r.a.createElement("path",{d:"M432,40h-26V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v20h-91V20c0-11.046-8.954-20-20-20 c-11.046,0-20,8.954-20,20v20h-90V20c0-11.046-8.954-20-20-20s-20,8.954-20,20v20H80C35.888,40,0,75.888,0,120v312 c0,44.112,35.888,80,80,80h153c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20H80c-22.056,0-40-17.944-40-40V120 c0-22.056,17.944-40,40-40h25v20c0,11.046,8.954,20,20,20s20-8.954,20-20V80h90v20c0,11.046,8.954,20,20,20s20-8.954,20-20V80h91 v20c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V80h26c22.056,0,40,17.944,40,40v114c0,11.046,8.954,20,20,20 c11.046,0,20-8.954,20-20V120C512,75.888,476.112,40,432,40z"}),r.a.createElement("path",{d:"M391,270c-66.72,0-121,54.28-121,121s54.28,121,121,121s121-54.28,121-121S457.72,270,391,270z M391,472 c-44.663,0-81-36.336-81-81s36.337-81,81-81c44.663,0,81,36.336,81,81S435.663,472,391,472z"}),r.a.createElement("path",{d:"M420,371h-9v-21c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v41c0,11.046,8.954,20,20,20h29 c11.046,0,20-8.954,20-20C440,379.954,431.046,371,420,371z"}),r.a.createElement("circle",{cx:"299",cy:"210",r:"20"}),r.a.createElement("circle",{cx:"212",cy:"297",r:"20"}),r.a.createElement("circle",{cx:"125",cy:"210",r:"20"}),r.a.createElement("circle",{cx:"125",cy:"297",r:"20"}),r.a.createElement("circle",{cx:"125",cy:"384",r:"20"}),r.a.createElement("circle",{cx:"212",cy:"384",r:"20"}),r.a.createElement("circle",{cx:"212",cy:"210",r:"20"}))))),r.a.createElement("span",{style:{marginLeft:"20px"}},"tabelaturno.github.io/",e),r.a.createElement(I,{style:{float:"right"}})),r.a.createElement("div",{style:{textAlign:"center",marginBottom:"25px"}},"\ud83d\ude0e"),r.a.createElement(N,{month:"7",tableName:e}))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y,A=Object(s.a)((Y=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{path:"/about",render:function(){return r.a.createElement("div",null,"ABOUT")}}),r.a.createElement(i.a,{exact:!0,path:"/",component:function(){return r.a.createElement(L,{tableName:"Refap0"})}}),r.a.createElement(i.a,{exact:!0,path:"/Reduc",component:function(){return r.a.createElement(L,{tableName:"Reduc"})}}),r.a.createElement(i.a,{exact:!0,path:"/Refap0",component:function(){return r.a.createElement(L,{tableName:"Refap0"})}}),r.a.createElement(i.a,{exact:!0,path:"/Refap",component:function(){return r.a.createElement(L,{tableName:"Refap"})}}),r.a.createElement(i.a,{exact:!0,path:"/Teste4",component:function(){return r.a.createElement(L,{tableName:"Teste4"})}}))},function(e){function t(){var e,n;Object(F.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).trackPage=function(e){E||(b.a.set({page:e}),b.a.pageview(e))},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname;this.trackPage(e)}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.location.pathname,n=e.location.pathname;t!==n&&this.trackPage(n)}},{key:"render",value:function(){return r.a.createElement(Y,this.props)}}]),t}(r.a.Component)));o.a.render(r.a.createElement(function(){return r.a.createElement(u.a,{basename:"/TabelaTurnoRefap"},r.a.createElement(A,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.6bd46939.chunk.js.map