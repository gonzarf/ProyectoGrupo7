package dev.TeamSphere.auth;

import dev.TeamSphere.user.UserNotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service("userDetailsService")
public class AuthUsersServiceImpl implements AuthUsersService {

    private final AuthUsersRepository authUsersRepository;

    @Autowired
    public AuthUsersServiceImpl(AuthUsersRepository authUsersRepository) {
        this.authUsersRepository = authUsersRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UserNotFound {
        return (UserDetails) authUsersRepository.findByUsername(username)
                .orElseThrow(() -> new UserNotFound("User '" +username+ "' not found"));
    }
}