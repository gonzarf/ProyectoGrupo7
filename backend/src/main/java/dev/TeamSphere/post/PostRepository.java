package dev.TeamSphere.post;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface PostRepository extends JpaRepository<Post, UUID> {
    Optional<Post> findById(UUID id);

    List<Post> findByTitleContainingIgnoreCase(String title);



}