package com.genspark.gensparky.repos;

import com.genspark.gensparky.entities.Checkin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CheckinRepo extends JpaRepository<Checkin, Long> {
    @Query(value = "SELECT * FROM gensparky.checkin where user_id = ?1 ORDER BY id DESC LIMIT 0, 1", nativeQuery = true)
    Checkin test(Long Id);
}
