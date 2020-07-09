<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%> 
<!-- input initial information about this html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>get.jsp</title>
</head>
<body>
    <!-- into below syntax statement, you can write java statement. -->
    <%
        String user = request.getParameter("user");
        String dept = request.getParameter("dept");
    %>
    <table border='1'>
        <tr>
            <td>사용자이름</td>
            <td><%=user %></td>
        </tr>
        <tr>
            <td>부서명</td>
            <td><%=dept%></td>
        </tr>
    </table>
</body>
</html>