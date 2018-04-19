$(document).ready(function () {
	var personList = [];

	var person1 = {
		name: '名字1',
		head: "https://dummyimage.com/30x30.jpg/&text=1"
	}
	var person2 = {
		name: '名字2',
		head: "https://dummyimage.com/30x30.jpg/&text=2"
	}
	//初始化人物
	function initPerson(person) {
		personList.push(person)
	}
	initPerson(person1)
	initPerson(person2)

	var person1Name = $("#person1NameInput"); //人物1名字输入框
	var person1Head = $('#person1Head'); //人物1头像
	var person1HeadInput = $('#person1HeadInput'); //人物1头像输入框
	var person1HeadSend = $('#person1HeadSend'); //人物1头像上传按钮

	var person2Name = $("#person2NameInput"); //人物2名字输入框
	var person2Head = $('#person2Head'); //人物2头像
	var person2HeadInput = $('#person2HeadInput'); //人物2头像输入框
	var person2HeadSend = $('#person2HeadSend'); //人物2头像上传按钮

	//刷新人物信息
	function reflashPersonName(personIndex, name) {
		personList[personIndex].name = name;
	}

	function reflashPersonHead(personIndex, imgURL) {
		personList[personIndex].head = imgURL;
	}

	var output = $('#rightMain'); //右侧展示框
	var person1Input = $('#person1Input') //人物1输入文字或图片输入框
	var person2Input = $('#person2Input') //人物2输入文字或图片输入框

	function creatDiolag() {}

	var preson1SendTextBtn = $('#person1SendText') //人物1发送文字按钮
	var preson2SendTextBtn = $('#person2SendText') //人物2发送文字按钮

	var classList = [{
		div: ' right-unit fl ',
		head: ' person-head-1 ',
		name: ' right-name-1 ',
		img: 'right-unit-img',
		bg: 'bg1'
	}, {
		div: ' right-unit fl ',
		img: 'right-unit-img',
		bg: 'bg2'
	}, {
		div: ' fr right-unit-right ',
		head: ' person-head-2 ',
		name: ' right-name-2 ',
		img: 'right-unit-img',
		bg: ' bg3 '
	}, {
		div: ' fr right-unit-right ',
		img: 'right-unit-img',
		bg: ' bg4 '
	}];

	var nameList = [{
		say: 'person1Say1',
		name: 'person1Name'
	}, {
		say: 'person1Say2',
	}, {
		say: 'person2Say1',
		name: 'person2Name'
	}, {
		say: 'person2Say2',
	}]

	//创建文字对话框
	function creatText(text, direction, person, index) {
		let _text = text.val();
		if (_text == '') {
			alert('请输入内容！');
			return
		}
		let _html = '';

		if (person == "person1" && direction == "left") { //人物1说话
			if (index == 0) { //人物1第一次说话
				_html = '<section name="' + nameList[0].say + '" class="right-item"> <section style = "width: 100%; background-repeat: no-repeat; box-sizing: border-box; background-size: 40px; background-image: url(' + person1.head + '); padding: 5px 45px 10px 40px; background-position: 0% 0px;" ><section style = "margin: 0px 10px; text-align: left;" >' + person1.name + '</section><section style = " box-sizing: border-box; overflow: hidden; padding: 0px 0px 0px 10px;" ><section style = "display: inline-block; max-width: 100%; min-height: 35px; padding: 5px 12px 6px; border-radius: 10px; color: rgb(0, 0, 0); font-size: 16px; word-break: normal; word-wrap: break-word; box-sizing: border-box; background-color: #58ec2a;margin-top: 10px;" ><p >' + _text + '</p> </section></section></section></section>';

			} else if (index == 1) { //人物1第二次说话
				_html = '<section name="' + nameList[1].say + '" class="right-item"><section style="width: 100%; box-sizing: border-box; padding: 5px 45px 10px 40px;"><section style=" box-sizing: border-box; overflow: hidden; padding: 0px 0px 0px 10px;"><section style="display: inline-block; max-width: 100%; min-height: 35px; padding: 5px 12px 6px; border-radius: 10px; color: rgb(0, 0, 0); font-size: 16px; word-break: normal; word-wrap: break-word; box-sizing: border-box; background-color: #58ec2a;margin-top: 10px;"><p>' + _text + '</p> </section> </section> </section> </section>'
			}
		} else if (person == "person2" && direction == "right") { //人物2说话
			if (index == 0) { //人物2第一次说话
				_html = '	<section name="' + nameList[2].say + '" class="right-item"> <section style = "width: 100%; background-repeat: no-repeat; box-sizing: border-box; background-size: 40px; background-image: url(' + person2.head + '); padding: 5px 40px 10px 45px; background-position: 100% 0px;" > <section style = "margin: 0px 10px; text-align: right;">' + person2.name + '</section><section style = "box-sizing: border-box; overflow: hidden; padding: 0px 10px 0px 0px;" ><section style = "display: inline-block; max-width: 100%; min-height: 35px; padding: 5px 12px 6px; border-radius: 10px; color: rgb(0, 0, 0); font-size: 16px; word-break: normal; word-wrap: break-word; box-sizing: border-box; float: right; background-color: #e8e8e8;margin-top: 10px;" ><p> ' + _text + ' </p></section ></section></				section></section>';
			} else if (index == 1) { //人物2第二次说话
				_html = '	<section name="' + nameList[3].say + '" class="right-item"><section style = "width: 100%; box-sizing: border-box;padding: 5px 40px 10px 45px; "><section style = "box-sizing: border-box; overflow: hidden; padding: 0px 10px 0px 0px;"><section style = "display: inline-block; max-width: 100%; min-height: 35px; padding: 5px 12px 6px; border-radius: 10px; color: rgb(0, 0, 0); font-size: 16px; word-break: normal; word-wrap: break-word; box-sizing: border-box; float: right; background-color: #e8e8e8;margin-top: 10px;" ><p>' + _text + '</p></section></section></section></section>'
			}
		}
		output.append(_html)
		creatDel()
	}

	var person1SendImgURLBtn = $('#person1SendImgURL') //人物1发送图片按钮
	var person2SendImgURLBtn = $('#person2SendImgURL') //人物2发送图片按钮

	//创建图片对话框
	function creatImg(url, person, index) {
		let _url = url.val();
		if (_url == '') {
			alert('请输入图片地址！');
			return;
		}
		let _html = '';
		if (person == "person1") { //人物1说话
			if (index == 0) { //人物1第一次说话
				_html = '<section name="' + nameList[0].say + '" class="right-item"> <section style = "width: 100%; background-repeat: no-repeat; box-sizing: border-box; background-size: 40px; background-image: url(' + person1.head + '); padding: 5px 45px 10px 40px; background-position: 0% 0px;" ><section style = "margin: 0px 10px; text-align: left;" >' + person1.name + '</section> <section style = " box-sizing: border-box; overflow: hidden; padding: 0px 0px 0px 10px;" ><section style = "    display: inline-block;max-width: 100%;min-height: 35px;padding: 10px 12px 10px;border-radius: 10px;box-sizing: border-box;background-color: #58ec2a;margin-top: 10px;" ><img src="' + _url + '" style="width: 100%;"> </section></section> </section> </section>';
			} else { //人物1第二次说话
				_html = '<section name="' + nameList[1].say + '" class="right-item"><section style="width: 100%; box-sizing: border-box; padding: 5px 45px 10px 40px;"><section style=" box-sizing: border-box; overflow: hidden; padding: 0px 0px 0px 10px;"><section style="    display: inline-block;max-width: 100%;min-height: 35px;padding: 10px 12px 10px;border-radius: 10px;box-sizing: border-box;background-color: #58ec2a;margin-top: 10px;"><img src="' + _url + '" style="width: 100%;"></section> </section> </section> </section>'
			}
		} else if (person == "person2") { //人物2说话
			if (index == 0) { //人物2第一次说话
				_html = '	<section name="' + nameList[2].say + '" class="right-item"> <section style = "width: 100%; background-repeat: no-repeat; box-sizing: border-box; background-size: 40px; background-image: url(' + person2.head + '); padding: 5px 40px 10px 45px; background-position: 100% 0px;" > <section style = "margin: 0px 10px; text-align: right;">' + person2.name + '</section><section style = "box-sizing: border-box; overflow: hidden; padding: 0px 10px 0px 0px;" ><section style = "    display: inline-block;max-width: 100%;min-height: 35px;padding: 10px 12px 10px;border-radius: 10px;box-sizing: border-box; float: right;background-color: #e8e8e8;margin-top: 10px;"><img src="' + _url + '" style="width: 100%;"></section ></section></section></section>';
			} else { //人物2第二次说话
				_html = '	<section name="' + nameList[3].say + '" class="right-item"><section style = "width: 100%; box-sizing: border-box;padding: 5px 40px 10px 45px; "><section style = "box-sizing: border-box; overflow: hidden; padding: 0px 10px 0px 0px;"><section style = "display: inline-block;max-width: 100%;min-height: 35px;padding: 10px 12px 10px;border-radius: 10px;box-sizing: border-box; float: right;background-color: #e8e8e8;margin-top: 10px;" ><img src="' + _url + '" style="width: 100%;"></section></section></section></section>'
			}
		}
		output.append(_html);
		creatDel()
	}

	var person1SendLongImgURLBtn = $('#person1SendLongImgURL') //人物1发送长图按钮
	var person2SendLongImgURLBtn = $('#person2SendLongImgURL') //人物2发送长图按钮

	//创建长图对话框
	function creatLongImg(url) {
		let _url = url.val();
		if (_url == '') {
			alert('请输入图片地址！');
			return;
		}
		let _html = '';
		_html = '	<section class="right-item"><section style = "width: 100%; box-sizing: border-box;padding: 5px 40px 10px 45px; "><section style = "box-sizing: border-box; overflow: hidden; padding: 0px 10px 0px 0px;"><section style = "display: inline-block; max-width: 100%; min-height: 35px; padding: 5px 12px 6px; box-sizing: border-box;margin-top: 10px;" ><img src="' + _url + '" style="width: 100%;"></section></section></section></section>'
		output.append(_html);
		creatDel()
	}

	//创建删除框
	function creatDel() {
		let _html = '<div class="del"><button class="del-btn">删除</button></div>'
		output.children().last().append(_html);
	}

	//删除对话事件
	function delUnit() {
		$(output).click(function (e) {
			let ev = e || window.event;　　　　
			let target = ev.target || ev.srcElement;　　　　
			if (target.nodeName.toLowerCase() == 'button') {
				$(target).parent().parent().remove()
			}
		})
	}

	var emojiShow = $('.emoji-show-btn');
	var emojiBox = $('.emoji-box');

	//发送表情
	function sendEmoji() {
		$(emojiBox).click(function (e) {
			let ev = e || window.event;　　　　
			let target = ev.target || ev.srcElement;　
			let src = ''　;
			let person = '';　　
			if (target.nodeName.toLowerCase() == 'img') {
				src = $(target).attr('src');
				let targetName = $(target).parent().parent().parent().attr('name')
				if (targetName == "person1EmojiBox") {
					person = "person1"
				} else if (targetName == "person2EmojiBox") {
					person = 'person2'
				}
			}
			if (src != '' && person != '') {
				let lastChild = $('#rightMain').children().last().attr("name");
				let index = 0;
				if (person == "person1") {
					if (lastChild == "person1Say1" || lastChild == "person1Say2") {
						index = 1;
					};
				} else if (person == "person2") {
					if (lastChild == "person2Say1" || lastChild == "person2Say2") {
						index = 1;
					};
				}
				let _html = '';
				if (person == "person1") { //人物1说话
					if (index == 0) { //人物1第一次说话
						_html = '<section name="' + nameList[0].say + '" class="right-item"> <section style = "width: 100%; background-repeat: no-repeat; box-sizing: border-box; background-size: 40px; background-image: url(' + person1.head + '); padding: 5px 45px 10px 40px; background-position: 0% 0px;" ><section style = "margin: 0px 10px; text-align: left;" >' + person1.name + '< /section> <section style = " box-sizing: border-box; overflow: hidden; padding: 0px 0px 0px 10px;" ><section style = "display: inline-block;max-width: 100%;min-height: 35px;padding: 10px 12px 10px;border-radius: 10px;box-sizing: border-box;background-color: #58ec2a;margin-top: 10px;" ><img src="' + src + '" style="width: 100%;"> </section></section> </section> </section>';
					} else { //人物1第二次说话
						_html = '<section name="' + nameList[1].say + '" class="right-item"><section style="width: 100%; box-sizing: border-box; padding: 5px 45px 10px 40px;"><section style=" box-sizing: border-box; overflow: hidden; padding: 0px 0px 0px 10px;"><section style="display: inline-block;max-width: 100%;min-height: 35px;padding: 10px 12px 10px;border-radius: 10px;box-sizing: border-box;background-color: #58ec2a;margin-top: 10px;"><img src="' + src + '" style="width: 100%;"></section> </section> </section> </section>'
					}
				} else if (person == "person2") { //人物2说话
					if (index == 0) { //人物2第一次说话
						_html = '	<section name="' + nameList[2].say + '" class="right-item"> <section style = "width: 100%; background-repeat: no-repeat; box-sizing: border-box; background-size: 40px; background-image: url(' + person2.head + '); padding: 5px 40px 10px 45px; background-position: 100% 0px;" > <section style = "margin: 0px 10px; text-align: right;">' + person2.name + '</section><section style = "box-sizing: border-box; overflow: hidden; padding: 0px 10px 0px 0px;" ><section style = "display: inline-block;max-width: 100%;min-height: 35px;padding: 10px 12px 10px;border-radius: 10px;box-sizing: border-box; float: right;background-color: #e8e8e8;margin-top: 10px;"><img src="' + src + '" style="width: 100%;"></section ></section></section></section>';
					} else { //人物2第二次说话
						_html = '	<section name="' + nameList[3].say + '" class="right-item"><section style = "width: 100%; box-sizing: border-box;padding: 5px 40px 10px 45px; "><section style = "box-sizing: border-box; overflow: hidden; padding: 0px 10px 0px 0px;"><section style = "display: inline-block;max-width: 100%;min-height: 35px;padding: 10px 12px 10px;border-radius: 10px;box-sizing: border-box; float: right;background-color: #e8e8e8;margin-top: 10px;" ><img src="' + src + '" style="width: 100%;"></section></section></section></section>'
					}
				}
				output.append(_html);
				creatDel()
			}
		})
	}

	//绑定点击事件
	function bindEvent() {
		//输入完姓名失去焦点刷新人物名字
		person1Name.blur(function () {
			let _personName = person1Name.html();
			reflashPersonName(0, _personName);
		})
		person2Name.blur(function () {
			let _personName = person2Name.html();
			reflashPersonName(1, _personName);
		})

		//点击上传头像按钮刷新头像
		person1HeadSend.click(function () {
			let _imgURL = person1HeadInput.val();
			if (_imgURL != null) {
				reflashPersonHead(0, _imgURL);
				person1Head.attr('src', _imgURL);
				person1HeadInput.val(''); //清空输入框
			} else {
				alert("请输入图片地址")
			}
		})
		person2HeadSend.click(function () {
			let _imgURL = person2HeadInput.val();
			if (_imgURL != null) {
				reflashPersonHead(1, _imgURL);
				person2Head.attr('src', _imgURL);
				person1HeadInput.val(''); //清空输入框
			} else {
				alert("请输入图片地址")
			}
		})

		//点击发送文字按钮
		preson1SendTextBtn.click(function () {
			let lastChild = $('#rightMain').children().last().attr("name");
			let index;
			if (lastChild == "person1Say1" || lastChild == "person1Say2") {
				index = 1;
			} else {
				index = 0;
			}
			creatText(person1Input, "left", "person1", index);
		})
		preson2SendTextBtn.click(function () {
			let lastChild = $('#rightMain').children().last().attr("name");
			let index = 0;
			if (lastChild == "person2Say1" || lastChild == "person2Say2") {
				index = 1;
			};
			creatText(person2Input, "right", "person2", index);
		})

		//点击发送图片按钮
		person1SendImgURLBtn.click(function () {
			let lastChild = $('#rightMain').children().last().attr("name");
			let index = 0;
			if (lastChild == "person1Say1" || lastChild == "person1Say2") {
				index = 1;
			};
			creatImg(person1Input, "person1", index)
		})
		person2SendImgURLBtn.click(function () {
			let lastChild = $('#rightMain').children().last().attr("name");
			let index = 0;
			if (lastChild == "person2Say1" || lastChild == "person2Say2") {
				index = 1;
			};
			creatImg(person2Input, "person2", index)
		})

		//点击发送长图按钮
		person1SendLongImgURLBtn.click(function () {
			creatLongImg(person1Input)
		})
		person2SendLongImgURLBtn.click(function () {
			creatLongImg(person2Input)
		})

		//点击表情按钮展示图片栏，点击其他区域隐藏表情栏
		//show
		for (let i = 0; i < emojiShow.length; i++) {
			let element = emojiShow[i];
			$(element).on('click', function () {
				$(emojiBox[i]).show();
			})
		}

		//hide
		for (let j = 0; j < emojiBox.length; j++) {
			let element = emojiBox[j];
			$(element).siblings().not(".unit-aside").on('click', function () {
				$(element).hide();
			});
			$(emojiBox).parent().siblings().eq(0).on('click', function () {
				$(element).hide();
			})
			$(emojiBox).parent().parent().siblings().on('click', function () {
				$(element).hide();
			})
		}


	}

	bindEvent()
	delUnit()
	sendEmoji()
})