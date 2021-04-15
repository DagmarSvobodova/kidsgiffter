<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Child;
use App\Models\Waiter;
use App\Models\Giffter;
use Auth;

class KidController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'link' => 'required',
            'gift' => 'required',
            'info' => 'required',
            'sex' => 'nullable',
            
        ]);
        
        $child = Child::create($request->all());
        $child->user_id = Auth::id();
        $child->save();

        return [
            'status' => 'success',
            'message' => 'Přání bylo přidáno.'
        ];
    }
    public function waiting($child_id)
    {
        $child = Child::findOrFail($child_id);
            $waiter = new Waiter;
            $waiter->child_id = $child->id;
            $waiter->giffter_id = $child->giffter_id;
            $waiter->save();
           
            return [
                'status' => 'success',
                'message' => 'Děkujeme.'
            ];
        
    }
    public function delete_wish($child_id)
    {
       
        
        $child = Child::find($child_id)
        ->delete();
        $waiter = Waiter::where('child_id', $child_id)
        ->delete();
        return [
            'status' => 'success',
            'message' => 'Přání bylo odstraněno.'
        ];
        
        }

        public function delete_waiter($child_id)
    {
        $waiter = Waiter::where('child_id', $child_id)
        ->delete();
        return [
            'status' => 'success',
            'message' => 'Přání bylo umístěno zpět do seznamu.'
        ];
        }
    
        public function children()
        {
            $children = Child::with('user')
            
             ->get();
    
            return $children;
                
                    
                    
        }
        public function child($child_id)
        {
    
            $child = Child::with('user')
           
            ->find($child_id);
          
            return $child;
         }
}
