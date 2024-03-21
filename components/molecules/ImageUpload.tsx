import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
  disabled: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}
const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const onUpload = () => {};
  if (!isMounted) return null;
  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map((url, index) => (
          <div
            key={`img-${index}`}
            className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
          >
            <div className="z-10 absolute top-2 right-2">
              <Button
                type="button"
                onClick={() => {
                  onRemove(url);
                }}
                variant="destructive"
                size="icon"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <Image fill className="object-cover" alt="Image" src={url} />
          </div>
        ))}
      </div>
      {/* TODO upload image */}
    </div>
  );
};

export default ImageUpload;
