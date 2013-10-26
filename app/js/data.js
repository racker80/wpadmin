'use strict';

/* Data */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.data', [])

  .service('Data', function(){
    
    this.sites = {
      mySites: [
        {
          url:'examplesite.com',
          image:'img/theme1.jpg',          
          status:'live',
          adminUrl:'example.com/wp-admin',
          managers:[],
          wordpress: {}
        },
        {
          url:'anotherexamplesite.com',
          image:'img/theme2.png',          
          status:'private',
          adminUrl:'example.com/wp-admin',
          managers:[],
          wordpress: {}
        },
        {
          url:'someothersite.com',
          image:'img/theme3.jpg',          
          status:'maintainence',
          adminUrl:'example.com/wp-admin',
          managers:[],
          wordpress: {}
        },
        {
          url:'agreateecommrcesite.com',
          image:'img/theme4.jpg',          
          status:'maintainence',
          adminUrl:'example.com/wp-admin',
          managers:[],
          wordpress: {}
        },
        {
          url:'news.google.com',
          image:'img/screenshot1.png',          
          status:'live',
          adminUrl:'example.com/wp-admin',
          managers:[],
          wordpress: {}
        },
        {
          url:'pennyarcade.com',
          image:'img/theme1.jpg',          
          status:'live',
          adminUrl:'example.com/wp-admin',
          managers:[],
          wordpress: {}
        },
        {
          url:'believeitornot.net',
          image:'img/theme3.jpg',          
          status:'live',
          adminUrl:'example.com/wp-admin',
          managers:[],
          wordpress: {}
        },
        {
          url:'youknowtoomuch.com',
          image:'img/theme4.jpg',          
          status:'live',
          adminUrl:'example.com/wp-admin',
          managers:[],
          wordpress: {}
        },
        {
          url:'angularjs.com',
          image:'img/theme4.jpg',          
          status:'live',
          adminUrl:'example.com/wp-admin',
          managers:[],
          wordpress: {}
        },        
      ],
      managed: [
        {
          url:'managedsite.com',
          image:'img/theme2.png',
          status:'live',
          adminUrl:'managedsite.com/wp-admin',
          managers:[],
          wordpress: {}
        },
        {
          url:'believeitornot.net',
          image:'img/theme3.jpg',          
          status:'live',
          adminUrl:'example.com/wp-admin',
          managers:[],
          wordpress: {}
        },
        {
          url:'youknowtoomuch.com',
          image:'img/theme4.jpg',          
          status:'live',
          adminUrl:'example.com/wp-admin',
          managers:[],
          wordpress: {}
        },
        {
          url:'angularjs.com',
          image:'img/theme4.jpg',          
          status:'live',
          adminUrl:'example.com/wp-admin',
          managers:[],
          wordpress: {}
        },          
      ],
      collaborators: [
        {
          name:'user name',
          slug:'user-name',
          company: 'company name',
          email:'email@email.com',
          image:'img/avatar.jpg',
          roles:['manager', 'account admin'],
          status:'pending',
        },
        {
          name:'Billy Joe',
          slug:'user-name',
          company: 'company name',
          email:'email@email.com',
          image:'img/avatar.jpg',
          roles:['manager'],
          status:'active',
        },
      ],
    }


    this.wordpress = {
      themes: [
        {
          name:'Product',
          image:'img/theme1.jpg',
          author:'ThemeAuthor',
          description:'product® responsive wordpress theme is best way to present your product. period. Theme is modern, clean, fully responsive with a lot of features …'
        },
        {
          name:'Blogger',
          image:'img/theme2.png',
           author:'ThemeAuthor',
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, pariatur, inventore, ut nobis animi voluptatum modi assumenda repellendus facere voluptate atque illo!'
        },
        {
          name:'PoliticalPress',
          image:'img/theme3.jpg',
           author:'ThemeAuthor',
          description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, dicta maxime voluptatibus optio id neque expedita ipsa fugit.'
       },
        {
          name:'Sales Theme',
          image:'img/theme4.jpg',
           author:'ThemeAuthor',
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, maiores soluta amet impedit dolorem. Ullam.'
        },
        {
          name:'Hitched',
          image:'img/screenshot1.png',
           author:'ThemeAuthor',
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, enim officiis nulla quae expedita dolore eveniet vero.'
        }            
      ],
      plugins: [
        {
          author: "<a href=\"http://www.seodesignsolutions.com/\">SEO Design Solutions</a>",
          author_profile: "http://profiles.wordpress.org/seo-design-solutions",
          homepage: "http://www.seodesignsolutions.com/wordpress-seo/",
          name: "Jetpack by wordpress",
          num_ratings: 245,
          rating: 84.4,
          requires: "3.5",
          short_description: "This all-in-one SEO plugin gives you control over title tags, noindex, meta tags, Open Graph, slugs, canonical, autolinks, 404 errors, rich snippets,",
          slug: "seo-ultimate",
          tested: "3.5.2",
          version: "7.6.1",
          bundles:['default']
        },     
        {
          author: "<a href=\"http://www.seodesignsolutions.com/\">SEO Design Solutions</a>",
          author_profile: "http://profiles.wordpress.org/seo-design-solutions",
          homepage: "http://www.seodesignsolutions.com/wordpress-seo/",
          name: "SEO Ultimate",
          num_ratings: 245,
          rating: 84.4,
          requires: "3.5",
          short_description: "This all-in-one SEO plugin gives you control over title tags, noindex, meta tags, Open Graph, slugs, canonical, autolinks, 404 errors, rich snippets,",
          slug: "seo-ultimate",
          tested: "3.5.2",
          version: "7.6.1",
          bundles:[]

        }

      ],
      packages: [],
      bundles: ['default', 'ecommerce', 'security', 'social'],
      defaults: {
        pages:['Home', 'About', 'Contact'],
        themes:[],
        plugins:[],
        users:[],
        menus:[
          {
            name:'Menu',
            items:[]
          }
        ],
      }
    }

    this.newsite = {
      defaults: angular.copy(this.wordpress.defaults),
    }



    
  });