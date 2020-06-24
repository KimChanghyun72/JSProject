<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%> 
<!-- input initial information about this html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Document</title>
</head>
<body>
    <!-- java문이라고 해도 안에 html 구문이 사용가능하다. -->
    <%
        String id = request.getParameter("id");
        String pass = request.getParameter("pass");

        out.println("id값은 :" + id + "<br>");
        out.println("password값은 :" + pass + "<br>");
    %>
    id값은 : <%=id %> <br>
    password값은 : <%=pass%><br>
</body>
</html>