package dev.TeamSphere.user;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

public interface UserService {

    List<ResponseUserDto> getAllUsers();

    //List<ResponseUserDto> getAllFollowers();

    ResponseUserDto getUserById(UUID id);

    ResponseUserDto createUser(CreateUserDto createUserDto);

    ResponseUserDto updateUser(UUID id, UpdateUserDto updateUserDto);

    ResponseUserDto updateImage(UUID id, MultipartFile image);

    void deleteUser(UUID id);
}
