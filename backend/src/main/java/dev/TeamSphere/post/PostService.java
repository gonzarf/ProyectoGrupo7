package dev.TeamSphere.post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<Post> getAllPosts(){

        return postRepository.findAll();
    }

    public Post getPostById(UUID id){

        return postRepository.findById(id).get();
    }

    public Post getPostByName(String name){
        List<Post> allPosts = postRepository.findAll();

        Post postEncontrado = null;
        for(Post p : allPosts){
            if(p.getTitulo().equals(name)){
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
            if (updatedPost.getTitulo() != null) {
                existingPost.setTitulo(updatedPost.getTitulo());
            }
            if (updatedPost.getDescription() != null) {
                existingPost.setDescription(updatedPost.getDescription());
            }
            if (updatedPost.getLikes() != null) {
                existingPost.setLikes(updatedPost.getLikes());
            }
            if (updatedPost.getImage() != null) {
                existingPost.setImage(updatedPost.getImage());
            }
            if (updatedPost.getTipo() != null) {
                existingPost.setTipo(updatedPost.getTipo());
            }
            postRepository.save(existingPost);
        }
    }

}
