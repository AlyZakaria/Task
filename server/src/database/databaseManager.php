<?php


interface DatabaseManager{
    public static function establish();
    public static function connect();
    public static function disconnect();
}