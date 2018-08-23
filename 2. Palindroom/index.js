const ref = document.getElementById('invoer');
document.getElementById("check-button").onclick = function(){check(ref)};



function isPalindroom(ref){
    ref = ref.value.toLowerCase();
    let len = ref.length;

    for (let i = 0; i<len/2; i++){
        if (ref[i]!==ref[len-1-i]){
            return false;
        }
        else{
        return true;
        }
    }
}

function check(ref){
    if (isPalindroom(ref) == true){
        var message = document.getElementById('message');
        message.innerHTML = ref.value + " is een palindroom ";
        document.body.onload = addElement(message.innerHTML);
    }
    else{
        var message = document.getElementById('message');
        message.innerHTML = ref.value + " is niet een palindroom ";
        document.body.onload = addElement(message.innerHTML);
    }
}

//document.body.onload = addElement(ref);

function addElement(message){
    let newElem = document.createElement("list1");
    let newContent = document.createTextNode(message);
    newElem.appendChild(newContent);

    var currentElem = document.getElementById("list");
    document.body.insertBefore(newElem, currentElem);
}
