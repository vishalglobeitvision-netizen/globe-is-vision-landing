import { useEffect, useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ConsultationModal } from "@/components/site/ConsultationModal";
import { MarkdownRenderer } from "@/components/site/MarkdownRenderer";
import { fetchBlogs, type BlogPost, type BlogApiResponse } from "@/data/blogsData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  Clock,
  Eye,
  Loader2,
  RefreshCw,
  Search,
  Share2,
  Sparkles,
  Tag,
  User,
} from "lucide-react";
import { toast } from "sonner";

const TITLE = "Tech Insights & Engineering Blogs | Globe IT Vision";
const DESCRIPTION =
  "Explore deep-dive technical articles on modern API design, microservices, cloud infrastructure, AI workflows, and distributed systems by Globe IT Vision engineers.";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/blogs" },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
});

function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<BlogApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Active Blog for reading full markdown post
  const [activeBlog, setActiveBlog] = useState<BlogPost | null>(null);

  // Consultation Modal state
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState("Custom Software Development");

  // Share state
  const [copiedShare, setCopiedShare] = useState(false);

  // Load blogs from API
  const loadBlogs = async (pageToLoad: number) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchBlogs(pageToLoad, 9);
      setData(res);
    } catch (err: any) {
      console.error("Failed to load blogs:", err);
      setError(err?.message || "Failed to load blog posts. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBlogs(currentPage);
  }, [currentPage]);

  // Check URL query for direct slug deep-linking
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    if (slug && data?.results) {
      const match = data.results.find((b) => b.slug === slug);
      if (match) {
        setActiveBlog(match);
      }
    }
  }, [data]);

  // Extract all unique tags
  const allTags = useMemo(() => {
    if (!data?.results) return [];
    const set = new Set<string>();
    data.results.forEach((b) => b.tags?.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [data]);

  // Filtered blogs for display
  const filteredBlogs = useMemo(() => {
    if (!data?.results) return [];
    return data.results.filter((b) => {
      const matchesSearch =
        searchQuery === "" ||
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag = !selectedTag || b.tags?.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [data, searchQuery, selectedTag]);

  // Featured blog (first featured or first blog)
  const featuredBlog = useMemo(() => {
    if (!data?.results || data.results.length === 0) return null;
    return data.results.find((b) => b.is_featured) || data.results[0];
  }, [data]);

  const handleSelectBlog = (blog: BlogPost) => {
    setActiveBlog(blog);
    window.scrollTo({ top: 0, behavior: "smooth" });
    const url = new URL(window.location.href);
    url.searchParams.set("slug", blog.slug);
    window.history.pushState({}, "", url.toString());
  };

  const handleBackToList = () => {
    setActiveBlog(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
    const url = new URL(window.location.href);
    url.searchParams.delete("slug");
    window.history.pushState({}, "", url.toString());
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    toast.success("Article link copied to clipboard!");
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Sticky White Navbar */}
      <Navbar />

      {activeBlog ? (
        /* ================= FULL ARTICLE READING VIEW ================= */
        <main className="py-10 lg:py-16">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            {/* Navigation back bar */}
            <div className="mb-8 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBackToList}
                className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-xs transition-all hover:bg-slate-50 hover:text-blue-600 cursor-pointer"
              >
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                <span>All Articles</span>
              </button>

              <button
                type="button"
                onClick={handleShare}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-xs transition-colors hover:bg-slate-50 hover:text-blue-600 cursor-pointer"
              >
                {copiedShare ? (
                  <>
                    <Check className="size-4 text-emerald-600" />
                    <span className="text-emerald-600">Copied</span>
                  </>
                ) : (
                  <>
                    <Share2 className="size-4" />
                    <span>Share</span>
                  </>
                )}
              </button>
            </div>

            {/* Article Header Card */}
            <article className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm">
              <div className="p-6 sm:p-10 lg:p-12">
                {/* Tag Pills */}
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {activeBlog.tags?.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 border border-blue-100"
                    >
                      #{t}
                    </span>
                  ))}
                  {activeBlog.is_featured && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 border border-amber-200">
                      <Sparkles className="size-3" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                  {activeBlog.title}
                </h1>

                {/* Meta Bar */}
                <div className="mt-6 flex flex-wrap items-center gap-y-3 gap-x-6 border-y border-slate-100 py-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xs">
                      {activeBlog.author_name ? activeBlog.author_name[0] : "V"}
                    </div>
                    <span className="font-semibold text-slate-800">{activeBlog.author_name}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Calendar className="size-4 text-slate-400" />
                    <span>{formatDate(activeBlog.published_at)}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Clock className="size-4 text-slate-400" />
                    <span>{activeBlog.read_time} min read</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Eye className="size-4 text-slate-400" />
                    <span>{activeBlog.views.toLocaleString()} views</span>
                  </div>
                </div>

                {/* Featured Image */}
                {activeBlog.featured_image && (
                  <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                    <img
                      src={activeBlog.featured_image}
                      alt={activeBlog.title}
                      className="w-full max-h-[440px] object-cover"
                    />
                  </div>
                )}

                {/* Excerpt Summary Box */}
                {activeBlog.excerpt && (
                  <div className="my-8 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/80 to-indigo-50/40 p-5 sm:p-6 text-sm sm:text-base text-slate-700 leading-relaxed italic">
                    <span className="font-bold text-blue-900 not-italic block mb-1">
                      Key Takeaway:
                    </span>
                    {activeBlog.excerpt}
                  </div>
                )}

                {/* Markdown Content */}
                <div className="mt-8 border-t border-slate-100 pt-8">
                  <MarkdownRenderer content={activeBlog.content} />
                </div>
              </div>

              {/* Author Footer Card */}
              <div className="border-t border-slate-100 bg-slate-50/70 p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-5">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-black text-xl shadow-md">
                  {activeBlog.author_name ? activeBlog.author_name[0] : "V"}
                </div>
                <div className="text-center sm:text-left space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">
                    Written by {activeBlog.author_name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
                    Engineering and cloud architecture specialist at Globe IT Vision, focusing on high-concurrency systems, enterprise API design, and scalable microservice infrastructure.
                  </p>
                </div>
              </div>
            </article>

            {/* Read Next Recommendations */}
            <div className="mt-14 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h3 className="text-xl font-bold text-slate-900">Recommended Reading</h3>
                <button
                  type="button"
                  onClick={handleBackToList}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore all</span>
                  <ArrowRight className="size-3.5" />
                </button>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {data?.results
                  ?.filter((b) => b.id !== activeBlog.id)
                  .slice(0, 2)
                  .map((rec) => (
                    <div
                      key={rec.id}
                      onClick={() => handleSelectBlog(rec)}
                      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-md cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                          <Clock className="size-3.5" />
                          <span>{rec.read_time} min read</span>
                          <span>•</span>
                          <span>{formatDate(rec.published_at)}</span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {rec.title}
                        </h4>
                        <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {rec.excerpt}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                        <span>Read article</span>
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Consultation Banner */}
            <div className="mt-16 text-center rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 sm:p-12 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">
                Ready to Implement These Architectural Patterns?
              </h3>
              <p className="mx-auto mt-2 max-w-lg text-sm text-slate-600">
                Speak directly with Globe IT Vision senior engineering leads to design high-performance architectures tailored for your organization.
              </p>
              <div className="mt-6 flex justify-center">
                <Button
                  onClick={() => {
                    setConsultationService(activeBlog.title || "Custom Software Development");
                    setConsultationOpen(true);
                  }}
                  className="rounded-full bg-blue-600 px-7 font-semibold text-white hover:bg-blue-700 shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  Schedule Engineering Discovery
                </Button>
              </div>
            </div>
          </div>
        </main>
      ) : (
        /* ================= BLOG LISTING VIEW ================= */
        <main>
          {/* Hero Banner with Dark Midnight Gradient */}
          <header className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 text-white py-16 lg:py-24">
            <div
              className="pointer-events-none absolute -top-40 left-1/2 h-[450px] w-[800px] -translate-x-1/2 rounded-full opacity-40 blur-[130px]"
              style={{ background: "linear-gradient(120deg, #2563eb, #06b6d4)" }}
              aria-hidden
            />

            <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md">
                <Sparkles className="size-3.5" />
                <span>Globe IT Vision Engineering Journal</span>
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
                Insights, Engineering &amp;{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  Architecture
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
                Deep-dives into distributed architectures, AI agents, cloud engineering, modern APIs,
                and high-scale real-time software systems.
              </p>

              {/* Quick Metric Bar */}
              <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    {data?.count || 16}+
                  </div>
                  <div className="mt-1 text-xs text-slate-400">Published Deep Dives</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
                  <div className="mt-1 text-xs text-slate-400">Production Code Tested</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">15K+</div>
                  <div className="mt-1 text-xs text-slate-400">Monthly Engineers Reading</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">Zero</div>
                  <div className="mt-1 text-xs text-slate-400">Fluff / Pure Tech Focus</div>
                </div>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
            {/* Search & Tag Filter Bar */}
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-full">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input
                    placeholder="Search articles by title, topic, or keyword (e.g. GraphQL, Microservices, Python)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-11 border-slate-200 bg-slate-50/60 focus:bg-white text-slate-900 rounded-xl"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-700"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <Button
                  variant="outline"
                  onClick={() => loadBlogs(currentPage)}
                  disabled={loading}
                  className="shrink-0 h-11 rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 gap-2 cursor-pointer w-full sm:w-auto"
                >
                  <RefreshCw className={`size-4 ${loading ? "animate-spin" : ""}`} />
                  <span>Refresh</span>
                </Button>
              </div>

              {/* Tag Filter Pills */}
              {allTags.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
                    <Tag className="size-3" />
                    Topics:
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedTag(null)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                      selectedTag === null
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    All Topics
                  </button>
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                      className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                        selectedTag === tag
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Featured Post Spotlight (shown when no search query is active) */}
            {!searchQuery && !selectedTag && featuredBlog && (
              <div className="mt-12">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-1.5">
                  <Sparkles className="size-4 text-amber-500" />
                  <span>Featured Architecture Deep-Dive</span>
                </div>

                <div
                  onClick={() => handleSelectBlog(featuredBlog)}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl cursor-pointer"
                >
                  <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex flex-wrap items-center gap-2">
                        {featuredBlog.tags?.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-blue-50 px-3 py-0.5 text-xs font-bold text-blue-700"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                        {featuredBlog.title}
                      </h2>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-3">
                        {featuredBlog.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2">
                        <span className="font-semibold text-slate-800">
                          {featuredBlog.author_name}
                        </span>
                        <span>•</span>
                        <span>{formatDate(featuredBlog.published_at)}</span>
                        <span>•</span>
                        <span>{featuredBlog.read_time} min read</span>
                        <span>•</span>
                        <span>{featuredBlog.views.toLocaleString()} views</span>
                      </div>

                      <div className="pt-2">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                          <span>Read Full Article</span>
                          <ArrowRight className="size-4" />
                        </span>
                      </div>
                    </div>

                    <div className="lg:col-span-5 overflow-hidden rounded-2xl border border-slate-100 bg-slate-100">
                      {featuredBlog.featured_image ? (
                        <img
                          src={featuredBlog.featured_image}
                          alt={featuredBlog.title}
                          className="h-64 sm:h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-64 sm:h-72 w-full bg-gradient-to-br from-slate-900 to-indigo-950 flex flex-col items-center justify-center p-6 text-white text-center">
                          <BookOpen className="size-12 text-cyan-400 mb-3" />
                          <span className="text-sm font-bold text-slate-200">
                            {featuredBlog.title}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Articles Grid */}
            <div className="mt-14">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-8">
                <h3 className="text-xl font-bold text-slate-900">
                  {selectedTag
                    ? `Articles tagged with #${selectedTag}`
                    : searchQuery
                      ? `Search results for "${searchQuery}"`
                      : "Latest Engineering Articles"}
                </h3>
                <span className="text-xs text-slate-500">
                  Showing {filteredBlogs.length} of {data?.count || filteredBlogs.length} articles
                </span>
              </div>

              {loading ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 py-12">
                  {[1, 2, 3, 4, 5, 6].map((sk) => (
                    <div
                      key={sk}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs animate-pulse space-y-4"
                    >
                      <div className="h-44 w-full rounded-2xl bg-slate-200/70" />
                      <div className="h-4 w-1/3 rounded-md bg-slate-200/70" />
                      <div className="h-6 w-3/4 rounded-md bg-slate-200/70" />
                      <div className="h-12 w-full rounded-md bg-slate-100" />
                    </div>
                  ))}
                </div>
              ) : error ? (
                <div className="rounded-3xl border border-rose-200 bg-rose-50/60 p-10 text-center space-y-3 my-8">
                  <p className="text-sm font-semibold text-rose-700">{error}</p>
                  <Button
                    onClick={() => loadBlogs(currentPage)}
                    className="rounded-xl bg-rose-600 text-white hover:bg-rose-700"
                  >
                    Retry Loading Articles
                  </Button>
                </div>
              ) : filteredBlogs.length === 0 ? (
                <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center space-y-3 my-8">
                  <p className="text-base font-semibold text-slate-800">No articles matched your criteria</p>
                  <p className="text-xs text-slate-500">
                    Try adjusting your search query or selecting a different topic tag.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedTag(null);
                    }}
                    className="rounded-xl border-slate-300"
                  >
                    Reset Filters
                  </Button>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredBlogs.map((blog) => (
                    <article
                      key={blog.id}
                      onClick={() => handleSelectBlog(blog)}
                      className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl cursor-pointer"
                    >
                      <div className="space-y-4">
                        {/* Image or High-Tech Gradient Banner */}
                        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 h-48 w-full">
                          {blog.featured_image ? (
                            <img
                              src={blog.featured_image}
                              alt={blog.title}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="h-full w-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-5 flex flex-col justify-between text-white">
                              <div className="flex items-center justify-between">
                                <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase backdrop-blur-xs">
                                  {blog.tags?.[0] || "Architecture"}
                                </span>
                                <BookOpen className="size-4 text-cyan-400" />
                              </div>
                              <span className="text-xs font-semibold text-slate-300 line-clamp-2">
                                {blog.title}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap items-center gap-1.5">
                          {blog.tags?.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                          {blog.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-xs sm:text-sm text-slate-500 line-clamp-3 leading-relaxed">
                          {blog.excerpt}
                        </p>
                      </div>

                      {/* Footer Details */}
                      <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span className="font-semibold text-slate-700">{blog.author_name}</span>
                          <span>{formatDate(blog.published_at)}</span>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-3 text-slate-400">
                            <span className="flex items-center gap-1">
                              <Clock className="size-3" />
                              {blog.read_time}m
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="size-3" />
                              {blog.views}
                            </span>
                          </div>

                          <span className="font-semibold text-blue-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                            <span>Read</span>
                            <ArrowRight className="size-3.5" />
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {data && data.total_pages > 1 && !searchQuery && !selectedTag && (
              <div className="mt-14 flex items-center justify-center gap-3 border-t border-slate-200 pt-8">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage <= 1 || loading}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer disabled:opacity-50"
                >
                  <ArrowLeft className="mr-1.5 size-4" />
                  <span>Previous</span>
                </Button>

                <div className="flex items-center gap-1.5">
                  {Array.from({ length: data.total_pages }, (_, i) => i + 1).map((pg) => (
                    <button
                      key={pg}
                      type="button"
                      onClick={() => setCurrentPage(pg)}
                      className={`size-9 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                        currentPage === pg
                          ? "bg-blue-600 text-white shadow-xs"
                          : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {pg}
                    </button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage >= data.total_pages || loading}
                  onClick={() => setCurrentPage((p) => Math.min(data.total_pages, p + 1))}
                  className="rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer disabled:opacity-50"
                >
                  <span>Next</span>
                  <ArrowRight className="ml-1.5 size-4" />
                </Button>
              </div>
            )}
          </div>
        </main>
      )}

      {/* Dark Footer */}
      <div className="dark bg-background text-foreground">
        <Footer />
      </div>

      {/* Consultation Modal */}
      <ConsultationModal
        open={consultationOpen}
        onOpenChange={setConsultationOpen}
        initialService={consultationService}
      />
    </div>
  );
}
