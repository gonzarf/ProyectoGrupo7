
package dev.TeamSphere.product;

import dev.TeamSphere.user.User;
import lombok.Builder;

import java.time.LocalDateTime;
import java.util.UUID;

@Builder
public record ResponseProductDto(

        UUID id,

        String name,

        Double price,

        String description,

        LocalDateTime date,

        UUID seller,

        String image
) {
}
