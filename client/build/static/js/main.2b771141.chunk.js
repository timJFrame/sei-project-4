(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(35),i=n.n(s),o=(n(43),n(12)),l=n(8),u=n(13);function j(){return window.localStorage.getItem("token")}function d(){window.localStorage.removeItem("token")}function b(){var e=j();if(!e)return!1;var t=e.split(".");return!(t.length<2)&&JSON.parse(atob(t[1]))}function m(){var e=b();return!!e&&Math.round(Date.now()/1e3)<e.exp}function h(e){var t=b();return!!t&&e===t.sub}var p=function(){var e=m(),t=Object(l.f)();return Object(l.g)(),Object(a.jsxs)("nav",{className:"nav-container",children:[Object(a.jsx)("div",{className:"logo-container",children:Object(a.jsx)(o.b,{to:"/",children:Object(a.jsx)("button",{className:"button button-clear logo",children:"Vine"})})}),Object(a.jsxs)("div",{className:"nav-links-container",children:[e&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(o.b,{to:"/feed",children:Object(a.jsx)("button",{className:"button button-clear",children:"Feed"})}),Object(a.jsx)(o.b,{to:"/profile",children:Object(a.jsx)("button",{className:"button button-clear",children:"Profile"})})]}),e?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{className:"button button-clear nav-button",onClick:function(){d(),t.push("/")},children:"Logout"})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(o.b,{to:"/register",children:Object(a.jsx)("button",{className:"button button-clear",children:"Register"})}),Object(a.jsx)(o.b,{to:"/login",children:Object(a.jsx)("button",{className:"button button-clear nav-button",children:"Login"})})]})]})]})},x=n(37),O=n(5),f=n(19);var v=function(){var e=r.a.useRef([]),t=r.a.useState([]),n=Object(O.a)(t,2),c=n[0],s=n[1],i=Object(f.c)(c,null,{from:{opacity:0,height:0,innerHeight:0,transfrom:"perspective(600px) rotateX(0deg)",color:"#14adad"},enter:[{opacity:1,height:80,innerHeight:80},{transform:"perspective(200px) rotateX(180deg)",color:"#14adad"},{transform:"perspective(200px) rotateX(0deg)"},{transform:"perspective(200px) rotateX(0deg)"}],leave:[{color:"#14adad"},{innerHeight:0},{opacity:0,height:0}],update:{color:"#14adad"}}),o=r.a.useCallback((function(){e.current.map(clearTimeout),e.current=[],s([]),e.current.push(setTimeout((function(){return s(["Bananas about bulbs..","Mad about mulch...","Passionate about perennials..."])}),200)),e.current.push(setTimeout((function(){return s(["Bananas about bulbs..","Passionate about perennials..."])}),500)),e.current.push(setTimeout((function(){return s(["Bananas about bulbs..","Mad about mulch...","Passionate about perennials..."])}),800))}),[]);return r.a.useEffect((function(){o()}),[]),Object(a.jsx)("section",{className:"page-container",children:Object(a.jsx)("article",{children:i.map((function(e){var t=e.item,n=e.props,c=n.innerHeight,r=Object(x.a)(n,["innerHeight"]),s=e.key;return Object(a.jsx)(f.a.div,{className:"transitions-item",style:r,onClick:o,children:Object(a.jsx)(f.a.div,{style:{overflow:"hidden",height:c},children:t})},s)}))})})},g=n(7),N=n(2),w=n.n(N),y=n(4),k=n(18),C=n.n(k),I=n(9),P=n.n(I);function T(){return{headers:{Authorization:"Bearer ".concat(j())}}}var S="/api/";function D(e){return P.a.post("".concat(S,"auth/register/"),e)}function F(e){return P.a.post("".concat(S,"auth/login/"),e)}function E(e){return P.a.get("".concat(S,"auth/user/").concat(e,"/"),T())}function B(e){return P.a.delete("".concat(S,"auth/user/").concat(e,"/"),T())}function U(){return P.a.get("".concat(S,"auth/profile/"),T())}function A(e){return P.a.post("".concat(S,"auth/user/").concat(e,"/friend/"),null,T())}function _(){return P.a.get("".concat(S,"posts/"))}function J(e){return P.a.post("".concat(S,"posts/"),e,T())}function L(e,t){return P.a.put("".concat(S,"posts/").concat(e,"/"),t,T())}function H(e){return P.a.delete("".concat(S,"posts/").concat(e,"/"),T())}function M(e){return P.a.get("".concat(S,"posts/").concat(e,"/"),T())}function X(e){return P.a.post("".concat(S,"comments/"),e,T())}function R(e){return P.a.delete("".concat(S,"comments/").concat(e,"/"),T())}function W(e){return P.a.post("".concat(S,"posts/").concat(e,"/like/"),null,T())}function z(e){return P.a.post("".concat(S,"chats/"),e,T())}function Y(e){return P.a.post("".concat(S,"communications/"),e,T())}function G(e){return P.a.delete("".concat(S,"chats/").concat(e,"/"),T())}var V=n(10);var q=function(e){var t=r.a.useState(e),n=Object(O.a)(t,2),a=n[0],c=n[1],s=r.a.useState(e),i=Object(O.a)(s,2),o=i[0],l=i[1];return{formdata:a,errors:o,handleChange:function(e){var t=Object(g.a)(Object(g.a)({},a),{},Object(V.a)({},e.target.name,e.target.value)),n=Object(g.a)(Object(g.a)({},o),{},Object(V.a)({},e.target.name,""));c(t),l(n)},setFormdata:c,setErrors:l}};var K=function(e){var t=e.onChange,n=e.value,c=e.name,r=e.labelText,s=e.editImage,i=function(){var e=Object(y.a)(w.a.mark((function e(n){var a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",n.target.files[0]),a.append("upload_preset","ab07xsdj"),e.next=5,P.a.post("https://api.cloudinary.com/v1_1/dzsvtcuhg/image/upload/",a);case 5:r=e.sent,t({target:{name:c,value:r.data.url}});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[n?Object(a.jsx)("div",{className:"profile-preview-image-container",children:Object(a.jsx)("img",{src:n,alt:"selected",className:s?"edit-post-image":"preview-image"})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("label",{children:r||"Upload Image"}),Object(a.jsx)("input",{type:"file",onChange:i,name:c})]}),s&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("label",{children:r||"Upload Image"}),Object(a.jsx)("input",{type:"file",onChange:i,name:c})]})]})};var Q=function(e){var t,n,c=e.id,s=e.owner,i=e.createdAt,l=e.postText,j=e.postImage,d=e.comments,b=e.likedBy,m=e.getAllPosts,p=e.setPosts,x=h(s.id),f=r.a.useState(!1),v=Object(O.a)(f,2),N=v[0],k=v[1],C=r.a.useState(!1),I=Object(O.a)(C,2),P=I[0],T=I[1],S=r.a.useState({text:"",post:"".concat(c)}),D=Object(O.a)(S,2),F=D[0],E=D[1],B=function(){var e=Object(y.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,X(F);case 4:return E({text:"",post:c}),e.next=7,m();case 7:n=e.sent,a=n.data,p(a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0.response.data);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(y.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W(t);case 3:return e.next=5,m();case 5:n=e.sent,a=n.data,p(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),A=q({postText:"",postImage:""}),_=A.formdata,J=A.handleChange,z=A.setFormdata,Y=function(){var e=Object(y.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,L(c,_);case 4:return e.next=6,m();case 6:n=e.sent,a=n.data,p(a),k(!1),T(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0.response.data);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(y.a)(w.a.mark((function e(t){var n,a,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.prev=1,e.next=4,R(n);case 4:return e.next=6,m();case 6:a=e.sent,c=a.data,p(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(y.a)(w.a.mark((function e(){var t,n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=c,e.next=4,H(t);case 4:return e.next=6,m();case 6:n=e.sent,a=n.data,p(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(u.b.article,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"user-post-container",children:[Object(a.jsxs)("div",{className:"user-post-details-and-edit-button-container",children:[Object(a.jsxs)("div",{className:"user-post-details",children:[Object(a.jsx)(o.b,{to:"/user/".concat(s.id),children:Object(a.jsx)("img",{src:s.profileImage,alt:s.username,className:"user-post-image"})}),Object(a.jsxs)("div",{className:"user-post-date-name",children:[Object(a.jsx)("h5",{className:"user-post-name",children:s.username}),Object(a.jsx)("p",{children:function(e){var t=e.slice(0,10).split("-"),n=e.slice(11,16);return"".concat(n,", ").concat(t[2],".").concat(t[1],".").concat(t[0])}(i)})]})]}),x&&Object(a.jsx)(a.Fragment,{children:!N&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"modify-post-button-container",children:Object(a.jsx)("button",{className:"button-green button-outline modify-button button-small",onClick:function(){k(!0),T(!0),n=c,function(){var e=Object(y.a)(w.a.mark((function e(){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(n);case 2:t=e.sent,a=t.data,z(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()},children:"Edit"})}),Object(a.jsx)("div",{className:"modify-post-button-container",children:Object(a.jsx)("button",{className:"button-red button-outline modify-button button-small",onClick:Q,children:"Delete"})})]})})]}),N?Object(a.jsxs)("form",{className:"edit-post-form",onSubmit:Y,children:[Object(a.jsxs)("fieldset",{children:[Object(a.jsx)("textarea",{name:"postText",value:_.postText,onChange:J,placeholder:"Write your post here....",className:"create-post-text-area"}),Object(a.jsx)("div",{className:"image-selector",children:Object(a.jsx)(K,{name:"postImage",value:_.postImage,onChange:J,labelText:"Post Image",editImage:P})})]}),Object(a.jsx)("button",{className:"button-green button-outline form-sumbit ",type:"submit",children:"Save Change"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"user-post-text",children:Object(a.jsx)("p",{children:l})}),Object(a.jsx)("div",{className:"user-post-image-container",children:Object(a.jsx)("img",{src:j,alt:"Post Image",className:"user-post-blog-image"})})]}),Object(a.jsxs)("div",{className:"comments-likes-display-conatiner",children:[Object(a.jsx)("div",{className:"comments-feed-container",children:d?d.map((function(e){return Object(a.jsxs)(a.Fragment,{children:[t=h(e.owner.id),Object(a.jsxs)("div",{className:"comment-text-and-button-container",children:[Object(a.jsxs)("div",{className:"user-comment-text",children:[Object(a.jsx)("p",{children:Object(a.jsx)("strong",{children:e.owner.username})}),Object(a.jsx)("p",{children:e.text})]}),t&&Object(a.jsx)("div",{className:"comment-delete-container",children:Object(a.jsx)("button",{className:"button-red button-outline button-small",onClick:function(){return G(e.id)},children:"x"})})]},e.createdAt)]})})):Object(a.jsx)("p",{children:"Be the first to comment!!"})}),b?Object(a.jsxs)("div",{className:"likes-feed-view-container",children:[Object(a.jsx)("button",{className:"button-green button-outline button-small view-like-button",onClick:function(){return U(c)},children:"Like"}),Object(a.jsx)("p",{className:"view-like",children:"".concat(b.length," likes")})]}):Object(a.jsx)("p",{})]}),Object(a.jsxs)("form",{className:"comment-form",onSubmit:B,children:[Object(a.jsx)("fieldset",{children:Object(a.jsx)("input",{type:"text",placeholder:"Write a comment",className:"comment-input",name:"text",value:F.text,onChange:function(e){E(Object(g.a)(Object(g.a)({},F),{},Object(V.a)({},e.target.name,e.target.value)))}})}),Object(a.jsx)("div",{className:"submit-comment-container",children:Object(a.jsx)("button",{className:"button-green button-outline form-sumbit ",type:"submit",children:"Send"})})]})]})};var Z=function(){var e=r.a.useState(null),t=Object(O.a)(e,2),n=t[0],c=t[1];r.a.useEffect((function(){(function(){var e=Object(y.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_();case 3:t=e.sent,n=t.data,c(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var s=q({postText:"",postImage:""}),i=s.formdata,o=s.setFormdata,l=s.handleChange,j=function(){var e=Object(y.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,J(i);case 4:return o({postText:"",postImage:""}),e.next=7,_();case 7:n=e.sent,a=n.data,c(a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(u.b.section,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"page-feed-container",children:[Object(a.jsxs)("form",{className:"user-post-form",onSubmit:j,children:[Object(a.jsxs)("fieldset",{children:[Object(a.jsx)("textarea",{name:"postText",value:i.postText,onChange:l,placeholder:"Write your post here....",className:"create-post-text-area"}),Object(a.jsx)("div",{className:"image-selector",children:Object(a.jsx)(K,{name:"postImage",value:i.postImage,onChange:l,labelText:"Post Image"})})]}),Object(a.jsx)("button",{className:"button-green button clear button-outline form-sumbit ",type:"submit",children:"Create Post"})]}),n?n.map((function(e){return Object(a.jsx)(Q,Object(g.a)(Object(g.a)({},e),{},{getAllPosts:_,setPosts:c}),e.id)})):Object(a.jsx)(C.a,{type:"ThreeDots",color:"#85837f",height:80,width:80,className:"loading-spinner"})]})};var $=function(){var e=Object(l.f)(),t=q({username:"",email:"",password:"",password_confirmation:"",bio:"",profile_image:""}),n=t.handleChange,c=t.formdata,r=t.errors,s=t.setErrors,i=function(){var t=Object(y.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,D(c);case 4:e.push("/login"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),s(t.t0.response.data);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsx)(u.b.section,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"form-container",children:Object(a.jsxs)("form",{onSubmit:i,children:[Object(a.jsxs)("fieldset",{children:[Object(a.jsx)("label",{children:"Username"}),Object(a.jsx)("input",{type:"text",name:"username",value:c.username,onChange:n,placeholder:"Username"}),r.username&&Object(a.jsx)("p",{className:"form-error-message",children:r.username}),Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{type:"text",name:"email",value:c.email,onChange:n,placeholder:"Email"}),r.email&&Object(a.jsx)("p",{className:"form-error-message",children:r.email}),Object(a.jsx)("label",{children:"Password"}),Object(a.jsx)("input",{type:"password",name:"password",value:c.password,onChange:n,placeholder:"Password"}),r.password&&Object(a.jsx)("p",{className:"form-error-message",children:r.password}),Object(a.jsx)("label",{children:"Password Confirmation"}),Object(a.jsx)("input",{type:"password",name:"password_confirmation",value:c.password_confirmation,onChange:n,placeholder:"Password Confirmation"}),r.passwordConfirmation&&Object(a.jsx)("p",{className:"form-error-message",children:r.passwordConfirmation}),Object(a.jsx)("label",{children:"Bio"}),Object(a.jsx)("textarea",{name:"bio",value:c.bio,onChange:n,placeholder:"Tell why you love gardening"}),r.bio&&Object(a.jsxs)("p",{className:"form-error-message",children:[" ",r.bio]}),Object(a.jsx)(K,{name:"profile_image",value:c.profile_image,labelText:"Profile Image",onChange:n}),r.profile_image&&Object(a.jsx)("p",{className:"form-error-message",children:r.profileImage})]}),Object(a.jsx)("button",{className:"button-green button-outline form-sumbit full-length-button",type:"submit",children:"Register"})]})})};var ee=function(){var e=Object(l.f)(),t=q({email:"",password:""}),n=t.handleChange,c=t.formdata,r=t.errors,s=t.setErrors,i=function(){var t=Object(y.a)(w.a.mark((function t(n){var a,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,F(c);case 4:a=t.sent,r=a.data,i=r.token,window.localStorage.setItem("token",i),e.push("/feed"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),s(t.t0.response.data);case 13:case"end":return t.stop()}var i}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsx)(u.b.section,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"form-container",children:Object(a.jsx)("form",{onSubmit:i,children:Object(a.jsxs)("fieldset",{children:[Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{type:"text",name:"email",vaule:c.email,onChange:n,placeholder:"Email"}),r.email&&Object(a.jsx)("p",{children:r.email}),Object(a.jsx)("label",{children:"Password"}),Object(a.jsx)("input",{type:"password",name:"password",value:c.password,onChange:n,placeholder:"Password"}),r.password&&Object(a.jsx)("p",{children:r.password}),r.detail&&Object(a.jsx)("p",{className:"form-error-message",children:r.detail}),Object(a.jsx)("button",{className:"button-green button-outline form-sumbit full-length-button",type:"submit",children:"Login"})]})})})};var te=function(){var e=r.a.useState(null),t=Object(O.a)(e,2),n=t[0],c=t[1],s=Object(l.f)();r.a.useEffect((function(){(function(){var e=Object(y.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U();case 3:t=e.sent,n=t.data,c(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=function(e){var t=e.slice(0,10).split("-");return"".concat(t[2],".").concat(t[1],".").concat(t[0])},o=function(){var e=Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.id,e.next=3,B(t);case 3:d(),s.push("/");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(u.b.section,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"profile-container",children:n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("article",{className:"main-user-details",children:[Object(a.jsxs)("div",{className:"name-email-div",children:[Object(a.jsx)("h3",{className:"username",children:n.username}),Object(a.jsx)("h5",{className:"email",children:n.email}),Object(a.jsx)("p",{className:"email",children:"Joined: ".concat(i(n.dateJoined))})]}),Object(a.jsx)("div",{className:"user-profile-image-view",children:Object(a.jsx)("img",{src:n.profileImage,alt:"",className:"user-profile-image"})})]}),Object(a.jsx)("article",{className:"user-bio-container",children:Object(a.jsx)("p",{className:"user-biot-text",children:n.bio})}),Object(a.jsxs)("article",{className:"profile-view-reuse-conatiner",children:[Object(a.jsx)("div",{className:"reuse-container-title",children:Object(a.jsx)("h3",{children:"Friends"})}),Object(a.jsx)("div",{className:"friends-container",children:n.friendedBy?n.friendedBy.map((function(e){return Object(a.jsxs)("div",{className:"friend-image-and-name",children:[Object(a.jsx)("div",{className:"friend-image",children:Object(a.jsx)("img",{src:e.profileImage,alt:e.name,className:"reuse-image"})}),Object(a.jsx)("div",{className:"friend-name-container",children:Object(a.jsx)("p",{children:e.username})})]},e.id)})):Object(a.jsx)(C.a,{type:"ThreeDots",color:"#85837f",height:80,width:80,className:"loading-spinner"})})]}),Object(a.jsxs)("article",{className:"profile-view-reuse-conatiner",children:[Object(a.jsx)("div",{className:"reuse-container-title",children:Object(a.jsx)("h3",{children:"Posts you created"})}),Object(a.jsx)("div",{className:"reuse-container",children:Object(a.jsx)("div",{className:"image-and-text",children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Date"}),Object(a.jsx)("th",{children:"Post Image"}),Object(a.jsx)("th",{children:"Post Text"})]})}),Object(a.jsx)("tbody",{children:n.createdPosts?n.createdPosts.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:i(e.createdAt)}),Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:e.postImage,alt:"post image"})}),Object(a.jsx)("td",{children:e.postText})]},e.id)})):Object(a.jsx)(C.a,{type:"ThreeDots",color:"#85837f",height:80,width:80,className:"loading-spinner"})})]})})})]}),Object(a.jsxs)("article",{className:"profile-view-reuse-conatiner",children:[Object(a.jsx)("div",{className:"reuse-container-title",children:Object(a.jsx)("h3",{children:"Posts you liked"})}),Object(a.jsx)("div",{className:"reuse-container",children:Object(a.jsx)("div",{className:"image-and-text",children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Date"}),Object(a.jsx)("th",{children:"Post Image"}),Object(a.jsx)("th",{children:"Post Text"}),Object(a.jsx)("th",{children:"Post Creator"})]})}),Object(a.jsx)("tbody",{children:n.likedPosts?n.likedPosts.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:i(e.createdAt)}),Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:e.postImage,alt:"post image",className:"liked-post-image"})}),Object(a.jsx)("td",{children:e.postText}),Object(a.jsx)("td",{children:e.owner.username})]},e.id)})):Object(a.jsx)(C.a,{type:"ThreeDots",color:"#85837f",height:80,width:80,className:"loading-spinner"})})]})})})]}),Object(a.jsxs)("article",{className:"profile-view-reuse-conatiner",children:[Object(a.jsx)("div",{className:"reuse-container-title",children:Object(a.jsx)("h3",{children:"Comments you made"})}),Object(a.jsx)("div",{className:"comments-made-container",children:Object(a.jsx)("div",{className:"image-and-text",children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Date"}),Object(a.jsx)("th",{children:"Comment"}),Object(a.jsx)("th",{children:"Post Image"}),Object(a.jsx)("th",{children:"Post Text"})]})}),Object(a.jsx)("tbody",{children:n.postedComments?n.postedComments.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:i(e.createdAt)}),Object(a.jsx)("td",{children:e.text}),Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:e.post.postImage})}),Object(a.jsx)("td",{children:e.post.postText})]},e.id)})):Object(a.jsx)(C.a,{type:"ThreeDots",color:"#85837f",height:80,width:80,className:"loading-spinner"})})]})})})]}),Object(a.jsx)("div",{className:"delete-user-container",children:Object(a.jsx)("button",{className:"button-red button-outline",onClick:o,children:"Delete Profile"})})]}):Object(a.jsx)(C.a,{type:"ThreeDots",color:"#85837f",height:80,width:80,className:"loading-spinner"})})};var ne=function(){var e=Object(l.h)().id,t=r.a.useState(null),n=Object(O.a)(t,2),c=n[0],s=n[1],i=r.a.useState(!1),o=Object(O.a)(i,2),j=o[0],d=o[1];r.a.useEffect((function(){(function(){var t=Object(y.a)(w.a.mark((function t(){var n,a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E(e);case 3:n=t.sent,a=n.data,s(a),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}})()()}),[e]);var b=function(){var t=Object(y.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A(e);case 3:d(!0),setTimeout((function(){d(!1)}),2e3),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(a.jsx)(u.b.section,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"profile-container",children:c?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("article",{className:"main-user-details",children:[Object(a.jsxs)("div",{className:"name-email-div",children:[Object(a.jsx)("h3",{className:"username",children:c.username}),Object(a.jsx)("h5",{className:"email",children:c.email}),Object(a.jsx)("p",{className:"email",children:"Joined: ".concat(function(e){var t=e.slice(0,10).split("-");return"".concat(t[2],".").concat(t[1],".").concat(t[0])}(c.dateJoined))})]}),Object(a.jsx)("div",{className:"user-profile-image-view",children:Object(a.jsx)("img",{src:c.profileImage,alt:"",className:"user-profile-image"})})]}),Object(a.jsx)("article",{className:"user-bio-container",children:Object(a.jsx)("p",{className:"user-biot-text",children:c.bio})}),Object(a.jsxs)("article",{className:"profile-view-reuse-conatiner",children:[Object(a.jsx)("div",{className:"reuse-container-title",children:Object(a.jsx)("h3",{children:"Friends"})}),Object(a.jsx)("div",{className:"friends-container",children:c.friendedBy?c.friendedBy.map((function(e){return Object(a.jsxs)("div",{className:"friend-image-and-name",children:[Object(a.jsx)("div",{className:"friend-image",children:Object(a.jsx)("img",{src:e.profileImage,alt:e.name,className:"reuse-image"})}),Object(a.jsx)("div",{className:"friend-name-container",children:Object(a.jsx)("p",{children:e.username})})]},e.id)})):Object(a.jsx)(C.a,{type:"ThreeDots",color:"#85837f",height:80,width:80,className:"loading-spinner"})})]}),j&&Object(a.jsx)("div",{className:"added-friend-message-container",children:Object(a.jsx)("p",{children:Object(a.jsx)("strong",{children:"Great ".concat(c.username," has been added to your friends list")})})}),Object(a.jsx)("div",{className:"user-profile-friend-button-container",children:Object(a.jsx)("button",{className:"button-green button-outline",onClick:b,children:"Add friend"})})]}):Object(a.jsx)("p",{children:"Loading"})})};var ae=function(e){var t,n,c=e.id,s=e.recipient,i=e.communications,o=e.getCurrentUser,l=e.setCurrentUser,u=r.a.useState({text:"",chat:"",receiver:""}),j=Object(O.a)(u,2),d=j[0],b=j[1],m=function(){var e=Object(y.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Y(d);case 3:return b({text:""}),e.next=6,o();case 6:n=e.sent,a=n.data,l(a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(y.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(t);case 2:return e.next=4,o();case 4:n=e.sent,a=n.data,l(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(f.b)({config:{duration:5e3}});var p=Object(f.b)({opacity:1,from:{opacity:0}});return Object(a.jsxs)(f.a.div,{className:"chat-container",style:p,children:[Object(a.jsx)("h5",{children:"You're chatting with ".concat(s.username," ")}),i?i.map((function(e){return Object(a.jsx)("div",{children:Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"".concat(e.sender.username,": ")})," ","".concat(e.text)," "]})},e.id)})):Object(a.jsx)("p",{children:"No chats yet"}),Object(a.jsxs)("form",{className:"chat-form",onSubmit:m,children:[Object(a.jsx)("fieldset",{children:Object(a.jsx)("input",{type:"text",name:"text",value:d.text,placeholder:"Message",onChange:function(e){return function(e,a,c){var r;t=e,n=a,b(Object(g.a)(Object(g.a)({},d),{},(r={},Object(V.a)(r,c.target.name,c.target.value),Object(V.a)(r,"chat",t),Object(V.a)(r,"receiver",n),r)))}(c,s.id,e)}})}),Object(a.jsx)("button",{className:"button-green button-outline",type:"submit",value:"send",children:"send"})]}),Object(a.jsx)("button",{className:"button-red button-outline button-small",onClick:function(){return h(c)},children:"Delete"})]})};var ce=function(e){var t,n,c=e.owner,s=e.communications,i=e.getCurrentUser,o=e.setCurrentUser,l=r.a.useState({text:"",chat:"",receiver:""}),u=Object(O.a)(l,2),j=u[0],d=u[1],b=function(){var e=Object(y.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Y(j);case 3:return d({text:""}),e.next=6,i();case 6:n=e.sent,a=n.data,o(a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"chat-container",children:[Object(a.jsx)("h5",{children:"You're chatting with ".concat(c.username," ")}),s?s.map((function(e){return Object(a.jsx)("div",{children:Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"".concat(e.sender.username,": ")})," ","".concat(e.text)," "]})},e.id)})):Object(a.jsx)("p",{children:"No chats yet"}),Object(a.jsxs)("form",{className:"chat-form",onSubmit:b,children:[Object(a.jsx)("fieldset",{children:Object(a.jsx)("input",{type:"text",name:"text",value:j.text,placeholder:"Message",onChange:function(e){return function(e,a,c){var r;t=e,n=a,d(Object(g.a)(Object(g.a)({},j),{},(r={},Object(V.a)(r,c.target.name,c.target.value),Object(V.a)(r,"chat",t),Object(V.a)(r,"receiver",n),r)))}(s[0].chat,s[0].sender.id,e)}})}),Object(a.jsx)("button",{className:"button-green button-outline",type:"submit",value:"send",children:"send"})]})]})};var re=function(){var e,t=r.a.useState(null),n=Object(O.a)(t,2),c=n[0],s=n[1],i=r.a.useState(null),o=Object(O.a)(i,2),u=o[0],j=o[1],d=r.a.useState(!1),b=Object(O.a)(d,2),h=b[0],p=b[1],x=m(),f=Object(l.g)().pathname;r.a.useEffect((function(){(function(){var e=Object(y.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("".concat(S,"auth/"));case 3:t=e.sent,n=t.data,s((function(){return n.filter((function(e){return"admin"!==e.username&&e.username!==(null===u||void 0===u?void 0:u.username)}))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=function(){var t=Object(y.a)(w.a.mark((function t(n){var a,c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.target.value,parseInt(e)===u.id){t.next=4;break}return t.next=4,z({recipient:e});case 4:return t.next=6,U();case 6:a=t.sent,c=a.data,j(c);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.useEffect((function(){(function(){var e=Object(y.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U();case 3:t=e.sent,n=t.data,j(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[f]),Object(a.jsx)(a.Fragment,{children:x&&Object(a.jsxs)("div",{className:"fixed-footer-container",children:[!h&&Object(a.jsx)("div",{className:"show-chat-button",children:Object(a.jsx)("button",{className:"button-green button-outline button-small",onClick:function(){p(!0)},children:"Open Chat"})}),h&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"hide-chat-button",children:Object(a.jsx)("button",{className:"button-red button-outline button-small",onClick:function(){p(!1)},children:"Close chat"})}),Object(a.jsxs)("div",{className:"chat-master-container",children:[Object(a.jsxs)("div",{className:"chat-selection-container",children:[Object(a.jsx)("p",{children:"Choose someone to chat with"}),Object(a.jsx)("form",{children:Object(a.jsx)("fieldset",{children:Object(a.jsx)("select",{onChange:v,children:c?c.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.username},e.id)})):Object(a.jsx)("option",{children:"Loading..."})})})})]}),(null===u||void 0===u?void 0:u.createdChats)?u.createdChats.map((function(e){return Object(a.jsx)(ae,Object(g.a)(Object(g.a)({},e),{},{getCurrentUser:U,setCurrentUser:j}),e.id)})):Object(a.jsx)("p",{}),(null===u||void 0===u?void 0:u.receivedChats)?u.receivedChats.map((function(e){return Object(a.jsx)(ce,Object(g.a)(Object(g.a)({},e),{},{getCurrentUser:U,setCurrentUser:j}),e.id)})):Object(a.jsx)("p",{})]})]})]})})};var se=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(p,{}),Object(a.jsx)(u.a,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",component:v}),Object(a.jsx)(l.a,{path:"/feed",component:Z}),Object(a.jsx)(l.a,{path:"/register",component:$}),Object(a.jsx)(l.a,{path:"/login",component:ee}),Object(a.jsx)(l.a,{path:"/profile",component:te}),Object(a.jsx)(l.a,{path:"/user/:id",component:ne})]})}),Object(a.jsx)(re,{})]})};n(87);i.a.render(Object(a.jsx)(se,{}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.2b771141.chunk.js.map