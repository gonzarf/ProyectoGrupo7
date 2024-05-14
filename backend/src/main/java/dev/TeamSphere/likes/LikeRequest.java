package dev.TeamSphere.likes;

import java.util.UUID;

public class LikeRequest {
    private UUID idUser;
    private UUID idPost;

    public UUID getIdUser() {
        return idUser;
    }

    public void setIdUser(UUID idUser) {
        this.idUser = idUser;
    }

    public UUID getIdPost() {
        return idPost;
    }

    public void setIdPost(UUID idPost) {
        this.idPost = idPost;
    }
}
