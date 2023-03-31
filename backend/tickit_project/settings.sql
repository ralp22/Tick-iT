-- settings.sql
CREATE DATABASE tickit;
CREATE USER tickituser1 WITH PASSWORD 'tickit';
GRANT ALL PRIVILEGES ON DATABASE tickit TO tickituser1;