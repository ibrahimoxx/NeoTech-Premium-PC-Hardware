<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class commande extends Model
{
    use HasFactory;
    protected $primaryKey = 'codeCommande';
    protected $table = 'commande';
    protected $fillable = ['dateCommande', 'codeUtilisateur'];
    public function utilisateur()
    {
        return $this->belongsTo(utilisateur::class, 'codeUtilisateur', 'codeUtilisateur');
    }
    public function livraison()
    {
        return $this->hasOne(livraison::class, 'codeCommande', 'codeCommande');
    }
    public function paiement()
    {
        return $this->hasOne(paiement::class, 'codeCommande', 'codeCommande');
    }
    public function produit(){
        return $this->belongsToMany(produit::class,'contenir','codeCommande','codeProduit')
        ->withPivot('quantitéStock');
    }
}
