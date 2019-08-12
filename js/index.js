var html = document.querySelector('html')
var imgList = document.querySelectorAll('.imgItem')
var imgListDom = document.querySelector('.imgList')
var circleList = document.querySelectorAll('.circle')
var itemListDom = document.querySelector('.itemList') 
var textList = document.querySelector('.textList')
var leftBtn = document.querySelector('.left')
var rightBtn = document.querySelector('.right')
//记录轮播图手势移动
var StartX = 0
var endX = 0
var currentIndex
var d

//轮播图circle点击
html.addEventListener('click',function(e){
	if(e.target.className=='circle'){
		var circleIndex = e.target.dataset.index
		imgList.forEach(function(item,index){
			if(index==circleIndex){
				item.className = 'imgItem active'
				circleList[index].className = 'circle active'
			}else{
				item.className = 'imgItem'
				circleList[index].className = 'circle'
			}
		})
	}
})

//轮播图手势滑动
imgListDom.addEventListener('touchstart',function(e){
	console.log(e)
	
	if(e.target.className=='imgItem active'){
		currentIndex = e.target.dataset.index
		StartX = e.changedTouches[0].clientX
		console.log('StartX='+StartX)
	}
})
imgListDom.addEventListener('touchend',function(e){
	console.log(e.target)
	if(e.target.className=='imgItem active'){
		endX = e.changedTouches[0].clientX
		console.log('endX='+endX)
		d = endX - StartX
		console.log('d='+d)
	}
	console.log(window.innerWidth)
	if(Math.abs(d)>window.innerWidth*2/9){
		touchSwiper()
	}
})
function touchSwiper(){
	if(d<0){
		currentIndex++
		console.log(currentIndex)
		if(currentIndex>4){
			currentIndex = 0
		}
	}else if(d>0){
		currentIndex--
		console.log(currentIndex)
		if(currentIndex<0){
			currentIndex = 4
		}		
	}else{
		currentIndex = currentIndex
	}
	imgList.forEach(function(item,index){
		if(index==currentIndex){
			item.className = 'imgItem active'
			circleList[index].className = 'circle active'
		}else{
			item.className = 'imgItem'
			circleList[index].className = 'circle'
		}
	})
}

//头条滚动
function headlineRoll(){
	//设置滚动距离
	var scrollD =0
	setInterval(function(){
		if(scrollD<-textList.offsetWidth/375-1*10.04){
			scrollD = 0.2
		}
		scrollD = scrollD - 0.0125
		textList.style.transform = 'translateX('+scrollD+'rem)'
	},1000/60)
}
headlineRoll()

//工资表swiper
var scrollD = 0
function salSwiper(e){
	if(e.target.className=='sal left'){
		scrollD = scrollD + 2.6
		if(scrollD>0){
			scrollD = -7.8
		}
	}else{
		scrollD = scrollD - 2.6
		if(scrollD<-7.8){
			scrollD = 0
		}
	}
	itemListDom.style.transform = 'translateX('+scrollD+'rem)'
}
leftBtn.onclick = function(e){
	salSwiper(e)
}
rightBtn.onclick = function(e){
	salSwiper(e)
}
