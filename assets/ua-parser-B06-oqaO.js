var ee="2.0.3",Oi=500,Ui="user-agent",z="",Li="?",bi="function",I="undefined",V="object",Ri="string",g="browser",O="cpu",A="device",E="engine",x="os",N="result",o="name",i="type",t="vendor",r="version",v="architecture",oi="major",e="model",ei="console",d="mobile",f="tablet",m="smarttv",y="wearable",hi="xr",ti="embedded",Y="inapp",Ti="brands",D="formFactors",Hi="fullVersionList",q="platform",Mi="platformVersion",li="bitness",L="sec-ch-ua",te=L+"-full-version-list",oe=L+"-arch",re=L+"-"+li,ae=L+"-form-factors",ne=L+"-"+d,se=L+"-"+e,Ki=L+"-"+q,we=Ki+"-version",Zi=[Ti,Hi,d,e,q,Mi,v,D,li],ni="Amazon",B="Apple",Pi="ASUS",Di="BlackBerry",P="Google",Bi="Huawei",Fi="Lenovo",Ni="Honor",si="LG",pi="Microsoft",mi="Motorola",gi="Nvidia",qi="OnePlus",vi="OPPO",$="Samsung",zi="Sharp",K="Sony",ki="Xiaomi",xi="Zebra",Vi="Chrome",Gi="Chromium",T="Chromecast",be="Edge",Z="Firefox",J="Opera",Ei="Facebook",Wi="Sogou",F="Mobile ",Q=" Browser",Si="Windows",de=typeof window!==I,k=de&&window.navigator?window.navigator:void 0,H=k&&k.userAgentData?k.userAgentData:void 0,le=function(a,n){var s={},u=n;if(!di(n)){u={};for(var b in n)for(var h in n[b])u[h]=n[b][h].concat(u[h]?u[h]:[])}for(var w in a)s[w]=u[w]&&u[w].length%2===0?u[w].concat(a[w]):a[w];return s},ui=function(a){for(var n={},s=0;s<a.length;s++)n[a[s].toUpperCase()]=a[s];return n},Ci=function(a,n){if(typeof a===V&&a.length>0){for(var s in a)if(R(a[s])==R(n))return!0;return!1}return W(a)?R(n).indexOf(R(a))!==-1:!1},di=function(a,n){for(var s in a)return/^(browser|cpu|device|engine|os)$/.test(s)||(n?di(a[s]):!1)},W=function(a){return typeof a===Ri},yi=function(a){if(a){for(var n=[],s=G(/\\?\"/g,a).split(","),u=0;u<s.length;u++)if(s[u].indexOf(";")>-1){var b=ri(s[u]).split(";v=");n[u]={brand:b[0],version:b[1]}}else n[u]=ri(s[u]);return n}},R=function(a){return W(a)?a.toLowerCase():a},Ai=function(a){return W(a)?G(/[^\d\.]/g,a).split(".")[0]:void 0},S=function(a){for(var n in a){var s=a[n];typeof s==V&&s.length==2?this[s[0]]=s[1]:this[s]=void 0}return this},G=function(a,n){return W(n)?n.replace(a,z):n},ii=function(a){return G(/\\?\"/g,a)},ri=function(a,n){if(W(a))return a=G(/^\s\s*/,a),typeof n===I?a:a.substring(0,Oi)},_i=function(a,n){if(!(!a||!n))for(var s=0,u,b,h,w,c,l;s<n.length&&!c;){var p=n[s],_=n[s+1];for(u=b=0;u<p.length&&!c&&p[u];)if(c=p[u++].exec(a),c)for(h=0;h<_.length;h++)l=c[++b],w=_[h],typeof w===V&&w.length>0?w.length===2?typeof w[1]==bi?this[w[0]]=w[1].call(this,l):this[w[0]]=w[1]:w.length===3?typeof w[1]===bi&&!(w[1].exec&&w[1].test)?this[w[0]]=l?w[1].call(this,l,w[2]):void 0:this[w[0]]=l?l.replace(w[1],w[2]):void 0:w.length===4&&(this[w[0]]=l?w[3].call(this,l.replace(w[1],w[2])):void 0):this[w]=l||void 0;s+=2}},M=function(a,n){for(var s in n)if(typeof n[s]===V&&n[s].length>0){for(var u=0;u<n[s].length;u++)if(Ci(n[s][u],a))return s===Li?void 0:s}else if(Ci(n[s],a))return s===Li?void 0:s;return n.hasOwnProperty("*")?n["*"]:a},ji={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Xi={embedded:"Automotive",mobile:"Mobile",tablet:["Tablet","EInk"],smarttv:"TV",wearable:"Watch",xr:["VR","XR"],"?":["Desktop","Unknown"],"*":void 0},Yi={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[r,[o,F+"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[r,[o,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[o,r],[/opios[\/ ]+([\w\.]+)/i],[r,[o,J+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[r,[o,J+" GX"]],[/\bopr\/([\w\.]+)/i],[r,[o,J]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[r,[o,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[r,[o,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser)\/([-\w\.]+)/i,/(heytap|ovi|115|surf)browser\/([\d\.]+)/i,/(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i],[o,r],[/quark(?:pc)?\/([-\w\.]+)/i],[r,[o,"Quark"]],[/\bddg\/([\w\.]+)/i],[r,[o,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[r,[o,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[r,[o,"WeChat"]],[/konqueror\/([\w\.]+)/i],[r,[o,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[r,[o,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[r,[o,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[r,[o,"Smart "+Fi+Q]],[/(avast|avg)\/([\w\.]+)/i],[[o,/(.+)/,"$1 Secure"+Q],r],[/\bfocus\/([\w\.]+)/i],[r,[o,Z+" Focus"]],[/\bopt\/([\w\.]+)/i],[r,[o,J+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[r,[o,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[r,[o,"Dolphin"]],[/coast\/([\w\.]+)/i],[r,[o,J+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[r,[o,"MIUI"+Q]],[/fxios\/([\w\.-]+)/i],[r,[o,F+Z]],[/\bqihoobrowser\/?([\w\.]*)/i],[r,[o,"360"]],[/\b(qq)\/([\w\.]+)/i],[[o,/(.+)/,"$1Browser"],r],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[o,/(.+)/,"$1"+Q],r],[/samsungbrowser\/([\w\.]+)/i],[r,[o,$+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[r,[o,Wi+" Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[o,Wi+" Mobile"],r],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[o,r],[/(lbbrowser|rekonq)/i],[o],[/ome\/([\w\.]+) \w* ?(iron) saf/i,/ome\/([\w\.]+).+qihu (360)[es]e/i],[r,o],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[o,Ei],r,[i,Y]],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/(daum)apps[\/ ]([\w\.]+)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(instagram|snapchat)[\/ ]([-\w\.]+)/i],[o,r,[i,Y]],[/\bgsa\/([\w\.]+) .*safari\//i],[r,[o,"GSA"],[i,Y]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[r,[o,"TikTok"],[i,Y]],[/\[(linkedin)app\]/i],[o,[i,Y]],[/(chromium)[\/ ]([-\w\.]+)/i],[o,r],[/headlesschrome(?:\/([\w\.]+)| )/i],[r,[o,Vi+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[o,Vi+" WebView"],r],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[r,[o,"Android"+Q]],[/chrome\/([\w\.]+) mobile/i],[r,[o,F+"Chrome"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[o,r],[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],[r,[o,F+"Safari"]],[/iphone .*mobile(?:\/\w+ | ?)safari/i],[[o,F+"Safari"]],[/version\/([\w\.\,]+) .*(safari)/i],[r,o],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[o,[r,"1"]],[/(webkit|khtml)\/([\w\.]+)/i],[o,r],[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],[[o,F+Z],r],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[o,"Netscape"],r],[/(wolvic|librewolf)\/([\w\.]+)/i],[o,r],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[r,[o,Z+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/\b(links) \(([\w\.]+)/i],[o,[r,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[o,[r,/[^\d\.]+./,z]]],cpu:[[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],[[v,"amd64"]],[/(ia32(?=;))/i,/\b((i[346]|x)86)(pc)?\b/i],[[v,"ia32"]],[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],[[v,"arm64"]],[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],[[v,"armhf"]],[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],[[v,"arm"]],[/((ppc|powerpc)(64)?)( mac|;|\))/i],[[v,/ower/,z,R]],[/ sun4\w[;\)]/i],[[v,"sparc"]],[/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],[[v,R]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[e,[t,$],[i,f]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[e,[t,$],[i,d]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[e,[t,B],[i,d]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[e,[t,B],[i,f]],[/(macintosh);/i],[e,[t,B]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[e,[t,zi],[i,d]],[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],[e,[t,Ni],[i,f]],[/honor([-\w ]+)[;\)]/i],[e,[t,Ni],[i,d]],[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],[e,[t,Bi],[i,f]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[e,[t,Bi],[i,d]],[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,/\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],[[e,/_/g," "],[t,ki],[i,f]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,/ ([\w ]+) miui\/v?\d/i],[[e,/_/g," "],[t,ki],[i,d]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[e,[t,vi],[i,d]],[/\b(opd2(\d{3}a?))(?: bui|\))/i],[e,[t,M,{OnePlus:["304","403","203"],"*":vi}],[i,f]],[/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],[e,[t,"BLU"],[i,d]],[/; vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[e,[t,"Vivo"],[i,d]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[e,[t,"Realme"],[i,d]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[e,[t,mi],[i,d]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[e,[t,mi],[i,f]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[e,[t,si],[i,f]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch))(\w+)/i,/\blg-?([\d\w]+) bui/i],[e,[t,si],[i,d]],[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,/lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],[e,[t,Fi],[i,f]],[/(nokia) (t[12][01])/i],[t,e,[i,f]],[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,/nokia[-_ ]?(([-\w\. ]*))/i],[[e,/_/g," "],[i,d],[t,"Nokia"]],[/(pixel (c|tablet))\b/i],[e,[t,P],[i,f]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[e,[t,P],[i,d]],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[e,[t,K],[i,d]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[e,"Xperia Tablet"],[t,K],[i,f]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[e,[t,qi],[i,d]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[e,[t,ni],[i,f]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[e,/(.+)/g,"Fire Phone $1"],[t,ni],[i,d]],[/(playbook);[-\w\),; ]+(rim)/i],[e,t,[i,f]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[e,[t,Di],[i,d]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[e,[t,Pi],[i,f]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[e,[t,Pi],[i,d]],[/(nexus 9)/i],[e,[t,"HTC"],[i,f]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[t,[e,/_/g," "],[i,d]],[/tcl (xess p17aa)/i,/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],[e,[t,"TCL"],[i,f]],[/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],[e,[t,"TCL"],[i,d]],[/(itel) ((\w+))/i],[[t,R],e,[i,M,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[e,[t,"Acer"],[i,f]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[e,[t,"Meizu"],[i,d]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[e,[t,"Ulefone"],[i,d]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[e,[t,"Energizer"],[i,d]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[e,[t,"Cat"],[i,d]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[e,[t,"Smartfren"],[i,d]],[/droid.+; (a(?:015|06[35]|142p?))/i],[e,[t,"Nothing"],[i,d]],[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,/archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],[e,[t,"Archos"],[i,f]],[/archos ([\w ]+)( b|\))/i,/; (ac[3-6]\d\w{2,8})( b|\))/i],[e,[t,"Archos"],[i,d]],[/(imo) (tab \w+)/i,/(infinix) (x1101b?)/i],[t,e,[i,f]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (blu|hmd|imo|tcl)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,/(hp) ([\w ]+\w)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,/(oppo) ?([\w ]+) bui/i],[t,e,[i,d]],[/(kobo)\s(ereader|touch)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i],[t,e,[i,f]],[/(surface duo)/i],[e,[t,pi],[i,f]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[e,[t,"Fairphone"],[i,d]],[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],[e,[t,gi],[i,f]],[/(sprint) (\w+)/i],[t,e,[i,d]],[/(kin\.[onetw]{3})/i],[[e,/\./g," "],[t,pi],[i,d]],[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[e,[t,xi],[i,f]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[e,[t,xi],[i,d]],[/smart-tv.+(samsung)/i],[t,[i,m]],[/hbbtv.+maple;(\d+)/i],[[e,/^/,"SmartTV"],[t,$],[i,m]],[/tcast.+(lg)e?. ([-\w]+)/i],[t,e,[i,m]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[t,si],[i,m]],[/(apple) ?tv/i],[t,[e,B+" TV"],[i,m]],[/crkey.*devicetype\/chromecast/i],[[e,T+" Third Generation"],[t,P],[i,m]],[/crkey.*devicetype\/([^/]*)/i],[[e,/^/,"Chromecast "],[t,P],[i,m]],[/fuchsia.*crkey/i],[[e,T+" Nest Hub"],[t,P],[i,m]],[/crkey/i],[[e,T],[t,P],[i,m]],[/(portaltv)/i],[e,[t,Ei],[i,m]],[/droid.+aft(\w+)( bui|\))/i],[e,[t,ni],[i,m]],[/(shield \w+ tv)/i],[e,[t,gi],[i,m]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[e,[t,zi],[i,m]],[/(bravia[\w ]+)( bui|\))/i],[e,[t,K],[i,m]],[/(mi(tv|box)-?\w+) bui/i],[e,[t,ki],[i,m]],[/Hbbtv.*(technisat) (.*);/i],[t,e,[i,m]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[t,ri],[e,ri],[i,m]],[/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],[e,[i,m]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[i,m]],[/(ouya)/i,/(nintendo) (\w+)/i],[t,e,[i,ei]],[/droid.+; (shield)( bui|\))/i],[e,[t,gi],[i,ei]],[/(playstation \w+)/i],[e,[t,K],[i,ei]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[e,[t,pi],[i,ei]],[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],[e,[t,$],[i,y]],[/((pebble))app/i,/(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],[t,e,[i,y]],[/(ow(?:19|20)?we?[1-3]{1,3})/i],[e,[t,vi],[i,y]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[e,[t,B],[i,y]],[/(opwwe\d{3})/i],[e,[t,qi],[i,y]],[/(moto 360)/i],[e,[t,mi],[i,y]],[/(smartwatch 3)/i],[e,[t,K],[i,y]],[/(g watch r)/i],[e,[t,si],[i,y]],[/droid.+; (wt63?0{2,3})\)/i],[e,[t,xi],[i,y]],[/droid.+; (glass) \d/i],[e,[t,P],[i,hi]],[/(pico) (4|neo3(?: link|pro)?)/i],[t,e,[i,hi]],[/(quest( \d| pro)?s?).+vr/i],[e,[t,Ei],[i,hi]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[t,[i,ti]],[/(aeobc)\b/i],[e,[t,ni],[i,ti]],[/(homepod).+mac os/i],[e,[t,B],[i,ti]],[/windows iot/i],[[i,ti]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i],[e,[i,M,{mobile:"Mobile",xr:"VR","*":f}]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[i,f]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[i,d]],[/droid .+?; ([\w\. -]+)( bui|\))/i],[e,[t,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[r,[o,be+"HTML"]],[/(arkweb)\/([\w\.]+)/i],[o,r],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[r,[o,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[o,r],[/ladybird\//i],[[o,"LibWeb"]],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[r,o]],os:[[/microsoft (windows) (vista|xp)/i],[o,r],[/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],[o,[r,M,ji]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[r,M,ji],[o,Si]],[/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[r,/_/g,"."],[o,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[o,"macOS"],[r,/_/g,"."]],[/android ([\d\.]+).*crkey/i],[r,[o,T+" Android"]],[/fuchsia.*crkey\/([\d\.]+)/i],[r,[o,T+" Fuchsia"]],[/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],[r,[o,T+" SmartSpeaker"]],[/linux.*crkey\/([\d\.]+)/i],[r,[o,T+" Linux"]],[/crkey\/([\d\.]+)/i],[r,[o,T]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[r,o],[/(ubuntu) ([\w\.]+) like android/i],[[o,/(.+)/,"$1 Touch"],r],[/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/\.; ]?([\d\.]*)/i],[o,r],[/\(bb(10);/i],[r,[o,Di]],[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],[r,[o,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[r,[o,Z+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[r,[o,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[r,[o,"watchOS"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[o,"Chrome OS"],r],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) (\w+)/i,/(xbox); +xbox ([^\);]+)/i,/(pico) .+os([\w\.]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[o,r],[/(sunos) ?([\w\.\d]*)/i],[[o,"Solaris"],r],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[o,r]]},wi=function(){var a={init:{},isIgnore:{},isIgnoreRgx:{},toString:{}};return S.call(a.init,[[g,[o,r,oi,i]],[O,[v]],[A,[i,e,t]],[E,[o,r]],[x,[o,r]]]),S.call(a.isIgnore,[[g,[r,oi]],[E,[r]],[x,[r]]]),S.call(a.isIgnoreRgx,[[g,/ ?browser$/i],[x,/ ?os$/i]]),S.call(a.toString,[[g,[o,r]],[O,[v]],[A,[t,e]],[E,[o,r]],[x,[o,r]]]),a}(),ue=function(a,n){var s=wi.init[n],u=wi.isIgnore[n]||0,b=wi.isIgnoreRgx[n]||0,h=wi.toString[n]||0;function w(){S.call(this,s)}return w.prototype.getItem=function(){return a},w.prototype.withClientHints=function(){return H?H.getHighEntropyValues(Zi).then(function(c){return a.setCH(new Ji(c,!1)).parseCH().get()}):a.parseCH().get()},w.prototype.withFeatureCheck=function(){return a.detectFeature().get()},n!=N&&(w.prototype.is=function(c){var l=!1;for(var p in this)if(this.hasOwnProperty(p)&&!Ci(u,p)&&R(b?G(b,this[p]):this[p])==R(b?G(b,c):c)){if(l=!0,c!=I)break}else if(c==I&&l){l=!l;break}return l},w.prototype.toString=function(){var c=z;for(var l in h)typeof this[h[l]]!==I&&(c+=(c?" ":z)+this[h[l]]);return c||I}),H||(w.prototype.then=function(c){var l=this,p=function(){for(var C in l)l.hasOwnProperty(C)&&(this[C]=l[C])};p.prototype={is:w.prototype.is,toString:w.prototype.toString};var _=new p;return c(_),_}),new w};function Ji(a,n){if(a=a||{},S.call(this,Zi),n)S.call(this,[[Ti,yi(a[L])],[Hi,yi(a[te])],[d,/\?1/.test(a[ne])],[e,ii(a[se])],[q,ii(a[Ki])],[Mi,ii(a[we])],[v,ii(a[oe])],[D,yi(a[ae])],[li,ii(a[re])]]);else for(var s in a)this.hasOwnProperty(s)&&typeof a[s]!==I&&(this[s]=a[s])}function $i(a,n,s,u){return this.get=function(b){return b?this.data.hasOwnProperty(b)?this.data[b]:void 0:this.data},this.set=function(b,h){return this.data[b]=h,this},this.setCH=function(b){return this.uaCH=b,this},this.detectFeature=function(){if(k&&k.userAgent==this.ua)switch(this.itemType){case g:k.brave&&typeof k.brave.isBrave==bi&&this.set(o,"Brave");break;case A:!this.get(i)&&H&&H[d]&&this.set(i,d),this.get(e)=="Macintosh"&&k&&typeof k.standalone!==I&&k.maxTouchPoints&&k.maxTouchPoints>2&&this.set(e,"iPad").set(i,f);break;case x:!this.get(o)&&H&&H[q]&&this.set(o,H[q]);break;case N:var b=this.data,h=function(w){return b[w].getItem().detectFeature().get()};this.set(g,h(g)).set(O,h(O)).set(A,h(A)).set(E,h(E)).set(x,h(x))}return this},this.parseUA=function(){return this.itemType!=N&&_i.call(this.data,this.ua,this.rgxMap),this.itemType==g&&this.set(oi,Ai(this.get(r))),this},this.parseCH=function(){var b=this.uaCH,h=this.rgxMap;switch(this.itemType){case g:case E:var w=b[Hi]||b[Ti],c;if(w)for(var l in w){var p=w[l].brand||w[l],_=w[l].version;this.itemType==g&&!/not.a.brand/i.test(p)&&(!c||/chrom/i.test(c)&&p!=Gi)&&(p=M(p,{Chrome:"Google Chrome",Edge:"Microsoft Edge","Chrome WebView":"Android WebView","Chrome Headless":"HeadlessChrome","Huawei Browser":"HuaweiBrowser","MIUI Browser":"Miui Browser","Opera Mobi":"OperaMobile",Yandex:"YaBrowser"}),this.set(o,p).set(r,_).set(oi,Ai(_)),c=p),this.itemType==E&&p==Gi&&this.set(r,_)}break;case O:var C=b[v];C&&(C&&b[li]=="64"&&(C+="64"),_i.call(this.data,C+";",h));break;case A:if(b[d]&&this.set(i,d),b[e]&&(this.set(e,b[e]),!this.get(i)||!this.get(t))){var j={};_i.call(j,"droid 9; "+b[e]+")",h),!this.get(i)&&j.type&&this.set(i,j.type),!this.get(t)&&j.vendor&&this.set(t,j.vendor)}if(b[D]){var ai;if(typeof b[D]!="string")for(var Ii=0;!ai&&Ii<b[D].length;)ai=M(b[D][Ii++],Xi);else ai=M(b[D],Xi);this.set(i,ai)}break;case x:var ci=b[q];if(ci){var fi=b[Mi];ci==Si&&(fi=parseInt(Ai(fi),10)>=13?"11":"10"),this.set(o,ci).set(r,fi)}this.get(o)==Si&&b[e]=="Xbox"&&this.set(o,"Xbox").set(r,void 0);break;case N:var Qi=this.data,X=function(ie){return Qi[ie].getItem().setCH(b).parseCH().get()};this.set(g,X(g)).set(O,X(O)).set(A,X(A)).set(E,X(E)).set(x,X(x))}return this},S.call(this,[["itemType",a],["ua",n],["uaCH",u],["rgxMap",s],["data",ue(this,a)]]),this}function U(a,n,s){if(typeof a===V?(di(a,!0)?(typeof n===V&&(s=n),n=a):(s=a,n=void 0),a=void 0):typeof a===Ri&&!di(n,!0)&&(s=n,n=void 0),s&&typeof s.append===bi){var u={};s.forEach(function(l,p){u[p]=l}),s=u}if(!(this instanceof U))return new U(a,n,s).getResult();var b=typeof a===Ri?a:s&&s[Ui]?s[Ui]:k&&k.userAgent?k.userAgent:z,h=new Ji(s,!0),w=n?le(Yi,n):Yi,c=function(l){return l==N?function(){return new $i(l,b,w,h).set("ua",b).set(g,this.getBrowser()).set(O,this.getCPU()).set(A,this.getDevice()).set(E,this.getEngine()).set(x,this.getOS()).get()}:function(){return new $i(l,b,w[l],h).parseUA().get()}};return S.call(this,[["getBrowser",c(g)],["getCPU",c(O)],["getDevice",c(A)],["getEngine",c(E)],["getOS",c(x)],["getResult",c(N)],["getUA",function(){return b}],["setUA",function(l){return W(l)&&(b=l.length>Oi?ri(l,Oi):l),this}]]).setUA(b),this}U.VERSION=ee;U.BROWSER=ui([o,r,oi,i]);U.CPU=ui([v]);U.DEVICE=ui([e,t,i,ei,d,m,f,y,ti]);U.ENGINE=U.OS=ui([o,r]);export{U as UAParser};
