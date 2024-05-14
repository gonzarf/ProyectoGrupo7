package dev.TeamSphere.followers;

import dev.TeamSphere.user.User;

import java.util.List;

public interface FollowersService {
    List<User> findFollowedUsersByFollower(User user);
    Followers addFollower(User follower, User followed);
}
