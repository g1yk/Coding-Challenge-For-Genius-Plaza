(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{34:function(e,t,a){e.exports=a(66)},40:function(e,t,a){},42:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},43:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a.n(l),s=(a(39),a(40),a(33)),o=a(9),i=a.n(o),u=a(10),m=a(11),d=a(15),p=a(12),h=a(16),E=(a(42),a(43),a(13)),v=a.n(E),f=a(14),g=a(6),b=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={details:{},url:""},a.getDetails=function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://swapi.co/api",t.next=3,i.a.awrap(v.a.get("".concat("https://swapi.co/api").concat(a.props.match.url)));case 3:e=t.sent,a.setState({details:e.data,url:a.props.match.url}),console.log(a.state.details);case 6:case"end":return t.stop()}}))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getDetails()}},{key:"render",value:function(){this.state.url!==this.props.match.url&&this.getDetails();var e=this.state.details,t=e.height,a=e.name,n=e.mass,l=e.birth_year;return r.a.createElement("div",null,r.a.createElement("div",{className:"col-7"},r.a.createElement("h1",null),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Name")," "),r.a.createElement("td",null,a)),r.a.createElement("tr",null,r.a.createElement("td",null,"Height "),r.a.createElement("td",null," ",t," ")),r.a.createElement("tr",null,r.a.createElement("td",null,"Mass "),r.a.createElement("td",null,n)),r.a.createElement("tr",null,r.a.createElement("td",null,"Birth year "),r.a.createElement("td",null,l))))))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!0,results:void 0,details:void 0},a.getNames=function(e){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("calling get Names function"),v.a.get("https://swapi.co/api/people/").then((function(e){var t=e.data;console.log("data",t),a.setState({results:t.results})})).catch((function(e){console.error("create student error",e.response)}));case 2:case"end":return e.stop()}}))},a.showNames=function(e){if(a.state.results)return console.log(a.state.results),Object(s.a)(a.state.results).map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(f.b,{className:"list-group-item list-group-item-action",to:"/people/".concat(t+1)}," ",e.name))}))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getNames()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-primary mb-3"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"StarWars People"))),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5"},r.a.createElement("div",{className:"list-group"})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5"},this.showNames())),r.a.createElement(g.a,{exact:!0,path:"/people/:id",render:function(e){return r.a.createElement(b,e)}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f.a,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.5cb69ae9.chunk.js.map