package com.userloginbackend.userloginbackend.controller;


import com.userloginbackend.userloginbackend.model.AuthenticationResponse;
import com.userloginbackend.userloginbackend.model.User;
import com.userloginbackend.userloginbackend.service.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {
    private final AuthenticationService authservice;

    public AuthenticationController(AuthenticationService authservice) {
        this.authservice = authservice;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
         @RequestBody User request
    ){
        return ResponseEntity.ok(authservice.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody User request
    ){
        return ResponseEntity.ok(authservice.authenticate(request));
    }
}
