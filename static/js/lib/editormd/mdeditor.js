define(
			function(require, exports, module){
	//var $ = require("jquery");
	require("./plugins/link-dialog/link-dialog");
	require("./plugins/reference-link-dialog/reference-link-dialog");
	require("./plugins/image-dialog/image-dialog");
	require("./plugins/code-block-dialog/code-block-dialog");
	require("./plugins/table-dialog/table-dialog");
	require("./plugins/emoji-dialog/emoji-dialog");
	require("./plugins/goto-line-dialog/goto-line-dialog");
	require("./plugins/help-dialog/help-dialog");
	require("./plugins/html-entities-dialog/html-entities-dialog");
	require("./plugins/preformatted-text-dialog/preformatted-text-dialog");
	var editormd = require("./editormd");

	var uri = (module.uri);
	var libpath = uri.substr(0,(uri.length-20))+"lib/";
	
	var t = !0;
	var a = [];
	
	exports.doSomething = function(id,md) {
		a[id] = [!1,0];
		em = editormd(id, {
		            width: "100%",
		            height: "100%",
		            path : libpath,
		            markdown : md,
		            //toolbar  : false,             //关闭工具栏
					toolbarIcons : "my",
                    //htmlDecode : true,            // 开启HTML标签解析，为了安全性，默认不开启
		            //tex : true,                   // 开启科学公式TeX语言支持，默认关闭
		            //previewCodeHighlight : false,  // 关闭预览窗口的代码高亮，默认开启
		            flowChart : true,              // 疑似Sea.js与Raphael.js有冲突，必须先加载Raphael.js，Editor.md才能在Sea.js下正常进行；
		            sequenceDiagram : true,        // 同上
					imageUpload : false,
					imageFormats : ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
					imageUploadURL : libpath+"php/upload.php",
					hasChanged : !1,
					onchange: function(){
						//console.log(a);
						if(a[id][1] != 0){
							t != a[this.id][0] && (a[this.id][0] = t, $(".edit_tab .tabs .tab_" + this.id).toggleClass("edit_changed"));
							 auto_function_list && "block" == $(".frame_right .function_list").css("display") && FunctionList.refresh();
							 this.hasChanged = a[this.id][0];
							//console.log(this.hasChanged);
	                    	//console.log(this.id+"----"+a[id]);
                    	}
						a[id][1] = 1;
                    }
		});
	 };

//	function MDeditor(){
//		
//	}
	
//	module.exports = MDeditor;
//	
//	var t = !0;
//	var a = [];
//	/*
//	 还是有问题 快捷键保存后,再出现变更也不会出现提示,这是因为保存但是没改变hasChange,但是这个属性外面看不到
//	 还有就是当文件关闭后,再次打开,右边不显示
//	 * */
//	
//	MDeditor.prototype.render = function (id,md) {
//		a[id] = [!1,0];
//		var name = "em_"+id;
//		name = editormd(id, {
//		            width: "100%",
//		            height: "100%",
//		            path : libpath,
//		            markdown : md,
//		            //toolbar  : false,             //关闭工具栏
//					toolbarIcons : "my",
//                  //htmlDecode : true,            // 开启HTML标签解析，为了安全性，默认不开启
//		            //tex : true,                   // 开启科学公式TeX语言支持，默认关闭
//		            //previewCodeHighlight : false,  // 关闭预览窗口的代码高亮，默认开启
//		            flowChart : true,              // 疑似Sea.js与Raphael.js有冲突，必须先加载Raphael.js，Editor.md才能在Sea.js下正常进行；
//		            sequenceDiagram : true,        // 同上
//					imageUpload : false,
//					imageFormats : ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
//					imageUploadURL : libpath+"php/upload.php",   
//					hasChanged : !1,
//					onchange: function(){
//						//console.log(a);
//						if(a[id][1] != 0){
//							t != a[this.id][0] && (a[this.id][0] = t, $(".edit_tab .tabs .tab_" + this.id).toggleClass("edit_changed"));
//							 auto_function_list && "block" == $(".frame_right .function_list").css("display") && FunctionList.refresh();
//							 this.hasChanged = a[this.id][0];
//							//$(".edit_tab .tabs .tab_" + this.id).toggleClass("edit_changed")
//	                    	//console.log(this.id+"----"+a[id]);
//                  	}
//						a[id][1] = 1;
//                  }
//		});
//		//name.hasChanged = !1;
//		return name;
//	}

});