__NUXT_JSONP__("/archive/get-window-width-with-jquery", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai){return {data:[{page:{slug:"get-window-width-with-jquery",description:"jQueryを使ってスクロールバーも入れて幅検知する話",title:"jQuery - スクロールバーも入れて幅検知する",date:"2015-12-14T00:00:00.000Z",author:"yamanoku",toc:[{id:y,depth:T,text:y},{id:F,depth:T,text:F},{id:I,depth:T,text:I}],body:{type:"root",children:[{type:b,tag:L,props:{id:y},children:[{type:b,tag:A,props:{href:"#%E8%83%8C%E6%99%AF",ariaHidden:Q,tabIndex:R},children:[{type:b,tag:c,props:{className:[J,S]},children:[]}]},{type:a,value:y}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"レスポンシブさせるときにサブカラムの幅は維持してメインカラムの幅を縮めようとしたかった。そしてある幅になったらカラム落ちさせて1カラムにさせる。"}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"やりたいこととして、リサイズ＆ロードさせて、全体分の幅からサブカラム＋横のmargin分を引いた値をメインカラムの幅にする計算をした。"}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"自分の環境では問題なく動いてたのだが、他の環境ではサブカラムが下に崩れてしまう状態が出た。"}]},{type:a,value:g},{type:b,tag:L,props:{id:F},children:[{type:b,tag:A,props:{href:"#%E5%8E%9F%E5%9B%A0",ariaHidden:Q,tabIndex:R},children:[{type:b,tag:c,props:{className:[J,S]},children:[]}]},{type:a,value:F}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"全体の幅をレスポンスする時にスクロールバーの部分を加味していなかった。"}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"つまり1カラム落ちさせるタイミングの時、スクロールバー幅分だけズレて表示されてしまうみたい。"}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"全体の幅を取るために以下のように設定してた。"}]},{type:a,value:g},{type:b,tag:Z,props:{className:[U]},children:[{type:b,tag:ad,props:{className:[ae,af]},children:[{type:b,tag:ag,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"maybe-class-name"]},children:[{type:a,value:"Width"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,x,w]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,r,k,n]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"これだと表示されているエリアのみの取得になるらしい"}]},{type:a,value:g},{type:b,tag:L,props:{id:I},children:[{type:b,tag:A,props:{href:"#%E5%AF%BE%E5%BF%9C%E7%AD%96",ariaHidden:Q,tabIndex:R},children:[{type:b,tag:c,props:{className:[J,S]},children:[]}]},{type:a,value:I}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"以下のように変更・動作させるように変更"}]},{type:a,value:g},{type:b,tag:Z,props:{className:[U]},children:[{type:b,tag:ad,props:{className:[ae,af]},children:[{type:b,tag:ag,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,x,w]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,r,k,n]},children:[{type:a,value:"on"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"'load resize'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:t}]},{type:a,value:" $contents "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"'#contents'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:t}]},{type:a,value:" $main "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"'#main'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:t}]},{type:a,value:" $sub "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"'#sub'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:t}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x,w]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"innerWidth"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:X}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x,w]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"documentElement"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:X}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x,w]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"body"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,l,G]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u003C"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:_}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"&&"}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"1001"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:t}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:s}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,r,k,n]},children:[{type:a,value:"parent"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,r,k,n]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:t}]},{type:a,value:" mainWidth "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:s}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,r,k,n]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:t}]},{type:a,value:" w "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:s}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"-"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"254"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"\u002F\u002F 254はサブカラム＋横margin分"}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,r,k,n]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:" w"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l,G]},children:[{type:a,value:ah}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l,G]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:_}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,r,k,n]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"'966'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l,G]},children:[{type:a,value:ah}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,r,k,n]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"'100%'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"勉強になりました。"}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:b,tag:A,props:{href:"https:\u002F\u002Fchaika.hatenablog.com\u002Fentry\u002F2015\u002F02\u002F12\u002F054602",rel:["noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"javascript jQuery スクロールバーの幅を含むウィンドウサイズを取得したい。 - かもメモ"}]}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fget-window-width-with-jquery",extension:".md",createdAt:ai,updatedAt:ai}}],fetch:[],mutations:[]}}("text","element","span","token","punctuation"," ","\n",")","(","operator","function","keyword",".","property-access",";","p","string","method","=","var","\n  ","$","variable","dom","背景","}","a","{",",","\n    ","number","原因","control-flow"," sWindow ","対応策","icon","window","h2","outerWidth","'width'","css","\n    $main","true",-1,"icon-link",2,"nuxt-content-highlight","document","\n\n  ","||","if","div","1200","\u003E=","clientWidth"," allWidth "," $main","pre","language-js","line-numbers","code","else","2020-12-10T01:44:52.350Z")));