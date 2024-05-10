package dev.TeamSphere.followers;

import dev.TeamSphere.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.UUID;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor(force = true)
public class Followers {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID idSeguidorSeguido;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_idSeguidor", nullable = false)
    private User seguidor; // Usuario que sigue

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_idSeguido", nullable = false)
    private User seguido; // Usuario seguido


}
