(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{240:function(t,e,r){"use strict";r.r(e);var l=r(4),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{attrs:{"aria-label":t.$t("multilingual")}},[r("h2",{attrs:{id:"local-switching"}},[t._v(t._s(t.$t("multilingual")))]),t._v(" "),r("ul",{attrs:{role:"list"}},t._l(t.$i18n.locales,(function(e){return r("li",{key:e.code,attrs:{role:"listitem"}},[r("nuxt-link",{attrs:{lang:e.code,to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name))])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},246:function(t,e,r){t.exports=r.p+"img/product-about-accessibility-with-vuejs.ca3f8e8.webp"},247:function(t,e,r){t.exports=r.p+"img/product-about-accessibility-with-vuejs.e1a8517.png"},248:function(t,e,r){t.exports=r.p+"img/product-web-accessibility-for-beginner.a22bc48.webp"},249:function(t,e,r){t.exports=r.p+"img/product-web-accessibility-for-beginner.06e9f6f.jpg"},261:function(t,e,r){t.exports=r.p+"img/product-reading.8293050.webp"},262:function(t,e,r){t.exports=r.p+"img/product-reading.cb84e5a.png"},263:function(t,e,r){t.exports=r.p+"img/product-vue-portfolio-template.595666b.webp"},264:function(t,e,r){t.exports=r.p+"img/product-vue-portfolio-template.9229408.png"},285:function(t,e,r){"use strict";r.r(e);r(37);var l={props:{listArray:Array},data:function(){return{listItem:this.listArray}},methods:{dateReplace:function(t){return t.replace(/T.*$/,"").replace(/(-)/g,"/")},dateCreated:function(t){return t.replace(/T.*$/,"").replace(/(-)/g,"/")}}},n=r(4),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{attrs:{role:"list"}},t._l(t.listItem,(function(e){return r("li",{key:e.title,attrs:{role:"listitem"}},[e.datetime?[r("time",{attrs:{datetime:t.dateReplace(e.datetime)}},[t._v(t._s(t.dateReplace(e.datetime)))]),t._v("\n      -\n    ")]:e.created_at?[r("time",{attrs:{datetime:t.dateCreated(e.created_at)}},[t._v(t._s(t.dateCreated(e.created_at)))]),t._v("\n      -\n    ")]:t._e(),t._v(" "),r("a",{attrs:{href:e.url,target:"_blank",rel:"noopener",lang:"ja"}},[t._v("\n      "+t._s(e.title)+"\n      "),r("open-new-icon")],1)],2)})),0)}),[],!1,null,null,null);e.default=component.exports},292:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{listStage:[{title:"PWA is Progressive Web Accessibility",url:"https://docs.google.com/presentation/d/1VIBjWSrWcZ0ekKNIQ9Vl0pMdfGym1lrXi3Krq_o1EEo/edit?usp=sharing",datetime:"2020-05-19T15:00:00.000Z"},{title:"PWA RTA in Japan",url:"https://docs.google.com/presentation/d/1rLn_lNGD-_5Tk0-Bx-5fGPwGMjnUemtYeXjnKRaoB68/edit?usp=sharing",datetime:"2020-01-31T15:00:00.000Z"},{title:"自分の周辺情報をまとめる静的サイトをつくった",url:"https://scrapbox.io/yamanoku/%E8%87%AA%E5%88%86%E3%81%AE%E5%91%A8%E8%BE%BA%E6%83%85%E5%A0%B1%E3%82%92%E3%81%BE%E3%81%A8%E3%82%81%E3%82%8B%E9%9D%99%E7%9A%84%E3%82%B5%E3%82%A4%E3%83%88%E3%82%92%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%9F",datetime:"2019-12-19T15:00:00.000Z"},{title:"ぼくとScrapboxと2019",url:"https://scrapbox.io/yamanoku/%E3%81%BC%E3%81%8F%E3%81%A8Scrapbox%E3%81%A82019",datetime:"2019-12-10T15:00:00.000Z"},{title:"Design Tokensを考える前に俺たちは変数名について考え直すことがあるのではないか ",url:"https://scrapbox.io/yamanoku/Design_Tokens%E3%82%92%E8%80%83%E3%81%88%E3%82%8B%E5%89%8D%E3%81%AB%E4%BF%BA%E3%81%9F%E3%81%A1%E3%81%AF%E5%A4%89%E6%95%B0%E5%90%8D%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E8%80%83%E3%81%88%E7%9B%B4%E3%81%99%E3%81%93%E3%81%A8%E3%81%8C%E3%81%82%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E3%81%8B",datetime:"2019-10-02T15:00:00.000Z"},{title:"stylelint-a11yについて調べてわかったこと",url:"https://scrapbox.io/yamanoku/stylelint-a11y%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E8%AA%BF%E3%81%B9%E3%81%A6%E3%82%8F%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8",datetime:"2019-08-04T15:00:00.000Z"},{title:"denoについて調べたことを共有する",url:"https://scrapbox.io/yamanoku/deno%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E8%AA%BF%E3%81%B9%E3%81%9F%E3%81%93%E3%81%A8%E3%82%92%E5%85%B1%E6%9C%89%E3%81%99%E3%82%8B",datetime:"2019-06-27T15:00:00.000Z"},{title:"インプットを限りなくやったら見える世界は変わってくる",url:"https://scrapbox.io/yamanoku/%E3%82%A4%E3%83%B3%E3%83%97%E3%83%83%E3%83%88%E3%82%92%E9%99%90%E3%82%8A%E3%81%AA%E3%81%8F%E3%82%84%E3%81%A3%E3%81%9F%E3%82%89%E8%A6%8B%E3%81%88%E3%82%8B%E4%B8%96%E7%95%8C%E3%81%AF%E5%A4%89%E3%82%8F%E3%81%A3%E3%81%A6%E3%81%8F%E3%82%8B",datetime:"2019-05-28T15:00:00.000Z"},{title:"scroll handlerを捨てよ、Intersection Observerへ出よう",url:"https://scrapbox.io/yamanoku/scroll_handler%E3%82%92%E6%8D%A8%E3%81%A6%E3%82%88%E3%80%81Intersection_Observer%E3%81%B8%E5%87%BA%E3%82%88%E3%81%86",datetime:"2018-11-21T15:00:00.000Z"},{title:"outline: none;",url:"https://scrapbox.io/yamanoku/outline:_none%3B",datetime:"2018-11-08T15:00:00.000Z"}],listWrite:[{title:"東京都 新型コロナウイルス対策サイトにアクセシビリティ視点でコントリビュートしてみた",url:"https://engineer.crowdworks.jp/entry/covid-19_site_a11y_contribute",datetime:"2020-03-25T03:00:00.000Z"},{title:"みんなに知ってもらいたいデザインシステムのこと",url:"https://note.com/yamanoku/n/n8acc38df2902",datetime:"2019-12-15T00:00:00.000Z"},{title:"Nota社主催でScrapbox勉強会をやってもらった話",url:"https://blog.geek.co.jp/posts/2411/",datetime:"2018-07-13T00:00:00.000Z"}]}}},n=r(4),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"slides","aria-labelledby":"slides_heading"}},[r("h2",{attrs:{id:"slides_heading"}},[t._v("\n    "+t._s(t.$t("heading.slides.title"))+"\n  ")]),t._v(" "),"ja"!==this.$i18n.locale?[r("em",[t._v(t._s(t.$t("onlyJPText")))])]:t._e(),t._v(" "),r("h3",{attrs:{id:"slides-stage"}},[t._v("\n    "+t._s(t.$t("heading.slides.stage"))+"\n  ")]),t._v(" "),r("common-slide-list",{attrs:{listArray:t.listStage}}),t._v(" "),r("h3",{attrs:{id:"slides-write"}},[t._v("\n    "+t._s(t.$t("heading.slides.write"))+"\n  ")]),t._v(" "),r("common-slide-list",{attrs:{listArray:t.listWrite}})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonSlideList:r(285).default})},296:function(t,e,r){"use strict";r.r(e);var l=r(4),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("article",{attrs:{id:"product:reading","aria-labelledby":"product:reading_heading"}},[l("h3",{attrs:{id:"product:reading_heading"}},[t._v(t._s(t.$t("product.reading")))]),t._v(" "),l("figure",{attrs:{"aria-labelledby":"product:reading_heading","aria-describedby":"product:reading_caption"}},[l("picture",[l("source",{attrs:{srcset:r(261),type:"image/webp"}}),t._v(" "),l("img",{attrs:{src:r(262),alt:t.$t("prefixAlt.screenshot")+t.$t("product.reading")}})]),t._v(" "),l("figcaption",{attrs:{id:"product:reading_caption"}},[t._v("\n      "+t._s(t.$t("product.description.reading"))+"\n    ")])]),t._v(" "),l("h4",{attrs:{id:"related:reading_heading"}},[t._v(t._s(t.$t("heading.relatedList")))]),t._v(" "),l("ul",{attrs:{role:"list","aria-labelledby":"related:reading_heading"}},[l("li",{attrs:{role:"listitem"}},[l("a",{attrs:{href:"https://reading.yamanoku.net",target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.$t("product.reading"))+"\n        "),l("open-new-icon")],1)]),t._v(" "),l("li",{attrs:{role:"listitem"}},[l("a",{attrs:{href:"https://scrapbox.io/yamanoku/Reading%E2%80%A6#5b1f8344c2cd3f000095e9c0",target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.$t("product.updateInfo"))+"\n        "),l("article-icon")],1)]),t._v(" "),l("li",{attrs:{role:"listitem"}},[l("a",{attrs:{href:"https://www.figma.com/file/IHsJKRaJXepsqcbX91iQ6YNV/Reading...-Components?node-id=44%3A23",target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.$t("product.designFigma"))+"\n        "),l("image-icon")],1)])]),t._v(" "),l("h4",{attrs:{id:"teck-stack:reading_heading"}},[t._v(t._s(t.$t("heading.techStack")))]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{attrs:{role:"list","aria-labelledby":"teck-stack:reading_heading"}},[r("li",{attrs:{role:"listitem"}},[t._v("Nuxt.js")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("Nuxt PWA")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("vue-paginate")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("axios")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("modern-normalize")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("AWS API Gateway")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("AWS Lambda Function")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("Netlify")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("CircleCI")])])}],!1,null,null,null);e.default=component.exports},297:function(t,e,r){"use strict";r.r(e);var l=r(4),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"contact","aria-labelledby":"contact-heading"}},[e("h2",{attrs:{id:"contact-heading"}},[this._v("\n    "+this._s(this.$t("heading.contact"))+"\n  ")]),this._v(" "),e("address",[e("a",{attrs:{href:"mailto:0910yama@gmail.com"}},[this._v("\n      0910yama@gmail.com\n      "),e("mail-icon")],1)])])}),[],!1,null,null,null);e.default=component.exports},298:function(t,e,r){"use strict";r.r(e);var l=r(4),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"sns","aria-labelledby":"sns_heading"}},[r("h2",{attrs:{id:"sns_heading"}},[t._v("\n    "+t._s(t.$t("heading.sns"))+"\n  ")]),t._v(" "),r("ul",{attrs:{role:"list"}},[r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"https://twitter.com/yamanoku",target:"_blank",rel:"noopener"}},[t._v(t._s(t.$t("sns.twitter")))])]),t._v(" "),r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"https://facebook.com/yamanoku",target:"_blank",rel:"noopener"}},[t._v(t._s(t.$t("sns.facebook")))])]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("\n      "+t._s(t.$t("sns.tumblr.tumblr"))+"\n      "),r("ul",{attrs:{role:"list"}},[r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"https://yamanoku.tumblr.com",target:"_blank",rel:"noopener"}},[t._v(t._s(t.$t("sns.tumblr.tumblog")))])]),t._v(" "),r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"https://yamagraph.tumblr.com",target:"_blank",rel:"noopener"}},[t._v(t._s(t.$t("sns.tumblr.artworks")))])])])]),t._v(" "),r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"https://github.com/yamanoku",target:"_blank",rel:"noopener"}},[t._v(t._s(t.$t("sns.github")))])])])])}),[],!1,null,null,null);e.default=component.exports},300:function(t,e,r){"use strict";r.r(e);var l=r(4),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"product","aria-labelledby":"product_heading"}},[e("h2",{attrs:{id:"product_heading"}},[this._v("\n    "+this._s(this.$t("heading.productList"))+"\n  ")]),this._v(" "),e("products-vuejs-accessibility-page"),this._v(" "),e("products-accessibility-beginner"),this._v(" "),e("products-reading"),this._v(" "),e("products-vue-portfolio")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductsVuejsAccessibilityPage:r(313).default,ProductsAccessibilityBeginner:r(308).default,ProductsReading:r(296).default,ProductsVuePortfolio:r(312).default})},301:function(t,e,r){"use strict";r.r(e);var l=r(4),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"career","aria-labelledby":"career_heading"}},[r("h2",{attrs:{id:"career_heading"}},[t._v("\n    "+t._s(t.$t("heading.career"))+"\n  ")]),t._v(" "),r("p",[t._v(t._s(t.$t("career.desc01")))]),t._v(" "),r("p",[t._v(t._s(t.$t("career.desc02")))]),t._v(" "),r("p",[t._v(t._s(t.$t("career.desc03")))]),t._v(" "),r("p",[t._v(t._s(t.$t("career.desc04")))]),t._v(" "),r("h3",{attrs:{id:"related:career_heading"}},[t._v(t._s(t.$t("heading.relatedList")))]),t._v(" "),r("ul",{attrs:{role:"list","aria-labelledby":"related:career_heading"}},[r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"https://github.com/yamanoku/Curriculum-Vitae/blob/master/README.md",target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.$t("career.curriculumVitae"))+"\n        "),r("github-icon")],1)]),t._v(" "),r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"https://scrapbox.io/yamanoku/Skill_Sets",target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.$t("career.skillSet"))+"\n        "),r("article-icon")],1)]),t._v(" "),r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"https://www.wantedly.com/users/347527",target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.$t("career.wantedly"))+"\n        "),r("open-new-icon")],1)]),t._v(" "),r("li",{attrs:{role:"listitem"}},[r("a",{attrs:{href:"https://lapras.com/public/ZQJMZYO",target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.$t("career.lapras"))+"\n        "),r("open-new-icon")],1)])])])}),[],!1,null,null,null);e.default=component.exports},302:function(t,e,r){"use strict";r.r(e);var l=r(4),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"basic","aria-labelledby":"basic-heading"}},[r("h2",{attrs:{id:"basic-heading"}},[t._v(t._s(t.$t("heading.basic")))]),t._v(" "),"ja"===this.$i18n.locale?[t._v("\n    大山奥人\n    "),r("small",[t._v("（おおやまおくと）")]),t._v("\n    。"+t._s(t.$t("info.caption"))+"\n  ")]:[t._v("Okuto Oyama. "+t._s(t.$t("info.caption")))],t._v(" "),r("h3",{attrs:{id:"job_heading"}},[t._v(t._s(t.$t("heading.job")))]),t._v(" "),r("ul",{attrs:{role:"list","aria-labelledby":"job_heading"}},[r("li",{attrs:{role:"listitem"}},[t._v(t._s(t.$t("job.1")))]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v(t._s(t.$t("job.2")))]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v(t._s(t.$t("job.3")))])])],2)}),[],!1,null,null,null);e.default=component.exports},308:function(t,e,r){"use strict";r.r(e);var l=r(4),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("article",{attrs:{id:"product:web-accessibility-for-beginner","aria-labelledby":"product:web-accessibility-for-beginner_heading"}},[l("h3",{attrs:{id:"product:web-accessibility-for-beginner_heading"}},[t._v("\n    "+t._s(t.$t("product.wafb.title"))+"\n  ")]),t._v(" "),l("figure",{attrs:{"aria-labelledby":"product:web-accessibility-for-beginner_heading","aria-describedby":"product:web-accessibility-for-beginner_caption"}},[l("picture",[l("source",{attrs:{srcset:r(248),type:"image/webp"}}),t._v(" "),l("img",{attrs:{src:r(249),alt:t.$t("prefixAlt.photo")+t.$t("product.wafb.title")}})]),t._v(" "),l("figcaption",{attrs:{id:"product:web-accessibility-for-beginner_caption"}},[t._v("\n      "+t._s(t.$t("product.description.wafb"))+"\n    ")])]),t._v(" "),"ja"!==this.$i18n.locale?[l("p",[l("em",[t._v(t._s(t.$t("onlyJPText")))])])]:t._e(),t._v(" "),l("h4",{attrs:{id:"related:web-accessibility-for-beginner_heading"}},[t._v("\n    "+t._s(t.$t("heading.relatedList"))+"\n  ")]),t._v(" "),l("ul",{attrs:{role:"list","aria-labelledby":"related:web-accessibility-for-beginner_heading"}},[l("li",{attrs:{role:"listitem"}},[l("a",{attrs:{href:"https://techbookfest.org/event/tbf05/circle/41130001",target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.$t("product.wafb.circleDetail"))+"\n        "),l("open-new-icon")],1)]),t._v(" "),l("li",{attrs:{role:"listitem"}},[l("a",{attrs:{href:"https://booth.pm/ja/items/1044446",target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.$t("product.wafb.boothLink"))+"\n        "),l("shopping-icon")],1)]),t._v(" "),l("li",{attrs:{role:"listitem"}},[l("a",{attrs:{href:"https://note.mu/yamanoku/n/n3487a344ff84",target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.$t("product.wafb.noteLink"))+"\n        "),l("shopping-icon")],1)])])],2)}),[],!1,null,null,null);e.default=component.exports},312:function(t,e,r){"use strict";r.r(e);var l=r(4),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("article",{attrs:{id:"product:vue-portfolio-template","aria-labelledby":"product:vue-portfolio-template_heading"}},[l("h3",{attrs:{id:"product:vue-portfolio-template_heading"}},[t._v("\n    "+t._s(t.$t("product.vuePortfolio"))+"\n  ")]),t._v(" "),l("figure",{attrs:{"aria-labelledby":"product:vue-portfolio-template_heading","aria-describedby":"product:vue-portfolio-template_caption"}},[l("picture",[l("source",{attrs:{srcset:r(263),type:"image/webp"}}),t._v(" "),l("img",{attrs:{src:r(264),alt:t.$t("prefixAlt.screenshot")+t.$t("product.vuePortfolio")}})]),t._v(" "),l("figcaption",{attrs:{id:"product:vue-portfolio-template_caption"}},[t._v("\n      "+t._s(t.$t("product.description.vuePortfolio"))+"\n    ")])]),t._v(" "),l("h4",{attrs:{id:"related:vue-portfolio_heading"}},[t._v(t._s(t.$t("heading.relatedList")))]),t._v(" "),l("ul",{attrs:{role:"list","aria-labelledby":"related:vue-portfolio_heading"}},[l("li",{attrs:{role:"listitem"}},[l("a",{attrs:{href:"https://vue-portfolio.yamanoku.net/",target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.$t("product.vuePortfolio"))+"\n        "),l("open-new-icon")],1)]),t._v(" "),l("li",{attrs:{role:"listitem"}},[l("a",{attrs:{href:"https://www.figma.com/file/4yN9uOXGISbSTocH23EX8O/vue_portfolio_template-Style?node-id=0%3A1",target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.$t("product.designFigma"))+"\n        "),l("image-icon")],1)])]),t._v(" "),l("h4",{attrs:{id:"tech-stack:vue-portfolio_heading"}},[t._v(t._s(t.$t("heading.techStack")))]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{attrs:{role:"list","aria-labelledby":"tech-stack:vue-portfolio_heading"}},[r("li",{attrs:{role:"listitem"}},[t._v("Vue.js")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("vue-cli")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("vue-router")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("webpack")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("PostCSS")]),t._v(" "),r("li",{attrs:{role:"listitem"}},[t._v("Netlify")])])}],!1,null,null,null);e.default=component.exports},313:function(t,e,r){"use strict";r.r(e);var l=r(4),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("article",{attrs:{id:"product:about-accessibility-with-vuejs","aria-labelledby":"product:about-accessibility-with-vuejs_heading"}},[l("h3",{attrs:{id:"product:about-accessibility-with-vuejs_heading"}},[t._v("\n    "+t._s(t.$t("product.vueA11yPage.title"))+"\n  ")]),t._v(" "),l("figure",{attrs:{"aria-labelledby":"product:about-accessibility-with-vuejs_heading","aria-describedby":"product:about-accessibility-with-vuejs_caption"}},[l("picture",[l("source",{attrs:{srcset:r(246),type:"image/webp"}}),t._v(" "),l("img",{attrs:{src:r(247),alt:t.$t("prefixAlt.photo")+t.$t("product.vueA11yPage.title")}})]),t._v(" "),l("figcaption",{attrs:{id:"product:about-accessibility-with-vuejs_caption"}},[t._v("\n      "+t._s(t.$t("product.description.vueA11yPage"))+"\n    ")])]),t._v(" "),l("p",[l("nuxt-link",{attrs:{to:t.localePath("/vue-a11y")}},[t._v("\n      "+t._s(t.$t("product.vueA11yPage.link"))+"\n    ")])],1),t._v(" "),l("section",{attrs:{id:"product:about-accessibility-with-vuejs_information","aria-labelledby":"product:about-accessibility-with-vuejs_subheading"}},[l("h4",{attrs:{id:"product:about-accessibility-with-vuejs_subheading"}},[t._v("\n      "+t._s(t.$t("vueA11yPage.subHeading.info"))+"\n    ")]),t._v(" "),l("ul",[l("li",[l("time",{attrs:{datetime:"2019-12-21"}},[t._v("2019/12/21")]),t._v("\n        "+t._s(t.$t("product.vueA11yPage.info.listitem01"))+"\n      ")]),t._v(" "),l("li",[l("time",{attrs:{datetime:"2020-02-28"}},[t._v("2020/02/28")]),t._v(" "),l("i18n",{attrs:{path:"product.vueA11yPage.info.listitem02"},scopedSlots:t._u([{key:"awesomeA11yVue",fn:function(){return[l("a",{attrs:{href:"https://github.com/vue-a11y/awesome-a11y-vue/pull/3",target:"_blank",rel:"noopener",lang:"en"}},[t._v("awesome-a11y-vue"),l("open-new-icon")],1)]},proxy:!0}])})],1),t._v(" "),l("li",[l("time",{attrs:{datetime:"2020-05-03"}},[t._v("2020/05/03")]),t._v("\n        "+t._s(t.$t("product.vueA11yPage.info.listitem03"))+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,r){"use strict";r.r(e);var l={head:function(){return{bodyAttrs:{class:this.$store.state.rhythm.toggleRhythm?"is-rhythm":""}}}},n=r(4),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{attrs:{role:"main",id:"main"}},[r("h1",[t._v("yamanoku.net")]),t._v(" "),r("SectionsBasicInfo"),t._v(" "),r("SectionsCareerInfo"),t._v(" "),r("SectionsProducts"),t._v(" "),r("SectionsSlides"),t._v(" "),r("SectionsSns"),t._v(" "),r("SectionsAddress"),t._v(" "),r("CommonLocalSwitch")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionsBasicInfo:r(302).default,SectionsCareerInfo:r(301).default,SectionsProducts:r(300).default,SectionsSlides:r(292).default,SectionsSns:r(298).default,SectionsAddress:r(297).default,CommonLocalSwitch:r(240).default})}}]);