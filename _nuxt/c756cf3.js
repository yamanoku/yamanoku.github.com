(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{463:function(t,e,n){"use strict";n.r(e);var r={props:{feedback:{type:Object,required:!0}},data:function(){return{gitHubLink:"https://github.com/yamanoku/yamanoku.github.io/issues/new?title=".concat(this.feedback.gitHubTitle,"&labels=document,feedback&body=URL：https://yamanoku.net").concat(this.feedback.routePath,"%0A").concat(this.$t("feedback.github.link")),twitterLink:"https://twitter.com/share?url=https://yamanoku.net".concat(this.feedback.routePath,"&text=@yamanoku")}}},c=n(4),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("details",[n("summary",[t._v(t._s(t.$t("details.summary_feedback")))]),t._v(" "),n("ul",{attrs:{role:"list"}},[n("li",{attrs:{role:"listitem"}},[n("a",{attrs:{href:t.gitHubLink,target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(this.$t("feedback.github.title"))+"\n        "),n("open-new-icon")],1)]),t._v(" "),n("li",{attrs:{role:"listitem"}},[n("a",{attrs:{href:t.twitterLink,target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(this.$t("feedback.twitter.title"))+"\n        "),n("open-new-icon")],1)])])])}),[],!1,null,null,null);e.default=component.exports},470:function(t,e,n){var content=n(494);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("596fa762",content,!0,{sourceMap:!1})},493:function(t,e,n){"use strict";n(470)},494:function(t,e,n){(e=n(25)(!1)).push([t.i,".article-header[data-v-21e2a912]{display:flex;flex-wrap:wrap;justify-content:space-between;margin:calc(var(--rhythm)/2*-1);padding:0}.article-header>*[data-v-21e2a912]{margin:calc(var(--rhythm)/2)}",""]),t.exports=e},537:function(t,e,n){"use strict";n.r(e);n(16);var r=n(3),c=n(108),o=n.n(c),l={name:"ArchiveDocumentSlug",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,c=t.error,e.prev=1,e.next=4,n("archive/".concat(r.slug)).fetch();case 4:o=e.sent,e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",c({statusCode:404,message:"Page not found"}));case 10:return e.abrupt("return",{page:o});case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))()},head:function(){return{title:"".concat(this.page.title),meta:[{hid:"description",name:"description",content:this.$t("archivePage.desc01")},{hid:"og:title",property:"og:title",content:"".concat(this.page.title)},{hid:"og:description",property:"og:description",content:this.$t("archivePage.desc01")},{hid:"og:image",property:"og:image",content:"https://yamanoku.net/ogp/ogp-archive@2x.png"},{hid:"og:image:alt",property:"og:image:alt",content:this.$t("archivePage.title")},{hid:"twitter:card",name:"twitter:card",content:"summary"},{hid:"twitter:title",name:"twitter:title",content:this.page.title},{hid:"twitter:description",name:"twitter:description",content:this.$t("archivePage.desc01")},{hid:"twitter:image",property:"twitter:image",content:"https://yamanoku.net/ogp/ogp-twitter_summary-archives@2x.png"},{hid:"twitter:image:alt",property:"twitter:image:alt",content:this.$t("archivePage.title")}],bodyAttrs:{class:this.$store.state.rhythm.toggleRhythm?"is-rhythm":""}}},data:function(){return{feedback:{gitHubTitle:this.$t("archivePage.feedback.github.linkTitle"),routePath:this.$route.path},editLink:"https://github.com/yamanoku/yamanoku.github.io/edit/nuxt/content".concat(this.$route.path,".md")}},methods:{dateTime:function(time){return o()(time).format("YYYY-MM-DD")}}},h=(n(493),n(4)),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{role:"main",id:"main"}},[n("article",[n("h1",[t._v(t._s(t.page.title))]),t._v(" "),n("div",{staticClass:"article-header"},[n("div",{attrs:{lang:"en"}},[t._v("\n        created at:\n        "),n("time",{attrs:{datetime:t.dateTime(t.page.date)}},[t._v(t._s(t.dateTime(t.page.date)))])]),t._v(" "),n("div",{attrs:{lang:"en"}},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener"}},[t._v("\n          GitHub Edit Page\n          "),n("github-icon")],1)])]),t._v(" "),"ja"!==this.$i18n.locale?[n("em",[t._v(t._s(t.$t("onlyJPText")))])]:t._e(),t._v(" "),n("nuxt-content",{attrs:{document:t.page}}),t._v(" "),n("nuxt-link",{attrs:{to:"/archive"}},[t._v("\n      "+t._s(t.$t("archivePage.backText"))+"\n    ")])],2),t._v(" "),n("p",[t._v("\n    "+t._s(t.$t("archivePage.slug.feedback"))+"\n  ")]),t._v(" "),n("global-feedback-list",{attrs:{feedback:t.feedback}}),t._v(" "),n("nuxt-link",{attrs:{to:t.localePath({name:"index"})}},[t._v(t._s(t.$t("backTop")))])],1)}),[],!1,null,"21e2a912",null);e.default=component.exports;installComponents(component,{GlobalFeedbackList:n(463).default})}}]);