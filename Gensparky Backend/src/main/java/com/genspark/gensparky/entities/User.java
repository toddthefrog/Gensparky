package com.genspark.gensparky.entities;
import javax.persistence.Entity;
import javax.persistence.*;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String firstName;

    private String lastName;

    private boolean active = true;

    @Column(name = "discord_id")
    private Long discordId;

    private long cohort;

    @Column(name = "time_in_milliseconds")
    private long timeInMilliseconds;

    public User(){}

    public User(long id, String firstName, String lastName, boolean active, Long discordId, long cohort, long timeInMilliseconds) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.active = active;
        this.discordId = discordId;
        this.cohort = cohort;
        this.timeInMilliseconds = timeInMilliseconds;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public boolean getActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Long getDiscordId() {
        return discordId;
    }

    public void setDiscordId(Long discordId) {
        this.discordId = discordId;
    }

    public long getCohort() {
        return cohort;
    }

    public void setCohort(long cohort) {
        this.cohort = cohort;
    }

    public long getTimeInMilliseconds() {
        return timeInMilliseconds;
    }

    public void setTimeInMilliseconds(long timeInMilliseconds) {
        this.timeInMilliseconds = timeInMilliseconds;
    }


}
