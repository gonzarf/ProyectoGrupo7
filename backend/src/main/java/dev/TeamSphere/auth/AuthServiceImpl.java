package dev.TeamSphere.auth;

import dev.TeamSphere.user.Roles;
import dev.TeamSphere.user.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@Slf4j
@Service
public class AuthServiceImpl implements AuthService {
    private final AuthUsersRepository authUsersRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Autowired
    public AuthServiceImpl(AuthUsersRepository authUsersRepository, PasswordEncoder passwordEncoder, JwtService jwtService, AuthenticationManager authenticationManager) {
        this.authUsersRepository = authUsersRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    @Override
    public JwtAuthResponse signUp(UserSignUpRequest request) {
        log.info("Creating user: {}", request);
        User user = User.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .email(request.getEmail())
                .name(request.getName())
                .lastName(request.getLastName())
                .phone(request.getPhone())
                .roles(Stream.of(Roles.USER).collect(Collectors.toSet()))
                .build();
        try {
            var userStored = authUsersRepository.save(user);
            return JwtAuthResponse.builder().token(jwtService.generateToken(userStored)).build();
        } catch (DataIntegrityViolationException ex) {
            throw new UserAuthNameOrEmailExist("User with username" + request.getUsername() + " or email " + request.getEmail() + " already exist");
        }
    }

    @Override
    public JwtAuthResponse signIn(UserSignInRequest request) {
        log.info("Autenticando usuario: {}", request);
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        var user = authUsersRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new AuthSingInInvalid("Invalid username or password"));
        return JwtAuthResponse.builder().token(jwtService.generateToken(user)).build();
    }
}
