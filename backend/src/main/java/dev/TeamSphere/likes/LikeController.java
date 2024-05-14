package dev.TeamSphere.likes;

import dev.TeamSphere.post.Post;
import dev.TeamSphere.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.PUT, RequestMethod.GET, RequestMethod.DELETE})
@RestController
@RequestMapping("/like")
public class LikeController {

    @Autowired
    LikeService likeService;

    @GetMapping("/users-like-post/{idPost}")
    public List<User> getUserWhoLikedPost(@PathVariable("idPost") UUID idPost){

        return  likeService.getUsersWhoLikedPost(idPost);
    }

    @GetMapping("/post-liked-by-user/{idUser}")
    public List<Post> getPostsLikedByUser(@PathVariable("idUser") UUID idUser){

        return likeService.getPostsLikedUser(idUser) ;
    }

    @GetMapping("/all")
    public List<Like> getAllLikes(){

        return likeService.getAllLikes();
    }


    //LIKE AND UNLIKE POST

    @PostMapping("/add-like")
    public void addLike(@RequestBody LikeRequest likeRequest) {
        UUID idUser = likeRequest.getIdUser();
        UUID idPost = likeRequest.getIdPost();

        // Lógica para agregar el like
        likeService.addLike(idUser, idPost);
    }
}
