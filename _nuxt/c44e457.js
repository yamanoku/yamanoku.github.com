(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{691:function(t,e,r){"use strict";r.r(e);var n=r(5),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{attrs:{"aria-label":t.$t("multilingual")}},[r("h2",{attrs:{id:"local-switching"}},[t._v(t._s(t.$t("multilingual")))]),t._v(" "),r("ul",{attrs:{role:"list"}},t._l(t.$i18n.locales,(function(e){return r("li",{key:e.code,attrs:{role:"listitem"}},[r("nuxt-link",{attrs:{lang:e.code,to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name))])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},692:function(t,e,r){"use strict";e.a={asyncData:function(t){return{baseName:t.env.baseName,baseDesc:t.env.baseDesc,baseUrl:t.env.baseUrl,baseOgp:t.env.baseOgp,baseOgpAlt:t.env.baseName}},head:function(){var head={meta:[],bodyAttrs:{}};if(this.meta.title){var title="".concat(this.meta.title);head.title=title,head.meta.push({hid:"og:title",property:"og:title",content:title})}return this.meta.description?(head.meta.push({hid:"description",name:"description",content:this.meta.description}),head.meta.push({hid:"og:description",property:"og:description",content:this.meta.description})):!this.meta.description&&this.meta.title&&(head.meta.push({hid:"description",name:"description",content:this.baseDesc}),head.meta.push({hid:"og:description",property:"og:description",content:this.baseDesc})),this.meta.type?head.meta.push({hid:"og:type",property:"og:type",content:this.meta.type}):"/"===this.$route.path&&head.meta.push({hid:"og:type",property:"og:type",content:"website"}),this.meta.image&&(head.meta.push({hid:"og:image",property:"og:image",content:this.meta.image}),head.meta.push({hid:"og:image:alt",property:"og:image:alt",content:this.meta.imageAlt}),head.meta.push({hid:"twitter:image:alt",property:"twitter:image:alt",content:this.meta.imageAlt})),head.bodyAttrs.class=this.$store.state.rhythm.toggleRhythm?"is-rhythm":"",head}}},699:function(t,e,r){var content=r(709);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("22cdf001",content,!0,{sourceMap:!1})},700:function(t,e,r){var content=r(711);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("ae28d024",content,!0,{sourceMap:!1})},701:function(t,e,r){var content=r(713);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("916cf0ba",content,!0,{sourceMap:!1})},708:function(t,e,r){"use strict";r(699)},709:function(t,e,r){(e=r(23)(!1)).push([t.i,".toc[data-v-e7de1862]{border-left:8px solid var(--gray);padding-left:calc(var(--rhythm)*3)}@media (prefers-color-scheme:dark){.toc[data-v-e7de1862]{border-left:8px solid var(--white)}}",""]),t.exports=e},710:function(t,e,r){"use strict";r(700)},711:function(t,e,r){(e=r(23)(!1)).push([t.i,"dl[data-v-6b7a3a7e]{padding:calc(var(--rhythm)*3);margin:0 calc(-3*var(--rhythm));color:var(--black);display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,auto))}dl[data-v-6b7a3a7e],dl>div[data-v-6b7a3a7e]{background-color:#fff}dl>div[data-v-6b7a3a7e]{padding:calc(var(--rhythm)*1.5)}dl dd[data-v-6b7a3a7e],dl dt[data-v-6b7a3a7e]{font-weight:700;font-size:.8rem}dl dd[data-v-6b7a3a7e]{margin:0;padding:0}",""]),t.exports=e},712:function(t,e,r){"use strict";r(701)},713:function(t,e,r){(e=r(23)(!1)).push([t.i,'.switch-rhythm[data-v-5080c20c]{background:none;border:none;display:block;font-size:inherit;margin:calc(var(--rhythm)*3) 0;line-height:calc(var(--rhythm)*3);padding:0;position:relative;text-align:left;transition:box-shadow .2s ease-in-out;width:100%;cursor:pointer}@media (prefers-color-scheme:dark){.switch-rhythm[data-v-5080c20c]{color:var(--white)}}.switch-rhythm[data-v-5080c20c]:active{color:inherit}.switch-rhythm span[data-v-5080c20c]:after,.switch-rhythm span[data-v-5080c20c]:before{border:1px solid var(--black);content:"";position:absolute;top:50%;transform:translateY(-50%)}.switch-rhythm span[data-v-5080c20c]:after{background:#fff;border-radius:100%;height:calc(var(--rhythm)*1.75);right:calc(var(--rhythm)*1.25);transition:right .1825s ease-in-out;width:calc(var(--rhythm)*1.75)}.switch-rhythm span[data-v-5080c20c]:before{background:var(--white);border-radius:calc(var(--rhythm)*3);height:calc(var(--rhythm)*3);right:.25em;transition:background .2s ease-in-out;width:2.75em}.switch-rhythm span[data-v-5080c20c]{pointer-events:none}.switch-rhythm[aria-checked=true] span[data-v-5080c20c]:after{right:calc(var(--rhythm)*1.05)}.switch-rhythm[aria-checked=true] span[data-v-5080c20c]:before{background:var(--linkBlue)}.switch-rhythm .show-labels[data-v-5080c20c]:before{color:var(--black);line-height:1.6;text-indent:1.625em;width:3.5em}.switch-rhythm[aria-checked=false] .show-labels[data-v-5080c20c]:after{right:calc(var(--rhythm)*5.25)}@media screen and (-ms-high-contrast:active){.switch-rhythm span[data-v-5080c20c]:after{background-color:windowText}}',""]),t.exports=e},743:function(t,e,r){"use strict";r.r(e);var n={methods:{switchToggle:function(t){t.preventDefault(),t.target.setAttribute("aria-checked","true"===t.target.getAttribute("aria-checked")?"false":"true"),this.$store.dispatch("rhythm/toggleRhythm")}},computed:{checkToggle:function(){return this.$store.state.rhythm.toggleRhythm?this.$store.state.rhythm.toggleRhythm:"false"}}},o=(r(712),r(5)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{ref:"switch-rhythm",staticClass:"switch-rhythm",attrs:{role:"switch","aria-checked":this.checkToggle},on:{click:this.switchToggle}},[this._v("\n  Vertical Rhythm Line\n  "),e("span",{staticClass:"show-labels",attrs:{"aria-hidden":"true"}})])}),[],!1,null,"5080c20c",null);e.default=component.exports},744:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{onlyJPText:'\n        <template v-if="this.$i18n.locale !== \'ja\'">\n          <em>{{ $t("onlyJPText") }}</em>\n        </template>\n      '}}},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{attrs:{id:"about:internationalization","aria-labelledby":"about:internationalization_heading"}},[r("h3",{attrs:{id:"about:internationalization_heading"}},[t._v("\n    "+t._s(t.$t("aboutPage.subHeading.i18n"))+"\n  ")]),t._v(" "),r("p",[t._v(t._s(t.$t("aboutPage.i18n.desc01")))]),t._v(" "),r("details",[r("summary",[t._v(t._s(t.$t("details.summary")))]),t._v(" "),r("p",[t._v(t._s(t.$t("aboutPage.i18n.desc02")))]),t._v(" "),r("figure",[r("highlightjs",{attrs:{id:"only-jp-rendering",lang:"javascript",code:t.onlyJPText}}),t._v(" "),r("figcaption",[r("a",{attrs:{href:"https://github.com/yamanoku/yamanoku.github.io/blob/nuxt/components/sections/Presentations.vue#L6-L8",target:"_blank",rel:"noopener"}},[t._v("\n          Slides.vue\n          "),r("github-icon")],1)])],1)])])}),[],!1,null,null,null);e.default=component.exports},745:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{colors:[{name:"var(--black)",value:"rgb(21, 32, 43)",colorWhiteFlag:!0},{name:"var(--white)",value:"rgb(210, 210, 210)",colorWhiteFlag:!1},{name:"var(--gray)",value:"rgba(70, 70, 70, 0.5)",colorWhiteFlag:!1},{name:"var(--blue)",value:"rgb(90, 190, 255)",colorWhiteFlag:!1},{name:"var(--purple)",value:"rgb(220, 100, 220)",colorWhiteFlag:!1},{name:"var(--linkBlue)",value:"rgb(18, 122, 200)",colorWhiteFlag:!0},{name:"var(--linkVisited)",value:"rgb(21, 32, 43)",colorWhiteFlag:!0}]}}},o=(r(710),r(5)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{attrs:{id:"about:color-contrast","aria-labelledby":"about:color-contrast_heading"}},[r("h3",{attrs:{id:"about:color-contrast_heading"}},[t._v("\n    "+t._s(t.$t("aboutPage.subHeading.contrast"))+"\n  ")]),t._v(" "),r("p",[t._v(t._s(t.$t("aboutPage.contrast.desc01")))]),t._v(" "),r("details",[r("summary",[t._v("\n      "+t._s(t.$t("details.summary"))+"\n    ")]),t._v(" "),r("p",[t._v(t._s(t.$t("aboutPage.contrast.desc02")))]),t._v(" "),r("dl",{attrs:{"aria-labelledby":"about:color-contrast_heading"}},t._l(t.colors,(function(e){return r("div",{key:e.name,style:"background-color:"+e.value},[r("dt",{style:e.colorWhiteFlag?"color: #fff":""},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),r("dd",{style:e.colorWhiteFlag?"color: #fff":""},[t._v("\n          "+t._s(e.value)+"\n        ")])])})),0),t._v(" "),r("p",[t._v(t._s(t.$t("aboutPage.contrast.desc03")))])])])}),[],!1,null,"6b7a3a7e",null);e.default=component.exports},747:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{slide:'\n<ul role="list">\n  <li role="listitem" v-for="list in listItem" :key="list.title">\n    <template v-if="list.datetime">\n      <time :datetime="list.datetime">\n        {{dateReplace(list.datetime)}}\n      </time>\n      -\n    </template>\n    <template v-if="list.created_at">\n      <time :datetime="list.created_at">\n        {{dateCreated(list.created_at)}}\n      </time>\n      -\n    </template>\n    <a :href="list.url" target="_blank" rel="noopener" lang="ja">\n      {{list.title}}\n    </a>\n  </li>\n</ul>\n      '}}},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{attrs:{id:"about:component-oriented","aria-labelledby":"about:component-oriented_heading"}},[r("h3",{attrs:{id:"about:component-oriented_heading"}},[t._v("\n    "+t._s(t.$t("aboutPage.subHeading.components"))+"\n  ")]),t._v(" "),r("p",[t._v(t._s(t.$t("aboutPage.components.desc01")))]),t._v(" "),r("details",[r("summary",[t._v(t._s(t.$t("details.summary")))]),t._v(" "),r("p",[t._v(t._s(t.$t("aboutPage.components.desc02")))]),t._v(" "),r("figure",[r("highlightjs",{attrs:{language:"javascript",id:"slide-components",code:t.slide}}),t._v(" "),r("figcaption",[r("a",{attrs:{href:"https://github.com/yamanoku/yamanoku.github.io/blob/nuxt/components/global/SlideList.vue#L2-L21",target:"_blank",rel:"noopener"}},[t._v("\n          SlideList.vue\n          "),r("github-icon")],1)])],1)])])}),[],!1,null,null,null);e.default=component.exports},748:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{waiAria:'\n  <article id="about:markup" aria-labelledby="about:markup_heading">\n    <h3 id="about:markup_heading">\n      {{$t("aboutPage.subHeading.markup")}}\n    </h3>\n  </article>\n      '}}},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{attrs:{id:"about:markup","aria-labelledby":"about:markup_heading"}},[r("h3",{attrs:{id:"about:markup_heading"}},[t._v(t._s(t.$t("aboutPage.subHeading.markup")))]),t._v(" "),r("p",[t._v(t._s(t.$t("aboutPage.markup.desc01")))]),t._v(" "),r("p",[t._v(t._s(t.$t("aboutPage.markup.desc02")))]),t._v(" "),r("details",[r("summary",[t._v(t._s(t.$t("details.summary")))]),t._v(" "),r("figure",[r("highlightjs",{attrs:{lang:"html",code:t.waiAria}}),t._v(" "),r("figcaption",[r("p",[t._v(t._s(t.$t("aboutPage.markup.caption")))]),t._v(" "),r("ul",{attrs:{role:"list"}},[r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#naming_role_guidance",target:"_blank",rel:"noopener",lang:"en-US"}},[t._v("\n              5.3.4 Accessible Name Guidance by Role - WAI-ARIA Authoring\n              Practices 1.1\n              "),r("open-new-icon")],1)])])])],1)])])}),[],!1,null,null,null);e.default=component.exports},750:function(t,e,r){"use strict";r.r(e);var n=r(5),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{attrs:{id:"about:vertical-rhythm","aria-labelledby":"about:vertical-rhythm_heading"}},[r("h3",{attrs:{id:"about:vertical-rhythm_heading"}},[t._v("\n    "+t._s(t.$t("aboutPage.subHeading.verticalRhythm"))+"\n  ")]),t._v(" "),r("p",[t._v(t._s(t.$t("aboutPage.verticalRhythm.desc01")))]),t._v(" "),r("p",[t._v(t._s(t.$t("aboutPage.verticalRhythm.desc02")))]),t._v(" "),r("buttons-switch-rhythm-btn")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ButtonsSwitchRhythmBtn:r(743).default})},759:function(t,e,r){"use strict";r.r(e);var n=r(5),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("article",{attrs:{id:"about:tech-stack","aria-labelledby":"about:tech-stack_heading"}},[e("h3",{attrs:{id:"about:tech-stack_heading"}},[this._v("\n    "+this._s(this.$t("heading.techStack"))+"\n  ")]),this._v(" "),this._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{attrs:{role:"list",lang:"en"}},[r("li",{attrs:{role:"listitem"}},[t._v("\n      Nuxt.js\n      "),r("ul",{attrs:{role:"list"}},[r("li",{attrs:{role:"listitem"}},[t._v("@nuxt/content")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("@nuxtjs/axios")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("@nuxtjs/dotenv")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("@nuxtjs/pwa")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("nuxt-i18n")])])]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("Vuex （Store）")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("\n      eslint\n      "),r("ul",{attrs:{role:"list"}},[r("li",{attrs:{role:"listitem"}},[t._v("eslint-plugin-prettier")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("eslint-plugin-vue")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("eslint-plugin-vuejs-accessibility")])])]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("modern-normalize")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("Google Fonts")])])}],!1,null,null,null);e.default=component.exports},762:function(t,e,r){"use strict";r.r(e);var n=r(5),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{attrs:{id:"about:max-width","aria-labelledby":"about:max-width_heading"}},[r("h3",{attrs:{id:"about:max-width_heading"}},[t._v("\n    "+t._s(t.$t("aboutPage.subHeading.maxWidth"))+"\n  ")]),t._v(" "),r("p",[t._v(t._s(t.$t("aboutPage.maxWidth.desc01")))]),t._v(" "),r("p",[t._v(t._s(t.$t("aboutPage.maxWidth.desc02")))])])}),[],!1,null,null,null);e.default=component.exports},764:function(t,e,r){"use strict";r.r(e);var n=r(5),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("article",{attrs:{id:"about:font-size","aria-labelledby":"about:font-size_heading"}},[e("h3",{attrs:{id:"about:font-size_heading"}},[this._v("\n    "+this._s(this.$t("aboutPage.subHeading.fontSize"))+"\n  ")]),this._v(" "),e("p",[this._v(this._s(this.$t("aboutPage.fontSize.desc01")))])])}),[],!1,null,null,null);e.default=component.exports},765:function(t,e,r){"use strict";r.r(e);var n=r(5),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{attrs:{id:"about:progressive-web-application","aria-labelledby":"about:progressive-web-application_heading"}},[r("h3",{attrs:{id:"about:progressive-web-application_heading"}},[t._v("\n    "+t._s(t.$t("aboutPage.subHeading.pwa"))+"\n  ")]),t._v(" "),r("p",[t._v(t._s(t.$t("aboutPage.pwa.desc01")))]),t._v(" "),r("p",[t._v(t._s(t.$t("aboutPage.pwa.desc02")))]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/",target:"_blank",rel:"noopener",lang:"en-US"}},[t._v("\n        Your First Progressive Web App | Web Fundamentals | Google Developers\n        "),r("open-new-icon")],1)])])])}),[],!1,null,null,null);e.default=component.exports},766:function(t,e,r){"use strict";r.r(e);var n=r(5),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{attrs:{id:"about:do-not-over-design","aria-labelledby":"about:do-not-over-design_heading"}},[r("h3",{attrs:{id:"about:do-not-over-design_heading"}},[t._v("\n    "+t._s(t.$t("aboutPage.subHeading.overdesign"))+"\n  ")]),t._v(" "),r("p",[t._v(t._s(t.$t("aboutPage.overdesign.desc01")))]),t._v(" "),r("p",[t._v(t._s(t.$t("aboutPage.overdesign.desc02")))]),t._v(" "),r("ul",{attrs:{role:"list"}},[r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"//motherfuckingwebsite.com/",target:"_blank",rel:"noopener",lang:"en-US"}},[t._v("\n        This is a motherfucking website.\n        "),r("open-new-icon")],1)])])])}),[],!1,null,null,null);e.default=component.exports},775:function(t,e,r){"use strict";r.r(e);var n={mixins:[r(692).a],data:function(){return{meta:{title:this.$t("aboutPage.title"),description:this.$t("aboutPage.description"),image:"https://yamanoku.net/ogp/ogp-about@2x.png",imageAlt:this.$t("aboutPage.title")}}}},o=(r(708),r(5)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{attrs:{role:"main",id:"main"}},[r("h1",{attrs:{id:"about_heading"}},[t._v(t._s(t.$t("aboutPage.title")))]),t._v(" "),r("p",[t._v(t._s(t.$t("aboutPage.description")))]),t._v(" "),r("section",{staticClass:"toc",attrs:{id:"about:toc","aria-labelledby":"about:toc_heading"}},[r("h2",{attrs:{id:"about:toc_heading"}},[t._v(t._s(t.$t("aboutPage.heading.toc")))]),t._v(" "),r("ul",{attrs:{role:"list"}},[r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"#about:implementation"}},[t._v(t._s(t.$t("aboutPage.heading.implementation")))]),t._v(" "),r("ul",{attrs:{role:"list"}},[r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"#about:tech-stack"}},[t._v(t._s(t.$t("heading.techStack")))])]),t._v(" "),r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"#about:markup"}},[t._v(t._s(t.$t("aboutPage.subHeading.markup")))])]),t._v(" "),r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"#about:component-oriented"}},[t._v(t._s(t.$t("aboutPage.subHeading.components")))])]),t._v(" "),r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"#about:progressive-web-application"}},[t._v(t._s(t.$t("aboutPage.subHeading.pwa")))])]),t._v(" "),r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"#about:internationalization"}},[t._v(t._s(t.$t("aboutPage.subHeading.i18n")))])])])]),t._v(" "),r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"#about:design"}},[t._v(t._s(t.$t("aboutPage.heading.design")))]),t._v(" "),r("ul",{attrs:{role:"list"}},[r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"#about:do-not-over-design"}},[t._v(t._s(t.$t("aboutPage.subHeading.overdesign")))])]),t._v(" "),r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"#about:font-size"}},[t._v(t._s(t.$t("aboutPage.subHeading.fontSize")))])]),t._v(" "),r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"#about:color-contrast"}},[t._v(t._s(t.$t("aboutPage.subHeading.contrast")))])]),t._v(" "),r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"#about:max-width"}},[t._v(t._s(t.$t("aboutPage.subHeading.maxWidth")))])]),t._v(" "),r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"#about:vertical-rhythm"}},[t._v(t._s(t.$t("aboutPage.subHeading.verticalRhythm")))])])])])])]),t._v(" "),r("section",{attrs:{id:"about:implementation","aria-labelledby":"about:implementation_heading"}},[r("h2",{attrs:{id:"about:implementation_heading"}},[t._v("\n      "+t._s(t.$t("aboutPage.heading.implementation"))+"\n    ")]),t._v(" "),r("about-articles-tech-stack"),t._v(" "),r("about-articles-markup"),t._v(" "),r("about-articles-component-oriented"),t._v(" "),r("about-articles-pwa"),t._v(" "),r("about-articles-internationalization")],1),t._v(" "),r("section",{attrs:{id:"about:design","aria-labelledby":"about:design_heading"}},[r("h2",{attrs:{id:"about:design_heading"}},[t._v("\n      "+t._s(t.$t("aboutPage.heading.design"))+"\n    ")]),t._v(" "),r("p",[t._v(t._s(t.$t("aboutPage.designDescription")))]),t._v(" "),r("about-articles-do-not-over-design"),t._v(" "),r("about-articles-font-size"),t._v(" "),r("about-articles-color-contrast"),t._v(" "),r("about-articles-max-width"),t._v(" "),r("about-articles-vertical-rhythm")],1),t._v(" "),r("nuxt-link",{attrs:{to:t.localePath({name:"index"})}},[t._v(t._s(t.$t("backTop")))]),t._v(" "),r("global-local-switch")],1)}),[],!1,null,"e7de1862",null);e.default=component.exports;installComponents(component,{AboutArticlesTechStack:r(759).default,AboutArticlesMarkup:r(748).default,AboutArticlesComponentOriented:r(747).default,AboutArticlesPwa:r(765).default,AboutArticlesInternationalization:r(744).default,AboutArticlesDoNotOverDesign:r(766).default,AboutArticlesFontSize:r(764).default,AboutArticlesColorContrast:r(745).default,AboutArticlesMaxWidth:r(762).default,AboutArticlesVerticalRhythm:r(750).default,GlobalLocalSwitch:r(691).default})}}]);