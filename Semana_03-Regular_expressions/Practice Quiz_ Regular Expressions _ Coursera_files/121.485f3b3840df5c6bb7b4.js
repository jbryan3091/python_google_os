(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{H4ky:function(module,e,t){"use strict";var n=t("VbXa"),o=t.n(n),r=t("17x9"),i=t.n(r),s=t("q1tI"),c=t.n(s),a=t("jGbM");e.a=function(e){return function(t){var n=t.displayName||t.name,r=function(n){function RedirectWrapper(){for(var e,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))||this).state={haveRedirected:!1},e}o()(RedirectWrapper,n);var r=RedirectWrapper.prototype;return r.componentWillMount=function componentWillMount(){this.conditionallyRedirect(this.props)},r.componentWillReceiveProps=function componentWillReceiveProps(e){this.conditionallyRedirect(e)},r.conditionallyRedirect=function conditionallyRedirect(t){var n=e(t),o=n.redirectUrl,r=n.shouldRedirect;!this.state.haveRedirected&&r&&(this.setState({haveRedirected:!0}),this.context.router.push(o))},r.render=function render(){var n,o;if(e(this.props).shouldRedirect)return null;return c.a.createElement(t,this.props)},RedirectWrapper}(c.a.Component);return r.displayName=n+"RedirectWrapper",r.contextTypes={router:i.a.object.isRequired},Object(a.a)(r,t),r}}},QpD1:function(module,e,t){"use strict";var n=t("q1tI"),o=t.n(n),r=t("TSYQ"),i=t.n(r),s=t("Tu4p"),c=t("seWu"),a=t.n(c),u=function IBMChatbot(e){var t=e.courseSlug,n=Object(s.a)(t);return n&&o.a.createElement("iframe",{title:"chatbot_".concat(t),src:n,frameBorder:"0",scrolling:"no",className:i()("frame-area","rc-IBMChatbot")})};e.a=u},Tu4p:function(module,e,t){"use strict";t.d(e,"b",function(){return o}),t.d(e,"a",function(){return r});var n={"python-for-applied-data-science-ai":"https://guido.us-south.cf.appdomain.cloud/","building-ai-powered-chatbots":"https://poweredai.eu-gb.mybluemix.net/","introduction-to-ai":"https://intro-ai.eu-gb.mybluemix.net/"},o=function isIBMChatbotEnabled(e){return Object.keys(n).includes(e)},r=function getIBMChatbotURL(e){return o(e)?n[e]:null}},dDIq:function(module,exports,e){},n8LY:function(module,e,t){"use strict";t.r(e),t.d(e,"default",function(){return S});var n=t("VbXa"),o=t.n(n),r=t("AeFk"),i=t("q1tI"),s=t.n(i),c=t("17x9"),a=t.n(c),u=t("F/us"),l=t.n(u),p=t("ngyh"),d=t("L1vm"),b=t("1HaE"),m=t("Jrms"),f=t("KMW/"),h=t("QpD1"),g=t("Tu4p"),C=t("2T3l"),v=t("H4ky"),x=t("emlC"),y=t("FO9Q"),R=t("GP6s"),j=t.n(R),O=function CourseHomeDiscussionsPage(e){var t=e.courseName,n=e.courseSlug,o=e.children,s=j()("#{courseName} - Discussions",{courseName:t});return Object(i.useEffect)(function(){f.a.get("BlueJays","LearnerForumPendoSampleIncluded")&&Object(b.a)()},[]),Object(r.d)("div",{className:"rc-CourseHomeDiscussionsPage"},Object(r.d)(y.a,{title:s}),Object(g.b)(n)&&Object(r.d)(h.a,{courseSlug:n}),o)};O.propTypes={courseName:a.a.string,courseSlug:a.a.string,children:a.a.node};var M=Object(u.compose)(d.a.createTrackedContainer(function(){return{namespace:{page:"discussions"}}}),Object(x.a)(["CourseStore","CourseMembershipStore","ApplicationStore"],function(e,t){var n=e.CourseStore,o=e.CourseMembershipStore,r=e.ApplicationStore,i=o.isEnrolled()&&!o.isPreEnrolled(),s=n.getCourseId(),c=o.hasModerationRole()||r.isSuperuser(),a=i;return{courseId:s,courseSlug:n.getMetadata().get("slug"),courseName:n.getMetadata().get("name"),courseRootPath:n.getCourseRootPath(),canAccessDiscussions:!Object(C.a)(s)&&(a||c)}}),Object(v.a)(function(e){var t,n;return{redirectUrl:e.courseRootPath,shouldRedirect:!e.canAccessDiscussions}}))(O),S=function(e){function FluxibleCourseHomeDiscussionsPage(){return e.apply(this,arguments)||this}o()(FluxibleCourseHomeDiscussionsPage,e);var t=FluxibleCourseHomeDiscussionsPage.prototype;return t.componentWillMount=function componentWillMount(){this.fluxibleContext=Object(m.m)(this.context.fluxibleContext)},t.render=function render(){return Object(r.d)(p.a,{context:this.fluxibleContext.getComponentContext()},Object(r.d)(M,this.props))},FluxibleCourseHomeDiscussionsPage}(s.a.Component);S.contextTypes={fluxibleContext:a.a.object}},seWu:function(module,exports,e){var t=e("dDIq"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var o={transform:void 0},r=e("aET+")(t,o);t.locals&&(module.exports=t.locals)}}]);
//# sourceMappingURL=121.485f3b3840df5c6bb7b4.js.map