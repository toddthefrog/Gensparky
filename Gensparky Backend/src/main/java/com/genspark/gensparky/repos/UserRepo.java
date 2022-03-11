package com.genspark.gensparky.repos;

import com.genspark.gensparky.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
    @Query(value = "Select * from gensparky.user where discord_id = ?1", nativeQuery = true)
    User getUserByDiscordName(Long discordId);
    @Query(value = "SELECT * FROM gensparky.user WHERE gensparky.user.bench = 1", nativeQuery = true)
    List<User> getBenchUsers();
    @Query(value = "SELECT * FROM gensparky.user WHERE gensparky.user.bench = 0 order by gensparky.user.cohort", nativeQuery = true)
    List<User> getTrainees();
}
