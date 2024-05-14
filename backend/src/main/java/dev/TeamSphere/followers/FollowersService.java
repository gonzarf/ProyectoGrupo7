package dev.TeamSphere.followers;

import dev.TeamSphere.user.User;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FollowersService {
    @Query("SELECT f.fk_idFollowed FROM followers f WHERE f.fk_idFollower = :user")
    List<User> findFollowedUsersByFollower(User user);
}
