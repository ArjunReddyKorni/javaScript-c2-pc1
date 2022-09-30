// Write your fibonacci series solution code here
var n1 = 0;
var  n2 = 1;
var next;
var i;  


var num = 10; 
 
for ( i = 1; i <= num; i++)  
{  document.writeln("   , "  +  n1);  
    next = n1 + n2;   
     n1 = n2; 
    n2 = next; 
}