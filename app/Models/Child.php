<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Child extends Model
{
    use HasFactory;

    public function user(){
        return $this->belognsTo(User::class);
    }
    public function waiter(){
        return $this->belognsTo(Waiter::class);
    }
    public function giffter(){
        return $this->hasOne(Giffter::class);
    }
}
 