import React, { useState } from 'react';
import { Input } from '@common/Form/Input';
import { Radio } from '@common/Form/Radio';
import { Select } from '@common/Form/Select';
import { Textarea } from '@common/Form/Textarea';

const SampleForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    feedback: '',
    country: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <div>
        <label>Gender</label>
        <Radio
          label="Male"
          name="gender"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleChange}
        />
        <Radio
          label="Female"
          name="gender"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleChange}
        />
      </div>
      <Textarea
        label="Feedback"
        name="feedback"
        value={formData.feedback}
        onChange={handleChange}
      />
      <Select
        label="Country"
        name="country"
        options={[
          { value: '', label: 'Select a country' },
          { value: 'us', label: 'United States' },
          { value: 'kr', label: 'South Korea' },
        ]}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SampleForm;
