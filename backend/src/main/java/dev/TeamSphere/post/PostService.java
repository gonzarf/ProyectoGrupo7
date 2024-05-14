package dev.TeamSphere.post;
import dev.TeamSphere.likes.Like;
import dev.TeamSphere.likes.LikeRepository;
import dev.TeamSphere.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private LikeRepository likeRepository;

    public List<Post> getAllPosts(){

        return postRepository.findAll();
    }

    public List<Post> getNews(){


        List<Post> allPosts = postRepository.findAll();
        List<Post> newsPosts = new ArrayList<Post>();

        //iteration of all posts to get the news
        for(Post p : allPosts){

            if(p.getType().equals("news")){
                newsPosts.add(p);
            }
        }
        return newsPosts;

    }

    public Post getPostById(UUID id){

        return postRepository.findById(id).get();
    }

    public Post getPostByName(String name){
        List<Post> allPosts = postRepository.findAll();

        Post postEncontrado = null;
        for(Post p : allPosts){
            if(p.getTitle().equals(name)){
                postEncontrado = p;
                }
        }
        return postEncontrado;
    }

    public void addNewPost(Post post){
        postRepository.save(post);
    }

    public void deletePostById(UUID id){
        postRepository.deleteById(id);
    }

    public void updatePost(UUID postId, Post updatedPost) {
        Post existingPost = postRepository.findById(postId).orElse(null);
        if (existingPost != null) {
            if (updatedPost.getTitle() != null) {
                existingPost.setTitle(updatedPost.getTitle());
            }
            if (updatedPost.getDescription() != null) {
                existingPost.setDescription(updatedPost.getDescription());
            }

            if (updatedPost.getImage() != null) {
                existingPost.setImage(updatedPost.getImage());
            }
            if (updatedPost.getType() != null) {
                existingPost.setType(updatedPost.getType());
            }
            postRepository.save(existingPost);
        }
    }
/*
    //when you like a post you add a like(which is the id of the user and the id of the post into de list of likesof the post)
    public void likePost(User user, UUID postId){
        Post postLiked = postRepository.findById(postId).get();
        Like likeNew = new Like();

        likeNew.setPost(postLiked);
        likeNew.setUser(user);

        postLiked.getLikes().add(likeNew);
    }

    public void unlikePost(User user, UUID postId){
        Post postLiked = postRepository.findById(postId).get();

        //find the like which belongs to the user

        List<Like> likes = likeRepository.findByPostId(postId);

        for (Like like: likes){

            if(like.getUser().getId() == user.getId()){

                postLiked.getLikes().remove(like);
            }
        }

    }*/

}
