<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class demande extends Model
{
    use HasFactory;
    protected $primaryKey = 'codeDemande';
    protected $table = 'demande';
    protected $fillable = ['dateDemande', 'codeUtilisateur'];
    public function utilisateur()
    {
        return $this->belongsTo(utilisateur::class, 'codeUtilisateur', 'codeUtilisateur');
    }
    public function paiement()
    {
        return $this->hasOne(paiement2::class, 'codeDemande', 'codeDemande');
    }
    public function service(){
        return $this->belongsToMany(service::class,'contenir_2','codeDemande','codeService');
    }
}
