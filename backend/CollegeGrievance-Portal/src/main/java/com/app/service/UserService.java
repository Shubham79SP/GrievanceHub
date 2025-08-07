package com.app.service;
import java.util.Optional;

import com.app.dto.LoginDTO;
import com.app.dto.UserDTO;

public interface UserService {
    String registerUser(UserDTO dto);
    String loginUser(LoginDTO dto);
}