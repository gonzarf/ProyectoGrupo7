package dev.TeamSphere.post;

import dev.TeamSphere.user.User;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.PUT, RequestMethod.GET, RequestMethod.DELETE})
@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping("/all")
    public List<Post> getAllPosts(){
        return postService.getAllPosts();
    }

    @GetMapping("/{id}")
    public Post getPostById(@PathVariable UUID idPost){

        return null;
    }

    @GetMapping("/get-news/")
    public List<Post> getNews(){
        return null;
    }

    @GetMapping("/{name}")
    public Post getPostByName(@PathVariable String name){
        return postService.getPostByName(name);
    }

    @PostMapping("/add")
    public ResponseEntity<String> addNewPost(@Valid @RequestBody Post post, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body("error");
        }
         postService.addNewPost(post);
        return ResponseEntity.status(HttpStatus.CREATED).body("Post creado exitosamente");
    }

    @DeleteMapping("/delete/{idPost}")
    public ResponseEntity<String> deletePost(@PathVariable("idPost") UUID postId) {

        if (postService.getPostById(postId) == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se encontró el post con el ID proporcionado.");
        }

        postService.deletePostById(postId);
        return ResponseEntity.status(HttpStatus.OK).body("El post se eliminó correctamente.");
    }

    @PutMapping("/update/{idPost}")
    public ResponseEntity<String> updatePost(@PathVariable("idPost") UUID postId, @RequestBody Post updatedPost){
            postService.updatePost(postId,updatedPost);
        return ResponseEntity.status(HttpStatus.OK).body("El post se actualizo correctamente.");
    }

    //like and unlike a post
    /*
    @PostMapping("/like-post/{idPost}")
    public ResponseEntity<String> likePost(@PathVariable("idPost") UUID postId, @RequestBody User user){

        postService.likePost(user,postId);

        return ResponseEntity.status(HttpStatus.OK).body("El like se ha dado correctamente.");
    }

    @PostMapping("/unlike-post/{idPost}")
    public ResponseEntity<String> unlikePost(@PathVariable("idPost") UUID postId, @RequestBody User user){

        return ResponseEntity.status(HttpStatus.OK).body("El like se ha dado correctamente.");

    }

     */

}
