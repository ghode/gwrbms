<%--
  ~ Copyright (c) 2019. The copyright is reserved by Ghode of Harbin Institute
  ~ of Technology. Users are free to copy, change or remove. Because no one
  ~ will read this. Only I know is that Repeaters are the best of the world.
  ~ Only I know is that Repeaters are the best of the world. Only I know is
  ~ that Repeaters are the best of the world. Maybe a long copyright text
  ~ seems professional. Therefore this text will be a bit lengthy. However,
  ~ the author seems to be afraid that one day, this text may be uploaded to
  ~ business projects. That is the time you can contact with author via email
  ~ ghode@cirnocraft.im or directly ignore this, which will be interesting.
  --%>

<%--
  Created by IntelliJ IDEA.
  User: Ghode
  Date: 2019/12/24
  Time: 5:12
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet"
          href="<%=request.getContextPath() %>/css/bootstrap.css"/>
    <style type="text/css">
        .div_login {
            width: 360px;
            height: auto;
            margin-top: 1%;
            background-color: white;

        }
    </style>
    <title>Admin Login</title>
</head>
<body style="background-color:cadetblue">
<!--
    作者：weixuhui@aliyun.com
    时间：2018-02-07
    描述：
-->
<div class="container-fluid">
    <div class="row" style="margin-top: 8%;">
        <center><font color="red" size="5px">${error_msg }</font></center>
        <center><h2>AdminLogin</h2></center>
    </div>
    <div class="row">
        <center>
            <div class="div_login">
                <div class="row">
                    <center><p style="margin-top: 10px;">请登录开启你的会话旅程</p>
                    </center>
                </div>
                <div class="row">
                    <form action="<%=request.getContextPath() %>/admin/adminCheck.action"
                          method="post">
                        <div class="form-group">
                            <input type="text" name="name" class="form-control"
                                   id="name" placeholder="姓名"
                                   style="width: 350px;">
                        </div>
                        <div class="form-group">
                            <input type="password" name="passwd"
                                   class="form-control" id="passwd"
                                   placeholder="密码" style="width: 350px;">
                        </div>
                        <div>
                            <div class="col-lg-5 col-md-5 checkbox">
                                <label><input type="checkbox" name="remember">记住登录信息</label>
                            </div>
                            <div class="col-lg-4 col-lg-offset-3 col-md-4 col-md-offset-3">
                                <button type="submit" class="btn btn-primary">
                                    登录
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="row">
                    <div class="col-lg-5 col-md-5"><a
                            href="<%=request.getContextPath() %>/register.jsp">注册一个新账户</a>
                    </div>
                </div>
            </div>
        </center>
    </div>
</div>
<!-- 消息弹出框提示 -->
<script type="text/javascript">
    var msg = "${off_msg}"
    if (msg != "") {
        alert("${off_msg}");
    }
</script>
</body>
</html>