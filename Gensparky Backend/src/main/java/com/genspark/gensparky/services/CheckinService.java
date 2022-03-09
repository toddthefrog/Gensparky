package com.genspark.gensparky.services;


import com.genspark.gensparky.entities.Checkin;

import java.util.List;

public interface CheckinService {
    Checkin getLatestCheckinByUserId(Long Id);
    Checkin addCheckin(Checkin checkin);
    boolean deleteCheckinById(Long Id);
}
