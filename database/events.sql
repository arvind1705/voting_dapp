USE blockb;

SET GLOBAL event_scheduler = ON;

CREATE EVENT expirePolls
  ON SCHEDULE EVERY 30 second
  DO UPDATE polls SET pollExpired = true
  WHERE (pollTimeEnd < now())
  AND pollExpired IS NULL;  