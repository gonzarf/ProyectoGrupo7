package dev.TeamSphere.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserSignUpRequest {

    @NotBlank(message = "Name cannot be empty")
    private String name;

    @NotBlank(message = "Last name cannot be empty")
    private String lastName;

    @NotBlank(message = "Username cannot be empty")
    @Length(min = 3, message = "Username must have at least 3 characters")
    private String username;

    @Email(regexp = ".*@.*\\..*", message = "Email must be valid")
    @NotBlank(message = "Email cannot be empty")
    private String email;

    @Length(min = 9, max = 12, message = "The phone is invalid")
    private String phone;

    @NotBlank(message = "Password cannot be empty")
    @Length(min = 5, message = "Password must have at least 5 characters")
    private String password;
}