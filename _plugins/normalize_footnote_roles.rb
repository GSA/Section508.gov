module NormalizeFootnoteRoles
  FOOTNOTE_ROLE_PATTERNS = [
    [' role="doc-noteref"', ''],
    [' role="doc-endnotes"', ''],
    [' role="doc-endnote"', ''],
    [' role="doc-backlink"', '']
  ].freeze

  def self.normalize(output)
    return output unless output&.include?('doc-')

    FOOTNOTE_ROLE_PATTERNS.reduce(output) do |html, (pattern, replacement)|
      html.gsub(pattern, replacement)
    end
  end
end

Jekyll::Hooks.register [:pages, :documents, :posts], :post_render do |doc|
  next unless doc.output_ext == '.html'

  doc.output = NormalizeFootnoteRoles.normalize(doc.output)
end
