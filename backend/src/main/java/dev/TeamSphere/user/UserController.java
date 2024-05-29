package dev.TeamSphere.user;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Objects;
import java.util.UUID;

@RestController
@RequestMapping("/user")
@PreAuthorize("hasRole('USER')")
public class UserController {
    private final UserServiceImpl userService;

    @Autowired
    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<ResponseUserDto>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseUserDto> getUserById(@PathVariable("id") UUID id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @GetMapping("/me/profile")
    public ResponseEntity<ResponseUserDto> me(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(userService.getUserById(user.getId()));
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ResponseUserDto> createUser(@Valid @RequestBody CreateUserDto createUserDto) {
        return ResponseEntity.status(201).body(userService.createUser(createUserDto));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ResponseUserDto> updateUser(@PathVariable("id") UUID id, @Valid @RequestBody UpdateUserDto updateUserDto) {
        return ResponseEntity.status(201).body(userService.updateUser(id, updateUserDto));
    }

    @PutMapping("/me/profile")
    public ResponseEntity<ResponseUserDto> updateMe(@AuthenticationPrincipal User user, @Valid @RequestBody UpdateUserDto updateUserDto) {
        return ResponseEntity.status(201).body(userService.updateUser(user.getId(), updateUserDto));
    }

    @PatchMapping(value = "/{id}/image", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ResponseUserDto> patchProductImage(@PathVariable("id") UUID id, @RequestParam("file") MultipartFile file) {
        if (!Objects.requireNonNull(file.getContentType()).startsWith("image/")) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(userService.updateImage(id, file));
    }

    @PatchMapping(value = "/me/profile/image", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ResponseUserDto> patchMeImage(@AuthenticationPrincipal User user, @RequestParam("file") MultipartFile file) {
        if (!Objects.requireNonNull(file.getContentType()).startsWith("image/")) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(userService.updateImage(user.getId(), file));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") UUID id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/me/profile")
    public ResponseEntity<Void> deleteMe(@AuthenticationPrincipal User user) {
        userService.deleteUser(user.getId());
        return ResponseEntity.noContent().build();
    }

    //logic for the following system

    @PatchMapping("/follow-someone/{idUser}/{idUserFollowing}")
    public ResponseEntity<String> followSomeone(@PathVariable UUID idUser, @PathVariable UUID idUserFollowing){

        userService.followSomeone(idUser,idUserFollowing);

        return ResponseEntity.status(HttpStatus.OK).body("el following se ha producido.");

    }

    @PatchMapping("/unfollow-someone/{idUser}/{idUserUnFollowing}")
    public ResponseEntity<String> unFollowSomeone(@PathVariable UUID idUser, @PathVariable UUID idUserUnFollowing){
        userService.unFollowSomeone(idUser,idUserUnFollowing);
        return ResponseEntity.status(HttpStatus.OK).body("el unfollowing se ha producido.");
    }

    @GetMapping("get-followers/{idUser}")
    public List<User> getFollowersUser(@PathVariable UUID idUser){

        return  userService.getFollowers(idUser);
    }



}
