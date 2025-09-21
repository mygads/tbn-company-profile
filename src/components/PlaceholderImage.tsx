interface PlaceholderImageProps {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
  aspectRatio?: 'square' | '4/3' | '16/9' | 'auto';
}

export default function PlaceholderImage({ 
  width = 400, 
  height = 300, 
  text = "Image", 
  className = "",
  aspectRatio = 'auto'
}: PlaceholderImageProps) {
  const aspectClasses = {
    'square': 'aspect-square',
    '4/3': 'aspect-[4/3]',
    '16/9': 'aspect-video',
    'auto': ''
  };

  return (
    <div 
      className={`
        bg-gradient-to-br from-gray-200 to-gray-300 
        rounded-lg 
        flex items-center justify-center 
        ${aspectClasses[aspectRatio]}
        ${className}
      `}
      style={aspectRatio === 'auto' ? { width, height } : {}}
    >
      <div className="text-gray-500 font-medium text-center">
        <svg 
          className="w-12 h-12 mx-auto mb-2 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
        <div className="text-sm">{text}</div>
      </div>
    </div>
  );
}