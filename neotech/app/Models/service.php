<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class service extends Model
{
    use HasFactory;
    protected $primaryKey = 'codeService';
    protected $table = 'service';
    protected $fillable = ['Nom', 'Description', 'Disponibilité', 'Image','Montant','codeTechnicien'];
    public function technicien()
    {
        return $this->hasMany(technicien::class,'codeTechnicien','codeTechnicien');
    }
    public function demande(){
        return $this->belongsToMany(demande::class,'contenir_2','codeService','codeDemande');
    }
}
