(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{308:function(t,e,n){"use strict";n.r(e);n(13);var r=n(3),c=n(103),o=n.n(c),m={name:"ArchiveDocumentSlug",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,c=t.error,e.prev=1,e.next=4,n("archive/".concat(r.slug)).fetch();case 4:o=e.sent,e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",c({statusCode:404,message:"Page not found"}));case 10:return e.abrupt("return",{page:o});case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))()},head:function(){return{title:"".concat(this.page.title," - yamanoku.net"),meta:[{hid:"description",name:"description",content:this.$t("archivePage.desc01")},{hid:"og:title",property:"og:title",content:"".concat(this.page.title," - yamanoku.net")},{hid:"og:description",property:"og:description",content:this.$t("archivePage.desc01")},{hid:"og:image",property:"og:image",content:"https://yamanoku.net/ogp/ogp-archive@2x.png"},{hid:"twitter:card",name:"twitter:card",content:"summary"},{hid:"twitter:title",name:"twitter:title",content:this.page.title},{hid:"twitter:description",name:"twitter:description",content:this.$t("archivePage.desc01")},{hid:"twitter:image",property:"twitter:image",content:"https://yamanoku.net/ogp/ogp-twitter_summary-archives@2x.png"}]}},methods:{dateTime:function(time){return o()(time).format("YYYY-MM-DD")}}},d=n(4),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{role:"main",id:"main"}},[n("article",[n("h1",[t._v(t._s(t.page.title))]),t._v(" "),n("p",{attrs:{lang:"en"}},[t._v("\n      created at:\n      "),n("time",{attrs:{datetime:t.dateTime(t.page.date)}},[t._v(t._s(t.dateTime(t.page.date)))])]),t._v(" "),"ja"!==this.$i18n.locale?[n("em",[t._v(t._s(t.$t("onlyJPText")))])]:t._e(),t._v(" "),n("nuxt-content",{attrs:{document:t.page}}),t._v(" "),n("nuxt-link",{attrs:{to:"/archive"}},[t._v("\n      "+t._s(t.$t("archivePage.backText"))+"\n    ")])],2),t._v(" "),n("nuxt-link",{attrs:{to:t.localePath({name:"index"})}},[t._v(t._s(t.$t("backTop")))])],1)}),[],!1,null,null,null);e.default=component.exports}}]);