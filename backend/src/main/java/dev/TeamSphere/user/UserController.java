package dev.TeamSphere.user;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Objects;
import java.util.UUID;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserServiceImpl userService;
    private final FollowerServiceImpl followerService;
    private final FollowedServiceImpl followedService;

    @Autowired
    public UserController(UserServiceImpl userService, FollowerServiceImpl followerService, FollowedServiceImpl followedService) {
        this.userService = userService;
        this.followerService = followerService;
        this.followedService = followedService;
    }

    @GetMapping
    public ResponseEntity<List<ResponseUserDto>> getAllUsers() {
        //System.out.println(userService.getAllUsers());
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/{id}/followers")
    public ResponseEntity<List<Follower>> getAllFollowers() {
        return ResponseEntity.ok(followerService.getAllFollower());
    }
    @GetMapping("/{id}/followeds")
    public ResponseEntity<List<Followed>> getAllFolloweds() {
        return ResponseEntity.ok(followedService.getAllFollowed());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseUserDto> getUserById(@PathVariable("id") UUID id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @PostMapping
    public ResponseEntity<ResponseUserDto> createUser(@Valid @RequestBody CreateUserDto createUserDto) {
        return ResponseEntity.status(201).body(userService.createUser(createUserDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseUserDto> updateUser(@PathVariable("id") UUID id, @Valid @RequestBody UpdateUserDto updateUserDto) {
        return ResponseEntity.status(201).body(userService.updateUser(id, updateUserDto));
    }

    @PatchMapping(value = "/{id}/image", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ResponseUserDto> patchProductImage(@PathVariable("id") UUID id, @RequestParam("file") MultipartFile file) {
        if (!Objects.requireNonNull(file.getContentType()).startsWith("image/")) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(userService.updateImage(id, file));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") UUID id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

}
