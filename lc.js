
 
function addTwoNumbers (li1, li2) {

  
  //arrays to save the data collected from linked lists
  let l1 = [];
  let l2 = [];
  
  //loop to collect data from each linked list and push inside the arrays l1 and l2
  
  while(li1 != null){
    l1.push(li1.val)
    li1= li1.next
  }
    while(li2 != null){
    l2.push(li2.val)
    li2= li2.next
  }

  // dos variables, una para guardar la unidad de reserva o carry number
  let sumSav= 0;
  
  // array to save the total sum of each iteratiion
  let output=[];
  
  
  //primero necesitamos saber que lista es más larga para luego sumarlas 
  if(l1.length < l2.length){
    
     [l1,l2] = [l2,l1]; 
  }
  
  // once we have sorted the long and short array, we reverse them

  
  //loop to iterate l1 array
  for(let i=0; i<l1.length; i++){
    
    //this to verify if the iteration is not in an empty part of the array
    if( l2[i] != undefined){
 
      // conditional to verify if the sum gives us less than 10, it'll sum the numbers of array l1, array l2 and the sumSav that us the carry number
      
    if(l1[i]+l2[i]+sumSav<10){
      output.push(l1[i]+l2[i]+ sumSav );
      
      sumSav=0;
    }
      // else that helps us when the result of the sum gives us more than 9, here we need to save the tens (if we sum 9+1 the 1 will be saved and the 0 displayed and saved in the output array) 
      else{
      let sisas = l1[i]+l2[i]+sumSav;
      sumSav=0;
      sisas = sisas.toString();
      sumSav = Number(sisas[0]);
      let addTo = Number(sisas[1]);
      output.push(addTo );
       
    }
    } 
    //else to know if the l2 has no number in the same position than the l1
    else{
      let noks = l1[i]+sumSav;
      sumSav=0;
      noks = noks.toString();
      
      //if to know if the sum result has tens to save in sumSav
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
  
  //Aca se acaba la iteracion del primer loop
  
  
  //here we check if there is a number at saved at the end of the iteration to push it into the array output
   if(sumSav>0){
    output.push(sumSav);
  }
  
  
  // class to create the linked list that is going to be outputted
function ListNode(val, next) {

this.val = (val===undefined ? 0 : val);
this.next = (next===undefined ? null : next); 

} 
  
  let dummyNode = new ListNode(0);
  var nodoAc = dummyNode;
  
  for(let i=0; i < output.length;i++){
    
    nodoAc.next = new ListNode(output[i]);
    nodoAc = nodoAc.next;
  }
    
   return dummyNode.next 

};

console.log(addTwoNumbers (l1, l2))
 
