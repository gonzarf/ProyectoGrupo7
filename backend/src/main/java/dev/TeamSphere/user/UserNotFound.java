package dev.TeamSphere.user;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.UUID;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class UserNotFound extends UserException {
    public UserNotFound(String message) {
        super(message);
    }
    public UserNotFound(UUID id) {
        super("Usuario con ID " + id + " no encontrado");
    }
}