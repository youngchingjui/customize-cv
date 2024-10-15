'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

// Define the schema for form validation
const formSchema = z.object({
  cvData: z.string().min(1, { message: 'CV data is required.' }),
});

export default function CvForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cvData: '',
    },
  });

  const handleSubmit = async (values: { cvData: string }) => {
    try {
      const response = await fetch('/api/update-cv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cvData: values.cvData, userId: 'your-user-id' }),
      });
      if (response.ok) {
        alert('CV updated successfully!');
      } else {
        alert('Failed to update CV.');
      }
    } catch (error) {
      console.error('Error updating CV:', error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="cvData"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CV Data</FormLabel>
              <FormControl>
                <Textarea
                  className="w-full p-2 border border-gray-300 rounded mb-4"
                  rows={10}
                  placeholder="Enter your CV data in JSON format"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          Update CV
        </Button>
      </form>
    </Form>
  );
}
