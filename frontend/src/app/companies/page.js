'use client';
import { useEffect, useState } from 'react';
import { getCompanies, deleteCompany } from '../../services/companyService';
import Link from 'next/link';

export default function CompaniesPage() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    try {
      const data = await getCompanies();
      setCompanies(data);
    } catch (error) {
      console.error('Failed to load companies authorization probably required', error);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure?')) {
      await deleteCompany(id);
      loadCompanies(); // Refresh list
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Companies</h1>
      <Link href="/companies/create">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
          Add New Company
        </button>
      </Link>
      
      <div className="grid gap-4">
        {companies.map((company) => (
          <div key={company._id} className="border p-4 rounded shadow flex justify-between">
            <div>
              <h2 className="font-bold">{company.name}</h2>
              <p>{company.address}</p>
              <p className="text-gray-500">{company.contactEmail}</p>
            </div>
            <button 
              onClick={() => handleDelete(company._id)}
              className="bg-red-500 text-white px-3 py-1 rounded self-center"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}