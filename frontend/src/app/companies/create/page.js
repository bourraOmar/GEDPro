'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createCompany } from '../../../services/companyService';

export default function CreateCompanyPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contactEmail: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCompany(formData);
      router.push('/companies'); // Redirect to list
    } catch (error) {
      alert('Error creating company');
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Company</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Company Name"
          className="border p-2 rounded"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="Address"
          className="border p-2 rounded"
          value={formData.address}
          onChange={(e) => setFormData({...formData, address: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Contact Email"
          className="border p-2 rounded"
          value={formData.contactEmail}
          onChange={(e) => setFormData({...formData, contactEmail: e.target.value})}
          required
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          Save
        </button>
      </form>
    </div>
  );
}