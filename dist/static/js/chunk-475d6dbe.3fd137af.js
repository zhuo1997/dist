(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-475d6dbe"],{"2f21":function(e,t,l){"use strict";var a=l("79e5");e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}},4033:function(e,t,l){"use strict";var a=l("8d82"),i=l.n(a);i.a},"55dd":function(e,t,l){"use strict";var a=l("5ca1"),i=l("d8e8"),s=l("4bf8"),r=l("79e5"),n=[].sort,o=[1,2,3];a(a.P+a.F*(r(function(){o.sort(void 0)})||!r(function(){o.sort(null)})||!l("2f21")(n)),"Array",{sort:function(e){return void 0===e?n.call(s(this)):n.call(s(this),i(e))}})},"5c2c":function(e,t,l){},"8d82":function(e,t,l){},9648:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-card",[l("div",{staticClass:"headerk"},[l("div",{staticClass:"space"}),l("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("新增")])],1),l("el-table",{staticClass:"c-table",attrs:{data:e.tableData,border:"","m-b-10":""}},[l("el-table-column",{attrs:{label:"轮播图",width:"385",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[l("div",{staticClass:"thumbImg"},[l("img",{attrs:{src:t.thumb,alt:""}})])]}}])}),l("el-table-column",{attrs:{label:"跳转类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[e._v(e._s(l.jump_type_str))]}}])}),l("el-table-column",{attrs:{label:"跳转对象",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[e._v(e._s(l.jump_name))]}}])}),l("el-table-column",{attrs:{label:"排序权重",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[e._v(e._s(l.sort))]}}])}),l("el-table-column",{attrs:{label:"操作",align:"center","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[l("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.open(a)}}},[e._v("编辑")]),l("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.removeTodo(a.id)}}},[e._v("删除")])]}}])})],1),l("add",{ref:"add",on:{filterChange:e.filterChange}}),l("edit",{ref:"edit",on:{filterChange:e.filterChange}})],1)],1)},i=[],s=(l("55dd"),l("dd87")),r=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-dialog",{attrs:{title:"新增",width:"600px",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[l("el-form",{ref:"formName",attrs:{model:e.form,rules:e.rules}},[l("el-form-item",{attrs:{label:"跳转类型","label-width":e.formLabelWidth,prop:"select"}},[l("el-select",{on:{change:e.theTypeChange},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},e._l(e.selectList,function(e,t){return l("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1),"LIST"===e.type?l("el-form-item",{attrs:{label:"选择分类",prop:"classValue","label-width":e.formLabelWidth}},[l("el-cascader",{attrs:{options:e.classOption,"change-on-select":"",props:e.classProps,clearable:""},on:{change:e.handleChange},model:{value:e.classValue,callback:function(t){e.classValue=t},expression:"classValue"}})],1):e._e(),"GOODS"===e.type?l("el-form-item",{attrs:{label:"选择商品",prop:"searchValue","label-width":e.formLabelWidth}},[l("el-select",{attrs:{filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入关键词","remote-method":e.remoteMethod,loading:e.loading},on:{change:e.goodChangeValue},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}},e._l(e.goodOptions,function(e){return l("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})}),1)],1):e._e(),l("el-form-item",{attrs:{label:"排序权重",prop:"value255","label-width":e.formLabelWidth}},[l("div",{staticClass:"block"},[l("el-slider",{attrs:{min:0,max:255},model:{value:e.value255,callback:function(t){e.value255=t},expression:"value255"}})],1)]),l("el-form-item",{staticStyle:{"margin-left":"50px"},attrs:{label:"添加图片",prop:"url"}},[l("label",{staticStyle:{display:"block",height:"100px",width:"100px",border:"1px dashed #666",cursor:"pointer","margin-left":"70px"},attrs:{for:"files"}},[e.url?e._e():l("p",{staticStyle:{margin:"30px 0 0 15px"}},[e._v("\n          选择图片\n          "),l("i",{staticClass:"el-icon-plus"})]),l("img",{staticStyle:{height:"100px",width:"100px","margin-top":"-40px"},attrs:{src:e.newurl,alt:""}})]),l("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"files"},on:{change:e.fileChange}})])],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.sure("formName")}}},[e._v("确 定")])],1)],1)},n=[],o={components:{},props:{},data:function(){return{type:"",classOption:[],classValue:[],classProps:{value:"id",label:"name",children:"children"},searchValue:"",loading:!1,goodOptions:[],jump_id:"",url:"",newurl:"",select:"",selectList:[{label:"分类",value:"CATES"},{label:"列表",value:"LIST"},{label:"商品",value:"GOODS"}],value255:255,dialogFormVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:"",value255:255,select:"",jump_id:"",classValue:"",searchValue:"",url:""},formLabelWidth:"120px",rules:{jump_id:[{required:!0,message:"请输入跳转对象id",trigger:"blur"}],select:[{required:!0,message:"请选择跳转类型",trigger:"blur"}],classValue:[{required:!0,message:"请选择分类",trigger:"blur"}],searchValue:[{required:!0,message:"请选择商品",trigger:"blur"}],value255:[{required:!0,message:"请选择权重",trigger:"blur"}],url:[{required:!0,message:"图片",trigger:"blur"}]}}},watch:{},computed:{},methods:{sure:function(e){var t=this;this.form.value255=this.value255,this.form.select=this.select,this.form.jump_id=this.jump_id,this.form.classValue=this.classValue,this.form.searchValue=this.searchValue,this.form.url=this.url,this.$refs[e].validate(function(l){if(!l)return!1;t.$http.post("/Manage/advert/add",{type:"SLIDER",thumb:t.url,sort:t.value255,jump_type:t.select,jump_id:t.jump_id}).then(function(l){t.dialogFormVisible=!1,t.$emit("filterChange"),t.$refs[e].resetFields(),t.$message({showClose:!0,message:"新增成功",type:"success"}),t.url=null,t.newurl=null,t.value255=255,t.select=null,t.jump_id=null,t.classValue=[]})})},fileChange:function(e){var t=this,l=new FormData;l.append("file",e.currentTarget.files[0]),this.$http.post("/manage/image/upload",l).then(function(e){t.url=e.data.filepath,t.newurl=e.data.urlpath})},theTypeChange:function(e){var t=this;if(this.type=e,"CATES"!=e){if("LIST"==e)this.$http.get("/Manage/Category/lists").then(function(e){t.classOption=e.data.list});else if("GOODS"==e)return}else this.jump_id=""},handleChange:function(e){this.jump_id=e[e.length-1]},remoteMethod:function(e){var t=this;""!==e?(this.loading=!0,this.$http.get("/manage/goods/lists",{params:{page:1,rows:1e6,keywords:e}}).then(function(e){t.goodOptions=e.data.list,t.loading=!1})):this.goodOptions=[]},goodChangeValue:function(e){this.jump_id=e}},created:function(){},mounted:function(){}},u=o,c=(l("4033"),l("2877")),d=Object(c["a"])(u,r,n,!1,null,"4b75c560",null),h=d.exports,p=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-dialog",{attrs:{title:"编辑",width:"600px",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[l("el-form",{attrs:{model:e.form}},[l("el-form-item",{attrs:{label:"跳转类型","label-width":e.formLabelWidth}},[l("el-select",{on:{change:e.theTypeChange},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},e._l(e.selectList,function(e,t){return l("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1),"LIST"===e.select?l("el-form-item",{attrs:{label:"选择分类","label-width":e.formLabelWidth}},[l("el-cascader",{attrs:{options:e.classOption,"change-on-select":"",props:e.classProps,clearable:""},on:{change:e.handleChange},model:{value:e.classValue,callback:function(t){e.classValue=t},expression:"classValue"}})],1):e._e(),"GOODS"===e.select?l("el-form-item",{attrs:{label:"选择商品","label-width":e.formLabelWidth}},[l("el-select",{attrs:{filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入关键词","remote-method":e.remoteMethod,loading:e.loading},on:{change:e.goodChangeValue},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}},e._l(e.goodOptions,function(e){return l("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})}),1)],1):e._e(),l("el-form-item",{attrs:{label:"排序权重","label-width":e.formLabelWidth}},[l("div",{staticClass:"block"},[l("el-slider",{attrs:{min:0,max:255},model:{value:e.value255,callback:function(t){e.value255=t},expression:"value255"}})],1)]),l("el-form-item",{staticStyle:{"margin-left":"50px"},attrs:{label:"添加图片"}},[l("label",{staticStyle:{display:"block",height:"100px",width:"100px",border:"1px dashed #666",cursor:"pointer","margin-left":"70px"},attrs:{for:"files"}},[e.newurl?e._e():l("p",{staticStyle:{margin:"30px 0 0 15px"}},[e._v("\n          选择图片\n          "),l("i",{staticClass:"el-icon-plus"})]),l("img",{staticStyle:{height:"100px",width:"100px"},attrs:{src:e.newurl,alt:""}})]),l("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"files"},on:{change:e.fileChange}})])],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.sure("formName")}}},[e._v("确 定")])],1)],1)},f=[],m={components:{},props:{},data:function(){return{type:"",classOption:[],classValue:[],classProps:{value:"id",label:"name",children:"children"},searchValue:"",loading:!1,goodOptions:[],jump_id:"",id:"",url:"",newurl:"",select:"",thumb:"",selectList:[{label:"分类",value:"CATES"},{label:"列表",value:"LIST"},{label:"商品",value:"GOODS"}],value255:255,dialogFormVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:"",value255:255,select:"",jump_id:"",classValue:"",searchValue:"",url:""},formLabelWidth:"120px",rules:{jump_id:[{required:!0,message:"请输入跳转对象id",trigger:"blur"}],select:[{required:!0,message:"请选择跳转类型",trigger:"blur"}],classValue:[{required:!0,message:"请选择分类",trigger:"blur"}],searchValue:[{required:!0,message:"请选择商品",trigger:"blur"}],value255:[{required:!0,message:"请选择权重",trigger:"blur"}],url:[{required:!0,message:"图片",trigger:"blur"}]}}},watch:{dialogFormVisible:function(e){e&&this.getClass()}},computed:{},methods:{sure:function(){var e=this;this.$http.post("/Manage/advert/edit",{id:this.id,type:"SLIDER",thumb:this.url?this.url:this.thumb,sort:this.value255,jump_type:this.select,jump_id:this.jump_id}).then(function(t){e.dialogFormVisible=!1,e.$emit("filterChange"),e.$message({showClose:!0,message:"编辑成功",type:"success"})})},fileChange:function(e){var t=this,l=new FormData;l.append("file",e.currentTarget.files[0]),this.$http.post("/manage/image/upload",l).then(function(e){t.url=e.data.filepath,t.newurl=e.data.urlpath})},getClass:function(){var e=this;this.$http.get("/Manage/Category/lists").then(function(t){e.classOption=t.data.list,console.log(e.classOption,"111")})},theTypeChange:function(e){if(this.type=e,"LIST"==e)this.getClass();else{if("CATES"==e)return void(this.jump_id="");if("GOODS"==e)return}},handleChange:function(e){this.jump_id=e[e.length-1]},remoteMethod:function(e){var t=this;""!==e?(this.loading=!0,this.$http.get("/manage/goods/lists",{params:{page:1,rows:1e6,keywords:e}}).then(function(e){t.goodOptions=e.data.list,t.loading=!1})):this.goodOptions=[]},goodChangeValue:function(e){this.jump_id=e}},created:function(){},mounted:function(){}},g=m,b=(l("fa97"),Object(c["a"])(g,p,f,!1,null,"66dfad84",null)),v=b.exports,y=(l("c5db"),{components:{BasePagination:s["a"],add:h,edit:v},data:function(){return{formShow:!1,sltItem:{},tableData:[],maxPage:1,nowPage:1}},watch:{},methods:{search:function(e){},filterChange:function(){this.getdata()},add:function(){this.$refs.add.dialogFormVisible=!0},open:function(e){this.$refs.edit.dialogFormVisible=!0,this.$refs.edit.select=e.jump_type,this.$refs.edit.value255=e.sort,this.$refs.edit.newurl=e.picurl,this.$refs.edit.id=e.id,this.$refs.edit.jump_id=e.jump_id,this.$refs.edit.thumb=e.thumb,this.$refs.edit.classValue=e.jump_id},removeTodo:function(e){var t=this;this.$confirm("此操作将永久删除该条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.post("/Manage/advert/del",{id:e}).then(function(e){t.getdata(),t.$message({type:"success",message:"删除成功!"})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},getdata:function(){var e=this;this.$http.get("/Manage/advert/lists",{params:{type:"SLIDER"}}).then(function(t){e.tableData=t.data.list})}},created:function(){this.getdata()}}),_=y,w=(l("d36b"),Object(c["a"])(_,a,i,!1,null,"5cf8d6dc",null));t["default"]=w.exports},c5db:function(e,t,l){},d36b:function(e,t,l){"use strict";var a=l("e623"),i=l.n(a);i.a},e623:function(e,t,l){},fa97:function(e,t,l){"use strict";var a=l("5c2c"),i=l.n(a);i.a}}]);