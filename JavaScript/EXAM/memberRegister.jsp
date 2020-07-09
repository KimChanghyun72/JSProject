<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%> 
<!-- input initial information about this html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EXAM/memberRegister.jsp</title>
</head>
<body>
    <%
        String id = request.getParameter("id");
        String password = request.getParameter("password");
        String name = request.getParameter("name");
        String age = request.getParameter("age");
    %>
    <table border='1'>
        <tr>
            <td>아이디</td>
            <td><%=id %></td>
        </tr>
        <tr>
            <td>패스워드</td>
            <td><%=password %></td>
        </tr>
        <tr>
            <td>사용자이름</td>
            <td><%=name %></td>
        </tr>
        <tr>
            <td>부서명</td>
            <td><%=age%></td>
        </tr>
    </table>
</body>
</html>