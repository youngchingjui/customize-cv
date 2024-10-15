// app/update-cv/page.tsx
import UpdateCVForm from '@/components/UpdateCVForm';

export default function UpdateCV() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Your Master CV</h1>
      <UpdateCVForm />
    </div>
  );
}
