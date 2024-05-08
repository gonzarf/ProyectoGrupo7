package dev.TeamSphere.post;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PostDTO {

    private UUID id;

    @NotBlank(message = "A title is required")
    @Length(min = 2, max = 50, message = "The name must be between 3 and 50 characters")
    private String titulo;

    @NotBlank(message = "A description is required")
    private String description;

    private Integer likes;

    private String image;

    private String tipo;

}

