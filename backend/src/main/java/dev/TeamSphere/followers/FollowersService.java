package dev.TeamSphere.followers;

import dev.TeamSphere.user.User;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FollowersService {
    @Query("SELECT f.fk_idSeguido FROM Follower f WHERE f.fk_idSeguidor = :user")
    List<User> findFollowedUsersByFollower(User user);
}
