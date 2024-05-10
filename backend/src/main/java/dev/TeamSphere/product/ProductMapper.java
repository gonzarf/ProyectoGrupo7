package dev.TeamSphere.product;

import org.springframework.stereotype.Component;

import java.util.Collections;

@Component
public class ProductMapper {

    public Product toProductFromCreate(CreateProductDto createProductDto){
        return Product.builder()
                .name(createProductDto.name())
                .price(createProductDto.price())
                .description(createProductDto.description())
                .image(Collections.singletonList(createProductDto.image()))
                .build();
    }

    public Product toProductFromUpdate(UpdateProductDto updateProductDto, Product product){
        return Product.builder()
                .id(product.getId())
                .name(updateProductDto.name() != null ? updateProductDto.name() : product.getName())
                .price(updateProductDto.price() != null ? updateProductDto.price() : product.getPrice())
                .description(updateProductDto.description() != null ? updateProductDto.description() : product.getDescription())
                .image(updateProductDto.image() != null ? Collections.singletonList(updateProductDto.image()) : product.getImage())
                .build();
    }

    public ResponseProductDto toResponseDto(Product product){
        return ResponseProductDto.builder()
                .id(product.getId())
                .name(product.getName())
                .price(product.getPrice())
                .description(product.getDescription())
                .date(product.getDate())
                .image(product.getImage().toString())
                .build();


    }

}
