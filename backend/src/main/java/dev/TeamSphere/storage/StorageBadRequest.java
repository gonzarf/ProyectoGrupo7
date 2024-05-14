package dev.TeamSphere.storage;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.io.Serial;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class StorageBadRequest extends StorageException {

    @Serial
    private static final long serialVersionUID = 1L;

    public StorageBadRequest(String message) {
        super(message);
    }
}//comment