package dev.TeamSphere.user;

public abstract class UserException extends RuntimeException {
    public UserException(String message) {
        super(message);
    }
}