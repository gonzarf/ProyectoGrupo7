package dev.TeamSphere.product;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.UUID;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    public static final String IMAGE_DEFAULT = "https://www.devgraph.com/wp-content/uploads/2022/01/tumbnail-placeholder-image.jpeg";

    @UUID
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    @NotBlank(message = "The name is required")
    private String name;

    @Column(nullable = false)
    @NotBlank(message = "The price is required")
    private double price;

    @Column(nullable = false)
    @NotBlank(message = "The description is required")
    private String description;

    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime date = LocalDateTime.now();

    @Column(nullable = false)
    @NotBlank
    private String image = IMAGE_DEFAULT;

    //private UUID id_comprador;

    //private UUID id_vendedor;


}
