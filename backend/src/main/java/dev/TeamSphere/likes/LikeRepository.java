package dev.TeamSphere.likes;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface LikeRepository extends JpaRepository<Like, UUID> {

    List<Like> findByPostId(UUID postId);
}
