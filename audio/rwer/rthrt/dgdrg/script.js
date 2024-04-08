const pincode = atob("MDgxNDQ2");
let msgtxt = atob("SGV5IFJhcXVlbCwgPGJyPjxicj4gSGFwcHkgQmlydGhkYXkhIEkgaG9wZSB5b3VyIHNwZWNpYWwgZGF5IGlzIGZpbGxlZCB3aXRoIGxvdmUsIGxhdWdodGVyLCBhbmQgYmxlc3NpbmdzLiBLYWhpdCB3YWxhIG5hIHRheW9uZyBjb21tdW5pY2F0aW9uLCBJIHN0aWxsIHdhbnQgdGhlIGJlc3QgZm9yIHlvdSBvbiB5b3VyIGJpcnRoZGF5LiA8YnI+PGJyPkkgY2FuJ3QgbWVzc2FnZSB5b3UgYmVjYXVzZSBJJ20gc2h5IGFuZCBzY2FyZWQsIGJ1dCBJIHdhbnQgdG8gYXNrIHlvdSwgSG93J3MgeW91ciBkYXk/IEkgYmFkbHkgd2FudCB0byBhc2sgaG93IHlvdXIgZGF5IHdlbnQuIElzIHRoZXJlIGFueXRoaW5nIHRoYXQgYm90aGVycyB5b3UgdG9kYXk/IEkgd2FudCB0byB0ZWxsIHlvdSBob3cgcHJvdWQgSSBhbS4gQWxzbywgSSB3YW50IHRvIHRlbGwgeW91IGhvdyBteSBkYXkgd2VudC4gQnV0IGhvdyBjYW4gSSB0ZWxsIHlvdSB0aGlzIGRpcmVjdGx5IGlmIEknbSBzY2FyZWQgb2YgYm90aGVyaW5nIHlvdSBhZ2Fpbj8gSSBob3BlIHlvdSdyZSBkb2luZyBmaW5lLiBFbmpveSB5b3VyIGRheSB0byB0aGUgZnVsbGVzdCE8YnI+PGJyPldhcm1lc3Qgd2lzaGVzLDxicj5DYXJsb3M=");

document.getElementById("mybtn").onclick = function(){
    txt = document.getElementById("mytxt").value;
    if (pincode == txt){
        document.getElementById("myAudio").play();
        document.getElementById("mylb").textContent = txt;
        document.getElementById("cont1").style.display = "none";
        document.getElementById("msg").innerHTML = msgtxt;
        document.getElementById("cont2").style.display = "flex";
    }
    else{
        document.getElementById("iclb").style.visibility = "visible";
    }
}

document.getElementById("nextbtn").onclick = function (){
    document.getElementById("cont2").style.display = "none";
    document.getElementById("cont3").style.display = "flex";
}

function binaryToText(binaryString) {
    // Split the binary string into 8-bit chunks
    let binaryChunks = binaryString.match(/.{1,8}/g);

    // Convert each chunk to decimal and then to ASCII character
    let text = binaryChunks.map(chunk => String.fromCharCode(parseInt(chunk, 2))).join('');

    return text;
}
