(this["webpackJsonptic-tac-toe-react"]=this["webpackJsonptic-tac-toe-react"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(12),s=n.n(r),i=(n(20),n(21),n(14)),l=n(3),c=n(4),o=n(5),d=n(9),u=n(8),h=n(0);function b(e){return Object(h.jsx)("button",{className:"cell "+e.value,onClick:e.onClick})}var j=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"renderCell",value:function(e){var t=this;return Object(h.jsx)(b,{value:this.props.cells[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[this.renderCell(0),this.renderCell(1),this.renderCell(2)]}),Object(h.jsxs)("div",{children:[this.renderCell(3),this.renderCell(4),this.renderCell(5)]}),Object(h.jsxs)("div",{children:[this.renderCell(6),this.renderCell(7),this.renderCell(8)]})]})}}]),n}(a.Component),m=n(24),v=n(25);function k(e){return Object(h.jsx)(m.a,{className:"share-btn",url:"https://www.cansulta.com/",quote:"I won a tic-tac-toe game playing as "+e.winner+"!",children:Object(h.jsx)(v.a,{round:!0,size:36})})}var f=n(26),O=n(27);function w(e){return Object(h.jsx)(f.a,{className:"share-btn",url:"https://www.cansulta.com/",title:"I won a tic-tac-toe game playing as "+e.winner+"!",children:Object(h.jsx)(O.a,{round:!0,size:36})})}function C(e){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"social-prompt",children:["Share your win, ",e.winner,"!"]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(k,{winner:e.winner}),Object(h.jsx)(w,{winner:e.winner})]})]})}var y=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={blueTurn:!0,cells:Array(9).fill(null),winner:null,isGameOver:!1,randomMode:!1},a.keyboardListener=a.keyboardListener.bind(Object(o.a)(a)),a}return Object(c.a)(n,[{key:"keyboardListener",value:function(e){switch(e.key){case"q":this.handleClick(0);break;case"w":this.handleClick(1);break;case"e":this.handleClick(2);break;case"a":this.handleClick(3);break;case"s":this.handleClick(4);break;case"d":this.handleClick(5);break;case"z":this.handleClick(6);break;case"x":this.handleClick(7);break;case"c":this.handleClick(8);break;case"r":this.restart();break;case"t":this.toggleRandom()}}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keyboardListener,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyboardListener,!1)}},{key:"restart",value:function(){this.setState({blueTurn:!0,cells:Array(9).fill(null),winner:null,isGameOver:!1})}},{key:"toggleRandom",value:function(){this.setState({randomMode:!this.state.randomMode})}},{key:"generateRandomEmptyIndex",value:function(e){var t;do{t=Math.floor(9*Math.random())}while(e[t]);return t}},{key:"handleClick",value:function(e){var t=this.state.cells.slice();if(this.state.isGameOver)alert("Game has ended. Click on Start over to play again!");else if(this.state.randomMode&&(e=this.generateRandomEmptyIndex(t)),t[e])alert("Cell is already filled. Please select an empty cell.");else{t[e]=this.state.blueTurn?"Blue":"Yellow";var n=function(e){var t=!0;return e.forEach((function(e){null==e&&(t=!1)})),t}(t),a=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(i.a)(t[n],3),r=a[0],s=a[1],l=a[2];if(e[r]&&e[r]===e[s]&&e[s]===e[l])return e[r]}return null}(t);a&&(n=!0),this.setState({cells:t,blueTurn:!this.state.blueTurn,winner:a,isGameOver:n})}}},{key:"render",value:function(){var e,t=this,n=this.state.winner,a=this.state.isGameOver,r=this.state.randomMode;return e=a?n?n+" won!":"Tie":(this.state.blueTurn?"Blue":"Yellow")+"'s Turn",r&&(e+=" (Random)"),Object(h.jsxs)("div",{className:"game",children:[Object(h.jsx)("div",{className:"game-board",children:Object(h.jsx)(j,{onClick:function(e){return t.handleClick(e)},cells:this.state.cells})}),Object(h.jsxs)("div",{className:"sidebar",children:[Object(h.jsx)("div",{className:"status",children:e}),Object(h.jsx)("button",{className:"sidebar-btn",onClick:function(){t.restart()},children:"Start over"}),Object(h.jsx)("button",{className:"sidebar-btn",onClick:function(){t.toggleRandom()},children:r?"Turn random mode off":"Turn random mode on"}),Object(h.jsx)("div",{className:"social",children:n&&Object(h.jsx)(C,{winner:n})})]})]})}}]),n}(a.Component);var x=function(){return Object(h.jsx)(y,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(h.jsx)(x,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.5a272e14.chunk.js.map