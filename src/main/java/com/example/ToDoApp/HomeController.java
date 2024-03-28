package com.example.ToDoApp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value = "/") 
	public String index() {
		return "index";
	}

	@RequestMapping(value = "/test") 
	public String test() {
		return "Hello World from Spring Boot";
	}

}