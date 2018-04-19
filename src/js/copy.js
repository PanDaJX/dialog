	//复制右侧页面内容
	function copyOutput() {
		let text = document.getElementById('rightContent')
		let areaEnd = document.getElementById("rightEnd");
		if (text.innerHTML == '') {
			alert("请先制造对话！")
			return
		}
		let copyRange = document.createRange();
		let copySel = window.getSelection();
		if (copySel.rangeCount > 0) { //移除当前选区
			copySel.removeAllRanges();
		}
		let startNode = text;
		let startOffset = 0;
		copyRange.setStart(startNode, startOffset);
		let endNode = areaEnd;
		let endOffset = 0;
		copyRange.setEnd(endNode, endOffset);
		copySel.addRange(copyRange);
		document.execCommand('Copy', false, null);
		copySel.removeAllRanges(); //移除当前选区
		alert("已复制到剪切板")
	}
	//点击复制按钮复制页面
	var copyBtn = document.getElementById('copyPage');
	copyBtn.addEventListener('click', function () {
		copyOutput()
	})