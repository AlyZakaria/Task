


START TRANSACTION;
-- create database scandiweb_task;
create table products( 
    sku varchar(50), 
    name varchar(50) NOT NULL,  
    price decimal(10,0) NOT NULL, 
    dimensions varchar(50) NOT NULL, 
    primary key (sku) 
);
COMMIT;
