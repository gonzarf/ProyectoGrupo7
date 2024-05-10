package dev.TeamSphere.product;

import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public interface ProductService {

    List<ResponseProductDto> getProductList();

    ResponseProductDto postProduct(CreateProductDto createProductDto, List<MultipartFile> fileList);

    ResponseProductDto getProductById(UUID id);

    ResponseProductDto updateProductById(UpdateProductDto updateProductDto, UUID id);

    void deleteProduct(UUID id);
}
