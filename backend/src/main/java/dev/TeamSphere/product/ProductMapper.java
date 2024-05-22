package dev.TeamSphere.product;

import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Collections;

@Component
public class ProductMapper {

    public Product toProductFromCreate(CreateProductDto createProductDto){
        return Product.builder()
                .name(createProductDto.name())
                .price(createProductDto.price())
                .description(createProductDto.description())
                .date(LocalDateTime.now())
                .seller(createProductDto.seller())
                .image(createProductDto.imageList())
                .build();
    }

    public Product toProductFromUpdate(UpdateProductDto updateProductDto, Product product){
        return Product.builder()
                .id(product.getId())
                .name(updateProductDto.name() != null ? updateProductDto.name() : product.getName())
                .price(updateProductDto.price() != null ? updateProductDto.price() : product.getPrice())
                .description(updateProductDto.description() != null ? updateProductDto.description() : product.getDescription())
                .date(LocalDateTime.now())
                //TODO: Hay que meter el seller y el buyer
                .image(updateProductDto.image() != null ? updateProductDto.image() : product.getImage())
                .build();
    }

    public ResponseProductDto toResponseDto(Product product){
        return ResponseProductDto.builder()
                .id(product.getId())
                .name(product.getName())
                .price(product.getPrice())
                .description(product.getDescription())
                .date(product.getDate())
                .seller(product.getSeller())
                .image(product.getImage().toString())
                .build();


    }

}