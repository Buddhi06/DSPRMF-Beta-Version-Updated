 function toggleDiv(index) {
        let contents = document.querySelectorAll('.content');
        let content = contents[index];
        if(content){
        	 // Toggle the clicked div
        content.classList.toggle('open');
        }
       else{
       	console.error("not found");
       }
    }