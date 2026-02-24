<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class livreur extends Model
{
    use HasFactory;
    protected $primaryKey = 'codeLivreur';
    protected $table = 'livreur';
    protected $fillable = ['Nom', 'Prénom', 'adresseEmail', 'numéroTéléphone'];
    public function livraisons()
    {
        return $this->hasMany(livraison::class,'codeLivreur','codeLivreur');
    }
}
