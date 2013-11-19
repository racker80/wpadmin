'use strict';

/* Data */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.data', ['LocalStorageModule'])

  .service('Data', function($rootScope, localStorageService){
    var ths = this;


    var localArray = function(key, value){
      var ths = this;
      var arr = [];
      if(value) {
        arr = value;
      }
      if(localStorageService.get(key)) {
        arr = localStorageService.get(key);
      }
      arr.push = function(){
        Array.prototype.push.apply(this,arguments);
        return localStorageService.add(key, arr);
      }
      arr.splice = function(){
        Array.prototype.splice.apply(this,arguments);
        return localStorageService.add(key, arr);
      }
      arr.clear = function(){
        arr.length=0;
        return localStorageService.add(key, arr);
      }
      arr.random = function() {
        var i = arr.length, j, temp;
        if ( i == 0 ) return;
        while ( --i ) {
          j = Math.floor( Math.random() * ( i + 1 ) );
          temp = this[i];
          this[i] = arr[j];
          this[j] = temp;
        }
        console.log(this)
        return this;
      }
      return arr;
    };
    

    this.data = {
      sites: {
          mySites: [
            {
              url:'examplesite.com',
              image:'app/img/theme1.jpg',          
              status:'live',
              adminUrl:'example.com/wp-admin',
              managers:[],
              wordpress: {}
            },
            {
              url:'anotherexamplesite.com',
              image:'app/img/theme2.png',          
              status:'private',
              adminUrl:'example.com/wp-admin',
              managers:[],
              wordpress: {}
            },
            {
              url:'someothersite.com',
              image:'app/img/theme3.jpg',          
              status:'maintainence',
              adminUrl:'example.com/wp-admin',
              managers:[],
              wordpress: {}
            },
            {
              url:'agreateecommrcesite.com',
              image:'app/img/theme4.jpg',          
              status:'maintainence',
              adminUrl:'example.com/wp-admin',
              managers:[],
              wordpress: {}
            },
            {
              url:'news.google.com',
              image:'app/img/screenshot1.png',          
              status:'live',
              adminUrl:'example.com/wp-admin',
              managers:[],
              wordpress: {}
            },
            {
              url:'pennyarcade.com',
              image:'app/img/theme1.jpg',          
              status:'live',
              adminUrl:'example.com/wp-admin',
              managers:[],
              wordpress: {}
            },
            {
              url:'believeitornot.net',
              image:'app/img/theme3.jpg',          
              status:'live',
              adminUrl:'example.com/wp-admin',
              managers:[],
              wordpress: {}
            },
            {
              url:'youknowtoomuch.com',
              image:'app/img/theme4.jpg',          
              status:'live',
              adminUrl:'example.com/wp-admin',
              managers:[],
              wordpress: {}
            },
            {
              url:'angularjs.com',
              image:'app/img/theme4.jpg',          
              status:'live',
              adminUrl:'example.com/wp-admin',
              managers:[],
              wordpress: {}
            },        
          ],
          managed: [
            {
              url:'managedsite.com',
              image:'app/img/theme2.png',
              status:'live',
              adminUrl:'managedsite.com/wp-admin',
              managers:[],
              wordpress: {}
            },
            {
              url:'believeitornot.net',
              image:'app/img/theme3.jpg',          
              status:'live',
              adminUrl:'example.com/wp-admin',
              managers:[],
              wordpress: {}
            },
            {
              url:'youknowtoomuch.com',
              image:'app/img/theme4.jpg',          
              status:'live',
              adminUrl:'example.com/wp-admin',
              managers:[],
              wordpress: {}
            },
            {
              url:'angularjs.com',
              image:'app/img/theme4.jpg',          
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
              image:'app/img/avatar.jpg',
              roles:['manager', 'account admin'],
              status:'pending',
            },
            {
              name:'Billy Joe',
              slug:'user-name',
              company: 'company name',
              email:'email@email.com',
              image:'app/img/avatar.jpg',
              roles:['manager'],
              status:'active',
            },
          ],
      },
      wordpress: {
        themes: [
          {
            name:'Product',
            image:'app/img/theme1.jpg',
            author:'ThemeAuthor',
            description:'product® responsive wordpress theme is best way to present your product. period. Theme is modern, clean, fully responsive with a lot of features …'
          },
          {
            name:'Blogger',
            image:'app/img/theme2.png',
             author:'ThemeAuthor',
           description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, pariatur, inventore, ut nobis animi voluptatum modi assumenda repellendus facere voluptate atque illo!'
          },
          {
            name:'PoliticalPress',
            image:'app/img/theme3.jpg',
             author:'ThemeAuthor',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, dicta maxime voluptatibus optio id neque expedita ipsa fugit.'
         },
          {
            name:'Sales Theme',
            image:'app/img/theme4.jpg',
             author:'ThemeAuthor',
           description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, maiores soluta amet impedit dolorem. Ullam.'
          },
          {
            name:'Hitched',
            image:'app/img/screenshot1.png',
             author:'ThemeAuthor',
           description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, enim officiis nulla quae expedita dolore eveniet vero.'
          }            
        ],
        plugins: [
          {
            author: '<a href="http://www.seodesignsolutions.com/">SEO Design Solutions</a>',
            author_profile: "http://profiles.wordpress.org/seo-design-solutions",
            homepage: "http://www.seodesignsolutions.com/wordpress-seo/",
            name: "Jetpack by wordpress",
            num_ratings: 245,
            rating: 84.4,
            requires: "3.5",
            short_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, magnam, sunt ex veniam quasi dolorem minus laborum consequatur eligendi expedita.",
            slug: "seo-ultimate",
            tested: "3.5.2",
            version: "7.6.1",
            bundles:['default']
          },     
          {
            author: '<a href="http://www.seodesignsolutions.com/">SEO Design Solutions</a>',
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
          },
          {
            author: '<a href="http://www.seodesignsolutions.com/">SEO Design Solutions</a>',
            author_profile: "http://profiles.wordpress.org/seo-design-solutions",
            homepage: "http://www.seodesignsolutions.com/wordpress-seo/",
            name: "W3 Total Cache",
            num_ratings: 245,
            rating: 84.4,
            requires: "3.5",
            short_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, quae ullam beatae fuga quisquam porro corrupti.",
            slug: "seo-ultimate",
            tested: "3.5.2",
            version: "7.6.1",
            bundles:[]
          },
          {
            author: '<a href="http://www.seodesignsolutions.com/">SEO Design Solutions</a>',
            author_profile: "http://profiles.wordpress.org/seo-design-solutions",
            homepage: "http://www.seodesignsolutions.com/wordpress-seo/",
            name: "WordPress SEO by Yoast",
            num_ratings: 245,
            rating: 84.4,
            requires: "3.5",
            short_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, nostrum, obcaecati, corporis, quod et maxime dolor consequatur modi sapiente est maiores officiis. Asperiores, doloribus, eos, nulla expedita voluptatibus recusandae perferendis facilis aspernatur harum exercitationem unde eligendi?",
            slug: "seo-ultimate",
            tested: "3.5.2",
            version: "7.6.1",
            bundles:[]
          },
          {
            author: '<a href="http://www.seodesignsolutions.com/">SEO Design Solutions</a>',
            author_profile: "http://profiles.wordpress.org/seo-design-solutions",
            homepage: "http://www.seodesignsolutions.com/wordpress-seo/",
            name: "Limit Login Attempts",
            num_ratings: 245,
            rating: 84.4,
            requires: "3.5",
            short_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam provident autem in quam. Iste, sapiente totam dolore porro corrupti nobis pariatur exercitationem!",
            slug: "seo-ultimate",
            tested: "3.5.2",
            version: "7.6.1",
            bundles:[]
          },
          {
            author: '<a href="http://www.seodesignsolutions.com/">SEO Design Solutions</a>',
            author_profile: "http://profiles.wordpress.org/seo-design-solutions",
            homepage: "http://www.seodesignsolutions.com/wordpress-seo/",
            name: "Akismet",
            num_ratings: 245,
            rating: 84.4,
            requires: "3.5",
            short_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, amet, minus dolores quod distinctio recusandae nisi eaque delectus.",
            slug: "seo-ultimate",
            tested: "3.5.2",
            version: "7.6.1",
            bundles:[]
          },
          {
            author: '<a href="http://www.seodesignsolutions.com/">SEO Design Solutions</a>',
            author_profile: "http://profiles.wordpress.org/seo-design-solutions",
            homepage: "http://www.seodesignsolutions.com/wordpress-seo/",
            name: "TablePress",
            num_ratings: 245,
            rating: 84.4,
            requires: "3.5",
            short_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, corrupti, totam, possimus, eum quos quas a ad consequatur consectetur ullam dolorum id sit necessitatibus sequi temporibus?",
            slug: "seo-ultimate",
            tested: "3.5.2",
            version: "7.6.1",
            bundles:[]
          },
        ],
        packages: [
          
        ],
        bundles: ['default', 'ecommerce', 'security', 'social'],
        defaults: {
          pages:[
            {
              title:'Home'
            },
            {
              title:"About"
            },
            {
              title:"Contact"
            }
          ],
          themes:[
          {
            name:'Sales Theme',
            image:'app/img/theme4.jpg',
            author:'ThemeAuthor',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, maiores soluta amet impedit dolorem. Ullam.'
          },
          ],
          plugins:[],
          users:[],
          menus:[
            {
              name:'Menu',
              items:[]
            }
          ],
          options:[],
        }
      }
    }

    this.data.wordpress.themes.random = function(){
      var arr = this;
              var i = arr.length, j, temp;
        if ( i == 0 ) return;
        while ( --i ) {
          j = Math.floor( Math.random() * ( i + 1 ) );
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
        console.log(arr)
        return arr;
    }


    this.sites = {
      mySites:new localArray('mySites'),
      managed:new localArray('managed'),
      collaborators:new localArray('collaborators'),
    }
    this.wordpress = {
      themes:new localArray('themes'),
      plugins:new localArray('plugins'),
      options:new localArray('options'),
    }




    this.newsite = {
      defaults: angular.copy(this.wordpress.defaults),
      addPage: function(page){
        this.defaults.pages.push(page);
        page = "";
      },
      addMenu: function(menu) {
        this.defaults.menus.push(menu);
        menu="";
      },
      addThemes: function(list) {
        angular.each(list, function(value, index, context){
          console.log(value);
        })
      }
    }


    this.newpackage = {
      name: '',
      themes: [
              {
          name:'Sales Theme',
          image:'app/img/theme4.jpg',
           author:'ThemeAuthor',
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, maiores soluta amet impedit dolorem. Ullam.'
        },
      ],
      bundles:[],
      plugins: [],
    }


    this.addToPackage = function(key, value){
      ths.newpackage[key].push(value);
      return;
    }
    this.saveNewPackage = function() {
      ths.wordpress.packages.push(ths.newpackage);
      console.log(ths.wordpress.packages)
      this.newpackage = {
        name: '',
        themes: [],
        bundles:[],
        plugins: [],
      }
    }



    this.modal = {
      themes: [],
      plugins:[],
      wpuser:[],
    }

    return this;
    
  });



angular.module('myApp.dataFactory', [])
.factory('DataFactory', function(Data){


});