package dev.TeamSphere.user;

import lombok.Builder;
import java.util.Set;
import java.util.UUID;

@Builder
public record ResponseUserDto(
        UUID id,

        String name,

        String lastName,

        String email,

        String image,

        String  phone,

        Set<Role> role
) {
}
