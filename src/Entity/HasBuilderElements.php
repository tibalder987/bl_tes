<?php

namespace App\Entity;

interface HasBuilderElements
{
    public function getBuilderElementsFields(): array;
}