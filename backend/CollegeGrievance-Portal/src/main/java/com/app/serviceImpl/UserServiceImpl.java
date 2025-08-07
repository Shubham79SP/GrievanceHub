package com.app.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dto.LoginDTO;
import com.app.dto.UserDTO;
import com.app.entity.User;
import com.app.repository.UserRepository;
import com.app.service.UserService;

import org.modelmapper.ModelMapper;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private ModelMapper mapper;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Override
    public String registerUser(UserDTO dto) {
        if (userRepo.existsById(dto.getUsername())) {
            return "User already exists";
        }
        User user = mapper.map(dto, User.class);
        user.setPassword(encoder.encode(dto.getPassword()));
        userRepo.save(user);
        return "User registered successfully";
    }

    @Override
    public String loginUser(LoginDTO dto) {
        Optional<User> optionalUser = userRepo.findByUsernameAndRole(dto.getUsername(), dto.getRole());
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (encoder.matches(dto.getPassword(), user.getPassword())) {
                return switch (user.getRole()) {
                    case STUDENT -> "Redirecting to Student Page";
                    case FACULTY -> "Redirecting to Faculty Page";
                    case ADMIN -> "Redirecting to Admin Page";
                };
            }
        }
        return "Invalid credentials";
    }
}
