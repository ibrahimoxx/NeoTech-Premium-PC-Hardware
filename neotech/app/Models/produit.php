<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class produit extends Model
{
    use HasFactory;
    protected $primaryKey = 'codeProduit';
    protected $table = 'produit';
    protected $fillable = ['Nom', 'Description', 'prixUnitaire', 'promotion','Image'];
    public function commande(){
        return $this->belongsToMany(commande::class,'contenir','codeProduit','codeCommande')
        ->withPivot('quantitéStock');
    }
}
