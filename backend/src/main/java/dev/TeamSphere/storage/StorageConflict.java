package dev.TeamSphere.storage;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.io.Serial;

@ResponseStatus(HttpStatus.CONFLICT)
public class StorageConflict extends StorageException {

    @Serial
    private static final long serialVersionUID = 1L;

    public StorageConflict(String message) {
        super(message);
    }
}//comment