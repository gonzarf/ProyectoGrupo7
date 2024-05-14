package dev.TeamSphere.likes;

import dev.TeamSphere.post.Post;
import dev.TeamSphere.post.PostRepository;
import dev.TeamSphere.user.User;
import dev.TeamSphere.user.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class LikeService {

    @Autowired
    LikeRepository likeRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PostRepository postRepository;

    public List<User> getUsersWhoLikedPost(UUID postId){
        List<Like> likes = likeRepository.findByPostId(postId);
        List<User> users = new ArrayList<>();
        for (Like like : likes) {
            users.add(like.getUser());
        }
        return users;
    }

    public List<Post> getPostsLikedUser(UUID userId){

        List<Like> likes = likeRepository.findByPostId(userId);
        List<Post> postsLiked = new ArrayList<>();

        for(Like like: likes){
            postsLiked.add(like.getPost());
        }
        return postsLiked;
    }

    public List<Like> getAllLikes(){
        return likeRepository.findAll();
    }

    public void addLike(UUID idUser, UUID idPost) {
        // Verificar si el usuario y la publicación existen
        User user = userRepository.findById(idUser).orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + idUser));
        Post post = postRepository.findById(idPost).orElseThrow(() -> new EntityNotFoundException("Post not found with ID: " + idPost));

        // Verificar si el usuario ya ha dado like a esta publicación
        boolean alreadyLiked = likeRepository.existsByUserAndPost(user, post);
        if (alreadyLiked) {
            throw new IllegalStateException("User already liked this post");
        }

        // Crear el nuevo like
        Like like = new Like();
        like.setUser(user);
        like.setPost(post);

        // Guardar el like en la base de datos
        likeRepository.save(like);
    }
}
