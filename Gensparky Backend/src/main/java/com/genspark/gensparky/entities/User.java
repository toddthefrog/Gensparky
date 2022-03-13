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

    private boolean bench;

    @Column(name = "discord_id")
    private String discordId;

    private long cohort;

    @Column(name = "time_in_milliseconds")
    private long timeInMilliseconds;

    public User(){}

    public User(long id, String firstName, String lastName, boolean bench, String discordId, long cohort, long timeInMilliseconds) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.bench = bench;
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

    public boolean getBench() {
        return bench;
    }

    public void setBench(boolean bench) {
        this.bench = bench;
    }

    public String getDiscordId() {
        return discordId;
    }

    public void setDiscordId(String discordId) {
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
