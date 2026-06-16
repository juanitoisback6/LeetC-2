let l1 = [9,9,9,9,9,9,9]; 
let l2 = [9,9,9,9];
 
function addTwoNumbers (l1, l2) {
  
  let sumSav= 0;
  let output=[];
  
  if(l1.length < l2.length){
    
     [l1,l2] = [l2,l1]; 
  }
  l1.reverse();
   l2.reverse();
  
  for(let i=0; i<l1.length; i++){
  
    
    if( l2[i] != undefined){
 
       //Este if para saber si es menor a 10
    if(l1[i]+l2[i]+sumSav<10){
      output.push(l1[i]+l2[i]+ sumSav );
      
      sumSav=0;
    }else{
      let sisas = l1[i]+l2[i]+sumSav;
      sumSav=0;
      sisas = sisas.toString();
      
      sumSav = Number(sisas[0]);
      let addTo = Number(sisas[1]);
      output.push(addTo );
       
    }
    } else{
      let noks = l1[i]+sumSav;
      sumSav=0;
      noks = noks.toString();
      if(noks.length > 1){
         sumSav = Number(noks[0]);
      let cambio = Number(noks[1]);
      output.push(cambio );
      }else{
       
      let cambio = Number(noks[0]);
      output.push(cambio );
      }
     
    }
  }
   if(sumSav>0){
    output.push(sumSav);
  }
    
   return output 
};

console.log(addTwoNumbers (l1, l2))
 
