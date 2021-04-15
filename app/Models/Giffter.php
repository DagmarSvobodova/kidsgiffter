<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Giffter extends Model
{
    use HasFactory;

    public function child(){
        return $this->belognsTo(Child::class);
    }


    public function waiter(){
        return $this->belognsTo(Waiter::class);
    }
}
