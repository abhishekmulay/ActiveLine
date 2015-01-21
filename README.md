# ActiveLine
A jQuery plugin for displaying an underline below the active list item in navigation

## Using the plugin

### Create basic navigation markup
```
<nav class="activeLine-nav">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```
### Call the plugin

```
 $(function() {
        $(".activeLine-nav").activeLine();
 });
```
### Configurations

### You can configure the animation speed

###Share and enjoy!

```
 $(function() {
   $(".activeLine-nav").activeLine({
     "animationSpeed" : 200
   });
});
```

