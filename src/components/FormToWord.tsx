import React, { useState } from 'react';
import { generateDocx } from '../utils/generate-docx';

const FormToWord = () => {
  const [formInput, setFormInput] = useState({
    title: '',
    content: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateDocx(formInput);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 space-y-4">
      <h1 className='text-3xl font-bold text-center mb-10'>Conversor de Form para Docx</h1>
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
        <input
          type="text"
          name="title"
          value={formInput.title}
          onChange={handleChange}
          placeholder="Digite o título aqui"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Conteúdo</label>
        <input
          type="text"
          name="content"
          value={formInput.content}
          onChange={handleChange}
          placeholder="Digite o conteúdo aqui"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Gerar Word
      </button>
    </form>
  );
};

export default FormToWord;
