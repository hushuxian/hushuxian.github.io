(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{466:function(t,s,a){"use strict";a.r(s);var n=a(31),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("##地理定位")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("geolocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentPosition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("success"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*成功的回调函数，获取的位置作为唯一参数传入*/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*可选，失败的回调函数，positionError对象作为参数*/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*可选，传入对象*/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("判断浏览器是否支持geolocation")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("geolocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//支持")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"您的浏览器不支持地理位置"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("geolocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentPosition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\tposition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coords"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accuracy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//精确度")]),t._v("\n\t\tposition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coords"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("altitue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//海拔")]),t._v("\n\t\tposition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coords"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("longitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//精度")]),t._v("\n\t\tposition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coords"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("latitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//纬度")]),t._v("\n\t\tposition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coords"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("speed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//行进速度")]),t._v("\n\t\tposition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coords"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("heading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//行进方向")]),t._v("\n\t\tposition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//时间戳")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//code:2 表示用户拒绝获取位置的请求")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//code:3 表示尝试获取用户信息失败")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//code:4 表示超时")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  enableHighAcuracy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//位置是否精确获取")]),t._v("\n  timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取位置允许的最长时间")]),t._v("\n  maximumAge"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//多久更新获取一次位置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("##localStorage 和 sessionStorage\nlocalStorage:长久保存整个网站数据，无过期时间，直到手动删除")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localData"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//setItem(key,value)存储数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//getItem(key)获取数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//removeItem(key)删除数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//clear()删除所有的数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//存储对象通过JSON.stringify()转成字符串，获取时通过JSON.parse()把字符串转成对象")]),t._v("\n")])])]),a("p",[t._v("sessionStorage:临时保存一个窗口的数据，关闭窗口或标签页后清除")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sessionData"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//API与localStorage一样")]),t._v("\n")])])]),a("p",[t._v("##离线存储\n在页面上指定mainifest属性")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("manifest")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cache.appcache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("mainifest文件以.appcache扩展名存储")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("CACHE MANIFEST   \n# 2019-09-01 v1.0.0 \nCACHE:  #表示需要缓存的文件，使用相对路径\nstyle/index.css   \njs/index.js\n  \nNETWORK:  #不会被缓存的文件\nlogin.php   \n  \nFALLBACK:   #当页面无法访问时的回退页面\n/html5/\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);