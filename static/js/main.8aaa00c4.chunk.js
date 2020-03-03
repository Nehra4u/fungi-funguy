(this["webpackJsonpfungi-funguy"]=this["webpackJsonpfungi-funguy"]||[]).push([[0],{18:function(e,a,t){e.exports=t.p+"static/media/logo.2ed5d571.jpg"},19:function(e,a,t){e.exports=t.p+"static/media/playerPlaceholderImg.ac822c5a.jpg"},21:function(e,a,t){e.exports=t(42)},26:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),s=t.n(c),l=(t(26),t(20)),o=t(4),i=t(5),m=t(7),u=t(6),h=t(8),d=t(14),p=t.n(d);p.a.initializeApp({apiKey:"AIzaSyDWhP1gnVx7KXilgNLu5zwNEiZuxccfZPQ",authDomain:"fungi-funguy.firebaseapp.com",databaseURL:"https://fungi-funguy.firebaseio.com",projectId:"fungi-funguy",storageBucket:"fungi-funguy.appspot.com",messagingSenderId:"44305783892",appId:"1:44305783892:web:580bdf51257d791dbaa1c1"});var f=p.a,N=t(18),E=t.n(N),g=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"wrapper"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Is this fungi a Fun Guy?"),r.a.createElement("img",{src:E.a,className:"mushyLogo",alt:"smiling mushroom fun guy logo from the nounproject.com by sobinsergey",title:"smiling mushroom fun guy logo from the nounproject.com by sobinsergey"})),r.a.createElement("p",{className:"headerP"},"Mushrooms are fascinating, but they're not always friendly! Can you tell which are toxic and which are edible? "))}}]),a}(n.Component),b=t(12),w=t(19),y=t.n(w),v=function(e){return r.a.createElement("div",{className:"finalScoreBanner wrapper"},r.a.createElement("h3",null,r.a.createElement("span",{className:"hiScoreTitleTwo"},"Congrats "),r.a.createElement("span",{className:"hiScoreTitleThree"},"Congrats")," ",r.a.createElement("span",{className:"hiScoreTitleTwo"},"Congrats ")),r.a.createElement("h3",null,"You're done!"),r.a.createElement("p",null,"Your final score was:"),r.a.createElement("p",null," ",e.finalScoreTally," / 20!"),r.a.createElement("p",null,"And always remember mushrooms are our friends!"),r.a.createElement("button",{onClick:e.resetQuiz},"Reset!"))},S=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(m.a)(this,Object(u.a)(a).call(this))).handleClickUserName=function(a){e.setState({modalOpen:!1})},e.handleClickReset=function(e){window.location.reload()},e.handleUserName=function(a){e.setState({userName:a.target.value})},e.handleClick=function(a){a.preventDefault();var t=e.props.images[e.state.mushroomIndex].toxic.toString();(e.setState({mushroomIndex:e.state.mushroomIndex+1,counterIndex:e.state.counterIndex+1}),20===e.state.counterIndex)&&(f.database().ref("userName").push().set({userName:"".concat(e.state.userName),score:"".concat(e.state.correctAnswer)}),e.setState({isQuizDone:!0}));t===a.target.value?e.setState({correctAnswer:e.state.correctAnswer+1}):e.setState({wrongAnswer:e.state.wrongAnswer+1})},e.state={mushroomIndex:0,counterIndex:1,correctAnswer:0,wrongAnswer:0,isQuizDone:!1,userName:null,modalOpen:!0},e.handleClickReset=e.handleClickReset.bind(Object(b.a)(e)),e}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.images[this.state.mushroomIndex];return this.state.modalOpen&&!this.state.isQuizDone?r.a.createElement("section",{className:"cardHolder wrapper"},r.a.createElement("div",{className:"playerCard mushroomCard boxShadow wrapper"},r.a.createElement("div",{className:"playerPlaceholderImage"},r.a.createElement("img",{src:y.a,alt:"mushroom logo from the noun project.com created by AomAm",title:"mushroom logo from the noun project.com created by AomAm"})),r.a.createElement("div",{className:"playerStack"},r.a.createElement("h3",{className:"hiScoreTitleTwo"},"Player"),r.a.createElement("h3",{className:"hiScoreTitleThree"},"Player"),r.a.createElement("h3",null,"Player")),r.a.createElement("form",{className:"userName"},r.a.createElement("label",{htmlFor:"playerName"},"Name: "),r.a.createElement("input",{type:"text",id:"name",minLength:"2",maxLength:"18",onChange:this.handleUserName,required:!0}),r.a.createElement("button",{className:"startButton",onClick:this.handleClickUserName},"Start!")))):this.state.isQuizDone?r.a.createElement(v,{userName:this.state.userName,finalScoreTally:this.state.correctAnswer,resetQuiz:this.handleClickReset}):r.a.createElement("section",{className:"cardHolder wrapper"},r.a.createElement("div",{className:"mushroomCard wrapper boxShadow"},r.a.createElement("h2",{className:"mushroomNames"},e.binomial),r.a.createElement("img",{src:e.image,alt:""}),r.a.createElement("div",{className:"cardButtons"},r.a.createElement("button",{value:"true",className:"firstButton",onClick:this.handleClick},"Toxic"),r.a.createElement("button",{value:"false",onClick:this.handleClick},"Edible"))))}}]),a}(n.Component),j=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(m.a)(this,Object(u.a)(a).call(this))).state={userNameAndScore:[]},e}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.database().ref().on("value",(function(a){var t=a.val(),n=Object.values(t.userName),r=[];n.map((function(e,a){return r.push({userName:e.userName,key:a,score:e.score})}));var c=r.sort((function(e,a){return a.score-e.score})).slice(0,10);e.setState({userNameAndScore:c})}))}},{key:"render",value:function(){return r.a.createElement("section",{className:"wrapper hiScore boxShadow"},r.a.createElement("div",{className:"playerStack hiScoreTitle"},r.a.createElement("h3",{className:"hiScoreTitleTwo"},"Hi-Scores"),r.a.createElement("h3",{className:"hiScoreTitleThree"},"Hi-Scores"),r.a.createElement("h3",null,"Hi-Scores")),r.a.createElement("div",{className:"hiScoreNames"},this.state.userNameAndScore.map((function(e){return r.a.createElement("p",{key:e.userName,className:"hiScoreNameSpan"},r.a.createElement("span",{className:"hiScoreTitleTwo hiScoreNameSpan"},"Name:"),e.userName," ",r.a.createElement("span",{className:"hiScoreTitleThree hiScoreNameSpan"},"Score:"),e.score,"/20")}))))}}]),a}(n.Component),k=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("h3",{className:"hiScoreTitleTwo wrapper"},"Disclaimer!"),r.a.createElement("p",null,"This game is made out of respect and love for the mushroom, fungi, and the entire natural world. Don't eat random mushrooms you find in the woods. You'll get sick or die and that is 100% not chill."),r.a.createElement("p",{className:"copyrightText"},"Copyright \xa9 2020 // Coded by Michael le Riche"),r.a.createElement("div",{className:"socialIcons"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{className:"linkedInLogo",href:"https://www.linkedin.com/in/michael-le-riche-147b361a0/"},r.a.createElement("i",{className:"fab fa-linkedin-in"}),r.a.createElement("span",{className:"visuallyHidden"},"Linkedin"))),r.a.createElement("li",null,r.a.createElement("a",{className:"twitterLogo",href:"https://twitter.com/mlerichecodes"},r.a.createElement("i",{className:"fab fa-twitter"}),r.a.createElement("span",{className:"visuallyHidden"},"Twitter"))),r.a.createElement("li",null,r.a.createElement("a",{className:"gitHubLogo",href:"https://github.com/michaelleriche"},r.a.createElement("i",{className:"fab fa-github"}),r.a.createElement("span",{className:"visuallyHidden"},"github"))))),r.a.createElement("div",{className:"lastTextDiv"},r.a.createElement("p",{className:"hiScoreTitleTwo lastText"}," When in doubt, ask yourself:"),r.a.createElement("p",{className:"hiScoreTitleThree lastText"}," ***** What would Neil Young Do? ***** "))))}}]),a}(n.Component),T=(t(41),function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(m.a)(this,Object(u.a)(a).call(this))).state={mushroomSpecies:[]},e}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.database().ref().on("value",(function(a){var t=a.val(),n=Object.values(t.Mushrooms),r=Object(l.a)(e.state.mushroomSpecies);n.map((function(e,a){return r.push({image:e.img,key:a,toxic:e.toxic,binomial:e.binomial})})),e.setState({mushroomSpecies:r})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(S,{images:this.state.mushroomSpecies}),r.a.createElement(j,null),r.a.createElement(k,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.8aaa00c4.chunk.js.map