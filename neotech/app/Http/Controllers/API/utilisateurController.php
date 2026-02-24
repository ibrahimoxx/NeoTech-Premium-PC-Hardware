<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\utilisateur;


use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class utilisateurController extends Controller
{
    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'Nom' => 'required|string|max:50',
            'Prénom' => 'required|string|max:50',
            'dateNaissance' => 'required|date',
            'numéroTéléphone' => 'required|string|max:20',
            'adressEmail' => 'required|email|unique:utilisateurs,adressEmail',
            'motDePasse' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ]);
        }

        $r= new utilisateur;
        $r->Nom=$request->input('Nom');
        $r->Prénom=$request->input('Prénom');
        $r->dateNaissance=$request->input('dateNaissance');
        $r->numéroTéléphone=$request->input('numéroTéléphone');
        $r->adressEmail=$request->input('adressEmail');
        $r->motDePasse=Hash::make($request->input('motDePasse'));
        $r->save();

        return response()->json([
            'status'=>200,
            'message'=>'utilisateur Added successfully',
        ]);
    }

    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ]);
        }

        $user = utilisateur::where('adressEmail', $request->input('email'))->first();

        if($user && Hash::check($request->input('password'), $user->motDePasse)){
            return response()->json([
                'status' => 200,
                'message' => 'Login successful',
                'user' => $user
            ]);
        } else {
            return response()->json([
                'status' => 401,
                'message' => 'Invalid credentials'
            ]);
        }
    }
}
