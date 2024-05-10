package dev.TeamSphere.followers;


import dev.TeamSphere.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface FollowersRepository {
    @Query("SELECT f.followedUser FROM Follower f WHERE f.follower = :user")
    List<User> findFollowedUsersByFollower(User user);
    Optional<Followers> findById(UUID id);

}
