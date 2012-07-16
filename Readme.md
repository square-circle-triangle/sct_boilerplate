# Blocks Front-End Templater Guide
* [Page Templates](#page_templates)
** Global Helpers](#pt_global)
	

<a name="page_templates"/>
## Page Templates
<a name="pt_global"/>
### Global Helpers
#### Title
Return the page title
```
<%= title %>
```
#### Description
Return the page description
```
<%= description %>
```
#### Keywords
Return a comma seperated list of tags
```
<%= keywords %>
```
#### Site Name
Returns the site name
```
//Full site name	
<%= site_name %>

//Site name without whitespace
<%= site_name_one_word %>

//site name with non-ascii characters and whitespace replaced with hyphens	
<%= site_name_clean %>
```
#### Time/Date
Return current year
```
<%= now.year %>
```


