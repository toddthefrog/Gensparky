package com.genspark.gensparky.entities;

import javax.persistence.*;

@Entity
public class Checkin {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "user_id")
    private long userId;

    @Column(name = "time_in_milliseconds")
    private long timeInMilliseconds;

    public Checkin() {
    }

    public Checkin(long id, long userId, long timeInMilliseconds) {
        this.id = id;
        this.userId = userId;
        this.timeInMilliseconds = timeInMilliseconds;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public long getTimeInMilliseconds() {
        return timeInMilliseconds;
    }

    public void setTimeInMilliseconds(long timeInMilliseconds) {
        this.timeInMilliseconds = timeInMilliseconds;
    }

    @Override
    public String toString() {
        return "Checkin{" +
                "id=" + id +
                ", userId=" + userId +
                ", timeInMilliseconds=" + timeInMilliseconds +
                '}';
    }
}
