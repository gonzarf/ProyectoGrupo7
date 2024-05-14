package dev.TeamSphere.product;

public record UpdateProductDto(

        String name,

        Double price,

        String description,

        String image
) {
}
