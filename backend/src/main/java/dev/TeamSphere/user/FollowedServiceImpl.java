package dev.TeamSphere.user;

import dev.TeamSphere.storage.StorageService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FollowedServiceImpl implements FollowedService{

    private final FollowedRepository followedRepository;

    public FollowedServiceImpl(FollowedRepository followedRepository) {
        this.followedRepository = followedRepository;
    }


    @Override
    public List<Followed> getAllFollowed() {
        return followedRepository.findAll();
    }


}

