<?php

namespace App\Http\Controllers\Api;

use Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function token(Request $request)
    {
       
        if (Auth::attempt($request->all())) {
     
            $user = Auth::user();

      
            $user->tokens()->delete();

    
            $token = $user->createToken('token-name');

            return [
                'message' => 'success',
                'user' => Auth::user(),
                'token' => $token->plainTextToken,
            ];
        }

        return response()->json([
            'message' => 'invalid'
        ], 422);
    }

    public function user()
    {
        $user = Auth::user();

        return [
            'user' => $user
        ];
    }

    public function logout()
    {
        $user = Auth::user();

        $user->tokens()->delete();
    }

    
            }
        
