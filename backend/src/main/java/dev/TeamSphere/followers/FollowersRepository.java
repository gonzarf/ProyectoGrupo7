package dev.TeamSphere.followers;

import dev.TeamSphere.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface FollowersRepository extends JpaRepository<Followers, UUID> {
    @Query("SELECT f.idFollowed FROM Followers f WHERE f.idFollower = :user")
    List<User> findFollowedUsersByFollower(User user);

    Optional<Followers> findById(UUID id);
}
