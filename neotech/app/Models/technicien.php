<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class technicien extends Model
{
    use HasFactory;
    protected $primaryKey = 'codeTechnicien';
    protected $table = 'technicien';
    protected $fillable = ['Nom', 'Prénom', 'adressEmail', 'numéroTéléphone'];
    public function service()
    {
        return $this->belongsTo(service::class,'codeTechnicien','codeTechnicien');
    }
}
