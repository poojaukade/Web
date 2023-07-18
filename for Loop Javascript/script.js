let button= document.getElementById("Cal-Sum");


function calculate_sum() {
    const input = document.getElementById("Your-Name");
    const input_value=input.value;
    console.log(input_value); 
    
   
        let sum=0;
        for(let i=0;i<=input_value;i++)
        {
             sum = sum + i;
        
         }
   
            let p=document.getElementById("last-p");
            p.textContent=sum;
            p.style.display = "block";
    
    

}
button.addEventListener("click",calculate_sum);
