
package dev.TeamSphere.product;

import dev.TeamSphere.storage.StorageService;
import lombok.extern.slf4j.Slf4j;
import org.apache.juli.logging.Log;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Slf4j
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

   /* @Override
    public ResponseProductDto postProduct(CreateProductDto createProductDto, List<MultipartFile> fileList) {

        List<String> urlList = new ArrayList<>();

        for (MultipartFile file : fileList){
            String image = storageService.store(file);
            urlList.add(storageService.getUrl(image));
            log.info("mecaguendios:" + storageService.getUrl(image));
        }
        Product product = mapper.toProductFromCreate(createProductDto);
        Product saveProduct = repository.save(product);
        return mapper.toResponseDto(saveProduct);
    }*/

    public ResponseProductDto postProduct(CreateProductDto createProductDto, List<MultipartFile> fileList) {

        List<String> urlList = new ArrayList<>();

        for (MultipartFile file : fileList) {
            String image = storageService.store(file);
            urlList.add(storageService.getUrl(image));
        }

        // Crear un nuevo CreateProductDto con la lista de imágenes actualizada
        CreateProductDto updatedProductDto = CreateProductDto.withUpdatedImages(createProductDto, urlList);

        // Convertir CreateProductDto a Product entity y guardar en la base de datos
        Product product = mapper.toProductFromCreate(updatedProductDto);
        Product savedProduct = repository.save(product);

        // Retornar el DTO de respuesta
        return mapper.toResponseDto(savedProduct);
    }

    @Override
    public ResponseProductDto updateProductById(UpdateProductDto updateProductDto, UUID id, List<MultipartFile> fileList) {
        Product product = repository.findById(id).orElseThrow(() -> new RuntimeException("The Product with the id: " + id + " doesn't exist"));

        List<String> urlList = new ArrayList<>();

        for (MultipartFile file : fileList) {
            String image = storageService.store(file);
            urlList.add(storageService.getUrl(image));
        }

        // Crear un nuevo CreateProductDto con la lista de imágenes actualizada
        UpdateProductDto updateProduct = UpdateProductDto.withUpdatedImages(updateProductDto, urlList);

        // Convertir CreateProductDto a Product entity y guardar en la base de datos

        Product saveProduct = repository.save(mapper.toProductFromUpdate(updateProduct, product));
        return mapper.toResponseDto(saveProduct);
    }


    @Override
    public ResponseProductDto getProductById(UUID id) {
        Product product = repository.findById(id).orElseThrow(() -> new RuntimeException("The Product with the id: " + id + " doesn't exist"));
        return mapper.toResponseDto(product);
    }

    @Override
    public void deleteProduct(UUID id) {
        repository.deleteById(id);
    }
}
