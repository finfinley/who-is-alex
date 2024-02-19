'use client';
import { useFormStatus } from 'react-dom';

export function FormButtons({ onClose }: { onClose: () => void }) {
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-row justify-center">
      <div className="p-3">
        <input type="submit" value="Sign!" disabled={pending} />
      </div>
      <div className="p-3">
        <input type="button" value="Close" onClick={onClose} disabled={pending} />
      </div>
    </div>
  );
}
