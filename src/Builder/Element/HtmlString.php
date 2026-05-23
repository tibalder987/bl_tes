<?php

namespace App\Builder\Element;

use DOMDocument;
use DOMElement;

final class HtmlString
{
    /** @var DOMDocument */
    private $dom;

    public static function fromString($string)
    {
        $dom = new self();
        $dom->dom = new DOMDocument();

        $fragment = $dom->dom->createDocumentFragment();
        $fragment->appendXML(str_replace('<br>', '<br/>', str_replace('&', '&amp;', html_entity_decode($string, ENT_QUOTES))));

        $dom->dom->appendChild($fragment);

        return $dom;
    }

    public function addClassToTags($tagName, $class)
    {
        $tags = $this->dom->getElementsByTagName($tagName);

        foreach ($tags as $tag) {
            /** @var DOMElement $tag */
            $tag->setAttribute('class', $tag->getAttribute('class') . ' ' . $class);
        }

        return $this;
    }

    public function __toString()
    {
        return (string)$this->dom->saveHTML();
    }
}
