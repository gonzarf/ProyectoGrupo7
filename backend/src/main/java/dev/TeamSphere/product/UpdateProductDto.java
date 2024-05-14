
package dev.TeamSphere.product;

import jakarta.validation.constraints.NotBlank;

public record UpdateProductDto(

        String name,

        Double price,

        String description,

        String image
) {
}
