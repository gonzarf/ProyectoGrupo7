package dev.TeamSphere.auth;

import dev.TeamSphere.user.Roles;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    private Long id;
    private String name;
    private String lastName;
    private String username;
    private String email;
    private String phone;
    @Builder.Default
    private Set<Roles> roles = Set.of(Roles.USER);
}