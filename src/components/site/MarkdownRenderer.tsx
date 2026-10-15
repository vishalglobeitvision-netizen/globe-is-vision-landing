import { useState, useId } from "react";
import { Check, Copy } from "lucide-react";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  if (!content) return null;

  // Parse blocks
  const blocks = parseMarkdownBlocks(content);

  return (
    <div className={`space-y-5 text-slate-700 leading-relaxed text-base ${className}`}>
      {blocks.map((block, idx) => (
        <RenderBlock key={idx} block={block} />
      ))}
    </div>
  );
}

// Block Types
type Block =
  | { type: "heading"; level: number; text: string }
  | { type: "code"; lang: string; code: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "blockquote"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "hr" }
  | { type: "paragraph"; text: string };

function parseMarkdownBlocks(md: string): Block[] {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Fenced Code Block
    if (line.trim().startsWith("```")) {
      const lang = line.trim().slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      blocks.push({
        type: "code",
        lang: lang || "text",
        code: codeLines.join("\n"),
      });
      i++;
      continue;
    }

    // Horizontal Rule
    if (/^(---|___|\*\*\*)$/.test(line.trim())) {
      blocks.push({ type: "hr" });
      i++;
      continue;
    }

    // Headings: #, ##, ###, ####, #####, ######
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      blocks.push({
        type: "heading",
        level: headingMatch[1].length,
        text: headingMatch[2].trim(),
      });
      i++;
      continue;
    }

    // Blockquote: > text
    if (line.trim().startsWith(">")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      blocks.push({
        type: "blockquote",
        text: quoteLines.join("\n"),
      });
      continue;
    }

    // Markdown Table: starts with | and next line has |---
    if (
      line.trim().startsWith("|") &&
      line.trim().endsWith("|") &&
      i + 1 < lines.length &&
      lines[i + 1].trim().startsWith("|") &&
      /^[|\s-:]+$/.test(lines[i + 1].trim())
    ) {
      const headers = line
        .split("|")
        .slice(1, -1)
        .map((h) => h.trim());
      i += 2; // skip header and divider
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|")) {
        const row = lines[i]
          .split("|")
          .slice(1, -1)
          .map((c) => c.trim());
        rows.push(row);
        i++;
      }
      blocks.push({
        type: "table",
        headers,
        rows,
      });
      continue;
    }

    // Unordered List: - item, * item, + item
    if (/^(\s*[-*+]\s+)/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^(\s*[-*+]\s+)/.test(lines[i])) {
        items.push(lines[i].replace(/^(\s*[-*+]\s+)/, "").trim());
        i++;
      }
      blocks.push({
        type: "ul",
        items,
      });
      continue;
    }

    // Ordered List: 1. item
    if (/^(\s*\d+\.\s+)/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^(\s*\d+\.\s+)/.test(lines[i])) {
        items.push(lines[i].replace(/^(\s*\d+\.\s+)/, "").trim());
        i++;
      }
      blocks.push({
        type: "ol",
        items,
      });
      continue;
    }

    // Empty Line
    if (!line.trim()) {
      i++;
      continue;
    }

    // Regular Paragraph: accumulate contiguous non-empty lines
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith("```") &&
      !lines[i].trim().startsWith("#") &&
      !lines[i].trim().startsWith(">") &&
      !(lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|")) &&
      !/^(\s*[-*+]\s+)/.test(lines[i]) &&
      !/^(\s*\d+\.\s+)/.test(lines[i]) &&
      !/^(---|___|\*\*\*)$/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i]);
      i++;
    }

    if (paraLines.length > 0) {
      blocks.push({
        type: "paragraph",
        text: paraLines.join(" "),
      });
    }
  }

  return blocks;
}

function RenderBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "heading": {
      const Tag = (`h${Math.min(block.level, 6)}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6");
      const id = block.text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

      const classes = {
        1: "text-3xl sm:text-4xl font-extrabold text-slate-900 mt-10 mb-4 tracking-tight pt-2",
        2: "text-2xl sm:text-3xl font-bold text-slate-900 mt-8 mb-3 tracking-tight border-b border-slate-200/80 pb-2",
        3: "text-xl sm:text-2xl font-bold text-slate-900 mt-6 mb-2 tracking-tight",
        4: "text-lg sm:text-xl font-semibold text-slate-800 mt-5 mb-2",
        5: "text-base sm:text-lg font-semibold text-slate-800 mt-4 mb-2",
        6: "text-sm sm:text-base font-semibold text-slate-800 mt-4 mb-1",
      }[block.level] || "text-xl font-bold text-slate-900 mt-6 mb-2";

      return (
        <Tag id={id} className={classes}>
          <InlineContent text={block.text} />
        </Tag>
      );
    }

    case "code":
      return <CodeBlock lang={block.lang} code={block.code} />;

    case "table":
      return (
        <div className="my-6 w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100/80 text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i} className="px-5 py-3.5">
                    <InlineContent text={h} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {block.rows.map((row, rIdx) => (
                <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-5 py-3.5 text-slate-700">
                      <InlineContent text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "blockquote":
      return (
        <blockquote className="my-6 rounded-2xl border-l-4 border-blue-600 bg-gradient-to-r from-blue-50/70 to-indigo-50/30 p-5 text-slate-800 italic shadow-2xs">
          <InlineContent text={block.text} />
        </blockquote>
      );

    case "ul":
      return (
        <ul className="my-4 space-y-2 pl-2 list-none">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-2 size-1.5 rounded-full bg-blue-600 shrink-0" />
              <div className="text-slate-700">
                <InlineContent text={item} />
              </div>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="my-4 space-y-2 pl-2 list-none">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[11px] font-bold text-blue-700 mt-0.5">
                {i + 1}
              </span>
              <div className="text-slate-700">
                <InlineContent text={item} />
              </div>
            </li>
          ))}
        </ol>
      );

    case "hr":
      return <hr className="my-8 border-slate-200" />;

    case "paragraph":
      return (
        <p className="text-slate-700 leading-relaxed text-base sm:text-[17px]">
          <InlineContent text={block.text} />
        </p>
      );

    default:
      return null;
  }
}

function CodeBlock({ lang, code }: { lang: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-slate-200 shadow-xl">
      {/* Code Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/90 px-4 py-2.5 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-rose-500/80" />
            <span className="size-2.5 rounded-full bg-amber-500/80" />
            <span className="size-2.5 rounded-full bg-emerald-500/80" />
          </span>
          <span className="font-mono text-slate-300 font-semibold uppercase tracking-wider pl-2 text-[11px]">
            {lang}
          </span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="size-3.5" />
              <span>Copy code</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body */}
      <pre className="overflow-x-auto p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Inline Markdown Parser
function InlineContent({ text }: { text: string }) {
  // Parse inline elements: `code`, **bold**, *italic*, [link](url)
  const elements = parseInline(text);
  return <>{elements}</>;
}

function parseInline(text: string): React.ReactNode[] {
  if (!text) return [];

  // Tokenize regex for inline elements
  // 1: `code`
  // 2: **bold** or __bold__
  // 3: *italic* or _italic_
  // 4: [text](url)
  // 5: ~~strikethrough~~
  const regex = /(`[^`]+`|\*\*[^*]+\*\*|__[^_]+__|~~[^~]+~~|\[[^\]]+\]\([^)]+\)|\*[^*]+\*|_[^_]+_)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (!part) return null;

    // Inline code: `code`
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      return (
        <code
          key={index}
          className="rounded-md border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[0.88em] font-semibold text-blue-700"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    // Bold: **text** or __text__
    if (
      (part.startsWith("**") && part.endsWith("**") && part.length > 4) ||
      (part.startsWith("__") && part.endsWith("__") && part.length > 4)
    ) {
      return (
        <strong key={index} className="font-bold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Strikethrough: ~~text~~
    if (part.startsWith("~~") && part.endsWith("~~") && part.length > 4) {
      return (
        <del key={index} className="line-through text-slate-400">
          {part.slice(2, -2)}
        </del>
      );
    }

    // Links: [text](url)
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={index}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 underline decoration-blue-300 underline-offset-2 hover:text-blue-800"
        >
          {linkMatch[1]}
        </a>
      );
    }

    // Italic: *text* or _text_
    if (
      (part.startsWith("*") && part.endsWith("*") && part.length > 2) ||
      (part.startsWith("_") && part.endsWith("_") && part.length > 2)
    ) {
      return (
        <em key={index} className="italic text-slate-800">
          {part.slice(1, -1)}
        </em>
      );
    }

    return part;
  });
}
