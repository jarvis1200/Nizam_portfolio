(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{143:function(e,t,s){},407:function(e,t,s){},408:function(e,t,s){},410:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s(2),c=s.n(i),n=s(46),r=s.n(n),o=(s(143),s(39));var l=function(e){return Object(a.jsx)("div",{id:e.load?"preloader":"preloader-none"})},j=s(51),d=s(31),h=s(126),b=s(38),m=s(26),p=s(64);var u=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),s=t[0],c=t[1],n=Object(i.useState)(!1),r=Object(o.a)(n,2),l=r[0],u=r[1];return window.addEventListener("scroll",(function(){window.scrollY>=20?u(!0):u(!1)})),Object(a.jsx)(j.a,{expanded:s,fixed:"top",expand:"md",className:l?"sticky":"navbar",children:Object(a.jsxs)(h.a,{children:[Object(a.jsx)(j.a.Brand,{href:"/",children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVoAAAChCAYAAACGc3cYAAAL/klEQVR42u3d3Y9V1RnH8XV4KaCIgrwoAkqtFWqDGrAJYiPR2rQJDW16QdKkTavxxpj0pn9EL7zQ1LQXxl5oYiPlwiaaQlr7EpC0wBgYUSTlZQojDIUMMgwjgrD7e7oXyWQYYD+ns2fWPuv7SVb2YLKOZ6/Z5zf77L32s6bsfrEIAID6TGEIAICgBQCCFgBA0AIAQQsABC0AgKAFAIIWAAhaAABBCwAELQCAoAUAghYACFoAAEELAAQtABC0AACCFgAIWgAgaIGKiqKYr80ctUmObgOtVqs3s3G6U5vZzm7ZjRNBC4wesk+rrVGb5ujarb6vKkT2ZTJOi7R5Tm2Vs2tW40TQAqOzM9k1CoJ1zuCZp80WtVwCxPZ3rcZpNeMEghZek5xnsldMd15qaLrJcZ8ZJxC0AEDQAgBBCwAgaAGAoAUAghYAQNACAEELAAQtAICgBQCCFh1vUG1/URR3B98jph+o9Wc0TmfU9mqcbnf2y22cCFpgpFardUTh8bp+3BbK5/mrOq72UUZDdVjtFbXNzn65jRNBC1wjbHcobN939vkiszGy/d2qcZrCOIGghZvCY7k2Vm91kqPPKW26FSQXMxqnB7W5w9knu3EiaIGrg8AC9hm1J4PvGu1OtZfUujIZp3u1eV7tMWfXrMaJoAVGN0tthc64HnIGj23mZjROtoTNSo3TMsYJBC2AsTyTv0Wbm5zdBvUH6RxBCwA3DtnF2nxf7X5n1w/V902FbcdPayNoAfy/vqz2Q7VvOvv9KZTTBQlaALgBuzm6QGemrjXP4srK03IYoGyCVr/Ue4L/ZsNpHTwH+RwBIGirhewv1B51du1S35cVtns4VAAQtNdnZ7KPKjAfdgb0DG02qRG0AAhaACBoAYCgBQAQtABA0KKDXVb7vI1+52PfXFyK+8w4gaCFmz29814sfuKZZN6t1pvROJ1U+5vGadDZL7dxImiBkVqt1n8UHr/Vj28FRz1aGVDf3ozGqVfj9KtQVvEKjBMIWrRztjZkeeL8SnwVhZGdFX/J85VcQTTUoHHyntGeb/BxYft6JNYs9jgajyeCFojBaM+zf1ftAbWpjq6H1HezQvLEsNf6mjaPB98qBGfUb6deZ2vi42TlAr8X/JWsrhqnBjmg9obaP5z99sewJWiBaKHaerV1wXeNdnv8IA4PkJVqP1Nb7nidPrWZCqO9CqPTCY+TlQzcoPaEs99o49QI9sdBvxcL2unOrp/lslYaQYuq7EO0UB8M1zLa+gAusYAc9m875m5TW6rXmul4HSvFN995uWEiWPHrxZ59G22cGhi2ttYZ651lHrS28N32eMfcoyueSQEYB/qMztHmLue3JrvOe1Rhf5agndi/tj36Bb4QKJMIpByyN4fyssv6+O2lKrvO+6b6b0z1UkQ2lw4sbLXp4XAGkmWXTuxm61OeIuIK2Pu02a1m1faSPKtNPmjj3W7PXe4mTQMCkIGkg1Yhu0qb1c6v/I2YBgSAoE3lTNZC9lm1pY6uTZkGBICgnXBT45lsp04DAkDQAgAIWgAgaAEABC2quqB2qiiKc6Gcr1iVPbs/vDKVFca2ak/H4lNAVR1Ts5ubqT8bb8XRraSkt4j3yHECQYsMWRBsDuWsDs+NRqvQdOjKP1qtljKosCLXv1PzlNWzkH0vblP2idofQlkgJrQ7TiBokSF7jtwecYxh66lHOzTyGXT9u0uvZY82e55ntzNZeyT6cuLj1K99ey34C8QMpfysPghajF+InB+rr7d6rU87eJzs8so5jhgQtHDTmZrNT7brqsksZaP3dGdIbNmYFN9TQ9ij83YJZavGcIGj35FQXnZJ9ho3QQtPyD6ttsb5lb9bfV9ViOyr4T3ZNd7n1FY5u2b1nhr0TcAuT9madHYN31NE3G6uHog1cQlaNJqdya7RwbzOGTzztNmiVkeA2Guv1XtazXvqmLC1kocdt7xNykFr04DOqPXFx2qraso0oKaZ5DyTvWK681KDx+TgXz4lx/eU8zcxV8bVVc822aC1UodWhSuUd289RYCbMg0IQH0Ba9fI1wbfFELrd1ibP8cbv3lcOrBSh1aFK/jmbTZiGhCAWi0L5QKgq539/hrKOdAfZxO0MWw5MwXgNUvtPuWHa/kqndh9JdSwSGYtQcv0FgCoMWiZ3gIA9Z/RMr0FAGoOWqa3AEDNQQsAIGgBgKAFAIIW2RkI5cwQu2npuQZvT/edquk92Rxrq207w9kvt/cEghZNYHOcbfpdKGeGeG5aWnh01/SeDuo9vawfNzm7ZvWeQNCiWWFrU+/2Jfae9mizh/cEghYAxpctJnqmjX7WZ8zr2hK0qExfib+hzdJQzpWu6rjajri8S8r7do82Xw/lM/JV2T7t1759POx17DNlD+ssdr6FRoxTg9iqC+/Ealweu0O5AClBiwkJoiXa/Fjt28F3M+yfoayAvzPhfbPqcN9S+4na3Y6u9oHcqP7HFJAD8b/ZH6Jn1R53vo3kx6lJ4rXy3wR/gRirudJP0GKi2AF7vw7CrzpDzNaBmpP4vk2LZ6APa/9mOvZtUQxGm2FwJWhvtTNjvc6SDhynpoWt3WBMYiZHHUFr1zj26sC53dnvA7V+Dg8g629O9kdvnjObPlc7WdfqCKkGrV0TeUVts7OfXaP6iEMNyDZkp2pja9I94Ty774t5syWboI1/VbZy2ABwsssudsN1g3Kk8jdiBbTVsba1BbelejORa7QAUmGzWW4O/kUDblO7KSRc/S/poB2rKTcAQNCOHrJjOeUGAAjaUYzllBsAIGgBgKAFABC0AEDQoslsfvTZQlri6GdPCl5IfN8uq9kjsJ8G37PxVuTbZrlcGvbfLob2q0Zd4DAjaJG3k2p/URuMM0Kqsqf9jqS8YzbJXftkVZs2aXuHo6s9Mr5jRLD+7yklvY63AlTy4wSCFvWH0WmFx+v68W37p6PrYCzukbp3Q7nCwTTnWb49Y39x2Did0DjZI+iznP//powTCFrUHLY2XW6gQ/fNQvP4GL1Wf6BAEghatENnanaWNrtDz2jHcpzmcEbbls9CWZRql/MSzr/VjoayihdBi0aHhwXsj0JZ9MN1jVZ937BCzJmM0wJtfqr2kLNrVuN0rW9MGoN39OOBUNY8qMq+Ze1V/2RvJhK0qMpqhFr5uh94Zh3og2MrB2xTyyVA7EzsOxqitc6Azm2crhW2VqOk4+qUpBy0RSinytjXAc+UG/v6cSH2x9geK7c4p3aZW51nwE03Ne5zYJzQhKC1+Ykfqr2tv/YLHf3sOtfuQJ0DYHzOiMqC3SvU5jq79sWl2QnaCfwKYXPj/6gf7RfhWQzQzmZPqP95PgLAuLCQ/bnaI85+2/QZ/2UO16WTvkYbw/IQxzGQNDuTfUSf12XOM2G7zDc7hwHK5maYfql2F9O79PCQDp6zfI4AELQ3Dlmb17hB7QFn1/3q+5bC9iiHCgCC9vruUluv9pSzny0yaY9lErQACNobsOfX5+vM1LV4W5x8Pp3DBABBCwAELQAQtAAAghYTzFYgOFwUhd0YnOHo96+Q11N6g2oHNE6Lnf1yGyeCFhjFJ2obQ/mk3mRHv97QgUVCrqNH7bVQzlgJjBMIWlQWVxF4V2dqf3f2+yKzcbKnGa0+xxTGCQQt2g0SAoFxGskWt2yntoj1uUTQAsPoLG25NovUPPORrZpa9/B1tTIYpwdDWZc2ZDJOvfHbzklnv12hXPSToAVieFjAPqP2ZPA9xLFT7SW1rkzG6V5tnld7zNm1seOkPw77tN8vBv/yPafV93gOxwVBi6rsQ7RCHwzXEi36ANpmbkbjZNWoVrZRyarR46T97eUjQtAy5QYAQVuznsCUGwAEba1fa5hyA4CgHafAJTgBELQAQNACAAhaACBoAYCgBQAQtABA0AIACFp4nFbbVRTFzOArKmNFUvoyGierwrU91i4IjBMIWlRmVZYUHr/Wj78PvhUWrELTwYzGqUfj9ELwF4jJapwIWuDaIWK1H6jSVCFsQ1lfAyBoAYCgBQCCFgBA0AIAQQsABC0AgKAFAIIWAAhaAABBCwAELQCAoAUAghYACFoAAEELAAQtABC0AACCFgAIWgCA+S8mFQs0T+QCfgAAAABJRU5ErkJggg==",className:"img-fluid logo",alt:"brand"})}),Object(a.jsxs)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){c(!s&&"expanded")},children:[Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{})]}),Object(a.jsx)(j.a.Collapse,{id:"responsive-navbar-nav",children:Object(a.jsxs)(d.a,{className:"ml-auto",defaultActiveKey:"#home",children:[Object(a.jsx)(d.a.Item,{children:Object(a.jsxs)(d.a.Link,{as:b.b,to:"/",onClick:function(){return c(!1)},children:[Object(a.jsx)(m.d,{style:{marginBottom:"2px"}})," Home"]})}),Object(a.jsx)(d.a.Item,{children:Object(a.jsxs)(d.a.Link,{as:b.b,to:"/about",onClick:function(){return c(!1)},children:[Object(a.jsx)(m.e,{style:{marginBottom:"2px"}})," About"]})}),Object(a.jsx)(d.a.Item,{children:Object(a.jsxs)(d.a.Link,{as:b.b,to:"/project",onClick:function(){return c(!1)},children:[Object(a.jsx)(m.c,{style:{marginBottom:"2px"}})," ","Projects"]})}),Object(a.jsx)(d.a.Item,{children:Object(a.jsxs)(d.a.Link,{as:b.b,to:"/resume",onClick:function(){return c(!1)},children:[Object(a.jsx)(p.b,{style:{marginBottom:"2px"}})," Resume"]})})]})})]})})},x=s(412),O=s(413),g=s.p+"static/media/home_img2.1a8ba02f.png",f=s(128),A=s.n(f);var N=function(){return Object(a.jsx)(A.a,{params:{particles:{number:{value:160,density:{enable:!0,value_area:1500}},line_linked:{enable:!1,opacity:.03},move:{direction:"right",speed:.05},size:{value:1},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}},interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0}})},v=s.p+"static/media/avatar.7f806e40.svg",y=s(129),C=s(65);var w=function(){return Object(a.jsx)(h.a,{fluid:!0,className:"home-about-section",id:"about",children:Object(a.jsxs)(h.a,{children:[Object(a.jsxs)(x.a,{children:[Object(a.jsxs)(O.a,{md:8,className:"home-about-description",children:[Object(a.jsxs)("h1",{style:{fontSize:"2.6em"},children:["LET ME ",Object(a.jsx)("span",{className:"purple",children:" INTRODUCE "})," MYSELF"]}),Object(a.jsxs)("p",{className:"home-about-body",children:["I fell in love with programming and I have at least learnt something, I think\u2026 \ud83e\udd37\u200d\u2642\ufe0f",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"I am fluent in classics like",Object(a.jsx)("i",{children:Object(a.jsx)("b",{className:"purple",children:" Python, C, C++ and Dart. "})}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"My field of Interest's are building new \xa0",Object(a.jsxs)("i",{children:[Object(a.jsx)("b",{className:"purple",children:"Machine learning Technologies and Products "})," and also in areas related to"," ",Object(a.jsx)("b",{className:"purple",children:"App development and Computer Vision."})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Whenever possible, I also apply my passion for developing products with ",Object(a.jsx)("b",{className:"purple",children:"Flutter"})," and",Object(a.jsx)("i",{children:Object(a.jsxs)("b",{className:"purple",children:[" ","Modern ML Library and Frameworks"]})}),"\xa0 like",Object(a.jsx)("i",{children:Object(a.jsx)("b",{className:"purple",children:" Tensorflow and Pytorch"})})]})]}),Object(a.jsx)(O.a,{md:4,className:"myAvtar",children:Object(a.jsx)(y.a,{children:Object(a.jsx)("img",{src:v,className:"img-fluid",alt:"avatar"})})})]}),Object(a.jsx)(x.a,{children:Object(a.jsxs)(O.a,{md:12,className:"home-about-social",children:[Object(a.jsx)("h1",{children:"FIND ME ON"}),Object(a.jsxs)("p",{children:["Feel free to ",Object(a.jsx)("span",{className:"purple",children:"connect "}),"with me"]}),Object(a.jsxs)("ul",{className:"home-about-social-links",children:[Object(a.jsx)("li",{className:"social-icons",children:Object(a.jsx)("a",{href:"https://github.com/jarvis1200",target:"_blank",rel:"noreferrer",className:"icon-colour  home-social-icons",children:Object(a.jsx)(m.a,{})})}),Object(a.jsx)("li",{className:"social-icons",children:Object(a.jsx)("a",{href:"https://www.linkedin.com/in/nizamsview/",target:"_blank",rel:"noreferrer",className:"icon-colour  home-social-icons",children:Object(a.jsx)(C.a,{})})})]})]})})]})})},k=s(130),B=s.n(k);var T=function(){return Object(a.jsx)(B.a,{options:{strings:["Developer","Computer Vision Engineer","Flutter Developer","Machine Learning Engineer","Open Source Contributor"],autoStart:!0,loop:!0,deleteSpeed:70}})};var I=function(){return Object(a.jsxs)("section",{children:[Object(a.jsxs)(h.a,{fluid:!0,className:"home-section",id:"home",children:[Object(a.jsx)(N,{}),Object(a.jsx)(h.a,{className:"home-content",children:Object(a.jsxs)(x.a,{children:[Object(a.jsxs)(O.a,{md:7,className:"home-header",children:[Object(a.jsxs)("h1",{style:{paddingBottom:15},className:"heading",children:["Hi There! ",Object(a.jsx)("span",{className:"wave",role:"img","aria-labelledby":"wave",children:"\ud83d\udc4b\ud83c\udffb"})]}),Object(a.jsxs)("h1",{className:"heading-name",children:["I'M",Object(a.jsx)("strong",{className:"main-name",children:" Nizamudeen"})]}),Object(a.jsx)("div",{style:{padding:50,textAlign:"left"},children:Object(a.jsx)(T,{})})]}),Object(a.jsx)(O.a,{md:5,style:{paddingBottom:20},children:Object(a.jsx)("img",{src:g,alt:"home pic",className:"img-fluid"})})]})})]}),Object(a.jsx)(w,{})]})},Q=s(137);var P=function(){return Object(a.jsxs)(x.a,{style:{justifyContent:"center",paddingBottom:"10px"},children:[Object(a.jsxs)("h1",{className:"project-heading",style:{paddingBottom:"20px"},children:["Days I ",Object(a.jsx)("strong",{className:"purple",children:"Code"})]}),Object(a.jsx)(Q.a,{username:"jarvis1200",blockSize:15,blockMargin:5,theme:{background:"transparent",text:"#ffffff",grade4:"#8400b8",grade3:"#b22ff4",grade2:"#b265f6",grade1:"#c084f5",grade0:"#ecd9fc"},fontSize:16})]})},M=s(30),z=s(20);var F=function(){return Object(a.jsxs)(x.a,{style:{justifyContent:"center",paddingBottom:"50px"},children:[Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(p.a,{})}),Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(M.b,{})}),Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(M.e,{})}),Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(M.i,{})}),Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(M.a,{})}),Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(M.g,{})}),Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(z.j,{})}),Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(z.k,{})}),Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(M.d,{})}),Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(M.h,{})}),Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(M.c,{})}),Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(z.e,{})}),Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(z.d,{})}),Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(z.a,{})}),Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(M.f,{})})]})},E=s(34),W=s(48);var V=function(){return Object(a.jsx)(E.a,{className:"quote-card-view",children:Object(a.jsx)(E.a.Body,{children:Object(a.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(a.jsxs)("p",{style:{textAlign:"justify"},children:["Hi Everyone, I am ",Object(a.jsx)("span",{className:"purple",children:"Nizamudeen "}),"from ",Object(a.jsx)("span",{className:"purple",children:" Chennai, India."}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"I have completed Mechatronics engineering at Bharath University with a passion for Robotics and Artificial Intelligence.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Everyday I improve myself and learn how to train artificial brains better to boost their intelligence.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Apart from coding, some other activities that I love to do!"]}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{className:"about-activity",children:[Object(a.jsx)(W.a,{})," Learning new technologies"]}),Object(a.jsxs)("li",{className:"about-activity",children:[Object(a.jsx)(W.a,{})," Star Gazzing"]}),Object(a.jsxs)("li",{className:"about-activity",children:[Object(a.jsx)(W.a,{})," Travelling"]}),Object(a.jsxs)("li",{className:"about-activity",children:[Object(a.jsx)(W.a,{})," Binge watching"]}),Object(a.jsxs)("li",{className:"about-activity",children:[Object(a.jsx)(W.a,{})," Learning Germen"]})]}),Object(a.jsxs)("p",{style:{marginBlockEnd:0,color:"rgb(155 126 172)"},children:['"Always believe that something wonderful is about to happen"'," "]}),Object(a.jsx)("footer",{className:"blockquote-footer",children:"This words helps me to push forward"})]})})})},D=s.p+"static/media/About1.b2f32ffd.png";var R=function(){return Object(a.jsxs)(x.a,{style:{justifyContent:"center",paddingBottom:"50px"},children:[Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(z.i,{})}),Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(z.l,{})}),Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(z.h,{})}),Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(z.c,{})}),Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(z.f,{})}),Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(z.g,{})}),Object(a.jsx)(O.a,{xs:4,md:2,className:"tech-icons",children:Object(a.jsx)(z.b,{})})]})};var q=function(){return Object(a.jsxs)(h.a,{fluid:!0,className:"about-section",children:[Object(a.jsx)(N,{}),Object(a.jsxs)(h.a,{children:[Object(a.jsxs)(x.a,{style:{justifyContent:"center",padding:"10px"},children:[Object(a.jsxs)(O.a,{md:7,style:{justifyContent:"center",paddingTop:"30px",paddingBottom:"50px"},children:[Object(a.jsxs)("h1",{style:{fontSize:"2.1em",paddingBottom:"20px"},children:["Know Who ",Object(a.jsx)("strong",{className:"purple",children:"I'M"})]}),Object(a.jsx)(V,{})]}),Object(a.jsx)(O.a,{md:5,style:{paddingTop:"120px",paddingBottom:"50px"},className:"about-img",children:Object(a.jsx)("img",{src:D,alt:"about",className:"img-fluid"})})]}),Object(a.jsxs)("h1",{className:"project-heading",children:["Professional ",Object(a.jsx)("strong",{className:"purple",children:"Skillset "})]}),Object(a.jsx)(F,{}),Object(a.jsxs)("h1",{className:"project-heading",children:[Object(a.jsx)("strong",{className:"purple",children:"Tools"})," I use"]}),Object(a.jsx)(R,{}),Object(a.jsx)(P,{})]})]})},S=s(49),G=s(136);var Z=function(e){return Object(a.jsxs)(E.a,{className:"project-card-view",children:[Object(a.jsx)(E.a.Img,{variant:"top",src:e.imgPath,alt:"card-img"}),Object(a.jsxs)(E.a.Body,{children:[Object(a.jsx)(E.a.Title,{children:e.title}),Object(a.jsx)(E.a.Text,{style:{textAlign:"justify"},children:e.description}),Object(a.jsxs)(S.a,{variant:"primary",href:e.link,target:"_blank",children:[Object(a.jsx)(G.a,{})," \xa0",e.isBlog?"View Blog":"View Project"]})]})]})},L=s.p+"static/media/gear.4d3acc47.jpg",Y=s.p+"static/media/reception.2f3f192c.jfif",U=s.p+"static/media/mask.710323aa.png",K=s.p+"static/media/rtimms.cd09f7e6.jpg",H=s.p+"static/media/Ecomm.9327cdaa.png",J=s.p+"static/media/leaf.4c15d6eb.png";var X=function(){return Object(a.jsxs)(h.a,{fluid:!0,className:"project-section",children:[Object(a.jsx)(N,{}),Object(a.jsxs)(h.a,{children:[Object(a.jsxs)("h1",{className:"project-heading",children:["My Recent ",Object(a.jsx)("strong",{className:"purple",children:"Works "})]}),Object(a.jsx)("p",{style:{color:"white"},children:"Here are a few projects I've worked on recently."}),Object(a.jsxs)(x.a,{style:{justifyContent:"center",paddingBottom:"10px"},children:[Object(a.jsx)(O.a,{md:4,className:"project-card",children:Object(a.jsx)(Z,{imgPath:L,isBlog:!1,title:"Imaging Inspection of product using Mask RCNN",description:"In the existing methods industries uses manual checking by different gauges to identify the defects in products.  In this proposed model, image processing method is employed to identify various defects in products. First the images are captured using image sensor for training the dataset. The captured images are classified with different classes and trained using Recurrent Neural Networks (RNN).  While real time capturing, first the picture of the product is captured and compared with the existing trained dataset.  For testing, gear is employed as a subject material, here we have classified different cases into three as tooth missing, scratched gear and perfect gear. ",link:"https://github.com/jarvis1200/MASK_RCNN_PROJECT"})}),Object(a.jsx)(O.a,{md:4,className:"project-card",children:Object(a.jsx)(Z,{imgPath:Y,isBlog:!1,title:"Facial Recognition Receptionist",description:"We can use face recognition to record timing data from everyone present in an office. In this face recognition, many algorithms are performed to dissect and capture images of someone's face, such as Machine Learning and Deep Learning. With this algorithm, the system can recognize a person's face and welcome them by calling there name also record timing of that person so that finding customers activities are more efficient and faster.",link:"https://github.com/jarvis1200/Face_recognition_receptionist"})}),Object(a.jsx)(O.a,{md:4,className:"project-card",children:Object(a.jsx)(Z,{imgPath:U,isBlog:!1,title:"Facial mask Recognition",description:"The coronavirus primarily spreads through the transmission of respiratory droplets from infected people So, Deep learning helps to identify the people without the wearing mask,  Convolutional neural network (CNN) has a major role to recognize the visionary system which helps to detect the images of peoples were with the mask or without a mask. MobilenetV2 architecture is used to train a model of image classification to detect peoples in public places and give an awareness of wearing a mask in public.\r ",link:"https://github.com/jarvis1200/FACE-MASK-DETECTING-APP"})}),Object(a.jsx)(O.a,{md:4,className:"project-card",children:Object(a.jsx)(Z,{imgPath:H,isBlog:!1,title:"Alita Jewel E-Comm",description:"Alita is a Ecommerce jewelry application which is build using flutter as fronted and firebase for backend",link:"https://github.com/jarvis1200/Ecommerce-shopping-app"})}),Object(a.jsx)(O.a,{md:4,className:"project-card",children:Object(a.jsx)(Z,{imgPath:K,isBlog:!1,title:"Real Time Industrial Monitoring System",description:"Real time industrial monitoring system (RTIMS) is monitoring \r the whole industrial machines and devices. we are going to \r innovate some futuristic things like tracking the whole goods \r and products , finding the accidental errors before the major \r accidents happens and automatically fix that type of problem.\r \u2022 Using some algorithm and machine learning (Ml) this types \r of errors all fix it. using artificial intelligence the real time \r errors and tracking systems are controlled which is also \r monitor with more accuracy.\r ",link:"https://github.com/jarvis1200/REAL-TIME-INDUSTRIAL-MONITORING-SYSTEM"})}),Object(a.jsx)(O.a,{md:4,className:"project-card",children:Object(a.jsx)(Z,{imgPath:J,isBlog:!1,title:"Apple Leaf Disease Detection",description:"Premature leaf fall, scab, Alternaria leaf spot, brown spot, mosaic, grey spot, and rust are common types of apple leaf \r diseases. Due to the arrival of monsoon, there is excess moisture in the air because of an outbreak of diseases in plants \r that is being witnessed in the hilly region. Farmers from these regions are always worried about the health of Apple \r plants.Our proposed system identifies \r various apple leaf diseases in an early stage that will alert the farmers and nearby research institutes to take appropriate \r action to control it.",link:"https://github.com/jarvis1200/Apple-leaf-Disease-detection/tree/main"})})]})]})]})};var _=function(){var e=(new Date).getFullYear();return Object(a.jsx)(h.a,{fluid:!0,className:"footer",children:Object(a.jsxs)(x.a,{children:[Object(a.jsx)(O.a,{md:"4",className:"footer-copywright",children:Object(a.jsxs)("h3",{children:["Copyright \xa9 ",e," @Nizamudeen"]})}),Object(a.jsx)(O.a,{md:"4",className:"footer-body",children:Object(a.jsxs)("ul",{className:"footer-icons",children:[Object(a.jsx)("li",{className:"social-icons",children:Object(a.jsx)("a",{href:"https://github.com/jarvis1200",style:{color:"white"},target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)(m.a,{})})}),Object(a.jsx)("li",{className:"social-icons",children:Object(a.jsx)("a",{href:"https://www.linkedin.com/in/nizamsview/",style:{color:"white"},target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)(C.a,{})})})]})})]})})};var $=function(e){return Object(a.jsxs)("div",{className:"resume-item",children:[Object(a.jsx)("h5",{className:e.title?"resume-title":"resume-no-title",children:e.title}),Object(a.jsx)("p",{children:Object(a.jsx)("em",{children:e.date})}),Object(a.jsx)("ul",{children:e.content.map((function(e,t){return Object(a.jsxs)("li",{children:[" \u2023 ",e]},t)}))})]})},ee=s.p+"static/media/NIZAM_2021_RES.338b20bf.pdf";var te=function(){return Object(a.jsxs)(h.a,{fluid:!0,className:"resume-section",children:[Object(a.jsx)(N,{}),Object(a.jsxs)(h.a,{children:[Object(a.jsx)(x.a,{style:{justifyContent:"center",position:"relative"},children:Object(a.jsxs)(S.a,{variant:"primary",href:ee,target:"_blank",children:[Object(a.jsx)(m.b,{}),"\xa0Download CV"]})}),Object(a.jsxs)(x.a,{className:"resume",children:[Object(a.jsxs)(O.a,{md:6,className:"resume-left",children:[Object(a.jsx)("h3",{className:"resume-title",children:"Experience"}),Object(a.jsx)($,{title:"Machine Learning Researcher [ Ajlon Solution ]",date:"NOV 2020 - MAR 2021",content:[" Developed new software for facial recognition robot and implemented some features like motion capture, motion estimation, 3D reconstruction, structure-from-motion, visual odometry, feature detection."," Created instant imaging segmentation software using MASK RCNN to detect and scrutinize the failure product of mechanical gears, which give reliable, cost-effective, and high-quality solutions for manufacturing products."]}),Object(a.jsx)($,{title:"Data Science Intern [ The Spark Foundation ]",date:"SEP 2020 - NOV 2020",content:[" Applied rapid application development (RAD) techniques to programming tasks."," Translated benefits of machine learning technology for non-technical audiences, including cost/benefit analyses."," Designed and developed Business products using supervised & unsupervised machine learning and decision tree algorithm."]}),Object(a.jsx)($,{title:"Computer Vision Intern [ Technocolabs ]",date:"JUN 2020 - SEP 2020",content:[" I created The Real-Time Face Mask Detection which identifies the person wearing a mask or not using MobilenetV2 architecture and OpenCV with 99.6% accuracy."," The trained model implemented in Security Web cameras and also developed the Mobile Application to identify in public and more than 100 private companies."]}),Object(a.jsx)($,{title:"Android Development [ TwinTech Solutions]",date:"JAN 2020 - MAR 2020",content:[" Designed, developed, and tested Android and IOS applications."," Created & Developed CRM & Dashboard web application for its own company benefit."," Build & developed the attendance punching mobile application for a big private corporation. The company which has more than 10,000 Workers, used this application to register attendance."]}),Object(a.jsx)($,{title:"Mechanical Engineer Intern [ Airport Authority of India ]",date:"JUN 2019 - JUL 2019",content:[" This Internship has been a great platform to get practical experience in the operation, repair, and maintenance of Forklifts, LMV's, HMV's, and other specialized equipment."," The Rosenbauer Panther 6x6 firetruck which is used in Chennai Airport is more powerful and has a high-tech control system. "]})]}),Object(a.jsxs)(O.a,{md:6,className:"resume-right",children:[Object(a.jsx)("h3",{className:"resume-title",children:"Extracurricular Activities"}),Object(a.jsx)($,{title:"Hackhathons",content:["Participated and Achieved in more than 25 national & international Hackhathons."]}),Object(a.jsx)($,{title:"IMTEX Bangalore",content:["Participated and displayed the project in 'Indian Machine Tool Manufacturers Association', were product is demonstrated among many international industrialist."]}),Object(a.jsx)($,{title:"Robotics Research Centre",content:["Student scholar in Robotics Research Centre also learned and developed several robotics projects"]}),Object(a.jsx)("h3",{className:"resume-title",children:"Education"}),Object(a.jsx)($,{title:"Bachelors's in Technology [ Bharath University, Chennai ] ",date:"2017 - 2021",content:["CGPA: 8.2","Major: Mechatronics & Automation Engineering"]}),Object(a.jsx)($,{title:" 12th BOARD [ OLVS, Chennai ] ",date:" 2016 - 2017 ",content:[" Percentage: 73% "]}),Object(a.jsx)($,{title:" 10th BOARD [ OLVS, Chennai ] ",date:" 2014 - 2015 ",content:[" Percentage: 84% "]}),Object(a.jsx)("h3",{className:"resume-title",children:"Additional Courses"}),Object(a.jsx)($,{title:"",content:[" Advanced Machine Learning Specialization"," Hyperparameter tuning and regularization"," Neural Network And Deep Learning"," Structuring Machine Learning Projects"," Convolutional Neural Networks"," Sequence Model"," Medical Neuro Science"," CNN And Computer Vision Using Keras And Tensorflow"," Mastering in Tensorflow"," Mastering in Data structure and algorithm by Abdul Bari"]})]})]}),Object(a.jsx)(x.a,{style:{justifyContent:"center",position:"relative"},children:Object(a.jsxs)(S.a,{variant:"primary",href:ee,target:"_blank",children:[Object(a.jsx)(m.b,{}),"\xa0Download CV"]})})]})]})},se=s(13);s(407),s(408),s(409);var ae=function(){var e=Object(se.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null};var ie=function(){var e=Object(i.useState)(!0),t=Object(o.a)(e,2),s=t[0],c=t[1];return Object(i.useEffect)((function(){var e=setTimeout((function(){c(!1)}),1200);return function(){return clearTimeout(e)}}),[]),Object(a.jsxs)(b.a,{children:[Object(a.jsx)(l,{load:s}),Object(a.jsxs)("div",{className:"App",id:s?"no-scroll":"scroll",children:[Object(a.jsx)(u,{}),Object(a.jsx)(ae,{}),Object(a.jsxs)(se.c,{children:[Object(a.jsx)(se.a,{path:"/",exact:!0,component:I}),Object(a.jsx)(se.a,{path:"/project",component:X}),Object(a.jsx)(se.a,{path:"/about",component:q}),Object(a.jsx)(se.a,{path:"/resume",component:te})]}),Object(a.jsx)(_,{})]})]})},ce=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,414)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),a(e),i(e),c(e),n(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(ie,{})}),document.getElementById("root")),ce()}},[[410,1,2]]]);
//# sourceMappingURL=main.a3596b4c.chunk.js.map