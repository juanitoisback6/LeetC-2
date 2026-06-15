let l1 = [9,9,9,9,9,9,9]; 
let l2 = [9,9,9,9];

 // [ 2, 4, 6, 5 ]
//  [ 3, 4, 2 ]
  
  

function addTwoNumbers (l1, l2) {
  
  let sumSav= 0;
  let output=[];
  
  if(l1.length < l2.length){
    
     [l1,l2] = [l2,l1]; 
  }
  l1.reverse();
  l2.reverse();
  
  for(let i=0; i<l1.length; i++){
    console.log(i);
    console.log(i+" sumsav "+ sumSav);
    
    if( l2[i] != undefined){
      console.log(i + " linea " + l2[i]);
       //Este if para saber si es menor a 10
    if(l1[i]+l2[i]<10){
      output.push(l1[i]+l2[i]+ sumSav );
      console.log(i+"sumsav"+ sumSav);
      sumSav=0;
    }else{
      let sisas = l1[i]+l2[i];
      sisas = sisas.toString();
      
      sumSav = Number(sisas[0]);
      let addTo = Number(sisas[1]);
      output.push(addTo );
       
    }
    } else{
      
      output.push(l1[i]+ sumSav );
    }
   
  
    
  }
   
  // output = output.reverse();
  // output= Number(output.join(""));
   return output 
};

console.log(addTwoNumbers (l1, l2))
 


 // let noks = l1[i] + sumSav;
 //       noks= noks.toString();
 //      console.log("este es noks "+ noks);
 //      sumSav =  Number(noks[0]);
 //      console.log(sumSav)
 //      let noksAdd = Number(noks[1]);
 //      console.log(noksAdd)
 //      output.push(noksAdd);






 
  //    if(sumaSav>0){
   //     l1[i]
   //      sumaSav=0;
   //      }



// arra = [];
  // for(let i = 0; i< l1.length; i++){
  //  arra.push(l1[i]+l2[i]);
   
  // }
  // return arra
