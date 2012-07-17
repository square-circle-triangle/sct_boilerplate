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
## Editable Regions
Editable Regions define areas of a template that can have their content set by a user of Blocks.
Blocks offers the following Editable Regions:
- Text region `:textual`
- Link region `:link`
- Image region `:image`
- Media region `:media`

### Syntax Overview
Declare the type of region to render:	`<%= render :region_type`
Set the unique name of the region:	`<%= render :region_type => 'unique_name'` 

*Each variable name must be unique within its document.  Region names are restricted to alphanumerics and underscores.  Hyphens will not work.* 

Most regions allow for *default* content to be set, using the `:default` property, exceptions are link regions (see below)

### Text Regions
#### Single Line Text Regions
For single-line raw text input. 
Allows character limits using `:maxlength` property.
```
<%= render :textual => 'region_name', :default => 'Lorem Ipsum', :maxlength => '100' %>
```

#### Text Areas with TinyMCE Editor
For TinyMCE wysiwyg text input. 
Set by defining `:type => :multi`
```
<%= render :textual => ' region_name ', :default => "<p>Lorem Ipsum</p>", :type=> :multi %>
```

#### Text Areas *without* TinyMCE Editor
For multi-line text input, *without* a wysiwyg editor. 
Set by defining `:type => :multi` *and* `:wysiwyg => false`
```
<%= render :textual => ' region_name ', :default => "<p>Lorem Ipsum</p>", :type=> :multi, :wysiwyg => false %>
```

### Image Regions
#### Fixed Width/Height Image Regions
Allows images to be uploaded, but restricts images to an exact pixel dimension. *Blocks provides image cropping for images that exceed the set dimensions.*
Default placeholder image is set using the `:default` property.
```
<%= render :image => 'region_name',  :default => "http://placehold.it/400x200", :width => 400, :height => 200 %>
```

#### Variable Width/Height Image Regions
Variable Width and/or height range can be specified using the following syntax `:width => 100..200` 
```
<%= render :image => 'region_name', :default => "http://placehold.it/400x200", :width => 100..600, :height => 100..400 %>
```
*Note that width dimensions can be fixed, while height is variable and visa versa.*

#### Media Regions
Media Regions follow the same rules as Image Regions, but allow for images, video or swf files to be uploaded.
```
<%= render :media => 'region_name', :default => "http://placehold.it/400x200", :width => 100..600, :height => 100..400 %>
```

### Link Regions
#### Text-based Link Regions
Link regions allow extra properties:
- `:text`
- `:title`
- `:new_window` *Boolean*
- `:link_kind`
- `:link_value`
- `:subject`

```
<%= render :link => "region_name", :text => "Default Link Text", :link_value => '#', :text_editable => true %>
```

Link regions also allow for in-line attributes using the `:html` property. Particularly useful for styling EDMs

```
<%= render :link => " region_name", :text => "Default Link Text", :link_value => '#', :text_editable => true, :html => { :style => "margin: 20px;", :align => 'right'} %>
```

#### Wrapping Link Regions
For link regions that don't contain text, but rather, *wrap* blocks of content, including other editable regions, employ the following syntax: 
```
<% render :link => 'region_name', :text_editable => false do %>
		<!-- HTML content goes here. Other editable regions, ie. Image Regions can also go here -->
<% end %>
```

## Repeating Regions
Blocks allows for sections of content, including editable regions to be repeated by users.  Control over the maximum repeats is handled by the `:max_repeats` property.
```
<% render :region => 'region_name', :max_repeats => 5 do %>
		<!-- HTML content / Blocks editable regions go here. 
		NB: You CANNOT have repeating regions inside repeating regions -->
<% end %>
```

