function check(){

    var msg=document.getElementById("msg");

    var e_username=document.getElementById("username");

    var e_password=document.getElementById("password");

    var username=e_username.value;

    var password=e_password.value;

    if(username==null || username==""){

        //账号不能为空

        msg.innerHTML="账号不能为空";

        e_username.style.border="solid 1px #f00";

        return false;

    }

    if(password==null || password==""){

        msg.innerHTML="密码不能为空";

        e_password.style.border="solid 1px #f00";

        return false;

    }

    if(username.length<3 || username.length>7){

        //账号长度不合法

        msg.innerHTML="账号长度不合法（3~7内）";

        e_username.style.border="solid 1px #f00";

        return false;

    }

    if(password.length<2 || password.length>20){

        //密码长度不合法

        msg.innerHTML="密码长度不合法（2~20内）";

        e_password.style.border="solid 1px #f00";

        return false;

    }

    return true;

}
