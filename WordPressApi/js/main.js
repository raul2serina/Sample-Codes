// Title: WordPress REST API Sample
// Author:  Raul Serina II
// Date: 18 December 2018
// This is a JQuery Single Page Application program that creates a website using the data or content 
// from the URL you specified in the RESTURL. It uses Twitter Bootsrap for presentation.

jQuery(document).ready(function ($) {

    // REST URL variable
    const RESTURL = 'http://www.ihaptravel.com/wp-json/'

    var app = {
        
        init : function() {
            
            this.getSiteData()
            this.loadPosts()
            this.loadCategories()
            this.loadEvents()
            
        },
        
        loadEvents : function() {
            
            $( '#main-content' ).on( 'click', '.blog-post h3', this.loadSinglePost )
            $( '#main-content' ).on( 'click', '.blog-post .thumbnail', this.loadSinglePost )
            
        },

        // Retireving data from API endpoints
        
        // Getting site title and description
        getSiteData : function() {
            
            $.get( RESTURL )
                .done( function( response ) {
                    $( '.site-title' ).html( response.name )
                    $( '.description' ).html( response.description )
                })
                .fail( function() {
                    alert( 'failed to call specified URL' )
                })

        },
        
        // Loading posts
        loadPosts : function() {
            
            var url = RESTURL + 'wp/v2/posts?_embed'
            
            $.get( url )
                .done( function( response ) {
                    
                    var posts = {
                        posts: response
                    }
                    
                    var template = $( '#blog-post-template' ).html()
                    var output = $( '#main-content' )
                                        
                    var result = Mustache.to_html( template, posts )
                    output.append( result )
                    
                })
                .fail( function() {
                    alert( 'cannot load posts' )
                })
            
        },
        
        // Loading categories
        loadCategories : function() {
            
            var url = RESTURL + 'wp/v2/categories'
            
            $.get( url )
                .done( function( response ) {
                    
                    var categories = {
                        categories : response
                    }
                    
                    var template = $( '#blog-categories-template' ).html()
                    var output = $( '#categories' )
                                        
                    var result = Mustache.to_html( template, categories )
                    output.append( result )
                    
                })
                .fail( function() {
                    alert( 'cannot load categories' )
                })
            
        },
        
        // Loading single post
        loadSinglePost : function() {
            
            var id = Math.abs( $( this ).parent( '.blog-post' ).data( 'id' ) )
            var url = RESTURL + 'wp/v2/posts/' + id + '?_embed'
            
            $.get( url )
                .done( function( response ) {
                 
                    var template = $( '#single-post-template' ).html()
                    var output = $( '#main-content' )
                                        
                    var result = Mustache.to_html( template, response )
                    output.html( result )
                    
                })
                .fail( function() {
                    alert( 'cannot load post' )
                })
            
        }
   
        
    }

    app.init();

});
