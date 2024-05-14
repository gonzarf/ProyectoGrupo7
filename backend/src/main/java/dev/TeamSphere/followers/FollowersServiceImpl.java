package dev.TeamSphere.followers;

import dev.TeamSphere.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FollowersServiceImpl implements FollowersService {

    private final FollowersRepository followersRepository;

    @Autowired
    public FollowersServiceImpl(FollowersRepository followersRepository) {
        this.followersRepository = followersRepository;
    }

    @Override
    public List<User> findFollowedUsersByFollower(User user) {
        return followersRepository.findFollowedUsersByFollower(user);
    }

    @Override
    public Followers addFollower(User follower, User followed) {
        Followers followers = Followers.builder()
                .idFollower(follower)
                .idFollowed(followed)
                .build();
        return followersRepository.save(followers);
    }

    @Override
    public void removeFollower(User follower, User followed) {
        followersRepository.deleteByIdFollowerAndIdFollowed(follower, followed);
    }
}
