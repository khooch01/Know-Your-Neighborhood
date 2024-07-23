package com.khooch.project.security;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.web.util.matcher.RequestMatcher;

public class CustomRequestMatcher implements RequestMatcher {

    @Override
    public boolean matches(HttpServletRequest request) {
        String uri = request.getRequestURI();
        return uri.startsWith("/api/secure/"); // Customize this pattern based on your requirement
    }
}
