function reverse(str) 
{
var String = "";
for (var i = str.length - 1; i >= 0; i--) 
  {
    String += str[i];
  }
    console.log(String)
}
reverse('reverse string')