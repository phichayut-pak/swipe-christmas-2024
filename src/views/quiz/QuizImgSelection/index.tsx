import Image from "next/image";
import React from "react";

type QuizImageSelectionProps = {
  isSelected: boolean;
  onClick: () => void;
  src: string;
};

function QuizImageSelection({
  isSelected,
  onClick,
  src,
}: QuizImageSelectionProps) {
  return (
    <Image
      priority
      alt={src}
      src={src}
      width={80}
      height={100}
      style={{ width: 80, height: 100 }}
      onClick={onClick}
      className={isSelected ? "border-4 border-orange-300	rounded-lg" : ""}
    />
  );
}

export default QuizImageSelection;
