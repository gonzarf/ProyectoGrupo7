package dev.TeamSphere.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
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

    public static final String IMAGE_DEFAULT = "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_640.png";

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, name = "last_name")
    private String lastName;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column
    @Builder.Default
    private String image = IMAGE_DEFAULT;

    @Column(nullable = false)
    private String phone;

    @Column(nullable=false)
    private String roles = "Administrador";
}