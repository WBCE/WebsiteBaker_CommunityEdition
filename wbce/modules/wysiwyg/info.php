<?php
/**
 * WebsiteBaker Community Edition (WBCE)
 * Way Better Content Editing.
 * Visit http://wbce.org to learn more and to join the community.
 *
 * @copyright Ryan Djurovich (2004-2009)
 * @copyright WebsiteBaker Org. e.V. (2009-2015)
 * @copyright WBCE Project (2015-)
 * @license GNU GPL2 (or any later version)
 */

//no direct file access
if(count(get_included_files())==1) die(header("Location: ../index.php",TRUE,301));

$module_directory = 'wysiwyg';
$module_name = 'WYSIWYG';
$module_function = 'page';
$module_version = '2.9.0';
$module_platform = '2.8.2';
$module_author = 'Ryan Djurovich';
$module_license = 'GNU General Public License';
$module_description = 'This module allows you to edit the contents of a page using a graphical editor';
