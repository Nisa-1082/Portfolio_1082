window.onload = loginLoad;


function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;

	const urlParams = new URLSearchParams(queryString);
	const URLusername = urlParams.get('username');
	const URLpassword = urlParams.get('password');
	
	
	const form = document.getElementById("myLogin");
	var loginUsername = document.forms["myLogin"]["username"].value;
	var loginPassword = document.forms["myLogin"]["password"].value;
	
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	if (URLusername == loginUsername && URLpassword == loginPassword){
		alert ("Login สำเร็จ");
		return false;
	}

	else if (URLusername !== loginUsername) {
		alert ("ไม่พบชื่อผู้ใช้");
		return false;
	}

	else if (URLpassword !== loginPassword) {
		alert ("รหัสผ่านไม่ถูกต้อง");
		return false;
	}

	else{
		alert ("รหัสผ่านหรือผู้ใช้ไม่ถูกต้อง");
		return false;
	}

}

