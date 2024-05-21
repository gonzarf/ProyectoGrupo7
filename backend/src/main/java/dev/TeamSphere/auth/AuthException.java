package dev.TeamSphere.auth;

public abstract class AuthException extends RuntimeException {
    public AuthException(String message) {
        super(message);
    }
}
