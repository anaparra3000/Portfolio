
let splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', (e)=>{
	setTimeout(()=>{
		splash.classList.add('display-none');
	}, 2000);
})


let navs = document.querySelectorAll(".site-nav a")
console.log(navs)
for (let nav of navs) {
	navs.onmouseover=function(e){
		console.log
	}
}

let links = document.querySelectorAll(".homepage a")
console.log(links)
for (let link of links){
	link.onmouseover=function(e){
		console.log(this, this.getAttribute("data"))
		console.log(e, "onmouseover")
		let imgClass= this.getAttribute("data")
		document.querySelector(`.${imgClass}`).classList.remove("hide")


	}
	link.onmouseout=function(e){
		console.log(e, "onmouseout")
		console.log(this, this.getAttribute("data"))
		let imgClass= this.getAttribute("data")
		document.querySelector(`.${imgClass}`).classList.add("hide")
	}
}

