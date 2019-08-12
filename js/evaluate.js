var pageList = document.querySelectorAll('.page')
var underline = document.querySelector('.underline')
var pageListDom = document.querySelector('.pageList')
var beforeHash
var currentHash
var befoIndex
var curIndex
var befoPage
var curPage
var consult = document.querySelector('.consult')

//hash值变化函数
function hashChange(){
	beforeHash = currentHash?currentHash:''
	currentHash = location.hash?location.hash:'#receive'
	//当前之前页面加类名
	befoPage = beforeHash!=''?document.querySelector(beforeHash):''
	befoIndex = beforeHash!=''?parseInt(befoPage.dataset.index):null
	curPage = document.querySelector(currentHash)
	curIndex = parseInt(curPage.dataset.index)
}

//根据hash值渲染页面函数
function renderPage(){
	//下划线定位
	if(curIndex==0){
		underline.style.transform = 'translateX(0.15rem)'
	}else if(curIndex==1){
		underline.style.transform = 'translateX(3.37rem)'
	}else if(curIndex==2){
		underline.style.transform = 'translateX(6.47rem)'
	}
	
	//条件分流
	if(befoIndex==null){
		curPage.style.zIndex = '10'
	}else if(curIndex>befoIndex){
		pageList.forEach(function(item,index){
			if(index==curIndex){
				item.style.animation = 'rightIn 0.8s forwards'
				item.style.zIndex = '10'
			}else if(index==befoIndex){
				item.style.animation = 'leftOut 0.8s forwards'
				item.style.zIndex = '5'
			}else{
				item.style.animation = ''
				item.style.zIndex = '0'
			}
		})
	}else if(curIndex<befoIndex){
		pageList.forEach(function(item,index){
			if(index==curIndex){
				item.style.animation = 'leftIn 0.8s forwards'
				item.style.zIndex = '10'
			}else if(index==befoIndex){
				item.style.animation = 'rightOut 0.8s forwards'
				item.style.zIndex = '5'
			}else{
				item.style.animation = ''
				item.style.zIndex = '0'
			}
		})
	}
}

//轮播图手势滑动
var startX= 0
var endX = 0
var d = 0
pageListDom.addEventListener('touchstart',function(e){
	//获取路径数组，然后倒序得到page确定的索引值
	try{
		var arr = e.path.reverse()
		if(arr[6].className=='page'){
			console.log(e.path.reverse())
			befoIndex = parseInt(arr[6].dataset.index)
			console.log('befoIndex = '+befoIndex)
			StartX = e.changedTouches[0].clientX
			console.log('StartX = '+StartX)
		}
	}
	catch(e){
		console.log(e)
	}
	
})
pageListDom.addEventListener('touchend',function(e){
	endX = e.changedTouches[0].clientX
	console.log('endX = '+endX)
	d = endX - StartX
	console.log('d = '+d)
	
	console.log(window.innerWidth)
	if(Math.abs(d)>window.innerWidth*2/9){
		touchSwiper()
	}
})
function touchSwiper(){
	underline.style.transition= 'all 0.8s 0.1s'
	if(d<0){
		curIndex = befoIndex +1
		if(curIndex>2){
			curIndex = 0
		}
		console.log(curIndex)
	}else if(d>0){
		curIndex = befoIndex - 1
		if(curIndex<0){
			curIndex = 2
		}	
		console.log(curIndex)
	}else{
		curIndex = curIndex
	}
	console.log('curIndex = '+curIndex)
	if(curIndex==0){
		location.hash = '#receive'
	}else if(curIndex==1){
		location.hash = '#send'
	}else if(curIndex==2){
		location.hash = '#law'
	}
}

hashChange()
renderPage()

window.addEventListener('hashchange',function(){
	underline.style.transition= 'all 0.8s 0.1s'
	hashChange()
	renderPage()
})

AlertWin('400  830  8339')
