<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class paiement2 extends Model
{
    use HasFactory;
    protected $primaryKey = 'codePaiement';
    protected $table = 'paiement';
    protected $fillable = ['Méthode', 'Montant', 'status', 'codeDemande'];
    public function demande()
    {
        return $this->belongsTo(demande::class,'codeDemande','codeDemande');
    }
}
