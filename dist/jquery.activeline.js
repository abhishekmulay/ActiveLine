/*
 *  jQuery Activeline - v0.1
 *  A jquery plugin for making navigation with activeline.
 *  
 *
 *  Made by Abhishek Mulay
 *  Under MIT License
 */
/*!
  jQuery ActiveLine plugin
  @name jquery.activeline.js
  @author Abhishek Mulay @MulayAbhishek
  @version 1.0
  @date 01/01/2013
  @category jQuery Plugin
  @copyright (c) 2015 Abhishek Mulay
  @license Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*/

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

	"use strict";
	
		// defaults here
		var pluginName = "activeLine",
				defaults = {
				animationSpeed: "200"
		};

		// The actual plugin constructor
		function ActiveLine ( navigation, options ) {
				this.navigation = $(navigation);
				// jQuery has an extend method which merges the contents of two or
				// more objects, storing the result in the first object. The first object
				// is generally empty as we don't want to alter the default options for
				// future instances of the plugin
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init(this.navigation);
				this.activeLine = this.navigation.find(".activeLine");
		}

		// Avoid ActiveLine.prototype conflicts
		$.extend(ActiveLine.prototype, {
				init: function (navigation) {
						var self = this;
						self.bindEvents(navigation);
						self.addActiveLine(navigation);
				},
				bindEvents : function(navigation){
					var self = this;
					navigation.find("ul li").on("mouseenter",function(){
						self.moveActiveLine($(this));
					});
					navigation.find("ul li").bind("click",function(){
						console.log("clicked me ",this);
					});
				},
				addActiveLine: function(navigation){
					var activeLine = $("<li class='activeLine'></li>");
					navigation.find("ul").append(activeLine);
					var firstLi = navigation.find("ul li:first");
					activeLine.css("left",firstLi.position().left);
					this.activeLine = activeLine;
				},
				moveActiveLine : function(movedElement){
					var newLeft = movedElement.position().left;
					// this.activeLine.css("left",newLeft);
					var animationSpeed = this.settings.animationSpeed; 
					this.activeLine.animate({
						left : newLeft
					},animationSpeed);
				}
				
		});

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function ( options ) {
			this.each(function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
					$.data( this, "plugin_" + pluginName, new ActiveLine( this, options ) );
				}
			});

				// chain jQuery functions
				return this;
			};

})( jQuery, window, document );
