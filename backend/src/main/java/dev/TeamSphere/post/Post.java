package dev.TeamSphere.post;

import dev.TeamSphere.likes.Like;
import dev.TeamSphere.user.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.List;
import java.util.UUID;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor(force = true)
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    @NotBlank(message = "A title is required")
    @Length(min = 2, max = 50, message = "The name must be between 3 and 50 characters")
    private String titulo;

    @Column(nullable = false)
    @NotBlank(message = "A description is required")
    private String description;

    @Column
    private Integer likes;

    @Column(nullable = false)
    private String image;

    @Column(nullable = false)
    private String tipo;

    @Column
    @OneToMany(cascade = CascadeType.ALL)
    private List<User> likesUsers;


}
