package dev.TeamSphere.product;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/product/")
@PreAuthorize("hasRole('USER')")
public class ProductController {

    private final ProductServiceImpl service;

    @Autowired
    public ProductController(ProductServiceImpl service) {
        this.service = service;
    }



    @GetMapping
    public List<ResponseProductDto> getProductList(){
        return service.getProductList();
    }

    /*@PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseProductDto postProduct(@RequestBody CreateProductDto product, @RequestParam("file") List<MultipartFile> fileList){
        return service.postProduct(product, fileList);
    }*/
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseProductDto postProduct(
            @RequestParam("product") String productJson,
            @RequestParam("file") List<MultipartFile> fileList) throws JsonProcessingException {

        // Convierte el JSON del producto a un objeto CreateProductDto
        ObjectMapper objectMapper = new ObjectMapper();
        CreateProductDto product = objectMapper.readValue(productJson, CreateProductDto.class);

        return service.postProduct(product, fileList);
    }

    @GetMapping("/{id}")
    public ResponseProductDto getProductById(@PathVariable("id") UUID id){
        return service.getProductById(id);
    }

    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseProductDto updateProductById(
            @PathVariable("id") UUID id,
            @RequestParam("product") String productJson,
            @RequestParam("file") List<MultipartFile> fileList) throws JsonProcessingException {

        // Convierte el JSON del producto a un objeto CreateProductDto
        ObjectMapper objectMapper = new ObjectMapper();
        UpdateProductDto product = objectMapper.readValue(productJson, UpdateProductDto.class);

        return service.updateProductById(product, id, fileList);
    }

    @DeleteMapping("/{id}")
    public void deleteProductById(@PathVariable("id") UUID id){
        service.deleteProduct(id);
    }


}