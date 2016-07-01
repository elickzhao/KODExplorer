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
	//exports.foo = 'bar';
	exports.doSomething = function(id,md) {
		testEditor = editormd(id, {
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
		});
	 };

});