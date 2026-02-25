"use client";

import { Button } from "@/components/ui/button";
import { Share2, Twitter, Facebook, Linkedin, Link2, Check } from "lucide-react";
import { useState, useEffect } from "react";

interface ShareButtonsProps {
  title?: string;
  text?: string;
  url?: string;
}

export function ShareButtons({
  title = "Loyer Légal",
  text = "J'ai découvert que je payais trop cher mon loyer ! Vérifiez le vôtre gratuitement.",
  url: initialUrl,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("https://loyerlegal.be");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(initialUrl || window.location.href);
      setCanShare(!!navigator.share);
    }
  }, [initialUrl]);

  const shareData = {
    title,
    text,
    url: currentUrl,
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Share cancelled");
      }
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    text
  )}&url=${encodeURIComponent(currentUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentUrl
  )}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    currentUrl
  )}`;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm text-[#86868B] mr-2">Partager :</span>

      {canShare && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleNativeShare}
          className="gap-2 rounded-full border-black/10 hover:bg-black/5"
        >
          <Share2 className="w-4 h-4" />
          Partager
        </Button>
      )}

      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(twitterUrl, "_blank")}
        className="gap-2 rounded-full border-black/10 hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/20"
      >
        <Twitter className="w-4 h-4" />
        Twitter
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(facebookUrl, "_blank")}
        className="gap-2 rounded-full border-black/10 hover:bg-[#1877F2]/10 hover:text-[#1877F2] hover:border-[#1877F2]/20"
      >
        <Facebook className="w-4 h-4" />
        Facebook
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(linkedinUrl, "_blank")}
        className="gap-2 rounded-full border-black/10 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] hover:border-[#0A66C2]/20"
      >
        <Linkedin className="w-4 h-4" />
        LinkedIn
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={handleCopyLink}
        className="gap-2 rounded-full border-black/10 hover:bg-black/5"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-[#34C759]" />
            <span className="text-[#34C759]">Copié !</span>
          </>
        ) : (
          <>
            <Link2 className="w-4 h-4" />
            Copier
          </>
        )}
      </Button>
    </div>
  );
}
