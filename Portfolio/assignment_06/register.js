window.onload = pageLoad;

function pageLoad(){
    // alert('register system');
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var form = document.getElementById("myForm");
    var errorMsg = document.getElementById("errormsg");
    
    var firstName = form.elements["firstname"].value;
    var lastName = form.elements["lastname"].value;
    var gender = form.querySelector("input[name='gender']:checked");
    var birthday = form.elements["bday"].value;
    var email = form.elements["email"].value;
    var username = form.elements["username"].value;
    var password = form.elements["password"].value;
    var retypePassword = form.elements["retypePassword"].value;
   
    //ตรวจสอบว่าทุกช่องถูกกรอกหรือไม่ 
    if (firstName == "" || lastName === "" || 
        !gender || birthday == "" || 
        email == "" || username == "" || 
        password == "" || retypePassword == "") {
        alert("กรุณากรอกข้อมูลให้ครบทุกช่อง")
        errorMsg.textContent = "กรุณากรอกข้อมูลให้ครบทุกช่อง";
        return false;
    }
    
    // ตรวจสอบว่า รหัสผ่านทั้งสองอันตรงกันมั้ย
    else if(password !== retypePassword) {
        alert("รหัสผ่านไม่ตรงกัน")
        errorMsg.textContent = "รหัสผ่านไม่ตรงกัน";
        return false;
    }


    else{
        //ถ้าผ่าน ระบบจะแสดงข้อความ "ลงทะเบียนสำเร็จ!"
        errorMsg.textContent = "";
        alert("ลงทะเบียนสำเร็จ!");

    }
}