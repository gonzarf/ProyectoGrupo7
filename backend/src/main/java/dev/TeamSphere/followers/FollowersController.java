package dev.TeamSphere.followers;

import dev.TeamSphere.user.User;
import dev.TeamSphere.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
        // Buscar el usuario que sigue por ID
        User follower = userRepository.findById(followerId).orElse(null);
        // Buscar el usuario seguido por ID
        User followed = userRepository.findById(followedId).orElse(null);

        // Verificar que ambos usuarios existen
        if (follower == null || followed == null) {
            return ResponseEntity.badRequest().body("Follower or Followed user not found");
        }

        // Añadir el seguidor usando el servicio
        followersService.addFollower(follower, followed);
        return ResponseEntity.ok("Follower added successfully");
    }
}
