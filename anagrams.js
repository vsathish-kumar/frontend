let str1= 'silent'
let str2= 'listen'
function myfunction(str1,str2)
{
   let n1 = str1.length;
    let n2 = str2.length;
   if (n1 != n2)
        return false;
   for (let i = 0; i < n1; i++)
        if (str1[i] != str2[i])
            return true;
    
}
if (myfunction(str1, str2))
    console.log (true)
else
    console.log (false)
