package com.genspark.gensparky.repos;

import com.genspark.gensparky.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
    @Query(value = "Select * from gensparky.user where discord_id = ?1", nativeQuery = true)
    User getUserByDiscordName(Long discordId);
}
