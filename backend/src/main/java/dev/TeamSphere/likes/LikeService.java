package dev.TeamSphere.likes;

import dev.TeamSphere.post.Post;
import dev.TeamSphere.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class LikeService {

    @Autowired
    LikeRepository likeRepository;

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
}
