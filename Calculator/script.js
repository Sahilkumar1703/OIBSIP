let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == 'Enter' || e.target.innerHTML == 'ans'){
       
       var input = string; 
       input = input.replace(/√(\d+)/g, "Math.sqrt($1)");
      string = eval(input.replace(/%/g,"/100*"));
      document.querySelector('input').value = string;
 
}
    else if(e.target.innerHTML == 'clr'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'del'){
        string = string.substring(0,string.length-1);
        document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})