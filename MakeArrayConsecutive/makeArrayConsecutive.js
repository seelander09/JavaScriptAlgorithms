function makeArrayConsecutive2(statues) {
 //range the table from min to max
 var rang=statues.sort();
 var some=0;
 //if the table is one element
 if(rang.length-1==0){
  return 0;

 }else{
  //if the table contain more then one element
  for(i=0;i<=rang.length-2;i++){
   //add the deference of two consecutive position -1 
   //to find the number of missing numbers
   some+=(rang[i+1]-rang[i]-1);
 }
  return some;
 }
}