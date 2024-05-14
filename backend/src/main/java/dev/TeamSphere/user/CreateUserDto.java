package dev.TeamSphere.user;

import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.Length;

public record CreateUserDto (

    @NotBlank(message = "The name is required")
    @Length(min = 2, max = 50, message = "The name must be between 3 and 50 characters")
     String name,

    @NotBlank(message = "The last name is required")
    @Length(min = 2, max = 50, message = "The last name must be between 3 and 50 characters")
     String lastName,

    @NotBlank(message = "The email is required")
    @Email(message = "The email is invalid")
     String email,

    @NotBlank(message = "Username cannot be empty")
    @Length(min = 3, message = "Username must have at least 3 characters")
    String username,

    @NotBlank(message = "The password is required")
    @Length(min = 8, max = 100, message = "The password must be between 5 and 20 characters")
     String password,

     String image,

    @Length(min = 9, max = 12, message = "The phone is invalid")
    String phone
){}
