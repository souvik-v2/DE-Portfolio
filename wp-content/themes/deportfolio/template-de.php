<?php
/*
Template Name: DE Portfolio
*/
get_header();
?>
      <section class="section s1" id="deSec1">
        <h1>Home Decoration</h1>
      </section>
      <section class="section s2" id="dmSec1">
        <h1>Different Styles</h1>
        <div class="description">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non nam
            inventore illum! Libero nisi optio consequuntur tenetur soluta
            debitis
          </p>
          <p>
            saepe eligendi, dicta velit at quod dolores asperiores facilis
            nostrum eius molestias et maxime earum? Tenetur nam magni quae
            tempore beatae rerum impedit quasi id iste sapiente, amet asperiores
            maxime eius.
          </p>
        </div>
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/chair2.png" class="chair c2" />
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/chair3.png" class="chair c1" />
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/chair1.png" class="chair c3" />
      </section>
      <section class="section s3" id="uiSec1">
        <h1>Amazing Quality</h1>
        <div class="slide">Slider 1</div>
        <div class="slide">Slider 2</div>
        <div class="slide">Slider 3</div>
      </section>
      <section class="section s4" id="logoSec1">
        <h1>Page4</h1>
        <a href="#dmSec"><button class="btn btn-animation">Case</button></a>
      </section>


<?php get_footer(); ?>