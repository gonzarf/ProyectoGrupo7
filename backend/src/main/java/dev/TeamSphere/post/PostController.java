package dev.TeamSphere.post;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.PUT, RequestMethod.GET, RequestMethod.DELETE})
@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/all")
    public List<Post> getAllPosts(){
        return postService.getAllPosts();
    }

    @GetMapping("/get-by-id/{idPost}")
    public Optional<Post> getPostById(@PathVariable("idPost") UUID idPost){

        return postService.getPostById(idPost);
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
    public void deletePost(@PathVariable("idPost") UUID idPost) {

        postService.deletePostById(idPost);

    }

    @PutMapping("/update/{idPost}")
    public ResponseEntity<String> updatePost(@PathVariable("idPost") UUID postId, @RequestBody Post updatedPost){
            Post existingPost = postRepository.findById(postId).orElse(null);
            postService.updatePost(existingPost,updatedPost);

        return ResponseEntity.status(HttpStatus.OK).body("El post se actualizo correctamente.");
    }

    @PatchMapping("/addlike/{idPost}/{idUser}")
    public void addLike(@PathVariable("idPost") UUID idPost, @PathVariable("idUser")String idUser){
       Optional<Post> postOptional = postService.getPostById(idPost);
        Post post = postOptional.get();
        List<String> likeList = post.getLikes();
        likeList.add(idUser);
        post.setLikes(likeList);

        postService.addNewPost(post);

    }

    @PatchMapping("/dislike/{idPost}/{idUser}")
    public void dislike(@PathVariable("idPost") UUID idPost, @PathVariable("idUser")String idUser){
        Optional<Post> postOptional = postService.getPostById(idPost);
        Post post = postOptional.get();
        List<String> likeList = post.getLikes();

        for(int x= 0;x<likeList.toArray().length;x++){

            if(likeList.get(x).equals(idUser)){
                    likeList.remove(x);
            }
        }

        post.setLikes(likeList);
        postService.addNewPost(post);

    }

    @GetMapping("/search")
    public List<Post> searchPosts(@RequestParam String query) {
        return postService.searchPosts(query);
    }

}
