function AlertWin(content){
	var body = document.querySelector('body')
	var head = document.querySelector('head')
	var btn = document.querySelector('.consult')
	btn.onclick = function(){
		var alertWin = document.createElement('div')
		body.appendChild(alertWin)
		alertWin.className = 'alertWin'
		alertWin.innerHTML = `
		<div class='alertItem'>
			<div class='top'><p class='content'>${content}</p></div> 
			<div class='cancel'>取消</div>
			<div class='call'>呼叫</div>
		</div>
		`
		var alertStyle = document.createElement('style') 
		head.appendChild(alertStyle)
		alertStyle.innerHTML = `
			.alertWin{
				background:rgba(0,0,0,0.59);
				height:100vh;
				width: 100vw;
				position:fixed;
				left:0;
				top:0;
				z-index:200;
			}
			.alertItem{
				width: 6.93rem;
				height: 2.39rem;
				background-color: #f8f8f8;
				border-radius: 0.4rem;
				position:absolute;
				left:1.55rem;
				top:7.22rem;
				overflow: hidden;	
			}
			.alertItem .top{
				height:1.2rem;
				width:6.93rem;
				position:absolute;
				left:0;
				top:0;
				display:flex;
				justify-content:center;
				align-items:center;
				border-bottom:0.02rem solid #bfbfbf;
			}
			.alertItem .top .content{
				width: auto;
				height: 0.3rem;
				font-family: MicrosoftYaHei-Bold;
				font-size: 0.38rem;
				font-weight: 700;
				font-stretch: normal;
				letter-spacing: 0rem;
				color: #3f3f3f;
				line-height:1;
			}
			.alertItem .cancel{
				width:3.44rem;
				height:1.17rem;
				display:flex;
				justify-content:center;
				align-items:center;
				position:absolute;
				left:0;
				top:1.2rem;
				font-family: MicrosoftYaHei;
				font-size: 0.38rem;
				font-weight: normal;
				font-stretch: normal;
				letter-spacing: 0rem;
				color: #474747;
				border-right:0.02rem solid #bfbfbf;
			}
			.alertItem .call{
				width:3.44rem;
				height:1.17rem;
				display:flex;
				justify-content:center;
				align-items:center;
				position:absolute;
				right:0;
				top:1.2rem;
				font-family: MicrosoftYaHei;
				font-size: 0.38rem;
				font-weight: normal;
				font-stretch: normal;
				letter-spacing: 0rem;
				color: #474747;
			}
		`
		var cancel = document.querySelector('.cancel')
		cancel.onclick = function(){
			body.removeChild(alertWin)
		}
		var call = document.querySelector('.call')
		call.onclick = function(){
			body.removeChild(alertWin)
		}
	}
}
