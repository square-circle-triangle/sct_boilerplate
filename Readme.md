# Blocks Front-End Templater Guide
* [Page Templates](#page_templates)
** [Global Helpers](#pt_global)
** [Editable Regions](# pt_editable)
	

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
<a name="pt_editable"/>
### Editable Regions
#### Single Line Text Regions
For heading raw text. Allows character limits using `:maxlength` property.
```
<%= render :textual => 'heading_text', :default => 'Main Heading', :maxlength => '100' %>
```
#### Text Areas with TinyMCE Editor
Body text, allows client to add links and styling (ie. bullet points, bold, italic, H1 - H6) - set by adding `:type => :multi`
```
<%= render :textual => 'body_text', :default => "<p>Body Copy Goes Here</p>", :type=> :multi %>
```
