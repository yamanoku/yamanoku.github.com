__NUXT_JSONP__("/archive/stylus-setting-old-ie", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P){return {data:[{page:{slug:"stylus-setting-old-ie",description:"stylusでOldIEの記述やりたいなと思った話です",title:"stylusでOldIEの記述やりたい話",date:"2016-01-21T00:00:00.000Z",author:"yamanoku",toc:[{id:L,depth:t,text:I},{id:q,depth:t,text:q},{id:x,depth:t,text:x},{id:m,depth:t,text:m}],body:{type:"root",children:[{type:b,tag:f,props:{},children:[{type:a,value:"stylus便利なのでもうピュアなcssを書きたくないのですが、かねてから気になってた問題と解決法を記載。"}]},{type:a,value:c},{type:b,tag:v,props:{id:L},children:[{type:b,tag:h,props:{href:"#old-ie-%E5%95%8F%E9%A1%8C",ariaHidden:k,tabIndex:l},children:[{type:b,tag:d,props:{className:[n,o]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Old IEっていうよりかはfilterの記述法についてです。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"通常の書き方だとこう書きたくなります。"}]},{type:a,value:c},{type:b,tag:p,props:{className:[j]},children:[{type:b,tag:r,props:{className:[s,G]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{className:[e,C]},children:[{type:a,value:K}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:y}]},{type:a,value:J},{type:b,tag:d,props:{className:[e,C]},children:[{type:a,value:"progid"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:y}]},{type:a,value:"DXImageTransform.Microsoft."},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:"DropShadow"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:A}]},{type:a,value:"color="},{type:b,tag:d,props:{className:[e,"hexcode","color"]},children:[{type:a,value:"#ffffff"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:M}]},{type:a,value:"offx="},{type:b,tag:d,props:{className:[e,O]},children:[{type:a,value:H}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:M}]},{type:a,value:"offy="},{type:b,tag:d,props:{className:[e,O]},children:[{type:a,value:H}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:B}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"しかしエラーを吐く。"}]},{type:a,value:c},{type:b,tag:p,props:{className:[j]},children:[{type:b,tag:r,props:{className:[s,"language-bash"]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"expected "},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:"\"indent\""}]},{type:a,value:", got "},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:"\"outdent\""}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"どうすんだよとのことなので調べました。"}]},{type:a,value:c},{type:b,tag:v,props:{id:q},children:[{type:b,tag:h,props:{href:"#%E8%A7%A3%E6%B1%BA%E6%B3%95",ariaHidden:k,tabIndex:l},children:[{type:b,tag:d,props:{className:[n,o]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fstylus-lang.com\u002Fdocs\u002Fselectors.html#disambiguation",rel:[D,E],target:F},children:[{type:a,value:"http:\u002F\u002Fstylus-lang.com\u002Fdocs\u002Fselectors.html#disambiguation"}]},{type:a,value:"の最下部でこういう記載。"}]},{type:a,value:c},{type:b,tag:p,props:{className:[j]},children:[{type:b,tag:r,props:{className:[s,G]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"filter "},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:N}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:A}]},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:"'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)'"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:B}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"上にならって書き直してみる。"}]},{type:a,value:c},{type:b,tag:p,props:{className:[j]},children:[{type:b,tag:r,props:{className:[s,G]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{className:[e,C]},children:[{type:a,value:K}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:y}]},{type:a,value:J},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:N}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:A}]},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:"\"progid:DXImageTransform.Microsoft.DropShadow(color=#ffffff,offx=1,offy=1)\""}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:B}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"うまくいきます。unquoteで括れば良いとのことです。なるほど。"}]},{type:a,value:c},{type:b,tag:v,props:{id:x},children:[{type:b,tag:h,props:{href:"#%E6%96%B0%E3%81%9F%E3%81%AA%E3%82%8B%E5%95%8F%E9%A1%8C",ariaHidden:k,tabIndex:l},children:[{type:b,tag:d,props:{className:[n,o]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"gulpfile.js"}]},{type:a,value:"で単に"},{type:b,tag:i,props:{},children:[{type:a,value:"stylus"}]},{type:a,value:"使うだけの設定ならいいんですが、"},{type:b,tag:h,props:{href:"http:\u002F\u002Fpleeease.io\u002Fdocs\u002F",rel:[D,E],target:F},children:[{type:a,value:"gulp-pleeease"}]},{type:a,value:"を設定しているとこんなことが起きます。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fgyazo.com\u002F85334f91be37f4612b243e5b54366ed5",rel:[D,E],target:F},children:[{type:b,tag:"img",props:{alt:"Image from Gyazo",src:"https:\u002F\u002Fi.gyazo.com\u002F85334f91be37f4612b243e5b54366ed5.png",loading:"lazy"},children:[]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"何故。。。"}]},{type:a,value:c},{type:b,tag:v,props:{id:m},children:[{type:b,tag:h,props:{href:"#%E4%BB%8A%E8%80%83%E3%81%88%E3%82%89%E3%82%8C%E3%82%8B%E8%A7%A3%E6%B1%BA%E7%AD%96",ariaHidden:k,tabIndex:l},children:[{type:b,tag:d,props:{className:[n,o]},children:[]}]},{type:a,value:m}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"というわけでこのpleeease問題ですがパッと考えたところで以下の解決策です。"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:"pleeease使うのをやめる"}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:"pleeeaseでfilter設定とかOld IE設定とかなんとかでゴリ押す（未確認）"}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:"stylusを捨てる"}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:"IE対応させようとしたクライアントを"},{type:b,tag:"s",props:{},children:[{type:a,value:"殴り"}]},{type:a,value:"説得しに行く"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"出来る限り平和的解決を望んでいますが、どなたか良い方法があれば教えて下さい。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"こちらからは以上です。"}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fstylus-setting-old-ie",extension:".md",createdAt:P,updatedAt:P}}],fetch:[],mutations:[]}}("text","element","\n","span","token","p","punctuation","a","code","nuxt-content-highlight","true",-1,"今考えられる解決策","icon","icon-link","div","解決法","pre","line-numbers",2,"li","h2","string","新たなる問題",":","function","(",")","property","noopener","noreferrer","_blank","language-css","1","Old IE 問題"," ","filter","old-ie-問題",",","unquote","number","2021-01-17T06:38:36.131Z")));