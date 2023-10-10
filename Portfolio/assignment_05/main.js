var count = 1;
function postFunction(){
    var topic1 = document.getElementById("topic1");
    var comment1 = document.getElementById("comment1");
    var comment2 = document.getElementById("comment2");
    var text1 = document.getElementById("text1").value;


    console.log(text1);
    if (count == 1) {
        topic1.innerText = text1;
    }
    else if (count == 2 ){
       comment1.innerText = text1;
    }
    else if (count == 3){
        comment2.innerText = text1;
        
    } 
    else if (count == 4){
        alert("กรุณาตรวจเช็คให้เรียบร้อย ก่อนกด Post")
    }
    else{
        closed;
    }
    count++;
}

function clearFunction(){
    topic1.innerText = ""
    comment1.innerText = ""
    comment2.innerText = ""
    text1.innerText = ""
    count = 1;
    alert("กรุณากรอกใหม่อีกครั้ง")
}