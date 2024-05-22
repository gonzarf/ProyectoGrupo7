package dev.TeamSphere.user;


import dev.TeamSphere.storage.StorageService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FollowerServiceImpl implements FollowerService{

    private final FollowerRepository followerRepository;

    public FollowerServiceImpl(FollowerRepository followerRepository) {
        this.followerRepository = followerRepository;
    }


    @Override
    public List<Follower> getAllFollower() {
        return followerRepository.findAll();
    }


}
