<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Waiter extends Model
{
    use HasFactory;

    public function child(){
        return $this->hasOne(Child::class);
    }
    public function giffter(){
        return $this->hasOne(Giffter::class);
    }
}
