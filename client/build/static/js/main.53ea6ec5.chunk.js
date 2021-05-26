(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/svg3.e72523d1.svg"},182:function(e,t,a){e.exports=a.p+"static/media/periodic-table.2a4635af.svg"},192:function(e,t,a){e.exports=a.p+"static/media/logo.d1ce8d9c.svg"},193:function(e,t,a){e.exports=a.p+"static/media/logoMD.ae4a0349.png"},262:function(e,t,a){e.exports=a(294)},276:function(e,t,a){e.exports=a.p+"static/media/flags-world.aff4ceb1.png"},294:function(e,t,a){"use strict";a.r(t);var n,r,l,c,o,i=a(21),s=a(1),d=a.n(s),u=a(61),m=a.n(u),g=a(5),h=a(28),f=a(205),b=a(46),p=a(23),E=a(186),v=a(313),k=a(305),x=a(145),w=function(e){var t=Object(i.useColorMode)().toggleColorMode,a=Object(i.useColorModeValue)("dark","light"),n=Object(i.useColorModeValue)(x.a,x.b);return d.a.createElement(k.a,Object.assign({size:"md",fontSize:"lg","aria-label":"Switch to ".concat(a," mode"),variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:d.a.createElement(n,null)},e))},S=a(36),O=(a(326),a(307)),j=(a(192),Object(i.keyframes)(n||(n=Object(S.a)(["\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n"]))),a(311)),y=a(312),C=a(314),I=a(315),M=a(207),_=a(316),A=a(322),q=a(323),T=a(193),$=a.n(T),F=a(87),P=a.n(F),R=a(124),z=a(9),D=a(88),W=a(101),B=a(309),G=a(310),L=a(43),N=Object(L.gql)(r||(r=Object(S.a)(["\n  mutation loginUser($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n        email\n      }\n    }\n  }\n"]))),U=Object(L.gql)(l||(l=Object(S.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token \n      user {\n        _id\n        username\n        email\n      }\n    }\n  }\n"]))),Q=Object(L.gql)(c||(c=Object(S.a)(["\n  mutation updateGame($deck: String!, $score: Int!, $matrix: [[Int]]!) {\n    updateGame(deck: $deck, score: $score, matrix: $matrix) {\n      userId\n      deck\n      score\n      matrix\n    }\n  }\n"]))),Y=Object(L.gql)(o||(o=Object(S.a)(["\n  mutation addGame($deck: String!) {\n    addGame(deck: $deck) {\n      _id\n      score\n      deck\n      userId\n      deck\n      matrix\n    }\n  }\n"]))),V=a(45),H=a(67),J=a(147),K=new(function(){function e(){Object(V.a)(this,e)}return Object(H.a)(e,[{key:"getProfile",value:function(){return Object(J.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Object(J.a)(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),X=function(){var e=Object(s.useState)({username:"",email:"",password:""}),t=Object(g.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)("false"),l=Object(g.a)(r,1)[0],c=Object(h.useMutation)(U),o=Object(g.a)(c,2),i=o[0],u=o[1].error,m=function(e){var t=e.target,r=t.name,l=t.value;n(Object(D.a)({},a,Object(z.a)({},r,l)))},f=Object(h.useMutation)(Y),b=Object(g.a)(f,1)[0],p=function(){var e=Object(R.a)(P.a.mark(function e(t){var n,r,l;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=["Periodic Table","Famous Fiction","US States and Capitols"],e.prev=2,e.next=5,i({variables:Object(D.a)({},a)});case 5:r=e.sent,l=r.data,K.login(l.addUser.token),console.log("User has signed up and logged in"),n.forEach(function(e){try{b({variables:{deck:e}})}catch(t){console.error(t)}}),console.log("Games Added"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.error(e.t0);case 16:case"end":return e.stop()}},e,null,[[2,13]])}));return function(t){return e.apply(this,arguments)}}();return d.a.createElement(d.a.Fragment,null,d.a.createElement("form",{noValidate:!0,validated:l,onSubmit:p},d.a.createElement(W.a,{isRequired:!0,mt:2},d.a.createElement(B.a,{name:"username"},"Username"),d.a.createElement(G.a,{name:"username",type:"text",placeholder:"Your username",value:a.username,onChange:m})),d.a.createElement(W.a,{isRequired:!0,mt:2},d.a.createElement(B.a,{htmlFor:"email"},"Email"),d.a.createElement(G.a,{name:"email",type:"email",placeholder:"Your email address",value:a.email,onChange:m})),d.a.createElement(W.a,{isRequired:!0,mt:2},d.a.createElement(B.a,{htmlFor:"password"},"Password"),d.a.createElement(G.a,{name:"password",type:"password",placeholder:"Your Password",value:a.password,onChange:m})),d.a.createElement(M.a,{type:"submit",mt:2},"Submit")),u&&d.a.createElement("div",null,u.message.toString().includes("duplicate")?"User with email id exist!":u.message.substring(14,u.message.length)))},Z=function(){var e=Object(s.useState)({email:"",password:""}),t=Object(g.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)("false"),l=Object(g.a)(r,1)[0],c=Object(h.useMutation)(N),o=Object(g.a)(c,2),i=o[0],u=o[1].error,m=function(e){var t=e.target,r=t.name,l=t.value;n(Object(D.a)({},a,Object(z.a)({},r,l)))},f=function(){var e=Object(R.a)(P.a.mark(function e(t){var n,r;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,i({variables:Object(D.a)({},a)});case 4:n=e.sent,r=n.data,K.login(r.login.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}();return d.a.createElement(d.a.Fragment,null,d.a.createElement("form",{noValidate:!0,validated:l,onSubmit:f},d.a.createElement(W.a,{isRequired:!0,mt:2},d.a.createElement(B.a,{htmlFor:"email"},"Email"),d.a.createElement(G.a,{name:"email",type:"email",placeholder:"Your email address",value:a.email,onChange:m})),d.a.createElement(W.a,{isRequired:!0,mt:2},d.a.createElement(B.a,{htmlFor:"password"},"Password"),d.a.createElement(G.a,{name:"password",type:"password",placeholder:"Your Password",value:a.password,onChange:m})),d.a.createElement(M.a,{type:"submit",mt:2},"Submit")),u&&d.a.createElement("div",null,u.message.substring(14,u.message.length)))};var ee,te,ae,ne,re,le,ce,oe=function(e){e.navLinkSelected,e.setNavLinkSelected;var t=Object(j.a)(),a=t.isOpen,n=t.onOpen,r=t.onClose;return d.a.createElement(d.a.Fragment,null,d.a.createElement(y.a,null,d.a.createElement(v.a,{p:"4"},d.a.createElement(C.a,null,d.a.createElement(b.b,{to:"/"},d.a.createElement(O.a,{src:$.a,alt:"placeholder",w:20,h:20})))),d.a.createElement(I.a,null),d.a.createElement(v.a,{p:"4",d:"flex",alignItems:"center"},d.a.createElement(v.a,{mr:3},K.loggedIn()?d.a.createElement(d.a.Fragment,null,d.a.createElement(M.a,{onClick:function(e){e.preventDefault(),K.logout()}},"LogOut")):d.a.createElement(d.a.Fragment,null,d.a.createElement(M.a,{onClick:n},"Login/Signup"))),K.loggedIn()&&d.a.createElement(C.a,null,d.a.createElement(b.b,{to:"/profile"},d.a.createElement(_.a,{size:"xl"}))))),d.a.createElement(A.a,{isOpen:a,onClose:r,size:"lg"},d.a.createElement(A.g,null),d.a.createElement(A.d,null,d.a.createElement(A.c,null),d.a.createElement(q.e,{variant:"enclosed"},d.a.createElement(q.b,null,d.a.createElement(q.a,null,"Login"),d.a.createElement(q.a,null,"Signup")),d.a.createElement(q.d,null,d.a.createElement(q.c,null,d.a.createElement(A.b,null,d.a.createElement(Z,null))),d.a.createElement(q.c,null,d.a.createElement(A.b,null,d.a.createElement(X,null))))))))},ie=(Object(L.gql)(ee||(ee=Object(S.a)(["\n  {\n    me {\n      _id\n      username\n      email\n      badges\n      games {\n        _id\n        score\n        decks {\n          _id\n          deckname\n          description\n          cards {\n            cardId\n            front\n            back\n          }\n        }\n      }\n    }\n  }\n"]))),Object(L.gql)(te||(te=Object(S.a)(["\n  {\n    users {\n      _id\n      username\n      email\n      badges\n      games {\n        _id\n        score\n        decks {\n          _id\n          deckname\n          description\n          cards {\n            cardId\n            front\n            back\n          }\n        }\n      }\n    }\n  }\n"]))),Object(L.gql)(ae||(ae=Object(S.a)(["\n  query user($username: String!) {\n    user(username: $username) {\n      _id\n      username\n      email\n      badges\n      games {\n        _id\n        score\n        decks {\n          _id\n          deckname\n          description\n          cards {\n            cardId\n            front\n            back\n          }\n        }\n      }\n    } \n  }\n"]))),Object(L.gql)(ne||(ne=Object(S.a)(["\n  query deck($id: ID! ) {\n    deck(_id: $id) {\n        _id\n        deckname\n        description\n        cards {\n          front\n          back\n          cardId\n        }\n    }\n  }\n"])))),se=Object(L.gql)(re||(re=Object(S.a)(["\n  {\n    decks {\n      _id\n      deckname\n      description\n      cards {\n        front\n        back\n        cardId\n      }\n    }\n  }\n"]))),de=Object(L.gql)(le||(le=Object(S.a)(["\n  query getGame($deck: String!) {\n    getGame(deck: $deck) {\n      _id\n      score\n      deck\n      userId\n      deck\n      matrix\n    }\n  }\n"]))),ue=Object(L.gql)(ce||(ce=Object(S.a)(["\n    {\n      getAllGame {\n        userId\n        deck\n        score\n        matrix\n      }\n    }\n"]))),me=a(98),ge=a.n(me),he=a(99),fe=a.n(he),be=a(100),pe=a.n(be),Ee=a(327),ve=a(318),ke=a(324),xe=a(85);a(182),a(276);var we=function(){ge.a,fe.a,pe.a,Object(i.useToast)();var e=Object(h.useQuery)(ue),t=e.loading,a=e.data;if(t)return d.a.createElement("h1",null," Loading ");console.log(a);for(var n=[ge.a,fe.a,pe.a],r=0;r<a.getAllGame.length;r++)a.getAllGame[r].image=n[r];return d.a.createElement(v.a,null,d.a.createElement(v.a,{textAlign:"center",fontSize:"xl",mb:6},"Pick a Deck a Game"),d.a.createElement(v.a,null,d.a.createElement(Ee.a,{justify:"space-evenly",align:"center"},a&&a.getAllGame.map(function(e){return d.a.createElement(b.b,{to:"/"},d.a.createElement(Ee.b,{align:"center"},d.a.createElement(ve.a,{boxShadow:"2xl",bg:"red.200",borderRadius:"lg"},d.a.createElement(v.a,{maxW:"sm",borderRadius:"lg",overflow:"hidden"},d.a.createElement(O.a,{src:e.image,alt:"Periodic Table"}),d.a.createElement(v.a,null,e.deck),d.a.createElement(v.a,null,e.score," strong cards"),d.a.createElement(v.a,{ml:3,mr:3},d.a.createElement(ke.a,{colorScheme:"purple",mb:2,borderRadius:"lg",value:e.score,hasStripe:"true",size:"md"})),d.a.createElement(v.a,{align:"center",mb:3},d.a.createElement(xe.a,{w:20,h:20,color:"#cd7f32",size:50}))))))}))),d.a.createElement(v.a,{textAlign:"center",fontSize:"xl"}))};var Se=function(){var e=Object(i.useToast)();function t(){e({title:"Authentication Error",description:"You need to be logged in!",status:"error",duration:1500,isClosable:!0,position:"top"})}var a=Object(h.useQuery)(se),n=a.loading,r=(a.error,a.data);if(n)return d.a.createElement("h1",null," Loading ");for(var l=[ge.a,fe.a,pe.a],c=0;c<3;c++)r.decks[c].image=l[c];return r.decks.forEach(function(e){return t="decks",a="put",n=e,new Promise(function(e,r){var l,c,o,i=window.indexedDB.open("mind-decks",1);i.onupgradeneeded=function(e){var t=i.result;t.createObjectStore("decks",{keyPath:"_id"}),t.createObjectStore("game-matrix",{keyPath:"_id"})},i.onerror=function(e){console.log("There was an error")},i.onsuccess=function(r){switch(l=i.result,c=l.transaction(t,"readwrite"),o=c.objectStore(t),l.onerror=function(e){console.log("error",e)},a){case"put":o.put(n),e(n);break;case"get":var s=o.getAll();s.onsuccess=function(){e(s.result)};break;case"delete":o.delete(n._id);break;default:console.log("No valid method")}c.oncomplete=function(){l.close()}}});var t,a,n}),d.a.createElement(v.a,null,d.a.createElement(v.a,{textAlign:"center",fontSize:"xl",mb:6},"Pick a Deck to Begin!"),d.a.createElement(Ee.a,{justify:"space-evenly",align:"center"},r&&r.decks.map(function(e){return d.a.createElement(Ee.b,null,K.loggedIn()?d.a.createElement(d.a.Fragment,null,d.a.createElement(ve.a,null,d.a.createElement(v.a,{boxShadow:"2xl",bg:"red.200",maxW:"sm",borderRadius:"lg",overflow:"hidden"},d.a.createElement(b.b,{to:"/game/".concat(e._id),key:e._id},d.a.createElement(O.a,{src:e.image,alt:"periodic table"}),d.a.createElement(v.a,null,e.deckname),d.a.createElement(v.a,null,e.cards.length," cards"),d.a.createElement(v.a,{ml:3,mr:3},d.a.createElement(ke.a,{colorScheme:"purple",mb:2,borderRadius:"lg",value:1,hasStripe:"true",size:"md"})),d.a.createElement(v.a,{align:"center",mb:3},d.a.createElement(xe.a,{w:20,h:20,color:"#cd7f32",size:50})))))):d.a.createElement(d.a.Fragment,null,d.a.createElement(ve.a,null,d.a.createElement(v.a,{boxShadow:"2xl",bg:"red.200",maxW:"sm",borderRadius:"lg",overflow:"hidden",onClick:t},d.a.createElement(O.a,{src:e.image,alt:"periodic table"}),d.a.createElement(v.a,null,e.deckname),d.a.createElement(v.a,null,e.cards.length," cards"),d.a.createElement(v.a,{ml:3,mr:3},d.a.createElement(ke.a,{colorScheme:"purple",mb:2,borderRadius:"lg",value:1,hasStripe:"true",size:"md"})),d.a.createElement(v.a,{align:"center",mb:3},d.a.createElement(xe.a,{w:20,h:20,color:"#cd7f32",size:50}))))))})))},Oe=function(){function e(t,a){Object(V.a)(this,e),this.finished=!1,this.matrix=a,this.deck=t,this.progress=0,this.cardsInSet=[],this.problemSet=[],this.correctCards=[],this.incorrectCards=[],this.currentQuestion={},this.gameMode=1}return Object(H.a)(e,[{key:"shuffleArray",value:function(e){return e.sort(function(e,t){return Math.random()-.5}),e}},{key:"getTotal",value:function(){for(var e=!1,t=0,a=0,n=this.deck.length,r=0;r<5;r++)r>2&&(t+=this.matrix[r].length),a+=this.matrix[r].length;return t===n&&(e=!0),{strong:t,total:a,deckTotal:n,gameOver:e}}},{key:"addNewCards",value:function(e){var t=this,a=this.deck.length-e+1;(this.deck.length-e+1<15?this.deck.slice(e,e+a):this.deck.slice(e,e+15)).forEach(function(e){return t.matrix[2].push(e.cardId)})}},{key:"addCardsByScore",value:function(){var e=this.getTotal();e.strong/e.total>=.7&&this.addNewCards(e.total)}},{key:"randomSelect",value:function(){var e,t=this;this.cardsInSet=[];for(var a=[0,39,69,84,94],n=[0,0,0,0,0],r=[],l=0;l<5;l++)r.push(this.matrix[l].length);for(var c=function(e){n[e]>=r[e]&&(a[e]=101)},o=0;o<=9;o++){for(var i=0;i<this.matrix.length;i++)c(i);console.log("New Bins: ",a);var s=Math.floor(100*Math.random()),d=void 0;d=s>a[4]?4:s>a[3]?3:s>a[2]?2:s>a[1]?1:101===a[0]?n[1]<r[1]?1:n[2]<r[2]?2:n[3]<r[3]?3:4:0,console.log("Roll: ".concat(s," Percentages: ").concat(a," Index: ").concat(d)),n[d]++,e=this.matrix[d].find(function(e){return-1===t.cardsInSet.indexOf(e)}),this.cardsInSet.push(e),console.log("CardsInSet: ",this.cardsInSet)}}},{key:"selectCards",value:function(){this.cardsInSet=[];for(var e=0;e<5;e++)this.shuffleArray(this.matrix[e]);this.randomSelect()}},{key:"getCardData",value:function(e){return this.deck.filter(function(t){return t.cardId===e})[0]}},{key:"generateOptions",value:function(e,t){var a=this.cardsInSet.slice(),n=[];a.splice(a.indexOf(e),1);for(var r=0;r<2;r++){var l=Math.floor(Math.random()*a.length),c=this.getCardData(a[l]);"back"===t?n[r]=c.back:"front"===t&&(n[r]=c.front),a.splice(l,1)}return n}},{key:"useSide",value:function(e,t){var a={question:"",options:[],answer:""};if(!0===t){a.question=e.front;var n=this.generateOptions(e.cardId,"back");n.push(e.back),a.options=this.shuffleArray(n),a.answer=e.back}else{a.question=e.back;var r=this.generateOptions(e.cardId,"front");r.push(e.front),a.options=this.shuffleArray(r),a.answer=e.front}return a}},{key:"createProblemSet",value:function(){for(var e=0;e<10;e++){var t=void 0,a=this.getCardData(this.cardsInSet[e]);if(1===this.gameMode)t=this.useSide(a,!0);else if(2===this.gameMode)t=this.useSide(a,!1);else{var n=Math.floor(2*Math.random());n=1===n,t=this.useSide(a,n)}this.problemSet.push(t)}}},{key:"start",value:function(){this.reset();var e=this.getTotal();0===e.total?(this.addNewCards(0),this.cardsInSet=this.shuffleArray(this.matrix[2]).slice(0,15)):e.total>0&&(this.addCardsByScore(),this.selectCards()),this.createProblemSet()}},{key:"renderNext",value:function(){if(this.finished)return this.tallyResults();var e=this.problemSet[this.progress];return console.log(this.progress),9===this.progress&&(this.finished=!0),this.progress++,e}},{key:"isCorrect",value:function(e){return!0===e?(this.correctCards.push(this.cardsInSet.shift()),"correct"):(this.incorrectCards.push(this.cardsInSet.shift()),"incorrect")}},{key:"tallyResults",value:function(){var e={correct:this.correctCards.length,incorrect:this.incorrectCards.length};return this.resortMatrix(this.correctCards,!0),this.resortMatrix(this.incorrectCards,!1),this.correctCards=[],this.incorrectCards=[],e}},{key:"reset",value:function(){this.finished=!1,this.progress=0,this.cardsInSet=[],this.problemSet=[],this.correctCards=[],this.incorrectCards=[],this.currentQuestion={}}},{key:"resortMatrix",value:function(e,t){var a=this;e.forEach(function(e){for(var n,r=0;r<5;r++){if(-1!==(n=a.matrix[r].indexOf(e))&&!0===t&&r<4){var l=a.matrix[r].splice(n,1);a.matrix[r+1].push(l[0]);break}if(-1!==n&&!1===t&&r>0){var c=a.matrix[r].splice(n,1);a.matrix[r-1].push(c[0]);break}}})}}]),e}(),je=a(86),ye=a(131),Ce=a.n(ye);var Ie=function(){var e,t,a=Object(s.useState)(!1),n=Object(g.a)(a,2),r=n[0],l=n[1],c=Object(s.useState)("Press Start Game to play"),o=Object(g.a)(c,2),u=o[0],m=o[1],f=Object(s.useState)(""),b=Object(g.a)(f,2),E=b[0],k=b[1],x=Object(s.useState)([]),w=Object(g.a)(x,2),S=w[0],O=w[1],y=Object(s.useState)({}),C=Object(g.a)(y,2),I=C[0],_=C[1],q=Object(s.useState)(1),T=Object(g.a)(q,2),$=T[0],F=T[1],P=Object(j.a)(),R=P.isOpen,z=P.onOpen,D=P.onClose,W=Object(s.useState)(0),B=Object(g.a)(W,2),G=B[0],L=B[1],N=Object(s.useRef)(),U=Object(i.useToast)(),V=Object(p.f)().id,H=Object(h.useQuery)(ie,{variables:{id:V}}),J=H.loading,K=H.data,X=Object(h.useQuery)(de,{skip:!K,variables:{deck:K&&K.deck.deckname}}),Z=X.loading,ee=X.data,te=Object(h.useMutation)(Y),ae=(Object(g.a)(te,1)[0],Object(h.useMutation)(Q)),ne=Object(g.a)(ae,1)[0];return Z||J?d.a.createElement("h1",null,"Loading..."):(console.log(ee),t=ee.getGame.matrix,d.a.createElement(v.a,null,!r&&d.a.createElement(Ee.a,{direction:"row",justify:"space-evenly",align:"center"},d.a.createElement(Ee.b,{p:2},d.a.createElement(M.a,{boxShadow:"2xl",leftIcon:d.a.createElement(je.a,null),_hover:{bg:"pink"},size:"lg",onClick:function(){F(1),U({title:"Activated!",description:"Card Front Mode Activated!",status:"info",duration:2800,isClosable:!0,position:"top"})}},"Card Front Mode")),d.a.createElement(Ee.b,{p:2},d.a.createElement(M.a,{boxShadow:"2xl",leftIcon:d.a.createElement(je.a,null),_hover:{bg:"pink"},size:"lg",onClick:function(){F(2),U({title:"Activated!",description:"Card Back Mode Activated!",status:"info",duration:2800,isClosable:!0,position:"top"})}},"Card Back Mode")),d.a.createElement(Ee.b,{p:2},d.a.createElement(M.a,{boxShadow:"2xl",leftIcon:d.a.createElement(je.a,null),_hover:{bg:"pink"},size:"lg",onClick:function(){F(3),U({title:"Activated!",description:"Mix Mode Activated!",status:"info",duration:2800,isClosable:!0,position:"top"})}},"Mix Mode"))),!r&&d.a.createElement(v.a,{textAlign:"center",fontSize:"xl",mb:6},d.a.createElement(M.a,{m:4,boxShadow:"2xl",onClick:function(){_(function(){l(!0),console.log(t);var a,n=new Oe(K.deck.cards,t);n.gameMode=$,n.start(),a=n.renderNext(),console.log(a),m(a.question),O(a.options),k(a.answer),e=a.answer;var r=[];return{handleInput:function(t){t.preventDefault();var l=t.target.textContent,c=e===l;if(N.current.toggle(),n.isCorrect(c),U({title:"".concat(c?"Correct":"Incorrect"),description:"".concat(c?"Correct answer provided":"Question will show up again!"),status:"".concat(c?"success":"error"),duration:1200,isClosable:!0,position:"top"}),n.finished){var o=n.tallyResults();L(o.correct),r=n.matrix,console.log(r);var i=n.getTotal().strong;try{var s=ne({variables:{deck:K.deck.deckname,score:i,matrix:r}});console.log(typeof s)}catch(t){console.error(t)}z(!0),n.start()}else a=n.renderNext(),m(a.question),O(a.options),e=a.answer,setTimeout(function(){k(e)},800)}}}())}},"Start Game")),d.a.createElement(v.a,null,d.a.createElement(Ee.a,{direction:"column",justify:"space-between",align:"center"},d.a.createElement(Ce.a,{flipOnHover:!1,flipOnClick:!1,ref:N},d.a.createElement(ye.FrontSide,{style:{backgroundColor:"#FEB2B2",borderRadius:"0.5rem",boxShadow:"5px 10px 10px 5px grey"}},d.a.createElement(Ee.b,{bg:"red.200",maxW:"sm",borderRadius:"lg",overflow:"hidden"},d.a.createElement(ve.a,{w:"350px",h:"400px"},u))),d.a.createElement(ye.BackSide,{animationDuration:600,style:{backgroundColor:"#FEB2B2",borderRadius:"0.5rem",boxShadow:"5px 10px 10px 5px grey"}},d.a.createElement(Ee.b,{bg:"red.200",maxW:"sm",borderRadius:"lg",overflow:"hidden"},d.a.createElement(ve.a,{w:"350px",h:"400px"},E))))),d.a.createElement(Ee.a,{direction:"row",justify:"space-evenly",align:"center",mt:5},S.map(function(e){return d.a.createElement(Ee.b,{key:e,p:2},d.a.createElement(M.a,{boxShadow:"2xl",onClick:function(e){N.current.toggle(),setTimeout(function(){I.handleInput(e)},800)}},e))})),d.a.createElement(A.a,{isOpen:R,onClose:D},d.a.createElement(A.g,null),d.a.createElement(A.d,null,d.a.createElement(A.f,null,K.deck.deckname),d.a.createElement(A.c,null),d.a.createElement(A.b,null,"You have answered ",G," correctly."),d.a.createElement(A.e,null,d.a.createElement(M.a,{colorScheme:"blue",mr:3,onClick:D},"Close")))))))},Me=a(319),_e=a(320);var Ae=function(){Object(i.useToast)();var e=Object(h.useQuery)(se),t=e.loading,a=(e.error,e.data);return t?d.a.createElement("h1",null," Loading "):(console.log(a),d.a.createElement(v.a,null,d.a.createElement(v.a,{textAlign:"center",fontSize:"xl",mb:6},"Welcome to the leaderboard!"),d.a.createElement(ve.a,{mb:5},d.a.createElement(Me.a,{boxShadow:"2xl",width:"300px",placeholder:"Select Deck to Filter"},d.a.createElement("option",{value:"option1"},"Periodic Table"),d.a.createElement("option",{value:"option2"},"Flags of the World")),d.a.createElement(b.b,{to:"/leaderboard"},d.a.createElement(M.a,{ml:3,boxShadow:"2xl",_hover:{bg:"pink"},size:"lg"},"Show all Decks!"))),d.a.createElement(v.a,null,d.a.createElement(_e.a,{variant:"striped",colorScheme:"teal"},d.a.createElement(_e.b,null,"Mind Deck Leaderboard"),d.a.createElement(_e.g,null,d.a.createElement(_e.h,null,d.a.createElement(_e.f,null,"User Name"),d.a.createElement(_e.f,null,"Deck"),d.a.createElement(_e.f,null,"Cards Completed"))),d.a.createElement(_e.c,null,d.a.createElement(_e.h,null,d.a.createElement(_e.d,null,"esroleo"),d.a.createElement(_e.d,null,"Periodic Table"),d.a.createElement(_e.d,null,"50")),d.a.createElement(_e.h,null,d.a.createElement(_e.d,null,"anagha"),d.a.createElement(_e.d,null,"Periodic Table"),d.a.createElement(_e.d,null,"100")),d.a.createElement(_e.h,null,d.a.createElement(_e.d,null,"ali"),d.a.createElement(_e.d,null,"Periodic Table"),d.a.createElement(_e.d,null,"20")),d.a.createElement(_e.h,null,d.a.createElement(_e.d,null,"shawn"),d.a.createElement(_e.d,null,"Flags of the World"),d.a.createElement(_e.d,null,"15")),d.a.createElement(_e.h,null,d.a.createElement(_e.d,null,"terrance"),d.a.createElement(_e.d,null,"Flags of the World"),d.a.createElement(_e.d,null,"30")),d.a.createElement(_e.h,null,d.a.createElement(_e.d,null,"kris"),d.a.createElement(_e.d,null,"Flags of the World"),d.a.createElement(_e.d,null,"90"))),d.a.createElement(_e.e,null,d.a.createElement(_e.h,null,d.a.createElement(_e.f,null,"User Name"),d.a.createElement(_e.f,null,"Deck"),d.a.createElement(_e.f,null,"Cards Completed")))))))},qe=new f.a({request:function(e){var t=localStorage.getItem("id_token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},uri:"/graphql"});var Te=function(){var e=Object(s.useState)("Home"),t=Object(g.a)(e,2),a=t[0],n=t[1];return d.a.createElement(h.ApolloProvider,{client:qe},d.a.createElement(b.a,null,d.a.createElement(E.a,{theme:i.theme},d.a.createElement(v.a,{textAlign:"center",fontSize:"xl"},d.a.createElement(w,{justifySelf:"flex-end",m:5}),d.a.createElement(oe,{navLinkSelected:a,setNavLinkSelected:n}),d.a.createElement(p.c,null,d.a.createElement(p.a,{exact:!0,path:"/",component:Se}),d.a.createElement(p.a,{exact:!0,path:"/profile",component:we}),d.a.createElement(p.a,{exact:!0,path:"/game/:id",component:Ie}),d.a.createElement(p.a,{exact:!0,path:"/leaderboard",component:Ae})),d.a.createElement("main",null)))))},$e=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Fe(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}m.a.render(d.a.createElement(s.StrictMode,null,d.a.createElement(i.ColorModeScript,null),d.a.createElement(Te,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");$e?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Fe(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):Fe(t,e)})}}()},98:function(e,t,a){e.exports=a.p+"static/media/svg1.2a4635af.svg"},99:function(e,t,a){e.exports=a.p+"static/media/svg2.b2ee8ce9.svg"}},[[262,1,2]]]);
//# sourceMappingURL=main.53ea6ec5.chunk.js.map