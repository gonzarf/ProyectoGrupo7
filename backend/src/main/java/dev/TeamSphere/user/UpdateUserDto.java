package dev.TeamSphere.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.Length;

import java.util.List;
import java.util.UUID;

public record UpdateUserDto(

        @Length(min = 2, max = 50, message = "The name must be between 3 and 50 characters")
        String name,

        @Length(min = 2, max = 50, message = "The last name must be between 3 and 50 characters")
        String lastName,

        @Email(message = "The email is invalid")
        String email,

        @Length(min = 3, message = "Username must have at least 3 characters")
        String username,

        @Length(min = 8, max = 100, message = "The password must be between 5 and 20 characters")
        String password,

        String image,

        @Length(min = 9, max = 12, message = "The phone is invalid")
        String phone,

        List<UUID> followers,

        List<UUID> following
) {
}
