(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,s){e.exports={card:"Pokecard_card__1Yy2u",side:"Pokecard_side__2zNEa",back:"Pokecard_back__1IaV4",frontStyles:"Pokecard_frontStyles__8QBJB",backStyles:"Pokecard_backStyles__1gvT5",backImg:"Pokecard_backImg__3Egdn",imgBox:"Pokecard_imgBox__VX2Xh",img:"Pokecard_img__qj-w2",id:"Pokecard_id___KM7J",fire:"Pokecard_fire__3A83o",darkFire:"Pokecard_darkFire__2Ivpd",fireDragon:"Pokecard_fireDragon__1T3Lj",poisonFire:"Pokecard_poisonFire__2QhjN",fireWater:"Pokecard_fireWater__1oaCN",grass:"Pokecard_grass__3dEDe",grassPoison:"Pokecard_grassPoison__32hag",psyGrass:"Pokecard_psyGrass__1MNfF",poison:"Pokecard_poison__1ZyLF",water:"Pokecard_water__248E8",ghost:"Pokecard_ghost__2FlBw",bug:"Pokecard_bug__1QmlZ",ice:"Pokecard_ice__33hPY",electric:"Pokecard_electric__22Cc_",ground:"Pokecard_ground__1vpOp",normal:"Pokecard_normal__1i2LZ",waterGrass:"Pokecard_waterGrass__3yaI5",dark:"Pokecard_dark__uvs64",steel:"Pokecard_steel__26KXP",details:"Pokecard_details__2WWlt",name:"Pokecard_name__3WHI5",ability:"Pokecard_ability__1tDKs"}},,,,,,,,function(e,t,s){e.exports=s(21)},,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){e.exports=s.p+"static/media/poke.7d7a6aa3.csv"},,function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(0),i=s.n(a),r=s(8),o=s.n(r),n=(s(14),s(2)),l=(s(15),s(3)),c=s(4),p=s(6),h=s(5),m=s(1),u=s.n(m),d=function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={frontStyles:"",backStyles:u.a.back},e.changeClass=function(){e.setState({frontStyles:u.a.frontStyles,backStyles:u.a.backStyles}),setTimeout(function(){e.song.play()},400),setTimeout(function(){e.setState({frontStyles:"",backStyles:u.a.back})},1e3)},e}return Object(c.a)(s,[{key:"shouldComponentUpdate",value:function(e,t){return this.state!==e||this.props!==t}},{key:"render",value:function(){var e=this,t="";return"Fire"===this.props.abilities||"Fire Flying"===this.props.abilities||"Fire Rock"===this.props.abilities||"Fire Fighting"===this.props.abilities||"Fire Ground"===this.props.abilities||"Fire Steel"===this.props.abilities||"Fire Psychic"===this.props.abilities||"Psychic Fire"===this.props.abilities||"Fire Normal"===this.props.abilities||"Bug Fire"===this.props.abilities?t=u.a.fire:"Dark Fire"===this.props.abilities||"Ghost Fire"===this.props.abilities||"Fire Ghost"===this.props.abilities||"Fire Dark"===this.props.abilities?t=u.a.darkFire:"Fire Dragon"===this.props.abilities||"Dragon Fire"===this.props.abilities?t=u.a.fireDragon:"Poison Fire"===this.props.abilities?t=u.a.poisonFire:"Fire Water"===this.props.abilities?t=u.a.fireWater:"Grass"===this.props.abilities||"Bug Grass"===this.props.abilities||"Grass Flying"===this.props.abilities||"Grass Fighting"===this.props.abilities||"Rock Grass"===this.props.abilities||"Grass Fairy"===this.props.abilities||"Normal Grass"===this.props.abilities?t=u.a.grass:"Grass Poison"===this.props.abilities||"Grass Dark"===this.props.abilities?t=u.a.grassPoison:"Grass Psychic"===this.props.abilities||"Psychic Grass"===this.props.abilities?t=u.a.psyGrass:"Poison"===this.props.abilities||"Bug Poison"===this.props.abilities||"Water Poison"===this.props.abilities||"Poison Water"===this.props.abilities||"Poison Ground"===this.props.abilities||"Poison Flying"===this.props.abilities||"Poison Fighting"===this.props.abilities||"Poison Bug"===this.props.abilities||"Poison Dragon"===this.props.abilities||"Rock Poison"===this.props.abilities?t=u.a.poison:"Water"===this.props.abilities||"Water Dragon"===this.props.abilities||"Water Psychic"===this.props.abilities||"Water Fighting"===this.props.abilities||"Water Flying"===this.props.abilities||"Rock Water"===this.props.abilities||"Water Fairy"===this.props.abilities||"Water Ground"===this.props.abilities||"Water Rock"===this.props.abilities||"Bug Water"===this.props.abilities||"Water Bug"===this.props.abilities?t=u.a.water:"Bug"===this.props.abilities?t=u.a.bug:"Ice"===this.props.abilities||"Water Ice"===this.props.abilities||"Ice Flying"===this.props.abilities||"Fighting Ice"===this.props.abilities||"Rock Ice"===this.props.abilities||"Dragon Ice"===this.props.abilities||"Dark Ice"===this.props.abilities||"Grass Ice"===this.props.abilities||"Ice Ground"===this.props.abilities||"Ice Water"===this.props.abilities?t=u.a.ice:"Electric"===this.props.abilities||"Water Electric"===this.props.abilities?t=u.a.electric:"Ground"===this.props.abilities||"Rock Ground"===this.props.abilities||"Ground Rock"===this.props.abilities?t=u.a.ground:"Normal"===this.props.abilities||"Normal Flying"===this.props.abilities||"Normal Fairy"===this.props.abilities?t=u.a.normal:"Water Grass"===this.props.abilities?t=u.a.waterGrass:"Dark"===this.props.abilities||"Dark Flying"===this.props.abilities||"Rock Dark"===this.props.abilities||"Water Dark"===this.props.abilities?t=u.a.dark:"Ghost"===this.props.abilities||"Ghost Grass"===this.props.abilities||"Grass Ghost"===this.props.abilities||"Water Ghost"===this.props.abilities||"Ghost Poison"===this.props.abilities||"Poison Dark"===this.props.abilities?t=u.a.ghost:"Steel"!==this.props.abilities&&"Grass Steel"!==this.props.abilities&&"Water Steel"!==this.props.abilities||(t=u.a.steel),i.a.createElement("div",{className:u.a.card},i.a.createElement("div",{className:u.a.side+" "+this.state.frontStyles,onClick:function(){return e.changeClass(e.props.id)}},i.a.createElement("div",{className:u.a.imgBox+" "+t},i.a.createElement("img",{className:u.a.img,src:this.props.imgSrc,alt:"notfound"}),i.a.createElement("p",{className:u.a.id},this.props.id)),i.a.createElement("div",{className:u.a.details},i.a.createElement("h3",{className:u.a.name},this.props.name),i.a.createElement("p",{className:u.a.ability},this.props.abilities),i.a.createElement("audio",{ref:function(t){e.song=t},preload:"true"},i.a.createElement("source",{src:"/sounds/"+this.props.id.slice(1,4)+".wav",type:"audio/Wav"})))),i.a.createElement("div",{className:u.a.side+" "+t+" "+this.state.backStyles},i.a.createElement("img",{className:u.a.backImg,src:this.props.imgSrc,alt:"notfound"})))}}]),s}(a.Component),g=(s(16),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={data:[]},e}return Object(c.a)(a,[{key:"componentWillMount",value:function(){var e=this,t=s(17);s(18).parse(t,{header:!0,download:!0,skipEmptyLines:!0,complete:function(t){return e.setState({data:t.data})}})}},{key:"shouldComponentUpdate",value:function(e,t){return this.state!==e||this.props!==t}},{key:"render",value:function(){var e=this,t="",s="",a=[],r=[],o=this.state.data;1===this.props.gen?o=o.slice(0,151):2===this.props.gen?o=o.slice(151,251):3===this.props.gen?o=o.slice(251,386):4===this.props.gen?o=o.slice(386,493):5===this.props.gen?o=o.slice(493,649):6===this.props.gen?o=o.slice(649,721):7===this.props.gen&&(o=o.slice(721,809)),a=this.props.showGen?o.map(function(e){return i.a.createElement(d,{imgSrc:e.ImgSrc,name:e.Name,id:e.ID,key:e.ID,abilities:e.Abilities})}):this.props.showType?(s=this.state.data.filter(function(t){return-1!==t.Abilities.toLowerCase().indexOf(e.props.type.toLowerCase())})).map(function(e){return i.a.createElement(d,{imgSrc:e.ImgSrc,name:e.Name,id:e.ID,key:e.ID,abilities:e.Abilities})}):""!==this.props.searchItem?(t=this.state.data.filter(function(t){return-1!==t.Name.toLowerCase().indexOf(e.props.searchItem.toLowerCase())||-1!==t.Abilities.toLowerCase().indexOf(e.props.searchItem.toLowerCase())||-1!==t.ID.indexOf(e.state.searchItem)})).map(function(e){return i.a.createElement(d,{imgSrc:e.ImgSrc,name:e.Name,id:e.ID,key:e.ID,abilities:e.Abilities})}):this.state.data.map(function(e){return i.a.createElement(d,{imgSrc:e.ImgSrc,name:e.Name,id:e.ID,key:e.ID,abilities:e.Abilities})});for(var n=this.props.start;n<this.props.end;n++)r.push(a[n]);return this.props.setNoOfPosts(this.props.showGen?o.length:this.props.showType?s.length:""!==this.props.searchItem?t.length:809),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"pokecardsdiv"},this.props.children,i.a.createElement("div",{className:"pokecards"},r)))}}]),a}(a.Component)),b=function(e){return i.a.createElement("div",{className:"toggle",onClick:function(){return e.setToggleStatus(!e.toggleStatus)}},i.a.createElement("div",{className:"toggleLi"}),i.a.createElement("div",{className:"toggleLi"}),i.a.createElement("div",{className:"toggleLi"}))},k=function(e){var t=e.setToggleStatus,s=e.toggleStatus,a=e.searchItem,r=e.searchInputHandler,o=e.setShowGenStatus,n=e.setShowTypeStatus,l=e.setCurrentPage;return i.a.createElement("div",{className:""},i.a.createElement(b,{setToggleStatus:t,toggleStatus:s}),i.a.createElement("h1",{className:"header"},"Welcome to the National Pokedex"),i.a.createElement("div",{className:"searchbarDiv"},i.a.createElement("input",{className:"searchbar",value:a,onChange:function(e){r(e.target.value),l(1),o(!1),n(!1)},type:"text",placeholder:"Search"})))},_=(s(19),function(e){for(var t=e.postsPerPage,s=e.totalPosts,a=e.setCurrentPage,r=[],o=1;o<=Math.ceil(s/t);o++)r.push(o);return i.a.createElement("footer",{className:"footer"},r.map(function(e){return i.a.createElement("li",{key:e,onClick:function(){return a(e)},className:"footerli"},e)}))}),y=(s(20),function(e){var t=e.toggleStatus,s=e.setToggleStatus,a=e.setShowGenStatus,r=e.setGen,o=e.setShowTypeStatus,n=e.setType,l=e.setCurrentPage,c=e.searchInputHandler;return i.a.createElement("aside",{className:t?"sideDrawer open":"sideDrawer"},i.a.createElement("h3",{className:"sideDrawer-Heading"},"Pokemon Generations"),i.a.createElement("div",{className:"sideDrawer-generations"},[{name:"I",num:1},{name:"II",num:2},{name:"III",num:3},{name:"IV",num:4},{name:"V",num:5},{name:"VI",num:6},{name:"VII",num:7},{name:"All",num:""}].map(function(e){return i.a.createElement("li",{className:"side-gens",key:Math.random(),onClick:function(){l(1),s(!1),o(!1),a(!0),r(e.num),c("")}},e.name)})),i.a.createElement("h3",{className:"sideDrawer-Heading"},"Types"),i.a.createElement("div",{className:"sideDrawer-types"},["Grass","Fire","Water","Poison","Flying","Ground","Bug","Ghost","Normal","Electric","Fairy","Fighting","Psychic","Rock","Steel","Ice","Dragon","Dark"].map(function(e){return i.a.createElement("li",{key:e,className:"side-pills pill"+e,onClick:function(){l(1),s(!1),a(!1),o(!0),n(e),c("")}},e)})))}),f=function(e){var t=e.setShowTypeStatus,s=e.setShowGenStatus,a=e.setGen,r=e.setType,o=e.searchInputHandler,n=e.setCurrentPage;return i.a.createElement("aside",{className:"sidebar"},i.a.createElement("h3",{className:"sideHeading"},"Pokemon Generations"),i.a.createElement("div",{className:"generations"},[{name:"I",num:1},{name:"II",num:2},{name:"III",num:3},{name:"IV",num:4},{name:"V",num:5},{name:"VI",num:6},{name:"VII",num:7},{name:"All",num:""}].map(function(e){return i.a.createElement("li",{className:"gens",key:Math.random(),onClick:function(){n(1),t(!1),o(""),s(!0),a(e.num)}},e.name)})),i.a.createElement("h3",{className:"sideHeading"},"Types"),i.a.createElement("div",{className:"types"},["Grass","Fire","Water","Poison","Flying","Ground","Bug","Ghost","Normal","Electric","Fairy","Fighting","Psychic","Rock","Steel","Ice","Dragon","Dark"].map(function(e){return i.a.createElement("li",{key:Math.random(),className:"pills pill".concat(e),onClick:function(){n(1),s(!1),t(!0),r(e),o("")}},e)})))},P=function(){var e=Object(a.useState)(1),t=Object(n.a)(e,2),s=t[0],r=t[1],o=Object(a.useState)(50),l=Object(n.a)(o,1)[0],c=Object(a.useState)(809),p=Object(n.a)(c,2),h=p[0],m=p[1],u=s*l,d=u-l,b=Object(a.useState)(!1),P=Object(n.a)(b,2),S=P[0],I=P[1],E=Object(a.useState)(""),G=Object(n.a)(E,2),w=G[0],N=G[1],v=Object(a.useState)(!1),F=Object(n.a)(v,2),D=F[0],W=F[1],O=Object(a.useState)(!1),C=Object(n.a)(O,2),j=C[0],T=C[1],B=Object(a.useState)(),L=Object(n.a)(B,2),x=L[0],A=L[1],H=Object(a.useState)(),R=Object(n.a)(H,2),V=R[0],M=R[1];return i.a.createElement("div",{className:"App"},i.a.createElement(k,{setToggleStatus:I,toggleStatus:S,searchItem:w,searchInputHandler:N,setShowTypeStatus:W,setShowGenStatus:T,setCurrentPage:r}),i.a.createElement(y,{toggleStatus:S,setToggleStatus:I,showType:D,setShowTypeStatus:W,showGen:j,setShowGenStatus:T,setGen:A,setType:M,setCurrentPage:r,searchInputHandler:N}),i.a.createElement(g,{start:d,end:u,setNoOfPosts:function(e){return m(e)},resetCurrentPage:function(){return r(1)},searchItem:w,gen:x,showGen:j,type:V,showType:D},i.a.createElement(f,{setShowTypeStatus:W,setShowGenStatus:T,setGen:A,setType:M,searchInputHandler:N,setCurrentPage:r})),i.a.createElement(_,{postsPerPage:l,totalPosts:h,setCurrentPage:r}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.c6e82c6b.chunk.js.map