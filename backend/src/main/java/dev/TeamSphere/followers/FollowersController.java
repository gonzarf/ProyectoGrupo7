package dev.TeamSphere.followers;

import dev.TeamSphere.user.User;
import dev.TeamSphere.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/followers")
public class FollowersController {

    private final FollowersService followersService;
    private final UserRepository userRepository;

    @Autowired
    public FollowersController(FollowersService followersService, UserRepository userRepository) {
        this.followersService = followersService;
        this.userRepository = userRepository;
    }

    // Método para agregar un nuevo seguidor
    @PostMapping("/add")
    public ResponseEntity<String> addFollower(@RequestParam UUID followerId, @RequestParam UUID followedId) {
        User follower = userRepository.findById(followerId).orElse(null);
        User followed = userRepository.findById(followedId).orElse(null);

        if (follower == null || followed == null) {
            return ResponseEntity.badRequest().body("Follower or Followed user not found");
        }

        followersService.addFollower(follower, followed);
        return ResponseEntity.ok("Follower added successfully");
    }

    // Método para quitar un seguidor
    @DeleteMapping("/remove")
    public ResponseEntity<String> removeFollower(@RequestParam UUID followerId, @RequestParam UUID followedId) {
        User follower = userRepository.findById(followerId).orElse(null);
        User followed = userRepository.findById(followedId).orElse(null);

        if (follower == null || followed == null) {
            return ResponseEntity.badRequest().body("Follower or Followed user not found");
        }

        followersService.removeFollower(follower, followed);
        return ResponseEntity.ok("Follower removed successfully");
    }
}
