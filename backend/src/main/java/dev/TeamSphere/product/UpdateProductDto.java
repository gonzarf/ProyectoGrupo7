
package dev.TeamSphere.product;

import jakarta.validation.constraints.NotBlank;

import java.util.List;

public record UpdateProductDto(

        String name,

        Double price,

        String description,

        List<String> image
) {

    public static UpdateProductDto withUpdatedImages(UpdateProductDto updateProductDto, List<String> updatedImageList) {
        return new UpdateProductDto(
                updateProductDto.name(),
                updateProductDto.price(),
                updateProductDto.description(),
                updatedImageList
        );
    }
}
