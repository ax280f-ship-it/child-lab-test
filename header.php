<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    Здесь был я и АНЯ1+1
    <?php
          $menu = wp_nav_menu( [
      'theme_location'  => 'my_location',

      'container'       => 'nav',
      'container_class' => 'nav headernav',
      'menu_class'      => 'headerlist',
      'menu_id'         => 'my-id',

      'echo' => false,
    ] );

      echo ( $menu );

      
    ?>
    <div class="swichers">
         переключалка333
    </div>