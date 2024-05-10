package dev.TeamSphere.followers;

import dev.TeamSphere.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

public class FollowersServiceImpl implements FollowersService{


    private final FollowersRepository followersRepository;

    @Autowired
    public FollowersServiceImpl(FollowersRepository followerRepository) {
        this.followersRepository = followerRepository;
    }

    @Override
    public List<User> findFollowedUsersByFollower(User user) {
        return followersRepository.findFollowedUsersByFollower(user);
    }
}
