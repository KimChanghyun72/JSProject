<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%> 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>input</title>
</head>
<body>
    <%
        String name = request.getParameter("name");
        String gender = request.getParameter("gender");
    %>
    <table border='1'>
        <tr>
            <td>사용자이름</td>
            <td><%=name %></td>
        </tr>
        <tr>
            <td>성별</td>
            <td><%=gender %></td>
        </tr>
    </table>
</body>
</html>