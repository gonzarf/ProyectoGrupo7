package dev.TeamSphere.user;

import org.springframework.stereotype.Component;

import java.util.Set;

@Component
public class UserMapper {

    public User toUserFromCreate(CreateUserDto requestDto) {
        return User.builder()
                .name(requestDto.name())
                .lastName(requestDto.lastName())
                .email(requestDto.email())
                .username(requestDto.username())
                .password(requestDto.password())
                .image(requestDto.image() != null ? requestDto.image() : User.IMAGE_DEFAULT)
                .phone(requestDto.phone())
                .roles(Set.of(Roles.USER))
                .build();
    }

    public User toUserFromUpdate(UpdateUserDto updateUserDto, User user) {
        return User.builder()
                .id(user.getId())
                .name(updateUserDto.name() != null ? updateUserDto.name() : user.getName())
                .lastName(updateUserDto.lastName() != null ? updateUserDto.lastName() : user.getLastName())
                .email(updateUserDto.email() != null ? updateUserDto.email() : user.getEmail())
                .username(updateUserDto.username() != null ? updateUserDto.username() : user.getUsername())
                .password(updateUserDto.password() != null ? updateUserDto.password() : user.getPassword())
                .image(updateUserDto.image() != null ? updateUserDto.image() : user.getImage())
                .phone(updateUserDto.phone() != null ? updateUserDto.phone() : user.getPhone())
                .build();
    }

    public ResponseUserDto toResponseDto(User user) {
        return ResponseUserDto.builder()
                .id(user.getId())
                .name(user.getName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .username(user.getUsername())
                .image(user.getImage())
                .phone(user.getPhone())
                .roles(user.getRoles())
                .build();
    }
}
