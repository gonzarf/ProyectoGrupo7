package dev.TeamSphere.product;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public interface ProductService {

    List<ResponseProductDto> getProductList();

    ResponseProductDto postProduct(CreateProductDto createProductDto);

    ResponseProductDto getProductById(UUID id);

    ResponseProductDto updateProductById(UpdateProductDto updateProductDto, UUID id);

    void deleteProduct(UUID id);
}
