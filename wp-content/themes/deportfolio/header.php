<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
      rel="stylesheet"
    />
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/fullpage.min.css" />
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/style.css" />
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="header">
  <a href="#de">DE</a>
  <a href="#dm">DM</a>
  <a href="#ui">UX/UI</a>
  <a href="#logo"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/fav.ico" alt="Logo" /></a>
</div>
<div id="fullpage">
