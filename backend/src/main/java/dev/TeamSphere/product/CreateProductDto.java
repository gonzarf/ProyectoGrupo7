package dev.TeamSphere.product;

import jakarta.validation.constraints.NotBlank;

import java.util.List;

public record CreateProductDto(

        @NotBlank(message = "The name is required")
        String name,

        Double price,

        @NotBlank(message = "The description is required")
        String description,

        List<String> imageList

) {
        public static CreateProductDto withUpdatedImages(CreateProductDto createProductDto, List<String> updatedImageList) {
                return new CreateProductDto(
                        createProductDto.name(),
                        createProductDto.price(),
                        createProductDto.description(),
                        updatedImageList
                );
        }



}