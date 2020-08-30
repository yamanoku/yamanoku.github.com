__NUXT_JSONP__("/archive/summary-promise-process", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av){return {data:[{page:{title:"Promise処理について雑にまとめる",description:"JavaScript ES6 Promise",date:"2017-05-28T00:00:00.000Z",author:"yamanoku",toc:[{id:at,depth:ag,text:ao},{id:V,depth:H,text:V},{id:W,depth:H,text:W},{id:au,depth:H,text:aj},{id:am,depth:ag,text:an},{id:X,depth:ag,text:X},{id:ap,depth:H,text:aq},{id:ar,depth:H,text:as},{id:aa,depth:H,text:aa}],body:{type:"root",children:[{type:b,tag:ad,props:{id:at},children:[{type:b,tag:q,props:{href:"#promise%E3%81%A8%E3%81%AF",ariaHidden:w,tabIndex:v},children:[{type:b,tag:c,props:{className:[y,x]},children:[]}]},{type:a,value:ao}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"簡単に言うと非同期処理を行う時にコールバック地獄、ネストの深層化を回避して記述をだいぶ楽にするオブジェクト。ES2015です。"}]},{type:a,value:f},{type:b,tag:I,props:{id:V},children:[{type:b,tag:q,props:{href:"#%E9%9D%9E%E5%90%8C%E6%9C%9F%E5%87%A6%E7%90%86%E3%81%A8%E3%81%AF",ariaHidden:w,tabIndex:v},children:[{type:b,tag:c,props:{className:[y,x]},children:[]}]},{type:a,value:V}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"例えばAの処理の後にBの処理があるとする。JavaScriptとは"},{type:b,tag:ak,props:{},children:[{type:a,value:"シングルスレッドで動く"}]},{type:a,value:"＝"},{type:b,tag:ak,props:{},children:[{type:a,value:"同時に処理を行うということができない"}]},{type:a,value:"ものなので、通常であればA、Bの処理で動く。その辺の順番を変えて処理を行うのを非同期処理という。"}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"分かりやすい例はApiと連携するAjax通信を受け取ったレスポンス(200とか404とか)の結果によって処理を行うやつ。"}]},{type:a,value:f},{type:b,tag:I,props:{id:W},children:[{type:b,tag:q,props:{href:"#%E9%9D%9E%E5%90%8C%E6%9C%9F%E5%87%A6%E7%90%86%E3%81%AE%E4%BE%8B",ariaHidden:w,tabIndex:v},children:[{type:b,tag:c,props:{className:[y,x]},children:[]}]},{type:a,value:W}]},{type:a,value:f},{type:b,tag:al,props:{},children:[{type:a,value:f},{type:b,tag:z,props:{},children:[{type:a,value:"setTimeout"}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:a,value:"setInterval"}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:a,value:"addEventListener（イベントハンドラ）"}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:a,value:"jQuery.Deferred"}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:a,value:"Promise ←これ"}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:a,value:"async\u002Fawait"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:I,props:{id:au},children:[{type:b,tag:q,props:{href:"#%E4%BE%8B----ajax%E9%80%9A%E4%BF%A1%E5%BE%8C%E9%A0%86%E7%95%AA%E3%81%AB%E5%87%A6%E7%90%86%E3%82%92%E8%A1%8C%E3%81%86",ariaHidden:w,tabIndex:v},children:[{type:b,tag:c,props:{className:[y,x]},children:[]}]},{type:a,value:aj}]},{type:a,value:f},{type:b,tag:ab,props:{className:[U]},children:[{type:b,tag:$,props:{className:[_,Z]},children:[{type:b,tag:Y,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:T}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,F,g]},children:[{type:a,value:O}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:R}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F API1にアクセス"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"doAjaxStuff"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"someOptions"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,F,g]},children:[{type:a,value:"success"}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:":"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:"data"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F 成功したら渡されたfunctionを実行"}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F fetchSomething1と同じようにそれぞれ別のAPIにアクセスするfunction群"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:T}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,F,g]},children:[{type:a,value:P}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:R}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:af}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:T}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,F,g]},children:[{type:a,value:N}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:R}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:af}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:T}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,F,g]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:R}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:af}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:T}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,F,g]},children:[{type:a,value:J}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:R}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F APIにアクセスして取得してきたデータを使って何かする"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"こういう関数を登録しておき、順番に処理を行うとする。通常だと"}]},{type:a,value:f},{type:b,tag:ab,props:{className:[U]},children:[{type:b,tag:$,props:{className:[_,Z]},children:[{type:b,tag:Y,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"こうなるが、これが"}]},{type:a,value:f},{type:b,tag:ab,props:{className:[U]},children:[{type:b,tag:$,props:{className:[_,Z]},children:[{type:b,tag:Y,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,t,g,s]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,t,g,s]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,t,g,s]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,t,g,s]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"こうなる。コールバック地獄、ネスト深層化問題の回避がよく分かる。"}]},{type:a,value:f},{type:b,tag:ab,props:{className:[U]},children:[{type:b,tag:$,props:{className:[_,Z]},children:[{type:b,tag:Y,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F Callback"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"\n        "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F fetchSomething4のエラー処理"}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F fetchSomething3のエラー処理"}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F fetchSomething2のエラー処理"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F fetchSomething1のエラー処理"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F Promise then & catch"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,t,g,s]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,t,g,s]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F* fetchSomething1のエラー処理 *\u002F"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,t,g,s]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,t,g,s]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F* fetchSomething2のエラー処理 *\u002F"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,t,g,s]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,t,g,s]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F* fetchSomething3のエラー処理 *\u002F"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,t,g,s]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,t,g,s]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F* fetchSomething4のエラー処理 *\u002F"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"エラー処理も含めると更に分かりやすくなる。こういう風に書くと見やすくなってメンテナンス性も上がりますね。"}]},{type:a,value:f},{type:b,tag:ad,props:{id:am},children:[{type:b,tag:q,props:{href:"#%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E5%AF%BE%E5%BF%9C%E7%8A%B6%E6%B3%81----caniuse",ariaHidden:w,tabIndex:v},children:[{type:b,tag:c,props:{className:[y,x]},children:[]}]},{type:a,value:an}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:q,props:{href:"https:\u002F\u002Fgyazo.com\u002F27f6663a05cf677796e44911a766c161",rel:[C,D],target:E},children:[{type:b,tag:ah,props:{alt:ai,src:"https:\u002F\u002Fi.gyazo.com\u002F27f6663a05cf677796e44911a766c161.png"},children:[]}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"発表されてからだいぶ時間が経ったのでブラウザ対応であれば、現状IE11以外だったら大丈夫。"}]},{type:a,value:f},{type:b,tag:ad,props:{id:X},children:[{type:b,tag:q,props:{href:"#%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9%E5%AF%BE%E6%B1%BA",ariaHidden:w,tabIndex:v},children:[{type:b,tag:c,props:{className:[y,x]},children:[]}]},{type:a,value:X}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:q,props:{href:"https:\u002F\u002Fjsperf.com\u002F",rel:[C,D],target:E},children:[{type:a,value:"jsPref"}]},{type:a,value:"にて計測。"}]},{type:a,value:f},{type:b,tag:I,props:{id:ap},children:[{type:b,tag:q,props:{href:"#promise-vs-callback",ariaHidden:w,tabIndex:v},children:[{type:b,tag:c,props:{className:[y,x]},children:[]}]},{type:a,value:aq}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:q,props:{href:"https:\u002F\u002Fgyazo.com\u002F9eb43867d18465da067d59ea659365e1",rel:[C,D],target:E},children:[{type:b,tag:ah,props:{alt:ai,src:"https:\u002F\u002Fi.gyazo.com\u002F9eb43867d18465da067d59ea659365e1.png"},children:[]}]}]},{type:a,value:f},{type:b,tag:I,props:{id:ar},children:[{type:b,tag:q,props:{href:"#native-promise-vs-callback",ariaHidden:w,tabIndex:v},children:[{type:b,tag:c,props:{className:[y,x]},children:[]}]},{type:a,value:as}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:q,props:{href:"https:\u002F\u002Fgyazo.com\u002F363caf653209063133a294aca9e1e8e1",rel:[C,D],target:E},children:[{type:b,tag:ah,props:{alt:ai,src:"https:\u002F\u002Fi.gyazo.com\u002F363caf653209063133a294aca9e1e8e1.png"},children:[]}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"非同期処理だとそこまで差はないけどそのまま使うPromiseだと圧倒的にCallbackのがパフォーマンス良い。素で使わないほうがよさそう。"}]},{type:a,value:f},{type:b,tag:I,props:{id:aa},children:[{type:b,tag:q,props:{href:"#%E5%8F%82%E8%80%83",ariaHidden:w,tabIndex:v},children:[{type:b,tag:c,props:{className:[y,x]},children:[]}]},{type:a,value:aa}]},{type:a,value:f},{type:b,tag:al,props:{},children:[{type:a,value:f},{type:b,tag:z,props:{},children:[{type:b,tag:q,props:{href:"https:\u002F\u002Fhtml5experts.jp\u002Ftakazudo\u002F17107\u002F",rel:[C,D],target:E},children:[{type:a,value:"Promiseで簡単！JavaScript非同期処理入門【前編】"}]}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:b,tag:q,props:{href:"https:\u002F\u002Fhtml5experts.jp\u002Ftakazudo\u002F17113\u002F",rel:[C,D],target:E},children:[{type:a,value:"Promiseで簡単！JavaScript非同期処理入門【後編】"}]}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:b,tag:q,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fja\u002Fdocs\u002FWeb\u002FJavaScript\u002FReference\u002FGlobal_Objects\u002FPromise",rel:[C,D],target:E},children:[{type:a,value:"Promise - JavaScript | MDN"}]}]},{type:a,value:f}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fsummary-promise-process",extension:".md",slug:"summary-promise-process",createdAt:av,updatedAt:av}}],fetch:[],mutations:[]}}("text","element","span","token","punctuation","\n","function"," ","(",")","\n  ","keyword",";","comment","{","}","a","p","property-access","method",".",-1,"true","icon-link","icon","li","then","\n    ","noopener","noreferrer","_blank","function-variable","operator",3,"h3","doSomethingFinally","parameter","done","fetchSomething4","fetchSomething3","fetchSomething1","fetchSomething2",",","=","\n      ","var","nuxt-content-highlight","非同期処理とは","非同期処理の例","パフォーマンス対決","code","line-numbers","language-javascript","pre","参考","div","catch","h2","\n\n","\u002F* 省略 *\u002F",2,"img","Image from Gyazo","例 -- ajax通信後順番に処理を行う","b","ul","ブラウザ対応状況----caniuse","ブラウザ対応状況 -- CanIUse","Promiseとは","promise-vs-callback","Promise vs Callback","native-promise-vs-callback","Native Promise vs Callback","promiseとは","例----ajax通信後順番に処理を行う","2020-08-30T13:33:30.698Z")));