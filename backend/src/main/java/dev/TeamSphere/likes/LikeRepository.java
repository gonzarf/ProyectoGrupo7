package dev.TeamSphere.likes;

import dev.TeamSphere.post.Post;
import dev.TeamSphere.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface LikeRepository extends JpaRepository<Like, UUID> {

    List<Like> findByPostId(UUID postId);
    boolean existsByUserAndPost(User user, Post post);
}
