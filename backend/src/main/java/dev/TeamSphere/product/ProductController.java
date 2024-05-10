package dev.TeamSphere.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/product/")
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

    @PostMapping
    public ResponseProductDto postProduct(@RequestBody CreateProductDto product){
        return service.postProduct(product);
    }

    @GetMapping("/{id}")
    public ResponseProductDto getProductById(@PathVariable("id") UUID id){
        return service.getProductById(id);
    }

    @PutMapping("/{id}")
    public ResponseProductDto updateProductById(@PathVariable("id") UUID id, @RequestBody UpdateProductDto product){
        return service.updateProductById(product, id);
    }

    @DeleteMapping("/{id}")
    public void deleteProductById(@PathVariable("id") UUID id){
        service.deleteProduct(id);
    }


}
