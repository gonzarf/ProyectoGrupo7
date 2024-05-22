package dev.TeamSphere.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface FollowerRepository extends JpaRepository<Follower, UUID>, JpaSpecificationExecutor<Follower> {

}
