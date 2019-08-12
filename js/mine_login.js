var inputId = document.querySelector('#id')
var iconId = document.querySelector('#iconId')
var inputPhoneNum = document.querySelector('#phoneNum')
var iconPhoneNum = document.querySelector('#iconPhoneNum')
var sendCode = document.querySelector('.sendCode')
var tag = document.querySelector('.tag')
var circle = document.querySelector('.circle')
var body = document.querySelector('body')
var isWrongId = true
var isWrongPhone = true
var isWrongAgree = true

inputId.onkeydown = function(e){
	console.log(e)
	if(e.key=='Enter'){
		var arr = inputId.value.split('')
		if(arr.length==18){
			iconId.className = 'icon correct'
			isWrongId = false
		}else{
			iconId.className = 'icon wrong'
			isWrongId = true
		}
		sendCode.onclick()
	}
}
inputPhoneNum.onkeydown = function(e){
	console.log(e)
	if(e.key=='Enter'){
		
		var arr = inputPhoneNum.value.split('')
		if(arr.length==11){
			iconPhoneNum.className = 'icon correct'
			isWrongPhone = false
		}else{
			iconPhoneNum.className = 'icon wrong'
			isWrongPhone = true
		}
		sendCode.onclick()
	}
}
body.onclick = function(e){
	console.log(e.path)
	var arr = e.path.reverse()
	if(arr[4].className=='circle'){
		arr[4].className = 'circle active'
		isWrongAgree = false
	}else if(arr[4].className=='circle active'){
		arr[4].className = 'circle'
		isWrongAgree = true
	}
}

sendCode.onclick = function(e){
	
	var arr1 = inputId.value.split('')
	if(arr1.length==18){
		iconId.className = 'icon correct'
		isWrongId = false
	}else{
		iconId.className = 'icon wrong'
		isWrongId = true
	}
	var arr2 = inputPhoneNum.value.split('')
	if(arr2.length==11){
		iconPhoneNum.className = 'icon correct'
		isWrongPhone = false
	}else{
		iconPhoneNum.className = 'icon wrong'
		isWrongPhone = true
	}
	
	if(!isWrongId&&!isWrongPhone&&!isWrongAgree){
		tag.className = 'tag'
		setTimeout(function(){
			location.href = 'mine_login_sendCode.html'
		},400)
	}else if(isWrongId||isWrongPhone){
		tag.style.display = 'block'
		tag.innerHTML = '身份证或手机号格式错误'
	}else if(isWrongAgree){
		tag.style.display = 'block'
		tag.innerHTML = '请您同意用户使用协议'
	}
}
