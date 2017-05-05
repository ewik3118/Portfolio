












// function clickLeft(){
// 	if(i<=0)
// 		return 0;
// 	else{
// 	items[i].classList.remove("show");	

// 	items[i].classList.add("hide");	
// 	items[--i].classList.remove("hide");
// 	items[i].classList.add("show");

// 	return i;
// }

// }
// function clickRight(){
// 		if(i<itemsLen-1){
// 	items[i].classList.remove("show");	

// 	items[i].classList.add("hide");	
// 	items[++i].classList.remove("hide");
// 	items[i].classList.add("show");

// 	return i;
// 	}
// else
// return 0;

// }

// function closePopup()
// {
// 	popup.style.display = "none";
	
// }
// function openPopup(){
// 		i = 0;
// 	popup.style.display = "block";
// 	 for(var x = 1; x<itemsLen; x++){
// 	 	items[x].classList.remove("show");
// 		items[x].classList.add("hide");
// }
// items[0].classList.remove("hide");
// 	items[0].classList.add("show");
// }
//  function stopPropagation(e) {
//  e.stopPropagation();
//  }
//  function preventDefault(e) {
//  e.preventDefault();
//  }

// 	window.onload= function(){
// 	var popup = document.getElementById("popup");
// console.log(popup);
//  var container = document.getElementById("item1");
// 	items = container.children;
// 	 console.log(items);

// 	itemsLen = items.length;
// 	 console.log(itemsLen);
	


// var rightClick;
// rightClick = document.getElementById("right");
// leftClick = document.getElementById("left");
// close = document.getElementById("close");
// button = document.getElementById("btn1");
	


   

// 	close.onclick = closePopup;
// 	popup.onclick =function(){ 
		
		
//  if (event.target.getAttribute('id') === 'popup') {
//          closePopup();
//       }
//   	}
// 	button.onclick = openPopup;

// container.onclick = stopPropagation;
// rightClick.onclick = function(){
	
// 		 clickRight();
// 		console.log(i);
// 		console.log(itemsLen);

// 	}
// 	leftClick.onclick = function(){
// 		  clickLeft();
// 		console.log(i);
// 	}

// }