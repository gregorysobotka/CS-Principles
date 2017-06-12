/*



*/

function isPalindrome(word){

  for(var i=0; i<word.length; i++)
    if(word.charAt(i)!==word.charAt(word.length-(i+1)))
      return false

  return true

}
