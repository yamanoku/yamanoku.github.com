(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{240:function(t,e,n){"use strict";n.r(e);var r=n(4),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{"aria-label":t.$t("multilingual")}},[n("h2",{attrs:{id:"local-switching"}},[t._v(t._s(t.$t("multilingual")))]),t._v(" "),n("ul",{attrs:{role:"list"}},t._l(t.$i18n.locales,(function(e){return n("li",{key:e.code,attrs:{role:"listitem"}},[n("nuxt-link",{attrs:{lang:e.code,to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name))])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},241:function(t,e,n){"use strict";e.a={asyncData:function(t){return{baseName:t.env.baseName,baseDesc:t.env.baseDesc,baseUrl:t.env.baseUrl,baseOgp:t.env.baseOgp}},head:function(){var head={meta:[],bodyAttrs:{}};if(this.meta.title){var title="".concat(this.meta.title," - yamanoku.net");head.title=title,head.meta.push({hid:"og:title",property:"og:title",content:title})}return this.meta.description?(head.meta.push({hid:"description",name:"description",content:this.meta.description}),head.meta.push({hid:"og:description",property:"og:description",content:this.meta.description})):!this.meta.description&&this.meta.title&&(head.meta.push({hid:"description",name:"description",content:this.baseDesc}),head.meta.push({hid:"og:description",property:"og:description",content:this.baseDesc})),this.meta.type?head.meta.push({hid:"og:type",property:"og:type",content:this.meta.type}):"/"===this.$route.path&&head.meta.push({hid:"og:type",property:"og:type",content:"website"}),this.meta.image&&head.meta.push({hid:"og:image",property:"og:image",content:this.meta.image}),head.bodyAttrs.class=this.$store.state.rhythm.toggleRhythm?"is-rhythm":"",head}}},315:function(t,e,n){"use strict";n.r(e);n(13);var r=n(3),o=(n(105),{mixins:[n(241).a],asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.route,r=n("archive",{deep:!0}).sortBy("date","desc"),e.next=4,r.fetch();case 4:return o=e.sent,e.abrupt("return",{articles:o});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{meta:{title:this.$t("archivePage.title"),description:this.$t("archivePage.desc01"),image:"https://yamanoku.net/ogp/ogp-archive@2x.png"}}}}),c=n(4),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{role:"main",id:"main"}},[n("h2",[t._v(t._s(t.$t("archivePage.title")))]),t._v(" "),n("p",[t._v("\n    "+t._s(t.$t("archivePage.desc01"))+"\n  ")]),t._v(" "),n("p",[t._v("\n    "+t._s(t.$t("archivePage.desc02"))+"\n  ")]),t._v(" "),"ja"!==this.$i18n.locale?[n("em",[t._v(t._s(t.$t("onlyJPText")))])]:t._e(),t._v(" "),n("ul",t._l(t.articles,(function(article){return n("li",{key:article.slug},[n("nuxt-link",{attrs:{to:article.path}},[t._v("\n        "+t._s(article.title)+"\n      ")])],1)})),0),t._v(" "),n("nuxt-link",{attrs:{to:t.localePath({name:"index"})}},[t._v(t._s(t.$t("backTop")))]),t._v(" "),n("common-local-switch")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonLocalSwitch:n(240).default})}}]);