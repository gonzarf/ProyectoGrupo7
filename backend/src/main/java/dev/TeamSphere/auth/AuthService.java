package dev.TeamSphere.auth;


public interface AuthService {

    JwtAuthResponse signUp(UserSignUpRequest request);

    JwtAuthResponse signIn(UserSignInRequest request);
}
