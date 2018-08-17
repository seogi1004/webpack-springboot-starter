package com.example.frontend;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FrontendController {
    @RequestMapping("/hello")
    public String home(Model model){
        model.addAttribute("message", "Hello, World!!!");
        return "index";
    }
}