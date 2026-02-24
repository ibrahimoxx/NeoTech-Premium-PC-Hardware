<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class utilisateur extends Model
{
    use HasFactory;
    protected $primaryKey = 'codeUtilisateur';
    protected $table = 'utilisateur';
    protected $fillable = ['Nom', 'Prénom', 'dateNaissance', 'numéroTéléphone','adressEmail','motDePasse'];
    public function commande(){
        return $this->hasMany(commande::class,'codeUtilisateur','codeUtilisateur');
    }
    public function demande(){
        return $this->hasMany(demande::class,'codeUtilisateur','codeUtilisateur');
    }
}
