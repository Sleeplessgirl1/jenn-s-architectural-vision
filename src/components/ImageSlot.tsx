interface ImageSlotProps {
  label: string;
  className?: string;
}

/** Espacio reservado donde la arquitecta colocará sus fotografías o planos. */
export function ImageSlot({ label, className = "" }: ImageSlotProps) {
  return (
    <div className={`image-slot ${className}`}>
      <span className="image-slot-label">{label}</span>
    </div>
  );
}
