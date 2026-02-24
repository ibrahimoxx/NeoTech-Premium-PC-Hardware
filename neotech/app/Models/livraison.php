<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class livraison extends Model
{
    use HasFactory;
    protected $primaryKey = 'codeLivraison';
    protected $table = 'livraison';
    protected $fillable = ['Adress', 'dateLivraison', 'status', 'codeLivreur','codeCommande'];
    public function commande()
    {
        return $this->belongsTo(commande::class,'codeCommande','codeCommande');
    }
    public function livreur()
    {
        return $this->belongsTo(livreur::class,'codeLivreur','codeLivreur');
    }
}
