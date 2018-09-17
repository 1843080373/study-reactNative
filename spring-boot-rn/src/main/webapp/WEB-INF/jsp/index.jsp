<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>用户列表</title>
<link rel="stylesheet" type="text/css" href="css/index.css" />
<script type="text/javascript" src="js/jquery-2.0.0.min.js"></script>
<script type="text/javascript">
	// 收缩展开效果
	$(document).ready(function() {
		$(".box").click(function(){
			$(".table4_2").slideUp(1000);//默认显示;
		});
		
		$(".box1").click(function(){
			$(".table4_2").slideDown(1000);//默认显示;
		});
	});
</script>
</head>
<body>
	<img alt="" src="img/demo.jpg" width="200px" height="200px">
	<h3>用户列表</h3>
	<input type="button" class="box" value="收缩"/>
		<input type="button" class="box1" value="展开"/>
	<table class="table4_2">
		<tr>
			<th>编号</th>
			<th>姓名</th>
			<th>密码</th>
			<th>电话</th>
		</tr>
		<c:forEach items="${data}" var="user">
			<tr>
				<td>${user.userId }</td>
				<td>${user.userName }</td>
				<td>${user.password }</td>
				<td>${user.phone }</td>
			</tr>
		</c:forEach>
	</table>
</body>
</html>