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

    private boolean active;

    @Column(name = "discord_id")
    private Long discordId;

    private long cohort;

    public User(){}

    public User(long id, String firstName, String lastName, boolean active, Long discordId, int cohort) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.active = active;
        this.discordId = discordId;
        this.cohort = cohort;
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

    public boolean isActive() {
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

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", active=" + active +
                ", discordId='" + discordId + '\'' +
                ", cohort=" + cohort +
                '}';
    }
}
