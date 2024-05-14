package dev.TeamSphere.auth;


import dev.TeamSphere.user.Role;
import dev.TeamSphere.user.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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
                .roles(Stream.of(Role.USER).collect(Collectors.toSet()))
                .build();
        try {
            var userStored = authUsersRepository.save(user);
            return JwtAuthResponse.builder().token(jwtService.generateToken((UserDetails) userStored)).build();
        } catch (DataIntegrityViolationException ex) {
            throw new UserAuthNameOrEmailExist("User with username " + request.getUsername() + " or email " + request.getEmail() + " already exist");
        }
    }

    @Override
    public JwtAuthResponse signIn(UserSignInRequest request) {
        log.info("Authenticating user: {}", request);
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        var user = authUsersRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new AuthSingInInvalid("User or password invalid"));
        var jwt = jwtService.generateToken((UserDetails) user);
        return JwtAuthResponse.builder().token(jwt).build();
    }
}