(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){e.exports=t(21)},21:function(e,a,t){"use strict";t.r(a);var r=t(0),s=t.n(r),c=t(10),i=t.n(c),n=(t(6),t(11)),o=t(12),d=t(1),l=t(2),p=t(4),u=t(3),m=t(5),h=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(p.a)(this,Object(u.a)(a).call(this,e))).updateCardName=function(e){var a=[];0!==e.target.value.length&&(a=t.props.cards.filter(function(a){return a.cardName.toLowerCase().startsWith(e.target.value.toLowerCase())}).map(function(e){return e.cardName})),t.setState({cardName:e.target.value,suggestions:a})},t.chooseSuggestion=function(e){t.textInput.current.focus(),t.setState({cardName:e.target.id,suggestions:[]})},t.submitCard=function(e){e.preventDefault();var a=t.validateCardName();a?t.addCardToList(a.cardName):t.throwInvalidCardNameError(),t.clearInput()},t.validateCardName=function(){return t.props.cards.find(function(e){return e.cardName.toLowerCase()===t.state.cardName.toLowerCase()})},t.addCardToList=function(e){t.props.userCardsData.map(function(e){return e.cardName}).includes(e)?t.setState({hasDuplicates:!0,isInvalidCardName:!1}):(t.setState({hasDuplicates:!1,isInvalidCardName:!1}),t.props.addUserCard(e))},t.throwInvalidCardNameError=function(){t.setState({isInvalidCardName:!0})},t.clearInput=function(){t.textInput.current.focus(),t.setState({cardName:"",suggestions:[]})},t.textInput=s.a.createRef(),t.state={cardName:"",isInvalidCardName:!1,hasDuplicates:!1,suggestions:[]},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e,a=this;return this.state.isInvalidCardName?e="The card name you entered is not in the database.":this.state.hasDuplicates&&(e="This card is already in your list."),s.a.createElement("form",null,s.a.createElement("div",{className:"controls"},s.a.createElement("div",{className:"controls--div"},s.a.createElement("input",{type:"text",className:"controls--input",onChange:this.updateCardName,placeholder:"Enter cards you own",value:this.state.cardName,ref:this.textInput}),s.a.createElement("button",{className:"controls--button",onClick:this.submitCard},"Add Card")),s.a.createElement("div",{className:"controls--suggestion-area"},this.state.suggestions.map(function(e){return s.a.createElement("span",{className:"controls--suggestion",key:e,id:e,onClick:a.chooseSuggestion},e.slice(0,24))}))),s.a.createElement("p",{className:"controls--error"},e))}}]),a}(r.Component),f=t(7),v=function(e){function a(){var e,t;Object(d.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=Object(p.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(s)))).removeListItem=function(){var e=Object(f.a)(t.props.userCardsData).slice(0);e.splice(t.props.cardIndex,1),t.props.saveArray("userCardsData",e)},t.increaseCardCount=function(){t.props.cardCount<4&&t.updateUserCardsData(t.props.cardCount+1)},t.decreaseCardCount=function(){t.props.cardCount>1&&t.updateUserCardsData(t.props.cardCount-1)},t.updateUserCardsData=function(e){var a=t.props.userCardsData.map(function(a){return t.props.cardName===a.cardName&&(a.cardCount=e),a});t.props.saveArray("userCardsData",a)},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("li",{id:this.props.cardIndex,className:"list--li"},this.props.cardName,s.a.createElement("span",{className:"listprice--span"},s.a.createElement("i",{className:"fas fa-minus",onClick:this.decreaseCardCount}),s.a.createElement("span",null," ",this.props.cardCount),s.a.createElement("i",{className:"fas fa-plus",onClick:this.increaseCardCount}),s.a.createElement("i",{className:"far fa-trash-alt",onClick:this.removeListItem})))}}]),a}(r.Component);var C=function(e){var a=e.userCardsData.map(function(e){return e.cardName});return a.sort(),s.a.createElement("div",null,s.a.createElement("h1",{className:"list--h1"},"My Cards"),s.a.createElement("ul",{className:"list--ul"},a.map(function(a,t){return s.a.createElement(v,{cardName:a,cardIndex:t,cardCount:e.userCardsData[t].cardCount,key:a,userCardsData:e.userCardsData,saveArray:e.saveArray})},this)),s.a.createElement("button",{className:"compare-builds--button",onClick:e.compareBuilds},"Compare Deck Prices"))},k=function(e){function a(){var e,t;Object(d.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=Object(p.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(s)))).removeFaveListItem=function(){var e=Object(f.a)(t.props.faveDecks).slice(0);e.splice(t.props.deckIndex,1),t.props.saveArray("faveDecks",e)},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("li",{id:this.props.deckIndex,className:"list--li"},s.a.createElement("i",{onClick:this.removeFaveListItem,className:"far fa-trash-alt fave--trash"}),this.props.deckName)}}]),a}(r.Component);var N=function(e){return s.a.createElement("div",null,s.a.createElement("h1",{className:"list--h1"},"Saved Decks"),s.a.createElement("ul",{className:"list--ul"},e.faveDecks.map(function(a,t){return s.a.createElement(k,{deckName:a.deckName,deckIndex:t,key:a.deckName,faveDecks:e.faveDecks,saveArray:e.saveArray})})))},w=function(e){function a(){var e,t;Object(d.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=Object(p.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(s)))).removeWishListItem=function(){var e=Object(f.a)(t.props.wishList).slice(0);e.splice(t.props.cardIndex,1),t.props.saveArray("wishList",e)},t.increaseWishListCount=function(){t.props.wishListCount<4&&t.updateWishList(t.props.wishListCount+1)},t.decreaseWishListCount=function(){t.props.wishListCount>1&&t.updateWishList(t.props.wishListCount-1)},t.updateWishList=function(e){var a=t.props.wishList.map(function(a){return t.props.cardName===a.cardName&&(a.wishListCount=e),a});t.props.saveArray("wishList",a)},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("li",{id:this.props.cardIndex,className:"list--li"},this.props.cardName,s.a.createElement("span",{className:"listprice--span"},s.a.createElement("i",{className:"fas fa-minus",onClick:this.decreaseWishListCount}),s.a.createElement("span",null," ",this.props.wishListCount," "),s.a.createElement("i",{className:"fas fa-plus",onClick:this.increaseWishListCount}),s.a.createElement("i",{className:"far fa-trash-alt",onClick:this.removeWishListItem})))}}]),a}(r.Component);var g=function(e){return s.a.createElement("div",null,s.a.createElement("h1",{className:"list--h1"},"Wish List"),s.a.createElement("ul",{className:"list--ul"},e.wishList.map(function(a,t){return s.a.createElement(w,{cardName:a.cardName,cardIndex:t,wishListCount:a.wishListCount,key:a.cardName,wishList:e.wishList,saveArray:e.saveArray,price:a.price})})))};var D=function(e){return s.a.createElement("aside",{className:"aside"},s.a.createElement("img",{alt:"Magic The Gathering",src:"./magic_logo.png",className:"aside--magic-logo"}),"myCardList"===e.asideView&&s.a.createElement("div",null,s.a.createElement(h,{addUserCard:e.addUserCard,cards:e.cards,userCardsData:e.userCardsData}),s.a.createElement(C,{userCardsData:e.userCardsData,compareBuilds:e.compareBuilds,saveArray:e.saveArray})),"faveDecks"===e.asideView&&s.a.createElement(N,{faveDecks:e.faveDecks,saveArray:e.saveArray}),"wishList"===e.asideView&&s.a.createElement(g,{wishList:e.wishList,saveArray:e.saveArray}))},E=function(e){function a(){var e,t;Object(d.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=Object(p.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(s)))).setPopUpData=function(){t.props.displayPopUp(t.props.card)},t.addToWishlist=function(){t.props.addToWishlist(t.props.card)},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("article",{className:"card--container"},"myCardList"===this.props.cardAreaView&&s.a.createElement("div",null,s.a.createElement("div",{className:"card--header-div"},s.a.createElement("h2",null,this.props.card.cardName)),s.a.createElement("img",{className:"card--image",src:this.props.card.imageSource,alt:this.props.card.cardName,onClick:this.setPopUpData}),s.a.createElement("div",{className:"card--counter-container"},s.a.createElement("p",{className:"card--counter"},this.props.card.cardCount," in My Cards"))),"expandedDeck"===this.props.cardAreaView&&s.a.createElement("div",null,s.a.createElement("div",{className:"card--header-div"},s.a.createElement("h2",null,this.props.card.cardName)),s.a.createElement("p",null,"$",this.props.getPriceString(this.props.card.price)),s.a.createElement("img",{className:"card--image",src:this.props.card.imageSource,alt:this.props.card.cardName,onClick:this.setPopUpData}),s.a.createElement("div",{className:"card--counter-container"},s.a.createElement("p",null,"You have ".concat(this.props.card.userCount,"\n                   of ").concat(this.props.card.requiredCount)),s.a.createElement("button",{onClick:this.addToWishlist},"Add to Wish List"))),"wishList"===this.props.cardAreaView&&s.a.createElement("div",null,s.a.createElement("div",{className:"card--header-div"},s.a.createElement("h2",null,this.props.card.cardName)),s.a.createElement("img",{className:"card--image",src:this.props.card.imageSource,alt:this.props.card.cardName,onClick:this.setPopUpData}),s.a.createElement("div",null,s.a.createElement("p",{className:"card--wishlist-price"},"Total Cost of ",this.props.card.wishListCount," - $",this.props.getPriceString(this.props.card.price*this.props.card.wishListCount)))))}}]),a}(r.Component),y=function(e){function a(){var e,t;Object(d.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=Object(p.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(s)))).setAsideViewMyCards=function(){t.props.setAsideView("myCardList"),t.props.setCardAreaView("myCardList")},t.setAsideViewFaveDecks=function(){t.props.setAsideView("faveDecks"),t.props.setCardAreaView("faveDecks")},t.setAsideViewWishList=function(){t.props.setAsideView("wishList"),t.props.setCardAreaView("wishList")},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("header",{className:"header"},s.a.createElement("h1",null,"Modern Magic Deck Advisor"),s.a.createElement("ul",{className:"header--ul"},s.a.createElement("li",{onClick:this.setAsideViewMyCards,className:"my-cards"},"My Cards"),s.a.createElement("li",{onClick:this.setAsideViewFaveDecks,className:"fave-decks"},"Saved Decks"),s.a.createElement("li",{onClick:this.setAsideViewWishList,className:"my-wish-list"},"Wish List")))}}]),a}(r.Component),A=function(e){function a(){var e,t;Object(d.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=Object(p.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(s)))).handleClick=function(){t.props.setCardAreaView("expandedDeck"),t.props.expandDeck(t.props.userDeck)},t.addToFaveDecks=function(){t.props.addToFaveDecks(t.props.userDeck)},t.getDeckImage=function(){var e=[];return t.props.userDeck.signatureCards.forEach(function(a){e.push(t.props.cards.find(function(e){return e.cardName===a}).imageSource)}),e},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.getDeckImage();return s.a.createElement("article",{className:"deck--container"},s.a.createElement("div",null,s.a.createElement("div",{className:"deck--header-div"},s.a.createElement("h2",{className:"deck--name"},this.props.userDeck.deckName)),s.a.createElement("h3",{className:"price--value"},"$",this.props.userDeck.price),s.a.createElement("div",{className:"deck--signature"},a.map(function(a){return s.a.createElement("img",{className:"deck--image",src:a,alt:e.props.userDeck.deckName,key:a})})),"compareDecks"===this.props.cardAreaView&&s.a.createElement("button",{className:"deck--button",onClick:this.addToFaveDecks},"Save Deck"),s.a.createElement("button",{className:"deck--card-button",onClick:this.handleClick},"Show all cards")))}}]),a}(r.Component),b=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(p.a)(this,Object(u.a)(a).call(this,e))).getPriceString=function(e){return e.toFixed(2)},t.displayPopUp=function(e){t.setState({popUpCard:e},t.props.setPopUpView(!0))},t.returnToScreen=function(){t.props.setPopUpView(!1)},t.expandDeck=function(e){var a=t.props.getExpandedDeckInfo(e);a.map(function(a){var r=t.props.userCardsData.find(function(e){return e.cardName===a.cardName});return a.requiredCount=e.cardCounts[a.cardName],a.userCount=r?Math.min(a.requiredCount,r.cardCount):0,a}),t.setState({cardsInDeck:a})},t.displayDeck=function(){return t.state.cardsInDeck.map(function(e){return s.a.createElement(E,{card:e,key:e.cardName,cardAreaView:t.props.cardAreaView,displayPopUp:t.displayPopUp,addToWishlist:t.props.addToWishlist,getPriceString:t.getPriceString})})},t.state={popUpCard:{},cardsInDeck:[]},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"sortCards",value:function(e){var a=this;return e.map(function(e){return s.a.createElement(E,{card:e,key:e.cardName,cardAreaView:a.props.cardAreaView,displayPopUp:a.displayPopUp,getPriceString:a.getPriceString})})}},{key:"sortDecks",value:function(e){var a=this;return e.sort(function(e,a){return e.price-a.price}),e.map(function(e){return s.a.createElement(A,{userDeck:e,key:e.deckName,expandDeck:a.expandDeck,setCardAreaView:a.props.setCardAreaView,addToFaveDecks:a.props.addToFaveDecks,cardAreaView:a.props.cardAreaView,cards:a.props.cards})})}},{key:"render",value:function(){var e=[];switch(this.props.cardAreaView){case"compareDecks":e=this.sortDecks(this.props.userDecks);break;case"expandedDeck":e=this.displayDeck();break;case"faveDecks":e=this.sortDecks(this.props.faveDecks);break;case"wishList":e=this.sortCards(this.props.wishList);break;default:e=this.sortCards(this.props.userCardsData)}return s.a.createElement("div",{className:"card-area"},this.props.popUpView&&s.a.createElement("div",{className:"popup--div"},s.a.createElement("img",{className:"popup--card-image",src:this.state.popUpCard.imageSource,alt:this.state.popUpCard.cardName}),s.a.createElement("div",{className:"popup--info"},s.a.createElement("div",null,s.a.createElement("h1",null,this.state.popUpCard.cardName),s.a.createElement("h2",null,"$",this.state.popUpCard.price),s.a.createElement("div",{className:"popup--div-scroll"},this.state.popUpCard.decks.length>0&&s.a.createElement("p",null,"Played in main deck of:"),s.a.createElement("ul",{className:"popup--list"},this.state.popUpCard.decks.map(function(e){return s.a.createElement("li",{key:e},e)})),this.state.popUpCard.sideboards.length>0&&s.a.createElement("p",null,"Played in sideboard of:"),s.a.createElement("ul",{className:"popup--list"},this.state.popUpCard.sideboards.map(function(e){return s.a.createElement("li",{key:e},e)})))),s.a.createElement("i",{onClick:this.returnToScreen,className:"far fa-times-circle"}))),s.a.createElement(y,{setAsideView:this.props.setAsideView,setCardAreaView:this.props.setCardAreaView}),s.a.createElement("section",{className:"card-area--section"},e))}}]),a}(r.Component),L=function(e){function a(){var e;Object(d.a)(this,a),(e=Object(p.a)(this,Object(u.a)(a).call(this))).compareBuilds=function(){var a=[],t=[];e.state.userCardsData.forEach(function(r){e.state.decks.filter(function(e){return e.cards.includes(r.cardName)}).forEach(function(e){t.includes(e.deckName)||(a.push(e),t.push(e.deckName))})}),e.setDeckPrices(a)},e.getExpandedDeckInfo=function(a){return e.state.cards.filter(function(e){return a.cards.includes(e.cardName)})},e.getCurrentPrices=function(a){var t=JSON.parse(localStorage.getItem("timeOfCache"));if(!t||Date.now()-t>864e5){var r=e.getURLArray(a);Promise.all(e.getPricePromises(r)).then(function(t){e.storePriceData(t),e.setCurrentPrices(a)}).catch(function(e){return console.log("Promise.all error",e)})}else e.setCurrentPrices(a)},e.getURLArray=function(e){return e.map(function(e){return'%21"'.concat(e.cardName.replace(/\s/g,"+"),'"')})},e.getPricePromises=function(e){for(var a=[],t=0;t<Math.ceil(e.length/40);t++){var r=40*t;a.push(fetch("https://api.scryfall.com/cards/search?q=f%3Am+unique%3Acards+%28"+e.slice(r,r+40).join("+or+")+"%29").then(function(e){return e.json()}).then(function(e){return e.data}).catch(function(e){return console.log("price promise error",e)}))}return a},e.storePriceData=function(e){var a,t=(a=[]).concat.apply(a,Object(o.a)(e)).map(function(e){return{cardName:e.name,price:e.usd}});localStorage.setItem("timeOfCache",JSON.stringify(Date.now())),localStorage.setItem("cardPrices",JSON.stringify(t))},e.setCurrentPrices=function(a){var t=a.map(function(e){var a=JSON.parse(localStorage.getItem("cardPrices")).find(function(a){return a.cardName.includes(e.cardName)});return a.price&&(e.price=parseFloat(a.price)),e});e.setState({cards:t})},e.addUserCard=function(a){var t=e.state.cards.find(function(e){return a===e.cardName});t.cardCount=1;var r=e.state.userCardsData.concat([t]);r.sort(e.sortCardsByName),e.saveArray("userCardsData",r)},e.sortCardsByName=function(e,a){return e.cardName<a.cardName?-1:1},e.saveArray=function(a,t){e.setState(Object(n.a)({},a,t),localStorage.setItem(a,JSON.stringify(t)))},e.setAsideView=function(a){e.setState({asideView:a,popUpView:!1})},e.setCardAreaView=function(a){e.setState({cardAreaView:a,popUpView:!1})},e.setPopUpView=function(a){e.setState({popUpView:a})},e.addToWishlist=function(a){if(!e.state.wishList.find(function(e){return e.cardName===a.cardName})){a.wishListCount=1;var t=e.state.wishList.concat([a]);t.sort(e.sortCardsByName),e.saveArray("wishList",t)}},e.addToFaveDecks=function(a){if(!e.state.faveDecks.find(function(e){return e.deckName===a.deckName})){var t=e.state.faveDecks.concat([a]);t.sort(function(e,a){return e.deckName<a.deckName?-1:1}),e.saveArray("faveDecks",t)}};var t=[],r=[],s=[];return localStorage.getItem("userCardsData")&&(t=JSON.parse(localStorage.getItem("userCardsData"))),localStorage.getItem("faveDecks")&&(r=JSON.parse(localStorage.getItem("faveDecks"))),localStorage.getItem("wishList")&&(s=JSON.parse(localStorage.getItem("wishList"))),e.state={asideView:"myCardList",cardAreaView:"myCardList",popUpView:!1,cards:[],decks:[],userDecks:[],userCardsData:t,faveDecks:r,wishList:s},e}return Object(m.a)(a,e),Object(l.a)(a,[{key:"setDeckPrices",value:function(e){var a=this,t=e.map(function(e){return e.price=0,Object.keys(e.cardCounts).forEach(function(t){var r=a.state.cards.find(function(e){return e.cardName===t}).price,s=a.state.userCardsData.find(function(e){return e.cardName===t});if(s){var c=Math.max(0,e.cardCounts[t]-s.cardCount);e.price+=r*c}else e.price+=r*e.cardCounts[t]}),e.price=e.price.toFixed(2),e});this.setState({userDecks:t,cardAreaView:"compareDecks",popUpView:!1})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://whateverly-datasets.herokuapp.com/api/v1/cards").then(function(e){return e.json()}).then(function(a){return e.getCurrentPrices(a.cards)}).catch(function(e){return console.log("cards error",e)}),fetch("https://whateverly-datasets.herokuapp.com/api/v1/decks").then(function(e){return e.json()}).then(function(a){return e.setState({decks:a.decks})}).catch(function(e){return console.log("decks error",e)})}},{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement(D,{addUserCard:this.addUserCard,userCardsData:this.state.userCardsData,cards:this.state.cards,compareBuilds:this.compareBuilds,asideView:this.state.asideView,faveDecks:this.state.faveDecks,wishList:this.state.wishList,saveArray:this.saveArray}),s.a.createElement(b,{userCardsData:this.state.userCardsData,faveDecks:this.state.faveDecks,setAsideView:this.setAsideView,cardAreaView:this.state.cardAreaView,setCardAreaView:this.setCardAreaView,userDecks:this.state.userDecks,getExpandedDeckInfo:this.getExpandedDeckInfo,addToWishlist:this.addToWishlist,addToFaveDecks:this.addToFaveDecks,wishList:this.state.wishList,cards:this.state.cards,popUpView:this.state.popUpView,setPopUpView:this.setPopUpView}))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,a,t){}},[[13,2,1]]]);
//# sourceMappingURL=main.68fe562e.chunk.js.map