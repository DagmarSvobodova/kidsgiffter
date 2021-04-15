<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Giffter;
use App\Models\Child;

class GiffterController extends Controller
{
    
    public function create_giffter(Request $request, $child_id)
    {
        $this->validate($request, [
            'name' => 'nullable',
            'addres' => 'nullable',
            'email' => 'required',
            'message' => 'nullable',
            

            
            
        ]);
        
        $giffter = Giffter::create($request->all());
        $child = Child::findOrFail($child_id);
        $child->giffter_id = $giffter->id;
        $child->save();

        return [
            'status' => 'success',
            'message' => 'Děkujeme za Vaši podporu, budeme Vás informovat o doručení dárku.'
        ];
    }
  
}
