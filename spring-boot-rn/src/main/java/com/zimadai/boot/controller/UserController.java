package com.zimadai.boot.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.zimadai.boot.bean.User;
import com.zimadai.boot.service.UserService;
import com.zimadai.comm.ApiResult;
import com.zimadai.comm.AppAPI;

/**
 * @author Administrator
 *
 */
@RestController
public class UserController {

	@Autowired
	private UserService userService;
	@Autowired
	private HttpSession session;
	/**
	 * @param userName
	 * @param password
	 * @return
	 */
	@RequestMapping(value = AppAPI.REGISTER)
	public ApiResult<String> register(String userName, String password) {
		System.out.println("register   userName=>"+userName+",password=>"+password);
		ApiResult<String> apiResult = new ApiResult<String>();
		if ("".equals(userName)) {
			return apiResult.message("请输入用户名");
		}
		if ("".equals(password)) {
			return apiResult.message("请输入密码");
		}
		if(userService.checkMobileExits(userName)) {
			return apiResult.message("账号已存在");
		}
		User user = new User(userName, password);
		if (userService.addUser(user) > 0) {
			return apiResult.ok();
		}
		return apiResult.message("注册失败");
	}

	/**
	 * @param userName
	 * @param password
	 * @return
	 */
	@RequestMapping(value = AppAPI.LOGIN)
	public ApiResult<String> login(String userName, String password) {
		System.out.println("login  userName=>"+userName+",password=>"+password);
		ApiResult<String> apiResult = new ApiResult<String>();
		if ("".equals(userName)) {
			return apiResult.message("请输入用户名");
		}
		if ("".equals(password)) {
			return apiResult.message("请输入密码");
		}
		User user = new User(userName, password);
		if (userService.checkLogin(user)) {
			session.setAttribute("currentUser", user);
			return apiResult.ok();
		}
		return apiResult.message("用户名密码错误");
	}

	
	/**
	 * @return
	 */
	@RequestMapping(value = AppAPI.MAIN)
	public ApiResult<User> main() {
		ApiResult<User> apiResult = new ApiResult<User>();
		try {
			User user = (User) session.getAttribute("currentUser");
			System.out.println("main  currentUser=>"+JSONObject.toJSONString(user));
			return apiResult.data(user).ok();
		} catch (Exception e) {
			e.printStackTrace();
			return apiResult.message("发生异常");
		}
	}
}