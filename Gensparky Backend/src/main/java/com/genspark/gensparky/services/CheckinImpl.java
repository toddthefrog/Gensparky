package com.genspark.gensparky.services;

import com.genspark.gensparky.entities.Checkin;
import com.genspark.gensparky.repos.CheckinRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CheckinImpl implements CheckinService {

    @Autowired
    CheckinRepo checkinRepo;

    public CheckinImpl(CheckinRepo checkinRepo) {
        this.checkinRepo = checkinRepo;
    }

    @Override
    public Checkin getLatestCheckinByUserId(Long Id) {
        return checkinRepo.test(Id);
    }

    @Override
    public Checkin addCheckin(Checkin checkin) {
        return checkinRepo.save(checkin);
    }

    @Override
    public boolean deleteCheckinById(Long Id) {
        return false;
    }
}
