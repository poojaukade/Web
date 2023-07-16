let getText = document.getElementById('Product-Name');
let remCount = document.getElementById('remaingcount');
//console.log(getText.maxlength);
//console.log(remCount);

let maxCount = getText.maxLength;
//console.log(maxCount);

function countchar(event) {
    let charStore = event.target.value;
    let charStoreLen= charStore.length;
   // console.log(charStoreLen);
   
   //console.log(charStoreLen);

   let remcost = maxCount- charStoreLen;
   
   remCount.textContent = remcost;
   remCount.style.color="rgb(0,120,45)";

}

getText.addEventListener('input',countchar);