package dev.TeamSphere.product;

import jakarta.validation.constraints.NotBlank;

public record CreateProductDto(

        @NotBlank(message = "The name is required")
        String name,

        Double price,

        @NotBlank(message = "The description is required")
        String description,

        String image

) {

}