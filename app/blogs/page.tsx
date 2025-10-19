import { ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
}

const featuredPost: BlogPost = {
  id: "1",
  title: "The Ultimate Guide to Finding Your Perfect Boarding House",
  excerpt:
    "Discover the key factors to consider when searching for your ideal boarding house. From location to amenities, we cover everything you need to know.",
  author: "Sarah Johnson",
  date: "Oct 15, 2024",
  readTime: "8 min read",
  category: "Guide",
  image: "/boarding-house-guide.jpg",
}

const blogPosts: BlogPost[] = [
  {
    id: "2",
    title: "5 Tips for First-Time Boarders",
    excerpt:
      "Moving into a boarding house for the first time? Here are essential tips to make your transition smooth and comfortable.",
    author: "Michael Chen",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    category: "Tips",
    image: "/first-time-boarding-tips.jpg",
  },
  {
    id: "3",
    title: "How to Build Community in Your Boarding House",
    excerpt:
      "Creating meaningful connections with housemates can transform your boarding experience. Learn how to foster a positive community.",
    author: "Emma Wilson",
    date: "Oct 10, 2024",
    readTime: "6 min read",
    category: "Community",
    image: "/boarding-house-community.jpg",
  },
  {
    id: "4",
    title: "Budget-Friendly Boarding: Save Money Without Sacrificing Comfort",
    excerpt:
      "Find affordable boarding options that don't compromise on quality. We share strategies to maximize your budget.",
    author: "David Park",
    date: "Oct 8, 2024",
    readTime: "7 min read",
    category: "Budget",
    image: "/affordable-boarding-house.jpg",
  },
  {
    id: "5",
    title: "The Best Neighborhoods for Students",
    excerpt: "Explore the most popular neighborhoods for student boarding houses and what makes them special.",
    author: "Lisa Anderson",
    date: "Oct 5, 2024",
    readTime: "6 min read",
    category: "Location",
    image: "/student-neighborhoods.jpg",
  },
  {
    id: "6",
    title: "Sustainable Living in Shared Spaces",
    excerpt: "Learn how to live sustainably while sharing a boarding house with others. Small changes, big impact.",
    author: "James Martinez",
    date: "Oct 1, 2024",
    readTime: "5 min read",
    category: "Sustainability",
    image: "/sustainable-boarding-house.jpg",
  },
]

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">StayKos Blog</h1>
          <p className="text-lg text-muted-foreground">
            Stories, tips, and insights about boarding house living and community
          </p>
        </div>
      </div>

      {/* Featured Post */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-medium text-primary">{featuredPost.category}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <span>{featuredPost.readTime}</span>
              </div>
              <Button className="gap-2">
                Read Article
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="h-64 sm:h-80 bg-muted rounded-lg overflow-hidden">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground mb-8">Latest Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="mb-4 h-48 bg-muted rounded-lg overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-3">
                <span className="text-xs font-medium text-primary">{post.category}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                <span>{post.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
