(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(3),o=t.n(c),i=t(4),m=t(5),r=t(7),l=t(6),g=t(8);t(15),t(2);var h=function(e){return s.a.createElement("img",{alt:e.name,src:e.image,value:e.id,onClick:function(){return e.clickedImage(e.id)}})},d=[{id:1,name:"slug",image:"https://cdn.shopify.com/s/files/1/1365/2497/products/12676-BananaSlugMask-Sky_900x.jpg?v=1520535633"},{id:2,name:"mouse",image:"https://cdn.shopify.com/s/files/1/1172/9608/products/5560-Mouse-grey.jpeg?v=1464128491"},{id:3,name:"orange",image:"https://images-na.ssl-images-amazon.com/images/I/51TcdS9z2fL._SY300_QL70_.jpg"},{id:4,name:"mannequin",image:"http://coatl.co/wp-content/uploads/2018/06/mannequin-face-heads-facebook.jpg"},{id:5,name:"spider",image:"https://i.pinimg.com/736x/ee/ec/0c/eeec0ca4c876780f8cd08cbdbcc5c15c.jpg"},{id:6,name:"flower",image:"https://cdn.shopify.com/s/files/1/1334/4597/collections/Real-Touch-Silk-Flowers-Landing_1024x1024_cbece69f-9a43-497e-a220-7fec4c82d62b_640x.jpg?v=1488836250"},{id:7,name:"lamp",image:"https://secure.img2-fg.wfcdn.com/im/77491310/resize-h400-p1-w400%5Ecompr-r85/4974/49743992/Walnut+Grove+30%2522+Table+Lamp.jpg"},{id:8,name:"fish",image:"https://images-na.ssl-images-amazon.com/images/I/51NLSAJZdnL.jpg"},{id:9,name:"almond",image:"https://i1.wp.com/markitonutrition.com/community/wp-content/uploads/almonds.jpg?fit=400%2C400&ssl=1"}],u=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=Object(r.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(s)))).state={score:0,imageArray:d,stateChosenItems:[]},t.shuffleArray=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=e[a];e[a]=e[t],e[t]=n}return e},t.chosenItems=[],t.handleInputChange=function(e){e.target.value,e.target.name},t.clickedImage=function(e){t.state.score!==d.length-1?(t.shuffleArray(d),-1===t.chosenItems.indexOf(e)?(t.chosenItems.push(e),t.setState({score:t.state.score+1,stateChosenItems:t.chosenItems})):(alert("YOU LUOOSOOSOSOOTTST"),t.setState({score:0,stateChosenItems:[]}),t.chosenItems=[]),console.log(t.chosenItems)):(alert("YOU WOOOooOOoOOooOoOoNNNnnNn!!!!!"),alert("GAHGHAHGHAAAAAAAGAGAgggAaaAaAaaaaAaAaAAAh!!!!!")),console.log(t.chosenItems),console.log(t.state.stateChosenItems)},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"whole-spiel"},s.a.createElement("h1",{className:"h-element"},"Memory 2: Revelations"),s.a.createElement("hr",null),s.a.createElement("h2",{className:"h-element"},"By: Hunter Wilkins"),s.a.createElement("h3",{id:"score"},"~ Score: ",this.state.score," ~"),s.a.createElement("div",{id:"gallery"},this.state.imageArray.map(function(a){return s.a.createElement(h,{id:a.id,name:a.name,image:a.image,clickedImage:e.clickedImage})})))}}]),a}(s.a.Component);o.a.render(s.a.createElement(u,null),document.getElementById("root"))},2:function(e,a,t){},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.c59a9a0a.chunk.js.map