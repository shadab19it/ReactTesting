(this["webpackJsonpuseful-hooks"]=this["webpackJsonpuseful-hooks"]||[]).push([[0],{126:function(e,i,t){},148:function(e,i,t){},200:function(e,i,t){},201:function(e,i,t){},202:function(e,i,t){"use strict";t.r(i);var s=t(1),a=t(0),u=t.n(a),c=t(28),n=t.n(c),r=(t(126),function(e){e&&e instanceof Function&&t.e(5).then(t.bind(null,219)).then((function(i){var t=i.getCLS,s=i.getFID,a=i.getFCP,u=i.getLCP,c=i.getTTFB;t(e),s(e),a(e),u(e),c(e)}))}),o=t(33),m=t(9),l=(t(71),function(){var e=Object(m.f)(),i=function(i){return i===e.pathname?"active":"k"};return Object(s.jsx)("div",{className:"header",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(o.b,{to:"/main",className:"".concat(i("/main")),children:"Main"})}),Object(s.jsx)("li",{children:Object(s.jsx)(o.b,{to:"/pages/allposts",className:"".concat(i("/pages/allposts")),children:"All Posts"})}),Object(s.jsx)("li",{children:Object(s.jsx)(o.b,{to:"/pages/startbucks",className:"".concat(i("/pages/startbucks")),children:"Star Bugs"})}),Object(s.jsx)("li",{children:Object(s.jsx)(o.b,{to:"/pages/search-list",className:"".concat(i("/pages/search-list")),children:"Search-list"})}),Object(s.jsx)("li",{children:Object(s.jsx)(o.b,{to:"/pages/top-scroll-bar",className:"".concat(i("/pages/top-scroll-bar")),children:"Top Scroll bar"})}),Object(s.jsx)("li",{children:Object(s.jsx)(o.b,{to:"/pages/callback-memo",className:"".concat(i("/pages/callback-memo")),children:"CallbackMemo"})})]})})}),d=t(64),p=t.n(d),b=t(95),j=t(17),h=t(204),x=t(116),O=t(96),g=t.n(O),q=(t(148),function(){var e=Object(a.useState)([]),i=Object(j.a)(e,2),t=i[0],u=i[1],c=Object(a.useState)(!1),n=Object(j.a)(c,2),r=n[0],o=n[1],m=Object(a.useState)(1),l=Object(j.a)(m,2),d=l[0],O=l[1],q=Object(a.useState)(10),v=Object(j.a)(q,2),f=v[0],k=(v[1],function(){var e=Object(b.a)(p.a.mark((function e(){var i,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,g.a.get("https://jsonplaceholder.typicode.com/posts");case 4:i=e.sent,t=i.data,u(t),o(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}());Object(a.useEffect)((function(){k()}),[]);var N=d*f,C=N-f,L=t.slice(C,N);t.length;return Object(s.jsxs)("div",{className:"list-wrapper",children:[Object(s.jsx)("h1",{children:"All Posts"}),r?Object(s.jsx)("div",{children:"Loading..."}):Object(s.jsxs)("div",{children:[Object(s.jsx)(h.b,{size:"medium",bordered:!0,dataSource:L,renderItem:function(e){return Object(s.jsxs)(h.b.Item,{children:[e.id," : ",e.title]})}}),Object(s.jsx)("div",{className:"pagination",style:{marginTop:20},children:Object(s.jsx)(x.a,{onChange:function(e,i){O(e)},defaultCurrent:1,total:t.length})})]})]})}),v=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Page one"})})},f=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Page Two"})})},k=t.p+"static/media/logo.766153cb.png",N=t.p+"static/media/img1.8fc07f15.png",C=t.p+"static/media/img2.a33944e3.png",L=t.p+"static/media/img3.61b22f49.png",w=t.p+"static/media/thumb1.1e6ce44a.png",y=t.p+"static/media/thumb2.4436a39b.png",S=t.p+"static/media/thumb3.00b72d1c.png",E=(t(200),function(){var e=u.a.useState({buck:N,bgColor:"green"}),i=Object(j.a)(e,2),t=i[0],a=i[1];return Object(s.jsxs)("div",{className:"star-bugs-container",children:[Object(s.jsxs)("header",{children:[Object(s.jsx)("div",{className:"left-side",children:Object(s.jsx)("div",{className:"brand-logo",children:Object(s.jsx)("img",{src:k,alt:"brand-logo"})})}),Object(s.jsx)("div",{className:"right-side",children:Object(s.jsxs)("ul",{className:"nav",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#",children:"Menu"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#",children:"What's New"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#",children:"Contect"})})]})})]}),Object(s.jsx)("div",{className:"main-section",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-1 text-content",children:[Object(s.jsx)("h2",{children:"It's not just Coffee "}),Object(s.jsxs)("h2",{children:["It's ",Object(s.jsx)("span",{className:"brand-name",children:"Startbucks"})," "]}),Object(s.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque vero aliquid a porro fugit dolorem vitae hic numquam ad animi obcaecati placeat laboriosam est illo exercitationem consectetur, eveniet laudantium. Deserunt temporibus eos qui explicabo facilis veniam delectus ex aliquid ad."}),Object(s.jsx)("button",{className:"learn-btn",children:"LEARN MORE"})]}),Object(s.jsxs)("div",{className:"col-2 img-content",children:[Object(s.jsx)("div",{className:"img-buck",children:Object(s.jsx)("img",{src:t.buck,alt:""})}),Object(s.jsx)("div",{className:"social-icon"}),Object(s.jsx)("div",{className:"circle",style:{backgroundColor:"".concat(t.bgColor)}})]})]})}),Object(s.jsx)("footer",{children:Object(s.jsxs)("ul",{className:"thumbs",children:[Object(s.jsx)("li",{onClick:function(){return a({buck:N,bgColor:"green"})},children:Object(s.jsx)("img",{src:w,alt:""})}),Object(s.jsx)("li",{onClick:function(){return a({buck:C,bgColor:"#fcb1b1"})},children:Object(s.jsx)("img",{src:y,alt:""})}),Object(s.jsx)("li",{onClick:function(){return a({buck:L,bgColor:"pink"})},children:Object(s.jsx)("img",{src:S,alt:""})})]})})]})}),D=t(35),A=(t(201),[{category:"Sporting Goods",price:"$49.99",stocked:!0,name:"Football"},{category:"Sporting Goods",price:"$9.99",stocked:!1,name:"Baseball"},{category:"Sporting Goods",price:"$29.99",stocked:!1,name:"Basketball"},{category:"Electronics",price:"$99.99",stocked:!0,name:"iPod Touch"},{category:"Electronics",price:"$399.99",stocked:!1,name:"iPhone 5"},{category:"Electronics",price:"$199.99",stocked:!0,name:"Nexus 7"}]),P=function(e){var i=e.SearchQuery,t=e.onStockCheck;return Object(s.jsxs)("div",{className:"search-box",children:[Object(s.jsx)("input",{type:"text",onChange:i,className:"search-input",placeholder:"Search.."}),Object(s.jsxs)("div",{className:"fitler-opt",children:[Object(s.jsx)("input",{type:"checkbox",onChange:t})," ",Object(s.jsx)("span",{children:"Only show products in stock"})]})]})},T=function(e){var i=e.data;return Object(s.jsx)("div",{className:"search-result",children:Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{className:"list-item list-header",children:[Object(s.jsx)("div",{className:"title",children:"Name"}),Object(s.jsx)("div",{className:"title",children:"Price"})]}),Object(s.jsx)("li",{className:"list-header",children:"Sporting Goods"}),i.map((function(e,i){if("Sporting Goods"==e.category)return Object(s.jsxs)("li",{className:"list-item",children:[Object(s.jsx)("div",{children:e.name}),Object(s.jsx)("div",{children:e.price})]},i)})),Object(s.jsx)("li",{className:"list-header",children:"Electronics"}),i.map((function(e,i){if("Electronics"==e.category)return Object(s.jsxs)("li",{className:"list-item",children:[Object(s.jsx)("div",{children:e.name}),Object(s.jsx)("div",{children:e.price})]},i)}))]})})},I=function(){var e=u.a.useState({data:A,query:"",filterData:[]}),i=Object(j.a)(e,2),t=i[0],a=i[1];return Object(s.jsx)("div",{className:"search-wrapper",children:Object(s.jsxs)("div",{className:"search-list-box",children:[Object(s.jsx)("div",{className:"search-header",children:Object(s.jsx)(P,{SearchQuery:function(e){var i=e.target.value;a(Object(D.a)(Object(D.a)({},t),{},{query:i}));var s=A.filter((function(e,t){return-1!==e.name.toLowerCase().indexOf(i.toLowerCase())}));a(Object(D.a)(Object(D.a)({},t),{},{data:s}))},onStockCheck:function(e){if(!0===e.target.checked){var i=A.filter((function(i,t){return i.stocked===e.target.checked}));a(Object(D.a)(Object(D.a)({},t),{},{data:i}))}else a(Object(D.a)(Object(D.a)({},t),{},{data:A}))}})}),Object(s.jsx)("div",{className:"search-result",children:Object(s.jsx)(T,{data:t.data})})]})})};var M=function(){var e=Object(a.useState)("0"),i=Object(j.a)(e,2),t=i[0],u=i[1];return Object(a.useEffect)((function(){var e=function(){var e=window.document.body.scrollHeight-window.innerHeight,i=Math.round(window.scrollY/e*100);u(i)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)("div",{id:"top",style:{width:"".concat(t,"%")},className:"scrollIndicator"}),Object(s.jsx)("h2",{children:"Lorem ipsum dolor sit amet."}),Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate, nihil error fugiat voluptatum quae dicta, omnis illum et temporibus quas nam id suscipit quo velit rem saepe dolore quibusdam dignissimos eius. Cum harum, esse accusantium nobis minima illum explicabo sint, voluptas numquam laborum quidem blanditiis nam delectus deserunt cupiditate sunt iusto ad fugit voluptatem quas id unde ducimus. Eius dicta quasi quos maxime corporis similique earum excepturi et repellat, possimus harum pariatur quia perferendis modi tenetur, accusamus quibusdam? Amet illo odit omnis, magnam tempore, voluptatem placeat facere repellendus unde cum voluptates dolore quaerat iste quae nobis enim animi magni."}),Object(s.jsx)("h2",{children:"Lorem ipsum dolor sit amet."}),Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate, nihil error fugiat voluptatum quae dicta, omnis illum et temporibus quas nam id suscipit quo velit rem saepe dolore quibusdam dignissimos eius. Cum harum, esse accusantium nobis minima illum explicabo sint, voluptas numquam laborum quidem blanditiis nam delectus deserunt cupiditate sunt iusto ad fugit voluptatem quas id unde ducimus. Eius dicta quasi quos maxime corporis similique earum excepturi et repellat, possimus harum pariatur quia perferendis modi tenetur, accusamus quibusdam? Amet illo odit omnis, magnam tempore, voluptatem placeat facere repellendus unde cum voluptates dolore quaerat iste quae nobis enim animi magni."}),Object(s.jsx)("h2",{children:"Lorem ipsum dolor sit amet."}),Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate, nihil error fugiat voluptatum quae dicta, omnis illum et temporibus quas nam id suscipit quo velit rem saepe dolore quibusdam dignissimos eius. Cum harum, esse accusantium nobis minima illum explicabo sint, voluptas numquam laborum quidem blanditiis nam delectus deserunt cupiditate sunt iusto ad fugit voluptatem quas id unde ducimus. Eius dicta quasi quos maxime corporis similique earum excepturi et repellat, possimus harum pariatur quia perferendis modi tenetur, accusamus quibusdam? Amet illo odit omnis, magnam tempore, voluptatem placeat facere repellendus unde cum voluptates dolore quaerat iste quae nobis enim animi magni."}),Object(s.jsx)("h2",{children:"Lorem ipsum dolor sit amet."}),Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate, nihil error fugiat voluptatum quae dicta, omnis illum et temporibus quas nam id suscipit quo velit rem saepe dolore quibusdam dignissimos eius. Cum harum, esse accusantium nobis minima illum explicabo sint, voluptas numquam laborum quidem blanditiis nam delectus deserunt cupiditate sunt iusto ad fugit voluptatem quas id unde ducimus. Eius dicta quasi quos maxime corporis similique earum excepturi et repellat, possimus harum pariatur quia perferendis modi tenetur, accusamus quibusdam? Amet illo odit omnis, magnam tempore, voluptatem placeat facere repellendus unde cum voluptates dolore quaerat iste quae nobis enim animi magni."}),Object(s.jsx)("h2",{children:"Lorem ipsum dolor sit amet."}),Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate, nihil error fugiat voluptatum quae dicta, omnis illum et temporibus quas nam id suscipit quo velit rem saepe dolore quibusdam dignissimos eius. Cum harum, esse accusantium nobis minima illum explicabo sint, voluptas numquam laborum quidem blanditiis nam delectus deserunt cupiditate sunt iusto ad fugit voluptatem quas id unde ducimus. Eius dicta quasi quos maxime corporis similique earum excepturi et repellat, possimus harum pariatur quia perferendis modi tenetur, accusamus quibusdam? Amet illo odit omnis, magnam tempore, voluptatem placeat facere repellendus unde cum voluptates dolore quaerat iste quae nobis enim animi magni."}),Object(s.jsx)("h2",{children:"Lorem ipsum dolor sit amet."}),Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate, nihil error fugiat voluptatum quae dicta, omnis illum et temporibus quas nam id suscipit quo velit rem saepe dolore quibusdam dignissimos eius. Cum harum, esse accusantium nobis minima illum explicabo sint, voluptas numquam laborum quidem blanditiis nam delectus deserunt cupiditate sunt iusto ad fugit voluptatem quas id unde ducimus. Eius dicta quasi quos maxime corporis similique earum excepturi et repellat, possimus harum pariatur quia perferendis modi tenetur, accusamus quibusdam? Amet illo odit omnis, magnam tempore, voluptatem placeat facere repellendus unde cum voluptates dolore quaerat iste quae nobis enim animi magni."}),Object(s.jsx)("h2",{children:"Lorem ipsum dolor sit amet."}),Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate, nihil error fugiat voluptatum quae dicta, omnis illum et temporibus quas nam id suscipit quo velit rem saepe dolore quibusdam dignissimos eius. Cum harum, esse accusantium nobis minima illum explicabo sint, voluptas numquam laborum quidem blanditiis nam delectus deserunt cupiditate sunt iusto ad fugit voluptatem quas id unde ducimus. Eius dicta quasi quos maxime corporis similique earum excepturi et repellat, possimus harum pariatur quia perferendis modi tenetur, accusamus quibusdam? Amet illo odit omnis, magnam tempore, voluptatem placeat facere repellendus unde cum voluptates dolore quaerat iste quae nobis enim animi magni."}),Object(s.jsx)("h2",{children:"Lorem ipsum dolor sit amet."}),Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate, nihil error fugiat voluptatum quae dicta, omnis illum et temporibus quas nam id suscipit quo velit rem saepe dolore quibusdam dignissimos eius. Cum harum, esse accusantium nobis minima illum explicabo sint, voluptas numquam laborum quidem blanditiis nam delectus deserunt cupiditate sunt iusto ad fugit voluptatem quas id unde ducimus. Eius dicta quasi quos maxime corporis similique earum excepturi et repellat, possimus harum pariatur quia perferendis modi tenetur, accusamus quibusdam? Amet illo odit omnis, magnam tempore, voluptatem placeat facere repellendus unde cum voluptates dolore quaerat iste quae nobis enim animi magni."}),Object(s.jsx)("h2",{children:"Lorem ipsum dolor sit amet."}),Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate, nihil error fugiat voluptatum quae dicta, omnis illum et temporibus quas nam id suscipit quo velit rem saepe dolore quibusdam dignissimos eius. Cum harum, esse accusantium nobis minima illum explicabo sint, voluptas numquam laborum quidem blanditiis nam delectus deserunt cupiditate sunt iusto ad fugit voluptatem quas id unde ducimus. Eius dicta quasi quos maxime corporis similique earum excepturi et repellat, possimus harum pariatur quia perferendis modi tenetur, accusamus quibusdam? Amet illo odit omnis, magnam tempore, voluptatem placeat facere repellendus unde cum voluptates dolore quaerat iste quae nobis enim animi magni."}),Object(s.jsx)("h2",{children:"Lorem ipsum dolor sit amet."}),Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate, nihil error fugiat voluptatum quae dicta, omnis illum et temporibus quas nam id suscipit quo velit rem saepe dolore quibusdam dignissimos eius. Cum harum, esse accusantium nobis minima illum explicabo sint, voluptas numquam laborum quidem blanditiis nam delectus deserunt cupiditate sunt iusto ad fugit voluptatem quas id unde ducimus. Eius dicta quasi quos maxime corporis similique earum excepturi et repellat, possimus harum pariatur quia perferendis modi tenetur, accusamus quibusdam? Amet illo odit omnis, magnam tempore, voluptatem placeat facere repellendus unde cum voluptates dolore quaerat iste quae nobis enim animi magni."})]})},$=function(e){var i=e.btnText,t=e.onClick;return console.log("render 1"),Object(s.jsx)("div",{children:Object(s.jsx)("button",{onClick:t,children:i})})},B=u.a.memo($),F=function(){var e=u.a.useState(0),i=Object(j.a)(e,2),t=i[0],a=i[1],c=u.a.useCallback((function(){a((function(e){return e+1}))}),[a]),n=u.a.useCallback((function(){a((function(e){return e-1}))}),[a]);return Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",paddingTop:"100px",alignItems:"center"},children:[Object(s.jsx)(B,{btnText:"Increment",onClick:c}),Object(s.jsx)("h3",{children:t}),Object(s.jsx)(B,{btnText:"Decerement",onClick:n})]})};var G=u.a.lazy((function(){return function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return new Promise((function(t){setTimeout((function(){return t(e)}),i)}))}(Promise.all([t.e(3),t.e(4)]).then(t.bind(null,220)),2e3)})),H=function(){return Object(s.jsx)(o.a,{children:Object(s.jsxs)("div",{className:"app-wrapper",children:[Object(s.jsx)(l,{}),Object(s.jsxs)(m.c,{children:[Object(s.jsx)(m.a,{exact:!0,path:"/main",render:function(){return Object(s.jsx)(a.Suspense,{fallback:Object(s.jsx)("div",{children:"Loadding..."}),children:Object(s.jsx)(G,{})})}}),Object(s.jsx)(m.a,{exact:!0,path:"/",component:v}),Object(s.jsx)(m.a,{exact:!0,path:"/pages/two",component:f}),Object(s.jsx)(m.a,{exact:!0,path:"/pages/allposts",component:q}),Object(s.jsx)(m.a,{exact:!0,path:"/pages/startbucks",component:E}),Object(s.jsx)(m.a,{exact:!0,path:"/pages/search-list",component:I}),Object(s.jsx)(m.a,{exact:!0,path:"/pages/top-scroll-bar",component:M}),Object(s.jsx)(m.a,{exact:!0,path:"/pages/callback-memo",component:F})]})]})})};n.a.render(Object(s.jsx)(u.a.StrictMode,{children:Object(s.jsx)(H,{})}),document.getElementById("root")),r()},71:function(e,i,t){}},[[202,1,2]]]);
//# sourceMappingURL=main.0d3d074b.chunk.js.map