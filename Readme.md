# Blocks Front-End Templater Guide
* [Page Templates](#page_templates)
** [Global Helpers](#pt_global)
** [Text Regions](#pt_text)
** [Image Regions](#pt_image)
	

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
<a name="pt_text"/>
### Text Regions
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
<a name="pt_image"/>
### Image Regions
#### Fixed Width/Height Image Regions
Allows images to be uploaded, but restricts images to an exact pixel width and height
```
<%= render :image => 'main_img',  :default => "http://placehold.it/400x200", :width => 400, :height => 200 %>
```
#### Variable Width/Height Image Regions
Width and/or height range can be specified - ie. Width can be fixed, while height is variable.
```
<%= render :image => 'variable_img', :default => "http://placehold.it/400x200", :width => 100..600, :height => 100..400 %>
```
<a name="pt_link"/>
### Link Regions
#### Text-based Link Regions
```
<%= render :link => "footer_link", :text => "Footer Link 1", :text_editable => true %>
```
#### Text-based Link Regions With In-Line Attributes (for EDMS)
```
<%= render :link => "footer_link", :text => "Footer Link 1", :text_editable => true %>
```
