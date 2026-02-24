<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class paiement extends Model
{
    use HasFactory;
    protected $primaryKey = 'codePaiement';
    protected $table = 'paiement';
    protected $fillable = ['Méthode', 'Montant', 'status', 'codeCommande'];
    public function commande()
    {
        return $this->belongsTo(commande::class,'codeCommande','codeCommande');
    }
}
