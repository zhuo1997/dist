(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-325d50a8"],{"2f21":function(e,t,i){"use strict";var l=i("79e5");e.exports=function(e,t){return!!e&&l(function(){t?e.call(null,function(){},1):e.call(null)})}},3649:function(e,t,i){"use strict";var l=i("a20e"),a=i.n(l);a.a},"55dd":function(e,t,i){"use strict";var l=i("5ca1"),a=i("d8e8"),r=i("4bf8"),o=i("79e5"),n=[].sort,s=[1,2,3];l(l.P+l.F*(o(function(){s.sort(void 0)})||!o(function(){s.sort(null)})||!i("2f21")(n)),"Array",{sort:function(e){return void 0===e?n.call(r(this)):n.call(r(this),a(e))}})},7229:function(e,t,i){"use strict";var l=i("ee47"),a=i.n(l);a.a},a20e:function(e,t,i){},a481:function(e,t,i){"use strict";var l=i("cb7c"),a=i("4bf8"),r=i("9def"),o=i("4588"),n=i("0390"),s=i("5f1b"),c=Math.max,d=Math.min,u=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,m=function(e){return void 0===e?e:String(e)};i("214f")("replace",2,function(e,t,i,h){return[function(l,a){var r=e(this),o=void 0==l?void 0:l[t];return void 0!==o?o.call(l,r,a):i.call(String(r),l,a)},function(e,t){var a=h(i,e,this,t);if(a.done)return a.value;var u=l(e),f=String(this),p="function"===typeof t;p||(t=String(t));var b=u.global;if(b){var v=u.unicode;u.lastIndex=0}var _=[];while(1){var w=s(u,f);if(null===w)break;if(_.push(w),!b)break;var y=String(w[0]);""===y&&(u.lastIndex=n(f,r(u.lastIndex),v))}for(var x="",k=0,$=0;$<_.length;$++){w=_[$];for(var L=String(w[0]),C=c(d(o(w.index),f.length),0),V=[],O=1;O<w.length;O++)V.push(m(w[O]));var j=w.groups;if(p){var E=[L].concat(V,C,f);void 0!==j&&E.push(j);var S=String(t.apply(void 0,E))}else S=g(L,f,C,V,j,t);C>=k&&(x+=f.slice(k,C)+S,k=C+L.length)}return x+f.slice(k)}];function g(e,t,l,r,o,n){var s=l+e.length,c=r.length,d=p;return void 0!==o&&(o=a(o),d=f),i.call(n,d,function(i,a){var n;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,l);case"'":return t.slice(s);case"<":n=o[a.slice(1,-1)];break;default:var d=+a;if(0===d)return i;if(d>c){var f=u(d/10);return 0===f?i:f<=c?void 0===r[f-1]?a.charAt(1):r[f-1]+a.charAt(1):i}n=r[d-1]}return void 0===n?"":n})}})},c5db:function(e,t,i){},d5bd:function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-card",[i("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[i("div",{staticClass:"input"},[i("el-input",{attrs:{clearable:"",placeholder:"关键词"},on:{clear:e.filterChange},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}})],1),i("div",[i("el-cascader",{attrs:{"expand-trigger":"hover",clearable:"",options:e.selectList1},on:{change:e.filterChange},model:{value:e.cate_id,callback:function(t){e.cate_id=t},expression:"cate_id"}})],1),i("div",[i("el-select",{attrs:{clearable:"",placeholder:"品牌"},on:{change:e.filterChange},model:{value:e.brand_id,callback:function(t){e.brand_id=t},expression:"brand_id"}},e._l(e.selectList2,function(e,t){return i("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1),i("div",[i("el-select",{attrs:{clearable:"",placeholder:"商品类型"},on:{change:e.filterChange},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.selectList3,function(e,t){return i("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1),i("div",[i("el-select",{attrs:{clearable:"",placeholder:"上架状态"},on:{change:e.filterChange},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},e._l(e.selectList4,function(e,t){return i("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1),i("div",[i("el-select",{attrs:{clearable:"",placeholder:"推荐状态"},on:{change:e.filterChange},model:{value:e.pick,callback:function(t){e.pick=t},expression:"pick"}},e._l(e.selectList5,function(e,t){return i("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1),i("el-button",{attrs:{type:"text"},on:{click:e.filterChange}},[e._v("搜 索")]),i("div",{attrs:{space:""}}),i("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("新 增")])],1),i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[i("el-table-column",{attrs:{label:"缩略图",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[i("img",{staticClass:"imgk",attrs:{src:e.row.thumb,alt:""}})]}}])}),i("el-table-column",{attrs:{label:"商品标题",align:"center","min-width":"250px"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.title))])]}}])}),e._l(e.list,function(e,t){return i("el-table-column",{key:t,attrs:{label:e.label,prop:e.value,align:"center"}})}),i("el-table-column",{attrs:{label:"操作",width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"mini"},on:{click:function(i){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),i("el-button",{attrs:{size:"mini"},on:{click:function(i){return e.handleNorm(t.row)}}},[e._v("商品规格")]),i("el-button",{attrs:{size:"mini"},on:{click:function(i){return e.handlePic(t.row)}}},[e._v("商品相册")]),i("el-button",{attrs:{size:"mini"},on:{click:function(i){return e.handleInfo(t.$index,t.row)}}},[e._v("详情")]),i("el-button",{attrs:{size:"mini"},on:{click:function(i){return e.handlePick(t.$index,t.row)}}},[e._v(e._s(0==t.row.pick?"推荐":"取消推荐"))]),i("el-button",{attrs:{size:"mini"},on:{click:function(i){return e.handleShow(t.$index,t.row)}}},[e._v(e._s(0==t.row.status?"上架":"下架"))]),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],2),i("BasePagination",{attrs:{max:e.maxPage,now:e.nowPage},on:{"update:now":function(t){e.nowPage=t}}}),i("add",{ref:"add",on:{filterChange:e.filterChange}}),i("edit",{ref:"edit",on:{filterChange:e.filterChange}}),i("norm",{ref:"norm",attrs:{name:e.name},on:{filterChange:e.filterChange}}),i("pic",{ref:"pic",attrs:{name:e.name},on:{filterChange:e.filterChange}}),e.isInfo?i("info",{attrs:{title:e.infoTitle,row:e.infoRow},on:{close:e.closeInfo}}):e._e()],1)},a=[],r=(i("7f7f"),i("c5db"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{title:"新增",visible:e.dialogFormVisible,width:"800px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"formName",attrs:{model:e.form,rules:e.rules}},[i("el-form-item",{attrs:{label:"商品分类",prop:"selectedOptions","label-width":e.formLabelWidth}},[i("el-cascader",{attrs:{options:e.options,"show-all-levels":!1},model:{value:e.selectedOptions,callback:function(t){e.selectedOptions=t},expression:"selectedOptions"}})],1),i("el-form-item",{attrs:{label:"品牌","label-width":e.formLabelWidth,prop:"brand_id"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value99,callback:function(t){e.value99=t},expression:"value99"}},e._l(e.options99,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),i("el-form-item",{attrs:{label:"商品类型",prop:"value2","label-width":e.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}},e._l(e.options2,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),i("el-form-item",{attrs:{label:"商品名称","label-width":e.formLabelWidth,prop:"title"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),i("el-form-item",{attrs:{label:"普通价","label-width":e.formLabelWidth,prop:"price"}},[i("el-input",{attrs:{autocomplete:"off"},nativeOn:{keyup:function(t){return e.proving1(t)}},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),i("el-form-item",{attrs:{label:"白金价","label-width":e.formLabelWidth,prop:"gold_price"}},[i("el-input",{attrs:{autocomplete:"off"},nativeOn:{keyup:function(t){return e.proving2(t)}},model:{value:e.form.gold_price,callback:function(t){e.$set(e.form,"gold_price",t)},expression:"form.gold_price"}})],1),i("el-form-item",{attrs:{label:"钻石价","label-width":e.formLabelWidth,prop:"jewel_price"}},[i("el-input",{attrs:{autocomplete:"off"},nativeOn:{keyup:function(t){return e.proving3(t)}},model:{value:e.form.jewel_price,callback:function(t){e.$set(e.form,"jewel_price",t)},expression:"form.jewel_price"}})],1),i("el-form-item",{attrs:{label:"权重","label-width":e.formLabelWidth}},[i("div",{staticClass:"block"},[i("el-slider",{attrs:{"show-input":"",min:0,max:255},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)]),i("el-form-item",{staticStyle:{"margin-left":"50px"},attrs:{label:"添加图片",prop:"url"}},[i("label",{staticStyle:{display:"block",height:"100px",width:"100px",border:"1px dashed #666",cursor:"pointer","margin-left":"70px"},attrs:{for:"files"}},[e.url?i("img",{staticStyle:{height:"100px",width:"100px","margin-top":"-40px"},attrs:{src:e.newurl,alt:""}}):i("p",{staticStyle:{margin:"30px 0 0 15px"}},[e._v("\n          选择图片\n          "),i("i",{staticClass:"el-icon-plus"})])]),i("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"files"},on:{change:e.fileChange}})]),i("el-form-item",{attrs:{label:"商品简介","label-width":e.formLabelWidth,prop:"summary"}},[i("el-input",{attrs:{autocomplete:"off",type:"textarea"},model:{value:e.form.summary,callback:function(t){e.$set(e.form,"summary",t)},expression:"form.summary"}})],1),i("el-form-item",{attrs:{label:"内容","label-width":e.formLabelWidth,prop:"content"}},[e.dialogFormVisible?i("editor",{attrs:{id:"goodsAd",content:e.form.content},on:{changed:function(t){e.form.content=t}}}):e._e()],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.sure("formName")}}},[e._v("确 定")])],1)],1)}),o=[],n=(i("a481"),i("bd86")),s=(i("55dd"),i("a897")),c={components:{editor:s["a"]},props:{},data:function(){return{url:"",newurl:"",value1:"",value2:"",options:[],options1:[],options2:[],options99:[],value99:"",selectedOptions:[],cateValue:"",dialogFormVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:"",sort:255},formLabelWidth:"120px",rules:{url:[{required:!0,message:"请添加图片",trigger:"blur"}],value2:[{required:!0,message:"请选择类型",trigger:"blur"}],selectedOptions:[{required:!0,message:"请选择商品分类",trigger:"blur"}],brand_id:[{required:!0,message:"请选择品牌",trigger:"blur"}],title:[{required:!0,message:"请输入商品名称",trigger:"blur"}],price:[{required:!0,message:"请输入普通价",trigger:"blur"}],gold_price:[{required:!0,message:"请输入白金价",trigger:"blur"}],jewel_price:[{required:!0,message:"请输入钻石价",trigger:"blur"}],summary:[{required:!0,message:"请输入商品简介",trigger:"blur"}],content:[{required:!0,message:"请输入内容",trigger:"blur"}]}}},watch:{dialogFormVisible:function(e){this.getoptions99()}},computed:{},methods:{sure:function(e){var t=this;this.cateValue=this.selectedOptions[this.selectedOptions.length-1],this.form.selectedOptions=this.cateValue,this.form.brand_id=this.value99,this.form.value2=this.value2,this.form.url=this.url,this.$refs[e].validate(function(e){if(!e)return!1;t.$http.post("/manage/goods/add",Object(n["a"])({cate_id:t.cateValue,brand_id:t.form.brand_id,type:t.value2,title:t.form.title,summary:t.form.summary,price:t.form.price,gold_price:t.form.gold_price,jewel_price:t.form.jewel_price,thumb:t.url,content:t.form.content,sort:t.form.sort},"brand_id",t.value99)).then(function(e){t.dialogFormVisible=!1,t.$emit("filterChange"),t.$message({showClose:!0,message:"新增成功",type:"success"}),t.selectedOptions=[],t.form.brand_id=[],t.value2=[],t.form.title=null,t.form.summary=null,t.form.price=null,t.form.gold_price=null,t.form.jewel_price=null,t.url=null,t.form.content=null,t.form.sort=255,t.value99=null})})},fileChange:function(e){var t=this,i=new FormData;i.append("file",e.currentTarget.files[0]),this.$http.post("/manage/image/upload",i).then(function(e){t.url=e.data.filepath,t.newurl=t.$imgPath+t.url})},proving1:function(){this.form.price=this.form.price.replace(/[^\.\d]/g,"")},proving2:function(){this.form.gold_price=this.form.gold_price.replace(/[^\.\d]/g,"")},proving3:function(){this.form.jewel_price=this.form.jewel_price.replace(/[^\.\d]/g,"")},getoptions99:function(){var e=this;this.$http.get("/Manage/brand/lists",{params:{}}).then(function(t){e.options99=t.data.list})}},created:function(){},mounted:function(){}},d=c,u=i("2877"),f=Object(u["a"])(d,r,o,!1,null,"3247fd5e",null),p=f.exports,m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{title:"编辑",visible:e.dialogFormVisible,width:"800px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"formName",attrs:{model:e.form,rules:e.rules}},[i("el-form-item",{attrs:{label:"商品分类","label-width":e.formLabelWidth}},[i("el-cascader",{attrs:{options:e.options,"show-all-levels":!1},model:{value:e.selectedOptions,callback:function(t){e.selectedOptions=t},expression:"selectedOptions"}})],1),i("el-form-item",{attrs:{label:"品牌","label-width":e.formLabelWidth,prop:"brand_id"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.brand_id,callback:function(t){e.$set(e.form,"brand_id",t)},expression:"form.brand_id"}},e._l(e.options3,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),i("el-form-item",{attrs:{label:"商品类型","label-width":e.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.options2,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),i("el-form-item",{attrs:{label:"商品名称","label-width":e.formLabelWidth,prop:"title"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),i("el-form-item",{attrs:{label:"普通价","label-width":e.formLabelWidth,prop:"price"}},[i("el-input",{attrs:{autocomplete:"off"},nativeOn:{keyup:function(t){return e.proving1(t)}},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),i("el-form-item",{attrs:{label:"白金价","label-width":e.formLabelWidth,prop:"gold_price"}},[i("el-input",{attrs:{autocomplete:"off"},nativeOn:{keyup:function(t){return e.proving2(t)}},model:{value:e.form.gold_price,callback:function(t){e.$set(e.form,"gold_price",t)},expression:"form.gold_price"}})],1),i("el-form-item",{attrs:{label:"钻石价","label-width":e.formLabelWidth,prop:"jewel_price"}},[i("el-input",{attrs:{autocomplete:"off"},nativeOn:{keyup:function(t){return e.proving3(t)}},model:{value:e.form.jewel_price,callback:function(t){e.$set(e.form,"jewel_price",t)},expression:"form.jewel_price"}})],1),i("el-form-item",{attrs:{label:"权重","label-width":e.formLabelWidth}},[i("div",{staticClass:"block"},[i("el-slider",{attrs:{"show-input":"",min:0,max:255},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)]),i("el-form-item",{staticStyle:{"margin-left":"50px"},attrs:{label:"添加图片"}},[i("label",{staticStyle:{display:"block",height:"100px",width:"100px",border:"1px dashed #666",cursor:"pointer","margin-left":"70px"},attrs:{for:"files"}},[e.url?i("img",{staticStyle:{height:"100px",width:"100px"},attrs:{src:e.newurl,alt:""}}):i("img",{staticStyle:{height:"100px",width:"100px"},attrs:{src:e.form.picurl,alt:""}})]),i("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"files"},on:{change:e.fileChange}})]),i("el-form-item",{attrs:{label:"商品简介","label-width":e.formLabelWidth,prop:"summary"}},[i("el-input",{attrs:{autocomplete:"off",type:"textarea"},model:{value:e.form.summary,callback:function(t){e.$set(e.form,"summary",t)},expression:"form.summary"}})],1),i("el-form-item",{attrs:{label:"内容","label-width":e.formLabelWidth,prop:"content"}},[i("editor",{attrs:{id:"goodsEd",content:e.form.content},on:{changed:function(t){e.form.content=t}}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.sure("formName")}}},[e._v("确 定")])],1)],1)},h=[],g={components:{editor:s["a"]},props:{},data:function(){var e;return e={id:"",selectedOptions:[],url:"",newurl:"",value1:"",value2:"",options:[],options1:[],options2:[],options3:[]},Object(n["a"])(e,"selectedOptions",[]),Object(n["a"])(e,"cateValue",""),Object(n["a"])(e,"dialogFormVisible",!1),Object(n["a"])(e,"form",{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:"",sort:255,cate_id:[]}),Object(n["a"])(e,"formLabelWidth","120px"),Object(n["a"])(e,"rules",{title:[{required:!0,message:"请输入商品名称",trigger:"blur"}],price:[{required:!0,message:"请输入普通价",trigger:"change"}],gold_price:[{required:!0,message:"请输入白金价",trigger:"change"}],jewel_price:[{required:!0,message:"请输入钻石价",trigger:"change"}],summary:[{required:!0,message:"请输入商品简介",trigger:"blur"}],content:[{required:!0,message:"请输入内容",trigger:"blur"}]}),e},watch:{dialogFormVisible:function(e){var t=this;this.$http.get("/manage/goods/info",{params:{id:this.id}}).then(function(e){t.form=e.data.info})}},computed:{},methods:{sure:function(e){var t=this;this.cateValue=this.selectedOptions[this.selectedOptions.length-1],this.$refs[e].validate(function(e){if(!e)return!1;t.$http.post("/manage/goods/edit",{id:t.id,cate_id:t.cateValue,brand_id:t.form.brand_id,type:t.form.type,title:t.form.title,summary:t.form.summary,price:t.form.price,gold_price:t.form.gold_price,jewel_price:t.form.jewel_price,thumb:t.url?t.url:t.form.thumb,content:t.form.content,sort:t.form.sort}).then(function(e){t.dialogFormVisible=!1,t.$emit("filterChange"),t.$message({showClose:!0,message:"编辑成功",type:"success"})})})},fileChange:function(e){var t=this,i=new FormData;i.append("file",e.currentTarget.files[0]),this.$http.post("/manage/image/upload",i).then(function(e){t.url=e.data.filepath,t.newurl=t.$imgPath+t.url})},proving1:function(){this.form.price=this.form.price.replace(/[^\.\d]/g,"")},proving2:function(){this.form.gold_price=this.form.gold_price.replace(/[^\.\d]/g,"")},proving3:function(){this.form.jewel_price=this.form.jewel_price.replace(/[^\.\d]/g,"")}},created:function(){},mounted:function(){}},b=g,v=Object(u["a"])(b,m,h,!1,null,"5ac991c8",null),_=v.exports,w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-dialog",{attrs:{title:"商品规格---"+e.name+"商品",visible:e.outerVisible},on:{"update:visible":function(t){e.outerVisible=t}}},[i("el-dialog",{attrs:{width:"50%",title:"新增规格",visible:e.innerVisible,"append-to-body":""},on:{"update:visible":function(t){e.innerVisible=t}}},[i("el-form",{ref:"formName",attrs:{model:e.form,rules:e.rules}},[i("el-form-item",{attrs:{label:"规格名称","label-width":e.formLabelWidth,prop:"title"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),i("el-form-item",{attrs:{label:"排序","label-width":e.formLabelWidth}},[i("div",{staticClass:"block"},[i("el-slider",{attrs:{"show-input":"",min:0,max:255},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)]),i("el-form-item",{staticStyle:{"margin-left":"50px"},attrs:{label:"添加图片"}},[i("label",{staticStyle:{display:"block",height:"100px",width:"100px",border:"1px dashed #666",cursor:"pointer","margin-left":"70px"},attrs:{for:"files"}},[e.url?i("img",{staticStyle:{height:"100px",width:"100px"},attrs:{src:e.newurl,alt:""}}):i("p",{staticStyle:{margin:"30px 0 0 15px"}},[e._v("\n              选择图片\n              "),i("i",{staticClass:"el-icon-plus"})])]),i("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"files"},on:{change:e.fileChange}})])],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.innerVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.sure("formName")}}},[e._v("确 定")])],1)],1),i("el-dialog",{attrs:{width:"50%",title:"编辑规格",visible:e.innerEdit,"append-to-body":""},on:{"update:visible":function(t){e.innerEdit=t}}},[i("el-form",{ref:"formName",attrs:{model:e.formEdit,rules:e.rules}},[i("el-form-item",{attrs:{label:"规格名称","label-width":e.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.formEdit.name,callback:function(t){e.$set(e.formEdit,"name",t)},expression:"formEdit.name"}})],1),i("el-form-item",{attrs:{label:"排序","label-width":e.formLabelWidth}},[i("div",{staticClass:"block"},[i("el-slider",{attrs:{"show-input":"",min:0,max:255},model:{value:e.formEdit.sort,callback:function(t){e.$set(e.formEdit,"sort",t)},expression:"formEdit.sort"}})],1)]),i("el-form-item",{staticStyle:{"margin-left":"50px"},attrs:{label:"添加图片"}},[i("label",{staticStyle:{display:"block",height:"100px",width:"100px",border:"1px dashed #666",cursor:"pointer","margin-left":"70px"},attrs:{for:"files"}},[e.url?e._e():i("img",{staticStyle:{height:"100px",width:"100px"},attrs:{src:e.formEdit.picurl,alt:""}}),i("img",{staticStyle:{height:"100px",width:"100px"},attrs:{src:e.newurl,alt:""}})]),i("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"files"},on:{change:e.fileChange}})])],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.innerEdit=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.sureEdit("formName")}}},[e._v("确 定")])],1)],1),i("el-table",{attrs:{data:e.tableData}},[i("el-table-column",{attrs:{label:"缩略图"},scopedSlots:e._u([{key:"default",fn:function(e){return[i("img",{staticClass:"imgk",attrs:{src:e.row.picurl,alt:""}})]}}])}),e._l(e.list,function(e,t){return i("el-table-column",{key:t,attrs:{property:e.prop,label:e.label,align:"center"}})}),i("el-table-column",{attrs:{label:"操作",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"mini"},on:{click:function(i){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],2),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.outerVisible=!1}}},[e._v("关闭")]),i("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("新增规格")])],1)],1)],1)},y=[],x={components:{},props:["name"],data:function(){return{EditId:"",url:"",newurl:"",goods_id:"",list:[{label:"规格名称",prop:"name"},{label:"排序",prop:"sort"}],outerVisible:!1,innerVisible:!1,innerEdit:!1,tableData:[],dialogFormVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:"",sort:255},formEdit:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"120px",rules:{title:[{required:!0,message:"请输入规格名称",trigger:"blur"}],price:[{required:!0,message:"请输入价格",trigger:"blur"}]}}},watch:{outerVisible:function(e){this.getdata()}},computed:{},methods:{add:function(){this.innerVisible=!0},sure:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.$http.post("/Manage/goods_spec/add",{goods_id:t.goods_id,name:t.form.title,sort:t.form.sort,thumb:t.url}).then(function(e){t.innerVisible=!1,t.$emit("filterChange"),t.getdata(),t.$message({showClose:!0,message:"新增成功",type:"success"})})})},sureEdit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.$http.post("/Manage/goods_spec/edit",{spec_id:t.EditId,name:t.formEdit.name,sort:t.formEdit.sort,thumb:t.url?t.url:t.formEdit.thumb}).then(function(e){t.innerEdit=!1,t.$emit("filterChange"),t.getdata(),t.$message({showClose:!0,message:"编辑成功",type:"success"})})})},handleEdit:function(e,t){this.innerEdit=!0,this.formEdit=t,this.EditId=t.id},handleDelete:function(e,t){var i=this;this.$confirm("此操作将永久删除该条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.$http.post("/Manage/goods_spec/del",{spec_id:t.id}).then(function(e){i.$message({showClose:!0,message:"已删除",type:"success"}),i.getdata()})}).catch(function(){i.$message({type:"info",message:"已取消删除"})})},fileChange:function(e){var t=this,i=new FormData;i.append("file",e.currentTarget.files[0]),this.$http.post("/manage/image/upload",i).then(function(e){t.url=e.data.filepath,t.newurl=t.$imgPath+t.url})},getdata:function(){var e=this;this.$http.get("/Manage/goods_spec/lists",{params:{goods_id:this.goods_id}}).then(function(t){e.tableData=t.data.list})}},created:function(){},mounted:function(){}},k=x,$=Object(u["a"])(k,w,y,!1,null,"82ff37de",null),L=$.exports,C=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{title:"商品相册---"+e.name+"商品",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[i("el-upload",{attrs:{"show-file-list":"",action:"","list-type":"picture-card","on-remove":e.handleRemove,"before-upload":e.beforeImageUpload,"http-request":e.imgUpload,"file-list":e.fileList}},[i("i",{staticClass:"el-icon-plus"})]),i("el-dialog",{attrs:{visible:e.dialogVisible,size:"tiny"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},V=[],O={components:{},props:["name"],data:function(){return{dialogImageUrl:"",dialogVisible:!1,dialogTableVisible:!1,fileList:[],upLoadImgObj:{},PicId:"",url:""}},watch:{dialogTableVisible:function(){1==this.dialogTableVisible?this.getfileList():this.fileList=[]}},computed:{},methods:{handleRemove:function(e,t){for(var i=0;i<this.fileList.length;i++)e.uid===this.fileList[i].uid&&(this.picnumber=this.fileList[i].name);this.$http.post("/Manage/goods_picarr/del",{id:this.picnumber}).then(function(e){})},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},beforeImageUpload:function(e){this.upLoadImgObj=e},imgUpload:function(e){var t=this,i=new FormData;i.append("file",this.upLoadImgObj),this.$http.post("/manage/image/upload",i).then(function(e){t.url=e.data.filepath,t.$http.post("/Manage/goods_picarr/add",{goods_id:t.PicId,thumb:t.url}).then(function(e){t.fileList.push({name:"",url:t.url})})})},getfileList:function(){var e=this;this.$http.get("/Manage/goods_picarr/lists",{params:{goods_id:this.PicId}}).then(function(t){if(t.data.list.length>e.fileList.length)for(var i=0;i<t.data.list.length;i++)e.fileList.push({name:t.data.list[i].id,url:t.data.list[i].picurl})})}},created:function(){},mounted:function(){}},j=O,E=Object(u["a"])(j,C,V,!1,null,"2dbeea35",null),S=E.exports,I=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{title:e.title,visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t},close:function(t){return e.$emit("close")}}},[i("div",[i("div",{staticClass:"con",domProps:{innerHTML:e._s(e.info)}})])])},W=[],P={components:{},props:["row","title"],data:function(){return{dialogTableVisible:!0,info:""}},watch:{},computed:{},methods:{getInfot:function(){var e=this;this.$http.get("/manage/goods/info",{params:{id:this.row.id}}).then(function(t){e.info=t.data.info.content})}},created:function(){this.getInfot()},mounted:function(){}},F=P,T=(i("7229"),Object(u["a"])(F,I,W,!1,null,"5e1b692a",null)),q=T.exports,M={components:{add:p,norm:L,pic:S,edit:_,info:q},props:{},data:function(){return{isInfo:!1,infoTitle:"",infoRow:{},name:"",cate_list:[],keywords:"",list:[{label:"所属分类",value:"cate_info.name"},{label:"商品品牌",value:"brand_info.name"},{label:"商品类型",value:"type_str"},{label:"权重排序",value:"sort"},{label:"点击次数",value:"hits"},{label:"销量",value:"sales_number"},{label:"显示状态",value:"status_str"},{label:"推荐状态",value:"pick_str"}],tableData:[],cate_id:"",brand_id:"",type:"",state:"",pick:"",selectList1:[],selectList2:[],selectList3:[],selectList4:[],selectList5:[],maxPage:1,nowPage:1}},watch:{nowPage:function(){this.getdata()}},computed:{},methods:{filterChange:function(){1===this.nowPage?this.getdata():this.nowPage=1},handleEdit:function(e,t){var i=this;this.$refs.edit.dialogFormVisible=!0,this.$refs.edit.id=t.id,this.$http.get("/Manage/Category/lists",{params:{}}).then(function(e){i.$refs.edit.options=e.data.list}),this.$http.get("/Manage/brand/lists",{params:{}}).then(function(e){i.$refs.edit.options3=e.data.list}),this.$http.get("/manage/goods/lists",{params:{}}).then(function(e){for(var l in i.$refs.edit.options2=e.data.type_screen,e.data.list)t.id==e.data.list[l].id&&(i.$refs.edit.selectedOptions=e.data.list[l].cate_list,console.log(e.data.list[l],i.$refs.edit.options))})},handlePick:function(e,t){var i=this;this.$http.post("/manage/goods/sethot",{id:t.id}).then(function(e){i.getdata(),i.$message({type:"success",message:"状态切换成功"})})},handleShow:function(e,t){var i=this;this.$http.post("/manage/goods/state",{id:t.id}).then(function(e){i.getdata(),i.$message({type:"success",message:"状态切换成功"})})},handleInfo:function(e,t){this.infoRow=t,this.isInfo=!0,this.infoTitle=t.title,console.log(this.infoTitle)},closeInfo:function(){this.isInfo=!1,this.getdata()},add:function(){var e=this;this.$refs.add.dialogFormVisible=!0,this.$http.get("/Manage/Category/lists",{params:{}}).then(function(t){e.$refs.add.options=t.data.list})},handleNorm:function(e){console.log(e),this.name=e.title,console.log(this.name),this.$refs.norm.outerVisible=!0,this.$refs.norm.goods_id=e.id},handlePic:function(e){this.name=e.title,this.$refs.pic.dialogTableVisible=!0,this.$refs.pic.PicId=e.id},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.post("/manage/goods/del",{id:e.id}).then(function(e){t.$message({type:"success",message:"success"}),t.getdata()})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},getdata:function(){var e=this;this.$http.get("/manage/goods/lists",{params:{page:this.nowPage,row:10,keywords:this.keywords,cate_id:this.cate_id[1],brand_id:this.brand_id,type:this.type,state:this.state,pick:this.pick}}).then(function(t){e.tableData=t.data.list,e.selectList3=t.data.type_screen,e.selectList4=t.data.state_screen,e.selectList5=t.data.pick_screen,e.$refs.add.options2=t.data.type_screen,e.maxPage=t.data.page_total}),this.$http.get("/Manage/brand/lists",{params:{page:1,rows:1e4}}).then(function(t){e.selectList2=t.data.list}),this.$http.get("/Manage/Category/lists").then(function(t){e.selectList1=t.data.list})}},created:function(){this.getdata()},mounted:function(){}},D=M,z=(i("3649"),Object(u["a"])(D,l,a,!1,null,"2329e0ce",null));t["default"]=z.exports},ee47:function(e,t,i){}}]);