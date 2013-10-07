<?php
    require 'vendor/autoload.php';

    $app = new Slim(array(
        'templates.path' => __DIR__.'/templates/',
    ));
    
    require 'vendor/slim/extras/Views/TwigView.php';
    TwigView::$twigExtensions = array('Twig_Extensions_Slim',);
    
    $app->view('TwigView');



    $script_location = str_replace('/index.php', '', $_SERVER['SCRIPT_NAME']);
    $app->view()->getEnvironment()->addGlobal('baseurl', $script_location);
    



    $app->get('/', function() use($app) {
        $nav = array(
            'allsites'=>'active',
            'globalnav'=>array(
                            'sites'=>'active'
                            )
        );
        $app->render( 'pages/sites/sites.all.php', array('nav'=>$nav) );
        
    });

    $app->get('/sites/new', function() use($app) {
        $nav = array(
            'mysites'=>'active',
             'class'=>'only-icon nav-vertical',
                         'globalnav'=>array(
                            'sites'=>'active'
                            )
      );
        $app->render( 'pages/sites/sites.add.php', array('nav'=>$nav) );
        
    });

    $app->get('/sites/my-sites', function() use($app) {
        $nav = array(
            'mysites'=>'active',
             'globalnav'=>array(
                            'sites'=>'active'
                            )
      );
        $app->render( 'pages/sites/sites.my.php', array('nav'=>$nav) );
        
    });

    $app->get('/sites/managed', function() use($app) {
        $nav = array(
            'managed'=>'active',
             'globalnav'=>array(
                            'sites'=>'active'
                            )
      );
        $app->render( 'pages/sites/sites.managed.php', array('nav'=>$nav) );
        
    });    

    $app->get('/sites/(:id)', function($id) use($app) {
        $nav = array(
            'mysites'=>'active',
             'globalnav'=>array(
                            'sites'=>'active'
                            )
        );
        $app->render( 'pages/sites/sites.detail.php', array('nav'=>$nav) );
        
    });










    $app->get('/users', function() use($app) {
        $nav = array(
            'allsites'=>'active',
                        'globalnav'=>array(
                            'users'=>'active'
                            )
            );
        $app->render( 'pages/users/users.list.php', array('nav'=>$nav) );
        
    });









    $app->get('/wordpress/packages', function() use($app) {
        $nav = array(
            'packages'=>'active',
                        'globalnav'=>array(
                            'wordpress'=>'active'
                            )
            );
        $app->render( 'pages/wordpress/wordpress.packages.php', array('nav'=>$nav) );
        
    });
    $app->get('/wordpress/themes', function() use($app) {
        $nav = array(
            'themes'=>'active',
             'class'=>'only-icon nav-vertical',
                        'globalnav'=>array(
                            'wordpress'=>'active'
                            )
            );
        $app->render( 'pages/wordpress/wordpress.themes.php', array('nav'=>$nav) );
        
    });
    $app->get('/wordpress/plugins', function() use($app) {
        $nav = array(
            'plugins'=>'active',
                  'class'=>'only-icon nav-vertical',
                   'globalnav'=>array(
                            'wordpress'=>'active'
                            )
            );
        $app->render( 'pages/wordpress/wordpress.plugins.php', array('nav'=>$nav) );
        
    });



    
    $app->run();