![](https://img.shields.io/github/size/nergel3/svelte-fullpage.js/src/index.svelte)
![](https://img.shields.io/npm/v/svelte-fullpage.js?color=green)

# [Svelte-fullpage.js]()
![logo](https://raw.githubusercontent.com/Nergel3/svelte-fullpage.js/master/resources/logo.jpg)
<p align="center">
Svelte wrapper for the <a target="_blank" href="https://github.com/alvarotrigo/fullPage.js/">fullpage.js library</a>.
</p>

### Installation

```
npm install svelte-fullpage.js
```

### Example

Live example [here](https://negrel.dev/svelte-fullpage.js/)
with [source code](https://github.com/negrel/svelte-fullpage.js-site)


[![example gif](https://raw.githubusercontent.com/Nergel3/svelte-fullpage.js/master/resources/example.gif)](https://nergel3.github.io/svelte-fullpage.js/)

Basic example :
```html
<script>
	import Fullpage from 'svelte-fullpage.js';

	const options = {
		navigation: true,
		responsiveWidth: 700,
		anchors: ['home', 'about-us', 'contact'],
		parallax: true,
		onLeave: function(origin, destination, direction){
			console.log("Leaving section" + origin.index);
		}
	}
</script>

<Fullpage {options}>
	<div class="section">Section 1</div>
	<div class="section">Section 2</div>
	<div class="section">Section 3</div>
</Fullpage>
```


### :stars: Show Your Support
Please give a :star: if this project helped you!

#### :scroll: License
GPLv3 © Alexandre Negrel

