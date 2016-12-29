var mot ="beweb";
var a=0;
var b=mot.length-1;
var trie = true;

while (a<=b) {

  if(mot[a]!=mot[b]){
    trie=false;
  }
  a=a+1;
  b=b-1;
}
if (trie==true) {
  console.log('palindrome')
}
if(trie==false) {
  console.log('pas palindrome')
}
