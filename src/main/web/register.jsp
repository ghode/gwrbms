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
  Time: 5:16
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
    <title>Register Admin</title>
</head>
<body style="background-color:cadetblue">
<div class="container-fluid">
    <div class="row" style="margin-top: 8%;">
        <center><font color="white" size="5px">${msg }</font></center>
        <center><h2>RegisterAdmin</h2></center>
    </div>
    <div class="row">
        <center>
            <div class="div_login">
                <div class="row">
                    <center><p style="margin-top: 10px;">注册一个新账户</p></center>
                </div>
                <div class="row">
                    <form action="<%=request.getContextPath() %>/admin/adminAdd.action"
                          method="post">
                        <div class="form-group">
                            <input type="text" name="account"
                                   class="form-control" id="account"
                                   placeholder="账号" style="width: 350px;">
                        </div>
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
                        <div class="form-group">
                            <input type="password" name="passwd_ref"
                                   class="form-control" id="passwd_ref"
                                   placeholder="确认密码" style="width: 350px;">
                        </div>
                        <div class="form-group">
                            <input type="email" name="email"
                                   class="form-control" id="email"
                                   placeholder="邮箱" style="width: 350px;">
                        </div>
                        <div>
                            <div class="col-lg-5 col-md-5 checkbox">
                                <label><input type="checkbox" name="remember">同意注册<a
                                        href="#">条约</a></label>
                            </div>
                            <div class="col-lg-4 col-lg-offset-3 col-md-4 col-md-offset-3">
                                <button type="submit" class="btn btn-primary">
                                    注册
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-3">
                        <a href="<%=request.getContextPath() %>/login.jsp">登录账号</a>
                    </div>
                </div>
            </div>
        </center>
    </div>
</div>
</body>
</html>