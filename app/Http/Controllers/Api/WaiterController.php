<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WaiterController extends Controller
{
    public function waiters()
        {
            $waiters = Waiter::with('child')
            ->with('giffter')
            
             ->get();
    
            return $waiters;
                
                    
                    
        }
        public function waiter($waiter_id)
        {
    
            $waiter = Waiter::with('child')
            ->with('giffter')
            
             ->find($waiter_id);
    
            return $waiter;
         }
}
