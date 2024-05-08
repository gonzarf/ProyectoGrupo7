package dev.TeamSphere.user;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

public interface UserService {

    UUID getUUID(String id);

    List<ResponseUserDto> getAllUsers();

    ResponseUserDto getUserById(String id);

    ResponseUserDto getUserByEmail(String email);

    ResponseUserDto login(LoginDto loginDto);

    ResponseUserDto createUser(CreateUserDto createUserDto);

    ResponseUserDto updateUser(String id, UpdateUserDto updateUserDto);

    ResponseUserDto updateImage(String id, MultipartFile image);

    void deleteUser(String id);
}
