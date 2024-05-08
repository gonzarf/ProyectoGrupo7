package dev.TeamSphere.user;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.Set;
import java.util.UUID;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor(force = true)
public class User {

    public static final String IMAGE_DEFAULT =  "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_640.png";

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    @NotBlank(message = "The name is required")
    @Length(min = 2, max = 50, message = "The name must be between 3 and 50 characters")
    private String name;

    @Column(nullable = false, name = "last_name")
    @NotBlank(message = "The last name is required")
    @Length(min = 2, max = 50, message = "The last name must be between 3 and 50 characters")
    private String lastName;

    @Column(nullable = false)
    @NotBlank(message = "The email is required")
    @Email(message = "The email is invalid")
    private String email;

    @Column(nullable = false)
    @NotBlank(message = "The password is required")
    @Length(min = 8, max = 100, message = "The password must be between 5 and 20 characters")
    private String password;

    @Column(nullable = false)
    @NotBlank
    @Builder.Default
    private String image = IMAGE_DEFAULT;

    @Column(nullable = false)
    @Digits(integer = 9, fraction = 0, message = "The phone number must be 9 digits")
    private Integer phone;

    @Column(nullable = false)
    private Integer role;
}
