import React, { FC, useState } from "react";

const ImageData = [
  {
    id: 0,
    source: `https://www.stockvault.net/data/2019/10/07/269936/thumb16.jpg`,
  },
  {
    id: 1,
    source: `https://www.stockvault.net/data/2019/09/10/269432/thumb16.jpg`,
  },
  {
    id: 2,
    source: `https://www.stockvault.net/data/2019/07/08/266697/thumb16.jpg`,
  },
  {
    id: 3,
    source: `https://www.stockvault.net/data/2011/02/21/117750/thumb16.jpg`,
  },
  {
    id: 4,
    source: `https://www.stockvault.net/data/2020/01/12/272456/thumb16.jpg`,
  },
];
export const ImageCarousel: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const MAX = ImageData.length - 1;
  const [currentImagePath, setCurrentImagePath] = useState(ImageData[0].source);
  const handleNexSelectImage = () => {
    const nextImage = ImageData[selectedIndex + 1];
    if (!nextImage) return;
    setSelectedIndex((selectedIndex) => (selectedIndex = nextImage.id));
    setCurrentImagePath(
      (currentImagePath) => (currentImagePath = nextImage.source)
    );
  };
  const handlePrevSelectImage = () => {
    const prevImage = ImageData[selectedIndex - 1];
    if (!prevImage) return;
    setSelectedIndex((selectedIndex) => (selectedIndex = prevImage.id));
    setCurrentImagePath(
      (currentImagePath) => (currentImagePath = prevImage.source)
    );
  };
  console.log("img path", selectedIndex, MAX);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: "30px",
        margin: "auto",
        justifyContent: "center",
      }}
    >
      <button
        style={{
          width: "100px",
          height: "40px",
          border: "1px solid #5555",
          margin: "auto",
          cursor: selectedIndex === 0 ? "not-allowed" : "pointer",
          opacity: selectedIndex === 0 ? "0.5" : "",
        }}
        onClick={handlePrevSelectImage}
      >
        Prev
      </button>
      <div style={{ width: "800px", height: "400px", background: "#5555" }}>
        <img
          src={currentImagePath}
          style={{ width: "800px", height: "400px", background: "#5555" }}
        />
      </div>
      <button
        style={{
          width: "100px",
          height: "40px",
          border: "1px solid #5555",
          margin: "auto",
          cursor: selectedIndex < MAX ? "pointer" : "not-allowed",
          opacity: selectedIndex < MAX ? "" : "0.5",
        }}
        onClick={handleNexSelectImage}
      >
        Next
      </button>
    </div>
  );
};
