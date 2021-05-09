---
title: 'Nested Loops'
pageIntro: 'Display nested loops to render multiple collections and levels. Topics and sub-topics.'
shortDescription: 'Display nested loops to render multiple collections.'
metaTitle: ''
metaDesc: ''
tags: 'collections'
layout: 'layouts/topic.html'
---

<h3>The template layout, for example layouts/topic-overview.html</h3>

``` html
<!-- layout: 'layouts/topic-overview.html' -->

{& block content &}

<!-- Main topics -->
{& for item in collections[ collection ] &}	

<!-- Main topics title (Selectors in this example) -->
<h2 id="{) item.data.title (}">{) item.data.title (}</h2>

	<!-- Sub topics -->
	<ul>
	{& for item in collections[ item.data.collection ] &}
		<!-- Sub topics title (document.querySelectorAll() in this example) -->
		<li>{) item.data.title (}</li>
	{& endfor &}
	</ul>				

{& endfor &}

{& endblock &}	
```

<h3>Parent collection .md</h3>

<p>To create the overview page their must be a parent. In this example we use a JavaScript overview page. Inside the .md file we create the collection JavaScript.</p>

``` md
---
title: 'JavaScript'
collection: 'javascript' 
layout: 'layouts/topic-overview.html'
---
```

<h3>Main topic .md</h3>

<p>Create a directory called /JavaScript/ inside the /src/ directory. Inside the JavaScript directory create a new .md file called the name you want for your topic. In this example we use 'Selectors'.</p>

``` md
---
title: 'Selectors'
collection: 'selectors'
tags: 'javascript'
---
```

<h3>Sub-topic .md</h3>

<p>Inside the new directory we create a new directory 'selectors' (named just like the topic we just created) to keep this organised in case more topics will we added in the future. Inside the new directory 'selectors' we can create the .md file for the sub-topic. In this case document.selectorAll().</p>

``` md
---
title: 'document.querySelectorAll()'
tags: 'selectors'
layout: 'layouts/topic.html'
---
```