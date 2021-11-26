var bjpCount = 0;
var aapCount = 0;
var congressCount = 0;
//counting votes for BJP
document.getElementById("bjp").addEventListener('click', function(){
    bjpCount = bjpCount+1;
    document.getElementById("bjpVote").innerHTML = bjpCount;
});

//counting votes for AAP
document.getElementById("aap").addEventListener('click', function(){
    aapCount = aapCount+1;
    document.getElementById("aapVote").innerHTML = aapCount;
});

//counting votes for CONGRESS
document.getElementById("congress").addEventListener('click', function(){
    congressCount = congressCount+1;
    document.getElementById("congressVote").innerHTML = congressCount;
});

//handling submit
document.getElementById("submit").addEventListener("click",function(){
document.getElementById("total").innerHTML = `BJP vote: ${bjpCount}      
AAP vote: ${aapCount}        
CONGRESS vote: ${congressCount}`
});