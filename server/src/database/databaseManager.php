<?php

// namespace Src\Database;

interface DatabaseManager{
    public static function connect();
    public static function disconnect();
}