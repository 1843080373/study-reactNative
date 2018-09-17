package com.zimadai.boot.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import com.zimadai.boot.bean.User;
import com.zimadai.boot.service.UserService;

@Controller
public class JspControler {
	@Autowired
	private UserService userService;

	@GetMapping("/index")
	public ModelAndView index() {
		final List<User> list = userService.findAllUser(0, 0);
		return new ModelAndView("index", new HashMap<String,Object>() {
			/**
			 * 
			 */
			private static final long serialVersionUID = 1L;

			{
				put("data",list);
			}
		});
	}
}
