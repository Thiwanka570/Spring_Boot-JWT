package com.userloginbackend.userloginbackend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {
    @GetMapping("/admin")
    public ResponseEntity<String> adminLogin(){
        return ResponseEntity.ok("Hello Admin");
    }

    @GetMapping("/user")
    public ResponseEntity<String> userLogin(){
        return ResponseEntity.ok("Hello User");
    }

    @GetMapping("/demo")
    public ResponseEntity<String> demo(){
        return ResponseEntity.ok("Hello wrold");
    }
}
