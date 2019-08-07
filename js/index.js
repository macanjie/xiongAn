var html = document.querySelector('html')
var imgList = document.querySelectorAll('.imgItem')
var imgList = document.querySelectorAll('.imgItem')
var circleList = document.querySelectorAll('.circle')
//记录轮播图手势移动
var StartX = 0
var endX = 0
var touchIndex = 0

html.addEventListener('click',function(e){
	if(e.target.className=='circle'){
		var circleIndex = e.target.dataset.index
		imgList.forEach(function(item,index){
			console.log(item)
			if(index==circleIndex){
				item.style.opacity = '1'
				circleList[index].className = 'circle active'
			}else{
				item.style.opacity = '0'
				circleList[index].className = 'circle'
			}
		})
	}
})
html.addEventListener('touchstart',function(e){
	if(e.target.className=='imgItem'){
		console.log(e)
		touchIndex = e.target.dataset.index
		StartX = e.changedTouches[0].pageX
	}
})
html.addEventListener('touchend',function(e){
	if(e.target.className=='imgItem'){
		console.log(e)
		endX = e.changedTouches[0].pageX
	}
	touchSwiper()
})
function touchSwiper(){
	var d = endX - StartX
	
	imgList.forEach(function(item){
		item.className = 'imgItem'
	})
	if(d<0){
		var currentIndex = touchIndex+1
		console.log(currentIndex)
		if(currentIndex>4){
			currentIndex = 0
		}
		imgList[currentIndex].className = 'imgItem active'
	}else if(d>0){
		var currentIndex = touchIndex-1
		console.log(currentIndex)
		if(currentIndex<0){
			currentIndex = 4
		}		
		imgList[currentIndex].className = 'imgItem active'
	}
}
