<?php

namespace App\Builder;

interface BuilderPageUseCase
{
    public function one(string $locale, string $slug): BuilderPage;
}
