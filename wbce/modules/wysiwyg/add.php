<?php
/**
 * WBCE CMS
 * Way Better Content Editing.
 * Visit https://wbce.org to learn more and to join the community.
 *
 * @copyright Ryan Djurovich (2004-2009)
 * @copyright WebsiteBaker Org. e.V. (2009-2015)
 * @copyright WBCE Project (2015-)
 * @license GNU GPL2 (or any later version)
 */

// Insert an extra row into the database
$sql = 'INSERT INTO `' . TABLE_PREFIX . 'mod_wysiwyg` '
     . 'SET `page_id`=' . $page_id . ', '
     . '`section_id`=' . $section_id . ', '
     . '`content`=\'\', '
     . '`text`=\'\'';
$database->query($sql);