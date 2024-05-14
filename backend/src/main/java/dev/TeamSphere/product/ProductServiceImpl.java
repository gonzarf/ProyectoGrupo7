
package dev.TeamSphere.product;

import dev.TeamSphere.storage.StorageService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService{

    private final ProductRepository repository;
    private final ProductMapper mapper;
    private final StorageService storageService;


    public ProductServiceImpl(ProductRepository repository, ProductMapper mapper, StorageService storageService) {
        this.repository = repository;
        this.mapper = mapper;
        this.storageService = storageService;
    }

    @Override
    public List<ResponseProductDto> getProductList() {
        List<Product> productList = repository.findAll();
        return productList.stream()
                .map(mapper::toResponseDto)
                .collect(Collectors.toList());
    }

    @Override
    public ResponseProductDto postProduct(CreateProductDto createProductDto, List<MultipartFile> fileList) {
        Product product = mapper.toProductFromCreate(createProductDto);

        List<String> urlList = product.getImage();

        for (MultipartFile multipartFile : fileList) {
            String image = storageService.store(multipartFile);
            String urlImage = storageService.getUrl(image);
            urlList.add(urlImage);
        }

        product.setImage(urlList);
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
