import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#8B4513]/10 mt-auto">
      <div className="content-container py-8">
        <div className="flex justify-center items-center">
          {/* Copyright */}
          <div className="text-muted-foreground">
            Timothy Edison 2025
          </div>
        </div>
      </div>
    </footer>
  );
}