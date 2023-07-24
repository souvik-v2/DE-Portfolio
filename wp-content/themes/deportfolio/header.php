<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/fullpage.min.css" />
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/style.css" />
  <meta charset="<?php bloginfo('charset'); ?>" />
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>
  <div id="header">
    <nav id="menu">
      <a class="menu-links active" data-menuanchor="deSec" href="#deSec">DE</a>
      <a class="menu-links" data-menuanchor="dmSec" href="#dmSec">DM</a>
      <a class="menu-links" data-menuanchor="uiSec" href="#uiSec">UX/UI</a>
      <a class="menu-links" data-menuanchor="logoSec" href="#logoSec"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/fav.ico" alt="Logo" /></a>
    </nav>
  </div>
  <div id="fullpage">