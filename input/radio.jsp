<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%> 
<!-- input initial information about this html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Radio</title>
</head>
<body>
    <%
        String sex = request.getParameter("sex");
        String year = request.getParameter("year");

        out.println("성별은 :" + sex + "<br>");
        out.println("학년은 :" + year + "<br>");
    %>

</body>
</html>