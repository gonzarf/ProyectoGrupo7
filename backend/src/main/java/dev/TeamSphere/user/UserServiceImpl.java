package dev.TeamSphere.user;

import dev.TeamSphere.storage.StorageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Slf4j
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final StorageService storageService;


    public UserServiceImpl(UserRepository userRepository, UserMapper userMapper, StorageService storageService) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.storageService = storageService;
    }

    @Override
    public UUID getUUID(String id) {
        try {
            return UUID.fromString(id);
        } catch (IllegalArgumentException e) {
            throw new UserBadRequest("Invalid UUID");
        }
    }

    @Override
    public List<ResponseUserDto> getAllUsers() {
        log.info("Getting all users");
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(userMapper::toResponseDto)
                .collect(Collectors.toList());
    }

    @Override
    public ResponseUserDto getUserById(String id) {
        log.info("Getting user by id: {}", id);
        User user = userRepository.findById(getUUID(id))
                .orElseThrow(() -> new UserNotFound("User not found with id: " + id));
        return userMapper.toResponseDto(user);
    }

    @Override
    public ResponseUserDto createUser(CreateUserDto createUserDto) {
        log.info("Creating user: {}", createUserDto);
        User user = userMapper.toUserFromCreate(createUserDto);
        User savedUser = userRepository.save(user);
        return userMapper.toResponseDto(savedUser);
    }

    @Override
    public ResponseUserDto updateUser(String id, UpdateUserDto updateUserDto) {
        log.info("Updating user with id: {}", id);
        User user = userRepository.findById(getUUID(id))
                .orElseThrow(() -> new UserNotFound("User not found with id: " + id));
        User savedUser = userRepository.save(userMapper.toUserFromUpdate(updateUserDto, user));
        return userMapper.toResponseDto(savedUser);
    }

    @Override
    public ResponseUserDto updateImage(String id, MultipartFile file) {
        if (!file.isEmpty()) {
            String image = storageService.store(file);
            String urlImage = storageService.getUrl(image);

            User user = userRepository.findById(getUUID(id)).orElseThrow(() -> new UserNotFound(id));
            storageService.delete(user.getImage());
            user.setImage(urlImage);
            User userSaved = userRepository.save(user);
            return userMapper.toResponseDto(userSaved);
        } else {
            throw new UserBadRequest("Image is empty");
        }
    }


    @Override
    public void deleteUser(String id) {
        log.info("Deleting user with id: {}", id);
        var user = userRepository.findById(getUUID(id)).orElseThrow(() -> new UserNotFound(id));
        userRepository.deleteById(getUUID(id));
        if (user.getImage() != null && !user.getImage().equals(User.IMAGE_DEFAULT)) {
            storageService.delete(user.getImage());
        }
    }

    //following system
    public void followSomeone(UUID idUser,UUID idFollowing){

        User user = userRepository.findById(idFollowing)
                .orElseThrow(() -> new UserNotFound("User not found with id: " + idFollowing));

        List<UUID> followersUser = user.getFollowers();
        followersUser.add(idUser);
        user.setFollowers(followersUser);
        userRepository.save(user);
    }

    public void unFollowSomeone(UUID idUser,UUID idUnFollowing){

        User user = userRepository.findById(idUnFollowing)
                .orElseThrow(() -> new UserNotFound("User not found with id: " + idUnFollowing));

        List<UUID> followersUser = user.getFollowers();
        followersUser.remove(idUser);

        user.setFollowers(followersUser);
        userRepository.save(user);

    }

    public List<User> getFollowers(UUID idUser){
        User user = userRepository.findById(idUser)
                .orElseThrow(() -> new UserNotFound("User not found with id: " + idUser));

        List<User> followersOfUser = new ArrayList<>();

        for(UUID id: user.getFollowers()){
            followersOfUser.add(userRepository.findById(idUser).orElseThrow(() -> new UserNotFound("User not found with id: " + idUser)));
        }

        return followersOfUser;

    }

    public List<ResponseUserDto> getUsersByName(String name) {
        List<User> users = userRepository.findByNameContainingIgnoreCase(name);
        return users.stream()
                .map(userMapper::toResponseDto)
                .collect(Collectors.toList());
    }
}
