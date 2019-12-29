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
  Date: 2019/12/28
  Time: 1:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Retail</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 引入 Bootstrap -->
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css"
          rel="stylesheet">

</head>
<body>
<div class="container">
    <div class="row clearfix">
        <div class="col-md-12 column">
            <div class="page-header">
                <h1>
                    基于SSM框架的管理系统：简单实现增、删、改、查。
                </h1>
            </div>
        </div>
    </div>
    <div class="row clearfix">
        <div class="col-md-12 column">
            <div class="page-header">
                <h1>
                    <small>用户列表 —— 显示所有用户</small>
                </h1>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4 column">
            <a class="btn btn-primary"
               href="${pageContext.request.contextPath}/account/add_account.do">新增</a>
        </div>
    </div>
    <div class="row clearfix">
        <div class="col-md-12 column">
            <table class="table table-hover table-striped">
                <thead>
                <tr>
                    <th>id</th>
                    <th>用户名</th>
                    <th>密码</th>
                    <th>权限等级</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${account_list}" var="Account">
                    <tr>
                        <td>${Account.id}</td>
                        <td>${Account.username}</td>
                        <td>${Account.password}</td>
                        <td>
                            <a href="${pageContext.request.contextPath}
                                        /account/update.do.do?id=${Account.id}">
                                更改
                            </a>
                            <a href="${pageContext.request.contextPath}
                                /account/delete.do?id=${Account.id}">
                                删除
                            </a>
                        </td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
        </div>
    </div>
</div>
</body>
</html>
