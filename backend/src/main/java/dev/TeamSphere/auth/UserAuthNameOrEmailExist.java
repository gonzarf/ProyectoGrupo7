package dev.TeamSphere.auth;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class UserAuthNameOrEmailExist extends AuthException {
    public UserAuthNameOrEmailExist(String message) {
        super(message);
    }
}
