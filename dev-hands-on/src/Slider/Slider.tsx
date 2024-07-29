import React, { useState } from "react";
import Carousel from "./Carousel";

const slides = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1679850625638-b055ae0ed409?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "First Slide",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1597172984973-fa1a221fe91d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Second Slide",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1577774438656-768f1e5d9ed6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Third Slide",
  },
];

const ImageCarousel: React.FC = () => {
  return (
    <div>
      <h1>Image Carousel</h1>
      <Carousel slides={slides} />
    </div>
  );
};

export default ImageCarousel;
