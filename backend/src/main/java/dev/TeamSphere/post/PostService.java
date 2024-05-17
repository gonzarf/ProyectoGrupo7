package dev.TeamSphere.post;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Slf4j
public class PostService {

    @Autowired
    private PostRepository postRepository;

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

    public Optional<Post> getPostById(UUID id) {
        return postRepository.findById(id);
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

    public void updatePost(Post postFind, Post updatedPost) {
        // Actualizar los otros campos del post
        postFind.setTitle(updatedPost.getTitle() != null ? updatedPost.getTitle() : postFind.getTitle());
        postFind.setDescription(updatedPost.getDescription() != null ? updatedPost.getDescription() : postFind.getDescription());
        postFind.setImage(updatedPost.getImage() != null ? updatedPost.getImage() : postFind.getImage());
        postFind.setType(updatedPost.getType() != null ? updatedPost.getType() : postFind.getType());

        // Guardar los cambios en el post
        postRepository.save(postFind);

        // Actualizar la lista de likes
        postFind.setLikes(postFind.getLikes());

        // Guardar los cambios en la lista de likes
        postRepository.save(postFind);
    }

}
