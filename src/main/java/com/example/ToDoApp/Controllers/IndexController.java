package com.example.ToDoApp.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("")
    public ModelAndView home() {
        ModelAndView mav=new ModelAndView("index");
        return mav;
    }

}