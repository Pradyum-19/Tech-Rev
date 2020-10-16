<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
<xsl:template match="/"> 
<html> 
<body> 
<h1 align="center">Job-Host</h1> 
<table border="3" align="center"> 
<tr> 
	<th>Name</th> 
	<th>Role</th> 
	<th>Experience</th>
	<th>Working</th> 
</tr> 
	<xsl:for-each select="jtypes/jinfo"> 
<tr> 
	<td><xsl:value-of select="name"/></td> 
	<td><xsl:value-of select="role"/></td> 
	<td><xsl:value-of select="exp"/></td> 
	<td><xsl:value-of select="working"/></td> 
</tr> 
	</xsl:for-each> 
</table> 
</body> 
</html> 
</xsl:template> 
</xsl:stylesheet> 
