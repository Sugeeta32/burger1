drop database if exists burgers_db;
create database burgers_db;
use burgers_db;

create table burgers(
    id int(20) auto_increment not null,
    burger_name varchar (100) not null,
    devoured boolean not null,
    primary key (id)
)