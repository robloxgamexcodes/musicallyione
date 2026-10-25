<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>XML Sitemap | MusicallyDown</title>
        <style>
          body{font:14px/1.5 system-ui,Segoe UI,Arial,sans-serif;margin:0;padding:24px;color:#18181b;background:#fafafa}
          h1{font-size:20px;margin:0 0 4px} p{margin:0 0 16px;color:#52525b}
          table{border-collapse:collapse;width:100%;background:#fff;border:1px solid #e4e4e7}
          th,td{text-align:left;padding:8px 12px;border-bottom:1px solid #f0f0f2;vertical-align:top}
          th{background:#f4f4f5;font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:#52525b}
          a{color:#d90f45;text-decoration:none;word-break:break-all} a:hover{text-decoration:underline}
          .lang{display:inline-block;margin:0 6px 2px 0;padding:0 6px;border:1px solid #e4e4e7;border-radius:4px;font-size:12px}
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <xsl:choose>
          <xsl:when test="sm:sitemapindex">
            <p>Sitemap index: <xsl:value-of select="count(sm:sitemapindex/sm:sitemap)"/> sitemap file(s).</p>
            <table>
              <tr><th>#</th><th>Sitemap</th><th>Last modified</th></tr>
              <xsl:for-each select="sm:sitemapindex/sm:sitemap">
                <tr>
                  <td><xsl:value-of select="position()"/></td>
                  <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
                  <td><xsl:value-of select="sm:lastmod"/></td>
                </tr>
              </xsl:for-each>
            </table>
          </xsl:when>
          <xsl:otherwise>
            <p><xsl:value-of select="count(sm:urlset/sm:url)"/> URLs, grouped by language (en, es, id, vi). Each URL lists its hreflang alternates.</p>
            <table>
              <tr><th>#</th><th>URL</th><th>Last modified</th><th>Alternates (hreflang)</th></tr>
              <xsl:for-each select="sm:urlset/sm:url">
                <tr>
                  <td><xsl:value-of select="position()"/></td>
                  <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
                  <td><xsl:value-of select="sm:lastmod"/></td>
                  <td>
                    <xsl:for-each select="xhtml:link">
                      <a class="lang" href="{@href}"><xsl:value-of select="@hreflang"/></a>
                    </xsl:for-each>
                  </td>
                </tr>
              </xsl:for-each>
            </table>
          </xsl:otherwise>
        </xsl:choose>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
