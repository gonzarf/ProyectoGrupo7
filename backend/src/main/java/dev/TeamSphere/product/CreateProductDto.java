package dev.TeamSphere.product;

import dev.TeamSphere.user.User;
import jakarta.validation.constraints.NotBlank;

import java.util.List;
import java.util.UUID;

public record CreateProductDto(

        @NotBlank(message = "The name is required")
        String name,

        Double price,

        @NotBlank(message = "The description is required")
        String description,

        List<String> image,

        UUID seller


) {
        public static CreateProductDto withUpdatedImagesAndSeller(CreateProductDto createProductDto, List<String> updatedImageList/*, User seller*/) {
                return new CreateProductDto(
                        createProductDto.name(),
                        createProductDto.price(),
                        createProductDto.description(),
                        updatedImageList,
                        //seller,
                        createProductDto.seller()
                );
        }



}