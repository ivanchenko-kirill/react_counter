(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var c=e(3),o=e.n(c),a=e(4),r=e(5),u=e(7),s=e(6),d=e(1),i=e.n(d),b=(e(12),e(13),e(0)),j=function(t){var n=t.count,e=t.addOne,c=t.add100,o=t.increase;return Object(b.jsxs)("div",{className:"counter",children:[Object(b.jsx)("h1",{children:"Count: ".concat(n)}),Object(b.jsx)("button",{className:"counter__button",type:"button",onClick:e,children:"Add 1"}),Object(b.jsx)("button",{className:"counter__button",type:"button",onClick:c,children:"Add 100"}),Object(b.jsx)("button",{className:"counter__button",type:"button",onClick:o,children:"Increase"})]})},l=function(t){Object(u.a)(e,t);var n=Object(s.a)(e);function e(){var t;Object(a.a)(this,e);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(t=n.call.apply(n,[this].concat(o))).state={count:0},t.addOne=function(){return t.setState((function(t){return{count:t.count+1}}))},t.add100=function(){return t.setState((function(t){return{count:t.count+100}}))},t.increase=function(){t.state.count%5===0&&t.add100(),t.addOne()},t}return Object(r.a)(e,[{key:"render",value:function(){return Object(b.jsx)(j,{count:this.state.count,addOne:this.addOne,add100:this.add100,increase:this.increase})}}]),e}(i.a.Component);o.a.render(Object(b.jsx)(l,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.594a8299.chunk.js.map