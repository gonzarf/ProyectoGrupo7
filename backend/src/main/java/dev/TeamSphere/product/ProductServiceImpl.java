
package dev.TeamSphere.product;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService{

    private final ProductRepository repository;
    private final ProductMapper mapper;


    public ProductServiceImpl(ProductRepository repository, ProductMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public List<ResponseProductDto> getProductList() {
        List<Product> productList = repository.findAll();
        return productList.stream()
                .map(mapper::toResponseDto)
                .collect(Collectors.toList());
    }

    @Override
    public ResponseProductDto postProduct(CreateProductDto createProductDto) {
        Product product = mapper.toProductFromCreate(createProductDto);
        Product saveProduct = repository.save(product);
        return mapper.toResponseDto(saveProduct);
    }

    @Override
    public ResponseProductDto getProductById(UUID id) {
        Product product = repository.findById(id).orElseThrow(() -> new RuntimeException("The Product with the id: " + id + " doesn't exist"));
        return mapper.toResponseDto(product);
    }

    @Override
    public ResponseProductDto updateProductById(UpdateProductDto updateProductDto, UUID id) {
        Product product = repository.findById(id).orElseThrow(() -> new RuntimeException("The Product with the id: " + id + " doesn't exist"));
        Product saveProduct = repository.save(mapper.toProductFromUpdate(updateProductDto, product));
        return mapper.toResponseDto(saveProduct);
    }

    @Override
    public void deleteProduct(UUID id) {
        repository.deleteById(id);
    }
}
