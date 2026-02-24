<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\utilisateur>
 */
class utilisateurFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'Nom' => fake()->lastname(),
            'Prénom' => fake()->firstname(),
            'dateNaissance' => fake()->date(),
            'numéroTéléphone' => fake()->unique()->phoneNumber(),
            'adressEmail'=> fake()->unique()->safeEmail(),
            'motDePasse'=> fake()->unique()->password(),
        ];
    }
}
