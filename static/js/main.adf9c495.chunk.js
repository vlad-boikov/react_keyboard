(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(3),s=n.n(c),a=n(4),r=n(5),o=n(7),i=n(6),u=n(1),d=n(0),p=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={pressedKey:!1},e.clickHandler=function(t){e.setState({pressedKey:t.key})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.clickHandler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.clickHandler)}},{key:"render",value:function(){var e=this.state.pressedKey,t=e?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet";return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("p",{className:"App__message",children:t})})}}]),n}(u.Component);n(13);s.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.adf9c495.chunk.js.map