
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { BookOpen, Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeedCardProps {
  post: {
    id: string;
    user: {
      name: string;
      avatar: string;
      handle: string;
    };
    content: string;
    image?: string;
    topic: string;
    likes: number;
    comments: number;
    time: string;
    isLiked?: boolean;
  };
}

export default function FeedCard({ post }: FeedCardProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };
  
  const shouldTruncate = post.content.length > 280;
  const truncatedContent = shouldTruncate && !isExpanded 
    ? post.content.slice(0, 280) + '...' 
    : post.content;
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md border-none bg-card">
      <CardHeader className="pb-3 pt-6 px-6 flex flex-row items-start gap-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={post.user.avatar} alt={post.user.name} />
          <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-0.5">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">{post.user.name}</div>
              <div className="text-sm text-muted-foreground">@{post.user.handle}</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">{post.time}</span>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="px-6 pt-2 pb-4">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-secondary/70 rounded-full text-xs font-medium mb-3">
            {post.topic}
          </span>
          <p className="text-sm leading-relaxed">{truncatedContent}</p>
          
          {shouldTruncate && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-accent hover:underline text-sm mt-2"
            >
              {isExpanded ? "Ver menos" : "Ver mais"}
            </button>
          )}
        </div>
        
        {post.image && (
          <div className="mt-3 overflow-hidden rounded-lg">
            <img 
              src={post.image} 
              alt="Post attachment" 
              className="w-full h-auto object-cover transition-transform hover:scale-[1.02] duration-300 ease-in-out" 
            />
          </div>
        )}
      </CardContent>
      
      <CardFooter className="px-6 py-4 border-t flex justify-between">
        <Button 
          variant="ghost" 
          size="sm" 
          className={cn(
            "gap-2 text-muted-foreground", 
            isLiked && "text-accent"
          )}
          onClick={toggleLike}
        >
          <Heart className={cn(
            "h-4 w-4 transition-all", 
            isLiked && "fill-accent"
          )} />
          {likeCount > 0 && <span className="text-xs">{likeCount}</span>}
        </Button>
        
        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
          <MessageCircle className="h-4 w-4" />
          {post.comments > 0 && <span className="text-xs">{post.comments}</span>}
        </Button>
        
        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
          <BookOpen className="h-4 w-4" />
          <span className="text-xs">Ler</span>
        </Button>
        
        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
          <Share2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
