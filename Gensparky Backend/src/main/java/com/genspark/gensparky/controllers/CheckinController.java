package com.genspark.gensparky.controllers;

import com.genspark.gensparky.entities.Checkin;
import com.genspark.gensparky.repos.CheckinRepo;
import com.genspark.gensparky.services.CheckinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class CheckinController {
    @Autowired
    public CheckinService checkinService;

    @Autowired
    public CheckinRepo checkinRepo;

    public CheckinController(CheckinService checkinService) {
        this.checkinService = checkinService;
    }

    @CrossOrigin(origins = "http://localhost:8080")
    // post user
    @PostMapping("/checkins")
    public Checkin addCheckin(@RequestBody Checkin checkin){
        return checkinService.addCheckin(checkin);
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping("/latest_checkin/{Id}")
    public Checkin getLatestCheckin(@PathVariable String Id){
        return checkinService.getLatestCheckinByUserId(Long.parseLong(Id));
    }
}
