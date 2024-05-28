
package dev.TeamSphere.product;

import jakarta.validation.constraints.NotBlank;

import java.util.List;
import java.util.Set;
import java.util.UUID;

public record UpdateProductDto(

        String name,

        Double price,

        String description,

        List<String> image,

        UUID buyer,

        Set<Status> status
) {

    public static UpdateProductDto withUpdatedImages(UpdateProductDto updateProductDto, List<String> updatedImageList) {
        return new UpdateProductDto(
                updateProductDto.name(),
                updateProductDto.price(),
                updateProductDto.description(),
                updatedImageList,
                updateProductDto.buyer(),
                updateProductDto.status()
        );
    }
}
