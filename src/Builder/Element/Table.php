<?php

declare(strict_types=1);

namespace App\Builder\Element;

class Table
{

    private const MAX_LINES = 20;

    private const MAX_COLS = 6;

    private $hasMetaHeader = false;

    private $hasDatum = false;

    /** @var array */
    private $datum;

    private $isPivot = false;

    public static function fromElement(array $tableElement)
    {
        $table = new self();

        $table->hasMetaHeader = isset($tableElement['headers']) && $tableElement['headers'] === 'first_two_lines';
        $table->isPivot = isset($tableElement['type']) && $tableElement['type'] === 'pivot';

        for ($i = 0; $i < self::MAX_LINES; $i++) {
            for ($j = 0; $j < self::MAX_COLS; $j++) {
                $cell = trim($tableElement['table_cell_' . $i . '_' . $j] ?? '');
                $table->datum[$i][$j] = $cell;
                if (!empty($cell)) {
                    $table->hasDatum = true;
                }
            }
        }

        return $table;
    }

    public function isEmpty()
    {
        return !$this->hasDatum;
    }

    public function isPivot()
    {
        return $this->isPivot;
    }

    public function getHeadCols()
    {
        if (!$this->hasMetaHeader) {
            return [$this->datum[0]];
        }

        $tabReturn = [];
        $tabReturn[0] = $this->datum[0];
        $tabReturn[1] = $this->datum[1];
        return $this->trimCols($tabReturn ?? []);
    }

    public function getCellTitle($indexLine, $indexCol)
    {
        if (!$this->isPivot() || $indexCol === 0) {
            return null;
        }

        $trimedLines = $this->trimLines();

        return $this->trimCols($trimedLines[$indexLine])[0] ?? null;
    }

    public function hasCellTitle($indexLine, $indexCol)
    {
        return $this->getCellTitle($indexLine, $indexCol) !== null;
    }

    public function getBodyLines()
    {
        $trimedLines = $this->trimLines();

        $colTrimedLines = [];
        foreach ($trimedLines as $cols) {
            $colTrimedLines[] = $this->trimCols($cols);
        }

        return $colTrimedLines;
    }

    private function getMaxLines()
    {
        return $this->getMaxElementTableIndexes()[0] + 1;
    }

    private function getMaxCols()
    {
        return $this->getMaxElementTableIndexes()[1] + 1;
    }

    private function getMaxElementTableIndexes(): array
    {
        $maxLineIndex = 0;
        $maxColIndex = 0;

        for ($i = 0; $i < self::MAX_LINES; $i++) {
            for ($j = 0; $j < self::MAX_COLS; $j++) {
                if (!empty($this->datum[$i][$j])) {
                    if ($i > $maxLineIndex) {
                        $maxLineIndex = $i;
                    }
                    if ($j > $maxColIndex) {
                        $maxColIndex = $j;
                    }
                }
            }
        }

        return [$maxLineIndex, $maxColIndex];
    }

    private function trimCols(array $cols): array
    {
        return array_slice($cols, 0, $this->getMaxCols());
    }

    private function trimLines(): array
    {
        $maxLines = $this->getMaxLines();

        return array_slice($this->datum, $this->hasMetaHeader ? 2 : 1, $this->hasMetaHeader ? $maxLines - 2 : $maxLines - 1);
    }
}
