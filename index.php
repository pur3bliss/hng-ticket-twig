<?php
require_once __DIR__ . '/vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

$loader = new FilesystemLoader(__DIR__ . '/templates');
$twig = new Environment($loader);

$page = $_GET['page'] ?? 'landing';
$valid = ['landing','login','signup','dashboard','tickets'];
if (!in_array($page,$valid)) $page = 'landing';

echo $twig->render($page . '.twig', []);
