package dev.TeamSphere.user;

import dev.TeamSphere.auth.UserResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID>, JpaSpecificationExecutor<User> {

    Optional<User> findById(UUID id);

    void deleteById(UUID id);

    List<User> findByNameContainingIgnoreCase(String name);

}
