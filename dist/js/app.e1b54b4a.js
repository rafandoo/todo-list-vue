(function(){"use strict";var t={8424:function(t,e,s){var a=s(6369),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[e("b-navbar-brand",{attrs:{href:"#"}},[t._v("ToDo List")]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{to:"/"}},[t._v("Tasks")]),e("b-nav-item",{attrs:{to:"/task"}},[t._v("Create Task")])],1)],1)],1),e("router-view")],1)},o=[],n=s(1001),i={},l=(0,n.Z)(i,r,o,!1,null,null,null),u=l.exports,c=s(2631),d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-2"},[t._l(t.tasks,(function(s,a){return e("div",{key:a},[e("b-card",{staticClass:"mb-2",attrs:{title:s.title}},[e("b-card-text",[t._v(t._s(s.description))]),e("b-button",{staticClass:"mr-2",attrs:{variant:"outline-secondary"},on:{click:function(e){return t.edit(a)}}},[t._v("Edit")]),e("b-button",{staticClass:"mr-2",attrs:{variant:"outline-danger"},on:{click:function(e){return t.remove(s,a)}}},[t._v("Delete")])],1)],1)})),e("b-modal",{ref:"modalRemove",attrs:{"hide-footer":"",title:"Delete Task"}},[e("div",{staticClass:"d-block text-center"},[t._v(" Are you sure you want to delete this task? ")]),e("div",{staticClass:"mt-3 d-flex justify-content-end"},[e("b-button",{staticClass:"mr-2",attrs:{variant:"outline-secondary"},on:{click:t.hideModal}},[t._v(" Cancelar ")]),e("b-button",{staticClass:"mr-2",attrs:{variant:"outline-danger"},on:{click:t.confirmRemoveTask}},[t._v(" Excluir ")])],1)])],2)},f=[],m=(s(7658),{methods:{showToast(t,e,s){this.$root.$bvToast.toast(e,{title:t,variant:s,autoHideDelay:3e3,solid:!0})}}}),v={name:"List",mixins:[m],data(){return{tasks:[],selectTask:[]}},created(){this.tasks=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]},methods:{edit(t){this.$router.push({name:"Task",params:{index:t}})},remove(t,e){this.selectTask=t,this.selectTask.index=e,this.$refs.modalRemove.show()},hideModal(){this.$refs.modalRemove.hide()},confirmRemoveTask(){this.tasks.splice(this.selectTask.index,1),localStorage.setItem("tasks",JSON.stringify(this.tasks)),this.hideModal(),this.showToast("Success!","Task deleted successfully","success")}}},p=v,h=(0,n.Z)(p,d,f,!1,null,null,null),b=h.exports,k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-2"},[e("b-form",[e("b-form-group",{attrs:{label:"Title","label-for":"title"}},[e("b-form-input",{attrs:{id:"title",type:"text",placeholder:"",required:"",autocomplete:"off"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),e("b-form-group",{attrs:{label:"Description","label-for":"description"}},[e("b-form-textarea",{attrs:{id:"description",type:"text",placeholder:"",required:"",autocomplete:"off"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),e("b-button",{attrs:{type:"submit",variant:"outline-primary"},on:{click:t.saveTask}},[t._v("Save")])],1)],1)},g=[],y={name:"formTask",mixins:[m],data(){return{form:{title:"",description:""},methodRequest:"new"}},created(){if(0===this.$route.params.index||void 0!==this.$route.params.index){this.methodRequest="update";let t=JSON.parse(localStorage.getItem("tasks"));this.form=t[this.$route.params.index]}},methods:{saveTask(){if("update"===this.methodRequest){let t=JSON.parse(localStorage.getItem("tasks"));return t[this.$route.params.index]=this.form,localStorage.setItem("tasks",JSON.stringify(t)),this.showToast("Success!","Task updated successfully","success"),void this.$router.push("/")}let t=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];t.push(this.form),localStorage.setItem("tasks",JSON.stringify(t)),this.showToast("Success!","Task created successfully","success"),this.$router.push("/")}}},T=y,x=(0,n.Z)(T,k,g,!1,null,null,null),S=x.exports;a["default"].use(c.ZP);const _=[{path:"/",name:"list",component:b},{path:"/task",name:"Task",component:S}],O=new c.ZP({mode:"history",base:"/",routes:_});var w=O,$=s(6882);s(7024);a["default"].use($.XG7),a["default"].config.productionTip=!1,new a["default"]({router:w,render:t=>t(u)}).$mount("#app")}},e={};function s(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,s),o.exports}s.m=t,function(){var t=[];s.O=function(e,a,r,o){if(!a){var n=1/0;for(c=0;c<t.length;c++){a=t[c][0],r=t[c][1],o=t[c][2];for(var i=!0,l=0;l<a.length;l++)(!1&o||n>=o)&&Object.keys(s.O).every((function(t){return s.O[t](a[l])}))?a.splice(l--,1):(i=!1,o<n&&(n=o));if(i){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[a,r,o]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,o,n=a[0],i=a[1],l=a[2],u=0;if(n.some((function(e){return 0!==t[e]}))){for(r in i)s.o(i,r)&&(s.m[r]=i[r]);if(l)var c=l(s)}for(e&&e(a);u<n.length;u++)o=n[u],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(c)},a=self["webpackChunktodo_list"]=self["webpackChunktodo_list"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(8424)}));a=s.O(a)})();
//# sourceMappingURL=app.e1b54b4a.js.map