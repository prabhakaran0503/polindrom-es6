let n=prompt("enter the value");
let m=n;
//console.log(typeof n);
let fun=(n)=>{
    let c=0
    while(n>0){
        a=n%10;
        n=parseInt(n/10);
        c=c*10+a
       
    }
    if(m==c){
        document.write("The Number is polindrome")
    }
    else{
        document.write("The Number is Not polindrome")
    }
}
fun(n)
